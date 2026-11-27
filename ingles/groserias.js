// 🤬 Groserías sin filtro: México ↔ EE. UU., con su fuerza real y un detector.
// Fuerza: 🟢 suave · 🟡 media · 🔴 fuerte · ⛔ insulto grave (discriminatorio). Se explican TODAS; la app no censura.
// Se carga al final (usa EXPRESSIONS, buildExprRe, SCREENS, go, esc...). Contenido original de la app.

// ---------- Las más fuertes de EE. UU. que faltaban ----------
const US_WORST = [
  [['cunt', 'cunts'], 'cunt', '⛔🔴 LA grosería más fuerte en EE. UU. Vulgar para vagina; como insulto (sobre todo a una mujer) es peor que "bitch". En Inglaterra o Australia entre hombres puede ser casi amistoso; en EE. UU. casi nunca.'],
  [['cocksucker', 'cocksuckers'], 'cocksucker', '🔴 "Chupavergas". Insulto muy fuerte, también con carga homofóbica.'],
  [['go fuck yourself'], 'go fuck yourself', '🔴 "Vete a la chingada", "chinga tu madre".'],
  [['fuck off'], 'fuck off', '🔴 "Lárgate a la verga", "vete a la chingada".'],
  [['eat shit'], 'eat shit', '🔴 "Come mierda", "chinga tu madre".'],
  [['suck my dick', 'suck my cock', 'suck it'], 'suck my dick', '🔴 "Chúpame la verga" ("suck it" es la versión más suave: "chúpala").'],
  [['twat'], 'twat', '🔴 Vulgar para vagina; insulto: "pendejo/a" (más británico).'],
  [['prick', 'pricks'], 'prick', '🔴 "Pito"; insulto: "cabrón", "mamón", alguien odioso.'],
  [['douchebag', 'douche'], 'douchebag', '🟡 "Mamón", "pendejo creído".'],
  [['scumbag', 'scum'], 'scumbag', '🟡 "Basura de persona", "rata".'],
  [['skank', 'skanky'], 'skank', '🔴 Insulto a una mujer: "golfa", "zorra", sucia.'],
  [['jerk off', 'jerking off', 'jerk'], 'jerk off', '🔴 "Hacerse una chaqueta" (masturbarse). "Jerk" solo = "imbécil" (🟢🟡).'],
  [['cum'], 'cum', '🔴 Semen / "venirse" (vulgar).'],
  [['horny'], 'horny', '🟡 "Caliente", con ganas de sexo.'],
  [['wanker', 'wank'], 'wanker', '🔴 Británico: "pendejo" / "pajero".'],
  [['bollocks'], 'bollocks', '🟡 Británico: "huevos" / "pendejadas".'],
  [['arse', 'arsehole'], 'arse', '🟡 Británico de "ass / asshole".'],
  [['motherfuckin', "motherfuckin'"], 'motherfuckin\'', '🔴 Intensificador: "pinche de su puta madre".'],
  [['bitch ass', 'bitch-ass'], 'bitch ass', '🔴 "Pinche marica / cobarde" ("your bitch ass" = tú, pinche cobarde).'],
  [['hoe ass', 'thot'], 'hoe / thot', '🔴 "Zorra", "golfa" (muy de rap).'],
  [['beaner', 'beaners'], 'beaner', '⛔ Insulto racista contra mexicanos y latinos ("frijolero"). Si te lo dicen, es un insulto grave.'],
  [['wetback', 'wetbacks'], 'wetback', '⛔ Insulto racista contra inmigrantes mexicanos ("mojado"). Muy ofensivo.'],
  [['spic', 'spics'], 'spic', '⛔ Insulto racista contra latinos. Muy ofensivo.'],
  [['chink', 'chinks'], 'chink', '⛔ Insulto racista contra personas asiáticas.'],
  [['tranny'], 'tranny', '⛔ Insulto contra personas trans.'],
  [['dyke'], 'dyke', '⛔ Insulto contra mujeres lesbianas.'],
  [['white trash', 'redneck'], 'white trash', '🟡 Insulto clasista contra blancos pobres ("redneck" = paleto, a veces se usa con orgullo).']
];
const US_WORST_EXPR = US_WORST.map(([w, k, es]) => ({ k, es, type: 'groseria', w }));
US_WORST_EXPR.forEach(buildExprRe); EXPRESSIONS.push(...US_WORST_EXPR);

// ---------- Groserías de México ----------
// [variantes, qué significa / cómo se usa, fuerza, cómo se dice en EE. UU., ejemplo]
const MX_GROS = [
  [['pendejo', 'pendeja', 'pendejos', 'pendejas', 'pendejada', 'pendejadas'], 'Tonto, idiota. "Pendejada" = estupidez.', '🟡', 'dumbass · idiot · asshole · (pendejada) bullshit', 'No seas pendejo → Don\'t be a dumbass'],
  [['cabrón', 'cabron', 'cabrona', 'cabrones'], 'Desgraciado, mala persona. Entre amigos: "compa". "Está cabrón" = está difícil. "Eres bien cabrón" = eres muy bueno.', '🔴', 'bastard · asshole · (amigos) dude · (difícil) it\'s fucking hard · (bueno) badass', '¡Qué cabrón! → What a bastard! / Damn, that\'s badass!'],
  [['chingar', 'chinga', 'chingas', 'chingó', 'chingado', 'chingada', 'chingados'], 'Molestar, dañar, robar, coger. "¡Chingados!" = ¡carajo!', '🔴', 'to fuck (with) · to screw · fuck!', 'No me chingues → Don\'t fuck with me'],
  [['chinga tu madre', 'chingue a su madre', 'chingas a tu madre'], 'Insulto muy fuerte.', '🔴', 'fuck you · go fuck yourself · motherfucker', 'Chinga tu madre → Go fuck yourself'],
  [['hijo de la chingada', 'hijo de tu puta madre', 'hijo de su puta madre', 'hijo de puta', 'hdp'], 'Insulto de los más fuertes en México.', '🔴', 'son of a bitch · motherfucker', 'Ese hijo de la chingada → That motherfucker'],
  [['vete a la chingada', 'vete a la verga', 'vete al carajo'], 'Lárgate, déjame en paz (fuerte).', '🔴', 'fuck off · go to hell · get the fuck out', '¡Vete a la verga! → Fuck off!'],
  [['pinche', 'pinches'], 'Maldito, de porquería; intensificador.', '🟡', 'fucking · damn · shitty', 'Este pinche tráfico → This fucking traffic'],
  [['puto', 'puta', 'putos', 'putas'], '"Puta": prostituta o insulto a una mujer. "Puto": insulto homofóbico a un hombre o cobarde. Intensificador: "ni un puto peso".', '⛔🔴', 'whore · bitch · (homofóbico) faggot · (intensificador) fucking', 'Ni un puto peso → Not a fucking cent'],
  [['puta madre', 'a toda madre', 'de poca madre', 'de puta madre'], '"¡Puta madre!" = ¡carajo! "De puta madre / a toda madre" = increíble.', '🔴', 'fuck! · motherfucker! · (bueno) fucking awesome', '¡Puta madre, se me olvidó! → Fuck, I forgot!'],
  [['verga', 'vergas', 'vergazo', 'vergazos'], 'Pene. "Me vale verga" = no me importa. "A la verga" = sorpresa o enojo. "Vergazo" = golpe.', '🔴', 'dick · I don\'t give a fuck · holy shit · (golpe) punch', 'Me vale verga → I don\'t give a fuck'],
  [['me vale madre', 'me vale madres', 'valemadres', 'valemadrista', 'me vale'], 'No me importa nada.', '🟡', 'I don\'t give a damn · I don\'t give a shit · (fuerte) I don\'t give a fuck', 'Me vale madres lo que digan → I don\'t give a shit what they say'],
  [['a la verga', 'alv'], 'Sorpresa o enojo: ¡no manches! / ¡a la goma!', '🔴', 'holy shit · what the fuck · fuck that', '¡A la verga, ganamos! → Holy shit, we won!'],
  [['culero', 'culera', 'culeros', 'culeras', 'culerada'], 'Mala persona, gacho; también cobarde. "Me da culo" = me da miedo.', '🔴', 'asshole · dick · (cobarde) chickenshit', 'No seas culero → Don\'t be an asshole'],
  [['mamón', 'mamon', 'mamona', 'mamones'], 'Presumido, creído, payaso.', '🟡', 'cocky · stuck-up · douchebag', 'Bien mamón → Such a douchebag'],
  [['no mames', 'no mamen', 'nmms', 'no manches'], '¡No puede ser! / ¡No inventes! ("no manches" es la versión suave).', '🟡', 'no fucking way · wtf · (suave) no way · shut up!', '¡No mames, en serio! → No fucking way, for real?'],
  [['mamada', 'mamadas'], 'Tontería, cosa absurda. También sexo oral (vulgar).', '🔴', 'bullshit · nonsense · (sexo) blowjob', 'Puras mamadas → That\'s total bullshit'],
  [['mamar', 'mámala', 'chúpame', 'chupame'], 'Vulgar: chupar, sexo oral.', '🔴', 'suck · suck my dick · blow', 'Chúpame la... → Suck my dick'],
  [['chingadera', 'chingaderas'], 'Cosa, porquería o injusticia.', '🟡', 'shit · crap · bullshit', '¿Qué es esa chingadera? → What the hell is that shit?'],
  [['chingón', 'chingon', 'chingona', 'chingonería'], 'Excelente, muy bueno.', '🟡', 'badass · fucking awesome · the shit', 'Está bien chingón → It\'s fucking awesome'],
  [['madrazo', 'madrazos', 'putazo', 'putazos', 'chingadazo'], 'Golpe fuerte.', '🟡', 'punch · beat the shit out of · ass-kicking', 'Te voy a dar un madrazo → I\'m gonna punch you'],
  [['ojete', 'ojetes'], 'Mala persona (también es el ano, vulgar).', '🔴', 'asshole · prick', 'Bien ojete → What a prick'],
  [['culo'], 'Trasero (vulgar). "Tener culo" = tener miedo.', '🔴', 'ass · (miedo) to be chicken', 'Me da culo → I\'m chicken / it scares the shit out of me'],
  [['nalgas'], 'Trasero.', '🟡', 'butt · ass', ''],
  [['pito', 'pija', 'pinga'], 'Pene (vulgar).', '🔴', 'dick · cock', ''],
  [['panocha', 'pucha'], 'Vagina (vulgar).', '🔴', 'pussy · cunt', ''],
  [['coger', 'cogiendo', 'cogió'], 'En México: tener sexo (vulgar). ¡En España es "agarrar"!', '🔴', 'to fuck', ''],
  [['chaqueta', 'jalársela', 'puñeta', 'puñetas'], 'Masturbación (vulgar).', '🔴', 'jerk off · beat off · (UK) wank', ''],
  [['mierda'], 'Mierda.', '🟡', 'shit', '¡Qué mierda! → What a piece of shit! / This sucks!'],
  [['cagada', 'la cagaste', 'cagarla', 'cagado'], 'Error grande. "La cagaste" = la regaste.', '🟡', 'you fucked up · screw-up · (gracioso) hilarious', 'La cagaste → You fucked up'],
  [['carajo'], '¡Maldición! "Vete al carajo".', '🟡', 'damn · hell · fuck', '¡Carajo! → Damn! / Fuck!'],
  [['pedo', 'qué pedo', 'pedote', 'peda'], 'Problema, pleito, borracho, pedo. "¿Qué pedo?" = ¿qué onda? "Andar pedo" = andar borracho.', '🟡', 'problem · drunk · fart · (saludo) what\'s up', 'Andaba bien pedo → He was wasted'],
  [['a huevo', 'ahuevo', 'huevos'], '¡Claro que sí! / a fuerza. "Tener huevos" = tener valor.', '🟡', 'hell yeah · fuck yeah · (valor) balls', '¡A huevo! → Hell yeah!'],
  [['huevón', 'huevon', 'huevona'], 'Flojo.', '🟡', 'lazy ass · couch potato', 'Bien huevón → Lazy ass'],
  [['güey', 'wey', 'buey'], 'Amigo (muy común) o tonto.', '🟢', 'dude · bro · man · (tonto) dumbass', 'No manches, güey → No way, dude'],
  [['jodido', 'jódete', 'jodete', 'joder'], 'Arruinado / molestar. "Jódete" = aguántate, vete al diablo.', '🟡', 'fucked · screwed · screw you · fuck off', 'Estamos jodidos → We\'re fucked'],
  [['tu madre', 'tu jefa', 'chinga tu'], 'Mentar la madre: insulto fuerte.', '🔴', 'your mom · yo mama · motherfucker', ''],
  [['zorra', 'perra', 'golfa'], 'Insultos machistas a una mujer.', '🔴', 'slut · bitch · whore · skank', ''],
  [['naco', 'naca', 'nacos'], 'Corriente, de mal gusto (clasista y racista).', '⛔', 'tacky · trashy · ghetto', ''],
  [['joto', 'jotos', 'maricón', 'maricon', 'marica'], 'Insultos homofóbicos.', '⛔', 'faggot · fag', ''],
  [['indio', 'prieto'], 'Usados como insulto son racistas.', '⛔', 'racist slur (no hay equivalente directo)', ''],
  [['cállate el hocico', 'cierra el hocico', 'cállate a la verga'], '¡Cállate! (muy grosero).', '🔴', 'shut the fuck up · stfu · shut your mouth', '']
];
const MX_INDEX = [];
MX_GROS.forEach(r => r[0].forEach(v => MX_INDEX.push({ v, r, re: new RegExp(`(?:^|[^a-záéíóúñü])${v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=$|[^a-záéíóúñü])`, 'i') })));
MX_INDEX.sort((a, b) => b.v.length - a.v.length);
function findMxGros(text) {
  const out = []; let t = ' ' + text + ' ';
  MX_INDEX.forEach(x => { if (x.re.test(t) && !out.some(o => o.r === x.r)) { out.push(x); t = t.replace(x.re, ' '); } });
  return out;
}
const STRENGTH = s => s.includes('⛔') ? 4 : s.includes('🔴') ? 3 : s.includes('🟡') ? 2 : 1;

/* ---------- Pantalla 🤬 Groserías ---------- */
let GR = { tab: 'mx', q: '' };
SCREENS.groserias = () => {
  const tabs = [['mx', '🇲🇽 México'], ['us', '🇺🇸 EE. UU.'], ['det', '🕵️ Detector']];
  const plain = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  let body = '';
  if (GR.tab === 'mx') {
    const list = MX_GROS.filter(r => !GR.q || plain(r.join(' ')).includes(plain(GR.q))).sort((a, b) => STRENGTH(b[2]) - STRENGTH(a[2]));
    body = `<input type="text" id="grq" placeholder="Busca: pendejo, verga, no mames..." value="${esc(GR.q)}" autocomplete="off">
      <p class="small muted mt">${list.length} groserías · ordenadas de la más fuerte a la más suave</p>
      ${list.map(r => `<div class="card"><div class="row"><b class="grow" style="font-size:1.1rem">${esc(r[0].slice(0, 3).join(' / '))}</b><span>${r[2]}</span></div>
        <p class="small mt mb0">${esc(r[1])}</p>
        <p class="mt mb0">🇺🇸 <b style="color:var(--blue)">${esc(r[3])}</b> ${sayBtn(r[3].split('·')[0].trim(), '▶')}</p>
        ${r[4] ? `<p class="small muted mt mb0">💬 ${esc(r[4])}</p>` : ''}</div>`).join('')}`;
  } else if (GR.tab === 'us') {
    const list = EXPRESSIONS.filter(e => e.type === 'groseria' && (!GR.q || plain(e.k + ' ' + e.es + ' ' + (e.w || []).join(' ')).includes(plain(GR.q)))).sort((a, b) => STRENGTH(b.es.slice(0, 4)) - STRENGTH(a.es.slice(0, 4)));
    body = `<input type="text" id="grq" placeholder="Busca: fuck, bitch, cunt..." value="${esc(GR.q)}" autocomplete="off">
      <p class="small muted mt">${list.length} groserías · ordenadas de la más fuerte a la más suave</p>
      <div class="card">${list.map(e => `<div class="list-item" style="align-items:flex-start"><div class="grow"><b>${esc(e.k)}</b>${e.w && e.w.length > 1 ? ` <span class="small muted">(${esc(e.w.slice(0, 4).join(', '))})</span>` : ''}<br><span class="small">${esc(e.es)}</span></div>${sayBtn(e.k, '▶')}</div>`).join('')}</div>`;
  } else {
    body = `<div class="card"><h3>🕵️ Detector de groserías y forma de hablar</h3><p class="small muted">Pega un mensaje, una frase o una letra, en inglés o en español. Te digo qué tan fuerte es cada palabra, qué significa y cómo se dice en el otro idioma.</p>
      <textarea id="grin" rows="3" placeholder="Ej: no mames güey, this shit is fucking crazy lol">${esc(GR.msg || '')}</textarea>
      <button class="btn block mt" id="grgo">🔎 Analizar</button><div id="grout"></div></div>`;
  }
  $app.innerHTML = `${topBar(null, 'more')}<h1>🤬 Groserías sin filtro</h1>
    <p class="muted">Las más fuertes de México y de EE. UU., qué significan de verdad y cómo se dicen en el otro idioma. Fuerza: 🟢 suave · 🟡 media · 🔴 fuerte · ⛔ insulto discriminatorio (entiéndelo, no lo uses).</p>
    <div class="tabs">${tabs.map(([k, t]) => `<button data-grtab="${k}" class="${GR.tab === k ? 'sel' : ''}">${t}</button>`).join('')}</div>${body}`;
  $app.querySelectorAll('[data-grtab]').forEach(b => b.onclick = () => { GR.tab = b.dataset.grtab; GR.q = ''; SCREENS.groserias(); });
  const q = document.getElementById('grq');
  if (q) q.oninput = () => { GR.q = q.value; const p = q.selectionStart; SCREENS.groserias(); const n = document.getElementById('grq'); n.focus(); n.setSelectionRange(p, p); };
  const g = document.getElementById('grgo');
  if (g) { const run = () => { GR.msg = document.getElementById('grin').value; document.getElementById('grout').innerHTML = analyzeHTML(GR.msg); }; g.onclick = run; if (GR.msg) run(); }
};

/* ---------- Análisis de cómo habla alguien (se usa en el detector y en las conversaciones) ---------- */
const POLITE_RE = /\b(please|could you|would you|would like|i'd like|may i|thank you|thanks so much|sir|ma'am|excuse me|pardon|i appreciate|kindly|sincerely|good (morning|afternoon|evening))\b/i;
function analyzeSpeech(text) {
  const items = [];
  findExpr(text).forEach(h => { if (['groseria', 'slang', 'reduccion', 'texto', 'modismo', 'phrasal'].includes(h.e.type)) items.push({ txt: h.txt, type: h.e.type, es: h.e.es, s: h.e.type === 'groseria' ? STRENGTH(h.e.es.slice(0, 4)) : 0 }); });
  if (typeof decodeText === 'function') decodeText(text, true).found.forEach(f => { if (!items.some(i => i.txt.toLowerCase() === f.abbr.toLowerCase())) items.push({ txt: f.abbr, type: f.from === 'mx' ? 'mxtexto' : 'texto', es: f.from === 'mx' ? f.es + ' → en inglés: ' + f.en : f.en + ' = ' + f.es, s: f.flag ? 3 : 0 }); });
  findMxGros(text).forEach(x => items.push({ txt: x.v, type: 'mx', es: x.r[1] + ' → en inglés: ' + x.r[3], s: STRENGTH(x.r[2]), f: x.r[2] }));
  const maxS = Math.max(0, ...items.map(i => i.s));
  const casual = items.some(i => ['slang', 'reduccion', 'texto', 'mxtexto'].includes(i.type));
  let reg = 'neutral';
  if (maxS >= 3) reg = 'calle'; else if (maxS === 2 || casual) reg = 'informal'; else if (POLITE_RE.test(text)) reg = 'formal';
  return { reg, items };
}
const REG_INFO = {
  calle: ['🛹 De calle, con groserías fuertes', 'Así hablas con tus compas de confianza. Con desconocidos, en el trabajo o con gente mayor puede caer muy mal.'],
  informal: ['😎 Informal / relajado', 'Perfecto con amigos y en mensajes. En una entrevista o con tu jefe, mejor más formal.'],
  formal: ['🎩 Formal / educado', 'Ideal para el trabajo, entrevistas, clientes y desconocidos.'],
  neutral: ['🙂 Neutral', 'Sirve para casi cualquier situación.']
};
const ITEM_TYPE = { groseria: '🤬 Grosería', slang: '🗣️ Slang', reduccion: '⚡ Habla rápida', texto: '📱 Abreviación', mxtexto: '📱🇲🇽 Abreviación', mx: '🇲🇽 Grosería mexicana', modismo: '💬 Modismo', phrasal: '🔗 Phrasal verb' };
function analyzeHTML(text) {
  const a = analyzeSpeech(text);
  const [title, tip] = REG_INFO[a.reg];
  return `<div class="tip mt"><b>${title}</b><br><span class="small">${tip}</span></div>
    ${a.items.length ? a.items.map(i => `<div class="list-item" style="align-items:flex-start"><div><b>${esc(i.txt)}</b> ${i.f || ''} <span class="tag amber">${ITEM_TYPE[i.type] || i.type}</span><br><span class="small">${esc(i.es)}</span></div></div>`).join('') : '<p class="small mt mb0">No encontré groserías, slang ni abreviaciones.</p>'}`;
}

/* ---------- Integración ---------- */
const _origMore2 = SCREENS.more;
SCREENS.more = () => {
  _origMore2();
  const first = $app.querySelector('.lesson-row');
  if (first) first.insertAdjacentHTML('afterend', `<button class="lesson-row" data-go="groserias"><span class="dot" style="font-size:1.2rem">🤬</span><span class="grow"><b>Groserías sin filtro</b><br><span class="small muted">México ↔ EE. UU., de la más fuerte a la más suave</span></span><span>›</span></button>`);
};
const _origGo2 = go;
go = function (name, arg) { _origGo2(name, arg); if (name === 'groserias') { const nav = document.getElementById('nav'); nav.hidden = !S.level; nav.querySelectorAll('button').forEach(b => b.classList.toggle('act', b.dataset.go === 'more')); } };

// En las conversaciones guiadas: Jake te dice cómo hablaste
const _origHandle3 = handleConvAnswer;
handleConvAnswer = function (text) {
  _origHandle3(text);
  if (!C) return;
  const a = analyzeSpeech(text);
  if (!a.items.length && a.reg === 'neutral') return;
  const idx = C.log.map(m => m.who).lastIndexOf('me');
  const [title, tip] = REG_INFO[a.reg];
  const html = `<b>🕵️ Así hablaste: ${title}</b><br>${a.items.map(i => `• <b>${esc(i.txt)}</b> ${i.f || ''} — ${esc(i.es)}`).join('<br>')}${a.items.length ? '<br>' : ''}<span class="muted">${tip}</span>`;
  C.log.splice(idx + 1, 0, { who: 'coach', html });
  renderConv(false);
};

// Lección de groserías: agregamos la tabla México ↔ EE. UU.
(function () {
  const l = LESSONS.find(x => x.id === 'b2-groserias'); if (!l) return;
  l.explain += `<p><b>🇲🇽 → 🇺🇸 Las nuestras en inglés:</b></p><table class="tbl"><tr><th>México</th><th>EE. UU.</th></tr>
    <tr><td>pendejo</td><td>dumbass / idiot</td></tr><tr><td>cabrón</td><td>bastard / asshole (amigos: dude)</td></tr><tr><td>pinche</td><td>fucking / damn</td></tr>
    <tr><td>chinga tu madre</td><td>go fuck yourself</td></tr><tr><td>hijo de la chingada</td><td>son of a bitch / motherfucker</td></tr><tr><td>me vale madres</td><td>I don't give a shit / fuck</td></tr>
    <tr><td>no mames</td><td>no fucking way / wtf</td></tr><tr><td>culero</td><td>asshole / dick</td></tr><tr><td>chingón</td><td>badass / fucking awesome</td></tr><tr><td>vete a la verga</td><td>fuck off</td></tr></table>
    <p class="small">La lista completa, con su fuerza y un detector, está en <b>☰ Más → 🤬 Groserías sin filtro</b>.</p>`;
})();
GUIDE.push({ cat: 'Consejos', t: 'Groserías de México y cómo se dicen en inglés', b: `<p><b>pendejo</b> = dumbass · <b>cabrón</b> = bastard / asshole (entre amigos: dude) · <b>pinche</b> = fucking · <b>chinga tu madre</b> = go fuck yourself · <b>hijo de la chingada</b> = son of a bitch · <b>me vale madres</b> = I don't give a shit · <b>no mames</b> = no fucking way · <b>culero</b> = asshole · <b>chingón</b> = badass · <b>vete a la verga</b> = fuck off · <b>a huevo</b> = hell yeah.</p><p>Las más fuertes en EE. UU.: <b>cunt</b> (la peor), <b>motherfucker</b>, <b>cocksucker</b>, <b>fuck you</b>. Y ojo con los insultos racistas contra latinos: <b>beaner</b>, <b>wetback</b>, <b>spic</b>.</p><p>Lista completa y detector en <b>☰ Más → 🤬 Groserías sin filtro</b>.</p>` });
