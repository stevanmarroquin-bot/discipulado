'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Usuario } from '@/lib/mock-data'
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<Usuario | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('discipulado_session')
    if (!raw) {
      router.replace('/login')
      return
    }
    try {
      const session = JSON.parse(raw)
      if (session.tipo === 'discipulo') { router.replace('/discipulo'); return }
      setUser(session)
    } catch {
      router.replace('/login')
    }
  }, [router])

  if (!user) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '32px', height: '32px', border: '3px solid #2563eb', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar user={user} />
      <div className="main-content" style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  )
}
