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
    slug: 'el-evangelio',
    nombre: 'El evangelio',
    subtitulo: 'Fundamento del discipulado',
    descripcion: 'El evangelio como base de todo lo que somos y hacemos como discípulos de Jesús.',
    color: '#2D6A4F',
    colorBg: '#E8F5EF',
    numero: 1,
  },
]

export const LECCIONES: Leccion[] = [
  {
    slug: 'estudio-1',
    numero: 1,
    modulo: 'fundamento',
    titulo: 'El evangelio',
    tags: ['evangelio', 'fe', 'salvación', 'base'],
    fecha: '2026-01-13',
    resumen: 'Entender claramente qué es el evangelio, qué no es, y cómo recibirlo y vivirlo, para que deje de ser información y se convierta en la realidad desde la cual lo vives todo.',
    contenido: `
<p style="font-style:italic;color:var(--text-muted);border-left:3px solid var(--border);padding:10px 16px;margin-bottom:32px"><strong>Propósito:</strong> Entender claramente qué es el evangelio, qué no es, y cómo recibirlo, vivirlo y compartirlo, para que deje de ser información que sabes y se convierta en la realidad desde la cual vives todo lo demás.</p>

<h2>El problema: un mensaje que creemos conocer</h2>

<p>Hay una pregunta honesta con la que vamos a comenzar. No la respondas todavía:</p>

<p><strong>¿Eres cristiano?</strong></p>

<p>Guarda esa pregunta. Volverás a ella antes de que este estudio termine.</p>

<p>El evangelio debería ser el tema más básico para cualquier creyente, algo que entiende, vive y puede compartir con facilidad. En teoría, alguien se convierte en creyente precisamente porque alguien le compartió el evangelio y lo creyó. Entonces todos los creyentes deberían entender el evangelio.</p>

<p>Pero la realidad es diferente. Muchos creyentes, en el mejor de los casos, han creído el evangelio pero permanecen confundidos, creyendo una versión incompleta o distorsionada. En el peor de los casos, muchos de los que se llaman a sí mismos cristianos nunca han creído el verdadero evangelio, sino una versión falsa de él.</p>

<blockquote>"No todo el que me dice: Señor, Señor, entrará en el reino de los cielos, sino el que hace la voluntad de mi Padre que está en los cielos. Muchos me dirán en aquel día: Señor, Señor, ¿no profetizamos en tu nombre, y en tu nombre echamos fuera demonios, y en tu nombre hicimos muchos milagros? Y entonces les declararé: Nunca os conocí; apartaos de mí, hacedores de maldad." <em>Mateo 7:21-23</em></blockquote>

<p>Esto no es un asunto menor. Nuestro destino eterno, y el destino eterno de otros, depende de entender esto correctamente. ¿Cómo podemos compartir el evangelio con otros si nosotros mismos no lo hemos entendido?</p>

<p>También hay una confusión común que vale la pena aclarar desde el principio: muchas personas tratan el evangelio y la Biblia como sinónimos. La Biblia no es el evangelio. La Biblia contiene el evangelio, pero no todo lo que la Biblia contiene es el evangelio. Entender la Biblia y sus doctrinas es necesario para entender el evangelio correctamente, pero no son la misma cosa.</p>

<p>Existe un solo evangelio verdadero, pero puede ser creído incorrectamente, en una versión distorsionada, incompleta o directamente falsa.</p>

<blockquote>"Estoy maravillado de que tan pronto os hayáis alejado del que os llamó por la gracia de Cristo, para seguir un evangelio diferente. No que haya otro, sino que hay algunos que os perturban y quieren pervertir el evangelio de Cristo." <em>Gálatas 1:6-7</em></blockquote>

<h2>¿Qué es el evangelio?</h2>

<p>La palabra griega es <em>euangélion</em>. Significa buenas noticias.</p>

<p>No es una palabra religiosa. En el mundo antiguo describía el anuncio de algo de gran importancia: una victoria militar, el nacimiento de un rey, una proclamación de paz. Era el anuncio de un evento que ya había ocurrido.</p>

<blockquote>"Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor." <em>Lucas 2:10-11</em></blockquote>

<p>El evangelio se refiere a un evento histórico, algo que ocurrió, no una idea, una filosofía o un sistema de principios. Cuando Pablo y los demás apóstoles predicaban el evangelio, estaban anunciando las buenas noticias de que Dios había actuado para salvar al mundo a través de la obra de Jesucristo.</p>

<h2>Lo que el evangelio no es</h2>

<p>Una pregunta de diagnóstico útil, usada por el pastor Martyn Lloyd-Jones, es simplemente preguntarle a alguien: "¿Eres cristiano?"</p>

<p>La mayoría de las personas revela que no ha entendido el evangelio cuando responde: <em>"Trato de serlo."</em></p>

<p>Cualquier persona cuya respuesta involucra algo que ella tiene que hacer para ser cristiana no ha entendido el evangelio, porque el evangelio no es algo que nosotros hacemos, sino lo que Jesús hizo por nosotros.</p>

<p>Todas las grandes religiones comunican lo que debemos hacer para ser salvos: ganarnos el cielo, alcanzar algún tipo de iluminación, seguir reglas, acumular mérito, realizar rituales. El cristianismo también tiene mandamientos y una manera de vivir, pero en su esencia es fundamentalmente diferente. No trata de lo que nosotros podemos hacer para llegar a Dios, sino de lo que Dios hizo para que pudiéramos llegar a él.</p>

<p><strong>Ser cristiano es recibir y creer lo que Dios ya hizo por ti.</strong></p>

<h2>¿Por qué son buenas noticias?</h2>

<p>La respuesta directa es que Jesús murió por ti. Pero eso solo tiene sentido si entiendes de qué necesitabas ser salvo.</p>

<p>Si alguien te dice "encontramos la cura" o "tu deuda fue cancelada", eso solo es una buena noticia si sabes que estás enfermo o endeudado. Si no lo estás, el anuncio es irrelevante.</p>

<p>Considera esto: si tu casa estuviera en llamas pero tú y tu familia ya estuvieran afuera a salvo, y de repente tu vecino entrara a la casa en llamas y muriera, quedarías devastado, pero también confundido. Su muerte parecería innecesaria. Pero si estuvieras atrapado adentro, a segundos de morir, y vieras a tu vecino entrar corriendo, sacarte y morir en el proceso, entonces entenderías completamente. Te amó lo suficiente como para dar su vida por la tuya.</p>

<p>Las buenas noticias del evangelio solo tienen sentido cuando entiendes tu condición real: que estás en un camino cuyo final es la muerte eterna, y que no puedes salvarte a ti mismo.</p>

<blockquote>"Por cuanto todos pecaron, y están destituidos de la gloria de Dios." <em>Romanos 3:23</em></blockquote>
<blockquote>"Porque la paga del pecado es muerte." <em>Romanos 6:23</em></blockquote>

<p>Hasta que honestamente digas "no puedo salvarme, necesito un Salvador", el evangelio nunca tendrá pleno sentido para ti. Sin diagnóstico no hay celebración, no hay gratitud por la medicina.</p>

<h2>¿Qué hacemos con el evangelio?</h2>

<p>¿Qué haces con una noticia? No la obedeces como sí obedeces una ley. La escuchas y respondes a ella.</p>

<h3>Paso 1: Determina si es verdad</h3>

<p>No todo anuncio merece ser creído de inmediato. Es responsabilidad de cada persona investigar honestamente si el mensaje de Jesús es verdadero. ¿Fue una persona histórica real? ¿Hizo lo que se afirma que hizo? ¿Resucitó de verdad? Ese es el lugar correcto para comenzar. La evidencia histórica de la vida, muerte y resurrección de Jesús es sustancial y ha sido examinada por eruditos serios durante siglos.</p>

<h3>Paso 2: Recíbelo</h3>

<p>Si es verdad, y lo es, entonces la respuesta es recibirlo. Eso es lo que la Biblia llama tener fe.</p>

<blockquote>"Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios." <em>Juan 1:12</em></blockquote>
<blockquote>"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." <em>Juan 3:16</em></blockquote>
<blockquote>"Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo." <em>Romanos 10:9</em></blockquote>

<p>La fe no es el esfuerzo humano para producir salvación. La fe es simplemente recibir: es la mano abierta con la que recibes lo que ya fue logrado. El evangelio no es un sistema de fe que construyes, ni una obediencia que debes mantener. Es, primariamente en su esencia, un regalo que recibes.</p>

<p>Como lo resumió Tim Keller: <em>"Aunque el evangelio no trata de algo que nosotros hacemos sino de lo que Dios hizo por nosotros, el evangelio sin embargo resulta en una vida nueva."</em></p>

<p>El evangelio no es el ABC de la vida cristiana, no es solo el punto de partida para después ir a cosas más avanzadas. El evangelio es la A hasta la Z. Se recibe por fe y también se vive por fe cada día.</p>

<blockquote>"...como está escrito: Mas el justo por la fe vivirá." <em>Romanos 1:17b</em></blockquote>

<h3>Paso 3: Compártelo</h3>

<p>D.A. Carson lo resume bien: porque el evangelio es una noticia, una buena noticia, debe ser proclamada, porque eso es lo que se hace con las noticias. No es ética para debatir, ni principios para admirar, ni un sistema de teología para estructurar, aunque el evangelio sí tiene todo eso. Es una noticia, y las noticias se proclaman.</p>

<blockquote>"Y les dijo: Id por todo el mundo y predicad el evangelio a toda criatura." <em>Marcos 16:15</em></blockquote>

<p>Cuando genuinamente entiendes lo que recibiste, la respuesta natural es querer que otros también lo tengan.</p>

<h2>Antes de terminar: responde la pregunta</h2>

<p>Al comienzo te pedimos que guardaras una pregunta. Aquí está de nuevo:</p>

<p><strong>¿Eres cristiano?</strong></p>

<p>Respóndela honestamente, en silencio, ahora mismo, y presta atención a cómo la respondes.</p>

<p>Si tu respuesta comienza con <em>"trato de serlo", "estoy en eso", "voy a la iglesia"</em> o cualquier variación que involucre algo que tú haces, hoy es el día para examinar si realmente has creído el evangelio o si has creído una versión incompleta de él.</p>

<p>Si tu respuesta es <em>"sí, porque Cristo ya hizo lo que yo no podía hacer, y yo lo he recibido por fe"</em>, eso es evidencia de que entiendes el verdadero evangelio.</p>

<p>El evangelio hace una sola demanda, que es la fe. Creer para recibir. Creer para vivir.</p>

<p><strong>El evangelio salva y transforma.</strong></p>
    `,
    guiaLider: `
<p>Estas preguntas están diseñadas para abrir conversación honesta, no para producir respuestas correctas. Dale espacio al grupo para pensar en voz alta.</p>

<h3>Pregunta 1</h3>
<p>El evangelio se define como la noticia de algo que ya ocurrió, no un consejo, no una filosofía, no un sistema de superación personal. La mayoría de los sistemas religiosos colocan el peso de la salvación en lo que la persona hace. El evangelio coloca el peso completamente en lo que Cristo ya hizo.</p>
<p><em>¿En qué área de tu vida cotidiana sigues operando como si tu aceptación ante Dios dependiera de tu rendimiento, tu consistencia, tu asistencia a la iglesia o tu historial moral? ¿Qué cambiaría esta semana si genuinamente creyeras que tu posición ante Dios se basa completamente en lo que Cristo hizo y no en lo que tú haces?</em></p>

<h3>Pregunta 2</h3>
<p>Este estudio dice que las buenas noticias solo tienen sentido cuando entiendes el diagnóstico, porque sin saber que estás enfermo, la cura es irrelevante. Muchas personas han crecido en la iglesia escuchando el evangelio sin nunca haber confrontado genuinamente el peso de su propio pecado y su incapacidad de salvarse a sí mismas.</p>
<p><em>¿Has tenido alguna vez un momento real de "no puedo salvarme", no como una declaración teológica con la que estás de acuerdo sino como una realidad vivida que sentiste de verdad? Si no lo has tenido, ¿qué te impide sentarte honestamente con esa verdad? Y si lo has tenido, ¿cómo ha moldeado ese momento la manera en que te relacionas con el evangelio ahora?</em></p>

<h3>Pregunta 3</h3>
<p>El evangelio debe ser recibido por fe y también vivido por fe cada día, no solo en el momento de la conversión. D.A. Carson dice que es una noticia que debe ser proclamada. Pero no puedes proclamar lo que no has internalizado.</p>
<p><em>Piensa en las personas de tu vida inmediata, familia, amigos, compañeros de trabajo, que nunca han escuchado una presentación clara del evangelio. ¿Cuál es el obstáculo honesto que te impide compartirlo con ellas? ¿Es que no estás completamente convencido de que sea verdad, que no sabes cómo explicarlo, o que tienes miedo de la reacción? Nombrar el obstáculo real es el primer paso para removerlo.</em></p>
    `,
    devocional: `
<p>Estos no son sugerencias opcionales. Son un sistema simple que puedes añadir a tu semana comenzando hoy.</p>

<h3>Día 1 — Examen honesto</h3>
<p>Responde la pregunta de Lloyd-Jones por escrito. No en voz alta ni en tu cabeza, sino por escrito: <em>"¿Soy cristiano? ¿Cómo lo sé?"</em> Escribe tu respuesta honesta. Si tu respuesta involucra algo que tú haces, dedica 15 minutos a leer Romanos 3:21-26 lentamente y pregúntate qué dice ese texto sobre quién realiza la obra de la justificación.</p>

<h3>Día 2 — Estudia el diagnóstico</h3>
<p>Lee Romanos 1:18 hasta 3:20 en una sola sesión. Este es el argumento de Pablo de que todo ser humano está sin excusa ante Dios. Léelo como si nunca lo hubieras leído antes. ¿Qué dice sobre tu condición aparte del evangelio? Escribe una sola oración resumiendo lo que encontraste.</p>

<h3>Día 3 — Estudia la solución</h3>
<p>Lee Romanos 3:21 hasta 5:21 en una sola sesión, el mismo Pablo presentando ahora el evangelio como la respuesta al diagnóstico. Presta atención a lo que el texto dice que tú debes hacer y a lo que Cristo ya hizo. Anota la diferencia.</p>

<h3>Día 4 — Investiga una pregunta</h3>
<p>Elige la pregunta sobre Jesús que más te inquieta: su resurrección, su existencia histórica, la confiabilidad de los evangelios, lo que sea. Dedica 30 minutos a leer una fuente seria sobre esa pregunta. No evites la pregunta, porque el evangelio pide fe honesta, no fe ciega.</p>

<h3>Día 5 — Identifica a una persona</h3>
<p>Piensa en una persona de tu vida que no tiene una comprensión clara del evangelio. No tienes que hablar con ella esta semana, pero escribe su nombre. Ora por ella específicamente por nombre durante cinco minutos. Y pregúntate honestamente: ¿cuál es la única cosa que me impide comenzar una conversación con esta persona sobre lo que estoy aprendiendo?</p>

<h3>Día 6 — Revisa y comparte</h3>
<p>Revisa tus notas de la semana. Escribe un párrafo, con tus propias palabras y sin usar vocabulario religioso, explicando qué es el evangelio y por qué importa. Si no puedes explicarlo de manera sencilla, todavía no lo has internalizado completamente. Si puedes, envíale ese párrafo a alguien esta semana.</p>

<h3>Día 7 — Descansa y recibe</h3>
<p>El evangelio no es una lista de tareas. Toma un día simplemente para recibir. Lee Efesios 1:3-14 lentamente y deja que penetre en ti que cada bendición espiritual descrita allí ya es tuya en Cristo, no porque lo que tú hiciste, sino porque lo que él hizo.</p>
    `,
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
