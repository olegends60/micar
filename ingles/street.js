// 🎬 "Así hablan en YouTube": expresiones del inglés real de EE. UU. que encontré estudiando
// transcripciones de creadores nativos (vlogs, bromas, citas, podcasts) y de canales que enseñan inglés.
// Las explicaciones y los ejemplos son originales de la app; las frecuencias salen de ~25,800 palabras analizadas.
// Se carga al final.

// [expresión, significado, ejemplo propio, categoría, qué tan seguido se oye (1-5), consejo]
const STREET = [
  // Muletillas
  ['like', 'muletilla: "o sea", "como que"', "It was, like, really good, like, the best tacos ever.", 'Muletillas', 5, 'Es la palabra más usada al hablar: en lo que estudié salió 2 veces por cada 100 palabras. No significa "gustar" aquí; solo rellena.'],
  ['you know', '"¿sabes?", "o sea"', "I just wanted to, you know, chill for a bit.", 'Muletillas', 4, 'Rellena mientras piensan; no esperan respuesta.'],
  ['I mean', '"o sea", "bueno", "la verdad"', "I mean, it's not bad, but it's not great either.", 'Muletillas', 4, 'Para aclarar o suavizar lo que acaban de decir.'],
  ['kind of / kinda', '"medio", "como que"', "I'm kinda tired, honestly.", 'Muletillas', 4, 'Suaviza: "kinda expensive" = medio caro.'],
  ['literally', '"literalmente" (pero exagerando)', "I literally died laughing.", 'Muletillas', 3, 'Los nativos lo usan para exagerar, aunque no sea literal.'],
  ['honestly', '"la neta", "honestamente"', "Honestly, that was crazy.", 'Muletillas', 3, ''],
  ['basically', '"básicamente", "en resumen"', "So basically, he never showed up.", 'Muletillas', 3, ''],
  ['be like (I was like / she was like)', 'para contar lo que alguien dijo o pensó: "y yo de que…"', "And I was like, 'No way!' and she was like, 'Yes way!'", 'Muletillas', 3, 'Así cuentan las historias: "I\'m like…", "he goes…". No significa "ser como".'],
  // Para hablarle a alguien
  ['bro', 'carnal, amigo (o "¿neta?" si se dice "bro…")', "Bro, you gotta see this.", 'Para hablarle a alguien', 5, 'También como reacción: "Bro…" = "No manches…".'],
  ['dude', 'güey, amigo', "Dude, that's insane.", 'Para hablarle a alguien', 4, 'Lo usan hombres y mujeres.'],
  ['man', 'amigo, hombre (o "¡ay!")', "Man, I'm so hungry.", 'Para hablarle a alguien', 4, '"Man…" al inicio también expresa frustración.'],
  ['boss', 'jefe (para hablarle a un desconocido)', "Hey boss, how much for this?", 'Para hablarle a alguien', 2, 'Como el "jefe" o "patrón" que decimos en México a un desconocido.'],
  ['buddy', 'amigo, compa (a veces burlón)', "Calm down, buddy.", 'Para hablarle a alguien', 2, 'Con tono serio puede sonar retador.'],
  ['my guy', 'mi compa', "My guy! Long time no see.", 'Para hablarle a alguien', 2, ''],
  ['y\'all', 'ustedes (sur de EE. UU. y muy común en redes)', "What are y'all doing tonight?", 'Para hablarle a alguien', 3, ''],
  // Reacciones
  ['no way', '¡no manches!, ¡no puede ser!', "No way! You got the job?", 'Reacciones', 4, ''],
  ['let\'s go!', '¡vamos!, ¡eso!', "We won! Let's gooo!", 'Reacciones', 4, 'Se grita para festejar; alargan la "o".'],
  ['that\'s crazy', '"qué locura" (bueno o malo)', "You met him at Walmart? That's crazy.", 'Reacciones', 4, 'Sirve para sorpresa positiva o negativa; a veces solo es "qué interesante".'],
  ['what the hell', '¿qué demonios?', "What the hell is going on?", 'Reacciones', 4, 'Muy común en bromas y discusiones.'],
  ['come on', '¡ándale! / ¡no inventes!', "Come on, man, that's not fair.", 'Reacciones', 3, ''],
  ['get out!', '¡lárgate! / ¡no te creo!', "Get out! You're lying.", 'Reacciones', 3, 'Depende del tono: enojo o sorpresa.'],
  ['oh my god / oh my gosh', '¡Dios mío!', "Oh my gosh, it's so cute!", 'Reacciones', 3, '"Gosh" es la versión suave.'],
  ['hold up', '¡espérate!, ¡alto ahí!', "Hold up, what did you just say?", 'Reacciones', 3, ''],
  ['I\'m dead', '"me muero de risa"', "That video? I'm dead.", 'Reacciones', 2, ''],
  // Frases del día a día
  ['real quick', '"rapidito"', "Can I check something real quick?", 'Día a día', 3, 'Se dice "real quick", no "really quickly".'],
  ['appreciate it', 'te lo agradezco (sin decir "I")', "Thanks, bro. Appreciate it.", 'Día a día', 3, 'Se comen el "I": "(I) appreciate it".'],
  ['you good?', '¿estás bien? / ¿todo bien?', "You good? You look tired.", 'Día a día', 3, 'También para ofrecer algo: "You good?" = "¿quieres algo?". Respuesta: "I\'m good" (estoy bien / no gracias).'],
  ['you already know', '"ya sabes", "obvio"', "Tacos tonight? You already know.", 'Día a día', 2, 'Para decir que algo es obvio.'],
  ['I can\'t lie', '"no voy a mentir", "la neta"', "I can't lie, that was fire.", 'Día a día', 2, ''],
  ['where\'s that at?', '¿dónde queda eso?', "There's a new taco place. — Where's that at?", 'Día a día', 2, 'Gramaticalmente sobra el "at", pero así se dice al hablar.'],
  ['my go-to', 'lo que siempre eliges, "mi favorito de siempre"', "Iced coffee is my go-to.", 'Día a día', 2, ''],
  ['be down (for)', 'estar dispuesto, apuntarse', "Are you down for a second date?", 'Día a día', 3, '"I\'m down" = me apunto.'],
  ['get down with', 'aceptar algo, que te guste', "Matcha? I could get down with that.", 'Día a día', 1, ''],
  ['pretty much', '"básicamente", "casi"', "That's pretty much it.", 'Día a día', 3, ''],
  ['not a big deal', 'no es para tanto', "Relax, it's not a big deal.", 'Día a día', 3, ''],
  ['there\'s no way', '"no hay manera", "imposible"', "There's no way he ate all that.", 'Día a día', 3, ''],
  ['the fact that…', '"el hecho de que…" (para enfatizar)', "The fact that you remember that is insane.", 'Día a día', 2, ''],
  ['crazy / super + adjetivo', '"súper", "bien" (intensificador)', "This place is crazy expensive.", 'Día a día', 3, '"crazy good", "crazy popular", "super cute".'],
  ['I got (food)', 'pedí / compré', "I got the chicken bowl.", 'Día a día', 3, 'Para comida "got" = "pedí".'],
  ['clock in / clock out', 'checar entrada / salida en el trabajo', "I clock in at 7.", 'Día a día', 2, ''],
  ['on shift / on break', 'en turno / en descanso', "Sorry, I'm on break.", 'Día a día', 2, ''],
  ['sneak peek', 'adelanto, vistazo', "Here's a little sneak peek.", 'Día a día', 2, ''],
  ['take (someone) out', 'invitar a salir', "Can I take you out sometime?", 'Día a día', 2, ''],
  ['pass on', 'decir que no a algo', "I'm gonna have to pass on that.", 'Día a día', 2, 'Forma educada de rechazar.'],
  ['let\'s run it', '"¡va, hagámoslo!"', "One more round? Let's run it.", 'Día a día', 2, ''],
  // Gramática de calle
  ['ain\'t', 'no es / no estoy / no tengo', "That ain't it, bro.", 'Gramática de calle', 3, 'Informal. Entiéndelo; en una entrevista mejor no.'],
  ['he don\'t / she don\'t', 'él no… (en vez de "he doesn\'t")', "He don't care.", 'Gramática de calle', 2, 'Muy común en la calle y en rap, aunque en la escuela es "doesn\'t".'],
  ['you (are) killing me', 'se comen el "are": "me estás matando"', "You killing me, man.", 'Gramática de calle', 2, 'Al hablar rápido desaparecen "are" e "is".'],
  ['gotta / got to', 'tengo que', "I gotta go.", 'Gramática de calle', 3, '"We got to talk" = tenemos que hablar.'],
  ['what\'s your plans', '¿cuáles son tus planes? (singular en vez de plural)', "What's your plans tonight?", 'Gramática de calle', 1, 'Correcto sería "What are your plans?", pero así se oye.'],
  // Slang nuevo (Gen Z)
  ['no cap / cap', 'en serio / mentira', "Best burger ever, no cap. — That's cap.", 'Slang nuevo', 4, '"Cap" = mentira. "No cap" = sin mentir.'],
  ['cooked', '"ya valió", "estás frito"', "We have a test tomorrow and I didn't study. I'm cooked.", 'Slang nuevo', 3, ''],
  ['aura', 'presencia, "flow" que tiene alguien', "He walked in with crazy aura.", 'Slang nuevo', 3, '"-100 aura" = hiciste el ridículo.'],
  ['mid', 'mediocre, "ni fu ni fa"', "The movie was mid.", 'Slang nuevo', 3, ''],
  ['slay / ate', 'lo hizo increíble, "se lució"', "Her outfit? She ate.", 'Slang nuevo', 3, '"She ate (and left no crumbs)" = lo hizo perfecto.'],
  ['let him cook', '"déjalo, que sabe lo que hace"', "Trust the process, let him cook.", 'Slang nuevo', 3, ''],
  ['delulu', 'delirante, ilusionado sin razón', "She thinks he'll text back. She's delulu.", 'Slang nuevo', 2, ''],
  ['lock in / locked in', 'concentrarse a full', "Finals week, time to lock in.", 'Slang nuevo', 3, ''],
  ['touch grass', '"sal a la calle", deja el internet', "You've been online all day, go touch grass.", 'Slang nuevo', 2, ''],
  ['glow up', 'cambio para bien (verse mucho mejor)', "Bro had a major glow up.", 'Slang nuevo', 2, ''],
  ['crash out', 'perder el control, explotar de coraje', "Don't crash out over a game.", 'Slang nuevo', 2, ''],
  ['rizz', 'labia para ligar', "He's got no rizz.", 'Slang nuevo', 3, ''],
  ['glaze / glazing', 'echarle demasiadas flores a alguien', "Stop glazing him, he's not that good.", 'Slang nuevo', 2, ''],
  ['the ick', 'algo que te quita las ganas de alguien', "He chews with his mouth open. Instant ick.", 'Slang nuevo', 2, ''],
  ['green flag', 'buena señal (en una persona)', "He's nice to waiters. Green flag.", 'Slang nuevo', 3, 'Lo contrario de "red flag".'],
  ['W / L', 'victoria / derrota ("take the L" = aceptar que perdiste)', "Free food? Huge W.", 'Slang nuevo', 3, ''],
  ['it\'s giving…', '"da vibras de…"', "That outfit? It's giving rich.", 'Slang nuevo', 2, ''],
  ['bussin', 'buenísimo (comida)', "These tacos are bussin.", 'Slang nuevo', 2, ''],
  ['deadass', 'en serio (muy de Nueva York)', "I'm deadass tired.", 'Slang nuevo', 2, ''],
  // Groserías que más se oyen en estos videos
  ['ass (intensificador)', '"bien", "pinche": "big-ass truck" = troca enorme', "That's a big-ass dog.", 'Groserías frecuentes', 4, '🟡 Fue de las groserías más repetidas: se pega a adjetivos para exagerar. "Your ass" = tú (despectivo).'],
  ['God damn it', '¡maldita sea!', "God damn it, I forgot my keys.", 'Groserías frecuentes', 3, '🟡'],
  ['get the hell out', '¡lárgate de aquí!', "Get the hell out of my store!", 'Groserías frecuentes', 2, '🟡'],
  ['shut up!', '¡cállate! / ¡no te creo!', "Shut up! You won?", 'Groserías frecuentes', 3, '🟢 Entre amigos con sorpresa es positivo.']
];

// Phrasal verbs del día a día (de los canales que enseñan) que faltaban en el diccionario
const STREET_PHRASAL = [
  ['get on', 'subirse (a un camión, avión, bici)'], ['get in', 'subirse (a un carro) / entrar'], ['get off', 'bajarse (del camión) / salir del trabajo'],
  ['set off', 'salir de viaje / hacer sonar (una alarma)'], ['speed up', 'acelerar'], ['back up', 'respaldar / dar reversa'], ['fill up', 'llenar (el tanque)'],
  ['fall over', 'caerse (estando de pie)'], ['put on', 'ponerse (ropa)'], ['take out', 'sacar / invitar a salir'], ['make up for', 'compensar algo'],
  ['talk through', 'explicar paso a paso'], ['figure something out', 'encontrar una solución'], ['clock in', 'checar entrada'], ['clock out', 'checar salida'],
  ['tense up', 'ponerse tenso'], ['let loose', 'soltarse, relajarse'], ['clean up', 'arreglarse / limpiar'], ['come out with', 'sacar (un producto)'], ['look forward to', 'tener ganas de, esperar con emoción']
].map(([k, es]) => ({ k, es, type: 'phrasal' }));
STREET_PHRASAL.forEach(e => { if (!EXPRESSIONS.some(x => x.k === e.k)) { buildExprRe(e); EXPRESSIONS.push(e); } });
// Las expresiones de una sola pieza también se detectan en canciones y en lo que escribes
STREET.forEach(r => {
  const k = r[0].split(/\s*[\/(]/)[0].replace(/…/g, '').trim().toLowerCase();
  if (k.length < 3 || ['like', 'man', 'ass (intensificador)', 'boss', 'bro', 'dude', 'w', 'basically', 'honestly', 'literally'].includes(k) || EXPRESSIONS.some(x => x.k === k || (x.w || []).includes(k))) return;
  const e = { k, es: r[1], type: r[3] === 'Groserías frecuentes' ? 'groseria' : 'slang', w: [k] }; buildExprRe(e); EXPRESSIONS.push(e);
});

/* ---------- Pantalla 🎬 Así hablan en YouTube ---------- */
let ST = { cat: 'Todas', quiz: null, tab: 'list' };
SCREENS.street = () => {
  const cats = ['Todas', ...new Set(STREET.map(r => r[3]))];
  let body = '';
  if (ST.tab === 'list') {
    const list = STREET.filter(r => ST.cat === 'Todas' || r[3] === ST.cat);
    body = `<div class="speedsel">${cats.map(c => `<button data-stc="${esc(c)}" class="${c === ST.cat ? 'sel' : ''}">${esc(c)}</button>`).join('')}</div>
      <div class="card mt">${list.map(r => `<div class="list-item" style="align-items:flex-start"><div class="grow">
        <b style="font-size:1.05rem">${esc(r[0])}</b> <span class="small" title="Qué tan seguido se oye">${'🔥'.repeat(r[4])}</span><br>
        <span>${esc(r[1])}</span><br><span class="small" style="color:var(--blue)">💬 "${esc(r[2])}"</span>${r[5] ? `<br><span class="small muted">💡 ${esc(r[5])}</span>` : ''}</div>
        <div class="row">${sayBtn(r[2], '▶')}${sayBtn(r[2], '🐢', 'lento')}</div></div>`).join('')}</div>
      <p class="small muted">🔥 = qué tan seguido se oye en videos de creadores de EE. UU.</p>`;
  } else {
    if (!ST.quiz || ST.quiz.i >= ST.quiz.items.length && ST.quiz.done) ST.quiz = null;
    if (!ST.quiz) ST.quiz = { items: shuffle(STREET).slice(0, 10).map(r => ({ r, opts: shuffle([r[1], ...shuffle(STREET.filter(x => x !== r)).slice(0, 2).map(x => x[1])]) })), i: 0, ok: 0 };
    const Q = ST.quiz;
    if (Q.i >= Q.items.length) { body = `<div class="card center"><h2>¡Listo!</h2><div class="big">${Q.ok}/${Q.items.length}</div><p class="muted">${Q.ok >= 8 ? '¡Ya entiendes a los youtubers gringos! 😎' : 'Repasa la lista y vuelve a intentarlo.'}</p><button class="btn" id="stagain">Otra ronda</button></div>`; Q.done = true; if (typeof addXP === 'function' && !Q.xp) { Q.xp = 1; addXP(Q.ok); } }
    else { const it = Q.items[Q.i]; body = `<div class="card"><p class="small muted">${Q.i + 1} de ${Q.items.length} · Escuchas esto en un video:</p><p style="font-size:1.25rem">💬 <b>"${esc(it.r[2])}"</b></p><div class="row">${sayBtn(it.r[2], '▶')}${sayBtn(it.r[2], '⚡', 'turbo')}</div>
      <h3 class="mt">¿Qué significa <span class="expr">${esc(it.r[0])}</span> aquí?</h3>${it.opts.map(o => `<button class="opt" data-sto="${esc(o)}">${esc(o)}</button>`).join('')}<div id="stfb"></div></div>`;
      setTimeout(() => speak(it.r[2], 'nativo'), 300); }
  }
  $app.innerHTML = `${topBar(null, 'more')}<h1>🎬 Así hablan en YouTube</h1>
    <p class="muted">Lo que más dicen los creadores de contenido de EE. UU. en vlogs, bromas, citas y podcasts: muletillas, reacciones, slang nuevo, gramática de calle y groserías. Todo explicado en español.</p>
    <div class="tabs"><button data-stt="list" class="${ST.tab === 'list' ? 'sel' : ''}">📚 Expresiones (${STREET.length})</button><button data-stt="quiz" class="${ST.tab === 'quiz' ? 'sel' : ''}">✍️ ¿Qué quiso decir?</button></div>${body}`;
  $app.querySelectorAll('[data-stt]').forEach(b => b.onclick = () => { ST.tab = b.dataset.stt; SCREENS.street(); });
  $app.querySelectorAll('[data-stc]').forEach(b => b.onclick = () => { ST.cat = b.dataset.stc; SCREENS.street(); });
  $app.querySelectorAll('[data-sto]').forEach(b => b.onclick = () => {
    const Q = ST.quiz, it = Q.items[Q.i], ok = b.dataset.sto === it.r[1];
    $app.querySelectorAll('[data-sto]').forEach(o => { o.disabled = true; if (o.dataset.sto === it.r[1]) o.classList.add('ok'); });
    if (!ok) b.classList.add('bad'); else Q.ok++;
    if (typeof SFX !== 'undefined') ok ? SFX.ok(1) : SFX.bad();
    updSkill('listening', ok, 0.05); save();
    document.getElementById('stfb').innerHTML = `<div class="tip mt"><b>${esc(it.r[0])}</b> = ${esc(it.r[1])}${it.r[5] ? `<br><span class="small">💡 ${esc(it.r[5])}</span>` : ''}</div><button class="btn block mt" id="stnx">Siguiente</button>`;
    document.getElementById('stnx').onclick = () => { Q.i++; SCREENS.street(); };
  });
  const ag = document.getElementById('stagain'); if (ag) ag.onclick = () => { ST.quiz = null; SCREENS.street(); };
};

/* ---------- Lección y Dudas ---------- */
LESSONS.splice(LESSONS.findIndex(l => l.id === 'b2-groserias') + 1, 0, {
  id: 'b2-youtube', level: 'B2', title: 'Así hablan los youtubers y la gente en EE. UU.', focus: 'listening',
  goal: 'Vas a aprender cómo hablan de verdad los estadounidenses en videos y en la calle: muletillas (like, you know, I mean), cómo cuentan historias (I was like…), cómo se hablan (bro, dude, boss), reacciones, gramática de calle (ain\'t, he don\'t) y el slang nuevo (no cap, cooked, mid, let him cook).',
  why: 'Estudié transcripciones de creadores nativos y vi que "like" sale 2 veces por cada 100 palabras, y "bro", "dude" y "you know" a cada rato. Si no los conoces, no entiendes ni un video.',
  intro: { en: "Bro, I was like, 'no way,' and he was like, 'deadass.' I'm literally cooked, no cap.", es: 'Güey, yo de que "no manches", y él de que "en serio". Ya valí, neta.' },
  vocab: [['like', 'o sea, como que (muletilla)', 'láik'], ['you know', '¿sabes?', 'iu nóu'], ['I was like', 'y yo de que…', 'ai uás láik'], ['bro / dude', 'güey, carnal', 'bróu / dud'], ['no way', '¡no manches!', 'nóu uéi'], ['real quick', 'rapidito', 'ríl kuík'], ["ain't", 'no es / no estoy', 'éint'], ['no cap', 'en serio, sin mentir', 'nóu kap'], ['cooked', 'ya valí', 'kukt'], ['mid', 'mediocre', 'mid']],
  explain: `<p><b>1. Muletillas.</b> Al hablar, los nativos rellenan muchísimo: <b>like</b>, <b>you know</b>, <b>I mean</b>, <b>kinda</b>, <b>literally</b>, <b>honestly</b>, <b>basically</b>. "It was, like, really, like, good" = "Estuvo, o sea, bien, como que bueno". No las traduzcas: ignóralas al escuchar.</p>
<p><b>2. Contar historias con "be like".</b> En vez de "he said", dicen <b>"he was like…"</b>, <b>"I'm like…"</b> o <b>"she goes…"</b>: "And I was like, 'What?!'" = "Y yo de que '¡¿qué?!'".</p>
<p><b>3. Cómo se hablan.</b> <b>bro</b>, <b>dude</b>, <b>man</b> (amigos), <b>boss</b> (a un desconocido, como "jefe"), <b>buddy</b> (a veces retador), <b>y'all</b> (ustedes).</p>
<p><b>4. Se comen palabras.</b> "(I) appreciate it", "(Are) you good?", "You (are) killing me", "We got to talk" (gotta). Y piden <b>"real quick"</b> (rapidito).</p>
<p><b>5. Gramática de calle.</b> <b>ain't</b> (no es/no tengo), <b>he don't</b> (en vez de doesn't), <b>what's your plans</b>. Entiéndelo; en una entrevista usa la forma correcta.</p>
<p><b>6. Reacciones.</b> <b>No way!</b> · <b>Let's go!</b> · <b>That's crazy</b> (bueno o malo) · <b>Hold up</b> (espérate) · <b>Get out!</b> (¡no te creo!) · <b>What the hell?</b></p>
<p><b>7. Slang nuevo.</b> <b>no cap</b> (en serio) · <b>cap</b> (mentira) · <b>cooked</b> (ya valió) · <b>mid</b> (mediocre) · <b>she ate</b> (se lució) · <b>let him cook</b> (déjalo trabajar) · <b>lock in</b> (concentrarse) · <b>aura</b> · <b>rizz</b> (labia) · <b>W / L</b> (ganar/perder).</p>
<p class="tip">💡 La lista completa con ejemplos y audio está en <b>☰ Más → 🎬 Así hablan en YouTube</b>.</p>`,
  easy: `<p>Piensa en cómo habla un amigo tuyo de la colonia: no dice "considero que", dice "o sea, la neta, güey". Los gringos igual: <b>like</b> = "o sea", <b>bro</b> = "güey", <b>no way</b> = "no manches", <b>for real / no cap</b> = "neta".</p><p>Cuando veas un video, no intentes traducir cada "like" ni cada "you know": son relleno. Escucha las palabras importantes.</p>`,
  memo: ['Asocia cada una con su versión mexicana: like = o sea, bro = güey, no way = no manches, cooked = ya valí, mid = ni fu ni fa.', 'Ve un video corto de un youtuber y cuenta cuántas veces dice "like". Te vas a sorprender.', 'Usa una expresión nueva por día en tus mensajes con amigos.'],
  examples: [["I was like, 'Are you serious?'", 'Y yo de que "¿es en serio?"'], ['Can I ask you something real quick?', '¿Te puedo preguntar algo rapidito?'], ["That movie was mid, no cap.", 'La película estuvo ni fu ni fa, neta.']],
  listen: { text: "Dude, I was literally about to leave, and he's like, 'Hold up, you good?' and I'm like, 'Bro, I'm cooked.'", q: '¿Cómo estaba el que cuenta la historia?', options: ['Muy mal, "ya valió"', 'Muy feliz', 'Con hambre'], a: 0, note: '"I\'m cooked" = ya valí. "You good?" = ¿estás bien? "He\'s like…" = él de que…' },
  speak: ['Can I ask you something real quick?', "No way, that's crazy!", "I was like, 'Are you serious?'"],
  quiz: [
    { q: 'En "It was, like, so good", "like" significa:', options: ['Nada: es muletilla ("o sea")', 'Gustar', 'Como (comparación)'], a: 0, why: 'Al hablar, "like" muchas veces solo rellena.' },
    { q: '"And she was like, \'No!\'" significa:', options: ['Y ella de que "¡No!"', 'Y a ella le gustó', 'Y ella era como no'], a: 0, why: '"be like" sirve para contar lo que alguien dijo.' },
    { q: '"I\'m cooked" significa:', options: ['Ya valí, estoy frito', 'Estoy cocinando', 'Tengo calor'], a: 0, why: 'Slang nuevo: estás en problemas.' },
    { q: 'Un desconocido en la calle te dice "Hey boss". Te está diciendo:', options: ['"Jefe" (forma amistosa)', 'Que eres su jefe', 'Que te vayas'], a: 0, why: 'Como el "jefe" o "patrón" en México.' },
    { q: '"That movie was mid" significa:', options: ['Estuvo ni fu ni fa', 'Estuvo a la mitad', 'Duró mucho'], a: 0, why: 'mid = mediocre.' }
  ]
});
GUIDE.push({ cat: 'Pronunciación', t: 'Cómo hablan de verdad en videos y en la calle (like, bro, I was like...)', b: `<p>Analicé ~25,800 palabras de videos de creadores de EE. UU. Lo que más se repite:</p><p>• <b>like</b> (2 de cada 100 palabras) = "o sea" · <b>you know</b> · <b>I mean</b> · <b>kinda</b><br>• <b>bro, dude, man</b> = güey · <b>boss</b> = "jefe" a un desconocido<br>• <b>I was like / he goes</b> = para contar lo que alguien dijo<br>• Se comen palabras: <b>(I) appreciate it</b>, <b>(are) you good?</b>, <b>gotta</b><br>• Gramática de calle: <b>ain't</b>, <b>he don't</b><br>• Reacciones: <b>no way, let's go, that's crazy, hold up, get out!</b><br>• Slang nuevo: <b>no cap, cooked, mid, ate, let him cook, aura, rizz, W/L</b></p><p>Lista completa: <b>☰ Más → 🎬 Así hablan en YouTube</b>.</p>` });

// Menú Más
const _origMoreSt = SCREENS.more;
SCREENS.more = () => {
  _origMoreSt();
  const first = $app.querySelector('.lesson-row');
  if (first) first.insertAdjacentHTML('beforebegin', `<button class="lesson-row" data-go="street"><span class="dot" style="font-size:1.2rem">🎬</span><span class="grow"><b>Así hablan en YouTube</b><br><span class="small muted">Muletillas, slang nuevo, reacciones y groserías de creadores de EE. UU.</span></span><span>›</span></button>`);
};
const _origGoSt = go;
go = function (name, arg) { _origGoSt(name, arg); if (name === 'street') { const nav = document.getElementById('nav'); nav.hidden = !S.level; nav.querySelectorAll('button').forEach(b => b.classList.toggle('act', b.dataset.go === 'more')); } };

// "I was like…" / "he's like…": la forma de contar historias
(function () {
  const e = { k: 'be like', es: 'contar lo que alguien dijo o pensó: "y yo de que…", "y él de que…"', type: 'slang', w: ['i was like', 'he was like', 'she was like', "i'm like", "he's like", "she's like", 'they were like', 'we were like'] };
  buildExprRe(e); EXPRESSIONS.push(e);
})();
