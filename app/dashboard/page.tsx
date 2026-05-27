'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SEMANAS_DISPONIBLES } from '@/lib/mock-data'
import {
  calcularEstadisticasDiscipulo,
  calcularSaludGrupo,
  EstadisticasDiscipulo,
  NivelSalud,
  DesgloseSalud,
  formatearSemana,
} from '@/lib/utils'
import { onAuthChange } from '@/lib/auth'
import { getDiscipulosDeLider, getRegistrosDeLider, PerfilDiscipulo } from '@/lib/db'
import { RegistroSemanal } from '@/lib/mock-data'
import Link from 'next/link'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'

const SALUD_COLOR: Record<NivelSalud, string> = {
  verde: 'var(--green)', amarillo: 'var(--yellow)', rojo: 'var(--red)',
}
const SALUD_BG: Record<NivelSalud, string> = {
  verde: 'var(--green-bg)', amarillo: 'var(--yellow-bg)', rojo: 'var(--red-bg)',
}
const SALUD_LABEL: Record<NivelSalud, string> = {
  verde: 'Saludable', amarillo: 'En Proceso', rojo: 'Necesita Atención',
}
const SALUD_DOT: Record<NivelSalud, string> = {
  verde: '#22c55e', amarillo: '#f59e0b', rojo: '#ef4444',
}
const MAXIMOS: Record<keyof Omit<DesgloseSalud, 'total'>, number> = {
  reunion: 35, domingo: 20, material: 20, participacion: 15, consistencia: 10,
}
const FACTOR_LABEL: Record<keyof Omit<DesgloseSalud, 'total'>, string> = {
  reunion: 'Discipulado', domingo: 'Domingo', material: 'Material',
  participacion: 'Participación', consistencia: 'Consistencia',
}

export default function DashboardPage() {
  const router = useRouter()
  const [liderUid, setLiderUid]       = useState<string | null>(null)
  const [liderNombre, setLiderNombre] = useState('')
  const [discipulos, setDiscipulos]   = useState<PerfilDiscipulo[]>([])
  const [registros, setRegistros]     = useState<RegistroSemanal[]>([])
  const [loading, setLoading]         = useState(true)
  const [showFormula, setShowFormula] = useState(false)

  useEffect(() => {
    const unsub = onAuthChange(async (user) => {
      if (!user) return
      setLiderUid(user.uid)
      const [discs, regs] = await Promise.all([
        getDiscipulosDeLider(user.uid),
        getRegistrosDeLider(user.uid),
      ])
      setDiscipulos(discs)
      setRegistros(regs)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  // Get nombre from layout perfil via DOM — simplest approach
  useEffect(() => {
    const raw = document.cookie // not needed, we get it from Firebase
  }, [])

  if (loading) return null

  // Adapt PerfilDiscipulo to Discipulo shape expected by utils
  const discipulosAdapted = discipulos.map((d) => ({
    id: d.uid,
    nombre: d.nombre,
    email: d.email,
    password: '',
    telefono: d.telefono,
    fechaInicio: d.fechaInicio,
    iniciales: d.iniciales,
    discipuladorId: d.discipuladorId,
    color: d.color,
    moduloActual: d.moduloActual as 'fundamento' | 'formacion' | 'comunidad' | 'mision',
  }))

  const stats: EstadisticasDiscipulo[] = discipulosAdapted.map((d) =>
    calcularEstadisticasDiscipulo(d, registros)
  )

  const saludGrupo      = calcularSaludGrupo(stats)
  const promedioScore   = stats.length > 0
    ? Math.round(stats.reduce((a, s) => a + s.desglose.total, 0) / stats.length) : 0
  const necesitanAtencion = stats.filter((s) => s.salud !== 'verde').length
  const hora = new Date().getHours()
  const saludo = hora < 12 ? 'Buenos días' : hora < 19 ? 'Buenas tardes' : 'Buenas noches'

  const discipuloIds = discipulosAdapted.map((d) => d.id)
  const grupoChartData = SEMANAS_DISPONIBLES.slice(-8).map((semana) => {
    const regsDelGrupo = registros.filter(
      (r) => discipuloIds.includes(r.discipuloId) && r.semana === semana
    )
    const total     = discipuloIds.length
    const asistieron = regsDelGrupo.filter((r) => r.asistioReunion).length
    const domingo    = regsDelGrupo.filter((r) => r.asistiodomingo).length
    return {
      semana: formatearSemana(semana),
      reunion: total > 0 ? Math.round((asistieron / total) * 100) : 0,
      domingo: total > 0 ? Math.round((domingo   / total) * 100) : 0,
    }
  })

  return (
    <div className="page-pad" style={{ padding: '36px', maxWidth: '1140px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.04em', marginBottom: '4px' }}>
          {saludo}
        </p>
        <h1 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text)', marginBottom: '4px' }}>
          Mi grupo
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Bread of Life Guatemala &nbsp;·&nbsp; Programa de Discipulado
        </p>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '14px', marginBottom: '28px' }}>
        <StatCard label="Discípulos" value={stats.length} sub="a tu cargo" accent="var(--text)" />

        {/* Salud promedio con fórmula */}
        <div className="card" style={{ padding: '22px', position: 'relative' }}>
          <p style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Salud promedio
          </p>
          <p style={{ fontSize: '28px', fontWeight: '900', color: SALUD_DOT[saludGrupo.nivel], marginBottom: '4px', lineHeight: 1 }}>
            {promedioScore}/100
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>{saludGrupo.label}</p>
          <button onClick={() => setShowFormula((v) => !v)} style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            fontSize: '11px', color: 'var(--primary)', fontWeight: '700',
            display: 'flex', alignItems: 'center', gap: '3px',
          }}>
            ¿Cómo se calcula?
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
              style={{ transition: 'transform .2s', transform: showFormula ? 'rotate(180deg)' : 'none' }}>
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {showFormula && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, zIndex: 20,
              background: 'white', borderRadius: '12px', marginTop: '6px',
              boxShadow: '0 4px 20px rgba(0,0,0,.12)', border: '1px solid var(--border)',
              padding: '16px', width: '260px',
            }}>
              <p style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Fórmula (sobre 100 pts)
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '12px' }}>
                <tbody>
                  {[
                    ['Asistencia al discipulado', 35],
                    ['Asistencia domingo', 20],
                    ['Material previo', 20],
                    ['Participación', 15],
                    ['Consistencia / racha', 10],
                  ].map(([label, pts]) => (
                    <tr key={label as string} style={{ borderBottom: '1px solid var(--bg)' }}>
                      <td style={{ fontSize: '12px', color: 'var(--text)', padding: '5px 0' }}>{label}</td>
                      <td style={{ fontSize: '13px', fontWeight: '800', color: 'var(--primary)', textAlign: 'right', padding: '5px 0' }}>{pts} pts</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {[
                  { dot: '#22c55e', text: '≥ 72 · Saludable' },
                  { dot: '#f59e0b', text: '50–71 · En Proceso' },
                  { dot: '#ef4444', text: '< 50 · Necesita Atención' },
                ].map((t) => (
                  <span key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: t.dot, flexShrink: 0, display: 'inline-block' }} />
                    {t.text}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <StatCard label="Necesitan atención" value={necesitanAtencion}
          sub={necesitanAtencion === 0 ? '¡Todos van bien!' : 'en amarillo o rojo'}
          accent={necesitanAtencion === 0 ? '#22c55e' : '#ef4444'} />
        <StatCard
          label="Racha más larga"
          value={`${Math.max(0, ...stats.map((s) => s.rachaActual))} sem.`}
          sub="semanas seguidas" accent="var(--primary)" />
      </div>

      {/* Disciple table */}
      <div className="card" style={{ overflow: 'hidden', marginBottom: '20px' }}>
        <div style={{
          padding: '20px 26px', borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
        }}>
          <div>
            <h2 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text)', marginBottom: '2px' }}>Mis discípulos</h2>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Haz clic en un discípulo para ver su perfil completo</p>
          </div>
          <Link href="/dashboard/registro" style={{
            padding: '9px 18px', background: 'var(--text)', color: 'white',
            borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none',
          }}>
            + Registro semanal
          </Link>
        </div>

        {stats.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: 'var(--text-muted)' }}>
            No hay discípulos registrados aún.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg)' }}>
                  {['Discípulo', 'Salud', 'Desglose', 'Últimas 4 sesiones', 'Estado'].map((h) => (
                    <th key={h} style={{
                      padding: '11px 18px', fontSize: '10px', fontWeight: '800',
                      color: 'var(--text-muted)', textAlign: 'left',
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stats.map((s, idx) => (
                  <tr key={s.discipulo.id} className="disciple-row"
                    onClick={() => router.push(`/dashboard/discipulos/${s.discipulo.id}`)}
                    style={{ borderTop: idx === 0 ? 'none' : '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 18px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                        <div style={{
                          width: '38px', height: '38px', borderRadius: '50%',
                          background: s.discipulo.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'white', fontSize: '12px', fontWeight: '800', flexShrink: 0,
                        }}>{s.discipulo.iniciales}</div>
                        <div>
                          <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '1px' }}>{s.discipulo.nombre}</p>
                          <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                            {s.rachaActual > 0 ? `${s.rachaActual} sem. seguidas` : 'Sin racha activa'}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '16px 18px' }}>
                      <ScoreRing score={s.desglose.total} salud={s.salud} />
                    </td>
                    <td style={{ padding: '16px 18px', minWidth: '200px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {(Object.keys(MAXIMOS) as (keyof typeof MAXIMOS)[]).map((key) => {
                          const val = s.desglose[key]
                          const max = MAXIMOS[key]
                          const pct = Math.round((val / max) * 100)
                          return (
                            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ fontSize: '9px', color: 'var(--text-muted)', width: '68px', flexShrink: 0, fontWeight: '600' }}>
                                {FACTOR_LABEL[key]}
                              </span>
                              <div style={{ flex: 1, height: '5px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                                <div style={{
                                  height: '100%', width: `${pct}%`,
                                  background: pct >= 75 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444',
                                  borderRadius: '3px',
                                }} />
                              </div>
                              <span style={{ fontSize: '9px', color: 'var(--text-muted)', width: '26px', textAlign: 'right', fontWeight: '700' }}>
                                {val}/{max}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </td>
                    <td style={{ padding: '16px 18px' }}>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        {s.ultimasSemanas.map((sem, i) => (
                          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'center' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: sem.reunion ? '#22c55e' : 'var(--border)' }} />
                            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: sem.domingo ? 'var(--primary)' : 'var(--border)' }} />
                          </div>
                        ))}
                        {Array.from({ length: Math.max(0, 4 - s.ultimasSemanas.length) }).map((_, i) => (
                          <div key={`e-${i}`} style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'center' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--border)' }} />
                            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'var(--border)' }} />
                          </div>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: '16px 18px' }}>
                      <span style={{
                        padding: '5px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '800',
                        background: SALUD_BG[s.salud], color: SALUD_COLOR[s.salud],
                      }}>
                        {SALUD_LABEL[s.salud]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Group trend chart */}
      {grupoChartData.length > 0 && stats.length > 0 && (
        <div className="card" style={{ padding: '22px 26px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', marginBottom: '3px' }}>Tendencia del grupo</h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' }}>% de asistencia a discipulado y domingo por semana</p>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={grupoChartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gradReunion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradDomingo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="semana" tick={{ fontSize: 9, fill: 'var(--text-muted)' }}
                axisLine={false} tickLine={false} interval={0} angle={-20} textAnchor="end" height={36} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
                axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{ background: 'white', border: '1px solid var(--border)', borderRadius: '10px', fontSize: '12px' }}
                formatter={(v: unknown, name: unknown) => [`${v}%`, name === 'reunion' ? 'Discipulado' : 'Domingo']}
              />
              <Area type="monotone" dataKey="reunion" stroke="#22c55e" strokeWidth={2} fill="url(#gradReunion)" dot={{ r: 3, fill: '#22c55e' }} />
              <Area type="monotone" dataKey="domingo" stroke="var(--primary)" strokeWidth={2} fill="url(#gradDomingo)" dot={{ r: 3, fill: 'var(--primary)' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Notas recientes */}
      {stats.some((s) => s.registros.some((r) => r.notas)) && (
        <div className="card" style={{ padding: '20px 26px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', marginBottom: '14px' }}>Notas recientes</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {stats.flatMap((s) =>
              s.registros.filter((r) => r.notas).slice(-1).map((r) => (
                <div key={r.id} onClick={() => router.push(`/dashboard/discipulos/${s.discipulo.id}`)}
                  style={{ display: 'flex', gap: '12px', padding: '12px', background: 'var(--bg)', borderRadius: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%', background: s.discipulo.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '11px', fontWeight: '800', flexShrink: 0,
                  }}>{s.discipulo.iniciales}</div>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)', marginBottom: '2px' }}>{s.discipulo.nombre}</p>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{r.notas}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value, sub, accent }: { label: string; value: string | number; sub: string; accent: string }) {
  return (
    <div className="card" style={{ padding: '22px' }}>
      <p style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>{label}</p>
      <p style={{ fontSize: '28px', fontWeight: '900', color: accent, marginBottom: '4px', lineHeight: 1 }}>{value}</p>
      <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{sub}</p>
    </div>
  )
}

function ScoreRing({ score, salud }: { score: number; salud: NivelSalud }) {
  const size = 44; const r = 17
  const circ = 2 * Math.PI * r
  const fill = (score / 100) * circ
  const color = SALUD_DOT[salud]
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth="4" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="4"
          strokeDasharray={`${fill} ${circ}`} strokeLinecap="round" />
      </svg>
      <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '11px', fontWeight: '900', color: 'var(--text)' }}>
        {score}
      </span>
    </div>
  )
}
