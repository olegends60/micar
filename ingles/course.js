// "Mi curso · Libro 1": 14 lecciones que siguen el orden de temas del curso Beginners del usuario.
// Las explicaciones, ejemplos y ejercicios son originales de esta app.

const COURSE = [
  {
    id: 'mc1', level: 'A1', num: 1, title: 'Profesiones, lugares y artículos (a, an, the)', focus: 'vocab',
    goal: 'Vas a aprender los nombres de profesiones y lugares de la ciudad, cuándo usar a, an y the, y cómo hacer el plural de los sustantivos.',
    why: 'Decir a qué te dedicas y dónde trabajas es de lo primero que te preguntan. Y los artículos aparecen en casi todas las frases.',
    intro: { en: "I'm an engineer and my wife is a nurse. She works at a hospital downtown.", es: 'Soy ingeniero y mi esposa es enfermera. Ella trabaja en un hospital del centro.' },
    vocab: [['an engineer', 'un ingeniero', 'an enyiníer'], ['a mechanic', 'un mecánico', 'a mekánik'], ['an electrician', 'un electricista', 'an electríshan'], ['a carpenter', 'un carpintero', 'a kárpenter'], ['a nurse', 'una enfermera', 'a ners'], ['a police officer', 'un policía', 'a polís ófiser'], ['an architect', 'un arquitecto', 'an árkitekt'], ['a dentist', 'un dentista', 'a déntist'], ['a bank', 'un banco', 'a bank'], ['a pharmacy', 'una farmacia', 'a fármasi'], ['an airport', 'un aeropuerto', 'an érport'], ['a bus station', 'una estación de autobuses', 'a bas stéishon']],
    explain: `<p><b>Tres verbos en 5 formas.</b> En tu curso verás tablas de verbos. Cada verbo tiene 5 formas que vas a usar todo el tiempo:</p>
<table class="tbl"><tr><th>Forma</th><th>Ejemplo</th><th>Para qué</th></tr>
<tr><td>Base</td><td>work</td><td>trabajar (sin conjugar)</td></tr>
<tr><td>Presente con he/she/it</td><td>works</td><td>él trabaja</td></tr>
<tr><td>Pasado</td><td>worked</td><td>trabajé / trabajó</td></tr>
<tr><td>Participio</td><td>worked</td><td>trabajado (I have worked)</td></tr>
<tr><td>-ing</td><td>working</td><td>trabajando</td></tr></table>
<p><b>Artículos:</b></p><ul><li><b>a</b> + sonido de consonante: <b>a</b> doctor, <b>a</b> uniform (suena "iú").</li><li><b>an</b> + sonido de vocal: <b>an</b> actor, <b>an</b> engineer, <b>an</b> hour (la h no suena).</li><li><b>the</b> = el/la/los/las, cuando hablas de algo específico: "I read <b>a</b> book. <b>The</b> book is good."</li></ul>
<p><b>Plurales:</b> + s (doctor → doctors) · termina en s, sh, ch, x, z u o → + es (bus → buses, potato → potatoes) · consonante + y → ies (city → cities) · irregulares: man → men, person → people, child → children.</p>
<p class="tip">⚠️ Para decir tu profesión el artículo es obligatorio: "I'm <b>a</b> nurse" (no "I'm nurse").</p>`,
    easy: `<p>En español dices "soy enfermera", sin "una". En inglés <b>siempre</b> pones a/an antes de la profesión: I'm <b>a</b> nurse.</p>
<p>¿A o an? Dilo en voz alta: si la palabra empieza con sonido de vocal (a, e, i, o, u), usa <b>an</b> para que no choquen: an engineer. Si no, <b>a</b>: a doctor.</p>`,
    memo: ['"An" va con vocales: An Actor, An Engineer, An Architect → las tres llevan "a" y "e" al inicio.', 'Imagina a cada profesión en su lugar de trabajo: a nurse → at a hospital, a pilot → at an airport.', 'Di la profesión de 5 personas de tu familia: "My dad is a mechanic..."'],
    examples: [["She's an architect and he's a carpenter.", 'Ella es arquitecta y él es carpintero.'], ['The pharmacy is next to the bank.', 'La farmacia está al lado del banco.'], ['There are two buses and three taxis.', 'Hay dos autobuses y tres taxis.']],
    listen: { text: "My brother is an electrician, and my sister works as a receptionist at a hotel.", q: '¿Dónde trabaja la hermana?', options: ['En un hotel', 'En un banco', 'En un aeropuerto'], a: 0, note: '"works as a receptionist" = trabaja como recepcionista.' },
    speak: ["I'm an engineer.", 'She works at a hospital.', 'The bank is closed.'],
    quiz: [
      { q: 'He is ___ engineer.', options: ['an', 'a', 'the a'], a: 0, why: 'Engineer empieza con sonido de vocal → an.' },
      { q: 'Plural de "city":', options: ['cities', 'citys', 'cityes'], a: 0, why: 'Consonante + y → ies.' },
      { q: '¿Cuál es correcto?', options: ["I'm a dentist.", "I'm dentist.", 'I dentist.'], a: 0, why: 'La profesión lleva a/an.' },
      { q: 'Plural de "box":', options: ['boxes', 'boxs', 'boxies'], a: 0, why: 'Termina en x → es.' },
      { q: 'Forma -ing de "run":', options: ['running', 'runing', 'runeing'], a: 0, why: 'Se duplica la n.' }
    ]
  },
  {
    id: 'mc2', level: 'A1', num: 2, title: 'Saludos, pronombres y el verbo to be', focus: 'grammar',
    goal: 'Vas a aprender a saludar y despedirte según la hora, los pronombres personales (I, you, he...) y el verbo to be para decir quién eres, cómo estás, tu edad y tu nacionalidad. También los posesivos my, your, his, her.',
    why: 'Con esto ya puedes tener tu primera conversación completa: saludar, presentarte y preguntar a otros.',
    intro: { en: "Good morning! I'm Laura, I'm from Guadalajara. Are you a new student?", es: '¡Buenos días! Soy Laura, soy de Guadalajara. ¿Eres un estudiante nuevo?' },
    vocab: [['Good morning', 'Buenos días', 'gud mórnin'], ['Good afternoon', 'Buenas tardes', 'gud afternún'], ['Good evening', 'Buenas noches (al llegar)', 'gud ívnin'], ['Good night', 'Buenas noches (al irte)', 'gud náit'], ['See you tomorrow', 'Nos vemos mañana', 'sí iu tumórou'], ['Take care', 'Cuídate', 'téik ker'], ['Have a nice day', 'Que tengas buen día', 'jav a náis déi'], ['Mexican', 'mexicano/a', 'méksikan'], ['American', 'estadounidense', 'amérikan']],
    explain: `<p><b>Saludos según la hora:</b> Good morning (hasta mediodía) · Good afternoon (12 a 6 pm) · Good evening (al llegar en la noche). <b>Good night</b> solo se usa para <b>despedirse</b> o antes de dormir.</p>
<p><b>Pronombres personales</b> (quién hace la acción):</p>
<table class="tbl"><tr><th>Singular</th><th>Plural</th></tr><tr><td>I (yo)</td><td>we (nosotros)</td></tr><tr><td>you (tú, usted)</td><td>you (ustedes)</td></tr><tr><td>he (él) · she (ella) · it (cosa, animal)</td><td>they (ellos/ellas)</td></tr></table>
<p><b>Verbo to be:</b> I <b>am</b> · he/she/it <b>is</b> · you/we/they <b>are</b>.</p>
<p>Se usa para: nombre (I'm Ana), nacionalidad (She's Mexican), profesión (He's a pilot), estado (We're tired) y <b>edad</b> (I'm 25).</p>
<p><b>Preguntas sí/no:</b> pon am/is/are al principio: <b>Are you</b> a student? — Yes, I am. / No, I'm not.</p>
<p><b>Posesivos:</b> my (mi) · your (tu) · his (su, de él) · her (su, de ella) · its (su, de una cosa) · our (nuestro) · their (su, de ellos).</p>
<p class="tip">⚠️ Respuesta corta afirmativa sin contracción: "Yes, I am" ✅ — "Yes, I'm" ❌.</p>`,
    easy: `<p>Imagina que "to be" es un camaleón: cambia de color según con quién está.</p>
<p>Con <b>I</b> se vuelve <b>am</b>. Con <b>una persona</b> (he, she) se vuelve <b>is</b>. Con <b>todos los demás</b> se vuelve <b>are</b>.</p>
<p>Para preguntar, solo lo pasas al frente: You are → <b>Are you</b>?</p>`,
    memo: ['"Good night" es para irse a dormir: night = noche de dormir. Al llegar es "Good evening".', 'Respuestas cortas: "Yes, I am / No, I\'m not" — repítelas como un ritmo: "yes-ai-am, nou-aim-not".', 'Preséntate en voz alta: nombre, ciudad, edad y profesión, todo con to be.'],
    examples: [["Hi, I'm Carlos. I'm 28 and I'm from Monterrey.", 'Hola, soy Carlos. Tengo 28 y soy de Monterrey.'], ['Is she your sister? — No, she isn\'t. She\'s my cousin.', '¿Es tu hermana? — No. Es mi prima.'], ['Their teacher is American.', 'Su maestro (de ellos) es estadounidense.']],
    listen: { text: "Good evening, everyone! This is Mark. He's my coworker, and he's from Canada.", q: '¿De dónde es Mark?', options: ['De Canadá', 'De Estados Unidos', 'De México'], a: 0, note: '"coworker" = compañero de trabajo.' },
    speak: ['Good morning, how are you?', "I'm thirty years old.", 'Are you a student?'],
    quiz: [
      { q: 'Te vas a dormir. Dices:', options: ['Good night', 'Good evening', 'Good afternoon'], a: 0, why: 'Good night es para despedirse en la noche.' },
      { q: 'My parents ___ from Puebla.', options: ['are', 'is', 'am'], a: 0, why: 'They (mis papás) → are.' },
      { q: '"Are you tired?" — respuesta correcta:', options: ['Yes, I am.', "Yes, I'm.", 'Yes, I are.'], a: 0, why: 'En respuesta corta afirmativa no se contrae.' },
      { q: 'Su perro (de ella):', options: ['her dog', 'his dog', 'she dog'], a: 0, why: 'La dueña es ella → her.' },
      { q: '¿Cómo dices "tengo 40 años"?', options: ["I'm 40 years old.", 'I have 40 years.', 'I have 40 years old.'], a: 0, why: 'La edad va con to be.' }
    ]
  },
  {
    id: 'mc3', level: 'A1', num: 3, title: 'Objetos, descripciones y preguntas con Wh-', focus: 'grammar',
    goal: 'Vas a aprender objetos de uso diario, adjetivos para describir personalidad y apariencia, el to be en negativo y las preguntas abiertas: who, what, where, how, "What\'s it like?" y "What does she look like?".',
    why: 'Las preguntas abiertas te permiten mantener una conversación, no solo responder sí o no.',
    intro: { en: "Where are my keys? They're not in my backpack! — Relax, they're on the table.", es: '¿Dónde están mis llaves? ¡No están en mi mochila! — Tranquilo, están en la mesa.' },
    vocab: [['keys', 'llaves', 'kíis'], ['wallet / purse', 'cartera / bolsa', 'uálet / pers'], ['backpack', 'mochila', 'bákpak'], ['glasses', 'lentes', 'glásis'], ['umbrella', 'paraguas', 'ambréla'], ['cellphone', 'celular', 'sélfoun'], ['friendly', 'amigable', 'fréndli'], ['shy', 'tímido', 'shái'], ['lazy', 'flojo', 'léisi'], ['tall / short', 'alto / bajo', 'tol / short'], ['skinny / chubby', 'delgado / gordito', 'skíni / chábi'], ['curly hair', 'cabello rizado', 'kérli jer']],
    explain: `<p><b>To be negativo</b> (dos formas de contraer): He is not → He<b>'s not</b> / He <b>isn't</b> · They are not → They<b>'re not</b> / They <b>aren't</b> · Con I solo hay una: I<b>'m not</b>.</p>
<p><b>Preguntas abiertas (Wh-):</b></p>
<ul><li><b>Who</b> = quién → Who is she? She's my boss.</li><li><b>What</b> = qué/cuál → What is this? It's a wallet.</li><li><b>Where</b> = dónde → Where are you <b>from</b>? (de dónde eres)</li><li><b>How</b> = cómo (estado) → How are you? I'm fine.</li><li><b>How old</b> = edad → How old is he? He's 12.</li></ul>
<p><b>¿Cómo es...? (dos preguntas distintas):</b></p>
<ul><li>Personalidad o características: <b>What is</b> she <b>like</b>? → She's friendly and funny.</li><li>Apariencia física: <b>What does</b> she <b>look like</b>? → She's tall and she <b>has</b> curly hair.</li></ul>
<p><b>Ubicación:</b> under (debajo) · behind (detrás) · next to (al lado) · in front of (enfrente).</p>
<p class="tip">⚠️ "like" en "What is he like?" NO significa "gustar". Es "¿cómo es?".</p>`,
    easy: `<p>Las preguntas sí/no empiezan con <b>Is/Are</b>. Las preguntas abiertas solo le agregan <b>una palabra al principio</b>:</p>
<p>Are you from Mexico? (sí/no) → <b>Where</b> are you from? (abierta)</p>
<p>Para describir a alguien: si quieres saber <b>cómo es por dentro</b> (carácter) → What's he like? Si quieres saber <b>cómo se ve</b> → What does he look like?</p>`,
    memo: ['Wh- = las 5 preguntas del reportero: Who, What, Where, When, Why (+ How).', '"Look like" = "se ve como" → look = mirar. Lo que ves = apariencia.', 'Describe a 3 personas famosas: personalidad (is) y apariencia (has).'],
    examples: [["What's your boss like? — He's strict but fair.", '¿Cómo es tu jefe? — Es estricto pero justo.'], ['What does your sister look like? — She\'s short and has long hair.', '¿Cómo es tu hermana? — Es bajita y tiene el cabello largo.'], ["My phone isn't in my purse.", 'Mi celular no está en mi bolsa.']],
    listen: { text: "Who's that guy next to the door? — Oh, that's Danny. He's super friendly, but kinda shy at first.", q: '¿Cómo es Danny?', options: ['Amigable pero tímido al principio', 'Enojón', 'Muy alto y serio'], a: 0, note: '"kinda shy at first" = como que tímido al principio.' },
    speak: ['Where are you from?', 'What does he look like?', "My keys aren't here."],
    quiz: [
      { q: 'Para preguntar la personalidad:', options: ['What is she like?', 'What does she look like?', 'How does she look?'], a: 0, why: 'What is ___ like? = carácter.' },
      { q: '¿Dónde eres? (de qué lugar):', options: ['Where are you from?', 'Where you from are?', 'Where is you from?'], a: 0, why: 'Where + are + you + from.' },
      { q: 'Negativo de "They are tired":', options: ["They aren't tired.", "They isn't tired.", 'They not tired.'], a: 0, why: 'are not = aren\'t.' },
      { q: '"Behind" significa:', options: ['Detrás', 'Debajo', 'Enfrente'], a: 0, why: 'behind = detrás.' },
      { q: '"She ___ long hair."', options: ['has', 'is', 'have'], a: 0, why: 'Con she, have → has.' }
    ]
  },
  {
    id: 'mc4', level: 'A1', num: 4, title: 'Ropa, colores, clima y posesivos (\'s)', focus: 'vocab',
    goal: 'Vas a aprender ropa, colores, el clima y las estaciones del año, y a decir de quién es algo con \'s y con solo el apóstrofe (s\').',
    why: 'Describir qué llevas puesto, comprar ropa y hablar del clima es conversación diaria. Y el posesivo con \'s lo usarás siempre.',
    intro: { en: "It's freezing today! Can I borrow your brother's jacket? Mine is at home.", es: '¡Hace un frío tremendo hoy! ¿Me prestas la chamarra de tu hermano? La mía está en casa.' },
    vocab: [['jacket', 'chamarra', 'yáket'], ['sweater', 'suéter', 'suérer'], ['jeans', 'pantalón de mezclilla', 'yíins'], ['sneakers', 'tenis', 'snikers'], ['dress / skirt', 'vestido / falda', 'dres / skert'], ['scarf / gloves', 'bufanda / guantes', 'skarf / glavs'], ['navy blue', 'azul marino', 'néivi blu'], ['gray', 'gris', 'gréi'], ['sunny / cloudy', 'soleado / nublado', 'sáni / kláudi'], ['rainy / windy', 'lluvioso / con viento', 'réini / uíndi'], ['spring / summer', 'primavera / verano', 'spring / sámer'], ['fall / winter', 'otoño / invierno', 'fol / uínter']],
    explain: `<p><b>El clima:</b> "What's the weather like?" (¿cómo está el clima?) → It's <b>sunny</b>, <b>cloudy</b>, <b>rainy</b>, <b>windy</b>, <b>hot</b>, <b>cold</b>, <b>warm</b> (templado), <b>cool</b> (fresco), <b>humid</b> (húmedo), <b>foggy</b> (con neblina).</p>
<p>Fíjate: muchos adjetivos de clima son el sustantivo + <b>-y</b>: sun → sunny, rain → rainy, cloud → cloudy, wind → windy.</p>
<p><b>Estaciones:</b> spring, summer, <b>fall</b> (en EE. UU.; en Inglaterra "autumn"), winter.</p>
<p><b>Posesivo 's</b> (en vez de "de"): el carro de Ana → <b>Ana's</b> car · los juguetes de los niños → the <b>children's</b> toys.</p>
<p><b>Solo apóstrofe (s')</b> cuando el plural ya termina en s: la casa de mis papás → my <b>parents'</b> house. Con nombres que terminan en s se acepta Thomas' o Thomas's.</p>
<p><b>Colores:</b> el color va antes de la prenda: a <b>red</b> dress (un vestido rojo).</p>`,
    easy: `<p>En español decimos "el libro <b>de</b> Juan". En inglés se dice al revés: <b>Juan's</b> book. Primero el dueño, luego ' + s, luego la cosa.</p>
<p>Si el dueño ya es plural con s (my parents), solo le pones el apóstrofe: my parents' car.</p>`,
    memo: ['El \'s es un "ganchito" que pega la cosa a su dueño.', 'Clima = cosa + y: sun-ny, rain-y, cloud-y, wind-y. ¡Una regla, cuatro palabras!', 'Cada mañana describe tu ropa y el clima: "Today I\'m wearing a gray sweater. It\'s cloudy."'],
    examples: [["I'm wearing my dad's old jacket.", 'Traigo puesta la chamarra vieja de mi papá.'], ["What's the weather like in Chicago? — It's cold and windy.", '¿Cómo está el clima en Chicago? — Frío y con viento.'], ['My parents\' house is in Oaxaca.', 'La casa de mis papás está en Oaxaca.']],
    listen: { text: "Bring a raincoat, it's gonna be rainy all week. And grab your sister's umbrella too.", q: '¿Cómo va a estar el clima?', options: ['Lluvioso toda la semana', 'Soleado', 'Con nieve'], a: 0, note: '"grab" = agarra. "raincoat" = impermeable.' },
    speak: ["What's the weather like today?", "It's sunny and hot.", "This is my sister's dress."],
    quiz: [
      { q: 'El celular de Pedro:', options: ["Pedro's phone", "Phone's Pedro", 'Pedro phone of'], a: 0, why: 'Dueño + \'s + cosa.' },
      { q: 'La casa de mis papás:', options: ["my parents' house", "my parent's houses", "my parents's house"], a: 0, why: 'Plural con s → solo apóstrofe.' },
      { q: 'En EE. UU. "otoño" se dice:', options: ['fall', 'winter', 'spring'], a: 0, why: 'fall (las hojas caen).' },
      { q: 'Hay mucho viento:', options: ["It's windy.", "It's wind.", 'It has wind.'], a: 0, why: 'wind + y = windy.' },
      { q: 'Un suéter gris:', options: ['a gray sweater', 'a sweater gray', 'a grays sweater'], a: 0, why: 'El color va antes.' }
    ]
  },
  {
    id: 'mc5', level: 'A1', num: 5, title: 'Transporte, familia y presente simple', focus: 'grammar',
    goal: 'Vas a aprender medios de transporte, toda la familia (incluidos suegros y cuñados) y el presente simple: cómo cambia el verbo con he/she/it y cómo negar con don\'t / doesn\'t.',
    why: 'El presente simple es el tiempo para tu rutina, tus hábitos y tu familia: lo vas a usar en cada conversación.',
    intro: { en: "My mother-in-law takes the bus every day, but my brother-in-law drives to work.", es: 'Mi suegra toma el autobús todos los días, pero mi cuñado maneja al trabajo.' },
    vocab: [['take the bus / subway', 'tomar el autobús / metro', 'téik de bas / sábuei'], ['ride a bike', 'andar en bici', 'ráid a báik'], ['drive', 'manejar', 'dráiv'], ['walk', 'caminar', 'uók'], ['siblings', 'hermanos (hombres y mujeres)', 'síblings'], ['nephew / niece', 'sobrino / sobrina', 'néfiu / nís'], ['cousin', 'primo / prima', 'kásin'], ['mother-in-law', 'suegra', 'máder in lo'], ['brother-in-law', 'cuñado', 'bráder in lo'], ['great-grandfather', 'bisabuelo', 'gréit grénfader'], ['early / late', 'temprano / tarde', 'érli / léit'], ['in the evening', 'en la noche (temprano)', 'in di ívnin']],
    explain: `<p><b>Estructura:</b> sujeto + verbo + complemento → I <b>work</b> every day.</p>
<p>Con I, you, we, they el verbo <b>no cambia</b>. Con <b>he, she, it</b> sí cambia:</p>
<table class="tbl"><tr><th>Si el verbo termina en…</th><th>Agrega</th><th>Ejemplo</th></tr>
<tr><td>x, z, o, ss, sh, ch</td><td>-es</td><td>fix → fix<b>es</b>, go → go<b>es</b>, watch → watch<b>es</b></td></tr>
<tr><td>consonante + y</td><td>-ies</td><td>study → stud<b>ies</b>, cry → cr<b>ies</b></td></tr>
<tr><td>vocal + y</td><td>-s</td><td>buy → buy<b>s</b>, play → play<b>s</b></td></tr>
<tr><td>have</td><td>cambia</td><td>have → <b>has</b></td></tr>
<tr><td>todo lo demás</td><td>-s</td><td>work → work<b>s</b></td></tr></table>
<p><b>Negativo:</b> I/you/we/they <b>don't</b> + verbo · he/she/it <b>doesn't</b> + verbo (¡sin s!): She <b>doesn't work</b> on Sundays.</p>
<p><b>Transporte:</b> take the bus/train/subway/a taxi · ride a bike/motorcycle · drive · walk. "I go to work <b>by</b> bus" o "<b>on foot</b>" (a pie).</p>
<p class="tip">💡 "In-laws" = la familia política: mother-in-law (suegra), sister-in-law (cuñada)...</p>`,
    easy: `<p>Regla de oro: cuando hablas de <b>una sola persona que no eres tú ni la persona con la que hablas</b> (él, ella), el verbo lleva <b>s</b>.</p>
<p>I drive → My dad drive<b>s</b>.</p>
<p>Y cuando niegas con <b>doesn't</b>, la s se va al "doesn't" y el verbo se queda sin ella: My dad <b>doesn't</b> drive.</p>`,
    memo: ['La "s" solo puede estar en un lugar: o en el verbo (works) o en doesn\'t. Nunca en los dos.', '"-in-law" = "por ley": la familia que llega por la ley del matrimonio.', 'Di cómo llega cada persona de tu familia al trabajo o escuela: "My sister takes the subway."'],
    examples: [['My cousin studies in Texas.', 'Mi prima estudia en Texas.'], ["My father-in-law doesn't drive.", 'Mi suegro no maneja.'], ['We take the train early in the morning.', 'Tomamos el tren temprano en la mañana.']],
    listen: { text: "My nephew rides his bike to school, but my niece takes the bus 'cause she lives farther away.", q: '¿Por qué la sobrina toma el autobús?', options: ['Porque vive más lejos', 'Porque no tiene bici', 'Porque llueve'], a: 0, note: '"\'cause" = because. "farther away" = más lejos.' },
    speak: ['My sister takes the bus.', "He doesn't drive.", 'I walk to work every day.'],
    quiz: [
      { q: 'She ___ (study) English.', options: ['studies', 'studys', 'studyes'], a: 0, why: 'Consonante + y → ies.' },
      { q: 'He ___ (watch) TV at night.', options: ['watches', 'watchs', 'watch'], a: 0, why: 'Termina en ch → es.' },
      { q: 'Negativo: "My mom works on Sunday."', options: ["My mom doesn't work on Sunday.", "My mom doesn't works on Sunday.", "My mom don't work on Sunday."], a: 0, why: 'doesn\'t + verbo sin s.' },
      { q: '"Sister-in-law" es:', options: ['Cuñada', 'Suegra', 'Hermanastra'], a: 0, why: 'La hermana de tu pareja o esposa de tu hermano.' },
      { q: 'My father ___ two cars.', options: ['has', 'haves', 'have'], a: 0, why: 'have con he → has.' }
    ]
  },
  {
    id: 'mc6', level: 'A1', num: 6, title: 'Comida, trabajos y contables / incontables', focus: 'vocab',
    goal: 'Vas a aprender comida y grupos alimenticios, más trabajos, preguntas abiertas en presente simple, el orden de los adjetivos, los sustantivos contables e incontables, some / any y medidas como "a cup of coffee".',
    why: 'Para comprar comida, pedir en un restaurante o hablar de tu dieta necesitas saber qué se cuenta y qué no.',
    intro: { en: "What do you usually have for breakfast? — Some eggs, a slice of bread and a cup of coffee.", es: '¿Qué desayunas normalmente? — Unos huevos, una rebanada de pan y una taza de café.' },
    vocab: [['vegetables', 'verduras', 'véchtabols'], ['dairy', 'lácteos', 'déri'], ['grains', 'cereales / granos', 'gréins'], ['beef / pork', 'carne de res / cerdo', 'bíif / pork'], ['beans', 'frijoles', 'bíins'], ['a cup of coffee', 'una taza de café', 'a kap ov kófi'], ['a carton of milk', 'un cartón de leche', 'a kárton ov milk'], ['a slice of bread', 'una rebanada de pan', 'a sláis ov bred'], ['cashier', 'cajero/a', 'kashíer'], ['server', 'mesero/a', 'sérver'], ['accountant', 'contador/a', 'akáuntant'], ['salesperson', 'vendedor/a', 'séilsperson']],
    explain: `<p><b>Preguntas abiertas con presente simple:</b> palabra Wh- + do/does + sujeto + verbo:</p>
<ul><li><b>What do</b> you eat for lunch?</li><li><b>Where does</b> she work? She works at a bank.</li></ul>
<p class="tip">💡 "What do you do?" = ¿a qué te dedicas? · "What are you doing?" = ¿qué estás haciendo ahorita?</p>
<p><b>Adjetivos:</b> van antes del sustantivo (a <b>cheap</b> restaurant) o después de to be (The restaurant <b>is cheap</b>). Nunca llevan plural.</p>
<p><b>Contables</b> (se cuentan: an apple, two eggs) → a/an, many, few. <b>Incontables</b> (no se cuentan: rice, milk, water, sugar, money) → no llevan a/an ni plural; usa much, a little.</p>
<p>Para "contar" un incontable usa medidas: <b>a cup of</b> coffee · <b>a glass of</b> water · <b>a bottle of</b> oil · <b>a carton of</b> milk · <b>a slice of</b> pizza · <b>a pound of</b> beef · <b>a gallon of</b> milk.</p>
<p><b>Some / any:</b> <b>some</b> en afirmaciones (I have some rice) y al ofrecer (Would you like some coffee?). <b>any</b> en negativas y preguntas (We don't have any milk. Do you have any eggs?).</p>`,
    easy: `<p>Pregunta clave: ¿lo puedo contar con los dedos? Manzanas sí (1, 2, 3). Arroz no (no cuentas granitos).</p>
<p>Si no se cuenta, ponle un "envase": <b>a bag of</b> rice, <b>a cup of</b> coffee. Así ya lo puedes contar: two cups of coffee.</p>`,
    memo: ['Los líquidos y los polvos casi nunca se cuentan: water, milk, sugar, flour, rice.', 'Medidas = envases: cup (taza), glass (vaso), bottle (botella), carton (cartón).', 'Escribe tu lista del súper en inglés con medidas: "a gallon of milk, a pound of beef..."'],
    examples: [["We don't have any sugar. Can you buy some?", 'No tenemos azúcar. ¿Puedes comprar?'], ['Where does your brother work? — He\'s a cashier at Walmart.', '¿Dónde trabaja tu hermano? — Es cajero en Walmart.'], ['I drink two glasses of water every morning.', 'Tomo dos vasos de agua cada mañana.']],
    listen: { text: "Can I get a pound of ground beef and two pounds of chicken? Oh, and do you have any fresh tortillas?", q: '¿Qué pregunta al final?', options: ['Si tienen tortillas frescas', 'Cuánto cuesta el pollo', 'Si aceptan tarjeta'], a: 0, note: '"ground beef" = carne molida. "a pound" = una libra (casi medio kilo).' },
    speak: ['I would like a cup of coffee.', "We don't have any milk.", 'What do you eat for breakfast?'],
    quiz: [
      { q: '¿Cuál es incontable?', options: ['rice', 'apple', 'egg'], a: 0, why: 'El arroz no se cuenta por unidades.' },
      { q: 'Do you have ___ eggs?', options: ['any', 'some of', 'a'], a: 0, why: 'Pregunta → any.' },
      { q: 'Una taza de té:', options: ['a cup of tea', 'a tea', 'a cup tea'], a: 0, why: 'Medida + of + incontable.' },
      { q: '"What do you do?" pregunta:', options: ['Tu profesión', 'Qué haces ahorita', 'Qué hiciste ayer'], a: 0, why: 'Pregunta fija para la profesión.' },
      { q: 'Where ___ your sister work?', options: ['does', 'do', 'is'], a: 0, why: 'Your sister = she → does.' }
    ]
  },
  {
    id: 'mc7', level: 'A1', num: 7, title: 'Deportes, fechas especiales, preguntas y can', focus: 'speaking',
    goal: 'Vas a aprender deportes y habilidades, los meses y días festivos de EE. UU., preguntas con what time, when, where, who... with y how often, y a hablar de lo que puedes hacer con can / can\'t y be able to.',
    why: 'Hablar de tus pasatiempos, habilidades y celebraciones es perfecto para hacer amigos.',
    intro: { en: "Can you play soccer? — Yeah! I play every Saturday with my cousins. What about you?", es: '¿Sabes jugar fútbol? — ¡Sí! Juego cada sábado con mis primos. ¿Y tú?' },
    vocab: [['soccer', 'fútbol', 'sóker'], ['football', 'fútbol americano', 'fútbol'], ['bowling', 'boliche', 'bóulin'], ['play chess', 'jugar ajedrez', 'pléi ches'], ['play the guitar', 'tocar la guitarra', 'pléi de guitár'], ['swim / skate', 'nadar / patinar', 'suím / skéit'], ['Thanksgiving', 'Día de Acción de Gracias', 'zanksguívin'], ['Independence Day', 'Día de la Independencia (4 de julio)', 'indipéndens déi'], ['fireworks', 'fuegos artificiales', 'fáiaruerks'], ['parade', 'desfile', 'paréid'], ['give gifts', 'dar regalos', 'guív guifts'], ['be able to', 'ser capaz de', 'bi éibol tu']],
    explain: `<p><b>Preguntas abiertas en presente simple:</b></p>
<ul><li><b>What time</b> do you play? → At 6 pm.</li><li><b>When</b> is Thanksgiving? → In November (fecha).</li><li><b>Where</b> do you swim? → At the gym.</li><li><b>Who</b> do you play <b>with</b>? → With my friends.</li><li><b>How often</b> do you train? → Twice a week.</li><li><b>What</b> + sustantivo: <b>What sports</b> do you like?</li></ul>
<p><b>Deportes:</b> se usa <b>play</b> con deportes de pelota (play soccer, play tennis), <b>go</b> con actividades en -ing (go swimming, go bowling) y <b>do</b> con artes marciales o ejercicios (do yoga, do karate).</p>
<p><b>Can / can't</b> (poder, saber): can + verbo base, igual para todos: She <b>can swim</b>. I <b>can't</b> skate. Pregunta: <b>Can you</b> play chess? — Yes, I can. / No, I can't.</p>
<p><b>Be able to</b> = ser capaz de. Significa casi lo mismo que can, pero es más formal y sí cambia con to be: I<b>'m able to</b> run 10 km. He<b>'s not able to</b> come.</p>
<p><b>Festividades de EE. UU.:</b> Independence Day (July 4th), Halloween (October 31st), Thanksgiving (4.º jueves de noviembre), Christmas (December 25th).</p>`,
    easy: `<p>Para preguntar cosas de una actividad, piensa qué quieres saber:</p>
<p>¿La hora? → What time. ¿El día o la fecha? → When. ¿El lugar? → Where. ¿Con quién? → Who... with. ¿Qué tan seguido? → How often.</p>
<p>Después de esa palabra, la pregunta es igual siempre: <b>do you</b> + verbo.</p>`,
    memo: ['PLAY con pelota, GO con -ing, DO con disciplina (yoga, karate).', '"Who... with" lleva el "with" al final, como si la pregunta se llevara su compañía.', 'Haz una lista: 3 cosas que can y 3 que can\'t hacer. Dilas en voz alta.'],
    examples: [['How often do you go swimming? — Three times a week.', '¿Qué tan seguido vas a nadar? — Tres veces por semana.'], ['We watch the fireworks on the Fourth of July.', 'Vemos los fuegos artificiales el 4 de julio.'], ["I'm not able to work tomorrow.", 'No voy a poder trabajar mañana.']],
    listen: { text: "On Thanksgiving we usually eat turkey with the whole family, and then we watch football all afternoon.", q: '¿Qué hacen en la tarde?', options: ['Ven fútbol americano', 'Van a un desfile', 'Juegan boliche'], a: 0, note: '"the whole family" = toda la familia. Football = fútbol americano.' },
    speak: ['Can you play the guitar?', 'Who do you play soccer with?', 'How often do you exercise?'],
    quiz: [
      { q: 'Para preguntar con quién:', options: ['Who do you go with?', 'With who you go?', 'Who you go?'], a: 0, why: 'Who + do you + verbo + with.' },
      { q: '___ do you play tennis? — At 7 o\'clock.', options: ['What time', 'Where', 'How often'], a: 0, why: 'La respuesta es una hora.' },
      { q: 'I ___ swimming every Sunday.', options: ['go', 'play', 'do'], a: 0, why: 'Actividades en -ing → go.' },
      { q: 'She ___ speak French.', options: ['can', 'cans', 'can to'], a: 0, why: 'can + verbo base.' },
      { q: 'Thanksgiving es en:', options: ['November', 'July', 'October'], a: 0, why: 'Cuarto jueves de noviembre.' }
    ]
  },
  {
    id: 'mc8', level: 'A1', num: 8, title: 'El cuerpo, la salud, órdenes y direcciones', focus: 'vocab',
    goal: 'Vas a aprender las partes del cuerpo, remedios, a decir cómo te sientes (have + enfermedad, feel + adjetivo), los imperativos para dar órdenes e instrucciones, y a dar direcciones en un mapa.',
    why: 'Explicar qué te duele, entender instrucciones y pedir indicaciones son situaciones importantes en la vida real.',
    intro: { en: "I feel terrible. I have a sore throat and a headache. — Take some honey and lemon, and get some rest.", es: 'Me siento fatal. Me duele la garganta y la cabeza. — Toma miel con limón y descansa.' },
    vocab: [['head / neck', 'cabeza / cuello', 'jed / nek'], ['shoulder / elbow', 'hombro / codo', 'shóulder / élbou'], ['knee / ankle', 'rodilla / tobillo', 'níi / ánkol'], ['wrist', 'muñeca', 'rist'], ['tooth / teeth', 'diente / dientes', 'tuz / tiz'], ['cough syrup', 'jarabe para la tos', 'kaf sírap'], ['eye drops', 'gotas para los ojos', 'ái drops'], ['a cold', 'un resfriado', 'a kould'], ['dizzy', 'mareado', 'dísi'], ['across from', 'enfrente de (cruzando)', 'akrós from'], ['turn left on...', 'da vuelta a la izquierda en...', 'tern left on'], ['walk down / up', 'camina por (la calle)', 'uók dáun / ap']],
    explain: `<p><b>Have + enfermedad:</b> I <b>have</b> a cold / a fever / a headache / a stomachache / a sore throat.</p>
<p><b>Feel + adjetivo:</b> I <b>feel</b> sick / tired / dizzy / better. "How do you feel?" (¿cómo te sientes?)</p>
<p><b>Imperativo</b> (órdenes, instrucciones, consejos): solo el verbo base, sin sujeto: <b>Take</b> this medicine. <b>Drink</b> water. <b>Open</b> your mouth. Negativo con <b>don't</b>: <b>Don't</b> eat spicy food. Para sonar amable, agrega <b>please</b>.</p>
<p><b>Preposiciones en un mapa:</b></p>
<ul><li><b>on</b> + calle: The bank is <b>on</b> Main Street.</li><li><b>next to</b> (al lado) · <b>between</b> (entre) · <b>across from / opposite</b> (enfrente, cruzando la calle) · <b>on the corner of</b> (en la esquina de).</li></ul>
<p><b>Dar direcciones:</b> <b>Walk up/down</b> Pine Street (camina por) · <b>Turn left/right on</b> 5th Avenue · <b>Go straight</b> · It's <b>on your left/right</b>.</p>`,
    easy: `<p>Dos fórmulas para el doctor: si es una <b>enfermedad</b> (algo que "tienes") usa <b>have</b>: I have a cold. Si es un <b>sentimiento</b> usa <b>feel</b>: I feel sick.</p>
<p>Para dar órdenes es lo más fácil del inglés: solo dices el verbo. "Sit." "Eat." "Go." ¡Listo!</p>`,
    memo: ['Imperativo = como darle órdenes a un perro: "Sit!", "Come!". Solo el verbo.', 'Have = lo que "tienes" (a cold). Feel = lo que "sientes" (sick).', 'Toca cada parte de tu cuerpo mientras dices su nombre en inglés, de la cabeza a los pies.'],
    examples: [['Take two pills and drink a lot of water.', 'Toma dos pastillas y bebe mucha agua.'], ["Don't touch your eyes.", 'No te toques los ojos.'], ['The pharmacy is across from the park, on the corner of Oak and 3rd.', 'La farmacia está enfrente del parque, en la esquina de Oak y la 3.']],
    listen: { text: "Walk down Elm Street, turn right on Lincoln, and the clinic's gonna be on your left, next to the bakery.", q: '¿Junto a qué está la clínica?', options: ['La panadería', 'El banco', 'El parque'], a: 0, note: '"bakery" = panadería. "on your left" = a tu izquierda.' },
    speak: ['I have a headache.', 'I feel dizzy.', 'Turn left on Main Street.'],
    quiz: [
      { q: 'Me siento cansado:', options: ['I feel tired.', 'I have tired.', 'I am feel tired.'], a: 0, why: 'feel + adjetivo.' },
      { q: 'Tengo un resfriado:', options: ['I have a cold.', 'I feel a cold.', 'I am cold.'], a: 0, why: 'have + enfermedad. "I am cold" = tengo frío.' },
      { q: 'Orden negativa correcta:', options: ["Don't eat that.", 'No eat that.', 'Not eat that.'], a: 0, why: 'Don\'t + verbo.' },
      { q: 'The bank is ___ Main Street.', options: ['on', 'in', 'at'], a: 0, why: 'Calles → on.' },
      { q: '"Across from" significa:', options: ['Enfrente (cruzando la calle)', 'Detrás', 'Lejos de'], a: 0, why: 'Del otro lado de la calle.' }
    ]
  },
  {
    id: 'mc9', level: 'A2', num: 9, title: 'La escuela, el fin de semana y el pasado simple', focus: 'grammar',
    goal: 'Vas a aprender actividades del fin de semana, lugares y materias de la escuela, el pasado simple con verbos regulares (y sus reglas para escribirlos), los irregulares más usados y las palabras para hablar del pasado (yesterday, last, ago).',
    why: 'Contar lo que hiciste es básico en cualquier conversación: "What did you do last weekend?".',
    intro: { en: "What did you do last weekend? — I cleaned the house, did the laundry and visited my grandma.", es: '¿Qué hiciste el fin de semana pasado? — Limpié la casa, lavé la ropa y visité a mi abuela.' },
    vocab: [['do the laundry', 'lavar la ropa', 'du de lóndri'], ['go grocery shopping', 'ir al súper', 'góu gróuseri shópin'], ['visit relatives', 'visitar familiares', 'vísit rélativs'], ['elementary school', 'primaria', 'eleméntari skul'], ['middle school', 'secundaria', 'mídol skul'], ['high school', 'preparatoria', 'jái skul'], ['college', 'universidad (carrera)', 'kólech'], ['library', 'biblioteca', 'láibreri'], ['science / history', 'ciencias / historia', 'sáiens / jístori'], ['yesterday', 'ayer', 'iésterdei'], ['last week', 'la semana pasada', 'last uík'], ['two days ago', 'hace dos días', 'tu déis agóu']],
    explain: `<p><b>Pasado simple</b> = acciones terminadas. Es igual para todas las personas (I, he, they...).</p>
<p><b>Reglas de los regulares (-ed):</b></p>
<table class="tbl"><tr><th>Caso</th><th>Ejemplo</th></tr>
<tr><td>normal: + ed</td><td>work → work<b>ed</b></td></tr><tr><td>termina en e: + d</td><td>dance → danc<b>ed</b></td></tr>
<tr><td>consonante + y → ied</td><td>study → stud<b>ied</b>, cry → cr<b>ied</b></td></tr><tr><td>vocal + y: + ed</td><td>play → play<b>ed</b></td></tr>
<tr><td>1 sílaba, consonante-vocal-consonante: se duplica</td><td>stop → sto<b>pped</b>, plan → pla<b>nned</b></td></tr></table>
<p><b>Irregulares</b> (se memorizan). Agruparlos ayuda:</p>
<ul><li>Iguales en las 3 formas: put-put-put, cut-cut-cut, cost-cost-cost.</li><li>Pasado = participio: buy-<b>bought</b>, think-<b>thought</b>, have-<b>had</b>, make-<b>made</b>, sleep-<b>slept</b>.</li><li>Cambian todo: go-<b>went</b>-gone, see-<b>saw</b>-seen, eat-<b>ate</b>-eaten, do-<b>did</b>-done.</li></ul>
<p><b>Negativo:</b> <b>didn't</b> + verbo base: I <b>didn't go</b>. (no "didn't went")</p>
<p><b>Palabras de pasado:</b> yesterday · last night/week/year · two days <b>ago</b> (hace dos días) · in 2020.</p>
<p class="tip">💡 En EE. UU. "college" es la universidad donde estudias tu carrera; "university" suele ser una institución grande con posgrados.</p>`,
    easy: `<p>Buena noticia: en pasado <b>todos usan la misma forma</b>. I worked, she worked, they worked. ¡No hay que conjugar!</p>
<p>La mayoría solo lleva <b>-ed</b>. Los rebeldes (went, saw, ate) son pocos y son los más comunes: apréndete primero 10.</p>
<p>"Ago" va <b>después</b> del tiempo: two days <b>ago</b> = hace dos días.</p>`,
    memo: ['"Ago" es como "atrás": two days ago = dos días atrás.', 'Agrupa irregulares que riman: bought, thought, brought, caught, fought (todos terminan en "-ought").', 'Antes de dormir di 3 cosas que hiciste hoy en pasado.'],
    examples: [['I studied history in high school.', 'Estudié historia en la prepa.'], ["We didn't go grocery shopping yesterday.", 'No fuimos al súper ayer.'], ['She moved to Dallas three years ago.', 'Se mudó a Dallas hace tres años.']],
    listen: { text: "Last Saturday I washed the car, went grocery shopping and then I watched a movie with my kids.", q: '¿Qué hizo al final?', options: ['Vio una película con sus hijos', 'Lavó la ropa', 'Visitó a su mamá'], a: 0, note: '"washed" suena "uosht", una sola sílaba.' },
    speak: ['I visited my relatives last weekend.', "I didn't do the laundry.", 'She studied science in college.'],
    quiz: [
      { q: 'Pasado de "study":', options: ['studied', 'studyed', 'studed'], a: 0, why: 'Consonante + y → ied.' },
      { q: 'Pasado de "stop":', options: ['stopped', 'stoped', 'stopt'], a: 0, why: 'Se duplica la p.' },
      { q: 'Negativo: "I went to school."', options: ["I didn't go to school.", "I didn't went to school.", "I don't went to school."], a: 0, why: 'didn\'t + verbo base.' },
      { q: '"Hace una semana":', options: ['a week ago', 'ago a week', 'last a week'], a: 0, why: 'Tiempo + ago.' },
      { q: 'Pasado de "buy":', options: ['bought', 'buyed', 'buied'], a: 0, why: 'Irregular: bought.' }
    ]
  },
  {
    id: 'mc10', level: 'A2', num: 10, title: 'Dónde estás, materiales y objetos de la oración', focus: 'grammar',
    goal: 'Vas a aprender frases para decir dónde estás (at home, in bed, on vacation), materiales (gold, leather, cotton), las preposiciones in / on / at, y qué son el objeto directo e indirecto.',
    why: 'Las preposiciones son de lo que más confunde y cambian el significado. Y entender los objetos te ayuda a armar frases más largas.',
    intro: { en: "Where's Mike? — He's not at work today. He's in bed with the flu.", es: '¿Dónde está Mike? — Hoy no está en el trabajo. Está en cama con gripa.' },
    vocab: [['at home', 'en casa', 'at jóum'], ['in bed', 'en cama', 'in bed'], ['in a meeting', 'en una junta', 'in a mírin'], ['on vacation', 'de vacaciones', 'on veikéishon'], ['on a break', 'en un descanso', 'on a bréik'], ['at the mall', 'en el centro comercial', 'at de mol'], ['in the shower', 'bañándose', 'in de sháuer'], ['gold / silver', 'oro / plata', 'gould / sílver'], ['leather', 'piel (cuero)', 'léder'], ['cotton / wool', 'algodón / lana', 'kóton / uúl'], ['plastic / rubber', 'plástico / hule', 'plástik / ráber'], ['silk', 'seda', 'silk']],
    explain: `<p><b>IN</b> = espacios cerrados o grandes áreas: in my room, in Mexico, in the car, in bed, in class, in the shower.</p>
<p><b>ON</b> = sobre una superficie, calles y algunos estados: on the table, on Main Street, on vacation, on a trip, on a break.</p>
<p><b>AT</b> = puntos específicos y lugares públicos o de actividad: at home, at work, at the bus stop, at the party, at the beach, at the mall.</p>
<p class="tip">⚠️ "<b>in</b> the hospital" = internado como paciente. "<b>at</b> the hospital" = estás en el edificio (trabajando o de visita).</p>
<p><b>Materiales:</b> el material va antes del objeto, como adjetivo: a <b>gold</b> ring (anillo de oro), <b>leather</b> gloves (guantes de piel), a <b>cotton</b> shirt.</p>
<p><b>Objetos de la oración:</b> sujeto + verbo + objeto.</p>
<ul><li><b>Objeto directo</b>: lo que recibe la acción (¿qué?). I bought <b>a ring</b>.</li><li><b>Objeto indirecto</b>: para quién o a quién (¿a quién?). I bought <b>my wife</b> a ring = I bought a ring <b>for my wife</b>.</li></ul>
<p>Con pronombres: I gave <b>her</b> the keys = I gave the keys <b>to her</b>.</p>`,
    easy: `<p>Imagina tres cajas: <b>IN</b> = estás adentro de algo (cama, cuarto, país). <b>ON</b> = estás encima de algo (mesa, calle, vacaciones "arriba" de tu rutina). <b>AT</b> = estás en un punto del mapa (casa, trabajo, fiesta).</p>
<p>Las frases como "at home", "in bed", "on vacation" apréndelas como bloques completos.</p>`,
    memo: ['"In the hospital" = adentro de la cama del hospital (paciente). "At the hospital" = en el edificio.', 'Material = adjetivo, va primero: GOLD ring, como "anillo DE ORO" volteado.', 'Durante el día, dite dónde estás: "I\'m at work", "I\'m in the car", "I\'m on a break".'],
    examples: [["She's on vacation in Cancún.", 'Está de vacaciones en Cancún.'], ['My grandpa is in the hospital.', 'Mi abuelo está internado en el hospital.'], ['He gave his mom a silver necklace.', 'Le dio a su mamá un collar de plata.']],
    listen: { text: "Sorry, Sarah can't come to the phone, she's in a meeting. Can I take a message?", q: '¿Por qué Sarah no puede contestar?', options: ['Está en una junta', 'Está de vacaciones', 'Está en la ducha'], a: 0, note: '"Can I take a message?" = ¿quiere dejar un recado?' },
    speak: ["I'm at home right now.", "She's on vacation.", 'I bought my mom a gold ring.'],
    quiz: [
      { q: "I'm ___ work.", options: ['at', 'in', 'on'], a: 0, why: 'Frase fija: at work.' },
      { q: 'They are ___ vacation.', options: ['on', 'in', 'at'], a: 0, why: 'Frase fija: on vacation.' },
      { q: 'Unos guantes de piel:', options: ['leather gloves', 'gloves of leather skin', 'gloves leather'], a: 0, why: 'Material antes del objeto.' },
      { q: 'Está internado (paciente):', options: ["He's in the hospital.", "He's at the hospital.", "He's on the hospital."], a: 0, why: 'in = como paciente.' },
      { q: 'En "I sent my brother a letter", el objeto indirecto es:', options: ['my brother', 'a letter', 'I'], a: 0, why: '¿A quién? → a mi hermano.' }
    ]
  },
  {
    id: 'mc11', level: 'A2', num: 11, title: 'Películas, música e invitaciones', focus: 'speaking',
    goal: 'Vas a aprender géneros de películas, programas de TV y música, repasar preguntas en presente simple, preguntar "what kind of...?", hacer, aceptar y rechazar invitaciones con "Would you like to...?" y expresar gustos.',
    why: 'Invitar a alguien, aceptar o decir que no con educación es clave para socializar en inglés.',
    intro: { en: "Would you like to see a horror movie tonight? — Thanks, but I'm not into horror. How about a comedy?", es: '¿Te gustaría ver una de terror esta noche? — Gracias, pero no me gustan las de terror. ¿Qué tal una comedia?' },
    vocab: [['horror movie', 'película de terror', 'jórror múvi'], ['action / adventure', 'acción / aventura', 'ákshon / advénchur'], ['romantic comedy', 'comedia romántica', 'romántik kómedi'], ['science fiction', 'ciencia ficción', 'sáiens fíkshon'], ['documentary', 'documental', 'dokiuméntari'], ['soap opera', 'telenovela', 'sóup ópera'], ['cartoons', 'caricaturas', 'kartúns'], ['the news', 'las noticias', 'de niús'], ['country music', 'música country', 'kántri miúsik'], ['Would you like to...?', '¿Te gustaría...?', 'údiu láik tu'], ['I\'d love to!', '¡Me encantaría!', 'áid lav tu'], ["I'm not into...", 'No me late / no me gusta...', 'áim not íntu']],
    explain: `<p><b>Repaso de preguntas:</b> Do you like jazz? — Yes, I do. I love it. / No, I don't. I prefer rock.</p>
<p><b>What kind of</b> = qué tipo de: <b>What kind of</b> music do you listen to? — I like pop music.</p>
<p><b>Invitar:</b></p><ul><li>Formal: <b>Would you like to</b> + verbo? → Would you like to have dinner?</li><li>Informal: <b>Do you wanna</b>...? / <b>How about</b> + -ing? / <b>Let's</b> + verbo!</li></ul>
<p><b>Aceptar:</b> Sure! · I'd love to! · Sounds great! · Count me in! (¡cuenta conmigo!)</p>
<p><b>Rechazar con educación:</b> I'd love to, but I can't. · Sorry, I'm busy. · Thanks, but maybe another time. · <b>How about</b> Saturday instead? (ofrecer otra opción)</p>
<p><b>Would like + pronombre objeto</b> (querer que alguien haga algo): I'd like <b>you</b> to meet my wife. · We'd like <b>them</b> to come.</p>
<p><b>Gustos:</b> I love / I really like / I like / I don't mind (no me molesta) / I don't like / I can't stand (no soporto) + -ing o sustantivo.</p>
<p class="tip">⚠️ "I'd like" (me gustaría, quisiera) ≠ "I like" (me gusta). "Would you like coffee?" es una oferta.</p>`,
    easy: `<p>Para invitar, piensa en "¿Te <b>gustaría</b>...?" → Would you like to...?</p>
<p>Para decir que no sin ser grosero, sigue la fórmula: <b>agradece + razón + otra opción</b>: "Thanks, but I'm busy. How about tomorrow?"</p>`,
    memo: ['"Would" = "-ría": gustaría → would like. Siempre suena más educado.', 'Escala de gustos de más a menos: love → like → don\'t mind → don\'t like → can\'t stand.', 'Invita a alguien de tu familia en inglés esta semana, aunque sea de broma.'],
    examples: [['What kind of movies do you like? — I love action movies.', '¿Qué tipo de películas te gustan? — Me encantan las de acción.'], ["I'd love to, but I have to work. Maybe next time?", 'Me encantaría, pero tengo que trabajar. ¿La próxima?'], ["I can't stand soap operas.", 'No soporto las telenovelas.']],
    listen: { text: "Hey, a bunch of us are going to a country concert on Friday. You wanna come? — I'd love to, but I'm working that night.", q: '¿Por qué no puede ir?', options: ['Trabaja esa noche', 'No le gusta el country', 'Está enfermo'], a: 0, note: '"a bunch of us" = varios de nosotros. "You wanna come?" = ¿quieres venir?' },
    speak: ['Would you like to go to the movies?', "I'd love to, but I can't.", 'What kind of music do you like?'],
    quiz: [
      { q: 'Invitación formal:', options: ['Would you like to have dinner?', 'You want dinner?', 'Do you like to dinner?'], a: 0, why: 'Would you like to + verbo.' },
      { q: 'Rechazo educado:', options: ["Thanks, but I'm busy. Maybe another time?", 'No.', "I don't want."], a: 0, why: 'Agradece + razón + otra opción.' },
      { q: '"I can\'t stand horror movies" significa:', options: ['No soporto las de terror', 'No puedo ver de pie', 'Me encantan'], a: 0, why: 'can\'t stand = no soportar.' },
      { q: '___ kind of music do you like?', options: ['What', 'Which of', 'How'], a: 0, why: 'What kind of = qué tipo de.' },
      { q: '"Count me in!" significa:', options: ['¡Cuenta conmigo!', 'Cuéntame', 'No me cuentes'], a: 0, why: 'Para aceptar una invitación.' }
    ]
  },
  {
    id: 'mc12', level: 'A2', num: 12, title: 'Rutina, frecuencia, preguntas con how y did', focus: 'grammar',
    goal: 'Vas a repasar tu rutina diaria y los adverbios de frecuencia, preguntar con "Do you ever...?", how many times, how long y how much time, y hacer preguntas en pasado con did.',
    why: 'Combinar presente y pasado en preguntas te permite tener conversaciones mucho más completas.',
    intro: { en: "How long does it take you to get to work? — About forty minutes. Did you drive today? — No, I took the bus.", es: '¿Cuánto tiempo haces al trabajo? — Como cuarenta minutos. ¿Manejaste hoy? — No, tomé el autobús.' },
    vocab: [['get dressed', 'vestirse', 'guet drest'], ['brush my teeth', 'lavarme los dientes', 'brash mai tiz'], ['take a shower', 'bañarse', 'téik a sháuer'], ['have breakfast', 'desayunar', 'jav brékfast'], ['go to bed', 'irse a dormir', 'góu tu bed'], ['hardly ever', 'casi nunca', 'járdli éver'], ['ever', 'alguna vez', 'éver'], ['How many times...?', '¿Cuántas veces...?', 'jáu méni táims'], ['How long...?', '¿Cuánto tiempo...?', 'jáu long'], ['It takes me...', 'Me toma / hago...', 'it téiks mi'], ['once / twice', 'una vez / dos veces', 'uans / tuáis'], ['every day', 'todos los días', 'évri déi']],
    explain: `<p><b>Adverbios de frecuencia:</b> always (100%) · usually · often · sometimes · hardly ever · never (0%). Van <b>antes</b> del verbo y <b>después</b> de to be: I <b>usually</b> wake up at 6. She's <b>never</b> late.</p>
<p><b>¿Qué tan seguido?</b></p>
<ul><li>Si sabes que lo hace: <b>How often</b> do you play video games? — Every day.</li><li>Si no sabes si lo hace: <b>Do you ever</b> play video games? — Sometimes. / No, never.</li><li>Número de veces: <b>How many times</b> a week do you exercise? — Three times a week.</li></ul>
<p><b>Duración:</b> <b>How long</b> / <b>How much time</b> do you need? — About an hour. · <b>How long does it take</b> you to get to work? — <b>It takes me</b> 30 minutes.</p>
<p><b>Preguntas en pasado:</b> <b>Did</b> + sujeto + verbo base: <b>Did</b> you <b>watch</b> the game? — Yes, I did. / No, I didn't.</p>
<p>Abiertas: Wh- + did + sujeto + verbo: <b>Where did</b> you <b>go</b>? · <b>What did</b> she <b>buy</b>? · <b>Who did</b> you go with?</p>`,
    easy: `<p>En pasado, para preguntar solo pones <b>Did</b> al principio y el verbo se queda normal, como en presente: Did you <b>eat</b>? (no "ate").</p>
<p>"Did" ya lleva el pasado adentro, entonces el verbo ya no lo necesita.</p>
<p>Para el tiempo que tardas: "It takes me ___" = "Me tardo ___".</p>`,
    memo: ['"Did" se roba el pasado del verbo: Did you GO (no went).', '"Ever" = "alguna vez" → Do you ever...? = ¿alguna vez...?', 'Platica tu rutina de hoy y luego pregúntate en pasado: "Did I exercise? Did I study?"'],
    examples: [['How often do you go to the gym? — Hardly ever.', '¿Qué tan seguido vas al gym? — Casi nunca.'], ['It takes me an hour to get ready.', 'Me tardo una hora en arreglarme.'], ['What did you have for dinner last night?', '¿Qué cenaste anoche?']],
    listen: { text: "Did you see the game last night? — Nah, I was so tired, I went to bed at like nine. Who won?", q: '¿Por qué no vio el partido?', options: ['Estaba muy cansado', 'Estaba trabajando', 'No tiene tele'], a: 0, note: '"Nah" = no. "at like nine" = como a las nueve.' },
    speak: ['How often do you exercise?', 'Did you have breakfast?', 'It takes me thirty minutes to get to work.'],
    quiz: [
      { q: '___ you watch TV last night?', options: ['Did', 'Do', 'Were'], a: 0, why: 'Pasado → Did.' },
      { q: 'Pregunta correcta:', options: ['Where did you go?', 'Where did you went?', 'Where you went?'], a: 0, why: 'did + verbo base.' },
      { q: 'No sabes si lo hace. Preguntas:', options: ['Do you ever play golf?', 'How often do you play golf?', 'You play golf ever?'], a: 0, why: 'Do you ever...? = ¿alguna vez...?' },
      { q: '"It takes me 20 minutes" significa:', options: ['Me tardo 20 minutos', 'Me llevo 20 minutos', 'Tomo 20 minutos de descanso'], a: 0, why: 'Expresión para la duración.' },
      { q: 'She is ___ late. (nunca)', options: ['never', 'ever', 'hardly'], a: 0, why: 'never después de to be.' }
    ]
  },
  {
    id: 'mc13', level: 'A2', num: 13, title: 'La ciudad, la casa y there is / there are', focus: 'vocab',
    goal: 'Vas a aprender lugares de la ciudad, partes de la casa y muebles, a decir lo que hay con there is / there are (afirmativo, negativo y preguntas con how many / how much), a preguntar "What is it like?" y repasar in / on / at.',
    why: 'Describir tu casa, tu colonia o preguntar si hay algo cerca es súper común al rentar, viajar o platicar.',
    intro: { en: "What's your new apartment like? — It's small but nice. There's a big kitchen, but there aren't any closets!", es: '¿Cómo es tu nuevo departamento? — Es chico pero bonito. Hay una cocina grande, ¡pero no hay clósets!' },
    vocab: [['police station', 'estación de policía', 'polís stéishon'], ['fire station', 'estación de bomberos', 'fáier stéishon'], ['bakery', 'panadería', 'béikeri'], ['bookstore', 'librería', 'búkstor'], ['amusement park', 'parque de diversiones', 'amiúsment park'], ['living room', 'sala', 'lívin rum'], ['bedroom', 'recámara', 'bédrum'], ['stove / fridge', 'estufa / refri', 'stóuv / frich'], ['couch / sofa', 'sillón', 'kauch / sóufa'], ['drawers', 'cajones', 'dróers'], ['curtains', 'cortinas', 'kértens'], ['washing machine', 'lavadora', 'uóshin mashín']],
    explain: `<p><b>There is</b> (there's) + algo singular o incontable: There's a park. There's some milk.</p>
<p><b>There are</b> + plural: There are two bedrooms.</p>
<p><b>Negativo:</b> There <b>isn't</b> a garage. · There <b>aren't any</b> chairs. · There <b>isn't any</b> water.</p>
<p><b>Preguntas:</b> se invierte el orden: <b>Is there</b> a bank near here? — Yes, there is. / No, there isn't. · <b>Are there any</b> stores? — Yes, there are.</p>
<p><b>¿Cuántos?</b> <b>How many</b> + plural + are there? → How many bedrooms are there? · <b>How much</b> + incontable + is there? → How much milk is there?</p>
<p><b>What is/are ___ like?</b> = ¿cómo es/son? → What's your neighborhood like? — It's quiet and safe.</p>
<p><b>Repaso in/on/at:</b> <b>in</b> espacios cerrados (in the kitchen) · <b>on</b> superficies (on the couch, on the wall) · <b>at</b> puntos públicos o específicos (at the bakery, at the corner).</p>`,
    easy: `<p>"Hay" en inglés tiene dos formas: si es <b>uno</b> → there is. Si son <b>varios</b> → there are.</p>
<p>Para preguntar, voltea las palabras: There is → <b>Is there</b>?</p>
<p>Describe tu casa cuarto por cuarto: "In the kitchen there is a stove and there are four chairs."</p>`,
    memo: ['"There are" lleva "are" como "they are": plural.', 'Pregunta = voltea las dos palabras como tortilla: there is → is there?', 'Haz un tour en voz alta por tu casa diciendo qué hay en cada cuarto.'],
    examples: [['Is there a bakery near here? — Yes, there\'s one on 5th Street.', '¿Hay una panadería cerca? — Sí, hay una en la calle 5.'], ['How many bedrooms are there? — There are three.', '¿Cuántas recámaras hay? — Hay tres.'], ["There isn't any food in the fridge.", 'No hay comida en el refri.']],
    listen: { text: "The house is awesome. There are three bedrooms, two bathrooms, and there's a huge backyard. But there isn't a garage.", q: '¿Qué NO tiene la casa?', options: ['Cochera', 'Patio', 'Baños'], a: 0, note: '"backyard" = patio trasero. "huge" = enorme.' },
    speak: ['Is there a pharmacy near here?', 'There are two bedrooms.', "What's your neighborhood like?"],
    quiz: [
      { q: '___ four chairs in the kitchen.', options: ['There are', 'There is', 'Is there'], a: 0, why: 'Plural → there are.' },
      { q: 'Pregunta correcta:', options: ['Is there a bank near here?', 'There is a bank near here?', 'Have a bank near here?'], a: 0, why: 'Is there...?' },
      { q: 'How ___ water is there?', options: ['much', 'many', 'any'], a: 0, why: 'Water es incontable → much.' },
      { q: "There aren't ___ closets.", options: ['any', 'some', 'a'], a: 0, why: 'Negativo plural → any.' },
      { q: '"What\'s your city like?" pregunta:', options: ['Cómo es tu ciudad', 'Si te gusta tu ciudad', 'Dónde está tu ciudad'], a: 0, why: 'What is ___ like? = ¿cómo es?' }
    ]
  },
  {
    id: 'mc14', level: 'A2', num: 14, title: 'Presente perfecto: experiencias y lo reciente', focus: 'grammar',
    goal: 'Vas a aprender el presente perfecto (have / has + participio) para hablar de experiencias, cosas recientes y acciones que siguen, con ever, never, already, yet, just, for y since.',
    why: 'Es el tiempo que conecta tu pasado con el presente. Los nativos lo usan muchísimo: "Have you ever...?", "I\'ve already eaten".',
    intro: { en: "Have you ever been to New York? — No, never. But I've just bought tickets for next month!", es: '¿Has ido a Nueva York? — No, nunca. ¡Pero acabo de comprar boletos para el próximo mes!' },
    vocab: [['have / has + participio', 'he / ha + -ado, -ido', 'jav / jas'], ['ever', 'alguna vez', 'éver'], ['never', 'nunca', 'néver'], ['already', 'ya', 'olrédi'], ['yet', 'todavía / ya (en preguntas)', 'iét'], ['just', 'acabar de', 'yast'], ['for', 'durante (tiempo)', 'for'], ['since', 'desde', 'sins'], ['been', 'estado / ido', 'bín'], ['done', 'hecho', 'dan'], ['seen', 'visto', 'síin'], ['known', 'conocido', 'nóun']],
    explain: `<p><b>Estructura:</b> I/you/we/they <b>have</b> + participio · he/she/it <b>has</b> + participio. Contracciones: I<b>'ve</b>, she<b>'s</b>.</p>
<p><b>Negativo:</b> haven't / hasn't: I <b>haven't</b> read the article. · <b>Pregunta:</b> se invierte: <b>Have you</b> finished? — Yes, I have. / No, I haven't.</p>
<p><b>¿Para qué se usa?</b></p>
<ul><li><b>Experiencias</b> sin decir cuándo: I<b>'ve been</b> to Texas. He<b>'s played</b> in front of a lot of people.</li><li><b>Algo reciente</b> con resultado ahora: I<b>'ve lost</b> my keys (y no las tengo).</li><li><b>Algo que empezó y sigue</b>: She<b>'s known</b> him <b>since</b> kindergarten.</li></ul>
<p><b>Palabras clave:</b></p>
<table class="tbl"><tr><th>Palabra</th><th>Uso</th><th>Ejemplo</th></tr>
<tr><td>ever</td><td>preguntas: ¿alguna vez?</td><td>Have you <b>ever</b> tried sushi?</td></tr>
<tr><td>never</td><td>nunca</td><td>I've <b>never</b> been to Canada.</td></tr>
<tr><td>already</td><td>ya (antes de lo esperado)</td><td>I've <b>already</b> eaten.</td></tr>
<tr><td>yet</td><td>al final; negativo o pregunta</td><td>Have you finished <b>yet</b>? I haven't <b>yet</b>.</td></tr>
<tr><td>just</td><td>acabar de</td><td>She's <b>just</b> arrived.</td></tr>
<tr><td>for / since</td><td>duración / punto de inicio</td><td><b>for</b> 3 years / <b>since</b> 2021</td></tr></table>
<p class="tip">⚠️ Si dices <b>cuándo</b> (yesterday, last year), usa pasado simple: I went to Texas <b>last year</b>.</p>`,
    easy: `<p>Es como el español "he comido", "has visto": <b>I have eaten</b>, <b>you have seen</b>.</p>
<p>La única duda es cuándo usarlo. Pregúntate: <b>¿digo exactamente cuándo pasó?</b> Sí → pasado simple (I ate at 2). No → presente perfecto (I've eaten).</p>`,
    memo: ['Have + participio = he + -ado. Tradúcelo literal y casi siempre funciona.', '"Just" = "justo ahorita" → I\'ve just eaten = justo acabo de comer.', '"Yet" va al final como un "¿eh?": Have you finished yet?'],
    examples: [["I've already done my homework.", 'Ya hice mi tarea.'], ["Have you ever eaten tamales? — Yes, I have!", '¿Has comido tamales? — ¡Sí!'], ["We've lived here for ten years.", 'Llevamos diez años viviendo aquí.']],
    listen: { text: "I've worked here since 2019, but I haven't met the new manager yet. Have you?", q: '¿Desde cuándo trabaja ahí?', options: ['Desde 2019', 'Desde hace 19 años', 'Desde ayer'], a: 0, note: '"since 2019" = desde 2019. "I haven\'t met... yet" = todavía no conozco...' },
    speak: ['Have you ever been to California?', "I've already eaten.", "I've lived here for five years."],
    quiz: [
      { q: 'She ___ been to Mexico twice.', options: ['has', 'have', 'is'], a: 0, why: 'She → has.' },
      { q: 'Have you finished ___?', options: ['yet', 'already', 'since'], a: 0, why: 'yet va al final en preguntas.' },
      { q: "I've known her ___ 2015.", options: ['since', 'for', 'ago'], a: 0, why: 'Punto de inicio → since.' },
      { q: '¿Cuál es correcto?', options: ['I went to Texas last year.', "I've been to Texas last year.", 'I have went to Texas.'], a: 0, why: 'Con tiempo específico → pasado simple.' },
      { q: '"She\'s just arrived" significa:', options: ['Acaba de llegar', 'Solo llegó', 'Llegará pronto'], a: 0, why: 'just = acabar de.' }
    ]
  }
];
