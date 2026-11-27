// Lecciones y dudas adicionales (temas complementarios del curso Beginners).
// Contenido original de la app.

const MORE_LESSONS = [
  {
    id: 'a2-cifras', level: 'A2', title: 'Números grandes y nacionalidades', focus: 'vocab',
    goal: 'Vas a aprender a decir números grandes (cientos, miles, millones) y las nacionalidades e idiomas: Mexican, Japanese, Brazilian, French...',
    why: 'Precios de carros y casas, sueldos, población, años... Y al conocer gente siempre sale "Where are you from?" y qué idioma hablas.',
    intro: { en: "The house costs three hundred twenty-five thousand dollars. — Wow! That's a lot.", es: 'La casa cuesta trescientos veinticinco mil dólares. — ¡Guau! Es mucho.' },
    vocab: [['hundred', 'cien / cientos', 'jándred'], ['thousand', 'mil', 'záusand'], ['million', 'millón', 'mílion'], ['Mexican', 'mexicano', 'méksikan'], ['Japanese', 'japonés', 'yapanís'], ['Brazilian', 'brasileño', 'brasílian'], ['Spanish', 'español (idioma o de España)', 'spánish'], ['French', 'francés', 'french'], ['German', 'alemán', 'yérman'], ['Chinese', 'chino', 'chainís']],
    explain: `<p><b>Números grandes:</b> se leen en bloques, igual que en español.</p>
<ul><li>450 = four <b>hundred</b> fifty (o four hundred <b>and</b> fifty)</li><li>3,200 = three <b>thousand</b> two hundred</li><li>68,500 = sixty-eight thousand five hundred</li><li>2,750,000 = two <b>million</b> seven hundred fifty thousand</li></ul>
<p class="tip">⚠️ hundred, thousand y million <b>no llevan s</b> cuando van con número: two hundred (no "two hundreds"). Solo llevan s cuando no hay número: "hundreds of people" (cientos de personas).</p>
<p class="tip">🇺🇸 En EE. UU. los miles se separan con <b>coma</b> y los decimales con <b>punto</b>: 1,500.75 = mil quinientos punto setenta y cinco.</p>
<p><b>Nacionalidades e idiomas</b> (siempre con mayúscula):</p>
<table class="tbl"><tr><th>Terminación</th><th>Ejemplos</th></tr>
<tr><td>-an</td><td>Mexican, American, German, Korean</td></tr>
<tr><td>-ian</td><td>Brazilian, Canadian, Italian, Colombian</td></tr>
<tr><td>-ese</td><td>Japanese, Chinese, Portuguese, Vietnamese</td></tr>
<tr><td>-ish</td><td>Spanish, English, Irish, Turkish</td></tr>
<tr><td>especiales</td><td>France → French, Greece → Greek, Peru → Peruvian</td></tr></table>`,
    easy: `<p>Para leer un número grande, sepáralo por las comas y lee cada bloque con su "apellido":</p>
<p>25,300 → <b>twenty-five</b> thousand · <b>three</b> hundred.</p>
<p>Y recuerda: con número delante, nunca "hundreds" ni "thousands".</p>`,
    memo: ['Hundred, thousand y million son como el "cien" y el "mil" del español: no se pluralizan ("dos mil", no "dos miles").', 'Nacionalidades en -ese suenan a "ís": Japanese (yapanís), Chinese (chainís).', 'Lee en inglés los precios de los carros o casas que veas en internet.'],
    examples: [['My car cost fifteen thousand dollars.', 'Mi carro costó quince mil dólares.'], ['Over two million people live in Houston.', 'Más de dos millones de personas viven en Houston.'], ["She's Brazilian, so she speaks Portuguese.", 'Es brasileña, así que habla portugués.']],
    listen: { text: "The population of the city is about one million, three hundred thousand people.", q: '¿Cuántas personas viven en la ciudad?', options: ['1,300,000', '1,030,000', '130,000'], a: 0, note: '"one million, three hundred thousand" = 1,300,000.' },
    speak: ['It costs two thousand dollars.', "I'm Mexican and I speak Spanish.", 'Three hundred fifty people came.'],
    quiz: [
      { q: '5,000 se dice:', options: ['five thousand', 'five thousands', 'five of thousand'], a: 0, why: 'Con número no lleva s.' },
      { q: 'Nacionalidad de Japón:', options: ['Japanese', 'Japanish', 'Japonian'], a: 0, why: 'Japan → Japanese.' },
      { q: 'Persona de Francia:', options: ['French', 'Francian', 'Frenchese'], a: 0, why: 'Es irregular: French.' },
      { q: '"Hundreds of people" significa:', options: ['Cientos de personas', 'Cien personas', 'Cada cien personas'], a: 0, why: 'Sin número sí lleva s.' }
    ]
  },
  {
    id: 'a2-cuantificadores', level: 'A2', title: 'All, most, some, few, no one (cuántos del grupo)', focus: 'grammar',
    goal: 'Vas a aprender a decir qué parte de un grupo hace algo: todos, casi todos, la mayoría, algunos, pocos, nadie.',
    why: 'Sirve para opinar y generalizar: "Most people like pizza", "Not many students came", "No one knows".',
    intro: { en: "Most of my friends love football, but not many of them actually play it.", es: 'A la mayoría de mis amigos les encanta el fútbol americano, pero no muchos lo juegan.' },
    vocab: [['all', 'todos', 'ol'], ['nearly all / almost all', 'casi todos', 'níerli ol'], ['most', 'la mayoría', 'moust'], ['some', 'algunos', 'sam'], ['not many', 'no muchos', 'not méni'], ['few', 'pocos', 'fiú'], ['a few', 'unos cuantos', 'a fiú'], ['no one / nobody', 'nadie', 'nóu uan / nóubadi']],
    explain: `<p>De más a menos: <b>all</b> (100%) → <b>nearly all</b> → <b>most</b> → <b>a lot of</b> → <b>some</b> → <b>not many / not much</b> → <b>few / little</b> → <b>no one / none</b> (0%).</p>
<p><b>¿General o un grupo específico?</b></p>
<ul><li>En general (toda la gente): <b>Most people</b> like music.</li><li>Un grupo concreto: <b>Most of the</b> people <b>in my office</b> drink coffee. (se agrega <b>of the</b>)</li><li>Con pronombres: <b>all of us</b>, <b>most of them</b>, <b>some of you</b>.</li></ul>
<p><b>Contables vs incontables:</b> many, not many, few → solo contables (few cars) · much, not much, little → solo incontables (little time) · all, most, some, a lot of → los dos.</p>
<p class="tip">💡 <b>few</b> = pocos (suena negativo) · <b>a few</b> = unos cuantos (suena positivo). "Few people came" (casi nadie 😕) vs "A few people came" (vinieron algunos 🙂).</p>
<p><b>No one / nobody</b> = nadie, y el verbo va en singular: No one <b>is</b> here. Nobody <b>knows</b>.</p>`,
    easy: `<p>Imagina 10 personas: las 10 → <b>all</b>. 8 o 9 → <b>most</b>. 4 o 5 → <b>some</b>. 1 o 2 → <b>few</b>. Ninguna → <b>no one</b>.</p>
<p>Si hablas de un grupo que conoces ("de mi trabajo", "de mi clase"), agrega <b>of the</b>: most <b>of the</b> students.</p>`,
    memo: ['"Most" suena a "más" → la mayor parte.', '"A few" con "a" = algo hay (positivo). "Few" sin "a" = casi nada (negativo).', 'Describe tu familia: "All of us like tacos. Most of us..."'],
    examples: [['Almost all of my coworkers speak Spanish.', 'Casi todos mis compañeros hablan español.'], ['Few people know the answer.', 'Poca gente sabe la respuesta.'], ['No one wants to work on Sunday.', 'Nadie quiere trabajar en domingo.']],
    listen: { text: "Honestly, most of the people at the party were cool, but a few of them were kinda rude.", q: '¿Cómo era la gente de la fiesta?', options: ['La mayoría buena onda, unos cuantos groseros', 'Todos groseros', 'Nadie fue'], a: 0, note: '"cool" = buena onda. "kinda rude" = medio groseros.' },
    speak: ['Most people like music.', 'All of us are tired.', 'No one knows the answer.'],
    quiz: [
      { q: '___ of the students in my class are from Mexico. (la mayoría)', options: ['Most', 'Much', 'No one'], a: 0, why: 'Most of the + grupo concreto.' },
      { q: 'There is ___ time left. (poco)', options: ['little', 'few', 'many'], a: 0, why: 'Time es incontable → little.' },
      { q: '"No one" va con verbo en:', options: ['singular: No one is here', 'plural: No one are here', 'no lleva verbo'], a: 0, why: 'Nadie = singular.' },
      { q: '¿Cuál suena más positivo?', options: ['A few friends came.', 'Few friends came.', 'No friends came.'], a: 0, why: 'A few = unos cuantos (positivo).' }
    ]
  },
  {
    id: 'a2-adjprep', level: 'A2', title: 'Afraid of, good at, excited about (adjetivo + preposición)', focus: 'vocab',
    goal: 'Vas a aprender qué preposición va con cada adjetivo de sentimientos y habilidades: good at, afraid of, worried about, married to...',
    why: 'Los hispanohablantes suelen decir "afraid to the dogs" o "good in soccer". Con la preposición correcta suenas natural.',
    intro: { en: "I'm really excited about the trip, but I'm kinda scared of flying.", es: 'Estoy muy emocionado por el viaje, pero me da algo de miedo volar.' },
    vocab: [['good at', 'bueno para', 'gud at'], ['bad at', 'malo para', 'bad at'], ['afraid of / scared of', 'con miedo a', 'afréid ov / skerd ov'], ['proud of', 'orgulloso de', 'práud ov'], ['tired of', 'harto / cansado de', 'táierd ov'], ['excited about', 'emocionado por', 'eksáirid abáut'], ['worried about', 'preocupado por', 'uérid abáut'], ['married to', 'casado con', 'márid tu'], ['allergic to', 'alérgico a', 'alérchik tu'], ['similar to', 'parecido a', 'símilar tu']],
    explain: `<table class="tbl"><tr><th>Preposición</th><th>Para qué</th><th>Adjetivos</th></tr>
<tr><td><b>at</b></td><td>habilidades</td><td>good at, bad at, great at, terrible at</td></tr>
<tr><td><b>of</b></td><td>emociones hacia algo</td><td>afraid of, scared of, proud of, tired of, jealous of</td></tr>
<tr><td><b>about</b></td><td>lo que causa el sentimiento</td><td>excited about, worried about, nervous about, angry about, happy about</td></tr>
<tr><td><b>to</b></td><td>relación o parecido</td><td>married to, allergic to, similar to, kind to</td></tr>
<tr><td><b>with</b></td><td>con quién o con qué</td><td>angry with (alguien), happy with, bored with</td></tr></table>
<p><b>Después de la preposición</b> va un sustantivo o un verbo con <b>-ing</b>: I'm good at <b>cooking</b>. She's afraid of <b>driving</b>.</p>
<p class="tip">⚠️ Trampas del español: "casado <b>con</b>" = married <b>to</b> (no "with"). "Bueno <b>en</b>" = good <b>at</b> (no "in").</p>`,
    easy: `<p>Estas combinaciones no tienen lógica perfecta: apréndelas en parejas, como si fueran una sola palabra: <b>good-at</b>, <b>afraid-of</b>, <b>worried-about</b>, <b>married-to</b>.</p>
<p>Y si después va una acción, ponle -ing: good at <b>dancing</b>.</p>`,
    memo: ['AT = habilidad → imagina que apuntas "at" (a) un blanco: ¿le atinas o no?', 'ABOUT = "acerca de" lo que te preocupa o emociona.', 'Di 3 cosas para las que eres bueno y 3 que te dan miedo: "I\'m good at..., I\'m afraid of..."'],
    examples: [["I'm terrible at math.", 'Soy malísimo para las matemáticas.'], ["We're so proud of you!", '¡Estamos muy orgullosos de ti!'], ['She\'s married to a Texan.', 'Está casada con un texano.']],
    listen: { text: "My son's super nervous about his first day of school, but he's really good at making friends.", q: '¿Para qué es bueno el hijo?', options: ['Para hacer amigos', 'Para las matemáticas', 'Para el fútbol'], a: 0, note: '"good at making friends" = bueno para hacer amigos.' },
    speak: ["I'm good at cooking.", "I'm afraid of spiders.", "I'm excited about the trip."],
    quiz: [
      { q: "She's married ___ a doctor.", options: ['to', 'with', 'of'], a: 0, why: 'married to.' },
      { q: "I'm good ___ playing soccer.", options: ['at', 'in', 'on'], a: 0, why: 'Habilidades → good at.' },
      { q: "He's worried ___ his exam.", options: ['about', 'of', 'to'], a: 0, why: 'worried about.' },
      { q: "I'm allergic ___ peanuts.", options: ['to', 'of', 'with'], a: 0, why: 'allergic to.' }
    ]
  },
  {
    id: 'a2-consejos', level: 'A2', title: 'But, though, however y dar consejos (should, must)', focus: 'speaking',
    goal: 'Vas a aprender a contrastar ideas con but, though y however, y a dar recomendaciones de más suave a más fuerte con can, should y must.',
    why: 'Dar consejos y matizar lo que dices hace que tu inglés suene mucho más maduro y natural.',
    intro: { en: "You should try the tacos here. They're a little pricey, though.", es: 'Deberías probar los tacos de aquí. Aunque están un poco caros.' },
    vocab: [['but', 'pero', 'bat'], ['though', 'aunque / pero (al final)', 'dóu'], ['however', 'sin embargo', 'jauéver'], ['although', 'aunque', 'oldóu'], ['can', 'puedes (opción)', 'ken'], ['should', 'deberías (consejo)', 'shud'], ['must', 'tienes que (muy fuerte)', 'mast'], ["shouldn't", 'no deberías', 'shúdent']],
    explain: `<p><b>Contraste:</b></p>
<ul><li><b>but</b> une dos ideas opuestas en la misma frase: It's cheap, <b>but</b> it's good.</li>
<li><b>though</b> al final de la frase = "aunque / eso sí" (muy común al hablar): It's good. It's expensive, <b>though</b>.</li>
<li><b>though / although</b> al inicio = aunque: <b>Although</b> I was tired, I went to work.</li>
<li><b>however</b> = sin embargo, más formal, empieza otra oración: The hotel was nice. <b>However</b>, the service was slow.</li></ul>
<p><b>Consejos</b> (+ verbo base, sin "to"):</p>
<table class="tbl"><tr><th>Fuerza</th><th>Modal</th><th>Ejemplo</th></tr>
<tr><td>Opción</td><td><b>can</b></td><td>You <b>can</b> take the bus. (si quieres)</td></tr>
<tr><td>Consejo</td><td><b>should</b></td><td>You <b>should</b> see a doctor. (te conviene)</td></tr>
<tr><td>Muy fuerte</td><td><b>must</b></td><td>You <b>must</b> visit the Grand Canyon! (¡no te lo pierdas!)</td></tr></table>
<p>Negativo: You <b>shouldn't</b> drive tired. · Pedir consejo: <b>What should I</b> do?</p>
<p class="tip">⚠️ Nunca "should to" ni "must to": You should <b>go</b> (no "should to go").</p>`,
    easy: `<p><b>Should</b> = "deberías". Es la forma más normal de dar un consejo: You should rest (deberías descansar).</p>
<p>Para contradecir algo que acabas de decir, en la plática los nativos ponen <b>though</b> al final: "Nice car. Expensive, though." (Bonito carro. Eso sí, caro.)</p>`,
    memo: ['Escalera de fuerza: can (puedes) → should (deberías) → must (¡tienes que!).', '"Though" al final es como el "eso sí" del español: "Está bonito. Caro, eso sí."', 'Dale 3 consejos a un amigo que viene a visitarte: "You should..., you must..., you can..."'],
    examples: [['You should drink more water.', 'Deberías tomar más agua.'], ["The movie was long. I liked it, though.", 'La película fue larga. Aunque sí me gustó.'], ['What should I wear to the interview?', '¿Qué debería ponerme para la entrevista?']],
    listen: { text: "If you go to San Antonio, you gotta see the River Walk. You should go at night, though, it's way prettier.", q: '¿Cuándo le recomienda ir?', options: ['En la noche', 'En la mañana', 'En invierno'], a: 0, note: '"you gotta see" = tienes que ver. "though" al final = eso sí.' },
    speak: ['You should see a doctor.', 'What should I do?', "It's nice. It's expensive, though."],
    quiz: [
      { q: 'Consejo normal:', options: ['You should rest.', 'You should to rest.', 'You must to rest.'], a: 0, why: 'should + verbo base.' },
      { q: 'Contraste formal entre dos oraciones:', options: ['However', 'Though', 'Should'], a: 0, why: 'However = sin embargo.' },
      { q: '¿Cuál es la recomendación más fuerte?', options: ['You must try it!', 'You can try it.', 'You should try it.'], a: 0, why: 'must es la más fuerte.' },
      { q: '"Nice house. Small, though." significa:', options: ['Bonita casa. Eso sí, pequeña.', 'Bonita casa pequeña.', 'La casa no es bonita.'], a: 0, why: 'though al final = eso sí / aunque.' }
    ]
  },
  {
    id: 'a2-adverbios', level: 'A2', title: 'Cómo se hace: slowly, quickly, very, really', focus: 'grammar',
    goal: 'Vas a aprender los adverbios de modo (slowly, carefully, easily) para decir cómo se hace algo, y los intensificadores (very, really, extremely, totally) para dar más fuerza.',
    why: 'Con ellos describes mejor: no es lo mismo "he drives" que "he drives carefully". Y "really" lo vas a oír en cada conversación.',
    intro: { en: "Can you speak more slowly, please? You talk really fast!", es: '¿Puedes hablar más despacio, por favor? ¡Hablas muy rápido!' },
    vocab: [['slowly', 'despacio', 'slóuli'], ['quickly', 'rápidamente', 'kuíkli'], ['carefully', 'con cuidado', 'kérfuli'], ['easily', 'fácilmente', 'ísili'], ['quietly', 'en silencio', 'kuáietli'], ['well', 'bien', 'uél'], ['really', 'muy / realmente', 'ríli'], ['extremely', 'extremadamente', 'ekstrímli'], ['totally', 'totalmente', 'tóurali'], ['pretty', 'bastante (informal)', 'príri']],
    explain: `<p><b>Adverbio de modo</b> = responde "¿cómo?". Casi siempre es el adjetivo + <b>-ly</b> (como "-mente" en español):</p>
<ul><li>slow → slow<b>ly</b> (lenta<b>mente</b>) · careful → careful<b>ly</b> · quiet → quiet<b>ly</b></li><li>termina en y → <b>-ily</b>: easy → eas<b>ily</b>, happy → happ<b>ily</b></li></ul>
<p>Va <b>después del verbo</b> (o al final): She drives <b>carefully</b>. He finished the test <b>easily</b>.</p>
<p><b>Irregulares:</b> good → <b>well</b> (She sings <b>well</b>, no "good") · fast → <b>fast</b> · hard → <b>hard</b> (He works hard).</p>
<p><b>Intensificadores</b> (van antes del adjetivo): <b>very</b> tired · <b>really</b> good · <b>extremely</b> hot · <b>incredibly</b> interesting · <b>totally</b> right · <b>pretty</b> good (bastante bien, muy común en EE. UU.).</p>
<p class="tip">🇺🇸 Al hablar, los estadounidenses usan muchísimo <b>really</b>, <b>so</b> y <b>super</b>: "I'm <b>so</b> tired", "It's <b>super</b> easy".</p>`,
    easy: `<p>El <b>-ly</b> del inglés es el <b>-mente</b> del español: rápida<b>mente</b> = quick<b>ly</b>, fácil<b>mente</b> = eas<b>ily</b>.</p>
<p>La única trampa grande: <b>good</b> describe cosas (a good singer), <b>well</b> describe cómo se hace (she sings well).</p>`,
    memo: ['-ly = -mente. Si en español dirías "-mente", en inglés va -ly.', 'Good = bueno (cosa). Well = bien (acción). "Good job, you did it well!"', 'Describe cómo hace las cosas tu familia: "My mom cooks really well."'],
    examples: [['Please drive carefully.', 'Maneja con cuidado, por favor.'], ['He speaks English really well.', 'Habla inglés muy bien.'], ["I'm extremely tired today.", 'Estoy extremadamente cansado hoy.']],
    listen: { text: "Dude, you did super well on the test! — Thanks, it was pretty easy, honestly.", q: '¿Cómo le fue en el examen?', options: ['Muy bien, estuvo fácil', 'Mal', 'No lo hizo'], a: 0, note: '"super well" = súper bien. "pretty easy" = bastante fácil.' },
    speak: ['Can you speak more slowly, please?', 'She sings really well.', "I'm very tired."],
    quiz: [
      { q: 'Adverbio de "easy":', options: ['easily', 'easyly', 'easly'], a: 0, why: 'y → ily.' },
      { q: 'He plays guitar very ___.', options: ['well', 'good', 'goodly'], a: 0, why: 'Para acciones: well.' },
      { q: '"Pretty good" significa:', options: ['Bastante bien', 'Bonito y bueno', 'Muy mal'], a: 0, why: 'pretty = bastante (informal).' },
      { q: 'She drives ___. (con cuidado)', options: ['carefully', 'careful', 'care'], a: 0, why: 'Cómo maneja → adverbio -ly.' }
    ]
  }
];

const MORE_GUIDE = [
  { cat: 'Confusiones', t: 'Few vs. A few · Little vs. A little', b: `<p><b>a few / a little</b> = unos cuantos / un poco (suficiente, positivo): I have <b>a few</b> friends here. 🙂</p><p><b>few / little</b> = pocos / poco (casi nada, negativo): I have <b>few</b> friends here. 😕</p><p>few / a few con contables (friends, dollars) · little / a little con incontables (time, money).</p>` },
  { cat: 'Confusiones', t: 'Good vs. Well', b: `<p><b>good</b> es adjetivo: describe <b>cosas o personas</b> → a <b>good</b> cook, the food is <b>good</b>.</p><p><b>well</b> es adverbio: describe <b>cómo se hace algo</b> → she cooks <b>well</b>.</p><p>Excepción: para la salud se dice "I'm <b>well</b>" o "I'm <b>good</b>" (en EE. UU. "I'm good" es lo más común).</p>` },
  { cat: 'Confusiones', t: 'Adjetivos con preposición (good at, afraid of...)', b: `<p><b>at</b> (habilidad): good at, bad at · <b>of</b> (emoción): afraid of, proud of, tired of · <b>about</b> (causa): excited about, worried about, nervous about · <b>to</b> (relación): married to, allergic to, similar to · <b>with</b> (con alguien/algo): angry with, happy with.</p><p>Después va sustantivo o verbo con -ing: good at <b>cooking</b>.</p>` },
  { cat: 'Confusiones', t: 'But, though, although, however', b: `<p><b>but</b> = pero (une dos ideas): Cheap <b>but</b> good.</p><p><b>although / though</b> al inicio = aunque: <b>Although</b> it rained, we went.</p><p><b>though</b> al final = eso sí / aunque (muy coloquial): Good food. Slow service, <b>though</b>.</p><p><b>however</b> = sin embargo (formal, empieza oración): The plan is good. <b>However</b>, it's expensive.</p>` },
  { cat: 'Términos', t: 'Nacionalidades e idiomas', b: `<p>En inglés <b>siempre llevan mayúscula</b>: Mexican, Spanish, English (en español van en minúscula).</p><p>Terminaciones: <b>-an</b> (Mexican, American) · <b>-ian</b> (Canadian, Brazilian) · <b>-ese</b> (Japanese, Chinese) · <b>-ish</b> (Spanish, English) · especiales (French, Greek, Dutch).</p><p>Curiosidad: <b>Arab</b> = la persona, <b>Arabian</b> = la región (Arabian Peninsula), <b>Arabic</b> = el idioma.</p>` },
  { cat: 'Términos', t: 'Números grandes y cómo se escriben', b: `<p>Se leen por bloques: 1,250,300 = one <b>million</b>, two hundred fifty <b>thousand</b>, three <b>hundred</b>.</p><p>Con número delante <b>no llevan s</b>: two thousand (no "two thousands").</p><p>En EE. UU.: coma para miles (1,000) y punto para decimales (2.5). Al revés que en muchos países de Latinoamérica.</p>` }
];

// Agrega las lecciones al camino (después de "En el doctor") y las dudas a la guía.
(function () {
  const at = LESSONS.findIndex(l => l.id === 'a2-doctor') + 1;
  LESSONS.splice(at, 0, ...MORE_LESSONS);
  GUIDE.push(...MORE_GUIDE);
})();
