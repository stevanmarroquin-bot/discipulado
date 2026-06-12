'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthChange } from '@/lib/auth'
import { getPerfil, getAllMiembros, getAllLideres, getAllRegistros, PerfilDiscipulo, PerfilLider, PerfilLider as PL } from '@/lib/db'
import { calcularDesglose } from '@/lib/utils'
import { RegistroSemanal } from '@/lib/mock-data'
import { MODULOS } from '@/lib/mock-data'

type NivelSalud = 'verde' | 'amarillo' | 'rojo'

function nivelSalud(score: number): NivelSalud {
  if (score >= 72) return 'verde'
  if (score >= 50) return 'amarillo'
  return 'rojo'
}

interface FilaDiscipulo {
  uid: string
  nombre: string
  liderNombre: string
  moduloLabel: string
  score: number
  salud: NivelSalud
  ultimaSemana: string | null  // ISO date of most recent registro
  sinDatos: boolean            // no registros at all
  stale: boolean               // last registro > 14 days ago
}

const HOY = new Date('2026-06-11T12:00:00')
const SALUD_LABEL: Record<NivelSalud, string> = { verde: 'Verde', amarillo: 'Amarillo', rojo: 'Rojo' }
const SALUD_COLOR: Record<NivelSalud, string> = { verde: 'var(--green)', amarillo: 'var(--yellow)', rojo: 'var(--red)' }
const SALUD_BG: Record<NivelSalud, string>    = { verde: 'var(--green-bg)', amarillo: 'var(--yellow-bg)', rojo: 'var(--red-bg)' }

export default function AdminPage() {
  const router = useRouter()
  const [filas, setFilas]         = useState<FilaDiscipulo[]>([])
  const [loading, setLoading]     = useState(true)
  const [filtroLider, setFiltroLider] = useState('todos')
  const [lideres, setLideres]     = useState<PerfilLider[]>([])
  const [ordenCol, setOrdenCol]   = useState<'nombre' | 'score' | 'lider' | 'modulo' | 'ultima'>('score')
  const [ordenAsc, setOrdenAsc]   = useState(false)

  useEffect(() => {
    const unsub = onAuthChange(async (user) => {
      if (!user) { router.replace('/login'); return }
      const p = await getPerfil(user.uid) as PL | null
      if (!p || p.tipo !== 'lider' || !p.esAdmin) { router.replace('/dashboard'); return }

      const [discipulos, lids, registros] = await Promise.all([
        getAllMiembros(),
        getAllLideres(),
        getAllRegistros(),
      ])

      setLideres(lids)

      const liderMap = new Map(lids.map((l) => [l.uid, l.nombre]))
      const registrosPorDiscipulo = new Map<string, RegistroSemanal[]>()
      for (const r of registros) {
        const list = registrosPorDiscipulo.get(r.discipuloId) ?? []
        list.push(r)
        registrosPorDiscipulo.set(r.discipuloId, list)
      }

      const rows: FilaDiscipulo[] = discipulos.map((d) => {
        const regs = registrosPorDiscipulo.get(d.uid) ?? []
        const desglose = calcularDesglose(regs)
        const score = desglose.total
        const salud = nivelSalud(score)

        const sorted = [...regs].sort((a, b) => b.semana.localeCompare(a.semana))
        const ultimaSemana = sorted[0]?.semana ?? null

        let stale = false
        if (ultimaSemana) {
          const diff = (HOY.getTime() - new Date(ultimaSemana + 'T12:00:00').getTime()) / (1000 * 60 * 60 * 24)
          stale = diff > 14
        }

        const modulo = MODULOS.find((m) => m.id === d.moduloActual)

        return {
          uid: d.uid,
          nombre: d.nombre,
          liderNombre: liderMap.get(d.discipuladorId) ?? 'Sin líder',
          moduloLabel: modulo?.nombre ?? d.moduloActual ?? '—',
          score,
          salud,
          ultimaSemana,
          sinDatos: regs.length === 0,
          stale: regs.length === 0 || stale,
        }
      })

      setFilas(rows)
      setLoading(false)
    })
    return () => unsub()
  }, [router])

  function exportarCSV() {
    const headers = ['Nombre', 'Líder', 'Módulo', 'Score', 'Salud', 'Última actualización', 'Estado']
    const rows = ordenadas.map((f) => [
      f.nombre,
      f.liderNombre,
      f.moduloLabel,
      f.score,
      SALUD_LABEL[f.salud],
      f.ultimaSemana ? formatDate(f.ultimaSemana) : 'Sin datos',
      f.stale ? 'Pendiente' : 'Al día',
    ])
    const csv = [headers, ...rows]
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
      .join('\n')
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `discipulos-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  function toggleOrden(col: typeof ordenCol) {
    if (ordenCol === col) setOrdenAsc((a) => !a)
    else { setOrdenCol(col); setOrdenAsc(col === 'score' ? false : true) }
  }

  const filtradas = filtroLider === 'todos'
    ? filas
    : filas.filter((f) => f.liderNombre === filtroLider)

  const ordenadas = [...filtradas].sort((a, b) => {
    let cmp = 0
    if (ordenCol === 'score')   cmp = a.score - b.score
    if (ordenCol === 'nombre')  cmp = a.nombre.localeCompare(b.nombre)
    if (ordenCol === 'lider')   cmp = a.liderNombre.localeCompare(b.liderNombre)
    if (ordenCol === 'modulo')  cmp = a.moduloLabel.localeCompare(b.moduloLabel)
    if (ordenCol === 'ultima')  cmp = (a.ultimaSemana ?? '').localeCompare(b.ultimaSemana ?? '')
    return ordenAsc ? cmp : -cmp
  })

  // Global stats
  const totalDiscipulos = filtradas.length
  const asistProm = filtradas.length
    ? Math.round(filtradas.reduce((acc, f) => acc + f.score, 0) / filtradas.length)
    : 0
  const verdeCount     = filtradas.filter((f) => f.salud === 'verde').length
  const amarilloCount  = filtradas.filter((f) => f.salud === 'amarillo').length
  const rojoCount      = filtradas.filter((f) => f.salud === 'rojo').length
  const staleCount     = filtradas.filter((f) => f.stale).length

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '32px', height: '32px', border: '3px solid var(--primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  const lideresUnicos = Array.from(new Set(filas.map((f) => f.liderNombre))).sort()

  return (
    <div className="page-pad" style={{ padding: '36px 32px', maxWidth: '1100px' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
            Vista de administrador
          </p>
          <h1 style={{ fontSize: '26px', fontWeight: '900', color: 'var(--text)', margin: 0 }}>
            Panorama General
          </h1>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={exportarCSV}
            style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: '9px 16px', borderRadius: '10px',
              background: 'var(--text)', color: 'white',
              border: 'none', fontSize: '13px', fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Exportar CSV
          </button>

        {/* Leader filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)' }}>Filtrar por líder:</label>
          <select
            value={filtroLider}
            onChange={(e) => setFiltroLider(e.target.value)}
            style={{
              padding: '8px 12px', border: '1.5px solid var(--border)',
              borderRadius: '8px', fontSize: '13px', background: 'white',
              color: 'var(--text)', cursor: 'pointer',
            }}
          >
            <option value="todos">Todos los líderes</option>
            {lideresUnicos.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
        </div>
      </div>

      {/* Stats cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '28px' }}>
        <StatCard label="Total discípulos" value={totalDiscipulos} icon="👥" color="var(--primary)" />
        <StatCard label="Score promedio" value={`${asistProm}/100`} icon="📊" color="#6366f1" />
        <StatCard
          label="Estado de salud"
          value={<span style={{ fontSize: '13px', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--green)', fontWeight: '800' }}>{verdeCount} verde</span>{' · '}
            <span style={{ color: 'var(--yellow)', fontWeight: '800' }}>{amarilloCount} amarillo</span>{' · '}
            <span style={{ color: 'var(--red)', fontWeight: '800' }}>{rojoCount} rojo</span>
          </span>}
          icon="❤️"
          color="var(--green)"
        />
        <StatCard
          label="Sin datos recientes"
          value={staleCount}
          icon="⚠️"
          color={staleCount > 0 ? 'var(--red)' : 'var(--green)'}
          sub={staleCount > 0 ? 'últimas 2 semanas sin actualizar' : 'Todos al día'}
        />
      </div>

      {/* Discipulos table */}
      <div className="card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text)', margin: 0 }}>
            Todos los discípulos
            <span style={{ marginLeft: '8px', fontSize: '12px', fontWeight: '500', color: 'var(--text-muted)' }}>
              ({ordenadas.length})
            </span>
          </h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg)' }}>
                {([
                  { col: 'nombre', label: 'Nombre' },
                  { col: 'lider',  label: 'Líder' },
                  { col: 'modulo', label: 'Módulo' },
                  { col: 'score',  label: 'Score' },
                  { col: 'ultima', label: 'Última actualización' },
                ] as { col: typeof ordenCol; label: string }[]).map(({ col, label }) => (
                  <th
                    key={col}
                    onClick={() => toggleOrden(col)}
                    style={{
                      padding: '10px 16px', textAlign: 'left',
                      fontSize: '10px', fontWeight: '800', letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: 'var(--text-muted)',
                      cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap',
                    }}
                  >
                    {label} {ordenCol === col ? (ordenAsc ? '↑' : '↓') : ''}
                  </th>
                ))}
                <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '10px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Salud
                </th>
              </tr>
            </thead>
            <tbody>
              {ordenadas.map((f, i) => (
                <tr
                  key={f.uid}
                  className="disciple-row"
                  style={{ borderTop: i > 0 ? '1px solid var(--border)' : 'none' }}
                >
                  <td style={{ padding: '13px 16px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text)' }}>
                      {f.nombre}
                    </span>
                  </td>
                  <td style={{ padding: '13px 16px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      {f.liderNombre}
                    </span>
                  </td>
                  <td style={{ padding: '13px 16px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', maxWidth: '180px', display: 'block' }}>
                      {f.moduloLabel}
                    </span>
                  </td>
                  <td style={{ padding: '13px 16px' }}>
                    <ScoreBar score={f.score} salud={f.salud} />
                  </td>
                  <td style={{ padding: '13px 16px', whiteSpace: 'nowrap' }}>
                    {f.sinDatos ? (
                      <span style={{ fontSize: '12px', color: 'var(--red)', fontWeight: '600' }}>Sin datos</span>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '12px', color: f.stale ? 'var(--red)' : 'var(--text-muted)' }}>
                          {formatDate(f.ultimaSemana!)}
                        </span>
                        {f.stale && (
                          <span title="Sin actualización en más de 2 semanas" style={{
                            fontSize: '10px', padding: '2px 7px', borderRadius: '8px',
                            background: 'var(--red-bg)', color: 'var(--red)', fontWeight: '700',
                          }}>
                            Pendiente
                          </span>
                        )}
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '13px 16px' }}>
                    <span style={{
                      fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '10px',
                      background: SALUD_BG[f.salud], color: SALUD_COLOR[f.salud],
                    }}>
                      {SALUD_LABEL[f.salud]}
                    </span>
                  </td>
                </tr>
              ))}

              {ordenadas.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
                    No hay discípulos para mostrar.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({
  label, value, icon, color, sub,
}: {
  label: string
  value: React.ReactNode
  icon: string
  color: string
  sub?: string
}) {
  return (
    <div className="card" style={{ padding: '20px 22px' }}>
      <p style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
        {icon} {label}
      </p>
      <div style={{ fontSize: '22px', fontWeight: '900', color, lineHeight: 1.2 }}>
        {value}
      </div>
      {sub && (
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>{sub}</p>
      )}
    </div>
  )
}

function ScoreBar({ score, salud }: { score: number; salud: NivelSalud }) {
  const color = salud === 'verde' ? '#22c55e' : salud === 'amarillo' ? '#f59e0b' : '#ef4444'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '80px', height: '6px', borderRadius: '3px', background: 'var(--border)', overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ width: `${score}%`, height: '100%', background: color, borderRadius: '3px', transition: 'width .3s' }} />
      </div>
      <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text)' }}>{score}</span>
    </div>
  )
}

function formatDate(iso: string): string {
  return new Date(iso + 'T12:00:00').toLocaleDateString('es-GT', { day: 'numeric', month: 'short', year: 'numeric' })
}
