// 🔍 Explicación a fondo: desglosa una oración palabra por palabra, explica por qué va cada palabra
// y por qué la opción que elegiste no va. Se carga al final (usa esc, speak, translate, GUIDE, LESSONS...).

// Palabras "de función": qué significan y qué papel juegan en la oración
const FUNC = {
  i: ['yo', 'Sujeto (quién hace la acción). Siempre con mayúscula.'], you: ['tú / usted / ustedes', 'Sujeto u objeto: sirve para singular y plural.'],
  he: ['él', 'Sujeto (un hombre). Con él, el verbo en presente lleva -s.'], she: ['ella', 'Sujeto (una mujer). Con ella, el verbo en presente lleva -s.'],
  it: ['eso / ello', 'Sujeto u objeto para cosas, animales, el clima o la hora ("It\'s 5"). En español casi no se dice, en inglés es obligatorio.'],
  we: ['nosotros', 'Sujeto.'], they: ['ellos / ellas', 'Sujeto (varias personas o cosas).'],
  me: ['me / a mí', 'Objeto: recibe la acción (después del verbo o preposición).'], him: ['lo / le / a él', 'Objeto (él).'], her: ['la / le / su (de ella)', 'Objeto (a ella) o posesivo (su, de ella).'],
  us: ['nos / a nosotros', 'Objeto.'], them: ['los / les / a ellos', 'Objeto.'],
  my: ['mi / mis', 'Posesivo: va antes de la cosa.'], your: ['tu / tus / su (de usted)', 'Posesivo. No confundir con "you\'re" (you are).'], his: ['su (de él)', 'Posesivo: el dueño es hombre.'],
  its: ['su (de una cosa)', 'Posesivo para cosas o animales. Sin apóstrofe (it\'s = it is).'], our: ['nuestro/a', 'Posesivo.'], their: ['su (de ellos)', 'Posesivo. No confundir con "there" (allá) ni "they\'re" (they are).'],
  am: ['soy / estoy', 'Verbo "to be" solo con I.'], is: ['es / está', 'Verbo "to be" con he, she, it o una sola cosa.'], are: ['eres, somos, son / estás, están', 'Verbo "to be" con you, we, they o varias cosas.'],
  was: ['era / estaba / fue', 'Pasado de "to be" con I, he, she, it.'], were: ['eras, éramos, eran / estaban', 'Pasado de "to be" con you, we, they.'],
  be: ['ser / estar', 'Forma base de "to be" (después de will, can, should, to...).'], been: ['sido / estado', 'Participio de "to be" (va con have/has).'], being: ['siendo / estando', 'Forma -ing de "to be".'],
  do: ['(auxiliar) / hacer', 'Auxiliar para preguntar y negar en presente con I, you, we, they. No se traduce; es como los signos ¿? del español. También significa "hacer".'],
  does: ['(auxiliar) / hace', 'Auxiliar para preguntar y negar en presente con he, she, it. Ya lleva la -s, por eso el verbo después va sin -s.'],
  did: ['(auxiliar de pasado) / hizo', 'Auxiliar para preguntar y negar en pasado. Ya lleva el pasado, por eso el verbo después va en forma normal.'],
  have: ['tener / (auxiliar) he, has', 'Verbo "tener" o auxiliar del presente perfecto (have + participio = he + -ado).'], has: ['tiene / (auxiliar) ha', 'Igual que have, pero con he, she, it.'], had: ['tenía, tuvo / había', 'Pasado de have.'],
  will: ['(futuro) -ré, -rás...', 'Auxiliar de futuro o decisión del momento: will + verbo base.'], would: ['-ría (condicional)', 'Auxiliar: comería = would eat. También para pedir con educación.'],
  can: ['puedo / sé', 'Poder o saber hacer algo. Nunca cambia ni lleva "to" después.'], could: ['podría / pude', 'Pasado de can o forma educada de pedir.'],
  should: ['debería', 'Para dar consejos. Va con verbo base, sin "to".'], must: ['debe / tiene que', 'Obligación fuerte o deducción segura.'], might: ['tal vez, podría', 'Posibilidad (50%).'], may: ['puede que / ¿puedo?', 'Posibilidad o permiso formal.'],
  a: ['un / una', 'Artículo: antes de palabras que empiezan con sonido de consonante.'], an: ['un / una', 'Artículo: antes de palabras que empiezan con sonido de vocal (an apple, an hour).'],
  the: ['el / la / los / las', 'Artículo para algo específico. Una sola palabra para todos los géneros y números.'],
  this: ['este / esta / esto', 'Cosa cercana (una).'], that: ['ese / esa / eso / que', 'Cosa lejana (una), o "que" para unir frases.'], these: ['estos / estas', 'Cosas cercanas (varias).'], those: ['esos / esas', 'Cosas lejanas (varias).'],
  in: ['en / dentro de', 'Lugar cerrado o grande (in the car, in Mexico) o meses y años (in May).'], on: ['en / sobre', 'Superficie, calles (on Main Street) o días (on Monday).'], at: ['en / a', 'Punto específico (at home, at work) u horas (at 5).'],
  to: ['a / para / (infinitivo)', 'Dirección (go to school) o marca de infinitivo (to eat = comer).'], for: ['para / por / durante', 'Propósito, destinatario o duración (for 2 years).'], of: ['de', 'Posesión, parte o contenido (a cup of coffee).'],
  with: ['con', 'Compañía o instrumento.'], from: ['de / desde', 'Origen (I\'m from Mexico).'], by: ['por / en / para', 'Medio (by bus), autor o límite de tiempo (by Friday).'], about: ['sobre / acerca de / como', 'Tema o aproximación (about 10).'],
  and: ['y', 'Une palabras o frases.'], but: ['pero', 'Une dos ideas opuestas.'], or: ['o', 'Alternativa.'], because: ['porque', 'Da una razón.'], so: ['así que / tan', 'Consecuencia o intensidad.'],
  if: ['si (condición)', 'Inicia una condición.'], than: ['que (comparación)', 'Para comparar: bigger than.'], then: ['entonces / luego', 'Secuencia.'],
  not: ['no', 'Negación: va después del auxiliar (do not, is not).'], "n't": ['no', 'Forma corta de "not" pegada al auxiliar.'],
  what: ['qué / cuál / lo que', 'Pregunta por cosas o información.'], where: ['dónde', 'Pregunta por lugar.'], when: ['cuándo', 'Pregunta por tiempo.'], who: ['quién', 'Pregunta por personas.'], why: ['por qué', 'Pregunta por la razón.'], how: ['cómo', 'Pregunta por la manera o el estado (how old = qué edad).'],
  there: ['allí / (hay)', '"There is / there are" = hay.'], here: ['aquí', 'Lugar cercano.'], some: ['algo de / algunos', 'Cantidad en frases afirmativas.'], any: ['nada de / algún', 'Cantidad en negativas y preguntas.'],
  much: ['mucho', 'Con cosas que no se cuentan (much water).'], many: ['muchos', 'Con cosas que se cuentan (many cars).'], very: ['muy', 'Intensificador.'], really: ['muy / de verdad', 'Intensificador muy usado.'],
  never: ['nunca', 'Frecuencia 0%. Va antes del verbo.'], always: ['siempre', 'Frecuencia 100%. Va antes del verbo.'], ever: ['alguna vez', 'En preguntas: Have you ever...?'],
  already: ['ya', 'Algo pasó antes de lo esperado.'], yet: ['todavía / ya', 'Al final, en negativas o preguntas.'], just: ['acabar de / solo', 'I\'ve just eaten = acabo de comer.'], since: ['desde', 'Punto de inicio en el tiempo.'],
  gonna: ['voy a / vas a', 'Forma hablada de "going to".'], wanna: ['quiero / quieres', 'Forma hablada de "want to".'], gotta: ['tengo que', 'Forma hablada de "have got to".'],
  "let's": ['vamos a...', 'Let us: para proponer algo.'], please: ['por favor', 'Cortesía.'], yes: ['sí', ''], no: ['no', '']
};
const CONTR_SPLIT = { "'m": 'am', "'re": 'are', "'s": 'is / has (o posesivo \'s)', "'ve": 'have', "'ll": 'will', "'d": 'would / had', "n't": 'not' };

// Vocabulario de todas las lecciones (inglés → español)
const VOCAB_MAP = (() => {
  const m = {};
  LESSONS.concat(typeof COURSE !== 'undefined' ? COURSE : []).forEach(l => (l.vocab || []).forEach(([en, es]) => {
    en.split(/\s*\/\s*/).forEach(v => { const k = v.replace(/\s*\(.*?\)/g, '').trim().toLowerCase(); if (k && !m[k]) m[k] = es; });
  }));
  return m;
})();
// Dudas relacionadas según las palabras de la oración
const GUIDE_LINKS = { does: 'Do vs. Does', do: 'Do vs. Does', did: 'auxiliar', in: 'In / On / At', on: 'In / On / At', at: 'In / On / At', say: 'Say vs. Tell', tell: 'Say vs. Tell', make: 'Make vs. Do', his: 'His vs. Her', her: 'His vs. Her', much: 'Much vs. Many', many: 'Much vs. Many', few: 'Few vs. A few', little: 'Few vs. A few', good: 'Good vs. Well', well: 'Good vs. Well', for: 'For vs. Since', since: 'For vs. Since', will: 'Will vs. Going', gonna: 'Will vs. Going', going: 'Will vs. Going', than: 'Then vs. Than', then: 'Then vs. Than', your: 'Your vs.', "you're": 'Your vs.', its: 'Your vs.', "it's": 'Your vs.', their: 'Your vs.', there: 'Your vs.', been: 'participio', have: 'participio', has: 'participio', but: 'But, though', though: 'But, though', however: 'But, though', a: '', an: '' };

function tokenize(sentence) { return sentence.replace(/[“”]/g, '"').split(/\s+/).filter(Boolean); }
function sentenceType(s) {
  const t = s.trim().toLowerCase();
  if (/\?$/.test(t)) return /^(what|where|when|who|why|how|which)\b/.test(t) ? '❓ Pregunta abierta: palabra de pregunta + auxiliar + sujeto + verbo. Ej: Where <b>do</b> you live?' : '❓ Pregunta de sí/no: auxiliar (do, does, did, is, are, can, have...) + sujeto + verbo. El auxiliar va al principio, como los signos ¿? del español.';
  if (/\b(not|n't|never)\b|n't\b/.test(t)) return '➖ Negativa: sujeto + auxiliar + not + verbo. Ej: I <b>don\'t</b> work. En inglés "no" solo no basta: necesita un auxiliar.';
  if (/^(please\s+)?(don't\s+)?[a-z]+\b/.test(t) && !/^(i|you|he|she|it|we|they|my|the|a|an|this|that|there|what)\b/.test(t) && /^(go|take|come|turn|walk|open|close|drink|eat|sit|stop|call|tell|give|let|look|wait|be|have|make|try|don't|please)\b/.test(t)) return '❗ Orden o instrucción (imperativo): el verbo va solo, sin sujeto. Ej: <b>Turn</b> left.';
  return '➕ Afirmativa: sujeto + verbo + complemento. En inglés el sujeto (I, you, he...) casi nunca se omite.';
}
function wordInfo(raw) {
  const w = raw.replace(/^[^a-z0-9']+|[^a-z0-9']+$/gi, '').replace(/’/g, "'");
  const k = w.toLowerCase();
  if (!k) return null;
  if (FUNC[k]) return { w, es: FUNC[k][0], rol: FUNC[k][1] };
  const m = k.match(/^(.+?)('m|'re|'s|'ve|'ll|'d|n't)$/);
  if (m) {
    const base = m[1] === 'wo' ? 'will' : m[1] === 'ca' ? 'can' : m[1];
    const b = FUNC[base] || FUNC[base + 'n'] || null;
    return { w, es: (b ? b[0] + ' + ' : base + ' + ') + (m[2] === "n't" ? 'no' : CONTR_SPLIT[m[2]]), rol: `Contracción: <b>${esc(base)}</b> + <b>${esc(CONTR_SPLIT[m[2]])}</b>. Los nativos casi siempre lo dicen así de corto.` };
  }
  const expr = EXPRESSIONS.find(e => !e.k.includes(' ') && e.re.test(' ' + k + ' '));
  if (expr) return { w, es: expr.es, rol: TYPE_NAMES[expr.type] || '' };
  if (VOCAB_MAP[k]) return { w, es: VOCAB_MAP[k], rol: '' };
  let hint = '';
  if (/ing$/.test(k) && k.length > 4) hint = 'Termina en -ing: acción en progreso (-ando, -iendo) o actividad.';
  else if (/ed$/.test(k) && k.length > 3) hint = 'Termina en -ed: pasado o participio de un verbo regular.';
  else if (/ly$/.test(k) && k.length > 4) hint = 'Termina en -ly: adverbio, dice cómo se hace algo (= -mente).';
  else if (/s$/.test(k) && k.length > 3) hint = 'Termina en -s: plural, o verbo con he/she/it en presente.';
  return { w, es: null, rol: hint };
}
function breakdownHTML(sentence, opts = {}) {
  const toks = tokenize(sentence);
  const rows = toks.map((t, i) => {
    const info = wordInfo(t); if (!info) return '';
    return `<tr><td><button class="say" data-sayw="${esc(info.w)}">${esc(info.w)}</button></td><td id="dw-${i}" data-need="${info.es ? '' : esc(info.w)}">${info.es ? esc(info.es) : '<span class="muted">…</span>'}</td><td class="small">${info.rol}</td></tr>`;
  }).join('');
  const keys = [...new Set(toks.map(t => t.toLowerCase().replace(/[^a-z']/g, '')))];
  const links = [...new Set(keys.map(k => GUIDE_LINKS[k]).filter(Boolean))].map(s => GUIDE.find(g => g.t.includes(s))).filter(Boolean);
  return `<h3>🔍 La oración palabra por palabra</h3>
    <p style="font-size:1.15rem" class="en">${esc(sentence)}</p>
    <div class="row wrap">${sayBtn(sentence, '▶ Escuchar')}${sayBtn(sentence, '🐢 Lento', 'lento')}</div>
    <p class="small mt" id="dfull">${opts.es ? '🇲🇽 ' + esc(opts.es) : '<span class="muted">🇲🇽 Traduciendo…</span>'}</p>
    <div class="tip small">${sentenceType(sentence)}</div>
    <table class="tbl"><tr><th>Palabra</th><th>Significa</th><th>¿Por qué va aquí?</th></tr>${rows}</table>
    <p class="small muted">Toca cualquier palabra para escucharla.</p>
    ${links.length ? `<h3>📚 Para entenderlo mejor</h3>${links.map(g => `<details class="card" style="margin:8px 0"><summary><b>${esc(g.t)}</b></summary><div class="explain mt">${g.b}</div></details>`).join('')}` : ''}`;
}
async function fillTranslations(sentence, hasEs) {
  if (!hasEs && typeof translate === 'function') {
    try { const t = await translate(sentence); const el = document.getElementById('dfull'); if (el) el.textContent = '🇲🇽 ' + t; }
    catch (e) { const el = document.getElementById('dfull'); if (el) el.textContent = ''; }
  }
  for (const td of document.querySelectorAll('#deep [data-need]')) {
    const w = td.dataset.need; if (!w) continue;
    try { td.textContent = await translate(w); } catch (e) { td.innerHTML = '<span class="muted small">(sin internet)</span>'; }
  }
}

// Ventana flotante para las explicaciones
function openDeep(html, after) {
  closeDeep();
  const d = document.createElement('div'); d.id = 'deep';
  d.innerHTML = `<div class="deep-box"><button class="deep-x" aria-label="Cerrar">✕</button>${html}<button class="btn block mt deep-ok">Entendido</button></div>`;
  document.body.appendChild(d);
  d.onclick = e => { if (e.target === d || e.target.closest('.deep-x,.deep-ok')) closeDeep(); };
  if (after) after();
}
function closeDeep() { const d = document.getElementById('deep'); if (d) d.remove(); }
(function () {
  const st = document.createElement('style');
  st.textContent = `#deep{position:fixed;inset:0;background:rgba(20,33,61,.55);z-index:60;display:flex;align-items:flex-end;justify-content:center}
#deep .deep-box{background:#fff;width:100%;max-width:640px;max-height:88vh;overflow:auto;border-radius:18px 18px 0 0;padding:18px 16px 24px;position:relative}
#deep .deep-x{position:absolute;top:10px;right:12px;border:0;background:none;font-size:1.3rem;cursor:pointer;color:var(--muted)}
#deep td{vertical-align:top}
.seg{border:0;background:none;padding:2px 4px;margin:1px;border-radius:6px;font:inherit;font-size:1.12rem;cursor:pointer}
.seg-ok{color:var(--green);font-weight:600}.seg-bad{color:var(--red);font-weight:700;background:var(--red-soft);text-decoration:underline wavy}
.deep-btn{margin-top:8px}`;
  document.head.appendChild(st);
})();
document.addEventListener('click', e => {
  const w = e.target.closest('[data-sayw]'); if (w) { speak(w.dataset.sayw, 'normal'); return; }
  const s = e.target.closest('[data-deepsent]');
  if (s) { const sent = s.dataset.deepsent, es = s.dataset.es || ''; openDeep(breakdownHTML(sent, { es }), () => fillTranslations(sent, !!es)); return; }
  const q = e.target.closest('[data-deepq]'); if (q && window.LASTQ) openDeepQuestion(window.LASTQ);
});

// Explicación a fondo de una pregunta de opción múltiple
const looksEnglish = s => /^[\x00-\x7F’]+$/.test(s) && /\b(i|you|he|she|it|we|they|the|a|is|are|am|do|does|did|my|your|to|of|in|on|at|can|will|have|has|this|that|what|where|how|not|n't)\b/i.test(s);
function openDeepQuestion(Q) {
  const correct = Q.options[Q.a], chosen = Q.chosen != null ? Q.options[Q.chosen] : null;
  const blank = /_{2,}/.test(Q.q);
  const sentence = blank ? Q.q.replace(/_{2,}/, correct) : (looksEnglish(correct) ? correct : (looksEnglish(Q.q) ? Q.q : ''));
  let html = `<h2>🤔 Te lo explico a fondo</h2><p class="small muted mb0">Pregunta:</p><p><b>${esc(Q.q)}</b></p>
    <div class="tip">✅ Respuesta correcta: <b>${esc(correct)}</b><br><span class="small">${esc(Q.why || '')}</span></div>`;
  if (chosen && chosen !== correct) {
    const wrongSent = blank ? Q.q.replace(/_{2,}/, chosen) : chosen;
    const ci = wordInfo(correct.split(/\s+/)[0] || ''), wi = wordInfo(chosen.split(/\s+/)[0] || '');
    html += `<div class="card mt" style="border:2px solid var(--red-soft)"><h3>❌ Tú elegiste: "${esc(chosen)}"</h3>
      ${blank || looksEnglish(chosen) ? `<p class="small mb0">Así quedaría: <span class="w-bad">${esc(wrongSent)}</span></p>` : ''}
      ${blank && ci && wi && (ci.rol || wi.rol) ? `<p class="small mt mb0">La diferencia:</p><ul class="small"><li><b>${esc(correct)}</b>: ${ci.es ? esc(ci.es) + '. ' : ''}${ci.rol}</li><li><b>${esc(chosen)}</b>: ${wi.es ? esc(wi.es) + '. ' : ''}${wi.rol}</li></ul>` : ''}
      <p class="small mt mb0">💡 Lee la explicación de abajo palabra por palabra: ahí se ve por qué la correcta es <b>${esc(correct.replace(/[.!?]$/, ""))}</b>.</p></div>`;
  }
  if (sentence) html += `<div class="mt">${breakdownHTML(sentence)}</div>`;
  if (Q.easy) html += `<details class="card mt"><summary><b>📖 Repasar la explicación fácil de la lección</b></summary><div class="easy mt">${Q.easy}</div></details>`;
  openDeep(html, () => sentence && fillTranslations(sentence, false));
}

// Al cambiar de pantalla se cierra la explicación flotante
const _origGo3 = go;
go = function (name, arg) { closeDeep(); _origGo3(name, arg); };
