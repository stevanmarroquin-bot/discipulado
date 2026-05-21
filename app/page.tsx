'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthChange } from '@/lib/auth'
import { getPerfil } from '@/lib/db'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const unsub = onAuthChange(async (user) => {
      if (!user) { router.replace('/login'); return }
      const perfil = await getPerfil(user.uid)
      if (!perfil) { router.replace('/login'); return }
      router.replace(perfil.tipo === 'lider' ? '/dashboard' : '/discipulo')
    })
    return () => unsub()
  }, [router])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '32px', height: '32px', border: '3px solid var(--primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
