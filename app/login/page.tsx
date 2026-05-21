'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { signIn } from '@/lib/auth'
import { getPerfil } from '@/lib/db'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const cred   = await signIn(email.trim().toLowerCase(), password)
      const perfil = await getPerfil(cred.user.uid)

      if (!perfil) {
        setError('No se encontró un perfil para este usuario.')
        setLoading(false)
        return
      }

      router.replace(perfil.tipo === 'lider' ? '/dashboard' : '/discipulo')
    } catch {
      setError('Correo o contraseña incorrectos.')
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px', flexDirection: 'column', gap: '36px',
    }}>
      <Image src="/logo.png" alt="Bread of Life Guatemala" width={80} height={80}
        style={{ width: '80px', height: '80px', objectFit: 'contain' }} priority />

      <div style={{
        width: '100%', maxWidth: '380px', background: 'white',
        borderRadius: '20px', padding: '36px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      }}>
        <div style={{ marginBottom: '28px' }}>
          <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '6px' }}>
            Programa de Discipulado
          </p>
          <h1 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text)', lineHeight: 1.2 }}>
            Ingresa a tu cuenta
          </h1>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '7px' }}>
              Correo electrónico
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com" required
              style={{ width: '100%', padding: '11px 14px', border: '1.5px solid var(--border)', borderRadius: '10px', fontSize: '14px', color: 'var(--text)', background: '#FAFAF8' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '7px' }}>
              Contraseña
            </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" required
              style={{ width: '100%', padding: '11px 14px', border: '1.5px solid var(--border)', borderRadius: '10px', fontSize: '14px', color: 'var(--text)', background: '#FAFAF8' }} />
          </div>

          {error && (
            <div style={{ background: 'var(--red-bg)', color: 'var(--red)', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '500' }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} style={{
            marginTop: '4px', width: '100%', padding: '13px',
            background: loading ? '#E8DDD4' : 'var(--text)', color: 'white',
            border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: '800',
            letterSpacing: '0.04em', cursor: loading ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            transition: 'background .2s',
          }}>
            {loading && (
              <span style={{
                width: '15px', height: '15px', border: '2px solid rgba(255,255,255,0.4)',
                borderTopColor: 'white', borderRadius: '50%', display: 'inline-block',
                animation: 'spin 0.7s linear infinite',
              }} />
            )}
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>

      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
        Bread of Life Guatemala · Programa de Discipulado
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
