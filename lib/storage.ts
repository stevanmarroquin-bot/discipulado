import { RegistroSemanal, REGISTROS } from './mock-data'

const key = (userId: string) => `registros_${userId}`

/** Returns mock data merged with any localStorage overrides for this user */
export function getRegistros(userId: string): RegistroSemanal[] {
  if (typeof window === 'undefined') return [...REGISTROS]
  try {
    const raw = localStorage.getItem(key(userId))
    if (!raw) return [...REGISTROS]
    const overrides: RegistroSemanal[] = JSON.parse(raw)
    const base = [...REGISTROS]
    for (const o of overrides) {
      const i = base.findIndex(
        (r) => r.discipuloId === o.discipuloId && r.semana === o.semana
      )
      if (i >= 0) base[i] = o
      else base.push(o)
    }
    return base
  } catch {
    return [...REGISTROS]
  }
}

/** Upserts an array of registros into localStorage for this user */
export function saveRegistros(userId: string, updates: RegistroSemanal[]): void {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(key(userId))
    const saved: RegistroSemanal[] = raw ? JSON.parse(raw) : []
    for (const u of updates) {
      const i = saved.findIndex(
        (r) => r.discipuloId === u.discipuloId && r.semana === u.semana
      )
      if (i >= 0) saved[i] = u
      else saved.push(u)
    }
    localStorage.setItem(key(userId), JSON.stringify(saved))
  } catch {
    // silently ignore
  }
}
