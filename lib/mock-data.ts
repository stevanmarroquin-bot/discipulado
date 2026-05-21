export interface Usuario {
  id: string
  nombre: string
  email: string
  password: string
  iglesia: string
  cargo: string
}

export interface Discipulo {
  id: string
  nombre: string
  email: string
  telefono: string
  fechaInicio: string
  iniciales: string
  discipuladorId: string
  color: string
}

export interface RegistroSemanal {
  id: string
  discipuloId: string
  semana: string
  asistioReunion: boolean
  asistiodomingo: boolean
  participacion: 'alta' | 'media' | 'baja' | null
  completoMaterial: boolean
  notas: string
}

export type ModuloCurriculo = 'fundamento' | 'formacion' | 'comunidad' | 'mision'

export const MODULOS: { id: ModuloCurriculo; nombre: string; color: string }[] = [
  { id: 'fundamento', nombre: 'Fundamento: El evangelio',               color: '#2D6A4F' },
  { id: 'formacion',  nombre: 'Formación: Viviendo desde El Evangelio', color: '#1A4A7A' },
  { id: 'comunidad',  nombre: 'Comunidad',                              color: '#7B3F8C' },
  { id: 'mision',     nombre: 'Misión',                                 color: '#C4893A' },
]

export interface Contenido {
  id: string
  titulo: string
  descripcion: string
  categoria: 'material-base' | 'devocional' | 'herramienta' | 'guia-lider'
  tipo: 'pdf' | 'video' | 'doc' | 'audio'
  semana?: number
  modulo?: ModuloCurriculo
  url: string
  fecha: string
}

export const USUARIOS: Usuario[] = [
  {
    id: 'u1',
    nombre: 'Carlos Méndez',
    email: 'carlos@iglesia.com',
    password: '1234',
    iglesia: 'Bread of Life Guatemala',
    cargo: 'Líder de Discipulado',
  },
  {
    id: 'u2',
    nombre: 'María López',
    email: 'maria@iglesia.com',
    password: '1234',
    iglesia: 'Bread of Life Guatemala',
    cargo: 'Líder de Discipulado',
  },
]

export const DISCIPULOS: Discipulo[] = [
  { id: 'd1', nombre: 'Ana García',      email: 'ana@gmail.com',     telefono: '5555-0001', fechaInicio: '2026-01-15', iniciales: 'AG', discipuladorId: 'u1', color: '#2D6A4F' },
  { id: 'd2', nombre: 'Roberto Sánchez', email: 'roberto@gmail.com', telefono: '5555-0002', fechaInicio: '2026-01-15', iniciales: 'RS', discipuladorId: 'u1', color: '#1A4A7A' },
  { id: 'd3', nombre: 'Sofía Herrera',   email: 'sofia@gmail.com',   telefono: '5555-0003', fechaInicio: '2026-02-01', iniciales: 'SH', discipuladorId: 'u1', color: '#7B3F8C' },
  { id: 'd4', nombre: 'Diego Morales',   email: 'diego@gmail.com',   telefono: '5555-0004', fechaInicio: '2026-02-01', iniciales: 'DM', discipuladorId: 'u1', color: '#A0522D' },
  { id: 'd5', nombre: 'Valeria Cruz',    email: 'valeria@gmail.com', telefono: '5555-0005', fechaInicio: '2026-02-15', iniciales: 'VC', discipuladorId: 'u1', color: '#C4893A' },
  { id: 'd6', nombre: 'Luis Ramírez',    email: 'luis@gmail.com',    telefono: '5555-0006', fechaInicio: '2026-03-10', iniciales: 'LR', discipuladorId: 'u1', color: '#2E6D6D' },
  { id: 'd7', nombre: 'Paula Castillo',  email: 'paula@gmail.com',   telefono: '5555-0007', fechaInicio: '2026-01-20', iniciales: 'PC', discipuladorId: 'u2', color: '#2D6A4F' },
  { id: 'd8', nombre: 'Andrés Torres',   email: 'andres@gmail.com',  telefono: '5555-0008', fechaInicio: '2026-02-10', iniciales: 'AT', discipuladorId: 'u2', color: '#1A4A7A' },
]

const SEMANAS = [
  '2026-03-09', '2026-03-16', '2026-03-23', '2026-03-30',
  '2026-04-06', '2026-04-13', '2026-04-20', '2026-04-27',
]

export const REGISTROS: RegistroSemanal[] = [
  // Ana García — excelente en todo
  ...SEMANAS.map((semana, i) => ({
    id: `r-d1-${i}`, discipuloId: 'd1', semana,
    asistioReunion: true,
    asistiodomingo: true,
    participacion: 'alta' as const,
    completoMaterial: true,
    notas: '',
  })),

  // Roberto Sánchez — buena asistencia, alguna falla
  ...SEMANAS.map((semana, i) => ({
    id: `r-d2-${i}`, discipuloId: 'd2', semana,
    asistioReunion: i !== 2 && i !== 5,
    asistiodomingo: i !== 2 && i !== 5 && i !== 6,
    participacion: (i % 2 === 0 && i !== 2 && i !== 5 ? 'alta' : i !== 2 && i !== 5 ? 'media' : null) as 'alta' | 'media' | null,
    completoMaterial: i !== 2 && i !== 5,
    notas: i === 2 ? 'Viaje de trabajo' : '',
  })),

  // Sofía Herrera — irregular en reuniones pero va a domingo
  ...SEMANAS.map((semana, i) => ({
    id: `r-d3-${i}`, discipuloId: 'd3', semana,
    asistioReunion: i % 3 !== 1,
    asistiodomingo: i !== 4 && i !== 7,
    participacion: (i % 3 !== 1 ? (i % 3 === 0 ? 'alta' : 'baja') : null) as 'alta' | 'baja' | null,
    completoMaterial: i % 3 === 0,
    notas: i % 3 === 1 ? 'No se pudo conectar ese día' : '',
  })),

  // Diego Morales — en riesgo, dejó de venir
  ...SEMANAS.map((semana, i) => ({
    id: `r-d4-${i}`, discipuloId: 'd4', semana,
    asistioReunion: i < 3,
    asistiodomingo: i < 4,
    participacion: (i < 3 ? 'media' : null) as 'media' | null,
    completoMaterial: i < 2,
    notas: i === 3 ? 'Tiene conflicto de horario, necesita seguimiento urgente' : '',
  })),

  // Valeria Cruz — muy consistente
  ...SEMANAS.map((semana, i) => ({
    id: `r-d5-${i}`, discipuloId: 'd5', semana,
    asistioReunion: i !== 6,
    asistiodomingo: true,
    participacion: ('alta') as const,
    completoMaterial: i !== 6,
    notas: '',
  })),

  // Luis Ramírez — nuevo, solo últimas 3 semanas
  ...SEMANAS.slice(5).map((semana, i) => ({
    id: `r-d6-${i}`, discipuloId: 'd6', semana,
    asistioReunion: true,
    asistiodomingo: i < 2,
    participacion: 'media' as const,
    completoMaterial: false,
    notas: i === 0 ? 'Nuevo en el proceso, aprendiendo' : '',
  })),

  // Paula Castillo (u2) — consistente
  ...SEMANAS.map((semana, i) => ({
    id: `r-d7-${i}`, discipuloId: 'd7', semana,
    asistioReunion: i !== 4,
    asistiodomingo: i !== 4 && i !== 7,
    participacion: (i !== 4 ? 'alta' : null) as 'alta' | null,
    completoMaterial: i !== 4,
    notas: '',
  })),

  // Andrés Torres (u2) — empezó lento
  ...SEMANAS.map((semana, i) => ({
    id: `r-d8-${i}`, discipuloId: 'd8', semana,
    asistioReunion: i > 1,
    asistiodomingo: i > 0,
    participacion: (i > 1 ? 'media' : null) as 'media' | null,
    completoMaterial: i > 2,
    notas: '',
  })),
]

export const CONTENIDO: Contenido[] = [
  // ── Fundamento: El evangelio (7 sesiones) ──
  { id: 'c1',  titulo: 'Sesión 1: ¿Qué es el discipulado?',          descripcion: 'Fundamentos bíblicos del discipulado y el llamado de Jesús.',          categoria: 'material-base', tipo: 'pdf', semana: 1, modulo: 'fundamento', url: '#', fecha: '2026-01-06' },
  { id: 'c2',  titulo: 'Sesión 2: La Gran Comisión',                  descripcion: 'Estudio profundo de Mateo 28:18-20 y su aplicación práctica.',         categoria: 'material-base', tipo: 'pdf', semana: 2, modulo: 'fundamento', url: '#', fecha: '2026-01-13' },
  { id: 'c3',  titulo: 'Sesión 3: El evangelio — la buena noticia',   descripcion: 'Qué es el evangelio, por qué importa, y cómo cambia todo.',           categoria: 'material-base', tipo: 'pdf', semana: 3, modulo: 'fundamento', url: '#', fecha: '2026-01-20' },
  { id: 'c4',  titulo: 'Sesión 4: ¿Qué es el pecado?',               descripcion: 'La condición humana y la necesidad real de un salvador.',               categoria: 'material-base', tipo: 'pdf', semana: 4, modulo: 'fundamento', url: '#', fecha: '2026-01-27' },
  { id: 'c5',  titulo: 'Sesión 5: La cruz y la resurrección',         descripcion: 'El corazón del evangelio: lo que Jesús hizo y lo que eso significa.',   categoria: 'material-base', tipo: 'pdf', semana: 5, modulo: 'fundamento', url: '#', fecha: '2026-02-03' },
  { id: 'c6',  titulo: 'Sesión 6: Fe, gracia y arrepentimiento',      descripcion: 'Cómo se recibe el evangelio y qué produce en la vida del creyente.',   categoria: 'material-base', tipo: 'pdf', semana: 6, modulo: 'fundamento', url: '#', fecha: '2026-02-10' },
  { id: 'c7',  titulo: 'Sesión 7: Mi nueva identidad en Cristo',      descripcion: 'Quiénes somos en Cristo y cómo esa verdad transforma nuestra vida.',   categoria: 'material-base', tipo: 'pdf', semana: 7, modulo: 'fundamento', url: '#', fecha: '2026-02-17' },

  // ── Formación: Viviendo desde El Evangelio ──
  { id: 'c8',  titulo: 'Sesión 1: Oración y dependencia de Dios',    descripcion: 'Cómo desarrollar una vida de oración auténtica y disciplinada.',       categoria: 'material-base', tipo: 'pdf', semana: 1, modulo: 'formacion', url: '#', fecha: '2026-03-03' },
  { id: 'c9',  titulo: 'Sesión 2: La Palabra como base',             descripcion: 'Disciplinas espirituales: cómo estudiar la Biblia personalmente.',      categoria: 'material-base', tipo: 'pdf', semana: 2, modulo: 'formacion', url: '#', fecha: '2026-03-10' },

  // ── Comunidad ──
  { id: 'c10', titulo: 'Sesión 1: Comunidad y rendición de cuentas', descripcion: 'La importancia del cuerpo de Cristo en el crecimiento espiritual.',    categoria: 'material-base', tipo: 'pdf', semana: 1, modulo: 'comunidad', url: '#', fecha: '2026-04-07' },

  // ── Guías para el líder ──
  { id: 'c11', titulo: 'Guía del Líder: Primeras sesiones',          descripcion: 'Cómo arrancar bien con tu discípulo: expectativas y ritmo.',            categoria: 'guia-lider',    tipo: 'pdf',          url: '#', fecha: '2026-01-01' },
  { id: 'c12', titulo: 'Guía del Líder: Manejando el desánimo',      descripcion: 'Qué hacer cuando tu discípulo quiere rendirse o pierde el ritmo.',     categoria: 'guia-lider',    tipo: 'pdf',          url: '#', fecha: '2026-02-15' },
  { id: 'c13', titulo: 'Guía del Líder: Señales de alerta',          descripcion: 'Cómo identificar y responder cuando alguien está luchando.',            categoria: 'guia-lider',    tipo: 'pdf',          url: '#', fecha: '2026-03-01' },
]

export const SEMANAS_DISPONIBLES = SEMANAS
