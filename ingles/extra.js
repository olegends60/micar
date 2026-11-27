// Contenido extra: más lecciones, explicaciones fáciles, trucos para memorizar,
// pronunciación en español, guía de dudas y diccionario de expresiones para canciones.
// Todo el contenido es original de esta app.

// ---------- PRONUNCIACIÓN APROXIMADA (cómo se lee en español) ----------
const PRON = {
  'Hey / Hi': 'jéi / jái', "What's up?": 'uasáp', "How's it going?": 'jáusit góin', 'Nice to meet you': 'náis tu mít iu', "Where are you from?": 'uér ar iu from', 'See you later / See ya': 'sí iu léirer / sí ia',
  tired: 'táierd', happy: 'jápi', busy: 'bísi', hungry: 'jángri', ready: 'rédi', awesome: 'ósom',
  work: 'uérk', live: 'liv', 'wake up': 'uéik ap', 'every day': 'évri déi', usually: 'iúshuali', 'What do you do?': 'uárayu dú',
  'went (go)': 'uént', 'had (have)': 'jad', 'got (get)': 'gat', 'saw (see)': 'só', yesterday: 'iésterdei', 'last night': 'last náit',
  gonna: 'gána', 'this weekend': 'dis uíkend', tonight: 'tunáit', 'sleep in': 'slíp in', 'hang out': 'jéng áut', plan: 'plan',
  'Can I get...?': 'kenái guét', 'For here or to go?': 'for jír or tu góu', 'a refill': 'a rífil', 'the check': 'de chek', "That's it / That's all": 'dáts it / dáts ol', tip: 'tip',
  'Have you ever...?': 'jáviu éver', been: 'bín', already: 'olrédi', yet: 'iét', for: 'for', since: 'sins',
  'figure out': 'fíguer áut', 'run out of': 'ran áurov', 'show up': 'shóu ap', 'pick up': 'pik ap', 'give up': 'guív ap',
  if: 'if', "I'd (I would)": 'áid', 'If I were you': 'if ái uér iu', unless: 'anlés', 'in case': 'in kéis', 'win the lottery': 'uín de lárari',
  wanna: 'uána', gotta: 'gára', lemme: 'lémi', gimme: 'guími', 'kinda / sorta': 'káinda / sórda', 'I dunno': 'ai daná', whatcha: 'uácha', ya: 'ia',
  'must be': 'mast bi', 'might / may': 'máit / méi', "can't be": 'kent bi', 'should have': 'shúda', 'could have': 'kúda', 'would have': 'úda',
  "I'm down": 'áim dáun', 'My bad': 'mái bad', 'No worries': 'nóu uéris', 'For real?': 'for ríl', 'That sucks': 'dat saks', "I'm good": 'áim gud', "It's a deal": 'its a díl', 'Hang in there': 'jéng in dér',
  'piece of cake': 'pís ov kéik', 'under the weather': 'ánder de uéder', 'call it a day': 'kólirei déi', 'hit the sack': 'jit de sak', 'break the ice': 'bréik di áis', 'beat around the bush': 'bít aráund de bush', 'on the same page': 'on de séim péich', "I'm beat": 'áim bít',
  'I was wondering if...': 'ai uás uánderin if', 'Would you mind...?': 'úya máind', 'To be honest': 'tu bi ónest', "I'm afraid...": 'áim afréid', 'a bit / kind of': 'a bit / káinda', 'Would it be possible to...?': 'úrit bi pósibol tu',
  'The way I see it': 'de uéi ai sí it', 'Fair point': 'fér póint', 'That being said': 'dat bíin sed', "I'd argue that...": 'áid árguiu dat', "I see where you're coming from": 'ai sí uér iur kámin from', 'At the end of the day': 'ad di énd ov de déi'
};

// ---------- EXPLICACIONES FÁCILES Y TRUCOS PARA LAS LECCIONES ORIGINALES ----------
const LESSON_HELP = {
  'a1-saludos': {
    easy: `<p>Piensa en cómo saludas a un amigo en español: no dices "Buenos días, ¿cómo se encuentra usted?", dices "¿Qué onda?". En inglés es igual.</p>
<p><b>Paso 1:</b> Saluda → <b>Hi</b> (jái).<br><b>Paso 2:</b> Di tu nombre → <b>I'm</b> + tu nombre. "I'm" se lee "áim" y significa "yo soy".<br><b>Paso 3:</b> Di de dónde eres → <b>I'm from</b> + tu país.</p>
<p>Ya con eso tienes tu presentación: <b>"Hi, I'm Ana. I'm from Mexico."</b></p>`,
    memo: ['"What\'s up" = "¿Qué pasa (arriba)?" → imagina que alguien mira al cielo preguntando qué hay. Así recuerdas que es "¿qué onda?".', '"See ya" suena como "sí, ya" → "sí, ya me voy, nos vemos".', 'Practica tu presentación frente al espejo 3 veces al día durante 3 días. Al cuarto día te sale sola.']
  },
  'a1-tobe': {
    easy: `<p>En español tenemos dos verbos: <b>ser</b> y <b>estar</b>. En inglés solo hay uno: <b>to be</b>. ¡Es más fácil!</p>
<p>Solo cambia según la persona, como en español (yo soy, tú eres, él es):</p>
<p><b>I → am</b> (solo con "I")<br><b>He, She, It → is</b> (una persona o cosa)<br><b>You, We, They → are</b> (tú, nosotros, ellos)</p>
<p>Para hacerlo corto, se pega con un apóstrofe ('): I am → I'm. Es como cuando en español dices "pa'" en lugar de "para".</p>`,
    memo: ['"I am" → los dos empiezan con vocal y van juntos siempre: el "yo" es único y tiene su propia palabra.', '"Is" es de uno solo (he, she, it) → "is" tiene una sola sílaba, "uno solito".', 'Nunca digas "I have hungry": en inglés el hambre se ES, no se TIENE → "I\'m hungry".']
  },
  'a1-presente': {
    easy: `<p>El presente simple es para lo que haces <b>siempre o normalmente</b>: tu rutina.</p>
<p>La regla más importante: cuando hablas de <b>otra persona</b> (él, ella), al verbo le pones una <b>s</b> al final.</p>
<p>I work → He work<b>s</b>. I eat → She eat<b>s</b>.</p>
<p>Para preguntar, pones <b>Do</b> al principio (o <b>Does</b> si es él/ella). Es como poner los signos ¿? del español: "<b>Do</b> you work?" = "¿Trabajas?"</p>`,
    memo: ['Truco "la S de Su": cuando hablas de "él o ella", el verbo lleva la S de "Su" (de otra persona).', '"Does" ya trae la S, por eso el verbo después ya no la lleva: Does she work? (no "works").', 'Escribe 5 cosas que haces cada día en inglés en un papelito y pégalo en el espejo.']
  },
  'a2-pasado': {
    easy: `<p>Para hablar de algo que ya pasó, casi siempre agregas <b>-ed</b> al verbo: walk → walk<b>ed</b> (caminé).</p>
<p>Pero hay verbos "rebeldes" (irregulares) que cambian completo, como en español "ir → fui". Los más usados son pocos: <b>went</b> (fui), <b>had</b> (tuve), <b>got</b> (conseguí), <b>saw</b> (vi), <b>ate</b> (comí), <b>made</b> (hice).</p>
<p>Para preguntar se usa <b>Did</b> y el verbo regresa a normal: "Did you <b>go</b>?" Did ya dice que es pasado, no hace falta repetirlo.</p>`,
    memo: ['"Did" ya es pasado, así que "se lleva" el pasado del verbo: Did you GO (no "went").', 'Aprende los irregulares en parejas que rimen: "saw – thought – bought" (vi, pensé, compré).', 'Cada noche di 3 cosas que hiciste hoy en inglés: "I worked, I ate tacos, I watched TV."']
  },
  'a2-futuro': {
    easy: `<p>Para decir lo que <b>vas a</b> hacer, el inglés se parece mucho al español:</p>
<p>Español: Yo <b>voy a</b> comer. → Inglés: I'm <b>going to</b> eat.</p>
<p>¡Es casi palabra por palabra! Y cuando hablan rápido, "going to" se aplasta y suena <b>"gonna"</b>.</p>
<p>Así que si escuchas "gonna", piensa en "voy a / vas a / va a".</p>`,
    memo: ['"Gonna" = "voy a" → los dos tienen una "a" al final.', '"Going to" = "yendo a" → si vas yendo hacia algo, lo vas a hacer.', 'Cada mañana di tu plan del día: "Today I\'m gonna work and I\'m gonna..."']
  },
  'a2-pedir': {
    easy: `<p>En EE. UU., para pedir algo en un restaurante no se dice "I want" (quiero), porque suena exigente. Se dice <b>"Can I get...?"</b>, que es como "¿Me da...?".</p>
<p>Fórmula mágica: <b>Can I get</b> + lo que quieres + <b>please</b>?</p>
<p>Te van a preguntar cosas rápido. Las 3 más comunes: <b>Anything else?</b> (¿algo más?), <b>For here or to go?</b> (¿aquí o para llevar?) y <b>Cash or card?</b> (¿efectivo o tarjeta?).</p>`,
    memo: ['"To go" = "para irte" → te lo llevas.', '"The check" = la cuenta → imagina que te "checan" cuánto gastaste.', 'Ensaya tu orden favorita en voz alta antes de ir a un restaurante.']
  },
  'b1-presperf': {
    easy: `<p>El presente perfecto conecta el <b>pasado con el ahora</b>. Se forma con <b>have</b> + verbo en participio (el de -ed o irregular).</p>
<p>Es igual al español "he + -ado/-ido": <b>He comido</b> = I <b>have eaten</b>. <b>He visto</b> = I <b>have seen</b>.</p>
<p>La diferencia con el pasado simple: si dices <b>cuándo</b> (ayer, en 2020), usa pasado simple. Si no dices cuándo, o sigue pasando, usa presente perfecto.</p>`,
    memo: ['"Have + participio" = "he + -ado". Tradúcelo literal y casi siempre acertarás.', '"For" es para cantidad de tiempo (for 2 years) y "since" para el punto de inicio (since 2020). Since = "desde".', 'Pregúntate: ¿digo cuándo? Sí → pasado. No → have.']
  },
  'b1-phrasal': {
    easy: `<p>Un phrasal verb es un verbo con una palabrita pegada (up, out, on, off...) que le cambia el significado. Es como en español "echar" vs "echar de menos": la frase completa tiene otro sentido.</p>
<p>No intentes traducir palabra por palabra. Apréndelos <b>como si fueran una sola palabra</b>: "figure out" = averiguar.</p>
<p>La palabrita a veces da pistas: <b>up</b> suele ser "completar o subir", <b>out</b> suele ser "salir o terminar".</p>`,
    memo: ['"Run out of" → imagina que el agua "sale corriendo" del vaso y te quedas sin nada.', '"Show up" → alguien que "se muestra arriba", aparece de repente.', 'Aprende máximo 3 phrasal verbs por día y úsalos en una frase sobre tu vida.']
  },
  'b1-condicional': {
    easy: `<p>Hay dos tipos principales:</p>
<p><b>1) Cosas posibles:</b> "Si llueve, me quedo." → If it rains, I'll stay. (presente + will)</p>
<p><b>2) Cosas imaginarias:</b> "Si tuviera dinero, compraría..." → If I had money, I would buy... (pasado + would)</p>
<p><b>Would</b> es la terminación "-ría" del español: compra<b>ría</b> = would buy, ha<b>ría</b> = would do.</p>`,
    memo: ['"Would" = "-ría" → piensa "would-ría".', '"If I were you" siempre lleva "were", aunque sea "I". Es una frase fija: apréndela de memoria.', 'Juega a imaginar: "If I won the lottery, I would..." y di 5 cosas.']
  },
  'b2-reducciones': {
    easy: `<p>Cuando hablas rápido en español dices "pa'" en vez de "para" o "'tá bien" en vez de "está bien". En inglés pasa lo mismo, pero ¡mucho más!</p>
<p>Las palabras pequeñas (to, you, of, have) se pegan a la anterior:<br>want + to → <b>wanna</b><br>got + to → <b>gotta</b><br>let + me → <b>lemme</b><br>kind + of → <b>kinda</b></p>
<p>No tienes que hablar así, pero sí reconocerlo. Escucha cada frase primero lenta y luego súper rápida.</p>`,
    memo: ['Todas terminan en "-a" o "-y": wanna, gotta, kinda, lemme, gimme. Si oyes una palabra rara con "-a" al final, probablemente es una reducción.', 'Escucha una canción en inglés y cuenta cuántas veces oyes "gonna" o "wanna".', 'Repite las frases en ⚡ súper rápido imitando el ritmo, aunque no te salga perfecto.']
  },
  'b2-modales': {
    easy: `<p>Estos verbos sirven para decir <b>qué tan seguro estás</b> de algo:</p>
<p><b>must</b> = estoy casi seguro (90%)<br><b>might</b> = tal vez (50%)<br><b>can't</b> = imposible (0%)</p>
<p>Y para lamentarte del pasado: <b>should have</b> + participio = "debí haber". Ejemplo: I should have studied = debí haber estudiado.</p>`,
    memo: ['"Must" suena a "más": más seguro. "Might" suena a "mitad": 50%.', '"Shoulda" = "should have" = "debí haber". Lo vas a oír mucho en canciones de desamor.', 'Mira a la gente en la calle e inventa deducciones: "He must be tired."']
  },
  'b2-slang': {
    easy: `<p>Son frases cotidianas que no se traducen literal. Apréndelas como frases completas, con su situación:</p>
<p>Alguien te invita → <b>I'm down</b> (me apunto).<br>Cometiste un error → <b>My bad</b> (perdón, fue mi culpa).<br>Alguien se disculpa → <b>No worries</b> (no te preocupes).<br>Te ofrecen más y no quieres → <b>I'm good</b> (así estoy bien).</p>`,
    memo: ['Asocia cada frase con una persona que conoces que la diría. La memoria guarda mejor las cosas con caras.', '"I\'m down" = estoy "abajo" listo para lo que sea. "I\'m good" = ya estoy bien, no necesito más.', 'Usa una frase nueva cada día en tus mensajes con amigos.']
  },
  'c1-idioms': {
    easy: `<p>Los modismos son como nuestros dichos: "estar en la luna" no significa estar en el espacio. En inglés, "piece of cake" (pedazo de pastel) significa "pan comido".</p>
<p>No los traduzcas: imagina la escena. "Hit the sack" = pegarle al costal (el colchón antiguo) = irse a dormir.</p>`,
    memo: ['Haz un dibujo mental ridículo de cada modismo: "under the weather" = una persona debajo de una nube de lluvia, enferma.', 'Busca el equivalente en español: "piece of cake" = "pan comido". Pastel y pan: ¡los dos son comida!', 'Aprende 2 por semana, no más. Calidad sobre cantidad.']
  },
  'c1-matices': {
    easy: `<p>En EE. UU. ser muy directo puede sonar grosero. Por eso se "envuelven" las peticiones como un regalo:</p>
<p>Directo: "Give me the report." → Envuelto: "<b>Could you</b> send me the report <b>when you get a chance</b>?"</p>
<p>Entre más palabras amables pones alrededor, más educado suenas.</p>`,
    memo: ['"Would you mind" = "¿te molestaría?" → si NO te molesta, dices "Not at all" (al revés de lo que esperarías).', 'Piensa en "envolver" la petición: inicio amable + petición + final amable.', 'Reescribe un mensaje directo que hayas enviado en forma educada.']
  },
  'c1-opinar': {
    easy: `<p>Para debatir hay 3 pasos:</p>
<p><b>1) Escucha y reconoce:</b> "I see where you're coming from" (entiendo tu punto).<br><b>2) Da tu opinión:</b> "but the way I see it..." (pero como yo lo veo...).<br><b>3) Cierra:</b> "At the end of the day..." (al final de cuentas...).</p>`,
    memo: ['Aprende una frase de cada paso y úsalas siempre juntas, como una receta.', 'Mira un debate o podcast en inglés y anota las frases que usan para no estar de acuerdo.', 'Practica opinando sobre algo simple: ¿pizza con piña sí o no?']
  }
};

// ---------- LECCIONES NUEVAS ----------
const EXTRA_LESSONS = [
  {
    id: 'a1-abc', level: 'A1', title: 'El abecedario y deletrear tu nombre', focus: 'listening',
    goal: 'Vas a aprender cómo suenan las letras en inglés para poder deletrear tu nombre, tu correo o una dirección por teléfono.',
    why: 'En EE. UU. te piden deletrear todo: "Can you spell that?". Las vocales suenan muy distinto al español y confunden mucho.',
    intro: { en: "What's your last name? Can you spell that for me?", es: '¿Cuál es tu apellido? ¿Me lo puedes deletrear?' },
    vocab: [['spell', 'deletrear', 'spel'], ['last name', 'apellido', 'last néim'], ['first name', 'nombre', 'ferst néim'], ['letter', 'letra', 'lérer'], ['Can you repeat that?', '¿Lo puede repetir?', 'kéniu ripít dat'], ['email address', 'correo electrónico', 'ímeil ádres']],
    explain: `<p>Las letras que más confunden a los hispanohablantes:</p>
<table class="tbl"><tr><th>Letra</th><th>Suena</th><th>Letra</th><th>Suena</th></tr>
<tr><td><b>A</b></td><td>éi</td><td><b>E</b></td><td>í</td></tr>
<tr><td><b>I</b></td><td>ái</td><td><b>O</b></td><td>óu</td></tr>
<tr><td><b>U</b></td><td>iú</td><td><b>G</b></td><td>yí</td></tr>
<tr><td><b>J</b></td><td>yéi</td><td><b>H</b></td><td>éich</td></tr>
<tr><td><b>R</b></td><td>ar</td><td><b>Y</b></td><td>uái</td></tr>
<tr><td><b>W</b></td><td>dábol-iu</td><td><b>Z</b></td><td>zi</td></tr></table>
<p>Para correos: <b>@</b> = "at", <b>.</b> = "dot", <b>_</b> = "underscore", <b>-</b> = "dash".</p>
<p class="tip">⚠️ Las trampas: la <b>E</b> suena "i" y la <b>I</b> suena "ai". ¡Están al revés de lo que esperarías!</p>`,
    easy: `<p>No necesitas aprender el abecedario de golpe. Empieza con <b>las letras de tu nombre</b>.</p>
<p>Ejemplo con "ANA": A = éi, N = en, A = éi → "éi – en – éi".</p>
<p>Las 5 vocales son lo más importante porque son totalmente distintas: <b>A</b> (éi), <b>E</b> (í), <b>I</b> (ái), <b>O</b> (óu), <b>U</b> (iú).</p>`,
    memo: ['Truco de las vocales: "Éi, Í, Ái, Óu, Iú" → repítelo como canción: "ei-i-ai-ou-iu".', 'La E y la I están "cambiadas": la E dice "i" y la I dice "ai". Imagina que se cambiaron de ropa.', 'Deletrea tu nombre completo en voz alta cada vez que te bañes durante una semana.'],
    examples: [["My name is Ana. A-N-A.", 'Me llamo Ana. A-N-A.'], ['Can you spell your last name?', '¿Puede deletrear su apellido?'], ['It\'s carlos at gmail dot com.', 'Es carlos arroba gmail punto com.']],
    listen: { text: "Sure, it's Lopez. L, O, P, E, Z.", q: '¿Qué apellido deletreó?', options: ['Lopez', 'Lapiz', 'Lopes'], a: 0, note: 'O = "óu", E = "í", Z = "zi".' },
    speak: ['Can you spell that?', 'My last name is Garcia.', 'Can you repeat that, please?'],
    quiz: [
      { q: '¿Cómo suena la letra "E" en inglés?', options: ['í', 'é', 'ái'], a: 0, why: 'La E suena "í", como en "me".' },
      { q: '¿Cómo suena la letra "I"?', options: ['ái', 'í', 'é'], a: 0, why: 'La I suena "ái", como "I" (yo).' },
      { q: 'En un correo, el punto (.) se dice:', options: ['dot', 'point', 'period'], a: 0, why: 'En correos y páginas web es "dot".' }
    ]
  },
  {
    id: 'a1-numeros', level: 'A1', title: 'Números, precios y tu edad', focus: 'vocab',
    goal: 'Vas a aprender a decir y entender números, precios, tu teléfono y tu edad, y la diferencia entre "thirteen" y "thirty".',
    why: 'Pagar, dar tu teléfono o entender un precio requiere números rápidos. "Fifteen" y "fifty" confunden a todos.',
    intro: { en: "That'll be fifteen fifty. Do you need a bag?", es: 'Son quince cincuenta. ¿Necesitas bolsa?' },
    vocab: [['one, two, three', 'uno, dos, tres', 'uan, tu, zri'], ['thirteen', 'trece', 'zertín'], ['thirty', 'treinta', 'zérri'], ['hundred', 'cien', 'jándred'], ['thousand', 'mil', 'záusand'], ['How much is it?', '¿Cuánto cuesta?', 'jáu mach is it']],
    explain: `<p><b>Del 13 al 19</b> terminan en <b>-teen</b> (tín) y la fuerza va al final: thir<b>TEEN</b>, fif<b>TEEN</b>.</p>
<p><b>Las decenas</b> (20, 30...) terminan en <b>-ty</b> (ri) y la fuerza va al principio: <b>THIR</b>ty, <b>FIF</b>ty.</p>
<p><b>Precios:</b> se dicen en dos partes: $15.50 = "fifteen fifty". $4.99 = "four ninety-nine".</p>
<p><b>Teléfonos:</b> número por número; el 0 se dice "oh": 555-0142 = "five five five, oh one four two".</p>
<p><b>Edad:</b> I'm 25 (no "I have 25").</p>`,
    easy: `<p>El truco está en dónde pones la fuerza:</p>
<p><b>13 thirTEEN</b> → la fuerza al final, se alarga: "zer-TÍÍN".<br><b>30 THIRty</b> → la fuerza al principio, corto: "ZÉR-ri".</p>
<p>Si no estás seguro, pregunta: "Is that one-five or five-zero?" (¿es uno-cinco o cinco-cero?). ¡Los nativos también lo hacen!</p>`,
    memo: ['"-teen" es largo como "adolescente" (teenager) de 13 a 19 años.', '"-ty" es corto y "duro": twenty, thirty, forty.', 'Cada vez que veas un precio en la tienda, dilo en inglés en tu mente.'],
    examples: [["How much is it? — It's twenty dollars.", '¿Cuánto cuesta? — Son veinte dólares.'], ["My number is five five five, oh one four two.", 'Mi número es 555-0142.'], ["I'm thirty-two years old.", 'Tengo 32 años.']],
    listen: { text: 'Okay, your total is forty-three ninety-nine.', q: '¿Cuánto tiene que pagar?', options: ['$43.99', '$13.99', '$40.39'], a: 0, note: '"forty-three ninety-nine" = 43.99. Los precios se dividen en dos números.' },
    speak: ['How much is it?', 'It costs fifteen dollars.', "I'm thirty years old."],
    quiz: [
      { q: '"Fifty" es:', options: ['50', '15', '5'], a: 0, why: '-ty = decenas. Fifty = 50.' },
      { q: '"Nine ninety-nine" es:', options: ['$9.99', '$99.9', '$909'], a: 0, why: 'Primera parte = dólares, segunda = centavos.' },
      { q: '¿Cómo dices tu edad?', options: ["I'm 20.", 'I have 20.', 'I have 20 years.'], a: 0, why: 'La edad va con "to be".' }
    ]
  },
  {
    id: 'a1-articulos', level: 'A1', title: 'A, an, the y los plurales', focus: 'grammar',
    goal: 'Vas a aprender cuándo usar "a", "an" y "the" (un, una, el, la) y cómo hacer plurales (car → cars, child → children).',
    why: 'Son de las palabras más usadas del inglés. Usarlas bien hace que suenes mucho más natural.',
    intro: { en: "I have a dog and an old cat. The cat hates the dog!", es: 'Tengo un perro y un gato viejo. ¡El gato odia al perro!' },
    vocab: [['a / an', 'un / una', 'a / an'], ['the', 'el, la, los, las', 'de'], ['apple', 'manzana', 'ápol'], ['hour', 'hora', 'áuer'], ['child / children', 'niño / niños', 'cháild / chíldren'], ['people', 'personas / gente', 'pípol']],
    explain: `<p><b>a</b> antes de sonido de consonante: <b>a</b> car, <b>a</b> house, <b>a</b> university (suena "iu").</p>
<p><b>an</b> antes de sonido de vocal: <b>an</b> apple, <b>an</b> egg, <b>an</b> hour (la h no suena).</p>
<p><b>the</b> = el, la, los, las (cuando ya sabemos de cuál hablamos). ¡Es una sola palabra para todo!</p>
<p><b>Plurales:</b> casi siempre <b>+s</b> (car → cars). Si termina en s, sh, ch, x → <b>+es</b> (bus → buses). Irregulares: man → <b>men</b>, woman → <b>women</b>, child → <b>children</b>, person → <b>people</b>, foot → <b>feet</b>, tooth → <b>teeth</b>.</p>
<p class="tip">⚠️ En inglés los adjetivos NO llevan plural: "red cars" (no "reds cars").</p>`,
    easy: `<p>Buenas noticias: en inglés no hay masculino ni femenino. "The" sirve para el, la, los y las. "A" sirve para un y una.</p>
<p>Solo cambia <b>a → an</b> cuando la siguiente palabra empieza con sonido de vocal, para que no choquen dos vocales: "a apple" suena feo, "an apple" fluye mejor.</p>`,
    memo: ['"An" tiene una N que funciona como puente entre dos vocales: a-N-apple.', 'Irregulares en pareja: "man-men, woman-women" (la a cambia a e).', 'Señala 10 cosas de tu casa y di "a ___" o "an ___".'],
    examples: [['I need an umbrella.', 'Necesito un paraguas.'], ['The kids are at school.', 'Los niños están en la escuela.'], ['There are three women and two men.', 'Hay tres mujeres y dos hombres.']],
    listen: { text: "Can I get an orange juice and a bagel? Actually, make that two bagels.", q: '¿Cuántos bagels pide al final?', options: ['Dos', 'Uno', 'Tres'], a: 0, note: '"Actually, make that two" = mejor que sean dos.' },
    speak: ['I have an apple.', 'The children are happy.', 'I need a car.'],
    quiz: [
      { q: '___ hour', options: ['an', 'a', 'the a'], a: 0, why: 'La "h" de hour no suena, empieza con sonido vocal.' },
      { q: 'Plural de "child":', options: ['children', 'childs', 'childes'], a: 0, why: 'Es irregular: children.' },
      { q: '¿Cuál es correcto?', options: ['big houses', 'bigs houses', 'bigs house'], a: 0, why: 'Los adjetivos no tienen plural.' }
    ]
  },
  {
    id: 'a1-this', level: 'A1', title: 'This, that, these, those', focus: 'grammar',
    goal: 'Vas a aprender a señalar cosas cerca y lejos: este, ese, estos, esos.',
    why: 'Lo usas en tiendas, en casa y al pedir cualquier cosa: "Can I get this one?".',
    intro: { en: "Is this your phone? No, that's my phone over there.", es: '¿Este es tu teléfono? No, ese de allá es mi teléfono.' },
    vocab: [['this', 'este / esta', 'dis'], ['that', 'ese / esa / aquel', 'dat'], ['these', 'estos / estas', 'díis'], ['those', 'esos / esas', 'dóus'], ['here', 'aquí', 'jíer'], ['over there', 'allá', 'óuver der']],
    explain: `<table class="tbl"><tr><th></th><th>Cerca (aquí)</th><th>Lejos (allá)</th></tr>
<tr><td>Uno</td><td><b>this</b></td><td><b>that</b></td></tr>
<tr><td>Varios</td><td><b>these</b></td><td><b>those</b></td></tr></table>
<p>"This is my friend." (presentar a alguien) · "That's right!" (¡así es!) · "These shoes are cheap."</p>
<p>Truco de tienda: "<b>this one</b>" = este, "<b>that one</b>" = ese.</p>
<p class="tip">⚠️ "This" (dis, corta) y "these" (díis, larga) solo se distinguen por lo largo de la i. ¡Alárgala en "these"!</p>`,
    easy: `<p>Solo dos preguntas: ¿está <b>cerca o lejos</b>? ¿Es <b>uno o varios</b>?</p>
<p>Cerca y uno → this. Cerca y varios → these.<br>Lejos y uno → that. Lejos y varios → those.</p>
<p>Señala con el dedo mientras lo dices: así tu cuerpo ayuda a tu memoria.</p>`,
    memo: ['"This" y "these" empiezan con "thi" = aquí. "That" y "those" tienen "a/o" = allá.', '"These" tiene más letras que "this" porque son más cosas.', 'Señala objetos de tu cuarto y nómbralos con this/that/these/those.'],
    examples: [['This is my brother, Luis.', 'Este es mi hermano, Luis.'], ['Can I try those shoes?', '¿Me puedo probar esos zapatos?'], ["That's a good idea.", 'Es una buena idea.']],
    listen: { text: "How much are these? And that one over there?", q: '¿Qué pregunta?', options: ['El precio de varias cosas', 'Dónde está el baño', 'Qué hora es'], a: 0, note: '"these" = estos (cerca), "that one over there" = ese de allá.' },
    speak: ['This is my friend.', 'How much are these?', "That's right."],
    quiz: [
      { q: 'Varias cosas lejos:', options: ['those', 'these', 'this'], a: 0, why: 'Lejos + varias = those.' },
      { q: 'Presentas a tu amiga junto a ti: "___ is Maria."', options: ['This', 'These', 'Those'], a: 0, why: 'Una persona cerca = this.' },
      { q: '"That one" significa:', options: ['Ese', 'Este', 'Uno de esos días'], a: 0, why: 'one reemplaza la cosa: that one = ese.' }
    ]
  },
  {
    id: 'a1-familia', level: 'A1', title: 'La familia y los posesivos', focus: 'vocab',
    goal: 'Vas a aprender a hablar de tu familia y a decir de quién es algo: my, your, his, her y el famoso "\'s" (Juan\'s car).',
    why: 'Hablar de la familia es de los temas más comunes. Y "his/her" confunde mucho a los hispanohablantes porque en español solo decimos "su".',
    intro: { en: "This is my sister, and that's her husband. Their kids are super cute.", es: 'Esta es mi hermana y ese es su esposo. Sus hijos son súper lindos.' },
    vocab: [['mom / dad', 'mamá / papá', 'mam / dad'], ['brother / sister', 'hermano / hermana', 'bráder / síster'], ['son / daughter', 'hijo / hija', 'san / dórer'], ['husband / wife', 'esposo / esposa', 'jásband / uáif'], ['parents', 'papás (padre y madre)', 'pérents'], ['grandma / grandpa', 'abuela / abuelo', 'grénma / grénpa']],
    explain: `<table class="tbl"><tr><th>Persona</th><th>Posesivo</th><th>Español</th></tr>
<tr><td>I</td><td><b>my</b></td><td>mi</td></tr><tr><td>you</td><td><b>your</b></td><td>tu / su (de usted)</td></tr>
<tr><td>he</td><td><b>his</b></td><td>su (de él)</td></tr><tr><td>she</td><td><b>her</b></td><td>su (de ella)</td></tr>
<tr><td>we</td><td><b>our</b></td><td>nuestro</td></tr><tr><td>they</td><td><b>their</b></td><td>su (de ellos)</td></tr></table>
<p><b>'s</b> para decir de quién es: <b>Maria's</b> car = el carro de María. <b>My mom's</b> house = la casa de mi mamá.</p>
<p class="tip">⚠️ "Parents" NO es parientes: es <b>papá y mamá</b>. Parientes = "relatives".</p>`,
    easy: `<p>En español "su" puede ser de él, de ella o de ellos. En inglés tienes que elegir según <b>el dueño</b>:</p>
<p>Si el dueño es hombre → <b>his</b>. Si es mujer → <b>her</b>. Si son varios → <b>their</b>.</p>
<p>Ejemplo: "Pedro y <b>su</b> mamá" → Pedro and <b>his</b> mom (el dueño es Pedro, hombre).</p>`,
    memo: ['"His" tiene la misma "h" que "he" (él). "Her" empieza igual que "her" de "she/her".', 'El \'s es como un ganchito que "engancha" la cosa a su dueño: Maria\'s car.', 'Dibuja tu árbol genealógico y escribe el nombre en inglés de cada uno.'],
    examples: [["My dad's name is José.", 'Mi papá se llama José.'], ['Her son lives in Chicago.', 'Su hijo (de ella) vive en Chicago.'], ['Our parents are from Puebla.', 'Nuestros papás son de Puebla.']],
    listen: { text: "That's my brother's wife. Her parents are from Texas, but she grew up in Cali.", q: '¿Quién es ella?', options: ['La esposa de su hermano', 'Su hermana', 'Su mamá'], a: 0, note: '"my brother\'s wife" = la esposa de mi hermano. "Cali" = California.' },
    speak: ['This is my mom.', 'His sister is a doctor.', "My brother's name is Luis."],
    quiz: [
      { q: 'Ana y ___ esposo (de Ana).', options: ['her', 'his', 'their'], a: 0, why: 'El dueño es Ana (mujer) → her.' },
      { q: '"Parents" significa:', options: ['Papá y mamá', 'Parientes', 'Padrinos'], a: 0, why: 'Es un falso amigo. Parientes = relatives.' },
      { q: 'El carro de Juan:', options: ["Juan's car", 'The car of Juan is', "Car's Juan"], a: 0, why: 'Dueño + \'s + cosa.' }
    ]
  },
  {
    id: 'a1-hora', level: 'A1', title: 'La hora, los días y los meses', focus: 'vocab',
    goal: 'Vas a aprender a decir la hora, los días de la semana, los meses y las fechas, y cuándo usar "in", "on" y "at" con el tiempo.',
    why: 'Para hacer citas, ir al trabajo o al doctor necesitas entender horas y fechas sin dudar.',
    intro: { en: "What time is it? It's a quarter to nine. We're gonna be late!", es: '¿Qué hora es? Son cuarto para las nueve. ¡Vamos a llegar tarde!' },
    vocab: [['What time is it?', '¿Qué hora es?', 'uát táim is it'], ["o'clock", 'en punto', 'oklók'], ['half past', 'y media', 'jaf past'], ['a quarter to', 'cuarto para', 'a kuórer tu'], ['Monday, Tuesday...', 'lunes, martes...', 'mándei, tiúsdei'], ['January, February...', 'enero, febrero...', 'yániueri, fébrueri']],
    explain: `<p><b>La hora fácil:</b> di los números: 7:30 = "seven thirty", 9:15 = "nine fifteen".</p>
<p><b>La hora tradicional:</b> 3:00 = three <b>o'clock</b> · 3:30 = <b>half past</b> three · 3:45 = <b>a quarter to</b> four.</p>
<p><b>Días:</b> Monday, Tuesday, Wednesday (suena "uénsdei"), Thursday, Friday, Saturday, Sunday. ¡Siempre con mayúscula!</p>
<p><b>Preposiciones de tiempo:</b><br><b>at</b> + hora → at 5 o'clock<br><b>on</b> + día → on Monday, on July 4th<br><b>in</b> + mes/año → in May, in 2025</p>
<p class="tip">🇺🇸 En EE. UU. las fechas se escriben mes/día/año: 07/04 es 4 de julio, no 7 de abril.</p>`,
    easy: `<p>Para empezar usa solo la forma fácil: di la hora como número. 8:20 = "eight twenty". ¡Todos te entienden!</p>
<p>Para in/on/at piensa en una pirámide: lo más grande arriba (<b>in</b> años y meses), en medio <b>on</b> (días) y lo más pequeño y exacto <b>at</b> (horas).</p>`,
    memo: ['Pirámide del tiempo: IN (grande: meses, años) → ON (días) → AT (punto exacto: horas).', '"Wednesday" se escribe raro pero suena "uénsdei". Imagina "wed-NES-day" escrito y "uensdei" dicho.', 'Pon tu celular en inglés: verás días y meses todo el día sin esfuerzo.'],
    examples: [['The meeting is at three thirty.', 'La junta es a las tres y media.'], ["My birthday is on May 10th.", 'Mi cumpleaños es el 10 de mayo.'], ['I start work in January.', 'Empiezo a trabajar en enero.']],
    listen: { text: "Your appointment is on Thursday at ten fifteen. Please arrive ten minutes early.", q: '¿Cuándo es la cita?', options: ['Jueves 10:15', 'Martes 10:50', 'Jueves 2:15'], a: 0, note: 'Thursday = jueves. "ten fifteen" = 10:15.' },
    speak: ['What time is it?', 'See you on Monday.', 'The class is at seven.'],
    quiz: [
      { q: 'My birthday is ___ June.', options: ['in', 'on', 'at'], a: 0, why: 'Meses → in.' },
      { q: 'See you ___ Friday.', options: ['on', 'in', 'at'], a: 0, why: 'Días → on.' },
      { q: '"Half past six" es:', options: ['6:30', '5:30', '6:15'], a: 0, why: 'half past = y media.' }
    ]
  },
  {
    id: 'a1-thereis', level: 'A1', title: 'There is / There are (hay)', focus: 'grammar',
    goal: 'Vas a aprender a decir "hay" en inglés: there is (uno) y there are (varios), y a preguntar "¿hay...?".',
    why: 'Lo necesitas para describir lugares, preguntar si hay algo en una tienda o explicar dónde vives.',
    intro: { en: "Is there a gas station near here? Yeah, there's one on Main Street.", es: '¿Hay una gasolinera cerca? Sí, hay una en la calle Main.' },
    vocab: [["there is / there's", 'hay (uno)', 'der is / ders'], ['there are', 'hay (varios)', 'der ar'], ['Is there...?', '¿Hay...?', 'is der'], ['near here', 'cerca de aquí', 'níer jíer'], ['any', 'algún / ningún', 'éni'], ['some', 'algunos / unos', 'sam']],
    explain: `<p><b>There is</b> (there's) + una cosa: There's a park near my house.</p>
<p><b>There are</b> + varias cosas: There are two banks on this street.</p>
<p><b>Pregunta:</b> Is there a bathroom? / Are there any tacos left?</p>
<p><b>Negativo:</b> There isn't any milk. / There aren't any chairs.</p>
<p class="tip">⚠️ Error común: "Have a store here?" ❌ → "<b>Is there</b> a store here?" ✅. Para "hay" nunca uses "have".</p>`,
    easy: `<p>"Hay" en español es una sola palabra, pero en inglés depende de cuántas cosas son:</p>
<p>Una → <b>there is</b>. Varias → <b>there are</b>.</p>
<p>Para preguntar solo cambias el orden: there is → <b>is there</b>?</p>`,
    memo: ['"There is" = "ahí está" → hay uno ahí. "There are" con "are" de plural (you are, they are).', 'Pregunta = voltea las dos palabras: There is → Is there?', 'Describe tu cuarto: "There is a bed, there are two windows..."'],
    examples: [["There's a problem with my order.", 'Hay un problema con mi orden.'], ['Are there any questions?', '¿Hay alguna pregunta?'], ["There aren't any seats left.", 'Ya no hay asientos.']],
    listen: { text: "Sorry, there aren't any tables right now, but there's a twenty minute wait.", q: '¿Qué le dicen?', options: ['Hay que esperar 20 minutos', 'Hay muchas mesas', 'Ya cerraron'], a: 0, note: '"a twenty minute wait" = una espera de 20 minutos.' },
    speak: ['Is there a bathroom here?', 'There are two banks on this street.', "There's a problem."],
    quiz: [
      { q: '___ three people in the car.', options: ['There are', 'There is', 'Have'], a: 0, why: 'Varias personas → there are.' },
      { q: '¿Cómo preguntas "¿Hay un banco cerca?"', options: ['Is there a bank near here?', 'Have a bank near?', 'There is bank near?'], a: 0, why: 'Pregunta: Is there...?' },
      { q: '"There isn\'t any milk" significa:', options: ['No hay leche', 'No es leche', 'Hay poca leche'], a: 0, why: 'isn\'t = no hay.' }
    ]
  },
  {
    id: 'a1-can', level: 'A1', title: 'Can / Can\'t: poder y saber hacer', focus: 'speaking',
    goal: 'Vas a aprender a decir lo que puedes y sabes hacer, a pedir permiso ("Can I...?") y favores ("Can you...?").',
    why: '"Can" es de los verbos más útiles: sirve para pedir, ofrecer, dar permiso y hablar de habilidades.',
    intro: { en: "Can you help me? I can't find my keys anywhere.", es: '¿Me puedes ayudar? No encuentro mis llaves por ningún lado.' },
    vocab: [['can', 'poder / saber', 'ken'], ["can't", 'no poder / no saber', 'kent'], ['Can I...?', '¿Puedo...?', 'kenái'], ['Can you...?', '¿Puedes...?', 'kéniu'], ['drive', 'manejar', 'dráiv'], ['swim', 'nadar', 'suím']],
    explain: `<p><b>can + verbo</b> (sin "to", sin "s"): I <b>can swim</b>. She <b>can drive</b> (no "cans", no "can to").</p>
<p><b>Pedir permiso:</b> <b>Can I</b> use the bathroom?<br><b>Pedir favor:</b> <b>Can you</b> help me?<br><b>Ofrecer:</b> <b>Can I</b> help you?</p>
<p class="tip">🇺🇸 ¡Ojo con la pronunciación! "can" suena corto y débil ("kn"), pero "can't" suena fuerte y largo ("KÉNT"). Así distingues sí de no aunque no oigas la t.</p>`,
    easy: `<p>"Can" es súper fácil porque <b>nunca cambia</b>: I can, you can, he can, they can. Igual para todos.</p>
<p>Solo pon el verbo después: can + swim = puedo nadar / sé nadar.</p>
<p>Y para negar agrégale "'t": can't = no puedo.</p>`,
    memo: ['"Can" es como un comodín: sirve para todos igual, nunca lleva s.', '"Can" débil = sí. "CAN\'T" fuerte = no. El "no" siempre se dice con más fuerza.', 'Di 5 cosas que puedes hacer y 5 que no: "I can cook, I can\'t sing."'],
    examples: [['Can I pay with card?', '¿Puedo pagar con tarjeta?'], ["I can't hear you.", 'No te escucho.'], ['Can you speak slower, please?', '¿Puede hablar más despacio, por favor?']],
    listen: { text: "Sorry, can you say that again? I can't hear you, it's so loud in here.", q: '¿Qué problema tiene?', options: ['No escucha por el ruido', 'No tiene dinero', 'No encuentra el lugar'], a: 0, note: '"it\'s so loud in here" = hay mucho ruido aquí.' },
    speak: ['Can you help me, please?', "I can't hear you.", 'Can you speak slower, please?'],
    quiz: [
      { q: 'She ___ speak English.', options: ['can', 'cans', 'can to'], a: 0, why: '"Can" nunca cambia y va sin "to".' },
      { q: 'Para pedir permiso:', options: ['Can I come in?', 'I can come in?', 'Can come I in?'], a: 0, why: 'Can + I + verbo.' },
      { q: '¿Cómo pides que hablen más lento?', options: ['Can you speak slower, please?', 'Speak slow!', 'You can slow?'], a: 0, why: 'Can you + verbo + please.' }
    ]
  },
  {
    id: 'a1-prepos', level: 'A1', title: 'In, on, at, under, next to (lugares)', focus: 'grammar',
    goal: 'Vas a aprender a decir dónde está algo: en, sobre, debajo, al lado, enfrente, entre.',
    why: 'Buscar cosas, dar direcciones y describir lugares requiere estas palabras todo el tiempo.',
    intro: { en: "Where are my keys? — They're on the table, next to your phone.", es: '¿Dónde están mis llaves? — Están en la mesa, al lado de tu teléfono.' },
    vocab: [['in', 'dentro de', 'in'], ['on', 'sobre / encima', 'on'], ['under', 'debajo', 'ánder'], ['next to', 'al lado de', 'nékst tu'], ['in front of', 'enfrente de', 'in frant ov'], ['between', 'entre', 'bituín']],
    explain: `<p><b>in</b> = adentro: in the box, in the car, in Texas.</p>
<p><b>on</b> = encima, tocando la superficie: on the table, on the wall, on the floor.</p>
<p><b>at</b> = en un punto o lugar específico: at home, at work, at the door, at school.</p>
<p><b>under</b> (debajo) · <b>next to</b> (al lado) · <b>in front of</b> (enfrente) · <b>behind</b> (detrás) · <b>between</b> (entre).</p>
<p class="tip">⚠️ Frases fijas: <b>at</b> home, <b>at</b> work, <b>in</b> bed, <b>on</b> the bus.</p>`,
    easy: `<p>En español "en" sirve para todo: en la caja, en la mesa, en casa. En inglés depende:</p>
<p>¿Está <b>adentro</b>? → in. ¿Está <b>encima</b>? → on. ¿Es un <b>lugar al que vas</b> (casa, trabajo)? → at.</p>
<p>Usa tus manos: una mano cerrada con la otra adentro = in. Una mano sobre la otra = on.</p>`,
    memo: ['IN = adentro (las dos empiezan con "in/aden").', 'ON = encima, ON parece una pelota (O) sobre una mesa (N).', 'Esconde un objeto en tu casa y describe dónde está en inglés.'],
    examples: [["Your phone is under the bed.", 'Tu teléfono está debajo de la cama.'], ["I'm at work right now.", 'Estoy en el trabajo ahorita.'], ['The bank is between the gym and the school.', 'El banco está entre el gimnasio y la escuela.']],
    listen: { text: "The pharmacy? It's right next to the bank, across from the gas station.", q: '¿Dónde está la farmacia?', options: ['Al lado del banco', 'Dentro del banco', 'Detrás de la gasolinera'], a: 0, note: '"across from" = enfrente de (cruzando la calle).' },
    speak: ['The keys are on the table.', "I'm at home.", "It's next to the bank."],
    quiz: [
      { q: 'The cat is ___ the box. (adentro)', options: ['in', 'on', 'at'], a: 0, why: 'Adentro → in.' },
      { q: "I'm ___ work.", options: ['at', 'in', 'on'], a: 0, why: 'Frase fija: at work.' },
      { q: '"Under the bed" significa:', options: ['Debajo de la cama', 'Sobre la cama', 'Al lado de la cama'], a: 0, why: 'under = debajo.' }
    ]
  },
  {
    id: 'a1-continuo', level: 'A1', title: 'Lo que pasa ahorita: presente continuo', focus: 'grammar',
    goal: 'Vas a aprender a decir lo que estás haciendo en este momento: I\'m working, she\'s eating, what are you doing?',
    why: 'Es lo que más se pregunta por mensaje o teléfono: "What are you doing?" (¿qué haces?).',
    intro: { en: "Hey, what are you doing? — Nothing much, I'm just watching TV.", es: 'Oye, ¿qué haces? — Nada, solo estoy viendo la tele.' },
    vocab: [["I'm working", 'estoy trabajando', 'áim uérkin'], ['What are you doing?', '¿Qué estás haciendo?', 'uárayu dúin'], ['right now', 'ahorita', 'ráit náu'], ['eating', 'comiendo', 'írin'], ['driving', 'manejando', 'dráivin'], ['waiting', 'esperando', 'uéirin']],
    explain: `<p><b>am / is / are + verbo-ing</b> = estar + -ando/-iendo.</p>
<ul><li>I<b>'m</b> eat<b>ing</b>. → Estoy comiendo.</li><li>She<b>'s</b> driv<b>ing</b>. → Está manejando.</li><li>They<b>'re</b> wait<b>ing</b>. → Están esperando.</li></ul>
<p><b>Pregunta:</b> <b>Are you</b> working? / What <b>are you</b> doing?</p>
<p>Reglas de -ing: drive → driv<b>ing</b> (se va la e) · run → run<b>ning</b> (se duplica) · play → play<b>ing</b>.</p>
<p class="tip">🇺🇸 Al hablar, la g final casi no suena: "working" → "uérkin", "nothing" → "názin".</p>`,
    easy: `<p>¡Este es igualito al español!</p>
<p>Estoy comiendo = I'm eating.<br><b>Estoy</b> = I'm. <b>-ando/-iendo</b> = -ing.</p>
<p>Solo pon "I'm" + el verbo + "ing" y listo.</p>`,
    memo: ['"-ing" = "-ando/-iendo". Las dos terminaciones "suenan" a movimiento.', 'Cuando hagas algo, nárralo en inglés en tu mente: "I\'m cooking, I\'m washing..."', 'Cuando te escriban "wyd" (what are you doing), responde en inglés.'],
    examples: [["I'm driving, I'll call you later.", 'Estoy manejando, te llamo luego.'], ['What are you guys doing?', '¿Qué están haciendo ustedes?'], ["It's raining.", 'Está lloviendo.']],
    listen: { text: "I can't talk right now, I'm driving. I'm gonna call you back in like ten minutes.", q: '¿Por qué no puede hablar?', options: ['Está manejando', 'Está comiendo', 'Está en una junta'], a: 0, note: '"call you back" = regresarte la llamada.' },
    speak: ['What are you doing?', "I'm working right now.", "It's raining."],
    quiz: [
      { q: 'She ___ cooking.', options: ['is', 'are', 'am'], a: 0, why: 'She → is.' },
      { q: '-ing de "run":', options: ['running', 'runing', 'runeing'], a: 0, why: 'Se duplica la n: running.' },
      { q: '"What are you doing?" significa:', options: ['¿Qué estás haciendo?', '¿Qué haces de trabajo?', '¿Qué hiciste?'], a: 0, why: 'Presente continuo = ahorita.' }
    ]
  },
  {
    id: 'a2-comparar', level: 'A2', title: 'Comparar: bigger, the best', focus: 'grammar',
    goal: 'Vas a aprender a comparar cosas (más grande que, más caro que) y a decir cuál es el mejor o el peor.',
    why: 'Comparas todo el tiempo: precios, lugares, trabajos, comida. "Better" y "the best" son súper usados.',
    intro: { en: "This place is way cheaper than the other one, and the tacos are the best in town.", es: 'Este lugar es mucho más barato que el otro, y los tacos son los mejores de la ciudad.' },
    vocab: [['bigger than', 'más grande que', 'bíguer dan'], ['more expensive', 'más caro', 'mor ekspénsiv'], ['the best', 'el mejor', 'de best'], ['the worst', 'el peor', 'de uérst'], ['better', 'mejor', 'bérer'], ['as ... as', 'tan ... como', 'as ... as']],
    explain: `<p><b>Palabras cortas:</b> + <b>-er than</b> → cheap<b>er than</b>, big<b>ger than</b>, eas<b>ier than</b>.</p>
<p><b>Palabras largas:</b> <b>more ... than</b> → <b>more</b> expensive <b>than</b>, <b>more</b> beautiful.</p>
<p><b>El más:</b> <b>the</b> + -est / <b>the most</b> → <b>the</b> cheap<b>est</b>, <b>the most</b> expensive.</p>
<p><b>Irregulares:</b> good → <b>better</b> → <b>the best</b> · bad → <b>worse</b> → <b>the worst</b>.</p>
<p><b>Igualdad:</b> <b>as</b> tall <b>as</b> me (tan alto como yo).</p>
<p class="tip">🇺🇸 "way" = mucho: "way better" (muchísimo mejor), "way more expensive".</p>`,
    easy: `<p>Si la palabra es corta (1 sílaba), le pegas <b>-er</b>: big → bigger. Si es larga, pones <b>more</b> antes: more expensive.</p>
<p>Es como en español: "más caro". En inglés las cortas "se pegan" el "más" al final.</p>`,
    memo: ['Corta = se pega -er. Larga = no cabe, se pone "more" aparte.', 'good-better-best: las tres empiezan con letras "fuertes" y son las más usadas. Apréndelas como trío.', 'Compara 3 cosas de tu vida: "My phone is better than..."'],
    examples: [['My new job is better than my old one.', 'Mi nuevo trabajo es mejor que el anterior.'], ["This is the worst traffic ever.", 'Este es el peor tráfico de la historia.'], ["He's as tall as his dad.", 'Es tan alto como su papá.']],
    listen: { text: "Honestly, Houston's way bigger than Dallas, but I think Austin's the coolest city in Texas.", q: '¿Qué ciudad le parece la más padre?', options: ['Austin', 'Houston', 'Dallas'], a: 0, note: '"the coolest" = la más padre/genial.' },
    speak: ['This one is cheaper.', 'It was the best day ever.', 'She is taller than me.'],
    quiz: [
      { q: 'Comparativo de "good":', options: ['better', 'gooder', 'more good'], a: 0, why: 'Irregular: good → better.' },
      { q: 'This phone is ___ than that one.', options: ['more expensive', 'expensiver', 'most expensive'], a: 0, why: 'Palabra larga → more.' },
      { q: '"The worst" significa:', options: ['El peor', 'El mejor', 'Peor que'], a: 0, why: 'bad → worse → the worst.' }
    ]
  },
  {
    id: 'a2-frecuencia', level: 'A2', title: 'Qué tan seguido: always, never, sometimes', focus: 'vocab',
    goal: 'Vas a aprender a decir qué tan seguido haces algo: siempre, normalmente, a veces, casi nunca, nunca.',
    why: 'Te preguntan "How often do you...?" en entrevistas, con el doctor y en conversaciones normales.',
    intro: { en: "How often do you work out? — Like three times a week, but I never go on Sundays.", es: '¿Qué tan seguido haces ejercicio? — Como tres veces por semana, pero nunca voy los domingos.' },
    vocab: [['always', 'siempre', 'ólueis'], ['usually', 'normalmente', 'iúshuali'], ['sometimes', 'a veces', 'sámtaims'], ['rarely', 'casi nunca', 'rérli'], ['never', 'nunca', 'néver'], ['How often...?', '¿Qué tan seguido...?', 'jáu ófen']],
    explain: `<p>De más a menos: <b>always</b> (100%) → <b>usually</b> (80%) → <b>often</b> (60%) → <b>sometimes</b> (40%) → <b>rarely</b> (10%) → <b>never</b> (0%).</p>
<p><b>Posición:</b> antes del verbo normal, pero después de "to be":</p>
<ul><li>I <b>always</b> drink coffee. (antes de drink)</li><li>She's <b>never</b> late. (después de is)</li></ul>
<p><b>Con números:</b> once a week (una vez por semana), twice a month (dos veces al mes), three times a day.</p>`,
    easy: `<p>Imagina una escalera del 100% al 0%: always, usually, sometimes, never.</p>
<p>Va <b>pegada antes del verbo</b>: I always eat, I never smoke. Igual que en español: "Yo siempre como".</p>`,
    memo: ['"Never" = "ne-ver" = "no ver" → nunca lo vas a ver.', '"Once" = una vez (no "once" de 11). Twice = dos veces.', 'Escribe tu rutina con cada palabra: "I always..., I usually..., I never..."'],
    examples: [['I usually wake up at six.', 'Normalmente me despierto a las seis.'], ["He's always late.", 'Él siempre llega tarde.'], ['I go to the gym twice a week.', 'Voy al gimnasio dos veces por semana.']],
    listen: { text: "I hardly ever eat out, maybe once a month. I usually just cook at home.", q: '¿Qué tan seguido come fuera?', options: ['Una vez al mes', 'Todos los días', 'Una vez por semana'], a: 0, note: '"hardly ever" = casi nunca. "eat out" = comer fuera.' },
    speak: ['I always drink coffee in the morning.', 'How often do you exercise?', "I'm never late."],
    quiz: [
      { q: '¿Dónde va "always"? "I ___ eat ___ breakfast."', options: ['I always eat breakfast.', 'I eat breakfast always.', 'Always I eat always.'], a: 0, why: 'Antes del verbo principal.' },
      { q: '"Twice a week" significa:', options: ['Dos veces por semana', 'Dos semanas', 'Cada dos días'], a: 0, why: 'twice = dos veces.' },
      { q: '"Rarely" significa:', options: ['Casi nunca', 'Raramente bien', 'Siempre'], a: 0, why: 'rarely = muy pocas veces.' }
    ]
  },
  {
    id: 'a2-cuantos', level: 'A2', title: 'Much, many, some, any (cantidades)', focus: 'grammar',
    goal: 'Vas a aprender a hablar de cantidades: cuánto, cuántos, algunos, nada, mucho, poco.',
    why: 'Para comprar, cocinar, preguntar precios o decir que no tienes algo: "How much...?", "How many...?".',
    intro: { en: "How many people are coming? We don't have much food, but there's some pizza left.", es: '¿Cuántas personas vienen? No tenemos mucha comida, pero queda algo de pizza.' },
    vocab: [['How much...?', '¿Cuánto...?', 'jáu mach'], ['How many...?', '¿Cuántos...?', 'jáu méni'], ['a lot of', 'mucho / muchos', 'alórov'], ['a little / a few', 'un poco / unos pocos', 'a lírol / a fiú'], ['some', 'algo de / algunos', 'sam'], ['any', 'nada de / ningún', 'éni']],
    explain: `<p><b>Contables</b> (se pueden contar: apples, people, dollars) → <b>many</b>, <b>a few</b>, How <b>many</b>?</p>
<p><b>Incontables</b> (no se cuentan uno por uno: water, money, time, rice) → <b>much</b>, <b>a little</b>, How <b>much</b>?</p>
<p><b>A lot of</b> sirve para los dos: a lot of people, a lot of money.</p>
<p><b>some</b> en frases positivas: I have some money.<br><b>any</b> en negativas y preguntas: I don't have any money. Do you have any kids?</p>
<p class="tip">💡 "How much is it?" = ¿cuánto cuesta? (porque el dinero es incontable).</p>`,
    easy: `<p>Pregúntate: ¿lo puedo contar con los dedos? (1 manzana, 2 manzanas) → <b>many</b>.</p>
<p>¿No se puede contar? (agua, dinero, tiempo) → <b>much</b>.</p>
<p>¿No estás seguro? Usa <b>a lot of</b>, que sirve para todo.</p>`,
    memo: ['"Many" tiene una "y" como "muchos dedos" que cuentan. "Much" es como "mucho" de algo que no se cuenta.', '"A lot of" = el comodín: siempre funciona.', 'Revisa tu refri: "There\'s a lot of milk, there aren\'t many eggs..."'],
    examples: [["How much does it cost?", '¿Cuánto cuesta?'], ["I don't have any time today.", 'No tengo nada de tiempo hoy.'], ['A few friends are coming over.', 'Vienen unos cuantos amigos.']],
    listen: { text: "Do we need anything from the store? We're out of eggs and there's only a little milk left.", q: '¿Qué hace falta?', options: ['Huevos y leche', 'Pan y café', 'Nada'], a: 0, note: '"we\'re out of" = se nos acabó. "a little" = un poco.' },
    speak: ['How much is it?', 'How many kids do you have?', "I don't have any money."],
    quiz: [
      { q: 'How ___ water do you drink?', options: ['much', 'many', 'any'], a: 0, why: 'Water no se cuenta → much.' },
      { q: 'How ___ brothers do you have?', options: ['many', 'much', 'some'], a: 0, why: 'Hermanos se cuentan → many.' },
      { q: "I don't have ___ questions.", options: ['any', 'some', 'many of'], a: 0, why: 'Negativo → any.' }
    ]
  },
  {
    id: 'a2-direcciones', level: 'A2', title: 'Pedir y dar direcciones', focus: 'listening',
    goal: 'Vas a aprender a preguntar cómo llegar a un lugar y a entender las indicaciones: turn left, go straight, it\'s on your right.',
    why: 'Aunque uses GPS, muchas veces tendrás que preguntar a alguien, y te van a responder rápido.',
    intro: { en: "Excuse me, how do I get to the bus station? — Go straight two blocks, then turn left.", es: 'Disculpe, ¿cómo llego a la estación de autobuses? — Siga derecho dos cuadras y luego dé vuelta a la izquierda.' },
    vocab: [['How do I get to...?', '¿Cómo llego a...?', 'jáu du ai guét tu'], ['go straight', 'sigue derecho', 'góu stréit'], ['turn left / right', 'da vuelta a la izquierda / derecha', 'tern left / ráit'], ['block', 'cuadra', 'blok'], ['corner', 'esquina', 'kórner'], ["It's on your right", 'Está a tu derecha', 'its on iur ráit']],
    explain: `<p><b>Preguntar:</b> Excuse me, how do I get to...? / Where's the nearest...? / Is it far?</p>
<p><b>Indicaciones:</b></p>
<ul><li><b>Go straight</b> (sigue derecho) · <b>Turn left/right</b> (da vuelta)</li><li><b>at the light</b> (en el semáforo) · <b>at the corner</b> (en la esquina)</li><li><b>two blocks</b> (dos cuadras) · <b>past the bank</b> (pasando el banco)</li><li><b>It's on your left</b> (está a tu izquierda) · <b>across the street</b> (cruzando la calle)</li></ul>
<p class="tip">💡 Si no entiendes, di: "Sorry, could you show me on the map?" (¿me lo enseña en el mapa?).</p>`,
    easy: `<p>Solo necesitas entender 4 cosas: <b>straight</b> (derecho), <b>left</b> (izquierda), <b>right</b> (derecha) y <b>blocks</b> (cuadras).</p>
<p>Truco para left: con tu mano izquierda, el pulgar y el índice forman una "L" de Left.</p>`,
    memo: ['Mano izquierda con pulgar e índice = L de LEFT.', '"Right" significa derecha y también "correcto": la derecha es la correcta.', 'Cuando camines, narra tu ruta en inglés: "Now I turn left..."'],
    examples: [["Turn right at the light.", 'Da vuelta a la derecha en el semáforo.'], ["It's across the street from the bank.", 'Está enfrente del banco, cruzando la calle.'], ['Is it within walking distance?', '¿Se puede llegar caminando?']],
    listen: { text: "Okay, so go straight till you hit the light, make a right, and it's gonna be on your left, right past the Walgreens.", q: '¿Dónde está el lugar al final?', options: ['A la izquierda, pasando Walgreens', 'A la derecha del semáforo', 'Antes de Walgreens'], a: 0, note: '"till you hit the light" = hasta que llegues al semáforo. "make a right" = da vuelta a la derecha.' },
    speak: ['Excuse me, how do I get to the hospital?', 'Turn left at the corner.', 'Is it far from here?'],
    quiz: [
      { q: '"Go straight" significa:', options: ['Sigue derecho', 'Ve rápido', 'Da vuelta'], a: 0, why: 'straight = recto.' },
      { q: '"Make a right" significa:', options: ['Da vuelta a la derecha', 'Hazlo bien', 'Ve a la izquierda'], a: 0, why: 'Forma coloquial de "turn right".' },
      { q: '"Two blocks" significa:', options: ['Dos cuadras', 'Dos bloques de hielo', 'Dos semáforos'], a: 0, why: 'block = cuadra.' }
    ]
  },
  {
    id: 'a2-doctor', level: 'A2', title: 'En el doctor: cómo te sientes', focus: 'vocab',
    goal: 'Vas a aprender a explicar qué te duele, tus síntomas y entender las preguntas del doctor o la farmacia.',
    why: 'Es de las situaciones más importantes. Explicar bien lo que sientes puede ser urgente.',
    intro: { en: "So what brings you in today? — I've had a headache and a fever since yesterday.", es: '¿Qué lo trae por aquí hoy? — Tengo dolor de cabeza y fiebre desde ayer.' },
    vocab: [['headache', 'dolor de cabeza', 'jédeik'], ['stomachache', 'dolor de estómago', 'stámakeik'], ['fever', 'fiebre', 'fíver'], ['sore throat', 'dolor de garganta', 'sor zróut'], ['My ___ hurts', 'Me duele el/la ___', 'mai ___ jérts'], ['appointment', 'cita', 'apóintment']],
    explain: `<p><b>Qué te duele:</b> My <b>back hurts</b>. (me duele la espalda) · My <b>knee hurts</b>. (la rodilla)</p>
<p><b>Con "have":</b> I <b>have a</b> headache / fever / cough (tos) / cold (resfriado).</p>
<p><b>Cómo te sientes:</b> I feel <b>sick</b> (me siento mal) · <b>dizzy</b> (mareado) · <b>tired</b> (cansado).</p>
<p><b>Preguntas del doctor:</b> "What brings you in?" (¿qué lo trae?) · "How long have you had it?" (¿desde cuándo?) · "Are you allergic to anything?" (¿es alérgico a algo?) · "Are you taking any medication?" (¿toma algún medicamento?)</p>
<p class="tip">🚨 Emergencia en EE. UU.: llama al <b>911</b> y di "I need an ambulance".</p>`,
    easy: `<p>Fórmula 1: <b>My</b> + parte del cuerpo + <b>hurts</b>. → My head hurts (me duele la cabeza).</p>
<p>Fórmula 2: <b>I have a</b> + enfermedad. → I have a fever (tengo fiebre).</p>
<p>Con esas dos fórmulas puedes explicar casi cualquier cosa.</p>`,
    memo: ['"-ache" (eik) = dolor: head-ache, stomach-ache, tooth-ache, back-ache.', '"Hurts" suena a "jerks"... imagina un jalón que duele.', 'Toca cada parte de tu cuerpo y di su nombre en inglés.'],
    examples: [["My stomach hurts.", 'Me duele el estómago.'], ["I'm allergic to penicillin.", 'Soy alérgico a la penicilina.'], ["I'd like to make an appointment.", 'Quisiera hacer una cita.']],
    listen: { text: "Okay, take one pill every eight hours with food, and if the fever doesn't go down in two days, come back.", q: '¿Cada cuánto tiene que tomar la pastilla?', options: ['Cada 8 horas', 'Cada 2 horas', 'Una vez al día'], a: 0, note: '"go down" = bajar. "come back" = regresar.' },
    speak: ['I have a headache.', 'My back hurts.', "I'd like to make an appointment."],
    quiz: [
      { q: '"Sore throat" es:', options: ['Dolor de garganta', 'Dolor de muela', 'Tos'], a: 0, why: 'throat = garganta.' },
      { q: 'Me duele la rodilla:', options: ['My knee hurts.', 'I hurt knee.', 'My knee is hurt me.'], a: 0, why: 'My + parte + hurts.' },
      { q: '"What brings you in?" pregunta:', options: ['¿Qué lo trae por aquí?', '¿Qué trajo?', '¿Quién lo trajo?'], a: 0, why: 'Pregunta típica del doctor.' }
    ]
  }
];

// Orden final: las lecciones nuevas se intercalan con las originales.
const LESSON_ORDER = [
  'a1-saludos', 'a1-abc', 'a1-tobe', 'a1-numeros', 'a1-articulos', 'a1-this', 'a1-familia', 'a1-presente', 'a1-hora', 'a1-thereis', 'a1-can', 'a1-prepos', 'a1-continuo',
  'a2-pasado', 'a2-frecuencia', 'a2-futuro', 'a2-comparar', 'a2-cuantos', 'a2-pedir', 'a2-direcciones', 'a2-doctor',
  'b1-presperf', 'b1-phrasal', 'b1-condicional', 'b2-reducciones', 'b2-modales', 'b2-slang', 'c1-idioms', 'c1-matices', 'c1-opinar'
];
(function mergeLessons() {
  const all = LESSONS.concat(EXTRA_LESSONS);
  all.forEach(l => {
    const h = LESSON_HELP[l.id];
    if (h) { l.easy = l.easy || h.easy; l.memo = l.memo || h.memo; }
    l.vocab = l.vocab.map(v => v[2] ? v : [v[0], v[1], PRON[v[0]] || '']);
  });
  all.sort((a, b) => {
    const ia = LESSON_ORDER.indexOf(a.id), ib = LESSON_ORDER.indexOf(b.id);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
  });
  LESSONS.length = 0; all.forEach(l => LESSONS.push(l));
})();

// ---------- GUÍA DE DUDAS ----------
// Explicaciones detalladas para quien tenga dudas. cat: términos | confusiones | pronunciación | consejos
const GUIDE = [
  { cat: 'Términos', t: '¿Qué es un sujeto?', b: `<p>Es <b>quién hace la acción</b>. En "Ana come tacos", el sujeto es Ana.</p><p>En inglés <b>el sujeto siempre se dice</b>. En español puedes decir "Como tacos", pero en inglés tienes que decir "<b>I</b> eat tacos". Nunca solo "Eat tacos".</p><p>Sujetos: I (yo), you (tú/usted/ustedes), he (él), she (ella), it (eso, cosas y animales), we (nosotros), they (ellos).</p>` },
  { cat: 'Términos', t: '¿Qué es un verbo?', b: `<p>Es la <b>acción</b>: comer (eat), correr (run), ser/estar (be), tener (have).</p><p>En inglés los verbos casi no cambian. En español: yo como, tú comes, él come, nosotros comemos... En inglés: I eat, you eat, he eat<b>s</b>, we eat. ¡Solo cambia con he/she/it!</p>` },
  { cat: 'Términos', t: '¿Qué es un verbo auxiliar (do, does, did)?', b: `<p>Es un verbo "ayudante" que no significa nada solo, pero sirve para <b>hacer preguntas y negar</b>.</p><p>Piensa que el inglés no tiene signos ¿? al inicio. En su lugar pone <b>Do</b>: "<b>Do</b> you like pizza?" = "¿Te gusta la pizza?"</p><p><b>do</b> (presente), <b>does</b> (presente con he/she/it), <b>did</b> (pasado). Negativos: don't, doesn't, didn't.</p>` },
  { cat: 'Términos', t: '¿Qué es una contracción (I\'m, don\'t)?', b: `<p>Es cuando <b>se juntan dos palabras</b> y se reemplaza una letra con un apóstrofe ('):</p><p>I am → I'm · do not → don't · it is → it's · I will → I'll · I would → I'd</p><p>Los nativos las usan casi siempre al hablar. Sin contracciones suenas como robot o muy formal.</p>` },
  { cat: 'Términos', t: '¿Qué es el participio (been, done, eaten)?', b: `<p>Es la forma del verbo que va después de <b>have</b>, como en español "-ado/-ido": comido, visto, hecho.</p><p>Regulares: igual que el pasado, con -ed (worked, played).<br>Irregulares: se aprenden: be → <b>been</b>, do → <b>done</b>, eat → <b>eaten</b>, see → <b>seen</b>, go → <b>gone</b>, write → <b>written</b>.</p><p>Se usa en el presente perfecto: "I have <b>eaten</b>" = "He comido".</p>` },
  { cat: 'Términos', t: '¿Qué es un phrasal verb?', b: `<p>Es un verbo + una palabrita (up, out, on, off, down...) que juntos tienen otro significado:</p><p>look = mirar → look <b>for</b> = buscar → look <b>after</b> = cuidar.</p><p>No los traduzcas palabra por palabra: apréndelos como una sola palabra. Los nativos los usan muchísimo, sobre todo en canciones y conversación.</p>` },
  { cat: 'Términos', t: '¿Qué es un adjetivo y dónde va?', b: `<p>Es la palabra que <b>describe</b>: grande (big), rojo (red), bonito (pretty).</p><p>En inglés <b>va antes</b> de la cosa (al revés que en español): carro rojo → <b>red</b> car. Casa grande → <b>big</b> house.</p><p>Y nunca lleva plural: "red cars", no "reds cars".</p>` },
  { cat: 'Confusiones', t: 'Do vs. Does', b: `<p><b>Does</b> solo con <b>he, she, it</b> (o un nombre: Ana, my dad). <b>Do</b> con todos los demás.</p><p>Do you work? · Do they work? · <b>Does</b> she work? · <b>Does</b> your mom work?</p><p>Recuerda: después de "does" el verbo va sin s: Does she work<s>s</s>?</p>` },
  { cat: 'Confusiones', t: 'In / On / At', b: `<p><b>Tiempo:</b> in (meses, años: in May) · on (días: on Monday) · at (horas: at 3pm).</p><p><b>Lugar:</b> in (adentro: in the car) · on (encima: on the table) · at (punto específico: at home, at work).</p><p>Imagina una pirámide: IN es lo más grande, ON en medio, AT lo más exacto.</p>` },
  { cat: 'Confusiones', t: 'Say vs. Tell', b: `<p>Los dos son "decir", pero:</p><p><b>tell</b> lleva a quién: tell <b>me</b>, tell <b>him</b> the truth.<br><b>say</b> no lleva persona directo: say hello, say something, "What did you say?"</p><p>Truco: TELL = a alguien. SAY = algo.</p>` },
  { cat: 'Confusiones', t: 'Make vs. Do', b: `<p>Los dos son "hacer":</p><p><b>make</b> = crear/fabricar algo: make dinner, make a cake, make money, make a mistake, make a decision.</p><p><b>do</b> = realizar actividades/tareas: do homework, do the dishes, do your job, do exercise, do me a favor.</p>` },
  { cat: 'Confusiones', t: 'His vs. Her (su)', b: `<p>En español "su" es para todos. En inglés depende <b>del dueño</b>, no de la cosa:</p><p>Pedro y su hermana → Pedro and <b>his</b> sister (dueño: Pedro → his).<br>Ana y su hermano → Ana and <b>her</b> brother (dueña: Ana → her).</p>` },
  { cat: 'Confusiones', t: 'Much vs. Many', b: `<p><b>many</b> con cosas que se cuentan (people, dollars, cars).<br><b>much</b> con cosas que no se cuentan (water, money, time).</p><p>¿No sabes? Usa <b>a lot of</b>, sirve para los dos.</p>` },
  { cat: 'Confusiones', t: 'Your vs. You\'re · Its vs. It\'s · Their vs. They\'re', b: `<p>Suenan igual pero se escriben distinto:</p><p><b>your</b> = tu (your car) · <b>you're</b> = you are (you're nice)<br><b>its</b> = su (de una cosa) · <b>it's</b> = it is<br><b>their</b> = su (de ellos) · <b>they're</b> = they are · <b>there</b> = allí</p><p>Truco: si puedes cambiarlo por "you are / it is / they are", lleva apóstrofe.</p>` },
  { cat: 'Confusiones', t: 'For vs. Since', b: `<p><b>for</b> + cantidad de tiempo: for 2 years, for a week.<br><b>since</b> + momento de inicio: since 2019, since Monday, since I was a kid.</p><p>I've lived here <b>for</b> 5 years = I've lived here <b>since</b> 2020.</p>` },
  { cat: 'Confusiones', t: 'Will vs. Going to', b: `<p><b>going to (gonna)</b> = plan que ya tenías: I'm going to visit my mom on Sunday.</p><p><b>will</b> = decisión del momento o promesa: "The phone's ringing!" — "I'll get it!" · "I'll call you, I promise."</p>` },
  { cat: 'Confusiones', t: 'Then vs. Than', b: `<p><b>than</b> = que (para comparar): bigger <b>than</b> me.<br><b>then</b> = entonces / luego: first eat, <b>then</b> sleep.</p>` },
  { cat: 'Confusiones', t: 'Falsos amigos (palabras engañosas)', b: `<p>Parecen español pero significan otra cosa:</p><p><b>embarrassed</b> = avergonzado (no embarazada → pregnant)<br><b>actually</b> = en realidad (no actualmente → currently)<br><b>library</b> = biblioteca (no librería → bookstore)<br><b>parents</b> = papás (no parientes → relatives)<br><b>exit</b> = salida (no éxito → success)<br><b>carpet</b> = alfombra (no carpeta → folder)<br><b>sensible</b> = sensato (no sensible → sensitive)<br><b>realize</b> = darse cuenta (no realizar → carry out)</p>` },
  { cat: 'Pronunciación', t: '¿Por qué no entiendo cuando hablan rápido?', b: `<p>Porque en inglés las palabras <b>se pegan</b> y las pequeñas casi desaparecen:</p><p>"What do you want to do?" suena "<b>Whaddaya wanna do?</b>"</p><p>No es que hablen "mal": así es el inglés natural. La solución es entrenar el oído con frases cortas, primero lento y luego rápido. Usa la sección <b>⚡ Oído</b> todos los días 5 minutos.</p>` },
  { cat: 'Pronunciación', t: 'La terminación -ed (worked, wanted, played)', b: `<p>Tiene 3 sonidos:</p><p><b>"t"</b> después de sonidos sordos (k, p, s, sh, ch, f): worked (uérkt), stopped (stopt), washed (uosht).<br><b>"id"</b> después de t o d: wanted (uántid), needed (nídid).<br><b>"d"</b> en los demás: played (pléid), called (kold).</p><p>Error común: decir "uor-ked" con dos sílabas. ¡Worked es una sola sílaba!</p>` },
  { cat: 'Pronunciación', t: 'El sonido "th"', b: `<p>No existe en español de Latinoamérica. Pon <b>la punta de la lengua entre los dientes</b> y sopla:</p><p><b>think, three, thanks</b> → sonido suave como la "z" de España.<br><b>the, this, that, mother</b> → igual pero vibrando, como una "d" suave.</p><p>Si dices "tank you" en vez de "thank you" te entienden, pero practica frente al espejo.</p>` },
  { cat: 'Pronunciación', t: 'La "t" que suena como "r" (water, better)', b: `<p>En inglés de EE. UU., cuando la t está <b>entre dos vocales</b>, suena como una r suave del español:</p><p>water → "uára" · better → "bérer" · party → "pári" · a lot of → "alárov" · what are you → "uáraiu"</p><p>Si lo practicas, sonarás mucho más americano.</p>` },
  { cat: 'Consejos', t: 'Me cuesta mucho memorizar, ¿qué hago?', b: `<p>Es normal: nadie memoriza leyendo una vez. Estos métodos están comprobados:</p><p><b>1. Repetición espaciada:</b> repasa una palabra hoy, mañana, en 3 días, en una semana. La sección <b>🧠 Memoria</b> lo hace por ti.</p><p><b>2. Dilo en voz alta:</b> se recuerda mucho mejor lo que dices que lo que lees.</p><p><b>3. Imagen ridícula:</b> "under the weather" (enfermo) → imagínate debajo de una nube lloviendo.</p><p><b>4. Úsalo en tu vida:</b> haz una frase con tu familia o tu trabajo.</p><p><b>5. Poco y diario:</b> 10 minutos diarios valen más que 2 horas el domingo.</p>` },
  { cat: 'Consejos', t: 'Me da pena hablar', b: `<p>A todos nos pasa. Recuerda:</p><p>• Los estadounidenses están acostumbrados a escuchar acentos. Nadie espera que hables perfecto.<br>• Un error no es un fracaso: es información para mejorar.<br>• Empieza hablando con Jake aquí, donde nadie te escucha. Cuando la frase te salga 5 veces aquí, úsala en la vida real.<br>• Frases salvavidas: "Sorry, my English isn't perfect", "Can you say that again?", "Can you speak slower, please?"</p>` },
  { cat: 'Consejos', t: '¿Cómo practico fuera de la app?', b: `<p>• Pon tu celular en inglés.<br>• Ve series que ya viste en español, ahora en inglés con subtítulos en inglés.<br>• Escucha canciones y usa la sección <b>🎵 Canciones</b>.<br>• Narra lo que haces en inglés en tu mente: "I'm cooking, now I'm washing the dishes".<br>• Escribe tu lista del súper en inglés.</p>` }
];

// ---------- TÉCNICAS PARA MEMORIZAR ----------
const MEMORY_TIPS = [
  { icon: '🔁', t: 'Repaso espaciado', d: 'Repasas justo cuando estás por olvidar. Las tarjetas que te sabes aparecen cada vez menos; las difíciles, más seguido.' },
  { icon: '🗣️', t: 'Dilo en voz alta', d: 'Escucha la palabra, repítela y úsala en una frase tuya. El cerebro guarda mejor lo que dices.' },
  { icon: '🎨', t: 'Imagen ridícula', d: 'Imagina una escena loca con la palabra. Entre más rara, mejor se queda.' },
  { icon: '⏱️', t: 'Poco y diario', d: '10 tarjetas al día son mejores que 100 un solo día.' }
];

// ---------- EXPRESIONES QUE SE DETECTAN EN CANCIONES ----------
// Verbos irregulares para reconocer phrasal verbs en cualquier tiempo
const IRREG = {
  give: ['gave', 'given'], get: ['got', 'gotten'], take: ['took', 'taken'], come: ['came'], go: ['went', 'gone'], run: ['ran'], fall: ['fell', 'fallen'],
  break: ['broke', 'broken'], hold: ['held'], let: ['let'], make: ['made'], find: ['found'], bring: ['brought'], put: ['put'], set: ['set'], keep: ['kept'],
  leave: ['left'], stand: ['stood'], think: ['thought'], wake: ['woke', 'woken'], grow: ['grew', 'grown'], throw: ['threw', 'thrown'], show: ['showed', 'shown'],
  tear: ['tore', 'torn'], shut: ['shut'], light: ['lit'], hang: ['hung'], sit: ['sat'], feel: ['felt'], cut: ['cut'], lose: ['lost'], say: ['said'], tell: ['told'], see: ['saw', 'seen'], know: ['knew', 'known'], drive: ['drove', 'driven'], write: ['wrote', 'written'], fight: ['fought'], burn: ['burned', 'burnt'], dream: ['dreamed', 'dreamt'], catch: ['caught']
};
const DOUBLE = ['run', 'get', 'put', 'set', 'shut', 'sit', 'cut', 'stop', 'drop', 'let', 'hit'];
function verbForms(v) {
  const f = new Set([v]);
  f.add(/(s|sh|ch|x|o)$/.test(v) ? v + 'es' : /[^aeiou]y$/.test(v) ? v.slice(0, -1) + 'ies' : v + 's');
  if (DOUBLE.includes(v)) f.add(v + v.slice(-1) + 'ing');
  else if (/[^e]e$/.test(v)) f.add(v.slice(0, -1) + 'ing');
  else f.add(v + 'ing');
  f.add([...f].find(x => x.endsWith('ing')).replace(/ing$/, "in'"));
  if (IRREG[v]) IRREG[v].forEach(x => f.add(x));
  else if (/e$/.test(v)) f.add(v + 'd');
  else if (/[^aeiou]y$/.test(v)) f.add(v.slice(0, -1) + 'ied');
  else if (DOUBLE.includes(v)) f.add(v + v.slice(-1) + 'ed');
  else f.add(v + 'ed');
  return [...f];
}

// type: phrasal | reduccion | slang | modismo
// k: la expresión base. es: significado. w: (opcional) palabras exactas a buscar
const EXPRESSIONS = [
  // Phrasal verbs muy comunes en canciones
  ...[
    ['give up', 'rendirse / dejar algo'], ['give in', 'ceder, dejarse vencer'], ['let go', 'soltar, dejar ir'], ['let down', 'decepcionar, fallarle a alguien'], ['let in', 'dejar entrar'],
    ['hold on', 'aguantar, esperar, sujetarse'], ['hold back', 'contenerse, reprimirse'], ['move on', 'seguir adelante, superar'], ['come back', 'regresar'], ['come on', '¡vamos! / ¡ándale!'],
    ['come over', 'venir (a tu casa)'], ['come true', 'hacerse realidad'], ['go away', 'irse, desaparecer'], ['go on', 'continuar, seguir'], ['go back', 'regresar'],
    ['run away', 'huir, escaparse'], ['run out', 'acabarse'], ['fall apart', 'derrumbarse, desmoronarse'], ['fall down', 'caerse'], ['fall for', 'enamorarse de / caer en un engaño'],
    ['break down', 'quebrarse emocionalmente / descomponerse'], ['break up', 'terminar una relación'], ['break free', 'liberarse'], ['get over', 'superar (a alguien o algo)'], ['get up', 'levantarse'],
    ['get away', 'escaparse'], ['get back', 'regresar / recuperar'], ['get through', 'superar algo difícil'], ['get by', 'arreglárselas'], ['take off', 'despegar / quitarse (ropa) / irse'],
    ['take back', 'retractarse / recuperar'], ['take over', 'tomar el control'], ['turn around', 'darse la vuelta'], ['turn up', 'subir (el volumen) / aparecer / ponerse fiestero'], ['turn down', 'bajar (volumen) / rechazar'],
    ['turn off', 'apagar'], ['turn on', 'encender / excitar'], ['look up', 'mirar hacia arriba / buscar información'], ['look for', 'buscar'], ['look back', 'mirar atrás, recordar'],
    ['pick up', 'recoger / contestar el teléfono'], ['wake up', 'despertar(se)'], ['grow up', 'crecer, madurar'], ['show up', 'aparecer, llegar'], ['work out', 'hacer ejercicio / salir bien / resolver'],
    ['figure out', 'averiguar, entender'], ['find out', 'descubrir, enterarse'], ['carry on', 'seguir adelante'], ['hang on', 'esperar, aguantar'], ['hang out', 'pasar el rato'],
    ['calm down', 'calmarse'], ['slow down', 'ir más despacio'], ['shut up', 'callarse'], ['light up', 'iluminar(se)'], ['stand up', 'ponerse de pie / defender'],
    ['stand by', 'apoyar, estar al lado de alguien'], ['settle down', 'sentar cabeza / calmarse'], ['tear apart', 'destrozar, separar'], ['burn out', 'agotarse, quemarse'], ['throw away', 'tirar, desperdiciar'],
    ['keep up', 'mantener el ritmo'], ['bring back', 'traer de vuelta / recordar'], ['make up', 'reconciliarse / inventar / maquillar'], ['think about', 'pensar en'], ['dream about', 'soñar con'],
    ['cheer up', 'animar(se)'], ['mess up', 'arruinar, equivocarse feo'], ['open up', 'abrirse (emocionalmente)'], ['shine on', 'seguir brillando'], ['fade away', 'desvanecerse'],
    ['reach out', 'buscar / contactar a alguien'], ['walk away', 'irse, alejarse'], ['catch up', 'ponerse al día / alcanzar'], ['feel like', 'tener ganas de / sentirse como']
  ].map(([k, es]) => ({ k, es, type: 'phrasal' })),
  // Reducciones
  ...[
    ['gonna', 'going to (voy a / vas a)'], ['wanna', 'want to / want a (quiero / quieres)'], ['gotta', 'have got to (tengo que)'], ["ain't", "am not / isn't / haven't (no es, no tengo) — muy informal"],
    ["'cause", 'because (porque)'], ['cuz', 'because (porque)'], ['cause', 'because (porque), cuando va sin apóstrofe en letras'], ['ya', 'you (tú)'], ['tryna', 'trying to (tratando de)'], ['lemme', 'let me (déjame)'],
    ['gimme', 'give me (dame)'], ['kinda', 'kind of (como que, algo)'], ['sorta', 'sort of (más o menos)'], ['outta', 'out of (fuera de)'], ['dunno', "don't know (no sé)"],
    ["y'all", 'you all (ustedes)'], ['imma', "I'm going to (voy a)"], ["i'ma", "I'm going to (voy a)"], ['finna', 'fixing to (a punto de / voy a)'], ["'til", 'until (hasta)'], ['till', 'until (hasta)'],
    ["'em", 'them (los, las, a ellos)'], ["c'mon", 'come on (¡vamos!)'], ['whatcha', 'what are you / what have you'], ['gotcha', 'got you (te entiendo / te atrapé)'], ['wassup', "what's up (¿qué onda?)"],
    ['shoulda', 'should have (debí haber)'], ['coulda', 'could have (pude haber)'], ['woulda', 'would have (habría)'], ['lotta', 'lot of (mucho)'], ['hafta', 'have to (tener que)'], ['oughta', 'ought to (debería)'],
    ['nah', 'no'], ['yeah', 'yes (sí)'], ['yo', '¡oye!'], ["ol'", 'old (viejo)'], ["'round", 'around (alrededor)'], ['tho', 'though (aunque / pero)']
  ].map(([k, es]) => ({ k, es, type: 'reduccion', w: [k] })),
  // Slang
  ...[
    ['baby', 'cariño, mi amor (también "babe", "bae")'], ['babe', 'cariño, mi amor'], ['bae', 'mi amor (pareja)'], ['vibe', 'ambiente, energía, onda'], ['vibes', 'ambiente, energía'], ['lit', 'increíble, prendido (fiesta)'],
    ['chill', 'relajado / relajarse'], ['crush', 'persona que te gusta'], ['ghost', 'desaparecer sin avisar (en una relación)'], ['flex', 'presumir'], ['homie', 'amigo cercano, compa'], ['bro', 'hermano, amigo'],
    ['dope', 'genial'], ['sick', 'genial (en slang) / enfermo'], ['savage', 'salvaje, sin filtro, rudo'], ['lowkey', 'discretamente, un poco, en secreto'], ['highkey', 'abiertamente, muy'], ['no cap', 'en serio, sin mentir'],
    ['slay', 'lucirse, hacerlo increíble'], ['fire', 'buenísimo (también "on fire")'], ['hella', 'muy, mucho'], ['dude', 'amigo, güey'], ['girl', 'amiga (expresión) / chica'], ['shawty', 'chica guapa'],
    ['boo', 'pareja, cariño'], ['honey', 'cariño'], ['sweetheart', 'cariño, corazón'], ['hustle', 'chambear duro, buscársela'], ['ride or die', 'leal hasta el final']
  ].map(([k, es]) => ({ k, es, type: 'slang', w: [k] })),
  // Modismos
  ...[
    ['break my heart', 'romperme el corazón'], ['broken heart', 'corazón roto'], ['head over heels', 'perdidamente enamorado'], ['on my mind', 'en mi mente, pensando en ti'],
    ['time of my life', 'el mejor momento de mi vida'], ['on top of the world', 'en la cima del mundo, feliz'], ['lose my mind', 'volverme loco'], ['out of my mind', 'fuera de mí, loco'],
    ['hold my breath', 'contener la respiración / esperar ansioso'], ['cold feet', 'nervios de última hora, arrepentirse'], ['once in a blue moon', 'muy de vez en cuando'], ['over the moon', 'feliz, encantado'],
    ['heart of gold', 'buen corazón'], ['fall in love', 'enamorarse'], ['by my side', 'a mi lado'], ['all night long', 'toda la noche'], ['right now', 'ahora mismo'],
    ['the one', 'la persona indicada'], ['let it be', 'déjalo ser, que sea lo que sea'], ['no matter what', 'pase lo que pase'], ['forever and ever', 'por siempre jamás'], ['set me free', 'libérame'],
    ['on the run', 'huyendo, a la fuga'], ['against the odds', 'contra todo pronóstico'], ['in the long run', 'a largo plazo'], ['face the music', 'afrontar las consecuencias'], ['all over again', 'otra vez desde el principio'],
    ['take my breath away', 'dejarme sin aliento'], ['made for each other', 'hechos el uno para el otro'], ['young and free', 'joven y libre']
  ].map(([k, es]) => ({ k, es, type: 'modismo' }))
];

// Construye una expresión regular para cada entrada
function buildExprRe(e) {
  const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/'/g, "['’]");
  if (e.type === 'phrasal') {
    const [v, ...rest] = e.k.split(' ');
    const forms = verbForms(v).map(escRe).join('|');
    // permite una palabra en medio: "give it up", "let me down"
    e.re = new RegExp(`\\b(?:${forms})(?![a-z])(?:\\s+[a-z'’]+)?\\s+${escRe(rest.join(' '))}\\b`, 'i');
  } else {
    const pats = (e.w || [e.k]).map(escRe).join('|');
    e.re = new RegExp(`(?:^|[^a-z'’])(?:${pats})(?=$|[^a-z'’])`, 'i');
  }
}
EXPRESSIONS.forEach(buildExprRe);
const TYPE_NAMES = { phrasal: 'Phrasal verb', reduccion: 'Reducción (habla rápida)', slang: 'Slang', modismo: 'Modismo / frase hecha' };
