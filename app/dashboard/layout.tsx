'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthChange } from '@/lib/auth'
import { getPerfil, PerfilLider } from '@/lib/db'
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [perfil, setPerfil] = useState<PerfilLider | null>(null)

  useEffect(() => {
    const unsub = onAuthChange(async (user) => {
      if (!user) { router.replace('/login'); return }
      const p = await getPerfil(user.uid)
      if (!p || p.tipo !== 'lider') { router.replace('/discipulo'); return }
      setPerfil(p as PerfilLider)
    })
    return () => unsub()
  }, [router])

  if (!perfil) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '32px', height: '32px', border: '3px solid var(--primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  // Sidebar espera un Usuario — adaptamos el perfil
  const usuario = {
    id: perfil.uid,
    nombre: perfil.nombre,
    email: perfil.email,
    password: '',
    iglesia: perfil.iglesia,
    cargo: perfil.cargo,
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar user={usuario} esAdmin={perfil.esAdmin} />
      <div className="main-content" style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  )
}
