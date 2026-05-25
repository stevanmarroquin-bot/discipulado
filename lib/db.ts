import {
  doc, getDoc, getDocs, setDoc, deleteDoc,
  collection, query, where, writeBatch,
} from 'firebase/firestore'
import { db } from './firebase'
import { RegistroSemanal } from './mock-data'

// ── Tipos ──────────────────────────────────────────────────────────────────────

export interface PerfilLider {
  uid: string
  tipo: 'lider'
  nombre: string
  email: string
  iglesia: string
  cargo: string
}

export interface PerfilDiscipulo {
  uid: string
  tipo: 'discipulo'
  nombre: string
  email: string
  telefono: string
  fechaInicio: string
  iniciales: string
  discipuladorId: string   // UID del líder
  color: string
  moduloActual: string
}

export type Perfil = PerfilLider | PerfilDiscipulo

// ── Perfiles ───────────────────────────────────────────────────────────────────

export async function getPerfil(uid: string): Promise<Perfil | null> {
  const snap = await getDoc(doc(db, 'perfiles', uid))
  if (!snap.exists()) return null
  return { uid, ...snap.data() } as Perfil
}

export async function getDiscipulosDeLider(liderUid: string): Promise<PerfilDiscipulo[]> {
  // Query all profiles (lider or discipulo) that belong to this leader
  const q = query(
    collection(db, 'perfiles'),
    where('discipuladorId', '==', liderUid)
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() } as PerfilDiscipulo))
}

// ── Registros ─────────────────────────────────────────────────────────────────

export async function getRegistrosDeLider(liderUid: string): Promise<RegistroSemanal[]> {
  const q = query(
    collection(db, 'registros'),
    where('discipuladorId', '==', liderUid)
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as RegistroSemanal))
}

export async function getRegistrosDeDiscipulo(discipuloUid: string): Promise<RegistroSemanal[]> {
  const q = query(
    collection(db, 'registros'),
    where('discipuloId', '==', discipuloUid)
  )
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as RegistroSemanal))
}

export async function guardarRegistros(
  liderUid: string,
  registros: (RegistroSemanal & { discipuladorId: string })[]
): Promise<void> {
  const batch = writeBatch(db)
  for (const r of registros) {
    // ID determinístico: discipuloId_semana
    const docId = `${r.discipuloId}_${r.semana}`
    batch.set(doc(db, 'registros', docId), {
      discipuloId:    r.discipuloId,
      discipuladorId: liderUid,
      semana:         r.semana,
      asistioReunion: r.asistioReunion,
      asistiodomingo: r.asistiodomingo,
      participacion:  r.participacion,
      completoMaterial: r.completoMaterial,
      notas:          r.notas,
    })
  }
  await batch.commit()
}
