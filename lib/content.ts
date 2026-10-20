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
  resumenClase?: string    // HTML string — structured class summary
  devocional?: string      // HTML string
  guiaLider?: string       // HTML string
  autor?: string
  youtubeUrl?: string
  spotifyUrl?: string
}

export const MODULOS: Modulo[] = [
  {
    id: 'fundamento',
    slug: 'el-evangelio',
    nombre: 'El Evangelio',
    subtitulo: 'En esta serie vas a aprender qué es el evangelio realmente, qué no es y por qué importa saberlo, cómo se recibe, y cómo se vive, no para el evangelio sino desde él.',
    descripcion: 'La mayoría de creyentes cree que ya conoce el evangelio. Lo escuchó una vez, respondió, y lo dejó atrás para cosas "más profundas." Ese es el error. El evangelio no es el ABC del cristiano, es la A y la Z. Es todo.',
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
    titulo: '¿Qué es el evangelio?',
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
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=o3mUSRINu2A&t=2s',
    spotifyUrl: 'https://open.spotify.com/episode/7sVCGVSwIU3rzXzeWqiZA3?si=exJtDYo2RiWInEM6ppAnkQ',
    resumenClase: `
<p>El evangelio es el fundamento de todo el discipulado cristiano. Antes de avanzar en cualquier otra doctrina, es necesario entender con precisión qué es, qué no es, y cómo se recibe, porque un evangelio mal entendido produce una fe mal construida.</p>

<p><strong>1. El problema.</strong> Todo ser humano está separado de Dios por el pecado y no puede salvarse a sí mismo. La paga del pecado es muerte, y ningún esfuerzo moral, religioso o ritual puede resolver esa deuda. Sin entender el diagnóstico, el evangelio no tiene sentido.</p>

<p><strong>2. El evangelio.</strong> Es la buena noticia de un evento histórico: Jesucristo murió por nuestros pecados, fue sepultado y resucitó al tercer día. No es una filosofía, un sistema de principios ni una invitación a mejorar. Es el anuncio de lo que Dios ya hizo para restaurar lo que el pecado rompió.</p>

<p><strong>3. La respuesta.</strong> El evangelio no se obedece como una ley, se recibe como una noticia. La fe es la mano abierta con la que se recibe lo que Cristo consumó. Esa misma fe es la que sostiene la vida cristiana cada día, y la que impulsa a compartir estas buenas noticias con otros.</p>

<p>La diferencia entre el verdadero evangelio y cualquier otra religión es esta: no trata de lo que nosotros hacemos para llegar a Dios, sino de lo que Dios hizo para que pudiéramos llegar a él.</p>
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
  {
    slug: 'estudio-2',
    numero: 2,
    modulo: 'fundamento',
    titulo: '¿Qué no es el evangelio?',
    tags: ['evangelio', 'legalismo', 'gracia', 'arrepentimiento'],
    fecha: '2026-10-19',
    resumen: 'Descubrir, a través de la parábola de los dos hijos perdidos, las dos formas equivocadas de llegar a Dios y la única forma verdadera: el evangelio.',
    contenido: `
<p style="font-style:italic;color:var(--text-muted);border-left:3px solid var(--border);padding:10px 16px;margin-bottom:32px"><strong>Propósito:</strong> Entender las dos formas equivocadas en las que intentamos relacionarnos con Dios, el legalismo y el relativismo, para reconocer cuál de las dos vive en nosotros y volver a la única forma verdadera de llegar al Padre: el evangelio.</p>

<h2>El problema: dos hijos perdidos</h2>

<p>En el estudio anterior vimos qué es el evangelio: las buenas noticias que comunican el plan de salvación de Dios para el mundo, Jesús, su encarnación, su vida perfecta, su sacrificio y su resurrección. Un evento histórico, algo que fue hecho hacia nosotros.</p>

<p>Ahora necesitamos ver qué <em>no</em> es el evangelio. Y para eso Jesús nos dejó una de sus historias más conocidas. Pero antes de leerla, una pregunta para guardar:</p>

<p><strong>Si Dios hiciera una fiesta por el peor pecador que conoces, ¿te alegrarías o te molestaría?</strong></p>

<p>Mira el contexto en el que Jesús cuenta esta parábola:</p>

<blockquote>"Se acercaban a Jesús todos los publicanos y pecadores para oírle, y los fariseos y los escribas murmuraban, diciendo: Este a los pecadores recibe, y con ellos come. Entonces él les refirió esta parábola, diciendo:" <em>Lucas 15:1-3</em></blockquote>

<p>Después de contarles la parábola de la oveja perdida y la de la moneda perdida, Jesús comienza así:</p>

<blockquote>"También dijo: Un hombre tenía dos hijos." <em>Lucas 15:11</em></blockquote>

<p>Solemos llamarla "la parábola del hijo pródigo", y por eso nos enfocamos solo en el hijo menor. El mensaje que normalmente sacamos es: <em>"No importa qué tan perdido estés, si regresas al Padre, el Padre te recibe."</em> Eso es cierto, pero es solo la mitad. La parábola es acerca de <strong>dos</strong> hijos perdidos.</p>

<h2>Las dos audiencias de Jesús</h2>

<p>Jesús tenía frente a él a dos grupos: los publicanos y pecadores, que se acercaban para oírle, y los fariseos y escribas, que murmuraban. El hijo menor representa al primer grupo. El hijo mayor representa al segundo.</p>

<p>Es un patrón que se repite en los evangelios: Zaqueo y los que murmuraban (Lucas 19), la mujer sorprendida en adulterio y los escribas y fariseos (Juan 8), María y Marta. Siempre hay alguien perdido afuera y alguien perdido adentro.</p>

<p><strong>Hay perdidos de afuera y perdidos de adentro.</strong></p>

<p>La esencia de la parábola es esta: hay dos formas equivocadas de intentar relacionarnos con Dios, dos formas de perdernos, dos evangelios falsos. Y hay solo una forma de llegar a Dios.</p>

<p>A esas dos formas se les ha dado distintos nombres: legalismo y relativismo, moralismo y antinomianismo, religiosidad e irreligiosidad. La forma legalista dice: <em>"Tengo que obedecer para llegar a Dios."</em> La forma relativista dice: <em>"No existen reglas, yo decido cómo quiero vivir."</em> Uno dice "me porto bien para ganarme el cielo", el otro dice "no existe el cielo, puedo vivir como quiera". Uno dice "me porto bien para merecer cosas buenas", el otro dice "no necesito portarme bien, solo perseguir lo que quiero".</p>

<p>Y la parábola muestra que ambos grupos están perdidos:</p>

<blockquote>"No muchos días después, juntándolo todo el hijo menor, se fue lejos a una provincia apartada; y allí desperdició sus bienes viviendo perdidamente." <em>Lucas 15:13</em></blockquote>

<blockquote>"Entonces se enojó, y no quería entrar. Salió por tanto su padre, y le rogaba que entrase." <em>Lucas 15:28</em></blockquote>

<p>Los dos están lejos del Padre, y el Padre tiene que salir a buscar a los dos.</p>

<h2>El evangelio no es una religión de obras</h2>

<p>El evangelio no es legalismo, ni religiosidad, ni moralismo. <strong>El evangelio no es algo que hacemos, sino algo que fue hecho por nosotros.</strong> El evangelio sí produce cambios y fruto en nuestra vida, pero el evangelio no es el fruto ni los cambios.</p>

<h3>El hijo mayor está igual de perdido que el menor</h3>

<p>Por fuera, sus vidas se ven muy diferentes. Uno malgastó todo, el otro se quedó en casa trabajando. Por eso nos cuesta entenderlo.</p>

<p>Pero cuidado: el hijo mayor no era perfecto. Él <em>creía</em> serlo. "Tantos años te sirvo, no habiéndote desobedecido jamás" (Lucas 15:29), dice, y en ese mismo momento está desobedeciendo: su padre le ruega que entre a la fiesta y él se niega. Su problema no era que no tuviera pecado, sino que no lo veía. Estaba tan lejos del Padre como su hermano, solo que sin saberlo.</p>

<p><strong>El problema del hijo mayor no es que fuera perfecto, sino que creía serlo.</strong></p>

<p>La meta nunca fue ser morales, religiosos o "buenos". <strong>La meta es llegar a Dios.</strong></p>

<p>¿Qué fue lo que no dejó entrar al hijo mayor a la fiesta? No fue su pecado. Fue su propia justicia, sus buenas obras, su "gran moral". Fue su orgullo, su confianza en su propio esfuerzo.</p>

<p><strong>El impedimento más grande para llegar a Dios no es el pecado, es el orgullo: la confianza en nuestra propia justicia.</strong></p>

<p>Los hermanos menores saben que no tienen justicia propia, y por eso les es más fácil recibir gracia. Siempre son los perdidos, los pecadores notorios, los "de afuera", los que entienden el evangelio primero. Jesús se lo dijo a los principales sacerdotes y a los ancianos del pueblo:</p>

<blockquote>"De cierto os digo, que los publicanos y las rameras van delante de vosotros al reino de Dios." <em>Mateo 21:31</em></blockquote>

<p>Los hermanos mayores, en cambio, están orgullosos de sus buenas obras. Creen tener "algo" de justicia. Y la confianza en nuestra propia justicia es una forma de evitar a Jesús: si puedes salvarte a ti mismo, no necesitas un Salvador. Por eso, al final, los hermanos mayores rechazan a Jesús.</p>

<h3>En el fondo, los dos hacen lo mismo</h3>

<p>Los dos hijos dicen y hacen lo mismo, solo con métodos diferentes. El hijo menor le dice al Padre: <em>"Quiero lo que das, pero no a ti."</em> El hijo mayor dice exactamente lo mismo: <em>"Quiero tus cosas, pero me las voy a ganar siendo obediente."</em> Su lógica es: <em>Dios me tiene que dar lo que merezco. Obedezco para controlar a Dios.</em></p>

<p>El menor desobedece para sí mismo. El mayor obedece para sí mismo. Los dos viven para sí mismos, y los dos están perdidos.</p>

<p>El antídoto del orgullo es la clave del evangelio: la humildad, la pobreza en espíritu. El hijo menor, al no tener nada de qué estar orgulloso, al no poder confiar en su propia justicia, regresa al Padre y encuentra gracia.</p>

<h3>¿Eres un hermano mayor?</h3>

<p>Muchos en la iglesia creen estar en el evangelio, pero en realidad son hermanos mayores. Las señales de perdición del hijo menor son fáciles de ver. Las del mayor no tanto, pero existen. Revisa tu corazón con estas señales:</p>

<p><strong>Estás enojado con Dios por su "injusticia".</strong> "Entonces se enojó, y no quería entrar" (Lucas 15:28). Cuando Dios bendice a otros que no lo "merecen", algo en ti protesta.</p>

<p><strong>Tu obediencia es condicional y sin gozo.</strong> "He aquí, tantos años te sirvo, no habiéndote desobedecido jamás, y nunca me has dado ni un cabrito para gozarme con mis amigos" (Lucas 15:29). Sirves, pero como un empleado que espera su pago, no como un hijo.</p>

<p><strong>Usas a Dios para obtener lo que quieres.</strong> Tu obediencia es un medio para tratar de controlar a Dios. Oras y obedeces por necesidad, no por intimidad.</p>

<p><strong>Eres frío hacia los perdidos.</strong> "Pero cuando vino este tu hijo" (Lucas 15:30). Ni siquiera lo llama "mi hermano".</p>

<p><strong>Tienes complejo de superioridad.</strong> <em>Yo estoy bien, tú estás mal.</em></p>

<p><strong>No estás seguro del amor de Dios.</strong> El padre tiene que recordarle lo que siempre fue cierto: "Hijo, tú siempre estás conmigo, y todas mis cosas son tuyas" (Lucas 15:31).</p>

<h2>El evangelio no es una vida sin reglas</h2>

<p>El error opuesto es igual de peligroso: el relativismo, el antinomianismo, la irreligiosidad. Suena así: <em>"Como el evangelio no se trata de seguir reglas, entonces puedo hacer lo que quiera y vivir como quiera. Dios me perdona, su gracia me cubre."</em></p>

<p>Pero el hijo menor también estaba perdido. La forma en la que vivía también era una forma equivocada de relacionarse con Dios:</p>

<blockquote>"Mas era necesario hacer fiesta y regocijarnos, porque este tu hermano era muerto, y ha revivido; se había perdido, y es hallado." <em>Lucas 15:32</em></blockquote>

<p>El orgullo y la confianza en nuestras propias obras son un impedimento para llegar a Dios. <strong>También lo es el pecado.</strong></p>

<h3>No todos los perdidos reciben gracia</h3>

<p>Solo los que reconocen su pecado. Mira lo que pasó con el hijo menor:</p>

<blockquote>"Y volviendo en sí, dijo: ¡Cuántos jornaleros en casa de mi padre tienen abundancia de pan, y yo aquí perezco de hambre! Me levantaré e iré a mi padre, y le diré: Padre, he pecado contra el cielo y contra ti. Ya no soy digno de ser llamado tu hijo; hazme como a uno de tus jornaleros." <em>Lucas 15:17-19</em></blockquote>

<p>Tal vez fue por tocar fondo, pero volvió en sí. Se dio cuenta de su pecado y lo reconoció. Sabía que no era digno de ser hijo. Estaba dispuesto a conformarse con ser un trabajador, a trabajar para compensar sus errores. <strong>Estaba implorando misericordia.</strong></p>

<h3>Los dos hijos necesitan arrepentirse</h3>

<p>Los dos están perdidos, los dos necesitan al Padre, y el Padre sale a buscar a los dos. El legalismo dice: <em>"Tienes que creer y vivir correctamente para ser salvo."</em> El antinomianismo dice: <em>"Porque eres salvo, no necesitas vivir una vida santa. Dios te ama y te acepta tal y como eres, en pecado, sin arrepentimiento."</em> Los dos están equivocados.</p>

<blockquote>"El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio." <em>Marcos 1:15</em></blockquote>

<p>La palabra griega para arrepentimiento es <em>metánoia</em>: un cambio radical de mentalidad y de dirección, un giro completo en la forma de pensar y de actuar. Es reorientar la vida hacia una nueva dirección. Es volver en sí e ir al Padre.</p>

<p><strong>Nos arrepentimos de nuestro pecado, y también de nuestro orgullo y de la confianza en nuestra propia justicia.</strong></p>

<h2>El evangelio es la única forma de llegar a Dios</h2>

<p>El evangelio tiene dos grandes enemigos. Se le atribuye a Tertuliano esta frase: <em>"Así como Jesús fue crucificado entre dos ladrones, el evangelio es crucificado entre dos errores."</em> Religión e irreligión. Legalismo y antinomianismo. Moralismo y relativismo.</p>

<p>Pero la parábola no solo nos enseña las formas equivocadas de llegar a Dios. También nos enseña la correcta: el evangelio.</p>

<h3>Llegamos al Padre porque el Padre sale a buscarnos</h3>

<blockquote>"Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó." <em>Lucas 15:20</em></blockquote>

<p>El padre corre hacia el menor, y también sale a rogarle al mayor que entre. Los dos estaban lejos, y el Padre tuvo que salir a buscar a los dos.</p>

<h3>La gracia tiene un costo</h3>

<blockquote>"Pero el padre dijo a sus siervos: Sacad el mejor vestido, y vestidle; y poned un anillo en su mano, y calzado en sus pies. Y traed el becerro gordo y matadlo, y comamos y hagamos fiesta." <em>Lucas 15:22-23</em></blockquote>

<p>Un teólogo señala algo que fácilmente pasamos por alto: <em>el hijo menor ya había malgastado su herencia, así que lo que el padre le dio al menor salió de lo que le correspondía al mayor.</em> Por eso el padre le dice al mayor: "todas mis cosas son tuyas". El hermano mayor paga el precio de la restitución del menor.</p>

<h3>Jesús es el verdadero hermano mayor</h3>

<p>Todos los hermanos mayores creen que su obediencia es suficiente, pero en realidad somos pecadores:</p>

<blockquote>"Por cuanto todos pecaron, y están destituidos de la gloria de Dios." <em>Romanos 3:23</em></blockquote>

<blockquote>"Si bien todos nosotros somos como suciedad, y todas nuestras justicias como trapo de inmundicia." <em>Isaías 64:6</em></blockquote>

<p>Jesús es el único hermano mayor que realmente obedeció a la perfección. Ese hermano mayor salió a buscarnos: se encarnó. Obedeció a la perfección, así que merecía la fiesta y la herencia. Y se puso en nuestro lugar, pagó el precio de nuestro pecado y nos dio su recompensa, para que pudiéramos volver a casa.</p>

<p><strong>El evangelio no es religión ni irreligión. Es una tercera forma de relacionarnos con Dios, y es la única forma de llegar a Él.</strong></p>

<h2>Antes de terminar: vuelve a la fiesta</h2>

<p>Al principio te pregunté: si Dios hiciera una fiesta por el peor pecador que conoces, ¿te alegrarías o te molestaría?</p>

<p>Si tu primera reacción fue incomodidad, tal vez hay más hermano mayor en ti de lo que pensabas. Y si te identificaste con el hijo menor, el que se fue lejos, el Padre ya está corriendo hacia ti.</p>

<p>De cualquier forma, la invitación es la misma: arrepiéntete de tu pecado y de tu propia justicia, vuelve en ti, y entra a la fiesta que tu verdadero hermano mayor pagó por ti.</p>
    `,
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=dn4jS4ZFaNo',
    spotifyUrl: 'https://open.spotify.com/episode/4AO09GRm53Y683cUQIvRvK',
    resumenClase: `
<p>La parábola de Lucas 15 no es la historia de un hijo perdido, sino de dos. Con ella Jesús confronta a sus dos audiencias, los pecadores que se acercaban y los religiosos que murmuraban, y muestra que hay dos formas equivocadas de intentar llegar a Dios.</p>

<p><strong>1. El evangelio no es una religión de obras.</strong> El hijo mayor creía que nunca había desobedecido, pero en el momento clave desobedeció: su padre le rogó que entrara a la fiesta y se negó. No era perfecto, creía serlo, y estaba igual de lejos que su hermano. Lo que lo dejó afuera no fue su pecado, sino su orgullo y la confianza en su propia justicia. El legalismo usa la obediencia para tratar de controlar a Dios.</p>

<p><strong>2. El evangelio no es una vida sin reglas.</strong> El hijo menor también estaba perdido y muerto. El relativismo usa la gracia como excusa para vivir como uno quiere. Solo recibe gracia quien vuelve en sí, reconoce su pecado y se arrepiente.</p>

<p><strong>3. El evangelio es la única forma de llegar a Dios.</strong> El Padre sale a buscar a los dos hijos. Jesús es el verdadero hermano mayor: obedeció a la perfección, pagó el costo de nuestra restitución y nos da su recompensa para que volvamos a casa.</p>

<p>El evangelio no es religión ni irreligión. Es la gracia de un Padre que corre hacia nosotros, recibida con arrepentimiento del pecado y de la propia justicia.</p>
    `,
    guiaLider: `
<p>Estas preguntas buscan que cada persona se vea en la parábola, no que identifique a otros. Dale espacio al grupo para responder con honestidad.</p>

<h3>Pregunta 1</h3>
<p>Solemos leer esta parábola como la historia del hijo menor, pero Jesús la contó frente a fariseos y escribas que murmuraban. El hijo mayor decía que nunca había desobedecido, pero desobedeció al negarse a entrar a la fiesta cuando su padre se lo rogó. No era perfecto, creía serlo, y fue el que se quedó afuera. Lo que lo dejó afuera fue su orgullo, que no le dejaba ver su propio pecado.</p>
<p><em>¿Con cuál de los dos hijos te identificas más hoy, y por qué? Si eres honesto, ¿cuál de las señales del hermano mayor ves en tu vida: enojo con Dios, obediencia sin gozo, usar a Dios para obtener cosas, frialdad hacia los perdidos, superioridad o inseguridad del amor de Dios?</em></p>

<h3>Pregunta 2</h3>
<p>El estudio dice que el hijo menor y el mayor, en el fondo, hacen lo mismo: los dos quieren las cosas del Padre pero no al Padre. Uno desobedece para sí mismo y el otro obedece para sí mismo. Es posible hacer todo lo correcto por las razones equivocadas.</p>
<p><em>Piensa en tu oración, tu servicio en la iglesia o tu obediencia esta semana. ¿Cuánto de eso nace de intimidad con Dios y cuánto de querer obtener algo de Él o de sentirte en control? ¿Cómo sería obedecer como hijo y no como empleado?</em></p>

<h3>Pregunta 3</h3>
<p>El arrepentimiento, <em>metánoia</em>, es un cambio radical de dirección. El estudio dice que no solo nos arrepentimos de nuestro pecado, sino también de nuestra propia justicia. Y nos recuerda que Jesús es el verdadero hermano mayor que pagó el precio para que volviéramos a casa.</p>
<p><em>¿Alguna vez te has arrepentido de tus "buenas obras", de confiar en ellas para estar bien con Dios? ¿Qué cambia en la forma en que tratas a las personas "más perdidas" que tú cuando recuerdas que Jesús pagó tu fiesta igual que la de ellos?</em></p>
    `,
    devocional: `
<p>Esta semana vas a vivir dentro de la parábola. Cada día tiene una sola tarea concreta.</p>

<h3>Día 1: Lee la historia completa</h3>
<p>Lee Lucas 15 completo, en una sola sesión, sin saltarte la oveja perdida y la moneda perdida. Después escribe en una oración qué tienen en común las tres historias y qué hace diferente a la tercera.</p>

<h3>Día 2: Examen del hermano mayor</h3>
<p>Repasa las seis señales del hermano mayor de este estudio. Escribe cuál de ellas ves con más claridad en tu vida y un ejemplo concreto de esta semana. No lo justifiques, solo nómbralo delante de Dios.</p>

<h3>Día 3: Examen del hermano menor</h3>
<p>Lee Lucas 15:11-19. ¿Hay un área de tu vida donde estás usando la gracia como excusa para vivir como quieres? Escríbela. Luego lee en voz alta la oración del hijo menor en los versículos 18 y 19 y hazla tuya.</p>

<h3>Día 4: Estudia el arrepentimiento</h3>
<p>Lee Marcos 1:14-15 y Lucas 18:9-14, la parábola del fariseo y el publicano. Compara las dos oraciones. Escribe qué te enseña ese pasaje sobre arrepentirte no solo de tu pecado, sino de tu propia justicia.</p>

<h3>Día 5: Ora por un "hermano menor"</h3>
<p>Piensa en una persona que consideras lejos de Dios, alguien a quien has visto con cierta superioridad. Escribe su nombre y ora por ella cinco minutos, pidiendo que el Padre corra hacia ella como corrió hacia el hijo menor, y que quite cualquier frialdad tuya hacia ella.</p>

<h3>Día 6: Mira al verdadero hermano mayor</h3>
<p>Lee Filipenses 2:5-11 y Hebreos 2:10-11. Escribe un párrafo, con tus propias palabras, explicando cómo Jesús es el hermano mayor que salió a buscarte y pagó el precio de tu regreso a casa.</p>

<h3>Día 7: Descansa en la fiesta</h3>
<p>Lee Romanos 8:14-39 lentamente. Deja que penetre en ti lo que el padre le dijo al hijo mayor: "Hijo, tú siempre estás conmigo, y todas mis cosas son tuyas." No tienes que ganarte un lugar en la mesa. Ya fue pagado.</p>
    `,
  },
  {
    slug: 'estudio-3',
    numero: 3,
    modulo: 'fundamento',
    titulo: '¿Cómo recibimos el evangelio? Parte I',
    tags: ['evangelio', 'arrepentimiento', 'fe', 'humildad'],
    fecha: '2026-10-19',
    resumen: 'Entender que el evangelio se recibe por medio del arrepentimiento y la fe, descubrir qué es el verdadero arrepentimiento y por qué las buenas noticias solo son buenas para quien sabe que las necesita.',
    contenido: `
<p style="font-style:italic;color:var(--text-muted);border-left:3px solid var(--border);padding:10px 16px;margin-bottom:32px"><strong>Propósito:</strong> Entender cómo se recibe el evangelio, por medio del arrepentimiento y la fe, y descubrir qué es el verdadero arrepentimiento, para que las buenas noticias dejen de ofendernos y se conviertan en buenas noticias para nosotros.</p>

<h2>El problema: buenas noticias que ofenden</h2>

<p>Hay una pregunta con la que vamos a comenzar. Guárdala, porque volveremos a ella al final:</p>

<p><strong>¿Son las buenas noticias realmente buenas noticias para ti?</strong></p>

<p>Parece una pregunta extraña. Si son buenas noticias, ¿cómo no van a serlo? Pero mira lo que ocurrió el día que Jesús predicó en su propio pueblo:</p>

<blockquote>"Vino a Nazaret, donde se había criado; y en el día de reposo entró en la sinagoga, conforme a su costumbre, y se levantó a leer. Y se le dio el libro del profeta Isaías; y habiendo abierto el libro, halló el lugar donde estaba escrito: El Espíritu del Señor está sobre mí, Por cuanto me ha ungido para dar buenas nuevas a los pobres; Me ha enviado a sanar a los quebrantados de corazón; A pregonar libertad a los cautivos, Y vista a los ciegos; A poner en libertad a los oprimidos; A predicar el año agradable del Señor. Y enrollando el libro, lo dio al ministro, y se sentó; y los ojos de todos en la sinagoga estaban fijos en él. Y comenzó a decirles: Hoy se ha cumplido esta Escritura delante de vosotros." <em>Lucas 4:16-21</em></blockquote>

<p>Al principio, todos estaban encantados. Pero pocos minutos después, esas mismas personas estaban tan llenas de ira que lo sacaron de la ciudad para despeñarlo desde un monte. La misma gente que se maravilló de sus palabras quiso matarlo. ¿Qué pasó en medio?</p>

<p>Antes de responder, recordemos dónde estamos. En los estudios anteriores vimos qué es el evangelio. Cuando Jesús dice que fue ungido para dar <em>buenas nuevas</em>, usa la palabra griega <em>euangelízo</em>, anunciar buenas noticias. El evangelio son las buenas noticias que comunican el plan de salvación de Dios al mundo: Jesús vino a salvarnos.</p>

<p>También vimos qué no es el evangelio. No es una religión de obras: no es legalismo, religiosidad ni moralismo. Y tampoco es una vida sin reglas: no es relativismo, antinomianismo ni irreligiosidad. El evangelio no es algo que nosotros hacemos, sino algo que fue hecho por nosotros.</p>

<p>Ahora la pregunta es otra: si el evangelio es algo que fue hecho por nosotros, <strong>¿cómo lo recibimos?</strong></p>

<h2>¿Cómo recibimos el evangelio? Arrepentimiento y fe</h2>

<p>¿Qué haces con una noticia? La escuchas y respondes a ella. Lo primero es preguntarte si es cierta. Y la respuesta es sí, lo que Jesús hizo es verdad. Entonces la crees. Eso es la fe.</p>

<blockquote>"Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios." <em>Juan 1:12</em></blockquote>
<blockquote>"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." <em>Juan 3:16</em></blockquote>
<blockquote>"Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo." <em>Romanos 10:9</em></blockquote>
<blockquote>"Porque en el evangelio la justicia de Dios se revela por fe y para fe, como está escrito: Mas el justo por la fe vivirá." <em>Romanos 1:17</em></blockquote>

<p>Fe es creer, confiar, descansar. Es recibir lo que Cristo ya hizo, apoyar todo tu peso sobre él.</p>

<p>Pero, ¿y el arrepentimiento? Muchas veces hablamos de la fe como si fuera lo único, pero cuando Jesús comenzó a predicar, nunca separó las dos cosas:</p>

<blockquote>"Jesús vino a Galilea predicando el evangelio del reino de Dios, diciendo: El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio." <em>Marcos 1:14-15</em></blockquote>

<p>El arrepentimiento y la fe van juntos. Son dos lados de la misma respuesta al evangelio.</p>

<p><strong>Hasta que no haya arrepentimiento, no puede haber verdadera fe.</strong></p>

<h2>Nazaret: los que no creyeron</h2>

<p>Lucas 4 nos muestra a un grupo de personas que no creyeron. No tuvieron fe. Y no solo eso, hasta quisieron matar a Jesús. ¿Por qué no creyeron? Porque no se arrepintieron.</p>

<p>Mira el contexto. Esto ocurrió en Nazaret, el pueblo donde Jesús se crió. Lo conocían. Lo habían visto crecer. Y al principio, les gustó lo que leyó y cómo lo explicó:</p>

<blockquote>"Y todos daban buen testimonio de él, y estaban maravillados de las palabras de gracia que salían de su boca, y decían: ¿No es este el hijo de José?" <em>Lucas 4:22</em></blockquote>

<p>Estaban dispuestos a creer. Entonces, ¿por qué no creyeron? Porque Jesús les explicó bien el evangelio, y eso los ofendió:</p>

<blockquote>"Él les dijo: Sin duda me diréis este refrán: Médico, cúrate a ti mismo; de tantas cosas que hemos oído que se han hecho en Capernaum, haz también aquí en tu tierra. Y añadió: De cierto os digo, que ningún profeta es acepto en su propia tierra. Y en verdad os digo que muchas viudas había en Israel en los días de Elías, cuando el cielo fue cerrado por tres años y seis meses, y hubo una gran hambre en toda la tierra; pero a ninguna de ellas fue enviado Elías, sino a una mujer viuda en Sarepta de los Estados Sidón. Y muchos leprosos había en Israel en tiempo del profeta Eliseo; pero ninguno de ellos fue limpiado, sino Naamán el sirio. Al oír estas cosas, todos en la sinagoga se llenaron de ira; y levantándose, le echaron fuera de la ciudad, y le llevaron hasta la cumbre del monte sobre el cual estaba edificada la ciudad de ellos, para despeñarle. Mas él pasó por en medio de ellos, y se fue." <em>Lucas 4:23-30</em></blockquote>

<p><strong>Las buenas noticias son buenas solo para quien sabe que está en malas noticias.</strong></p>

<h2>Buenas noticias para quien sabe que las necesita</h2>

<p>Si no reconoces tu condición, el evangelio te ofende. Vuelve a leer lo que Jesús leyó, pero esta vez pregúntate a quién está dirigido cada anuncio.</p>

<p><em>"Me ha ungido para dar buenas nuevas a los pobres."</em> Si te crees rico, no son buenas noticias para ti.</p>

<p><em>"Me ha enviado a sanar a los quebrantados de corazón."</em> Si crees que tu corazón no está roto, no son buenas noticias para ti.</p>

<p><em>"A pregonar libertad a los cautivos."</em> Si crees que eres libre, no son buenas noticias para ti.</p>

<p><em>"Y vista a los ciegos."</em> Si crees que puedes ver, no son buenas noticias para ti.</p>

<p><em>"A poner en libertad a los oprimidos; a predicar el año agradable del Señor."</em> Es un año agradable solo para los que saben que no han vivido buenos años.</p>

<p><strong>Esa es la esencia del arrepentimiento: reconocer que el anuncio es para ti, porque tú eres el pobre, el quebrantado, el cautivo y el ciego.</strong></p>

<h2>¿Qué es el arrepentimiento?</h2>

<p>Para muchos, la palabra arrepentimiento tiene una connotación negativa. Pensamos en sentirnos mal, culpables, condenados. Eso es parte, pero no es la historia completa.</p>

<p>Mira la palabra que Jesús usó cuando dijo "arrepentíos". En griego es <em>metanoéo</em>, pensar diferente o después, reconsiderar. Arrepentimiento es pensar diferente después de experimentar algo, reconsiderar la manera en la que pensamos. Es renovar la mente. Es la manera en la que cambiamos.</p>

<p>Entonces, ¿qué no es el arrepentimiento? Sentirnos mal sin renovar la mente. Puedes llorar, sentir culpa y prometer que no lo vas a volver a hacer, y aun así no haberte arrepentido. El verdadero arrepentimiento es renovar la mente.</p>

<p>¿Y en qué renovamos nuestra mente específicamente? En reconocer nuestra condición delante de Dios: somos pobres, pecadores que necesitan urgentemente un Salvador.</p>

<p>Eso es exactamente lo que Nazaret no reconoció. Se creían ricos, gente de bien, clase media espiritual. Y aquí está lo sorprendente: Jesús supo que no habían entendido su mensaje precisamente porque el mensaje les gustó. Por eso no se quedó en el aplauso. Fue como si les dijera: <em>"Definamos quién es el pobre. Ningún profeta es acepto en su propia tierra. ¿Recuerdan a la viuda y a Naamán?"</em></p>

<blockquote>"Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos." <em>Mateo 5:3</em></blockquote>

<p>La palabra que Jesús usa para pobre es <em>ptōchós</em>, pobre, mendigo. No alguien con poco, sino alguien que no tiene nada y depende por completo de lo que otro le dé.</p>

<p>La viuda de Sarepta y Naamán el sirio eran pobres espirituales. Ninguno tenía lo que se necesita para llegar a Dios. Eran gentiles, excluidos de las promesas de Dios, paganos, pecadores. Y precisamente a ellos fue enviada la gracia. Con estos dos ejemplos Jesús estaba diciendo: <em>"Yo soy buenas noticias para el que sabe que me necesita."</em></p>

<p>Mira cómo se ve esto en el hijo pródigo:</p>

<blockquote>"Y volviendo en sí, dijo: ¡Cuántos jornaleros en casa de mi padre tienen abundancia de pan, y yo aquí perezco de hambre! Me levantaré e iré a mi padre, y le diré: Padre, he pecado contra el cielo y contra ti. Ya no soy digno de ser llamado tu hijo; hazme como a uno de tus jornaleros." <em>Lucas 15:17-19</em></blockquote>

<p><em>"Volviendo en sí."</em> Eso es <em>metanoéo</em>. Pensó diferente después de experimentar el hambre. Se arrepintió.</p>

<p><strong>No todos los perdidos reciben gracia, solo los que reconocen su condición de pecado.</strong></p>

<h2>¿Quién no se arrepiente?</h2>

<p>El orgulloso. El más grande impedimento para llegar a Dios no son nuestros pecados, sino la confianza en nuestra propia justicia. Es la negación de nuestra condición y de nuestra necesidad de salvación. Un corazón no arrepentido es un corazón orgulloso.</p>

<p>Por eso Nazaret se llenó de ira. No porque Jesús les hablara de pecado, sino porque les dijo que ellos también eran pobres, tan necesitados como una viuda pagana y un leproso extranjero.</p>

<p><strong>El arrepentimiento es el acto de humildad que inicia la fe.</strong></p>

<h2>¿Cómo me puedo arrepentir?</h2>

<p>Si el arrepentimiento es tan importante, la pregunta práctica es cómo se ve. La historia del hijo pródigo nos da tres pasos.</p>

<h3>Paso 1: Reconoce tu condición</h3>

<p>Eres un pecador, culpable, pobre espiritual. Esto es más difícil de lo que parece, porque la mayoría pensamos que estamos bien como estamos. El rey David pecó gravemente con Betsabé y contra Urías, y aun así estaba ciego a su propio pecado, hasta que el profeta Natán le contó la historia de un hombre rico que le robó la única oveja a un pobre. David se indignó contra ese hombre, sin darse cuenta de que estaba hablando de sí mismo.</p>

<blockquote>"Entonces dijo Natán a David: Tú eres aquel hombre." <em>2 Samuel 12:7</em></blockquote>

<p>Además, este es un mensaje opuesto a la cultura. El arrepentimiento dice: <em>si quieres cambiar, tienes que reconocer lo que está mal en ti, tienes pecado.</em> El mundo dice: <em>no dejes que nadie te diga lo que tienes que hacer, eres perfecto así como eres, no necesitas cambiar, necesitas aceptarte y tener amor propio, y si alguien te dice lo contrario es porque no te ama, porque no te acepta.</em></p>

<p>El arrepentimiento nos lleva a aceptar la verdad sobre nosotros. No somos perfectos. Hay pecado en nosotros, y nos está dañando a nosotros y a otros. Es nuestra condición humana.</p>

<p>Agustín de Hipona cuenta que cuando tenía dieciséis años robó unas peras con sus amigos. Años después se preguntó por qué lo hizo. No tenía hambre, ni siquiera le gustaban esas peras, y terminaron tirándolas. Su conclusión fue honesta y terrible: <em>"Mi placer estaba en hacer algo que era prohibido."</em> Eso es el pecado en el corazón humano. Y eso es lo que el hijo pródigo reconoció cuando dijo: <em>"Ya no soy digno de ser llamado tu hijo."</em></p>

<p><strong>Reconocer tu condición es dejar de pensar que estás bien como estás.</strong></p>

<h3>Paso 2: Confiesa tu pecado</h3>

<p><em>"Padre, he pecado contra el cielo y contra ti."</em> Confesar es reconocer y tomar responsabilidad. Es pedir perdón sin excusas. Mira cómo lo hace David cuando por fin ve su pecado:</p>

<blockquote>"Lávame más y más de mi maldad, Y límpiame de mi pecado. Porque yo reconozco mis rebeliones, Y mi pecado está siempre delante de mí." <em>Salmo 51:2-3</em></blockquote>

<p>Fíjate en las palabras: <em>mi</em> maldad, <em>mi</em> pecado, <em>yo</em> reconozco. Tomar responsabilidad tiene algunas trampas que vale la pena nombrar.</p>

<p>Tomar responsabilidad no es minimizar la ofensa: <em>"No es para tanto, fue sin querer, por todo se ofenden."</em></p>

<p>Tomar responsabilidad no es relativizar la ofensa: <em>"Es normal hacer esto, todos lo hacen."</em></p>

<p>Tomar responsabilidad no es justificar la ofensa: <em>"Tengo necesidades y lo hice por necesidad, es que tú no entiendes lo que he vivido, no es fácil ser yo."</em></p>

<p>Tomar responsabilidad es aceptar las consecuencias. El hijo pródigo dice: <em>"Hazme como a uno de tus jornaleros."</em> Está pidiendo misericordia, pero al mismo tiempo está dispuesto a trabajar. Es como decir: <em>"Sí, soy culpable, y acepto las consecuencias de mis acciones."</em> Ese es un corazón que está encaminado a cambiar.</p>

<p><strong>Confesar nuestro pecado es admitir lo que está mal en nosotros y tomar responsabilidad de nuestras acciones.</strong></p>

<h3>Paso 3: Renuncia al pecado detrás del pecado</h3>

<p>Vuelve a leer la confesión del hijo: <em>"Padre, he pecado contra el cielo y contra ti."</em> Primero contra el cielo. David dice algo todavía más fuerte:</p>

<blockquote>"Contra ti, contra ti solo he pecado, Y he hecho lo malo delante de tus ojos." <em>Salmo 51:4</em></blockquote>

<p>¿Acaso David no pecó también contra Urías y contra Betsabé? Claro que sí. Pero David entendió algo más profundo. Como dijo Martín Lutero: <em>"No podemos pecar contra otros si al mismo tiempo no estamos pecando en contra de Dios."</em></p>

<p>Piensa en la mentira. Si miento, es para obtener un beneficio para mí. En ese momento me amo a mí mismo más que a Dios. Ese es el verdadero pecado detrás de cada pecado: no amamos a Dios más que a otras cosas. No pecamos solamente contra su ley, pecamos contra él.</p>

<p>Por eso muchas veces nuestro arrepentimiento es falso. Nos "arrepentimos" por las consecuencias, pero no por la relación que estamos dañando. Nos duele que nos descubrieron, que perdimos algo, que alguien se alejó. Nos arrepentimos por nosotros. Pero el pecado es, antes que todo, una ofensa en contra de Dios.</p>

<p><strong>Renunciamos al pecado detrás del pecado cuando reconocemos que la ofensa es en contra de Dios.</strong></p>

<h2>El arrepentimiento nos lleva al amor del Padre</h2>

<p>Entender el evangelio nos lleva al verdadero arrepentimiento, y el verdadero arrepentimiento nos lleva a la verdadera fe. Pero no te equivoques: el hijo no experimentó el evangelio cuando se arrepintió, sino cuando vio el amor del Padre.</p>

<blockquote>"Y levantándose, vino a su padre. Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó." <em>Lucas 15:20</em></blockquote>

<p><strong>No es acerca de nuestro arrepentimiento. Es acerca del amor del Padre.</strong></p>

<h2>Lo que Jesús no leyó</h2>

<p>Hay un detalle en Nazaret que es fácil pasar por alto. Jesús no leyó el texto completo, y lo hizo a propósito:</p>

<blockquote>"A predicar el año agradable del Señor. Y enrollando el libro, lo dio al ministro, y se sentó; y los ojos de todos en la sinagoga estaban fijos en él." <em>Lucas 4:19-20</em></blockquote>

<p>Se detuvo a mitad de la frase. Lo que faltaba era esto:</p>

<blockquote>"A proclamar el año de la buena voluntad de Jehová, y el día de venganza del Dios nuestro." <em>Isaías 61:2</em></blockquote>

<p>Jesús enrolló el libro antes de leer "el día de venganza". Es como si dijera: <em>"No he venido a tomar venganza, aún."</em> El día de la venganza vendrá. Habrá juicio al final de los tiempos, y Jesús regresará y traerá juicio sobre las naciones. Pero hoy estamos en la temporada de la gracia, de las buenas nuevas.</p>

<p>¿Y por qué puede haber una temporada de gracia? Ese es el evangelio: Jesús vino a recibir la venganza de Dios sobre sí mismo. Hizo un intercambio sustituto en la cruz por nosotros. Recibió el juicio de Dios para poder darnos gracia, para que estas sean buenas nuevas para nosotros.</p>

<h2>Antes de terminar: responde la pregunta</h2>

<p>Al comienzo te pedimos que guardaras una pregunta. Aquí está de nuevo:</p>

<p><strong>¿Son las buenas noticias realmente buenas noticias para ti?</strong></p>

<p>Si te crees rico, sano, libre y con buena vista, el evangelio te va a parecer bonito por un momento, como a Nazaret, y después te va a ofender. Pero si hoy reconoces que eres el pobre, el quebrantado, el cautivo y el ciego, entonces Jesús es exactamente la noticia que necesitas.</p>

<p>Todavía estamos en el año agradable del Señor. Vuelve en ti, reconoce tu condición, confiesa tu pecado, renuncia al pecado detrás del pecado, y corre a los brazos del Padre que ya viene corriendo hacia ti.</p>

<p><strong>El evangelio es buenas noticias para el que sabe que lo necesita.</strong></p>
    `,
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=kKS_lBXht5M',
    spotifyUrl: 'https://open.spotify.com/episode/7gaFKt5M9XI4oPLc8IWdPI',
    resumenClase: `
<p>El evangelio es algo que fue hecho por nosotros, y se recibe por medio del arrepentimiento y la fe. Jesús nunca separó las dos cosas: "arrepentíos, y creed en el evangelio." En Nazaret, la misma gente que se maravilló de sus palabras quiso matarlo, porque nunca reconoció que el mensaje era para ellos.</p>

<p><strong>1. Buenas noticias para los pobres.</strong> Las buenas noticias solo son buenas para quien sabe que está en malas noticias. Jesús vino para los pobres, los quebrantados, los cautivos y los ciegos. Si no reconoces tu condición, el evangelio te ofende. El mayor impedimento para llegar a Dios es la confianza en nuestra propia justicia.</p>

<p><strong>2. Qué es el arrepentimiento.</strong> La palabra griega <em>metanoéo</em> significa pensar diferente, reconsiderar, renovar la mente. No es solo sentirse mal, es reconocer nuestra condición delante de Dios: somos pobres, pecadores que necesitan urgentemente un Salvador. Es el acto de humildad que inicia la fe.</p>

<p><strong>3. Cómo arrepentirnos.</strong> Como el hijo pródigo, reconocemos nuestra condición, confesamos nuestro pecado tomando responsabilidad sin minimizarlo, relativizarlo ni justificarlo, y renunciamos al pecado detrás del pecado, reconociendo que toda ofensa es primero contra Dios.</p>

<p>Pero el hijo no experimentó el evangelio cuando se arrepintió, sino cuando vio el amor del Padre. Jesús dejó de leer antes del "día de venganza" porque vino a recibir esa venganza sobre sí mismo en la cruz. Hoy estamos en la temporada de la gracia.</p>
    `,
    guiaLider: `
<p>Estas preguntas buscan que cada persona se vea a sí misma en Nazaret y en el hijo pródigo, no que señale a otros. Dale espacio al grupo para responder con honestidad.</p>

<h3>Pregunta 1</h3>
<p>La gente de Nazaret se maravilló de las palabras de Jesús, y minutos después quiso matarlo. Jesús supo que no habían entendido su mensaje precisamente porque les gustó. Las buenas noticias solo son buenas para quien sabe que está en malas noticias.</p>
<p><em>¿En qué área de tu vida te consideras "rico", alguien que está bien y no necesita mucho de Dios? ¿Cuándo fue la última vez que el evangelio te incomodó en lugar de solo agradarte, y qué revela eso sobre cómo te ves a ti mismo?</em></p>

<h3>Pregunta 2</h3>
<p>El arrepentimiento no es solo sentirse mal, es <em>metanoéo</em>, renovar la mente. Y confesar es tomar responsabilidad sin minimizar ("no es para tanto"), relativizar ("todos lo hacen") ni justificar ("no entiendes lo que he vivido").</p>
<p><em>¿Cuál de estas tres excusas usas con más frecuencia cuando fallas? Piensa en un pecado concreto de tu vida: ¿te has sentido mal por él sin realmente cambiar tu manera de pensar? ¿Qué significaría tomar responsabilidad completa, incluyendo las consecuencias?</em></p>

<h3>Pregunta 3</h3>
<p>Muchas veces nos "arrepentimos" por las consecuencias y no por la relación que dañamos. David dijo: "Contra ti, contra ti solo he pecado." Detrás de cada pecado está el pecado de amar algo más que a Dios. Y al final, el hijo no experimentó el evangelio cuando se arrepintió, sino cuando vio al Padre correr hacia él.</p>
<p><em>Piensa en la última vez que te arrepentiste de algo. ¿Te dolió más lo que perdiste o el daño a tu relación con Dios? ¿Qué cosa estabas amando más que a él en ese momento? ¿Cómo cambia tu manera de arrepentirte saber que el Padre ya viene corriendo hacia ti?</em></p>
    `,
    devocional: `
<p>Esta semana vas a recorrer el camino del hijo pródigo, de volver en ti a los brazos del Padre. Cada día tiene una sola tarea concreta.</p>

<h3>Día 1: Lee lo que pasó en Nazaret</h3>
<p>Lee Lucas 4:14-30 en una sola sesión, despacio. Marca el momento exacto en que la admiración se convierte en ira. Luego escribe una oración respondiendo: ¿qué dijo Jesús que los ofendió tanto, y por qué crees que les dolió?</p>

<h3>Día 2: ¿Para quién son las buenas noticias?</h3>
<p>Lee Lucas 4:18-19 y escribe las cinco descripciones: pobres, quebrantados de corazón, cautivos, ciegos, oprimidos. Junto a cada una, escribe con honestidad un área concreta de tu vida en la que esa descripción es verdad de ti. Si te cuesta encontrarla, pregúntate si te estás viendo como rico.</p>

<h3>Día 3: Reconoce tu condición</h3>
<p>Lee 2 Samuel 12:1-13. David se indignó contra el hombre de la historia sin ver que era él mismo. Pídele a Dios que te muestre un pecado al que te has vuelto ciego. Escríbelo sin adornos, con la misma claridad con la que Natán le habló a David: "Tú eres aquel hombre."</p>

<h3>Día 4: Confiesa sin excusas</h3>
<p>Lee el Salmo 51 completo. Toma el pecado que escribiste ayer y redacta una confesión a Dios usando las palabras "mi" y "yo", como David. Revisa lo que escribiste: si encuentras alguna frase que minimiza, relativiza o justifica, táchala y vuelve a escribirla.</p>

<h3>Día 5: Encuentra el pecado detrás del pecado</h3>
<p>Mira de nuevo ese pecado y pregúntate: ¿qué estaba amando más que a Dios cuando lo hice? Comodidad, aprobación, control, placer, mi imagen. Escribe una oración nombrándolo. Luego lee Lucas 15:11-19 y fíjate que el hijo dice primero "contra el cielo" y después "contra ti".</p>

<h3>Día 6: Mira al Padre</h3>
<p>Lee Lucas 15:20-24. Lee el versículo 20 tres veces y fíjate en cada verbo del padre: lo vio, fue movido a misericordia, corrió, se echó sobre su cuello, le besó. Escribe un párrafo sobre lo que significa que tu arrepentimiento no es lo que te salva, sino el amor del Padre que corre hacia ti. Ora dándole gracias por nombre por la gracia que recibiste.</p>

<h3>Día 7: Descansa en la temporada de gracia</h3>
<p>Lee Romanos 8:1-4 y 8:31-39 lentamente, sin prisa y sin tareas. Jesús enrolló el libro antes del día de venganza porque él iba a recibir esa venganza en tu lugar. Deja que penetre en ti la primera frase: "Ninguna condenación hay para los que están en Cristo Jesús." Hoy simplemente descansa en eso.</p>
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
