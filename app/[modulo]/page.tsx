import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MODULOS, getLeccionesPorModulo } from '@/lib/content'
import type { ModuloId } from '@/lib/content'

export function generateStaticParams() {
  return MODULOS.map((m) => ({ modulo: m.slug }))
}

export default async function ModuloPage({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo: moduloSlug } = await params
  const mod = MODULOS.find((m) => m.slug === moduloSlug)
  if (!mod) notFound()

  const lecciones = getLeccionesPorModulo(mod.id as ModuloId)

  return (
    <main>
      <div className="page-wrap">

        {/* Module hero */}
        <div className="module-hero">
          <Link href="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Inicio
          </Link>
          <p className="module-eyebrow" style={{ color: mod.color }}>
            Serie {mod.numero}
          </p>
          <h1 style={{ color: mod.color }}>{mod.nombre}</h1>
          <p>{mod.descripcion}</p>
        </div>

        {/* Lesson list */}
        {lecciones.length === 0 ? (
          <div className="coming-soon">
            <p>Las lecciones de esta serie estarán disponibles próximamente.</p>
          </div>
        ) : (
          <div
            className="lesson-list"
            style={{
              '--module-color': mod.color,
              '--module-bg': mod.colorBg,
            } as React.CSSProperties}
          >
            {lecciones.map((l) => (
              <Link
                key={l.slug}
                href={`/${mod.slug}/${l.slug}`}
                className="lesson-card"
              >
                <div className="lesson-num-badge">{l.numero}</div>
                <div className="lesson-card-body">
                  <h3>{l.titulo}</h3>
                  <p>{l.resumen}</p>
                  <div className="tags-row">
                    {l.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: '#C8BFB5', flexShrink: 0, marginTop: 2 }}>
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}
