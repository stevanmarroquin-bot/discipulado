export interface Usuario {
  id: string
  nombre: string
  email: string
  password: string
  iglesia: string
  cargo: string
}

export type ModuloCurriculo = 'fundamento' | 'formacion' | 'comunidad' | 'mision'

export interface Discipulo {
  id: string
  nombre: string
  email: string
  password: string
  telefono: string
  fechaInicio: string
  iniciales: string
  discipuladorId: string
  color: string
  moduloActual?: ModuloCurriculo
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
  videoUrl?: string   // YouTube link
  audioUrl?: string   // Podcast / audio link
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
  { id: 'd1', nombre: 'Ana García',      email: 'ana@gmail.com',     password: '1234', telefono: '5555-0001', fechaInicio: '2026-01-15', iniciales: 'AG', discipuladorId: 'u1', color: '#2D6A4F', moduloActual: 'fundamento' },
  { id: 'd2', nombre: 'Roberto Sánchez', email: 'roberto@gmail.com', password: '1234', telefono: '5555-0002', fechaInicio: '2026-01-15', iniciales: 'RS', discipuladorId: 'u1', color: '#1A4A7A', moduloActual: 'fundamento' },
  { id: 'd3', nombre: 'Sofía Herrera',   email: 'sofia@gmail.com',   password: '1234', telefono: '5555-0003', fechaInicio: '2026-02-01', iniciales: 'SH', discipuladorId: 'u1', color: '#7B3F8C', moduloActual: 'fundamento' },
  { id: 'd4', nombre: 'Diego Morales',   email: 'diego@gmail.com',   password: '1234', telefono: '5555-0004', fechaInicio: '2026-02-01', iniciales: 'DM', discipuladorId: 'u1', color: '#A0522D', moduloActual: 'fundamento' },
  { id: 'd5', nombre: 'Valeria Cruz',    email: 'valeria@gmail.com', password: '1234', telefono: '5555-0005', fechaInicio: '2026-02-15', iniciales: 'VC', discipuladorId: 'u1', color: '#C4893A', moduloActual: 'fundamento' },
  { id: 'd6', nombre: 'Luis Ramírez',    email: 'luis@gmail.com',    password: '1234', telefono: '5555-0006', fechaInicio: '2026-03-10', iniciales: 'LR', discipuladorId: 'u1', color: '#2E6D6D', moduloActual: 'fundamento' },
  { id: 'd7', nombre: 'Paula Castillo',  email: 'paula@gmail.com',   password: '1234', telefono: '5555-0007', fechaInicio: '2026-01-20', iniciales: 'PC', discipuladorId: 'u2', color: '#2D6A4F', moduloActual: 'fundamento' },
  { id: 'd8', nombre: 'Andrés Torres',   email: 'andres@gmail.com',  password: '1234', telefono: '5555-0008', fechaInicio: '2026-02-10', iniciales: 'AT', discipuladorId: 'u2', color: '#1A4A7A', moduloActual: 'fundamento' },
]

// Semanas de mock data (para los registros de prueba)
const SEMANAS = [
  '2026-03-09', '2026-03-16', '2026-03-23', '2026-03-30',
  '2026-04-06', '2026-04-13', '2026-04-20', '2026-04-27',
]

// Todos los lunes desde el inicio del programa hasta fin de año
// Se actualiza agregando más fechas cuando sea necesario
const TODAS_LAS_SEMANAS = [
  '2026-01-05', '2026-01-12', '2026-01-19', '2026-01-26',
  '2026-02-02', '2026-02-09', '2026-02-16', '2026-02-23',
  '2026-03-02', '2026-03-09', '2026-03-16', '2026-03-23', '2026-03-30',
  '2026-04-06', '2026-04-13', '2026-04-20', '2026-04-27',
  '2026-05-04', '2026-05-11', '2026-05-18', '2026-05-25',
  '2026-06-01', '2026-06-08', '2026-06-15', '2026-06-22', '2026-06-29',
  '2026-07-06', '2026-07-13', '2026-07-20', '2026-07-27',
  '2026-08-03', '2026-08-10', '2026-08-17', '2026-08-24', '2026-08-31',
  '2026-09-07', '2026-09-14', '2026-09-21', '2026-09-28',
  '2026-10-05', '2026-10-12', '2026-10-19', '2026-10-26',
  '2026-11-02', '2026-11-09', '2026-11-16', '2026-11-23', '2026-11-30',
  '2026-12-07', '2026-12-14', '2026-12-21', '2026-12-28',
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
  // ── Fundamento: El evangelio ──
  { id: 'c1', titulo: 'Estudio 0: Discipulado',                           descripcion: '¿Qué es el discipulado y cuál es el llamado de Jesús?',                   categoria: 'material-base', tipo: 'pdf', semana: 0, modulo: 'fundamento', url: '/contenido/fundamento/estudio-0-discipulado.pdf',                              fecha: '2026-01-06' },
  { id: 'c2', titulo: 'Estudio 1: ¿Qué es el evangelio?',                 descripcion: 'Qué es el evangelio, por qué importa y cómo cambia todo.',                  categoria: 'material-base', tipo: 'pdf', semana: 1, modulo: 'fundamento', url: '/contenido/fundamento/estudio-1-que-es-el-evangelio.pdf',                   fecha: '2026-01-13' },
  { id: 'c3', titulo: 'Estudio 2: ¿Qué no es el evangelio?',              descripcion: 'Falsas versiones del evangelio y cómo distinguirlas de la verdad.',         categoria: 'material-base', tipo: 'pdf', semana: 2, modulo: 'fundamento', url: '/contenido/fundamento/estudio-2-que-no-es-el-evangelio.pdf',               fecha: '2026-01-20' },
  { id: 'c4', titulo: 'Estudio 3: ¿Cómo recibimos el evangelio? Parte I',  descripcion: 'Fe, arrepentimiento y la respuesta al evangelio — primera parte.',          categoria: 'material-base', tipo: 'pdf', semana: 3, modulo: 'fundamento', url: '/contenido/fundamento/estudio-3-como-recibimos-el-evangelio-parte-1.pdf',  fecha: '2026-01-27' },
  { id: 'c5', titulo: 'Estudio 4: ¿Cómo recibimos el evangelio? Parte II', descripcion: 'Fe, arrepentimiento y la respuesta al evangelio — segunda parte.',          categoria: 'material-base', tipo: 'pdf', semana: 4, modulo: 'fundamento', url: '/contenido/fundamento/estudio-4-como-recibimos-el-evangelio-parte-2.pdf', fecha: '2026-02-03' },
  { id: 'c6', titulo: 'Estudio 5: ¿Y ahora qué? Viviendo desde el Evangelio', descripcion: 'Cómo vivir el evangelio en el día a día una vez que lo hemos recibido.',  categoria: 'material-base', tipo: 'pdf', semana: 5, modulo: 'fundamento', url: '/contenido/fundamento/estudio-5-viviendo-desde-el-evangelio.pdf', fecha: '2026-02-10' },
  { id: 'c7', titulo: 'Estudio 6: Viviendo desde el Evangelio',              descripcion: 'Profundizando en cómo el evangelio transforma nuestra vida diaria.',       categoria: 'material-base', tipo: 'pdf', semana: 6, modulo: 'fundamento', url: '/contenido/fundamento/estudio-6-viviendo-desde-el-evangelio.pdf',  fecha: '2026-02-17' },
  { id: 'c8', titulo: 'Estudio 7: Perdón de pecados',                       descripcion: 'El perdón como base del evangelio y su impacto en nuestra vida.',            categoria: 'material-base', tipo: 'pdf', semana: 7, modulo: 'fundamento', url: '/contenido/fundamento/estudio-7-perdon-de-pecados.pdf',           fecha: '2026-03-09' },

  // ── Formación, Comunidad, Misión — próximamente ──
]

// Solo muestra semanas hasta hoy (no semanas futuras en el registro)
export const SEMANAS_DISPONIBLES = TODAS_LAS_SEMANAS.filter(
  (s) => new Date(s + 'T12:00:00') <= new Date()
)
