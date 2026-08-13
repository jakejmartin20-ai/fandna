// FanDNA AFL module (World group). Fingerprint sport, FP_W 1.2. 18 clubs.
// Authored from fandna-afl-craft.md + fandna-afl-architecture.md. Perishable facts web-verified 12 Aug 2026.
const moduleQuestions = [
 {
  "id": "afl_q1",
  "type": "choice",
  "phase": "The fine print",
  "question": "Old institutions all have a pecking order everyone silently knows. Yours put you:",
  "options": [
   {
    "label": "Near the top, an old name held to a standard.",
    "value": "A"
   },
   {
    "label": "In the thick of the masses, loud and ordinary.",
    "value": "B"
   },
   {
    "label": "Off to the side and rising, results over the old order.",
    "value": "C"
   },
   {
    "label": "At the very bottom, handed nothing, carrying a chip.",
    "value": "D"
   }
  ]
 },
 {
  "id": "afl_q2",
  "type": "choice",
  "phase": "The fine print",
  "question": "Champion team, or a team of champions?",
  "options": [
   {
    "label": "A team of champions. Stack the talent and let it win.",
    "value": "A"
   },
   {
    "label": "A champion team. No egos, the whole beats the parts.",
    "value": "B"
   },
   {
    "label": "Neither. It comes down to want, out-work them.",
    "value": "C"
   },
   {
    "label": "Belief. Caring runs all the way through a better side.",
    "value": "D"
   }
  ]
 },
 {
  "id": "afl_q3",
  "type": "slider",
  "phase": "The fine print",
  "question": "The ultimate prize, or the love of the thing itself?",
  "left": "The prize. I am here to win it all, nothing less.",
  "right": "The love. I would follow it to the bottom and back."
 },
 {
  "id": "afl_q4",
  "type": "choice",
  "phase": "The fine print",
  "question": "It has fallen apart again, the way it always seems to. When it hurts, who sees it?",
  "options": [
   {
    "label": "No one. I go quiet and keep it to myself.",
    "value": "A"
   },
   {
    "label": "Everyone. I feel it all and it pours out.",
    "value": "B"
   },
   {
    "label": "Only my own. We carry it together, in close.",
    "value": "C"
   },
   {
    "label": "No one, because it hardens me. I go cold.",
    "value": "D"
   }
  ]
 },
 {
  "id": "afl_q5",
  "type": "choice",
  "phase": "The fine print",
  "question": "The thing you have given years to makes a call that feels like a betrayal. You:",
  "options": [
   {
    "label": "Stay, no question. That was never up for negotiation.",
    "value": "A"
   },
   {
    "label": "Move on. I am loyal, but not at any price.",
    "value": "B"
   },
   {
    "label": "Fight to fix it from the inside.",
    "value": "C"
   },
   {
    "label": "Follow the people I trust, wherever they go.",
    "value": "D"
   }
  ]
 },
 {
  "id": "afl_q6",
  "type": "slider",
  "phase": "The fine print",
  "question": "When it is all on the line, does the feeling pour out of you, or vanish?",
  "left": "It pours out. Everyone around me feels it too.",
  "right": "Ice cold. Nothing shows on me at all."
 },
 {
  "id": "afl_q7",
  "type": "choice",
  "phase": "What it comes down to",
  "question": "A whole crowd of strangers have decided they cannot stand you, sight unseen. That lands how?",
  "options": [
   {
    "label": "I love it. Their hating me only proves I matter.",
    "value": "A"
   },
   {
    "label": "It bounces off. I genuinely do not care.",
    "value": "B"
   },
   {
    "label": "It stings, and I use it as fuel.",
    "value": "C"
   },
   {
    "label": "I would hate it. I would far rather be liked.",
    "value": "D"
   }
  ]
 },
 {
  "id": "afl_q8",
  "type": "choice",
  "phase": "What it comes down to",
  "question": "The kind of mob you would actually want to belong to:",
  "options": [
   {
    "label": "Massive, one of many in a huge crowd.",
    "value": "A"
   },
   {
    "label": "Tight, small enough to be known by name.",
    "value": "B"
   },
   {
    "label": "Sharp, and clearly going somewhere.",
    "value": "C"
   },
   {
    "label": "Brand new, so I get to help build it.",
    "value": "D"
   }
  ]
 },
 {
  "id": "afl_q9",
  "type": "slider",
  "phase": "What it comes down to",
  "question": "Sunk into one patch of ground for good, or at home wherever you turn up?",
  "left": "One patch, generations deep. I belong to it.",
  "right": "Wherever I land next. Home is not a postcode."
 },
 {
  "id": "afl_q10",
  "type": "choice",
  "phase": "What it comes down to",
  "question": "The thing you love has gone slick and corporate, run by money now. That leaves you:",
  "options": [
   {
    "label": "Gutted. It was ours, and now it is not.",
    "value": "A"
   },
   {
    "label": "Fine by me. Run it like a business and win.",
    "value": "B"
   },
   {
    "label": "Untouched. It was never about who owns it.",
    "value": "C"
   },
   {
    "label": "Unbothered. I have no old soul to lose, I am the new model.",
    "value": "D"
   }
  ]
 },
 {
  "id": "afl_q11",
  "type": "choice",
  "phase": "What it comes down to",
  "question": "When it truly counts, the way you actually get it done:",
  "options": [
   {
    "label": "By the system, to the letter.",
    "value": "A"
   },
   {
    "label": "A plan, but with room to read the moment.",
    "value": "B"
   },
   {
    "label": "On pure feel, whatever the moment tells me.",
    "value": "C"
   },
   {
    "label": "However I can. I make it up as I go.",
    "value": "D"
   }
  ]
 },
 {
  "id": "afl_q12",
  "type": "choice",
  "phase": "What it comes down to",
  "question": "The rung on the ladder where you are most at home:",
  "options": [
   {
    "label": "Out in front, and hunted for it.",
    "value": "A"
   },
   {
    "label": "Right in the mix of it.",
    "value": "B"
   },
   {
    "label": "The outsider, written off.",
    "value": "C"
   },
   {
    "label": "Just glad to be in it at all.",
    "value": "D"
   }
  ]
 }
];

const teams = {
 "CAR": {
  "name": "Carlton",
  "emoji": "🔷",
  "color": "#002A5C",
  "code3": "CAR",
  "kitType": "duo",
  "secondaryColor": "#FFFFFF",
  "tagline": "Level at the very top of the honour roll with sixteen flags, and yet nothing since 1995, a proud club still waiting to be great again.",
  "desc": "You come from the establishment heart of Melbourne, the Old Dark Navy Blues, blue-blood and big-money since the game began. You have won sixteen flags, level at the very top of the honour roll, and you have always carried yourself like a club that belongs there. But the modern era has been unkind: your last premiership came in 1995, and the wait has stretched into a long, proud ache of wooden spoons and false dawns. This year turned harder still, with senior coach Michael Voss moved on mid-season and Josh Fraser stepping in to steady the ship. You would never lower the banner, though. Silvertail to the last, you expect to be great, and you are still waiting to be again.",
  "why": [
   "You expect to win, and you carry the certainty of a club that has always sat near the top.",
   "You are old and proud, with roots that run all the way down. You know exactly where you come from.",
   "You keep your composure. No theatrics, no meltdowns, just the quiet confidence of pedigree."
  ]
 },
 "COL": {
  "name": "Collingwood",
  "emoji": "🐦‍⬛",
  "color": "#000000",
  "code3": "COL",
  "kitType": "duo",
  "secondaryColor": "#FFFFFF",
  "tagline": "The biggest and most divided-over name the game has produced, loved and loathed in equal measure, and you would not soften a single edge of it.",
  "desc": "You come from the working-class inner-north of Melbourne, and you are the largest and most polarising club the game has ever known. The black-and-white guernsey is worn by the biggest army in the land, a following that turns any ground into a home end and that half the country would love to see lose. You have won sixteen flags, level at the very top of the honour roll, and you carry the arrogance of a club that expects to be there. You have faced the hard reckonings too: in 2021 a report into the club's handling of racism forced a long, public look in the mirror, and two years later you answered on the field, McRae's side taking the 2023 premiership in a four-point classic. Loved or loathed, you have never once tried to make yourself easier to like.",
  "why": [
   "You want to belong to something enormous, and the more of you there are, the more alive you feel.",
   "You expect to win and never apologise for it. Being the most hated club in the land only proves how much you matter.",
   "You are working-class and generational to the bone. Born into it, in it for life, and quietly proud of every enemy you have made."
  ]
 },
 "ESS": {
  "name": "Essendon",
  "emoji": "✴️",
  "color": "#CC0000",
  "code3": "ESS",
  "kitType": "duo",
  "secondaryColor": "#000000",
  "tagline": "Sixteen flags, tied for the most ever, and a quarter-century spent chasing the standard your undefeated 2000 set.",
  "desc": "You come from Essendon, in Melbourne's north, and you wear the famous red sash of a fallen aristocrat. You have won sixteen flags, tied for the most in the game's history, the last of them the undefeated masterpiece of 2000. Since then has come a quarter-century of wandering: a long premiership drought, the wounds of the 2013 supplements saga, and season after season of falling short of a proud name. In a turbulent off-season your long-time captain's move to a rival collapsed and Andrew McGrath took the armband, and 2026 has been another hard year near the foot of the ladder. Yet the belief never leaves you. You are certain, as only the truly proud can be, that your best days will come around again.",
  "why": [
   "Your loyalty runs deep and generational. You were born into this and you will never be talked out of it.",
   "You carry a wounded pride, and it only makes you believe harder that your best days will return.",
   "You are rooted in a long and glorious history, and you measure yourself against the standard it set."
  ]
 },
 "GEE": {
  "name": "Geelong",
  "emoji": "🐱",
  "color": "#002A5C",
  "code3": "GEE",
  "kitType": "duo",
  "secondaryColor": "#FFFFFF",
  "tagline": "The only club with a fortress of its own, and the rare art of staying great for two decades without ever tearing it down.",
  "desc": "You come from Geelong, a whole regional city an hour from the capital, and you are the game's model of how to stay great without ever tearing it down. You play at your own fortress by the bay, the only club with a true home of its own, and you have turned steadiness into an art: four flags this century, the last in 2022, and a habit of reloading where others rebuild. Even 2025 ended a step short, a grand final lost to the year's best, but you were there again, as you almost always are. Under the league's longest-serving coach you rarely panic and rarely fall far. You are the club that belongs to one place, does the work quietly, and simply keeps turning up near the top.",
  "why": [
   "You trust the system above all. You believe that if the method is right, the results simply follow.",
   "You are bound to one place completely, a whole town's worth of belonging in a single guernsey.",
   "You stay calm while others panic. No boom, no bust, just a steady hand year after year."
  ]
 },
 "HAW": {
  "name": "Hawthorn",
  "emoji": "🟫",
  "color": "#4D2004",
  "code3": "HAW",
  "kitType": "duo",
  "secondaryColor": "#FBBF15",
  "tagline": "Thirteen flags won the hard way, cold and clinical, with a three-in-a-row only the most ruthless machines ever manage.",
  "desc": "You come from Hawthorn, in Melbourne's east, brown and gold, and you are the game's most clinical winning machine. Thirteen flags sit behind you, including the ruthless three-in-a-row of 2013 to 2015, all won the hard way, with cold method rather than sentiment. The recent past has carried a shadow too, the historical racism allegations of 2022 that forced a hard reckoning behind the family-club image. Now, under a former champion turned coach and the club's first joint captaincy, you are a young side climbing fast again. You do not run on feeling. You run on standards, and you expect the winning to return because that is simply what you do.",
  "why": [
   "You are ruthless in your hunger to win, and you never slow down to make it comfortable.",
   "You trust cold, hard method over feeling. You do the unglamorous work and let it compound.",
   "You keep your emotions out of it. Winning, to you, is a problem solved better than anyone else solves it."
  ]
 },
 "MEL": {
  "name": "Melbourne",
  "emoji": "😈",
  "color": "#0F1131",
  "code3": "MEL",
  "kitType": "duo",
  "secondaryColor": "#CC2233",
  "tagline": "The oldest club in the game and one of its founders, who waited fifty-seven long years and then finally, gloriously, ended the drought.",
  "desc": "You come from Melbourne itself, the oldest club in the game and one of the oldest in the world, the gentleman founders who helped write the very first rules. Your home is the great stadium at the city's heart, and your roots run deeper than anyone's. For decades that heritage was a burden as much as a birthright: a fifty-seven-year premiership drought that became the longest of the modern age. Then, in 2021, you finally broke it, and the whole club exhaled at once. You were patient to a fault and loyal beyond reason, and in the end the wait made the reward mean everything.",
  "why": [
   "Your roots go deeper than anyone's. Place and heritage mean more to you than almost anything.",
   "You are patient and loyal to a fault, willing to wait decades for the thing you believe is owed.",
   "You carry the quiet pride of an origin, a sense that you were here first and will be here last."
  ]
 },
 "NTH": {
  "name": "North Melbourne",
  "emoji": "🦘",
  "color": "#013A94",
  "code3": "NTH",
  "kitType": "duo",
  "secondaryColor": "#FFFFFF",
  "tagline": "A hundred years in the competition and never the biggest or the richest, but nobody in the game turns a first-timer into a lifer like you do.",
  "desc": "You come from North Melbourne, a tight pocket of the inner city, and you have spent a century as the club that was never the biggest or the richest. They call you the Shinboners, a name earned by the butchers and labourers who first pulled on the royal blue and white, and it fits: you are all endurance and belonging, not flash. No club turns a first-time supporter into a lifer at the rate you do, which is your quiet miracle, because you have never had a natural heartland to draw on. The lean years have come in long stretches, whole seasons near the bottom of the ladder, and you have worn them without a word of self-pity. Past a hundred years in the competition, you are still standing, still stubborn, still yours.",
  "why": [
   "Your loyalty runs as deep as any in the game. Small in number, but almost no one who truly joins you ever leaves.",
   "You endure without fuss. The bad years come and go, and you keep turning up the same, week after week, decade after decade.",
   "You were handed no size and no riches, so you built a century out of grit, belonging, and a flat refusal to fold."
  ]
 },
 "RIC": {
  "name": "Richmond",
  "emoji": "🐯",
  "color": "#FFD200",
  "code3": "RIC",
  "kitType": "duo",
  "secondaryColor": "#000000",
  "tagline": "Decades of turmoil turned in a heartbeat into three flags in four years, and through all of it the loudest, most feeling army in the game.",
  "desc": "You come from Richmond, an old working-class pocket of inner Melbourne, and you are the game's great emotional army, yellow and black, all heart and all volume. For most of your history you were chaos itself, decades of near-misses and self-inflicted wounds, before a golden run of three flags in four years turned the turmoil into triumph. Now the dynasty has wound down and you are deep in a hard rebuild, near the foot of the ladder again, taking your medicine to build the next great side. None of it dims the noise. Your following is enormous and loud, your feelings run at full tilt, and the wild ride is exactly why you love it.",
  "why": [
   "You feel every high and every low at full volume, and you would not turn the dial down for anything.",
   "You run hot and unpredictable, all boom and bust, and the wild ride is exactly why you are here.",
   "Your tribe is huge and loud, an army that turns any ground into a wall of noise."
  ]
 },
 "STK": {
  "name": "St Kilda",
  "emoji": "😇",
  "color": "#ED1B2F",
  "code3": "STK",
  "kitType": "duo",
  "secondaryColor": "#000000",
  "tagline": "One flag in over a century, won by a single point in 1966, and a bayside faithful who have loved you through every heartbreak since.",
  "desc": "You come from the bayside of Melbourne, the Saints, and you are the game's most lovable hard-luck story. In more than a century you have won a single flag, by a solitary point in 1966, and chased the second one ever since through seven grand finals and a record run of wooden spoons. Heartbreak is practically your native tongue, and still your bayside faithful turn up, loyal past all reason. A quiet off-season saw a favourite son traded away and a new pair of co-captains take over. You have every excuse to give up on it, and you never once have, because for you the loving was never really about the winning.",
  "why": [
   "You feel it all, deeply, and you have never once learned to protect yourself from the heartbreak.",
   "Your loyalty is unconditional. You have been let down a hundred times and you keep loving anyway.",
   "Winning was never the whole point for you. Belonging to it, through everything, always mattered more."
  ]
 },
 "WBD": {
  "name": "Western Bulldogs",
  "emoji": "🐶",
  "color": "#014896",
  "code3": "WBD",
  "kitType": "duo",
  "secondaryColor": "#E1251B",
  "tagline": "Sixty-two years between flags and then the fairytale of 2016, the community club the whole neutral world quietly wants to win.",
  "desc": "You come from Footscray, in Melbourne's working-class west, the community club that the whole neutral world quietly adores. For sixty-two years you carried a single flag from 1954 and the reputation of a battler, until the fairytale of 2016, when you charged from seventh to a premiership nobody saw coming. You have always been about belonging more than grandeur, a warm and tight-knit club in a fast-growing, under-supported corner of the city. You are the side people outside your own walls hope to see win. And when the pedigree said you could not, you proved that a group with enough heart still can.",
  "why": [
   "Belonging is everything to you. It is the people beside you, more than any trophy, that you are here for.",
   "You are warm and open-hearted, the kind others quietly hope to see do well.",
   "You believe in the fairytale, that a group with more heart than pedigree can rise when nobody expects it."
  ]
 },
 "ADE": {
  "name": "Adelaide",
  "emoji": "🐦",
  "color": "#002B5C",
  "code3": "ADE",
  "kitType": "duo",
  "secondaryColor": "#FFB81C",
  "tagline": "Born in 1990 to be a whole state's big club, and an instant powerhouse who topped the ladder again in 2025.",
  "desc": "You come from Adelaide, the manufactured giant of South Australia, born in 1990 to be the state's big club and an instant powerhouse. Back-to-back flags in 1997 and 1998 announced you early, and you have carried the swagger of a large, well-backed club ever since, a whole state's worth of support behind the red, navy and gold. There have been low points too, the wrenching grand final loss of 2017 and its long fallout, but in 2025 you topped the ladder as minor premiers and returned to September near the top. You are hungry and you are big, and you carry both with a warmth that wants not just to win, but to be loved for it.",
  "why": [
   "You are hungry to win and unafraid to say it. You back yourself to be one of the biggest and the best.",
   "You like being part of something large and well-supported, a proper big club with a whole state behind it.",
   "You carry your ambition with warmth rather than coldness. You want to win, but you want to be loved too."
  ]
 },
 "PTA": {
  "name": "Port Adelaide",
  "emoji": "⚡",
  "color": "#008AAB",
  "code3": "PTA",
  "kitType": "duo",
  "secondaryColor": "#000000",
  "tagline": "The oldest professional club in the land and the fiercest parochial pride in it, with one flag in the top grade and a permanent chip on the shoulder.",
  "desc": "You come from Port Adelaide, a fierce and parochial dockside pride with the deepest roots in the state, the oldest professional club in the country carried into a newer league. You wear the heritage of the black-and-white prison bars and a permanent chip on your shoulder, against the big Victorian clubs and against your cross-town rival most of all. Your one flag in the top grade came in 2004, and finals heartbreak has followed more often than not, including a rare miss in 2025 that ended the long Ken Hinkley era. Now a favourite son, Josh Carr, has taken the reins for a new chapter. You feel everything at full volume, you belong to your patch entirely, and you back yourself against anyone who looks down on it.",
  "why": [
   "Your pride in where you are from is fierce and total. Look down on your patch and you will belong to it harder.",
   "Your loyalty is deep and old, carried across generations and never once up for negotiation.",
   "You wear your heart on your sleeve. The passion pours out of you, and you would not have it any other way."
  ]
 },
 "WCE": {
  "name": "West Coast",
  "emoji": "🦅",
  "color": "#062A78",
  "code3": "WCE",
  "kitType": "duo",
  "secondaryColor": "#F2A900",
  "tagline": "Four flags built on cold professionalism, the last in 2018, and a steep fall since that you are grinding your way back from.",
  "desc": "You come from Perth, the blue and gold, the corporate powerhouse built in the late 1980s to carry the west into the national game. You did it emphatically, four flags across three decades, the last a famous win in 2018, all delivered with the cool professionalism of a club run to win. Then came the fall, a steep slide to the bottom of the ladder and a full rebuild that is still grinding through its hardest years. You are a young side finding its feet again under a second-year coach and a fresh leadership. The hunger has never left, though. You were built to be at the top, and you fully intend to climb back to it.",
  "why": [
   "Your hunger to win is relentless and unsentimental. You are here for the top and nothing less.",
   "You keep it cold and controlled. No drama, no fuss, just the business of winning done properly.",
   "You carry yourself like a professional at the peak, and you expect to be measured against the very best."
  ]
 },
 "FRE": {
  "name": "Fremantle",
  "emoji": "🟣",
  "color": "#582C83",
  "code3": "FRE",
  "kitType": "solo",
  "secondaryColor": "#582C83",
  "tagline": "No men's flag in your history and the fervour never once dimmed, a purple tribe that turns up in full voice win or lose.",
  "desc": "You come from Fremantle, the old port city south of Perth, purple through and through, the people's club set up as the warmer alternative to the establishment across town. You have never won a men's flag, coming closest in the grand final of 2013, and yet the fervour never dims, a loud and loyal tribe that turns up in full voice whatever the result. You are all passion and belonging, a club that feels every kick in its body. The trophy has stayed out of reach, but you have never once loved it any less for that. Being all-in, forever, was always the point for you.",
  "why": [
   "You feel it in your body, the passion pouring out of you whether it is going well or badly.",
   "You belong to the people, not the boardroom. You are a tribe that turns up loud, win or lose.",
   "You have never needed a trophy to justify the love. Being all-in, forever, is the whole point."
  ]
 },
 "SYD": {
  "name": "Sydney",
  "emoji": "🦢",
  "color": "#ED171F",
  "code3": "SYD",
  "kitType": "duo",
  "secondaryColor": "#FFFFFF",
  "tagline": "Uprooted from Melbourne and rebuilt in the harbour, the selfless Bloods who made a home anywhere and won it twice over.",
  "desc": "You come from Sydney now, though you began life a century ago as South Melbourne before being uprooted and rebuilt in the harbour city in 1982. That journey forged your identity: the Bloods, a fiercely selfless, team-first culture where no one is bigger than the group. You made the relocation work, flags in 2005 and 2012 and a run of near-misses since, including a grand final loss in 2024. A new coach has taken over from a long-serving one, and the standard has not moved. You put the team first, you carry your history lightly, and you have proven you can make a home anywhere.",
  "why": [
   "You put the group ahead of yourself, always. No egos, no passengers, everyone doing the unseen work.",
   "You can make a home wherever you land. You have never needed one postcode to know who you are.",
   "You keep your composure under pressure, cool and selfless while others lose their heads."
  ]
 },
 "GWS": {
  "name": "GWS",
  "emoji": "🟠",
  "color": "#F47920",
  "code3": "GWS",
  "kitType": "duo",
  "secondaryColor": "#33383B",
  "tagline": "Conjured out of nothing in 2012 to plant the game in rugby-league country, all ambition and orange, still chasing a maiden flag.",
  "desc": "You come from the western suburbs of Sydney, the Giants, a club conjured into being in 2012 to plant the game in rugby-league country. You were built aggressively and without a past to lean on, all ambition and orange, out to prove you belonged among names a century older. You announced yourself fast, a grand final run in 2019 and regular finals since, though the maiden flag is still to come. You travel light by nature: little history, few roots, and a hunger that makes a virtue of both. A blank page has never frightened you. You would rather build the story than inherit one.",
  "why": [
   "You are hungry and aggressive, out to prove you belong among names far older than you.",
   "You would rather build something new than inherit it. A blank page is a gift, not a burden.",
   "You travel light. No long history, no deep roots, just ambition and everything still ahead of you."
  ]
 },
 "BRL": {
  "name": "Brisbane",
  "emoji": "🦁",
  "color": "#7A0026",
  "code3": "BRL",
  "kitType": "duo",
  "secondaryColor": "#FDB927",
  "tagline": "A three-peat two decades ago and back-to-back flags in 2024 and 2025, a club reborn from a merger into a genuine northern power.",
  "desc": "You come from Brisbane, the maroon, blue and gold, a club reborn in 1996 from the merger of two proud names into a genuine northern powerhouse. You dominated once already, a three-in-a-row from 2001 to 2003, and after a long climb back through the wilderness you have done it again: back-to-back premierships in 2024 and 2025, the second sealed with a stunning final quarter. Your coach made history as the first to lead a club to consecutive flags without having played at the top level, and a new-look captaincy now carries the group. You are driven, well-built and relentless. You have known the bottom, climbed all the way back, and you believe, deeply, that you can keep doing it.",
  "why": [
   "You are driven to dominate, and you have the hunger of a club that expects to be at the very top.",
   "You trust a well-run method. You believe winning is built, brick by brick, not stumbled upon.",
   "You have known the bottom and climbed all the way back, and you carry the belief that you can do it again."
  ]
 },
 "GCS": {
  "name": "Gold Coast",
  "emoji": "☀️",
  "color": "#D6001C",
  "code3": "GCS",
  "kitType": "duo",
  "secondaryColor": "#FFC72C",
  "tagline": "Built from nothing on a strip of coast that had never cared for the game, and in your fifteenth year you finally cracked September.",
  "desc": "You come from the Gold Coast, a strip of Queensland beach and high-rise that had never much cared for this game, and you were built from nothing to change that. The red and gold first took the field in 2011, an expansion club with no history, no heartland, and a long road ahead. For over a decade the losing defined you, thirteen seasons without so much as a finals appearance, the longest wait any club has carried. Then, in your fifteenth year, it broke: under Damien Hardwick you cracked September for the first time, and your young midfielder Matt Rowell was crowned the game's best and fairest. A difficult 2026 pulled you back toward the pack, but the ceiling lifted the moment you proved you could get there at all.",
  "why": [
   "You would rather build something new than inherit it, and a blank page excites you where a long history would only weigh you down.",
   "You take a fresh start over an old story every time. History is a weight you have never had to carry.",
   "You do a lot with a little. A small following and a short life, and still you have begun to turn promise into proof."
  ]
 }
};

const archetypes = {
 "CAR": "The Old Dark Navys",
 "COL": "Side By Side",
 "ESS": "The Red Sash",
 "GEE": "The Cattery",
 "HAW": "The Hard Way",
 "MEL": "The Founders",
 "NTH": "Shinboners",
 "RIC": "Eat 'Em Alive",
 "STK": "Moorabbin",
 "WBD": "Sons of the West",
 "ADE": "Pride of SA",
 "PTA": "Prison Bars",
 "WCE": "Perth's Own",
 "FRE": "Freo",
 "SYD": "The Bloods",
 "GWS": "Big Sky",
 "BRL": "The Pride",
 "GCS": "Gold Coast Sky"
};

const teamTextColors = {
 "CAR": "#7FA8D9",
 "COL": "#C7C7C7",
 "ESS": "#F08C8C",
 "GEE": "#7FA8D9",
 "HAW": "#D9A94E",
 "MEL": "#E0899A",
 "NTH": "#6E9BE0",
 "RIC": "#FFD200",
 "STK": "#F28A94",
 "WBD": "#6E9BE0",
 "ADE": "#FFC94D",
 "PTA": "#4FC3DE",
 "WCE": "#6E8CC0",
 "FRE": "#A883CC",
 "SYD": "#F28A8E",
 "GWS": "#F79A5B",
 "BRL": "#E0A0B0",
 "GCS": "#F58A96"
};

const greats = {
 "CAR": [
  {
   "name": "John Nicholls",
   "years": "1957-74",
   "note": "legend of the club"
  },
  {
   "name": "Stephen Kernahan",
   "years": "1986-97",
   "note": "premiership captain"
  },
  {
   "name": "Chris Judd",
   "years": "2008-15",
   "note": "Brownlow medallist"
  }
 ],
 "COL": [
  {
   "name": "Gordon Coventry",
   "years": "1920-37",
   "note": "goalkicking record"
  },
  {
   "name": "Nathan Buckley",
   "years": "1993-2007",
   "note": "Brownlow medallist"
  },
  {
   "name": "Nick Daicos",
   "years": "2022-",
   "note": "2023 premiership player"
  }
 ],
 "ESS": [
  {
   "name": "Dick Reynolds",
   "years": "1933-51",
   "note": "four Brownlow medals"
  },
  {
   "name": "James Hird",
   "years": "1992-2007",
   "note": "champion and 2000 premiership player"
  },
  {
   "name": "Kevin Sheedy",
   "years": "coach",
   "note": "the dynasty-era coach"
  }
 ],
 "GEE": [
  {
   "name": "Gary Ablett Sr",
   "years": "1984-96",
   "note": "known simply as God"
  },
  {
   "name": "Joel Selwood",
   "years": "2007-22",
   "note": "premiership captain"
  },
  {
   "name": "Jimmy Bartel",
   "years": "2002-16",
   "note": "Brownlow medallist"
  }
 ],
 "HAW": [
  {
   "name": "Leigh Matthews",
   "years": "1969-85",
   "note": "Lethal, an official legend"
  },
  {
   "name": "Jason Dunstall",
   "years": "1985-98",
   "note": "goalkicking great"
  },
  {
   "name": "Luke Hodge",
   "years": "2002-17",
   "note": "premiership captain"
  }
 ],
 "MEL": [
  {
   "name": "Ron Barassi",
   "years": "1953-64",
   "note": "an official legend"
  },
  {
   "name": "Robert Flower",
   "years": "1973-87",
   "note": "one-club champion"
  },
  {
   "name": "Max Gawn",
   "years": "2011-",
   "note": "2021 premiership captain"
  }
 ],
 "NTH": [
  {
   "name": "Wayne Carey",
   "years": "1989-2001",
   "note": "The King"
  },
  {
   "name": "Glenn Archer",
   "years": "1992-2007",
   "note": "Shinboner of the Century"
  },
  {
   "name": "Brent Harvey",
   "years": "1996-2016",
   "note": "games record-holder"
  }
 ],
 "RIC": [
  {
   "name": "Jack Dyer",
   "years": "legend",
   "note": "Captain Blood"
  },
  {
   "name": "Kevin Bartlett",
   "years": "1965-83",
   "note": "five premierships"
  },
  {
   "name": "Dustin Martin",
   "years": "2010-23",
   "note": "three Norm Smith medals"
  }
 ],
 "STK": [
  {
   "name": "Trevor Barker",
   "years": "1975-89",
   "note": "club champion"
  },
  {
   "name": "Nicky Winmar",
   "years": "1987-98",
   "note": "an iconic figure"
  },
  {
   "name": "Robert Harvey",
   "years": "1988-2008",
   "note": "dual Brownlow medallist"
  }
 ],
 "WBD": [
  {
   "name": "Charlie Sutton",
   "years": "1942-57",
   "note": "1954 premiership captain"
  },
  {
   "name": "Tony Liberatore",
   "years": "1986-2002",
   "note": "Brownlow medallist"
  },
  {
   "name": "Marcus Bontempelli",
   "years": "2014-",
   "note": "2016 premiership player"
  }
 ],
 "ADE": [
  {
   "name": "Andrew McLeod",
   "years": "1995-2010",
   "note": "dual premiership, dual Norm Smith"
  },
  {
   "name": "Mark Ricciuto",
   "years": "1993-2007",
   "note": "Brownlow medallist"
  },
  {
   "name": "Tony Modra",
   "years": "1992-98",
   "note": "cult goalkicker"
  }
 ],
 "PTA": [
  {
   "name": "Russell Ebert",
   "years": "SANFL legend",
   "note": "four Magarey medals"
  },
  {
   "name": "Gavin Wanganeen",
   "years": "1997-2006",
   "note": "Brownlow medallist"
  },
  {
   "name": "Warren Tredrea",
   "years": "1997-2010",
   "note": "2004 premiership captain"
  }
 ],
 "WCE": [
  {
   "name": "Glen Jakovich",
   "years": "1991-2004",
   "note": "champion defender"
  },
  {
   "name": "Ben Cousins",
   "years": "1996-2007",
   "note": "Brownlow medallist, 2006 flag"
  },
  {
   "name": "Josh Kennedy",
   "years": "2008-22",
   "note": "goalkicking great"
  }
 ],
 "FRE": [
  {
   "name": "Matthew Pavlich",
   "years": "2000-16",
   "note": "club champion"
  },
  {
   "name": "Aaron Sandilands",
   "years": "2003-19",
   "note": "ruck great"
  },
  {
   "name": "Nat Fyfe",
   "years": "2010-",
   "note": "dual Brownlow medallist"
  }
 ],
 "SYD": [
  {
   "name": "Bob Skilton",
   "years": "South Melbourne",
   "note": "three Brownlow medals"
  },
  {
   "name": "Paul Kelly",
   "years": "1990-2002",
   "note": "Brownlow medallist and captain"
  },
  {
   "name": "Adam Goodes",
   "years": "1999-2015",
   "note": "dual Brownlow, dual premiership"
  }
 ],
 "BRL": [
  {
   "name": "Michael Voss",
   "years": "1992-2006",
   "note": "Brownlow, triple-premiership captain"
  },
  {
   "name": "Simon Black",
   "years": "1998-2013",
   "note": "Brownlow, triple premiership"
  },
  {
   "name": "Jonathan Brown",
   "years": "2000-14",
   "note": "triple premiership"
  }
 ]
};

const vitalStats = {
 "CAR": {
  "base": "Melbourne, Victoria",
  "founded": "1864",
  "home": "Marvel Stadium & MCG",
  "colours": "Navy blue",
  "coach": "Josh Fraser (caretaker)",
  "captain": "Patrick Cripps",
  "flags": "16 (last 1995)"
 },
 "COL": {
  "base": "Melbourne, Victoria",
  "founded": "1892",
  "home": "MCG & AIA Centre",
  "colours": "Black and white",
  "coach": "Craig McRae",
  "captain": "Darcy Moore",
  "flags": "16 (last 2023)"
 },
 "ESS": {
  "base": "Melbourne, Victoria",
  "founded": "1872",
  "home": "Marvel Stadium & MCG",
  "colours": "Black and red",
  "coach": "Brad Scott",
  "captain": "Andrew McGrath",
  "flags": "16 (last 2000)"
 },
 "GEE": {
  "base": "Geelong, Victoria",
  "founded": "1859",
  "home": "GMHBA Stadium",
  "colours": "Navy and white",
  "coach": "Chris Scott",
  "captain": "Patrick Dangerfield",
  "flags": "10 (last 2022)"
 },
 "HAW": {
  "base": "Melbourne, Victoria",
  "founded": "1902",
  "home": "MCG & UTAS Stadium",
  "colours": "Brown and gold",
  "coach": "Sam Mitchell",
  "captain": "James Sicily & Jai Newcombe",
  "flags": "13 (last 2015)"
 },
 "MEL": {
  "base": "Melbourne, Victoria",
  "founded": "1858 (oldest club)",
  "home": "MCG",
  "colours": "Navy and red",
  "coach": "Simon Goodwin",
  "captain": "Max Gawn",
  "flags": "13 (last 2021)"
 },
 "NTH": {
  "base": "North Melbourne, Victoria",
  "founded": "1869 (VFL from 1925)",
  "home": "Marvel Stadium & Arden Street",
  "colours": "Royal blue and white",
  "coach": "Alastair Clarkson",
  "captain": "Nick Larkey",
  "flags": "4 (last 1999)"
 },
 "RIC": {
  "base": "Melbourne, Victoria",
  "founded": "1885",
  "home": "MCG",
  "colours": "Yellow and black",
  "coach": "Adem Yze",
  "captain": "Toby Nankervis",
  "flags": "13 (last 2020)"
 },
 "STK": {
  "base": "Melbourne, Victoria",
  "founded": "1873",
  "home": "Marvel Stadium & RSEA Park",
  "colours": "Red, white and black",
  "coach": "Ross Lyon",
  "captain": "Callum Wilkie & Jack Sinclair",
  "flags": "1 (1966)"
 },
 "WBD": {
  "base": "Footscray, Victoria",
  "founded": "1877",
  "home": "Marvel Stadium & Whitten Oval",
  "colours": "Red, white and blue",
  "coach": "Luke Beveridge",
  "captain": "Marcus Bontempelli",
  "flags": "2 (last 2016)"
 },
 "ADE": {
  "base": "Adelaide, South Australia",
  "founded": "1990 (first season 1991)",
  "home": "Adelaide Oval",
  "colours": "Navy, red and gold",
  "coach": "Matthew Nicks",
  "captain": "Jordan Dawson",
  "flags": "2 (last 1998)"
 },
 "PTA": {
  "base": "Port Adelaide, South Australia",
  "founded": "1870 (AFL from 1997)",
  "home": "Adelaide Oval",
  "colours": "Black, teal and white",
  "coach": "Josh Carr",
  "captain": "Connor Rozee",
  "flags": "1 AFL flag (2004)"
 },
 "WCE": {
  "base": "Perth, Western Australia",
  "founded": "1986 (first season 1987)",
  "home": "Optus Stadium",
  "colours": "Blue and gold",
  "coach": "Andrew McQualter",
  "captain": "Liam Duggan & Liam Baker",
  "flags": "4 (last 2018)"
 },
 "FRE": {
  "base": "Fremantle, Western Australia",
  "founded": "1994 (first season 1995)",
  "home": "Optus Stadium",
  "colours": "Purple",
  "coach": "Justin Longmuir",
  "captain": "Alex Pearce",
  "flags": "0"
 },
 "SYD": {
  "base": "Sydney, New South Wales",
  "founded": "1874 (as South Melbourne; relocated 1982)",
  "home": "SCG",
  "colours": "Red and white",
  "coach": "Dean Cox",
  "captain": "Callum Mills & Isaac Heeney",
  "flags": "5 (last 2012)"
 },
 "GWS": {
  "base": "Western Sydney, New South Wales",
  "founded": "2009 (first season 2012)",
  "home": "ENGIE Stadium & Manuka Oval",
  "colours": "Orange and charcoal",
  "coach": "Adam Kingsley",
  "captain": "Toby Greene",
  "flags": "0"
 },
 "BRL": {
  "base": "Brisbane, Queensland",
  "founded": "1996 (Fitzroy + Bears merger)",
  "home": "The Gabba",
  "colours": "Maroon, blue and gold",
  "coach": "Chris Fagan",
  "captain": "Harris Andrews, Hugh McCluggage & Josh Dunkley",
  "flags": "5 (last 2025)"
 },
 "GCS": {
  "base": "Gold Coast, Queensland",
  "founded": "2009 (first season 2011)",
  "home": "People First Stadium",
  "colours": "Red and gold",
  "coach": "Damien Hardwick",
  "captain": "Noah Anderson",
  "flags": "0"
 }
};

const milestones = {
 "GWS": [
  "Established in 2012 as an expansion club to grow the game in a rugby-league heartland, with no history to draw on.",
  "Handed heavy draft and list concessions to build from scratch.",
  "Reached a maiden grand final in 2019 and has been a regular finalist since.",
  "Still chasing a first premiership."
 ],
 "GCS": [
  "Entered the AFL in 2011, built from scratch in a rugby-league and tourism heartland with no football tradition.",
  "Given years of draft concessions yet went thirteen seasons without finals, the longest such wait.",
  "Matt Rowell, the No. 1 pick in 2019, won the 2025 Brownlow Medal.",
  "Broke through for a maiden finals series in 2025 before a hard 2026 pulled the club back."
 ]
};

const scoring = {
 "afl_q1": {
  "A": {
   "CAR": 2,
   "MEL": 2,
   "ESS": 2,
   "GEE": 2
  },
  "B": {
   "COL": 2,
   "RIC": 2,
   "PTA": 2,
   "FRE": 2
  },
  "C": {
   "HAW": 2,
   "WCE": 2,
   "SYD": 2,
   "ADE": 2,
   "BRL": 2
  },
  "D": {
   "NTH": 2,
   "STK": 2,
   "WBD": 2,
   "GWS": 2,
   "GCS": 2
  }
 },
 "afl_q2": {
  "A": {
   "RIC": 2,
   "GCS": 2,
   "ADE": 2,
   "CAR": 2
  },
  "B": {
   "SYD": 2,
   "GEE": 2,
   "WBD": 2,
   "NTH": 2
  },
  "C": {
   "HAW": 2,
   "BRL": 2,
   "GWS": 2,
   "MEL": 2
  },
  "D": {
   "COL": 2,
   "ESS": 2,
   "WCE": 2,
   "STK": 2,
   "FRE": 2,
   "PTA": 2
  }
 },
 "afl_q4": {
  "A": {
   "NTH": 2,
   "GEE": 2,
   "SYD": 2,
   "WCE": 2
  },
  "B": {
   "STK": 2,
   "ESS": 2,
   "FRE": 2,
   "MEL": 2
  },
  "C": {
   "WBD": 2,
   "GCS": 2,
   "ADE": 2,
   "BRL": 2
  },
  "D": {
   "PTA": 2,
   "RIC": 2,
   "COL": 2,
   "CAR": 2,
   "HAW": 2,
   "GWS": 2
  }
 },
 "afl_q5": {
  "A": {
   "COL": 2,
   "ESS": 2,
   "NTH": 2,
   "MEL": 2,
   "PTA": 2,
   "CAR": 2
  },
  "B": {
   "GWS": 2,
   "GCS": 2,
   "ADE": 2,
   "WCE": 2
  },
  "C": {
   "WBD": 2,
   "FRE": 2,
   "STK": 2,
   "GEE": 2
  },
  "D": {
   "HAW": 2,
   "SYD": 2,
   "BRL": 2,
   "RIC": 2
  }
 },
 "afl_q7": {
  "A": {
   "PTA": 2,
   "COL": 2,
   "ESS": 2,
   "GWS": 2
  },
  "B": {
   "HAW": 2,
   "GEE": 2,
   "SYD": 2,
   "WCE": 2,
   "MEL": 2,
   "CAR": 2
  },
  "C": {
   "RIC": 2,
   "STK": 2,
   "FRE": 2,
   "NTH": 2
  },
  "D": {
   "BRL": 2,
   "ADE": 2,
   "WBD": 2,
   "GCS": 2
  }
 },
 "afl_q8": {
  "A": {
   "COL": 2,
   "RIC": 2,
   "ESS": 2,
   "FRE": 2
  },
  "B": {
   "CAR": 2,
   "MEL": 2,
   "GEE": 2,
   "WBD": 2,
   "PTA": 2,
   "STK": 2,
   "NTH": 2
  },
  "C": {
   "WCE": 2,
   "ADE": 2,
   "SYD": 2,
   "HAW": 2,
   "BRL": 2
  },
  "D": {
   "GWS": 2,
   "GCS": 2
  }
 },
 "afl_q10": {
  "A": {
   "COL": 2,
   "ESS": 2,
   "RIC": 2,
   "NTH": 2,
   "STK": 2,
   "FRE": 2,
   "WBD": 2,
   "PTA": 2
  },
  "B": {
   "HAW": 2,
   "WCE": 2,
   "ADE": 2,
   "SYD": 2,
   "BRL": 2
  },
  "C": {
   "CAR": 2,
   "MEL": 2,
   "GEE": 2
  },
  "D": {
   "GWS": 2,
   "GCS": 2
  }
 },
 "afl_q11": {
  "A": {
   "HAW": 2,
   "BRL": 2,
   "GWS": 2,
   "MEL": 2,
   "ADE": 2,
   "ESS": 2,
   "WCE": 2
  },
  "B": {
   "SYD": 2,
   "GEE": 2,
   "WBD": 2,
   "NTH": 2,
   "FRE": 2
  },
  "C": {
   "RIC": 2,
   "GCS": 2,
   "CAR": 2,
   "STK": 2
  },
  "D": {
   "PTA": 2,
   "COL": 2
  }
 },
 "afl_q12": {
  "A": {
   "COL": 2,
   "HAW": 2,
   "GEE": 2,
   "CAR": 2
  },
  "B": {
   "RIC": 2,
   "PTA": 2,
   "SYD": 2,
   "BRL": 2,
   "ESS": 2,
   "WCE": 2,
   "ADE": 2
  },
  "C": {
   "STK": 2,
   "NTH": 2,
   "WBD": 2,
   "FRE": 2,
   "MEL": 2
  },
  "D": {
   "GWS": 2,
   "GCS": 2
  }
 },
 "afl_q3": {
  "1": {
   "CAR": 3,
   "COL": 3,
   "HAW": 3,
   "WCE": 3,
   "GEE": 2,
   "ADE": 2,
   "SYD": 2,
   "GWS": 2,
   "BRL": 2,
   "ESS": 2,
   "RIC": 2,
   "PTA": 2
  },
  "2": {
   "CAR": 2,
   "COL": 2,
   "HAW": 2,
   "WCE": 2,
   "GEE": 3,
   "ADE": 3,
   "SYD": 3,
   "GWS": 3,
   "BRL": 3,
   "ESS": 3,
   "RIC": 3,
   "PTA": 3,
   "MEL": 1,
   "WBD": 1,
   "FRE": 1,
   "GCS": 1
  },
  "3": {
   "CAR": 1,
   "COL": 1,
   "HAW": 1,
   "WCE": 1,
   "GEE": 2,
   "ADE": 2,
   "SYD": 2,
   "GWS": 2,
   "BRL": 2,
   "ESS": 2,
   "RIC": 2,
   "PTA": 2,
   "MEL": 2,
   "WBD": 2,
   "FRE": 2,
   "GCS": 2,
   "NTH": 1,
   "STK": 1
  },
  "4": {
   "GEE": 1,
   "ADE": 1,
   "SYD": 1,
   "GWS": 1,
   "BRL": 1,
   "ESS": 1,
   "RIC": 1,
   "PTA": 1,
   "MEL": 3,
   "WBD": 3,
   "FRE": 3,
   "GCS": 3,
   "NTH": 2,
   "STK": 2
  },
  "5": {
   "MEL": 2,
   "WBD": 2,
   "FRE": 2,
   "GCS": 2,
   "NTH": 3,
   "STK": 3
  }
 },
 "afl_q6": {
  "1": {
   "RIC": 3,
   "STK": 3,
   "PTA": 2,
   "FRE": 2,
   "COL": 1,
   "ESS": 1,
   "ADE": 1,
   "BRL": 1
  },
  "2": {
   "RIC": 2,
   "STK": 2,
   "PTA": 3,
   "FRE": 3,
   "COL": 2,
   "ESS": 2,
   "ADE": 2,
   "BRL": 2,
   "GEE": 1,
   "MEL": 1,
   "NTH": 1,
   "WBD": 1,
   "GCS": 1
  },
  "3": {
   "RIC": 1,
   "STK": 1,
   "PTA": 2,
   "FRE": 2,
   "COL": 3,
   "ESS": 3,
   "ADE": 3,
   "BRL": 3,
   "GEE": 2,
   "MEL": 2,
   "NTH": 2,
   "WBD": 2,
   "GCS": 2,
   "CAR": 1,
   "HAW": 1,
   "WCE": 1,
   "SYD": 1,
   "GWS": 1
  },
  "4": {
   "PTA": 1,
   "FRE": 1,
   "COL": 2,
   "ESS": 2,
   "ADE": 2,
   "BRL": 2,
   "GEE": 3,
   "MEL": 3,
   "NTH": 3,
   "WBD": 3,
   "GCS": 3,
   "CAR": 2,
   "HAW": 2,
   "WCE": 2,
   "SYD": 2,
   "GWS": 2
  },
  "5": {
   "COL": 1,
   "ESS": 1,
   "ADE": 1,
   "BRL": 1,
   "GEE": 2,
   "MEL": 2,
   "NTH": 2,
   "WBD": 2,
   "GCS": 2,
   "CAR": 3,
   "HAW": 3,
   "WCE": 3,
   "SYD": 3,
   "GWS": 3
  }
 },
 "afl_q9": {
  "1": {
   "GEE": 3,
   "MEL": 3,
   "CAR": 2,
   "COL": 2,
   "ESS": 2,
   "PTA": 2,
   "RIC": 2,
   "NTH": 1,
   "STK": 1,
   "WBD": 1,
   "ADE": 1,
   "WCE": 1,
   "FRE": 1
  },
  "2": {
   "GEE": 2,
   "MEL": 2,
   "CAR": 3,
   "COL": 3,
   "ESS": 3,
   "PTA": 3,
   "RIC": 3,
   "NTH": 2,
   "STK": 2,
   "WBD": 2,
   "ADE": 2,
   "WCE": 2,
   "FRE": 2,
   "HAW": 1,
   "BRL": 1
  },
  "3": {
   "GEE": 1,
   "MEL": 1,
   "CAR": 2,
   "COL": 2,
   "ESS": 2,
   "PTA": 2,
   "RIC": 2,
   "NTH": 3,
   "STK": 3,
   "WBD": 3,
   "ADE": 3,
   "WCE": 3,
   "FRE": 3,
   "HAW": 2,
   "BRL": 2,
   "SYD": 1,
   "GWS": 1,
   "GCS": 1
  },
  "4": {
   "CAR": 1,
   "COL": 1,
   "ESS": 1,
   "PTA": 1,
   "RIC": 1,
   "NTH": 2,
   "STK": 2,
   "WBD": 2,
   "ADE": 2,
   "WCE": 2,
   "FRE": 2,
   "HAW": 3,
   "BRL": 3,
   "SYD": 2,
   "GWS": 2,
   "GCS": 2
  },
  "5": {
   "NTH": 1,
   "STK": 1,
   "WBD": 1,
   "ADE": 1,
   "WCE": 1,
   "FRE": 1,
   "HAW": 2,
   "BRL": 2,
   "SYD": 3,
   "GWS": 3,
   "GCS": 3
  }
 }
};

const teamDims = {
 "CAR": {
  "loyalty": 8,
  "emotion": 4,
  "ambition": 9,
  "process": 6,
  "community": 6,
  "chaos": 3,
  "rootedness": 8
 },
 "COL": {
  "loyalty": 9,
  "emotion": 6,
  "ambition": 9,
  "process": 6,
  "community": 10,
  "chaos": 4,
  "rootedness": 8
 },
 "ESS": {
  "loyalty": 8,
  "emotion": 6,
  "ambition": 7,
  "process": 5,
  "community": 6,
  "chaos": 4,
  "rootedness": 8
 },
 "GEE": {
  "loyalty": 8,
  "emotion": 5,
  "ambition": 8,
  "process": 9,
  "community": 8,
  "chaos": 2,
  "rootedness": 9
 },
 "HAW": {
  "loyalty": 6,
  "emotion": 4,
  "ambition": 9,
  "process": 9,
  "community": 5,
  "chaos": 3,
  "rootedness": 5
 },
 "MEL": {
  "loyalty": 8,
  "emotion": 5,
  "ambition": 5,
  "process": 6,
  "community": 5,
  "chaos": 4,
  "rootedness": 10
 },
 "NTH": {
  "loyalty": 8,
  "emotion": 5,
  "ambition": 4,
  "process": 4,
  "community": 6,
  "chaos": 6,
  "rootedness": 6
 },
 "RIC": {
  "loyalty": 8,
  "emotion": 9,
  "ambition": 7,
  "process": 5,
  "community": 9,
  "chaos": 8,
  "rootedness": 7
 },
 "STK": {
  "loyalty": 7,
  "emotion": 9,
  "ambition": 4,
  "process": 4,
  "community": 6,
  "chaos": 6,
  "rootedness": 6
 },
 "WBD": {
  "loyalty": 6,
  "emotion": 5,
  "ambition": 5,
  "process": 5,
  "community": 9,
  "chaos": 5,
  "rootedness": 6
 },
 "ADE": {
  "loyalty": 5,
  "emotion": 6,
  "ambition": 8,
  "process": 6,
  "community": 7,
  "chaos": 4,
  "rootedness": 6
 },
 "PTA": {
  "loyalty": 8,
  "emotion": 8,
  "ambition": 7,
  "process": 6,
  "community": 8,
  "chaos": 4,
  "rootedness": 8
 },
 "WCE": {
  "loyalty": 6,
  "emotion": 4,
  "ambition": 9,
  "process": 7,
  "community": 6,
  "chaos": 3,
  "rootedness": 6
 },
 "FRE": {
  "loyalty": 6,
  "emotion": 8,
  "ambition": 5,
  "process": 5,
  "community": 8,
  "chaos": 6,
  "rootedness": 6
 },
 "SYD": {
  "loyalty": 6,
  "emotion": 4,
  "ambition": 8,
  "process": 9,
  "community": 5,
  "chaos": 2,
  "rootedness": 3
 },
 "GWS": {
  "loyalty": 3,
  "emotion": 4,
  "ambition": 8,
  "process": 8,
  "community": 3,
  "chaos": 5,
  "rootedness": 2
 },
 "BRL": {
  "loyalty": 6,
  "emotion": 6,
  "ambition": 8,
  "process": 8,
  "community": 6,
  "chaos": 5,
  "rootedness": 5
 },
 "GCS": {
  "loyalty": 3,
  "emotion": 5,
  "ambition": 5,
  "process": 6,
  "community": 3,
  "chaos": 6,
  "rootedness": 2
 }
};

const CARD_BADGES = {
 "CAR": "🔷",
 "COL": "🐦‍⬛",
 "ESS": "✴️",
 "GEE": "🐱",
 "HAW": "🟫",
 "MEL": "😈",
 "NTH": "🦘",
 "RIC": "🐯",
 "STK": "😇",
 "WBD": "🐶",
 "ADE": "🐦",
 "PTA": "⚡",
 "WCE": "🦅",
 "FRE": "🟣",
 "SYD": "🦢",
 "GWS": "🟠",
 "BRL": "🦁",
 "GCS": "☀️"
};

const badgeUrls = {};
const squadUrls = {};

export { moduleQuestions, teams, archetypes, teamTextColors, greats, vitalStats, milestones, scoring, teamDims, CARD_BADGES, badgeUrls, squadUrls };
