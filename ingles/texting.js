// 📱 Abreviaciones de mensajes: las que se usan en EE. UU. y las de México, con equivalencias.
// Se carga al final (usa SCREENS, S, go, esc, speak...). Contenido original de la app.

// [abreviación, significado en inglés, significado en español, ejemplo de mensaje, categoría, fuerza]
// fuerza: '' normal · '🟡' algo grosero · '🔴' vulgar
const TXT_US = [
  // Reacciones y risa
  ['lol', 'laughing out loud', 'jajaja (risa normal, a veces solo suaviza)', 'lol that\'s so true', 'Reacciones'],
  ['lmao', 'laughing my ass off', 'jajajaja (me muero de risa)', 'LMAO no way he said that', 'Reacciones', '🟡'],
  ['lmfao', 'laughing my fucking ass off', 'JAJAJAJA (risa a carcajadas)', 'lmfao im crying', 'Reacciones', '🔴'],
  ['rofl', 'rolling on the floor laughing', 'revolcándome de risa', 'rofl that meme', 'Reacciones'],
  ['haha / hehe', 'laughing', 'jaja / jeje', 'haha ok', 'Reacciones'],
  ['jk', 'just kidding', 'es broma', 'you\'re ugly jk 😂', 'Reacciones'],
  ['omg', 'oh my God', '¡Dios mío! / ¡no manches!', 'OMG i got the job!!', 'Reacciones'],
  ['omfg', 'oh my fucking God', '¡no mames! (fuerte)', 'omfg it\'s so cold', 'Reacciones', '🔴'],
  ['oml', 'oh my Lord', '¡Dios mío!', 'oml i forgot', 'Reacciones'],
  ['smh', 'shaking my head', 'qué decepción / no puede ser (negando con la cabeza)', 'he showed up late again smh', 'Reacciones'],
  ['ikr', 'I know, right?', '¡verdad que sí!, ¡lo sé!', 'ikr she\'s so annoying', 'Reacciones'],
  ['wtf', 'what the fuck', '¿qué chingados? / ¿qué carajo?', 'wtf was that', 'Reacciones', '🔴'],
  ['wth', 'what the hell', '¿qué demonios?', 'wth is going on', 'Reacciones'],
  ['tf', 'the fuck', 'intensificador: "what tf" = ¿qué chingados?', 'who tf is that', 'Reacciones', '🔴'],
  ['ffs', 'for fuck\'s sake', '¡por el amor de Dios! / ¡ya, carajo!', 'ffs answer your phone', 'Reacciones', '🔴'],
  ['oop / oops', 'oops', '¡ups!', 'oop wrong chat', 'Reacciones'],
  ['tfw', 'that feeling when', 'esa sensación cuando...', 'tfw it\'s friday', 'Reacciones'],
  // Opinión y sinceridad
  ['tbh', 'to be honest', 'para ser honesto', 'tbh i don\'t like him', 'Opinión'],
  ['ngl', 'not gonna lie', 'no voy a mentir, la neta', 'ngl that was fire', 'Opinión'],
  ['icl', 'I can\'t lie', 'no puedo mentir, la neta', 'icl i\'m tired', 'Opinión'],
  ['imo / imho', 'in my (humble) opinion', 'en mi (humilde) opinión', 'imo the first movie was better', 'Opinión'],
  ['tbf', 'to be fair', 'siendo justos', 'tbf he did warn us', 'Opinión'],
  ['fr', 'for real', 'en serio / la neta', 'fr? that\'s crazy', 'Opinión'],
  ['fr fr', 'for real for real', 'en serio, en serio (muy en serio)', 'i\'m done with her fr fr', 'Opinión'],
  ['ong', 'on God', 'te lo juro por Dios', 'ong i didn\'t do it', 'Opinión'],
  ['istg', 'I swear to God', 'te lo juro por Dios', 'istg if you\'re late again', 'Opinión'],
  ['no cap', 'no lie', 'sin mentir, en serio', 'best tacos in town no cap', 'Opinión'],
  ['iykyk', 'if you know, you know', 'si sabes, sabes (cosa entre conocidos)', 'last night was wild iykyk', 'Opinión'],
  ['idk', 'I don\'t know', 'no sé', 'idk what to wear', 'Opinión'],
  ['idc', 'I don\'t care', 'no me importa', 'idc where we eat', 'Opinión'],
  ['idgaf', 'I don\'t give a fuck', 'me vale madres', 'idgaf what they think', 'Opinión', '🔴'],
  ['idts', 'I don\'t think so', 'no creo', 'idts he\'s coming', 'Opinión'],
  ['ig', 'I guess / Instagram', 'supongo / Instagram (según el contexto)', 'ig we can go tmrw', 'Opinión'],
  ['afaik', 'as far as I know', 'hasta donde sé', 'afaik the store is open', 'Opinión'],
  ['fwiw', 'for what it\'s worth', 'por si sirve de algo', 'fwiw i think you\'re right', 'Opinión'],
  ['lowk / highk', 'lowkey / highkey', 'medio, un poco / muy, abiertamente', 'lowk want pizza rn', 'Opinión'],
  ['ts', 'this shit', 'esta madre / esto', 'ts so good', 'Opinión', '🔴'],
  ['pmo', 'pisses me off', 'me encabrona', 'traffic pmo', 'Opinión', '🟡'],
  ['bs', 'bullshit', 'puras mentiras / pendejadas', 'that\'s bs and you know it', 'Opinión', '🟡'],
  // Plática y planes
  ['wyd', 'what (are) you doing?', '¿qué haces?', 'hey wyd', 'Plática'],
  ['wya', 'where (are) you at?', '¿dónde estás?', 'wya? i\'m here', 'Plática'],
  ['hbu / wbu', 'how / what about you?', '¿y tú?', 'i\'m good hbu', 'Plática'],
  ['hru', 'how are you?', '¿cómo estás?', 'hey hru', 'Plática'],
  ['sup / wassup', 'what\'s up?', '¿qué onda?', 'sup bro', 'Plática'],
  ['nm', 'not much / never mind', 'nada / olvídalo', 'nm just chilling', 'Plática'],
  ['wdym / wym', 'what do you mean?', '¿cómo que...? / ¿a qué te refieres?', 'wdym you\'re not coming', 'Plática'],
  ['hmu', 'hit me up', 'escríbeme / búscame', 'hmu when you\'re free', 'Plática'],
  ['lmk', 'let me know', 'avísame', 'lmk if you need a ride', 'Plática'],
  ['omw / otw', 'on my way', 'voy en camino', 'omw be there in 10', 'Plática'],
  ['brb', 'be right back', 'ahorita vuelvo', 'brb gotta eat', 'Plática'],
  ['gtg / g2g', 'got to go', 'me tengo que ir', 'gtg talk later', 'Plática'],
  ['ttyl / ttys', 'talk to you later / soon', 'hablamos luego', 'ok ttyl', 'Plática'],
  ['rn', 'right now', 'ahorita / ahora mismo', 'i\'m busy rn', 'Plática'],
  ['atm', 'at the moment', 'en este momento', 'not home atm', 'Plática'],
  ['asap', 'as soon as possible', 'lo antes posible', 'call me asap', 'Plática'],
  ['eta', 'estimated time of arrival', '¿a qué hora llegas? / tiempo estimado', 'eta?', 'Plática'],
  ['btw', 'by the way', 'por cierto', 'btw i saw your mom', 'Plática'],
  ['fyi', 'for your information', 'para que sepas', 'fyi the meeting moved to 3', 'Plática'],
  ['icymi', 'in case you missed it', 'por si no lo viste', 'icymi we won', 'Plática'],
  ['tmi', 'too much information', 'demasiada información (no quería saber eso)', 'ew tmi', 'Plática'],
  ['nvm', 'never mind', 'olvídalo, ya no', 'nvm i found it', 'Plática'],
  ['bet', 'okay, deal', '¡va! / ¡sale!', 'pick me up at 8? — bet', 'Plática'],
  ['k / kk', 'okay', 'ok (ojo: "k" solo puede sonar cortante o enojado)', 'k', 'Plática'],
  // Cortesía
  ['ty / thx', 'thank you / thanks', 'gracias', 'ty!!', 'Cortesía'],
  ['tysm', 'thank you so much', 'muchas gracias', 'tysm for the help', 'Cortesía'],
  ['yw', 'you\'re welcome', 'de nada', 'yw!', 'Cortesía'],
  ['np', 'no problem', 'no hay problema, de nada', 'np man', 'Cortesía'],
  ['nbd', 'no big deal', 'no pasa nada, no es gran cosa', 'it\'s nbd', 'Cortesía'],
  ['pls / plz', 'please', 'por favor', 'pls call me back', 'Cortesía'],
  ['sry', 'sorry', 'perdón', 'sry i was asleep', 'Cortesía'],
  ['mb', 'my bad', 'mi culpa, perdón', 'mb i forgot', 'Cortesía'],
  ['dw', 'don\'t worry', 'no te preocupes', 'dw about it', 'Cortesía'],
  ['ofc', 'of course', 'claro, por supuesto', 'ofc i\'ll be there', 'Cortesía'],
  ['hbd', 'happy birthday', 'feliz cumpleaños', 'hbd bro 🎉', 'Cortesía'],
  ['gm / gn', 'good morning / good night', 'buenos días / buenas noches', 'gn ttyl', 'Cortesía'],
  // Amor y amigos
  ['ily', 'I love you', 'te quiero / te amo', 'ily mom', 'Amor'],
  ['ilysm', 'I love you so much', 'te quiero muchísimo (= tqm)', 'ilysm ❤️', 'Amor'],
  ['ly', 'love you', 'te quiero', 'ok ly bye', 'Amor'],
  ['imy', 'I miss you', 'te extraño', 'imy come back', 'Amor'],
  ['xoxo', 'hugs and kisses', 'besos y abrazos', 'see u soon xoxo', 'Amor'],
  ['bff', 'best friends forever', 'mejor amigo/a', 'my bff is coming', 'Amor'],
  ['bf / gf', 'boyfriend / girlfriend', 'novio / novia', 'my gf says hi', 'Amor'],
  ['bae', 'before anyone else (babe)', 'mi amor, mi pareja', 'dinner with bae', 'Amor'],
  ['hml', 'hit my line', 'márcame, escríbeme', 'hml later', 'Amor'],
  // Insultos y enojo
  ['stfu', 'shut the fuck up', 'cállate (vulgar) / ¡no mames, no puede ser!', 'stfu you did NOT', 'Enojo', '🔴'],
  ['sybau', 'shut your bitch ass up', 'cállate el hocico (muy vulgar)', 'sybau', 'Enojo', '🔴'],
  ['gtfo', 'get the fuck out', 'lárgate (vulgar) / ¡no te creo!', 'gtfo no way', 'Enojo', '🔴'],
  ['af', 'as fuck', 'bien, muy (vulgar): "tired af" = bien cansado', 'i\'m hungry af', 'Enojo', '🔴'],
  ['pos', 'piece of shit / parent over shoulder', 'pedazo de mierda / "mis papás están viendo"', 'that guy\'s a pos', 'Enojo', '🔴'],
  // Palabras recortadas
  ['u / ur', 'you / your, you\'re', 'tú / tu, eres', 'r u ok? ur the best', 'Recortes'],
  ['r / y', 'are / why', 'eres, están / por qué', 'y r u mad', 'Recortes'],
  ['bc / cuz / cause', 'because', 'porque', 'can\'t go bc i\'m sick', 'Recortes'],
  ['tho', 'though', 'aunque / eso sí', 'nice car tho', 'Recortes'],
  ['thru', 'through', 'a través de / por', 'drive thru', 'Recortes'],
  ['ppl', 'people', 'gente', 'too many ppl here', 'Recortes'],
  ['smth / sth', 'something', 'algo', 'want smth to eat?', 'Recortes'],
  ['sb / sm', 'somebody / so much', 'alguien / tanto, mucho', 'ty sm', 'Recortes'],
  ['abt', 'about', 'sobre, acerca de', 'what abt tmrw', 'Recortes'],
  ['w/ · w/o', 'with · without', 'con · sin', 'coffee w/ milk', 'Recortes'],
  ['b4', 'before', 'antes', 'call me b4 u come', 'Recortes'],
  ['l8r', 'later', 'luego', 'c u l8r', 'Recortes'],
  ['gr8', 'great', 'genial', 'gr8 job', 'Recortes'],
  ['2day / 2nite', 'today / tonight', 'hoy / esta noche', 'party 2nite?', 'Recortes'],
  ['tmrw / tmr', 'tomorrow', 'mañana', 'see u tmrw', 'Recortes'],
  ['prolly', 'probably', 'probablemente', 'prolly gonna be late', 'Recortes'],
  ['def', 'definitely', 'definitivamente, seguro', 'def coming', 'Recortes'],
  ['obv', 'obviously', 'obvio', 'obv not', 'Recortes'],
  ['srsly / rly', 'seriously / really', 'en serio / de verdad', 'srsly?? rly?', 'Recortes'],
  ['bday', 'birthday', 'cumpleaños', 'it\'s my bday!', 'Recortes'],
  ['convo', 'conversation', 'conversación, plática', 'weird convo lol', 'Recortes'],
  ['fave / fav', 'favorite', 'favorito', 'my fave song', 'Recortes'],
  ['pic / vid', 'picture / video', 'foto / video', 'send pics', 'Recortes'],
  ['msg / txt', 'message / text', 'mensaje', 'got ur txt', 'Recortes'],
  // Internet y redes
  ['dm', 'direct message', 'mensaje privado', 'dm me', 'Redes'],
  ['irl', 'in real life', 'en la vida real, en persona', 'we should meet irl', 'Redes'],
  ['fomo', 'fear of missing out', 'miedo a perderse algo', 'major fomo rn', 'Redes'],
  ['yolo', 'you only live once', 'solo se vive una vez', 'buying it yolo', 'Redes'],
  ['goat', 'greatest of all time', 'el mejor de todos los tiempos', 'messi is the goat', 'Redes'],
  ['pov', 'point of view', 'punto de vista (en memes: "imagina que...")', 'pov: you\'re late again', 'Redes'],
  ['ootd', 'outfit of the day', 'el outfit del día', '#ootd', 'Redes'],
  ['tbt', 'throwback Thursday', 'recuerdo del pasado (foto vieja)', 'tbt to cancun', 'Redes'],
  ['til', 'today I learned', 'hoy aprendí', 'til penguins have knees', 'Redes'],
  ['nsfw', 'not safe for work', 'no lo abras en el trabajo (contenido +18)', 'nsfw pic', 'Redes'],
  ['gg / ez', 'good game / easy', 'buena partida / fácil (gamers)', 'gg ez', 'Redes'],
  ['ftw', 'for the win', '¡lo mejor! / ¡arriba...!', 'tacos ftw', 'Redes']
];

// [abreviación, significado, equivalente en EE. UU., ejemplo]
const TXT_MX = [
  ['tqm / tkm', 'te quiero mucho', 'ily / ilysm / love u', 'tqm amiga'],
  ['tq', 'te quiero', 'ly / ily', 'ok tq bye'],
  ['tmb / tmbn / tb / tmn', 'también', 'too / same / me too', 'yo tmb'],
  ['xq / pq', 'porque / por qué', 'bc / cuz · why (y)', 'xq no viniste?'],
  ['q / k', 'que / qué', 'what (wut)', 'q haces?'],
  ['x', 'por', 'bc / for', 'x eso'],
  ['xfa / plis / porfa', 'por favor', 'pls / plz', 'pásame la tarea xfa'],
  ['ntp', 'no te preocupes', 'dw / np', 'ntp yo voy'],
  ['npn', 'no pasa nada', 'nbd / np', 'npn wey'],
  ['ns / nc', 'no sé', 'idk', 'ns la vdd'],
  ['vdd / neta', 'verdad / la verdad', 'fr / tbh / ngl', 'neta?'],
  ['grax / grs / grx', 'gracias', 'ty / thx', 'grax!'],
  ['dnd', 'dónde', 'where / wya', 'dnd stas?'],
  ['ps', 'pues', 'well / so', 'ps sí'],
  ['sq', 'es que', 'it\'s just that / bc', 'sq no puedo'],
  ['bno', 'bueno', 'ok / well', 'bno va'],
  ['bn', 'bien', 'good', 'todo bn'],
  ['tons', 'entonces', 'so / then', 'tons qué?'],
  ['msj', 'mensaje', 'msg / txt', 'te mandé msj'],
  ['cdt', 'cuídate', 'tc (take care)', 'bye cdt'],
  ['bss / besos', 'besos', 'xoxo', 'bss'],
  ['salu2', 'saludos', 'regards / hi', 'salu2 a tu familia'],
  ['x100pre', 'por siempre', 'forever / 4ever', 'amigos x100pre'],
  ['mñn / mñna', 'mañana', 'tmrw', 'nos vemos mñn'],
  ['d', 'de', 'of', 'la casa d mi tía'],
  ['dsd', 'desde', 'since / from', 'dsd ayer'],
  ['hrs', 'horas', 'hrs', 'a las 8 hrs'],
  ['qpd / kpd', '¿qué pedo? (¿qué onda?)', 'sup / wassup', 'qpd wey'],
  ['k onda / q onda', '¿qué onda?', 'sup / what\'s up', 'k onda'],
  ['wey / we / wy', 'güey (amigo, o insulto leve)', 'bro / dude', 'no manches wey'],
  ['nmms / nms', 'no mames (¡no puede ser!)', 'omg / wtf / no way / stfu', 'nmms qué oso'],
  ['ntc', 'no te creas (es broma)', 'jk', 'eres feo ntc'],
  ['alch', 'al chile (honestamente)', 'tbh / ngl', 'alch no quiero ir'],
  ['alv', 'a la verga (enojo o sorpresa)', 'wtf / ffs / fuck', 'alv se me olvidó'],
  ['ptm', 'puta madre', 'ffs / fuck', 'ptm ya es tarde'],
  ['hdp', 'hijo de puta', 'son of a bitch / sob', 'ese hdp'],
  ['jajaja / jsjs / xd', 'risa', 'lol / lmao / haha', 'jsjsjs'],
  ['ggg', 'jejeje (risa)', 'hehe', 'ggg'],
  ['ok / va / sale', 'de acuerdo', 'bet / k / ok', 'va, nos vemos'],
  ['simón / nel', 'sí / no', 'yeah / nah', 'nel no puedo'],
  ['ahorita', 'ahora / en un rato (¡depende!)', 'rn / in a bit', 'ahorita voy']
];

TYPE_NAMES.texto = 'Abreviación de mensaje';

/* ---------- Traducir un mensaje lleno de abreviaciones ---------- */
function txtVariants(abbr) { return abbr.split(/\s*[\/·]\s*/).map(x => x.trim()).filter(Boolean); }
const TXT_INDEX = (() => {
  const map = {};
  TXT_US.forEach(r => txtVariants(r[0]).forEach(v => { map[v.toLowerCase()] = { abbr: r[0], en: r[1], es: r[2], flag: r[5] || '', from: 'us' }; }));
  TXT_MX.forEach(r => txtVariants(r[0]).forEach(v => { const k = v.toLowerCase(); if (!map[k]) map[k] = { abbr: r[0], en: r[2], es: r[1], flag: '', from: 'mx' }; }));
  return map;
})();
const TXT_SKIP = new Set(['k', 'x', 'q', 'd', 'r', 'y', 'u', 'ok', 'bet', 'goat', 'cause', 'ps', 'ig', 'sm', 'sb', 'ts', 'pos', 'hrs', 'va', 'sale', 'tons', 'wey', 'we', 'neta', 'besos', 'porfa', 'plis', 'nel', 'ahorita', 'simón']);
function decodeText(msg, strict) {
  const found = [];
  const html = esc(msg).replace(/[a-zñ0-9][a-zñ0-9'’]*/gi, w => {
    const k = w.toLowerCase().replace(/’/g, "'");
    const hit = TXT_INDEX[k];
    if (!hit || (strict && TXT_SKIP.has(k))) return w;
    found.push(hit);
    return `<span class="expr" title="${esc(hit.en)}">${w}</span>`;
  });
  return { html, found: found.filter((f, i) => found.findIndex(g => g.abbr === f.abbr) === i) };
}

/* ---------- Pantalla 📱 Mensajes ---------- */
let TX = { tab: 'us', q: '', cat: 'Todas' };
SCREENS.texting = () => {
  const tabs = [['us', '🇺🇸 EE. UU.'], ['mx', '🇲🇽 México'], ['tr', '🔎 Traductor'], ['quiz', '✍️ Practicar']];
  let body = '';
  const plain = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  if (TX.tab === 'us') {
    const cats = ['Todas', ...new Set(TXT_US.map(r => r[4]))];
    const list = TXT_US.filter(r => (TX.cat === 'Todas' || r[4] === TX.cat) && (!TX.q || plain(r.slice(0, 4).join(' ')).includes(plain(TX.q))));
    body = `<input type="text" id="txq" placeholder="Busca: lol, idk, te extraño..." value="${esc(TX.q)}" autocomplete="off">
      <div class="speedsel mt">${cats.map(c => `<button data-txcat="${esc(c)}" class="${c === TX.cat ? 'sel' : ''}">${esc(c)}</button>`).join('')}</div>
      <p class="small muted mt">${list.length} abreviaciones · 🟡 algo grosera · 🔴 vulgar</p>
      <div class="card">${list.map(r => `<div class="list-item" style="align-items:flex-start"><div class="grow">
        <b style="font-size:1.05rem">${esc(r[0])}</b> ${r[5] || ''} <span class="small muted">= ${esc(r[1])}</span><br>
        <span>${esc(r[2])}</span><br><span class="small" style="color:var(--blue)">💬 "${esc(r[3])}"</span></div>
        <div class="row">${sayBtn(r[1], '▶')}<button class="say" data-txcard="${esc(r[0])}">${(S.customCards || []).some(c => c.id === 'txt|' + r[0]) ? '✓' : '+🧠'}</button></div></div>`).join('') || '<p class="mb0">No encontré esa abreviación.</p>'}</div>
      <p class="small muted">▶ dice la frase completa · +🧠 la agrega a tus tarjetas de Memoria.</p>`;
  } else if (TX.tab === 'mx') {
    const list = TXT_MX.filter(r => !TX.q || plain(r.join(' ')).includes(plain(TX.q)));
    body = `<div class="card"><p class="small mb0">Las que usamos en México y <b>cómo se dicen en un mensaje en EE. UU.</b> Así sabes qué escribirle a alguien de allá.</p></div>
      <input type="text" id="txq" placeholder="Busca: tqm, ntp, nmms..." value="${esc(TX.q)}" autocomplete="off">
      <div class="card mt"><table class="tbl"><tr><th>🇲🇽 México</th><th>Significa</th><th>🇺🇸 En EE. UU.</th></tr>
      ${list.map(r => `<tr><td><b>${esc(r[0])}</b><br><span class="small muted">"${esc(r[3])}"</span></td><td>${esc(r[1])}</td><td><b style="color:var(--blue)">${esc(r[2])}</b></td></tr>`).join('')}</table></div>`;
  } else if (TX.tab === 'tr') {
    body = `<div class="card"><h3>Traductor de mensajes</h3><p class="small muted">Pega un mensaje que te mandaron (en inglés o en español) y te explico cada abreviación.</p>
      <textarea id="txin" rows="3" placeholder="Ej: wyd rn? idk tbh lmk if u wanna hang 2nite lol">${esc(TX.msg || '')}</textarea>
      <button class="btn block mt" id="txgo">🔎 Explicar mensaje</button><div id="txout"></div></div>`;
  } else {
    if (!TX.quiz || TX.quiz.done) {
      const pool = shuffle(TXT_US.filter(r => !r[5])).slice(0, 10);
      TX.quiz = { items: pool.map(r => { const wrong = shuffle(TXT_US.filter(x => x !== r)).slice(0, 2).map(x => x[2]); return { r, opts: shuffle([r[2], ...wrong]) }; }), i: 0, ok: 0 };
    }
    const Q = TX.quiz;
    if (Q.i >= Q.items.length) {
      body = `<div class="card center"><h2>¡Terminaste!</h2><div class="big">${Q.ok}/${Q.items.length}</div><p class="muted">${Q.ok >= 8 ? 'Ya escribes mensajes como gringo 😎' : 'Repasa la lista y vuelve a intentarlo.'}</p><button class="btn" id="txagain">Otra ronda</button></div>`;
      addXP(5); Q.done = true; save();
    } else {
      const it = Q.items[Q.i];
      body = `<div class="card"><p class="small muted">Pregunta ${Q.i + 1} de ${Q.items.length}</p><p class="small mb0">Te llega este mensaje:</p>
        <p style="font-size:1.3rem" class="mt">💬 <b>${esc(it.r[3])}</b></p><h3>¿Qué significa <span class="expr">${esc(it.r[0])}</span>?</h3>
        ${it.opts.map(o => `<button class="opt" data-txopt="${esc(o)}">${esc(o)}</button>`).join('')}<div id="txfb"></div></div>`;
    }
  }
  $app.innerHTML = `${topBar(null, 'more')}<h1>📱 Abreviaciones de mensajes</h1>
    <p class="muted">Lo que escriben los gringos en WhatsApp, iMessage y redes, y cómo se dicen las nuestras allá.</p>
    <div class="tabs">${tabs.map(([k, t]) => `<button data-txtab="${k}" class="${TX.tab === k ? 'sel' : ''}">${t}</button>`).join('')}</div>${body}`;
  $app.querySelectorAll('[data-txtab]').forEach(b => b.onclick = () => { TX.tab = b.dataset.txtab; TX.q = ''; SCREENS.texting(); });
  $app.querySelectorAll('[data-txcat]').forEach(b => b.onclick = () => { TX.cat = b.dataset.txcat; SCREENS.texting(); });
  const q = document.getElementById('txq');
  if (q) q.oninput = () => { TX.q = q.value; const p = q.selectionStart; SCREENS.texting(); const n = document.getElementById('txq'); n.focus(); n.setSelectionRange(p, p); };
  $app.querySelectorAll('[data-txcard]').forEach(b => b.onclick = () => {
    const r = TXT_US.find(x => x[0] === b.dataset.txcard); S.customCards = S.customCards || [];
    if (!S.customCards.some(c => c.id === 'txt|' + r[0])) { S.customCards.push({ id: 'txt|' + r[0], en: r[0], es: r[2] + ' (' + r[1] + ')', pr: '', tip: '💬 ' + r[3], from: 'Abreviaciones' }); save(); toast('Agregada a Memoria 🧠'); }
    b.textContent = '✓';
  });
  const go2 = document.getElementById('txgo');
  if (go2) {
    const run = () => {
      TX.msg = document.getElementById('txin').value;
      const d = decodeText(TX.msg, false);
      document.getElementById('txout').innerHTML = d.found.length ? `<p class="mt" style="font-size:1.1rem">${d.html}</p>
        ${d.found.map(f => `<div class="list-item"><div><b>${esc(f.abbr)}</b> ${f.flag} ${f.from === 'mx' ? '🇲🇽' : '🇺🇸'}<br><span class="small">${f.from === 'mx' ? `${esc(f.es)} → en EE. UU.: <b>${esc(f.en)}</b>` : `${esc(f.en)} = ${esc(f.es)}`}</span></div></div>`).join('')}`
        : '<p class="small mt mb0">No encontré abreviaciones en ese mensaje.</p>';
    };
    go2.onclick = run; if (TX.msg) run();
  }
  $app.querySelectorAll('[data-txopt]').forEach(b => b.onclick = () => {
    const Q = TX.quiz, it = Q.items[Q.i], ok = b.dataset.txopt === it.r[2];
    $app.querySelectorAll('[data-txopt]').forEach(o => { o.disabled = true; if (o.dataset.txopt === it.r[2]) o.classList.add('ok'); });
    if (!ok) b.classList.add('bad'); else Q.ok++;
    updSkill('vocab', ok, 0.05); save();
    document.getElementById('txfb').innerHTML = `<div class="tip mt"><b>${esc(it.r[0])}</b> = ${esc(it.r[1])} → ${esc(it.r[2])}</div><button class="btn block mt" id="txnext">Siguiente</button>`;
    document.getElementById('txnext').onclick = () => { Q.i++; SCREENS.texting(); };
  });
  const ag = document.getElementById('txagain'); if (ag) ag.onclick = () => { TX.quiz = null; SCREENS.texting(); };
};

/* ---------- Integración: menú Más, lección, Dudas y detección en canciones ---------- */
const _origMore = SCREENS.more;
SCREENS.more = () => {
  _origMore();
  const first = $app.querySelector('.lesson-row');
  if (first) first.insertAdjacentHTML('beforebegin', `<button class="lesson-row" data-go="texting"><span class="dot" style="font-size:1.2rem">📱</span><span class="grow"><b>Abreviaciones de mensajes</b><br><span class="small muted">lol, idk, wyd, tqm, ntp... EE. UU. y México</span></span><span>›</span></button>`);
};
// La pantalla nueva muestra la barra de navegación como las demás del menú
const _origGo = go;
go = function (name, arg) { _origGo(name, arg); if (name === 'texting') { const nav = document.getElementById('nav'); nav.hidden = !S.level; nav.querySelectorAll('button').forEach(b => b.classList.toggle('act', b.dataset.go === 'more')); } };

// Abreviaciones inequívocas también se detectan en letras de canciones
TXT_US.forEach(r => txtVariants(r[0]).forEach(v => {
  const k = v.toLowerCase();
  if (k.length < 3 || TXT_SKIP.has(k) || /^(haha|hehe|oops|cause|tho|thru|fave|pic|vid|msg|txt|convo|bday|fav|def|obv|bet|goat|til|eta|sup|lowk|highk)$/.test(k) || EXPRESSIONS.some(e => e.w && e.w.includes(k))) return;
  const e = { k: v, es: r[1] + ' = ' + r[2], type: 'texto', w: [k] }; buildExprRe(e); EXPRESSIONS.push(e);
}));

LESSONS.splice(LESSONS.findIndex(l => l.id === 'b2-slang'), 0, {
  id: 'b1-mensajes', level: 'B1', title: 'Escribir mensajes como gringo: lol, idk, wyd', focus: 'vocab',
  goal: 'Vas a aprender las abreviaciones que se usan en EE. UU. al mandar mensajes (lol, idk, tbh, wyd, omw, lmk...) y cómo decir las nuestras (tqm, ntp, xq) en inglés.',
  why: 'En WhatsApp, iMessage, Instagram y en el trabajo te van a escribir así. Si no las conoces, no vas a entender ni la mitad de los mensajes.',
  intro: { en: "hey wyd? lmk if u wanna grab food, omw home rn lol", es: 'oye, ¿qué haces? avísame si quieres ir a comer, voy en camino a casa ahorita jaja' },
  vocab: [['lol', 'jajaja', 'el-ou-el'], ['idk', 'no sé (I don\'t know)', 'ai-di-kei'], ['tbh', 'para ser honesto', 'ti-bi-éich'], ['wyd', '¿qué haces?', 'dábel-iu-uái-di'], ['omw', 'voy en camino', 'ou-em-dábeliu'], ['lmk', 'avísame', 'el-em-kei'], ['brb', 'ahorita vuelvo', 'bi-ar-bi'], ['ily', 'te quiero (= tqm)', 'ai-el-uái']],
  explain: `<p>En EE. UU. se usan muchísimo las <b>siglas</b>: la primera letra de cada palabra.</p>
<ul><li><b>idk</b> = <b>I</b> <b>d</b>on't <b>k</b>now (no sé)</li><li><b>tbh</b> = <b>t</b>o <b>b</b>e <b>h</b>onest (para ser honesto)</li><li><b>lmk</b> = <b>l</b>et <b>m</b>e <b>k</b>now (avísame)</li><li><b>omw</b> = <b>o</b>n <b>m</b>y <b>w</b>ay (voy en camino)</li></ul>
<p>También se recortan palabras: <b>u</b> (you), <b>ur</b> (your / you're), <b>rn</b> (right now), <b>bc</b> (because), <b>tmrw</b> (tomorrow), <b>pls</b> (please).</p>
<table class="tbl"><tr><th>🇲🇽 Nosotros</th><th>🇺🇸 Ellos</th></tr><tr><td>tqm</td><td>ily / ilysm</td></tr><tr><td>tmb</td><td>same / me too</td></tr><tr><td>xq</td><td>bc / cuz</td></tr><tr><td>ntp</td><td>dw / np</td></tr><tr><td>ns</td><td>idk</td></tr><tr><td>jajaja</td><td>lol / lmao</td></tr><tr><td>nmms</td><td>omg / wtf</td></tr></table>
<p class="tip">⚠️ <b>"k"</b> solito puede sonar cortante o enojado. Mejor escribe "ok" u "okay". Y en el trabajo evita las groseras (lmao, wtf, af).</p>
<p class="tip">💡 Al hablar en voz alta casi nadie dice "el-ou-el": dicen la frase completa. Algunas sí se pronuncian como palabra: <b>lol</b> ("lol"), <b>omg</b> ("ou-em-yí"), <b>asap</b> ("éisap").</p>`,
  easy: `<p>Casi todas son las <b>iniciales</b> de una frase. Si ves letras raras, piensa: ¿qué frase empieza con esas letras?</p>
<p>idk → I Don't Know. brb → Be Right Back. Así de fácil.</p>
<p>Y en la sección <b>📱 Abreviaciones</b> (☰ Más) puedes pegar cualquier mensaje y te lo traduzco.</p>`,
  memo: ['Lee cada sigla en voz alta con su frase completa 3 veces: "lmk, let me know, avísame".', 'Cambia tu forma de escribir: la próxima vez que escribas "tqm" a alguien, escríbele "ily".', 'Usa el traductor de mensajes con los textos que te manden tus contactos de EE. UU.'],
  examples: [["idk tbh, maybe tmrw?", 'No sé, la neta, ¿tal vez mañana?'], ["omw! be there in 10", '¡Voy en camino! Llego en 10'], ["lmk when u get home", 'Avísame cuando llegues a casa']],
  listen: { text: "Text me when you get home, okay? Let me know if you need anything.", q: '¿Cómo lo escribirías en mensaje?', options: ['txt me when u get home, lmk if u need anything', 'brb ttyl', 'idk lol'], a: 0, note: '"let me know" = lmk. "you" = u.' },
  speak: ["I don't know, to be honest.", 'Let me know.', "I'm on my way."],
  quiz: [
    { q: '"idk" significa:', options: ['No sé', 'Te quiero', 'Ahorita vuelvo'], a: 0, why: 'I don\'t know.' },
    { q: 'Tu amigo te escribe "wyd". Te pregunta:', options: ['¿Qué haces?', '¿Dónde estás?', '¿Por qué?'], a: 0, why: 'What (are) you doing?' },
    { q: '¿Cómo escribes "tqm" en inglés?', options: ['ilysm', 'tysm', 'lmk'], a: 0, why: 'I love you so much.' },
    { q: '"omw" significa:', options: ['Voy en camino', 'Oh, mi Dios', 'Otra vez'], a: 0, why: 'On my way.' },
    { q: '¿Cuál puede sonar enojado?', options: ['k', 'ok', 'okay'], a: 0, why: '"k" solito suena cortante.' }
  ]
});
GUIDE.push({ cat: 'Consejos', t: 'Abreviaciones de mensajes (lol, idk, tqm...)', b: `<p>En EE. UU. se escriben siglas con las iniciales de una frase: <b>idk</b> (I don't know), <b>tbh</b> (to be honest), <b>lmk</b> (let me know), <b>omw</b> (on my way), <b>wyd</b> (what are you doing).</p><p>Equivalencias: tqm → <b>ily / ilysm</b> · tmb → <b>same</b> · xq → <b>bc</b> · ntp → <b>dw / np</b> · ns → <b>idk</b> · jajaja → <b>lol / lmao</b>.</p><p>Ojo: "k" solito suena cortante; "lmao", "wtf" y "af" son groseras. Ve la lista completa y el traductor en <b>☰ Más → 📱 Abreviaciones de mensajes</b>.</p>` });
