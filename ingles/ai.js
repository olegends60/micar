// Conversación libre con IA (Claude) + ayuda de apóstrofes.
// La clave de API la pone cada usuario en Ajustes y se guarda solo en su dispositivo.
// Se carga DESPUÉS del script principal (usa SCREENS, S, speak, listen, etc.).

/* =========================================================
   Apóstrofes: barra rápida y corrección automática
   ========================================================= */
const APO_CHIPS = ["'", "I'm", "don't", "can't", "it's", "that's", "what's", "you're", "I'll", "didn't", "won't", "I've", "let's", "y'all"];
// Solo palabras sin ambigüedad (no "its", "ill", "id", "were", "well", "hell"...)
const APO_FIX = {
  im: "I'm", ive: "I've", dont: "don't", doesnt: "doesn't", didnt: "didn't", cant: "can't", wont: "won't", isnt: "isn't", arent: "aren't",
  wasnt: "wasn't", werent: "weren't", havent: "haven't", hasnt: "hasn't", hadnt: "hadn't", couldnt: "couldn't", shouldnt: "shouldn't", wouldnt: "wouldn't",
  mustnt: "mustn't", youre: "you're", youve: "you've", youll: "you'll", theyre: "they're", theyve: "they've", thats: "that's", whats: "what's",
  wheres: "where's", whos: "who's", hows: "how's", theres: "there's", heres: "here's", shes: "she's", lets: "let's", yall: "y'all", aint: "ain't",
  shouldve: "should've", couldve: "could've", wouldve: "would've", idk: "I don't know", i: 'I'
};
function fixApostrophes(text) {
  const changes = [];
  const out = text.replace(/[’`´]/g, "'").replace(/\b[a-z]+\b/gi, w => {
    const k = w.toLowerCase(); const f = APO_FIX[k];
    if (!f || w === f) return w;
    const r = /^[A-Z]/.test(w) && f[0] !== 'I' ? f[0].toUpperCase() + f.slice(1) : f;
    if (k !== 'i') changes.push(w + ' → ' + r);
    return r;
  });
  return { text: out, changes };
}
function apoBar(inputId) {
  return `<div class="apo" data-for="${inputId}">${APO_CHIPS.map(c => `<button type="button" data-apo="${esc(c)}">${esc(c)}</button>`).join('')}</div>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-apo]'); if (!b) return;
  const inp = document.getElementById(b.parentElement.dataset.for); if (!inp) return;
  const v = b.dataset.apo, s = inp.selectionStart ?? inp.value.length, en = inp.selectionEnd ?? s;
  const before = inp.value.slice(0, s), ins = v === "'" ? "'" : (before && !/\s$/.test(before) ? ' ' : '') + v + ' ';
  inp.value = before + ins + inp.value.slice(en);
  const pos = (before + ins).length; inp.focus(); inp.setSelectionRange(pos, pos);
});
(function addApoStyles() {
  const st = document.createElement('style');
  st.textContent = `.apo{display:flex;gap:6px;overflow-x:auto;padding:8px 0 2px;-webkit-overflow-scrolling:touch}
.apo button{flex:none;border:1px solid var(--line);background:#fff;border-radius:999px;padding:6px 11px;font:600 .88rem system-ui,sans-serif;color:var(--blue);cursor:pointer}
.apo button:active{background:var(--blue-soft)}
.typing::after{content:'▍';animation:blink 1s infinite;margin-left:2px}@keyframes blink{50%{opacity:0}}
.scen{display:grid;grid-template-columns:1fr 1fr;gap:8px}.scen button{text-align:left;border:2px solid var(--line);background:#fff;border-radius:12px;padding:10px;cursor:pointer;font:inherit;color:inherit}
.scen button b{display:block;font-size:.95rem}.scen button span{font-size:.78rem;color:var(--muted)}`;
  document.head.appendChild(st);
})();

// Corrección automática también en las conversaciones guiadas
const _origHandleConvAnswer = handleConvAnswer;
handleConvAnswer = function (text) {
  const f = S.settings.apoFix === false ? { text, changes: [] } : fixApostrophes(text);
  if (f.changes.length) toast('✏️ Corregí: ' + f.changes.join(', '));
  _origHandleConvAnswer(f.text);
};
const _origRenderConv = renderConv;
renderConv = function (speakNow) {
  _origRenderConv(speakNow);
  const inp = document.getElementById('ctext');
  if (inp && !document.querySelector('.apo[data-for="ctext"]')) inp.closest('.row').insertAdjacentHTML('afterend', apoBar('ctext'));
};

/* =========================================================
   Conversación libre con IA
   ========================================================= */
const AI_MODEL = 'claude-opus-5-5';
const AI_KEY = 'ingles-jake-apikey';
const SCENARIOS = [
  { id: 'free', icon: '💬', t: 'Plática libre', d: 'De lo que quieras', set: 'A free, relaxed conversation about anything the learner wants. Follow their lead and their tone.' },
  { id: 'street', icon: '🛹', t: 'Con los compas', d: 'Calle, slang, groserías', set: 'You are hanging out with the learner as close friends on the street in Texas. Talk like real American friends: heavy slang, reductions and profanity are normal here.' },
  { id: 'work', icon: '🏗️', t: 'En la chamba', d: 'Compañeros y jefe', set: 'You are the learner\'s coworker at a job in the US (construction, warehouse, restaurant or office — ask which). Casual-but-work-appropriate American workplace English; switch to professional if they talk to you as their boss.' },
  { id: 'interview', icon: '💼', t: 'Entrevista', d: 'Formal y profesional', set: 'You are a hiring manager doing a job interview with the learner. Be professional and formal. Ask one interview question at a time.' },
  { id: 'food', icon: '🍔', t: 'Restaurante', d: 'Pedir y pagar', set: 'You are a fast-talking server/cashier at a busy American restaurant or coffee shop. Take the learner\'s order like a real employee would.' },
  { id: 'party', icon: '🎉', t: 'Fiesta', d: 'Ligar, conocer gente', set: 'You just met the learner at a party. Flirty-friendly, casual small talk, slang welcome.' },
  { id: 'doctor', icon: '🩺', t: 'Doctor', d: 'Síntomas y citas', set: 'You are a doctor or nurse at a US clinic. Ask about symptoms clearly and professionally.' },
  { id: 'phone', icon: '📞', t: 'Llamada', d: 'Servicio al cliente', set: 'You are a customer service agent on the phone (bank, phone company or delivery). Polite, scripted-but-fast American phone English.' },
  { id: 'beef', icon: '😤', t: 'Discusión', d: 'Defenderte, quejarte', set: 'You are the learner\'s annoying roommate/neighbor and you have a conflict (noise, rent, dishes). Argue realistically, let things get heated if they push, profanity allowed.' }
];
function aiSystem(sc) {
  return `You are Jake, a native English speaker from Texas, USA, in his late 20s. You are chatting with a Spanish-speaking learner from Mexico who is practicing real American English inside a learning app. Learner's level: ${S.level || 'A2'} (CEFR).

SCENARIO: ${sc.set}

HOW TO TALK:
- Sound like a real American, not a textbook: contractions, natural reductions (gonna, wanna, gotta, kinda), fillers (like, honestly, dude) when the register is casual.
- MIRROR THE LEARNER'S REGISTER. If they write casually, with slang or profanity ("yo bro wtf", "what's good"), answer like a real friend from the street — slang and profanity (fuck, shit, damn, etc.) are fine and natural; this app has no age restriction. If they write politely or formally, answer politely and professionally. The scenario sets the starting register.
- Never use racial, ethnic or homophobic slurs, even if the learner does; if they use one, keep your reply normal and explain in "why" (in Spanish) why it is offensive.
- Keep it flowing like a fast real chat: 1–3 short sentences, then usually a question or hook so the learner keeps talking. One idea at a time.
- Level: A1–A2 → simple, common words but still natural; B1 → normal speed; B2–C1 → full native speed with idioms and phrasal verbs.
- If the learner writes in Spanish or mixes Spanish, reply in simple English and use "why" to tell them how to say what they meant.
- Never correct the learner inside your English reply; corrections go only in the JSON.

OUTPUT FORMAT (always, exactly):
<your reply in English, as you would say it out loud>
###
{"es": "<natural Mexican-Spanish translation of your reply>", "fix": "<the learner's LAST message rewritten as natural English in the same register, or \\"\\" if it was already natural>", "why": "<one short sentence in Spanish explaining the correction, or a slang/phrasal verb/expression you used; \\"\\" if nothing worth noting>"}`;
}
let AIC = null, anthropicMod = null;
async function getClient() {
  const key = localStorage.getItem(AI_KEY);
  if (!key) throw Object.assign(new Error('nokey'), { code: 'nokey' });
  if (!anthropicMod) anthropicMod = await import('https://esm.sh/@anthropic-ai/sdk');
  const Anthropic = anthropicMod.default;
  return { client: new Anthropic({ apiKey: key, dangerouslyAllowBrowser: true }), Anthropic };
}
function aiErrorText(err, Anthropic) {
  if (err && err.code === 'nokey') return 'Primero pon tu clave de API en ☰ Más → ⚙️ Ajustes → 🤖 IA.';
  if (Anthropic) {
    if (err instanceof Anthropic.AuthenticationError) return '🔑 La clave de API no es válida. Revísala en Ajustes.';
    if (err instanceof Anthropic.PermissionDeniedError) return '🔑 Tu clave no tiene permiso para este modelo.';
    if (err instanceof Anthropic.RateLimitError) return '⏳ Demasiados mensajes seguidos. Espera unos segundos.';
    if (err instanceof Anthropic.APIConnectionError) return '📶 Sin conexión a internet.';
    if (err instanceof Anthropic.APIError && err.status === 400 && /credit|billing/i.test(err.message)) return '💳 Tu cuenta de Anthropic no tiene saldo. Agrega créditos en console.anthropic.com.';
  }
  return '😕 Algo falló: ' + (err && err.message ? err.message.slice(0, 120) : 'error desconocido');
}
// Separa la respuesta hablada del bloque JSON de ayuda
function splitAI(raw) {
  const i = raw.indexOf('###');
  const say = (i >= 0 ? raw.slice(0, i) : raw).trim();
  let meta = {};
  if (i >= 0) { const m = raw.slice(i + 3).match(/\{[\s\S]*\}/); if (m) { try { meta = JSON.parse(m[0]); } catch (e) {} } }
  return { say, meta };
}

SCREENS.talkAI = () => {
  const has = !!localStorage.getItem(AI_KEY);
  $app.innerHTML = `${topBar(null, 'talk')}<h1>🤖 Habla con Jake (IA)</h1>
    <p class="muted">Conversación libre y real. Jake se adapta a cómo le hablas: si le escribes "yo bro wtf" te contesta como compa de la calle; si le hablas formal, te contesta formal.</p>
    ${has ? '' : `<div class="card"><p class="mb0">🔑 Para usar la IA necesitas poner tu clave de API una sola vez.</p><button class="btn block mt" data-go="settings">Ir a Ajustes</button></div>`}
    <div class="card"><h3>Elige la situación</h3><div class="scen">${SCENARIOS.map(s => `<button data-scen="${s.id}"><b>${s.icon} ${esc(s.t)}</b><span>${esc(s.d)}</span></button>`).join('')}</div></div>`;
  $app.querySelectorAll('[data-scen]').forEach(b => b.onclick = () => {
    AIC = { sc: SCENARIOS.find(s => s.id === b.dataset.scen), msgs: [], ui: [], busy: false, hands: false };
    go('aiChat'); aiTurn('(The learner just opened the chat. Start the conversation in this scenario with a short, natural opening line.)', true);
  });
};
SCREENS.aiChat = () => renderAI();
function renderAI() {
  if (screen !== 'aiChat') return;
  const hide = !S.settings.showText;
  const chat = AIC.ui.map((m, idx) => {
    if (m.who === 'me') return `<div class="bubble me">${esc(m.text)}</div>`;
    if (m.who === 'err') return `<div class="bubble coach small">${esc(m.text)}</div>`;
    const last = idx === AIC.ui.length - 1;
    const blur = hide && !m.streaming && !m.revealed;
    return `<div class="jake"><div class="avatar ${last ? 'live' : ''}">J</div><div class="bubble">
      <div class="en ${m.streaming ? 'typing' : ''} ${blur ? 'hidden-text' : ''}" ${blur ? `data-aireveal="${idx}"` : ''}>${esc(m.text)}</div>
      ${m.es && !blur ? `<div class="es">${esc(m.es)}</div>` : ''}
      ${!m.streaming ? `<div class="row mt wrap">${sayBtn(m.text, '▶')}${sayBtn(m.text, '🐢', 'lento')}${sayBtn(m.text, '⚡', 'turbo')}${blur ? `<button class="say" data-aireveal="${idx}">👀 Ver texto</button>` : ''}</div>` : ''}
    </div></div>${m.fix || m.why ? `<div class="bubble coach small">${m.fix ? `✏️ <b>Más natural:</b> "${esc(m.fix)}" ${sayBtn(m.fix, '▶', 'normal')}<br>` : ''}${m.why ? `💡 ${esc(m.why)}` : ''}</div>` : ''}`;
  }).join('');
  $app.innerHTML = `${topBar(null, 'talkAI')}
    <div class="card"><div class="row"><span class="grow"><b>${AIC.sc.icon} ${esc(AIC.sc.t)}</b> <span class="small muted">· Nivel ${S.level || 'A2'}</span></span>
      <label class="small row" style="gap:6px"><input type="checkbox" id="hands" ${AIC.hands ? 'checked' : ''}> 🎧 Manos libres</label></div></div>
    <div class="chat" id="aichat">${chat}</div>
    <div class="card" style="position:sticky;bottom:0">
      <div class="row"><input type="text" id="aitext" placeholder="Escribe en inglés... (yo bro / Good morning sir)" autocomplete="off" ${AIC.busy ? 'disabled' : ''}>
        ${canListen ? `<button class="btn sm red" id="aimic" ${AIC.busy ? 'disabled' : ''}>🎤</button>` : ''}<button class="btn sm" id="aisend" ${AIC.busy ? 'disabled' : ''}>➤</button></div>
      ${apoBar('aitext')}
      <p class="small muted mb0" id="aist">${AIC.busy ? 'Jake está escribiendo...' : ''}</p></div>`;
  window.scrollTo(0, document.body.scrollHeight);
  const inp = document.getElementById('aitext');
  const send = () => { const v = inp.value.trim(); if (v && !AIC.busy) aiSend(v); };
  document.getElementById('aisend').onclick = send;
  inp.onkeydown = e => { if (e.key === 'Enter') send(); };
  if (!AIC.busy) inp.focus({ preventScroll: true });
  document.getElementById('hands').onchange = e => { AIC.hands = e.target.checked; if (AIC.hands && !AIC.busy) aiListen(); };
  const mic = document.getElementById('aimic'); if (mic) mic.onclick = () => aiListen();
  $app.querySelectorAll('[data-aireveal]').forEach(el => el.onclick = () => { AIC.ui[+el.dataset.aireveal].revealed = true; renderAI(); });
}
async function aiListen() {
  if (AIC.busy || screen !== 'aiChat') return;
  const st = document.getElementById('aist'), mic = document.getElementById('aimic');
  if (mic) mic.classList.add('on'); if (st) st.textContent = '🎤 Escuchando... habla en inglés';
  try {
    const alts = await listen(t => { const s2 = document.getElementById('aist'); if (s2) s2.textContent = '🎧 ' + t; });
    aiSend(alts[0]);
  } catch (e) {
    if (mic) mic.classList.remove('on');
    micError(e, 'aist');
    if (e.message === 'no-speech' && AIC.hands) setTimeout(aiListen, 400);
  }
}
function aiSend(text) {
  const f = S.settings.apoFix === false ? { text, changes: [] } : fixApostrophes(text);
  if (f.changes.length) toast('✏️ Corregí: ' + f.changes.join(', '));
  AIC.ui.push({ who: 'me', text: f.text });
  aiTurn(f.text, false);
}
async function aiTurn(userText, hidden) {
  AIC.msgs.push({ role: 'user', content: userText });
  const bubble = { who: 'jake', text: '', streaming: true };
  AIC.ui.push(bubble); AIC.busy = true; renderAI();
  let Anthropic = null;
  try {
    const c = await getClient(); Anthropic = c.Anthropic;
    let raw = '';
    const stream = c.client.beta.messages.stream({
      model: AI_MODEL,
      max_tokens: 16000,
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
      output_config: { effort: 'low' },
      system: aiSystem(AIC.sc),
      messages: AIC.msgs
    });
    stream.on('text', t => {
      raw += t;
      bubble.text = splitAI(raw).say;
      const el = document.querySelector('#aichat .jake:last-child .en');
      if (el) { el.textContent = bubble.text; window.scrollTo(0, document.body.scrollHeight); }
    });
    const final = await stream.finalMessage();
    if (final.stop_reason === 'refusal') {
      AIC.msgs.pop(); AIC.ui.pop();
      AIC.ui.push({ who: 'err', text: '🙅 Jake no puede responder a ese mensaje. Intenta decirlo de otra forma.' });
    } else {
      const fullText = final.content.filter(b => b.type === 'text').map(b => b.text).join('');
      const { say, meta } = splitAI(fullText || raw);
      Object.assign(bubble, { text: say, es: meta.es || '', fix: hidden ? '' : (meta.fix || ''), why: meta.why || '', streaming: false });
      AIC.msgs.push({ role: 'assistant', content: fullText || raw });
      if (!hidden) updSkill('speaking', !meta.fix, 0.06);
      addXP(1); save();
    }
  } catch (err) {
    AIC.msgs.pop(); AIC.ui.pop();
    if (!hidden) { const last = AIC.ui.pop(); if (last && last.who === 'me') setTimeout(() => { const i = document.getElementById('aitext'); if (i) i.value = last.text; }, 0); }
    AIC.ui.push({ who: 'err', text: aiErrorText(err, Anthropic) });
  }
  AIC.busy = false; renderAI();
  const last = AIC.ui[AIC.ui.length - 1];
  if (last && last.who === 'jake' && last.text) {
    await speak(last.text);
    if (AIC.hands && screen === 'aiChat') aiListen();
  }
}

/* =========================================================
   Integración con pantallas existentes
   ========================================================= */
// ⏸️ IA desactivada por ahora (decisión del usuario). Cambiar a true para volver a mostrarla.
const AI_ENABLED = false;
if (!AI_ENABLED) { SCREENS.talkAI = SCREENS.aiChat = () => go('talk'); }
const _origTalk = SCREENS.talk;
SCREENS.talk = () => {
  _origTalk();
  if (!AI_ENABLED) return;
  $app.querySelector('h1').insertAdjacentHTML('afterend', `<div class="card hero"><h2 style="color:#fff">🤖 Conversación libre con IA</h2>
    <p class="muted">Habla de lo que quieras, como en la vida real: calle, trabajo, entrevista, fiesta... Jake se adapta a tu forma de hablar, de "yo bro wtf" a "Good morning, sir".</p>
    <button class="btn block red" data-go="talkAI">Empezar a platicar</button></div>
    <h2 class="mt">Conversaciones guiadas</h2>`);
};
const _origSettings = SCREENS.settings;
SCREENS.settings = () => {
  _origSettings();
  if (!AI_ENABLED) {
    $app.querySelector('h1').insertAdjacentHTML('afterend', `<div class="card"><h3>✏️ Apóstrofes</h3><label class="row small"><input type="checkbox" id="apofix" ${S.settings.apoFix === false ? '' : 'checked'}> Corregir automáticamente: im → I'm, dont → don't, cant → can't…</label>
      <p class="small muted mt mb0">Además, abajo de donde escribes hay botones para poner el apóstrofe ( ' ) y las contracciones más usadas.</p></div>`);
    document.getElementById('apofix').onchange = e => { S.settings.apoFix = e.target.checked; save(); };
    return;
  }
  const key = localStorage.getItem(AI_KEY) || '';
  $app.querySelector('h1').insertAdjacentHTML('afterend', `<div class="card"><h3>🤖 IA (conversación libre)</h3>
    <p class="small">La conversación libre usa Claude, la IA de Anthropic. Necesitas tu propia <b>clave de API</b>:</p>
    <ol class="small" style="padding-left:18px;margin:6px 0 10px"><li>Entra a <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener">console.anthropic.com</a> y crea una cuenta.</li><li>Agrega saldo (se cobra por uso; una plática de 20 mensajes cuesta centavos de dólar).</li><li>Crea una clave ("Create Key"), cópiala y pégala aquí.</li></ol>
    <div class="row"><input type="password" id="apikey" placeholder="sk-ant-..." value="${esc(key)}" autocomplete="off"><button class="btn sm" id="savekey">Guardar</button></div>
    <div class="row mt wrap"><button class="btn ghost sm" id="testkey">Probar conexión</button>${key ? '<button class="btn plain sm" id="delkey">Borrar clave</button>' : ''}</div>
    <p class="small muted mt" id="keyst">${key ? '✅ Clave guardada en este dispositivo.' : ''}</p>
    <p class="small tip mb0">🔒 La clave se guarda solo en este teléfono o computadora y se usa únicamente para hablar con Anthropic. No la compartas con nadie.</p></div>
    <div class="card"><h3>✏️ Apóstrofes</h3><label class="row small"><input type="checkbox" id="apofix" ${S.settings.apoFix === false ? '' : 'checked'}> Corregir automáticamente: im → I'm, dont → don't, cant → can't…</label>
    <p class="small muted mt mb0">Además, abajo de donde escribes hay botones para poner el apóstrofe ( ' ) y las contracciones más usadas.</p></div>`);
  document.getElementById('savekey').onclick = () => {
    const v = document.getElementById('apikey').value.trim();
    if (!v) return toast('Pega tu clave');
    localStorage.setItem(AI_KEY, v); toast('🔑 Clave guardada'); SCREENS.settings();
  };
  const dk = document.getElementById('delkey'); if (dk) dk.onclick = () => { localStorage.removeItem(AI_KEY); toast('Clave borrada'); SCREENS.settings(); };
  document.getElementById('apofix').onchange = e => { S.settings.apoFix = e.target.checked; save(); };
  document.getElementById('testkey').onclick = async () => {
    const st = document.getElementById('keyst'); st.textContent = 'Probando...';
    const v = document.getElementById('apikey').value.trim(); if (v) localStorage.setItem(AI_KEY, v);
    let Anthropic = null;
    try {
      const c = await getClient(); Anthropic = c.Anthropic;
      const r = await c.client.messages.create({ model: AI_MODEL, max_tokens: 1000, output_config: { effort: 'low' }, messages: [{ role: 'user', content: 'Say only: Hey, it works!' }] });
      st.textContent = '✅ ¡Funciona! Jake dice: ' + r.content.filter(b => b.type === 'text').map(b => b.text).join('').slice(0, 60);
    } catch (err) { st.textContent = aiErrorText(err, Anthropic); }
  };
};
