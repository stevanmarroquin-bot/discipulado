'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { DISCIPULOS, RegistroSemanal, Usuario } from '@/lib/mock-data'
import { calcularEstadisticasDiscipulo, formatearSemana, NivelSalud } from '@/lib/utils'
import { getRegistros } from '@/lib/storage'

// ── Helpers ────────────────────────────────────────────────────────────────────

const SALUD_COLOR: Record<NivelSalud, string> = {
  verde: 'var(--green)', amarillo: 'var(--yellow)', rojo: 'var(--red)',
}
const SALUD_BG: Record<NivelSalud, string> = {
  verde: 'var(--green-bg)', amarillo: 'var(--yellow-bg)', rojo: 'var(--red-bg)',
}
const SALUD_LABEL: Record<NivelSalud, string> = {
  verde: 'Saludable', amarillo: 'En Proceso', rojo: 'Necesita Atención',
}

const MAXIMOS = { reunion: 35, domingo: 20, material: 20, participacion: 15, consistencia: 10 }
const FACTOR_LABEL = {
  reunion: 'Discipulado', domingo: 'Domingo', material: 'Material',
  participacion: 'Participación', consistencia: 'Consistencia',
}

/** Per-week score (out of 100, no streak factor) */
function weeklyScore(r: RegistroSemanal): number {
  let s = 0
  if (r.asistioReunion) s += 40
  if (r.asistiodomingo) s += 25
  if (r.completoMaterial && r.asistioReunion) s += 25
  if (r.participacion === 'alta') s += 10
  else if (r.participacion === 'media') s += 6
  else if (r.participacion === 'baja') s += 2
  return s
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function DiscipuloDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const [user, setUser] = useState<Usuario | null>(null)
  const [registros, setRegistros] = useState<RegistroSemanal[]>([])
  const [showFormula, setShowFormula] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem('discipulado_session')
    if (!raw) { router.replace('/login'); return }
    const u: Usuario = JSON.parse(raw)
    setUser(u)
    setRegistros(getRegistros(u.id))
  }, [router])

  const discipulo = DISCIPULOS.find((d) => d.id === id)

  useEffect(() => {
    if (user && discipulo && discipulo.discipuladorId !== user.id) {
      router.replace('/dashboard')
    }
  }, [user, discipulo, router])

  if (!user || !discipulo) return null

  const stats = calcularEstadisticasDiscipulo(discipulo, registros)
  const misRegistros = registros
    .filter((r) => r.discipuloId === id)
    .sort((a, b) => new Date(a.semana).getTime() - new Date(b.semana).getTime())

  const total = misRegistros.length
  const asistioReunion = misRegistros.filter((r) => r.asistioReunion).length
  const asistiodomingo = misRegistros.filter((r) => r.asistiodomingo).length
  const conMaterial = misRegistros.filter((r) => r.asistioReunion && r.completoMaterial).length
  const baseParaMaterial = misRegistros.filter((r) => r.asistioReunion).length
  const pctReunion = total > 0 ? Math.round((asistioReunion / total) * 100) : 0
  const pctDomingo = total > 0 ? Math.round((asistiodomingo / total) * 100) : 0
  const pctMaterial = baseParaMaterial > 0 ? Math.round((conMaterial / baseParaMaterial) * 100) : 0

  const chartData = misRegistros.map((r) => {
    const score = weeklyScore(r)
    return { semana: formatearSemana(r.semana), score }
  })

  return (
    <div style={{ padding: '32px', maxWidth: '1100px', margin: '0 auto' }}>

      {/* Back */}
      <Link href="/dashboard" style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none',
        marginBottom: '24px', fontWeight: '600',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Dashboard
      </Link>

      {/* Header card */}
      <div className="card" style={{ padding: '28px', marginBottom: '20px', display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%', background: discipulo.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: '22px', fontWeight: '800', flexShrink: 0,
        }}>
          {discipulo.iniciales}
        </div>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '26px', fontWeight: '900', color: 'var(--text)', margin: 0 }}>
              {discipulo.nombre}
            </h1>
            <span style={{
              padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '800',
              background: SALUD_BG[stats.salud], color: SALUD_COLOR[stats.salud],
            }}>
              {SALUD_LABEL[stats.salud]}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <IconText icon={
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" />
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
              </svg>
            } text={discipulo.email} />
            <IconText icon={
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 5.45 5.45l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" />
              </svg>
            } text={discipulo.telefono} />
            <IconText icon={
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
              </svg>
            } text={`Desde ${formatearSemana(discipulo.fechaInicio)}`} />
          </div>
        </div>

        {/* Health ring */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}>
          <ScoreRing score={stats.desglose.total} salud={stats.salud} size={80} />
          <p style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textAlign: 'center' }}>
            {stats.rachaActual > 0 ? `${stats.rachaActual} sem. seguidas` : 'Sin racha activa'}
          </p>
          <button
            onClick={() => setShowFormula((v) => !v)}
            style={{
              background: 'none', border: 'none', padding: 0, cursor: 'pointer',
              fontSize: '10px', color: 'var(--primary)', fontWeight: '700',
              display: 'flex', alignItems: 'center', gap: '2px',
            }}
          >
            ¿Cómo se calcula?
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" style={{ transition: 'transform .2s', transform: showFormula ? 'rotate(180deg)' : 'none' }}>
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {showFormula && (
            <div style={{
              position: 'absolute', top: '100%', right: 0, zIndex: 20,
              background: 'white', borderRadius: '12px', marginTop: '6px',
              boxShadow: '0 4px 20px rgba(0,0,0,.12)', border: '1px solid var(--border)',
              padding: '16px', width: '240px',
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
      </div>

      {/* Mini stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '20px' }}>
        <MiniStat label="Reuniones" value={`${asistioReunion}/${total}`} sub={`${pctReunion}% asistencia`} color="#22c55e" />
        <MiniStat label="Domingos" value={`${asistiodomingo}/${total}`} sub={`${pctDomingo}% asistencia`} color="var(--primary)" />
        <MiniStat label="Material" value={`${pctMaterial}%`} sub="cuando asiste" color="#6366f1" />
        <MiniStat label="Racha actual" value={stats.rachaActual} sub="semanas seguidas" color="var(--text)" />
      </div>

      {/* Chart + Breakdown */}
      <div className="discipulo-grid">

        {/* Weekly score chart */}
        <div className="card" style={{ padding: '24px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', marginBottom: '3px' }}>
            Puntaje semanal
          </h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Reunión · Domingo · Material · Participación (sobre 100)
          </p>
          {chartData.length === 0 ? (
            <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
              Sin datos aún
            </div>
          ) : (
            <WeeklyBarChart data={chartData} />
          )}
        </div>

        {/* Health breakdown */}
        <div className="card" style={{ padding: '24px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', marginBottom: '18px' }}>
            Desglose de salud
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {(Object.keys(MAXIMOS) as (keyof typeof MAXIMOS)[]).map((k) => {
              const val = stats.desglose[k]
              const max = MAXIMOS[k]
              const pct = Math.round((val / max) * 100)
              const barColor = pct >= 75 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444'
              return (
                <div key={k}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text)' }}>
                      {FACTOR_LABEL[k]}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: barColor }}>
                      {val}/{max}
                    </span>
                  </div>
                  <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${pct}%`, background: barColor,
                      borderRadius: '4px', transition: 'width .5s',
                    }} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Score legend */}
          <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { color: '#22c55e', label: 'Saludable (≥72)' },
              { color: '#f59e0b', label: 'En proceso (50–71)' },
              { color: '#ef4444', label: 'Atención (<50)' },
            ].map((l) => (
              <span key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: l.color, display: 'inline-block' }} />
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full history */}
      <div className="card" style={{ overflow: 'hidden', marginBottom: '20px' }}>
        <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', marginBottom: '2px' }}>
            Historial completo
          </h2>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            {total} semanas registradas
          </p>
        </div>

        {misRegistros.length === 0 ? (
          <p style={{ padding: '24px', color: 'var(--text-muted)', fontSize: '13px' }}>Sin registros aún.</p>
        ) : (
          [...misRegistros].reverse().map((r, i) => (
            <div key={r.id} style={{
              padding: '13px 24px',
              borderTop: i === 0 ? 'none' : '1px solid var(--bg)',
              background: i % 2 === 0 ? 'white' : '#FAFAF8',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: r.asistioReunion ? '#22c55e' : 'var(--border)', flexShrink: 0,
                }} />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', width: '110px', flexShrink: 0 }}>
                  {formatearSemana(r.semana)}
                </span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: r.asistioReunion ? 'var(--text)' : 'var(--text-muted)', flex: 1, minWidth: '100px' }}>
                  {r.asistioReunion ? 'Asistió al discipulado' : 'No asistió'}
                </span>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {r.asistiodomingo && <Chip label="Domingo ✓" bg="var(--primary-lt)" color="var(--primary)" />}
                  {r.completoMaterial && <Chip label="Material ✓" bg="var(--green-bg)" color="var(--green)" />}
                  {r.participacion && (
                    <Chip
                      label={`Part. ${r.participacion === 'media' ? 'normal' : r.participacion}`}
                      bg={r.participacion === 'alta' ? 'var(--green-bg)' : r.participacion === 'media' ? '#EFF6FF' : 'var(--red-bg)'}
                      color={r.participacion === 'alta' ? 'var(--green)' : r.participacion === 'media' ? '#1D4ED8' : 'var(--red)'}
                    />
                  )}
                </div>
              </div>
              {r.notas && (
                <p style={{ margin: '6px 0 0 22px', fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic', paddingLeft: '14px', borderLeft: '2px solid var(--border)' }}>
                  {r.notas}
                </p>
              )}
            </div>
          ))
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link href="/dashboard/registro" style={{
          padding: '11px 24px', background: 'var(--text)', color: 'white',
          borderRadius: '10px', fontSize: '14px', fontWeight: '800', textDecoration: 'none',
        }}>
          + Registrar semana
        </Link>
      </div>
    </div>
  )
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function ScoreRing({ score, salud, size = 44 }: { score: number; salud: NivelSalud; size?: number }) {
  const r = (size / 2) - 7
  const circ = 2 * Math.PI * r
  const fill = (score / 100) * circ
  const dot = salud === 'verde' ? '#22c55e' : salud === 'amarillo' ? '#f59e0b' : '#ef4444'
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth="5" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={dot} strokeWidth="5"
          strokeDasharray={`${fill} ${circ}`} strokeLinecap="round" />
      </svg>
      <span style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: size > 60 ? '20px' : '11px', fontWeight: '900', color: 'var(--text)',
      }}>
        {score}
      </span>
    </div>
  )
}

function MiniStat({ label, value, sub, color }: { label: string; value: string | number; sub: string; color: string }) {
  return (
    <div className="card" style={{ padding: '18px' }}>
      <p style={{ fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
        {label}
      </p>
      <p style={{ fontSize: '24px', fontWeight: '900', color, marginBottom: '3px', lineHeight: 1 }}>
        {value}
      </p>
      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{sub}</p>
    </div>
  )
}

function Chip({ label, bg, color }: { label: string; bg: string; color: string }) {
  return (
    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '10px', fontWeight: '700', background: bg, color }}>
      {label}
    </span>
  )
}

function IconText({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
      {icon}
      {text}
    </span>
  )
}

function WeeklyBarChart({ data }: { data: { semana: string; score: number }[] }) {
  const CHART_H = 160
  const yLabels = [100, 75, 50, 25, 0]
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <div style={{ position: 'relative', userSelect: 'none' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        {/* Y-axis labels */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: CHART_H, flexShrink: 0 }}>
          {yLabels.map((v) => (
            <span key={v} style={{ fontSize: '10px', color: 'var(--text-muted)', lineHeight: 1, textAlign: 'right', width: '26px' }}>
              {v}
            </span>
          ))}
        </div>

        {/* Chart area */}
        <div style={{ flex: 1, position: 'relative' }}>
          {/* Grid lines */}
          {yLabels.map((_, i) => (
            <div key={i} style={{
              position: 'absolute', left: 0, right: 0,
              top: `${(i / (yLabels.length - 1)) * 100}%`,
              borderTop: '1px dashed var(--border)',
              pointerEvents: 'none',
            }} />
          ))}

          {/* Bars */}
          <div style={{ display: 'flex', alignItems: 'flex-end', height: CHART_H, gap: '6px' }}>
            {data.map((d, i) => {
              const pct = Math.max(0, Math.min(100, d.score))
              const barH = Math.round((pct / 100) * CHART_H)
              const fill = pct >= 72 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444'
              const isHovered = hoveredIdx === i

              return (
                <div
                  key={i}
                  style={{ flex: 1, position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end', cursor: 'default' }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Tooltip */}
                  {isHovered && (
                    <div style={{
                      position: 'absolute',
                      bottom: barH + 8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--text)',
                      color: 'white',
                      borderRadius: '6px',
                      padding: '5px 10px',
                      fontSize: '11px',
                      fontWeight: '700',
                      whiteSpace: 'nowrap',
                      zIndex: 10,
                      pointerEvents: 'none',
                    }}>
                      {d.score}/100
                    </div>
                  )}

                  {/* Bar */}
                  <div style={{
                    width: '100%',
                    height: pct > 0 ? `${barH}px` : '3px',
                    background: pct > 0 ? fill : 'var(--border)',
                    borderRadius: '4px 4px 2px 2px',
                    opacity: isHovered ? 0.85 : 1,
                    transition: 'opacity 0.15s',
                  }} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* X-axis labels */}
      <div style={{ display: 'flex', gap: '6px', marginLeft: '34px', marginTop: '8px' }}>
        {data.map((d, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center' }}>
            <span style={{ fontSize: '9px', color: hoveredIdx === i ? 'var(--text)' : 'var(--text-muted)', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', transition: 'color .15s' }}>
              {d.semana.replace(' 2026', '')}
            </span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '14px', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
        {[{ color: '#22c55e', label: '≥72 Saludable' }, { color: '#f59e0b', label: '50–71 En proceso' }, { color: '#ef4444', label: '<50 Atención' }].map((l) => (
          <span key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: l.color, display: 'inline-block', flexShrink: 0 }} />
            {l.label}
          </span>
        ))}
      </div>
    </div>
  )
}
