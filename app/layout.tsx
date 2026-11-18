import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Discipulado BOL', template: '%s | Discipulado BOL' },
  description: 'Material de discipulado para conocer el evangelio, profundizar en Cristo y crecer en comunidad. Bread of Life Guatemala.',
  metadataBase: new URL('https://discipulado.breadoflife.com.gt'),
  openGraph: {
    siteName: 'Discipulado BOL',
    locale: 'es_GT',
    type: 'website',
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="site-nav">
          <div className="site-nav-inner">
            <Link href="/" className="site-logo">
              <Image
                src="/breadoflifelogoblack.PNG"
                alt="Bread of Life"
                width={28}
                height={28}
                style={{ objectFit: 'contain' }}
              />
              Discipulado <span>BOL</span>
            </Link>
            <Link href="/el-evangelio" className="nav-module-link">
              El Evangelio
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
