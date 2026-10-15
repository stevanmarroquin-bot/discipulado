import Link from 'next/link'
import { MODULOS, getLeccionesPorModulo } from '@/lib/content'

export default function HomePage() {
  const mod = MODULOS[0]
  const lecciones = getLeccionesPorModulo(mod.id)

  return (
    <main>
      <div className="page-wrap">

        {/* Hero */}
        <div className="home-hero">
          <h1>Formados por la Palabra,<br />para vivir por fe.</h1>
          <p>
            Discipulados para conocer el evangelio, profundizar en Cristo
            y crecer en comunidad.
          </p>
        </div>

        {/* Single module featured */}
        <Link
          href={`/${mod.slug}`}
          className="module-card module-card-featured"
          style={{ '--module-color': mod.color } as React.CSSProperties}
        >
          <span className="module-num">Serie</span>
          <h2>{mod.nombre}</h2>
          <span className="module-card-sub">{mod.subtitulo}</span>
          <p>{mod.descripcion}</p>
          <span className="module-card-count">
            {lecciones.length > 0
              ? `${lecciones.length} ${lecciones.length === 1 ? 'lección' : 'lecciones'} disponibles →`
              : 'Próximamente'}
          </span>
        </Link>

      </div>
    </main>
  )
}
