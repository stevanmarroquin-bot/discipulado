'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Discipulo } from '@/lib/mock-data'
import Image from 'next/image'

export default function DiscipuloLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [discipulo, setDiscipulo] = useState<Discipulo | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('discipulado_session')
    if (!raw) { router.replace('/login'); return }
    try {
      const session = JSON.parse(raw)
      if (session.tipo !== 'discipulo') { router.replace('/dashboard'); return }
      setDiscipulo(session)
    } catch {
      router.replace('/login')
    }
  }, [router])

  function handleLogout() {
    localStorage.removeItem('discipulado_session')
    router.replace('/login')
  }

  if (!discipulo) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '32px', height: '32px', border: '3px solid var(--primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Top nav */}
      <nav style={{
        background: '#1A1A1A', padding: '0 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '56px', position: 'sticky', top: 0, zIndex: 40,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/logo.png" alt="Bread of Life" width={28} height={28}
            style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
          <span style={{ color: 'white', fontSize: '12px', fontWeight: '800', letterSpacing: '0.06em' }}>
            BREAD OF LIFE
          </span>
        </div>

        {/* User + logout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: discipulo.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '10px', fontWeight: '800',
            }}>
              {discipulo.iniciales}
            </div>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', fontWeight: '600' }}>
              {discipulo.nombre.split(' ')[0]}
            </span>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: 'rgba(255,255,255,0.08)', border: 'none',
              color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: '600',
              padding: '6px 12px', borderRadius: '8px', cursor: 'pointer',
              transition: 'background .15s',
            }}
          >
            Salir
          </button>
        </div>
      </nav>

      {children}
    </div>
  )
}
