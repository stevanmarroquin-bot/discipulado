'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { onAuthChange, signOut } from '@/lib/auth'
import { getPerfil, PerfilDiscipulo } from '@/lib/db'

export default function DiscipuloLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [perfil, setPerfil] = useState<PerfilDiscipulo | null>(null)

  useEffect(() => {
    const unsub = onAuthChange(async (user) => {
      if (!user) { router.replace('/login'); return }
      const p = await getPerfil(user.uid)
      if (!p || p.tipo !== 'discipulo') { router.replace('/dashboard'); return }
      setPerfil(p as PerfilDiscipulo)
    })
    return () => unsub()
  }, [router])

  async function handleLogout() {
    await signOut()
    router.replace('/login')
  }

  if (!perfil) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '32px', height: '32px', border: '3px solid var(--primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <nav style={{
        background: '#1A1A1A', position: 'sticky', top: 0, zIndex: 40,
      }}>
        {/* Top row */}
        <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/logo.png" alt="Bread of Life" width={26} height={26}
              style={{ width: '26px', height: '26px', objectFit: 'contain' }} />
            <span style={{ color: 'white', fontSize: '11px', fontWeight: '800', letterSpacing: '0.06em' }}>
              BREAD OF LIFE
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: perfil.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '10px', fontWeight: '800', flexShrink: 0,
            }}>
              {perfil.iniciales}
            </div>
            <button onClick={handleLogout} style={{
              background: 'rgba(255,255,255,0.08)', border: 'none',
              color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: '600',
              padding: '5px 10px', borderRadius: '8px', cursor: 'pointer',
            }}>
              Salir
            </button>
          </div>
        </div>

        {/* Nav links row */}
        <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '0 12px 0' }}>
          {[
            { href: '/discipulo', label: 'Mi progreso' },
            { href: '/discipulo/calendario', label: 'Calendario' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              padding: '10px 14px', fontSize: '13px', fontWeight: '600',
              textDecoration: 'none', display: 'block',
              color: pathname === href ? 'white' : 'rgba(255,255,255,0.5)',
              borderBottom: pathname === href ? '2px solid var(--primary)' : '2px solid transparent',
            }}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
    </div>
  )
}
