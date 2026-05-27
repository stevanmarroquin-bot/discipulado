'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CONTENIDO, MODULOS, RegistroSemanal } from '@/lib/mock-data'
import { calcularEstadisticasDiscipulo, formatearSemana, NivelSalud } from '@/lib/utils'
import { onAuthChange } from '@/lib/auth'
import { getPerfil, getRegistrosDeDiscipulo, PerfilDiscipulo } from '@/lib/db'

const SALUD_COLOR: Record<NivelSalud, string> = {
  verde: 'var(--green)', amarillo: 'var(--yellow)', rojo: 'var(--red)',
}
const SALUD_BG: Record<NivelSalud, string> = {
  verde: 'var(--green-bg)', amarillo: 'var(--yellow-bg)', rojo: 'var(--red-bg)',
}
const SALUD_LABEL: Record<NivelSalud, string> = {
  verde: 'Vas muy bien', amarillo: 'Sigue adelante', rojo: 'Te extrañamos',
}
const SALUD_DOT: Record<NivelSalud, string> = {
  verde: '#22c55e', amarillo: '#f59e0b', rojo: '#ef4444',
}

export default function DiscipuloPortal() {
  const router = useRouter()
  const [perfil, setPerfil] = useState<PerfilDiscipulo | null>(null)
  const [registros, setRegistros] = useState<RegistroSemanal[]>([])

  useEffect(() => {
    const unsub = onAuthChange(async (user) => {
      if (!user) { router.replace('/login'); return }
      const p = await getPerfil(user.uid)
      if (!p || p.tipo !== 'discipulo') { router.replace('/dashboard'); return }
      const regs = await getRegistrosDeDiscipulo(user.uid)
      setPerfil(p as PerfilDiscipulo)
      setRegistros(regs)
    })
    return () => unsub()
  }, [router])

  if (!perfil) return null

  // Adapt PerfilDiscipulo (uid) → Discipulo (id) shape for utils
  const discipuloAdapted = { ...perfil, id: perfil.uid, password: '', moduloActual: perfil.moduloActual as import('@/lib/mock-data').ModuloCurriculo | undefined }
  const stats = calcularEstadisticasDiscipulo(discipuloAdapted, registros)
  const modulo = MODULOS.find((m) => m.id === perfil.moduloActual)
  const sesionesModulo = CONTENIDO.filter(
    (c) => c.categoria === 'material-base' && c.modulo === perfil.moduloActual
  )

  const misRegistros = registros
    .sort((a, b) => new Date(b.semana).getTime() - new Date(a.semana).getTime())
    .slice(0, 6)

  const hora = new Date().getHours()
  const saludo = hora < 12 ? 'Buenos días' : hora < 19 ? 'Buenas tardes' : 'Buenas noches'

  return (
    <div className="page-pad" style={{ maxWidth: '720px', margin: '0 auto', padding: '36px 24px' }}>

      {/* Welcome header */}
      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '4px' }}>
          {saludo}
        </p>
        <h1 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text)', marginBottom: '6px' }}>
          {perfil.nombre.split(' ')[0]} 👋
        </h1>
        <span style={{
          display: 'inline-block', padding: '4px 14px', borderRadius: '20px',
          fontSize: '12px', fontWeight: '800',
          background: SALUD_BG[stats.salud], color: SALUD_COLOR[stats.salud],
        }}>
          {SALUD_LABEL[stats.salud]}
        </span>
      </div>

      {/* Score + stats */}
      <div className="card" style={{ padding: '28px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Score ring */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <ScoreRing score={stats.desglose.total} salud={stats.salud} size={100} />
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textAlign: 'center' }}>
              Salud general
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', flex: 1, minWidth: '200px' }}>
            <MiniStat
              label="Racha actual"
              value={stats.rachaActual > 0 ? `${stats.rachaActual} sem.` : '—'}
              sub="semanas seguidas"
              color="var(--primary)"
              icon="🔥"
            />
            <MiniStat
              label="Asistencia"
              value={`${misRegistros.filter(r => r.asistioReunion).length}/${misRegistros.length}`}
              sub="últimas sesiones"
              color="#22c55e"
              icon="✓"
            />
            <MiniStat
              label="Domingos"
              value={`${misRegistros.filter(r => r.asistiodomingo).length}/${misRegistros.length}`}
              sub="últimas semanas"
              color="#6366f1"
              icon="⛪"
            />
            <MiniStat
              label="Material"
              value={`${stats.desglose.material}/20`}
              sub="pts de preparación"
              color="#0891b2"
              icon="📖"
            />
          </div>
        </div>
      </div>

      {/* Current module material */}
      {modulo && sesionesModulo.length > 0 && (
        <div className="card" style={{ overflow: 'hidden', marginBottom: '20px' }}>
          <div style={{
            padding: '18px 22px', borderBottom: '1px solid var(--border)',
            borderLeft: `4px solid ${modulo.color}`,
            background: `${modulo.color}08`,
          }}>
            <p style={{ fontSize: '10px', fontWeight: '800', color: modulo.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>
              Tu módulo actual
            </p>
            <h2 style={{ fontSize: '17px', fontWeight: '900', color: 'var(--text)', margin: 0 }}>
              {modulo.nombre}
            </h2>
          </div>
          <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {sesionesModulo.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '11px 12px', borderRadius: '10px', background: 'var(--bg)',
                }}
              >
                <span style={{
                  width: '26px', height: '26px', borderRadius: '6px',
                  background: `${modulo.color}18`, color: modulo.color,
                  fontSize: '11px', fontWeight: '800',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {item.semana}
                </span>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: 'var(--text)', flex: 1 }}>
                  {item.titulo}
                </p>
                <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                  {item.videoUrl && (
                    <a href={item.videoUrl} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        padding: '5px 10px', borderRadius: '7px',
                        fontSize: '12px', fontWeight: '700', textDecoration: 'none',
                        background: '#fee2e2', color: '#dc2626',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                      </svg>
                      Video
                    </a>
                  )}
                  {item.audioUrl && (
                    <a href={item.audioUrl} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        padding: '5px 10px', borderRadius: '7px',
                        fontSize: '12px', fontWeight: '700', textDecoration: 'none',
                        background: '#f3e8ff', color: '#7c3aed',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Audio
                    </a>
                  )}
                  {item.url && item.url !== '#' && (
                    <a href={item.url} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        padding: '5px 10px', borderRadius: '7px',
                        fontSize: '12px', fontWeight: '700', textDecoration: 'none',
                        background: `${modulo.color}14`, color: modulo.color,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent history */}
      {misRegistros.length > 0 && (
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
              Mis últimas semanas
            </h2>
          </div>
          <div style={{ padding: '8px 16px 12px' }}>
            {misRegistros.map((r, i) => (
              <div
                key={r.id}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 6px',
                  borderBottom: i < misRegistros.length - 1 ? '1px solid var(--bg)' : 'none',
                }}
              >
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                  background: r.asistioReunion ? '#22c55e' : 'var(--border)',
                }} />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', width: '100px', flexShrink: 0 }}>
                  {formatearSemana(r.semana)}
                </span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: r.asistioReunion ? 'var(--text)' : 'var(--text-muted)', flex: 1 }}>
                  {r.asistioReunion ? 'Asistí al discipulado' : 'No asistí'}
                </span>
                <div style={{ display: 'flex', gap: '5px' }}>
                  {r.asistiodomingo && (
                    <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '10px', fontWeight: '700', background: 'var(--primary-lt)', color: 'var(--primary)' }}>
                      Domingo
                    </span>
                  )}
                  {r.completoMaterial && (
                    <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '10px', fontWeight: '700', background: 'var(--green-bg)', color: 'var(--green)' }}>
                      Material
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {misRegistros.length === 0 && (
        <div className="card" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '14px' }}>Aún no hay registros de tu asistencia.</p>
          <p style={{ fontSize: '12px', marginTop: '6px' }}>Tu líder los registra cada semana.</p>
        </div>
      )}
    </div>
  )
}

// ── Sub-components ──────────────────────────────────────────────────────────────

function ScoreRing({ score, salud, size = 44 }: { score: number; salud: NivelSalud; size?: number }) {
  const r = (size / 2) - 8
  const circ = 2 * Math.PI * r
  const fill = (score / 100) * circ
  const dot = SALUD_DOT[salud]
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth="6" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={dot} strokeWidth="6"
          strokeDasharray={`${fill} ${circ}`} strokeLinecap="round" />
      </svg>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}>
        <p style={{ margin: 0, fontSize: '22px', fontWeight: '900', color: 'var(--text)', lineHeight: 1 }}>
          {score}
        </p>
        <p style={{ margin: 0, fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600' }}>
          /100
        </p>
      </div>
    </div>
  )
}

function MiniStat({ label, value, sub, color, icon }: {
  label: string; value: string | number; sub: string; color: string; icon: string
}) {
  return (
    <div style={{
      padding: '14px 16px', background: 'var(--bg)', borderRadius: '12px',
    }}>
      <p style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
        {icon} {label}
      </p>
      <p style={{ fontSize: '20px', fontWeight: '900', color, lineHeight: 1, marginBottom: '3px' }}>
        {value}
      </p>
      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{sub}</p>
    </div>
  )
}
