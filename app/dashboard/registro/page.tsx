'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SEMANAS_DISPONIBLES, RegistroSemanal } from '@/lib/mock-data'
import { formatearSemana } from '@/lib/utils'
import { onAuthChange } from '@/lib/auth'
import { getDiscipulosDeLider, getRegistrosDeLider, guardarRegistros, PerfilDiscipulo } from '@/lib/db'

type Participacion = 'alta' | 'media' | 'baja'
type TipoSemana = 'normal' | 'convivencia' | 'descanso'

interface EntradaRegistro {
  discipuloId: string
  asistioReunion: boolean
  asistiodomingo: boolean
  participacion: Participacion | null
  completoMaterial: boolean
  notas: string
}

export default function RegistroPage() {
  const router = useRouter()
  const [liderUid, setLiderUid] = useState<string | null>(null)
  const [discipulos, setDiscipulos] = useState<PerfilDiscipulo[]>([])
  const [todosRegistros, setTodosRegistros] = useState<RegistroSemanal[]>([])
  const [semana, setSemana] = useState(SEMANAS_DISPONIBLES[SEMANAS_DISPONIBLES.length - 1])
  const [entradas, setEntradas] = useState<Record<string, EntradaRegistro>>({})
  const [guardado, setGuardado] = useState(false)
  const [guardando, setGuardando] = useState(false)
  const [modo, setModo] = useState<'registro' | 'historial'>('registro')
  const [tipoSemana, setTipoSemana] = useState<TipoSemana>('normal')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthChange(async (user) => {
      if (!user) { router.replace('/login'); return }
      const [discs, regs] = await Promise.all([
        getDiscipulosDeLider(user.uid),
        getRegistrosDeLider(user.uid),
      ])
      setLiderUid(user.uid)
      setDiscipulos(discs)
      setTodosRegistros(regs)
      setLoading(false)
    })
    return () => unsub()
  }, [router])

  // Re-initialize form when week or loaded registros change
  useEffect(() => {
    if (!discipulos.length) return
    const inicial: Record<string, EntradaRegistro> = {}
    discipulos.forEach((d) => {
      const ex = todosRegistros.find((r) => r.discipuloId === d.uid && r.semana === semana)
      inicial[d.uid] = ex
        ? {
            discipuloId: d.uid,
            asistioReunion: ex.asistioReunion,
            asistiodomingo: ex.asistiodomingo,
            participacion: ex.participacion,
            completoMaterial: ex.completoMaterial,
            notas: ex.notas,
          }
        : { discipuloId: d.uid, asistioReunion: false, asistiodomingo: false, participacion: null, completoMaterial: false, notas: '' }
    })
    setEntradas(inicial)
    setGuardado(false)
    setTipoSemana('normal')
  }, [semana, todosRegistros, discipulos])

  function marcarTodosPresentes() {
    setEntradas((prev) => {
      const next = { ...prev }
      discipulos.forEach((d) => {
        next[d.uid] = { ...next[d.uid], asistioReunion: true }
      })
      return next
    })
    setGuardado(false)
  }

  function setField(discipuloId: string, campo: keyof EntradaRegistro, valor: unknown) {
    setEntradas((prev) => ({
      ...prev,
      [discipuloId]: {
        ...prev[discipuloId],
        [campo]: valor,
        ...(campo === 'asistioReunion' && !valor
          ? { participacion: null, completoMaterial: false }
          : {}),
      },
    }))
    setGuardado(false)
  }

  async function handleGuardar(e: React.FormEvent) {
    e.preventDefault()
    if (!liderUid) return
    setGuardando(true)

    const nuevos: (RegistroSemanal & { discipuladorId: string })[] = discipulos.map((d) => {
      const entrada = entradas[d.uid]
      return {
        id: `${d.uid}_${semana}`,
        discipuloId: d.uid,
        discipuladorId: liderUid,
        semana,
        asistioReunion: entrada?.asistioReunion ?? false,
        asistiodomingo: entrada?.asistiodomingo ?? false,
        participacion: entrada?.participacion ?? null,
        completoMaterial: entrada?.completoMaterial ?? false,
        notas: entrada?.notas ?? '',
      }
    })

    await guardarRegistros(liderUid, nuevos)

    // Sync local state so historial and charts reflect changes immediately
    setTodosRegistros((prev) => {
      const updated = [...prev]
      for (const nr of nuevos) {
        const i = updated.findIndex((r) => r.discipuloId === nr.discipuloId && r.semana === nr.semana)
        if (i >= 0) updated[i] = nr
        else updated.push(nr)
      }
      return updated
    })

    setGuardando(false)
    setGuardado(true)
    setTimeout(() => setGuardado(false), 3000)
  }

  function historial(discipuloUid: string): RegistroSemanal[] {
    return todosRegistros
      .filter((r) => r.discipuloId === discipuloUid)
      .sort((a, b) => new Date(b.semana).getTime() - new Date(a.semana).getTime())
      .slice(0, 8)
  }

  if (loading) return null

  const asistieronReunion = Object.values(entradas).filter((e) => e.asistioReunion).length
  const asistieronDomingo = Object.values(entradas).filter((e) => e.asistiodomingo).length

  return (
    <div style={{ padding: '36px', maxWidth: '880px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text)', marginBottom: '4px' }}>
            Registro Semanal
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Reporta asistencia al discipulado, domingo y participación de tu grupo
          </p>
        </div>
        <div style={{ display: 'flex', background: 'white', borderRadius: '10px', padding: '4px', boxShadow: '0 1px 3px rgba(0,0,0,.06)' }}>
          {(['registro', 'historial'] as const).map((m) => (
            <button key={m} onClick={() => setModo(m)} style={{
              padding: '7px 16px', borderRadius: '8px', border: 'none', fontSize: '13px',
              fontWeight: '700', cursor: 'pointer',
              background: modo === m ? 'var(--text)' : 'transparent',
              color: modo === m ? 'white' : 'var(--text-muted)',
              transition: 'all .15s',
            }}>
              {m === 'registro' ? 'Nuevo registro' : 'Historial'}
            </button>
          ))}
        </div>
      </div>

      {/* ── Registro form ── */}
      {modo === 'registro' && (
        <form onSubmit={handleGuardar}>
          {/* Week selector + tipo + counters */}
          <div className="card" style={{ padding: '18px 24px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--primary)' }}>
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
              </svg>
              <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>Semana del:</label>
            </div>
            <select value={semana} onChange={(e) => setSemana(e.target.value)} style={{
              padding: '8px 12px', border: '1.5px solid var(--border)',
              borderRadius: '8px', fontSize: '13px', color: 'var(--text)', background: 'white', cursor: 'pointer',
            }}>
              {SEMANAS_DISPONIBLES.map((s) => (
                <option key={s} value={s}>{formatearSemana(s)}</option>
              ))}
            </select>

            {/* Tipo de semana */}
            <div style={{ display: 'flex', background: 'var(--bg)', borderRadius: '8px', padding: '3px', gap: '2px' }}>
              {([
                { val: 'normal',      label: 'Reunión normal' },
                { val: 'convivencia', label: '🎉 Convivencia' },
                { val: 'descanso',    label: '😴 Descanso' },
              ] as const).map(({ val, label }) => (
                <button key={val} type="button"
                  onClick={() => setTipoSemana(val)}
                  style={{
                    padding: '5px 12px', borderRadius: '6px', border: 'none', fontSize: '12px',
                    fontWeight: tipoSemana === val ? '700' : '500', cursor: 'pointer',
                    background: tipoSemana === val ? 'white' : 'transparent',
                    color: tipoSemana === val ? 'var(--text)' : 'var(--text-muted)',
                    boxShadow: tipoSemana === val ? '0 1px 3px rgba(0,0,0,.08)' : 'none',
                    transition: 'all .15s',
                  }}
                >{label}</button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', marginLeft: 'auto' }}>
              <Counter
                label={tipoSemana === 'convivencia' ? 'Convivencia' : 'Discipulado'}
                value={asistieronReunion}
                total={discipulos.length}
                color="#22c55e"
              />
              <Counter label="Domingo" value={asistieronDomingo} total={discipulos.length} color="var(--primary)" />
            </div>
          </div>

          {/* Banner para semanas especiales */}
          {tipoSemana === 'convivencia' && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '12px',
              padding: '14px 18px', marginBottom: '16px', borderRadius: '12px',
              background: '#EFF6FF', border: '1.5px solid #BFDBFE',
            }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>🎉</span>
              <div>
                <p style={{ fontSize: '13px', fontWeight: '800', color: '#1D4ED8', marginBottom: '3px' }}>
                  Semana de convivencia
                </p>
                <p style={{ fontSize: '12px', color: '#3B82F6', lineHeight: 1.5 }}>
                  No hay estudio formal esta semana. Marca la asistencia como positiva para quienes participaron en la convivencia grupal.
                </p>
              </div>
            </div>
          )}

          {tipoSemana === 'descanso' && (
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '12px',
              padding: '14px 18px', marginBottom: '16px', borderRadius: '12px',
              background: '#F5F3FF', border: '1.5px solid #DDD6FE',
            }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>😴</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '13px', fontWeight: '800', color: '#7C3AED', marginBottom: '3px' }}>
                  Semana de descanso
                </p>
                <p style={{ fontSize: '12px', color: '#8B5CF6', lineHeight: 1.5, marginBottom: '10px' }}>
                  Esta semana no hay reunión de discipulado. Puedes marcar la asistencia como positiva para todos si quieres mantener la racha del grupo.
                </p>
                <button type="button" onClick={marcarTodosPresentes} style={{
                  padding: '6px 14px', borderRadius: '8px', border: '1.5px solid #C4B5FD',
                  background: 'white', color: '#7C3AED', fontSize: '12px', fontWeight: '700',
                  cursor: 'pointer',
                }}>
                  Marcar a todos como presentes
                </button>
              </div>
            </div>
          )}

          {/* Disciple cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {discipulos.map((d) => {
              const e = entradas[d.uid] ?? { discipuloId: d.uid, asistioReunion: false, asistiodomingo: false, participacion: null, completoMaterial: false, notas: '' }
              const labelAsistencia = tipoSemana === 'convivencia'
                ? 'Asistió a la convivencia'
                : tipoSemana === 'descanso'
                  ? 'Marcar como presente'
                  : 'Asistió al discipulado'
              return (
                <div key={d.uid} className="card" style={{
                  padding: '20px 24px',
                  border: e.asistioReunion ? '1.5px solid #D4E8C2' : '1.5px solid transparent',
                  transition: 'border-color .15s',
                }}>
                  {/* Row 1: avatar + name + toggles */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '50%', background: d.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontSize: '13px', fontWeight: '800', flexShrink: 0,
                    }}>
                      {d.iniciales}
                    </div>
                    <div style={{ flex: 1, minWidth: '120px' }}>
                      <p style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', marginBottom: '1px' }}>{d.nombre}</p>
                      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{d.telefono}</p>
                    </div>
                    <Toggle
                      label={labelAsistencia}
                      active={e.asistioReunion}
                      activeColor="#22c55e"
                      onToggle={() => setField(d.uid, 'asistioReunion', !e.asistioReunion)}
                    />
                    <Toggle
                      label="Asistió a domingo"
                      active={e.asistiodomingo}
                      activeColor="var(--primary)"
                      onToggle={() => setField(d.uid, 'asistiodomingo', !e.asistiodomingo)}
                    />
                  </div>

                  {/* Expanded fields — solo en semanas normales o convivencia con asistencia */}
                  {e.asistioReunion && tipoSemana === 'normal' && (
                    <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {/* Participación */}
                      <div>
                        <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                          Participación en el discipulado
                        </label>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          {([
                            { val: 'alta',  label: 'Alta',   bg: '#DCFCE7', col: '#15803d', border: '#BBF7D0' },
                            { val: 'media', label: 'Normal', bg: '#EFF6FF', col: '#1D4ED8', border: '#BFDBFE' },
                            { val: 'baja',  label: 'Baja',   bg: '#FEE2E2', col: '#B91C1C', border: '#FECACA' },
                          ] as const).map(({ val, label, bg, col, border }) => (
                            <button key={val} type="button"
                              onClick={() => setField(d.uid, 'participacion', val)}
                              style={{
                                padding: '6px 16px', borderRadius: '8px',
                                border: `1.5px solid ${e.participacion === val ? border : 'var(--border)'}`,
                                background: e.participacion === val ? bg : 'white',
                                color: e.participacion === val ? col : 'var(--text-muted)',
                                fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'all .15s',
                              }}
                            >{label}</button>
                          ))}
                        </div>
                      </div>

                      {/* Material */}
                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={e.completoMaterial}
                          onChange={(ev) => setField(d.uid, 'completoMaterial', ev.target.checked)}
                          style={{ width: '16px', height: '16px', accentColor: 'var(--primary)', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: '500' }}>
                          Estudió el material previo al discipulado
                        </span>
                      </label>

                      {/* Notas */}
                      <div>
                        <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                          Notas (opcional)
                        </label>
                        <textarea value={e.notas}
                          onChange={(ev) => setField(d.uid, 'notas', ev.target.value)}
                          placeholder="Observaciones, peticiones de oración, seguimiento..."
                          rows={2} style={{
                            width: '100%', padding: '9px 12px',
                            border: '1.5px solid var(--border)', borderRadius: '8px',
                            fontSize: '13px', color: 'var(--text)', resize: 'none', fontFamily: 'inherit',
                            background: 'var(--bg)',
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Notas para convivencia / descanso */}
                  {tipoSemana !== 'normal' && (
                    <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid var(--border)' }}>
                      <label style={{ display: 'block', fontSize: '10px', fontWeight: '800', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Notas (opcional)
                      </label>
                      <textarea value={e.notas}
                        onChange={(ev) => setField(d.uid, 'notas', ev.target.value)}
                        placeholder="Observaciones, seguimiento..."
                        rows={1} style={{
                          width: '100%', padding: '9px 12px',
                          border: '1.5px solid var(--border)', borderRadius: '8px',
                          fontSize: '13px', color: 'var(--text)', resize: 'none', fontFamily: 'inherit',
                          background: 'var(--bg)',
                        }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Submit */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', alignItems: 'center' }}>
            {guardado && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--green)', fontSize: '13px', fontWeight: '700' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Registro guardado
              </span>
            )}
            <button type="submit" disabled={guardando} style={{
              padding: '12px 32px', background: guardando ? '#E8DDD4' : 'var(--text)', color: 'white',
              border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '800',
              cursor: guardando ? 'not-allowed' : 'pointer', transition: 'background .15s',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              {guardando && (
                <span style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
              )}
              {guardando ? 'Guardando...' : 'Guardar registro'}
            </button>
          </div>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </form>
      )}

      {/* ── Historial ── */}
      {modo === 'historial' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {discipulos.map((d) => {
            const rows = historial(d.uid)
            const asistencias = rows.filter((r) => r.asistioReunion).length
            return (
              <div key={d.uid} className="card" style={{ overflow: 'hidden' }}>
                <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%', background: d.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '12px', fontWeight: '800', flexShrink: 0,
                  }}>{d.iniciales}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text)', marginBottom: '1px' }}>{d.nombre}</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{asistencias}/{rows.length} discipulados asistidos</p>
                  </div>
                  <span style={{ fontSize: '20px', fontWeight: '900', color: rows.length > 0 ? 'var(--primary)' : 'var(--text-muted)' }}>
                    {rows.length > 0 ? `${Math.round((asistencias / rows.length) * 100)}%` : '—'}
                  </span>
                </div>
                {rows.length === 0 ? (
                  <p style={{ padding: '14px 22px', fontSize: '13px', color: 'var(--text-muted)' }}>Sin registros aún.</p>
                ) : rows.map((r, i) => (
                  <div key={r.id} style={{
                    padding: '10px 22px', display: 'flex', alignItems: 'center', gap: '12px',
                    borderTop: i === 0 ? 'none' : '1px solid var(--bg)',
                    background: i % 2 === 0 ? 'white' : '#FAFAF8',
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: r.asistioReunion ? '#22c55e' : 'var(--border)', flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', width: '110px', flexShrink: 0 }}>
                      {formatearSemana(r.semana)}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: r.asistioReunion ? 'var(--text)' : 'var(--text-muted)', flex: 1 }}>
                      {r.asistioReunion
                        ? `Discipulado ✓ · Part. ${r.participacion === 'media' ? 'normal' : r.participacion || '—'}`
                        : 'No asistió al discipulado'}
                    </span>
                    {r.asistiodomingo && (
                      <span style={{ fontSize: '10px', background: '#FEF3E2', color: 'var(--primary)', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>
                        Domingo ✓
                      </span>
                    )}
                    {r.completoMaterial && (
                      <span style={{ fontSize: '10px', background: 'var(--green-bg)', color: 'var(--green)', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>
                        Material ✓
                      </span>
                    )}
                    {r.notas && (
                      <span title={r.notas} style={{ cursor: 'help', color: 'var(--text-muted)' }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ── Sub-components ──────────────────────────────────────────────────────────────

function Toggle({ label, active, activeColor, onToggle }: {
  label: string; active: boolean; activeColor: string; onToggle: () => void
}) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer', flexShrink: 0 }}
      onClick={onToggle}
    >
      <div style={{
        width: '42px', height: '23px', borderRadius: '12px',
        background: active ? activeColor : 'var(--border)',
        position: 'relative', transition: 'background .2s', cursor: 'pointer', flexShrink: 0,
      }}>
        <div style={{
          width: '17px', height: '17px', borderRadius: '50%', background: 'white',
          position: 'absolute', top: '3px', left: active ? '22px' : '3px',
          transition: 'left .2s', boxShadow: '0 1px 3px rgba(0,0,0,.2)',
        }} />
      </div>
      <span style={{ fontSize: '12px', fontWeight: '600', color: active ? 'var(--text)' : 'var(--text-muted)', userSelect: 'none' }}>
        {label}
      </span>
    </div>
  )
}

function Counter({ label, value, total, color }: { label: string; value: number; total: number; color: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '18px', fontWeight: '900', color, lineHeight: 1 }}>
        {value}<span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '500' }}>/{total}</span>
      </p>
      <p style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.04em' }}>{label}</p>
    </div>
  )
}
