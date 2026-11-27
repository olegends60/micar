// 🍼 Desde cero: aprender inglés como un niño nativo, paso por paso.
// Escuchar → leer → palabras → quién → acciones → frases de 2 y 3 piezas → ser/estar → -s → negar → preguntar →
// frases para sobrevivir → oído → phrasal verbs. Cada etapa se desbloquea al dominar la anterior.
// Se carga al final.

// Colores de las piezas de una frase
const ROLE = { s: ['quién', '#1d3c8f'], v: ['acción', '#c8323c'], o: ['qué / cosa', '#1f8a4c'], a: ['ayudante', '#7b3fbf'], j: ['cómo es', '#b76e00'], x: ['', '#5c6378'] };

// Una frase: [[palabra, rol, significado literal], ...], español natural
const Z = (parts, es) => ({ parts: parts.map(p => p.split('|')), es });

const ZSTAGES = [
  { id: 'z-sonidos', icon: '👂', t: 'Los sonidos del inglés', kind: 'letters',
    simple: `<p>👶 Un bebé primero <b>escucha</b>, mucho antes de hablar.</p><p>En inglés, <b>las letras suenan distinto</b> que en español. Vamos a escuchar las más importantes: las vocales.</p><p class="tip">🎧 Truco: escucha cada sonido y repítelo en voz alta, aunque te dé risa.</p>`,
    items: [['A', 'éi', '🍎', 'name (néim)'], ['E', 'í', '🐝', 'me (mí)'], ['I', 'ái', '👁️', 'I (ái) = yo'], ['O', 'óu', '⭕', 'no (nóu)'], ['U', 'iú', '🦄', 'you (iú) = tú'], ['Y', 'uái', '❓', 'why (uái) = por qué']] },
  { id: 'z-leer', icon: '📖', t: 'En inglés no se lee como se escribe', kind: 'reading',
    simple: `<p>En español lees letra por letra. En inglés <b>no</b>: muchas letras no suenan o suenan diferente.</p><p>Por eso, como un bebé, primero <b>escuchas</b> la palabra y después la <b>lees</b>.</p><p class="tip">📌 Regla de oro: nunca adivines cómo se pronuncia; tócale ▶ y escúchala.</p>`,
    items: [['water', 'uára', '💧', 'agua', ['waiter', 'winter']], ['know', 'nóu', '🧠', 'saber (la k no suena)', ['now', 'snow']], ['hour', 'áuer', '⏰', 'hora (la h no suena)', ['our', 'her']], ['two', 'tu', '2️⃣', 'dos (suena igual que "to" y "too")', ['tea', 'toe']], ['eight', 'éit', '8️⃣', 'ocho (la gh no suena)', ['eat', 'height']], ['people', 'pípol', '👥', 'gente', ['purple', 'pebble']]] },
  { id: 'z-palabras', icon: '🧱', t: 'Tus primeras palabras', kind: 'vocab',
    simple: `<p>Un bebé aprende primero <b>cosas que ve</b>: mamá, agua, perro...</p><p>Mira el dibujo, escucha la palabra y repítela. No hay gramática todavía: <b>solo palabras</b>.</p>`,
    items: [['hello', 'jelóu', '👋', 'hola'], ['yes', 'iés', '✅', 'sí'], ['no', 'nóu', '❌', 'no'], ['water', 'uára', '💧', 'agua'], ['food', 'fud', '🍔', 'comida'], ['dog', 'dog', '🐶', 'perro'], ['house', 'jáus', '🏠', 'casa'], ['car', 'car', '🚗', 'carro'], ['mom', 'mam', '👩', 'mamá'], ['dad', 'dad', '👨', 'papá'], ['friend', 'frend', '🤝', 'amigo'], ['baby', 'béibi', '👶', 'bebé']] },
  { id: 'z-quien', icon: '👤', t: '¿Quién? (I, you, he, she...)', kind: 'vocab',
    simple: `<p>En español puedes decir "como" y se entiende que eres tú. En inglés <b>no</b>: siempre tienes que decir <b>QUIÉN</b>.</p><p>Estas son las palabras para decir quién:</p>`,
    items: [['I', 'ái', '🙋', 'yo (siempre con mayúscula)'], ['you', 'iú', '👉', 'tú / usted'], ['he', 'jí', '👨', 'él'], ['she', 'shí', '👩', 'ella'], ['we', 'uí', '👨‍👩‍👧', 'nosotros'], ['they', 'déi', '👥', 'ellos / ellas'], ['it', 'it', '📦', 'eso (una cosa o animal)']] },
  { id: 'z-acciones', icon: '🏃', t: 'Acciones (verbos)', kind: 'vocab',
    simple: `<p>Ahora las <b>acciones</b>: lo que alguien hace. En inglés casi nunca cambian: "eat" sirve para "como", "comes", "comemos"...</p><p>¡Mucho más fácil que en español!</p>`,
    items: [['eat', 'it', '🍽️', 'comer'], ['drink', 'drink', '🥤', 'beber / tomar'], ['sleep', 'slíp', '😴', 'dormir'], ['go', 'góu', '🚶', 'ir'], ['want', 'uánt', '🤲', 'querer'], ['like', 'láik', '❤️', 'gustar'], ['have', 'jav', '✋', 'tener'], ['see', 'sí', '👀', 'ver']] },
  { id: 'z-frase2', icon: '🧩', t: 'Tu primera frase: QUIÉN + ACCIÓN', kind: 'build',
    simple: `<p>¡Ya puedes armar tu primera frase! Solo necesitas <b>2 piezas</b>:</p><p style="font-size:1.2rem"><span class="zr" style="background:#1d3c8f">QUIÉN</span> + <span class="zr" style="background:#c8323c">ACCIÓN</span></p><p><b>I eat</b> = Yo como. <b>We go</b> = Nosotros vamos.</p><p class="tip">El orden es igual que en español, solo que <b>quién</b> nunca se puede quitar.</p>`,
    items: [Z(['I|s|yo', 'eat|v|como'], 'Yo como'), Z(['You|s|tú', 'sleep|v|duermes'], 'Tú duermes'), Z(['We|s|nosotros', 'go|v|vamos'], 'Nosotros vamos'), Z(['They|s|ellos', 'drink|v|beben'], 'Ellos beben'), Z(['I|s|yo', 'see|v|veo'], 'Yo veo')] },
  { id: 'z-frase3', icon: '➕', t: 'QUIÉN + ACCIÓN + QUÉ', kind: 'build',
    simple: `<p>Ahora una pieza más: <b>qué</b> (la cosa).</p><p style="font-size:1.2rem"><span class="zr" style="background:#1d3c8f">QUIÉN</span> + <span class="zr" style="background:#c8323c">ACCIÓN</span> + <span class="zr" style="background:#1f8a4c">QUÉ</span></p><p><b>I want water</b> = Yo quiero agua.</p><p class="tip">Ojo: "a" = un/una. <b>a car</b> = un carro.</p>`,
    items: [Z(['I|s|yo', 'want|v|quiero', 'water|o|agua'], 'Quiero agua'), Z(['I|s|yo', 'like|v|me gustan', 'dogs|o|perros'], 'Me gustan los perros'), Z(['You|s|tú', 'have|v|tienes', 'a|x|un', 'car|o|carro'], 'Tienes un carro'), Z(['We|s|nosotros', 'eat|v|comemos', 'food|o|comida'], 'Comemos comida'), Z(['They|s|ellos', 'see|v|ven', 'the|x|la', 'house|o|casa'], 'Ellos ven la casa'), Z(['I|s|yo', 'drink|v|tomo', 'water|o|agua'], 'Tomo agua')] },
  { id: 'z-ser', icon: '🟰', t: 'Ser y estar: am, is, are', kind: 'build',
    pre: [['happy', 'jápi', '😀', 'feliz'], ['tired', 'táierd', '😩', 'cansado'], ['hungry', 'jángri', '🤤', 'con hambre'], ['big', 'big', '🐘', 'grande'], ['small', 'smol', '🐭', 'pequeño']],
    simple: `<p>Para decir <b>cómo eres o cómo estás</b>, el inglés usa una pieza especial: <b>am / is / are</b> (ser o estar, ¡los dos!).</p><ul><li><b>I am</b> → yo soy / estoy</li><li><b>he / she / it is</b> → es / está</li><li><b>you / we / they are</b> → eres, somos, son</li></ul><p style="font-size:1.1rem"><span class="zr" style="background:#1d3c8f">QUIÉN</span> + <span class="zr" style="background:#7b3fbf">AM/IS/ARE</span> + <span class="zr" style="background:#b76e00">CÓMO</span></p><p class="tip">⚠️ "Tengo hambre" en inglés es "<b>I am hungry</b>" (estoy con hambre).</p>`,
    items: [Z(['I|s|yo', 'am|a|estoy', 'happy|j|feliz'], 'Estoy feliz'), Z(['You|s|tú', 'are|a|estás', 'tired|j|cansado'], 'Estás cansado'), Z(['She|s|ella', 'is|a|tiene', 'hungry|j|hambre'], 'Ella tiene hambre'), Z(['It|s|eso', 'is|a|es', 'big|j|grande'], 'Es grande'), Z(['We|s|nosotros', 'are|a|somos', 'friends|o|amigos'], 'Somos amigos')] },
  { id: 'z-s', icon: '🐍', t: 'La -s de él y ella', kind: 'build',
    simple: `<p>Solo hay <b>un cambio</b> en las acciones: cuando hablas de <b>él</b>, <b>ella</b> o <b>eso</b>, la acción lleva una <b>-s</b> al final.</p><ul><li>I eat → <b>He eat<u>s</u></b></li><li>I like → <b>She like<u>s</u></b></li></ul><p class="tip">🐍 Imagina una serpiente "sss" que siempre acompaña a he y she.</p>`,
    items: [Z(['He|s|él', 'eats|v|come'], 'Él come'), Z(['She|s|ella', 'drinks|v|toma', 'water|o|agua'], 'Ella toma agua'), Z(['He|s|él', 'likes|v|le gustan', 'dogs|o|perros'], 'A él le gustan los perros'), Z(['She|s|ella', 'sleeps|v|duerme'], 'Ella duerme'), Z(['It|s|eso', 'eats|v|come', 'food|o|comida'], 'Come comida')] },
  { id: 'z-no', icon: '➖', t: 'Decir que NO', kind: 'build',
    simple: `<p>En español solo pones "no". En inglés necesitas un <b>ayudante</b>: <b>don't</b> (do not).</p><p style="font-size:1.1rem"><span class="zr" style="background:#1d3c8f">QUIÉN</span> + <span class="zr" style="background:#7b3fbf">DON'T</span> + <span class="zr" style="background:#c8323c">ACCIÓN</span></p><p><b>I don't want</b> = No quiero.</p><p>Con am/is/are es más fácil: solo agregas <b>not</b>: <b>I am not tired</b>.</p>`,
    items: [Z(["I|s|yo", "don't|a|no", 'want|v|quiero', 'water|o|agua'], 'No quiero agua'), Z(['You|s|tú', "don't|a|no", 'like|v|te gustan', 'dogs|o|perros'], 'No te gustan los perros'), Z(['We|s|nosotros', "don't|a|no", 'have|v|tenemos', 'a|x|un', 'car|o|carro'], 'No tenemos carro'), Z(['I|s|yo', 'am|a|estoy', 'not|a|no', 'tired|j|cansado'], 'No estoy cansado')] },
  { id: 'z-preguntar', icon: '❓', t: 'Hacer preguntas', kind: 'build',
    simple: `<p>Para preguntar, el ayudante se va <b>al principio</b>. Es como los signos ¿? del español.</p><p style="font-size:1.1rem"><span class="zr" style="background:#7b3fbf">DO</span> + <span class="zr" style="background:#1d3c8f">QUIÉN</span> + <span class="zr" style="background:#c8323c">ACCIÓN</span> ?</p><p><b>Do you want water?</b> = ¿Quieres agua?</p><p>Con am/is/are, solo lo pasas al frente: You are happy → <b>Are you happy?</b></p>`,
    items: [Z(['Do|a|¿(ayudante)', 'you|s|tú', 'want|v|quieres', 'water|o|agua?'], '¿Quieres agua?'), Z(['Do|a|¿(ayudante)', 'you|s|tú', 'like|v|te gustan', 'dogs|o|perros?'], '¿Te gustan los perros?'), Z(['Are|a|¿estás', 'you|s|tú', 'happy|j|feliz?'], '¿Estás feliz?'), Z(['Is|a|¿está', 'she|s|ella', 'tired|j|cansada?'], '¿Ella está cansada?')] },
  { id: 'z-sobrevivir', icon: '🆘', t: 'Frases para sobrevivir', kind: 'vocab',
    simple: `<p>Estas frases te salvan en la vida real aunque todavía no sepas mucho. Apréndelas <b>como bloques completos</b>, igual que un niño dice "gracias" sin saber gramática.</p>`,
    items: [['Thank you', 'zénk iu', '🙏', 'gracias'], ['Please', 'plíis', '🥺', 'por favor'], ['Sorry', 'sóri', '😅', 'perdón'], ["I don't understand", 'ai dóunt anderstánd', '🤷', 'no entiendo'], ['Can you repeat?', 'kéniu ripít', '🔁', '¿puede repetir?'], ['Slowly, please', 'slóuli plíis', '🐢', 'más despacio, por favor'], ['My name is...', 'mái néim is', '📛', 'me llamo...'], ['How much is it?', 'jáu mach is it', '💲', '¿cuánto cuesta?']] },
  { id: 'z-oido', icon: '🎧', t: 'Entrena tu oído', kind: 'listen',
    simple: `<p>Ahora vas a escuchar frases que ya conoces, <b>primero lento y luego normal</b>.</p><p class="tip">🎧 Cómo entrenar como nativo: escucha, repite en voz alta imitando el ritmo, y vuelve a escuchar. 5 minutos diarios hacen milagros.</p>` },
  { id: 'z-phrasal', icon: '🔗', t: 'Palabras que se juntan (phrasal verbs)', kind: 'vocab',
    simple: `<p>Ya estás listo para algo nuevo: a veces <b>dos palabras juntas significan otra cosa</b>.</p><p><b>get</b> = conseguir · <b>up</b> = arriba · pero <b>get up</b> = <b>levantarse</b> 🛏️</p><p>Se llaman <b>phrasal verbs</b>. No se traducen palabra por palabra: se aprenden <b>como una sola palabra</b>.</p>`,
    items: [['get up', 'guet ap', '🛏️', 'levantarse'], ['wake up', 'uéik ap', '⏰', 'despertarse'], ['sit down', 'sit dáun', '🪑', 'sentarse'], ['come in', 'kam in', '🚪', 'pasar / entrar'], ['turn off', 'tern of', '💡', 'apagar'], ['give up', 'guiv ap', '🏳️', 'rendirse']] }
];

/* ---------- Construcción de los pasos de cada etapa ---------- */
const zVocabPool = () => ZSTAGES.filter(s => s.kind === 'vocab').flatMap(s => s.items);
function zSteps(st) {
  const steps = [{ type: 'info' }];
  if (st.kind === 'letters') {
    st.items.forEach(it => steps.push({ type: 'learn', it: { en: it[0], pron: it[1], emoji: it[2], es: 'ejemplo: ' + it[3] }, say: it[0] }));
    shuffle(st.items).forEach(it => steps.push({ type: 'pick', q: '🎧 ¿Qué letra escuchaste?', say: it[0], answer: it[0], opts: shuffle([it[0], ...shuffle(st.items.filter(x => x !== it).map(x => x[0])).slice(0, 2)]) }));
  } else if (st.kind === 'reading') {
    st.items.forEach(it => steps.push({ type: 'learn', it: { en: it[0], pron: it[1], emoji: it[2], es: it[3] }, say: it[0] }));
    shuffle(st.items).forEach(it => steps.push({ type: 'pick', q: '🎧 Escucha y elige cómo se ESCRIBE', say: it[0], answer: it[0], opts: shuffle([it[0], ...it[4]]) }));
  } else if (st.kind === 'vocab') {
    const groups = []; for (let i = 0; i < st.items.length; i += 4) groups.push(st.items.slice(i, i + 4));
    groups.forEach(g => {
      g.forEach(it => steps.push({ type: 'learn', it: { en: it[0], pron: it[1], emoji: it[2], es: it[3] }, say: it[0] }));
      shuffle(g).forEach((it, k) => {
        const others = shuffle(st.items.filter(x => x !== it)).slice(0, 2);
        if (k % 2 === 0) steps.push({ type: 'pick', q: '🎧 ¿Qué significa lo que escuchaste?', say: it[0], answer: it[2] + ' ' + it[3], opts: shuffle([it, ...others].map(x => x[2] + ' ' + x[3])) });
        else steps.push({ type: 'pick', q: `${it[2]} ¿Cómo se dice "${it[3]}"?`, answer: it[0], opts: shuffle([it, ...others].map(x => x[0])), sayAfter: it[0] });
      });
    });
    steps.push({ type: 'speak', text: st.items[Math.floor(Math.random() * st.items.length)][0] });
  } else if (st.kind === 'build') {
    (st.pre || []).forEach(it => steps.push({ type: 'learn', it: { en: it[0], pron: it[1], emoji: it[2], es: it[3] }, say: it[0] }));
    st.items.forEach((sen, k) => { if (k === 0) steps.push({ type: 'example', sen }); steps.push({ type: 'build', sen }); });
    steps.push({ type: 'speak', text: st.items[st.items.length - 1].parts.map(p => p[0]).join(' ') });
  } else if (st.kind === 'listen') {
    const sens = shuffle(ZSTAGES.filter(s => s.kind === 'build').flatMap(s => s.items)).slice(0, 6);
    sens.forEach((sen, k) => {
      const en = sen.parts.map(p => p[0]).join(' ');
      const others = shuffle(ZSTAGES.filter(s => s.kind === 'build').flatMap(s => s.items).filter(x => x !== sen)).slice(0, 2).map(x => x.es);
      steps.push({ type: 'pick', q: k < 3 ? '🐢 Escucha (lento): ¿qué significa?' : '🎧 Escucha (normal): ¿qué significa?', say: en, speed: k < 3 ? 'lento' : 'normal', answer: sen.es, opts: shuffle([sen.es, ...others]), reveal: en });
    });
  }
  steps.push({ type: 'done' });
  return steps;
}

/* ---------- Pantallas ---------- */
function zUnlocked(i) { return i === 0 || (S.zeroProg && S.zeroProg[ZSTAGES[i - 1].id] >= 70); }
function zCurrent() { const i = ZSTAGES.findIndex((s, k) => zUnlocked(k) && !(S.zeroProg && S.zeroProg[s.id] >= 70)); return i < 0 ? ZSTAGES.length : i; }
SCREENS.zero = () => {
  S.zeroProg = S.zeroProg || {};
  const cur = zCurrent();
  $app.innerHTML = `${topBar(null, 'home')}<div class="card hero"><div style="font-size:2.6rem">🍼</div><h1 style="color:#fff">Inglés desde cero</h1>
    <p class="muted mb0">Como un niño que aprende inglés en casa: primero escuchas, luego palabras, luego frases pequeñitas. Cada etapa se abre cuando dominas la anterior (70% o más).</p>
    <div class="bar mt" style="background:rgba(255,255,255,.2)"><i style="width:${pct(Math.min(cur, ZSTAGES.length), ZSTAGES.length)}%;background:#f2b705"></i></div><p class="small muted mt mb0">${Math.min(cur, ZSTAGES.length)} de ${ZSTAGES.length} etapas</p></div>
    <div class="zpath">${ZSTAGES.map((s, i) => { const done = S.zeroProg[s.id] >= 70, open = zUnlocked(i); return `<button class="znode ${done ? 'done' : ''} ${open ? '' : 'locked'} ${i === cur ? 'cur' : ''}" data-zs="${i}" ${open ? '' : 'disabled'} style="margin-left:${[0, 40, 70, 40][i % 4]}px"><span class="zcircle">${done ? '✓' : open ? s.icon : '🔒'}</span><span class="zlabel"><b>${i + 1}. ${esc(s.t)}</b>${done ? `<br><span class="small">${S.zeroProg[s.id]}%</span>` : i === cur ? '<br><span class="small" style="color:var(--red)">← te toca</span>' : ''}</span></button>`; }).join('')}</div>
    ${cur >= ZSTAGES.length ? `<div class="card center"><h2>🎓 ¡Terminaste el camino desde cero!</h2><p>Ya entiendes cómo funciona el inglés. Ahora sigue con las lecciones normales.</p><button class="btn red" id="zgrad">Ir a mis lecciones</button></div>` : ''}
    <p class="small muted center">Puedes seguir usando el resto de la app cuando quieras.</p>`;
  $app.querySelectorAll('[data-zs]').forEach(b => b.onclick = () => { const st = ZSTAGES[+b.dataset.zs]; ZR = { st, steps: zSteps(st), i: 0, ok: 0, total: 0 }; go('zeroRun'); });
  const g = document.getElementById('zgrad'); if (g) g.onclick = () => { S.zero = false; save(); go('path'); };
};
let ZR = null;
function zGloss(sen, showRoles = true) {
  return `<div class="zgloss">${sen.parts.map(([w, r, es]) => `<div class="zw"><button class="say zword" data-sayw="${esc(w.replace(/[?.,]/g, ''))}" style="border-color:${ROLE[r][1]};color:${ROLE[r][1]}">${esc(w)}</button><span class="small">${esc(es)}</span>${showRoles && ROLE[r][0] ? `<span class="zrole" style="color:${ROLE[r][1]}">${ROLE[r][0]}</span>` : ''}</div>`).join('')}</div>`;
}
function zFx(ok) {
  if (typeof SFX !== 'undefined') ok ? SFX.ok(1) : SFX.bad();
  if (ok && typeof addXP === 'function') addXP(1);
}
SCREENS.zeroRun = () => {
  const st = ZR.st, step = ZR.steps[ZR.i];
  const prog = pct(ZR.i, ZR.steps.length - 1);
  const next = () => { ZR.i++; SCREENS.zeroRun(); window.scrollTo(0, 0); };
  let h = `${topBar(prog, 'zero')}<p class="tag">🍼 Etapa ${ZSTAGES.indexOf(st) + 1} · ${esc(st.t)}</p>`;
  if (step.type === 'info') {
    h += `<div class="card mt center"><div style="font-size:3rem">${st.icon}</div><h1>${esc(st.t)}</h1></div><div class="card explain">${st.simple}</div><button class="btn block red" id="znx">¡Empecemos!</button>`;
  } else if (step.type === 'learn') {
    const it = step.it;
    h += `<div class="card mt center zcard"><div style="font-size:4.2rem;line-height:1.1">${it.emoji}</div><div class="zbig">${esc(it.en)}</div><div class="pron">🗣️ se dice: <b>${esc(it.pron)}</b></div><p class="mt mb0" style="font-size:1.15rem">= ${esc(it.es)}</p>
      <div class="row mt" style="justify-content:center">${sayBtn(step.say, '▶ Escuchar')}${sayBtn(step.say, '🐢 Lento', 'lento')}</div></div>
      <p class="small muted center">Escúchala y repítela en voz alta 2 veces 🗣️</p><button class="btn block" id="znx">Ya la repetí ✓</button>`;
    setTimeout(() => speak(step.say, 'lento'), 350);
  } else if (step.type === 'pick') {
    h += `<div class="card mt"><h2>${esc(step.q)}</h2>${step.say ? `<div class="row">${sayBtn(step.say, '▶ Escuchar', step.speed)}${sayBtn(step.say, '🐢', 'lento')}</div>` : ''}
      ${step.opts.map(o => `<button class="opt" data-zo="${esc(o)}">${esc(o)}</button>`).join('')}<div id="zfb"></div></div>`;
    if (step.say) setTimeout(() => speak(step.say, step.speed || 'lento'), 350);
  } else if (step.type === 'example') {
    const en = step.sen.parts.map(p => p[0]).join(' ');
    h += `<div class="card mt"><h2>Mira cómo se arma</h2><p class="small muted">Cada color es una pieza. Toca cada palabra para escucharla.</p>${zGloss(step.sen)}
      <p class="mt">🇲🇽 <b>${esc(step.sen.es)}</b></p><div class="row">${sayBtn(en, '▶ Escuchar frase')}${sayBtn(en, '🐢', 'lento')}</div></div>
      <div class="card"><p class="small mb0">💡 <b>Palabra por palabra</b> (literal, como lo piensa un nativo): ${step.sen.parts.map(p => `<b>${esc(p[0])}</b> = ${esc(p[2])}`).join(' · ')}</p></div>
      <button class="btn block red" id="znx">¡Ahora tú! Arma frases</button>`;
    setTimeout(() => speak(en, 'lento'), 350);
  } else if (step.type === 'build') {
    if (!step.pool) {
      const words = step.sen.parts.map(p => p[0]);
      const extra = shuffle(['the', 'is', 'eat', 'you', 'not', 'a', 'go', 'likes', 'are', 'do'].filter(w => !words.includes(w))).slice(0, ZSTAGES.indexOf(st) >= 8 ? 2 : 1);
      step.pool = shuffle([...words, ...extra].map((w, k) => ({ w, k }))); step.placed = [];
    }
    h += `<div class="card mt"><p class="small muted mb0">Arma en inglés:</p><h2 class="mt">🇲🇽 "${esc(step.sen.es)}"</h2>
      <details class="small"><summary>🤔 Ayuda: ¿qué piezas necesito?</summary><p class="mt mb0">${step.sen.parts.map(p => `<span style="color:${ROLE[p[1]][1]}"><b>${ROLE[p[1]][0] || 'palabrita'}</b> (${esc(p[2])})</span>`).join(' + ')}</p></details>
      <div class="zanswer" id="zans">${step.placed.map((t, k) => `<button class="ztile" data-back="${k}">${esc(t.w)}</button>`).join('') || '<span class="muted small">Toca las fichas en orden 👇</span>'}</div>
      <div class="zpool">${step.pool.map((t, k) => step.placed.includes(t) ? `<span class="ztile ghost">${esc(t.w)}</span>` : `<button class="ztile" data-take="${k}">${esc(t.w)}</button>`).join('')}</div>
      <div id="zfb"></div></div>${step.checked ? '' : `<button class="btn block" id="zcheck" ${step.placed.length ? '' : 'disabled'}>Revisar</button>`}`;
  } else if (step.type === 'speak') {
    h += `<div class="card mt center"><h2>🗣️ Dilo en voz alta</h2><p class="zbig">${esc(step.text)}</p><div class="row" style="justify-content:center">${sayBtn(step.text, '▶ Escuchar')}${sayBtn(step.text, '🐢', 'lento')}</div>${micBlock('zmic')}<div id="zsres"></div></div>
      <button class="btn block ghost" id="znx">${canListen ? 'Saltar' : 'Ya lo dije ✓'}</button>`;
    setTimeout(() => speak(step.text, 'lento'), 350);
  } else if (step.type === 'done') {
    const sc = pct(ZR.ok, ZR.total || 1);
    S.zeroProg = S.zeroProg || {}; S.zeroProg[st.id] = Math.max(S.zeroProg[st.id] || 0, sc); save();
    const passed = sc >= 70, idx = ZSTAGES.indexOf(st), nxt = ZSTAGES[idx + 1];
    h += `<div class="card mt center"><div style="font-size:3.4rem">${passed ? '🎉' : '💪'}</div><h2>${passed ? '¡Etapa superada!' : '¡Casi!'}</h2><div class="big">${sc}%</div>
      <p class="muted">${passed ? (nxt ? `Desbloqueaste: <b>${nxt.icon} ${esc(nxt.t)}</b>` : '¡Terminaste todo el camino desde cero!') : 'Necesitas 70% para abrir la siguiente etapa. Repítela: así aprenden los niños, repitiendo.'}</p></div>
      <div class="row"><button class="btn ghost grow" id="zagain">Repetir etapa</button><button class="btn red grow" id="zback">${passed && nxt ? 'Siguiente etapa' : 'Ver mi camino'}</button></div>`;
    if (passed && typeof confetti === 'function') { confetti(110); SFX.fanfare(); }
    if (typeof addXP === 'function') addXP(5 + Math.round(sc / 20));
  }
  $app.innerHTML = h;
  // Eventos
  const nx = document.getElementById('znx'); if (nx) nx.onclick = next;
  $app.querySelectorAll('[data-zo]').forEach(b => b.onclick = () => {
    const ok = b.dataset.zo === step.answer; ZR.total++; if (ok) ZR.ok++; zFx(ok);
    $app.querySelectorAll('[data-zo]').forEach(o => { o.disabled = true; if (o.dataset.zo === step.answer) o.classList.add('ok'); });
    if (!ok) b.classList.add('bad');
    if (step.sayAfter) speak(step.sayAfter, 'lento');
    document.getElementById('zfb').innerHTML = `<div class="tip mt">${ok ? '✅ ¡Muy bien!' : '❌ La respuesta era: <b>' + esc(step.answer) + '</b>'}${step.reveal ? `<br>🎧 "${esc(step.reveal)}"` : ''}</div><button class="btn block mt" id="znx2">Continuar</button>`;
    document.getElementById('znx2').onclick = next;
  });
  if (step.type === 'build') {
    $app.querySelectorAll('[data-take]').forEach(b => b.onclick = () => { step.placed.push(step.pool[+b.dataset.take]); speak(step.pool[+b.dataset.take].w, 'normal'); SCREENS.zeroRun(); });
    $app.querySelectorAll('[data-back]').forEach(b => b.onclick = () => { if (step.checked) return; step.placed.splice(+b.dataset.back, 1); SCREENS.zeroRun(); });
    const ck = document.getElementById('zcheck');
    if (ck) ck.onclick = () => {
      const target = step.sen.parts.map(p => p[0].replace(/[?.,]/g, '').toLowerCase()).join(' ');
      const got = step.placed.map(t => t.w.replace(/[?.,]/g, '').toLowerCase()).join(' ');
      const ok = got === target; step.checked = true; ZR.total++; if (ok) ZR.ok++; zFx(ok);
      const en = step.sen.parts.map(p => p[0]).join(' ');
      SCREENS.zeroRun();
      document.getElementById('zfb').innerHTML = `<div class="tip mt">${ok ? '✅ ¡Perfecto! Así se arma:' : `❌ Casi. Tú pusiste: <b>${esc(step.placed.map(t => t.w).join(' '))}</b><br>Lo correcto es:`}</div>${zGloss(step.sen)}
        ${ok ? '' : `<p class="small mt">💡 Recuerda el orden: ${step.sen.parts.map(p => `<span style="color:${ROLE[p[1]][1]}"><b>${ROLE[p[1]][0] || esc(p[0])}</b></span>`).join(' → ')}</p>`}
        <div class="row">${sayBtn(en, '▶ Escuchar')}${sayBtn(en, '🐢', 'lento')}</div><button class="btn block mt" id="znx2">Continuar</button>`;
      document.getElementById('znx2').onclick = next;
      speak(en, 'lento');
    };
  }
  const m = document.getElementById('zmic');
  if (m) m.onclick = async () => {
    m.classList.add('on'); document.getElementById('zmic-st').textContent = 'Escuchando...';
    try {
      const alts = await listen(t => document.getElementById('zmic-st').textContent = '🎧 ' + t); m.classList.remove('on');
      const r = bestCompare(step.text, alts); ZR.total++; if (r.score >= 60) ZR.ok++; zFx(r.score >= 60); updSkill('speaking', r.score >= 60, 0.1);
      document.getElementById('zsres').innerHTML = speakResult(r); document.getElementById('znx').textContent = 'Continuar';
    } catch (e) { m.classList.remove('on'); micError(e, 'zmic-st'); }
  };
  const ag = document.getElementById('zagain'); if (ag) ag.onclick = () => { ZR = { st, steps: zSteps(st), i: 0, ok: 0, total: 0 }; SCREENS.zeroRun(); };
  const bk = document.getElementById('zback');
  if (bk) bk.onclick = () => { const idx = ZSTAGES.indexOf(st), nxt = ZSTAGES[idx + 1]; if (S.zeroProg[st.id] >= 70 && nxt) { ZR = { st: nxt, steps: zSteps(nxt), i: 0, ok: 0, total: 0 }; SCREENS.zeroRun(); } else go('zero'); };
};
(function () {
  const stl = document.createElement('style');
  stl.textContent = `.zr{color:#fff;border-radius:8px;padding:2px 8px;font-weight:700;font-size:.9rem}
.zpath{display:flex;flex-direction:column;gap:6px;margin:14px 0}
.znode{display:flex;align-items:center;gap:12px;background:none;border:0;cursor:pointer;text-align:left;font:inherit;color:inherit;padding:4px}
.zcircle{flex:none;width:62px;height:62px;border-radius:50%;display:grid;place-items:center;font-size:1.7rem;background:#fff;border:4px solid var(--blue-soft);box-shadow:0 4px 0 #cdd6ea}
.znode.cur .zcircle{border-color:var(--red);animation:pop 1.4s infinite}.znode.done .zcircle{background:var(--green);color:#fff;border-color:var(--green);box-shadow:0 4px 0 #156b3a}
.znode.locked{opacity:.45;cursor:default}.zlabel{font-size:.92rem}
.zbig{font-size:2.2rem;font-weight:800}.zcard{padding:24px 18px}
.zgloss{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}.zw{display:flex;flex-direction:column;align-items:center;text-align:center;min-width:56px}
.zword{border:2px solid;background:#fff;font-size:1.05rem;font-weight:700}.zrole{font-size:.68rem;font-weight:700;text-transform:uppercase;margin-top:2px}
.zanswer{min-height:58px;border-bottom:2px dashed var(--line);display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:10px 0;margin:10px 0}
.zpool{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}
.ztile{border:2px solid var(--line);border-bottom-width:4px;background:#fff;border-radius:12px;padding:10px 14px;font:700 1.05rem system-ui,sans-serif;color:var(--ink);cursor:pointer}
.ztile.ghost{color:transparent;background:#ece8de;border-color:#ece8de}`;
  document.head.appendChild(stl);
})();

/* =========================================================
   Detección: ¿hay que empezar desde cero?
   ========================================================= */
function activateZero() {
  S.zero = true; S.settings.showText = true;
  if (['nativo', 'turbo'].includes(S.settings.speed)) S.settings.speed = 'normal';
  save();
}
function offerZero(title, text) {
  const d = document.createElement('div'); d.className = 'celebrate';
  d.innerHTML = `<div class="cel-box"><div class="cel-icon">🍼</div><h2>${title}</h2><p class="muted">${text}</p>
    <button class="btn block red" id="zyes">Sí, empezar desde cero</button><button class="btn block plain mt" id="zno">No, seguir como voy</button></div>`;
  document.body.appendChild(d);
  d.querySelector('#zyes').onclick = () => { d.remove(); activateZero(); go('zero'); };
  d.querySelector('#zno').onclick = () => { d.remove(); S.zeroDeclined = Date.now(); save(); };
}
// 1) Encuesta: "No sé nada" → opción directa sin examen
const _origTestIntro = SCREENS.testIntro;
SCREENS.testIntro = () => {
  _origTestIntro();
  const none = S.profile && S.profile.self === 0;
  const go1 = document.getElementById('go');
  if (go1) go1.insertAdjacentHTML(none ? 'beforebegin' : 'afterend', `<div class="card ${none ? 'hero' : ''} mt"><h3 ${none ? 'style="color:#fff"' : ''}>🍼 ¿No sabes nada de inglés?</h3><p class="small ${none ? 'muted' : ''}">Empieza como un niño nativo: primero sonidos, luego palabras, luego frases pequeñitas. Sin examen y sin presión.</p><button class="btn block ${none ? 'red' : 'ghost'}" id="zstart">Empezar desde cero</button></div>`);
  const zs = document.getElementById('zstart');
  if (zs) zs.onclick = () => { S.level = 'A1'; S.skills = { listening: 5, speaking: 5, grammar: 5, vocab: 5 }; activateZero(); touchStreak(); save(); go('zero'); };
};
// 2) Examen muy bajo → se recomienda
const _origResults = SCREENS.results;
SCREENS.results = () => {
  _origResults();
  const res = (typeof PT !== 'undefined' && PT && PT.res) ? PT.res.filter(r => r.ok !== null) : [];
  const acc = res.length ? pct(res.filter(r => r.ok).length, res.length) : 100;
  if ((S.profile && S.profile.self === 0) || acc < 35) {
    const first = $app.querySelector('.card');
    if (first) first.insertAdjacentHTML('afterend', `<div class="card" style="border:3px solid var(--red)"><h3>🍼 Te recomiendo empezar desde cero</h3><p class="small">${acc < 35 ? `Acertaste ${acc}% del examen.` : 'Dijiste que no sabes nada de inglés.'} Vamos a ir como un niño que aprende en casa: sonidos → palabras → frases de 2 piezas → de 3... sin que todo te llegue de golpe.</p><button class="btn block red" id="zrec">Empezar desde cero</button></div>`);
    document.getElementById('zrec').onclick = () => { activateZero(); go('zero'); };
  }
};
// 3) Falla mucho en las lecciones → se ofrece
const _origLessonZ = SCREENS.lesson;
SCREENS.lesson = () => {
  const finishing = L && L.steps[L.step] === 'summary' && !L._zero;
  _origLessonZ();
  if (!finishing) return;
  L._zero = true;
  const sc = pct(L.ok, L.total);
  S.lowScores = (S.lowScores || []).concat(sc).slice(-3); save();
  const recentLow = S.lowScores.filter(x => x < 50).length;
  const declinedRecently = S.zeroDeclined && Date.now() - S.zeroDeclined < 3 * 86400000;
  if (!S.zero && recentLow >= 2 && !declinedRecently && LEVELS.indexOf(S.level) <= 1)
    setTimeout(() => offerZero('Vamos más despacio', 'Veo que las últimas lecciones se te complicaron. No pasa nada: ¿quieres que empecemos desde cero, como un niño, paso por paso? Te explico todo sin que te llegue de golpe.'), 1500);
};

/* =========================================================
   Integración: Inicio, Lecciones y Más
   ========================================================= */
function zeroCard() {
  const cur = zCurrent(), st = ZSTAGES[Math.min(cur, ZSTAGES.length - 1)];
  return `<div class="card" style="border:3px solid var(--amber);background:#fffaf0"><div class="row"><span style="font-size:2rem">🍼</span><div class="grow"><b>Inglés desde cero</b><br><span class="small muted">${cur >= ZSTAGES.length ? '¡Terminado! 🎓' : `Etapa ${cur + 1} de ${ZSTAGES.length}: ${st.icon} ${esc(st.t)}`}</span></div></div>
    <div class="bar mt"><i style="width:${pct(Math.min(cur, ZSTAGES.length), ZSTAGES.length)}%;background:var(--amber)"></i></div>
    <button class="btn block red mt" data-go="zero">${cur >= ZSTAGES.length ? 'Ver mi camino' : 'Continuar desde cero'}</button></div>`;
}
const _origHomeZ = SCREENS.home;
SCREENS.home = () => {
  _origHomeZ();
  if (screen !== 'home' || !S.zero) return;
  const hero = $app.querySelector('.card.hero');
  if (hero) hero.insertAdjacentHTML('afterend', zeroCard());
};
const _origPathZ = SCREENS.path;
SCREENS.path = () => {
  _origPathZ();
  const h1 = $app.querySelector('h1');
  if (h1) h1.insertAdjacentHTML('afterend', S.zero ? zeroCard() : `<button class="lesson-row" data-go="zero"><span class="dot">🍼</span><span class="grow"><b>Inglés desde cero</b><br><span class="small muted">Si se te complica todo, empieza aquí: como un niño, paso por paso</span></span><span>›</span></button>`);
};
const _origMoreZ = SCREENS.more;
SCREENS.more = () => {
  _origMoreZ();
  const first = $app.querySelector('.lesson-row');
  if (first) first.insertAdjacentHTML('beforebegin', `<button class="lesson-row" data-go="zero"><span class="dot" style="font-size:1.2rem">🍼</span><span class="grow"><b>Inglés desde cero</b><br><span class="small muted">Sonidos, palabras y frases pequeñitas, paso por paso</span></span><span>›</span></button>`);
};
// Que las pantallas nuevas muestren la barra de abajo
const _origGoZ = go;
go = function (name, arg) { _origGoZ(name, arg); if (name === 'zero') { const nav = document.getElementById('nav'); nav.hidden = !S.level; nav.querySelectorAll('button').forEach(b => b.classList.toggle('act', b.dataset.go === 'path')); } };
