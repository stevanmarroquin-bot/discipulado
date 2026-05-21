import { Discipulo, RegistroSemanal } from './mock-data'

export type NivelSalud = 'verde' | 'amarillo' | 'rojo'

export interface DesgloseSalud {
  reunion: number      // 0–35
  domingo: number      // 0–20
  material: number     // 0–20
  participacion: number // 0–15
  consistencia: number  // 0–10
  total: number        // 0–100
}

export interface EstadisticasDiscipulo {
  discipulo: Discipulo
  registros: RegistroSemanal[]
  desglose: DesgloseSalud
  salud: NivelSalud
  rachaActual: number
  ultimasSemanas: { reunion: boolean; domingo: boolean }[]
}

export interface SaludGrupo {
  nivel: NivelSalud
  score: number
  label: string
}

// ─── Fórmula de salud (5 factores) ───────────────────────────────────────────
// Reunión      35%   Asistencia a la reunión de discipulado
// Domingo      20%   Asistencia al servicio dominical
// Material     20%   Completó el material ANTES de la reunión
// Participación 15%  Nivel de participación cuando asiste
// Consistencia 10%   Racha de semanas seguidas sin faltar (max 4 semanas = 100%)
// ─────────────────────────────────────────────────────────────────────────────

export function calcularDesglose(registros: RegistroSemanal[]): DesgloseSalud {
  if (registros.length === 0) {
    return { reunion: 0, domingo: 0, material: 0, participacion: 0, consistencia: 0, total: 0 }
  }

  const recent = [...registros]
    .sort((a, b) => new Date(a.semana).getTime() - new Date(b.semana).getTime())
    .slice(-8)

  const total = recent.length

  // 1. Reunión (35%)
  const tasaReunion = recent.filter((r) => r.asistioReunion).length / total
  const puntosReunion = tasaReunion * 35

  // 2. Domingo (20%)
  const tasaDomingo = recent.filter((r) => r.asistiodomingo).length / total
  const puntosDomingo = tasaDomingo * 20

  // 3. Material previo (20%) — sobre los que asistieron
  const asistidos = recent.filter((r) => r.asistioReunion)
  const tasaMaterial =
    asistidos.length > 0
      ? asistidos.filter((r) => r.completoMaterial).length / asistidos.length
      : 0
  const puntosMaterial = tasaMaterial * 20

  // 4. Participación (15%) — alta=1, media=0.6, baja=0.2
  const mapPart: Record<string, number> = { alta: 1, media: 0.6, baja: 0.2 }
  const conPart = asistidos.filter((r) => r.participacion)
  const tasaPart =
    asistidos.length > 0 && conPart.length > 0
      ? conPart.reduce((acc, r) => acc + (mapPart[r.participacion!] ?? 0), 0) / asistidos.length
      : 0
  const puntosParticipacion = tasaPart * 15

  // 5. Consistencia — racha de semanas seguidas (10%, máx 4 semanas)
  const desc = [...recent].sort(
    (a, b) => new Date(b.semana).getTime() - new Date(a.semana).getTime()
  )
  let racha = 0
  for (const r of desc) {
    if (r.asistioReunion) racha++
    else break
  }
  const puntosConsistencia = Math.min(racha / 4, 1) * 10

  const scoreTotal = Math.round(
    puntosReunion + puntosDomingo + puntosMaterial + puntosParticipacion + puntosConsistencia
  )

  return {
    reunion: Math.round(puntosReunion),
    domingo: Math.round(puntosDomingo),
    material: Math.round(puntosMaterial),
    participacion: Math.round(puntosParticipacion),
    consistencia: Math.round(puntosConsistencia),
    total: scoreTotal,
  }
}

function calcularRacha(registros: RegistroSemanal[]): number {
  const sorted = [...registros].sort(
    (a, b) => new Date(b.semana).getTime() - new Date(a.semana).getTime()
  )
  let racha = 0
  for (const r of sorted) {
    if (r.asistioReunion) racha++
    else break
  }
  return racha
}

export function calcularEstadisticasDiscipulo(
  discipulo: Discipulo,
  todosRegistros: RegistroSemanal[]
): EstadisticasDiscipulo {
  const registros = todosRegistros
    .filter((r) => r.discipuloId === discipulo.id)
    .sort((a, b) => new Date(a.semana).getTime() - new Date(b.semana).getTime())

  const desglose = calcularDesglose(registros)

  let salud: NivelSalud = 'verde'
  if (desglose.total < 50) salud = 'rojo'
  else if (desglose.total < 72) salud = 'amarillo'

  const ultimas4 = registros.slice(-4).map((r) => ({
    reunion: r.asistioReunion,
    domingo: r.asistiodomingo,
  }))

  return {
    discipulo,
    registros,
    desglose,
    salud,
    rachaActual: calcularRacha(registros),
    ultimasSemanas: ultimas4,
  }
}

export function calcularSaludGrupo(estadisticas: EstadisticasDiscipulo[]): SaludGrupo {
  if (estadisticas.length === 0) return { nivel: 'verde', score: 0, label: 'Sin datos' }
  const score =
    estadisticas.reduce((acc, e) => acc + e.desglose.total, 0) / estadisticas.length
  if (score >= 72) return { nivel: 'verde', score, label: 'Saludable' }
  if (score >= 50) return { nivel: 'amarillo', score, label: 'En Proceso' }
  return { nivel: 'rojo', score, label: 'Necesita Atención' }
}

export function formatearSemana(isoDate: string): string {
  const date = new Date(isoDate + 'T12:00:00')
  return date.toLocaleDateString('es-GT', { day: 'numeric', month: 'short', year: 'numeric' })
}
