// FanDNA - EuroLeague (W5, the fifth World-group league). Research-grounded enduring-soul teamDims
// (The Twenty Souls of the EuroLeague dossier). EuroLeague rides the FULL 7-slot shared spine; the
// spine tables + module whitelist live in euroleague-spine.js; teamDims and the module come from here.
// Sport key EL. 20 clubs (2026-27 field). Fingerprint sport; no club owns a sole-max cell by design.
// Perishables (titles, last title, reigning) web-verified at build 27 Aug 2026: Olympiacos reigning
// (4th, 2026); Real 11; Panathinaikos 7; Maccabi 5; Fenerbahce 2 (2017, 2025); Efes 2; Barca 2;
// Virtus 2; Zalgiris 1; Partizan 1 (1992); Milano 3 European Cups (old era, none modern).

const moduleQuestions = [
  { "id": "el_q1", "type": "binary", "phase": "The fine print",
    "question": "When something you built finally comes good, the part that means the most to you is...",
    "left": "You grew it yourself, from raw beginnings nobody else believed in. Nothing beats watching it become what it was meant to be.",
    "right": "You saw exactly what was missing and went and got it. I'll take the finished article over a promising maybe." },
  { "id": "el_q2", "type": "binary", "phase": "The fine print",
    "question": "When the work is going well, you would rather...",
    "left": "Be seen doing it, out loud, in the middle of the noise.",
    "right": "Keep your head down and let the result do the talking." },
  { "id": "el_q3", "type": "binary", "phase": "The fine print",
    "question": "The places where you do your best work are the ones where...",
    "left": "One person with a clear vision drives the whole thing.",
    "right": "No single person is ever bigger than the thing itself." },
  { "id": "el_q4", "type": "binary", "phase": "What it comes down to",
    "question": "Somewhere in you, you have always felt more like...",
    "left": "One of the establishment, and settled being there.",
    "right": "An outsider who still has something to prove." }
];

const scoring = {
  "el_q1": {
    "left":  { "RMA": 2, "BAR": 2, "BAS": 2, "VAL": 2, "PTZ": 2, "ASV": 2, "MAC": 2, "ZAL": 2 },
    "right": { "OLY": 2, "PAN": 2, "FEN": 2, "EFS": 2, "BES": 2, "RED": 2, "MIL": 2, "VIR": 2, "BAY": 2, "PRS": 2, "HAP": 2, "DUB": 2 }
  },
  "el_q2": {
    "left":  { "BAR": 2, "OLY": 2, "PAN": 2, "FEN": 2, "BES": 2, "PTZ": 2, "RED": 2, "PRS": 2, "HAP": 2, "DUB": 2 },
    "right": { "RMA": 2, "BAS": 2, "VAL": 2, "EFS": 2, "MIL": 2, "VIR": 2, "BAY": 2, "ASV": 2, "MAC": 2, "ZAL": 2 }
  },
  "el_q3": {
    "left":  { "BAS": 2, "VAL": 2, "OLY": 2, "PAN": 2, "EFS": 2, "MIL": 2, "VIR": 2, "ASV": 2, "PRS": 2, "DUB": 2 },
    "right": { "RMA": 2, "BAR": 2, "FEN": 2, "BES": 2, "PTZ": 2, "RED": 2, "BAY": 2, "HAP": 2, "MAC": 2, "ZAL": 2 }
  },
  "el_q4": {
    "left":  { "RMA": 2, "PAN": 2, "FEN": 2, "EFS": 2, "RED": 2, "MIL": 2, "BAY": 2, "ASV": 2, "MAC": 2 },
    "right": { "BAR": 2, "BAS": 2, "VAL": 2, "OLY": 2, "BES": 2, "PTZ": 2, "VIR": 2, "PRS": 2, "HAP": 2, "ZAL": 2, "DUB": 2 }
  }
};

const teamDims = {
  "RMA": { "loyalty": 8, "emotion": 5, "ambition": 10, "process": 7, "community": 4,  "chaos": 2, "rootedness": 9 },
  "BAR": { "loyalty": 8, "emotion": 7, "ambition": 7,  "process": 5, "community": 10, "chaos": 4, "rootedness": 8 },
  "BAS": { "loyalty": 6, "emotion": 4, "ambition": 5,  "process": 10,"community": 5,  "chaos": 3, "rootedness": 8 },
  "VAL": { "loyalty": 6, "emotion": 4, "ambition": 6,  "process": 8, "community": 8,  "chaos": 2, "rootedness": 5 },
  "OLY": { "loyalty": 9, "emotion": 9, "ambition": 9,  "process": 8, "community": 9,  "chaos": 5, "rootedness": 7 },
  "PAN": { "loyalty": 8, "emotion": 8, "ambition": 9,  "process": 3, "community": 5,  "chaos": 8, "rootedness": 9 },
  "FEN": { "loyalty": 6, "emotion": 8, "ambition": 9,  "process": 8, "community": 5,  "chaos": 4, "rootedness": 5 },
  "EFS": { "loyalty": 6, "emotion": 6, "ambition": 9,  "process": 9, "community": 5,  "chaos": 3, "rootedness": 8 },
  "BES": { "loyalty": 6, "emotion": 7, "ambition": 4,  "process": 3, "community": 8,  "chaos": 8, "rootedness": 5 },
  "PTZ": { "loyalty": 7, "emotion": 9, "ambition": 5,  "process": 6, "community": 8,  "chaos": 9, "rootedness": 8 },
  "RED": { "loyalty": 8, "emotion": 8, "ambition": 8,  "process": 5, "community": 7,  "chaos": 6, "rootedness": 8 },
  "MIL": { "loyalty": 4, "emotion": 4, "ambition": 9,  "process": 9, "community": 3,  "chaos": 2, "rootedness": 8 },
  "VIR": { "loyalty": 7, "emotion": 7, "ambition": 5,  "process": 5, "community": 7,  "chaos": 4, "rootedness": 10 },
  "BAY": { "loyalty": 4, "emotion": 3, "ambition": 8,  "process": 8, "community": 4,  "chaos": 2, "rootedness": 4 },
  "ASV": { "loyalty": 7, "emotion": 5, "ambition": 8,  "process": 7, "community": 5,  "chaos": 6, "rootedness": 7 },
  "PRS": { "loyalty": 3, "emotion": 6, "ambition": 9,  "process": 7, "community": 4,  "chaos": 8, "rootedness": 2 },
  "HAP": { "loyalty": 9, "emotion": 8, "ambition": 5,  "process": 4, "community": 10, "chaos": 7, "rootedness": 7 },
  "MAC": { "loyalty": 9, "emotion": 7, "ambition": 9,  "process": 8, "community": 7,  "chaos": 3, "rootedness": 9 },
  "ZAL": { "loyalty": 10,"emotion": 8, "ambition": 5,  "process": 5, "community": 9,  "chaos": 5, "rootedness": 10 },
  "DUB": { "loyalty": 2, "emotion": 4, "ambition": 10, "process": 8, "community": 2,  "chaos": 5, "rootedness": 1 }
};

const teams = {
  "RMA": { name: "Real Madrid", emoji: "👑", color: "#5B6DAD", code3: "RMA", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You were built to win, and you know it.",
    desc: "You carry the expectation of winning as though it were ordinary, because for you it has been. You do not perform certainty; you simply hold it, and the room adjusts. When you lose you are affronted, not broken, and you come back cold." },
  "BAR": { name: "FC Barcelona", emoji: "🔵", color: "#A50044", code3: "BAR", kitType: "duo", secondaryColor: "#004D98",
    tagline: "You belong to something bigger than the scoreline.",
    desc: "You are loyal to a cause first and a result second, and the cause is identity itself. You wear belonging in the open, feel every slight against it, and would rather lose as yourself than win as someone else. The pride is real even in the lean years." },
  "BAS": { name: "Baskonia", emoji: "🛡️", color: "#001E62", code3: "BAS", kitType: "duo", secondaryColor: "#D81E05",
    tagline: "You beat bigger rooms with a better plan.",
    desc: "You do not have the biggest budget and you have stopped minding, because you win on judgment. You see value others miss, build patiently, and take quiet pride in being right before everyone else catches up. Method is your pride, not a means to it." },
  "VAL": { name: "Valencia Basket", emoji: "🟠", color: "#EE7F00", code3: "VAL", kitType: "duo", secondaryColor: "#111111",
    tagline: "You built it right, and now you're ready.",
    desc: "You are rooted in your own place and your own people, and you have done the unglamorous work for years. You are understated by nature, community before spectacle, and you are only now letting yourself want the big prize out loud." },
  "OLY": { name: "Olympiacos", emoji: "🔴", color: "#DA1A32", code3: "OLY", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You came up hard, and now you rule.",
    desc: "You carry working-class pride like a chip you never quite put down, and you have turned it into power. You feel everything loudly, give total devotion, and you have learned to win without losing the edge that got you here." },
  "PAN": { name: "Panathinaikos", emoji: "🟢", color: "#007A3D", code3: "PAN", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You were born to this, and you'll never be at peace with it.",
    desc: "You come from the establishment and you know your worth, but you are never settled inside it. You run hot, you are proud to the point of turbulence, and your history sits on your shoulders as both crown and weight." },
  "FEN": { name: "Fenerbahçe", emoji: "💛", color: "#FFED00", code3: "FEN", kitType: "duo", secondaryColor: "#0A1E3C",
    tagline: "You wanted it badly enough to go and buy it.",
    desc: "You are driven and unembarrassed about it. You back your ambition with everything you have, you carry a vast, loud following, and your glory is recent enough that you are still hungry rather than sated." },
  "EFS": { name: "Anadolu Efes", emoji: "🔷", color: "#0A2C5C", code3: "EFS", kitType: "duo", secondaryColor: "#E30613",
    tagline: "You win by method, and you keep the noise out of it.",
    desc: "You are ambitious but composed, a builder who trusts the process over the moment. You do not need to be seen; you need to be right, repeatedly, and the trophies follow the discipline." },
  "BES": { name: "Beşiktaş", emoji: "🦅", color: "#111111", code3: "BES", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You've never needed permission to belong.",
    desc: "You are irreverent by instinct and you define yourself against the powerful. You feel your community fiercely, you carry a rebel streak, and you are back among the giants with something to prove rather than defend." },
  "PTZ": { name: "Partizan", emoji: "⚫", color: "#151515", code3: "PTZ", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You run on noise and nerve, not money.",
    desc: "You feel everything at full volume and you thrive on it. You are romantic and volatile, you grow your own legends rather than buy them, and you would rather be loved and loud than safe and quiet." },
  "RED": { name: "Crvena zvezda", emoji: "⭐", color: "#CE1126", code3: "RED", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You carry the weight of a big name, still chasing the proof.",
    desc: "You are proud, loyal and loud, backed by size and expectation, and you burn to turn that weight into a crown you have never quite held in Europe. The passion is real; so is the hunger." },
  "MIL": { name: "Olimpia Milano", emoji: "🔴", color: "#E2001A", code3: "MIL", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You buy the best and expect it to work.",
    desc: "You are ambitious and exacting, drawn to elegance and the finished article, and you keep your emotion behind glass. You assemble the very best and measure yourself against Europe, even when the modern crown stays out of reach." },
  "VIR": { name: "Virtus Bologna", emoji: "⚫", color: "#1A1A1A", code3: "VIR", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You are your place, more than any trophy.",
    desc: "You are rooted so deep that the city and the club are one thing. You value tradition and the local over the flashy and the bought, you feel the game as heritage, and your pride is in belonging, not in noise." },
  "BAY": { name: "Bayern Munich", emoji: "🔺", color: "#DC052D", code3: "BAY", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You back it with everything and expect the return.",
    desc: "You are ambitious and methodical, an institution applying its full weight to the task, and you keep the feeling low and the operation high. Success is a target to be resourced and hit, cleanly." },
  "ASV": { name: "LDLC ASVEL", emoji: "🦁", color: "#111111", code3: "ASV", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You rule at home and reach for tomorrow.",
    desc: "You are ambitious and forward-looking, a builder of academies and futures, and you carry the restlessness of a project mid-transition. You dominate your own country and keep chasing a European place to match the vision." },
  "PRS": { name: "Paris Basketball", emoji: "🗼", color: "#1A2A5E", code3: "PRS", kitType: "duo", secondaryColor: "#E30613",
    tagline: "You didn't wait for history. You built the show.",
    desc: "You are pure forward momentum, all ambition and appetite, unbothered by the absence of a past. You want the light, you move fast, you disrupt, and you would rather make the future than inherit anyone's rules." },
  "HAP": { name: "Hapoel Tel Aviv", emoji: "🔴", color: "#E4002B", code3: "HAP", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You belong to the people, and you fight from below.",
    desc: "You are community before everything, owned by your own and proud of it, and you define yourself against the establishment on purpose. You feel it all, you carry a cause on your chest, and you are rising with something to prove." },
  "MAC": { name: "Maccabi Tel Aviv", emoji: "💛", color: "#FFD700", code3: "MAC", kitType: "duo", secondaryColor: "#004B87",
    tagline: "You are the standard everyone else is measured against.",
    desc: "You are the establishment made devotional, a winning institution that a whole country claims. You are ambitious, professional and deeply rooted, and you wear your history as a mainstream birthright rather than a rebellion." },
  "ZAL": { name: "Žalgiris", emoji: "💚", color: "#007A33", code3: "ZAL", kitType: "duo", secondaryColor: "#FFFFFF",
    tagline: "You are a whole country's heart, worn as a jersey.",
    desc: "You are devotion itself, rooted so deep that you carry a nation, not a city. You compete on meaning and passion rather than money, you never forget where you come from, and being the beloved underdog is not a wound but an identity." },
  "DUB": { name: "Dubai Basketball", emoji: "🟤", color: "#6B4423", code3: "DUB", kitType: "duo", secondaryColor: "#111111",
    tagline: "You have no past, and unlimited appetite for the future.",
    desc: "You are ambition with the brakes off, a from-scratch project built on resource and intent rather than roots. You are new, unattached, and unbothered by the absence of a story, because you are busy building one." }
};

const archetypes = {
  "RMA": "The Sovereign", "BAR": "The Standard-Bearer", "BAS": "The Craftsman", "VAL": "The Homegrown",
  "OLY": "The Reigning Red", "PAN": "The Old Green", "FEN": "The Ascendant", "EFS": "The Machine",
  "BES": "The Outsider", "PTZ": "The People's Black-and-White", "RED": "The Establishment Red",
  "MIL": "The Financier", "VIR": "Basket City's Soul", "BAY": "The Corporation", "ASV": "The Vision Project",
  "PRS": "The Disruptor", "HAP": "The Red Cause", "MAC": "The Yellow Institution", "ZAL": "The Nation in Green",
  "DUB": "The Experiment"
};

const teamTextColors = {
  "RMA": "#9AA6D2", "BAR": "#D96A93", "BAS": "#6E7FB8", "VAL": "#F4A94D", "OLY": "#E86B7C", "PAN": "#4DA97D",
  "FEN": "#FFF37A", "EFS": "#6E8AC0", "BES": "#B8BCC2", "PTZ": "#B8BCC2", "RED": "#E56575", "MIL": "#EF6474",
  "VIR": "#B8BCC2", "BAY": "#E9657C", "ASV": "#C9A24B", "PRS": "#6273A8", "HAP": "#EF6478", "MAC": "#FFE566",
  "ZAL": "#4DA877", "DUB": "#A47C55"
};

const CARD_BADGES = {
  "RMA": "👑", "BAR": "🔵", "BAS": "🛡️", "VAL": "🟠", "OLY": "🔴", "PAN": "🟢", "FEN": "💛", "EFS": "🔷",
  "BES": "🦅", "PTZ": "⚫", "RED": "⭐", "MIL": "🔴", "VIR": "⚫", "BAY": "🔺", "ASV": "🦁", "PRS": "🗼",
  "HAP": "🔴", "MAC": "💛", "ZAL": "💚", "DUB": "🟤"
};

const badgeUrls = {};

const milestones = {
  "RMA": ["The most decorated club in European basketball history, with eleven titles between 1964 and 2023.", "Runners-up in 2026, beaten in the Athens final by Olympiacos.", "The Pablo Laso era delivered three modern crowns on defensive grit.", "Los Blancos: the institution that expects to win as a baseline."],
  "BAR": ["Two-time European champions (2003 and 2010) and among the most-supported clubs in the game.", "Tied to Catalan identity as much as to any trophy: més que un club.", "The great rival to Real Madrid in an El Clásico that runs on the court too.", "Carried by belonging through a spell chasing its historic rival."],
  "BAS": ["A 2001 European final and a wall of Spanish silverware for a small Basque city.", "A byword for scouting and development, a production line of NBA talent.", "Owned and run as a model club that competes with giants on judgment.", "Four Spanish Championships and the 1996 Saporta Cup."],
  "VAL": ["The most decorated club in EuroCup history, with four titles.", "A Spanish league in 2016-17 and the L'Alqueria academy behind it.", "Family-owned and community-rooted, now backed by a new arena.", "Reached the club's first-ever EuroLeague Final Four in 2026."],
  "OLY": ["Reigning EuroLeague champions, a fourth title won in Athens in 2026.", "Back-to-back crowns in 2012 and 2013, and a first in 1997.", "The first regular-season top seed ever to win the title.", "Gate 7 and the port of Piraeus: working-class pride turned power."],
  "PAN": ["The modern era's most decorated club, with seven European crowns.", "Most recent title in 2024, ending a thirteen-year wait.", "Gate 13 and old-Athens establishment, magnificent and mutinous.", "A history worn as both crown and weight."],
  "FEN": ["Two-time European champions (2017, the first for Turkey, and 2025).", "Defending champions entering the 2025-26 season.", "Transformed into a powerhouse on deep financial backing.", "A vast, loud following on Istanbul's Asian side."],
  "EFS": ["Back-to-back European champions in 2021 and 2022.", "The most domestic silverware in Turkey, sixteen leagues.", "A corporate winning-machine on Istanbul's European side.", "Built on method and composure over spectacle."],
  "BES": ["Two Turkish championships and the 2012 EuroChallenge.", "A famous Allen Iverson season in 2010-11.", "Back in the EuroLeague for the first time since 2012-13.", "The Çarşı club: working-class, irreverent, defined against the powerful."],
  "PTZ": ["European champions in 1992 under Željko Obradović.", "Final Fours in 1998 and 2010 and a long NBA-talent pipeline.", "The Grobari: possibly the loudest support in Europe.", "A romantic, volatile club that grows its own legends."],
  "RED": ["The 1974 Cup Winners' Cup and a modern European resurgence.", "The Delije and the weight of a big Belgrade institution.", "Sustained Serbian dominance without a EuroLeague crown yet.", "Passion and size, still chasing the continental proof."],
  "MIL": ["Three European Cups in the old era: 1966, 1987 and 1988.", "The record thirty Italian championships.", "Owned by Giorgio Armani, cosmopolitan and star-driven.", "The financial capital's club, still chasing a modern EuroLeague."],
  "VIR": ["Two European crowns (1998 and 2001) and sixteen Italian titles.", "The black V's of Bologna, Italy's Basket City, since 1929.", "Deep local identity and tactical tradition over spectacle.", "A genuine European champion by pedigree, romantic to the core."],
  "BAY": ["Seven German championships and a 2010s reboot into a EuroLeague regular.", "A first Final Four in 2024.", "The football giant's basketball arm, backed by the institution.", "Ambitious and professionalised, a top-down project."],
  "ASV": ["France's most decorated club, with a record of French titles.", "Owned by Tony Parker, who now also coaches the side.", "An academy and an NBA-Europe vision driving the project.", "Domestic royalty still searching for European nights."],
  "PRS": ["A record 22-1 EuroCup title in 2024, then a EuroLeague debut that eliminated Real Madrid.", "Founded in 2018 and risen at extraordinary speed.", "Plays at the Adidas Arena, built for the 2024 Olympics.", "The City of Light's entertainment disruptor."],
  "HAP": ["EuroCup winners in 2024-25 and back among Europe's best.", "The workers' club, fan-owned and proud of it.", "The red counter-identity of Tel Aviv, defined against the establishment.", "A rising underdog carrying a cause."],
  "MAC": ["The most decorated non-European club, with five European crowns (1977-2014).", "Total domestic dominance, including twenty-three straight titles.", "The yellow national institution, a near-permanent EuroLeague fixture.", "A winning machine that a whole country claims."],
  "ZAL": ["European champions in 1999 and the pride of Lithuanian basketball.", "The 1980s stand against CSKA Moscow, Sabonis and all.", "Twenty-five Lithuanian titles and a nation's devotion.", "The green heart of the Mecca of European basketball."],
  "DUB": ["Founded in 2023, a five-year EuroLeague wildcard from 2025.", "Plays at the 17,000-seat Coca-Cola Arena.", "Not European and playing no domestic league: a pure project.", "A strong debut season, just outside the playoffs."]
};

const vitalStats = {
  "RMA": { founded: 1931, arena: "WiZink Center", city: "Madrid", colours: "White", titles: "Eleven (1964-2023)", domestic: "Record Spanish champions", lastTitle: "2023" },
  "BAR": { founded: 1926, arena: "Palau Blaugrana", city: "Barcelona", colours: "Blue and garnet", titles: "Two (2003, 2010)", domestic: "Multiple Spanish titles", lastTitle: "2010" },
  "BAS": { founded: 1959, arena: "Fernando Buesa Arena", city: "Vitoria-Gasteiz", colours: "Navy, red and white", titles: "None yet", domestic: "Four Spanish titles" },
  "VAL": { founded: 1986, arena: "Roig Arena", city: "València", colours: "Orange and black", titles: "None yet", domestic: "One Spanish title, four EuroCups" },
  "OLY": { founded: 1931, arena: "Peace and Friendship Stadium", city: "Piraeus", colours: "Red and white", titles: "Four (1997, 2012, 2013, 2026)", domestic: "Multiple Greek titles", lastTitle: "2026" },
  "PAN": { founded: 1922, arena: "Telekom Center Athens", city: "Athens", colours: "Green and white", titles: "Seven (1996-2024)", domestic: "Record Greek champions", lastTitle: "2024" },
  "FEN": { founded: 1913, arena: "Ülker Sports Arena", city: "Istanbul", colours: "Yellow and navy", titles: "Two (2017, 2025)", domestic: "Multiple Turkish titles", lastTitle: "2025" },
  "EFS": { founded: 1976, arena: "Basketball Development Center", city: "Istanbul", colours: "Navy, white and red", titles: "Two (2021, 2022)", domestic: "Sixteen Turkish titles", lastTitle: "2022" },
  "BES": { founded: 1933, arena: "BJK Akatlar Arena", city: "Istanbul", colours: "Black and white", titles: "None yet", domestic: "Two Turkish titles" },
  "PTZ": { founded: 1945, arena: "Belgrade Arena", city: "Belgrade", colours: "Black and white", titles: "One (1992)", domestic: "Multiple Serbian titles", lastTitle: "1992" },
  "RED": { founded: 1945, arena: "Aleksandar Nikolić Hall", city: "Belgrade", colours: "Red and white", titles: "None yet", domestic: "Multiple Serbian titles" },
  "MIL": { founded: 1936, arena: "Unipol Forum", city: "Milan", colours: "Red and white", titles: "Three European Cups (1966-1988)", domestic: "Record thirty Italian titles", lastTitle: "1988" },
  "VIR": { founded: 1929, arena: "Virtus Segafredo Arena", city: "Bologna", colours: "Black and white", titles: "Two (1998, 2001)", domestic: "Sixteen Italian titles", lastTitle: "2001" },
  "BAY": { founded: 1946, arena: "BMW Park", city: "Munich", colours: "Red and white", titles: "None yet", domestic: "Seven German titles" },
  "ASV": { founded: 1948, arena: "LDLC Arena", city: "Villeurbanne", colours: "Black and white", titles: "None yet", domestic: "Record French champions (21)" },
  "PRS": { founded: 2018, arena: "Adidas Arena", city: "Paris", colours: "Navy and red", titles: "None yet", domestic: "EuroCup champions 2024" },
  "HAP": { founded: 1935, arena: "Shlomo Group Arena", city: "Tel Aviv", colours: "Red and white", titles: "None yet", domestic: "EuroCup champions 2025" },
  "MAC": { founded: 1932, arena: "Menora Mivtachim Arena", city: "Tel Aviv", colours: "Yellow and blue", titles: "Five (1977-2014)", domestic: "Record Israeli champions", lastTitle: "2014" },
  "ZAL": { founded: 1944, arena: "Žalgiris Arena", city: "Kaunas", colours: "Green and white", titles: "One (1999)", domestic: "Twenty-five Lithuanian titles", lastTitle: "1999" },
  "DUB": { founded: 2023, arena: "Coca-Cola Arena", city: "Dubai", colours: "Brown, black and white", titles: "None yet", domestic: "None (founded 2023)" }
};

export { moduleQuestions, teams, archetypes, teamTextColors, milestones, vitalStats, scoring, teamDims, CARD_BADGES, badgeUrls };
