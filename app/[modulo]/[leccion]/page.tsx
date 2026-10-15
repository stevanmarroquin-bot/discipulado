import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MODULOS, getLeccion, getLeccionesPorModulo } from '@/lib/content'
import type { ModuloId } from '@/lib/content'

export function generateStaticParams() {
  const params: { modulo: string; leccion: string }[] = []
  for (const mod of MODULOS) {
    for (const l of getLeccionesPorModulo(mod.id)) {
      params.push({ modulo: mod.slug, leccion: l.slug })
    }
  }
  return params
}

function formatFecha(fecha: string) {
  return new Date(fecha + 'T12:00:00').toLocaleDateString('es-GT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function LeccionPage({
  params,
}: {
  params: Promise<{ modulo: string; leccion: string }>
}) {
  const { modulo: moduloSlug, leccion: leccionSlug } = await params
  const mod = MODULOS.find((m) => m.slug === moduloSlug)
  if (!mod) notFound()

  const leccion = getLeccion(mod.id as ModuloId, leccionSlug)
  if (!leccion) notFound()

  return (
    <main>
      <div className="lesson-wrap">

        {/* Header */}
        <div className="lesson-header">
          <div className="lesson-breadcrumb">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <Link href={`/${mod.slug}`}>{mod.nombre}</Link>
            <span>›</span>
            <span>Estudio {leccion.numero}</span>
          </div>

          <span
            className="lesson-badge"
            style={{ background: mod.colorBg, color: mod.color }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Serie: {mod.nombre} · Estudio {leccion.numero}
          </span>

          <h1>{leccion.titulo}</h1>

          <div className="lesson-meta">
            <div className="tags-row">
              {leccion.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <span className="lesson-date">{formatFecha(leccion.fecha)}</span>
          </div>

          {leccion.autor && (
            <p className="lesson-autor">Por {leccion.autor}</p>
          )}
        </div>

        {/* Main content */}
        <div
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: leccion.contenido }}
        />

        {/* Resumen de clase */}
        {leccion.resumenClase && (
          <div className="lesson-section section-resumen">
            <div className="lesson-section-label">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Resumen de clase
            </div>
            <div
              className="lesson-section-content"
              dangerouslySetInnerHTML={{ __html: leccion.resumenClase }}
            />
          </div>
        )}

        {/* Devocional */}
        {leccion.devocional && (
          <div className="lesson-section section-devocional">
            <div className="lesson-section-label">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Devocional
            </div>
            <div
              className="lesson-section-content"
              dangerouslySetInnerHTML={{ __html: leccion.devocional }}
            />
          </div>
        )}

        {/* Guía para el líder */}
        {leccion.guiaLider && (
          <div className="lesson-section section-guia">
            <div className="lesson-section-label">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Guía para el líder
            </div>
            <div
              className="lesson-section-content"
              dangerouslySetInnerHTML={{ __html: leccion.guiaLider }}
            />
          </div>
        )}

        {/* Media links */}
        {(leccion.youtubeUrl || leccion.spotifyUrl) && (
          <div className="lesson-media">
            {leccion.youtubeUrl && (
              <a href={leccion.youtubeUrl} target="_blank" rel="noopener noreferrer" className="media-link">
                <div className="media-link-icon youtube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                  </svg>
                </div>
                <div className="media-link-text">
                  <strong>Ver en YouTube</strong>
                  <span>Video de esta lección</span>
                </div>
              </a>
            )}
            {leccion.spotifyUrl && (
              <a href={leccion.spotifyUrl} target="_blank" rel="noopener noreferrer" className="media-link">
                <div className="media-link-icon spotify">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <div className="media-link-text">
                  <strong>Escuchar en Spotify</strong>
                  <span>Podcast de esta lección</span>
                </div>
              </a>
            )}
          </div>
        )}

        {/* Bottom nav */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginBottom: 80 }}>
          <Link href={`/${mod.slug}`} className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver a {mod.nombre}
          </Link>
        </div>

      </div>
    </main>
  )
}
