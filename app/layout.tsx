import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { MODULOS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Discipulado · Bread of Life',
  description: 'Material de discipulado — estudios, devocionales y guías para líderes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="site-nav">
          <div className="site-nav-inner">
            <Link href="/" className="site-logo">
              Discipulado<span>.</span>
            </Link>
            <div className="nav-modules">
              {MODULOS.map((m) => (
                <Link
                  key={m.id}
                  href={`/${m.slug}`}
                  className="nav-module-link"
                >
                  {m.nombre}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
