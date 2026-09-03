// FanDNA - Top 14 (French rugby union). World #4, on the shared cross-sport SPINE (Option B),
// the soccer standard: it scores S6 (way-to-the-top) and S7 (position), and its module carries the
// four spine-orthogonal axes that survived a full core+instincts de-duplication (talent source,
// the circus around a passion, belonging character, reverence-vs-celebration). teamDims + the module
// live here; the spine tables + module whitelist live in top14-spine.js. Grounded in the deep-sourced
// souls dossier (fandna-top14-souls-v2). Perishable facts (titles, finals) web-verified at build.

const moduleQuestions = [
  {
    "id": "top14_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "When you put a group together, who do you want in it?",
    "options": [
      { "label": "The people I came up with. I'd back someone I've known from the start over a ready-made name from outside.", "value": "A" },
      { "label": "The best there is. If I want the best, I go and get the best.", "value": "B" },
      { "label": "The hungriest. Give me heart and drive over a polished record.", "value": "C" },
      { "label": "Whoever I rate, in or out of fashion. I trust my own eye over the consensus.", "value": "D" }
    ]
  },
  {
    "id": "top14_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "There's always noise and drama around anything people care about. Where are you in it?",
    "options": [
      { "label": "Stirring it up. A bit of provocation keeps the whole thing alive.", "value": "A" },
      { "label": "Cutting through it. I'd lose the circus and let the real thing speak.", "value": "B" },
      { "label": "Loving it. The bigger and louder the show, the better.", "value": "C" },
      { "label": "Tuning it out. I just quietly show up, no need for the theatre.", "value": "D" }
    ]
  },
  {
    "id": "top14_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "What kind of thing would you most want to be part of?",
    "options": [
      { "label": "Something people are wild about. Full of passion, noise and colour.", "value": "A" },
      { "label": "Something honest and unpretentious. No fuss, no airs, just real.", "value": "B" },
      { "label": "Somewhere with a bit of glamour. Money, style, a modern sheen.", "value": "C" },
      { "label": "A big, established name. Something with real weight and history behind it.", "value": "D" }
    ]
  },
  {
    "id": "top14_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "Deep down, what does the thing you love most feel like to you?",
    "options": [
      { "label": "A calling. Something almost sacred, that I treat with real reverence.", "value": "A" },
      { "label": "A celebration. A joyful, colourful thing I throw myself into.", "value": "B" },
      { "label": "A cause. Something I burn for, all or nothing, no half measures.", "value": "C" },
      { "label": "A project. Something modern and ambitious I'm helping to build.", "value": "D" }
    ]
  }
];

const teams = {
  "TLS": {
    "name": "Stade Toulousain", "emoji": "\u2b50", "color": "#E01A22", "code3": "TLS", "kitType": "duo", "secondaryColor": "#111111",
    "tagline": "Twenty-five titles and a way of playing all your own, because winning here was never chased, it was simply expected.",
    "desc": "You are the standard everyone else measures themselves against, and you carry it lightly. Winning isn't something you chase, it's woven into who you are, assumed rather than hoped for. What sets you apart is that you built it yourself, an academy that turns your own kids into the best in the world and a fast, daring style that could only be yours. You're deeply rooted in a place where what you do is close to a religion, and you'd never dream of buying what you can grow. Others find your calm almost arrogant. You'd say you simply know what you are.",
  },
  "RCT": {
    "name": "RC Toulon", "emoji": "\u2693", "color": "#D2001F", "code3": "RCT", "kitType": "duo", "secondaryColor": "#111111",
    "tagline": "A band of superstars in a working port, built to win now and to be watched while doing it.",
    "desc": "You are the showman with a chequebook, the one who goes and gets the best and worries about the rest later. When you want something you buy it, the biggest names in the world, and you're not shy about the spectacle that comes with them. You live for the win in front of you, not some patient ten-year plan, and you'd rather blaze bright than build slow. Your home is a blue-collar naval town that roars for you like nowhere else. Critics call you a team that bought its glory. You'd say the trophies don't ask how they arrived.",
  },
  "UBB": {
    "name": "Union Bordeaux B\u00e8gles", "emoji": "\ud83c\udf77", "color": "#6E2639", "code3": "UBB", "kitType": "duo", "secondaryColor": "#FFFFFF",
    "tagline": "The most thrilling attack in Europe and the biggest crowd on the continent, built from nothing in a football city.",
    "desc": "You are the exhilarating newcomer who arrived and made everyone watch. You play with speed and daring, an attack that leaves people breathless, and you did it in a place that was never supposed to be yours, a football city you turned into your own. You feel it all at full volume, and so does the enormous crowd you've gathered, the biggest in European rugby. You're young and still building, chasing the one prize that's slipped your grasp at home even as you conquered the continent. You'd tear it down and start again to get there. Half the fun, for you, is the noise and the joy of it.",
  },
  "LAR": {
    "name": "Stade Rochelais", "emoji": "\ud83c\udf0a", "color": "#FFD200", "code3": "LAR", "kitType": "duo", "secondaryColor": "#111111",
    "tagline": "A modest coastal town that turned relentless graft into back-to-back European crowns, and never once stopped selling out.",
    "desc": "You are the underdog who did it the hard way and stayed humble about it. You come from a modest Atlantic port that nobody expected much from, and you turned commitment, solidarity and sheer relentlessness into two European crowns. The bond with your town is total, the whole place turning yellow and black on match weekends, more than a hundred sellouts in a row. You don't chase the spotlight or make noise. You just show up, dig in and refuse to fold, and you treat the whole thing with a quiet, near-sacred seriousness. Humility isn't a pose for you, it's the point.",
  },
  "ASM": {
    "name": "ASM Clermont Auvergne", "emoji": "\ud83d\udc9b", "color": "#FFD100", "code3": "ASM", "kitType": "duo", "secondaryColor": "#0A2C6E",
    "tagline": "Ten lost finals, a faith that never broke, and a Yellow Army that loved you long before there was anything to win.",
    "desc": "You are the purest devotion in the game, the one who loved through heartbreak and never once wavered. You lost final after final, ten of them, three in a row, and still your Yellow Army filled the ground every week and sang you on. When the win finally came, in your hundredth year, it meant more than any easy triumph ever could, because you'd earned that loyalty through the pain rather than the glory. Your roots run down into a company town and its factory, and you feel every result in your bones. You wouldn't swap a single one of those hard years for a colder, easier road.",
  },
  "SFP": {
    "name": "Stade Fran\u00e7ais Paris", "emoji": "\ud83c\udf38", "color": "#E6007E", "code3": "SFP", "kitType": "duo", "secondaryColor": "#FFFFFF",
    "tagline": "Pink shirts, nude calendars and Madonna at the ground, the great showman who dragged rugby into the spotlight.",
    "desc": "You are rugby's showman and its provocateur, the one who was never going to play it safe or quiet. You turned the game into theatre, the shocking pink shirts, the calendars, the pop stars, the record crowds, an art-and-culture identity that scandalised every buttoned-up club around you. You provoke on purpose, because a bit of noise keeps the whole thing alive, and you'd rather be talked about than tidy. You're a metropolitan creature, not a country one, drawn to the bright lights and the big statement. Some accused you of betraying the spirit of the game. You'd say you gave it a spark it badly needed.",
  },
  "R92": {
    "name": "Racing 92", "emoji": "\ud83d\udc8e", "color": "#5BC2E7", "code3": "R92", "kitType": "duo", "secondaryColor": "#FFFFFF",
    "tagline": "Champagne on the pitch and superstars in the side, Parisian money and chic in a space-age arena.",
    "desc": "You are the glamour and the money, the one who does everything in style and makes no apology for it. From the champagne-on-the-pitch decadents of old to the modern star-signing, wine-cellar-in-the-training-ground operation, you've always been about wealth and chic and being seen doing it well. You go and buy the best, the biggest names in the world, and house them somewhere futuristic and gleaming. You're a Parisian creature through and through, drawn to the finest of everything, ambitious and modern and a little decadent. You're not the club of deep roots and folk songs. You're the club of the good life, and you wear it lightly.",
  },
  "ABR": {
    "name": "Aviron Bayonnais", "emoji": "\ud83c\udf89", "color": "#009EE0", "code3": "ABR", "kitType": "duo", "secondaryColor": "#FFFFFF",
    "tagline": "The club that founded its city's festival, deeply Basque, fervent and sold out through every high and low.",
    "desc": "You are the festival and the fervour, the beating Basque heart of your town. Your sky blue and white is the colour of the sea and the sky, your anthem is sung across the whole city, and the famous festival that draws millions was founded by your own sportsmen. You feel it all, joyfully and out loud, and your support stays sold out through relegations and comebacks alike, faithful without conditions. You're not chasing glamour or the spotlight. You just show up, quietly devoted underneath all the colour, and throw yourself into the celebration of it. Belonging, for you, is the whole point.",
  },
  "PAU": {
    "name": "Section Paloise", "emoji": "\u26f0\ufe0f", "color": "#009639", "code3": "PAU", "kitType": "duo", "secondaryColor": "#FFFFFF",
    "tagline": "The proud symbol of B\u00e9arn, its anthem sung acapella by the whole ground, faithful, resilient, quietly sure of itself.",
    "desc": "You are the quiet pride of a proud region, rooted so deep you never needed to look elsewhere. You're the symbol of B\u00e9arn, not Basque, your anthem sung acapella by the whole ground in your own tongue, invoking the mountains and the old kings. You've a real tradition of raising your own and a faithful, resilient support that stays whatever the season brings. You don't burn or provoke or chase the lights. You carry it with a solemn, understated pride, treating what you love as close to sacred, and you feel most yourself exactly where you're from. Others move on. You put down roots and stay.",
  },
  "USP": {
    "name": "USA Perpignan", "emoji": "\ud83d\udd25", "color": "#B01116", "code3": "USP", "kitType": "duo", "secondaryColor": "#F2A900",
    "tagline": "French Catalonia in blood red and gold, all pride, fight and furia, burning just as bright in the hard years.",
    "desc": "You are the fire, the incandescent Catalan heart in blood red and gold. Pride, fight and furia are your whole language, a feverish, unmatched passion for your region's colours that outsiders can't quite fathom. You feel everything at maximum, and the intensity doesn't dim when the results do, burning just as fiercely through the lean years as the good ones. You're a former giant who's known the heights and the depths and stayed exactly as fervent throughout. You don't do half measures or quiet devotion. You do all or nothing, a cause you'd give everything to, right up against the Spanish border where the whole town lives and dies with you.",
  },
  "CAS": {
    "name": "Castres Olympique", "emoji": "\u2699\ufe0f", "color": "#0033A0", "code3": "CAS", "kitType": "duo", "secondaryColor": "#FFFFFF",
    "tagline": "A small Occitan town that keeps beating the giants, faithful to its roots, quietly efficient, feared at home.",
    "desc": "You are the blue-collar giant-killer, the small town that keeps punching up and winning. You've no big budget and no glamour, just a philosophy of engagement, solidarity and fidelity to your roots, bankrolled for decades by a local son who never let you forget where you came from. You do it the efficient, pragmatic way, no drama and no fuss, and you treat the whole thing with a serious, near-sacred respect. Your home is a fortress with a singular atmosphere, a town of forty thousand filling the ground. Others chase the spotlight. You quietly get the job done, and five titles say the model works.",
  },
  "MHR": {
    "name": "Montpellier H\u00e9rault Rugby", "emoji": "\ud83c\udf3f", "color": "#0055A4", "code3": "MHR", "kitType": "duo", "secondaryColor": "#FFFFFF",
    "tagline": "Billionaire money and one of France's best academies, symbolised by a flower that survives fire and drought.",
    "desc": "You are the modern project, the young, ambitious build with money behind it and method underneath. You're the youngest club in the league, backed by a billionaire and stocked with world champions, but there's more to you than the chequebook, one of the best academies in France and a symbol that says everything, a rockrose that survives and even feeds on fire and drought. You chase the win with resources and clear thinking, and you'd rather build something new and ambitious than tend an old tradition. Your roots are genuinely thin, your form can swing hard, but you keep coming back. You treat it less as a religion and more as a project worth getting right.",
  },
  "LOU": {
    "name": "Lyon OU", "emoji": "\ud83d\udc3a", "color": "#E30613", "code3": "LOU", "kitType": "duo", "secondaryColor": "#111111",
    "tagline": "The wolf of a big football city, an outsider to rugby's heartland who built its own festive, student-packed crowd.",
    "desc": "You are the outsider who built your own thing, the wolf loose in a big football city. You were never part of rugby's traditional heartland, never quite embraced by the region's old clubs, and you couldn't lean on generations of tradition the way they do. So you made your own, a young, festive, student-heavy crowd with the best party before and after the game anywhere. You're one of the oldest clubs around and yet somehow always the newcomer, coexisting with football's long shadow in a place that was never meant to be yours. You don't do reverence or deep roots. You do celebration, on your own terms, and you back your own eye over anyone's tradition.",
  },
  "USM": {
    "name": "US Montauban", "emoji": "\ud83c\udf3e", "color": "#006C3B", "code3": "USM", "kitType": "duo", "secondaryColor": "#111111",
    "tagline": "The smallest ground in the league and the biggest heart, a former champion that went bust and clawed all the way back.",
    "desc": "You are the plucky survivor, the tiny town with the biggest heart. You play at the smallest ground in the league, and you've been to the brink and back, a former champion that went bankrupt, dropped down the divisions and clawed its way home. Your spirit is simplicity, consistency and fidelity to the group, promotion celebrated without frills, the same faithful squad kept together, every good day treated as a gift. You take heavy beatings from the big clubs and battle like mad at home anyway, because belonging matters more to you than the scoreline. You're folksy, rooted and grateful, and you wouldn't trade any of it.",
  }
};

const archetypes = {
  "TLS": "La Vierge Rouge",
  "RCT": "Pilou Pilou",
  "UBB": "Le Chaudron Magique",
  "LAR": "Les Maritimes",
  "ASM": "Le Peuple Jaune",
  "SFP": "Les Dieux du Stade",
  "R92": "Ciel et Blanc",
  "ABR": "Pe\u00f1a Baiona",
  "PAU": "Honhada",
  "USP": "Sang et Or",
  "CAS": "Le Mod\u00e8le Castrais",
  "MHR": "Les Cistes",
  "LOU": "Les Loups",
  "USM": "L'Esprit Sapiac"
};

const teamTextColors = {
  "TLS": "#F08A8E", "RCT": "#E87F8E", "UBB": "#C79AA6", "LAR": "#FFE066", "ASM": "#FFE066",
  "SFP": "#F27AB8", "R92": "#A8DDF0", "ABR": "#7FCBEE", "PAU": "#6FC08D", "USP": "#DE8285",
  "CAS": "#8598D6", "MHR": "#7FA5D2", "LOU": "#F0838A", "USM": "#6FAE90"
};

// Module scoring - the shared "points toward" lean layer on top of the core fingerprint. Each cell
// +2 to the clubs that lean that way; clubs with no true lean take an honest zero. The four axes are
// the ones that survived a full core+instincts de-duplication (s59 build): talent source, the circus
// around a passion, belonging character, and reverence-vs-celebration. teamDims grid UNTOUCHED.
const scoring = {
  // Q1 talent source. A grow-your-own / B buy-the-best / C hunger-over-record / D your-own-eye.
  "top14_q1": {
    "A": { "TLS": 2, "LAR": 2, "CAS": 2 },
    "B": { "RCT": 2, "R92": 2, "MHR": 2 },
    "C": { "ABR": 2, "USP": 2, "UBB": 2 },
    "D": { "USM": 2, "PAU": 2, "LOU": 2 }
  },
  // Q2 the circus. A stir-it-up / B cut-it-out / C love-the-show / D tune-it-out.
  "top14_q2": {
    "A": { "SFP": 2, "USP": 2, "R92": 2 },
    "B": { "TLS": 2, "CAS": 2, "MHR": 2 },
    "C": { "UBB": 2, "LOU": 2, "RCT": 2 },
    "D": { "ABR": 2, "USM": 2, "LAR": 2, "ASM": 2 }
  },
  // Q3 belonging character. A passionate / B unpretentious / C glamorous / D established.
  "top14_q3": {
    "A": { "UBB": 2, "ABR": 2, "USP": 2 },
    "B": { "CAS": 2, "USM": 2, "PAU": 2 },
    "C": { "SFP": 2, "R92": 2, "MHR": 2 },
    "D": { "TLS": 2, "RCT": 2, "LOU": 2 }
  },
  // Q4 reverence vs celebration. A calling / B celebration / C cause / D project.
  "top14_q4": {
    "A": { "TLS": 2, "LAR": 2, "ASM": 2, "CAS": 2, "PAU": 2 },
    "B": { "ABR": 2, "LOU": 2, "UBB": 2, "USM": 2 },
    "C": { "USP": 2, "RCT": 2, "SFP": 2 },
    "D": { "MHR": 2, "R92": 2 }
  }
};

const teamDims = {
  "TLS": { "loyalty": 8, "emotion": 6, "ambition": 10, "process": 10, "community": 7, "chaos": 2, "rootedness": 9 },
  "RCT": { "loyalty": 6, "emotion": 8, "ambition": 9, "process": 3, "community": 6, "chaos": 9, "rootedness": 5 },
  "UBB": { "loyalty": 7, "emotion": 9, "ambition": 9, "process": 6, "community": 9, "chaos": 7, "rootedness": 4 },
  "LAR": { "loyalty": 9, "emotion": 8, "ambition": 7, "process": 8, "community": 9, "chaos": 4, "rootedness": 8 },
  "ASM": { "loyalty": 10, "emotion": 9, "ambition": 6, "process": 5, "community": 8, "chaos": 4, "rootedness": 9 },
  "SFP": { "loyalty": 5, "emotion": 8, "ambition": 7, "process": 5, "community": 4, "chaos": 10, "rootedness": 3 },
  "R92": { "loyalty": 4, "emotion": 6, "ambition": 9, "process": 6, "community": 3, "chaos": 8, "rootedness": 3 },
  "ABR": { "loyalty": 8, "emotion": 9, "ambition": 6, "process": 5, "community": 9, "chaos": 6, "rootedness": 9 },
  "PAU": { "loyalty": 8, "emotion": 6, "ambition": 5, "process": 6, "community": 8, "chaos": 3, "rootedness": 9 },
  "USP": { "loyalty": 9, "emotion": 10, "ambition": 5, "process": 4, "community": 8, "chaos": 8, "rootedness": 9 },
  "CAS": { "loyalty": 9, "emotion": 6, "ambition": 5, "process": 9, "community": 9, "chaos": 2, "rootedness": 9 },
  "MHR": { "loyalty": 4, "emotion": 4, "ambition": 8, "process": 8, "community": 3, "chaos": 5, "rootedness": 3 },
  "LOU": { "loyalty": 5, "emotion": 7, "ambition": 7, "process": 5, "community": 5, "chaos": 6, "rootedness": 4 },
  "USM": { "loyalty": 8, "emotion": 6, "ambition": 3, "process": 4, "community": 9, "chaos": 4, "rootedness": 9 }
};

const CARD_BADGES = {
  "TLS": "\u2b50", "RCT": "\u2693", "UBB": "\ud83c\udf77", "LAR": "\ud83c\udf0a", "ASM": "\ud83d\udc9b", "SFP": "\ud83c\udf38", "R92": "\ud83d\udc8e",
  "ABR": "\ud83c\udf89", "PAU": "\u26f0\ufe0f", "USP": "\ud83d\udd25", "CAS": "\u2699\ufe0f", "MHR": "\ud83c\udf3f", "LOU": "\ud83d\udc3a", "USM": "\ud83c\udf3e"
};

const badgeUrls = {};

// Enduring club milestones (dossier-grounded, no perishable roster/owner data). Shown on the result
// screen milestones slot alongside the vitalStats Club Info table.
const milestones = {
  "TLS": [
    "A record twenty-five French titles, the most recent in 2026.",
    "Won four in a row from 2023 to 2026, matching the club's own 1994-97 record.",
    "Six European Cups, more than any other club on the continent.",
    "Famous for an academy that feeds a fast, attacking game with home-grown internationals."
  ],
  "RCT": [
    "Four French titles, in 1931, 1987, 1992 and 2014.",
    "Won three European Cups in a row from 2013 to 2015, a feat no French club had managed.",
    "Built a galaxy of imported world stars under an ambitious, big-spending owner.",
    "Plays in a fervent naval port, taking its biggest nights to Marseille's V\u00e9lodrome."
  ],
  "UBB": [
    "Back-to-back European Champions Cups in 2025 and 2026.",
    "Runner-up in the 2025 French final, losing a hundred-minute epic to Toulouse.",
    "Draws the biggest average crowd in European club rugby.",
    "Formed in 2006 from a merger, uniting a football city behind rugby."
  ],
  "LAR": [
    "Back-to-back European Champions Cups in 2022 and 2023.",
    "More than a hundred consecutive home sellouts by early 2026.",
    "Turned a modest provincial side into a European power on sheer professionalism.",
    "Home ground named for a club president executed as a Resistance fighter."
  ],
  "ASM": [
    "Two French titles, in 2010 and 2017.",
    "Lost ten finals before that first win, including three in a row from 2007 to 2009.",
    "Broke through in 2010, the club's centenary year.",
    "The Yellow Army is one of the most faithful, fervent followings in the sport."
  ],
  "SFP": [
    "Fourteen French titles, second only to Toulouse in the history books.",
    "Won six titles in the modern era between 1998 and 2007, the last in 2015.",
    "Reinvented itself with shocking pink shirts, celebrity nights and record crowds.",
    "A Parisian art-and-culture identity unlike any traditional southern club."
  ],
  "R92": [
    "Six French titles across its history, the most recent in 2016.",
    "Traces its line to Racing Club de France, winner of the very first championship in 1892.",
    "Signed global superstars and built a futuristic indoor arena on the edge of Paris.",
    "Long known for glamour, wealth and a certain Parisian decadence."
  ],
  "ABR": [
    "Three French titles, in 1913, 1934 and 1943.",
    "Reached the top-flight semi-finals for the first time in club history in 2025.",
    "The city's famous festival was founded in 1932 by sportsmen of the club.",
    "One of the great atmospheres in France, its anthem sung across the whole town."
  ],
  "PAU": [
    "Three French titles, in 1928, 1946 and 1964.",
    "Won the European Challenge Cup in 2000.",
    "Its anthem, sung acapella by the whole ground, mixes French and the local B\u00e9arnais tongue.",
    "A real academy tradition, developing its own generations of players."
  ],
  "USP": [
    "Seven French titles, the most recent in 2009.",
    "A former multiple champion and one of the fiercest identities in the French game.",
    "Its blood red and gold are the colours of Catalonia, worn hard against the Spanish border.",
    "Famous for a feverish, unmatched passion that persists through decline."
  ],
  "CAS": [
    "Five French titles, in 1949, 1950, 1993, 2013 and 2018.",
    "Bankrolled for decades by a local pharmaceutical magnate born in the town.",
    "One of the smallest grounds in the league, and one of its most feared atmospheres.",
    "A forty-thousand town that fills its stadium, among the most loyal followings in Europe."
  ],
  "MHR": [
    "French champions in 2022, the club's first title.",
    "Runner-up in 2026, the same year it won the European Challenge Cup.",
    "The youngest club in the league, formed by a merger in 1986.",
    "Runs one of the best academies in France alongside its imported stars."
  ],
  "LOU": [
    "Two French titles, both in the early 1930s.",
    "Won the European Challenge Cup in 2022.",
    "One of the oldest clubs in France, symbolised by the wolf.",
    "Built a notably festive, student-heavy crowd in a big football city."
  ],
  "USM": [
    "French champions in 1967, a title few outside the town remember.",
    "Went bankrupt in 2010 and dropped down the divisions.",
    "Won promotion back to the top flight in 2025 with a settled, faithful squad.",
    "Plays at the smallest ground in the league, in a proud Occitan town."
  ]
};

// Club Info table for the result-screen Vitals chapter. Enduring, dossier-grounded facts, titles
// web-verified at build (Toulouse 25 / 2026, Perpignan 7, Bordeaux none as UBB, Montpellier RU 2026).
// No perishable capacities (several grounds recently renovated); European tallies from the dossier.
const vitalStats = {
  "TLS": { founded: 1907, ground: "Stade Ernest-Wallon", city: "Toulouse", colours: "Red and black", titles: "25 (a record)", european: "6 Champions Cups", lastTitle: "2026" },
  "RCT": { founded: 1908, ground: "Stade Mayol", city: "Toulon", colours: "Red and black", titles: "4 (1931, 1987, 1992, 2014)", european: "3 Champions Cups (2013-15)", lastTitle: "2014" },
  "UBB": { founded: 2006, ground: "Stade Chaban-Delmas", city: "Bordeaux", colours: "Maroon and white", titles: "None as the merged club", european: "2 Champions Cups (2025, 2026)" },
  "LAR": { founded: 1898, ground: "Stade Marcel-Deflandre", city: "La Rochelle", colours: "Yellow and black", titles: "None yet", european: "2 Champions Cups (2022, 2023)" },
  "ASM": { founded: 1911, ground: "Stade Marcel-Michelin", city: "Clermont-Ferrand", colours: "Yellow and blue", titles: "2 (2010, 2017)", european: "Challenge Cup (1999, 2007)", lastTitle: "2017" },
  "SFP": { founded: 1883, ground: "Stade Jean-Bouin", city: "Paris", colours: "Pink and white", titles: "14 (second-most)", european: "-", lastTitle: "2015" },
  "R92": { founded: 1882, ground: "Paris La D\u00e9fense Arena", city: "Nanterre (Paris)", colours: "Sky blue and white", titles: "6", european: "-", lastTitle: "2016" },
  "ABR": { founded: 1904, ground: "Stade Jean-Dauger", city: "Bayonne", colours: "Sky blue and white", titles: "3 (1913, 1934, 1943)", european: "-", lastTitle: "1943" },
  "PAU": { founded: 1902, ground: "Stade du Hameau", city: "Pau", colours: "Green and white", titles: "3 (1928, 1946, 1964)", european: "Challenge Cup (2000)", lastTitle: "1964" },
  "USP": { founded: 1902, ground: "Stade Aim\u00e9-Giral", city: "Perpignan", colours: "Blood red and gold", titles: "7", european: "-", lastTitle: "2009" },
  "CAS": { founded: 1906, ground: "Stade Pierre-Fabre", city: "Castres", colours: "Blue and white", titles: "5 (1949, 1950, 1993, 2013, 2018)", european: "-", lastTitle: "2018" },
  "MHR": { founded: 1986, ground: "Septeo Stadium", city: "Montpellier", colours: "Blue and white", titles: "1 (2022)", european: "Challenge Cup (2016, 2021)", lastTitle: "2022" },
  "LOU": { founded: 1896, ground: "Matmut Stade de Gerland", city: "Lyon", colours: "Red and black", titles: "2 (1932, 1933)", european: "Challenge Cup (2022)", lastTitle: "1933" },
  "USM": { founded: 1903, ground: "Stade Sapiac", city: "Montauban", colours: "Green and black", titles: "1 (1967)", european: "-", lastTitle: "1967" }
};

export { moduleQuestions, teams, archetypes, teamTextColors, milestones, vitalStats, scoring, teamDims, CARD_BADGES, badgeUrls };
