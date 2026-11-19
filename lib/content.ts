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
  contenido?: string       // HTML string — main lesson body (old format)
  lectura?: { titulo: string; html: string }[]   // new format: collapsible reading topics
  versiculos?: string[]    // verses to read during the week
  preguntas?: string[]     // class discussion questions (HTML)
  declaraciones?: string[] // theological statements (HTML)
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
    titulo: "¿Qué es el evangelio?",
    tags: ['evangelio', 'fe', 'salvación', 'base'],
    fecha: '2026-01-13',
    resumen: "El evangelio no es algo que tú haces sino algo que alguien hizo por ti. Qué es, por qué solo tiene sentido cuando entiendes el problema que resuelve, y qué se hace con una noticia así.",
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=o3mUSRINu2A&t=2s',
    spotifyUrl: 'https://open.spotify.com/episode/7sVCGVSwIU3rzXzeWqiZA3?si=exJtDYo2RiWInEM6ppAnkQ',
    lectura: [
      {
        "titulo": "Hay una pregunta que nadie debería contestar mal",
        "html": "<p>Imagina que llevas años trabajando en una empresa. Conoces los procesos, sabes quiénes son tus compañeros, has estado en cientos de reuniones. Un día alguien nuevo llega y te pregunta: \"¿A qué se dedica esta empresa?\" Y tú... no sabes qué responder.</p>\n<p>Eso no debería pasar, pero pasa más de lo que creemos y no solo en empresas, sino en la iglesia.</p>\n<p>Martyn Lloyd-Jones, un gran pastor y predicador del siglo XX, tenía una pregunta de diagnóstico que hacía a las personas para saber si entendían el evangelio. Era simple: <em>\"¿Eres cristiano?\"</em> solo eso.</p>\n<p>Y la respuesta revelaba todo.</p>\n<p>La mayoría respondía algo como: <em>\"Trato de serlo.\"</em> Y esa respuesta, aunque honesta y humilde, demostraba que no habían entendido el evangelio, porque el evangelio no es algo que tú haces sino algo que alguien hizo por ti.</p>\n<p>Alguien puede llevar años en la iglesia, haber escuchado cientos de sermones, conocer los libros de la Biblia de memoria, y aún así tener una comprensión deforme de lo más fundamental. Pablo lo advirtió con urgencia a las iglesias de Galacia:</p>\n<blockquote>\"Estoy maravillado de que tan pronto os hayáis alejado del que os llamó por la gracia de Cristo, para seguir un evangelio diferente. No que haya otro, sino que hay algunos que os perturban y quieren pervertir el evangelio de Cristo.\" <em>Gálatas 1:6-7</em></blockquote>\n<p>No es que existan evangelios alternos, es que existe el evangelio y distorsiones de él. Entonces vale la pena preguntarse: ¿Estoy creyendo el verdadero evangelio?</p>"
      },
      {
        "titulo": "La palabra que cambió el mundo",
        "html": "<p><em>Evangelio</em> no era originalmente una palabra religiosa. En el mundo griego, <em>euangelion</em> significaba simplemente <em>buenas noticias</em>, el anuncio de algo grande que había ocurrido, victorias militares, nacimientos de reyes, proclamaciones de paz. Era el tipo de noticia que hacía que la gente saliera a las calles.</p>\n<p>Cuando los ángeles anunciaron el nacimiento de Jesús, usaron exactamente esa palabra:</p>\n<blockquote>\"Pero el ángel les dijo: No temáis; porque he aquí os doy nuevas de gran gozo, que será para todo el pueblo: que os ha nacido hoy, en la ciudad de David, un Salvador, que es CRISTO el Señor.\" <em>Lucas 2:10-11</em></blockquote>\n<p>Y aquí está la primera pregunta que vale la pena hacerse: ¿cuándo fue la última vez que el evangelio te sonó como una noticia extraordinaria? No como una doctrina que conoces, no como una religión que practicas, sino como una noticia que cambia todo.</p>\n<p>Porque si no te suena así, puede ser por una razón importante y vamos a llegar a eso en un momento.</p>"
      },
      {
        "titulo": "El problema con las buenas noticias",
        "html": "<p>Aquí está el asunto: las buenas noticias solo son buenas si entiendes el problema que resuelven.</p>\n<p>Tim Keller lo ilustraba así: imagina que tu casa se está incendiando, estás atrapado adentro, el humo te ciega, no puedes salir a segundos de morir y de repente un vecino entra, arriesga su vida, te saca, pero en el proceso muere. En ese momento entiendes perfectamente lo que hizo, entiendes el sacrificio, el amor, el costo.</p>\n<p>Ahora imagina la misma escena, tu casa se está incendiando, pero tú estás afuera, a salvo y de la nada tu vecino entra a tu casa y muere. Estarías desconcertado, no tiene sentido, ¿por qué entró? No tenía porque hacerlo, fue innecesario.</p>\n<p>La diferencia no está en la muerte del vecino, en ambos casos muere, pero en uno de esos ejemplos lo hizo para salvarte.</p>\n<p><em>\"Si alguien te dice: encontramos la cura. Solo serían buenas noticias si sabes que estás enfermo.\"</em></p>\n<p>El evangelio funciona igual, solo cobra sentido cuando entiendes que estás en un camino cuyo fin es la muerte eterna, que no puedes hacer nada para cambiar eso por tu cuenta, y que necesitas un Salvador. Hasta que no llegues a ese punto, hasta que no digas <em>\"no puedo salvarme\"</em>, el evangelio va a sonar como información interesante pero no urgente.</p>\n<p>Este es el punto que todas las religiones del mundo ignoran: todas tienen en común que te dicen qué hacer para llegar a Dios. Reglas, mandamientos, filosofías, iluminación. El cristianismo es radicalmente diferente. No es acerca de lo que tú haces para llegar a Dios, es acerca de lo que Dios hizo para que tú pudieras llegar a Él.</p>\n<p>Pablo lo resume así:</p>\n<blockquote>\"Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego.\" <em>Romanos 1:16</em></blockquote>\n<p>No es información sobre Dios, es poder de Dios. Cuando el evangelio es comunicado y creído, algo ocurre, una persona recibe salvación.</p>"
      },
      {
        "titulo": "¿Qué haces con las noticias?",
        "html": "<p>Entonces llegamos a la pregunta práctica: si el evangelio son noticias, ¿qué se supone que debes hacer con ellas?</p>\n<p>D.A. Carson, uno de los teólogos evangélicos más respetados del mundo, hace una observación que parece obvia pero que lo cambia todo: <em>\"Porque el evangelio son noticias, buenas noticias, deben de ser proclamadas. Eso es lo que se hace con las noticias. No son éticas para ser debatidas, ni principios que deben ser admirados, ni tampoco un sistema de teología que tiene que ser estructurado y sistematizado. Son noticias, buenas noticias, por ende deben de ser proclamadas.\"</em></p>\n<p>Las noticias se reciben y se comparten. No se obedecen como mandamientos, al menos no en su primera instancia. Primero las escuchas, determinas si son ciertas, y respondes a ellas.</p>\n<p>Y la respuesta que el evangelio pide es fe:</p>\n<blockquote>\"Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios.\" <em>Juan 1:12</em></blockquote>\n<blockquote>\"Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo.\" <em>Romanos 10:9</em></blockquote>\n<p>Recibir es creer. La respuesta a las buenas noticias es solamente recibir, creer, tener fe.</p>\n<p>Pero aquí viene algo que muchos no esperan: el evangelio no es solo el punto de partida de la vida cristiana. No es el ABC que aprendes y luego dejas atrás para cosas más avanzadas. Pablo dice en Romanos 1:17:</p>\n<blockquote>\"Porque en el evangelio la justicia de Dios se revela por fe y para fe, como está escrito: Mas el justo por la fe vivirá.\" <em>Romanos 1:17</em></blockquote>\n<p>El justo vive por fe desde el principio hasta el final. El evangelio es la A, la Z y todo lo que hay en medio. Se recibe por fe y se vive por fe.</p>\n<p>Como alguien que recibió la cura de una enfermedad terminal: no solo recibe la noticia con alivio y sigue igual, toma el tratamiento. Hay un antes y un después real, verificable, en su vida. Así opera el evangelio, salva y transforma.</p>"
      },
      {
        "titulo": "Una última pregunta",
        "html": "<p>Jesús advirtió algo inquietante:</p>\n<blockquote>\"No todo el que me dice: Señor, Señor, entrará en el reino de los cielos, sino el que hace la voluntad de mi Padre que está en los cielos. Muchos me dirán en aquel día: Señor, Señor, ¿no profetizamos en tu nombre, y en tu nombre echamos fuera demonios, y en tu nombre hicimos muchos milagros? Y entonces les declararé: Nunca os conocí; apartaos de mí, hacedores de maldad.\" <em>Mateo 7:21-23</em></blockquote>\n<p>Es posible estar dentro de la iglesia, participar activamente, hacer cosas en el nombre de Jesús y no haber creído el verdadero evangelio.</p>\n<p>La pregunta no es si lo has escuchado. Es si lo has entendido, si lo has recibido, y si lo estás viviendo.</p>"
      }
    ],
    versiculos: [
      "Romanos 1:16-17, 10:9",
      "Gálatas 1:6-7",
      "Juan 1:12, 3:16",
      "Marcos 1:14-15",
      "Mateo 7:21-23",
      "Lucas 2:10-11"
    ],
    preguntas: [
      "Lloyd-Jones preguntaba <em>\"¿Eres cristiano?\"</em> para diagnosticar si alguien entendía el evangelio. ¿Cómo responderías tú esa pregunta hoy, y qué dice tu respuesta sobre cómo entiendes el evangelio?",
      "La clase distingue entre \"lo que nosotros hacemos para llegar a Dios\" y \"lo que Dios hizo para que lleguemos a Él.\" ¿En qué áreas de tu vida cristiana todavía operas como si fuera lo primero?",
      "Si el evangelio debe ser proclamado porque su naturaleza es la de una noticia, ¿cuándo fue la última vez que lo compartiste con alguien fuera de la iglesia, y qué te detuvo o te impulsó a hacerlo?"
    ],
    declaraciones: [
      "El evangelio es la proclamación de un evento histórico, la vida, muerte y resurrección de Jesucristo, mediante el cual Dios ofrece salvación a toda persona que cree.",
      "El evangelio no es lo que el ser humano hace para llegar a Dios, sino lo que Dios hizo para que el ser humano pudiera llegar a Él.",
      "El evangelio sólo tiene sentido para quien reconoce su pecado, su incapacidad de salvarse, y su necesidad de un Salvador.",
      "El evangelio se recibe por fe, creer es recibir. No se obedece como mandamiento en su primera instancia, sino que se recibe como noticia.",
      "El evangelio no es el punto de partida de la vida cristiana que luego se supera, es el fundamento permanente desde el cual se vive toda la vida cristiana.",
      "El evangelio, cuando es verdaderamente recibido, produce transformación, hay un antes y un después verificable en la vida del creyente.",
      "El evangelio debe ser proclamado porque su naturaleza como noticia exige comunicación, las noticias se anuncian, no se guardan.",
      "Existe un solo evangelio verdadero. Todo mensaje que añada condiciones humanas a la obra de Cristo o que reste la necesidad del arrepentimiento y la fe es una distorsión del evangelio."
    ],
  },
  {
    slug: 'estudio-2',
    numero: 2,
    modulo: 'fundamento',
    titulo: '¿Qué no es el evangelio?',
    tags: ['evangelio', 'legalismo', 'gracia', 'arrepentimiento'],
    fecha: '2026-10-19',
    resumen: 'Los dos hijos de la parábola están perdidos: uno por desobedecer y otro por obedecer para sí mismo. El evangelio no es una religión de obras ni una vida sin reglas, sino la única forma de relacionarnos con Dios.',
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=dn4jS4ZFaNo',
    spotifyUrl: 'https://open.spotify.com/episode/4AO09GRm53Y683cUQIvRvK',
    lectura: [
      {
        "titulo": "Una parábola con un mal nombre",
        "html": "<p>¿Alguna vez te has molestado cuando alguien que \"no merece\" que le vaya bien en la vida, le va bien?</p>\n<p>Jesús contó una historia en Lucas 15, y en su audiencia había dos grupos muy distintos, los publicanos y pecadores se acercaban a escucharlo y también los fariseos y escribas miraban desde afuera, murmurando. Jesús les contó la misma parábola a ambos grupos al mismo tiempo, porque la parábola era para los dos.</p>\n<p>La llamamos <em>\"la parábola del hijo pródigo\"</em>, pero Jesús dijo: <em>\"Un hombre tenía dos hijos.\" No uno, dos.</em></p>\n<p>Hemos pasado siglos enfocándonos en el menor, el que se fue, despilfarró todo, terminó comiendo lo que comían los cerdos, y volvió con la cabeza agachada. Su historia es dramática, visible, fácil de identificar. Es el adicto que se recupera, el alejado que regresa, el pecador notorio que encuentra gracia.</p>\n<p>Pero hay otro hijo, y su historia es más difícil de ver.</p>"
      },
      {
        "titulo": "El hijo que nunca se fue... y también estaba perdido",
        "html": "<p>El hermano mayor estaba en el campo cuando volvió su hermano. Cuando escuchó la música y las danzas, llamó a un criado y preguntó qué pasaba. Le explicaron: tu hermano volvió, tu padre hizo fiesta.</p>\n<p>Y entonces hizo algo inesperado: <em>se enojó y no quería entrar.</em></p>\n<p>Aquí está la pregunta que Jesús deja sin responder al final de la parábola y que probablemente dejó sin responder a propósito: ¿Entró el hermano mayor?</p>\n<p>No sabemos, la parábola termina con el padre afuera, rogándole que entre. Y con el hijo mayor todavía afuera, construyendo su caso: <em>\"Tantos años te sirvo, no habiéndote desobedecido jamás, y nunca me has dado ni un cabrito.\"</em></p>\n<p>¿Qué fue lo que no lo dejó entrar? No fue su pecado. Fue su propia justicia.</p>"
      },
      {
        "titulo": "Los dos caminos para perderse",
        "html": "<p>Jesús está describiendo dos formas de relacionarse con Dios y está diciendo que ambas están equivocadas.</p>\n<p>La primera: <em>\"Tengo que obedecer para ganarme a Dios.\"</em> Me porto bien para ser merecedor de la salvación y bendiciones de Dios. Cumplo las reglas para controlar el resultado. Mi obediencia es la moneda con la que compro el favor divino. Esto es legalismo, religiosidad, moralismo.</p>\n<p>La segunda: <em>\"No hay reglas, yo decido cómo vivir.\"</em> Dios me ama como soy, en pecado, sin arrepentimiento. La gracia me cubre todo. No necesito cambiar nada. Esto es antinomianismo, relativismo, irreligiosidad.</p>\n<p>Los dos hijos ilustran exactamente eso, los dos hijos están perdidos.</p>\n<p>Pero aquí está lo que hace esta parábola particularmente incómoda: las señales de perdición en el hijo menor son fáciles de ver. Las del mayor no. Por eso nos cuesta reconocerlas.</p>"
      },
      {
        "titulo": "¿Cómo sabes si eres el hermano mayor?",
        "html": "<ul>\n<li>Estás enojado con Dios por su \"injusticia\" cuando otros reciben lo que crees que tú mereces más.</li>\n<li>Tu obediencia es egoísta y autocentrada, obedeces solo para ganarte la salvación o bendiciones de Dios, obedeces por beneficio personal.</li>\n<li>Tu obediencia es condicional y sin gozo, desobedeces cuando sientes que Dios no es justo.</li>\n<li>Usas tu obediencia para tratar de controlar a Dios, oras y obedeces por necesidad, no por intimidad ni relación.</li>\n<li>Eres frío hacia los que están perdidos, pues ellos merecen estar perdidos y lejos de Dios, experimentando las consecuencias de sus acciones.</li>\n<li>No estás seguro del amor de Dios, necesitas ganártelo constantemente.</li>\n</ul>\n<p>Y aquí está la revelación más perturbadora: en esencia, los dos hijos dicen y hacen exactamente lo mismo.</p>\n<p>El menor le dice al padre: <em>\"Quiero lo que das, pero no a ti.\"</em> Se lleva la herencia y se va.</p>\n<p>El mayor dice lo mismo de otra manera: <em>\"Quiero tus cosas, pero me las voy a ganar siendo obediente.\"</em> Obedece para controlar al padre, no porque lo ama.</p>\n<p>Uno desobedece para sí mismo. El otro obedece para sí mismo. Los dos viven para sí mismos. Los dos están lejos del Padre.</p>"
      },
      {
        "titulo": "El antídoto y por qué funciona",
        "html": "<p>El hijo menor llegó al Padre porque tocó fondo. No tenía nada de qué estar orgulloso. No podía confiar en su propia justicia porque ya no le quedaba ninguna. Y en ese estado, <em>volviendo en sí</em>, reconoció su pecado, admitió que no era digno de ser llamado hijo, y regresó.</p>\n<blockquote>\"Diciendo: El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.\" <em>Marcos 1:15</em></blockquote>\n<p>La palabra usada por Jesús, arrepentíos, viene del griego <em>metanoia</em>, que transmite la idea de pensar diferente, reconsiderar, no es solo remordimiento emocional, sino un cambio radical de mente y dirección. Arrepentimiento es reorientar la vida y volver al Padre.</p>"
      },
      {
        "titulo": "La gracia no es gratuita",
        "html": "<p>Esto es algo que muchos de nosotros no entendemos de la gracia: no es gratuita en términos de costo, tiene un precio. Solo que ese precio lo pagó alguien más.</p>\n<p>Un teólogo señala algo que generalmente ignoramos en la parábola: cuando el padre mandó sacar el mejor vestido, el anillo, el becerro gordo, el menor ya había gastado su herencia. Lo que el padre estaba dando era, en parte, del hermano mayor. <em>\"Todas mis cosas son tuyas\"</em>, eso incluía lo que se estaba usando para la fiesta.</p>\n<p>El hermano mayor estaba pagando la restitución del menor sin saberlo.</p>\n<p>El evangelio dice de alguna manera que Jesús es el verdadero hermano mayor.</p>\n<p>Todos los hermanos mayores humanos creemos que nuestra obediencia es suficiente. Pero Romanos 3:23 e Isaías 64:6 son categóricos: no lo es. Solo hubo un hermano mayor que obedeció a la perfección, que merecía la herencia y la fiesta. Y ese hermano mayor salió a buscarnos, se encarnó, vivió la vida que nosotros no pudimos vivir, y pagó el precio de nuestro pecado para darnos su recompensa.</p>\n<p>Para que pudiéramos volver a casa.</p>\n<p><strong>Eso es el evangelio, no una religión de obras, ni tampoco una vida sin reglas, sino la única forma de relacionarnos con Dios.</strong></p>"
      }
    ],
    versiculos: [
      "Lucas 15:1-32 (la parábola completa con su contexto)",
      "Marcos 1:15",
      "Mateo 21:31",
      "Romanos 3:23",
      "Isaías 64:6",
      "Gálatas 2:16",
      "Efesios 2:8-9"
    ],
    preguntas: [
      "La parábola muestra dos formas de perderse: por transgresión visible y por autojusticia. ¿Cuál de las dos crees que es más común en la iglesia hoy y cuál reconoces más en ti mismo?",
      "El hermano mayor obedecía, pero lo hacía para controlar al padre, no para conocerlo. ¿En qué áreas de tu vida espiritual obedeces por necesidad o miedo en lugar de por intimidad con Dios?",
      "La parábola termina sin resolución: no sabemos si el hermano mayor entró. ¿Por qué crees que Jesús la dejó así? ¿Qué te dice eso sobre la audiencia a la que iba dirigida y sobre ti?"
    ],
    declaraciones: [
      "El evangelio es monergista en su origen: la iniciativa de la salvación pertenece exclusivamente a Dios, no al hombre.",
      "La justificación no se obtiene por obras de la ley ni por conformidad moral externa.",
      "El legalismo y el antinomianismo son errores soteriológicos simétricos; ambos constituyen falsificaciones del evangelio.",
      "La autojusticia es un impedimento para la gracia tan real como el pecado manifiesto.",
      "El arrepentimiento (<em>metanoia</em>) es condición necesaria para recibir el evangelio, no consecuencia opcional de él.",
      "La gracia no es gratuita en términos ontológicos: tiene un costo que fue absorbido vicariamente por Cristo.",
      "Cristo cumple la obediencia perfecta que ningún hijo mayor humano puede cumplir, su justicia imputada es el fundamento de la reconciliación.",
      "El orgullo espiritual es, en términos prácticos, una negación funcional de la necesidad de Cristo.",
      "La pérdida espiritual no requiere transgresión visible; puede existir dentro de la observancia religiosa formal."
    ],
  },
  {
    slug: 'estudio-3',
    numero: 3,
    modulo: 'fundamento',
    titulo: "¿Cómo recibimos el evangelio? Arrepentimiento",
    tags: ['evangelio', 'arrepentimiento', 'fe', 'humildad'],
    fecha: '2026-10-19',
    resumen: "El arrepentimiento es inseparable de la fe para recibir el evangelio. Qué no es, sus tres movimientos reales, y por qué lleva al amor del Padre.",
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=kKS_lBXht5M',
    spotifyUrl: 'https://open.spotify.com/episode/7gaFKt5M9XI4oPLc8IWdPI',
    lectura: [
      {
        "titulo": "El problema con el falso arrepentimiento",
        "html": "<p>¿Has notado, que en la mayoría de casos de infidelidad, la persona que engaña se \"arrepiente\" y pide perdón usualmente solo por que la atraparon, y no necesariamente porque se dio cuenta que estaba dañando a la otra persona y lo que estaba haciendo estaba mal?</p>\n<p>Confiesan su error porque fueron descubiertos, pero casi nunca confiesan su error cuando aún no han sido descubiertos.</p>\n<p>Eso no es arrepentimiento.</p>\n<p>Eso es un falso arrepentimiento, en esencia es un arrepentimiento egoísta, porque es sentirse mal únicamente por las consecuencias negativas que se están experimentando, te arrepientes solo porque es inconveniente para ti, pero cuando aún no tenías consecuencias, no te <em>\"arrepientes\"</em>.</p>\n<blockquote>\"Diciendo: El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.\" <em>Marcos 1:15</em></blockquote>\n<p>El arrepentimiento es un componente indispensable para recibir el evangelio, inseparable de la fe, si queremos entender cómo se recibe el evangelio, tenemos que entender qué es verdadero arrepentimiento.</p>"
      },
      {
        "titulo": "El día que el evangelio ofendió a su audiencia",
        "html": "<p>Jesús volvía a su ciudad natal, ya era conocido, su fama se había extendido. Se levantó a leer en la sinagoga y eligió Isaías 61: <em>buenas noticias para los pobres, libertad para los cautivos, vista para los ciegos.</em> La gente reaccionó bien.</p>\n<blockquote>\"Y todos daban buen testimonio de él, y estaban maravillados de las palabras de gracia que salían de su boca, y decían: ¿No es este el hijo de José?\" <em>Lucas 4:22</em></blockquote>\n<p>Parecía ir bien, hasta que Jesús siguió hablando.</p>\n<p>Les recordó dos historias del Antiguo Testamento: Elías fue enviado no a las viudas de Israel, sino a una viuda gentil en Sarepta. Eliseo sanó no a los leprosos de Israel, sino a Naamán el sirio. Y al oír esto, el texto dice algo sorprendente:</p>\n<blockquote>\"Al oír estas cosas, todos en la sinagoga se llenaron de ira; y levantándose, le echaron fuera de la ciudad, y le llevaron hasta la cumbre del monte sobre el cual estaba edificada la ciudad de ellos, para despeñarle.\" <em>Lucas 4:28-29</em></blockquote>\n<p>¿Qué pasó? ¿Cómo se pasa de admiración a intento de asesinato en unos minutos?</p>\n<p>Jesús sabía que no habían entendido el mensaje, precisamente porque les había gustado. Cuando el evangelio se escucha como algo que ya tenemos, como confirmación de nuestra posición, no ha llegado todavía. Jesús les estaba diciendo: <em>las buenas noticias son buenas para el que sabe que está en malas noticias.</em></p>\n<p>Lee de nuevo las líneas de Isaías que Jesús leyó: <em>buenas noticias para los pobres, sanidad para los quebrantados de corazón, libertad para los cautivos, vista para los ciegos.</em></p>\n<p>¿Qué pasa si no te crees pobre? No son buenas noticias. ¿Qué pasa si no crees que tu corazón está roto? No son buenas noticias. ¿Y si crees que ya puedes ver? La oferta de visión te parece un insulto.</p>\n<p>Nazaret escuchó el evangelio y se sintió excluida, porque nadie en esa sinagoga estaba dispuesto a ser el pobre, el ciego, el cautivo.</p>\n<p>Esa disposición tiene un nombre: arrepentimiento.</p>"
      },
      {
        "titulo": "Lo que arrepentimiento no significa",
        "html": "<p>La palabra carga una connotación casi exclusivamente emocional, sentirse mal, culpable, condenado, llanto, remordimiento, vergüenza.</p>\n<p>Todo eso puede ser parte del proceso, pero no es la definición completa.</p>\n<p>La palabra raíz en griego es <em>metanoia</em>, literalmente, pensar diferente, pensar después, reconsiderar, renovar la mente. No es un estado de ánimo sino un cambio de perspectiva sobre la realidad. Es lo que le pasó al hijo pródigo cuando <em>\"volvió en sí\"</em>: no que sintió más culpa, sino que vio con claridad lo que era cierto desde antes, que estaba pereciendo de hambre mientras en casa de su padre había abundancia.</p>\n<p><strong>El verdadero arrepentimiento es cambiar de opinión sobre ti mismo delante de Dios.</strong></p>\n<p>Y eso tiene tres movimientos concretos.</p>"
      },
      {
        "titulo": "Tres movimientos del arrepentimiento real",
        "html": "<h3>Primero: reconocer tu condición</h3>\n<p>El rey David pasó meses sin ver su pecado después de cometer adulterio y ordenar un asesinato. Necesitó que el profeta Natán lo confrontara.</p>\n<p>La mayoría de nosotros vivimos en ese estado, convencidos de que estamos bien como estamos. El mensaje de la cultura lo refuerza: <em>no dejes que nadie te diga lo que tienes que hacer, eres perfecto tal como eres, si alguien señala lo que está mal en ti es porque no te ama.</em> El arrepentimiento dice exactamente lo contrario: hay algo real que está mal en ti, está dañando a otros y te está dañando a ti, y verlo con claridad es el primer paso para que algo cambie.</p>\n<p>San Agustín lo entendió, haciendo retrospección de su vida cuenta que a los 16 años robó unas peras con sus amigos, lo extraño fue que no tenía hambre y no le gustaban las peras, de hecho las tiraron. Años después se preguntó por qué lo había hecho y su conclusión fue: <em>\"mi placer estaba en hacer algo que era prohibido.\"</em></p>\n<p>No fue por necesidad, fue por la satisfacción misma de la transgresión.</p>\n<h3>Segundo: confesar y tomar responsabilidad</h3>\n<p>El hijo pródigo ensayó su discurso de regreso:</p>\n<blockquote>\"Me levantaré e iré a mi padre, y le diré: Padre, he pecado contra el cielo y contra ti. Ya no soy digno de ser llamado tu hijo; hazme como a uno de tus jornaleros.\" <em>Lucas 15:18-19</em></blockquote>\n<p>No fue a negociar ni a explicar, fue a confesar, a pedir misericordia.</p>\n<p>Tomar responsabilidad no es minimizar: <em>\"no es para tanto, fue sin querer.\"</em> No es relativizar: <em>\"es normal, todos lo hacen.\"</em> No es justificar: <em>\"es que tú no entiendes lo que he vivido.\"</em> Es decir: sí, soy culpable, acepto las consecuencias.</p>\n<p>Ese es un corazón que se está moviendo hacia el cambio.</p>\n<h3>Tercero: renunciar al pecado detrás del pecado</h3>\n<p>Aquí es donde el arrepentimiento se profundiza. Cuando David escribe el Salmo 51, dice algo que parece extraño: <em>\"Contra ti, contra ti solo he pecado.\"</em> ¿Y Urías? ¿Y Betsabé? ¿No pecó también contra ellos?</p>\n<p>Lutero lo explicaba así (parafraseando): <em>no podemos pecar contra otros sin que al mismo tiempo estemos pecando contra Dios.</em></p>\n<p>Cuando miento, en última instancia es porque me amo a mí mismo más de lo que amo a Dios. El pecado visible, la mentira, el robo, el adulterio, es la expresión de un pecado más profundo: que Dios no ocupa el lugar central en mi vida.</p>\n<p>Nos <em>\"arrepentimos\"</em> frecuentemente de las consecuencias, no de la relación que estamos rompiendo. Eso es arrepentimiento por nosotros mismos, no arrepentimiento real. El arrepentimiento genuino reconoce que la ofensa es primariamente contra Dios.</p>"
      },
      {
        "titulo": "Por qué el arrepentimiento lleva al evangelio y no al revés",
        "html": "<p>Aquí está el giro que cambia todo: el hijo pródigo no experimentó el evangelio cuando se arrepintió. Lo experimentó cuando vio al padre corriendo hacia él.</p>\n<p>El arrepentimiento lo puso en movimiento, pero lo que lo transformó fue ver el amor del Padre.</p>\n<p><strong>El evangelio no es acerca de tu arrepentimiento, es acerca del amor del Padre.</strong></p>\n<p>Y hay un detalle en Lucas 4 que casi siempre se nos pasa: Jesús leyó Isaías 61 hasta cierto punto, <em>\"a predicar el año agradable del Señor\"</em>, y cerró el libro. Lo que faltaba en el texto era: <em>\"y el día de venganza del Dios nuestro\"</em> (Isaías 61:2).</p>\n<p>Lo omitió a propósito.</p>\n<p>Estamos en la temporada de gracia y fe. El día del juicio vendrá, Jesús regresará y traerá juicio sobre las naciones. Pero aún no. Jesús vino primero a recibir ese juicio sobre sí mismo. Hizo el cambio sustituto en la cruz: tomó la venganza que nos correspondía para poder darnos gracia.</p>\n<p>Por eso son buenas noticias. Pero solo para el que sabe que las necesita, solo para los que se arrepienten y creen.</p>"
      }
    ],
    versiculos: [
      "Lucas 4:14-30",
      "Marcos 1:14-15",
      "Juan 1:12",
      "Juan 3:16",
      "Romanos 10:9",
      "Romanos 1:17",
      "Mateo 5:3",
      "Salmo 51:1-4",
      "Lucas 15:17-19",
      "Isaías 61:1-2"
    ],
    preguntas: [
      "Jesús dijo que las buenas noticias son para los pobres, los quebrantados, los cautivos, los ciegos. ¿En cuál de esas categorías te reconoces hoy y cuál te cuesta más admitir?",
      "La clase distingue tres formas de no tomar responsabilidad: minimizar, relativizar, justificar. ¿Cuál de las tres es tu patrón más frecuente con Dios y con otros?",
      "El hijo pródigo experimentó el evangelio no cuando se arrepintió, sino cuando vio al padre corriendo hacia él. ¿Qué dice eso sobre dónde está el peso del evangelio, en lo que tú haces o en lo que el Padre hace?"
    ],
    declaraciones: [
      "El arrepentimiento (<em>metanoia</em>) es condición epistémica necesaria para la fe salvífica, no consecuencia de ella.",
      "La fe salvífica y el arrepentimiento son inseparables pero distinguibles: el arrepentimiento es el acto de humildad que habilita la fe.",
      "La gracia se recibe únicamente por quienes reconocen su pobreza espiritual, la autosuficiencia percibida es impedimento estructural para recibirla.",
      "El pecado en su raíz no es transgresión de ley sino ruptura relacional: es no amar a Dios sobre todas las cosas.",
      "El arrepentimiento genuino incluye tres componentes: reconocimiento de condición, confesión con toma de responsabilidad, y renuncia al pecado detrás del pecado.",
      "El remordimiento emocional sin renovación de mente no constituye arrepentimiento bíblico.",
      "La sustitución penal es la base del evangelio: Cristo recibió el juicio que correspondía al pecador para que la gracia fuera posible.",
      "La temporada presente es de gracia y fe; el juicio escatológico está diferido pero es cierto.",
      "El orgullo espiritual, confianza en la propia justicia, es el mayor impedimento para la fe, mayor que el pecado manifiesto."
    ],
  },
  {
    slug: 'estudio-4',
    numero: 4,
    modulo: 'fundamento',
    titulo: "¿Cómo recibimos el evangelio? Fe",
    tags: ['evangelio', 'fe', 'creer', 'salvación'],
    fecha: '2026-10-20',
    resumen: "Todos tienen fe, la pregunta es en qué está puesta. Qué significa creer en Jesús según su conversación con Nicodemo, y por qué arrepentirse es soltar y creer es aferrarse.",
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=rO4S7JMImYA',
    spotifyUrl: 'https://open.spotify.com/episode/5DqEc2ls7R7CY9s40IJkbJ',
    lectura: [
      {
        "titulo": "Todos tienen fe. Incluso los que dicen no tenerla",
        "html": "<p>Richard Dawkins, uno de los ateos más conocidos del mundo, escribió: <em>\"La fe es la gran excusa para evitar la necesidad de pensar y evaluar evidencias.\"</em> Para él, la fe es lo opuesto al pensamiento. Es lo que hacen las personas que no quieren razonar.</p>\n<p>Pero hay un problema con esa definición.</p>\n<p>La revista National Geographic, al explicar el origen del universo, usa esta frase: <em>\"Muchos creen que, a medida que transcurría el tiempo y la materia se enfriaba, comenzaron a formarse tipos de átomos más diversos.\"</em> Muchos <em>creen</em>, no <em>\"muchos han demostrado\"</em>, no <em>\"muchos han verificado\"</em>, creen.</p>\n<p>Andrei Linde, físico teórico de Stanford, lo admite con honestidad científica: <em>\"Nuestra comprensión de la realidad no es completa. La realidad existe independientemente de nosotros.\"</em></p>\n<p>Todos operamos con compromisos que no podemos verificar completamente. Los ateos tienen fe en que el universo se creó a sí mismo, en que la materia surgió de la nada, en que billones de años de procesos no dirigidos produjeron el ecosistema preciso que permite que la vida exista. Eso no es conocimiento demostrado. Es fe.</p>\n<p><strong>La pregunta no es si tienes fe. La pregunta es en qué está puesta tu fe.</strong></p>"
      },
      {
        "titulo": "Por qué esto importa para el evangelio",
        "html": "<p>Jesús le enseñó a un hombre religioso, educado y bien intencionado qué significa realmente creer.</p>\n<p>Nicodemo era fariseo, conocía las Escrituras mejor que casi cualquier persona de su época, no era escéptico. Creía que Jesús era real, que sus milagros eran reales, que venía de Dios. Le dijo directamente:</p>\n<blockquote>\"Este vino a Jesús de noche, y le dijo: Rabí, sabemos que has venido de Dios como maestro; porque nadie puede hacer estas señales que tú haces, si no está Dios con él.\" <em>Juan 3:2</em></blockquote>\n<p>Suena bien, suena a fe.</p>\n<p>Pero Jesús le respondió como si Nicodemo no hubiera entendido nada todavía.</p>\n<p>¿Por qué? Porque Nicodemo tenía una fe incompleta, creía en Jesús como maestro enviado por Dios, pero no como el Hijo de Dios encarnado que vino a morir por él. Y esa diferencia lo es todo.</p>"
      },
      {
        "titulo": "Creer en Jesús tiene contenido específico",
        "html": "<p>Jesús le explica a Nicodemo dos cosas sobre lo que significa creer en Él.</p>\n<h3>Primero: creer que Jesús es quien dice ser</h3>\n<blockquote>\"Nadie subió al cielo, sino el que descendió del cielo; el Hijo del Hombre, que está en el cielo.\" <em>Juan 3:13</em></blockquote>\n<p>Descendió, fue enviado, es el Hijo unigénito de Dios. No solamente un gran maestro moral. No un profeta más. No un ser creado. No un arquetipo espiritual. Dios mismo, encarnado.</p>\n<p>Nicodemo creía en Jesús el maestro. Jesús le estaba diciendo que eso no es suficiente.</p>\n<p>Y aquí está la pregunta que el texto deja flotando: si creer que Jesús era un gran maestro no es suficiente, ¿qué exactamente es lo que hace a la fe salvífica diferente?</p>\n<h3>Segundo: confiar en su obra, no en la propia</h3>\n<p>Jesús le da a Nicodemo una imagen del Antiguo Testamento que él conocería bien. En el desierto, el pueblo de Israel fue atacado por serpientes venenosas. La gente moría, se arrepintieron y pidieron a Moisés que intercediera por ellos delante de Dios, Moisés oró, y Dios le dijo que hiciera una serpiente de bronce y la levantara sobre un asta. Fue una instrucción simple:</p>\n<blockquote>\"Y Jehová dijo a Moisés: Hazte una serpiente ardiente, y ponla sobre un asta; y cualquiera que fuere mordido y mirare a ella, vivirá.\" <em>Números 21:8</em></blockquote>\n<p>No había que hacer nada más, no había que ganárselo, no había que ser suficientemente bueno. Solo mirar.</p>\n<p>Los comentaristas señalan que la serpiente de bronce representa el pecado juzgado, el bronce se trabaja con fuego, es una imagen del juicio, y es una imagen de lo que Jesús hizo por nosotros.</p>\n<p>Pablo lo confirma siglos después:</p>\n<blockquote>\"Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él.\" <em>2 Corintios 5:21</em></blockquote>\n<p>Cristo tomó nuestro pecado y fue juzgado en nuestro lugar.</p>\n<p>Luego Jesús dice:</p>\n<blockquote>\"Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado.\" <em>Juan 3:14</em></blockquote>\n<p>La imagen es idéntica. La serpiente fue levantada en un asta, Jesús fue levantado en una cruz. Los israelitas estaban muriendo por la mordida de una serpiente, nosotros estamos condenados por el pecado. La instrucción es la misma: mira, confía, no en tus obras, en Él.</p>"
      },
      {
        "titulo": "La mordida ya ocurrió",
        "html": "<p>Aquí está lo que Juan 3 dice que casi nunca se escucha completo:</p>\n<blockquote>\"El que en él cree, no es condenado; pero el que no cree, ya ha sido condenado, porque no ha creído en el nombre del unigénito Hijo de Dios.\" <em>Juan 3:18</em></blockquote>\n<p>Ya, tiempo presente.</p>\n<p>No es que si no crees vas a ser condenado por no haber creído, ya estás condenado, porque ya fuiste mordido, el veneno ya está. La condición de pecado no es algo que va a suceder si no te portas bien, es tu condición actual.</p>\n<p>Los israelitas en el desierto no tenían tiempo de ganarse la salvación, estaban muriendo. Y cuando estás muriendo y no tienes opción, crees, volteas a ver porque no hay otra alternativa.</p>\n<p>Eso es lo que Jesús está diciéndole a Nicodemo y a nosotros: <em>\"Ya fuiste mordido. Ya estás condenado. No hay otra salvación disponible. Mira a Cristo.\"</em></p>\n<blockquote>\"Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.\" <em>Hechos 4:12</em></blockquote>"
      },
      {
        "titulo": "Arrepentimiento y fe: dos movimientos, una misma respuesta",
        "html": "<p>La lectura anterior habló del arrepentimiento, esta habla de la fe. Pero son inseparables, son dos movimientos del mismo acto.</p>\n<p>Arrepentirse es volver en sí, como el hijo pródigo, reconocer la mordida, soltar la ilusión de que puedes salvarte a ti mismo.</p>\n<p>Creer es voltear a ver la serpiente de bronce, ver al Padre corriendo hacia ti, aferrarte a Cristo.</p>\n<p><strong>Arrepentirse es soltar, creer es aferrarse.</strong></p>\n<blockquote>\"Mirad a mí, y sed salvos, todos los términos de la tierra, porque yo soy Dios, y no hay más.\" <em>Isaías 45:22</em></blockquote>\n<p>Lo que volteas a ver en tus momentos de mayor aflicción, eso es en lo que realmente confías. No lo que dices que crees. Lo que buscas cuando sientes al veneno haciendo efecto.</p>\n<p>¿A qué volteas a ver?</p>"
      }
    ],
    versiculos: [
      "Marcos 1:14-15",
      "Juan 3:1-18",
      "Números 21:7-9",
      "2 Corintios 5:21",
      "Hechos 4:12",
      "Isaías 45:22",
      "Romanos 10:9-10",
      "Hebreos 11:1-6"
    ],
    preguntas: [
      "La clase argumenta que todos tienen fe, incluso los que rechazan la fe religiosa. ¿En qué has puesto tu fe fuera de Dios y cómo ha funcionado en tus momentos de mayor crisis?",
      "Nicodemo creía que Jesús era un gran maestro enviado por Dios, pero eso no era suficiente. ¿Qué diferencia hay entre admirar a Jesús y confiar en Jesús y cuál de las dos describe mejor tu relación con Él hoy?",
      "La imagen de la serpiente de bronce es simple: mira y vive. No hay nada que hacer, solo mirar. ¿Qué te cuesta más, soltar el intento de ganarte la salvación, o simplemente mirar y confiar en que la obra de Cristo es suficiente?"
    ],
    declaraciones: [
      "La fe salvífica (<em>pistis</em>) no es credulidad irracional sino convicción fundamentada en un evento histórico verificable: la encarnación, muerte y resurrección de Cristo.",
      "La fe bíblica tiene objeto específico e irremplazable: la persona de Jesucristo como Hijo de Dios encarnado, no meramente como maestro moral, profeta o arquetipo.",
      "La fe y el arrepentimiento son inseparables: el arrepentimiento es el movimiento de soltar, la fe es el movimiento de aferrarse.",
      "La justificación es por fe sola en Cristo, confiar en obras propias para salvación es una forma de incredulidad, no de fe insuficiente.",
      "La expiación sustituta es el fundamento objetivo de la fe: Cristo tomó el pecado y recibió el juicio que correspondía al pecador (2 Corintios 5:21).",
      "La condenación no es consecuencia futura del rechazo, es el estado presente de quien no ha creído (Juan 3:18: \"ya ha sido condenado\").",
      "La exclusividad soteriológica de Cristo es afirmación doctrinal, no cultural: no hay salvación en ningún otro nombre (Hechos 4:12).",
      "La fe universal es una realidad antropológica: todo ser humano deposita confianza en algo, la pregunta no es si se tiene fe sino en qué está puesta."
    ],
  },
  {
    slug: 'estudio-5',
    numero: 5,
    modulo: 'fundamento',
    titulo: '¿Qué recibimos con el evangelio?',
    tags: ['evangelio', 'efesios', 'adopción', 'identidad'],
    fecha: '2026-10-23',
    resumen: '¿Es posible creer el evangelio y que tu vida no cambie? Todo lo que recibimos lo recibimos en Cristo: escogidos, redimidos, adoptados y sellados con el Espíritu.',
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=96nvJlv7NeE',
    spotifyUrl: 'https://open.spotify.com/episode/7cAJ7Czpv6c8mcm0Ukuccz',
    lectura: [
      {
        "titulo": "La pregunta que nadie hace en voz alta",
        "html": "<p>Hay una conversación que ocurre mucho en la iglesia pero casi nunca en público.</p>\n<p>Alguien cree el evangelio, genuinamente. Entiende que Jesús murió por sus pecados, que la salvación es por gracia, que no hay nada que ganar ni merecer, lo cree y entonces espera.</p>\n<p>Y nada cambia.</p>\n<p>Bueno, algo cambia. Hay alivio inicial, quizás emoción. Pero las mismas ansiedades regresan. El mismo carácter, las mismas inseguridades. Y la pregunta que esa persona nunca hace en voz alta porque suena a falta de fe es: ¿Realmente funcionó?</p>\n<p>¿Es posible creer el evangelio y que tu vida no cambie?</p>\n<p>Regresaremos a esa pregunta al final de la lectura.</p>\n<p>Efesios 1:3-14 es, en el griego original, una sola oración. Larga, densa, escrita de una sola vez. Pablo no la diseñó para ser analizada en partes, la escribió para ser sentida completa, como alguien que intenta describir algo tan grande que no puede parar de hablar.</p>\n<p>Y lo primero que salta es una repetición que no es accidental: <em>en Cristo, en él, por medio de Jesucristo, en el Amado.</em> Once veces en doce versículos. Todo lo que recibimos, sin excepción, lo recibimos porque estamos en Cristo. No por lo que hicimos, por lo que Él hizo.</p>"
      },
      {
        "titulo": "¿Qué recibimos exactamente?",
        "html": "<h3>Escogidos y predestinados</h3>\n<blockquote>\"Según nos escogió en él antes de la fundación del mundo, para que fuésemos santos y sin mancha delante de él, en amor habiéndonos predestinado para ser adoptados hijos suyos por medio de Jesucristo, según el puro afecto de su voluntad.\" <em>Efesios 1:4-5</em></blockquote>\n<p>Muchos leen esto y piensan que Pablo está resolviendo la pregunta de quién se salva y quién no, que Dios determinó de antemano tu destino eterno sin que tú puedas hacer nada. Pero esta carta fue escrita a personas que ya creían, a cristianos. Lo que Pablo está diciendo no es que Dios eligió arbitrariamente a quién salvar, sino que Dios tiene un plan determinado desde antes de la creación para los que están en Cristo: ser santos, adoptados, herederos.</p>\n<p>Piénsalo así: el destino y la ruta del avión ya están determinados antes de que despegue. Pero tú decides si abordas o no. Una vez adentro, el destino es fijo, eso es lo que Pablo describe.</p>\n<h3>Redimidos y perdonados</h3>\n<blockquote>\"En quien tenemos redención por su sangre, el perdón de pecados según las riquezas de su gracia.\" <em>Efesios 1:7</em></blockquote>\n<p>No según tus méritos, según sus riquezas. La diferencia importa: si fuera según tus méritos, habría un límite, según sus riquezas no tiene techo.</p>\n<h3>Adoptados</h3>\n<blockquote>\"En amor habiéndonos predestinado para ser adoptados hijos suyos por medio de Jesucristo, según el puro afecto de su voluntad.\" <em>Efesios 1:5</em></blockquote>\n<p>No solo perdonados, adoptados. Un criminal indultado queda libre pero sigue siendo un extraño. Un hijo adoptado recibe nombre, herencia, acceso, identidad. Eso es cualitativamente diferente.</p>\n<h3>Sellados con el Espíritu</h3>\n<blockquote>\"En él también vosotros, habiendo oído la palabra de verdad, el evangelio de vuestra salvación, y habiendo creído en él, fuisteis sellados con el Espíritu Santo de la promesa, que es las arras de nuestra herencia hasta la redención de la posesión adquirida, para alabanza de su gloria.\" <em>Efesios 1:13-14</em></blockquote>\n<p>Las arras en el mundo antiguo era el anticipo de pago que garantizaba legalmente el contrato, la señal de que el comprador iba a cumplir. El Espíritu es eso: la garantía de que todo lo que Dios prometió va a cumplirse. No una posibilidad, un contrato firmado.</p>\n<p>Todo esto ya fue dado, tiempo pasado, recibido en el momento en que creíste.</p>\n<p>Entonces la pregunta regresa con más fuerza: ¿Es posible creer el evangelio y que tu vida no cambie? Solo si realmente no entiendes y crees todo lo que has recibido con el evangelio.</p>\n<p>Pero si descubres todo lo que Dios nos da y lo estás creyendo, ¿por qué no lo estás viviendo?</p>\n<p>Eso es exactamente lo que veremos en la próxima clase.</p>"
      }
    ],
    versiculos: [
      "Efesios 1:3-14",
      "Romanos 8:15-17, 28-30",
      "Gálatas 4:4-7",
      "2 Corintios 1:21-22",
      "Juan 1:12"
    ],
    preguntas: [
      "Pablo dice que fuimos escogidos <em>en Cristo</em>, no independientemente, sino dentro de la unión con Él. ¿Qué dice eso sobre la base de tu seguridad delante de Dios: está en tu desempeño o en tu posición en Cristo?",
      "La clase distingue entre ser <em>perdonado</em> (como criminal indultado) y ser <em>adoptado</em> (como hijo con identidad y herencia). ¿Cuál de las dos describe mejor cómo te relacionas con Dios en el día a día y qué cambia si la respuesta es adopción?",
      "El Espíritu como \"<em>arras</em>\" es una garantía legal, no una experiencia emocional. ¿En qué áreas de tu vida cristiana tratas la presencia del Espíritu como algo que depende de cómo te sientes, en lugar de como una realidad garantizada?"
    ],
    declaraciones: [
      "Las bendiciones de la salvación no son ganadas progresivamente sino recibidas de una vez en Cristo, son realidades posicionales, no procesos morales.",
      "La elección y predestinación en Efesios 1 se refieren al plan de santificación y adopción, no a la determinación unilateral de quiénes son salvos; el libre albedrío humano no es anulado sino presupuesto.",
      "La justificación, adopción, redención, santificación y glorificación son lógicamente distinguibles pero ontológicamente inseparables en la unión con Cristo.",
      "El Espíritu Santo es arras, garantía jurídica y anticipo experiencial, de la herencia escatológica."
    ],
  },
  {
    slug: 'estudio-6',
    numero: 6,
    modulo: 'fundamento',
    titulo: '¿Cómo vivimos el evangelio?',
    tags: ['evangelio', 'nueva vida', 'efesios', 'fe'],
    fecha: '2026-10-23',
    resumen: 'Si ya recibimos todo en Cristo, ¿por qué no lo estamos viviendo? Pablo no da instrucciones, ora para que veamos. Vivir el evangelio es afinar cada área de la vida a su sonido.',
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=96nvJlv7NeE',
    spotifyUrl: 'https://open.spotify.com/episode/7cAJ7Czpv6c8mcm0Ukuccz',
    lectura: [
      {
        "titulo": "El músico que afina con el músico de al lado",
        "html": "<p>Imagina una orquesta que suena desafinada. Cada instrumento está un poco fuera de tono. La solución intuitiva parece obvia: que cada músico afine con el músico de al lado. Si todos se ajustan entre sí, eventualmente todo sonará bien.</p>\n<p>Pero no funciona así. Si cada uno afina con el de al lado, el error se propaga y se multiplica. El resultado es caos, no música. La única solución real es que todos afinen con un solo sonido externo, el estándar de referencia, sin importar lo que el de al lado esté haciendo.</p>\n<p>Ahí está, en una imagen, el problema de la vida cristiana.</p>\n<p>Creemos el evangelio, recibimos todo lo que la clase anterior describió: perdón, adopción, el Espíritu, herencia garantizada. Y aun así, seguimos viviendo desafinados. No porque las verdades no sean reales. Sino porque no las estamos usando como el estándar de referencia.</p>\n<p><strong>¿Por qué? Y ¿cómo se cambia eso?</strong></p>"
      },
      {
        "titulo": "Por qué Pablo ora en lugar de dar instrucciones",
        "html": "<p>La clase anterior terminó con una pregunta sin resolver: si ya tienes todo eso, ¿por qué no lo estás viviendo?</p>\n<p>Pablo responde, pero no de la manera que esperamos. No da una lista de pasos, no dice \"<em>ahora que creen, hagan estas cinco cosas.</em>\" Lo que hace es orar.</p>\n<blockquote>\"Para que el Dios de nuestro Señor Jesucristo, el Padre de gloria, os dé espíritu de sabiduría y de revelación en el conocimiento de él, alumbrando los ojos de vuestro entendimiento, para que sepáis cuál es la esperanza a que él os ha llamado, y cuáles las riquezas de la gloria de su herencia en los santos.\" <em>Efesios 1:17-18</em></blockquote>\n<p>¿Por qué un apóstol ora para que gente que ya cree pueda <em>ver</em> lo que ya tiene?</p>\n<p>Porque para creer bien la verdad, primero debemos verla y entenderla.</p>\n<p>Como alguien que necesita lentes, el mundo, la realidad no puede verse bien sin esos lentes, sin lentes miras borroso, pero cuando te pones los lentes, la realidad no cambia, lo que cambia es que los lentes ahora te permiten ver la realidad como es.</p>\n<p>El evangelio funciona igual, las bendiciones son reales, fueron dadas. Pero si tus ojos no fueron alumbrados para verlas, no puedes creerlas y por ende vivir desde ellas. No puedes tener fe en algo que no conoces ni has visto.</p>\n<p>Por eso Pablo no da instrucciones, ora, porque el primer paso no es esforzarse más, es ver mejor.</p>"
      },
      {
        "titulo": "Lo que Pablo pide que veamos",
        "html": "<p>La oración de Pablo es específica, no pide genéricamente que \"<em>crezcan espiritualmente.</em>\" Pide que vean tres cosas concretas:</p>\n<ul>\n<li>La esperanza de su llamamiento.</li>\n<li>Las riquezas de la herencia.</li>\n<li>Y la grandeza del poder de Dios hacia ellos.</li>\n</ul>\n<p>Y sobre ese poder hace una afirmación que es difícil procesar: es el mismo poder que resucitó a Cristo de los muertos. El mismo que lo sentó sobre todo principado, autoridad y poder. El mismo que sometió todas las cosas bajo sus pies.</p>\n<p>Ese poder, dice Pablo, está disponible para los que creen, no como metáfora motivacional. Como declaración doctrinal.</p>\n<blockquote>\"Así que la fe es por el oír, y el oír, por la palabra de Dios.\" <em>Romanos 10:17</em></blockquote>\n<blockquote>\"Esto solo quiero saber de vosotros: ¿Recibisteis el Espíritu por las obras de la ley, o por el oír con fe?\" <em>Gálatas 3:2</em></blockquote>\n<p>El mecanismo es consistente: oír la verdad, ver la verdad, creer la verdad y la experiencia sigue a la fe, no al revés. No sientes, experimentas o haces primero y crees después. Crees primero y el Espíritu alumbra lo que ya es real.</p>"
      },
      {
        "titulo": "Los lentes viejos",
        "html": "<p>Lesslie Newbigin, misionero y teólogo inglés, lo dijo con precisión: <em>\"La historia cristiana no es algo a lo que vemos, sino un conjunto de lentes por el cual vemos.\"</em></p>\n<p>El evangelio no es información adicional que se agrega a tu cosmovisión existente. Es la óptica desde la cual se ve todo lo demás. Y la mayoría de nosotros, aunque creemos el evangelio, seguimos viendo la vida con los lentes de antes.</p>\n<ul>\n<li>Perdonados, pero viviendo llenos de culpa y vergüenza.</li>\n<li>Aceptados, pero sintiéndose aislados y rechazados.</li>\n<li>Adoptados, pero con complejos de inferioridad o superioridad.</li>\n<li>Con el Espíritu, pero sintiéndose completamente solos.</li>\n<li>Con herencia garantizada, pero con ansiedad constante sobre el futuro.</li>\n</ul>\n<p>Cada una de esas tensiones es el mismo problema: una realidad posicional que todavía no se convirtió en lente. Y la solución no es esforzarse para sentirse diferente. Es volver al evangelio, verlo mejor, y dejar que reemplace la óptica anterior.</p>\n<p><strong>Eso es vivir el evangelio, no una nueva lista de obligaciones, sino afinar cada área de la vida al sonido del evangelio, hasta que lo que ves coincida con lo que tienes.</strong></p>"
      }
    ],
    versiculos: [
      "Efesios 1:15-23",
      "Romanos 1:17, 10:17",
      "Gálatas 3:2",
      "Juan 14:26",
      "Colosenses 3:1-4",
      "2 Corintios 3:18"
    ],
    preguntas: [
      "Pablo ora para que creyentes que ya tienen el evangelio puedan <em>ver</em> lo que tienen. ¿En cuál de las bendiciones de la clase anterior, perdón, adopción, Espíritu, herencia, sientes que tus ojos todavía no están completamente alumbrados?",
      "La imagen de los lentes dice que el evangelio no es algo a lo que miras sino algo con lo que miras. ¿En qué área concreta de tu vida (relaciones, trabajo, identidad, miedo al futuro) sigues usando los lentes viejos en lugar del evangelio como óptica?",
      "Pablo describe el poder disponible para los creyentes como el mismo que resucitó a Cristo. ¿Qué cambiaría en tu vida práctica si creyeras eso, no como metáfora sino como realidad operativa?"
    ],
    declaraciones: [
      "La iluminación del Espíritu es condición epistémica necesaria para que la verdad revelada sea creída y experimentada, no sólo conocida intelectualmente.",
      "La fe es el medio continuo de la vida cristiana, no sólo el punto de entrada, el justo vive por fe desde la justificación hasta la glorificación (Romanos 1:17).",
      "El evangelio no produce una nueva lista de obligaciones sino una nueva identidad que reorienta todas las áreas de la vida.",
      "La vida cristiana es el proceso de alinear la experiencia vivida con las realidades posicionales ya recibidas en Cristo."
    ],
  },
  {
    slug: 'estudio-7',
    numero: 7,
    modulo: 'fundamento',
    titulo: '¿Cómo cambiamos con el evangelio?',
    tags: ['evangelio', 'santificación', 'cambio', 'idolatría'],
    fecha: '2026-11-13',
    resumen: 'El evangelio no solo inicia el cambio, es el único agente de cambio real. Tres preguntas que transforman la vida: qué ídolo hay detrás de cada pecado, desde qué posición te acercas a Dios, y si estás dispuesto a ser conocido por otros.',
    lectura: [
      {
        titulo: 'Después de creer',
        html: '<p>Hay una pregunta que todos tienen una vez han entendido que la respuesta correcta frente al evangelio es creerlo.</p>\n<p>¿Pero cómo cambio? ¿Qué tengo que hacer para cambiar? ¿En serio, no tengo que seguir reglas para cambiar? ¿Solo debo creer y cambiaré?</p>\n<p>Alguien creyó el evangelio, genuinamente. Entiende que Jesús murió por sus pecados, que fue resucitado, que la salvación es por gracia. Lo cree, y después la vida sigue siendo relativamente la misma, las mismas reacciones, el mismo carácter difícil, los mismos patrones que no cambian. La pregunta que esa persona realmente se está haciendo pero nunca formula es esta: ¿Es el evangelio suficiente para cambiar?</p>\n<p>La respuesta de la mayoría de la iglesia es implícitamente: no. <em>"El evangelio es el punto de entrada, para lo que viene después, para crecer, para madurar, para cambiar de verdad, se necesita algo más. Disciplina, reglas, un sistema de hábitos espirituales, una lista de cosas que hacer y cosas que no hacer."</em></p>\n<p>Pablo hace exactamente lo opuesto: escribe a personas que ya creen, que ya son iglesia, y les recuerda el evangelio. No les da el siguiente nivel, les lleva de regreso al fundamento.</p>\n<p>¿Por qué? ¿Qué sabe Pablo sobre el cambio que nosotros hemos olvidado?</p>',
      },
      {
        titulo: 'El problema con cambiar a la fuerza',
        html: '<p>La mayoría de los creyentes intenta cambiar de la misma manera: adhiriéndose a una ley moral. Con suficiente determinación, suficiente disciplina, suficiente vergüenza productiva, algo tiene que ceder.</p>\n<p>El resultado es siempre uno de dos. O lo logras y aparece el orgullo, la superioridad moral, la comparación con los que no lo lograron. O no lo logras y aparece la desesperación, el ciclo de promesas rotas, la sensación de que eres un caso perdido.</p>\n<p>Ninguno de los dos es el evangelio, y ninguno funciona a largo plazo.</p>\n<p>¿Por qué no funciona? Porque está atacando el síntoma, no la enfermedad. El evangelio propone un proceso diferente: no es un proceso de corrección, es un proceso de orientación. Orientarse constantemente hacia el evangelio y dejarlo actuar en cada dirección, en cada relación, tu relación con Dios, contigo y con otros. Debemos ver a través del evangelio y dejarlo afinar cada área de nuestra vida.</p>',
      },
      {
        titulo: 'Mira adentro: el pecado detrás del pecado',
        html: '<p>Cuando alguien peca, la reacción natural es tratar el acto como el problema. <em>Me enojé, necesito controlar mi enojo. Mentí, necesito ser más honesto.</em> El patrón es siempre el mismo: identificar el comportamiento, corregirlo, prometer hacerlo diferente.</p>\n<p>Pero el evangelio sugiere algo distinto. El acto es el síntoma, el problema real está un nivel más abajo.</p>\n<p>Cuando el israelita era mordido por una serpiente en el desierto, el problema no era el dolor, era el veneno. Atender el dolor sin extraer el veneno no resuelve nada.</p>\n<p>¿Cuál es el veneno? En el evangelio, el problema del pecado no es que rompiste una regla. Es que estás amando algo más que a Dios. Estás buscando en otro lugar lo que solo Dios puede dar. Eso produce el comportamiento.</p>\n<p>Entonces la pregunta que hay que hacerse después de pecar no es <em>"¿cómo corrijo esto?"</em> sino: ¿Qué estaba buscando en ese momento que no estaba buscando en Dios?</p>\n<p>¿Por qué me enojé? Tal vez el problema no es el enojo. Tal vez es una obsesión por controlar todo, y algo escapó de tu control. ¿Por qué mentí? Quizás no es que seas deshonesto por naturaleza. Quizás es que tienes miedo a perder algo, y la verdad amenazaba eso.</p>\n<p>Cuando llegas a esa respuesta, al pecado detrás del pecado, tienes algo real que llevar a Dios. No <em>"perdóname por enojarme"</em> sino <em>"Señor, estoy intentando controlar lo que solo tú puedes sostener."</em> No <em>"fallé de nuevo"</em> sino <em>"me siento vacío y no te busqué a ti primero."</em></p>\n<p>Eso es diagnóstico, no solo corrección.</p>',
      },
      {
        titulo: 'Mira arriba: cómo te diriges a Dios',
        html: '<p>Hay dos maneras de llegar ante Dios cuando sabes que fallaste.</p>\n<p>Una es la manera del hijo mayor de Lucas 15. Que nunca se fue, que hizo todo bien, que lleva la cuenta de lo que merece. <em>"He aquí, tantos años te sirvo, y nunca me has dado."</em> Sin el evangelio, la oración es eso: una negociación. Presentas tus méritos, pides lo que crees que te corresponde, esperas que el balance sea favorable.</p>\n<p>La otra manera es la del hijo que reconoce que ya no merece nada, pero que el padre corrió a su encuentro antes de que terminara su discurso preparado.</p>\n<p>Pablo, antes de orar en Efesios 1, pasa varios versículos recordando todo lo que ya es verdad: escogidos, redimidos, adoptados, sellados. Después ora, no para ganarse el acceso, sino para ejercerlo.</p>\n<blockquote>"Acerquémonos, pues, confiadamente al trono de la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro." <em>Hebreos 4:16</em></blockquote>\n<p>La confianza no viene del desempeño, viene de saber quién eres. El trabajador viene a negociar. El hijo viene porque es hijo.</p>\n<p>¿Desde cuál de las dos posiciones llegas tú la mayoría de las veces?</p>',
      },
      {
        titulo: 'Mira afuera: busca ser conocido por otros',
        html: '<p>Hay una tercera dimensión del cambio que la mayoría evita porque requiere lo más difícil: ser conocido.</p>\n<p>El evangelio produce una paradoja que no produce ningún otro sistema de creencias. Por un lado, dice que eres más pecador y más perdido de lo que reconoces, tanto, que no había solución posible excepto que Dios mismo viniera a resolverlo. Por otro lado, dice que eres tan amado y tan valioso que ese mismo Dios dio su vida por ti.</p>\n<p>Esas dos verdades juntas hacen algo que ninguna de las dos puede hacer sola: te liberan de la necesidad de aparentar.</p>\n<p>Si eres más pecador de lo que creías, ya no tiene sentido fingir que no fallas. No hay nada que proteger. Si eres más amado de lo que mereces, ya no necesitas la aprobación de nadie para tener identidad. Tienes algo mejor.</p>\n<blockquote>"Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados." <em>Santiago 5:16</em></blockquote>\n<p>La palabra griega para <em>sanados</em> ahí es <em>iaomai</em>: curar, hacer completo, liberar de errores. No es perdón, que ya fue dado en Cristo. Es sanidad, y esa sanidad pasa por ser conocido por otros.</p>\n<p>Cuando el evangelio es real en ti, puedes escuchar <em>"estás equivocado"</em> sin que eso te destruya. Tu identidad no está en lo que haces. La crítica es información, no una amenaza existencial. El hijo mayor no podía recibir la corrección del padre porque su orgullo era su identidad. Cuando eso cae, puedes escuchar, recibir, y extender a otros lo mismo que recibiste.</p>',
      },
      {
        titulo: 'La única práctica que sostiene todo',
        html: '<p>El fundamento no es disciplina, no es esfuerzo, no es un sistema de siete pasos.</p>\n<p>Es esto: exponerte deliberada y repetidamente al evangelio mismo, y aplicarlo en tu relación contigo mismo, con Dios y con otros.</p>\n<p>Como Israel en el desierto, cuando el veneno actuaba, la solución no era un sistema de recuperación ni siete etapas para sanar. Era mirar. Activamente.</p>\n<blockquote>"Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." <em>Juan 3:14-15</em></blockquote>\n<p>No miraron una vez y quedaron inmunes. Cada vez que el veneno actuaba, tenían que volver a mirar.</p>\n<p>Una orquesta desafinada no se arregla haciendo que cada músico afine con el músico de al lado. Si afinas con quien está al lado, el error se propaga. Todos tienen que afinar con el mismo sonido externo. Ese sonido es el evangelio, vivir el evangelio es afinar cada área de la vida a esa misma nota, no una vez, sino continuamente.</p>\n<p>Lesslie Newbigin lo dijo así: <em>"La historia cristiana no es algo a lo que vemos, sino un conjunto de lentes por el cual vemos."</em></p>\n<p>Predicarte el evangelio a ti mismo no es pedirle a Dios que te ayude a ser mejor. Es recordarte activamente, todos los días, lo que ya es verdad. Lo que Cristo hizo, quién eres en Él, que no hay condenación, que estás vestido con su justicia, no con tus propios intentos de reparación.</p>\n<p>Entonces la pregunta no es <em>¿Cómo puedo cambiar?</em> sino <em>¿Hacia dónde estoy mirando cuando el veneno actúa?</em></p>',
      },
    ],
    versiculos: [
      'Romanos 1:17',
      'Juan 3:14-15',
      'Hebreos 4:16',
      'Romanos 8:1',
      'Efesios 1:16-19',
      'Santiago 5:16',
      'Lucas 15:11-32',
    ],
    preguntas: [
      'La clase describe el "pecado detrás del pecado", la motivación idolátrica debajo del comportamiento visible. Piensa en un patrón de pecado con el que hayas luchado. ¿Qué estabas buscando en ese momento que no estabas buscando en Dios? ¿Qué cambia si eso es lo que llevas a Él?',
      'Pablo ora después de recordar las verdades del evangelio, no antes. ¿En qué se parece tu oración actual a una negociación con Dios, presentando méritos, llevando cuentas, en lugar de acceso filial? ¿Qué cambia si llegas como hijo, no como trabajador?',
      'El evangelio dice que somos más pecadores de lo que creíamos y más amados de lo que merecemos. ¿En cuál de las dos verdades tienes más dificultad: en aceptar cuán profundo es el problema, o en creer cuán completo es el amor? ¿Cómo afecta eso tu disposición a ser conocido por otros en la comunidad?',
    ],
    declaraciones: [
      'El evangelio como principio permanente de santificación: la santificación no opera mediante un código moral externo sino mediante la apropiación continua y profundizada del mismo evangelio que inicia la salvación. No hay "segundo nivel" de madurez cristiana más allá del evangelio.',
      'Pecado como idolatría estructural: el pecado no es primariamente un problema de conducta sino de objeto de fe. El creyente peca cuando deposita confianza, satisfacción o identidad en algo distinto a Dios. La conducta pecaminosa es síntoma, no enfermedad.',
      'El "pecado detrás del pecado": todo acto pecaminoso tiene una motivación idolátrica subyacente. El arrepentimiento genuino no apunta solo al acto sino al amor desordenado que lo produce.',
      'La oración como relación filial, no negociación meritoria: el creyente accede a Dios en virtud de su adopción, no de su desempeño. La oración sin evangelio es transacción; la oración desde el evangelio es comunión de hijo con Padre.',
      'La confesión comunitaria como mediación de sanidad, no de justificación: Santiago 5:16 opera en el plano de la sanidad e integración, no de la justificación. La confesión pública no otorga perdón adicional sino que activa la función terapéutica de la comunidad.',
      'La identidad en Cristo como fundamento de la receptividad a la corrección: quien tiene su identidad en Cristo puede recibir crítica sin que constituya una amenaza existencial. La defensividad ante la corrección revela identidad basada en el desempeño, no en la gracia.',
      'La predicación del evangelio a uno mismo como disciplina central: la transformación cristiana requiere exposición deliberada y repetida a las verdades del evangelio, no esfuerzo moral directo. El creyente aplica al presente lo que ya es verdad en Cristo.',
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=vqhilBs7TG8&list=PLtRs2tryJr9jPta1bEpIMkZTVJYGIfOTn&index=3',
    spotifyUrl: 'https://open.spotify.com/episode/3YJuH0uENV3icwIAqBdD22?si=ba70576eec844db9',
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
