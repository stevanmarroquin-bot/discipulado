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
    titulo: '¿Cómo vivimos el evangelio?',
    tags: ['evangelio', 'nueva vida', 'efesios', 'identidad'],
    fecha: '2026-10-23',
    resumen: 'Es posible creer el evangelio y que tu vida no cambie. Todo lo que recibimos en Cristo ya fue dado; vivir el evangelio es aprender a verlo y afinar cada área de la vida a ese sonido.',
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=96nvJlv7NeE',
    spotifyUrl: 'https://open.spotify.com/episode/7cAJ7Czpv6c8mcm0Ukuccz',
    lectura: [
      {
        "titulo": "Creer no es el final. Es el comienzo del problema",
        "html": "<p>Muchos llegan al evangelio, lo entienden, lo creen, y entonces se quedan esperando que algo cambie.</p>\n<p>Pasan semanas. Meses. Y siguen enojándose igual. Siguen con las mismas ansiedades. Siguen sintiéndose solos o inferiores o culpables. Y la pregunta que nadie hace en voz alta pero todos piensan es: ¿funcionó?</p>\n<p>¿Es posible creer el evangelio y que tu vida no cambie?</p>\n<p>La respuesta es sí. Y Pablo sabía exactamente por qué.</p>"
      },
      {
        "titulo": "Todo en una sola oración",
        "html": "<p>Efesios 1:3-14 es, en el griego original, una sola oración. Una frase larga, densa, que contiene en vista panorámica todo lo que Dios hizo por nosotros en Cristo. Pablo no la escribió para que la analizáramos en partes, la escribió para que la sintiéramos completa.</p>\n<p>Y lo primero que salta es la repetición: <em>en Cristo, en él, por medio de Jesucristo, en el Amado.</em> Once veces en doce versículos. Todo lo que recibimos, sin excepción, lo recibimos porque estamos en Cristo. No por mérito propio. Por mérito sustituto.</p>\n<p>¿Qué es exactamente lo que recibimos?</p>\n<p><strong>Escogidos y predestinados:</strong> Dios tiene un plan para tu vida desde antes de que el mundo existiera. Muchos leen esto y piensan que Pablo está hablando de quién se salva y quién no. Pero esta carta fue escrita a personas que ya creían, a cristianos. Lo que Dios predeterminó no fue tu condenación o salvación, sino tu destino: ser santo, adoptado, heredero. Es como un avión cuyo destino y ruta ya están determinados, pero tú decides si abordas o no.</p>\n<p><strong>Redimidos y perdonados:</strong> <em>\"redención por su sangre, el perdón de pecados según las riquezas de su gracia.\"</em> No según tus méritos. Según sus riquezas.</p>\n<p><strong>Adoptados:</strong> nueva identidad. No solo perdonados como criminales indultados. Adoptados como hijos. Esa diferencia importa más de lo que parece.</p>\n<p><strong>Sellados con el Espíritu:</strong> <em>\"fuisteis sellados con el Espíritu Santo de la promesa, que es las arras de nuestra herencia.\"</em> Las arras en el mundo antiguo era el anticipo de pago que garantizaba el contrato. El Espíritu es la garantía de que lo que Dios prometió va a cumplirse. No una posibilidad. Una garantía.</p>\n<p>Todo esto ya fue dado. Pasado. Recibido. No es algo que estás trabajando para obtener.</p>\n<p>Entonces ¿por qué no lo estás experimentando?</p>"
      },
      {
        "titulo": "El problema de creer sin ver",
        "html": "<p>Pablo termina la lista de bendiciones y no dice: \"ya que tienen todo esto, ahora vivan diferente.\" Lo que hace es orar.</p>\n<blockquote>\"Para que el Dios de nuestro Señor Jesucristo, el Padre de gloria, os dé espíritu de sabiduría y de revelación en el conocimiento de él, alumbrando los ojos de vuestro entendimiento.\" <em>Efesios 1:17-18</em></blockquote>\n<p>¿Por qué un apóstol ora para que gente que ya cree pueda <em>ver</em> lo que ya tiene?</p>\n<p>Porque conocer la verdad y ver la verdad no es lo mismo.</p>\n<p>Cuando tenías 13 años y necesitabas lentes por primera vez, ya existía el mundo en alta definición. Los árboles ya tenían hojas individuales. Las caras ya tenían expresiones detalladas. Todo eso era real. Pero tú no lo podías ver. No porque no existiera, sino porque tus ojos no podían procesarlo.</p>\n<p>El evangelio funciona igual. Las bendiciones son reales. Están dadas. Pero si tus ojos no fueron alumbrados para verlas, no puedes experimentarlas. Y la fe que no ve lo que tiene no puede vivir de ello.</p>\n<p>Pablo ora para que vean tres cosas específicas: la esperanza de su llamamiento, las riquezas de la herencia, y la grandeza del poder de Dios hacia ellos. El mismo poder, dice, que resucitó a Cristo de los muertos y lo sentó sobre todo principado y autoridad. Ese poder, el poder de resurrección, está disponible para los que creen. No es metáfora. Es declaración doctrinal.</p>\n<p>Pero solo lo experimentan los que lo ven.</p>"
      },
      {
        "titulo": "La orquesta desafinada",
        "html": "<p>Lesslie Newbigin, misionero y teólogo inglés, dijo algo que reorienta todo: <em>\"La historia cristiana no es algo a lo que vemos, sino un conjunto de lentes por el cual vemos.\"</em></p>\n<p>Ahí está el problema. Muchos de nosotros recibimos el evangelio pero seguimos viendo la vida con los lentes viejos. El evangelio se convirtió en información adicional, no en la óptica desde la cual procesamos todo lo demás.</p>\n<p>Imagina una orquesta que suena desafinada. La solución intuitiva es que cada músico afine con el músico de al lado. Pero si todos afinan entre sí, el resultado sigue siendo caos, solo más coordinado. La única solución es que todos afinen con un solo sonido externo, el estándar de referencia.</p>\n<p><strong>El evangelio es ese sonido.</strong></p>\n<p>Perdonados, pero viviendo llenos de culpa y vergüenza.<br>Aceptados, pero sintiéndose aislados y rechazados.<br>Adoptados, pero con complejos de inferioridad o superioridad.<br>Con el Espíritu, pero sintiéndose completamente solos.<br>Con esperanza, pero con ansiedad constante.</p>\n<p>Cada una de esas tensiones es el mismo problema: una realidad posicional que no se ha convertido en lente. Creer que algo es verdad no es lo mismo que ver el mundo desde esa verdad.</p>\n<p>Vivir el evangelio no es esforzarse más. Es afinar cada área de tu vida al sonido del evangelio hasta que lo que ves coincida con lo que tienes.</p>\n<p>Y eso, a diferencia de los intentos de cambio por disciplina moral, produce algo que el esfuerzo nunca puede producir: la esperanza que Pablo describía. No optimismo. Certeza fundamentada en un Jesús resucitado que tiene toda autoridad y que, según Efesios 1:23, usa a su iglesia para llenar todo en todo.</p>\n<p>La pregunta no es si el evangelio tiene el poder para cambiar tu vida. La pregunta es si lo estás viendo.</p>"
      }
    ],
    versiculos: [
      "Efesios 1:3-23",
      "Romanos 1:17",
      "Gálatas 3:2",
      "Romanos 10:17",
      "Juan 14:26",
      "2 Corintios 3:6",
      "2 Corintios 5:17",
      "Colosenses 3:1-4"
    ],
    preguntas: [
      "Pablo lista bendiciones que ya fueron dadas, perdonados, adoptados, sellados con el Espíritu, pero ora para que los creyentes puedan <em>verlas</em>. ¿Cuál de esas realidades es la que más te cuesta ver como tuya, y por qué?",
      "La clase distingue entre identidad posicional y experiencia vivida, entre lo que eres en Cristo y cómo te sientes en la práctica. ¿En cuál de las áreas de la lista (culpa, rechazo, inferioridad, ansiedad, soledad) sigues viviendo con los lentes viejos?",
      "La analogía de la orquesta dice que la solución no es afinar con los de al lado sino con un solo estándar externo. ¿Con qué estás afinando tu vida actualmente, y qué cambiaría si el evangelio fuera el sonido de referencia para cada decisión?"
    ],
    declaraciones: [
      "Las bendiciones de la salvación no son ganadas progresivamente sino recibidas de una vez en Cristo, son realidades posicionales, no procesos morales.",
      "La elección y predestinación en Efesios 1 se refieren al plan de santificación y adopción, no a la determinación unilateral de quiénes son salvos; el libre albedrío humano no es anulado sino presupuesto.",
      "La justificación, adopción, redención, santificación y glorificación son lógicamente distinguibles pero ontológicamente inseparables en la unión con Cristo.",
      "El Espíritu Santo es arras, garantía jurídica y anticipo experiencial, de la herencia escatológica.",
      "La iluminación del Espíritu es condición epistémica necesaria para que la verdad revelada sea creída y experimentada, no solo conocida intelectualmente.",
      "La fe es el medio continuo de la vida cristiana, no solo el punto de entrada: el justo vive por fe desde la justificación hasta la glorificación (Romanos 1:17).",
      "El evangelio no produce una nueva lista de obligaciones sino una nueva identidad que reorienta todas las áreas de la vida.",
      "La vida cristiana es el proceso de alinear la experiencia vivida con las realidades posicionales ya recibidas en Cristo."
    ],
  },
  {
    slug: 'estudio-6',
    numero: 6,
    modulo: 'fundamento',
    titulo: '¿Cómo cambiamos con el evangelio?',
    tags: ['evangelio', 'santificación', 'cambio', 'comunidad'],
    fecha: '2026-10-23',
    resumen: 'Aprender a cambiar con el evangelio, no cumpliendo una ley moral sino mirando a Cristo: mirar adentro para diagnosticar el pecado, mirar arriba para orar como hijos y mirar afuera para vivir el evangelio en comunidad.',
    contenido: `
<p style="font-style:italic;color:var(--text-muted);border-left:3px solid var(--border);padding:10px 16px;margin-bottom:32px"><strong>Propósito:</strong> Entender cómo cambiamos con el evangelio, no adhiriéndonos a una ley moral sino mirando a Cristo, y aprender a mirar adentro, arriba y afuera cada vez que el pecado actúa en nuestra vida.</p>

<h2>El problema: ¿y qué hago el lunes?</h2>

<p>Hay una pregunta con la que vamos a comenzar. No la respondas todavía, guárdala para el final:</p>

<p><strong>¿Hacia dónde estás mirando cuando el veneno actúa?</strong></p>

<p>En esta serie hemos visto que el evangelio son buenas noticias, el anuncio de un evento histórico. Vimos que no es algo que hacemos, que no es religiosidad, ni moralismo, ni irreligiosidad. Vimos que se recibe como se recibe una noticia: creyéndola, por fe. Y en el estudio anterior vimos en Efesios 1 todo lo que el evangelio incluye, y cómo Pablo ora para que los ojos de nuestro entendimiento sean alumbrados, porque si entendemos podremos creer, y si creemos podremos vivir y experimentar esa verdad.</p>

<p>Muchos tratan el evangelio como el punto de entrada, y luego buscan "algo más" para crecer. Pablo hace lo opuesto: escribe a creyentes y les recuerda el evangelio, porque es el fundamento de la nueva vida.</p>

<blockquote>"Porque en el evangelio la justicia de Dios se revela por fe y para fe, como está escrito: Mas el justo por la fe vivirá." <em>Romanos 1:17</em></blockquote>

<p>Pero ahora que ya entiendo mejor el evangelio y ya sé todo lo que incluye, queda una pregunta muy práctica: <em>¿y entonces qué hago el lunes?</em> ¿Cómo cambio de verdad?</p>

<h2>Mirar para vivir</h2>

<blockquote>"Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." <em>Juan 3:14-15</em></blockquote>

<p>Jesús se refiere a lo que pasó con Israel en el desierto, cerca del monte Hor. El pueblo había sido mordido por serpientes ardientes y estaba muriendo, sin poder salvarse a sí mismo. Y Dios le dio a Moisés una solución:</p>

<blockquote>"Y Jehová dijo a Moisés: Hazte una serpiente ardiente, y ponla sobre una asta; y cualquiera que fuere mordido y mirare a ella, vivirá. Y Moisés hizo una serpiente de bronce, y la puso sobre una asta; y cuando alguna serpiente mordía a alguno, miraba a la serpiente de bronce, y vivía." <em>Números 21:8-9</em></blockquote>

<p>La solución no era esfuerzo, era mirar. Eso es el evangelio. Y si así fuimos salvados, así también cambiamos: de alguna manera tenemos que estar siempre viendo al evangelio para poder cambiar.</p>

<p>Recuerda la orquesta desafinada. No se arregla haciendo que cada músico afine con el de al lado, porque seguirán sonando mal. Todos tienen que afinar a un solo sonido. Ese sonido es el evangelio, y vivir el evangelio es afinar cada área de la vida a esa misma nota.</p>

<p>Por eso necesitamos cambiar de lentes. Como dijo Lesslie Newbigin: <em>"La historia cristiana no es algo a lo que vemos, sino un conjunto de lentes por el cual vemos."</em></p>

<p><strong>El evangelio no solo es el inicio de una nueva vida, es el centro permanente.</strong></p>

<h2>Cómo no cambiamos</h2>

<p>La mayoría de cristianos intenta cambiar adhiriéndose a una ley moral. Se proponen reglas, metas y disciplinas, y miden su vida cristiana por qué tan bien las cumplen.</p>

<p>El resultado es siempre uno de dos. O terminas en orgullo, <em>"lo logré"</em>, o terminas en desesperación, <em>"no puedo"</em>. Ninguno de los dos es el evangelio, y ninguno de los dos funciona a largo plazo.</p>

<p><strong>No cambiamos por cumplir una ley, cambiamos por mirar a Cristo.</strong></p>

<h2>Antes de la lista: una advertencia</h2>

<p>En este estudio te voy a dar una estructura mental para ayudarte a responder la pregunta <strong>¿cómo cambiamos con el evangelio?</strong> Pero el problema con las "aplicaciones prácticas del evangelio" es que fácilmente las convertimos en otra ley, otra obra, algo que hacemos, otra forma de ganarnos a Dios.</p>

<p>Por eso esta estructura tiene que empezar en el lugar correcto: no en lo que haces, sino en a qué estás viendo. ¿Qué estás creyendo? ¿En dónde tienes puesta tu fe?</p>

<p>Cada vez que el veneno actúa, cada vez que el pecado aparece, deberías preguntarte: <em>¿qué estoy viendo?</em></p>

<h2>Mira adentro</h2>

<p>El primer paso es aprender a diagnosticar, no solo a corregir. Y para diagnosticar hay tres pasos.</p>

<h3>1. Conoce la verdad</h3>

<p>Para saber qué está mal y qué está bien necesitas una medida que no seas tú mismo. Esa medida es la Palabra. No puedes diagnosticar tu corazón si no conoces lo que Dios dice.</p>

<h3>2. Identifica el pecado y nómbralo</h3>

<p>No lo suavices ni lo escondas detrás de palabras bonitas. Ponle nombre. Lo que no se nombra no se puede llevar a Dios.</p>

<h3>3. Identifica la motivación: el pecado detrás del pecado</h3>

<p>La mayoría trata el pecado como un problema de conducta. Pero en el evangelio no cambiamos por miedo al castigo, sino por amor. El problema del pecado es que estás amando algo más que a Dios, y eso es lo que produce el comportamiento.</p>

<p>Por eso, cuando fallas, en lugar de solo arrepentirte del comportamiento, hazte esta pregunta: <em>¿qué estaba buscando en ese momento que no estaba buscando en Dios?</em> Ese es el pecado detrás del pecado.</p>

<p>¿Por qué me enojé? ¿Por qué mentí? ¿Por qué miré pornografía? Tal vez el problema no es el enojo, sino tu obsesión por controlarlo todo. Tal vez el problema no es la mentira, sino tu miedo a perder algo. Tal vez el problema no es la pornografía, sino el vacío que intentas llenar con eso.</p>

<p>Cuando llegas a esa respuesta, tienes algo real que llevar a Dios. Ya no es <em>"perdóname por enojarme"</em>, sino <em>"Señor, estoy intentando controlar lo que solo tú puedes sostener."</em> Ya no es solo <em>"perdóname por mentir"</em>, sino <em>"mentí porque tengo miedo a perder esto."</em> Ya no es solo <em>"perdóname por lo que vi"</em>, sino <em>"vi pornografía porque me siento vacío."</em></p>

<p><strong>No basta con corregir la conducta. Tienes que encontrar qué estás amando más que a Dios.</strong></p>

<h2>Mira arriba</h2>

<p>En la parábola del hijo pródigo, el hijo mayor nunca se fue de la casa, pero tampoco entendió al Padre. Él no oraba, negociaba:</p>

<blockquote>"Mas él, respondiendo, dijo al padre: He aquí, tantos años te sirvo, no habiéndote desobedecido jamás, y nunca me has dado ni un cabrito para gozarme con mis amigos." <em>Lucas 15:29</em></blockquote>

<p>Sin el evangelio, la oración es negociación. El trabajador viene a negociar con Dios. El hijo viene porque es hijo.</p>

<p>Cuando mires arriba, mira a Dios como un Padre bueno, a Jesús como un Salvador y al Espíritu como un amigo. Confiesa, arrepiéntete, pero también entra confiadamente:</p>

<blockquote>"Acerquémonos, pues, confiadamente al trono de la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro." <em>Hebreos 4:16</em></blockquote>

<p>Entra con agradecimiento, porque él te salva, te acepta y te ayuda. Eso es lo que hace Pablo en Efesios 1. Antes de orar, recuerda toda la verdad del evangelio, y eso lo hace entrar en oración con agradecimiento y esperanza:</p>

<blockquote>"No ceso de dar gracias por vosotros, haciendo memoria de vosotros en mis oraciones, para que el Dios de nuestro Señor Jesucristo, el Padre de gloria, os dé espíritu de sabiduría y de revelación en el conocimiento de él, alumbrando los ojos de vuestro entendimiento, para que sepáis cuál es la esperanza a que él os ha llamado, y cuáles las riquezas de la gloria de su herencia en los santos, y cuál la supereminente grandeza de su poder para con nosotros los que creemos, según la operación del poder de su fuerza." <em>Efesios 1:16-19</em></blockquote>

<p><strong>No te acercas a Dios como trabajador que negocia, sino como hijo que confía.</strong></p>

<h2>Mira afuera</h2>

<p>Somos seres relacionales. Necesitamos vivir el evangelio en comunidad.</p>

<blockquote>"Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho." <em>Santiago 5:16</em></blockquote>

<p>Nota para qué confesamos unos a otros. No para recibir perdón, ese ya lo tenemos en Cristo, sino para sanar. La palabra griega es <em>iaomai</em>, curar, sanar, hacer completo, libre de errores.</p>

<h3>El evangelio es paradójico</h3>

<p>El evangelio nos dice que somos tan pecadores y perdidos que no teníamos esperanza, por eso vino Cristo. Pero al mismo tiempo nos dice que somos tan amados y valiosos que él dio su vida por nosotros.</p>

<blockquote>"Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús." <em>Romanos 8:1a</em></blockquote>

<p>Eso quiere decir que ya no hay condenación, y ya no nos importa aparentar ser perfectos. Y al mismo tiempo somos más amados de lo que podríamos imaginar, así que no necesitamos aprobación ni identidad de nadie más que de Dios.</p>

<h3>Necesitamos ser conocidos por otros</h3>

<p>Ser conocidos nos sana, nos hace completos, nos ayuda a estar libres de errores. Y el evangelio lo hace posible de tres maneras.</p>

<p><strong>Ya no te tienes que esconder.</strong> Puedes dejar que otros miren tus errores. Puedes ser vulnerable, porque no hay condenación para ti.</p>

<p><strong>Puedes recibir corrección.</strong> Sin colapsar y sin defenderte, porque tu identidad no está en lo que haces. La crítica ya no es una amenaza existencial, es información. El hijo mayor no podía recibir la corrección del padre porque su orgullo era su identidad. Cuando el evangelio es real, puedes escuchar <em>"estás equivocado"</em> sin que eso te destruya.</p>

<p><strong>Puedes extender gracia a otros.</strong> Puedes escuchar sin juzgar y ayudar sin resentimiento. El hijo mayor llevaba la cuenta de lo que merecía. Tú, en cambio, puedes ser el hermano mayor que otros necesitan.</p>

<p><strong>El evangelio te libera para ser conocido, corregido y para extender gracia.</strong></p>

<h2>El hábito que lo sostiene todo</h2>

<p>Todo lo anterior necesita un fundamento, y ese fundamento no es disciplina ni esfuerzo. Es exposición deliberada y repetida al evangelio mismo.</p>

<p>Como Israel, que tenía que mirar activamente a la serpiente. No una vez, sino cada vez que el veneno actuaba.</p>

<p>Tienes que predicarte el evangelio a ti mismo. No pedirle a Dios que te ayude a ser mejor, sino recordarte activamente, todos los días, lo que ya es verdad: lo que Cristo hizo, quién eres en él, que no hay condenación, que estás vestido con su justicia y no con tus hojas de higuera.</p>

<p><strong>Predícate el evangelio cada día, cada vez que el veneno actúe.</strong></p>

<h2>Antes de terminar: responde la pregunta</h2>

<p>El evangelio no solo es el inicio de una nueva vida, es el centro permanente. No vives alrededor de ti, sino alrededor de lo que Jesús hizo por ti. ¿Cuál es tu centro de gravedad?</p>

<p>Israel no tenía un sistema de siete pasos para curarse de la mordida. Solo tenían que mirar. Por eso la pregunta de cada día no es <em>¿qué voy a hacer hoy para ser mejor cristiano?</em> La pregunta es la misma con la que comenzamos:</p>

<p><strong>¿Hacia dónde estás mirando cuando el veneno actúa?</strong></p>
    `,
    autor: 'Stevan Marroquin',
    youtubeUrl: 'https://www.youtube.com/watch?v=vqhilBs7TG8',
    spotifyUrl: 'https://open.spotify.com/episode/3YJuH0uENV3icwIAqBdD22',
    resumenClase: `
<p>Después de creer el evangelio, la pregunta práctica es cómo cambiamos. El evangelio responde que cambiamos de la misma manera en que fuimos salvados: mirando a Cristo. Como Israel en el desierto, la solución no es esfuerzo, es mirar.</p>

<p><strong>1. Mira adentro.</strong> Aprende a diagnosticar, no solo a corregir. Conoce la verdad por la Palabra, nombra el pecado y busca el pecado detrás del pecado: qué estabas buscando en ese momento que no estabas buscando en Dios. Eso es lo que llevas a él.</p>

<p><strong>2. Mira arriba.</strong> Sin el evangelio la oración es negociación, como el hijo mayor. Con el evangelio entras confiadamente al trono de la gracia, como hijo y no como trabajador, mirando a Dios como Padre bueno, a Jesús como Salvador y al Espíritu como amigo.</p>

<p><strong>3. Mira afuera.</strong> El evangelio se vive en comunidad. Porque no hay condenación y somos amados por Dios, podemos dejar de escondernos, recibir corrección sin colapsar y extender gracia a otros. Confesamos unos a otros no para ser perdonados, sino para ser sanados.</p>

<p>Todo esto se sostiene con un solo hábito: exposición deliberada y repetida al evangelio, predicándonos cada día lo que ya es verdad en Cristo.</p>
    `,
    guiaLider: `
<p>Estas preguntas son personales y pueden tocar áreas delicadas. Cuida que el grupo sea un lugar seguro, sin juicio, y no presiones a nadie a compartir más de lo que quiera.</p>

<h3>Pregunta 1</h3>
<p>La mayoría de cristianos intenta cambiar adhiriéndose a una ley moral, y el resultado es orgullo cuando lo logran o desesperación cuando no pueden. Ninguno de los dos es el evangelio.</p>
<p><em>Cuando fallas en algo que te habías propuesto, ¿tiendes más al orgullo o a la desesperación? ¿Qué te dice eso sobre dónde has puesto tu fe para cambiar?</em></p>

<h3>Pregunta 2</h3>
<p>El estudio dice que el problema del pecado es que estamos amando algo más que a Dios, y nos invita a preguntarnos qué estábamos buscando en ese momento que no estábamos buscando en Dios.</p>
<p><em>Piensa en un pecado recurrente en tu vida. Sin dar detalles que no quieras compartir, ¿qué crees que estás buscando realmente cuando caes en él? ¿Cómo cambiaría tu oración si llevaras eso a Dios en lugar de solo el comportamiento?</em></p>

<h3>Pregunta 3</h3>
<p>Santiago 5:16 nos llama a confesarnos unos a otros para ser sanados. El hijo mayor no podía recibir corrección porque su orgullo era su identidad. El evangelio nos libera para ser conocidos.</p>
<p><em>¿Hay alguien en tu vida que te conozca de verdad, incluyendo tus luchas? Si no lo hay, ¿qué te detiene: el miedo a ser rechazado, el orgullo o la falta de confianza? ¿Qué paso concreto podrías dar esta semana para dejar de esconderte?</em></p>
    `,
    devocional: `
<p>Esta semana vas a practicar mirar en lugar de esforzarte. Cada día tiene una sola tarea concreta.</p>

<h3>Día 1: Mira la serpiente</h3>
<p>Lee Números 21:4-9 y Juan 3:14-17. Escribe en una frase qué tenían que hacer los israelitas para vivir y qué tienes que hacer tú. Luego escribe en otra frase en qué estás confiando hoy para cambiar.</p>

<h3>Día 2: Nombra el pecado</h3>
<p>Pídele a Dios que te muestre un pecado que se repite en tu vida. Escríbelo con su nombre real, sin suavizarlo. Luego busca en la Palabra un texto que diga qué está bien y qué está mal en esa área.</p>

<h3>Día 3: El pecado detrás del pecado</h3>
<p>Toma el pecado que escribiste ayer y responde por escrito: <em>¿qué estaba buscando en ese momento que no estaba buscando en Dios?</em> Sigue preguntando "¿por qué?" hasta llegar a algo real. Luego escribe una oración a Dios con esa respuesta, como <em>"Señor, estoy intentando controlar lo que solo tú puedes sostener."</em></p>

<h3>Día 4: Hijo, no trabajador</h3>
<p>Lee Lucas 15:11-32 completo y presta atención al hijo mayor. Anota las frases que muestran que se relacionaba con su padre como trabajador. Luego lee Hebreos 4:14-16 y ora entrando confiadamente, comenzando por dar gracias por lo que Cristo ya hizo antes de pedir nada.</p>

<h3>Día 5: Recuerda antes de orar</h3>
<p>Lee Efesios 1:3-14 y luego 1:15-23. Haz lo que hizo Pablo: escribe primero cinco verdades del evangelio que ya son tuyas y, solo después, escribe tu oración. Nota cómo cambia tu manera de orar cuando empiezas recordando.</p>

<h3>Día 6: Mira afuera</h3>
<p>Lee Santiago 5:16 y Romanos 8:1. Piensa en una persona de confianza en tu grupo o en tu iglesia. Escríbele o búscala esta semana para contarle una lucha real y pedirle que ore por ti. Y pregúntale cómo puedes orar tú por ella.</p>

<h3>Día 7: Descansa y adora</h3>
<p>Hoy no hay tarea. Lee Romanos 8:31-39 lentamente, dos o tres veces. Deja que cada pregunta de Pablo te responda: si Dios es por ti, ¿quién contra ti? ¿Quién te acusará? ¿Quién te separará del amor de Cristo? Predícate esas verdades y simplemente descansa en ellas.</p>
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
