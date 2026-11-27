// 🧭 Contexto: (1) tarjetas "el inglés no se traduce palabra por palabra" y
// (2) un solo significado (máximo dos) según el contexto al tocar palabras o frases.
// Se carga al final.

/* =========================================================
   1) Un significado según el contexto
   ========================================================= */
const unaccent = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
// Separa "aguantar, esperar, sujetarse" o "mirar hacia arriba / buscar información" en opciones limpias
function splitMeanings(es) {
  // Protege aclaraciones cortas entre paréntesis, ej. "sonar (alarma)", para no partirlas
  return (es || '').replace(/^[🟢🟡🔴⛔\s]+/u, '')
    .replace(/\(([^)]{1,25})\)/g, (m, inner) => '‹' + inner.replace(/,/g, '¸').replace(/\//g, '∕') + '›').replace(/\([^)]*\)/g, '')
    .split(/\s*(?:\/|,|;|·|\so\s)\s*/)
    .map(x => x.replace(/^["“]+|["”.]+$/g, '').replace(/‹/g, '(').replace(/›/g, ')').replace(/¸/g, ',').replace(/∕/g, '/').trim())
    .filter(x => x && x.length < 60);
}
// Raíces de las palabras (para comparar "aguantar" con "aguanta", "aguantando"...)
const stems = s => unaccent(s).replace(/[^a-zñ ]/g, ' ').split(/\s+/).filter(w => w.length > 2 && !['que', 'los', 'las', 'del', 'una', 'uno', 'por', 'para', 'con', 'como', 'algo', 'alguien'].includes(w)).map(w => w.slice(0, Math.max(4, Math.min(6, w.length - 2))));
// Elige la opción que aparece en la traducción del verso/oración; si ninguna aparece, la primera (la más común)
function pickMeaning(options, ctxEs) {
  const opts = options.filter(Boolean); if (!opts.length) return { best: '', alt: '' };
  const ctx = unaccent(ctxEs || ''), ctxWords = new Set(ctx.replace(/[^a-zñ ]/g, ' ').split(/\s+/));
  let bestI = -1, bestScore = 0;
  if (ctx) opts.forEach((o, i) => {
    const ws = unaccent(o).replace(/[^a-zñ ]/g, ' ').split(/\s+/).filter(w => w.length > 2);
    const st = stems(o);
    const exact = ws.filter(w => ctxWords.has(w)).length, partial = st.filter(x => ctx.includes(x)).length;
    const sc = (exact * 2 + partial) / ((ws.length || 1) * 2);
    if (sc > bestScore) { bestScore = sc; bestI = i; }
  });
  const fromCtx = bestI >= 0 && bestScore >= 0.5;
  const best = opts[fromCtx ? bestI : 0];
  const alt = opts.find(o => o !== best) || '';
  return { best, alt, fromCtx };
}
window.CTX_ES = '';
function meaningHTML(es, ctxEs, opts = {}) {
  const m = pickMeaning(splitMeanings(es), ctxEs);
  if (!m.best) return esc(es);
  return `<b>${esc(m.best)}</b>${m.fromCtx ? ' <span class="small muted">(en este contexto)</span>' : ''}${m.alt && !opts.noAlt ? `<span class="small muted"> · a veces también: ${esc(m.alt)}</span>` : ''}`;
}
// Candidatos para una palabra suelta: diccionario de la app + alternativas del traductor
const candCache = {};
async function wordCandidates(word) {
  const k = word.toLowerCase(); if (candCache[k]) return candCache[k];
  let list = [];
  const wi = typeof wordInfo === 'function' ? wordInfo(word) : null;
  if (wi && wi.es) list = splitMeanings(wi.es);
  const cw = CW_INDEX[k]; if (cw) splitMeanings(cw.w[k].replace(/\([^)]*\)/g, '')).forEach(x => { if (!list.includes(x)) list.push(x); });
  try {
    const d = await getJSON('https://api.mymemory.translated.net/get?langpair=en|es&q=' + encodeURIComponent(word));
    const mt = [d.responseData && d.responseData.translatedText]
      .map(t => (t || '').replace(/&#39;/g, "'").replace(/[.!?¡¿]/g, '').trim().toLowerCase()).filter(t => t && t.length < 40 && unaccent(t) !== k);
    mt.forEach(t => { if (!list.some(x => unaccent(x) === unaccent(t))) list.push(t); });
  } catch (e) {}
  candCache[k] = list; return list;
}

// Canciones: explicación de frases con un solo significado según el verso
const TE = TYPE_EXPLAIN;
TE.phrasal = h => `<b>"${esc(h.txt)}"</b> es un <b>phrasal verb</b>: juntas, estas palabras significan ${meaningHTML(h.e.es, CTX_ES)}. Palabra por palabra no tendría sentido.`;
TE.modismo = h => `<b>"${esc(h.txt)}"</b> es una <b>frase hecha</b>: significa ${meaningHTML(h.e.es, CTX_ES)}. Se entiende como bloque.`;
TE.slang = h => `<b>"${esc(h.txt)}"</b> es <b>slang</b>: ${meaningHTML(h.e.es, CTX_ES)}.`;
TE.reduccion = h => `<b>"${esc(h.txt)}"</b> es una <b>forma cortada al cantar o hablar rápido</b>: ${esc(h.e.es)}.`;
TE.texto = h => `<b>"${esc(h.txt)}"</b> es una <b>abreviación</b>: ${esc(h.e.es)}.`;
TE.groseria = h => `<b>"${esc(h.txt)}"</b> es una <b>grosería</b>: ${esc(h.e.es.split(/(?<=\.)\s/)[0])}`;
const _origVersePanel = versePanel;
versePanel = function (line, i) { CTX_ES = (SG.song.tr || [])[i] || ''; return _origVersePanel(line, i); };
const _origBindVerse = bindVerse;
bindVerse = function (s, lines) {
  _origBindVerse(s, lines);
  document.querySelectorAll('#song-body [data-piece]').forEach(b => b.onclick = async () => {
    const i = SG.open, line = lines[i], { parts } = verseParts(line), p = parts[+b.dataset.piece], box = document.getElementById('wbox');
    const ctx = (s.tr || [])[i] || ''; CTX_ES = ctx;
    speak(p.hit ? p.hit.e.k : p.w, 'normal');
    if (p.hit) {
      const words = p.hit.txt.split(/\s+/);
      box.innerHTML = `<div class="card" style="margin:0"><b>${esc(p.hit.txt)}</b> <span class="tag amber">${TYPE_NAMES[p.hit.e.type]}</span><p class="small mt mb0">${(TE[p.hit.e.type] || TE.slang)(p.hit)}</p>
        ${p.hit.e.type === 'phrasal' && words.length > 1 ? `<p class="small muted mt mb0">Ojo: por separado ${words.map(w => { const wi = wordInfo(w); return `<b>${esc(w)}</b>${wi && wi.es ? ' = ' + esc(splitMeanings(wi.es)[0] || '') : ''}`; }).join(', ')}… pero juntas significan otra cosa.</p>` : ''}</div>`;
      return;
    }
    const wi = wordInfo(p.w);
    box.innerHTML = `<div class="card" style="margin:0"><b>${esc(p.w)}</b> = <span id="wtr"><span class="muted">buscando el significado en este verso…</span></span>${wi && wi.rol ? `<p class="small mt mb0">${wi.rol}</p>` : ''}${contextNote(p.w)}</div>`;
    const cands = await wordCandidates(p.w);
    const el = document.getElementById('wtr'); if (!el) return;
    el.innerHTML = cands.length ? meaningHTML(cands.join(' / '), ctx) : '<span class="muted">(sin internet para traducir)</span>';
  });
};

// Explicación palabra por palabra: también un solo significado según la oración
const _origFill = fillTranslations;
fillTranslations = async function (sentence, hasEs) {
  await _origFill(sentence, hasEs);
  const full = (document.getElementById('dfull') || {}).textContent || '';
  for (const tr of document.querySelectorAll('#deep table tr')) {
    const btn = tr.querySelector('[data-sayw]'), td = tr.children[1]; if (!btn || !td) continue;
    const w = btn.dataset.sayw, wi = wordInfo(w);
    let cands = wi && wi.es ? splitMeanings(wi.es) : [];
    if (cands.length < 2 && !(wi && FUNC[w.toLowerCase()])) { const more = await wordCandidates(w); more.forEach(c => { if (!cands.includes(c)) cands.push(c); }); }
    if (cands.length) td.innerHTML = meaningHTML(cands.join(' / '), full);
    const note = contextNote(w); if (note && !tr.dataset.noted) { tr.dataset.noted = 1; tr.children[2].insertAdjacentHTML('beforeend', note); }
  }
};

/* =========================================================
   2) Palabras parecidas que dependen del contexto
   ========================================================= */
const CONTEXT_WORDS = [
  { g: 'Lugar', w: { place: 'lugar en general (a nice place, my place = mi casa)', location: 'ubicación exacta, en un mapa o de un negocio (the store\'s location)', spot: 'lugarcito específico (a good spot to park)', site: 'sitio de algo: obra, página web (construction site)' } },
  { g: 'Decir', w: { say: 'decir algo (say hello, what did you say?)', tell: 'decirle algo A ALGUIEN o contar (tell me, tell a story)', speak: 'hablar un idioma o formal (speak English)', talk: 'platicar, conversar (talk to me)' } },
  { g: 'Hacer', w: { make: 'crear, fabricar (make dinner, make money)', do: 'realizar una tarea o actividad (do homework, do the dishes)' } },
  { g: 'Prestar', w: { borrow: 'pedir prestado (can I borrow your car?)', lend: 'prestarle a alguien (can you lend me $10?)' } },
  { g: 'Ganar', w: { win: 'ganar un juego o premio (win the game)', earn: 'ganar dinero trabajando (earn $15 an hour)', beat: 'ganarle a alguien (we beat them)' } },
  { g: 'Saber / conocer', w: { know: 'saber o conocer a alguien (I know him)', meet: 'conocer a alguien por primera vez (nice to meet you)', 'find out': 'enterarse, averiguar' } },
  { g: 'Recordar', w: { remember: 'acordarse uno mismo (I remember)', remind: 'recordarle algo a otro (remind me to call)' } },
  { g: 'Ver', w: { see: 'ver sin intención (I see a car)', look: 'mirar con atención (look at me)', watch: 'ver algo que se mueve, TV, película (watch a movie)' } },
  { g: 'Oír', w: { hear: 'oír, sin esfuerzo (I hear music)', listen: 'escuchar con atención (listen to me)' } },
  { g: 'Trabajo', w: { job: 'puesto o empleo (I got a new job)', work: 'el trabajo en general o el lugar (I\'m at work)', career: 'carrera profesional a largo plazo' } },
  { g: 'Viaje', w: { travel: 'viajar en general (I love to travel)', trip: 'un viaje concreto (a trip to Vegas)', ride: 'un aventón o paseo en vehículo (give me a ride)' } },
  { g: 'Divertido', w: { fun: 'divertido de pasarla bien (the party was fun)', funny: 'chistoso, que da risa (a funny joke)' } },
  { g: 'Llevar', w: { bring: 'traer hacia donde estás (bring me water)', take: 'llevar a otro lugar (take it to the car)', carry: 'cargar (carry the box)' } },
  { g: 'Cuidado', w: { careful: 'con cuidado (be careful)', 'take care': 'cuídate (despedida)', 'look out': '¡aguas!, ¡cuidado! (aviso de peligro)' } },
  { g: 'Casa', w: { house: 'la casa como edificio', home: 'el hogar, donde vives (I\'m home)', place: 'informal: mi casa (come to my place)' } },
  { g: 'Gente', w: { people: 'gente, personas (many people)', person: 'una persona', folks: 'la gente / la familia (informal)' } },
  { g: 'Tiempo', w: { time: 'tiempo del reloj (what time is it?)', weather: 'el clima (the weather is nice)' } },
  { g: 'Esperar', w: { wait: 'esperar a que pase algo (wait for me)', hope: 'tener esperanza (I hope you win)', expect: 'esperar que algo pase, prever (I expect rain)' } }
];
const CW_INDEX = {}; CONTEXT_WORDS.forEach(grp => Object.keys(grp.w).forEach(k => { CW_INDEX[k] = grp; }));
function contextNote(word) {
  const g = CW_INDEX[(word || '').toLowerCase()]; if (!g) return '';
  return `<div class="small mt" style="background:var(--blue-soft);border-radius:8px;padding:8px"><b>🧭 Ojo con el contexto (${esc(g.g)}):</b><br>${Object.entries(g.w).map(([k, v]) => `<b>${esc(k)}</b> = ${esc(v)}`).join('<br>')}</div>`;
}
GUIDE.push({ cat: 'Confusiones', t: 'Palabras que significan casi lo mismo pero se usan en distinto contexto (place, location, spot...)', b: CONTEXT_WORDS.map(g => `<p><b>${esc(g.g)}:</b><br>${Object.entries(g.w).map(([k, v]) => `• <b>${esc(k)}</b> = ${esc(v)}`).join('<br>')}</p>`).join('') });

/* =========================================================
   3) Tarjetas: "El inglés no se traduce palabra por palabra"
   ========================================================= */
const INTRO_CARDS = [
  { i: '🧭', t: 'El inglés NO se traduce palabra por palabra', b: `<p>Cada idioma tiene su propia forma de decir las cosas. Si traduces palabra por palabra del español, te va a salir un inglés raro que nadie dice.</p><p>La clave: <b>aprende frases completas</b> y piensa "¿cómo lo diría un gringo?", no "¿cómo se traduce cada palabra?".</p>` },
  { i: '🇲🇽➡️🇺🇸', t: 'Frases mexicanas y cómo se dicen allá', b: `<table class="tbl"><tr><th>Nosotros</th><th>Ellos</th></tr>
    <tr><td>Tengo hambre</td><td><b>I'm hungry</b><br><span class="small muted">(no "I have hungry")</span></td></tr>
    <tr><td>Tengo 25 años</td><td><b>I'm 25</b></td></tr>
    <tr><td>¿Qué onda?</td><td><b>What's up?</b></td></tr>
    <tr><td>Ahorita vengo</td><td><b>I'll be right back</b></td></tr>
    <tr><td>Me vale</td><td><b>I don't care</b></td></tr>
    <tr><td>Échale ganas</td><td><b>You got this / Hang in there</b></td></tr>
    <tr><td>No manches</td><td><b>No way</b></td></tr>
    <tr><td>Me caes bien</td><td><b>I like you</b> <span class="small muted">(como persona)</span></td></tr>
    <tr><td>¡Qué oso!</td><td><b>How embarrassing!</b></td></tr>
    <tr><td>Está cañón</td><td><b>That's tough / That's crazy</b></td></tr></table>` },
  { i: '1️⃣', t: 'En inglés siempre se dice QUIÉN', b: `<p>En español decimos "Trabajo aquí" o "Llueve". En inglés <b>el sujeto es obligatorio</b>:</p><ul><li>Trabajo aquí → <b>I</b> work here</li><li>Llueve → <b>It</b>'s raining</li><li>Es importante → <b>It</b>'s important</li></ul><p class="small muted">"It" no se traduce, pero tiene que estar.</p>` },
  { i: '2️⃣', t: 'Primero cómo es, luego la cosa', b: `<p>El adjetivo va <b>antes</b>, al revés que en español, y nunca lleva plural:</p><ul><li>carro rojo → <b>red car</b></li><li>casas grandes → <b>big houses</b> (no "bigs")</li></ul><p>Y las cosas <b>no tienen género</b>: la mesa, el carro → <b>the</b> table, <b>the</b> car.</p>` },
  { i: '3️⃣', t: 'Para preguntar y negar se usa un "ayudante"', b: `<p>En español basta con los signos ¿? o con "no". En inglés hace falta un auxiliar (do, does, did):</p><ul><li>¿Trabajas? → <b>Do</b> you work?</li><li>No trabajo → I <b>don't</b> work</li><li>¿Fuiste? → <b>Did</b> you go?</li></ul>` },
  { i: '4️⃣', t: 'Una sola negación', b: `<p>En español decimos "No tengo <b>nada</b>" (doble negación). En inglés solo va una:</p><ul><li>I <b>don't</b> have <b>anything</b> ✅</li><li>I have <b>nothing</b> ✅</li><li>I don't have nothing ❌ (solo en slang)</li></ul>` },
  { i: '5️⃣', t: 'Cosas que el español dice distinto', b: `<ul><li>Me gusta <b>el</b> café → I like coffee <span class="small muted">(sin "the" al hablar en general)</span></li>
    <li>Me duele <b>la</b> cabeza → <b>My</b> head hurts <span class="small muted">(con posesivo)</span></li>
    <li>Soy enfermera → I'm <b>a</b> nurse <span class="small muted">(la profesión lleva a/an)</span></li>
    <li>Hace frío → <b>It's</b> cold · Tengo frío → <b>I'm</b> cold</li>
    <li>Tengo razón → I'm <b>right</b> · Tengo miedo → I'm <b>scared</b></li></ul>` },
  { i: '🧩', t: 'Mismo significado, distinto contexto', b: `<p>Muchas palabras "significan lo mismo" pero se usan en situaciones distintas:</p><ul><li><b>place</b> = lugar en general · <b>location</b> = ubicación exacta · <b>spot</b> = lugarcito</li><li><b>say</b> algo · <b>tell</b> a alguien</li><li><b>make</b> = crear · <b>do</b> = realizar una tarea</li><li><b>fun</b> = divertido · <b>funny</b> = chistoso</li><li><b>borrow</b> = pedir prestado · <b>lend</b> = prestar</li></ul><p class="small">Por eso, al tocar una palabra, la app te da <b>el significado que va en ese contexto</b>. La lista completa está en ❓ Dudas.</p>` },
  { i: '🚀', t: '¡Listo! Ahora piensa en frases', b: `<p>No te preocupes por traducir todo perfecto. Escucha, repite y copia cómo lo dicen los nativos.</p><p>Cuando algo no se entienda, toca <b>🤔 Explícamelo a fondo</b> o <b>🔍</b> y te lo explico palabra por palabra.</p>` }
];
function showIntro(force) {
  if (!force && S.introSeen) return;
  let k = 0;
  const d = document.createElement('div'); d.className = 'celebrate'; d.id = 'intro';
  const draw = () => {
    const c = INTRO_CARDS[k];
    d.innerHTML = `<div class="cel-box" style="text-align:left;max-height:88vh;overflow:auto"><div class="row"><span class="small muted grow">${k + 1} de ${INTRO_CARDS.length}</span><button class="btn plain sm" id="in-skip">Saltar</button></div>
      <div class="cel-icon" style="text-align:center">${c.i}</div><h2 style="text-align:center">${c.t}</h2><div class="explain">${c.b}</div>
      <div class="bar mt"><i style="width:${(k + 1) / INTRO_CARDS.length * 100}%"></i></div>
      <div class="row mt">${k > 0 ? '<button class="btn ghost" id="in-back">Atrás</button>' : ''}<button class="btn grow red" id="in-next">${k < INTRO_CARDS.length - 1 ? 'Siguiente' : '¡Entendido!'}</button></div></div>`;
    const close = () => { d.remove(); S.introSeen = true; save(); };
    d.querySelector('#in-skip').onclick = close;
    d.querySelector('#in-next').onclick = () => { if (k < INTRO_CARDS.length - 1) { k++; draw(); if (typeof SFX !== 'undefined') SFX.tick(); } else { close(); if (typeof confetti === 'function') confetti(70); } };
    const bk = d.querySelector('#in-back'); if (bk) bk.onclick = () => { k--; draw(); };
  };
  draw(); document.body.appendChild(d);
}
// Se muestra una vez, la primera vez que llegas al inicio después del examen
const _origHomeCtx = SCREENS.home;
SCREENS.home = () => { _origHomeCtx(); if (S.level && !S.introSeen && screen === 'home' && !document.getElementById('intro')) setTimeout(() => showIntro(false), 600); };
// Y siempre disponible en el menú Más
const _origMoreCtx = SCREENS.more;
SCREENS.more = () => {
  _origMoreCtx();
  const first = $app.querySelector('.lesson-row');
  if (first) first.insertAdjacentHTML('beforebegin', `<button class="lesson-row" id="open-intro"><span class="dot" style="font-size:1.2rem">🧭</span><span class="grow"><b>El inglés no se traduce palabra por palabra</b><br><span class="small muted">Frases mexicanas vs. de EE. UU. y cómo se arma el inglés</span></span><span>›</span></button>`);
  document.getElementById('open-intro').onclick = () => showIntro(true);
};

// En listas (pestaña Expresiones, frases clave) se muestran máximo 2 significados; la lista completa queda en e.all
EXPRESSIONS.forEach(e => {
  if (!['phrasal', 'slang', 'modismo'].includes(e.type) || e.all) return;
  const m = splitMeanings(e.es); e.all = e.es;
  if (m.length > 2) e.es = m.slice(0, 2).join(' / ');
});
['phrasal', 'modismo', 'slang'].forEach(t => { const f = TE[t]; TE[t] = h => f({ ...h, e: { ...h.e, es: h.e.all || h.e.es } }); });

/* ---------- Mejor elección del significado de una palabra suelta ---------- */
// Largo del prefijo común: "necesitar" vs "necesito" = 7; "necesidad" vs "necesito" = 5
function lcp(a, b) { let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return i; }
pickMeaning = function (options, ctxEs) {
  const opts = options.filter(Boolean); if (!opts.length) return { best: '', alt: '' };
  const ctxWords = unaccent(ctxEs || '').replace(/[^a-zñ ]/g, ' ').split(/\s+/).filter(w => w.length > 2);
  let bestI = -1, bestScore = 0;
  if (ctxWords.length) opts.forEach((o, i) => {
    const ws = unaccent(o).replace(/[^a-zñ ]/g, ' ').split(/\s+/).filter(w => w.length > 2 && !['que', 'los', 'las', 'del', 'una', 'uno', 'por', 'para', 'con', 'algo', 'alguien'].includes(w));
    if (!ws.length) return;
    let sc = 0;
    ws.forEach(w => { const m = Math.max(0, ...ctxWords.map(c => lcp(w, c))); if (m >= 4 || (m === w.length && m >= 3)) sc += m; });
    sc = sc / ws.length;
    if (sc > bestScore) { bestScore = sc; bestI = i; }
  });
  const fromCtx = bestI >= 0;
  const best = opts[fromCtx ? bestI : 0];
  const alt = opts.find(o => o !== best) || '';
  return { best, alt, fromCtx };
};
const MT_ONLY = {};
wordCandidates = async function (word) {
  const k = word.toLowerCase(); if (candCache[k]) return candCache[k];
  const dict = [];
  const wi = typeof wordInfo === 'function' ? wordInfo(word) : null;
  if (wi && wi.es) splitMeanings(wi.es).forEach(x => dict.push(x));
  const cw = CW_INDEX[k]; if (cw) { const core = cw.w[k].split(/[(,]/)[0].replace(/^informal:\s*/, '').trim(); if (core && !dict.includes(core)) dict.push(core); }
  const mt = [];
  const ask = async q => { try { const d = await getJSON('https://api.mymemory.translated.net/get?langpair=en|es&q=' + encodeURIComponent(q)); return (d.responseData && d.responseData.translatedText || '').replace(/&#39;/g, "'"); } catch (e) { return ''; } };
  if (!dict.length || !FUNC[k]) {
    const [bare, noun, verb] = await Promise.all([ask(word), ask('the ' + word), ask('to ' + word)]);
    const clean = t => unaccent(t).replace(/[.!?¡¿"]/g, '').replace(/^(el|la|los|las|un|una|lo|a|para)\s+/, '').trim();
    [noun, verb, bare].map(t => ({ raw: t, c: clean(t) })).forEach(({ raw, c }) => {
      if (!c || c.length > 30 || c === k || c.split(' ').length > 3) return;
      const pretty = raw.toLowerCase().replace(/[.!?¡¿"]/g, '').replace(/^(el|la|los|las|un|una|lo|a|para)\s+/, '').trim();
      if (![...dict, ...mt].some(x => unaccent(x) === c)) mt.push(pretty);
    });
  }
  const list = [...dict, ...mt];
  MT_ONLY[k] = new Set(mt);
  candCache[k] = list; return list;
};
// Significado de una palabra suelta según la oración (sin alternativas dudosas del traductor)
async function wordMeaningHTML(word, ctxEs) {
  const cands = await wordCandidates(word);
  if (!cands.length) return '<span class="muted">(sin internet para traducir)</span>';
  const mtSet = MT_ONLY[word.toLowerCase()] || new Set();
  // Primero el diccionario de la app; el traductor solo si el diccionario no coincide con la oración
  const dictPick = pickMeaning(cands.filter(c => !mtSet.has(c)), ctxEs);
  const m = dictPick.fromCtx ? { ...dictPick, alt: dictPick.alt || '' } : pickMeaning(cands, ctxEs);
  const showAlt = m.alt && !mtSet.has(m.alt);
  return `<b>${esc(m.best)}</b>${m.fromCtx ? ' <span class="small muted">(en este contexto)</span>' : ''}${showAlt ? `<span class="small muted"> · a veces también: ${esc(m.alt)}</span>` : ''}`;
}
bindVerse = (function (orig) {
  return function (s, lines) {
    orig(s, lines);
    document.querySelectorAll('#song-body [data-piece]').forEach(b => {
      const prev = b.onclick;
      b.onclick = async () => {
        const i = SG.open, { parts } = verseParts(lines[i]), p = parts[+b.dataset.piece];
        if (p.hit) return prev();
        await prev.call(b);
        const el = document.getElementById('wtr'); if (el) el.innerHTML = await wordMeaningHTML(p.w, (s.tr || [])[i] || '');
      };
    });
  };
})(bindVerse);
fillTranslations = (function () {
  return async function (sentence, hasEs) {
    await _origFill(sentence, hasEs);
    const full = (document.getElementById('dfull') || {}).textContent || '';
    for (const tr of document.querySelectorAll('#deep table tr')) {
      const btn = tr.querySelector('[data-sayw]'), td = tr.children[1]; if (!btn || !td) continue;
      const w = btn.dataset.sayw, k = w.toLowerCase();
      if (FUNC[k] || /'/.test(w)) { const wi = wordInfo(w); if (wi && wi.es) td.innerHTML = meaningHTML(wi.es, full); }
      else td.innerHTML = await wordMeaningHTML(w, full);
      const note = contextNote(w); if (note && !tr.dataset.noted) { tr.dataset.noted = 1; tr.children[2].insertAdjacentHTML('beforeend', note); }
    }
  };
})();
