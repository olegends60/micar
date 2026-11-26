// Contenido de la app: examen de nivel, lecciones, conversaciones y práctica de oído nativo.
// Para agregar más lecciones, copia un bloque de LESSONS y cambia el id.

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const LEVEL_NAMES = {
  A1: 'Principiante', A2: 'Básico', B1: 'Intermedio', B2: 'Intermedio alto', C1: 'Avanzado'
};
const SKILL_NAMES = {
  listening: 'Escuchar (oído)', speaking: 'Hablar', grammar: 'Gramática', vocab: 'Vocabulario'
};

// ---------- EXAMEN DE NIVEL ----------
// type: mc (opción múltiple), listen (escuchar y responder), speak (repetir en voz alta)
// speed: velocidad del audio en las preguntas de escuchar
const PLACEMENT = [
  { type: 'mc', level: 'A1', skill: 'grammar', q: 'She ___ a teacher.', options: ['is', 'are', 'am'], a: 0 },
  { type: 'mc', level: 'A1', skill: 'vocab', q: '¿Cómo se dice "tengo hambre"?', options: ["I'm hungry", 'I have hungry', 'I hungry'], a: 0 },
  { type: 'listen', level: 'A1', skill: 'listening', speed: 'normal', text: "Hi, my name is Jake. I'm from Texas.", q: '¿De dónde es Jake?', options: ['Texas', 'Florida', 'Tennessee'], a: 0 },
  { type: 'speak', level: 'A1', skill: 'speaking', text: 'Nice to meet you.', es: 'Mucho gusto.' },
  { type: 'mc', level: 'A2', skill: 'grammar', q: 'Yesterday I ___ to the store.', options: ['went', 'go', 'gone'], a: 0 },
  { type: 'mc', level: 'A2', skill: 'grammar', q: '___ you like coffee?', options: ['Do', 'Does', 'Are'], a: 0 },
  { type: 'mc', level: 'A2', skill: 'vocab', q: '"Grab a bite" significa:', options: ['Comer algo rápido', 'Morder a alguien', 'Agarrar un taxi'], a: 0 },
  { type: 'listen', level: 'A2', skill: 'listening', speed: 'normal', text: 'I usually get up at seven and grab a coffee on my way to work.', q: '¿Qué hace de camino al trabajo?', options: ['Compra un café', 'Desayuna en casa', 'Llama a su mamá'], a: 0 },
  { type: 'mc', level: 'B1', skill: 'grammar', q: 'I ___ never been to New York.', options: ['have', 'has', 'am'], a: 0 },
  { type: 'mc', level: 'B1', skill: 'grammar', q: 'If it rains tomorrow, we ___ stay home.', options: ['will', 'would have', 'had'], a: 0 },
  { type: 'mc', level: 'B1', skill: 'vocab', q: '"Figure out" significa:', options: ['Averiguar / resolver', 'Dibujar una figura', 'Salir de casa'], a: 0 },
  { type: 'listen', level: 'B1', skill: 'listening', speed: 'nativo', text: "I've been meaning to call you, but work's been crazy lately.", q: '¿Por qué no llamó?', options: ['Ha tenido mucho trabajo', 'Perdió su teléfono', 'Estaba de viaje'], a: 0 },
  { type: 'speak', level: 'B1', skill: 'speaking', text: "I've been working here for about three years.", es: 'Llevo trabajando aquí como tres años.' },
  { type: 'mc', level: 'B2', skill: 'grammar', q: 'You look exhausted. You ___ well last night.', options: ["can't have slept", "shouldn't sleep", "won't sleep"], a: 0 },
  { type: 'mc', level: 'B2', skill: 'grammar', q: 'I wish I ___ more free time.', options: ['had', 'have', 'will have'], a: 0 },
  { type: 'mc', level: 'B2', skill: 'vocab', q: 'Tu amigo te invita a salir y dices "I\'m down". Significa:', options: ['Me apunto', 'Me caí', 'Estoy en el sótano'], a: 0 },
  { type: 'listen', level: 'B2', skill: 'listening', speed: 'turbo', text: "I'm gonna head out in like ten minutes, you wanna grab some food or what?", q: '¿Qué le propone?', options: ['Ir a comer algo', 'Ver una película', 'Quedarse en casa'], a: 0 },
  { type: 'mc', level: 'C1', skill: 'grammar', q: 'Had I known about the traffic, I ___ earlier.', options: ['would have left', 'would leave', 'will leave'], a: 0 },
  { type: 'mc', level: 'C1', skill: 'grammar', q: 'Not only ___ late, but he also forgot the tickets.', options: ['did he arrive', 'he arrived', 'arrived he'], a: 0 },
  { type: 'mc', level: 'C1', skill: 'vocab', q: '"It\'s not my cup of tea" significa:', options: ['No es lo mío', 'No es mi taza', 'No tengo tiempo'], a: 0 },
  { type: 'listen', level: 'C1', skill: 'listening', speed: 'turbo', text: "Honestly, I'd rather not get into it right now, but long story short, the deal fell through.", q: '¿Qué pasó con el trato?', options: ['No se concretó', 'Lo cerraron con éxito', 'Lo van a firmar mañana'], a: 0 }
];

// ---------- LECCIONES ----------
const LESSONS = [
  // ===== A1 =====
  {
    id: 'a1-saludos', level: 'A1', title: 'Saludar y presentarte', focus: 'speaking',
    goal: 'Vas a aprender a saludar como lo hacen en Estados Unidos, decir tu nombre, de dónde eres y preguntar lo mismo a otra persona.',
    why: 'Es lo primero que vas a usar en cualquier conversación. Los estadounidenses saludan rápido y relajado: casi nunca dicen "How do you do?".',
    intro: { en: "Hey! What's up? I'm Jake. Nice to meet you!", es: '¡Hola! ¿Qué onda? Soy Jake. ¡Mucho gusto!' },
    vocab: [["Hey / Hi", 'Hola (informal)'], ["What's up?", '¿Qué onda? / ¿Qué tal?'], ["How's it going?", '¿Cómo te va?'], ['Nice to meet you', 'Mucho gusto'], ["Where are you from?", '¿De dónde eres?'], ["See you later / See ya", 'Nos vemos']],
    explain: `<p>Para presentarte usas <b>I'm</b> (= I am, "yo soy"):</p>
<ul><li><b>I'm</b> Carlos. → Soy Carlos.</li><li><b>I'm from</b> Mexico. → Soy de México.</li></ul>
<p>Cuando alguien te dice <b>"What's up?"</b> no te está preguntando qué hay arriba 😄. Es "¿qué onda?". La respuesta normal es <b>"Not much, you?"</b> (nada, ¿y tú?).</p>
<p>A <b>"How's it going?"</b> se responde <b>"Good, how about you?"</b> o <b>"Pretty good!"</b>.</p>
<p class="tip">🇺🇸 Truco nativo: "What's up" suena como <b>"wassup"</b> y "How's it going" suena como <b>"howzit goin"</b>.</p>`,
    examples: [["Hey, I'm Ana. I'm from Colombia.", 'Hola, soy Ana. Soy de Colombia.'], ["Not much, you?", 'Nada, ¿y tú?'], ["Pretty good, thanks!", '¡Bastante bien, gracias!']],
    listen: { text: "Hey, how's it going? I'm Mike, I'm from Chicago.", q: '¿De dónde es Mike?', options: ['Chicago', 'Boston', 'Miami'], a: 0, note: '"how\'s it going" se dice muy pegado: "howzit goin".' },
    speak: ["Hi, I'm from Mexico.", 'Nice to meet you.', "Pretty good, how about you?"],
    quiz: [
      { q: 'Alguien te dice "What\'s up?". ¿Qué respondes?', options: ['Not much, you?', 'The sky.', 'I am fine, thank you, and you?'], a: 0, why: '"Not much, you?" es la respuesta natural y relajada.' },
      { q: '¿Cómo dices "Soy de Guatemala"?', options: ["I'm from Guatemala.", 'I from Guatemala.', 'I have from Guatemala.'], a: 0, why: 'Siempre lleva el verbo: I\'m (I am) from...' },
      { q: '"See ya" significa:', options: ['Nos vemos', 'Siéntate', 'Te veo ahora mismo'], a: 0, why: '"See ya" es la forma rápida de "See you later".' }
    ]
  },
  {
    id: 'a1-tobe', level: 'A1', title: 'El verbo "to be" (ser / estar)', focus: 'grammar',
    goal: 'Vas a aprender el verbo más usado del inglés: "to be", que significa ser y estar a la vez, y sus contracciones (I\'m, you\'re, he\'s).',
    why: 'Sin "to be" no puedes decir cómo estás, qué haces, cómo eres ni dónde estás. Y los nativos casi siempre lo dicen contraído.',
    intro: { en: "I'm tired, but I'm happy. You're awesome!", es: 'Estoy cansado pero estoy feliz. ¡Eres genial!' },
    vocab: [['tired', 'cansado'], ['happy', 'feliz'], ['busy', 'ocupado'], ['hungry', 'con hambre'], ['ready', 'listo'], ['awesome', 'genial']],
    explain: `<table class="tbl"><tr><th>Completo</th><th>Como lo dicen</th><th>Español</th></tr>
<tr><td>I am</td><td><b>I'm</b></td><td>yo soy/estoy</td></tr>
<tr><td>You are</td><td><b>You're</b></td><td>tú eres/estás</td></tr>
<tr><td>He / She / It is</td><td><b>He's / She's / It's</b></td><td>él/ella es/está</td></tr>
<tr><td>We / They are</td><td><b>We're / They're</b></td><td>somos / son</td></tr></table>
<p><b>Negativo:</b> agrega <b>not</b> → I'm <b>not</b> ready. She <b>isn't</b> here. They <b>aren't</b> busy.</p>
<p><b>Pregunta:</b> invierte el orden → <b>Are you</b> ready? <b>Is she</b> busy?</p>
<p class="tip">⚠️ En inglés no se dice "I have hungry" ni "I have 20 years". Se dice <b>I'm hungry</b> y <b>I'm 20</b>.</p>`,
    examples: [["Are you ready?", '¿Estás listo?'], ["She's not here right now.", 'Ella no está ahorita.'], ["I'm 25 years old.", 'Tengo 25 años.']],
    listen: { text: "Are you hungry? I'm starving, let's eat.", q: '¿Qué quiere hacer?', options: ['Comer', 'Dormir', 'Trabajar'], a: 0, note: '"I\'m starving" = me muero de hambre (exagerado, muy común).' },
    speak: ["I'm tired but I'm happy.", 'Are you ready?', "She's not busy."],
    quiz: [
      { q: '¿Cómo dices "Tengo 30 años"?', options: ["I'm 30.", 'I have 30 years.', 'I has 30.'], a: 0, why: 'La edad se dice con "to be": I\'m 30.' },
      { q: 'They ___ at home.', options: ['are', 'is', 'am'], a: 0, why: 'They → are (they\'re).' },
      { q: 'Pregunta correcta:', options: ['Is he busy?', 'He is busy?', 'Does he busy?'], a: 0, why: 'Con "to be" la pregunta se hace invirtiendo: Is he...?' }
    ]
  },
  {
    id: 'a1-presente', level: 'A1', title: 'Tu rutina: presente simple', focus: 'grammar',
    goal: 'Vas a aprender a hablar de lo que haces todos los días: trabajar, comer, dormir, y a preguntar con "do / does".',
    why: 'Hablar de tu rutina es de las conversaciones más comunes al conocer a alguien: "What do you do?" (¿a qué te dedicas?).',
    intro: { en: "So, what do you do? I work in sales and I live in Dallas.", es: 'Entonces, ¿a qué te dedicas? Trabajo en ventas y vivo en Dallas.' },
    vocab: [['work', 'trabajar'], ['live', 'vivir'], ['wake up', 'despertarse'], ['every day', 'todos los días'], ['usually', 'normalmente'], ['What do you do?', '¿A qué te dedicas?']],
    explain: `<p>El presente simple es para cosas que haces <b>normalmente</b>.</p>
<ul><li>I / You / We / They <b>work</b>.</li><li>He / She / It <b>works</b> ← ¡ojo con la <b>-s</b>!</li></ul>
<p><b>Preguntas</b> con <b>do</b> / <b>does</b>:</p>
<ul><li><b>Do</b> you work here? → ¿Trabajas aquí?</li><li><b>Does</b> she live in L.A.? → ¿Ella vive en Los Ángeles?</li></ul>
<p><b>Negativo:</b> I <b>don't</b> work on Sundays. He <b>doesn't</b> drink coffee.</p>
<p class="tip">🇺🇸 "What do you do?" suena como <b>"whaddaya do?"</b>. Significa "¿a qué te dedicas?", no "¿qué haces ahorita?".</p>`,
    examples: [['I wake up at six every day.', 'Me despierto a las seis todos los días.'], ["She doesn't work on weekends.", 'Ella no trabaja los fines de semana.'], ['Do you live near here?', '¿Vives cerca de aquí?']],
    listen: { text: "What do you do? I'm a nurse, I usually work nights.", q: '¿Cuándo trabaja normalmente?', options: ['De noche', 'En la mañana', 'Los domingos'], a: 0, note: '"What do you do" se escucha como "whaddaya do".' },
    speak: ['What do you do?', 'I work in construction.', "She doesn't live here."],
    quiz: [
      { q: 'My brother ___ in Houston.', options: ['lives', 'live', 'living'], a: 0, why: 'He/She/It → agrega -s: lives.' },
      { q: '___ she speak English?', options: ['Does', 'Do', 'Is'], a: 0, why: 'Con she/he/it se usa does.' },
      { q: '"What do you do?" significa:', options: ['¿A qué te dedicas?', '¿Qué estás haciendo?', '¿Qué hiciste?'], a: 0, why: 'Es la pregunta típica sobre tu trabajo.' }
    ]
  },
  // ===== A2 =====
  {
    id: 'a2-pasado', level: 'A2', title: 'Contar lo que pasó: pasado simple', focus: 'grammar',
    goal: 'Vas a aprender a contar lo que hiciste ayer o el fin de semana, con verbos regulares (-ed) e irregulares (went, had, got).',
    why: 'Los estadounidenses siempre preguntan "How was your weekend?". Necesitas el pasado para responder.',
    intro: { en: "How was your weekend? I went to a barbecue and ate way too much.", es: '¿Qué tal tu fin de semana? Fui a una carne asada y comí demasiado.' },
    vocab: [['went (go)', 'fui / fue'], ['had (have)', 'tuve / comí'], ['got (get)', 'conseguí / llegué'], ['saw (see)', 'vi'], ['yesterday', 'ayer'], ['last night', 'anoche']],
    explain: `<p><b>Regulares:</b> agrega <b>-ed</b> → work<b>ed</b>, play<b>ed</b>, watch<b>ed</b>.</p>
<p><b>Irregulares</b> (hay que memorizarlos): go → <b>went</b>, have → <b>had</b>, get → <b>got</b>, see → <b>saw</b>, eat → <b>ate</b>, make → <b>made</b>.</p>
<p><b>Pregunta y negativo</b> con <b>did</b> (y el verbo vuelve a su forma normal):</p>
<ul><li><b>Did</b> you <b>go</b>? (no "did you went")</li><li>I <b>didn't see</b> it.</li></ul>
<p class="tip">🇺🇸 "Did you" se pronuncia rapidísimo: <b>"didja"</b>. "Didja eat?" = ¿Comiste?</p>`,
    examples: [['I watched a movie last night.', 'Vi una película anoche.'], ["Did you go to the party?", '¿Fuiste a la fiesta?'], ["I didn't have time.", 'No tuve tiempo.']],
    listen: { text: "Did you see the game last night? It was insane, we won in overtime!", q: '¿Qué pasó en el partido?', options: ['Ganaron en tiempo extra', 'Perdieron', 'Lo cancelaron'], a: 0, note: '"Did you" = "didja". "Insane" aquí significa "increíble", no "loco".' },
    speak: ['I went to the store yesterday.', 'Did you have fun?', "I didn't see it."],
    quiz: [
      { q: 'Last weekend I ___ to the beach.', options: ['went', 'go', 'goed'], a: 0, why: '"Go" es irregular: went.' },
      { q: 'Pregunta correcta:', options: ['Did you eat?', 'Did you ate?', 'You did eat?'], a: 0, why: 'Después de "did" el verbo va en forma base.' },
      { q: '"Last night" significa:', options: ['Anoche', 'La última noche de mi vida', 'Mañana en la noche'], a: 0, why: 'Last night = anoche.' }
    ]
  },
  {
    id: 'a2-futuro', level: 'A2', title: 'Planes: going to / "gonna"', focus: 'listening',
    goal: 'Vas a aprender a hablar de tus planes con "going to" y a entender "gonna", que es como lo dicen el 90% de las veces.',
    why: 'Si solo conoces "going to" no vas a reconocer "gonna" cuando un nativo hable rápido.',
    intro: { en: "What are you gonna do this weekend? I'm gonna sleep in.", es: '¿Qué vas a hacer este fin? Voy a dormir hasta tarde.' },
    vocab: [['gonna', 'going to (voy a / vas a)'], ['this weekend', 'este fin de semana'], ['tonight', 'esta noche'], ['sleep in', 'dormir hasta tarde'], ['hang out', 'pasar el rato / salir'], ['plan', 'plan']],
    explain: `<p>Para planes: <b>am / is / are + going to + verbo</b>.</p>
<ul><li>I'm <b>going to</b> travel. → Voy a viajar.</li><li>She's <b>going to</b> call you.</li></ul>
<p>Al hablar, <b>going to</b> se convierte en <b>gonna</b>:</p>
<ul><li>I'm <b>gonna</b> travel. — We're <b>gonna</b> be late!</li></ul>
<p>También existe <b>will</b> para decisiones del momento: "I'll call you later" (te marco luego).</p>
<p class="tip">⚠️ "Gonna" solo reemplaza "going to" + verbo. "I'm going to Chicago" (lugar) NO se dice "gonna Chicago".</p>`,
    examples: [["I'm gonna hang out with my friends tonight.", 'Voy a salir con mis amigos esta noche.'], ["Are you gonna come?", '¿Vas a venir?'], ["I'll text you later.", 'Te escribo luego.']],
    listen: { text: "We're gonna hang out at Josh's place tonight, you gonna come or what?", q: '¿Dónde van a estar?', options: ['En casa de Josh', 'En un bar', 'En el trabajo'], a: 0, note: '"you gonna come" = "are you going to come" (se comen el "are").' },
    speak: ["I'm gonna sleep in this weekend.", 'Are you gonna come?', "I'll call you later."],
    quiz: [
      { q: '"I\'m gonna eat" significa:', options: ['Voy a comer', 'Estoy comiendo', 'Comí'], a: 0, why: 'gonna = going to (futuro/plan).' },
      { q: '¿Cuál es correcto?', options: ["I'm going to Texas.", "I'm gonna Texas.", 'I gonna to Texas.'], a: 0, why: 'Con lugares se usa "going to", no "gonna".' },
      { q: 'Suena el teléfono. Dices:', options: ["I'll get it!", "I'm gonna getting it!", 'I get it yesterday!'], a: 0, why: 'Decisión del momento → will (I\'ll).' }
    ]
  },
  {
    id: 'a2-pedir', level: 'A2', title: 'Pedir comida y comprar', focus: 'vocab',
    goal: 'Vas a aprender a pedir en un restaurante o cafetería como lo hace un estadounidense: "Can I get...?", "For here or to go?".',
    why: 'Es de las situaciones reales más comunes en EE. UU., y los cajeros hablan MUY rápido.',
    intro: { en: "Hi, what can I get for you? For here or to go?", es: 'Hola, ¿qué te sirvo? ¿Para comer aquí o para llevar?' },
    vocab: [['Can I get...?', '¿Me da...? (forma normal de pedir)'], ['For here or to go?', '¿Para aquí o para llevar?'], ['a refill', 'otro relleno (de bebida)'], ['the check', 'la cuenta'], ["That's it / That's all", 'Es todo'], ['tip', 'propina']],
    explain: `<p>En EE. UU. se pide con <b>"Can I get...?"</b> o <b>"I'll have..."</b>. Es amable y normal.</p>
<ul><li><b>Can I get</b> a large coffee, please?</li><li><b>I'll have</b> the burger with fries.</li></ul>
<p>Preguntas que te van a hacer (¡rápido!):</p>
<ul><li><b>"Anything else?"</b> → ¿Algo más? → "That's it, thanks."</li><li><b>"For here or to go?"</b> → "To go, please."</li><li><b>"Cash or card?"</b> → "Card."</li></ul>
<p class="tip">🇺🇸 "Can I get a" suena como <b>"Kenai geta"</b>. "What can I get you" → <b>"whatcha I getcha"</b>.</p>`,
    examples: [['Can I get a medium iced coffee?', '¿Me da un café helado mediano?'], ["That's it, thanks.", 'Es todo, gracias.'], ['Can we get the check, please?', '¿Nos trae la cuenta, por favor?']],
    listen: { text: "Alright, anything else for you? No? Okay, for here or to go? That'll be eight fifty.", q: '¿Cuánto tiene que pagar?', options: ['$8.50', '$18.50', '$8.15'], a: 0, note: '"eight fifty" = 8.50. Los precios se dicen así, sin "dollars" ni "cents".' },
    speak: ['Can I get a large coffee, please?', 'To go, please.', "That's it, thanks."],
    quiz: [
      { q: 'Te preguntan "Anything else?". Respondes:', options: ["That's it, thanks.", 'Yes, it is.', 'Nothing, you?'], a: 0, why: '"That\'s it" = es todo.' },
      { q: '"To go" significa:', options: ['Para llevar', 'Para ir caminando', 'Ya me voy'], a: 0, why: 'For here (aquí) or to go (para llevar).' },
      { q: 'Para pedir la cuenta:', options: ['Can I get the check?', 'Give me the count.', 'I want the bill now!'], a: 0, why: 'En EE. UU. es "the check".' }
    ]
  },
  // ===== B1 =====
  {
    id: 'b1-presperf', level: 'B1', title: 'Experiencias: presente perfecto', focus: 'grammar',
    goal: 'Vas a aprender "Have you ever...?" para hablar de experiencias, y "I\'ve been..." para cosas que empezaron antes y siguen.',
    why: 'Es el tiempo que más confunde a los hispanohablantes y los nativos lo usan todo el tiempo.',
    intro: { en: "Have you ever been to Vegas? I've been there twice, it's wild.", es: '¿Has ido a Las Vegas? He ido dos veces, es una locura.' },
    vocab: [['Have you ever...?', '¿Alguna vez has...?'], ['been', 'estado / ido'], ['already', 'ya'], ['yet', 'todavía (en preguntas/negativo)'], ['for', 'durante (tiempo)'], ['since', 'desde']],
    explain: `<p><b>have / has + participio</b> (been, seen, done, eaten, worked...).</p>
<p><b>1) Experiencias</b> (sin decir cuándo):</p><ul><li><b>Have you ever tried</b> sushi? — <b>I've never been</b> to Canada.</li></ul>
<p><b>2) Algo que empezó y sigue</b>, con <b>for</b> (tiempo) o <b>since</b> (momento):</p><ul><li>I<b>'ve lived</b> here <b>for</b> five years. → Llevo 5 años viviendo aquí.</li><li>She<b>'s worked</b> here <b>since</b> 2020.</li></ul>
<p class="tip">⚠️ Si dices <b>cuándo</b> (yesterday, in 2019), usa pasado simple: "I went to Vegas in 2019".</p>
<p class="tip">🇺🇸 "I have" casi nunca se oye completo: <b>"I've"</b> suena como "aiv".</p>`,
    examples: [['Have you ever been to New York?', '¿Has ido a Nueva York?'], ["I haven't finished yet.", 'Todavía no he terminado.'], ["I've known him since high school.", 'Lo conozco desde la prepa.']],
    listen: { text: "I've been trying to reach you all day. Have you checked your messages yet?", q: '¿Qué pregunta al final?', options: ['Si ya revisó sus mensajes', 'Si quiere comer', 'Dónde vive'], a: 0, note: '"I\'ve been trying to reach you" = he estado intentando contactarte.' },
    speak: ['Have you ever been to California?', "I've lived here for three years.", "I haven't done it yet."],
    quiz: [
      { q: '¿Cuál es correcto?', options: ["I've lived here for 5 years.", 'I live here since 5 years.', 'I am living here for 5 years ago.'], a: 0, why: 'Algo que empezó y sigue → presente perfecto + for.' },
      { q: 'I went to Miami ___.', options: ['last year', 'ever', 'since'], a: 0, why: 'Tiempo específico → pasado simple.' },
      { q: '"Have you finished yet?" significa:', options: ['¿Ya terminaste?', '¿Vas a terminar?', '¿Terminaste ayer?'], a: 0, why: 'yet en pregunta = ya.' }
    ]
  },
  {
    id: 'b1-phrasal', level: 'B1', title: 'Phrasal verbs del día a día', focus: 'vocab',
    goal: 'Vas a aprender los phrasal verbs (verbo + preposición) que más usan los estadounidenses: figure out, run out of, show up, hang out...',
    why: 'Los nativos casi no dicen "discover" o "arrive"; dicen "figure out" y "show up". Sin phrasal verbs suenas como libro.',
    intro: { en: "We ran out of gas, but we figured it out and showed up on time.", es: 'Nos quedamos sin gasolina, pero lo resolvimos y llegamos a tiempo.' },
    vocab: [['figure out', 'averiguar / resolver'], ['run out of', 'quedarse sin'], ['show up', 'llegar / aparecer'], ['hang out', 'pasar el rato'], ['pick up', 'recoger / contestar el teléfono'], ['give up', 'rendirse']],
    explain: `<p>Un <b>phrasal verb</b> es verbo + partícula, y el significado cambia totalmente:</p>
<ul><li>get <b>up</b> → levantarse · get <b>over</b> → superar · get <b>along</b> → llevarse bien</li></ul>
<p>Muchos se pueden separar con un objeto: <b>pick</b> me <b>up</b> at 6 · <b>figure</b> it <b>out</b>.</p>
<p>Con pronombres (it, me, him) <b>siempre</b> va en medio: "figure <b>it</b> out" ✅ — "figure out it" ❌</p>
<p class="tip">🇺🇸 Se pronuncian unidos: "figure it out" → <b>"figurirout"</b>, "pick it up" → <b>"pickirup"</b>.</p>`,
    examples: [["Can you pick me up at the airport?", '¿Puedes recogerme en el aeropuerto?'], ["He didn't show up.", 'No llegó / no apareció.'], ["Don't give up!", '¡No te rindas!']],
    listen: { text: "Dude, we ran out of milk again. Can you pick some up on your way home?", q: '¿Qué le pide?', options: ['Que compre leche', 'Que llegue temprano', 'Que lave los platos'], a: 0, note: '"pick some up" = comprar/recoger un poco. "Dude" = amigo, güey.' },
    speak: ["I can't figure it out.", 'Can you pick me up?', 'We ran out of coffee.'],
    quiz: [
      { q: '"He didn\'t show up" significa:', options: ['No llegó', 'No se mostró feliz', 'No subió'], a: 0, why: 'show up = llegar/aparecer.' },
      { q: '¿Cuál es correcto?', options: ['Figure it out.', 'Figure out it.', 'Out figure it.'], a: 0, why: 'El pronombre va en medio.' },
      { q: '"We ran out of time" significa:', options: ['Se nos acabó el tiempo', 'Corrimos fuera a tiempo', 'Llegamos a tiempo'], a: 0, why: 'run out of = quedarse sin.' }
    ]
  },
  {
    id: 'b1-condicional', level: 'B1', title: 'Si pasa esto... (condicionales)', focus: 'grammar',
    goal: 'Vas a aprender a decir qué pasa si algo ocurre (If it rains, we\'ll...) y a imaginar situaciones (If I had money, I would...).',
    why: 'Sirve para hacer planes, dar consejos e imaginar. "If I were you..." es súper común para aconsejar.',
    intro: { en: "If I won the lottery, I'd quit my job tomorrow. What would you do?", es: 'Si me ganara la lotería, renunciaría mañana. ¿Tú qué harías?' },
    vocab: [['if', 'si (condición)'], ["I'd (I would)", 'yo -ría (haría, iría...)'], ['If I were you', 'Yo que tú'], ['unless', 'a menos que'], ['in case', 'por si acaso'], ['win the lottery', 'ganar la lotería']],
    explain: `<p><b>1) Real / probable:</b> If + presente, <b>will</b> + verbo</p>
<ul><li>If it rains, we<b>'ll</b> stay home. → Si llueve, nos quedamos.</li></ul>
<p><b>2) Imaginario:</b> If + pasado, <b>would</b> + verbo</p>
<ul><li>If I <b>had</b> money, I<b>'d</b> buy a truck. → Si tuviera dinero, compraría una troca.</li><li><b>If I were you</b>, I'd call her. → Yo que tú, le llamaría.</li></ul>
<p class="tip">🇺🇸 "I would" casi siempre es <b>"I'd"</b> (aid). "What would you" suena <b>"whadja"</b>: "Whadja do?"</p>`,
    examples: [["If you need help, let me know.", 'Si necesitas ayuda, avísame.'], ["If I were you, I'd take the job.", 'Yo que tú, aceptaría el trabajo.'], ["What would you do?", '¿Qué harías?']],
    listen: { text: "If I were you, I'd take the job. The pay's way better and you'd work from home.", q: '¿Qué le aconseja?', options: ['Aceptar el trabajo', 'Quedarse donde está', 'Mudarse de ciudad'], a: 0, note: '"The pay\'s way better" = el sueldo es muchísimo mejor ("way" = mucho).' },
    speak: ["If it rains, we'll stay home.", "If I were you, I'd call her.", 'What would you do?'],
    quiz: [
      { q: 'If I ___ rich, I would travel the world.', options: ['were', 'am', 'will be'], a: 0, why: 'Condicional imaginario: If I were...' },
      { q: 'If you study, you ___ pass.', options: ['will', 'would have', 'did'], a: 0, why: 'Situación real → will.' },
      { q: '"If I were you" significa:', options: ['Yo que tú', 'Si yo fuera tú mañana', 'Si fuiste tú'], a: 0, why: 'Expresión para dar consejos.' }
    ]
  },
  // ===== B2 =====
  {
    id: 'b2-reducciones', level: 'B2', title: 'Inglés rápido: cómo hablan de verdad', focus: 'listening',
    goal: 'Vas a entrenar tu oído para las "reducciones": wanna, gotta, lemme, gimme, kinda, dunno, whatcha. Así es como hablan rápido los nativos.',
    why: 'Muchos estudiantes saben gramática pero no entienden a un nativo porque las palabras se pegan y se "comen" sonidos.',
    intro: { en: "Lemme know if you wanna come. I gotta go, but I dunno, maybe later.", es: 'Avísame si quieres venir. Me tengo que ir, pero no sé, tal vez luego.' },
    vocab: [['wanna', 'want to (quiero / quieres)'], ['gotta', 'have got to (tengo que)'], ['lemme', 'let me (déjame)'], ['gimme', 'give me (dame)'], ['kinda / sorta', 'kind of / sort of (como que, algo)'], ["I dunno", "I don't know (no sé)"], ['whatcha', 'what are you / what have you'], ['ya', 'you (tú)']],
    explain: `<p>En inglés de EE. UU. las palabras pequeñas se <b>funden</b>:</p>
<table class="tbl"><tr><th>Escrito</th><th>Cómo suena</th></tr>
<tr><td>going to</td><td><b>gonna</b></td></tr><tr><td>want to</td><td><b>wanna</b></td></tr><tr><td>have got to</td><td><b>gotta</b></td></tr>
<tr><td>let me</td><td><b>lemme</b></td></tr><tr><td>don't know</td><td><b>dunno</b></td></tr><tr><td>what are you</td><td><b>whatcha</b></td></tr>
<tr><td>did you</td><td><b>didja</b></td></tr><tr><td>could have</td><td><b>coulda</b></td></tr></table>
<p>También la <b>t</b> entre vocales suena como una <b>r</b> suave: water → <b>"wara"</b>, better → <b>"berer"</b>, a lot of → <b>"alorov"</b>.</p>
<p class="tip">💡 No necesitas hablar así para que te entiendan, pero <b>sí necesitas reconocerlo</b> al escuchar.</p>`,
    examples: [["Whatcha doing tonight?", '¿Qué vas a hacer hoy en la noche?'], ["I gotta wake up early.", 'Me tengo que levantar temprano.'], ["It's kinda cold, huh?", 'Hace como frío, ¿no?']],
    listen: { text: "Whatcha doing later? I kinda wanna grab a bite, but I gotta finish this first.", q: '¿Qué tiene que hacer primero?', options: ['Terminar algo', 'Comer', 'Dormir'], a: 0, note: '"I gotta finish this first" = tengo que terminar esto primero.' },
    speak: ['Let me know if you want to come.', "I've got to go.", "I don't know, maybe."],
    quiz: [
      { q: '"I gotta go" significa:', options: ['Me tengo que ir', 'Tengo una gota', 'Fui'], a: 0, why: 'gotta = have got to = tener que.' },
      { q: '"Lemme see" significa:', options: ['Déjame ver', 'Limón, sí', 'Ya vi'], a: 0, why: 'lemme = let me.' },
      { q: '"Whatcha doing?" significa:', options: ['¿Qué estás haciendo?', '¿Qué hiciste?', '¿Por qué lo haces?'], a: 0, why: 'whatcha = what are you.' }
    ]
  },
  {
    id: 'b2-modales', level: 'B2', title: 'Suponer y lamentar: must, might, should have', focus: 'grammar',
    goal: 'Vas a aprender a suponer cosas (He must be tired, she might be late) y a hablar de lo que debiste hacer (I should have called).',
    why: 'Con esto suenas mucho más natural y puedes expresar dudas, deducciones y arrepentimientos.',
    intro: { en: "You must be Jake's friend. You should've told me you were coming!", es: 'Tú debes ser el amigo de Jake. ¡Me hubieras dicho que venías!' },
    vocab: [['must be', 'debe ser / debe estar (seguro)'], ['might / may', 'tal vez, puede que'], ["can't be", 'no puede ser'], ['should have', 'debí haber'], ['could have', 'pude haber'], ['would have', 'habría']],
    explain: `<p><b>Deducción en presente:</b></p>
<ul><li>He <b>must be</b> tired. → Seguro está cansado (90%)</li><li>She <b>might be</b> at work. → Tal vez está en el trabajo (50%)</li><li>That <b>can't be</b> true. → No puede ser cierto (0%)</li></ul>
<p><b>Sobre el pasado:</b> modal + <b>have</b> + participio</p>
<ul><li>I <b>should have</b> studied. → Debí haber estudiado.</li><li>You <b>could have</b> called me! → ¡Me pudiste haber llamado!</li></ul>
<p class="tip">🇺🇸 Al hablar: should have → <b>"shoulda"</b>, could have → <b>"coulda"</b>, would have → <b>"woulda"</b>. "I shoulda known!"</p>`,
    examples: [["You must be hungry.", 'Has de tener hambre.'], ["I should've left earlier.", 'Debí salir más temprano.'], ["It might rain later.", 'Puede que llueva al rato.']],
    listen: { text: "Man, I shoulda left earlier. Traffic's insane, I might be like twenty minutes late.", q: '¿Qué problema tiene?', options: ['Va a llegar tarde', 'Se le acabó la gasolina', 'Se perdió'], a: 0, note: '"I shoulda" = I should have. "like twenty minutes" = como veinte minutos.' },
    speak: ['He must be tired.', 'I should have called you.', 'It might rain tomorrow.'],
    quiz: [
      { q: 'Está todo apagado en su casa. "They ___ be asleep."', options: ['must', "can't", 'should have'], a: 0, why: 'Deducción casi segura → must.' },
      { q: '"I shoulda known" significa:', options: ['Debí haberlo sabido', 'Lo sé', 'Debo saberlo'], a: 0, why: 'shoulda = should have.' },
      { q: 'Lo viste hace un minuto en México. Dices: "That ___ be him in Paris."', options: ["can't", 'must', 'might'], a: 0, why: 'Imposible → can\'t.' }
    ]
  },
  {
    id: 'b2-slang', level: 'B2', title: 'Expresiones de EE. UU. que oirás diario', focus: 'vocab',
    goal: 'Vas a aprender frases coloquiales que usan los estadounidenses todo el tiempo: I\'m down, my bad, no worries, for real, that sucks...',
    why: 'Estas frases no vienen en los libros, pero las vas a escuchar en el trabajo, en series y con amigos.',
    intro: { en: "My bad, I totally forgot. — No worries, man. Wanna grab lunch? — I'm down!", es: 'Mi culpa, se me olvidó. — No te preocupes. ¿Vamos a comer? — ¡Va!' },
    vocab: [["I'm down", 'Me apunto / va'], ['My bad', 'Mi culpa / perdón'], ['No worries', 'No te preocupes'], ['For real?', '¿En serio?'], ['That sucks', 'Qué mal / qué feo'], ["I'm good", 'Estoy bien / no gracias'], ["It's a deal", 'Trato hecho'], ['Hang in there', 'Aguanta / échale ganas']],
    explain: `<p>Usos que confunden:</p>
<ul><li><b>"I'm good"</b> puede ser <b>"no, gracias"</b>: — Want some more? — I'm good, thanks.</li>
<li><b>"I'm down"</b> = me apunto. Pero <b>"I'm feeling down"</b> = estoy triste.</li>
<li><b>"That sucks"</b> = qué mal (informal, no es grosero entre amigos).</li>
<li><b>"Sounds good"</b> = va / perfecto (súper común en el trabajo).</li></ul>
<p class="tip">💡 Con tu jefe usa "no worries", "sounds good", "my bad". Evita "that sucks" en situaciones formales.</p>`,
    examples: [["Sounds good, see you at five.", 'Perfecto, nos vemos a las cinco.'], ["I'm good, thanks.", 'Así estoy bien, gracias.'], ["For real? That sucks, man.", '¿En serio? Qué mal, amigo.']],
    listen: { text: "You want another slice? — Nah, I'm good. But for real, this pizza's fire.", q: '¿Quiere otra rebanada?', options: ['No, ya está bien', 'Sí, dos más', 'Quiere otra cosa'], a: 0, note: '"I\'m good" = no, gracias. "This pizza\'s fire" = esta pizza está buenísima.' },
    speak: ["No worries, it's all good.", "I'm down, let's go.", 'Sounds good, see you later.'],
    quiz: [
      { q: '— "Want more coffee?" — "I\'m good." Significa:', options: ['No, gracias', 'Sí, por favor', 'Estoy de buen humor'], a: 0, why: '"I\'m good" aquí es una forma amable de rechazar.' },
      { q: 'Llegaste tarde. Dices:', options: ['My bad!', "I'm down!", 'That sucks!'], a: 0, why: '"My bad" = perdón, fue mi culpa.' },
      { q: '"Sounds good" significa:', options: ['Va / perfecto', 'Suena fuerte', 'Escucho bien'], a: 0, why: 'Se usa para aceptar planes.' }
    ]
  },
  // ===== C1 =====
  {
    id: 'c1-idioms', level: 'C1', title: 'Modismos (idioms) nativos', focus: 'vocab',
    goal: 'Vas a aprender modismos que no se traducen literal: break the ice, piece of cake, under the weather, call it a day, hit the sack...',
    why: 'Los modismos hacen que suenes nativo y te permiten entender humor, series y conversaciones de trabajo.',
    intro: { en: "Alright, let's call it a day. I'm beat, I'm gonna hit the sack.", es: 'Bueno, ya terminemos por hoy. Estoy muerto, me voy a dormir.' },
    vocab: [['piece of cake', 'pan comido (muy fácil)'], ['under the weather', 'algo enfermo'], ['call it a day', 'terminar por hoy'], ['hit the sack', 'irse a dormir'], ['break the ice', 'romper el hielo'], ['beat around the bush', 'andarse con rodeos'], ['on the same page', 'estar de acuerdo / en sintonía'], ["I'm beat", 'Estoy agotado']],
    explain: `<p>Un <b>idiom</b> es una frase cuyo significado no sale de sus palabras.</p>
<ul><li>"The test was a <b>piece of cake</b>." → El examen estuvo facilísimo.</li>
<li>"I'm feeling a bit <b>under the weather</b>." → Me siento medio enfermo.</li>
<li>"Let's make sure we're <b>on the same page</b>." → Asegurémonos de estar de acuerdo (muy usado en el trabajo).</li>
<li>"Stop <b>beating around the bush</b>." → Deja de darle vueltas.</li></ul>
<p class="tip">💡 No los fuerces todos en una frase. Uno bien puesto suena natural; cinco juntos suenan raro.</p>`,
    examples: [["I'm a little under the weather today.", 'Hoy me siento un poco mal.'], ["Let's call it a day.", 'Terminemos por hoy.'], ["Just tell me, don't beat around the bush.", 'Solo dímelo, no le des vueltas.']],
    listen: { text: "Honestly the interview was a piece of cake, but I was super nervous trying to break the ice at first.", q: '¿Cómo estuvo la entrevista?', options: ['Muy fácil', 'Muy difícil', 'La cancelaron'], a: 0, note: '"piece of cake" = muy fácil. "break the ice" = romper el hielo.' },
    speak: ["Let's call it a day.", "I'm feeling under the weather.", "It was a piece of cake."],
    quiz: [
      { q: '"I\'m gonna hit the sack" significa:', options: ['Me voy a dormir', 'Voy a pegarle a una bolsa', 'Voy al gimnasio'], a: 0, why: 'hit the sack = ir a dormir.' },
      { q: 'Tu compañero dice "Are we on the same page?". Pregunta:', options: ['Si están de acuerdo', 'Si leen el mismo libro', 'Si están en la misma oficina'], a: 0, why: 'on the same page = en sintonía.' },
      { q: '"Under the weather" significa:', options: ['Algo enfermo', 'Debajo de la lluvia', 'De mal humor por el clima'], a: 0, why: 'Se usa para decir que estás un poco enfermo.' }
    ]
  },
  {
    id: 'c1-matices', level: 'C1', title: 'Sonar educado y diplomático', focus: 'speaking',
    goal: 'Vas a aprender a pedir cosas y dar malas noticias con tacto: "I was wondering if...", "Would you mind...?", "To be honest...".',
    why: 'En EE. UU. ser muy directo puede sonar grosero. Suavizar tus frases es clave en el trabajo y con desconocidos.',
    intro: { en: "Hey, I was wondering if you'd mind covering my shift on Friday?", es: 'Oye, me preguntaba si no te molestaría cubrir mi turno el viernes.' },
    vocab: [['I was wondering if...', 'Me preguntaba si...'], ['Would you mind...?', '¿Te molestaría...?'], ['To be honest', 'Para ser honesto'], ["I'm afraid...", 'Me temo que...'], ['a bit / kind of', 'un poco (suaviza)'], ['Would it be possible to...?', '¿Sería posible...?']],
    explain: `<p>Compara:</p>
<ul><li>❌ "Give me the report." (muy directo)</li><li>✅ "<b>Could you</b> send me the report <b>when you get a chance</b>?"</li></ul>
<p><b>Would you mind + -ing</b>: "Would you mind <b>closing</b> the door?" — Ojo: si aceptas se responde <b>"Not at all"</b> (no me molesta).</p>
<p>Para malas noticias: <b>"I'm afraid</b> we can't make it." / "It's <b>a bit</b> expensive."</p>
<p class="tip">🇺🇸 "Would you" suena <b>"wudja"</b>. "Would you mind" → <b>"wudja mind"</b>.</p>`,
    examples: [["Would you mind sending it again?", '¿Te molestaría enviarlo otra vez?'], ["I'm afraid I can't make it tonight.", 'Me temo que no puedo ir esta noche.'], ["To be honest, it's a bit too expensive.", 'Para ser honesto, está un poco caro.']],
    listen: { text: "I was wondering if we could push the meeting to Thursday? To be honest, I'm kinda swamped this week.", q: '¿Qué pide?', options: ['Mover la reunión al jueves', 'Cancelar la reunión', 'Adelantarla al lunes'], a: 0, note: '"push the meeting" = posponer. "I\'m swamped" = estoy hasta el cuello de trabajo.' },
    speak: ['I was wondering if you could help me.', 'Would you mind closing the door?', "I'm afraid I can't make it."],
    quiz: [
      { q: '"Would you mind waiting?" — Si aceptas, dices:', options: ['Not at all.', 'Yes, I mind.', 'Yes, I would.'], a: 0, why: '"Not at all" = no me molesta (o sea, sí acepto).' },
      { q: 'La forma más educada:', options: ['Could you send it when you get a chance?', 'Send it now.', 'You must send it.'], a: 0, why: 'Could you + when you get a chance suaviza la petición.' },
      { q: '"I\'m swamped" significa:', options: ['Tengo muchísimo trabajo', 'Estoy mojado', 'Estoy perdido'], a: 0, why: 'swamped = saturado de trabajo.' }
    ]
  },
  {
    id: 'c1-opinar', level: 'C1', title: 'Opinar y debatir como nativo', focus: 'speaking',
    goal: 'Vas a aprender a dar tu opinión, estar en desacuerdo con respeto y conectar ideas: "The way I see it...", "Fair point, but...", "That being said...".',
    why: 'En un nivel avanzado necesitas defender ideas en juntas, entrevistas y conversaciones profundas.',
    intro: { en: "The way I see it, remote work is here to stay. That being said, I get why some people hate it.", es: 'Como yo lo veo, el trabajo remoto llegó para quedarse. Dicho esto, entiendo por qué a algunos no les gusta.' },
    vocab: [['The way I see it', 'Como yo lo veo'], ['Fair point', 'Buen punto'], ['That being said', 'Dicho esto'], ["I'd argue that...", 'Yo diría que...'], ['I see where you\'re coming from', 'Entiendo tu punto de vista'], ['At the end of the day', 'Al final de cuentas']],
    explain: `<p><b>Dar opinión:</b> The way I see it... / Personally, I think... / I'd argue that...</p>
<p><b>Desacuerdo con respeto</b> (muy importante en EE. UU.):</p>
<ul><li>"<b>Fair point, but</b> have you considered...?"</li><li>"<b>I see where you're coming from</b>, but I'm not so sure."</li></ul>
<p><b>Conectar ideas:</b> That being said (dicho esto) · On top of that (además) · At the end of the day (al final de cuentas).</p>
<p class="tip">💡 Decir "You're wrong" es muy fuerte. Prefiere "I'm not sure I agree".</p>`,
    examples: [["Fair point, but it's not that simple.", 'Buen punto, pero no es tan simple.'], ["At the end of the day, it's your call.", 'Al final de cuentas, tú decides.'], ["I see where you're coming from.", 'Entiendo tu punto.']],
    listen: { text: "I see where you're coming from, but at the end of the day, it's gonna cost us way more in the long run.", q: '¿Cuál es su argumento?', options: ['A largo plazo costará más', 'Es más barato', 'Está totalmente de acuerdo'], a: 0, note: '"in the long run" = a largo plazo.' },
    speak: ['The way I see it, it makes sense.', "Fair point, but I'm not so sure.", "At the end of the day, it's your call."],
    quiz: [
      { q: 'Para no estar de acuerdo con respeto:', options: ["I see where you're coming from, but...", "You're wrong.", 'No.'], a: 0, why: 'Primero reconoces su idea, luego das la tuya.' },
      { q: '"That being said" significa:', options: ['Dicho esto', 'Eso dijo él', 'Eso es todo'], a: 0, why: 'Conector para contrastar.' },
      { q: '"It\'s your call" significa:', options: ['Tú decides', 'Es tu llamada', 'Te toca llamar'], a: 0, why: 'call aquí = decisión.' }
    ]
  }
];

// ---------- CONVERSACIONES CON JAKE ----------
// expect: palabras clave; si tu respuesta incluye alguna de las opciones de un grupo, cuenta.
// Cada grupo es una lista de alternativas; se necesita al menos un acierto en cada grupo.
const CONVERSATIONS = [
  {
    id: 'c-party', level: 'A1', title: 'Conociendo a alguien en una fiesta', icon: '🎉',
    setup: 'Estás en una fiesta en Texas. Jake se acerca a saludarte. Preséntate y platica un poco.',
    turns: [
      { en: "Hey! What's up? I don't think we've met. I'm Jake.", es: '¡Hola! ¿Qué onda? Creo que no nos conocemos. Soy Jake.', expect: [["i'm", 'i am', 'my name', 'name is']], model: "Hi Jake! I'm Carlos. Nice to meet you.", tip: 'Di tu nombre: "I\'m ___" o "My name is ___".', ok: 'Nice to meet you!' },
      { en: "So where are you from?", es: '¿Y de dónde eres?', expect: [['from', 'born in', 'live in']], model: "I'm from Mexico.", tip: 'Usa "I\'m from ___".', ok: 'Oh, cool! I love it there.' },
      { en: "That's awesome. What do you do?", es: 'Qué genial. ¿A qué te dedicas?', expect: [['work', 'student', 'study', "i'm a", 'i am a', 'job']], model: "I work in construction.", tip: 'Di tu trabajo: "I work in ___" o "I\'m a ___". También "I\'m a student".', ok: 'Nice! That sounds interesting.' },
      { en: "How long have you been in the States?", es: '¿Cuánto tiempo llevas en Estados Unidos?', expect: [['year', 'month', 'week', 'day', 'just', 'since']], model: "About two years.", tip: 'Responde con tiempo: "About two years" / "Just a few months".', ok: 'Oh nice, your English is pretty good!' },
      { en: "Alright, I'm gonna grab a drink. Want anything?", es: 'Bueno, voy por algo de tomar. ¿Quieres algo?', expect: [["i'm good", 'no thanks', 'no thank', 'yes', 'sure', 'water', 'soda', 'beer', 'please']], model: "Sure, a water, please. / I'm good, thanks.", tip: 'Acepta ("Sure, a soda, please") o rechaza amable ("I\'m good, thanks").', ok: 'Cool, be right back!' }
    ]
  },
  {
    id: 'c-coffee', level: 'A2', title: 'Pidiendo en una cafetería', icon: '☕',
    setup: 'Llegas a una cafetería en Nueva York. El barista habla rapidísimo. Pide un café y algo de comer.',
    turns: [
      { en: "Hi there! What can I get started for you today?", es: '¡Hola! ¿Qué te preparo hoy?', expect: [['can i get', "i'll have", 'i will have', "i'd like", 'i would like', 'coffee', 'latte', 'please']], model: "Hi! Can I get a medium latte, please?", tip: 'Empieza con "Can I get ___, please?"', ok: 'Sure thing!' },
      { en: "Hot or iced?", es: '¿Caliente o helado?', expect: [['hot', 'iced', 'ice', 'cold']], model: 'Iced, please.', tip: 'Solo di "Hot, please" o "Iced, please".', ok: 'Got it.' },
      { en: "Anything else for you? We've got fresh muffins.", es: '¿Algo más? Tenemos muffins recién hechos.', expect: [['muffin', "that's it", 'that is it', "that's all", 'no', 'yes', 'sure', 'cookie', 'bagel']], model: "Yeah, can I get a blueberry muffin? / No, that's it.", tip: 'Pide algo más o di "That\'s it, thanks".', ok: 'Perfect.' },
      { en: "For here or to go?", es: '¿Para aquí o para llevar?', expect: [['here', 'to go', 'go']], model: 'To go, please.', tip: '"For here" o "To go, please".', ok: 'Alright.' },
      { en: "Can I get a name for the order?", es: '¿Me das un nombre para la orden?', expect: [["it's", 'it is', "i'm", 'name', 'is']], model: "It's Ana.", tip: 'Di "It\'s ___" (tu nombre).', ok: "Awesome, that'll be six seventy-five. It'll be ready at the end of the bar!" }
    ]
  },
  {
    id: 'c-weekend', level: 'B1', title: '¿Qué hiciste el fin de semana?', icon: '🏖️',
    setup: 'Es lunes en el trabajo. Tu compañero Jake te pregunta por tu fin de semana. Usa el pasado.',
    turns: [
      { en: "Morning! How was your weekend? Do anything fun?", es: '¡Buenos días! ¿Qué tal tu fin? ¿Hiciste algo divertido?', expect: [['went', 'was', 'had', 'did', 'watched', 'stayed', 'visited', 'played', 'saw']], model: 'It was great! I went to the beach with my family.', tip: 'Usa pasado: went, had, watched, stayed...', ok: 'Oh nice, sounds fun!' },
      { en: "No way, that sounds awesome. Who'd you go with?", es: 'No manches, suena genial. ¿Con quién fuiste?', expect: [['with', 'my', 'alone', 'friend', 'family', 'wife', 'husband', 'kids', 'by myself']], model: 'I went with my brother and some friends.', tip: '"I went with ___" o "by myself" (solo).', ok: "That's cool." },
      { en: "Have you ever been to Austin? I went there last month, it was wild.", es: '¿Has ido a Austin? Fui el mes pasado, estuvo increíble.', expect: [['have', 'never', "haven't", 'been', 'yes', 'no']], model: "No, I've never been there. / Yes, I've been there once.", tip: 'Usa presente perfecto: "I\'ve never been" / "I\'ve been there".', ok: 'You gotta go, seriously.' },
      { en: "So what are you gonna do next weekend?", es: '¿Y qué vas a hacer el próximo fin?', expect: [['gonna', 'going to', "i'll", 'will', 'probably', 'maybe', 'plan']], model: "I'm gonna stay home and relax.", tip: 'Usa futuro: "I\'m gonna ___" / "I\'m going to ___".', ok: 'Nice, you deserve it.' }
    ]
  },
  {
    id: 'c-interview', level: 'B1', title: 'Entrevista de trabajo', icon: '💼',
    setup: 'Tienes una entrevista para un trabajo en EE. UU. Jake es el gerente. Responde con seguridad.',
    turns: [
      { en: "Thanks for coming in. So, tell me a little bit about yourself.", es: 'Gracias por venir. Cuéntame un poco de ti.', expect: [["i'm", 'i am', 'i have', "i've", 'experience', 'work', 'years']], model: "Sure. I'm Luis, I have five years of experience in customer service.", tip: 'Di quién eres y tu experiencia: "I have ___ years of experience in ___".', ok: 'Great.' },
      { en: "Why do you want to work here?", es: '¿Por qué quieres trabajar aquí?', expect: [['because', 'want', 'like', 'grow', 'learn', 'company', 'opportunity']], model: 'Because I want to grow and I really like what this company does.', tip: 'Usa "Because I want to ___" o "I really like ___".', ok: "I like that answer." },
      { en: "What would you say is your biggest strength?", es: '¿Cuál dirías que es tu mayor fortaleza?', expect: [["i'm", 'i am', 'my', 'strength', 'good at', 'hard', 'work']], model: "I'd say I'm a hard worker and I'm good with people.", tip: '"I\'d say I\'m ___" (hard-working, reliable, a fast learner).', ok: "That's important here." },
      { en: "If you had a problem with a coworker, what would you do?", es: 'Si tuvieras un problema con un compañero, ¿qué harías?', expect: [["i'd", 'i would', 'talk', 'speak']], model: "I'd talk to them calmly and try to figure it out.", tip: 'Condicional: "I\'d (I would) talk to them..."', ok: 'Good, communication is key.' },
      { en: "Alright, do you have any questions for me?", es: 'Bien, ¿tienes alguna pregunta para mí?', expect: [['what', 'when', 'how', 'yes', 'no', 'question', 'is', 'do']], model: 'Yes, what does a typical day look like?', tip: 'Siempre pregunta algo: "What does a typical day look like?"', ok: "Great question. We'll be in touch soon!" }
    ]
  },
  {
    id: 'c-roommate', level: 'B2', title: 'Planeando un viaje con tu roomie', icon: '🚗',
    setup: 'Jake, tu roommate, quiere hacer un road trip. Habla rápido y con slang. ¡Entiéndelo y responde natural!',
    turns: [
      { en: "Yo, I was thinking we should do a road trip next weekend. You down?", es: 'Oye, estaba pensando que hagamos un viaje en carro el próximo fin. ¿Te apuntas?', expect: [["i'm down", 'down', 'sure', 'yes', 'yeah', "let's", 'sounds good', 'not sure', 'maybe']], model: "I'm down! Where do you wanna go?", tip: '"I\'m down" = me apunto. O "Sounds good!"', ok: "Let's gooo!" },
      { en: "I dunno, maybe Vegas? Or we could hit up the Grand Canyon. Whatcha think?", es: 'No sé, ¿tal vez Las Vegas? O podríamos ir al Gran Cañón. ¿Qué opinas?', expect: [['vegas', 'canyon', 'both', 'think', 'rather', 'prefer']], model: "I'd rather go to the Grand Canyon, I've never been.", tip: '"I\'d rather ___" = prefiero. Da una razón.', ok: 'Bet, good call.' },
      { en: "Cool. We gotta leave like super early though, like five a.m. That cool?", es: 'Va. Pero tenemos que salir súper temprano, como a las 5. ¿Está bien?', expect: [['cool', 'fine', 'ok', 'okay', 'sure', 'early', 'no', 'later', 'problem']], model: "That's fine, I'll set an alarm. / Five? Can we leave at seven instead?", tip: 'Acepta o negocia: "Can we leave at ___ instead?"', ok: 'Fair enough.' },
      { en: "Oh, and my car's kinda acting up. Could we take yours? I'll pay for gas.", es: 'Ah, y mi carro anda medio fallando. ¿Podemos llevar el tuyo? Yo pago la gasolina.', expect: [['sure', 'yeah', 'yes', 'deal', 'no problem', 'ok', 'fine', "can't", 'sorry']], model: "Sure, no problem. It's a deal!", tip: '"It\'s a deal" = trato hecho.', ok: "You're the best, man. This is gonna be epic." }
    ]
  },
  {
    id: 'c-debate', level: 'C1', title: 'Debate: ¿trabajo remoto o en oficina?', icon: '🗣️',
    setup: 'Jake defiende el trabajo en oficina. Dale tu opinión, reconoce sus puntos y argumenta.',
    turns: [
      { en: "Honestly, I think working from home is killing company culture. What's your take?", es: 'Honestamente, creo que el trabajo remoto está matando la cultura de las empresas. ¿Tú qué opinas?', expect: [['think', 'way i see', 'personally', 'opinion', 'agree', 'disagree', 'argue']], model: 'The way I see it, remote work actually makes people more productive.', tip: 'Usa "The way I see it..." o "Personally, I think..."', ok: 'Hmm, interesting.' },
      { en: "Fair enough, but don't you think people get kinda isolated at home?", es: 'Puede ser, pero ¿no crees que la gente se aísla en casa?', expect: [['see where', 'fair point', 'true', 'but', 'that being said', 'however', 'agree']], model: "I see where you're coming from, but that's what team meetings are for.", tip: 'Reconoce y contraargumenta: "Fair point, but..."', ok: "Okay, I'll give you that." },
      { en: "What about younger employees who need mentoring? They'd learn way faster in person.", es: '¿Y los empleados jóvenes que necesitan mentoría? Aprenderían mucho más rápido en persona.', expect: [['true', 'point', 'but', 'hybrid', 'maybe', 'could', 'agree', 'that being said']], model: "That's true. That being said, a hybrid model could work for everyone.", tip: 'Usa "That being said..." para matizar.', ok: "Hybrid... yeah, that's actually a solid middle ground." },
      { en: "So if you were the CEO, what would you do?", es: 'Entonces, si fueras el director, ¿qué harías?', expect: [["i'd", 'i would', 'let', 'allow', 'hybrid', 'give']], model: "If I were the CEO, I'd let teams decide what works best for them.", tip: 'Condicional: "If I were the CEO, I\'d ___".', ok: "At the end of the day, that's probably the smartest call. Great debate!" }
    ]
  }
];

// ---------- OÍDO NATIVO (inglés rápido) ----------
const FAST_DRILLS = [
  { fast: "I'm gonna grab a coffee, you wanna come?", full: "I'm going to grab a coffee, do you want to come?", es: 'Voy por un café, ¿quieres venir?', red: ['gonna = going to', 'you wanna = do you want to'] },
  { fast: "I gotta go, lemme know when you get home.", full: "I have got to go, let me know when you get home.", es: 'Me tengo que ir, avísame cuando llegues a casa.', red: ['gotta = have got to', 'lemme = let me'] },
  { fast: "Whatcha doing later? Wanna hang out?", full: "What are you doing later? Do you want to hang out?", es: '¿Qué haces al rato? ¿Quieres salir?', red: ['whatcha = what are you', 'wanna = want to'] },
  { fast: "I dunno, it's kinda late, maybe tomorrow.", full: "I don't know, it's kind of late, maybe tomorrow.", es: 'No sé, ya es medio tarde, tal vez mañana.', red: ['dunno = don\'t know', 'kinda = kind of'] },
  { fast: "Didja eat yet? I'm starving.", full: "Did you eat yet? I'm starving.", es: '¿Ya comiste? Me muero de hambre.', red: ['didja = did you'] },
  { fast: "Gimme a sec, I'm almost done.", full: "Give me a second, I'm almost done.", es: 'Dame un segundo, ya casi termino.', red: ['gimme = give me', 'sec = second'] },
  { fast: "You shoulda told me, I coulda helped ya.", full: "You should have told me, I could have helped you.", es: 'Me hubieras dicho, te pude haber ayudado.', red: ['shoulda = should have', 'coulda = could have', 'ya = you'] },
  { fast: "We're outta milk, can ya pick some up?", full: "We're out of milk, can you pick some up?", es: 'Se acabó la leche, ¿puedes comprar?', red: ['outta = out of', 'ya = you'] },
  { fast: "It's a lotta work but it's gonna be worth it.", full: "It's a lot of work but it's going to be worth it.", es: 'Es mucho trabajo pero va a valer la pena.', red: ['lotta = lot of', 'gonna = going to'] },
  { fast: "Watcha gonna do about it? Nothin', I guess.", full: "What are you going to do about it? Nothing, I guess.", es: '¿Qué vas a hacer al respecto? Nada, supongo.', red: ['whatcha = what are you', "nothin' = nothing"] },
  { fast: "C'mon, we're gonna be late, hurry up!", full: "Come on, we're going to be late, hurry up!", es: '¡Ándale, vamos a llegar tarde, apúrate!', red: ["c'mon = come on"] },
  { fast: "I hafta work tomorrow, so I can't stay long.", full: "I have to work tomorrow, so I can't stay long.", es: 'Tengo que trabajar mañana, así que no me puedo quedar mucho.', red: ['hafta = have to'] }
];
