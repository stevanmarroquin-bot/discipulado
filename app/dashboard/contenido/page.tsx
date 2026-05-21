'use client'

import { useState } from 'react'
import { CONTENIDO, MODULOS, Contenido } from '@/lib/mock-data'

type Vista = 'material' | 'guia-lider'

const TIPO_ICON: Record<Contenido['tipo'], React.ReactNode> = {
  pdf: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  doc: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  video: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  audio: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
}

export default function ContenidoPage() {
  const [vista, setVista] = useState<Vista>('material')
  // First module open by default
  const [abiertos, setAbiertos] = useState<Set<string>>(new Set(['fundamento']))

  function toggleModulo(id: string) {
    setAbiertos((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const guias = CONTENIDO.filter((c) => c.categoria === 'guia-lider')

  return (
    <div style={{ padding: '32px', maxWidth: '1000px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ margin: '0 0 5px', fontSize: '26px', fontWeight: '900', color: 'var(--text)' }}>
          Material
        </h1>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>
          Currículo de discipulado y recursos para líderes
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', background: 'white', borderRadius: '12px', padding: '4px', boxShadow: '0 1px 3px rgba(0,0,0,.06)', marginBottom: '28px', width: 'fit-content' }}>
        {([
          { id: 'material' as Vista,    label: 'Material' },
          { id: 'guia-lider' as Vista,  label: 'Guía para el líder' },
        ]).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setVista(tab.id)}
            style={{
              padding: '8px 20px', borderRadius: '9px', border: 'none',
              fontSize: '13px', fontWeight: '700', cursor: 'pointer',
              background: vista === tab.id ? 'var(--text)' : 'transparent',
              color: vista === tab.id ? 'white' : 'var(--text-muted)',
              transition: 'all .15s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Material: accordion by module ── */}
      {vista === 'material' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {MODULOS.map((mod) => {
            const sesiones = CONTENIDO.filter(
              (c) => c.categoria === 'material-base' && c.modulo === mod.id
            )
            const abierto = abiertos.has(mod.id)

            return (
              <div
                key={mod.id}
                className="card"
                style={{ overflow: 'hidden', borderLeft: `3px solid ${mod.color}` }}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleModulo(mod.id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    gap: '14px', padding: '18px 22px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  {/* Module color dot */}
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: mod.color, flexShrink: 0,
                  }} />

                  {/* Name + count */}
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: 'var(--text)' }}>
                      {mod.nombre}
                    </p>
                    {sesiones.length > 0 && (
                      <p style={{ margin: '2px 0 0', fontSize: '11px', color: 'var(--text-muted)', fontWeight: '500' }}>
                        {sesiones.length} {sesiones.length === 1 ? 'sesión' : 'sesiones'}
                      </p>
                    )}
                    {sesiones.length === 0 && (
                      <p style={{ margin: '2px 0 0', fontSize: '11px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Próximamente
                      </p>
                    )}
                  </div>

                  {/* Chevron */}
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    style={{
                      color: 'var(--text-muted)', flexShrink: 0,
                      transition: 'transform .2s',
                      transform: abierto ? 'rotate(180deg)' : 'none',
                    }}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Accordion body */}
                {abierto && sesiones.length > 0 && (
                  <div style={{ borderTop: '1px solid var(--border)', padding: '16px 22px 20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {sesiones.map((item) => (
                        <SesionRow key={item.id} item={item} color={mod.color} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* ── Guía para el líder: flat cards ── */}
      {vista === 'guia-lider' && (
        guias.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 24px', background: 'white', borderRadius: '14px', color: 'var(--text-muted)' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>No hay guías disponibles aún.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
            {guias.map((item) => (
              <GuiaCard key={item.id} item={item} />
            ))}
          </div>
        )
      )}
    </div>
  )
}

// ── Row inside accordion ────────────────────────────────────────────────────────

function SesionRow({ item, color }: { item: Contenido; color: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      padding: '12px 14px', borderRadius: '10px', background: 'var(--bg)',
      transition: 'background .12s', flexWrap: 'wrap',
    }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = '#EDE8DF')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = 'var(--bg)')}
    >
      {/* Session badge */}
      <span style={{
        flexShrink: 0, width: '28px', height: '28px', borderRadius: '7px',
        background: `${color}18`, color, fontSize: '11px', fontWeight: '800',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {item.semana}
      </span>

      {/* Title + description */}
      <div style={{ flex: 1, minWidth: '160px' }}>
        <p style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: 'var(--text)', marginBottom: '2px' }}>
          {item.titulo}
        </p>
        <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.descripcion}
        </p>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
        {item.videoUrl && (
          <a
            href={item.videoUrl} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '6px 11px', borderRadius: '7px',
              fontSize: '12px', fontWeight: '700', textDecoration: 'none',
              background: '#fee2e2', color: '#dc2626', transition: 'background .15s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#fecaca')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#fee2e2')}
          >
            {/* YouTube icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
            </svg>
            Video
          </a>
        )}
        {item.audioUrl && (
          <a
            href={item.audioUrl} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '6px 11px', borderRadius: '7px',
              fontSize: '12px', fontWeight: '700', textDecoration: 'none',
              background: '#f3e8ff', color: '#7c3aed', transition: 'background .15s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#e9d5ff')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#f3e8ff')}
          >
            {/* Mic icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Audio
          </a>
        )}
        {item.url && item.url !== '#' && (
          <a
            href={item.url} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '6px 11px', borderRadius: '7px',
              fontSize: '12px', fontWeight: '700', textDecoration: 'none',
              background: `${color}14`, color, transition: 'background .15s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = `${color}26`)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = `${color}14`)}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            PDF
          </a>
        )}
      </div>
    </div>
  )
}

// ── Guía card ───────────────────────────────────────────────────────────────────

function GuiaCard({ item }: { item: Contenido }) {
  return (
    <div
      className="card"
      style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', borderLeft: '3px solid #b45309', transition: 'transform .15s, box-shadow .15s' }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontSize: '10px', fontWeight: '700', color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Guía para el líder
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600', marginLeft: 'auto', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {TIPO_ICON[item.tipo]}
          {item.tipo}
        </span>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 5px', fontSize: '15px', fontWeight: '700', color: 'var(--text)', lineHeight: 1.35 }}>
          {item.titulo}
        </h3>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          {item.descripcion}
        </p>
      </div>
      <button
        onClick={() => alert('Aquí se descargará el archivo cuando conectes los documentos reales.')}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
          padding: '9px 14px', border: 'none', borderRadius: '8px',
          fontSize: '13px', fontWeight: '600', cursor: 'pointer',
          background: '#fef3c7', color: '#b45309',
          transition: 'background .15s', width: '100%',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#fde68a')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#fef3c7')}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Descargar
      </button>
    </div>
  )
}
