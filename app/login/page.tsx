'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { USUARIOS } from '@/lib/mock-data'
import CrownLogo from '@/components/CrownLogo'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(() => {
      const user = USUARIOS.find(
        (u) => u.email === email.trim().toLowerCase() && u.password === password
      )
      if (user) {
        localStorage.setItem('discipulado_session', JSON.stringify(user))
        router.replace('/dashboard')
      } else {
        setError('Correo o contraseña incorrectos.')
        setLoading(false)
      }
    }, 600)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      flexDirection: 'column',
      gap: '40px',
    }}>
      {/* Logo */}
      <CrownLogo
        size={56}
        color="var(--text)"
        textColor="var(--text)"
        subTextColor="var(--text-muted)"
      />

      {/* Card */}
      <div style={{
        width: '100%',
        maxWidth: '380px',
        background: 'white',
        borderRadius: '20px',
        padding: '36px',
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
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              required
              style={{
                width: '100%',
                padding: '11px 14px',
                border: '1.5px solid var(--border)',
                borderRadius: '10px',
                fontSize: '14px',
                color: 'var(--text)',
                background: '#FAFAF8',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '7px' }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '11px 14px',
                border: '1.5px solid var(--border)',
                borderRadius: '10px',
                fontSize: '14px',
                color: 'var(--text)',
                background: '#FAFAF8',
              }}
            />
          </div>

          {error && (
            <div style={{ background: 'var(--red-bg)', color: 'var(--red)', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '500' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '4px',
              width: '100%',
              padding: '13px',
              background: loading ? '#E8DDD4' : 'var(--text)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '800',
              letterSpacing: '0.04em',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background .2s',
            }}
          >
            {loading && (
              <span style={{
                width: '15px', height: '15px',
                border: '2px solid rgba(255,255,255,0.4)',
                borderTopColor: 'white',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'spin 0.7s linear infinite',
              }}/>
            )}
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>

        <div style={{ marginTop: '24px', padding: '14px', background: 'var(--bg)', borderRadius: '10px', fontSize: '12px', color: 'var(--text-muted)' }}>
          <p style={{ fontWeight: '700', marginBottom: '4px' }}>Cuentas de prueba</p>
          <p>carlos@iglesia.com &nbsp;/&nbsp; 1234</p>
          <p>maria@iglesia.com &nbsp;/&nbsp; 1234</p>
        </div>
      </div>

      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
        Bread of Life Guatemala · Programa de Discipulado
      </p>
    </div>
  )
}
