import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discipulado BOL',
  description: 'Material de discipulado — estudios, devocionales y guías para líderes. Bread of Life Guatemala.',
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
