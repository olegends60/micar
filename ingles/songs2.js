// 🎵 Canciones 2.0: sincronización automática (también al adelantar), traducción pequeña bajo cada verso,
// explicación del verso (phrasal verbs vs. palabras sueltas) y "¿De qué habla la canción?" en español.
// Reemplaza las funciones del reproductor definidas en index.html. Se carga al final.

/* ---------- Traducción por lotes (con contexto, mejor para phrasal verbs) ---------- */
async function translateLines(lines, onProgress) {
  const out = lines.map(l => trCache[l.trim().toLowerCase()] || '');
  const todo = lines.map((l, i) => ({ l, i })).filter(x => !out[x.i] && x.l.trim());
  let chunk = [];
  const flush = async () => {
    if (!chunk.length) return;
    const text = chunk.map(x => x.l).join('\n');
    const d = await getJSON('https://api.mymemory.translated.net/get?langpair=en|es&q=' + encodeURIComponent(text));
    if (d.quotaFinished) throw new Error('quota');
    const tr = (d.responseData && d.responseData.translatedText || '').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').split('\n');
    if (tr.length === chunk.length) chunk.forEach((x, k) => { out[x.i] = tr[k].trim(); trCache[x.l.trim().toLowerCase()] = out[x.i]; });
    else for (const x of chunk) { out[x.i] = await translate(x.l); }
    try { localStorage.setItem(TR_KEY, JSON.stringify(trCache)); } catch (e) {}
    chunk = []; if (onProgress) onProgress(out);
  };
  for (const x of todo) {
    if (chunk.reduce((a, c) => a + c.l.length + 1, 0) + x.l.length > 450) await flush();
    chunk.push(x);
  }
  await flush();
  return out;
}

/* ---------- ¿De qué habla la canción? (en español) ---------- */
const THEMES = {
  'amor': [/\b(love|lover|baby|babe|heart|kiss|hold me|together|forever|darling|honey|mine|yours|beautiful|hug)\b/gi, 'el amor y lo que siente por otra persona'],
  'desamor': [/\b(cry|crying|tears|goodbye|broken|break my heart|alone|lonely|miss you|hurt|pain|leave|leaving|gone|lie|lies|lied|cheat|over you|let go|move on)\b/gi, 'el desamor: una ruptura, extrañar a alguien o el dolor de una relación que terminó'],
  'fiesta': [/\b(party|dance|dancing|club|drink|drinks|shots|tonight|music|dance floor|lit|turn up|weekend|celebrate)\b/gi, 'la fiesta, bailar y pasarla bien'],
  'dinero y éxito': [/\b(money|cash|rich|bands|racks|diamonds|ice|gold|flex|boss|millions|bank|chain|whip|drip)\b/gi, 'el dinero, el éxito y presumir lo que se tiene'],
  'superación': [/\b(free|fly|rise|strong|stronger|fight|believe|dream|dreams|never give up|stand up|survive|hope|champion|win|winner|unstoppable)\b/gi, 'la superación personal: salir adelante, creer en uno mismo y no rendirse'],
  'deseo': [/\b(body|touch|sexy|bed|want you|need you|desire|hot|lips|skin)\b/gi, 'la atracción y el deseo por alguien'],
  'la calle y la vida dura': [/\b(street|streets|hood|gun|struggle|grind|hustle|block|trap|broke|poverty)\b/gi, 'la vida dura, la calle y luchar para salir adelante'],
  'la fe': [/\b(god|lord|pray|praying|heaven|soul|angel|blessed|faith|jesus)\b/gi, 'la fe, Dios y lo espiritual'],
  'la amistad': [/\b(friend|friends|homie|homies|crew|squad|brother|bro|together)\b/gi, 'la amistad y la gente cercana'],
  'la nostalgia': [/\b(remember|memories|back then|used to|young|yesterday|old days|wish)\b/gi, 'los recuerdos y la nostalgia por el pasado'],
  'la rebeldía': [/\b(rules|don't care|whatever|rebel|crazy|wild|don't give a|fuck)\b/gi, 'la rebeldía y hacer lo que uno quiere sin importar lo que digan']
};
function songTopic(s) {
  const text = s.lyrics, lines = text.split('\n');
  const scores = Object.entries(THEMES).map(([k, [re, d]]) => [k, (text.match(re) || []).length, d]).filter(x => x[1] > 0).sort((a, b) => b[1] - a[1]);
  const counts = {}; lines.forEach(l => { const k = l.toLowerCase().replace(/[^a-z' ]/g, '').trim(); if (k.split(' ').length >= 3) counts[k] = (counts[k] || 0) + 1; });
  const chorusKeys = Object.entries(counts).filter(([, c]) => c >= 2).sort((a, b) => b[1] - a[1]).slice(0, 2).map(x => x[0]);
  const chorus = chorusKeys.map(k => lines.findIndex(l => l.toLowerCase().replace(/[^a-z' ]/g, '').trim() === k)).filter(i => i >= 0);
  const top = scores.slice(0, 2);
  let html = top.length
    ? `<p>Por sus palabras clave, esta canción habla principalmente de <b>${top.map(t => t[2]).join('</b>, y también de <b>')}</b>.</p>`.replace(/ de <b>el /g, ' del <b>').replace(/ de <b>la /g, ' de <b>la ') + ``
    : '<p>Es una canción con un mensaje más personal; léela verso por verso abajo para entenderla.</p>';
  if (chorus.length) html += `<p class="mb0"><b>🔁 Lo que más se repite (el coro), que suele ser el mensaje principal:</b></p>${chorus.map(i => `<p class="small mb0 mt">"${esc(lines[i])}"<br><span class="muted">🇲🇽 ${esc(s.tr[i] || '…')}</span></p>`).join('')}`;
  const ex = findAllExpr(text).filter(x => x.e.type !== 'texto').slice(0, 4);
  if (ex.length) html += `<p class="small mt mb0"><b>💡 Frases clave:</b> ${ex.map(x => `<b>${esc(x.e.k)}</b> (${esc(x.e.es.replace(/^[🟢🟡🔴⛔]+\s*/u, '').split(/[.;]/)[0])})`).join(' · ')}</p>`;
  return html;
}

/* ---------- Reproductor con sincronización automática ---------- */
function effMark(i) { const s = SG.song; return s.marks[i] == null ? null : s.marks[i] + (s.offset || 0); }
function estimateMarks(dur) {
  const s = SG.song, lines = s.lyrics.split('\n');
  const words = lines.map(l => Math.max(2, l.split(/\s+/).length)), total = words.reduce((a, b) => a + b, 0);
  const start = dur * 0.06, span = dur * 0.88; let acc = 0;
  s.marks = words.map(w => { const t = start + span * acc / total; acc += w; return t; });
  s.estimated = true; songPut(s);
}
makePlayer = function () {
  const s = SG.song;
  const onDur = dur => {
    if (!dur) return;
    SG.dur = dur;
    if (!s.marks || !s.marks.filter(m => m != null).length) { estimateMarks(dur); renderSongBody(); }
    else if (!s.durChecked && s.lrcDur && Math.abs(dur - s.lrcDur) > 3) { s.durChecked = true; SG.durHint = dur - s.lrcDur; renderSongBody(); }
  };
  if (SG.url) {
    const au = document.getElementById('au');
    SG.P = { time: () => au.currentTime, seek: t => { au.currentTime = t; }, play: () => au.play(), pause: () => au.pause(), paused: () => au.paused };
    au.addEventListener('loadedmetadata', () => onDur(au.duration));
    au.addEventListener('seeked', () => { SG.follow = true; SG.cur = -2; });
  } else if (s.videoId) {
    loadYT().then(() => {
      if (screen !== 'song' || !document.getElementById('yt')) return;
      const pl = new YT.Player('yt', { videoId: s.videoId, width: '100%', height: '200', playerVars: { playsinline: 1, rel: 0 },
        events: { onReady: () => { SG.P = { time: () => pl.getCurrentTime() || 0, seek: t => pl.seekTo(t, true), play: () => pl.playVideo(), pause: () => pl.pauseVideo(), paused: () => pl.getPlayerState() !== 1 }; onDur(pl.getDuration()); } } });
    });
  }
  // El usuario mueve la pantalla: dejamos de seguir la letra por 5 segundos
  const mark = () => { SG.lastUser = Date.now(); };
  window.removeEventListener('touchmove', window._songTouch); window.removeEventListener('wheel', window._songTouch);
  window._songTouch = mark; window.addEventListener('touchmove', mark, { passive: true }); window.addEventListener('wheel', mark, { passive: true });
  clearInterval(songTick); let lastT = 0;
  songTick = setInterval(() => {
    if (screen !== 'song') { clearInterval(songTick); return; }
    const P = SG.P; if (!P) return;
    const t = P.time();
    if (Math.abs(t - lastT) > 1.5) { SG.follow = true; SG.cur = -2; } // adelantó o regresó la canción
    lastT = t;
    if (SG.stopAt != null && t >= SG.stopAt) { P.pause(); SG.stopAt = null; }
    if (SG.tab !== 'letra') return;
    let cur = -1; for (let i = 0; i < s.marks.length; i++) { const m = effMark(i); if (m != null && t >= m - 0.15) cur = i; }
    if (cur !== SG.cur) {
      SG.cur = cur;
      $app.querySelectorAll('[data-line]').forEach(d => d.classList.toggle('now', +d.dataset.line === cur));
      const el = $app.querySelector(`[data-line="${cur}"]`);
      const userBusy = SG.lastUser && Date.now() - SG.lastUser < 5000;
      if (el && SG.follow && !P.paused() && !userBusy && SG.open < 0) el.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, 200);
};
playLine = function (i) {
  const s = SG.song, P = SG.P, m = effMark(i);
  if (P && m != null) { P.seek(Math.max(0, m - 0.1)); const n = effMark(i + 1); SG.stopAt = n != null ? n : null; P.play(); }
  else speak(s.lyrics.split('\n')[i], 'lento');
};
const _origSaveLink = saveLinkSong;
saveLinkSong = async function (title, artist, lyrics, marks) {
  const r = (SA.results || []).find(x => x.trackName === title && x.artistName === artist);
  const p = SA.p;
  const s = { id: Date.now(), title, artist, lyrics, tr: [], audio: null, marks, notes: '', url: p.url, provider: p.provider, videoId: p.provider === 'youtube' ? p.id : null, spotifyId: p.provider === 'spotify' ? p.id : null, lrcDur: r && r.duration, offset: 0 };
  await songPut(s); SA = { mode: 'link' }; toast('🎵 ¡Canción agregada!'); openSong(s.id);
};

/* ---------- Pantalla de la canción ---------- */
SCREENS.song = () => {
  const s = SG.song;
  s.tr = s.tr || []; s.offset = s.offset || 0;
  let player = '<p class="small muted mb0">Sin audio: escucha cada verso con la voz de Jake.</p>';
  if (SG.url) player = `<audio id="au" controls src="${SG.url}" style="width:100%"></audio>`;
  else if (s.videoId) player = `<div style="border-radius:12px;overflow:hidden;background:#000"><div id="yt"></div></div>`;
  else if (s.spotifyId) player = `<iframe src="https://open.spotify.com/embed/track/${esc(s.spotifyId)}" width="100%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius:12px"></iframe>
    <p class="small muted mt mb0">Con Spotify la letra no se puede mover sola. Para que se ilumine mientras suena, agrega la canción con un link de YouTube.</p>`;
  else if (s.url) player = `<a class="btn ghost block" href="${esc(s.url)}" target="_blank" rel="noopener">▶ Abrir la canción</a>`;
  $app.innerHTML = `${topBar(null, 'songs')}
    <div class="card song-head"><h2 class="mb0">🎵 ${esc(s.title)}</h2><p class="muted small">${esc(s.artist || '')}</p>${player}<div id="sync-bar"></div></div>
    <div class="tabs" id="song-tabs"></div>
    <div id="song-body"></div>
    <button class="btn plain block mt" id="sdel">🗑️ Borrar esta canción</button>`;
  document.getElementById('sdel').onclick = async () => { if (confirm('¿Borrar "' + s.title + '"?')) { await songDel(s.id); go('songs'); } };
  SG.cur = -2; SG.follow = true; SG.open = -1; if (SG.tab === 'sync') SG.tab = 'letra';
  makePlayer();
  renderSongBody();
  // Traduce toda la canción automáticamente (una sola vez; queda guardada)
  const lines = s.lyrics.split('\n');
  if (lines.some((l, i) => !s.tr[i])) {
    SG.translating = true;
    translateLines(lines, out => { s.tr = out; if (screen === 'song' && SG.song === s && SG.tab === 'letra') updateTranslations(); })
      .then(out => { s.tr = out; SG.translating = false; songPut(s); if (screen === 'song' && SG.song === s) renderSongBody(); })
      .catch(e => { SG.translating = false; SG.trError = e.message; if (screen === 'song') renderSongBody(); });
  }
};
function updateTranslations() {
  const s = SG.song;
  $app.querySelectorAll('[data-line]').forEach(d => { const el = d.querySelector('.tr-small'); const t = s.tr[+d.dataset.line]; if (el && t) el.textContent = t; });
}
function syncBar() {
  const s = SG.song, canSync = !!(SG.url || s.videoId);
  const el = document.getElementById('sync-bar'); if (!el) return;
  if (!canSync) { el.innerHTML = ''; return; }
  el.innerHTML = `<div class="row mt small" style="gap:6px;flex-wrap:wrap"><span class="grow muted">${s.estimated ? '⏱️ Letra sincronizada de forma aproximada' : '⏱️ Letra sincronizada'}${s.offset ? ` (ajuste ${s.offset > 0 ? '+' : ''}${s.offset.toFixed(1)} s)` : ''}</span>
    <button class="say" data-off="-0.5" title="La letra va atrasada">⏪ Letra antes</button><button class="say" data-off="0.5" title="La letra va adelantada">Letra después ⏩</button></div>
    ${SG.durHint && !s.offset ? `<p class="small tip mt mb0">💡 Este video dura ${Math.abs(SG.durHint).toFixed(0)} s ${SG.durHint > 0 ? 'más' : 'menos'} que la canción original (puede tener intro). Si la letra no coincide, usa los botones de arriba.</p>` : ''}`;
  el.querySelectorAll('[data-off]').forEach(b => b.onclick = () => { s.offset = Math.round(((s.offset || 0) + +b.dataset.off) * 10) / 10; songPut(s); SG.cur = -2; syncBar(); });
}

renderSongBody = function () {
  const s = SG.song, lines = s.lyrics.split('\n'), all = findAllExpr(s.lyrics);
  s.tr = s.tr || [];
  const canSync = !!(SG.url || s.videoId);
  const tabs = [['letra', '📝 Letra'], ['expr', `💡 Expresiones (${all.length})`], ['quiz', '✍️ Ejercicio']];
  document.getElementById('song-tabs').innerHTML = tabs.map(([k, t]) => `<button data-tab="${k}" class="${SG.tab === k ? 'sel' : ''}">${t}</button>`).join('');
  syncBar();
  let body = '';
  if (SG.tab === 'letra') {
    const trDone = lines.every((l, i) => s.tr[i]);
    body = `<div class="card"><h3>🎵 ¿De qué habla la canción?</h3>${trDone ? songTopic(s) : `<p class="small muted mb0">${SG.trError ? (SG.trError === 'quota' ? 'Se acabó el límite gratis de traducciones de hoy; mañana se completa sola.' : 'Necesito internet para traducir la canción.') : '⏳ Traduciendo la canción al español…'}</p>`}</div>
      <p class="small muted">Toca cualquier verso para escucharlo y ver qué significa. Lo marcado en <span class="expr">amarillo</span> son frases que no se traducen palabra por palabra.</p>
      <div class="card">${lines.map((l, i) => {
        const open = SG.open === i;
        return `<div class="lyric ${open ? 'open' : ''}" data-line="${i}"><div class="ly-en">${markLine(l)}</div><div class="tr-small">${esc(s.tr[i] || '')}</div>${open ? versePanel(l, i) : ''}</div>`;
      }).join('')}</div>`;
  } else if (SG.tab === 'expr') {
    const groups = {}; all.forEach(x => (groups[x.e.type] = groups[x.e.type] || []).push(x));
    const help = { phrasal: 'Verbo + palabrita que juntas cambian el significado. Apréndelo como una sola palabra.', reduccion: 'Así se escribe cuando se canta o se habla rápido. Te digo la forma completa.', groseria: 'Fuerza: 🟢 suave · 🟡 media · 🔴 fuerte · ⛔ insulto grave.' };
    body = all.length ? Object.keys(TYPE_NAMES).filter(t => groups[t]).map(t => `<div class="card"><h3>${TYPE_NAMES[t]}</h3>${help[t] ? `<p class="small muted">${help[t]}</p>` : ''}
      ${groups[t].map(x => `<div class="list-item" style="align-items:flex-start"><div class="grow"><b>${esc(x.e.k)}</b> — ${esc(x.e.es)}<br><span class="small muted">"${esc(x.line)}"${s.tr[x.i] ? `<br>🇲🇽 ${esc(s.tr[x.i])}` : ''}</span></div>
        <div class="row">${sayBtn(x.e.k, '▶')}<button class="say" data-addcard="${esc(x.e.k)}">${(S.customCards || []).some(c => c.en === x.e.k) ? '✓' : '+🧠'}</button></div></div>`).join('')}</div>`).join('') + '<p class="small muted">+🧠 = agregar a tus tarjetas de Memoria.</p>'
      : '<div class="card"><p class="mb0">Esta letra no tiene phrasal verbs, slang ni frases hechas que yo conozca: casi todo se entiende palabra por palabra. Toca los versos en la pestaña Letra para ver su traducción.</p></div>';
  } else if (SG.tab === 'quiz') {
    if (!SG.quiz) {
      const cand = lines.map((l, i) => ({ l, i })).filter(x => x.l.split(/\s+/).length >= 4);
      SG.quiz = { items: shuffle(cand).slice(0, 8).sort((a, b) => a.i - b.i).map(x => {
        const hits = findExpr(x.l), words = x.l.split(/\s+/);
        let target = hits.length ? hits[0].txt.split(/\s+/)[0] : words.slice().sort((a, b) => b.replace(/[^a-z]/gi, '').length - a.replace(/[^a-z]/gi, '').length)[0];
        return { i: x.i, line: x.l, target: target.replace(/^[^a-z'’]+|[^a-z'’]+$/gi, '') };
      }), k: 0, ok: 0, answered: false };
    }
    const Q = SG.quiz;
    if (!Q.items.length) body = '<div class="card"><p class="mb0">La letra es muy corta para el ejercicio.</p></div>';
    else if (Q.k >= Q.items.length) body = `<div class="card center"><h2>¡Ejercicio terminado!</h2><div class="big">${Q.ok}/${Q.items.length}</div><button class="btn" id="qagain">Otra vez</button></div>`;
    else {
      const it = Q.items[Q.k];
      const blank = esc(it.line).replace(esc(it.target), '<b>_____</b>');
      body = `<div class="card"><p class="small muted">Verso ${Q.k + 1} de ${Q.items.length}. Escucha y escribe la palabra que falta.</p>
        <p style="font-size:1.15rem">${blank}</p>${s.tr[it.i] ? `<p class="small muted">🇲🇽 ${esc(s.tr[it.i])}</p>` : ''}
        <div class="row wrap">${effMark(it.i) != null && canSync ? '<button class="say" id="qplay">▶ Escuchar en la canción</button>' : ''}${sayBtn(it.line, '🐢 Escuchar a Jake', 'lento')}</div>
        <div class="row mt"><input type="text" id="qin" placeholder="Palabra que falta" autocomplete="off"><button class="btn sm" id="qok">Revisar</button></div><div id="qfb"></div></div>`;
    }
  }
  document.getElementById('song-body').innerHTML = body;
  bindSongBody(s, lines);
  bindVerse(s, lines);
};

/* ---------- Explicación de un verso ---------- */
const MEANING_TYPES = ['phrasal', 'modismo', 'slang', 'reduccion', 'groseria', 'texto'];
function verseParts(line) {
  // Separa el verso en "piezas": frases especiales (phrasal verbs, modismos...) y palabras sueltas
  const hits = findExpr(line).filter(h => MEANING_TYPES.includes(h.e.type));
  const parts = []; let pos = 0;
  hits.forEach(h => {
    line.slice(pos, h.start).split(/\s+/).forEach(w => { const c = w.replace(/^[^a-z0-9'’]+|[^a-z0-9'’]+$/gi, ''); if (c) parts.push({ w: c }); });
    parts.push({ w: line.slice(h.start, h.end), hit: h }); pos = h.end;
  });
  line.slice(pos).split(/\s+/).forEach(w => { const c = w.replace(/^[^a-z0-9'’]+|[^a-z0-9'’]+$/gi, ''); if (c) parts.push({ w: c }); });
  return { hits, parts };
}
const TYPE_EXPLAIN = {
  phrasal: (h) => `<b>"${esc(h.txt)}"</b> es un <b>phrasal verb</b> (<i>${esc(h.e.k)}</i>): las palabras juntas significan <b>${esc(h.e.es)}</b>. Si lo tradujeras palabra por palabra no tendría sentido.`,
  modismo: (h) => `<b>"${esc(h.txt)}"</b> es una <b>frase hecha</b>: significa <b>${esc(h.e.es)}</b>. Se entiende como bloque, no palabra por palabra.`,
  slang: (h) => `<b>"${esc(h.txt)}"</b> es <b>slang</b> (forma de hablar de la calle): ${esc(h.e.es)}.`,
  reduccion: (h) => `<b>"${esc(h.txt)}"</b> es una <b>forma cortada al cantar o hablar rápido</b>: ${esc(h.e.es)}.`,
  groseria: (h) => `<b>"${esc(h.txt)}"</b> es una <b>grosería</b>: ${esc(h.e.es)}`,
  texto: (h) => `<b>"${esc(h.txt)}"</b> es una <b>abreviación</b>: ${esc(h.e.es)}.`
};
function versePanel(line, i) {
  const s = SG.song, { hits, parts } = verseParts(line);
  return `<div class="verse-panel">
    <p class="mb0"><b>🇲🇽 Significa:</b> ${s.tr[i] ? esc(s.tr[i]) : '<span class="muted">traduciendo…</span>'}</p>
    <div class="tip mt small">${hits.length
      ? `<b>🧩 Cómo se entiende este verso:</b><br>${hits.map(h => (TYPE_EXPLAIN[h.e.type] || TYPE_EXPLAIN.slang)(h)).join('<br>')}<br><span class="muted">Las demás palabras conservan su significado normal.</span>`
      : `<b>🧩 Cómo se entiende este verso:</b><br>Aquí <b>no hay phrasal verbs ni frases hechas</b>: cada palabra conserva su significado normal, por eso la traducción es casi literal. Toca cada palabra para ver qué hace en la oración.`}</div>
    <p class="small mt mb0"><b>Toca una pieza para ver qué significa:</b> <span class="muted">(las amarillas van juntas)</span></p>
    <div class="row wrap mt">${parts.map((p, k) => `<button class="say ${p.hit ? 'piece-phr' : ''}" data-piece="${k}">${esc(p.w)}</button>`).join('')}</div>
    <div id="wbox" class="mt"></div>
    <div class="row wrap mt">${effMark(i) != null && SG.P ? `<button class="say" data-replay="${i}">🔁 Repetir este verso</button>` : ''}${sayBtn(line, '🐢 Jake lo dice lento', 'lento')}<button class="say" data-deepsent="${esc(line)}" data-es="${esc(s.tr[i] || '')}">🔍 Explicación palabra por palabra</button></div>
  </div>`;
}
function bindVerse(s, lines) {
  const body = document.getElementById('song-body');
  body.querySelectorAll('[data-line]').forEach(d => d.onclick = e => {
    if (e.target.closest('.say,a,button,.verse-panel')) return;
    const i = +d.dataset.line; SG.open = SG.open === i ? -1 : i; SG.cur = -2; renderSongBody();
    if (SG.open === i) playLine(i);
  });
  body.querySelectorAll('[data-replay]').forEach(b => b.onclick = () => playLine(+b.dataset.replay));
  body.querySelectorAll('[data-piece]').forEach(b => b.onclick = async () => {
    const line = lines[SG.open], { parts } = verseParts(line), p = parts[+b.dataset.piece], box = document.getElementById('wbox');
    speak(p.hit ? p.hit.e.k : p.w, 'normal');
    if (p.hit) {
      const words = p.hit.txt.split(/\s+/);
      box.innerHTML = `<div class="card" style="margin:0"><b>${esc(p.hit.txt)}</b> <span class="tag amber">${TYPE_NAMES[p.hit.e.type]}</span><p class="small mt mb0">${(TYPE_EXPLAIN[p.hit.e.type] || TYPE_EXPLAIN.slang)(p.hit)}</p>
        ${p.hit.e.type === 'phrasal' && words.length > 1 ? `<p class="small muted mt mb0">Ojo: por separado, ${words.map(w => { const wi = typeof wordInfo === 'function' ? wordInfo(w) : null; return `<b>${esc(w)}</b>${wi && wi.es ? ' = ' + esc(wi.es.split('/')[0].trim()) : ''}`; }).join(', ')}… pero juntas significan otra cosa.</p>` : ''}</div>`;
      return;
    }
    const wi = typeof wordInfo === 'function' ? wordInfo(p.w) : null;
    box.innerHTML = `<div class="card" style="margin:0"><b>${esc(p.w)}</b> <span id="wtr">${wi && wi.es ? '= ' + esc(wi.es) : '<span class="muted">traduciendo…</span>'}</span>${wi && wi.rol ? `<p class="small mt mb0">${wi.rol}</p>` : ''}</div>`;
    if (!(wi && wi.es)) { try { const t = await translate(p.w); const el = document.getElementById('wtr'); if (el) el.textContent = '= ' + t; } catch (e) { const el = document.getElementById('wtr'); if (el) el.textContent = '(sin internet)'; } }
  });
}
(function () {
  const st = document.createElement('style');
  st.textContent = `.tr-small{font-size:.8rem;color:var(--muted);line-height:1.3;margin-top:2px}
.lyric.now{background:var(--blue-soft);border-color:var(--blue)}.lyric.now .ly-en{font-weight:700}
.lyric.open{border-color:var(--amber);background:#fffdf7}
.verse-panel{margin-top:10px;padding-top:10px;border-top:1px dashed var(--line);cursor:default}
.say.piece-phr{background:var(--amber-soft);color:#7a4a00;border:1px solid var(--amber)}
`;
  document.head.appendChild(st);
})();

// Partículas de los phrasal verbs: su significado por separado
Object.assign(FUNC, {
  up: ['arriba', 'Partícula. En phrasal verbs suele dar idea de completar o subir (give up, wake up).'],
  down: ['abajo', 'Partícula. En phrasal verbs suele dar idea de bajar, reducir o derrumbarse (calm down, break down).'],
  out: ['afuera', 'Partícula. En phrasal verbs suele dar idea de salir, terminar o descubrir (find out, run out).'],
  off: ['fuera / apagado', 'Partícula. En phrasal verbs suele dar idea de separar o apagar (take off, turn off).'],
  away: ['lejos', 'Partícula: alejarse (run away, go away).'], back: ['de regreso / atrás', 'Partícula: regresar (come back).'],
  over: ['encima / terminado / otra vez', 'Partícula: superar o terminar (get over, it\'s over).'], around: ['alrededor / por ahí', 'Partícula (turn around).'],
  through: ['a través de / hasta el final', 'Partícula: atravesar o superar (get through).'], into: ['hacia dentro de', 'Preposición de movimiento hacia adentro.'],
  apart: ['separado / en pedazos', 'Partícula: deshacerse (fall apart).'], along: ['a lo largo / junto', 'Partícula (get along = llevarse bien).']
});
TYPE_EXPLAIN.phrasal = h => `<b>"${esc(h.txt)}"</b> es un <b>phrasal verb</b>${h.txt.toLowerCase() !== h.e.k ? ` (<i>${esc(h.e.k)}</i>)` : ''}: las palabras juntas significan <b>${esc(h.e.es)}</b>. Si lo tradujeras palabra por palabra no tendría sentido.`;
