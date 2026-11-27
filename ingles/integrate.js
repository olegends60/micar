// 🔗 Integración: el contenido de "Así hablan en YouTube", "Abreviaciones", "Groserías", "El inglés no se traduce"
// e "Inglés desde cero" pasa a formar parte del estudio normal: lecciones por nivel, Inicio, Memoria, Reto y Oído.
// Se carga al final.

/* =========================================================
   1) Lecciones generadas a partir de esos apartados
   ========================================================= */
// items: [inglés, significado, ejemplo en inglés, pronunciación opcional]
function makeLesson(o) {
  const items = o.items;
  const opts = (i, pool) => shuffle([items[i][1], ...shuffle(pool.filter((x, k) => k !== i)).slice(0, 2).map(x => x[1])]);
  const quiz = shuffle(items.map((x, i) => i)).slice(0, 5).map(i => { const op = opts(i, items); return { q: `"${items[i][2]}" — ¿qué significa "${items[i][0]}" aquí?`, options: op, a: op.indexOf(items[i][1]), why: `${items[i][0]} = ${items[i][1]}.` }; });
  const li = Math.floor(Math.random() * items.length), lop = opts(li, items);
  return {
    id: o.id, level: o.level, title: o.title, focus: o.focus || 'vocab', goal: o.goal, why: o.why,
    intro: o.intro || { en: items[0][2], es: items[0][1] },
    vocab: items.slice(0, 10).map(x => [x[0], x[1], x[3] || '']),
    explain: (o.explainTop || '') + `<table class="tbl"><tr><th>Así se dice</th><th>Significa</th></tr>${items.map(x => `<tr><td><b>${esc(x[0])}</b><br><span class="small muted">"${esc(x[2])}"</span></td><td>${esc(x[1])}</td></tr>`).join('')}</table>` + (o.explainBottom || ''),
    easy: o.easy, memo: o.memo,
    examples: shuffle(items).slice(0, 4).map(x => [x[2], x[1]]),
    listen: { text: items[li][2], q: `¿Qué significa "${items[li][0]}" en lo que escuchaste?`, options: lop, a: lop.indexOf(items[li][1]), note: `"${items[li][0]}" = ${items[li][1]}.` },
    speak: shuffle(items).slice(0, 3).map(x => x[2]),
    quiz
  };
}
const byCat = c => STREET.filter(r => r[3] === c).map(r => [r[0], r[1], r[2]]);
const GEN = [];

// A1 · El inglés no se traduce palabra por palabra (de las tarjetas)
GEN.push({
  id: 'a1-notraduce', level: 'A1', first: 'a1-saludos', title: 'El inglés no se traduce palabra por palabra', focus: 'grammar',
  goal: 'Vas a entender por qué el inglés no se traduce palabra por palabra y aprender frases mexicanas con cómo se dicen de verdad en EE. UU.',
  why: 'Si traduces palabra por palabra te sale un inglés raro ("I have hungry"). Pensar en frases completas te hace sonar natural desde el inicio.',
  intro: { en: "I'm hungry. What's up? I'll be right back.", es: 'Tengo hambre. ¿Qué onda? Ahorita vengo.' },
  explainTop: INTRO_CARDS.slice(2, 7).map(c => `<h3>${c.i} ${c.t}</h3>${c.b}`).join('') + '<h3>🇲🇽➡️🇺🇸 Frases nuestras y cómo se dicen allá</h3>',
  items: [['I\'m hungry', 'tengo hambre (no "I have hungry")', "I'm so hungry right now."], ['I\'m 25', 'tengo 25 años', "I'm 25 years old."], ['What\'s up?', '¿qué onda?', "Hey, what's up?"], ['I\'ll be right back', 'ahorita vengo', "Wait here, I'll be right back."], ['I don\'t care', 'me vale', "Honestly, I don't care."], ['You got this', 'échale ganas', "Don't worry, you got this."], ['No way', 'no manches', "No way! Really?"], ['How embarrassing!', '¡qué oso!', "I fell in front of everyone. How embarrassing!"], ['It\'s raining', 'llueve (siempre con "it")', "Take an umbrella, it's raining."], ['I like coffee', 'me gusta el café (sin "the")', "I like coffee in the morning."]],
  easy: '<p>Antes de traducir, pregúntate: <b>¿cómo lo diría un gringo?</b> No "¿cómo se traduce cada palabra?". Aprende frases completas como bloques.</p>',
  memo: ['"Tengo" en español muchas veces es "I\'m" en inglés: I\'m hungry, I\'m cold, I\'m 25, I\'m scared.', 'En inglés siempre va quién: "Llueve" → "It\'s raining".', 'Repite estas frases como si fueran una sola palabra.']
});
// A2 · Mensajes básicos
GEN.push({
  id: 'a2-mensajes', level: 'A2', title: 'Tus primeros mensajes: lol, idk, omw, ty', focus: 'vocab',
  goal: 'Vas a aprender las abreviaciones más básicas para escribir y entender mensajes en EE. UU., y cómo se dicen las nuestras (tqm, ntp, xq).',
  why: 'En WhatsApp e Instagram casi nadie escribe completo. Con estas 12 ya entiendes la mayoría de los mensajes.',
  items: ['lol', 'idk', 'omw', 'brb', 'ty / thx', 'np', 'pls / plz', 'u / ur', 'rn', 'btw', 'lmk', 'ily'].map(a => { const r = TXT_US.find(x => x[0] === a || x[0].split(' / ').includes(a)); return r ? [r[0], r[2], r[3]] : null; }).filter(Boolean).map(x => { return x; }),
  explainBottom: '<h3>🇲🇽 Las nuestras en inglés</h3><table class="tbl">' + TXT_MX.slice(0, 8).map(r => `<tr><td><b>${esc(r[0])}</b> (${esc(r[1])})</td><td>→ <b>${esc(r[2])}</b></td></tr>`).join('') + '</table>',
  easy: '<p>Casi todas son <b>iniciales</b>: idk = <b>I D</b>on\'t <b>K</b>now. Si ves letras raras, piensa qué frase empieza con esas letras.</p>',
  memo: ['idk = I Don\'t Know, omw = On My Way, lmk = Let Me Know: las iniciales de la frase.', 'tqm → ily, ntp → np, xq → bc.', 'Escribe tu próximo mensaje usando una abreviación en inglés.']
});
// B1 · Muletillas, reacciones y cómo se hablan
GEN.push({
  id: 'b1-muletillas', level: 'B1', title: 'Like, you know, bro, no way: cómo hablan de verdad', focus: 'listening',
  goal: 'Vas a reconocer las muletillas (like, you know, I mean), cómo se hablan entre ellos (bro, dude, boss) y las reacciones más comunes (no way, let\'s go, that\'s crazy).',
  why: 'En videos de creadores de EE. UU. "like" sale 2 veces de cada 100 palabras. Si no las conoces, te pierdes.',
  items: [...byCat('Muletillas'), ...byCat('Para hablarle a alguien').slice(0, 4), ...byCat('Reacciones').slice(0, 5)],
  easy: '<p>Las muletillas son como nuestro "o sea", "este…", "la neta": <b>no se traducen</b>, solo rellenan. Al escuchar, ignóralas y quédate con lo importante.</p>',
  memo: ['like = o sea · bro = güey · no way = no manches · that\'s crazy = qué locura.', 'Cuenta cuántos "like" dice un youtuber en un minuto.', '"I was like…" = "y yo de que…".']
});
// B1 · Frases del día a día
GEN.push({
  id: 'b1-diaadia', level: 'B1', title: 'Frases del día a día: real quick, I\'m down, my go-to', focus: 'speaking',
  goal: 'Vas a aprender frases que los estadounidenses usan todo el tiempo en la vida diaria y en el trabajo: real quick, appreciate it, you good?, be down for, clock in, on break...',
  why: 'Son frases cortas que no vienen en los libros pero se oyen a diario: en la tienda, en el trabajo y con amigos.',
  items: byCat('Día a día'),
  easy: '<p>Muchas de estas frases <b>se comen palabras</b>: "(I) appreciate it", "(Are) you good?". Apréndelas así de cortas, como las dicen.</p>',
  memo: ['"You good?" sirve para "¿estás bien?" y para "¿quieres algo?". Respuesta: "I\'m good".', '"I got the chicken" = pedí el pollo.', 'Usa "real quick" cuando pidas algo rápido.']
});
// B2 · Slang nuevo
GEN.push({
  id: 'b2-genz', level: 'B2', title: 'Slang nuevo: no cap, cooked, mid, let him cook', focus: 'vocab',
  goal: 'Vas a entender el slang que más usan los jóvenes y creadores de contenido en EE. UU. hoy.',
  why: 'Está en TikTok, YouTube, Instagram y en la calle. Si no lo conoces, no entiendes la mitad de los comentarios ni de los videos.',
  items: byCat('Slang nuevo'),
  easy: '<p>Asocia cada palabra con la nuestra: <b>no cap</b> = neta · <b>cooked</b> = ya valí · <b>mid</b> = ni fu ni fa · <b>she ate</b> = se lució · <b>W</b> = ganaste.</p>',
  memo: ['cap = mentira, no cap = sin mentir.', 'cooked = estás frito (como algo que ya se coció).', 'Entiéndelo primero; úsalo solo con gente joven y de confianza.']
});
// B2 · Gramática de calle y groserías que más se oyen
GEN.push({
  id: 'b2-calle', level: 'B2', title: 'Gramática de calle: ain\'t, he don\'t, gotta', focus: 'grammar',
  goal: 'Vas a entender cómo se habla en la calle aunque "no sea correcto": ain\'t, he don\'t, palabras que se comen, y las groserías que más se oyen en videos.',
  why: 'En la calle, en el rap y en los videos se habla así. Entenderlo te evita confusiones; saber que es informal te evita usarlo en una entrevista.',
  items: [...byCat('Gramática de calle'), ...byCat('Groserías frecuentes')],
  easy: '<p>Es como en español cuando alguien dice "haiga" o "pa\' que": <b>todos le entienden</b>, aunque no sea de libro. Entiéndelo, pero en el trabajo usa la forma correcta.</p>',
  memo: ['ain\'t = no es / no estoy / no tengo.', 'he don\'t = he doesn\'t (de calle).', 'Las groserías: entiende su fuerza antes de usarlas.']
});
// B2 · Groserías de México y cómo se dicen en inglés
GEN.push({
  id: 'b2-grosmx', level: 'B2', title: 'Nuestras groserías en inglés: pendejo, no mames, me vale', focus: 'vocab',
  goal: 'Vas a aprender cómo se dicen en inglés las groserías y expresiones fuertes que usamos en México, y qué tan fuertes son.',
  why: 'Cuando quieras expresar algo como lo dirías en México, necesitas saber el equivalente real en inglés y no una traducción literal que nadie entiende.',
  items: MX_GROS.filter(r => r[4] && !r[2].includes('⛔')).slice(0, 14).map(r => [r[3].split('·')[0].trim(), `${r[0][0]} ${r[2]}`, (r[4].split('→')[1] || r[3]).trim()]),
  explainTop: '<p>Fuerza: 🟢 suave · 🟡 media · 🔴 fuerte · ⛔ insulto grave.</p>',
  easy: '<p>No traduzcas la grosería palabra por palabra ("son of the chingada" no existe 😄). Busca su <b>equivalente</b>: pinche = fucking, me vale madres = I don\'t give a shit, no mames = no fucking way.</p>',
  memo: ['pinche = fucking · pendejo = dumbass · cabrón = bastard (o "dude" entre amigos).', 'no mames = no fucking way · me vale = I don\'t care.', 'La lista completa está en ☰ Más → 🤬 Groserías sin filtro.']
});

// Inserta cada lección al final de su nivel (antes de la primera del nivel siguiente)
GEN.forEach(o => {
  if (LESSONS.some(l => l.id === o.id)) return;
  const L1 = makeLesson(o);
  const lvl = LEVELS.indexOf(o.level);
  let at = LESSONS.findIndex(l => LEVELS.indexOf(l.level) > lvl); if (at < 0) at = LESSONS.length;
  if (o.first) at = LESSONS.findIndex(l => l.id === o.first) + 1;
  LESSONS.splice(at, 0, L1);
});

/* =========================================================
   2) Expresión del día en el Inicio
   ========================================================= */
function dailyPool() {
  const lv = LEVELS.indexOf(S.level || 'A1');
  const pool = [];
  TXT_US.filter(r => !r[5]).forEach(r => pool.push({ en: r[0], es: r[2], ex: r[3], tag: '📱 Abreviación', min: 1 }));
  STREET.forEach(r => pool.push({ en: r[0], es: r[1], ex: r[2], tag: '🎬 Así hablan en EE. UU.', min: r[3] === 'Slang nuevo' || r[3] === 'Gramática de calle' ? 2 : 1, tip: r[5] }));
  INTRO_CARDS.length && ['I\'m hungry|tengo hambre|No digas "I have hungry"', 'It\'s raining|llueve|En inglés siempre va el sujeto: "it"', 'I like coffee|me gusta el café|Sin "the" al hablar en general', 'My head hurts|me duele la cabeza|Con "my", no con "the"'].forEach(s => { const [en, es, tip] = s.split('|'); pool.push({ en, es, ex: en, tag: '🧭 No se traduce igual', min: 0, tip }); });
  MX_GROS.filter(r => r[4] && !r[2].includes('⛔') && !r[2].includes('🔴')).forEach(r => pool.push({ en: r[3].split('·')[0].trim(), es: r[0][0] + ' ' + r[2], ex: (r[4].split('→')[1] || '').trim() || r[3], tag: '🤬 Grosería mexicana en inglés', min: 3 }));
  return pool.filter(p => p.min <= lv);
}
function expressionOfDay() {
  const pool = dailyPool(); if (!pool.length) return null;
  const t = today(); let h = 0; for (const ch of t) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return pool[h % pool.length];
}
const _origHomeInt = SCREENS.home;
SCREENS.home = () => {
  _origHomeInt();
  if (screen !== 'home' || !S.level) return;
  const e = expressionOfDay(); if (!e) return;
  const saved = (S.customCards || []).some(c => c.id === 'day|' + e.en);
  const card = `<div class="card" style="border-left:6px solid var(--red)"><div class="row"><span class="tag red grow" style="flex:none">💬 Expresión del día</span><span class="small muted" style="margin-left:auto">${e.tag}</span></div>
    <p class="mt mb0" style="font-size:1.5rem;font-weight:800">${esc(e.en)}</p><p class="mb0">= ${esc(e.es)}</p>
    <p class="small mt mb0" style="color:var(--blue)">💬 "${esc(e.ex)}"</p>${e.tip ? `<p class="small muted mt mb0">💡 ${esc(e.tip)}</p>` : ''}
    <div class="row mt">${sayBtn(e.ex, '▶ Escuchar')}${sayBtn(e.ex, '🐢', 'lento')}<button class="say" id="day-save">${saved ? '✓ En Memoria' : '+🧠 Aprender'}</button></div></div>`;
  const anchor = $app.querySelector('.mission') ? $app.querySelector('.mission').closest('.card') : $app.querySelector('.card.hero');
  if (anchor) anchor.insertAdjacentHTML('afterend', card);
  const b = document.getElementById('day-save');
  if (b) b.onclick = () => { S.customCards = S.customCards || []; if (!S.customCards.some(c => c.id === 'day|' + e.en)) { S.customCards.push({ id: 'day|' + e.en, en: e.en, es: e.es, pr: '', tip: '💬 ' + e.ex, from: 'Expresión del día' }); save(); toast('Agregada a Memoria 🧠'); } b.textContent = '✓ En Memoria'; };
};

/* =========================================================
   3) Oído nativo y Reto relámpago con frases reales
   ========================================================= */
STREET.filter(r => /gonna|wanna|gotta|kinda|y'all|ain't|you good|real quick|i was like|no way|let's|hold up/i.test(r[2] + ' ' + r[0])).forEach(r => {
  if (FAST_DRILLS.some(d => d.fast === r[2])) return;
  FAST_DRILLS.push({ fast: r[2], full: r[2], es: r[1], red: [`${r[0]} = ${r[1]}`] });
});
if (typeof blitzQuestion === 'function') {
  const _origBlitzQ = blitzQuestion;
  blitzQuestion = function () {
    const lv = LEVELS.indexOf(S.level || 'A1');
    if (Math.random() < 0.3) {
      const src = lv >= 2 ? STREET : TXT_US.filter(r => !r[5]).map(r => [r[0], r[2], r[3]]);
      const it = src[Math.random() * src.length | 0];
      const others = shuffle(src.filter(x => x !== it)).slice(0, 2).map(x => x[1]);
      return { q: `"${it[2]}" — ¿qué significa "${it[0]}"?`, options: [it[1], ...others], a: 0 };
    }
    return _origBlitzQ();
  };
}
