// Diccionario ampliado: phrasal verbs, slang y groserías (sin censura, con su significado real).
// Contenido original de la app.

TYPE_NAMES.groseria = 'Grosería / palabrota';

const MORE_EXPRESSIONS = [
  // ---------- Phrasal verbs extra (muy comunes en canciones y series) ----------
  ...[
    ['hit up', 'contactar / escribirle a alguien'], ['chill out', 'relajarse, calmarse'], ['pull up', 'llegar (en carro) / presentarse'], ['hook up', 'ligar, tener un encuentro sexual / conectar'],
    ['make out', 'besarse apasionadamente / distinguir algo'], ['freak out', 'asustarse, ponerse como loco'], ['blow up', 'explotar / hacerse famoso de golpe / llenar de mensajes'], ['bring down', 'deprimir a alguien / derribar'],
    ['shake off', 'sacudirse, quitarse de encima'], ['back down', 'echarse para atrás, rendirse'], ['count on', 'contar con alguien'], ['give away', 'regalar / delatar'],
    ['go off', 'sonar (alarma) / estallar / enojarse de golpe / "rifarse"'], ['hold up', 'espérate / retrasar / asaltar'], ['knock out', 'noquear / dejar dormido'], ['mess with', 'meterse con alguien, molestar'],
    ['pass out', 'desmayarse'], ['put up with', 'aguantar, soportar'], ['run into', 'encontrarse a alguien de casualidad'], ['show off', 'presumir, lucirse'],
    ['sort out', 'arreglar, resolver'], ['stay up', 'desvelarse, quedarse despierto'], ['step up', 'dar la cara, ponerse las pilas'], ['throw up', 'vomitar'],
    ['watch out', '¡cuidado! / estar atento'], ['zone out', 'quedarse ido, distraerse'], ['break through', 'abrirse paso, superar una barrera'], ['come around', 'cambiar de opinión / visitar'],
    ['dress up', 'arreglarse, vestirse elegante o disfrazarse'], ['end up', 'terminar (en algún lugar o situación)'], ['fall back', 'retroceder / alejarse'], ['get along', 'llevarse bien'],
    ['get down', 'bailar, ponerse a ello / bajar / deprimir'], ['go through', 'pasar por (algo difícil)'], ['hang up', 'colgar el teléfono'], ['look after', 'cuidar a alguien'],
    ['pull through', 'salir adelante, recuperarse'], ['rely on', 'depender de, confiar en'], ['sell out', 'agotarse / venderse (traicionar ideales)'], ['shut down', 'apagar, cerrar / rechazar a alguien'],
    ['speak up', 'hablar más fuerte / alzar la voz por algo'], ['split up', 'separarse, cortar (pareja)'], ['stick around', 'quedarse un rato más'], ['cry out', 'gritar, clamar'],
    ['turn out', 'resultar (que...)'], ['give back', 'devolver / retribuir'], ['let out', 'soltar, dejar salir'], ['pick out', 'escoger'],
    ['run around', 'andar de un lado a otro / engañar a la pareja'], ['play around', 'jugar / andar con varias personas'], ['mess around', 'perder el tiempo / tontear / andar de coqueto'], ['screw up', 'regarla, arruinar algo (informal)'],
    ['fuck up', 'regarla feo, cagarla (vulgar)'], ['piss off', 'hacer enojar / ¡lárgate! (vulgar)'], ['fool around', 'tontear / fajar, andar de cariñoso'], ['ride out', 'aguantar hasta que pase']
  ].map(([k, es]) => ({ k, es, type: 'phrasal' })),

  // ---------- Slang extra ----------
  ...[
    ['goat', 'G.O.A.T.: el mejor de todos los tiempos'], ['sus', 'sospechoso, raro'], ['bet', 'apostar / (slang) ¡va!, ¡sale!, dalo por hecho'], ['fam', 'familia, compas cercanos'],
    ['squad', 'tu grupo de amigos, la bandita'], ['salty', 'ardido, resentido'], ['extra', 'extra / (slang) exagerado, dramático'], ['woke', 'consciente de injusticias sociales (a veces burlón)'],
    ['drip', 'estilo, ropa cara y con flow'], ['ice', 'hielo / (slang) joyas, diamantes'], ['bands', 'fajos de billetes (de mil dólares)'], ['racks', 'miles de dólares'],
    ['hater', 'envidioso, el que critica todo'], ['clout', 'fama, influencia'], ['cap', 'gorra / (slang) mentira: "that is cap" = eso es mentira'], ['tea', 'té / (slang) chisme: "spill the tea" = suelta el chisme'],
    ['shook', 'en shock, impactado'], ['stan', 'fan obsesivo'], ['simp', 'alguien que se humilla por quien le gusta'], ['thicc', 'con curvas, cuerpo voluptuoso'],
    ['boujee', 'fresa, de gustos caros'], ['turnt', 'prendido, de fiesta, borracho'], ['wifey', 'novia seria / esposa'], ['dawg', 'compa, carnal'],
    ['og', 'veterano, el original, el respetado'], ['fly', 'volar / (slang) que se ve muy bien, con estilo'], ['swag', 'estilo, actitud'], ['bling', 'joyería llamativa'],
    ['grind', 'moler / (slang) chambear duro todos los días'], ['plug', 'enchufe / (slang) el contacto que consigue cosas (a veces drogas)'], ['crib', 'cuna / (slang) casa, depa'], ['whip', 'látigo / (slang) carro de lujo'],
    ['lit', 'prendido, increíble / borracho'], ['high', 'alto / drogado (marihuana) / muy feliz'], ['stoned', 'drogado (marihuana)'], ['wasted', 'muy borracho o drogado'],
    ['tipsy', 'medio borracho, alegre'], ['hangover', 'cruda, resaca'], ['booty', 'trasero, pompas'], ['sexy', 'atractivo, sensual'],
    ['hottie', 'persona muy guapa'], ['ex', 'ex pareja'], ['player', 'jugador / (slang) mujeriego, el que anda con varios'], ['side chick', 'la amante, "la otra"'],
    ['gold digger', 'interesado/a (que busca dinero)'], ['main character', 'protagonista, alguien que se siente el centro'], ['red flag', 'señal de alarma (en una persona o relación)'], ['situationship', 'relación sin etiqueta'],
    ['periodt', 'y punto, se acabó la discusión'], ['slaps', 'está buenísimo (una canción)'], ['vibing', 'disfrutando el ambiente'], ['no shot', '¡ni de chiste! / ¡no puede ser!']
  ].map(([k, es]) => ({ k, es, type: 'slang', w: [k] })),

  // ---------- Groserías (con su fuerza: 🟢 suave · 🟡 media · 🔴 fuerte · ⛔ insulto grave) ----------
  ...[
    [['fuck', 'fucks', 'fucked', 'fuckin', "fuckin'"], 'fuck', '🔴 La grosería más usada. Como verbo: coger/chingar. Como exclamación: ¡carajo!, ¡chingada! "Fuck it" = a la chingada, ya qué.'],
    [['fucking'], 'fucking', '🔴 Intensificador: "pinche", "puto", "jodido". "This fucking car" = este pinche carro. También puede ser "cogiendo".'],
    [["don't give a fuck", "doesn't give a fuck", 'give a fuck', "don't give a shit", 'give a shit', "don't give a damn"], "don't give a fuck", '🔴 "Me vale madres", "me importa un carajo". Con shit es igual de vulgar; con damn es más suave.'],
    [['shut the fuck up', 'stfu'], 'shut the fuck up', '🔴 "Cállate la puta boca", "cierra el hocico". También sorpresa entre amigos: "¡No mames, no puede ser!"'],
    [['fuck around', 'fucking around', 'fuck around and find out'], 'fuck around', '🔴 Hacer tonterías / perder el tiempo. "Fuck around and find out" = "juégale al vivo y vas a ver".'],
    [['kiss my ass'], 'kiss my ass', '🟡 "Bésame el culo", "vete al diablo".'],
    [['pain in the ass'], 'pain in the ass', '🟡 "Una lata", "un dolor de cabeza", alguien muy molesto.'],
    [['fuck you'], 'fuck you', '🔴 Insulto: "vete a la chingada", "jódete".'],
    [['what the fuck', 'wtf'], 'what the fuck', '🔴 "¿Qué carajo?", "¿qué chingados?". WTF es la abreviatura.'],
    [['motherfucker', 'motherfuckers', 'motherfucking'], 'motherfucker', '🔴 "Hijo de su puta madre", "cabrón". Entre amigos en rap puede ser casi cariñoso, pero es muy fuerte.'],
    [['shit', 'shitty', 'shits'], 'shit', '🟡 "Mierda". "Oh shit!" = ¡no manches!, ¡chin! "This is the shit" = esto está buenísimo. "Shitty" = de porquería.'],
    [['bullshit'], 'bullshit', '🟡 "Puras mentiras", "pendejadas". "That\'s bullshit" = eso es mentira / eso es injusto.'],
    [['holy shit'], 'holy shit', '🟡 "¡No mames!", "¡Ay, cabrón!" (sorpresa fuerte).'],
    [['bitch', 'bitches', 'bitchin', "bitchin'"], 'bitch', '🔴 Insulto a una mujer: "perra", "zorra". Entre amigas a veces es de confianza. "Bitching" = quejarse. "Son of a bitch" = hijo de perra.'],
    [['son of a bitch'], 'son of a bitch', '🔴 "Hijo de perra / hijo de puta".'],
    [['ass', 'asses'], 'ass', '🟡 "Culo", "trasero". "Kick ass" = romperla. "Your ass" = tú (despectivo). "Half-assed" = hecho al ahí se va.'],
    [['asshole', 'assholes'], 'asshole', '🔴 "Pendejo", "cabrón", "imbécil" (persona odiosa).'],
    [['dumbass', 'jackass', 'smartass'], 'dumbass', '🟡 dumbass = "pendejo", jackass = "idiota", smartass = "sabelotodo, payaso".'],
    [['badass'], 'badass', '🟢 Positivo: "chingón", "rudo", "muy cool".'],
    [['damn', 'dammit', 'damnit', 'goddamn', 'goddamnit', 'god damn'], 'damn', '🟢🟡 "¡Maldición!", "¡rayos!", "¡chin!". "Damn, she\'s fine" = ¡qué guapa! Goddamn es más fuerte.'],
    [['hell', 'what the hell', 'go to hell', 'hell yeah', 'hell no'], 'hell', '🟢 "Infierno". What the hell = ¿qué demonios? Hell yeah = ¡claro que sí! Hell no = ¡ni loco! Go to hell = vete al diablo.'],
    [['crap', 'crappy'], 'crap', '🟢 "Porquería", "caca". Versión suave de shit.'],
    [['piss', 'pissed', 'pissed off', 'pissing'], 'pissed', '🟡 En EE. UU. "pissed (off)" = encabronado, muy enojado. "Piss" = orinar.'],
    [['dick', 'dicks', 'dickhead'], 'dick', '🔴 "Verga", "pene". Llamar a alguien "dick" = "cabrón, mamón".'],
    [['cock'], 'cock', '🔴 "Verga" (vulgar). También "gallo" o amartillar un arma (cock the gun).'],
    [['pussy'], 'pussy', '🔴 Vulgar: genitales femeninos. Como insulto a un hombre: "marica", "cobarde".'],
    [['balls'], 'balls', '🟡 Pelotas / "huevos": testículos o valentía. "He has balls" = tiene huevos.'],
    [['screw you', 'screwed', 'screw it'], 'screw', '🟡 Screw you = vete al diablo. I\'m screwed = estoy jodido. Screw it = a la goma, ya qué.'],
    [['bastard', 'bastards'], 'bastard', '🟡🔴 "Bastardo", "desgraciado".'],
    [['slut', 'whore', 'hoe', 'hoes', 'thot'], 'slut', '🔴 Insultos machistas para una mujer: "puta", "zorra". "Hoe" y "thot" se oyen mucho en rap.'],
    [['freakin', "freakin'", 'freaking', 'frickin', 'friggin'], 'freaking', '🟢 Eufemismo de "fucking": "pinche" pero suave, apto para la tele.'],
    [['heck', 'dang', 'darn', 'gosh'], 'heck', '🟢 Eufemismos (palabras "limpias"): heck = hell, dang/darn = damn, gosh = God. ("Shoot!" también = shit, pero normalmente shoot es disparar.)'],
    [['bloody'], 'bloody', '🟡 En inglés británico: "pinche", "maldito". En EE. UU. casi solo significa "ensangrentado".'],
    [['nigga', 'niggas', 'nigger'], 'n-word', '⛔ Insulto racial muy grave contra personas negras. En el rap, artistas negros lo usan entre ellos ("nigga") como "carnal". Si no eres una persona negra, NO lo digas nunca, ni cantando: es de las palabras más ofensivas del inglés.'],
    [['faggot', 'fag'], 'f-word (homofóbico)', '⛔ Insulto homofóbico muy grave. Entiéndelo si lo oyes, pero no lo uses.'],
    [['retard', 'retarded'], 'retard', '⛔ Insulto ofensivo hacia personas con discapacidad. Muy mal visto hoy en día.']
  ].map(([w, k, es]) => ({ k, es, type: 'groseria', w }))
];
MORE_EXPRESSIONS.forEach(buildExprRe);
EXPRESSIONS.push(...MORE_EXPRESSIONS);

// ---------- Lección: groserías ----------
LESSONS.splice(LESSONS.findIndex(l => l.id === 'b2-slang') + 1, 0, {
  id: 'b2-groserias', level: 'B2', title: 'Groserías en inglés: qué significan y qué tan fuertes son', focus: 'vocab',
  goal: 'Vas a aprender las groserías más comunes del inglés de EE. UU., qué significan de verdad, qué tan fuertes son y en qué situaciones se usan (y en cuáles nunca).',
  why: 'Las vas a escuchar en canciones, series, películas, en la calle y en el trabajo. Entenderlas evita malentendidos, y saber su fuerza te evita meterte en problemas.',
  intro: { en: "Oh shit, I forgot my wallet! — Damn, dude. Don't worry, I got you.", es: '¡Chin, olvidé mi cartera! — Rayos, güey. No te preocupes, yo te invito.' },
  vocab: [['damn', '¡rayos! / ¡chin! (suave)', 'dam'], ['hell', 'infierno / demonios (suave)', 'jel'], ['crap', 'porquería (suave)', 'krap'], ['shit', 'mierda (media)', 'shit'], ['pissed off', 'encabronado (media)', 'pist of'], ['bullshit', 'puras mentiras (media)', 'búlshit'], ['fuck', 'chingar / carajo (fuerte)', 'fak'], ['asshole', 'pendejo, cabrón (fuerte)', 'ásjoul'], ['bitch', 'perra, zorra (fuerte)', 'bich'], ['freaking', '"pinche" versión suave', 'fríkin']],
  explain: `<p><b>Escala de fuerza</b> (de más suave a más fuerte):</p>
<table class="tbl"><tr><th>Nivel</th><th>Palabras</th><th>¿Dónde se oye?</th></tr>
<tr><td>🟢 Suave</td><td>damn, hell, crap, freaking, badass</td><td>En la tele, entre amigos, a veces en el trabajo</td></tr>
<tr><td>🟡 Media</td><td>shit, ass, pissed off, bullshit, screw you</td><td>Entre amigos, series, canciones</td></tr>
<tr><td>🔴 Fuerte</td><td>fuck, motherfucker, asshole, bitch, dick</td><td>Rap, películas para adultos, peleas</td></tr>
<tr><td>⛔ Insulto grave</td><td>la n-word, insultos homofóbicos o hacia personas con discapacidad</td><td>Nunca los uses</td></tr></table>
<p><b>"Fuck" es la más versátil:</b></p>
<ul><li>Exclamación: <b>Fuck!</b> = ¡carajo!, ¡chingada!</li><li>Intensificador: <b>fucking</b> amazing = chingonsísimo · this <b>fucking</b> traffic = este pinche tráfico</li><li>Indiferencia: <b>Fuck it</b> = a la chingada, ya qué</li><li>Regarla: I <b>fucked up</b> = la cagué</li><li>Insulto: <b>Fuck you</b> = vete a la chingada</li><li>Sorpresa: <b>What the fuck?</b> = ¿qué chingados?</li></ul>
<p><b>Usos positivos que confunden:</b> "This song is <b>the shit</b>" = esta canción está buenísima · "<b>Badass</b>" = chingón · "<b>Hell yeah!</b>" = ¡claro que sí! · "Damn, you look good!" = ¡qué bien te ves!</p>
<p><b>Versiones limpias</b> (para el trabajo o con niños): freaking/frickin' (fucking) · shoot (shit) · darn/dang (damn) · heck (hell) · gosh (God).</p>
<p class="tip">⚠️ <b>La n-word</b> aparece muchísimo en el rap. Es un insulto racial muy grave contra personas negras. Artistas negros la usan entre ellos como "carnal", pero si no eres una persona negra no la digas nunca, ni cantando. Entiéndela, pero no la repitas.</p>
<p class="tip">💼 En el trabajo en EE. UU. decir groserías fuertes puede costarte el empleo. Mejor usa las versiones limpias.</p>`,
  easy: `<p>Las groserías en inglés son como en español: unas son de "confianza" (como "chin" o "no manches") y otras son insultos fuertes (como "hijo de...").</p>
<p>Regla fácil: <b>verde</b> → lo puedes decir casi en cualquier lado. <b>Amarillo</b> → solo con amigos. <b>Rojo</b> → solo entiéndelo, úsalo con mucho cuidado. <b>Prohibido</b> → nunca.</p>`,
  memo: ['Asocia cada grosería con su equivalente mexicano: shit = chin/no manches, fuck = chingar, asshole = pendejo/cabrón.', 'Aprende primero las versiones "limpias" (freaking, darn, shoot, heck): las podrás usar en cualquier lugar.', 'Cuando una canción tenga una grosería, la app la marca en amarillo y te dice su fuerza con un color.'],
  examples: [["I'm so pissed off right now.", 'Estoy bien encabronado ahorita.'], ["That's bullshit, man.", 'Eso es pura mentira, güey.'], ["Holy shit, that was close!", '¡No mames, estuvo cerca!']],
  listen: { text: "Dude, this traffic is freaking insane. We're gonna be so damn late.", q: '¿De qué se queja?', options: ['Del tráfico; van a llegar tarde', 'De su jefe', 'De la comida'], a: 0, note: '"freaking insane" = pinche locura (versión suave). "so damn late" = bien tarde.' },
  speak: ["I'm so pissed off.", "That's bullshit.", 'Hell yeah!'],
  quiz: [
    { q: '"This song is the shit" significa:', options: ['Esta canción está buenísima', 'Esta canción es una porquería', 'Esta canción es aburrida'], a: 0, why: '"The shit" con "the" es positivo.' },
    { q: 'Versión limpia de "fucking":', options: ['freaking', 'shitting', 'damning'], a: 0, why: 'freaking / frickin\' = eufemismo.' },
    { q: '"I\'m pissed off" en EE. UU. significa:', options: ['Estoy muy enojado', 'Estoy borracho', 'Estoy orinando'], a: 0, why: 'En EE. UU. pissed = enojado. En UK = borracho.' },
    { q: '"Badass" es:', options: ['Positivo: chingón, rudo', 'Un insulto fuerte', 'Trasero malo'], a: 0, why: 'Badass es un halago.' },
    { q: '¿Qué palabra nunca deberías usar?', options: ['La n-word', 'damn', 'crap'], a: 0, why: 'Es un insulto racial muy grave.' }
  ]
});

GUIDE.push({ cat: 'Consejos', t: 'Groserías en inglés: qué tan fuertes son', b: `<p>🟢 <b>Suaves</b>: damn, hell, crap, freaking, badass, heck, darn.<br>🟡 <b>Medias</b>: shit, ass, pissed off, bullshit, screw you, balls.<br>🔴 <b>Fuertes</b>: fuck, motherfucker, asshole, bitch, dick, pussy.<br>⛔ <b>Insultos graves</b>: la n-word, insultos homofóbicos ("fag") o contra personas con discapacidad ("retard"). Nunca los uses.</p><p><b>Positivos que confunden</b>: "the shit" (lo mejor), "badass" (chingón), "hell yeah" (¡claro!), "fucking amazing" (increíble).</p><p><b>Diferencias de país</b>: "pissed" = enojado en EE. UU., borracho en UK. "Bloody" = grosería en UK, normal en EE. UU.</p><p>Para practicar, ve a la lección <b>"Groserías en inglés"</b> (nivel B2).</p>` });
