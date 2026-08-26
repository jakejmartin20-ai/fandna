// FanDNA - IPL (World group). Fingerprint sport on the shared engine (Option B spine, all 7 slots).
// Research-grounded enduring-soul teamDims (The Ten Souls of the IPL dossier); present-day divergence
// carried in the write-ups, never in a scored value. 10 franchises. Lean module of 4 spine-orthogonal
// questions (slider / binary / binary / three-way choice) - the count is justified by measurement, not
// a default (IPL scores all 7 spine slots, so a fifth module Q would re-ask an instinct). The 7 shared
// spine tables + the module whitelist live in ipl-spine.js; teamDims and the module come from here.
// Result-screen crest is the owned ClubMark (colour + code3); badgeUrls unused. UK/EU English.

const moduleQuestions = [
  {
    "id": "ipl_q1",
    "type": "slider",
    "phase": "The fine print",
    "question": "When you take a chance on someone, which way do you lean?",
    "left": "The numbers. A record doesn't lie, and a hunch is just a story you tell yourself.",
    "right": "My gut. You can measure someone to the last detail and still miss what they're made of."
  },
  {
    "id": "ipl_q2",
    "type": "binary",
    "phase": "The fine print",
    "question": "How did the people you're proudest of get there?",
    "left": "They started rough and grew into it. Nothing beats watching someone become who they were meant to be.",
    "right": "They had it from the start. I'll take someone already proven over a promising maybe."
  },
  {
    "id": "ipl_q3",
    "type": "binary",
    "phase": "The fine print",
    "question": "Some people want to be seen. Others keep their head down. Which is you?",
    "left": "I like to be seen. If I've done something good, I'd rather it was out loud than hidden.",
    "right": "I keep my head down. I let the work speak and skip the noise."
  },
  {
    "id": "ipl_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "In the places you're part of, where does the energy come from?",
    "options": [
      {
        "label": "One strong person at the top. Their mood sets the tone, and I like it that way.",
        "value": "A"
      },
      {
        "label": "The way the whole thing is built. The good ones run themselves, no big personality needed.",
        "value": "B"
      },
      {
        "label": "The people in it. The crowd, the family around it, that's what carries the place.",
        "value": "C"
      }
    ]
  }
];

const teams = {
  "CSK": {
    "name": "Chennai Super Kings",
    "emoji": "👑",
    "color": "#FDB913",
    "code3": "CSK",
    "kitType": "duo",
    "secondaryColor": "#1A3A8B",
    "tagline": "Five titles, one captain, and a yellow that never fades, because the badge was always bigger than the result.",
    "desc": "You are the calm at the centre of the league, the family that never turns on its own. Yellow is close to a religion where you're from, and the whistle goes up whether the season is soaring or sinking. You back your people to a fault. It's hard to earn a place with you and harder still to lose one, because you give the long rope and don't panic when results wobble. You've won five times without ever seeming to chase it, and when you were once forced away for two seasons you simply came back and won again. Your roots run as deep as anyone's, woven into a whole region's sense of itself. You measure yourself by faith kept, not by the table.",
    "why": [
      "You stay, full stop. Your loyalty is unconditional and holds through the lean years exactly as through the good ones.",
      "Your bond is a whole community's, handed down and worn in public, the closest thing the league has to a family.",
      "You keep your composure while others come apart, trusting the patient way and letting results find you."
    ]
  },
  "MI": {
    "name": "Mumbai Indians",
    "emoji": "💙",
    "color": "#004B8D",
    "code3": "MI",
    "kitType": "duo",
    "secondaryColor": "#D1AB3E",
    "tagline": "Five titles and a machine built to win, where the standard is simple: winning is not negotiable.",
    "desc": "You are the professional's professional, the operation everyone else measures against. Winning isn't a hope for you, it's the baseline, and everything bends toward it. You run on method and cold clarity rather than sentiment, which is how you've built five titles and a habit of peaking exactly when it matters. You're loyal to a stable core and have a real gift for raising your own, taking the unproven and making them great. But you'll make the hard, unsentimental call when the numbers demand it, even moving on from a legend, because results come before feelings. Others find you clinical and a little cold. You'd say you simply refuse to let anything get in the way of the win.",
    "why": [
      "You trust the system above all. Titles at your level aren't luck, they're a machine tuned to the last detail.",
      "You aim only at the top and expect to stay there. Second place isn't a result you recognise.",
      "You keep sentiment out of the big calls. When the evidence says move on, you move on, whoever it is."
    ]
  },
  "RCB": {
    "name": "Royal Challengers Bengaluru",
    "emoji": "🦁",
    "color": "#D5152C",
    "code3": "RCB",
    "kitType": "duo",
    "secondaryColor": "#C5A028",
    "tagline": "Seventeen years without a trophy and a fanbase that never once wavered, and now, back to back, the cup is finally yours.",
    "desc": "You are the romantic of the league, the one who loved without reward for the longest time and never stopped. Glamour was in you from the start, a side full of superstars and a following that filled the ground in red and gold long before there was anything to celebrate. For seventeen years the cup slipped away, final after final, and still the chant went up every spring: this year, it's ours. You won that loyalty the hard way, through the heartbreak rather than the winning. That is the soul, and it doesn't change now that the wait is over. Because it is over: champions at last, then champions again, with the same faithful faces who stayed through all of it. You feel every result at full volume, and you wouldn't swap a single year of the pain for a colder, easier road to the top.",
    "why": [
      "You stayed through everything. Loyalty, for you, was never about being rewarded, and seventeen lean years only proved it.",
      "You feel it all the way down. Every high and every low lands at full volume, and you wouldn't dull that for anything.",
      "You're drawn to the bright and the bold, the big names and the big nights, and you'll take heart over a tidy plan every time."
    ]
  },
  "KKR": {
    "name": "Kolkata Knight Riders",
    "emoji": "💜",
    "color": "#3A225D",
    "code3": "KKR",
    "kitType": "duo",
    "secondaryColor": "#B3A123",
    "tagline": "Star power out front and cold numbers behind it, and three titles that prove the two can live together.",
    "desc": "You are the rare mix of showbiz and spreadsheet, glamour on the surface and hard method underneath. Your nights are loud and starlit, a famous owner and a famous ground and a crowd that roars a name as much as a result. But behind the glow you're one of the most clear-eyed operators around, the first to bring real data into how you build, willing to tear the whole thing up and start clean when the analysis says so, even letting a local hero go for the plan. You're not sentimental about people, you're loyal to the system that keeps working. Three titles say the combination is no accident. You like the spotlight, and you like being right underneath it.",
    "why": [
      "You go by the numbers when it counts. The show is real, but the decisions are made on evidence.",
      "You like to be seen. If you're doing something well, you'd rather it happened out loud and in the light.",
      "You back the method over any one name. The system is what you're loyal to, and it has earned it."
    ]
  },
  "DC": {
    "name": "Delhi Capitals",
    "emoji": "🔷",
    "color": "#17449B",
    "code3": "DC",
    "kitType": "duo",
    "secondaryColor": "#EF1B23",
    "tagline": "Eighteen years, a pile of talent, and still no trophy, the nearly-men forever building toward a first crown.",
    "desc": "You are the talented one still waiting for the moment to arrive. You've been here since the very beginning and rebuilt yourself more than once, chasing a first title that keeps slipping away. Somewhere along the road you found your real purpose: taking young players nobody was sure about and turning them into the future, then trusting them. You're patient with potential and you stand by your people when it matters, even through the worst of times. The drama around you is the churn of always starting again, new leaders, new plans, the restless search for the missing piece. You've come close, once all the way to the final, but the crown stays just out of reach. You keep building anyway, certain your year is coming.",
    "why": [
      "You believe in what people can become, and you'd rather grow raw talent than buy the finished article.",
      "You keep chasing the top even after years of near misses, restless and unwilling to settle for close.",
      "You stand by your own through the hard stretches, and that patience is its own kind of loyalty."
    ]
  },
  "SRH": {
    "name": "Sunrisers Hyderabad",
    "emoji": "☀️",
    "color": "#F26522",
    "code3": "SRH",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "tagline": "The quiet team everyone quietly respects, run by an owner who wears every win and loss on her face.",
    "desc": "You are the underdog people root for even when they're not yours, the one who goes about the work without the noise the bigger names make. You rose from the ashes of a team that no longer exists and made a home in orange, and your following is smaller but as devoted as any. What gives you away is the heart on the sleeve: the person at the top feels every ball, visibly, and everyone can see it. You spent years as the disciplined, defensive side that ground out results, and then you flipped entirely into the most fearless, all-or-nothing team going, the kind that either blows the roof off or falls apart. Quiet in reputation, loud in feeling. You wouldn't have it any other way.",
    "why": [
      "You feel it deeply even when you keep it contained. The intensity is real, it just doesn't always announce itself.",
      "You do your work without needing the spotlight, and you've earned respect precisely because you never demanded it.",
      "The energy where you are comes from one person at the top whose heart is on show, and you like that it's out in the open."
    ]
  },
  "RR": {
    "name": "Rajasthan Royals",
    "emoji": "💗",
    "color": "#EA1A85",
    "code3": "RR",
    "kitType": "duo",
    "secondaryColor": "#21418A",
    "tagline": "Champions in the very first season with a team of unknowns, and ever since, the smart, scrappy gambler who does it differently.",
    "desc": "You are the clever underdog who never had the biggest budget and never needed it. You won it all in the first year with a side nobody had heard of, the ultimate against-the-odds story, and it set your whole character: find value where others don't look, back the unknown kid, do it your own way. You're one of the smartest operators in the room and also one of the most volatile, because betting on raw talent means the highs are dizzying and the lows are steep. Pink is your colour and a proud old city is your home. Some years the gamble comes off and you unearth the next star. Some years it collapses. You take the rollercoaster because playing it safe was never you.",
    "why": [
      "You go by what the numbers tell you, hunting the undervalued rather than the obvious names.",
      "You live with real volatility, the big swings up and down, because chasing the clever bet is worth the ride.",
      "You'd rather grow an unknown into a star than buy a finished one, and finding the diamond is the whole thrill."
    ]
  },
  "PBKS": {
    "name": "Punjab Kings",
    "emoji": "❤️",
    "color": "#D71920",
    "code3": "PBKS",
    "kitType": "duo",
    "secondaryColor": "#A7A9AC",
    "tagline": "Seventeen captains, endless reinvention, and a glamour that never quits, forever tearing it up to chase the formula.",
    "desc": "You are the beautiful chaos of the league, all colour and passion and constant reinvention. You've changed captains more than any side going, changed your name, your look, your plan, always convinced the next overhaul is the one that finally cracks it. The heart is real and it's loud, an owner who lives and dies with every ball and a Punjabi energy that lifts the whole thing. What you've never done is settle, build a steady core, and let it grow. You let your best go and watch them shine elsewhere, then start again from scratch. You've reached the final twice and come up short both times, still chasing a first crown. You're unpredictable to your bones. Nobody, including you, ever quite knows what they'll get.",
    "why": [
      "You're always reinventing, tearing it down and starting fresh in the belief the next version wins.",
      "You feel everything out loud. The passion is right on the surface, win or lose.",
      "You'd rather bring in the exciting finished name than patiently grow your own, and the churn is simply who you are."
    ]
  },
  "GT": {
    "name": "Gujarat Titans",
    "emoji": "⚡",
    "color": "#1B2133",
    "code3": "GT",
    "kitType": "duo",
    "secondaryColor": "#B4975A",
    "tagline": "Champions in your very first season and calm about it, the clinical newcomer who just quietly wins.",
    "desc": "You are the newcomer who arrived and immediately won, without fuss and without drama. In your first season you lifted the trophy, something no one had done before, and you've stayed near the top ever since, twice more within a game of the title. You do it the same way every time: a settled core, a balanced side, cool professional heads, and no interest in the noise. Where others overhaul, you trust what works and let it run. You don't do meltdowns and you don't do theatrics, and that steadiness is exactly the point. You're the youngest of the group with the least history, but you've made up the gap with pure competence. You're not here to take part. You're here to win, and you say so plainly.",
    "why": [
      "You trust the system and the balance of the whole thing, the calm execution that keeps producing.",
      "You're the least dramatic side there is, steady where others come apart, and you win because of it.",
      "You aim to win rather than merely compete, backing a stable core rather than chasing new names."
    ]
  },
  "LSG": {
    "name": "Lucknow Super Giants",
    "emoji": "💚",
    "color": "#0E9DA6",
    "code3": "LSG",
    "kitType": "duo",
    "secondaryColor": "#14213D",
    "tagline": "New money, big names, and no patience, the ambitious arriviste where the owner is the loudest voice in the room.",
    "desc": "You are the newest arrival with the deepest pockets and the shortest fuse. You spent big from day one, chasing the biggest names to announce yourself, and you've never been willing to wait. The defining picture of you is the owner's box, one powerful, demanding figure who sets the whole mood and isn't shy about showing displeasure in public when things go wrong. You have no history to lean on yet and not much of a settled identity, because people and plans turn over fast where you are. The ambition is enormous and so is the drama, and they come from the same place, the person at the top who wants it all now. You haven't won anything yet. You fully intend to, and soon.",
    "why": [
      "Your ambition is huge and impatient. You want the top, you want it now, and you'll spend whatever it takes.",
      "The energy where you are comes straight from one strong figure at the top whose mood sets the tone.",
      "You'd rather bring in the proven name than wait for someone to grow, because waiting was never your style."
    ]
  }
};

const archetypes = {
  "CSK": "Whistle Podu",
  "MI": "One Family",
  "RCB": "Ee Sala Cup Namde",
  "KKR": "Korbo Lorbo Jeetbo",
  "DC": "Yeh Hai Nayi Dilli",
  "SRH": "Orange Army",
  "RR": "Halla Bol",
  "PBKS": "Saadda Punjab",
  "GT": "Aavaa De",
  "LSG": "Ab Apni Baari"
};

const teamTextColors = {
  "CSK": "#FDD87A",
  "MI": "#7FA8D8",
  "RCB": "#EB8C93",
  "KKR": "#B79AD6",
  "DC": "#7F9BD8",
  "SRH": "#F6A375",
  "RR": "#F27CBB",
  "PBKS": "#E88C90",
  "GT": "#9AA0B4",
  "LSG": "#6FCFD6"
};

// Module scoring - the shared "points toward" lean layer on top of the core fingerprint. Cells author
// the craft leans; the fingerprint does the precise per-team landing. Two-pole slider graduated across
// the 5 notches; binaries left/right; the three-way choice A/B/C. Neutral clubs get an honest zero.
// Build-time magnet trim (s58): RCB is central in the core geometry (the devoted-romantic archetype),
// so its lean cells were capped to stop compounding - ipl_q1 notch 5 pulled to 2, and RCB dropped from
// ipl_q4.C ("the people", CSK still carries it). Mirror trims in ipl-spine.js (S2.A, S3, S4). This
// pulls RCB from a ~30% magnet to a smooth ~17% top (self-land 10/10, all clubs clear the floor). The
// teamDims grid is UNTOUCHED - the fix is cells only.
const scoring = {
  // Q1 data (left) vs gut (right). Left numbers: KKR RR GT MI. Right gut: RCB CSK PBKS LSG. DC/SRH neutral.
  "ipl_q1": {
    "1": { "KKR": 3, "RR": 3, "GT": 2, "MI": 2 },
    "2": { "KKR": 2, "RR": 2, "GT": 2, "MI": 2, "DC": 1 },
    "3": { "DC": 1, "SRH": 1 },
    "4": { "RCB": 2, "CSK": 2, "PBKS": 2, "LSG": 2, "SRH": 1 },
    "5": { "RCB": 2, "CSK": 3, "PBKS": 2, "LSG": 2 }
  },
  // Q2 grow (left) vs buy (right). Left self-made: MI RR DC GT. Right finished: LSG RCB PBKS. CSK/KKR/SRH neutral.
  "ipl_q2": {
    "left":  { "MI": 2, "RR": 2, "DC": 2, "GT": 2 },
    "right": { "LSG": 2, "RCB": 2, "PBKS": 2 }
  },
  // Q3 out-loud (left) vs quiet (right). Left: RCB KKR PBKS. Right: SRH GT RR MI. CSK/DC/LSG neutral.
  "ipl_q3": {
    "left":  { "RCB": 2, "KKR": 2, "PBKS": 2 },
    "right": { "SRH": 2, "GT": 2, "RR": 2, "MI": 2 }
  },
  // Q4 energy: A one strong figure (LSG PBKS SRH), B runs itself (MI GT KKR), C the people (RCB CSK). DC/RR neutral.
  "ipl_q4": {
    "A": { "LSG": 2, "PBKS": 2, "SRH": 2 },
    "B": { "MI": 2, "GT": 2, "KKR": 2 },
    "C": { "CSK": 2 }
  }
};

const teamDims = {
  "CSK":  { "loyalty": 9, "emotion": 6, "ambition": 7, "process": 7, "community": 9, "chaos": 2, "rootedness": 9 },
  "MI":   { "loyalty": 6, "emotion": 4, "ambition": 9, "process": 9, "community": 5, "chaos": 3, "rootedness": 7 },
  "RCB":  { "loyalty": 9, "emotion": 9, "ambition": 8, "process": 3, "community": 7, "chaos": 7, "rootedness": 7 },
  "KKR":  { "loyalty": 5, "emotion": 7, "ambition": 8, "process": 9, "community": 7, "chaos": 3, "rootedness": 6 },
  "DC":   { "loyalty": 5, "emotion": 5, "ambition": 7, "process": 6, "community": 4, "chaos": 6, "rootedness": 5 },
  "SRH":  { "loyalty": 5, "emotion": 8, "ambition": 6, "process": 7, "community": 5, "chaos": 4, "rootedness": 5 },
  "RR":   { "loyalty": 5, "emotion": 6, "ambition": 7, "process": 9, "community": 5, "chaos": 8, "rootedness": 5 },
  "PBKS": { "loyalty": 3, "emotion": 8, "ambition": 7, "process": 2, "community": 5, "chaos": 9, "rootedness": 4 },
  "GT":   { "loyalty": 7, "emotion": 4, "ambition": 8, "process": 9, "community": 4, "chaos": 2, "rootedness": 4 },
  "LSG":  { "loyalty": 3, "emotion": 7, "ambition": 9, "process": 4, "community": 3, "chaos": 8, "rootedness": 2 }
};

const CARD_BADGES = {
  "CSK": "👑",
  "MI": "💙",
  "RCB": "🦁",
  "KKR": "💜",
  "DC": "🔷",
  "SRH": "☀️",
  "RR": "💗",
  "PBKS": "❤️",
  "GT": "⚡",
  "LSG": "💚"
};

const badgeUrls = {};
const squadUrls = {};

// Enduring club milestones (dossier-grounded, no perishable roster/owner data). Shown on the result
// screen via the shared greats/milestones slot (IPL carries no separate greats/vitals maps by design;
// each team's history lives in its write-up).
const milestones = {
  "CSK": [
    "Five titles, the joint-most in the league's history, won across 2010, 2011, 2018, 2021 and 2023.",
    "Served a two-season absence in 2016 and 2017, then returned and won the title again in 2018.",
    "Built a dynasty around one long-serving captain and a settled, veteran core rather than constant change.",
    "The yellow home crowd and its whistle are among the most devoted followings in the sport."
  ],
  "MI": [
    "Five titles, level with Chennai for the most in the league's history.",
    "Won back-to-back championships in 2019 and 2020, one of only three sides ever to defend the trophy.",
    "Known for a ruthless, process-driven setup that tends to peak in the knockout stages.",
    "A production line for uncapped domestic talent, turning unknowns into international stars."
  ],
  "RCB": [
    "Waited seventeen seasons for a first title, losing finals in 2009, 2011 and 2016 along the way.",
    "Finally won in 2025, then defended it in 2026, only the third side ever to go back-to-back.",
    "Carried one of the largest and most loyal followings in the league through the long drought.",
    "Long defined by star power and heartbreak in equal measure."
  ],
  "KKR": [
    "Three titles, won in 2012, 2014 and 2024.",
    "Among the first franchises to build seriously around data and analytics.",
    "Backed by a film-star owner and the roar of a famous Kolkata ground.",
    "Known for bold, unsentimental squad calls, including letting local favourites go."
  ],
  "DC": [
    "Yet to win a title, the longest wait of any side present since the very first season.",
    "Reached a maiden final in 2020, losing to Mumbai.",
    "Rebuilt around young, uncapped talent more than once.",
    "Long cast as the talented nearly-men still chasing a first crown."
  ],
  "SRH": [
    "Won the title in 2016, beating Bengaluru in the final.",
    "Rose in 2013 from the base of the disbanded Deccan Chargers side.",
    "Reached further finals in 2018 and 2024.",
    "Shifted from a disciplined, defensive identity into one of the most fearless batting sides in the league."
  ],
  "RR": [
    "Won the very first edition in 2008 with a squad of unknowns on a shoestring budget.",
    "Reached another final in 2022.",
    "Built a lasting identity around unearthing undervalued and uncapped talent.",
    "One of the most analytically driven and boldest recruiters in the league."
  ],
  "PBKS": [
    "Reached the final in 2014 and again in 2025, losing both.",
    "Still chasing a first title after nineteen seasons.",
    "Changed captains and rebuilt more often than any other side.",
    "Known for colour, unpredictability and constant reinvention."
  ],
  "GT": [
    "Won the title in 2022, their very first season, a feat no other side has managed.",
    "Finished runners-up in 2023 and again in 2026.",
    "The youngest current side, entering the league in 2022.",
    "Built on a settled core and a calm, low-drama professionalism."
  ],
  "LSG": [
    "Entered the league in 2022 alongside Gujarat.",
    "Reached the playoffs in each of its first two seasons.",
    "Backed by heavy spending and one of the most visible, hands-on owners in the league.",
    "Yet to win a title, with a fast-changing squad and an identity still forming."
  ]
};

// Club Info table for the result-screen Vitals chapter. Enduring, dossier-grounded facts only.
// Titles + last title are the sole moving fields and are web-verified at build (s58: RCB back-to-back
// 2025+2026, GT runner-up 2026, PBKS still title-less; MI/CSK five each; KKR 2024). Capacities are
// widely-cited approximate seated figures. Title-less clubs omit lastTitle so that row simply drops
// (the render filters empty rows), which also avoids an em dash in user-facing copy.
const vitalStats = {
  "CSK":  { firstSeason: 2008, ground: "MA Chidambaram Stadium (Chepauk)", city: "Chennai", capacity: "~50,000", colours: "Yellow and blue", titles: "Five (2010, 2011, 2018, 2021, 2023)", lastTitle: "2023" },
  "MI":   { firstSeason: 2008, ground: "Wankhede Stadium", city: "Mumbai", capacity: "~33,000", colours: "Blue and gold", titles: "Five (2013, 2015, 2017, 2019, 2020)", lastTitle: "2020" },
  "RCB":  { firstSeason: 2008, ground: "M. Chinnaswamy Stadium", city: "Bengaluru", capacity: "~40,000", colours: "Red and gold", titles: "Two (2025, 2026)", lastTitle: "2026" },
  "KKR":  { firstSeason: 2008, ground: "Eden Gardens", city: "Kolkata", capacity: "~66,000", colours: "Purple and gold", titles: "Three (2012, 2014, 2024)", lastTitle: "2024" },
  "DC":   { firstSeason: 2008, ground: "Arun Jaitley Stadium", city: "Delhi", capacity: "~35,000", colours: "Blue and red", titles: "None yet" },
  "SRH":  { firstSeason: 2013, ground: "Rajiv Gandhi International Cricket Stadium", city: "Hyderabad", capacity: "~55,000", colours: "Orange and black", titles: "One (2016)", lastTitle: "2016" },
  "RR":   { firstSeason: 2008, ground: "Sawai Mansingh Stadium", city: "Jaipur", capacity: "~30,000", colours: "Pink and blue", titles: "One (2008)", lastTitle: "2008" },
  "PBKS": { firstSeason: 2008, ground: "Maharaja Yadavindra Singh Stadium (Mullanpur)", city: "New Chandigarh", capacity: "~38,000", colours: "Red and silver", titles: "None yet" },
  "GT":   { firstSeason: 2022, ground: "Narendra Modi Stadium", city: "Ahmedabad", capacity: "~132,000", colours: "Navy and gold", titles: "One (2022)", lastTitle: "2022" },
  "LSG":  { firstSeason: 2022, ground: "Ekana Cricket Stadium", city: "Lucknow", capacity: "~50,000", colours: "Teal and navy", titles: "None yet" }
};

export { moduleQuestions, teams, archetypes, teamTextColors, milestones, vitalStats, scoring, teamDims, CARD_BADGES, badgeUrls, squadUrls };
