// 🎮 Diversión y recompensas: sonidos, confeti, combos, rangos, meta diaria, misiones, cofre, logros y Reto relámpago.
// Se carga al final (usa S, save, go, SCREENS, addXP, mcHandler, updSkill...).

/* =========================================================
   Efectos: sonido, vibración, confeti y +XP flotante
   ========================================================= */
let actx = null;
function tone(freq, dur = 0.12, type = 'sine', vol = 0.18, when = 0) {
  if (S.settings.sound === false) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const t = actx.currentTime + when, o = actx.createOscillator(), g = actx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + dur + 0.02);
  } catch (e) {}
}
const SFX = {
  ok: (combo = 1) => { const b = 523 * Math.pow(1.06, Math.min(combo, 12)); tone(b, 0.1, 'triangle'); tone(b * 1.5, 0.16, 'triangle', 0.16, 0.08); },
  bad: () => { tone(180, 0.18, 'sawtooth', 0.08); tone(140, 0.22, 'sawtooth', 0.07, 0.1); },
  coin: () => { tone(988, 0.08, 'square', 0.08); tone(1319, 0.2, 'square', 0.08, 0.07); },
  fanfare: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, i === 3 ? 0.45 : 0.14, 'triangle', 0.18, i * 0.11)),
  tick: () => tone(1200, 0.03, 'square', 0.04)
};
const buzz = p => { if (S.settings.sound !== false && navigator.vibrate) navigator.vibrate(p); };
const calm = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
function confetti(n = 90) {
  if (calm()) return;
  const c = document.createElement('canvas'); c.className = 'confetti'; document.body.appendChild(c);
  const W = c.width = innerWidth, H = c.height = innerHeight, x = c.getContext('2d');
  const cols = ['#c8323c', '#1d3c8f', '#f2b705', '#1f8a4c', '#ff7ab6', '#5ad1ff'];
  const ps = Array.from({ length: n }, () => ({ x: W / 2 + (Math.random() - .5) * 80, y: H * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 4, c: cols[Math.random() * cols.length | 0], a: Math.random() * 6, s: (Math.random() - .5) * .3 }));
  let f = 0;
  (function loop() {
    x.clearRect(0, 0, W, H);
    ps.forEach(p => { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.s; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); x.restore(); });
    if (++f < 110) requestAnimationFrame(loop); else c.remove();
  })();
}
function floatText(txt, cls = '') {
  const d = document.createElement('div'); d.className = 'float-xp ' + cls; d.textContent = txt; document.body.appendChild(d);
  setTimeout(() => d.remove(), 1300);
}
function bigModal(icon, title, text, btn = '¡Vamos!') {
  const d = document.createElement('div'); d.className = 'celebrate';
  d.innerHTML = `<div class="cel-box"><div class="cel-icon">${icon}</div><h2>${title}</h2><p class="muted">${text}</p><button class="btn block red">${btn}</button></div>`;
  document.body.appendChild(d); d.querySelector('button').onclick = () => d.remove();
  SFX.fanfare(); buzz([40, 60, 40, 60, 120]); confetti(140);
}
(function () {
  const st = document.createElement('style');
  st.textContent = `.confetti{position:fixed;inset:0;pointer-events:none;z-index:80}
.float-xp{position:fixed;left:50%;top:38%;transform:translateX(-50%);font:800 1.6rem system-ui,sans-serif;color:#f2b705;text-shadow:0 2px 0 #7a5a00,0 4px 12px rgba(0,0,0,.25);pointer-events:none;z-index:85;animation:floatup 1.2s ease-out forwards}
.float-xp.combo{color:#ff5a3c;text-shadow:0 2px 0 #7a1d10,0 4px 12px rgba(0,0,0,.25);top:30%}
.float-xp.bad{color:var(--red);font-size:1.2rem}
@keyframes floatup{0%{opacity:0;transform:translate(-50%,10px) scale(.6)}20%{opacity:1;transform:translate(-50%,0) scale(1.15)}100%{opacity:0;transform:translate(-50%,-70px) scale(1)}}
.opt.ok{animation:pop .35s}.opt.bad{animation:shake .35s}
@keyframes pop{50%{transform:scale(1.04)}}@keyframes shake{20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
.celebrate{position:fixed;inset:0;background:rgba(20,33,61,.6);z-index:90;display:flex;align-items:center;justify-content:center;padding:20px}
.cel-box{background:#fff;border-radius:22px;padding:26px 22px;max-width:380px;width:100%;text-align:center;animation:celin .45s cubic-bezier(.2,1.6,.4,1)}
.cel-icon{font-size:4rem;line-height:1;margin-bottom:8px}@keyframes celin{0%{transform:scale(.5);opacity:0}100%{transform:scale(1);opacity:1}}
.combo-badge{position:fixed;top:12px;right:14px;z-index:70;background:linear-gradient(135deg,#ff7a18,#c8323c);color:#fff;font:800 1rem system-ui,sans-serif;padding:7px 12px;border-radius:999px;box-shadow:0 4px 14px rgba(200,50,60,.4);animation:pop .3s}
.ring{position:relative;width:96px;height:96px;flex:none}.ring svg{transform:rotate(-90deg)}.ring b{position:absolute;inset:0;display:grid;place-items:center;font-size:1.05rem;color:#fff;text-align:center;line-height:1.1}
.mission{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--line)}.mission:last-child{border-bottom:0}
.mission.done .grow{text-decoration:line-through;color:var(--muted)}
.chest{font-size:2.4rem;border:0;background:none;cursor:pointer;animation:wiggle 1.6s infinite}@keyframes wiggle{0%,80%,100%{transform:rotate(0)}85%{transform:rotate(-12deg)}90%{transform:rotate(12deg)}95%{transform:rotate(-6deg)}}
.badge-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.badge{text-align:center;padding:12px 6px;border-radius:14px;background:#fff;border:2px solid var(--line)}
.badge .bi{font-size:2rem}.badge.off{filter:grayscale(1);opacity:.45}.badge b{display:block;font-size:.78rem;margin-top:4px}
.blitz-time{height:12px;border-radius:99px;background:#ece8de;overflow:hidden}.blitz-time i{display:block;height:100%;background:linear-gradient(90deg,#1f8a4c,#f2b705,#c8323c);transition:width .25s linear}`;
  document.head.appendChild(st);
})();

/* =========================================================
   Rangos, meta diaria, combos y misiones
   ========================================================= */
const RANKS = [[0, 'Newbie', '🥚'], [50, 'Rookie', '🐣'], [150, 'Learner', '📘'], [300, 'Talker', '💬'], [600, 'Street Smart', '😎'], [1000, 'Fluent-ish', '🔥'], [1600, 'Almost Native', '🦅'], [2500, 'Native Speaker', '🇺🇸'], [4000, 'Legend', '👑']];
function rankOf(xp) { let i = 0; RANKS.forEach((r, k) => { if (xp >= r[0]) i = k; }); return i; }
function dailyGoal() { const t = S.profile && S.profile.time; return [20, 30, 50, 80][t] || 30; }
const MISSION_POOL = [
  { id: 'lesson', t: 'Termina 1 lección', goal: 1, icon: '📚' }, { id: 'correct', t: 'Acierta 15 respuestas', goal: 15, icon: '✅' },
  { id: 'combo', t: 'Haz un combo de 5 seguidas', goal: 5, icon: '🔥' }, { id: 'cards', t: 'Repasa 10 tarjetas de Memoria', goal: 10, icon: '🧠' },
  { id: 'fast', t: 'Completa un Oído nativo', goal: 1, icon: '⚡' }, { id: 'conv', t: 'Termina 1 conversación', goal: 1, icon: '💬' },
  { id: 'speak', t: 'Practica hablar 5 veces', goal: 5, icon: '🎤' }, { id: 'blitz', t: 'Juega el Reto relámpago', goal: 1, icon: '⏱️' }
];
function daily() {
  const t = today();
  if (!S.daily || S.daily.date !== t) {
    let seed = [...t].reduce((a, ch) => a * 31 + ch.charCodeAt(0), 7) >>> 0;
    const pool = MISSION_POOL.slice(), pick = [];
    while (pick.length < 3) { seed = (seed * 1103515245 + 12345) >>> 0; pick.push(pool.splice(seed % pool.length, 1)[0].id); }
    S.daily = { date: t, xp: 0, c: {}, missions: pick, claimed: {}, chest: false, goalDone: false };
  }
  return S.daily;
}
let rewarding = false;
function bump(key, n = 1, asMax = false) {
  const d = daily();
  d.c[key] = asMax ? Math.max(d.c[key] || 0, n) : (d.c[key] || 0) + n;
  d.missions.forEach(id => {
    const m = MISSION_POOL.find(x => x.id === id);
    if (!d.claimed[id] && (d.c[id] || 0) >= m.goal) {
      d.claimed[id] = true; save();
      setTimeout(() => { toast(`🎯 ¡Misión cumplida! ${m.icon} ${m.t} · +15 XP`); SFX.coin(); confetti(60); rewarding = true; addXP(15); rewarding = false; }, 500);
      if (d.missions.every(x => d.claimed[x])) setTimeout(() => bigModal('🏅', '¡Todas las misiones del día!', 'Completaste las 3 misiones de hoy. +30 XP extra. Mañana hay nuevas.', '¡Soy imparable!') || (rewarding = true, addXP(30), rewarding = false), 1400);
    }
  });
  save(); checkBadges();
}

// +XP con efectos, subida de rango y meta diaria
const _origAddXP = addXP;
addXP = function (n) {
  const before = rankOf(S.xp);
  _origAddXP(n);
  const d = daily(); d.xp += n;
  if (n > 0) floatText('+' + n + ' XP');
  const after = rankOf(S.xp);
  if (after > before) setTimeout(() => bigModal(RANKS[after][2], '¡Subiste de rango!', `Ahora eres <b>${RANKS[after][1]}</b>. Sigue así para llegar a ${RANKS[after + 1] ? RANKS[after + 1][2] + ' ' + RANKS[after + 1][1] : 'la cima'}.`), 700);
  if (!d.goalDone && d.xp >= dailyGoal()) { d.goalDone = true; setTimeout(() => bigModal('🎯', '¡Meta del día cumplida!', `Ganaste ${d.xp} XP hoy. Tu racha va en 🔥 ${S.streak.count} día(s). ¡No la rompas mañana!`), 900); }
  save(); checkBadges();
};

// Combos en todas las preguntas de opción múltiple
let combo = 0;
function showCombo() {
  let b = document.querySelector('.combo-badge');
  if (combo < 2) { if (b) b.remove(); return; }
  if (!b) { b = document.createElement('div'); b.className = 'combo-badge'; document.body.appendChild(b); }
  b.textContent = `🔥 x${combo}`; b.style.animation = 'none'; b.offsetWidth; b.style.animation = '';
}
const _origMc = mcHandler;
mcHandler = function (answer, cb) {
  _origMc(answer, (ok, k) => {
    if (ok) {
      combo++; S.bestCombo = Math.max(S.bestCombo || 0, combo);
      SFX.ok(combo); buzz(25);
      const bonus = combo >= 10 ? 5 : combo >= 5 ? 3 : combo >= 3 ? 2 : 1;
      if (combo >= 3) setTimeout(() => floatText(['', '', '', '¡Combo!', '¡En racha!', '🔥 ¡ON FIRE!'][Math.min(combo, 5)] || '🔥 ¡ON FIRE!', 'combo'), 250);
      if (combo === 5 || combo === 10) confetti(50);
      addXP(bonus); bump('correct'); bump('combo', combo, true);
    } else {
      if (combo >= 3) floatText(`Combo perdido (x${combo})`, 'bad');
      combo = 0; SFX.bad(); buzz([60, 40, 60]);
    }
    showCombo();
    cb(ok, k);
  });
};
const _origGoFun = go;
go = function (name, arg) { if (!['lesson', 'reviewRun', 'blitz'].includes(name)) { combo = 0; showCombo(); } _origGoFun(name, arg); };

// Contadores para misiones
const _origUpd = updSkill;
updSkill = function (skill, correct, w) { _origUpd(skill, correct, w); if (skill === 'speaking') bump('speak'); };
const _origLesson = SCREENS.lesson;
SCREENS.lesson = () => {
  const finishing = L && L.steps[L.step] === 'summary' && !L._fun;
  _origLesson();
  if (finishing) {
    L._fun = true; bump('lesson');
    const sc = pct(L.ok, L.total);
    if (sc === 100) { S.perfect = (S.perfect || 0) + 1; setTimeout(() => bigModal('💯', '¡Lección perfecta!', 'No fallaste ni una. +10 XP de bonus.', '¡Otra!'), 600); setTimeout(() => { addXP(10); }, 700); }
    else { confetti(100); SFX.fanfare(); }
  }
};
const _origCardsRun = SCREENS.cardsRun; let lastCardI = -1;
SCREENS.cardsRun = () => { if (MC && MC.i > lastCardI && lastCardI >= 0) bump('cards'); lastCardI = MC ? MC.i : -1; _origCardsRun(); if (MC && MC.i >= MC.items.length) lastCardI = -1; };
const _origFastRun = SCREENS.fastRun;
SCREENS.fastRun = () => { _origFastRun(); if (F && F.i >= F.items.length && !F._fun) { F._fun = true; bump('fast'); confetti(80); SFX.fanfare(); } };
const _origRenderConv2 = renderConv;
renderConv = function (s) { _origRenderConv2(s); if (C && C.i >= C.c.turns.length && !C._fun) { C._fun = true; bump('conv'); confetti(80); SFX.fanfare(); } };

/* =========================================================
   Logros
   ========================================================= */
const BADGES = [
  { id: 'first', i: '🎓', t: 'Primera lección', d: 'Termina tu primera lección', ok: () => Object.keys(S.done).length >= 1 },
  { id: 'ten', i: '📚', t: 'Estudioso', d: 'Termina 10 lecciones', ok: () => Object.keys(S.done).length >= 10 },
  { id: 'twentyfive', i: '🧠', t: 'Cerebrito', d: 'Termina 25 lecciones', ok: () => Object.keys(S.done).length >= 25 },
  { id: 'course', i: '📘', t: 'Libro 1 completo', d: 'Termina las 14 lecciones de Mi curso', ok: () => typeof COURSE !== 'undefined' && COURSE.every(l => l.id in S.done) },
  { id: 'perfect', i: '💯', t: 'Perfección', d: 'Haz una lección sin fallar', ok: () => (S.perfect || 0) >= 1 },
  { id: 'combo10', i: '🔥', t: 'On fire', d: 'Combo de 10 respuestas seguidas', ok: () => (S.bestCombo || 0) >= 10 },
  { id: 'streak3', i: '📅', t: 'Constante', d: 'Racha de 3 días', ok: () => S.streak.count >= 3 },
  { id: 'streak7', i: '🗓️', t: 'Una semana', d: 'Racha de 7 días', ok: () => S.streak.count >= 7 },
  { id: 'streak30', i: '🏆', t: 'Imparable', d: 'Racha de 30 días', ok: () => S.streak.count >= 30 },
  { id: 'xp500', i: '⭐', t: '500 XP', d: 'Junta 500 XP', ok: () => S.xp >= 500 },
  { id: 'xp2500', i: '🌟', t: 'Native Speaker', d: 'Junta 2,500 XP', ok: () => S.xp >= 2500 },
  { id: 'blitz20', i: '⏱️', t: 'Relámpago', d: '20 puntos en el Reto relámpago', ok: () => (S.blitzBest || 0) >= 20 },
  { id: 'cards', i: '🃏', t: 'Memoria de elefante', d: 'Memoriza 30 tarjetas', ok: () => Object.values(S.cards || {}).filter(c => c.box >= 4).length >= 30 },
  { id: 'talker', i: '💬', t: 'Platicador', d: 'Termina todas las conversaciones', ok: () => CONVERSATIONS.every(c => c.id in S.convs) },
  { id: 'night', i: '🦉', t: 'Búho', d: 'Practica después de las 11 pm', ok: () => new Date().getHours() >= 23 },
  { id: 'early', i: '🌅', t: 'Madrugador', d: 'Practica antes de las 7 am', ok: () => new Date().getHours() < 7 && S.xp > 0 }
];
function checkBadges() {
  if (!S.level) return;
  S.badges = S.badges || {};
  const fresh = BADGES.filter(b => !S.badges[b.id] && b.ok());
  if (!fresh.length) return;
  fresh.forEach(b => { S.badges[b.id] = Date.now(); }); save();
  const b = fresh[0];
  setTimeout(() => bigModal(b.i, '¡Logro desbloqueado!', `<b>${b.t}</b><br>${b.d}`, '¡Genial!'), 1200);
}
SCREENS.badges = () => {
  S.badges = S.badges || {};
  const got = BADGES.filter(b => S.badges[b.id]).length;
  $app.innerHTML = `${topBar(null, 'home')}<h1>🏆 Logros</h1><p class="muted">${got} de ${BADGES.length} desbloqueados</p>
    <div class="bar"><i style="width:${pct(got, BADGES.length)}%"></i></div>
    <div class="badge-grid mt">${BADGES.map(b => `<div class="badge ${S.badges[b.id] ? '' : 'off'}"><div class="bi">${b.i}</div><b>${esc(b.t)}</b><span class="small muted">${esc(b.d)}</span></div>`).join('')}</div>
    <div class="card mt"><h3>Rangos</h3>${RANKS.map((r, k) => `<div class="list-item"><span>${r[2]} <b>${r[1]}</b></span><span class="small ${rankOf(S.xp) >= k ? '' : 'muted'}">${r[0]} XP ${rankOf(S.xp) === k ? '← tú' : ''}</span></div>`).join('')}</div>`;
};

/* =========================================================
   ⚡ Reto relámpago: 60 segundos, todas las que puedas
   ========================================================= */
let BZ = null;
function blitzQuestion() {
  const my = LEVELS.indexOf(S.level || 'A1');
  const ls = LESSONS.filter(l => LEVELS.indexOf(l.level) <= my + 1).concat(typeof COURSE !== 'undefined' ? COURSE : []);
  const l = ls[Math.random() * ls.length | 0];
  if (Math.random() < 0.5 && l.quiz && l.quiz.length) { const q = l.quiz[Math.random() * l.quiz.length | 0]; return { q: q.q, options: q.options, a: q.a }; }
  const v = l.vocab[Math.random() * l.vocab.length | 0];
  const others = shuffle(ls.flatMap(x => x.vocab).filter(x => x[1] !== v[1])).slice(0, 2).map(x => x[1]);
  return { q: `¿Qué significa "${v[0]}"?`, options: [v[1], ...others], a: 0 };
}
SCREENS.blitz = () => {
  if (!BZ || BZ.over) {
    $app.innerHTML = `${topBar(null, 'home')}<div class="card hero center"><div style="font-size:3.4rem">⚡</div><h1 style="color:#fff">Reto relámpago</h1>
      <p class="muted">60 segundos. Contesta todas las que puedas. Cada acierto suma tiempo (+2 s) y los combos dan más puntos.</p>
      <p style="color:#fff">🏆 Tu récord: <b>${S.blitzBest || 0}</b> puntos</p></div>
      ${BZ && BZ.over ? `<div class="card center"><h2>${BZ.score > (BZ.prevBest || 0) ? '🎉 ¡NUEVO RÉCORD!' : 'Se acabó el tiempo'}</h2><div class="big">${BZ.score}</div><p class="muted">puntos · ${BZ.right} aciertos · combo máximo x${BZ.maxCombo}</p></div>` : ''}
      <button class="btn block red" id="bzgo" style="min-height:62px;font-size:1.2rem">${BZ && BZ.over ? '🔁 Otra vez' : '▶ ¡Empezar!'}</button>`;
    document.getElementById('bzgo').onclick = () => { BZ = { t: 60, score: 0, right: 0, combo: 0, maxCombo: 0, prevBest: S.blitzBest || 0, q: blitzQuestion() }; startBlitzTimer(); SCREENS.blitz(); };
    return;
  }
  const q = BZ.q, order = shuffle(q.options.map((o, k) => k));
  $app.innerHTML = `<div class="row" style="margin-bottom:10px"><b style="font-size:1.4rem">⚡ ${BZ.score}</b><span class="grow"></span>${BZ.combo >= 2 ? `<span class="tag red">🔥 x${BZ.combo}</span>` : ''}<b id="bzt">${Math.ceil(BZ.t)}s</b></div>
    <div class="blitz-time"><i id="bzbar" style="width:${Math.min(100, BZ.t / 60 * 100)}%"></i></div>
    <div class="card mt"><h2>${esc(q.q)}</h2>${order.map(k => `<button class="opt" data-bz="${k}">${esc(q.options[k])}</button>`).join('')}</div>`;
  $app.querySelectorAll('[data-bz]').forEach(b => b.onclick = () => {
    if (BZ.over) return;
    const ok = +b.dataset.bz === q.a;
    if (ok) { BZ.combo++; BZ.maxCombo = Math.max(BZ.maxCombo, BZ.combo); BZ.right++; BZ.score += BZ.combo >= 5 ? 3 : BZ.combo >= 3 ? 2 : 1; BZ.t = Math.min(60, BZ.t + 2); SFX.ok(BZ.combo); buzz(20); b.classList.add('ok'); }
    else { BZ.combo = 0; BZ.t -= 3; SFX.bad(); buzz([50, 30, 50]); b.classList.add('bad'); $app.querySelectorAll('[data-bz]').forEach(o => { if (+o.dataset.bz === q.a) o.classList.add('ok'); }); }
    setTimeout(() => { if (BZ && !BZ.over) { BZ.q = blitzQuestion(); SCREENS.blitz(); } }, ok ? 220 : 700);
  });
};
function startBlitzTimer() {
  clearInterval(window._bzTimer);
  window._bzTimer = setInterval(() => {
    if (!BZ || screen !== 'blitz') { clearInterval(window._bzTimer); if (BZ) BZ.over = true; return; }
    BZ.t -= 0.25;
    const tEl = document.getElementById('bzt'), bar = document.getElementById('bzbar');
    if (tEl) tEl.textContent = Math.max(0, Math.ceil(BZ.t)) + 's';
    if (bar) bar.style.width = Math.max(0, BZ.t / 60 * 100) + '%';
    if (BZ.t <= 5 && BZ.t > 0 && Math.abs(BZ.t - Math.round(BZ.t)) < 0.01) SFX.tick();
    if (BZ.t <= 0) {
      clearInterval(window._bzTimer); BZ.over = true;
      const record = BZ.score > (S.blitzBest || 0);
      S.blitzBest = Math.max(S.blitzBest || 0, BZ.score); save();
      SCREENS.blitz(); bump('blitz');
      if (BZ.score > 0) addXP(BZ.score);
      if (record && BZ.score > 0) { confetti(150); SFX.fanfare(); }
    }
  }, 250);
}

/* =========================================================
   Inicio: rango, meta diaria, cofre, misiones y juego
   ========================================================= */
const _origHome = SCREENS.home;
SCREENS.home = () => {
  _origHome();
  if (screen !== 'home' || !S.level) return;
  const d = daily(), goal = dailyGoal(), r = rankOf(S.xp), next = RANKS[r + 1];
  const into = next ? pct(S.xp - RANKS[r][0], next[0] - RANKS[r][0]) : 100;
  const p = Math.min(1, d.xp / goal), C2 = 2 * Math.PI * 40;
  const hero = $app.querySelector('.card.hero');
  const block = `<div class="card hero"><div class="row">
      <div class="ring"><svg width="96" height="96"><circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,.2)" stroke-width="10" fill="none"/><circle cx="48" cy="48" r="40" stroke="${p >= 1 ? '#4ade80' : '#f2b705'}" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="${C2}" stroke-dashoffset="${C2 * (1 - p)}"/></svg><b>${p >= 1 ? '✅' : d.xp + '/' + goal}<br><span style="font-size:.65rem;font-weight:600">XP hoy</span></b></div>
      <div class="grow"><div style="font-size:1.5rem">${RANKS[r][2]} <b style="color:#fff">${RANKS[r][1]}</b></div>
        <div class="bar mt" style="background:rgba(255,255,255,.2)"><i style="width:${into}%;background:#f2b705"></i></div>
        <p class="small muted mb0 mt">${next ? `${next[0] - S.xp} XP para ${next[2]} ${next[1]}` : '¡Rango máximo!'} · 🔥 ${S.streak.count} día(s)</p></div>
      ${d.chest ? '' : '<button class="chest" id="chest" title="Cofre diario">🎁</button>'}</div></div>`;
  if (hero) hero.insertAdjacentHTML('afterend', block);
  const missions = `<div class="card"><div class="row"><h3 class="grow mb0">🎯 Misiones de hoy</h3><span class="small muted">+15 XP c/u</span></div>
    ${d.missions.map(id => { const m = MISSION_POOL.find(x => x.id === id), v = Math.min(m.goal, d.c[id] || 0); return `<div class="mission ${d.claimed[id] ? 'done' : ''}"><span style="font-size:1.4rem">${d.claimed[id] ? '✅' : m.icon}</span><div class="grow"><span class="small">${m.t}</span><div class="bar" style="height:7px"><i style="width:${pct(v, m.goal)}%;background:var(--green)"></i></div></div><span class="small">${v}/${m.goal}</span></div>`; }).join('')}</div>
    <div class="grid2"><button class="card btn red" style="flex-direction:column;height:auto;padding:16px" data-go="blitz"><span style="font-size:1.8rem">⚡</span>Reto relámpago<span class="small" style="opacity:.85">Récord: ${S.blitzBest || 0}</span></button>
    <button class="card btn ghost" style="flex-direction:column;height:auto;padding:16px" data-go="badges"><span style="font-size:1.8rem">🏆</span>Logros<span class="small">${Object.keys(S.badges || {}).length}/${BADGES.length}</span></button></div>`;
  const anchor = $app.querySelectorAll('.card.hero')[1];
  if (anchor) anchor.insertAdjacentHTML('afterend', missions);
  const ch = document.getElementById('chest');
  if (ch) ch.onclick = () => {
    const prize = [5, 10, 10, 15, 15, 20, 25, 50][Math.random() * 8 | 0];
    d.chest = true; save();
    bigModal(prize >= 25 ? '💎' : '🪙', `¡Cofre abierto! +${prize} XP`, prize >= 25 ? '¡Te tocó un premio grande! Regresa mañana por otro cofre.' : 'Regresa mañana por otro cofre. 🎁', '¡Gracias!');
    addXP(prize); setTimeout(() => SCREENS.home(), 50);
  };
};

// Ajustes: activar o apagar sonidos y vibración
const _origSettings2 = SCREENS.settings;
SCREENS.settings = () => {
  _origSettings2();
  $app.querySelector('h1').insertAdjacentHTML('afterend', `<div class="card"><h3>🔊 Efectos</h3><label class="row small"><input type="checkbox" id="sfx" ${S.settings.sound === false ? '' : 'checked'}> Sonidos y vibración al acertar, combos y premios</label></div>`);
  document.getElementById('sfx').onchange = e => { S.settings.sound = e.target.checked; save(); if (e.target.checked) SFX.coin(); };
};
// Menú Más: acceso a Logros y Reto
const _origMore3 = SCREENS.more;
SCREENS.more = () => {
  _origMore3();
  const h = $app.querySelector('h1');
  h.insertAdjacentHTML('afterend', `<div class="grid2"><button class="card btn red" style="flex-direction:column;height:auto;padding:14px" data-go="blitz"><span style="font-size:1.6rem">⚡</span>Reto relámpago</button><button class="card btn ghost" style="flex-direction:column;height:auto;padding:14px" data-go="badges"><span style="font-size:1.6rem">🏆</span>Logros</button></div>`);
};
