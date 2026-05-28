import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discipulado | Bread of Life',
  description: 'Plataforma de seguimiento y discipulado',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
