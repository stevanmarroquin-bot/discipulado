export type ModuloId = 'fundamento' | 'formacion' | 'comunidad' | 'mision'

export interface Modulo {
  id: ModuloId
  slug: string
  nombre: string
  subtitulo: string
  descripcion: string
  color: string
  colorBg: string
  numero: number
}

export interface Leccion {
  slug: string
  numero: number
  modulo: ModuloId
  titulo: string
  tags: string[]
  fecha: string
  resumen: string
  contenido: string        // HTML string — main lesson body
  devocional?: string      // HTML string
  guiaLider?: string       // HTML string
  youtubeUrl?: string
  spotifyUrl?: string
}

export const MODULOS: Modulo[] = [
  {
    id: 'fundamento',
    slug: 'fundamento',
    nombre: 'Fundamento',
    subtitulo: 'El evangelio',
    descripcion: 'El evangelio como base de todo lo que somos y hacemos.',
    color: '#2D6A4F',
    colorBg: '#E8F5EF',
    numero: 1,
  },
  {
    id: 'formacion',
    slug: 'formacion',
    nombre: 'Formación',
    subtitulo: 'Viviendo desde el evangelio',
    descripcion: 'Cómo el evangelio transforma cada área de nuestra vida diaria.',
    color: '#1A4A7A',
    colorBg: '#E8EFF8',
    numero: 2,
  },
  {
    id: 'comunidad',
    slug: 'comunidad',
    nombre: 'Comunidad',
    subtitulo: 'La vida en comunidad',
    descripcion: 'Lo que significa vivir la fe en comunidad dentro del reino.',
    color: '#7B3F8C',
    colorBg: '#F3E8F8',
    numero: 3,
  },
  {
    id: 'mision',
    slug: 'mision',
    nombre: 'Misión',
    subtitulo: 'Enviados al mundo',
    descripcion: 'La misión que Jesús nos entrega como discípulos.',
    color: '#C4893A',
    colorBg: '#FEF3E2',
    numero: 4,
  },
]

export const LECCIONES: Leccion[] = [
  {
    slug: 'estudio-0',
    numero: 0,
    modulo: 'fundamento',
    titulo: 'Discipulado',
    tags: ['llamado', 'base'],
    fecha: '2026-01-06',
    resumen: '¿Qué es el discipulado y cuál es el llamado de Jesús a sus seguidores?',
    contenido: `<p>Contenido próximamente.</p>`,
  },
]

// ── Helpers ────────────────────────────────────────────────────────────────────

export function getModulo(id: ModuloId): Modulo {
  return MODULOS.find((m) => m.id === id)!
}

export function getLeccionesPorModulo(modulo: ModuloId): Leccion[] {
  return LECCIONES.filter((l) => l.modulo === modulo).sort((a, b) => a.numero - b.numero)
}

export function getLeccion(modulo: ModuloId, slug: string): Leccion | undefined {
  return LECCIONES.find((l) => l.modulo === modulo && l.slug === slug)
}
