'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Usuario } from '@/lib/mock-data'
import { signOut } from '@/lib/auth'

const NAV = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    href: '/dashboard/contenido',
    label: 'Contenido',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/dashboard/registro',
    label: 'Registro Semanal',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/dashboard/calendario',
    label: 'Calendario',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Sidebar({ user }: { user: Usuario }) {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await signOut()
    router.replace('/login')
  }

  return (
    <nav className="sidebar">
      {/* Brand */}
      <div style={{ padding: '20px 20px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image
          src="/logo.png"
          alt="Bread of Life Guatemala"
          width={36}
          height={36}
          style={{ width: '36px', height: '36px', objectFit: 'contain', flexShrink: 0 }}
          priority
        />
        <div>
          <p style={{ color: 'white', fontSize: '13px', fontWeight: '900', letterSpacing: '0.04em', lineHeight: 1.1, margin: 0 }}>
            BREAD OF LIFE
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '9px', fontWeight: '700', letterSpacing: '0.12em', margin: 0 }}>
            GUATEMALA
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ flex: 1, padding: '20px 12px' }}>
        <p style={{
          fontSize: '9px', fontWeight: '800', letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)',
          padding: '0 10px', marginBottom: '10px',
        }}>
          Menú
        </p>
        {NAV.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: '10px',
                marginBottom: '3px',
                color: active ? 'white' : 'rgba(255,255,255,0.55)',
                background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                textDecoration: 'none',
                fontSize: '13.5px',
                fontWeight: active ? '700' : '400',
                transition: 'all .15s',
                borderLeft: active ? '3px solid var(--primary)' : '3px solid transparent',
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          )
        })}
      </div>

      {/* User */}
      <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ padding: '8px 12px 12px' }}>
          <p style={{ color: 'white', fontSize: '13px', fontWeight: '700', marginBottom: '2px' }}>
            {user.nombre}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
            {user.cargo}
          </p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            padding: '9px 12px',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.06)',
            border: 'none',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12.5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background .15s',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Cerrar sesión
        </button>
      </div>
    </nav>
  )
}
