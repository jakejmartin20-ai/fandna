import { DIM_LABELS, DIM_COLORS, DIM_CODES, DIM_ORDER } from "./core";
// FanDNA data — all literals extracted verbatim from App.jsx (Phase 1 refactor, behaviour-neutral).
// Currently holds the full PL + core dataset; Phase 2 lifts core questions into core.js.

const moduleQuestions = [
  {
    "id": "pl_q1",
    "type": "binary",
    "phase": "The fine print",
    "question": "Which lands closer:",
    "left": "The story of how it happened matters as much as that it happened",
    "right": "Nobody remembers how. They remember the result"
  },
  {
    "id": "pl_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "Your relationship with being right:",
    "options": [
      {
        "label": "I need the world to eventually acknowledge it.",
        "value": "A"
      },
      {
        "label": "Knowing I was right is enough.",
        "value": "B"
      },
      {
        "label": "Being right without winning is cold comfort.",
        "value": "C"
      },
      {
        "label": "I'm more interested in being accurate than right.",
        "value": "D"
      },
      {
        "label": "I'm wrong often enough that I hold it loosely.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "Contentment:",
    "left": "I'm genuinely okay with what I have, peace is underrated",
    "right": "Contentment is just ambition that gave up"
  },
  {
    "id": "pl_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "Which stings most?",
    "options": [
      {
        "label": "Being second when you should have won.",
        "value": "A"
      },
      {
        "label": "Not being taken seriously.",
        "value": "B"
      },
      {
        "label": "Getting close over and over and never quite making it.",
        "value": "C"
      },
      {
        "label": "Being let down by someone you trusted completely.",
        "value": "D"
      },
      {
        "label": "Watching someone else succeed with your approach.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q5",
    "type": "binary",
    "phase": "The fine print",
    "question": "Deep down:",
    "left": "I want one perfect, improbable, unforgettable moment",
    "right": "I want sustained, proven, undeniable excellence"
  },
  {
    "id": "pl_q6",
    "type": "choice",
    "phase": "The fine print",
    "question": "Which sentence actually fits:",
    "options": [
      {
        "label": "\"We've been here before. We know what to do.\"",
        "value": "A"
      },
      {
        "label": "\"This time genuinely feels different.\"",
        "value": "B"
      },
      {
        "label": "\"Just once. I just want it to happen once.\"",
        "value": "C"
      },
      {
        "label": "\"The process is right. Results follow.\"",
        "value": "D"
      },
      {
        "label": "\"They never saw us coming.\"",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q7",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "When you turn out to be right:",
    "left": "Knowing it yourself is enough",
    "right": "You need the world to eventually acknowledge it"
  },
  {
    "id": "pl_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "An institution you love makes a decision that feels like a betrayal. You:",
    "options": [
      {
        "label": "Leave. That decision tells you everything.",
        "value": "A"
      },
      {
        "label": "Stay, but carry the anger alongside the love. Both are real.",
        "value": "B"
      },
      {
        "label": "Understand it even if you hate it. Institutions aren't simple.",
        "value": "C"
      },
      {
        "label": "Try to change it from the inside.",
        "value": "D"
      },
      {
        "label": "Separate the institution from the thing you actually love.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q9",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Belonging feels most real when:",
    "left": "It's tight and local, the same streets, the same faces",
    "right": "It's vast, thousands of people feeling the same thing simultaneously"
  },
  {
    "id": "pl_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The absence of burning ambition is:",
    "options": [
      {
        "label": "Peace. Not everything needs to be a project.",
        "value": "A"
      },
      {
        "label": "Concerning. Contentment is ambition that gave up.",
        "value": "B"
      },
      {
        "label": "Complicated. Depends what you've been through to get there.",
        "value": "C"
      },
      {
        "label": "Fine for now. The ambition comes back eventually.",
        "value": "D"
      },
      {
        "label": "Sometimes wisdom, sometimes fear. Hard to tell from inside.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q11",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Something you love:",
    "left": "Doesn't need to mean more than it is, the thing itself is enough",
    "right": "Needs to feel like it matters, like it's part of a bigger story"
  },
  {
    "id": "pl_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Your relationship with the improbable:",
    "options": [
      {
        "label": "I've seen it happen. That changed how I see what's possible.",
        "value": "A"
      },
      {
        "label": "I believe in it. I have no proof but I can't stop.",
        "value": "B"
      },
      {
        "label": "I'm drawn to it in stories even if I'm careful in real life.",
        "value": "C"
      },
      {
        "label": "I find it useful as a concept. Possibility matters.",
        "value": "D"
      },
      {
        "label": "I don't think in those terms. What happens, happens.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q13",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Belonging needs:",
    "left": "A place, a ground, a street, a city. Geography is the whole thing",
    "right": "A story, a history, a mythology, something that gives it meaning"
  },
  {
    "id": "pl_q14",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Holding genuine belief alongside full awareness of how unlikely it is:",
    "options": [
      {
        "label": "That's just called hope. Everyone does this.",
        "value": "A"
      },
      {
        "label": "It's a specific skill I've developed over years of practice.",
        "value": "B"
      },
      {
        "label": "I find it exhausting honestly.",
        "value": "C"
      },
      {
        "label": "I believe when I need to and protect myself when I don't.",
        "value": "D"
      },
      {
        "label": "I've stopped trying to reconcile the two. They both exist.",
        "value": "E"
      }
    ]
  }
];

// ─── CLUB DEFINITIONS ──────────────────────────────────────────────────────────
// 16 clubs. Each has: name, emoji, color, tagline, desc, why[], note, kit URL

const teams = {
  LI: {
    "code3": "LIV", "kitType": "solid", "secondaryColor": null,
    name:"Liverpool",         emoji:"🔴", color:"#C8102E",
    tagline:"You sing You'll Never Walk Alone and mean every single word.",
    desc:"There's a version of caring about something that's polite and measured. That's not you. When you're in, you're all the way in, the joy, the suffering, the mythology, all of it. You don't understand fans who stay quiet at the big moments. What's the point of feeling something if you're not going to let it out? The Kop exists because 50,000 people decided that collective feeling, taken to its absolute maximum, is the whole purpose. You already knew that.",
    why:[
      "Your emotional expression is outward and unreserved, Liverpool fandom is felt at full volume or it isn't real. You're the same.",
      "Belonging to something vast matters to you viscerally. Not the status of it, the sheer scale of shared feeling.",
      "You carry the past forward as fuel. The history isn't a burden, it's the reason this moment means something.",
    ],
    note:"18 league titles. 6 European Cups. You'll Never Walk Alone started as a show tune. It became a religion. That transformation is very Liverpool.",
    kit:"https://store.liverpoolfc.com/kit",
  },
  MC: {
    "code3": "MCI", "kitType": "solid", "secondaryColor": null,
    name:"Manchester City",   emoji:"🔵", color:"#6CABDD",
    tagline:"You watched a team hit 100 points and asked where the other 14 went.",
    desc:"You don't romanticise struggle. You prepare, you execute, and when it works you move immediately to the next standard. People call this cold, you call it honest. The emotional theatre around sport has never moved you much. What moves you is watching something done as well as it can be done, repeatedly, deliberately. Man City under Guardiola is the closest thing football has to a controlled experiment in sustained excellence. That's what you came for.",
    why:[
      "Your process orientation is at the ceiling, you trust preparation over inspiration, systems over sentiment.",
      "Your ambition is relentless and unsentimental. Trophies are the proof. Stories are for afterwards.",
      "Your chaos tolerance is genuinely low. You want control, and you back it with the preparation to earn it.",
    ],
    note:"Four consecutive league titles. Guardiola built something that made dominance look structural rather than exceptional. That is the hardest thing in sport.",
    kit:"https://www.mancity.com/shop",
  },
  AR: {
    "code3": "ARS", "kitType": "solid", "secondaryColor": null,
    name:"Arsenal",           emoji:"🔴", color:"#EF0107",
    tagline:"You watched 49 games unbeaten. You've been grading on that curve ever since.",
    desc:"You have strong opinions about how things should be done, not just whether they work, but whether they're right. There's a method you believe in, an aesthetic you hold to, and you've developed a specific kind of frustration reserved for situations where you're clearly correct and the outcome hasn't caught up yet. Other people find this exhausting. You find their indifference to craft exhausting. Arsenal is a club that plays the way you think things should be done, loses occasionally, and absolutely will not apologise for the approach.",
    why:[
      "How you win matters to you, the method isn't separate from the outcome, it's part of it. That's pure Arsenal.",
      "Your resilience through near-misses is principled rather than desperate. The faith holds because the approach is sound.",
      "High craft motivation with genuine aesthetic standards. You care about the quality of the thing, not just the scoreline.",
    ],
    note:"The Invincibles. 2003/04. An entire Premier League season without a loss. It gets mentioned daily. It was earned.",
    kit:"https://arsenaldirect.arsenal.com/Football-Shirts-and-Kit/c/kit",
  },
  EV: {
    "code3": "EVE", "kitType": "solid", "secondaryColor": null,
    name:"Everton",           emoji:"🔵", color:"#003399",
    tagline:"You loved Goodison most in the seasons it gave you least.",
    desc:"The people you love most are the ones you've stuck with through the hard patches. Not because you couldn't leave, because that's not what loyalty means to you. You absorb things quietly. You don't perform your suffering for an audience. You've been waiting a long time for something and you've made a kind of peace with the waiting that isn't acceptance, exactly, more like stubbornness dressed up as patience. Goodison has held this feeling for over a century. You understand it completely.",
    why:[
      "Your loyalty is unconditional and it defines you more than almost anything else. You stay. That's the whole statement.",
      "Your suffering is private and inward. You don't broadcast it, you carry it. Very Evertonian.",
      "Your resilience through long droughts without abandoning hope is not optimism. It's something more stubborn than that.",
    ],
    note:"Nil satis nisi optimum. Nothing but the best is good enough. The motto is older than most of us and it has been tested repeatedly.",
    kit:"https://evertonfc.com/shop",
  },
  NC: {
    "code3": "NEW", "kitType": "stripes", "secondaryColor": "#FFFFFF",
    name:"Newcastle United",  emoji:"⚫", color:"#241F20",
    tagline:"The Toon stops on matchday. You've never once found that strange.",
    desc:"There's a difference between a fanbase and a city. Most clubs have the former. Newcastle is the latter, the whole place stops on matchday, every generation has supported them, and the identity of the city and the club are genuinely inseparable in a way that's almost impossible to manufacture. You've lived something like this, a belonging so complete it doesn't need explaining to the people who share it. St James' Park holds 52,000 and it has never once felt big enough to contain what the city brings to it.",
    why:[
      "Your community drive is at the top, specifically the real, local, place-rooted kind, not the global-brand kind.",
      "Your emotional expression is collective and outward. The thing happens together or it barely counts.",
      "The Ashley years were two decades of institutional frustration. The joy is real now, but it lands differently because of what came before.",
    ],
    note:"52,000 seats. Routinely not enough. The city's relationship with this club is genuinely unlike anything else in English football.",
    kit:"https://shop.nufc.co.uk",
  },
  WH: {
    "code3": "WHU", "kitType": "sash", "secondaryColor": "#1BB1E7",
    name:"West Ham",          emoji:"⚒️", color:"#7A263A",
    tagline:"You left your heart at Upton Park. You visit it from the London Stadium.",
    desc:"You're proud of where you come from and you don't need to justify that to anyone. But you also carry a specific frustration with institutions, the people who run the things you love making decisions that feel like a betrayal of what those things are supposed to be. The Upton Park move sits in the chest of every long-term West Ham fan in a specific way. You understand that feeling: belonging to something that was more itself before someone decided to make it bigger. You stayed anyway. So did they.",
    why:[
      "Your place-identity is fierce and specific, east London, the Boleyn Ground, what was there before. The brand is not the club.",
      "Your emotional register is proud but genuinely complicated. You carry both the love and the legitimate grievance.",
      "Your tolerance for institutional decisions you disagree with is low. But leaving never seriously crossed your mind.",
    ],
    note:"Conference League winners 2023. The Upton Park argument will not be resolved in our lifetimes. Both of these things are true.",
    kit:"https://www.whufc.com/shop",
  },
  CP: {
    "code3": "CRY", "kitType": "stripes", "secondaryColor": "#C41E3A",
    name:"Crystal Palace",    emoji:"🦅", color:"#1B458F",
    tagline:"Everyone underestimates Selhurst until they've stood in it.",
    desc:"The Holmesdale Fanatics have created one of the most genuinely intimidating atmospheres in English football through sheer organised will, tifos, chants, coordinated noise, not because Crystal Palace have trophies to fall back on, but precisely because they don't. You understand this instinct. When what you have is the thing itself, the place, the people, the matchday, you invest in that completely. You don't need history to hand you an identity. You build one, wall by wall, Saturday by Saturday.",
    why:[
      "Your place-identity is intense but self-created, not handed down by trophies but built through sustained collective effort.",
      "You have no need for mythology. The atmosphere you make is the narrative.",
      "Backs-against-the-wall energy defines you. When things get hard, you don't retreat, you get louder.",
    ],
    note:"Selhurst holds 25,000. The Holmesdale is England's first proper ultras section. For a club without major trophies, the atmosphere is genuinely one of a kind.",
    kit:"https://shop.cpfc.co.uk",
  },
  MU: {
    "code3": "MUN", "kitType": "solid", "secondaryColor": null,
    name:"Manchester United",  emoji:"🔴", color:"#DA291C",
    tagline:"You grew up expecting late winners. The 93rd minute still feels like a plan.",
    desc:"Most fans have never had to grieve former greatness from the inside. You have. You were there, or you inherited the expectation from people who were, and you know exactly what this club is supposed to feel like when it works. That knowledge is a gift and a curse. The present era is not it. You are not confused about this. You are not willing to lower the bar. The Fergie years set a standard that embedded itself into the identity of the club permanently, and you carry that weight every single week.",
    why:[
      "Your legacy dimension is extremely high, you define yourself through what has been, not just what is currently happening.",
      "Former greatness grief is specific: you suffer not because it has never happened, but because you know it has and it isn't happening now.",
      "Your global identity score is notable, you belong to something that transcends any one place, for better and for worse.",
    ],
    note:"20 league titles. 3 European Cups. The Fergie era produced something that may not be repeated. Current situation pending.",
    kit:"https://store.manutd.com/en-us/c/jerseys",
  },
  SP: {
    "code3": "TOT", "kitType": "solid", "secondaryColor": null,
    name:"Tottenham Hotspur", emoji:"⚪", color:"#132257",
    tagline:"You know exactly what Spursy means. You believe anyway.",
    desc:"You've developed a very specific psychological skill: you believe completely in something while also knowing, analytically, that the odds are against you, the history is against you, and you've been here before. This isn't delusion, it's a kind of sophisticated resilience that most people mistake for stubbornness. The dark humour is real. The hope is also real. Somehow both exist at the same time. Spurs fans have had to figure this out across sixty years of almost. You've figured it out too.",
    why:[
      "Your near-miss resilience is striking, you process disappointment, reset fast, and genuinely believe again. Most people can't.",
      "Your self-awareness about your own situation is high. You can make the joke and mean the hope simultaneously.",
      "The longing for one defining moment is more powerful in you than almost anyone in this quiz.",
    ],
    note:"Last title: 1961. The new stadium is genuinely magnificent. One cup. Please. Any cup.",
    kit:"https://store.tottenhamhotspur.com",
  },
  LE: {
    "code3": "LEI", "kitType": "solid", "secondaryColor": null,
    name:"Leicester City",    emoji:"🦊", color:"#003090",
    tagline:"You watched 5000-1 come in. You've never been fully rational since.",
    desc:"Most people protect themselves from hope. You used to do that too, and then 2016 happened, and something shifted permanently. Not naivety. The opposite of naivety. You saw the actual proof, against every rational calculation, that the universe occasionally ignores the odds. You can never fully go back to not believing after that. You manage your expectations carefully because you've also learned that the miracle doesn't come on demand. But the door is open in a way it can't be closed again.",
    why:[
      "One improbable moment defines your relationship with possibility more than any other dimension. Leicester did it. You saw it. That's permanent.",
      "Your expectation management is careful but your hope is alive underneath, protected, not extinguished.",
      "Your chaos tolerance is above average. You've seen chaos produce the best thing that ever happened to you.",
    ],
    note:"2015/16. 5000-to-1. Ranieri, Mahrez, Vardy. Statistically the most improbable title win in Premier League history. The evidence is there.",
    kit:"https://shop.lcfc.com",
  },
  NF: {
    "code3": "NFO", "kitType": "solid", "secondaryColor": null,
    name:"Nottingham Forest",  emoji:"🌲", color:"#DD0000",
    tagline:"You won two European Cups against all logic. You've trusted chaos ever since.",
    desc:"You've always been drawn to things that work when they're not supposed to. The underdog that shouldn't have been in the room, the manager who was too eccentric for the job, the season that had no business ending the way it did. Other people want clean trajectories and clear narratives. You want the mythological, the thing that required something close to collective belief to even exist. Brian Clough took a second-division club and won the European Cup twice. Forest's whole identity is built on that impossibility. Yours is too.",
    why:[
      "Your chaos tolerance is significantly above average, Forest's continued existence at this level requires faith in the improbable as a baseline.",
      "You carry mythology forward as identity. The past isn't prologue, it's the reason.",
      "The story of how it happened matters as much to you as that it happened. Probably more.",
    ],
    note:"Brian Clough. Second division to back-to-back European Cups. 1979 and 1980. One of the most extraordinary achievements in the history of sport.",
    kit:"https://shop.nottinghamforest.co.uk",
  },
  BR: {
    "code3": "BRE", "kitType": "stripes", "secondaryColor": "#FFFFFF",
    name:"Brentford",         emoji:"🐝", color:"#D20000",
    tagline:"You beat parachute payments with a spreadsheet and a set-piece coach.",
    desc:"Griffin Park had a pub on each of its four corners and held 12,000 people. You found your way to Brentford when they were in the third tier, because something about a club that genuinely belongs to its west London community, that hasn't been bought or rebranded or relocated to chase a bigger market, felt right to you. The analytics came later and proved the approach worked. But the identity was already there: small, tight, real, yours. The new stadium has the pubs on the corners too. Some things are worth preserving.",
    why:[
      "Your community-over-brand instinct is strong, Brentford's identity is local, generational, and genuinely rooted, not manufactured.",
      "You're comfortable being underestimated. You don't need validation from outside the community that already gets it.",
      "The model working is satisfying. But the reason you were there before the model was proven is something else entirely.",
    ],
    note:"Third tier in 2014. Premier League regulars by 2021. Griffin Park's four-corner pubs are gone. The Community Stadium kept the tradition alive. That matters.",
    kit:"https://shop.brentfordfc.com/kit/2526-home-kit",
  },
  BH: {
    "code3": "BHA", "kitType": "stripes", "secondaryColor": "#FFFFFF",
    name:"Brighton",          emoji:"🐦", color:"#0057B8",
    tagline:"You sell your best player every summer and somehow finish higher.",
    desc:"You apply real intelligence to most things you care about and you've found it pays off more often than people expect, partly because most people don't bother. But unlike some people who think carefully and become cold about it, you've stayed genuinely warm. You're still delighted when things go right. Brighton figured out that being smart and being joyful aren't opposites, you can have the careful model and the seaside atmosphere and the European nights and still feel like the whole thing is slightly miraculous. You feel the same way about your own life sometimes.",
    why:[
      "Your analytical approach is clear, but your emotional warmth never dropped. That combination is rarer than it sounds.",
      "The pleasantly-surprised optimist pattern runs through you, you expected less and got more, and you enjoy it rather than taking it for granted.",
      "Progressive, community-rooted, genuinely happy to be where you are. The Amex is exactly that.",
    ],
    note:"Third tier in 2011. European football by 2023. The Amex is one of the better atmospheres in the south of England, which people consistently underestimate.",
    kit:"https://shop.brightonandhovealbion.com",
  },
  WO: {
    "code3": "WOL", "kitType": "duo", "secondaryColor": "#231F20",
    name:"Wolves",            emoji:"🐺", color:"#FDB913",
    tagline:"You never needed London's attention. The Black Country glows old gold without it.",
    desc:"Wolverhampton doesn't get written about much unless someone is trying to illustrate decline. Wolves fans don't care. Molineux has been on the same ground since 1889 and three league titles in the 1950s sit quietly in the history, not worn on a sleeve, not constantly referenced, just there. The city's motto is out of darkness cometh light, which is printed in the crest colours without ceremony. You live something like this, the pride that doesn't need broadcasting, the quality that doesn't need external confirmation. The right people already know.",
    why:[
      "Your place-identity is deep and working-class, Molineux and Wolverhampton are inseparable and have been for over 130 years.",
      "You don't need external validation for what you know to be true. The city knows. That's enough.",
      "Quietly competitive, historically proud, comfortable being underestimated by people who haven't looked closely. That's the whole posture.",
    ],
    note:"Founded 1877. Molineux since 1889. Three league titles. One of the first clubs to have organised ethnic supporter groups in English football. The city carries its own history.",
    kit:"https://shop.wolves.co.uk",
  },
  FU: {
    "code3": "FUL", "kitType": "solid", "secondaryColor": null,
    name:"Fulham",            emoji:"⚫", color:"#CC0000",
    tagline:"You watch football beside the Thames and feel zero need to conquer it.",
    desc:"Craven Cottage is the oldest football ground still in use in England. It has an actual cottage on the pitch. The Thames runs behind the Riverside Stand. On a sunny matchday it is, by some margin, the most pleasant place to watch football in London, possibly in England. Fulham fans know this. They're not crowing about it. They're just there, enjoying the thing for what it is, with no particular need for it to be bigger or louder or more important than it is. This requires a confidence that people mistake for lacking ambition. It's actually the opposite.",
    why:[
      "Your contentment is genuine, not suppressed ambition, not resignation, but real self-knowledge. That's rare and it's Fulham.",
      "The understated over the impressive, the real over the prestigious. Craven Cottage over a 60,000-seater any day.",
      "Your relationship with place is warm and specific, the cottage, the river, the ritual. Identity through character not through trophies.",
    ],
    note:"Craven Cottage opened in 1896. There is a cottage. On the pitch. In the corner. It has been there longer than almost anything else in this quiz.",
    kit:"https://shop.fulhamfc.com",
  },
  BO: {
    "code3": "BOU", "kitType": "stripes", "secondaryColor": "#111111",
    name:"Bournemouth",       emoji:"🍒", color:"#DA291C",
    tagline:"Your ground holds 11,000 and your gratitude holds considerably more.",
    desc:"Bournemouth were in League Two in 2012. The Vitality Stadium holds 11,307 people. They have no famous history, no trophy cabinet, no big-city mythology. What they have is a fanbase that took an improbable journey to the Premier League and has not, for a single second, pretended it was supposed to happen or stopped being grateful that it did. You recognise this feeling, the specific joy of being somewhere you weren't expected, enjoying something you didn't fully count on, with no chip on your shoulder about any of it. That's actually quite hard to sustain.",
    why:[
      "Your comfortable-in-your-own-skin score is the defining dimension. No chip, no complex, no performance. Just real enjoyment.",
      "You find more meaning in the experience itself than in prestige or status. The ride is the point.",
      "Your chaos tolerance is genuine, League Two to Premier League multiple times over. You've learned not to take any of it for granted.",
    ],
    note:"League Two 2012. Eddie Howe. Premier League 2015. Relegated. Back again. Nobody really dislikes Bournemouth and that is not an accident.",
    kit:"https://www.afcb.co.uk/shop",
  },

  AV: {
    "code3": "AVL", "kitType": "sash", "secondaryColor": "#95BFE5",
    name:"Aston Villa",       emoji:"🦁", color:"#670E36",
    tagline:"You've got a European Cup from '82 and a strong feeling it shouldn't be lonely.",
    desc:"You hold two things at once without contradiction: a deep respect for what was built before you, and a genuine impatience for what comes next. The 1982 European Cup sits in Villa Park's history not as nostalgia but as proof, this club has been at the summit and knows what it takes to get back. The Emery rebuild isn't a rebrand or a restart. It's a sleeping giant waking up and remembering what it is. You've lived this feeling, the moment something that had gone quiet in you starts to come back to life.",
    why:[
      "Your optimism is grounded, not naive, you back projects before they're proven because you can read the signs early.",
      "Your balanced relationship with the past: it informs but doesn't anchor. Villa Park is history and momentum simultaneously.",
      "You score high on ambition with patience, the rarest combination, and the one that makes this particular rebuild so compelling.",
    ],
    note:"European Cup winners 1982. Villa Park has hosted more England games than any ground outside Wembley. The current project under Emery is the most credible top-four push the club has mounted in a generation.",
    kit:"https://shop.avfc.co.uk",
  },
  SU: {
    "code3": "SUN", "kitType": "stripes", "secondaryColor": "#FFFFFF",
    name:"Sunderland",        emoji:"🐱", color:"#EB172B",
    tagline:"You sold out League One away ends. Your loyalty was never conditional.",
    desc:"The documentary showed it to the world, but Sunderland fans already knew. Administration. League One. 46,000 people filling the Stadium of Light in the third tier of English football not out of habit but out of something that can't be manufactured: the genuine belief that this was worth staying for. You understand this instinct completely. You've stood by something when it was easier not to, not because you were passive, but because leaving would have meant giving up on something true. The promotion back felt earned in a way that nothing bought can replicate.",
    why:[
      "Your loyalty through institutional difficulty is the defining score, Sunderland's journey from near-extinction to the Premier League maps onto your stubbornness.",
      "Your communal suffering and communal resurrection are equally real. The joy doesn't come without the grief that preceded it.",
      "The Stadium of Light at 46,000 in League One is one of English football's most striking images. You understand what that crowd was saying.",
    ],
    note:"46,000 in the Stadium of Light. League One. 2017. The docuseries 'Sunderland 'Til I Die' caught it in real time. The comeback to the Premier League under Tony Mowbray and then Regis Le Bris is one of English football's best recent stories.",
    kit:"https://www.safc.com/shop",
  },
  LU: {
    "code3": "LEE", "kitType": "solid", "secondaryColor": null,
    name:"Leeds United",      emoji:"⚪", color:"#1D428A",
    tagline:"You feel every match at full volume: total love, total chaos, no regrets.",
    desc:"Revie built something dominant and controversial in the 70s and the fall from it was long and strange. Bielsa arrived and gave the fanbase something rare: a way of playing that made you fall back in love with football itself, not just your club. The promotion in 2020 felt like a religious experience. What followed felt like punishment. Leeds fans exist at maximum intensity because the history demands it, everything at this club happens fully, loudly, with consequence. You recognise this frequency. You don't do half-measures either.",
    why:[
      "Your emotional intensity is at the ceiling and specifically connected to identity, Leeds is a club whose supporters define themselves through the full arc, not just the highs.",
      "The Bielsa years gave you something specific: proof that the right person with the right ideas can make you believe again. You hold this kind of evidence.",
      "Your chaos tolerance is real. Leeds' history requires it. What keeps you there is something older and more stubborn than reason.",
    ],
    note:"Don Revie's Leeds won the First Division in 1969 and 1974. Bielsa's side were promoted in 2020 after 16 years away. Elland Road on a big night remains one of English football's most charged atmospheres.",
    kit:"https://shop.leedsunited.com",
  },
  CH: {
    "code3": "CHE", "kitType": "solid", "secondaryColor": null,
    name:"Chelsea",           emoji:"🔵", color:"#034694",
    tagline:"Winning arrived all at once for you. Now every season answers to that stretch.",
    desc:"The borough gentrified around the club long before Abramovich arrived, working-class west London absorbed into one of the wealthiest postcodes in the world, Swinging London glamour layered over Stamford Bridge's terraces, the King's Road as the centre of everything fashionable. Then Russian money arrived in 2003, and Chelsea won everything. 19 trophies in 19 years. When the sanctions came and he had to leave, long-term fans chanted his name not out of politics but out of grief, for what the club felt like when everything aligned. You understand this specific feeling: having experienced something at its best, then watching it be taken apart by forces entirely outside your control, and staying anyway because the place and the people are still yours.",
    why:[
      "Your relationship with transformation is lived-in, Chelsea's identity has shifted repeatedly and you've moved through all of it.",
      "Your complicated grief is real: the Abramovich era gave long-term fans something they didn't expect and now mourn in a way that's hard to explain to outsiders.",
      "Stamford Bridge is still there. The Thames is behind Fulham Road. The old guard is still in the seats. Some things survive the money and the chaos.",
    ],
    note:"Stamford Bridge since 1905. Founded in a pub opposite the ground. The King's Road: Mary Quant, punk, the Rolling Stones, now boutiques. 6 league titles. 2 Champions Leagues. 19 trophies under Abramovich. The current chapter is unresolved.",
    kit:"https://store.chelseafc.com/en/chelsea-football-kits",
  },
  IT: {
    "code3": "IPS", "kitType": "solid", "secondaryColor": null,
    name:"Ipswich Town",      emoji:"🔵", color:"#0044A9",
    tagline:"You chose Portman Road over the glamour an hour down the A12. Every time.",
    desc:"Bobby Robson managed Ipswich for 13 years, won the FA Cup and the UEFA Cup, and turned a small Suffolk market town into a place the whole of English football knew. That story, of a modest club doing extraordinary things through genuine quality and community rootedness, is the soul of Ipswich. Kieran McKenna took them from League One to the Premier League in consecutive seasons without losing that spirit. The fanbase is warm, self-aware about their own scale, and completely unbothered by not being Chelsea or Manchester United. You recognise this posture: the confidence that comes from knowing exactly what you are and finding it genuinely enough.",
    why:[
      "Your community-rooted belonging is specific: Suffolk, Portman Road, the Bobby Robson mythology. Not global, not branded. Real.",
      "Your self-knowledge is high and undefensive, Ipswich fans know they're not a big club and they're not pretending otherwise. You operate the same way.",
      "The McKenna story gave the fanbase something the Robson era already taught them: that the right person with genuine care for the place can produce something beyond what the resources should allow.",
    ],
    note:"FA Cup 1978. UEFA Cup 1981. Bobby Robson. Portman Road opened in 1884. League One to Premier League in consecutive seasons under Kieran McKenna. Suffolk's club, genuinely.",
    kit:"https://shop.itfc.co.uk",
  },
  CV: {
    "code3": "COV", "kitType": "solid", "secondaryColor": null,
    name:"Coventry City",     emoji:"🩵", color:"#59CBEE",
    tagline:"You drove to Birmingham for home games. Loyalty with a motorway exit.",
    desc:"Coventry City played their home games at Birmingham City's ground. Then almost moved to Northampton. Then came back to a half-built stadium in their own city. The fanbase kept showing up through all of it, not because they were naive about what was happening, not because they approved of the decisions, but because the club was theirs and that fact didn't change regardless of what the ownership did with it. This is a very specific kind of love. It isn't blind. It isn't easy. It's the love that stays when leaving would have been completely understandable. The Premier League is the payoff for years of stubborn, complicated belonging.",
    why:[
      "Your institutional grief score is the defining dimension, Coventry fans have had more reason to feel abandoned by their own club than almost anyone in English football.",
      "Your loyalty is explicitly unconditional in the face of active institutional failure. This is different from Everton's quiet endurance, it's been tested more directly.",
      "The payoff of actually being in the Premier League after all of that carries a specific weight. You understand what it means to finally get something that was a long time coming.",
    ],
    note:"FA Cup winners 1987. The Ricoh Arena / CBS Arena saga. Playing at St Andrew's. Almost Northampton. Back in Coventry. Now in the Premier League. The fans made this happen by simply refusing to stop caring.",
    kit:"https://shop.ccfc.co.uk",
  },
  HU: {
    "code3": "HUL", "kitType": "stripes", "secondaryColor": "#111111",
    name:"Hull City",        emoji:"🐯", color:"#F18A00",
    tagline:"They said the City in your name was bad for business. Turns out it was the whole point.",
    desc:"There's a kind of person who treats identity as something to defend, not just something they happen to carry. That's you. You can be easy about most of it, the league position, whether anyone outside your city has heard of you, the size of the whole thing. But there is a line, and below it sits what actually makes you you. Hull City fans found that line when an owner decided the word City was bad for business and tried to rename the club for a bigger market. They gathered under one banner, City Till We Die, refused to move, and kept a name that had stood since 1904. You know that instinct without being taught it. The things worth keeping rarely win you anything. You keep them because they are yours, and because the day you trade your name for reach, you stop being the thing in the first place.",
    why:[
      "Your rootedness sits at the ceiling. The place is not a detail of who you support, it is the entire point, and you will not let anyone treat it as negotiable.",
      "Your loyalty is load-bearing, not sentimental. Bad seasons never tested it. What tested it was someone trying to change what the club fundamentally is, and you held the line.",
      "Your community instinct is the kind that organises. A club belongs to the people who fill it, not the people who own it, and you have the receipts to prove you mean that.",
    ],
    note:"In 2014, the FA blocked an owner's bid to rename the club Hull Tigers, after the fans refused it first. A name standing since 1904 never moved, and the owner eventually sold up. Some clubs win trophies. This one won the right to stay itself.",
    kit:"https://www.tigerleisure.com",
  },
};


// ─── ARCHETYPES + VITAL STATS ────────────────────────────────────────────────
const archetypes = {
  LI:"The Kopite",        MC:"The Blue Moon",     AR:"The Gooner",
  EV:"The Toffee",        NC:"The Geordie",        WH:"The Iron",
  CP:"The Holmesdale",    MU:"The Red Army",       SP:"The Spur",
  LE:"The Fox",           NF:"The Garibaldi",      BR:"The Bee",
  BH:"The Seagull",       WO:"The Wanderer",       FU:"The Cottager",
  BO:"The Cherry",        AV:"The Villan",         SU:"The Mackem",
  LU:"The Peacock",       CH:"The Shed Ender",     IT:"The Tractor Boy",
  CV:"The Sky Blue",
  HU:"The Diehard",
};

const teamTextColors = {
  LI:"#ff4444", MC:"#6CABDD", AR:"#ff5555", EV:"#6688dd",
  NC:"#cccccc", WH:"#cc6677", CP:"#6688cc", MU:"#ff5555",
  SP:"#7799dd", LE:"#6699ee", NF:"#ff5555", BR:"#ff5555",
  BH:"#4499ee", WO:"#FDB913", FU:"#ff5555", BO:"#ff5566",
  AV:"#dd55aa", SU:"#ff5555", LU:"#6688cc", CH:"#5588dd",
  IT:"#6688dd", CV:"#59CBEE",
  HU:"#F6A623",
};

const archetypeDesc = {
  LI:"You experience belonging at full volume and carry the past as fuel rather than weight. The Kop was built for people who felt things this way: completely, collectively, without apology.",
  MC:"You set standards others call unrealistic and move straight to the next one when they're met. The Blue Moon was not sung during the good times. It was sung through decades of nothing, by people who refused to lower the bar.",
  AR:"You care about how things are done, not just whether they work. Gooner started as a Spurs insult and became the most defiant badge of honour in north London, worn by people who would rather do it right and lose than do it wrong and win.",
  EV:"You stay. Not because things are good, not because leaving would be difficult. Because loyalty without conditions is the only kind you understand. The Toffee Lady has been walking the pitch since the 1890s. So have fans like you.",
  NC:"Your belonging is inseparable from your place. Being Geordie is a full cultural identity that predates football by centuries: the city, the accent, the pride. The club did not create that. It gave it somewhere to go on Saturdays.",
  WH:"You carry pride and legitimate grievance simultaneously and refuse to pretend otherwise. The Iron goes back to 1895, Thames Ironworks, hammer and anvil. Working-class identity that no stadium move or corporate rebrand has managed to dissolve.",
  CP:"You build the thing you want to belong to rather than waiting for it to be handed to you. The Holmesdale Fanatics did not inherit an atmosphere. They created one from scratch, at a club with no trophies and no mythology, purely through organised collective will.",
  MU:"You carry the weight of what your club has been and refuse to accept anything less. The Red Army earned its name through the travelling support of the 1970s: fans who showed up in every away end in England and made themselves impossible to ignore.",
  SP:"You hold genuine belief and genuine self-awareness about how unlikely it is, and somehow both are real at the same time. The Spur comes from the fighting cockerel on the badge and the pub where the club was founded in 1882: stubbornness dressed up as optimism, for 143 years.",
  LE:"One moment of genuine impossibility changed how you see what is possible, and you cannot fully close that door again. The Fox has been the East Midlands identity since 1884. The 5000-to-1 just proved that foxes are harder to catch than people think.",
  NF:"You are drawn to things that should not have worked but did. The Garibaldi is 161 years old, named at a pub meeting in 1865 after Italian freedom fighters, and worn by a club that won the European Cup twice from the second division. Exactly the kind of story you were always going to end up in.",
  BR:"You were there before it was easy to be there, because something about the community rootedness felt right before anyone else was paying attention. The Bee has been Brentford's identity since 1894: before the analytics, before the Premier League, long before it was fashionable.",
  BH:"You think carefully and stay genuinely warm about it, a combination rarer than it sounds. The Seagull was not handed down by the club. It was created on Christmas Eve 1975 outside a pub by fans who had had enough of not having a proper identity. That is very Brighton.",
  WO:"Your pride does not need broadcasting to be real. The Wanderer has been in the club's name since 1879: purposeful, unhurried, quietly certain of its own direction. Wolverhampton does not need the world's attention to know what it is.",
  FU:"You know exactly what you are and find it genuinely enough, not as resignation but as the specific confidence of someone who has never needed external validation. Craven Cottage has been there since 1896. The actual cottage is still on the pitch. Some things do not need to be bigger to be right.",
  BO:"You are genuinely happy to be where you are and you do not perform it or overthink it. The Cherries got their name from the cherry orchards lining the ground in 1910 and the cherry-red shirts that matched them. Simple, warm, south coast. Exactly as advertised.",
  AV:"You respect what came before without being imprisoned by it. The past informs the hunger rather than replacing it. The Villan emerged in the Victorian era from Aston's streets and Villa Cross chapel, carried through to a European Cup in 1982 and a rebuilt project that genuinely believes the best is still coming.",
  SU:"You stayed when staying was the hardest thing to do, and the return meant something specific because of what preceded it. Mackem comes from the shipyards of the River Wear: working-class pride distinct from every other city in the northeast. The Stadium of Light held 46,000 in League One because Mackems simply do not leave.",
  LU:"You experience everything at full range and would not have it any other way. The Peacock comes from the Old Peacock pub at the foot of Elland Road, the oldest thread of Leeds identity: proud, conspicuous, impossible to ignore and entirely unbothered about what anyone thinks of that.",
  CH:"You know what it felt like when it worked, and that knowledge is both gift and burden. The Shed End was Stamford Bridge's working-class terrace heart long before the money arrived: the original Chelsea, the one that was there before the King's Road glamour and will be there after the current chaos resolves.",
  IT:"You find genuine meaning in belonging to something real rather than something famous, and you are completely undefensive about the scale of it. Tractor Boy started as an insult about Suffolk's agricultural character and was immediately reclaimed as a badge of honour. That is the whole personality in one origin story.",
  CV:"You keep showing up for something that keeps making it hard to show up. Jimmy Hill introduced the sky blue kit and the Sky Blue identity in 1961 and it survived Northampton, Birmingham, four stadium owners and 20 years of institutional chaos completely intact. That is not a colour. That is a statement about what kind of fan you are.",
  HU:"The Diehard's loyalty is load-bearing, not sentimental. You belong to a place that was told it would be worth more if it stopped being itself, and you decided that being itself was the worth. You don't defend what's yours because it's winning, you defend it because it's yours.",
};

const greats = {
  LI:[
    {name:"Kenny Dalglish",  years:"1977-1990", note:"Arrived as Keegan's replacement and exceeded him in every way, winning six league titles and three European Cups while transforming the attacking identity of the club."},
    {name:"Ian Rush",        years:"1980-1996", note:"The most prolific striker in Liverpool's history, whose goals-per-game ratio at Anfield remains unmatched across any era."},
    {name:"Steven Gerrard",  years:"1998-2015", note:"The embodiment of what Liverpool fandom demands: total commitment, impossible moments, and the willingness to carry the club alone when required."},
    {name:"Billy Liddell",   years:"1938-1961", note:"So central to postwar Liverpool that the club was nicknamed Liddellpool. Served the club through relegation without ever asking to leave."},
    {name:"Roger Hunt",      years:"1959-1969", note:"First Division champion in 1964 and 1966, part of the Shankly foundation that built modern Liverpool. The Kop called him Sir Roger."},
  ],
  MC:[
    {name:"Colin Bell",      years:"1966-1979", note:"The complete midfielder whose engine and range defined City's greatest domestic era. Injury cut his peak short; the club retired his number in spirit long before doing so formally."},
    {name:"Bert Trautmann",  years:"1949-1964", note:"Finished the 1956 FA Cup Final with a broken neck. The German goalkeeper became a symbol of post-war reconciliation and City's most remarkable servant."},
    {name:"Vincent Kompany", years:"2008-2019", note:"The captain who embodied the Abu Dhabi era at its most legitimate: titles earned through leadership as much as spending, ending with a title-winning goal against Leicester in 2019."},
    {name:"Sergio Aguero",   years:"2011-2021", note:"93:20. The most famous goal in Premier League history. Ten years, 260 goals, and a status at City that no future player is likely to surpass."},
    {name:"Mike Summerbee",  years:"1965-1975", note:"The winger who tormented opponents throughout the 1968 title season and remains one of the great Blue Moon era figures."},
  ],
  AR:[
    {name:"Thierry Henry",   years:"1999-2007", note:"The greatest player in Arsenal's Premier League history. Reinvented himself from winger to centre-forward at Highbury and became the definitive expression of Wenger's attacking philosophy."},
    {name:"Tony Adams",      years:"1983-2002", note:"Captained the club through two completely different eras and won titles in both. The embodiment of what Arsenal means to the people who grew up with the club."},
    {name:"Patrick Vieira",  years:"1996-2005", note:"The engine of the Invincibles and Wenger's greatest captain. Defined the period when Arsenal were simultaneously the most principled and most combative club in England."},
    {name:"Dennis Bergkamp", years:"1995-2006", note:"Transformed perceptions of what a footballer could be. The non-flying Dutchman became the aesthetic benchmark by which Arsenal judge all attacking play."},
    {name:"Liam Brady",      years:"1973-1980", note:"The most gifted player of Arsenal's pre-Wenger era, whose left foot and vision made him irreplaceable and whose departure to Juventus felt like losing something that could not be replaced."},
  ],
  EV:[
    {name:"Dixie Dean",      years:"1925-1937", note:"Scored 60 league goals in a single season in 1927-28. A record that has never been approached. The statue outside Goodison is the right monument for the right club."},
    {name:"Neville Southall", years:"1981-1998", note:"The greatest goalkeeper in Everton's history and arguably England's best in the 1980s. Won two league titles and an FA Cup and barely moved clubs despite being wanted by everyone."},
    {name:"Alan Ball",       years:"1966-1971", note:"The most expensive signing in British football at the time, arrived as a World Cup winner and immediately became the heartbeat of Harry Catterick's championship side."},
    {name:"Bob Latchford",   years:"1974-1981", note:"The striker who gave Everton identity during a difficult decade, scoring 30 league goals in 1977-78 when a newspaper offered £10,000 to any striker who could do so."},
    {name:"Dave Watson",     years:"1986-2001", note:"Club captain through the last period of genuine Everton success, winning the 1995 FA Cup and serving the club with unfailing loyalty across 15 years."},
  ],
  NC:[
    {name:"Alan Shearer",    years:"1996-2006", note:"Rejected Manchester United to come home. Became the Premier League's all-time top scorer at St James' Park and turned down every approach to leave. Newcastle in human form."},
    {name:"Jackie Milburn",  years:"1943-1957", note:"Three FA Cups and 200 goals for the club he supported as a boy. The bronze statue outside St James' was funded by public subscription. That tells you everything."},
    {name:"Peter Beardsley", years:"1983-1991", note:"The most creative player of Newcastle's modern era whose combination with Keegan produced some of the most joyful football the club has ever played."},
    {name:"Kevin Keegan",    years:"1982-1984", note:"Arrived as a player and transformed the club's ambition, then returned as manager in 1992 and nearly won the title in 1996 in the most thrilling near-miss in Premier League history."},
    {name:"Shay Given",      years:"1997-2009", note:"Kept Newcastle in the Premier League almost single-handedly across multiple difficult seasons. The performances against the odds define what supporting Newcastle means."},
  ],
  WH:[
    {name:"Bobby Moore",     years:"1958-1974", note:"Lifted the World Cup in 1966 and remains the standard by which every West Ham player is measured. The statue outside the old Boleyn Ground was the right goodbye."},
    {name:"Vic Watson",      years:"1920-1935", note:"The club's all-time leading scorer with 326 goals, a figure so far beyond anyone else that it remains untouchable across a century of football."},
    {name:"Billy Bonds",     years:"1967-1988", note:"Over 800 appearances across 21 years. The embodiment of West Ham's working-class identity: everything given, nothing performed, no desire to be anywhere else."},
    {name:"Martin Peters",   years:"1962-1970", note:"Ramsey called him ten years ahead of his time. Peters was the creative force behind West Ham's 1964-65 FA Cup and ECWC wins and a World Cup winner at 22."},
    {name:"Geoff Hurst",     years:"1959-1972", note:"The only man to score a hat-trick in a World Cup final, but his years of service to West Ham matter as much as that afternoon at Wembley."},
  ],
  CP:[
    {name:"Wilfried Zaha",   years:"2010-2023", note:"458 appearances, 90 goals, three consecutive Player of the Season awards. Grew up streets from Selhurst Park, stayed through relegation battles, and became the most important player in the club's modern history."},
    {name:"Ian Wright",      years:"1985-1991", note:"Scored 117 goals in 253 games before leaving for Arsenal. The Palace faithful have never fully stopped claiming him as their own."},
    {name:"Mark Bright",     years:"1986-1992", note:"Wright's strike partner and equal contributor to the partnership that took Palace to the FA Cup Final in 1990 and briefly made them genuinely dangerous."},
    {name:"Victor Moses",    years:"2010-2012", note:"The winger whose pace and directness epitomised the Holmesdale era and gave the club a player who could match anyone in the division on his day."},
    {name:"Don Rogers",      years:"1965-1973", note:"The winger who carried Palace through the late 1960s and scored twice in the 1970 League Cup Final, the last major final Palace contested for 20 years."},
  ],
  MU:[
    {name:"Bobby Charlton",  years:"1956-1973", note:"Survived Munich. Won the European Cup ten years later. Represented everything United could and should be, across an era that defined the club permanently."},
    {name:"George Best",     years:"1963-1974", note:"The most gifted player to wear the shirt and possibly in the history of English football. The tragedy is inseparable from the genius, which is very United."},
    {name:"Eric Cantona",    years:"1992-1997", note:"Arrived and immediately transformed not just United's results but their self-belief. Five titles in five seasons. The king who made Old Trafford feel like a kingdom again."},
    {name:"Roy Keane",       years:"1993-2005", note:"The most intense captain in Premier League history. Won seven league titles and embodied the demand for excellence that defines United at its best and most difficult."},
    {name:"Denis Law",       years:"1962-1973", note:"The King of the Stretford End, whose goals and charisma defined the pre-European Cup era and whose backheeled goal for City that relegated United in 1974 remains football's most bittersweet moment."},
  ],
  SP:[
    {name:"Jimmy Greaves",   years:"1961-1970", note:"The most natural finisher English football has produced. Scored 266 goals for Spurs including 37 in the Double season. The debates about Ramsey omitting him from the 1966 Final have never stopped."},
    {name:"Dave Mackay",     years:"1959-1968", note:"The heartbeat of the Double side, who returned from two broken legs to captain the 1967 FA Cup winners. Bill Nicholson called him the greatest player he ever managed."},
    {name:"Glenn Hoddle",    years:"1975-1987", note:"The most technically gifted midfielder Spurs have produced. His vision and touch set a standard that the club has been chasing ever since he left for Monaco."},
    {name:"Cliff Jones",     years:"1958-1968", note:"The most dangerous winger of the Double era, whose pace and courage in the air made him the perfect partner for Bobby Smith in the side that changed English football."},
    {name:"Harry Kane",      years:"2011-2023", note:"The greatest goalscorer in the club's history who stayed through years of near-misses out of genuine loyalty. The departure for Bayern hurt because the loyalty was real."},
  ],
  LE:[
    {name:"Gary Lineker",    years:"1978-1985", note:"A Leicester boy who learned his trade at Filbert Street before the world came calling. The club never stopped being part of who he is, and he has never let them forget he was theirs first."},
    {name:"Gordon Banks",    years:"1959-1967", note:"The greatest goalkeeper England has produced played 293 games for Leicester before Stoke took him. The save from Pele he made as an England player defined his reputation, but his consistency for Leicester built it."},
    {name:"Arthur Chandler", years:"1923-1935", note:"Scored 273 goals for the club across 12 seasons, a total that stood as the record until recently. The standard-bearer of a pre-war Leicester that matched anyone in the division."},
    {name:"Emile Heskey",    years:"1994-2000", note:"The local boy who powered Leicester through their late-1990s League Cup years before Liverpool came calling. His departure was the cost of the club's success."},
    {name:"Jamie Vardy",     years:"2012-2023", note:"The non-league striker who became a Premier League champion and England international at Leicester. The 2015-16 story is impossible without him; the goal at Anfield that confirmed the title was his finest hour."},
  ],
  NF:[
    {name:"Stuart Pearce",   years:"1985-1997", note:"Psycho. The left-back who defined a generation of Forest and England fans. The penalty at Euro 96 is the emotional climax of his story but 12 years of uncompromising service at the City Ground is what matters to Nottingham."},
    {name:"Peter Shilton",   years:"1977-1982", note:"The goalkeeper who won back-to-back European Cups and was the best in England throughout his time at the club. Clough's first great signing."},
    {name:"John Robertson",  years:"1970-1985", note:"The unlikely winger who Clough transformed from a player going nowhere into the creator of two European Cups. His cross for Trevor Francis was the defining moment of 1979."},
    {name:"Roy Keane",       years:"1990-1993", note:"Started his career at the City Ground before United came calling. Forest fans know they had him first and that Clough's refusal to sell sooner was the last act of a man who always backed himself."},
    {name:"Ian Bowyer",      years:"1973-1987", note:"The unsung hero of both European Cup winning sides, whose goals in the semi-finals of 1979 and 1980 are criminally overlooked in the mythology of those seasons."},
  ],
  BR:[
    {name:"Roger Cross",     years:"1968-1977", note:"The striker who carried Brentford through the early 1970s and remains one of the few players from the pre-Premier League era still discussed with genuine affection by long-term supporters."},
    {name:"Terry Evans",     years:"1989-1996", note:"The centre-back who captained the club through their highest Football League finish and embodied the community spirit that defines Brentford's identity."},
    {name:"Dean Holdsworth", years:"1989-1992", note:"The striker who scored 24 goals in the 1991-92 season and announced Brentford as genuine promotion contenders before Wimbledon took him away."},
    {name:"Kevin O'Connor",  years:"1999-2014", note:"Made over 400 appearances across 15 years, was a founder member of Bees United, and represents the community-first values that define the club better than any other player of the modern era."},
    {name:"Bryan Robson",    years:"1967-1973", note:"The prolific striker whose goals across six seasons gave Brentford genuine ambition in the lower divisions and set scoring records that lasted decades."},
  ],
  BH:[
    {name:"Peter Ward",      years:"1975-1980", note:"Scored 36 goals in his first full season, a club record that stood for decades. The striker who made Brighton genuinely exciting in the top flight for the first time."},
    {name:"Steve Foster",    years:"1979-1984", note:"The headband-wearing centre-back who captained Brighton to the 1983 FA Cup Final and became the most recognisable figure in the club's greatest era."},
    {name:"Glen Wilson",     years:"1922-1936", note:"Made 509 appearances and scored 52 goals across 14 seasons, a level of service to the club that set the standard for what belonging to Brighton means."},
    {name:"Bobby Zamora",    years:"2000-2003", note:"Scored 83 goals in three seasons and fired Brighton to back-to-back promotions, transforming the club from fourth tier to the First Division in the process."},
    {name:"Leandro Trossard", years:"2019-2023", note:"The most technically gifted player of Brighton's Premier League era, whose performances under De Zerbi announced the Amex to European football before Arsenal came calling."},
  ],
  WO:[
    {name:"Billy Wright",    years:"1938-1959", note:"The first player in world football to earn 100 international caps, all while remaining a Wolverhampton Wanderer. Three league titles and a loyalty to the club that defined what the badge means."},
    {name:"Stan Cullis",     years:"1934-1947", note:"Captained the title-winning sides of the late 1930s and then managed the dominant Wolves team of the 1950s. The most important figure in the club's history."},
    {name:"Steve Bull",      years:"1986-1999", note:"Scored 306 goals and turned down bigger clubs repeatedly to stay in Wolverhampton. The most beloved player in the club's modern history and a statue outside Molineux that is entirely deserved."},
    {name:"Ron Flowers",     years:"1952-1967", note:"World Cup winner in 1966 and 467 appearances for the club across 15 years. The link between Wolves' golden 1950s era and the modern game."},
    {name:"John Richards",   years:"1969-1983", note:"The leading scorer of the 1970s era who formed the most productive partnership in the club's post-Cullis history with Derek Dougan."},
  ],
  FU:[
    {name:"Johnny Haynes",   years:"1952-1970", note:"The first player to earn £100 a week in English football, but stayed at Craven Cottage his entire career despite interest from larger clubs. 658 appearances. The definition of a one-club man."},
    {name:"George Cohen",    years:"1956-1969", note:"World Cup winner in 1966 who spent his entire career at Fulham. The statue outside the Riverside Stand is a tribute to loyalty as much as quality."},
    {name:"Bobby Robson",    years:"1950-1956", note:"Before Ipswich made him famous and England made him Sir Bobby, he was a Fulham player who learned his football on the banks of the Thames."},
    {name:"Gordon Davies",   years:"1978-1991", note:"The club's all-time leading scorer with 178 goals, a Welshman who made Craven Cottage his home across 13 seasons and is still celebrated in the stands."},
    {name:"Rodney Marsh",    years:"1962-1966", note:"The maverick forward who made Fulham genuinely dangerous before QPR took him and he became a national figure. The Cottage caught him at his most electric."},
  ],
  BO:[
    {name:"Ted MacDougall",  years:"1969-1972", note:"Scored 103 goals in 146 games including nine in an FA Cup tie against Margate in 1971. The most prolific striker in the club's history, who announced Bournemouth to the country."},
    {name:"Steve Fletcher",  years:"1992-2007", note:"Made over 500 appearances across 15 years and became the human embodiment of Bournemouth's community identity. The stand named after him was the obvious tribute."},
    {name:"Harry Redknapp",  years:"1983-1992", note:"Managed the club through its formative professional years and built the foundations of what Bournemouth became. His second stint later brought them to Division One for the first time."},
    {name:"Carl Fletcher",   years:"2001-2004", note:"The Welsh international who captained the club during their early growth and represented the ambition that the current era has fulfilled."},
    {name:"Jermain Defoe",   years:"2017-2019", note:"Arrived at 34 to help keep the club in the Premier League, scored the goals that mattered, and left having given Bournemouth two seasons that mattered far beyond their size."},
  ],
  AV:[
    {name:"Peter Withe",     years:"1980-1985", note:"Scored the goal that won the European Cup in 1982. One moment, Rotterdam, the most important goal in the club's history, headed in off his shin in the 67th minute."},
    {name:"Gordon Cowans",   years:"1975-1988", note:"The midfield architect of the European Cup season and the most graceful player the club produced in the modern era. Villa Park knew what it had."},
    {name:"Billy Walker",    years:"1919-1934", note:"Scored 244 goals in 531 appearances and captained the club through the 1920 FA Cup win. The benchmark against which Villa's great players have been measured for a century."},
    {name:"Paul McGrath",    years:"1989-1996", note:"Played his best football at Villa despite a career-long injury that should have ended him. The Player of the Year in 1993 was performing on willpower as much as technique."},
    {name:"Gabby Agbonlahor", years:"2005-2018", note:"The academy graduate who stayed through the turbulent Lerner years when others left. 354 appearances and a loyalty that the fans have never forgotten."},
  ],
  SU:[
    {name:"Charlie Buchan",  years:"1911-1925", note:"Scored 222 goals in 413 appearances and was the defining player of Sunderland's last great era. Arsenal took him at 34 and he still produced two seasons of distinction."},
    {name:"Len Shackleton",  years:"1948-1957", note:"The Clown Prince of Soccer was the most gifted player of his generation and chose Sunderland over bigger clubs. His autobiography famously included a blank chapter titled 'The Average Director's Knowledge of Football.'"},
    {name:"Jimmy Montgomery", years:"1960-1977", note:"Made 627 appearances and produced the save of the 1973 FA Cup Final against Leeds that is arguably the greatest single moment in the club's history."},
    {name:"Kevin Phillips",  years:"1997-2003", note:"The European Golden Boot winner of 1999-2000 who announced Sunderland as a genuine Premier League club and formed the most productive partnership in the Stadium of Light era with Niall Quinn."},
    {name:"Niall Quinn",     years:"1996-2002", note:"The striker-turned-chairman who gave everything to Sunderland, including the proceeds of his testimonial to charity. The model of what a footballer can be to a community."},
  ],
  LU:[
    {name:"Billy Bremner",   years:"1959-1976", note:"The captain of the Revie era and the most combative midfielder of his generation. Wore the armband like a birthright and made Elland Road genuinely intimidating."},
    {name:"Jack Charlton",   years:"1952-1973", note:"773 appearances across 21 years. World Cup winner in 1966. Managed Ireland to Euro 88 and Italia 90. But he was always Leeds, and Leeds always knew it."},
    {name:"John Charles",    years:"1949-1957", note:"Juventus called him Il Buon Gigante. Leeds had him first. The most complete player the club has ever produced, equally devastating at centre-back or centre-forward."},
    {name:"Lucas Radebe",    years:"1994-2005", note:"Arrived as a relatively unknown South African and became one of the most admired figures at the club. Madiba's favourite player. The captain who held the team together when it was falling apart."},
    {name:"Peter Lorimer",   years:"1962-1986", note:"The hardest shot in English football and 238 goals for Leeds. The last surviving member of the Revie era and the living connection between that generation and everything that followed."},
  ],
  CH:[
    {name:"Peter Osgood",    years:"1964-1974", note:"His ashes are buried beneath the Shed End penalty spot. That is the whole story. The King of Stamford Bridge in the era when Chelsea were genuinely glamorous and the ground still had terraces."},
    {name:"Frank Lampard",   years:"2001-2014", note:"The greatest goalscoring midfielder in Premier League history. Won everything with Chelsea and stayed long enough that his loyalty became part of what the club means."},
    {name:"John Harris",     years:"1945-1956", note:"Captain of the 1955 league title winning side, Chelsea's first, and the player who proved the club could compete with the best. The Pensioner era's defining figure."},
    {name:"Gianfranco Zola", years:"1996-2003", note:"The player who made Chelsea genuinely lovable in the years before the money arrived. Fans voted him the greatest player in the club's history. He still is to those who saw him."},
    {name:"Ron Harris",      years:"1961-1980", note:"Chopper. 795 appearances. The Shed End's enforcer across two decades and the definitive expression of the working-class Chelsea that existed before the King's Road changed everything."},
  ],
  IT:[
    {name:"Mick Mills",      years:"1966-1982", note:"Captained Ipswich to the FA Cup in 1978 and the UEFA Cup in 1981 and was the most reliable left-back in England for a decade. 591 appearances for the club he served entirely."},
    {name:"Allan Hunter",    years:"1971-1982", note:"The Northern Irish centre-back who anchored the Robson defence and was as important to the club's European success as the more celebrated forwards."},
    {name:"Kevin Beattie",   years:"1972-1982", note:"Bobby Robson called him the best player he ever managed. Injury robbed him of a longer career but his presence in the 1978 FA Cup and the early UEFA Cup campaigns was irreplaceable."},
    {name:"John Wark",       years:"1975-1984", note:"Scored 36 goals from midfield in the 1980-81 UEFA Cup and First Division season combined. A player whose contribution to Ipswich's greatest era is still undervalued outside Suffolk."},
    {name:"Roger Osborne",   years:"1973-1981", note:"Scored the only goal in the 1978 FA Cup Final and was so overcome by emotion that he had to be substituted immediately afterwards. The most Ipswich thing that has ever happened."},
  ],
  CV:[
    {name:"Cyrille Regis",   years:"1984-1991", note:"One of the pioneers who made English football confront its racism in the 1970s and 1980s. His time at Coventry followed his most famous work at West Brom but his leadership at Highfield Road mattered deeply to the community."},
    {name:"Steve Ogrizovic", years:"1984-2000", note:"Made 601 appearances across 16 seasons and was in goal for the 1987 FA Cup Final win. The most loyal servant of the modern era and a figure still celebrated in the city."},
    {name:"George Curtis",   years:"1956-1970", note:"Made 486 appearances and captained the club through the Jimmy Hill era transformation, lifting Coventry from the third division to the top flight. The Iron Man of Highfield Road."},
    {name:"Dion Dublin",     years:"1994-1998", note:"Scored 62 goals in four seasons and was the attacking engine of the Ron Atkinson sides that kept Coventry competitive in the Premier League. Voted the club's greatest player in a fan poll."},
    {name:"Robbie Keane",    years:"1997-1999", note:"The teenage striker who announced himself at Highfield Road before the big clubs came calling. Two seasons of genuine brilliance that gave Coventry fans something to point to during the difficult years that followed."},
  ],
  HU:[
    {name:"Ken Wagstaff", years:"1964-1976", note:"Voted the greatest Tiger of all time at the club's 2005 centenary. His goals, and his strike partnership with Chris Chilton, powered the finest Hull side of the 1960s."},
    {name:"Chris Chilton", years:"1960-1971", note:"The club's all-time leading scorer with 222 goals, a homegrown centre-forward who tormented defences through the 1960s. A record that may never be beaten."},
    {name:"Dean Windass", years:"1991-1995, 2007-2009", note:"The hometown striker whose volley in the 2008 playoff final at Wembley took Hull into the top flight for the first time in the club's history. A local lad delivering the single biggest moment the Tigers have ever had."},
    {name:"Andy Davidson", years:"1952-1968", note:"579 appearances across sixteen years, a club record that still stands. The one-club servant whose loyalty is exactly the kind this club is built on."},
    {name:"Raich Carter", years:"1948-1952", note:"The player-manager who won the Third Division North title in his first season and stayed on despite better offers elsewhere. A street in the city still carries his name."},
  ],
};

const vitalStats = {
  LI:{ founded:1892, ground:"Anfield",               city:"Liverpool",       capacity:"61,276",  titles:"20 English league titles", lastTitle:"2019/20 (PL)",   kitMaker:"Adidas",   colors:"Red & white",         nickname:"The Reds",        },
  MC:{ founded:1880, ground:"Etihad Stadium",         city:"Manchester",      capacity:"53,400",  titles:"10 English league titles", lastTitle:"2023/24 (PL)",   kitMaker:"Puma",     colors:"Sky blue & white",    nickname:"The Citizens",    },
  AR:{ founded:1886, ground:"Emirates Stadium",       city:"London (N7)",     capacity:"60,704",  titles:"14 English league titles", lastTitle:"2003/04 (PL)",   kitMaker:"Adidas",   colors:"Red & white",         nickname:"The Gunners",     },
  EV:{ founded:1878, ground:"Goodison Park",          city:"Liverpool",       capacity:"39,572",  titles:"9 English league titles", lastTitle:"1986/87 (Div 1)",kitMaker:"Hummel",   colors:"Royal blue & white",  nickname:"The Toffees",     },
  NC:{ founded:1892, ground:"St. James' Park",        city:"Newcastle",       capacity:"52,305",  titles:"4 English league titles", lastTitle:"1926/27 (Div 1)",kitMaker:"Castore",  colors:"Black & white",       nickname:"The Magpies",     },
  WH:{ founded:1895, ground:"London Stadium",         city:"London (E20)",    capacity:"62,500",  titles:"0 English league titles", lastTitle:"None (PL era)",  kitMaker:"Umbro",    colors:"Claret & blue",       nickname:"The Hammers",     },
  CP:{ founded:1905, ground:"Selhurst Park",          city:"London (SE25)",   capacity:"25,456",  titles:"0 English league titles", lastTitle:"None (PL era)",  kitMaker:"Macron",   colors:"Red & blue",          nickname:"The Eagles",      },
  MU:{ founded:1878, ground:"Old Trafford",           city:"Manchester",      capacity:"74,310",  titles:"20 English league titles", lastTitle:"2012/13 (PL)",   kitMaker:"Adidas",   colors:"Red, white & black",  nickname:"The Red Devils",  },
  SP:{ founded:1882, ground:"Tottenham Hotspur Stad.",city:"London (N17)",    capacity:"62,850",  titles:"2 English league titles", lastTitle:"1960/61 (Div 1)",kitMaker:"Nike",     colors:"White & navy",        nickname:"Spurs",           },
  LE:{ founded:1884, ground:"King Power Stadium",     city:"Leicester",       capacity:"32,357",  titles:"1 English league title", lastTitle:"2015/16 (PL)",   kitMaker:"Adidas",   colors:"Blue & white",        nickname:"The Foxes",       },
  NF:{ founded:1865, ground:"City Ground",            city:"Nottingham",      capacity:"30,445",  titles:"1 English league title", lastTitle:"1977/78 (Div 1)",kitMaker:"Umbro",    colors:"Red & white",         nickname:"Forest",          },
  BR:{ founded:1889, ground:"Gtech Community Stad.",  city:"London (TW8)",    capacity:"17,250",  titles:"0 English league titles", lastTitle:"None (PL era)",  kitMaker:"Umbro",    colors:"Red & white stripes", nickname:"The Bees",        },
  BH:{ founded:1901, ground:"Amex Stadium",           city:"Brighton",        capacity:"31,876",  titles:"0 English league titles", lastTitle:"None (PL era)",  kitMaker:"Nike",     colors:"Blue & white",        nickname:"The Seagulls",    },
  WO:{ founded:1877, ground:"Molineux",               city:"Wolverhampton",   capacity:"32,050",  titles:"3 English league titles", lastTitle:"1958/59 (Div 1)",kitMaker:"Adidas",   colors:"Gold & black",        nickname:"Wolves",          },
  FU:{ founded:1879, ground:"Craven Cottage",         city:"London (SW6)",    capacity:"25,700",  titles:"0 English league titles", lastTitle:"None (PL era)",  kitMaker:"Adidas",   colors:"White & black",       nickname:"The Cottagers",   },
  BO:{ founded:1899, ground:"Vitality Stadium",       city:"Bournemouth",     capacity:"11,307",  titles:"0 English league titles", lastTitle:"None (PL era)",  kitMaker:"Castore",  colors:"Red & black",         nickname:"The Cherries",    },

  AV:{ founded:1874, ground:"Villa Park",              city:"Birmingham",      capacity:"52,509",  titles:"7 English league titles", lastTitle:"1980/81 (Div 1)", kitMaker:"Castore",  colors:"Claret & blue",       nickname:"The Villans",     },
  SU:{ founded:1879, ground:"Stadium of Light",        city:"Sunderland",      capacity:"46,000",  titles:"6 English league titles", lastTitle:"1935/36 (Div 1)", kitMaker:"Adidas",   colors:"Red & white",         nickname:"The Black Cats",  },
  LU:{ founded:1919, ground:"Elland Road",             city:"Leeds",           capacity:"37,890",  titles:"3 English league titles", lastTitle:"1991/92 (Div 1)", kitMaker:"Adidas",   colors:"White & blue",        nickname:"The Whites",      },
  CH:{ founded:1905, ground:"Stamford Bridge",         city:"London (SW6)",    capacity:"40,341",  titles:"6 English league titles", lastTitle:"2021/22 (PL)",    kitMaker:"Nike",     colors:"Blue & white",        nickname:"The Blues",       },
  IT:{ founded:1878, ground:"Portman Road",            city:"Ipswich",         capacity:"30,311",  titles:"1 English league title", lastTitle:"None (PL era)",   kitMaker:"Hummel",   colors:"Blue & white",        nickname:"The Tractor Boys", },
  CV:{ founded:1883, ground:"CBS Arena",               city:"Coventry",        capacity:"32,609",  titles:"0 English league titles", lastTitle:"None (PL era)",   kitMaker:"Hummel",   colors:"Sky blue & white",    nickname:"The Sky Blues",   },
  HU:{ founded:1904, ground:"MKM Stadium", city:"Hull", capacity:"25,586", titles:"0 English league titles", lastTitle:"None", kitMaker:"Kappa", colors:"Amber & black", nickname:"The Tigers", },
};

const nearlyGot = {
  LI:{
    HU:"Both of you live inside the club rather than watch it, the belonging total. Yours is mythology at full volume, European nights and a global Kop. Hull's is narrower and more defensive, a belonging it once had to physically protect when an owner came for the name. Both of you feel it completely. You expect to win. Hull expects to last.",
    NC:"You both live for collective belonging and loud shared emotion. The difference: Liverpool wraps it in mythology and global reach, YNWA, European nights, a fanbase that spans continents. Newcastle is more local, more raw, less ornate. Liverpool fans carry history like armour. Newcastle fans carry it like a wound that's finally starting to heal.",
    EV:"You share the same city, the same working-class roots, the same capacity for deep feeling. The gap is expectation: Liverpool fans carry the weight of what they've won. Everton fans carry the weight of what they haven't. Both are heavy. Different kind of heavy.",
    WH:"Both loud, emotional, place-proud. West Ham's identity is more complicated, the stadium move, the cockney mythology, the sense of something lost. Liverpool's collective feeling is uncomplicated by institutional grief. If you found the 'complicated' part resonant, West Ham might actually be your club.",
    MU:"Both are former-greatness clubs with global fanbases and a demand for excellence. Liverpool's identity is built on collective soul. United's is built on legacy and status. Liverpool fans sing; United fans remember. If it's the feeling that drives you more than the prestige, Liverpool's right.",

    AV:"Both are clubs with genuine European pedigree and current ambition. Liverpool's identity is fully formed and rooted in mythology. Villa's is in the process of being rebuilt, the hunger is newer and the joy of it is different. If you want the completed story, Liverpool. If you want to be part of one being written, Villa.",

    LU:"Both are maximum-intensity clubs with huge fanbases and complete emotional commitment. Liverpool's identity is built on collective myth, YNWA, the Kop, the European nights. Leeds' is more chaotic and contradictory, built on defiance as much as belonging. If you want the clean collective version, Liverpool. If you want the operatic complicated one, Leeds.",
 
    MC:"Both expect to win things and hold the club to the highest standard. City's expectation is systematic and cool. Liverpool's is emotional and mythological. City fans process trophies as validation of the process. Liverpool fans experience them as collective moments of belonging that confirm who they already knew they were.",
 
    AR:"Both have a strong sense of what the club represents beyond results. Arsenal's sense is philosophical and principled. Liverpool's is mythological and collective. Both hold the club to a standard that is partly about identity, not just winning. Arsenal fans argue about the method. Liverpool fans feel it together.",
 
    SP:"Both are clubs where the proximity to greatness and the occasional near-miss is part of the experience. Spurs' relationship with that proximity is tortured and self-aware. Liverpool's is less tortured because they have converted it repeatedly. Both fanbases are engaged and passionate. The difference is one has delivered and one keeps almost delivering.",
 
    BR:"Both have specific communities at the heart of what the club means. Liverpool's community is global but the core is Merseyside and the mythology of the Kop. Brentford's is west London and intensely local. Both matter to people for reasons beyond football results. The scale is incomparable but the authenticity of each community is real.",
 
    BH:"Both think carefully about how football should work and expect the club to embody a philosophy. Liverpool's philosophy is emotional and rooted in collective identity. Brighton's is analytical and model-driven. Both have fanbases that understand what the club is trying to do. Liverpool fans feel it. Brighton fans understand it.",
 
    WO:"Both have a strong identity that doesn't need external validation. Wolves do it quietly with Midlands pride. Liverpool do it loudly with mythology and collective emotion. Both know exactly who they are. Wolves are understated about it. Liverpool are not understated about it at all, and that's entirely the point.",
 
    FU:"Both have specific places that define the club. Anfield defines Liverpool. Craven Cottage defines Fulham. Both are irreplaceable. Liverpool's place generates mythology and collective emotion on a global scale. Fulham's generates a specific gentle pride. Both fanbases would feel the loss of their ground as a loss of identity.",
 
    BO:"Both find genuine joy in what the club represents. Liverpool's joy is operatic and global. Bournemouth's is quieter and more personal. Both are genuine. Liverpool fans experience the club as mythology lived collectively. Bournemouth fans experience it as something surprising that keeps being good.",
 
    SU:"Both are clubs where the fanbase's loyalty is unconditional and communal. Liverpool's community has mythology and global reach. Sunderland's is more local and more tested, the Stadium of Light held 46,000 in League One. Both are examples of what genuine football community looks like. Liverpool's is louder. Sunderland's may be deeper.",
 
    CH:"Both have won major trophies and expect to compete for them. Liverpool's identity is rooted in community and mythology. Chelsea's is rooted in a west London identity complicated by billionaire ownership. Liverpool fans carry the past as fuel. Chelsea fans currently navigate which version of the past is still relevant.",
 
    IT:"Both have passionate communities behind the badge. Liverpool's is global. Ipswich's is county-specific. Both experience the club as something that belongs to a community rather than to an owner. Liverpool's community is larger by every measure. Ipswich's is more intimate and more specific.",
 
    CV:"Both have fanbases where collective loyalty is the defining quality. Liverpool's collective loyalty has been rewarded with sustained success. Coventry's has been tested by years of institutional difficulty. Both are real communities that hold the club together through whatever comes. The scale and the recent experience are completely different.",
  },
  MC:{
    HU:"You are close to opposites. You are the engineered global project, success built deliberately and sold to the world. Hull is the club offered exactly that path, an owner promising a bigger market for a smaller name, and it turned the offer down flat. Both of you know what global ambition looks like. You chased it. Hull refused it.",
    BR:"Both are analytically wired and process-first. The gap is scale and sentiment. City are a machine built to dominate; Brentford are a machine built to punch above their weight. If you find smart underdogs more interesting than smart favourites, Brentford might actually fit you better.",
    BH:"Both think carefully and back evidence. Brighton adds warmth, they're genuinely delighted to be here. City are not delighted; they expect. If the joy of the journey matters alongside the thinking, Brighton is the right call.",
    WO:"Both private, process-oriented, low on chaos. Wolves are underdog-comfortable; City are not. If you find more appeal in quiet competence at a smaller scale than relentless dominance, Wolves fits that gap.",
    AR:"Both value doing things properly. Arsenal care deeply about the aesthetics of the process. City only care whether the process produces wins. If how it looks matters to you, Arsenal is closer.",
 
    LI:"Both have high expectations and have been genuinely great clubs in the modern era. Liverpool's greatness is mythological and community-rooted. City's is systematic and process-driven. Liverpool fans experience success as the confirmation of something they already felt. City fans experience it as validation of a model.",
 
    EV:"Both are clubs in the same city navigating very different relationships to success. City have experienced sustained dominance. Everton have experienced prolonged frustration. City fans now expect success as a right. Everton fans have learned to appreciate the identity separately from any expectation of success.",
 
    NC:"Both are clubs backed by state-adjacent wealth that have divided opinion. City's transformation was earlier and more complete. Newcastle's is newer and still being processed. City fans have had longer to navigate what their club has become. Newcastle fans are still in the middle of that navigation.",
 
    WH:"Both are clubs that have been transformed by investment relative to what they were. City's transformation is total and historic. West Ham's has been more modest. Both fanbases have had to navigate what the club means after the investment arrived. West Ham fans have had more to protect. City fans have had more to accept.",
 
    CP:"Both have experienced the contrast between what the club used to be and what it is now. City's contrast is from provincial struggle to global dominance. Palace's is from near-extinction to sustained Premier League presence. Both fanbases have been on journeys. City's journey has been more extreme in both directions.",
 
    SP:"Both are clubs where the expectation of winning has been a defining experience. City's expectation is backed by sustained delivery. Spurs' expectation is backed by decades of hope and frustration. City fans have the trophies. Spurs fans are still waiting for the current version of the club to produce one.",
 
    LE:"Both have experienced unlikely success. City's success was built systematically over years. Leicester's was a single miraculous season. City's reference point has been repeated many times. Leicester's happened once in a way that can never be fully explained.",
 
    NF:"Both have experienced what it means to be genuinely great in European competition. Forest's was older and more improbable. City's is more recent and more systematically achieved. Forest's came through chaos and genius. City's came through investment and process.",
 
    FU:"Both appreciate football done well but the relationship to that appreciation is completely different. City fans expect systematic excellence and are frustrated when it wavers. Fulham fans appreciate good football while being genuinely content with their position. One requires it. The other is grateful for it.",
 
    BO:"Both are clubs where the quality of football is appreciated. City's quality comes with enormous expectation. Bournemouth's comes with genuine surprise that they're here competing with clubs like City. City fans take it as their right. Bournemouth fans take it as a gift.",
 
    AV:"Both are clubs enjoying periods of genuine quality and ambition. City's quality is dominant and systematic. Villa's is newer and more exciting for being less expected. City fans expect it to produce trophies. Villa fans are enjoying it as something being built.",
 
    SU:"Both are clubs with large northern fanbases that have been through very different kinds of difficulty. City's difficulty was years of mid-table obscurity. Sunderland's involved a fall to League One. City fans now live in a completely different reality. Sunderland fans are climbing back.",
 
    LU:"Both are northern clubs with big fanbases and periods of great success in their histories. City's great success is current and ongoing. Leeds' is historical and the rebuilding is still in progress. City fans know it because it's happening. Leeds fans believe it because it used to be true.",
 
    CH:"Both are clubs that spent significantly and produced trophies. Chelsea's spending came first and built an identity around winning. City's was more sustained and more dominant. Chelsea fans currently feel the absence of that clarity. City fans still live in it.",
 
    IT:"Both have experienced moments of being genuinely competitive beyond what their resources originally suggested. City's original resources were modest. Ipswich's UEFA Cup was under Bobby Robson with minimal budget. City's has been followed by many more achievements. Ipswich's stands alone.",
 
    CV:"Both are clubs whose fanbases held on through long difficult periods before things improved. City spent decades in the lower divisions and in Liverpool and United's shadow. Coventry spent years without a proper home. Both kept going. City's improvement was transformative. Coventry's has been more modest but no less significant to the fanbase.",
  },
  AR:{
    HU:"Both of you stand on principle, the sense that there is a right way you will not abandon. Yours is the method, doing it properly even when the result disagrees. Hull's is identity, staying who it is even when an owner says it costs money. Both would rather be right than convenient. You defend your style. Hull defended its name.",
    BH:"Both are progressive, thinking clubs that care about the how. Brighton is more cheerful about it, pleasantly surprised by their own success. Arsenal carries the weight of expectation and the torment of almost. If you're more optimist than tortured, Brighton might suit you.",
    NF:"Both are romantic in how they relate to football. Forest is purer chaos and mythology. Arsenal is more principled, they want to do it properly, not just dramatically. If the messy story appeals more than the right method, Forest is worth a second look.",
    FU:"Both find value in doing things properly at their own pace. Arsenal fans still want to win everything; Fulham fans are genuinely fine with a good season. If you're more settled than restless, Fulham is the honest answer.",
    SP:"Both suffer through near-misses with principled identities. Arsenal have a clear philosophy they hold sacred. Spurs are more chaotically self-aware. If you take the method seriously, Arsenal. If you've made a kind of peace with the comedy of your own hope, Spurs.",

    MC:"Both value doing things properly and have conviction about method. Arsenal care about the right way to play football as an aesthetic position. City care about winning through the right process. Arsenal's version is more emotionally charged, City's is cooler and more systematic. If the feeling of rightness matters as much as the result, Arsenal. If you just want the process to be excellent, City.",

    MU:"Both have historical prestige and expect to win things. United's identity is built on being the biggest club in England and the grief of not currently being that. Arsenal's is built on a belief that there is a right way to do football and they embody it. United feel entitled to success. Arsenal feel they deserve it through principle.",

    CH:"Both are London clubs with prestige and a fanbase that holds the club to high standards. Chelsea's standards are performance-driven and recent, built on spending. Arsenal's are philosophical and older. If winning by any means is fine, Chelsea. If the method has to be right, Arsenal.",
 
    LI:"Both have high standards and expect the club to embody something beyond results. Liverpool's identity is rooted in collective emotion and mythology. Arsenal's is rooted in method and aesthetic principle. Liverpool fans feel it together loudly. Arsenal fans hold the club to a standard that is partly philosophical.",
 
    EV:"Both carry a long-suffering relationship with trophies they feel they deserve. Everton's suffering is quieter and more resigned. Arsenal's is more vocal and principled. There is always a reason why the method was right even when the result wasn't. If you absorb the pain quietly, Everton. If you need to explain why it still mattered, Arsenal.",
 
    NC:"Both are clubs defined by intensity of support and a sense that the fanbase deserves more. Newcastle's identity is place-rooted and community-first. Arsenal's is method-first and principled. The shared frustration is real but the source differs: Newcastle fans feel geographically isolated from power, Arsenal fans feel philosophically misunderstood.",
 
    WH:"Both find meaning in doing things a certain way. West Ham's way is rooted in working-class identity and the academy tradition. Arsenal's is rooted in a belief about how football should be played. Both feel strongly that their approach has value beyond trophies. Arsenal's belief is more explicit and more argued over.",
 
    CP:"Both are clubs where the fanbase has built something that feels more authentic than the institution sometimes deserves. Palace built it through fan organisation. Arsenal built it through decades of expectation and the specific culture of Highbury and the Emirates. Both have a fanbase that takes the identity seriously as a thing worth protecting.",
 
    LE:"Both have experienced the specific joy of doing it properly and having it recognised. Leicester's recognition came once, explosively, in 2016. Arsenal's came in cycles and is being rebuilt. Both fanbases understand what it feels like when the approach justifies itself. Leicester's came as a shock and Arsenal's comes as vindication.",
 
    SU:"Both have a fanbase that stays through difficulty out of genuine belief rather than habit. Sunderland's belief has been tested more severely. Arsenal's difficulty has been relative, near-misses rather than relegation. Both know what it is to support a club that should be better and keep showing up anyway.",
 
    LU:"Both are clubs with a strong sense of their own identity and a fanbase that holds the institution to it. Leeds' identity is combative and confrontational. Arsenal's is principled and aesthetic. Both will tell you loudly who they are. The difference is Leeds' version involves more defiance and Arsenal's involves more conviction.",
 
    CV:"Both are clubs where the fanbase's belief outlasted the institution's ability to justify it. Coventry's difficulty was structural and prolonged. Arsenal's has been a matter of failing to convert genuine quality into trophies. Both have fans who kept the faith when they had reasons not to. The scale of the test was very different.",
 
    WO:"Both are systematic clubs with a clear identity and a fanbase that understands it. Wolves do it quietly without needing external validation. Arsenal do it publicly and with considerable argument about whether the method is being upheld. If you need to make the case for the approach, Arsenal. If you just live it, Wolves.",
 
    BO:"Both find genuine satisfaction in doing football properly at their own scale. Bournemouth's scale is smaller and the satisfaction is simpler. Arsenal's comes with expectation that the method should eventually produce trophies. Bournemouth fans are genuinely content. Arsenal fans are content with the approach but not the gap between approach and achievement.",
 
    AV:"Both are clubs rebuilding toward something they believe they deserve. Villa's rebuild is newer and the excitement is less complicated. Arsenal's rebuild is longer-running and carries more weight of expectation. Both have a fanbase that genuinely believes the club is heading somewhere. Arsenal's belief is more anxious, Villa's is more hopeful.",
  },
  EV:{
    HU:"For both of you, loyalty is what you prove when the club gives you the least. Yours was tested on the pitch, decades of waiting without once thinking of leaving. Hull's was tested in the boardroom, an owner deciding the name was holding the club back. Both of you treat staying as the whole statement. You stayed through the football. Hull stayed through the rebrand.",
    SP:"Both are long-suffering clubs with painful near-misses. Everton suffer quietly and inwardly; Spurs perform the suffering publicly with a kind of self-aware dark humour. If your pain is something you share loudly rather than absorb alone, Spurs is probably you.",
    MU:"Both carry former glory and present frustration. United's former greatness is more recent and more dominant; Everton's is older and harder to hold onto. The key question: are you haunted by recent proximity to greatness, or by a longer drought?",
    LI:"Same city, same roots, very different emotional register. The key fork: do you expect success or endure without it? Liverpool fans expect. Everton fans endure. One isn't better than the other. They're just different kinds of love.",
    NF:"Both stubbornly loyal to a romantic version of what their club means. Everton's loyalty is quiet, place-specific, unconditional. Forest's is mythological and chaos-tolerant. If you love the improbable story more than the steady commitment, Forest is closer.",

    SU:"Both are clubs defined by loyalty that required no reward to persist. Everton's loyalty operates in the shadow of Liverpool. Sunderland's operates in the shadow of Newcastle. Both carry legitimate grievance about institutional decisions made above the fanbase. Sunderland's recent journey from League One to the top flight adds a specific recent chapter Everton's doesn't have.",

    LU:"Both are clubs where passion is real and unconditional. Everton's is quieter and absorbed internally. Leeds' is louder and more confrontational. Everton fans endure. Leeds fans assert. If the suffering is something you carry privately, Everton. If it's something you need to express at volume, Leeds.",

    CV:"Both are defined by loyalty through genuinely difficult circumstances. Everton's difficulty is measured in near-misses and Liverpool's shadow. Coventry's is measured in years without a proper home ground. Both fanbases kept showing up when the reasonable thing would have been to walk away.",
 
    NC:"Both are clubs with passionate, place-rooted fanbases and a long history of being underserved by their institutions. Newcastle's frustration has been louder and more confrontational. Everton's has been quieter and more absorbed. Both know what it means to care deeply about a club that doesn't always deserve it.",
 
    WH:"Both are working-class clubs with genuine place-rooted identities and complicated institutional histories. West Ham's identity is East End and explicitly historical. Everton's is Merseyside and defined partly by what it is not. Both resist the drift toward corporate football identity. Both have something worth protecting.",
 
    CP:"Both are clubs where the fanbase's authenticity is the most reliable thing about the institution. Palace built their culture deliberately through fan organisation. Everton's is older and more absorbed, it's just how it's always been. Both resist the drift toward corporate football identity. Both are worth protecting.",
 
    BR:"Both have fanbases that care about the club as a community institution rather than a product. Brentford formalised this through community ownership. Everton's version is older and less explicit but no less real. Both would resist the club becoming something purely commercial. Brentford has institutional structures to enforce that. Everton relies on culture.",
 
    BH:"Both have fanbases that appreciate football done properly and hold the club to standards beyond just winning. Brighton's standards are analytical and model-driven. Everton's are older and rooted in a specific tradition. Both will tell you when the club isn't meeting the standard. The standards are from different eras.",
 
    WO:"Both are clubs that get on with it without drama. Wolves do it quietly in the Midlands. Everton do it quietly on Merseyside. Both have fanbases that absorb difficulty without excessive performance. Both resist the drift toward the performative. Both just care, genuinely and without theatrics.",
 
    FU:"Both are clubs where contentment with identity coexists with frustration at results. Fulham are more genuinely content. Everton's relationship with contentment is more complicated, they want more, they've always wanted more, but they've learned to absorb not getting it. Fulham's understanding is simpler and lighter.",
 
    BO:"Both have fanbases where the passion is genuine rather than performed. Bournemouth's passion is newer and comes with more surprise. Everton's is older and comes with more weight. Both are real. Bournemouth fans are grateful to be here. Everton fans are here because they've always been here and always will be.",
 
    AV:"Both are historically significant clubs navigating difficult periods relative to their own standards. Villa's resurgence is real and current. Everton's difficulty has been more prolonged and painful. Both have fanbases that remember better times. The current trajectories differ sharply.",
 
    IT:"Both are clubs where belonging to the local community matters more than national profile. Ipswich's community is Suffolk-specific. Everton's is Merseyside, in the shadow of Liverpool, carrying an identity defined partly by what it refuses to become. Both are genuine. Both are more interesting than their current profiles suggest.",
  },
  NC:{
    HU:"Both of you want something real instead of something global, the rooted over the marketable. You never had to defend it, the city and the club inseparable for generations. Hull did, against an owner who wanted the name to travel further than the place it came from. Both of you won that argument. You won it by simply being. Hull won it by fighting.",
    LI:"The communal dimension is nearly identical. The fork is mythology vs locality: Liverpool is a global phenomenon built on story and anthem. Newcastle is a city that simply cannot be separated from its club. If you want the purer, rawer version of collective belonging without the global scale, Newcastle is it.",
    WH:"Both place-defined, proud, working-class-rooted clubs. Newcastle's trajectory is currently upward and optimistic; West Ham's identity is tangled in a stadium move many fans resented. If you're drawn to the upward arc, Newcastle. If the complicated loyalty resonates more, West Ham.",
    CP:"Both intensely local and no-frills, Palace south London, Newcastle the northeast. The main distinction is scale: Newcastle engulfs an entire city. Palace is a tight, fiercely proud corner of London. Both are real. One is bigger.",

    AV:"Both are ambitious clubs with proud histories and a genuine resurgence underway. The difference is place and community. Newcastle is a whole city with a single football identity. Villa is a sleeping giant in the UK's second city, which means the identity is bigger and more distributed. If the place being the whole point matters, Newcastle. If the scale of the ambition matters, Villa.",

    SU:"Both are northern, communal, place-rooted clubs with painful institutional histories and intensely loyal fanbases. Newcastle's loyalty is louder and more confrontational. Sunderland's is quieter and more about endurance. The Stadium of Light held 46,000 in League One. That kind of loyalty is different in character to St James' Park.",

    IT:"Both are clubs where the community is the whole point and the football serves a larger local identity. Newcastle's community is a city entirely organised around its club. Ipswich's is a county town with a specific Suffolk pride. The scale differs but the principle is identical: the club belongs to its place more than any other relationship.",
 
    MC:"Both are clubs backed by state-adjacent investment that has divided opinion. Newcastle's investment is newer and still being processed. City's transformation is more complete. Newcastle fans are still in the middle of navigating what the club's new ownership means. City fans have had longer to make their peace with it.",
 
    AR:"Both are clubs where the fanbase feels the club should be competing at the top and is frustrated when it isn't. Arsenal's frustration is principled. Newcastle's is communal and place-rooted. Arsenal fans argue about the method. Newcastle fans feel the absence of success as a community-level injustice.",
 
    EV:"Both are clubs with passionate, place-rooted fanbases and long histories of being underserved by their institutions. Everton's suffering has been quieter and more resigned. Newcastle's has been louder and more confrontational. Both know what it means to care deeply about a club that doesn't always deserve it.",
 
    MU:"Both are northern clubs with big fanbases and a strong sense of where they belong in football's hierarchy. United's hierarchy is backed by historical dominance. Newcastle's is backed by community scale and a sense of injustice about not being where they belong. United's belief has more evidence. Newcastle's has more conviction.",
 
    SP:"Both are clubs where proximity to greatness and the frustration of not quite getting there is part of the experience. Spurs do it with self-aware dark humour. Newcastle do it with a directness that reflects the character of the city. Both keep believing.",
 
    LE:"Both have experienced improbable moments of genuine success. Leicester's was the 2016 title. Newcastle's greatest moments were earlier, Kevin Keegan's entertainers of the 1990s who nearly won the title. Both fanbases have reference points for what is possible. Leicester's reference point is more recent.",
 
    NF:"Both are clubs with improbable histories relative to their size. Forest's improbability is European and mythological. Newcastle's improbability is the scale of community attachment relative to the number of trophies. Both know what it means to have had moments of genuine greatness.",
 
    BR:"Both built something real through community. Newcastle's community is a whole city. Brentford's is a west London neighbourhood. Both feel genuinely local. The scale is incomparable but the rootedness is equally real.",
 
    BH:"Both have fanbases genuinely invested in what their club represents. Newcastle's investment is place-rooted and communal. Brighton's is model-driven and progressive. Newcastle fans care about the city having a club at the top. Brighton fans care about an intelligent club earning its place.",
 
    FU:"Both have specific places that define the club's identity. St James' Park towers over Newcastle and is inseparable from the city's identity. Craven Cottage sits by the Thames and gives Fulham something irreplaceable. Both fanbases would feel the loss of their ground as a loss of identity.",
 
    BO:"Both are clubs where the community matters more than the trophy count. Newcastle's community is larger and louder and the frustration at not winning things is felt at city scale. Bournemouth's is smaller and quieter and currently grateful for what they have.",
 
    LU:"Both are northern clubs with massive fanbases and a strong sense that they belong at the top of English football. Leeds' sense is more historically loaded and more confrontational. Newcastle's is more community-rooted and more directly about the city. Both believe it. Both are louder than their recent results justify.",
 
    CH:"Both are clubs with significant fanbases and a belief that they belong among the elite. Chelsea's elite status is recent and money-powered. Newcastle's claim to elite status is community-scale and historically backed. Both currently feel the gap between where they are and where they believe they should be.",
 
    CV:"Both are clubs where institutional decisions tested the fanbase's relationship with the institution. Newcastle's ownership saga divided opinion. Coventry lost their home ground. Both fanbases navigated something difficult without abandoning the club. Both know that the club is the community more than it is the institution.",
  },
  WH:{
    HU:"Both of you love a club you have also had to fight, carrying the love and the grievance together. Yours was the move from Upton Park, the feeling of being made bigger and less yourself at once. Hull's was the rebrand, an owner trying to swap the name for a brand. Both of you stayed and fought rather than walked. You lost the ground but kept the club. Hull kept the name.",
    NC:"The shared dimension is raw belonging and working-class place pride. West Ham's specific identity is more conflicted, the move from Upton Park left a visible scar. Newcastle's current chapter is more optimistic. If complicated institutional grief rings true, West Ham is real.",
    CP:"Both unpretentious and locally-rooted. West Ham has more history and complexity behind the identity. Palace is simpler and less burdened by institutional decisions. If you want the cleaner version of local pride, Palace might suit you better.",
    LI:"Both loud and place-proud. Liverpool's collective emotion is uncomplicated by the kind of institutional grief West Ham carries. If you want the feeling without the baggage, Liverpool. If the baggage is part of what makes it real, West Ham.",

    NF:"Both tolerate chaos and have complicated histories with their own institutions. Forest's chaos is romantic, rooted in the Clough mythology. West Ham's is more civic, connected to the East End and the sense that decisions are always made against the fan's interest. Both have a relationship with difficulty that is almost defining.",

    CH:"Both are London clubs with complicated relationships between their working-class roots and the money that arrived. Chelsea's money arrived from outside and transformed the club entirely. West Ham's identity resisted transformation more stubbornly. If the roots still feel like the club, West Ham. If the transformation and the ambition it brought is part of the appeal, Chelsea.",

    CV:"Both are clubs where institutional decisions made above the fanbase left lasting damage and yet the loyalty held. West Ham lost Upton Park and moved to the Olympic Stadium against significant fan opposition. Coventry lost their home ground entirely for years. Both are studies in what fanbases absorb when they have no choice but to keep going.",
 
    MC:"Both are clubs that have been transformed by investment relative to what they were. City's transformation is total and historic. West Ham's has been more modest and more contested. West Ham fans have more of the original identity to protect. City fans have more success to justify the change.",
 
    AR:"Both find value in doing things a certain way. Arsenal's way is principled and philosophical. West Ham's way is rooted in the academy tradition, the idea that the club produces players rather than buys them. Both hold the club to a standard that is about identity as much as results.",
 
    EV:"Both are working-class clubs with genuine place-rooted identities and fanbases that carry those identities regardless of results. Everton's identity is Merseyside. West Ham's is East End and explicitly historical. Both resist the drift toward corporate football identity. Both have something worth protecting.",
 
    MU:"Both carry histories that define their fanbases. United's history is about sustained dominance and individual brilliance. West Ham's is about the 1966 World Cup winners, the academy tradition, and an East London identity that is specific and consciously held. The gap between that history and current reality differs.",
 
    SP:"Both are London clubs with histories of brilliant football and complicated relationships with trophies. Spurs' history involves attacking football and the specific torture of nearly winning things. West Ham's involves producing England's greatest players and a specific East End identity. Both endure.",
 
    LE:"Both have experienced the specific joy of doing something improbable at their level. Leicester's 2016 title is legendary. West Ham won the FA Cup three times and produced three of England's World Cup winners. Both fanbases have something to point to. Leicester's most recent something is more improbable.",
 
    BR:"Both are working-class clubs with community identities that feel genuine. West Ham's is East End and historical. Brentford's is explicitly maintained through community ownership. Both resist the drift toward corporate football. West Ham fans feel the history. Brentford fans have institutional structures to protect the identity.",
 
    BH:"Both have fanbases where the atmosphere and community matter. West Ham's community is East End and place-specific. Brighton's is south coast and more broadly progressive. West Ham's version is heavier and more historically loaded. Brighton's is more engaged and forward-looking.",
 
    WO:"Both are working-class clubs with specific regional identities and fanbases that carry those identities without drama. Wolves are Midlands, quiet, process-driven. West Ham are East End, historical, and more explicit about their working-class roots. West Ham fans carry more weight of history.",
 
    FU:"Both are London clubs with specific community identities that have survived commercial football. Fulham's is west London gentility. West Ham's is East London working-class. Both are real and specific. West Ham's version comes with more frustration and more explicit historical weight. Fulham's is lighter and more comfortable.",
 
    BO:"Both are clubs where the community matters. West Ham's community is East End and historically loaded. Bournemouth's is south coast and newer to the Premier League. West Ham fans carry the weight of history. Bournemouth fans carry a sense of surprise and gratitude.",
 
    SU:"Both are clubs where institutional decisions tested the fanbase's relationship with the institution. West Ham left Upton Park against significant fan opposition. Sunderland fell to League One under ownership that didn't deserve the fanbase it had. Both absorbed what no supporter base should have to absorb. Both are still there.",
 
    LU:"Both are clubs with working-class roots and fanbases that carry those roots as identity. Leeds' are West Yorkshire and more confrontational. West Ham's are East End and more explicitly historical. Both resist the drift toward corporate football identity. Both mean it.",
 
    IT:"Both are clubs where community and belonging matter more than profile. West Ham's community is East End and explicitly historical. Ipswich's is Suffolk and rooted in the Bobby Robson era. The communities are specific, different, and equally genuine.",
 
    AV:"Both are clubs with genuine histories and fanbases that believe the club deserves more. Villa's belief is currently being rewarded with genuine quality and ambition. West Ham's is more frustrated, the stadium move complicated the identity and the results haven't consistently justified the ambition.",
  },
  CP:{
    HU:"You are the two most rooted clubs in the league, both certain the place is the point. You built that identity from nothing, manufacturing an atmosphere at a club with no trophies to lean on. Hull defended one it inherited, going to war to keep the name an owner wanted to sell. Both of you refused to let the club turn generic. You made your roots. Hull guarded its.",
    NC:"Both intensely local and belonging-focused. Scale is the gap: Newcastle engulfs a whole city; Palace owns a corner of London. Palace fans don't need the whole city, they have Selhurst, and that is genuinely enough.",
    WH:"Both unpretentious and local. Palace is the simpler of the two, less burdened by institutional history. If you have no interest in the complicated backstory and just want the thing itself, Palace is the cleaner answer.",
    MU:"The only thing you share is the direct, front-facing approach. United demand results from historical greatness. Palace's directness comes from pride without pretension. Completely different sources, similar energy.",
 
    LI:"Both have a specific atmosphere that is more than just noise, it means something culturally. The Kop is a global institution. Selhurst Park's Holmesdale End was built from scratch by organised fans and is arguably the most genuine atmosphere in the Premier League. Liverpool's is mythological. Palace's is almost defiant in its authenticity.",
 
    MC:"Both have fanbases that know what it feels like when football goes right. City's experience of things going right is sustained and dominant. Palace's is more episodic, a great cup run, a good season, a famous result. Both appreciate genuine quality. City's comes with expectation and Palace's still comes with surprise.",
 
    AR:"Both have a fanbase that believes the club represents something worth defending. Arsenal's identity is principled and philosophical. Palace's is local and atmospheric. Both will fight for it. Arsenal fans argue about whether the method is right. Palace fans just turn up and generate something.",
 
    EV:"Both are clubs where the fanbase's authenticity is the defining quality of the institution. Everton's authenticity is rooted in decades of frustrated loyalty in Liverpool's shadow. Palace's is rooted in south London and an atmosphere built deliberately by organised fan culture. Both are real. Both are worth protecting.",
 
    SP:"Both are London clubs with specific identities and fanbases that take those identities seriously. Spurs' identity involves suffering and dark self-awareness. Palace's involves a specific south London belonging and an atmosphere that the fanbase built themselves. Both know who they are. Spurs fans perform their identity. Palace fans live theirs.",
 
    LE:"Both achieved something bigger than their resources should have allowed. Leicester's 2016 title is the most statistically improbable achievement in the Premier League era. Palace's sustained Premier League presence is impressive for a south London club of their size. Both earned something. Leicester's moment was louder.",
 
    NF:"Both are clubs with improbable histories that define the fanbase's relationship with the possible. Forest's improbability is European and mythological. Palace's is more local, a club sustaining Premier League presence through sheer fanbase intensity. Both prove that size isn't everything.",
 
    BR:"Both are clubs that earned their place by being exactly what they are. Brentford did it through data and community ownership. Palace did it through atmosphere and fan culture. The methods were different but the spirit of earning it rather than buying it is the same.",
 
    BH:"Both are south and south-east clubs that built genuine Premier League presences. Brighton did it through a smart model. Palace did it through fan culture and an atmosphere that made Selhurst Park one of the most difficult away venues in England. Both belong here. Brighton earned it analytically. Palace earned it atmospherically.",
 
    WO:"Both are clubs that get on with it without needing external validation. Wolves do it with Midlands grit and systematic football. Palace do it with south London identity and an atmosphere that covers for whatever the pitch produces. Both are undefensive about their scale. Both belong in the Premier League on their own terms.",
 
    FU:"Both are London clubs with community identities that have survived commercial football. Fulham's identity is west London gentility. Palace's is south London intensity. Both are real and specific. Fulham fans appreciate the Cottage. Palace fans appreciate Selhurst and everything the Holmesdale represents.",
 
    BO:"Both are clubs that arrived in the Premier League without the obvious resources and found a way to stay. Bournemouth did it through coaching excellence. Palace did it through fan culture and a specific south London stubbornness. Both are genuine. Both belong. The routes were different.",
 
    AV:"Both have a fanbase culture that is larger than the club's current resources. Villa's is rooted in history and genuine ambition. Palace's is rooted in a south London identity that the Holmesdale Fanatics built deliberately. Both have something real beneath the badge. Villa's ambition is currently being matched by the club. Palace's is quieter and more local.",
 
    SU:"Both are clubs where the fanbase built something the institution didn't always deserve. Sunderland fans filled the Stadium of Light in League One. Palace fans built the Holmesdale atmosphere from scratch. Both proved what a community can do without the club doing much to earn it. Both are studies in genuine belonging.",
 
    LU:"Both have atmospheres more intense than the club's position in football's hierarchy might suggest. Leeds' atmosphere at Elland Road is historically one of the most intimidating in England. Palace's at Selhurst is among the most genuine in the Premier League. Both are louder than they should be. Leeds' intensity comes with edge. Palace's comes with joy.",
 
    CH:"Both are London clubs with complicated relationships to their own identities. Chelsea's identity was transformed by money. Palace's was built from below by organised fans. Both have west and south London roots. Palace's identity is cleaner and more consistently held.",
 
    IT:"Both are clubs where belonging to the local community matters more than national profile. Ipswich's belonging is county-specific and quietly proud. Palace's is south London and deliberately built. Both are genuine. Both would trade profile for authenticity. Palace's atmosphere is nationally recognised. Ipswich's identity is more internally held.",
 
    CV:"Both are clubs where the fanbase kept the identity alive through periods the institution made difficult. Coventry had ownership crises and years without a home. Palace had ownership crises and near-extinction moments. Both fanbases developed a specific resilience. Both know what it feels like to belong to something that might not survive. Both did.",
  },
  MU:{
    HU:"Both of you guard an identity, but very different ones. You guard a winning past, the memory of dominance you cannot quite recreate. Hull guarded a name, the plain fact of being Hull City, when an owner tried to trade it for a global brand. Both of you refuse a lesser version of the club. You want your old self back. Hull simply kept its.",
    LI:"Both global, both historically great, both emotionally demanding. The fork: Liverpool's identity is collective and mythological. United's is individual excellence and status. YNWA is about everyone together; United at their best is about being the undisputed best.",
    EV:"Both carry the weight of expectation and former glory. United's was more recent and more dominant; Everton's is older and harder to hold. The question: are you haunted by proximity to what you had, or waiting for something that feels further away?",
    SP:"Both suffering from proximity to former success. United's former greatness was more recent and more dominant. Spurs' has been further away for longer. If you believe your club is currently underperforming relative to its actual quality, United. If you're not sure it'll ever quite come together, Spurs.",
    AR:"Both have historical prestige and are working to return. Arsenal's identity is more aesthetic and principled; United's is more about scale and dominance. If you care about how it looks, Arsenal. If you care about being the biggest, United.",

    CP:"Both approach their club with directness and a front-facing identity. The difference is scale and recent history. United carry the weight of former greatness and the expectation that came with it. Palace carry no such weight, which makes their belonging simpler and less complicated. If the history and expectation are part of what you need, United. If you just want to belong without the burden, Palace.",

    AV:"Both are former-greatness clubs with European Cup history and current ambition to return. United's former greatness was more recent and more dominant, which makes the present feel more like failure. Villa's is older and the current rebuild feels more hopeful than grief-stricken. If you're grieving something, United. If you're building toward something, Villa.",

    CH:"Both are historically great clubs navigating the gap between recent peak and current reality. United's pain is more operatic, the decline more public. Chelsea's is more chaotic, less narrative. United fans feel the weight of specific glory lost. Chelsea fans feel the confusion of a club without a stable identity beneath the spending.",
 
    NC:"Both are clubs with massive fanbases and a strong sense of where they belong in football's hierarchy. Newcastle's identity is place-rooted and community-first. United's is about historical greatness and global reach. Newcastle's belief is rooted in belonging. United's is rooted in entitlement.",
 
    WH:"Both carry histories that are important to their identity. West Ham's is working-class and East London. United's is the Busby Babes, Charlton, Best, Cantona, Ferguson. Both fanbases feel the gap between where they are now and where they were. West Ham's gap is about a different kind of belonging. United's is about a different kind of greatness.",
 
    BR:"Both are clubs with passionate fanbases and very different identities. United's identity is about historical dominance and the expectation of return to it. Brentford's is about community ownership and doing football properly without spending big. What they're supporting is from entirely different ends of football's spectrum.",
 
    BH:"Both are clubs with fanbases that hold the institution to standards. United's standards are about greatness and dominance. Brighton's are about intelligent, principled football. Both will tell you when the club isn't meeting the standard. The standards they're measuring against are from completely different frameworks.",
 
    WO:"Both are clubs with clear identities that their fanbases defend. Wolves' identity is Midlands, quiet, process-driven. United's is global, loud, historically loaded. The representation they're protecting is from entirely different ends of football's scale.",
 
    FU:"Both are clubs with specific histories that their fanbases carry. United's history is trophies, individuals, Ferguson. Fulham's is Craven Cottage, the Thames, and a long story of being in football without being at the top. What it means is completely different.",
 
    BO:"Both have fanbases with passion but the emotional register is completely different. United's passion comes with expectation, history, and grief when it isn't met. Bournemouth's comes with gratitude and surprise. The scale of what each fanbase carries is incomparable.",
 
    SU:"Both are northern clubs with large fanbases and complicated institutional histories. Sunderland's institutional history involved relegation to League One. United's involves a fall from the sustained dominance of the Ferguson era. Sunderland fans have experienced more extreme difficulty. United fans have experienced more extreme success.",
 
    LU:"Both are northern clubs with big fanbases and a strong sense of where they belong. United's sense is backed by recent historical dominance. Leeds' is backed by older history and fierce conviction. Both believe it. United's belief is more recently justified.",
 
    IT:"Both are clubs with proud histories and fanbases that carry those histories. United's history involves European cups and the most successful English manager in history. Ipswich's involves a UEFA Cup and the Bobby Robson era. United's something is bigger. Ipswich's is more personally held.",
 
    CV:"Both are clubs where the fanbase's loyalty has been tested relative to their expectations. United fans expected sustained success and are navigating its absence. Coventry fans expected a home ground and a stable institution and were tested to the limit. The nature of what they were holding on for was very different.",
  },
  SP:{
    HU:"Both of you hold belief and clear eyes at once, fully invested and fully self-aware. You laugh at your own near-misses, self-deprecation as a survival skill. Hull refused to be laughed at, defending its name without flinching when an owner treated it as a punchline. Both of you know exactly who you are. You joke about it. Hull went to war over it.",
    EV:"The key fork is public versus private suffering. Spurs fans perform the suffering with a kind of dark comedy and self-awareness. Everton fans absorb it quietly and carry it alone. You know which one you are.",
    AR:"Both long-suffering with principled identities and tortured near-misses. Arsenal hold a clear philosophy as sacred. Spurs are more chaotically self-aware about their own absurdity. If you take the method seriously, Arsenal. If you've developed a sense of humour about your own hope, Spurs.",
    LE:"Both defined by hope that won't die. Leicester actually got the impossible thing. Spurs have come agonisingly close. If you want to follow a club where the miracle already happened and now you need a second one, Leicester. If you prefer living in the agonising anticipation, Spurs.",
    MU:"Both clubs define themselves by proximity to greatness they can almost touch. The difference is United have actually held it and the weight of that memory makes the present feel like failure. Spurs have not, which makes the hope feel cleaner, less contaminated by what it used to be.",
 
    LI:"Both are clubs with high expectations and a passionate fanbase. Liverpool's expectations are consistently met. Spurs' exist in a permanently unresolved relationship with delivery. Liverpool fans experience football as collective myth that keeps getting confirmed. Spurs fans experience it as hope that keeps almost arriving.",
 
    MC:"Both are clubs that have experienced Champions League finals. City won theirs. Spurs reached theirs in 2019 and didn't win it. City fans know what getting it feels like. Spurs fans know what getting close feels like, which is both better and worse than not getting close at all.",
 
    NC:"Both have fanbases that feel the club should be competing at the highest level. Newcastle's feeling is place-rooted. Spurs' is historically backed, they were England's first double winners and have genuine claims to being a big club. Both live with the gap between where they are and where they feel they should be.",
 
    WH:"Both are London clubs with specific identities and fanbases that know exactly who they are. West Ham's identity is East End and working-class. Spurs' involves the fighting cockerel, the pub at the foot of White Hart Lane, and a history of brilliant football that hasn't produced Premier League trophies. Both are real. Both endure.",
 
    CP:"Both are London clubs with specific identities that their fanbases defend. Palace's is south London and built from below. Spurs' is north London and historically rooted in a culture of brilliant attacking football. Both have supporters who feel the identity is worth more than the current trophy count suggests.",
 
    BR:"Both are London clubs with community identities that matter. Brentford's is explicit community ownership and a neighbourhood. Spurs' is the Jewish community of north London and a long tradition of specific football culture. Both have communities that the club belongs to in a meaningful sense.",
 
    BH:"Both are clubs where the identity is built around doing things properly. Brighton's version is analytical and progressive. Spurs' involves a history of brilliant attractive football that is held up as the standard. Both fanbases will tell you when the football isn't meeting that standard.",
 
    WO:"Both are clubs that have a clear identity around how football should be played. Wolves' identity involves systematic, organised football. Spurs' involves attacking football, individual brilliance, and a culture of flair. The aesthetics in question are very different.",
 
    FU:"Both are London clubs with histories that predate the Premier League. Fulham's history is gentler and more comfortable. Spurs' is more loaded with expectation and the specific suffering of nearly winning things. Fulham's involves contentment. Spurs' involves a kind of permanently entertained self-torment.",
 
    BO:"Both have fanbases where hope is a central feature. Spurs' hope is tortured and self-aware. Bournemouth's is simpler and more straightforward. Spurs fans believe it against considerable historical evidence. Bournemouth fans believe it because things have been genuinely going well.",
 
    NF:"Both are clubs with improbable histories. Forest's improbability happened and is finished, two European Cups. Spurs' improbability feels ongoing and perpetually about to arrive. Forest's evidence is conclusive. Spurs' is pending.",
 
    AV:"Both are clubs where the proximity to greatness is part of the experience. Spurs have been close in the Premier League era without converting. Villa achieved it decades ago and are building toward something again. Spurs' belief is more tortured. Villa's is more hopeful.",
 
    SU:"Both are clubs where loyalty is tested and the fanbase keeps showing up regardless. Sunderland's tests have been more severe. Spurs fans endure a different kind of difficulty, the specific frustration of being close without getting there. Sunderland's loyalty involves more genuine hardship. Spurs' involves more self-aware anguish.",
 
    LU:"Both are clubs with big fanbases and complicated relationships with success they feel they deserve. Leeds' complication is about a historical identity that demands to be at the top. Spurs' is about being good enough to compete but not quite good enough to win. Leeds fans believe confrontationally. Spurs fans believe with resigned self-awareness.",
 
    CH:"Both are London clubs with histories and expectations. Chelsea's expectations are rooted in recent dominance. Spurs' are rooted in a history of brilliant football and the specific frustration of not winning the Premier League. Both have complicated recent histories.",
 
    IT:"Both are clubs with histories that their fanbases carry with genuine investment. Ipswich's history is specific and county-rooted. Spurs' is broader and involves a claim to being among England's great clubs. Spurs fans measure everything against a standard that the club hasn't fully met in decades.",
 
    CV:"Both are clubs where the fanbase's loyalty has been tested over prolonged periods. Coventry's tests were structural and existential. Spurs' have been the specific frustration of nearly winning things and not quite getting there. The nature of the tests was very different but the loyalty was equally genuine.",
  },
  LE:{
    HU:"Both of you have lived proof that the impossible happens. Yours was a 5000-to-1 title nobody had any right to win. Hull's was smaller and stranger, a fanbase that beat its own owner to keep the name on the badge. Both of you know the long shot can land. You won a trophy. Hull won an argument that mattered more to it than any trophy.",
    NF:"Both are miracle clubs, Forest's is older and mythologically bigger; Leicester's is more recent and arguably more statistically improbable. Forest is pure chaos and manager mythology. Leicester is the team 5000-to-1 couldn't stop. If chaos and the long-ago miracle appeal over the recent one, Forest.",
    SP:"Both are clubs where impossible hope is the whole point. The fork is that Leicester actually converted theirs in 2016, which changed what hope means for them permanently. Spurs carry the hope without the proof. That shapes everything about how each fanbase relates to the next season.",
    BH:"Both pleasantly surprised to be where they are. Brighton earns it through careful thinking. Leicester earned it through the most improbable moment in modern football. If you'd rather be the joyful smart club than the miracle club still chasing the second one, Brighton is the closer fit.",

    BO:"Both are small clubs with improbable recent histories in the Premier League. Leicester's story is more dramatic and comes with more expectation now. Bournemouth are still in the earlier chapter of their ascent, lighter, less complicated by what came before. If the miracle already happened and you carry it, Leicester. If you're still living the surprise, Bournemouth.",
 
    LI:"Both have experienced European glory that changed what the fanbase believes is possible. Liverpool's European history is sustained and recurring. Leicester's was a single extraordinary night in Madrid. Both know what it means when a football club becomes something bigger than the game itself.",
 
    MC:"Both have experienced the specific satisfaction of being right about something others doubted. City proved that sustained investment and systematic excellence works. Leicester proved that sometimes football just does the impossible. Both fanbases have been part of something that changed the conversation.",
 
    AR:"Both have experienced the specific joy of doing it properly and having it recognised. Arsenal's recognition came in cycles. Leicester's came once, in 2016, overwhelmingly and improbably. Both know what it feels like when the approach justifies itself. Leicester's moment was more sudden and more surprising.",
 
    EV:"Both are clubs with long histories and fanbases that remember better times. Everton's history is longer and the frustration of not winning things recently is deeper. Leicester had their extraordinary moment in 2016 that changed the reference point permanently. Both have something to point to. Leicester's is more recent and more improbable.",
 
    NC:"Both are clubs with passionate fanbases and genuine recent high points. Newcastle's high points were mostly historical. Leicester's was 2016 and it was the most improbable thing Premier League football has produced.",
 
    WH:"Both are clubs with genuine histories and fanbases that carry those histories. West Ham's is working-class and place-rooted. Leicester's is midland and now permanently framed by 2016. West Ham fans feel the weight of East London history. Leicester fans feel the specific lightness of knowing they got the impossible thing.",
 
    CP:"Both achieved something that felt bigger than their resources should have allowed. Leicester's title is the most statistically improbable achievement in Premier League history. Palace's sustained Premier League presence is impressive for a south London club of their size. Both earned something. Leicester's moment was louder.",
 
    MU:"Both have won major trophies and carry that with them. United's trophies are more numerous and more recent. Leicester's is singular and improbable in a way United's never were. Leicester's reference point is permanently different in character to anything any other English club has.",
 
    WO:"Both are East Midlands and Midlands clubs with specific regional identities. Wolves' identity is Midlands grit and quiet consistency. Leicester's is now permanently framed by a miracle. Both have fanbases that understand the club as something beyond results.",
 
    FU:"Both have a certain acceptance of what they are alongside moments of genuine quality. Fulham's acceptance is comfortable and long-standing. Leicester's was transformed in 2016 and hasn't quite settled back. Leicester fans have a higher watermark that can never be lowered.",
 
    SU:"Both are clubs where loyalty was tested and held. Sunderland's test was institutional and prolonged. Leicester have had relegations and difficult periods. Both kept their identity regardless. Leicester fans now also know what the impossible feels like.",
 
    LU:"Both are East and West Yorkshire and East Midlands clubs with big fanbases and complicated histories. Leeds' history involves European nights and a combative identity. Leicester's now includes the most improbable title in Premier League history.",
 
    CH:"Both have won the Premier League title. Chelsea won it multiple times through significant spending. Leicester won it once through something that still can't be fully explained. Chelsea's memories come with expectation that it will happen again. Leicester's comes with a kind of permanent disbelief that it happened at all.",
 
    IT:"Both are clubs with improbable histories relative to their size. Ipswich won a UEFA Cup with a county town club. Leicester won the Premier League at 5000-1. Both proved that football occasionally does the impossible for smaller clubs.",
 
    AV:"Both have European Cup history that defines the club's identity. Villa's is 1982 and part of a longer history. Leicester's is more recent and came after the most improbable title in the league's history. Both have fanbases that know what it means when a club achieves something that was supposed to be impossible.",
 
    CV:"Both are Midlands-adjacent clubs with loyal fanbases and complicated recent histories. Coventry's difficulty has been more prolonged and structural. Leicester's post-2016 has involved relegations and rebuilding. Both have fans that hold the club's identity regardless of league position. Leicester's identity now has a permanent reference point that most clubs will never have.",
  },
  NF:{
    HU:"Both of you love the stories that had no business happening. Yours was two European Cups won from outside the top flight, the most improbable rise in the English game. Hull's was quieter, a supporters' campaign overturning an owner's rebrand to keep a name dating to 1904. Both of you trust the improbable. You conquered Europe. Hull kept itself.",
    LE:"Forest's miracle is older, less statistical, more mythological, Clough, a manager cult, a team that shouldn't have existed at that level. Leicester's is more recent, more data-defying. Both are romantic clubs. Forest has more mythology; Leicester has more recent proof.",
    AR:"Both have a romantic relationship with their club's past and a sense of what the club means beyond results. Arsenal's romance is about doing it properly. Forest's is about doing it impossibly. One worships the method; one worships the myth.",
    WH:"Both tolerate chaos and have complicated histories. Forest's chaos is mythological and historic; West Ham's is more ongoing and present-tense. If you prefer your chaos to be legendary rather than current, Forest.",

    EV:"Both have a stubborn romantic loyalty to a version of their club that no longer quite exists. Everton's romanticism is about the School of Science and the belief they should be better. Forest's is about Clough and the European Cups and the specific improbability of what they achieved. Both fanbases are waiting for a return that may or may not come.",
 
    LI:"Both have European glory that defines the club's identity. Liverpool's is sustained and recurring. Forest's is older and more mythological, two European Cups in the late 1970s under a manager who built it from almost nothing. Both know what it means when a football club becomes something bigger than the game. Forest's version happened in a way that makes it permanently extraordinary.",
 
    MC:"Both have experienced what it means to be genuinely dominant in Europe. City's is more recent and more resource-intensive. Forest's is older and more improbable. The mechanisms were completely different: City through systematic investment, Forest through one man's genius and a specific kind of chaos.",
 
    NC:"Both are northern clubs with passionate fanbases and a sense that they belong at a higher level than they sometimes occupy. Newcastle's sense is place-rooted. Forest's is rooted in the mythology of what they achieved under Clough. Both carry those reference points as permanent background conviction.",
 
    CP:"Both are clubs with improbable histories that define the fanbase's relationship with the possible. Forest's improbability is European and mythological. Palace's is more local, sustained Premier League presence through sheer fanbase intensity. Both prove that size isn't the whole story.",
 
    MU:"Both are clubs with European Cup history that defines the club's identity. United's European history is more sustained and more recent. Forest's is older and more improbable. The character of how they got there is very different: United through sustained excellence, Forest through chaos and genius.",
 
    SP:"Both are clubs where hope and the possibility of improbable success is part of the experience. Spurs' hope is contemporary and tortured. Forest's is historical and mythological, they did the impossible and it happened when nobody thought it could. Spurs are waiting for their version. Forest's already happened.",
 
    BR:"Both are clubs that earned something improbable. Brentford earned Premier League football through a model. Forest earned European Cups through something that can't be fully modelled. Forest's achievement is older and less replicable.",
 
    BH:"Both have a romantic relationship with improbable success. Forest's romanticism is historical and involves Clough and chaos. Brighton's is more recent and more analytically understood. Forest's version involved pure genius. Brighton's involved careful planning.",
 
    WO:"Both are Midlands-adjacent clubs with specific identities and fanbases that carry their history with pride. Wolves have their own specific identity rooted in Midlands grit. Forest have the mythology of Clough and the City Ground. Both prove that English football has depth beyond the big six.",
 
    FU:"Both have a specific relationship to place that defines the club. Forest have the City Ground and the Trent. Fulham have Craven Cottage and the Thames. Both grounds are irreplaceable. Forest's ground carries more dramatic history. Fulham's carries more gentle continuity.",
 
    BO:"Both are clubs with improbable recent histories and fanbases that appreciate how unlikely it is to be competing at this level. Forest's improbability is historical and mythological. Bournemouth's is more recent. Both know that smaller clubs can achieve things that weren't supposed to happen. Forest's evidence is older and more extreme.",
 
    AV:"Both have European Cup history that defines the club's identity. Villa's is 1982 and part of a longer history of genuine ambition. Forest's back-to-back European Cups under Clough is one of the most improbable achievements in football history. Forest's version was more improbable.",
 
    SU:"Both are clubs where loyalty was tested and held through genuinely difficult periods. Sunderland fell to League One. Forest spent years outside the top flight after their extraordinary peak. Both kept their identity regardless. Both are now in better places.",
 
    LU:"Both are clubs with a specific golden era that defines how the fanbase relates to the possible. Forest's is Clough and two European Cups. Leeds' is Revie and European nights. Both prove that English clubs outside the current elite can be genuinely great.",
 
    IT:"Both are clubs with improbable golden eras that their fanbases carry permanently. Forest won two European Cups. Ipswich won a UEFA Cup under Bobby Robson. Both prove that the impossible happens in English football to clubs that are properly run and properly believed in.",
 
    CH:"Both have won major European trophies. Chelsea's came through significant spending. Forest's came through something that will never be fully explained. Chelsea's came with expectation. Forest's came as something that felt like it was happening to people who couldn't quite believe it.",
 
    CV:"Both are Midlands clubs with fanbases that held on through long difficult periods. Forest spent years outside the top flight after their peak. Coventry spent years without a home ground. Both kept their identity regardless. Both know that football clubs mean something to their communities that outlasts any particular era.",
  },
  BR:{
    HU:"Both of you reached this level from outside the obvious path, by routes that could not differ more. You outsmarted the system, building an edge from data nobody else trusted. Hull dug in and refused to be moved, keeping a name an owner had already decided to sell. Same league, opposite method. You were the cleverest team in the room. Hull was the most immovable.",
    MC:"Both are process-first and analytically wired. The underdog/favourite divide is the line. City expect to win everything. Brentford expect to be smart enough to compete with people who spend ten times what they spend.",
    BH:"Both are data-forward clubs. Brighton does it with more warmth and communal joy. Brentford does it more quietly and with more contrarian energy. If you celebrate the smartness openly, Brighton. If you just act on it without needing anyone to notice, Brentford.",
    WO:"Both private, process-driven, underdog-comfortable. Brentford is more explicitly contrarian. Wolves are more quietly disciplined. If the data-nerd identity resonates strongly and you want people to know it, Brentford. If it's just how you operate, Wolves.",
 
    LI:"Both have a community at the heart of what the club means. Liverpool's community is global and mythological. Brentford's is intensely local, Griffin Park's streets, Bees United, the community ownership model. Liverpool fans feel the belonging at scale. Brentford fans feel it in a way that is specific and almost private.",
 
    AR:"Both think carefully about how football should be done. Arsenal's thinking is aesthetic and philosophical. Brentford's is operational and data-driven. Both believe there is a right way. Arsenal fans argue the case publicly. Brentford fans just see it working and find satisfaction in that.",
 
    EV:"Both are clubs where the fanbase's authenticity is the best thing about the institution. Everton's authenticity is old, place-rooted, and currently frustrated. Brentford's is newer and more consciously constructed through community ownership. Both have genuine supporters. Everton's loyalty has been tested more severely.",
 
    NC:"Both built something real through community and collective ownership of identity. Newcastle's community is a whole city. Brentford's is a west London neighbourhood. Both feel genuinely local. The scale is completely different but the rootedness is equally real.",
 
    WH:"Both are working-class clubs with a strong sense of local identity. West Ham's identity is East End and historical. Brentford's is west London and more recently constructed through community ownership. Both resist the drift toward corporate football identity. West Ham fans feel the history. Brentford fans feel the model.",
 
    CP:"Both are south and west London clubs that built genuine Premier League presences without massive resources. Palace did it through fan culture and atmosphere. Brentford did it through data and community ownership. The methods differed but the spirit of earning it rather than buying it is the same.",
 
    MU:"Both have fanbases that know what the club stands for and hold it to that standard. United's standard is historical greatness and the expectation of trophies. Brentford's is community ownership, smart thinking, and belonging. Both will tell you when the club isn't meeting it. The standards are from entirely different worlds.",
 
    SP:"Both are London clubs with specific identities and a fanbase that takes those identities seriously. Spurs' identity involves history, suffering, and a particular kind of dark hope. Brentford's involves community, process, and a quiet satisfaction in doing things properly. Both have supporters who understand what their club represents.",
 
    LE:"Both are clubs that achieved something improbable and changed what their fanbase believes is possible. Leicester's moment was more explosive and more statistically impossible. Brentford's rise was more incremental and model-driven. Both know what it feels like to earn a place that most people didn't think was coming.",
 
    NF:"Both are clubs with improbable stories at their heart. Forest's improbability is historical and mythological. Brentford's is recent and methodological. Both know what it means to be a smaller club that earned something bigger than expected. Forest's version involved a genius manager and pure chaos. Brentford's involved systematic excellence.",
 
    FU:"Both are west London clubs with community-first identities and no complex about their scale. Fulham have Craven Cottage and a longer top-flight history. Brentford have community ownership and a data model that has become nationally admired. Both are undefensive. Both belong.",
 
    SU:"Both are clubs where loyalty was tested and held. Sunderland's test was more severe, League One, years of decline. Brentford spent decades in the lower leagues before their rise. Both fanbases kept showing up. The character of the loyalty is similar even if the scale of the difficulty differed.",
 
    LU:"Both are clubs with fanbases that feel the identity of the club as something worth protecting. Leeds' identity is confrontational and historically loaded. Brentford's is communal and analytically grounded. Both are serious about what the club means. Leeds fans assert it loudly. Brentford fans live it quietly.",
 
    CH:"Both are London clubs with recent Premier League presence. Chelsea's presence is backed by enormous spending and historical dominance. Brentford's is backed by smart thinking and community ownership. Both are genuinely Premier League clubs. The contrast between how each got there and what it means to the fanbase is about as stark as it gets.",
 
    AV:"Both are clubs where the journey to the current position involved real work. Villa's journey involved new ownership and significant investment. Brentford's involved years of building a model that eventually worked. Both are enjoying a position they earned. The mechanisms and scale were very different.",
 
    IT:"Both are clubs where community pride and belonging to something real matters more than profile. Ipswich's pride is county-specific. Brentford's is neighbourhood-specific. Both are undefensive about their scale. Both arrived in the Premier League by being exactly what they are rather than pretending to be something bigger.",
 
    CV:"Both are clubs where the fanbase's loyalty was tested by institutional difficulty. Coventry's difficulty was structural and prolonged. Brentford spent decades in the lower divisions before their rise. Both know what it means to keep believing when the circumstances don't justify it. Both are now in better places.",
  },
  BH:{
    HU:"Both of you have punched above your size by opposite methods. You did it with a clever plan, an analytics model that turned a small club into a smart one. Hull did it with a flat refusal to be moved, beating an owner's rebrand through collective stubbornness. Both of you proved size is not the whole story. You outthought the room. Hull out-stubborned it.",
    BR:"Both are analytically run, community-rooted clubs that earned their place through intelligence rather than spending. Brighton does it with more warmth and a bigger stage. Brentford is smaller, quieter, more insider. The values are identical, the volume differs.e contrarianism.",
    MC:"Both think carefully. Brighton adds warmth, the Amex atmosphere, the community, the delight. City have none of the delight; they have the expectation. Very different emotional registers built on similar analytical foundations.",
    AR:"Both think carefully about how football should be played. Brighton is more cheerful and less tortured. Arsenal carries more expectation and more pain. If you're content with your club's direction, Brighton. If you need things to match what they should be, Arsenal.",

    LE:"Both are clubs pleasantly surprised to find themselves here. Brighton earned it through a carefully built model. Leicester earned it through a miracle. Brighton's version is more sustained and deliberate. Leicester's was more concentrated and explosive. If the careful build matters, Brighton. If you want the one extraordinary thing, Leicester.",

    BO:"Both are south coast clubs without historical reason to be in the Premier League. Brighton have the bigger operation, the smarter model, the louder stadium. Bournemouth have the simpler joy and less overthinking. If the intelligence of the club matters to you, Brighton. If you just want to enjoy it, Bournemouth.",
 
    LI:"Both think carefully about how football should work and expect the club to embody a coherent philosophy. Liverpool's philosophy is emotional and mythological. Brighton's is analytical and process-driven. Both have a fanbase that is engaged beyond the surface level. Liverpool's engagement is felt collectively; Brighton's is understood intellectually.",
 
    EV:"Both are clubs where loyalty is unconditional but expressed differently. Everton's loyalty is quiet, absorbed, place-specific. Brighton's is more engaged with the model and the approach. Everton fans endure. Brighton fans understand why things are being done and appreciate the logic of it even when results disappoint.",
 
    NC:"Both have fanbases genuinely invested in what their club represents beyond results. Newcastle's investment is place-rooted and communal. Brighton's is model-driven and progressive. Newcastle fans care about the city having a club at the top. Brighton fans care about a smart club earning its place. Different kinds of pride, equally genuine.",
 
    WH:"Both are clubs where the atmosphere and community matter as much as what's happening on the pitch. West Ham's community is East End and place-rooted. Brighton's is south coast and more broadly progressive. Both have fanbases that feel real. West Ham's identity is more traditional; Brighton's is more forward-looking.",
 
    CP:"Both are south London and south coast clubs that built real atmospheres without massive resources. Palace did it through fan organisation and sheer local intensity. Brighton did it through an intelligent model and a stadium that generates genuine noise. Both arrived in the Premier League through genuine effort rather than money.",
 
    MU:"Both have fanbases that hold the club to a standard beyond winning. United's standard is about historical greatness and the expectation of dominance. Brighton's is about intelligent, principled football done the right way. Both will tell you when the club isn't meeting the standard. The standards themselves are very different.",
 
    SP:"Both are clubs where the identity is built around doing things properly rather than just winning. Spurs' version involves suffering and dark humour. Brighton's involves understanding and appreciating the model. Both fanbases are sophisticated. Spurs fans feel it emotionally. Brighton fans engage with it analytically.",
 
    WO:"Both are quietly methodical clubs that earn their place through process rather than spending. Wolves do it with Midlands grit and specific defensive organisation. Brighton do it with data and a well-understood progressive model. Both avoid chaos. Brighton's version is louder academically; Wolves' is quieter culturally.",
 
    FU:"Both are clubs comfortable with their identity and undefensive about not being one of the biggest clubs. Fulham's comfort is rooted in Craven Cottage and a long history. Brighton's is rooted in a model they believe in. Both have fanbases that appreciate football done well. Fulham are content. Brighton are engaged.",
 
    NF:"Both have a romantic relationship with improbable success. Forest's romanticism is older and more mythological. Brighton's is more recent and more analytically understood. Both know what it feels like when a smaller club achieves something that wasn't supposed to happen. Forest's version is more chaos-driven. Brighton's is more intentional.",
 
    SU:"Both have fanbases that stayed through difficult periods and now get to enjoy something better. Sunderland's difficult period was more extreme. Brighton's rise has been more sustained and deliberate. Both appreciate their current position but the emotional journey to get here was very different in character.",
 
    LU:"Both are clubs where the fanbase's intensity outlasted the institution's ability to match it. Leeds' intensity is more confrontational and carries more historical weight. Brighton's is more engaged and forward-looking. Both care deeply. Leeds fans carry the past loudly. Brighton fans are more focused on the present model.",
 
    CH:"Both are clubs that have won things and expect to compete. Chelsea's expectation is rooted in recent spending-powered dominance. Brighton's is rooted in a model they believe can sustain. Chelsea fans are currently confused. Brighton fans understand exactly what the club is doing and broadly approve.",
 
    AV:"Both are clubs currently in genuine positive moments. Villa's positivity is more traditionally rooted, big club, big history, big ambition. Brighton's is model-driven and philosophically consistent. Both are enjoyable right now. Villa fans want trophies. Brighton fans want the model to keep producing.",
 
    IT:"Both are modest clubs that earned their place through intelligence rather than resources. Ipswich's intelligence is rooted in community and a specific Suffolk pride. Brighton's is operational and data-driven. Both are undefensive about their scale. Brighton's approach is more explicitly modern. Ipswich's identity is more traditionally community-based.",
 
    CV:"Both are clubs where the fanbase's loyalty survived institutional difficulty. Coventry's difficulty was more prolonged and structural. Brighton's rise involved years of lower league football and ground-sharing before the Amex. Both fanbases have earned their current position. The nature of the difficulty was different but the loyalty is equally genuine.",
  },
  WO:{
    HU:"You share the amber and the quiet pride in your own corner of England. You never had to shout about it, Wolverhampton's certainty in itself never really questioned. Hull did have to shout, fighting to keep the City an owner tried to delete from its name. Both of you are proud of a place outside the spotlight. You assume it. Hull defended it.",
    BR:"Both are quietly methodical clubs with no interest in performing for anyone outside the ground. Brentford earns that through data and community ownership, Wolves through Midlands grit and a consistently underrated football culture. The difference is Wolves have a longer history of genuine top-flight presence.",
    MC:"Both systematic, low-chaos, high process. Scale separates them. City want everything. Wolves want to exceed what they're supposed to be. Disciplined punching-above-weight appeals more than relentless dominance? Wolves.",
    FU:"Both quiet and comfortable with their identity. Wolves are more competitive about it, there's a quiet fire, a chip. Fulham are more genuinely at peace. If you have the quiet fire, Wolves. If you're actually fine, Fulham.",
 
    LI:"Both have specific communities that the club belongs to. Liverpool's is global and mythological. Wolves' is Midlands and specific to a city that has always been understated about its football culture relative to what it actually has. Liverpool's is louder by every measure. Wolves' is quieter and perhaps more genuinely local for it.",
 
    AR:"Both are clubs with a systematic approach to football. Arsenal's is aesthetic and principled. Wolves' is tactical and organisational. Arsenal fans argue about whether the method is right. Wolves fans just see it working and get on with it. The emotional register around the approach differs significantly.",
 
    EV:"Both are clubs where the fanbase gets on with it without drama. Everton absorb difficulty quietly on Merseyside. Wolves absorb it quietly in the Midlands. Both have fanbases that care without excessive performance. Both are genuine.",
 
    NC:"Both are clubs with specific regional identities that feel more real than many bigger clubs' identities. Newcastle is a whole city organised around football. Wolves are a Midlands club with a specific identity rooted in the city and the region. Both feel locally owned. Newcastle's scale is greater. Wolves' is more understated.",
 
    WH:"Both are working-class clubs with specific regional identities and fanbases that carry those identities without drama. West Ham are East End, historical, and more explicit about their working-class roots. Wolves are Midlands, quiet, process-driven. Both resist the drift toward corporate football identity.",
 
    CP:"Both are clubs that arrived in the Premier League and stayed without the resources of bigger clubs. Palace did it through atmosphere and fan culture. Wolves did it through systematic excellence and a specific approach to recruitment. Neither club arrived through spending their way in.",
 
    MU:"Both are clubs with clear identities that their fanbases defend. United's identity is about historical dominance and global greatness. Wolves' is Midlands, quiet, process-driven, and uninterested in being something bigger than it is. The representations are from entirely different ends of football's scale.",
 
    SP:"Both are clubs with specific approaches to football that their fanbases hold the institution to. Spurs' standard is attacking football and individual brilliance. Wolves' is systematic, defensively organised, and process-driven. The standards they're measuring against are different.",
 
    LE:"Both are Midlands clubs with improbable histories. Leicester's improbability is the 2016 title. Wolves' is their 1950s dominance under Stan Cullis and their recent return to European football. Both prove that Midlands football has depth.",
 
    NF:"Both are Midlands-adjacent clubs with specific identities and fanbases that carry their history. Forest's history is mythological and European. Wolves' is domestic and rooted in the 1950s. Both prove that English football has depth beyond the big six.",
 
    BH:"Both are methodical clubs that earn their place through process. Brighton's process is more explicitly analytical and nationally recognised. Wolves' is quieter and more traditional. Brighton's version is louder academically. Wolves' is quieter culturally.",
 
    BO:"Both are clubs comfortable with their identity and undefensive about their scale. Bournemouth's comfort is newer. Wolves' is rooted in a longer history and a Midlands identity that has always been understated. Wolves want to win things. Bournemouth are happy to be here.",
 
    SU:"Both are clubs with fanbases that absorb difficulty without excessive drama. Sunderland absorbed League One. Wolves absorbed years outside the top flight before their recent return. Both held on. Sunderland's version of holding on required more endurance.",
 
    LU:"Both are clubs with specific identities and fanbases that carry those identities with genuine commitment. Leeds' commitment is confrontational and historically loaded. Wolves' is quieter and more understated. Leeds fans assert it loudly. Wolves fans live it without feeling the need to tell anyone.",
 
    CH:"Both are clubs with quality and resources relative to the league. Chelsea have more of both. Wolves are more consistent in their identity. Chelsea are currently finding themselves post-Abramovich. Wolves know exactly who they are and have for decades.",
 
    AV:"Both are Midlands clubs with proud histories and quality fanbases. Villa have bigger ambitions and a larger historical footprint. Wolves have a specific identity built around quiet consistency. Both understand the specific experience of being a major club that isn't always in the national conversation as much as it deserves.",
 
    IT:"Both are clubs where doing things properly without needing external recognition is part of the identity. Ipswich's version is Suffolk-specific and rooted in the Bobby Robson era. Wolves' is Midlands-specific and rooted in decades of systematic football. Both are undefensive about their scale.",
 
    CV:"Both are Midlands clubs with loyal fanbases and a sense that the club belongs to its community more than to any particular owner. Coventry's community went through years of groundlessness. Wolves' community has had a more stable relationship with its ground. Both prove that Midlands football is more than Birmingham and Aston Villa.",
  },
  FU:{
    HU:"Both of you have made peace with not being famous, content at the size you are. Yours came easily, the gentle confidence of a club that never needed to argue about itself. Hull's came after a war, an owner insisting it would be worth more as something else, and a fanbase that disagreed and won. Both of you are comfortable being yourselves. You always were. Hull earned it.",
    BO:"Both genuinely content clubs with no complex about their scale. Fulham have Craven Cottage, the Thames, a long top-flight history, and a kind of gentility that sets them apart. Bournemouth are newer to it, smaller, simpler. If the character of the place matters, Fulham. If you just want the joy without the history, Bournemouth.",
    WO:"Both quiet. Wolves have a competitive edge beneath the calm, they want to exceed expectations. Fulham are more genuinely fine. If you have the quiet competitive fire, Wolves. If you're actually content, Fulham is the honest answer.",
    AR:"Both find meaning in doing things properly. Fulham are content with that as the goal itself. Arsenal fans want the trophies to follow. If you genuinely don't need the trophies to feel like it meant something, Fulham is the more honest answer.",

    IT:"Both are clubs that know exactly what they are and find it genuinely enough. Ipswich's version is rooted in Suffolk identity and the specific pride of a small-city club that once competed in Europe. Fulham's is rooted in Craven Cottage and a kind of London gentility. Both are completely undefensive about their scale.",
 
    LI:"Both have a specific place that defines the club's identity more than trophies do. The Kop defines Liverpool. Craven Cottage defines Fulham. Both are irreplaceable. Liverpool's place generates mythology and collective emotion. Fulham's generates a specific gentle pride, the Cottage, the Thames, the fact that it has been there since 1896.",
 
    MC:"Both appreciate football done well but the emotional register is entirely different. City fans expect dominance and systematic excellence. Fulham fans appreciate good football while being comfortable not expecting to win anything. Both enjoy quality. One's enjoyment comes with expectation. The other's comes with none.",
 
    EV:"Both are clubs where the identity is more important than the trophy count. Everton's identity is rooted in Merseyside loyalty and frustrated ambition. Fulham's is rooted in Craven Cottage and a kind of west London contentment. Both are genuine. Everton's version carries more frustrated expectation. Fulham's carries more genuine peace.",
 
    NC:"Both have fanbases where the place matters as much as the football. Newcastle's place is a whole city. Fulham's is a stretch of the Thames and an Edwardian ground. Both are specific and irreplaceable. Newcastle fans would follow the club anywhere. Fulham fans are partly there for the Cottage itself.",
 
    WH:"Both are London clubs with working-class roots and genuine community identities. West Ham's identity is more historically loaded and more explicitly defended. Fulham's is gentler and more comfortable. Both have real communities behind the badge. West Ham fans feel the weight of history. Fulham fans feel the lightness of knowing who they are without needing to argue about it.",
 
    CP:"Both are London clubs with specific identities that have survived commercial football. Palace's identity is south London intensity. Fulham's is west London gentility. Both are real and specific. Both have something worth preserving. Palace's version is louder. Fulham's is quieter and more comfortable with itself.",
 
    MU:"Both have fanbases with a clear sense of what the club should be. United's sense is rooted in historical greatness and the expectation of dominance. Fulham's is rooted in Craven Cottage and not needing dominance. Both know what they want from their club. What they want is completely different.",
 
    SP:"Both are London clubs with histories and identities that predate the Premier League era. Spurs' identity involves suffering and the specific torture of nearly winning things. Fulham's involves contentment and the specific pleasure of being exactly what they are. Both are valid. One's validity costs more emotionally.",
 
    LE:"Both have experienced Premier League survival and occasional flourishing without expecting to dominate. Leicester had their extraordinary moment. Fulham have had their good seasons. Both have fanbases that appreciate what they have. Leicester's moment was bigger and more defining.",
 
    NF:"Both have a romantic relationship to their own history and place. Forest's romance is about Clough and European nights. Fulham's is about the Cottage and the Thames and a long history of being in football without being at the top of it. Both have a specific character. Forest's character involves chaos. Fulham's involves comfort.",
 
    BH:"Both are clubs that know exactly what they are and are comfortable with it. Brighton knows it is a data-led progressive club. Fulham knows it is Craven Cottage and west London identity. Both are undefensive. Both belong. Brighton's identity is forward-looking and Fulham's is gently conservative.",
 
    SU:"Both are clubs where the fanbase's loyalty outlasted the institution's ability to reward it. Sunderland's test was more severe. Fulham have had relegations and difficult periods but nothing like League One. Both kept showing up. Both know what the club means beyond any particular season.",
 
    LU:"Both have fanbases that carry the club's identity with genuine commitment. Leeds' commitment is confrontational and historically loaded. Fulham's is gentler and more comfortable. Both care. Leeds fans assert the identity loudly. Fulham fans carry it quietly with the Cottage in the background.",
 
    CH:"Both are west London clubs with very different relationships to ambition and money. Chelsea built an identity around dominance through spending. Fulham built theirs around Craven Cottage and being comfortable with what they are. Chelsea's identity is currently feeling unmoored. Fulham's is as clear as it's ever been.",
 
    CV:"Both are clubs where contentment with identity has been a defining characteristic. Coventry's contentment was forged through necessity, when you lose your home ground, you learn to carry the identity without the place. Fulham's is more comfortable and long-standing. Both know who they are. Coventry's knowledge was harder to hold onto.",
  },
  BO:{
    HU:"Both of you are genuinely glad to be exactly where you are. Yours is sunshine, the easy joy of a small south-coast club that keeps surprising itself. Hull's is harder won, a club it once had to defend from an owner who wanted to rename it. Both of you are content in your own skin. Yours came free. Hull's it had to fight for.",
    FU:"Both are genuinely content clubs with no identity crisis about their size. Fulham has the Thames, Craven Cottage, and a century of First Division football as context for that contentment. Bournemouth's contentment is newer, earned through an unlikely ascent, and carries more of the surprise still in it.",
    LE:"Both small clubs with improbable recent histories. Leicester's story is more dramatic now and comes with more expectation. Bournemouth are still just happy to be here, no complex attached. If the miracle still defines you, Leicester. If you've moved past that and just want to enjoy the football, Bournemouth.",
    BH:"Both south coast, both progressive, both without historical reason to be in the Premier League. Brighton have the smarter operation and the bigger stadium. Bournemouth have the simpler joy and less overthinking. If the analytics and the careful model matter to you, Brighton. If you just want to enjoy it, Bournemouth.",

    IT:"Both are modest clubs genuinely content with their place. Ipswich's contentment is rooted in a specific Suffolk identity and the Bobby Robson era. Bournemouth's is newer, built around a rapid rise. Both are undefensive about their size. The difference is history versus present tense.",
 
    LI:"Both find genuine joy in what the club represents beyond the weekly result. Liverpool's joy is operatic and collective. Bournemouth's is simpler and more personal. Liverpool fans feel it as mythology. Bournemouth fans feel it as something still surprising. Both are genuine. The scale of the emotional investment is very different.",
 
    MC:"Both are clubs where the quality of football is something to appreciate. City's quality comes with enormous expectation. Bournemouth's comes with genuine surprise that they're here at all. Both fanbases enjoy good football. City fans take it as their right. Bournemouth fans take it as a gift.",
 
    AR:"Both find meaning in football done properly. Arsenal's version comes with philosophical weight and decades of expectation. Bournemouth's is simpler, they're just genuinely happy to be playing good football in the Premier League. Both appreciate the how. Arsenal fans argue about it; Bournemouth fans just enjoy it.",
 
    EV:"Both are clubs where the fanbase is the most genuine thing about the institution. Everton's fanbase carries decades of frustrated loyalty. Bournemouth's is newer to the Premier League and still partly amazed by it. Both have real communities behind their clubs. Everton's community is heavier; Bournemouth's is lighter.",
 
    NC:"Both are clubs where community is central. Newcastle's community is a whole city organised around football. Bournemouth's is a south coast town that didn't expect to be here. Both have genuine local identity. The scale and intensity of Newcastle's community attachment is significantly greater.",
 
    WH:"Both are clubs where belonging and place matter. West Ham's belonging is working-class East London, historically loaded. Bournemouth's is south coast and newer. Both have real local identity. West Ham fans carry a weight of history with their belonging. Bournemouth fans carry a sense of surprise.",
 
    CP:"Both are clubs that arrived in the Premier League without the resources of bigger clubs and found a way to stay. Palace did it through atmosphere and fan culture. Bournemouth did it through coaching excellence and a community identity. Both are genuinely happy to be competing. The routes were different but the spirit of earning it is the same.",
 
    MU:"Both have fanbases with real passion but the emotional register is completely different. United's passion comes with expectation, history, and grief when it isn't met. Bournemouth's comes with gratitude and surprise. Both care deeply. United fans feel entitled to success. Bournemouth fans feel lucky to be involved.",
 
    SP:"Both are clubs where hope plays a central role in the fanbase experience. Spurs' hope is tortured and self-aware. Bournemouth's is simpler and more straightforward. Both keep believing. Spurs fans believe despite historical evidence that it will probably hurt. Bournemouth fans believe because things have genuinely been going well.",
 
    NF:"Both are clubs with improbable recent histories. Forest's improbability is older and more mythological. Bournemouth's is more recent and still being written. Both know what it means to be a smaller club that achieved something bigger than expected. Forest's version involves more chaos. Bournemouth's involves more steady progress.",
 
    BR:"Both are modest clubs that earned their place through quality rather than resources. Brentford's quality is analytical and community-rooted. Bournemouth's is coaching-driven and community-based. Both are genuinely content to be competing. Brentford's route was more explicitly model-driven; Bournemouth's was more personality-driven.",
 
    WO:"Both are clubs comfortable with their scale and undefensive about it. Wolves have a longer history and a Midlands identity that gives the contentment more weight. Bournemouth's contentment is newer. Both just get on with it without needing external validation.",
 
    SU:"Both are clubs where the fanbase's loyalty outlasted genuinely difficult periods. Sunderland's difficulty was more severe. Bournemouth's rise is more recent and less hard-won. Both have fans that appreciate where they are now relative to where they've been. The character of the journey was very different.",
 
    LU:"Both are clubs where the community's passion is genuine and real. Leeds' passion is louder, more confrontational, and carries historical weight. Bournemouth's is quieter and more grateful. Both care. Leeds fans assert their identity. Bournemouth fans enjoy theirs.",
 
    CH:"Both have won things and know what success feels like. Chelsea's success was bought and dominant. Bournemouth's is smaller and more personal. Both fanbases have good memories to draw on. Chelsea fans expect more of it. Bournemouth fans are happy with what they have and what might still come.",
 
    AV:"Both are clubs whose fanbases are currently in positive moments relative to recent history. Villa's positive moment is bigger in scale and ambition. Bournemouth's is simpler and more grounded. Both appreciate it. Villa fans want trophies. Bournemouth fans want to keep being competitive in the best league in the world.",
 
    CV:"Both are clubs where survival has been a genuine theme. Coventry's survival story is more dramatic and structural. Bournemouth went through administration before their remarkable rise. Both know what it means to exist without certainty. The current contentment of both fanbases is earned rather than assumed.",
  },
  AV:{
    HU:"Both of you respect where you came from, the history and the place behind the club. You carry the past without being trapped by it, the old glory feeding the hunger rather than replacing it. Hull was ready to go to the wall for its, refusing to let an owner sell the name off for reach. Both of you honour the roots. You build on them. Hull defended them.",
    LI:"Both are clubs with genuine European pedigree and current ambition. Liverpool's identity is fully formed and rooted in mythology. Villa's is in the process of being rebuilt, the hunger is newer and the joy of it is different. If you want the completed story, Liverpool. If you want to be part of one being written, Villa.",
    NC:"Both are ambitious clubs with proud histories experiencing a genuine resurgence. The difference is place and scale: Newcastle is a whole city with a single identity. Villa is a sleeping giant in the UK's second city, which means the identity is bigger and more diverse.",
    MU:"Both are former-greatness clubs with European Cup history and high expectations. United's former greatness was more recent and more dominant. Villa's is older and the current rebuild feels more hopeful. If you're grieving something, United. If you're building toward something, Villa.",
 
    MC:"Both are clubs experiencing a genuinely exciting period of ambition and quality. City's ambition is sustained and dominant. Villa's is newer and feels more like a return than a continuation. Both fanbases enjoy watching good football but City fans now expect it while Villa fans are still partly surprised by it.",
 
    AR:"Both are clubs rebuilding toward historical standards they feel they belong at. Arsenal's rebuild is longer and more argued over. Villa's is newer and the excitement is less complicated. Both believe the club is going somewhere. Arsenal fans are more anxious about it. Villa fans are more openly enjoying the ride.",
 
    EV:"Both are historically significant clubs navigating difficult periods relative to their own standards. Everton's difficulty has been more prolonged and painful. Villa's resurgence is real and recent. Both fanbases understand what it means to be a big club that isn't currently at the top. The emotional register is different: Everton endures, Villa believes.",
 
    WH:"Both are clubs with working-class roots and genuine histories navigating the modern game. West Ham's identity is more place-specific and resistant to change. Villa's has broadened and the ambition is currently higher. Both have a fanbase that remembers better times and believes they're coming back. Villa's belief is currently being vindicated.",
 
    CP:"Both built a real fanbase culture without necessarily having the infrastructure to match it. Palace's culture is more locally concentrated. Villa's is regional and broader. Both have something authentic beneath the club's fortunes. Villa's current moment is giving that authenticity a platform it hasn't had in decades.",
 
    SP:"Both are clubs defined by proximity to greatness they can almost reach. Spurs have been close without converting. Villa have history but it's older, and the current rebuild is trying to write the next chapter. Both fanbases live with the knowledge that the club could and should be competing at the top. Villa's hope currently feels more grounded.",
 
    LE:"Both are clubs that have experienced the specific joy of doing something improbable. Leicester's moment was more concentrated and more statistically impossible. Villa's European Cup was longer ago but equally defining. Both know what it feels like when a football club becomes something bigger than the game for a moment.",
 
    NF:"Both have European Cup history that defines the club's identity regardless of what comes after. Forest's is more mythological, Clough, the chaos, the back-to-back improbability. Villa's is part of a longer history of genuine top-flight presence. Both fanbases know what it is to have been truly great and to be working toward that again.",
 
    BR:"Both are clubs where careful thinking has driven genuine progress. Brentford's thinking is operational and data-led. Villa's is more traditional but with new ownership and genuine investment. Brentford are building steadily. Villa are building rapidly. Both believe in a process. The scale and pace are very different.",
 
    BH:"Both are clubs enjoying genuine progress through intelligent approaches. Brighton's model is one of the most admired in European football. Villa's is more conventional but backed by serious investment. Both have fanbases currently enjoying watching their club play good football. Brighton's satisfaction is more about the model; Villa's is more about the destination.",
 
    WO:"Both are Midlands clubs with proud histories and quality fanbases. Wolves have a specific identity built around quiet consistency and Midlands grit. Villa have broader ambitions and a bigger historical footprint. Both understand the specific experience of being a major club that isn't in the conversation nationally as much as it deserves.",
 
    FU:"Both have a certain elegance about their identity. Fulham's is understated and rooted in Craven Cottage. Villa's is grander and more historically loaded. Both have fanbases that appreciate football done properly. Fulham's contentment is quieter. Villa's ambition is louder and currently being matched by the club's trajectory.",
 
    BO:"Both are clubs currently punching above what their recent histories suggested. Bournemouth's rise is more recent and more surprising. Villa's is a return rather than a first arrival. Both have fanbases genuinely enjoying the current moment. The difference is Villa fans have a historical standard to return to, Bournemouth fans are writing the first chapter.",
 
    SU:"Both are clubs where the community loyalty is unconditional but the institutional history is complicated. Sunderland's complications have been more painful and more recent. Villa's difficulties were real but briefer. Both fanbases know what it means to support a club through genuine difficulty. Villa's current trajectory makes the contrast sharper.",
 
    LU:"Both are clubs with big fanbases and complicated histories. Leeds' identity is more combative and confrontational. Villa's is grander and more historically established. Both have fans who feel the club should be competing at the highest level. Leeds' frustration is louder. Villa's belief is currently being rewarded.",
 
    CH:"Both are clubs with genuine historical prestige navigating transitions. Chelsea's transition is chaotic and identity-less beneath the spending. Villa's is purposeful and building toward something specific. Both have won major trophies. Chelsea fans currently feel the confusion of a club without a clear identity. Villa fans feel the excitement of one being rebuilt.",
 
    IT:"Both are clubs where community pride is genuine and the football matters beyond results. Ipswich's pride is county-specific and rooted in the Bobby Robson era. Villa's is broader and more historically loaded. Both have fans that care about the club as an institution. The scale of ambition currently differs significantly.",
 
    CV:"Both are Midlands clubs with loyal fanbases who have been through genuinely difficult periods. Coventry's difficulty was more prolonged and more structural. Villa's was shorter and the recovery has been more dramatic. Both know what it means to support a club that should be bigger than its current circumstances. Villa's circumstances have dramatically improved.",
  },
  SU:{
    HU:"Both of you stayed through the kind of collapse that empties other grounds. You stayed out of heartbreak, filling 46,000 seats in the third tier because leaving was never a thought. Hull stayed out of stubbornness, refusing to be rebranded out of its own identity. Both loyalties were proven in the bad years. Yours is grief carried with pride. Hull's is defiance.",
    NC:"Both are northern, communal, place-rooted clubs with painful institutional histories followed by genuine optimism. Newcastle's fanbase is larger and the trajectory is further along. Sunderland's story is rawer, the fall was deeper and the comeback is still being written.",
    EV:"Both are clubs defined by loyalty through difficulty and communal suffering. Everton's is quieter and more private. Sunderland's was documented publicly, which gave it a different quality, the whole world watched the pain and the comeback.",
    LU:"Both are intensely passionate northern fanbases that have been through genuine darkness and come back. Leeds' identity is more operatic and volatile. Sunderland's is more communal and specifically rooted in a city that lost more than just its football club.",

    CV:"Both are clubs defined by survival and institutional difficulty that the fanbase absorbed without abandoning ship. Sunderland's difficulty involved a fall to League One and the long climb back. Coventry's involved years without a proper home ground. Both tested loyalty beyond what most fanbases would tolerate and found it still there.",
 
    LI:"Both are clubs where the fanbase's loyalty is unconditional and communal. Liverpool's community has mythology and global reach. Sunderland's is more local and has been tested more severely, the Stadium of Light held 46,000 in League One. Liverpool's is louder. Sunderland's may be more unconditional.",
 
    MC:"Both are northern clubs with large fanbases that have been through very different kinds of difficulty. City's difficulty was mid-table obscurity. Sunderland's was a fall to the third tier. City's story resolved into extraordinary dominance. Sunderland's is a longer climb back toward where they believe they belong.",
 
    AR:"Both have fanbases that believe the club deserves more than it currently has. Arsenal's belief is principled and argued. Sunderland's is simpler and more communal, this is our club, it belongs here, it should be competing. Both are frustrated. The scale and character of the frustration is different.",
 
    WH:"Both are clubs where institutional decisions damaged the fanbase's trust and yet the loyalty held. West Ham left Upton Park. Sunderland fell to League One under ownership that didn't deserve the fanbase it had. Both fanbases absorbed what no supporter base should have to absorb. Both are still there.",
 
    CP:"Both are clubs where the fanbase built something the institution didn't always deserve. Palace fans created the Holmesdale atmosphere from scratch. Sunderland fans filled the Stadium of Light in League One. Both proved what a community can do without the club doing much to earn it.",
 
    MU:"Both are northern clubs with large fanbases and complicated institutional histories. United's institutional history involves a fall from sustained dominance. Sunderland's involves a fall to the third tier. The scale of what they were holding on for was completely different.",
 
    SP:"Both are clubs where loyalty is tested by the institution's inability to meet the fanbase's reasonable expectations. Spurs' frustration is about trophies. Sunderland's has been about stability, league position, and basic institutional competence. Both fanbases kept showing up. Sunderland's loyalty has been tested more severely.",
 
    LE:"Both are clubs where the fanbase has experienced the specific joy of getting something they'd been waiting for. Leicester got the Premier League title. Sunderland got their return to the Premier League after years in the lower divisions. Both moments were earned. Leicester's was more globally celebrated. Sunderland's was more deeply personal.",
 
    NF:"Both are clubs with golden eras that their fanbases carry as permanent proof of what the club can be. Forest's is European cups under Clough. Sunderland's is the First Division titles from the early 20th century and moments like the 1973 FA Cup Final. Both fanbases know the club was genuinely great once.",
 
    BR:"Both are clubs where community and the specific identity of the place is central to what the club means. Brentford is explicitly community-owned. Sunderland's community kept the club going through League One and back. Both are examples of supporters defining the club rather than the club defining the supporters.",
 
    BH:"Both are clubs whose fanbases are genuine rather than performative. Brighton's authenticity is newer and more analytically engaged. Sunderland's is older and more severely tested. Brighton fans understand what the club is trying to do. Sunderland fans just keep showing up because it's their club and that's what you do.",
 
    WO:"Both are clubs that get on with it without needing external validation. Wolves do it quietly in the Midlands. Sunderland do it with a quiet northern stoicism on Wearside. Both have fanbases that absorb difficulty without excessive performance. Sunderland's version has required more endurance.",
 
    FU:"Both are clubs where the identity is held independently of results. Fulham's identity is comfortable and specific to Craven Cottage. Sunderland's identity survived League One. Fulham's knowledge is lighter. Sunderland's was forged through something more difficult.",
 
    BO:"Both are clubs that have experienced prolonged difficulty before better times. Bournemouth went through administration. Sunderland went to League One. Both fanbases held on through periods that tested loyalty. Both are now competing at a higher level. Bournemouth's improvement has been more dramatic.",
 
    IT:"Both are clubs defined by community loyalty through difficult periods. Ipswich have had long periods outside the top flight. Sunderland went further, all the way to League One. Both kept their identity regardless of division.",
 
    CH:"Both are clubs where the fanbase's identity has been complicated by institutional decisions. Chelsea's was shaped by billionaire ownership that transformed the club. Sunderland's was shaped by ownership that took the club to League One. Sunderland's test was more basic and more prolonged.",
 
    AV:"Both are clubs where the community loyalty is unconditional but the institutional history is complicated. Villa's complications were briefer and the recovery more dramatic. Sunderland's difficulty was more prolonged. Villa's belief is currently being rewarded more visibly.",
  },
  LU:{
    HU:"Both of you are rooted and road-worn, fanbases that have been down the divisions and back. You live every high and low at full volume, the drama half the identity. Hull held its line more quietly, fighting to keep its name without making theatre of it. Both of you are unmistakably yourselves. You perform it. Hull just refused to be anything else.",
    LI:"Both are maximum-intensity clubs with huge fanbases and complete emotional commitment. Liverpool's identity is more mythological and the history is cleaner. Leeds' is more chaotic and contradictory. If you want the clean collective myth, Liverpool. If you want the full complicated operatic version, Leeds.",
    SU:"Both are intensely passionate northern fanbases that have been through institutional pain and still show up. The difference is Leeds carry it at higher volume and with more edge: Elland Road is confrontational, the identity is combative. Sunderland's loyalty is quieter, more resigned, more about endurance than assertion.",
    EV:"Both are clubs where suffering is real and loyalty is unconditional. Everton's is quieter. Leeds' is louder and comes with more chaos and more recent trauma. If you stew privately, Everton. If you process it loudly, Leeds.",
 
    MC:"Both are clubs whose recent history includes a dramatic transformation. City's transformation brought sustained dominance. Leeds' brought a dramatic fall and a long rebuilding. City fans expect the top. Leeds fans believe they belong there and are frustrated by not being there.",
 
    AR:"Both are clubs with a strong sense of their own identity and a fanbase that holds the institution to it. Arsenal's identity is principled and aesthetic. Leeds' is confrontational and historically rooted in Revie, Bremner, and a specific northern English combativeness about what the club means. Both will tell you loudly who they are.",
 
    NC:"Both are northern clubs with massive fanbases and a sense that they should be competing at the top. Newcastle's sense is place-rooted and community-first. Leeds' is more historically loaded and more combative. Both have fanbases that feel the club is bigger than its current position. Both are probably right.",
 
    WH:"Both are clubs with working-class roots and a fanbase that carries those roots as identity. West Ham's are East End and historical. Leeds' are West Yorkshire and more confrontational. Both resist the drift toward corporate football identity. Both have fanbases that would tell you they are more real than most other supporters. Both mean it.",
 
    CP:"Both have atmospheres more intense than the club's position might suggest. Palace's Holmesdale is the most organised fan culture in the Premier League. Elland Road is historically one of the most intimidating grounds in England. Both fanbases have created something the institution didn't give them.",
 
    MU:"Both are northern clubs with big fanbases and complicated histories. United's history is more successful but Leeds' is arguably more operatic, the Revie era, the fall, the Championship years. Both have fanbases that believe the club belongs at the top. United's belief is backed by recent evidence. Leeds' is backed by older history and sheer conviction.",
 
    SP:"Both are clubs where suffering and hope coexist in an ongoing unresolved relationship. Spurs do it with self-aware dark humour. Leeds do it with confrontational intensity. Both have been close to things without consistently getting them. Both keep believing. The emotional register around that belief is very different.",
 
    LE:"Both are clubs with significant moments in their history that define how the fanbase relates to the possible. Leicester's is 2016. Leeds' is the Revie era and the European nights. Both have reference points for genuine greatness. Leicester's is more recent. Leeds' is older but equally defining for those who lived it.",
 
    NF:"Both are clubs where a specific era defines the fanbase's relationship with the possible. Forest's is Clough and two European Cups. Leeds' is Revie and a team feared across Europe. Both prove that smaller English clubs can be genuinely great. Both fanbases carry that knowledge and measure subsequent managers accordingly.",
 
    BR:"Both are clubs with fanbases that feel the identity of the club as something worth protecting. Brentford's identity is communal and analytically grounded. Leeds' is combative and historically loaded. Both are serious about what the club means. Leeds fans assert it loudly. Brentford fans live it quietly.",
 
    BH:"Both are clubs with strong identities but very different emotional registers. Brighton's identity is forward-looking and model-driven. Leeds' is historically rooted and confrontational. Brighton fans appreciate the process. Leeds fans carry the weight of what the club used to be and still believe it can be.",
 
    WO:"Both are clubs that know who they are without external validation. Wolves do it quietly in the Midlands. Leeds do it loudly in West Yorkshire. Both know who they are. Both feel their club belongs higher than it sometimes is. Wolves' version of that feeling is quieter. Leeds' version is significantly louder.",
 
    FU:"Both are clubs with genuine histories and fanbases that carry those histories. Fulham's history is gentle and specific to Craven Cottage. Leeds' is operatic and nationally loaded. Fulham's understanding is lighter. Leeds' is heavier and more confrontational.",
 
    BO:"Both are clubs whose fanbases are genuine rather than performative. Bournemouth's passion is newer and lighter. Leeds' is older and carries more weight. Bournemouth fans are grateful for what they have. Leeds fans believe they deserve more than they currently have and are vocal about it.",
 
    IT:"Both are clubs with proud histories and fanbases that carry those histories with genuine commitment. Ipswich's history is quieter and county-specific. Leeds' is louder and nationally loaded. Leeds fans tend to believe it confrontationally. Ipswich fans tend to believe it quietly.",
 
    CH:"Both are clubs with significant historical identities navigating complicated recent periods. Chelsea's complications involve post-billionaire confusion. Leeds' involve a dramatic fall from the top and a prolonged attempt to return. Chelsea fans currently navigate which version of the club they belong to. Leeds fans have always known.",
 
    CV:"Both are clubs with proud histories and fanbases that have kept the identity alive through genuinely difficult periods. Coventry's difficulty was structural and prolonged. Leeds' involved Championship years and ownership chaos. Both held on. Both believe the club should be bigger than its circumstances. Leeds fans tend to be louder about that belief.",
  },
  CH:{
    HU:"Both of you remember what it felt like when it mattered. You remember winning, the trophies and nights that defined a generation. Hull remembers a fight, the years its fanbase spent refusing to let an owner rebrand the club out of existence. Both of you hold onto something the club used to be. You miss the winning. Hull kept the thing worth keeping.",
    MU:"Both are historically great clubs navigating decline from very recent peaks. United's identity is more rooted in legacy and status. Chelsea's is more layered, the glamour of the neighbourhood, the Abramovich transformation, the specific grief of having it taken by geopolitics.",
    AR:"Both are London clubs with prestige and a fanbase that holds its identity carefully. Arsenal's identity is principled and aesthetic. Chelsea's is more worldly, shaped by money and transformation and grief in ways Arsenal's hasn't been.",
    WH:"Both are west London clubs with complicated relationships with their own identity. West Ham's complication is the stadium move. Chelsea's is the Abramovich era and what came after. The difference is mythology: West Ham have Upton Park. Chelsea have the King's Road and 19 trophies.",
 
    LI:"Both are historically great clubs with European pedigree and passionate fanbases. Liverpool's identity is rooted in community and mythology. Chelsea's is rooted in a specific West London identity that predates the money and has been somewhat buried by it. Liverpool fans carry the past as fuel. Chelsea fans are navigating which version of the club they belong to.",
 
    MC:"Both won titles through significant investment and systematic excellence. City's excellence has been more sustained and more dominant. Chelsea's was more chaotic and less consistent. City fans now expect to win things. Chelsea fans have more complicated feelings about what their recent dominance means.",
 
    EV:"Both carry former glory and current frustration. Everton's frustration is longer and deeper. Chelsea's is more recent and more confusing, they spent enormous amounts and the results were inconsistent. Both fanbases understand what it means to expect more than they're getting. The emotional quality of the frustration is different.",
 
    NC:"Both have fanbases that feel the club belongs at the top of the game. Newcastle's belief is rooted in place and community. Chelsea's is rooted in recent dominance and historical west London identity. Both currently feel the gap between where they are and where they should be. Newcastle's frustration is older and more communal. Chelsea's is more recent and more confused.",
 
    CP:"Both are London clubs with specific community identities. Palace's identity is south London, locally concentrated, and fiercely maintained. Chelsea's is west London, historically rooted, but complicated by decades of external money and ownership. Both have real communities behind the badge. Palace's has been better preserved.",
 
    SP:"Both are London clubs with history and expectation. Spurs' expectation is rooted in proximity to greatness they haven't quite reached. Chelsea's is rooted in recent dominance that is now fading. Both currently feel a gap between what they should be and what they are. Spurs fans have always felt it. Chelsea fans are newer to it.",
 
    LE:"Both have won the title in circumstances that felt surprising to the wider world. Chelsea's titles were driven by spending. Leicester's was driven by something genuinely miraculous. Both fanbases have a moment they can point to. Chelsea fans have multiple moments. Leicester fans have one that will never be fully explained.",
 
    NF:"Both have European Cup wins that define the club's identity. Forest's were more improbable and more mythological. Chelsea's were more recent and more resource-intensive. Both know what it means to have been genuinely great in Europe. The character of how they got there is very different.",
 
    BR:"Both are London clubs. The contrast in how each relates to their community and to money is about as stark as football offers. Brentford is community-owned, data-led, rooted in a neighbourhood. Chelsea has been shaped by external billionaire ownership. Both have supporters who care. What they're supporting is entirely different.",
 
    BH:"Both think carefully about football. Brighton thinks analytically and builds a model. Chelsea spends and iterates. Both have had periods of genuine quality. Brighton's satisfaction comes from the method. Chelsea's comes from the results. Currently Brighton's method feels more coherent than Chelsea's approach.",
 
    WO:"Both are clubs with quality and expectation but very different identities. Wolves are quiet, methodical, Midlands-rooted. Chelsea are loud, resourced, and currently finding themselves. Both have good footballers. Wolves know what they are. Chelsea are working out what they are post-Abramovich.",
 
    FU:"Both are west London clubs with very different relationships to money and identity. Fulham are content with what they are. Chelsea have built an identity around ambition and spending that is currently feeling unmoored. Both have real history. Fulham's identity is clearer and more consistently held.",
 
    BO:"Both have won things and know what success feels like. Chelsea's success was bought and dominant. Bournemouth's is smaller and more genuine. Chelsea fans expect more success. Bournemouth fans appreciate what they have. The relationship each fanbase has to success is formed by completely different experiences of it.",
 
    SU:"Both are clubs where the fanbase's loyalty has been tested. Sunderland's test was institutional and prolonged. Chelsea's test is more existential, who are we without the billionaire? Both fanbases are navigating what the club means. Sunderland fans know exactly. Chelsea fans are working it out.",
 
    LU:"Both are clubs with big fanbases and complicated recent histories. Leeds' complications are rooted in a dramatic fall from the top. Chelsea's are rooted in money-fuelled success that is now gone. Both have fans who remember better times. Leeds fans carry it as identity. Chelsea fans carry it as expectation.",
 
    IT:"Both are clubs where belonging to the institution means something specific. Ipswich's meaning is local, community-rooted, and tied to the Bobby Robson era. Chelsea's meaning is more fragmented, different eras mean different things to different fans. Ipswich fans know exactly what the club means to them. Chelsea fans have more to navigate.",
 
    CV:"Both are clubs where the fanbase's identity has been complicated by decisions made above them. Coventry lost their ground. Chelsea lost their owner and the certainty that came with him. Both fanbases are navigating what the club is without the defining thing that shaped it. Coventry fans held on through it. Chelsea fans are still finding out if they will.",
  },
  IT:{
    HU:"Both of you choose belonging to something real over something famous, and neither feels small about it. You settled into that peacefully, a Suffolk identity at ease with itself. Hull arrived at the same place through a fight, when an owner tried to trade the name away for a bigger market. Both communities are rooted and unbothered by scale. Yours was never threatened. Hull's was, and it held.",
    FU:"Both are clubs that know exactly what they are and find it genuinely enough. Fulham has the character of place, Craven Cottage, the Thames, the understated history. Ipswich has the community roots in Suffolk and the Bobby Robson mythology.",
    BO:"Both are modest clubs genuinely happy to be in the Premier League and undefensive about not being Arsenal. Ipswich has the deeper historical roots and the Robson mythology. Bournemouth is simpler, smaller, and lighter about it.",
    NC:"Both are clubs where community is the whole point. Newcastle's community is louder and larger. Ipswich's is more specific, Suffolk, Portman Road, a market town that happens to have a football club.",
 
    LI:"Both have specific communities at the heart of what the club means. Liverpool's community is global and mythological. Ipswich's is a county, Suffolk, specific, agricultural, quietly proud. Both matter to people for reasons beyond football. Liverpool's matters globally. Ipswich's matters locally and all the more specifically for that.",
 
    MC:"Both are clubs that achieved extraordinary things at their level. City achieved sustained domestic dominance. Ipswich achieved a UEFA Cup with a county town club under Bobby Robson. Both fanbases have a period they point to. City fans live in it continuously. Ipswich fans hold it as something improbable that actually happened.",
 
    AR:"Both find value in doing things properly. Arsenal's version is philosophical and aesthetic. Ipswich's is quieter and more community-rooted, the Bobby Robson era, the specific Suffolk pride. Both believe in the right way. Arsenal argues about it. Ipswich just remembers it.",
 
    EV:"Both are clubs where the local community identity is the most genuine thing about the institution. Everton's is Merseyside, in the shadow of Liverpool. Ipswich's is Suffolk, distinct and quietly proud. Both have fanbases that hold the club as something that belongs to their place more than to any owner.",
 
    WH:"Both are clubs with specific working-class or community identities that matter independently of results. West Ham's identity is East End, historical, and explicitly defended. Ipswich's is Suffolk, quieter, and rooted in a specific era under Bobby Robson that gave the fanbase something to hold onto permanently.",
 
    CP:"Both are clubs where belonging to the local community matters more than national profile. Palace's belonging is south London intensity. Ipswich's is Suffolk quietness. Both are real. Both would trade national profile for authenticity without hesitation.",
 
    MU:"Both have fanbases with a clear sense of what the club means to them. United's sense is rooted in historical greatness and global reach. Ipswich's is rooted in a county, a community, and a specific era under Bobby Robson. Both care deeply. What they're caring about is from entirely different ends of football's scale.",
 
    SP:"Both have fanbases where hope plays a consistent role. Spurs' hope is about trophies that never quite arrive. Ipswich's hope is about belonging to the top flight and remaining competitive. Both keep believing. Spurs fans do it with increasing self-awareness. Ipswich fans do it with a quiet optimism rooted in a community that genuinely loves the club.",
 
    LE:"Both are clubs that achieved something bigger than their profile suggested possible. Leicester won the title against all odds. Ipswich won the UEFA Cup under Bobby Robson with a team that cost almost nothing. Both fanbases have a moment. Leicester's is more recent. Ipswich's is older and perhaps more surprising in context.",
 
    NF:"Both are clubs with improbable golden eras that their fanbases carry permanently. Forest won two European Cups. Ipswich won a UEFA Cup under Bobby Robson. Both prove that the impossible happens in English football to clubs that are properly run and properly believed in.",
 
    BR:"Both are clubs where doing things properly without spending big is a point of pride. Brentford formalised this through data and community ownership. Ipswich's version is older and rooted in the Bobby Robson era. Both arrived in the Premier League as themselves. Both belong.",
 
    BH:"Both are clubs that earned their Premier League place through intelligence and organisation rather than spending. Brighton's model is nationally recognised. Ipswich's is quieter and more historically rooted. Both are genuine. Brighton's approach is more explicitly modern. Ipswich's is more traditionally community-based.",
 
    WO:"Both are clubs that get on with it without needing external validation. Wolves do it with Midlands grit. Ipswich do it with Suffolk quiet. Both are completely undefensive about their scale. Neither needs to be bigger than they are to feel the identity is worth having.",
 
    AV:"Both are clubs where the community pride is genuine and the football matters beyond results. Villa's pride is bigger, grander, and currently being matched by genuine ambition. Ipswich's is quieter and more internally held. The scale of ambition and resources currently differs significantly.",
 
    SU:"Both are clubs defined by community loyalty through difficult periods. Sunderland's difficulty was more severe and more recent. Ipswich have had long periods outside the top flight. Both kept their identity regardless of league position. Both know that the club means something specific to a specific community regardless of what division it's in.",
 
    LU:"Both have proud histories and fanbases that carry those histories with genuine commitment. Leeds' history involves European nights and a combative national identity. Ipswich's involves an FA Cup and a UEFA Cup under Bobby Robson. Both fanbases believe in what the club was and what it could be. Leeds is louder about it.",
 
    CH:"Both have won things in European competition. Chelsea's European record is more recent and more resourced. Ipswich's is older and more improbable. Both have fanbases with good memories to draw on. Chelsea fans have many recent ones. Ipswich fans have fewer but perhaps more personally meaningful ones.",
 
    CV:"Both are clubs where the local community is the whole point and always has been. Coventry is a city that kept its football club through extraordinary institutional difficulty. Ipswich is a county town that once competed in Europe and holds that memory with quiet pride. Both are examples of football genuinely belonging to its place.",
  },
  CV:{
    HU:"Both of you kept faith through a club that kept finding ways to test it. Yours was exile, years spent playing miles from the city on the badge before you got home. Hull's was the name itself, an owner who decided the word City was bad for business. Neither of you let go of the thing that made the club yours. You got your ground back. Hull kept its name.",
    WH:"Both are clubs where institutional decisions made above the fanbase left genuine scars. West Ham's wound is the Upton Park move. Coventry's is the ground saga. Both involve a fanbase that kept showing up despite having every reason not to.",
    EV:"Both are defined by loyalty that required no reward to persist. Everton's is quiet and absorbed. Coventry's has been tested more directly by institutional failure, they didn't just wait, they kept showing up for a club that seemed to be actively dismantling what belonging meant.",
    SU:"Both are clubs defined by survival and comeback. Sunderland's fall was more dramatic. Coventry's was different, the club was there, but the home wasn't. Both are genuinely about loyalty in extremis.",
 
    LI:"Both have fanbases where the identity is held passionately regardless of circumstances. Liverpool's passion is loud, mythological, and backed by sustained success. Coventry's is quieter, more resigned, and backed by a loyalty that survived years without a proper home ground. Both are genuine. The emotional register is completely different.",
 
    MC:"Both are clubs that experienced prolonged periods without the thing they most wanted. City spent decades below Arsenal and United. Coventry spent years without a home ground. Both fanbases held on. City's wait ended with extraordinary dominance. Coventry's ended with a return to the CBS Arena.",
 
    AR:"Both have fanbases that believe the club deserves better than it currently has. Arsenal's belief is rooted in philosophical conviction. Coventry's is rooted in a simpler loyalty, this is our club, it should have a proper home, it should be competing. Both are frustrated. Arsenal's frustration is about standard. Coventry's is about survival.",
 
    NC:"Both are clubs where the community's relationship to the institution has been tested by decisions made above the fanbase. Newcastle's community was sold to sportswashing ownership. Coventry's lost their home ground. Both fanbases kept showing up. The nature of the betrayal was different but the loyalty was the same.",
 
    MU:"Both are clubs where the gap between what the fanbase deserves and what the institution provides has been considerable. United's gap is about recent decline after extraordinary success. Coventry's gap is about years of structural neglect. Both fanbases held on. The scale and character of the expectation is entirely different.",
 
    SP:"Both have fanbases defined by hope in the face of persistent near-misses or difficulty. Spurs' hope is about trophies that keep not arriving. Coventry's is about stability and a proper home that kept not arriving. Both kept believing. Spurs fans do it with dark humour. Coventry fans do it with quiet stubborn loyalty.",
 
    LE:"Both are Midlands-adjacent clubs with improbable recent histories. Leicester's improbability was a title won against all odds. Coventry's was surviving prolonged structural chaos. Both proved something about what fanbases can hold onto. Leicester proved miracles happen. Coventry proved loyalty outlasts almost anything.",
 
    NF:"Both are clubs where the fanbase's stubbornness kept the club going through difficult periods. Forest's difficulty was a long fall from the heights of the Clough era. Coventry's was structural and physical, years without a real home. Both fanbases held on to something they believed was worth preserving.",
 
    BR:"Both are clubs where the community relationship is central to what the club means. Brentford is community-owned. Coventry's fanbase fought for years to bring the club home. Both are examples of what supporters do when they decide the club belongs to them rather than to whoever owns it.",
 
    BH:"Both are clubs that have had to be patient for things to improve. Brighton's patience was rewarded with an intelligent model and Premier League stability. Coventry's patience was rewarded with a return to the CBS Arena. Both fanbases understand what it means to wait for something and still care enough to keep waiting.",
 
    FU:"Both are clubs where contentment with identity has been a survival mechanism as much as a choice. Fulham's contentment is comfortable and long-standing. Coventry's was forged through necessity, when you don't have a home ground, you learn to carry the identity without the place. Both know who they are. Coventry's knowledge was hard-won.",
 
    BO:"Both are clubs that have been through periods where existence itself was the achievement. Bournemouth went through administration before their rise. Coventry lost their home ground. Both fanbases kept the club alive through difficult times. Both are now in better positions. Bournemouth's improvement has been more dramatic.",
 
    AV:"Both are Midlands clubs with loyal fanbases navigating complicated recent histories. Villa's recent history has dramatically improved. Coventry's improvement is more modest. Both have fans that believe in the club beyond what the results justify. Villa's belief is currently being rewarded. Coventry's patience is ongoing.",
 
    LU:"Both are clubs with proud histories and fanbases that carry that history despite long periods without commensurate success. Leeds' history involves European nights and Don Revie. Coventry's involves an FA Cup and Jimmy Hill's transformation of the club. Both know what they used to be and believe in what they still are.",
 
    IT:"Both are clubs where the local community is the whole point. Ipswich's community is Suffolk, specific, agricultural, distinct. Coventry's is a city that has kept its football club at the centre of its identity through industrial change. Both are examples of football genuinely belonging to its place.",
 
    CH:"Both are clubs where the fanbase's identity has been tested by decisions made above them. Chelsea's was shaped by billionaire ownership that is now gone. Coventry's was shaped by years without a proper home ground. Both fanbases navigated something that tested what the club means. Coventry's test was more basic and more prolonged.",
  },
  HU:{
    IT:"Both of you choose belonging to something real over something famous, and neither of you feels small about it. Ipswich arrived there peacefully, a Suffolk identity at ease with itself. You arrived through a fight, when an owner tried to trade your name away for a bigger market. Both communities are rooted and unbothered by scale. Ipswich's was never threatened. Yours was, and it held.",
    CV:"Both of you kept faith through a club that kept finding new ways to test it. Coventry's test was exile, years spent playing miles from the city on the badge. Yours was the name itself, an owner who decided the word City was bad for business. Neither of you let go of the thing that made the club yours. Coventry got its ground back. You kept your name.",
    SU:"Both of you stayed through the kind of collapse that empties other grounds. Sunderland stayed out of heartbreak, filling 46,000 seats in the third tier because leaving was never a real thought. You stayed out of stubbornness, refusing to be rebranded out of your own identity. Both loyalties were proven in the bad years rather than the good ones. Sunderland's is grief. Yours is defiance.",
    NC:"Both of you want to belong to something real instead of something global, the local over the marketable. Newcastle never had to defend that, the city and the club inseparable for generations. You did, against an owner who wanted the name to travel further than the place it came from. Both of you won the argument. Newcastle by simply being. You by fighting.",
    WH:"Both of you love a club you have also had to fight, carrying the love and the grievance at once. West Ham's fight was the move from Upton Park, the feeling of being made bigger and less itself at the same time. Yours was the rebrand, an owner trying to swap the name for a brand. Both of you stayed and fought rather than walked. West Ham lost its ground. You kept your name.",
    EV:"For both of you, loyalty is the thing you prove when the club gives you the least, not the most. Everton's test came on the pitch, decades of waiting without once thinking of leaving. Yours came in the boardroom, an owner deciding the name was holding the club back. Both of you treat staying as the whole statement. Everton stayed through the football. You stayed through the rebrand.",
    CP:"You are the two most rooted clubs in the league, both certain that the place is the point. Palace built that identity from nothing, manufacturing an atmosphere at a club with no trophies to lean on. You defended one you inherited, going to war to keep the name an owner wanted to sell. Both of you refused to let the club turn generic. Palace made its roots. You guarded yours.",
    LE:"Both of you have lived proof that the impossible actually happens, and it changed how you see what is possible. Leicester's proof was a 5000-to-1 title nobody had any right to win. Yours was smaller and stranger, a fanbase that beat its own owner to keep the name on the badge. Both of you know the long shot can land. Leicester won a trophy. You won an argument that mattered more.",
    NF:"Both of you are drawn to the stories that had no business happening. Forest's was two European Cups won from outside the top flight, the most improbable rise in the English game. Yours was quieter, a supporters' campaign overturning an owner's rebrand to keep a name dating to 1904. Both of you trust the improbable. Forest conquered Europe. You kept yourselves.",
    LU:"Both of you are rooted and road-worn, fanbases that have been down the divisions and back. Leeds lives every high and low at full volume, the drama half the identity. You held your line more quietly, fighting to keep your name without ever making theatre of it. Both of you are unmistakably yourselves. Leeds performs it. You simply refused to be anything else.",
    LI:"Both of you live inside the club rather than watch it from a distance, the belonging total. Liverpool's is mythology at full volume, European nights and a global Kop. Yours is narrower and more defensive, a belonging you once had to physically protect when an owner came for the name. Both of you feel it completely. Liverpool expects to win. You expect to last.",
    MU:"Both of you guard an identity, but you guard very different things. United guards a winning past, the memory of dominance it cannot quite recreate. You guarded a name, the plain fact of being Hull City, when an owner tried to trade it for a global brand. Both of you refuse a lesser version of the club. United wants its old self back. You kept yours.",
    MC:"You are close to opposites. The Blue Moon is the engineered global project, success built deliberately and sold to the world. You are the club offered exactly that path, an owner promising a bigger market for a smaller name, and you turned it down flat. Both of you know what global ambition looks like. City chased it. You refused it.",
    AR:"Both of you stand on principle, the sense that there is a right way and you will not abandon it. Arsenal's principle is the method, doing it properly even when the result disagrees. Yours is identity, staying who you are even when an owner says it costs you money. Both would rather be right than convenient. Arsenal defends its style. You defended your name.",
    CH:"Both of you remember what it felt like when it mattered, and you carry that forward. Chelsea remembers winning, the trophies and the nights that defined a generation. You remember a fight, the years your fanbase spent refusing to let an owner rebrand the club out of existence. Both of you hold onto something the club used to be. Chelsea misses the winning. You kept the thing worth keeping.",
    SP:"Both of you hold belief and clear eyes at the same time, fully invested and fully self-aware. Spurs laughs at its own near-misses, self-deprecation as a survival skill. You refused to be laughed at, defending your name without flinching when an owner treated it as a punchline. Both of you know exactly who you are. Spurs jokes about it. You went to war over it.",
    AV:"Both of you respect where you came from, the history and the place that made the club. Villa carries its past without being trapped by it, the old glory feeding the hunger rather than replacing it. You were ready to go to the wall for yours, refusing to let an owner sell the name off for reach. Both of you honour the roots. Villa builds on them. You defended them.",
    BH:"Both of you have punched above your size, but by completely opposite methods. Brighton did it with a clever plan, an analytics model that turned a small club into a smart one. You did it with a flat refusal to be moved, beating an owner's rebrand through sheer collective stubbornness. Both of you proved size is not the whole story. Brighton outthought the room. You out-stubborned it.",
    BR:"Both of you reached this level from outside the obvious path, by routes that could not differ more. Brentford outsmarted the system, building an edge from data nobody else trusted. You dug in and refused to be moved, keeping a name an owner had already decided to sell. Same league, opposite method. Brentford was the cleverest team in the room. You were the most immovable.",
    WO:"You share the amber and the quiet pride in your own corner of England. Wolves never had to shout about it, Wolverhampton's certainty in itself never seriously questioned. You did have to shout, fighting to keep the City an owner tried to delete from your name. Both of you are proud of a place outside the spotlight. Wolves assumes it. You defended it.",
    FU:"Both of you have made peace with not being famous, content to be exactly the size you are. Fulham's peace came easily, the gentle confidence of a club that never needed to argue about itself. Yours came after a war, an owner insisting you would be worth more as something else, and a fanbase that disagreed and won. Both of you are comfortable being yourselves. Fulham always was. You earned it.",
    BO:"Both of you are genuinely glad to be exactly where you are, with no performance about it. Bournemouth's gladness is sunshine, the easy joy of a small south-coast club that keeps surprising itself. Yours is harder won, a club you once had to defend from an owner who wanted to rename it. Both of you are content in your own skin. Bournemouth's came free. Yours you had to fight for.",
  },
};

// ─── SCORING MATRIX ───────────────────────────────────────────────────────────
// Every club should accumulate ~38-42 points across a "perfect" answer set
// Weights: 3 = primary signal, 2 = secondary, 1 = mild lean

const scoring = {
  "q1": {
    "A": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 3,
      "MU": 1,
      "SU": 2,
      "LU": 3,
      "HU": 2
    },
    "B": {
      "MC": 3,
      "WO": 2,
      "BR": 2,
      "EV": 1,
      "IT": 2
    },
    "C": {
      "WH": 3,
      "NF": 2,
      "CP": 2,
      "BO": 1,
      "SP": 1,
      "LU": 1,
      "CV": 1
    },
    "D": {
      "MC": 2,
      "BR": 3,
      "BH": 2,
      "WO": 1
    },
    "E": {
      "BO": 3,
      "FU": 2,
      "BH": 1,
      "LE": 1,
      "AV": 1,
      "CH": 2,
      "IT": 1,
      "CV": 2
    }
  },
  "q2": {
    "left": {
      "MC": 3,
      "LI": 2,
      "MU": 3,
      "AR": 2,
      "NC": 2,
      "EV": 1,
      "AV": 2,
      "LU": 2,
      "SU": 1
    },
    "right": {
      "EV": 3,
      "SP": 3,
      "NF": 2,
      "FU": 2,
      "BO": 2,
      "LE": 2,
      "CV": 2,
      "IT": 2,
      "CH": 1
    }
  },
  "q3": {
    "A": {
      "MC": 2,
      "WO": 3,
      "BR": 2,
      "BH": 1
    },
    "B": {
      "AR": 3,
      "BH": 2,
      "FU": 3,
      "BR": 1,
      "IT": 2,
      "HU": 2
    },
    "C": {
      "EV": 2,
      "SP": 3,
      "MU": 2,
      "NF": 1
    },
    "D": {
      "MC": 2,
      "BO": 3,
      "LE": 2,
      "CP": 1,
      "AV": 2,
      "CH": 2,
      "BH": 2
    },
    "E": {
      "LI": 2,
      "EV": 3,
      "NC": 2,
      "WH": 1,
      "LU": 2,
      "SU": 2
    }
  },
  "q4": {
    "1": {
      "MC": 3,
      "AR": 2,
      "WO": 2,
      "BR": 1
    },
    "2": {
      "MC": 2,
      "AR": 2,
      "BH": 2,
      "WO": 1
    },
    "3": {
      "AV": 3,
      "FU": 2,
      "BO": 3,
      "BH": 1,
      "CP": 1
    },
    "4": {
      "LI": 2,
      "NC": 2,
      "WH": 2,
      "NF": 1,
      "AV": 2,
      "SP": 1,
      "CV": 1
    },
    "5": {
      "NF": 3,
      "WH": 2,
      "LE": 3,
      "CP": 2,
      "LU": 2,
      "CH": 2,
      "CV": 1
    }
  },
  "q5": {
    "A": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 4,
      "SU": 2,
      "LU": 2
    },
    "B": {
      "EV": 2,
      "NF": 2,
      "WO": 2,
      "FU": 1,
      "SP": 1,
      "IT": 2,
      "CV": 2,
      "HU": 2
    },
    "C": {
      "BR": 3,
      "WO": 3,
      "MC": 1
    },
    "D": {
      "MC": 3,
      "BR": 2,
      "AR": 1,
      "AV": 1
    },
    "E": {
      "BO": 3,
      "BH": 2,
      "FU": 2,
      "LE": 2,
      "AV": 1,
      "CH": 2
    }
  },
  "q6": {
    "left": {
      "LI": 3,
      "NC": 3,
      "MU": 2,
      "WH": 2,
      "CP": 2,
      "SP": 1,
      "AV": 2,
      "SU": 2,
      "LU": 2,
      "CV": 1
    },
    "right": {
      "MC": 2,
      "BR": 3,
      "AR": 2,
      "BH": 2,
      "WO": 1,
      "CH": 2,
      "IT": 2
    }
  },
  "q7": {
    "A": {
      "MC": 2,
      "LI": 2,
      "MU": 2,
      "NC": 1,
      "CP": 2,
      "SP": 1,
      "AV": 2,
      "CH": 1
    },
    "B": {
      "EV": 3,
      "NF": 3,
      "LI": 2,
      "WH": 1,
      "BO": 1,
      "SU": 2
    },
    "C": {
      "NF": 2,
      "WO": 2,
      "EV": 2,
      "FU": 1,
      "AV": 2,
      "LE": 1,
      "IT": 2
    },
    "D": {
      "BR": 3,
      "BH": 4,
      "MC": 2,
      "AR": 1
    },
    "E": {
      "EV": 2,
      "MU": 2,
      "WO": 2,
      "SP": 1,
      "LU": 2,
      "CV": 2,
      "HU": 3
    }
  },
  "q8": {
    "1": {
      "MU": 2,
      "MC": 2,
      "WO": 3,
      "BR": 1,
      "BH": 1
    },
    "2": {
      "AR": 2,
      "BH": 2,
      "BO": 2,
      "CH": 3
    },
    "3": {
      "FU": 2,
      "AV": 3,
      "LE": 1,
      "CP": 1,
      "SP": 1,
      "IT": 1
    },
    "4": {
      "WH": 2,
      "EV": 2,
      "NF": 2,
      "NC": 1,
      "CV": 2,
      "IT": 2
    },
    "5": {
      "NC": 3,
      "CP": 3,
      "LI": 2,
      "WH": 2,
      "SU": 3,
      "LU": 3,
      "HU": 3
    }
  },
  "q9": {
    "A": {
      "EV": 2,
      "LI": 3,
      "NC": 2,
      "CP": 3,
      "FU": 1,
      "SU": 3,
      "LU": 2,
      "IT": 2,
      "CV": 3,
      "HU": 3
    },
    "B": {
      "EV": 2,
      "MU": 2,
      "SP": 2,
      "NF": 1,
      "WH": 2,
      "AV": 2,
      "CH": 1
    },
    "C": {
      "AR": 2,
      "BH": 2,
      "AV": 3,
      "BR": 1,
      "CH": 2
    },
    "D": {
      "MC": 2,
      "SP": 2,
      "BO": 2,
      "LE": 1
    },
    "E": {
      "LI": 2,
      "NF": 2,
      "BO": 2,
      "LE": 1
    }
  },
  "q10": {
    "left": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 3,
      "MU": 2,
      "EV": 1,
      "AV": 1,
      "BO": 1,
      "HU": 1
    },
    "right": {
      "MC": 2,
      "BR": 3,
      "WO": 3,
      "AR": 2,
      "BH": 1
    }
  },
  "q11": {
    "A": {
      "LI": 3,
      "MU": 2,
      "NF": 2,
      "EV": 1,
      "WH": 2,
      "SU": 2,
      "IT": 2,
      "CV": 2,
      "HU": 2
    },
    "B": {
      "EV": 3,
      "MU": 3,
      "SP": 2,
      "NF": 1,
      "CH": 2
    },
    "C": {
      "MU": 3,
      "EV": 2,
      "LI": 2,
      "NF": 2,
      "CP": 2
    },
    "D": {
      "AR": 2,
      "BH": 2,
      "BR": 2,
      "AV": 1,
      "FU": 2,
      "WO": 1
    },
    "E": {
      "MC": 2,
      "NC": 2,
      "AV": 3,
      "BH": 2,
      "BO": 2,
      "LE": 1
    }
  },
  "q12": {
    "1": {
      "BR": 2,
      "WO": 3,
      "MC": 2,
      "BH": 1
    },
    "2": {
      "AR": 2,
      "WO": 2,
      "FU": 3,
      "IT": 2
    },
    "3": {
      "FU": 2,
      "BH": 2,
      "BO": 2,
      "LE": 1,
      "AV": 2,
      "CH": 2
    },
    "4": {
      "NC": 2,
      "EV": 2,
      "SP": 2,
      "LI": 1,
      "HU": 2
    },
    "5": {
      "LI": 2,
      "NC": 3,
      "WH": 3,
      "CP": 3,
      "SU": 3,
      "LU": 3
    }
  },
  "q13": {
    "A": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "CH": 2
    },
    "B": {
      "AR": 4,
      "BH": 2,
      "AV": 3,
      "FU": 1,
      "IT": 2
    },
    "C": {
      "EV": 3,
      "SP": 3,
      "NF": 2,
      "WH": 2,
      "LE": 2,
      "NC": 2,
      "SU": 2,
      "LU": 2,
      "CV": 2,
      "HU": 2,
      "BO": 2
    },
    "D": {
      "BR": 3,
      "MC": 2,
      "BH": 2,
      "AV": 1
    },
    "E": {
      "MC": 2,
      "LI": 3,
      "MU": 2,
      "CP": 1,
      "AV": 2,
      "CH": 1
    }
  },
  "q14": {
    "left": {
      "NF": 3,
      "BR": 2,
      "LE": 3,
      "BO": 2,
      "FU": 2,
      "BH": 1,
      "SU": 2,
      "LU": 2,
      "IT": 2,
      "CV": 3,
      "HU": 2,
      "SP": 3
    },
    "right": {
      "MC": 2,
      "LI": 2,
      "MU": 3,
      "AR": 1,
      "EV": 1,
      "AV": 2,
      "CH": 2,
      "WH": 1,
      "NC": 1
    }
  },
  "q15": {
    "A": {
      "MC": 3,
      "WO": 2,
      "BR": 2,
      "AR": 1
    },
    "B": {
      "AR": 2,
      "BH": 2,
      "WO": 2,
      "FU": 2,
      "IT": 2
    },
    "C": {
      "AV": 3,
      "NC": 2,
      "FU": 2,
      "BO": 1,
      "SP": 1,
      "LE": 1,
      "SU": 2,
      "CV": 1,
      "HU": 2
    },
    "D": {
      "BR": 3,
      "AR": 2,
      "NF": 2,
      "BH": 1
    },
    "E": {
      "NF": 3,
      "WH": 3,
      "LE": 3,
      "CP": 2,
      "LU": 2,
      "CH": 2
    }
  },
  "q16": {
    "1": {
      "MC": 2,
      "MU": 3,
      "LI": 2,
      "CH": 2
    },
    "2": {
      "LI": 2,
      "AR": 2,
      "MU": 2,
      "EV": 1,
      "CP": 1,
      "AV": 2
    },
    "3": {
      "SP": 3,
      "NC": 2,
      "WH": 2,
      "AV": 1,
      "SU": 2,
      "LU": 2
    },
    "4": {
      "NF": 2,
      "LE": 2,
      "BO": 2,
      "WH": 1,
      "IT": 2,
      "CV": 2,
      "HU": 2
    },
    "5": {
      "BR": 2,
      "WO": 3,
      "BH": 2,
      "LE": 2
    }
  },
  "q17": {
    "A": {
      "NC": 3,
      "CP": 3,
      "EV": 2,
      "MU": 2,
      "SP": 2,
      "LU": 2,
      "CV": 2,
      "SU": 2,
      "AV": 2
    },
    "B": {
      "AR": 3,
      "BR": 3,
      "BH": 2,
      "FU": 1,
      "WO": 2
    },
    "C": {
      "LI": 3,
      "WH": 2,
      "NC": 2,
      "BO": 2,
      "SU": 2,
      "IT": 2,
      "LU": 1,
      "HU": 1
    },
    "D": {
      "LI": 2,
      "MU": 2,
      "EV": 2,
      "NF": 2,
      "SP": 1,
      "AV": 2
    },
    "E": {
      "MC": 3,
      "LI": 2,
      "MU": 1,
      "CH": 3
    }
  },
  "q18": {
    "left": {
      "AR": 3,
      "NF": 3,
      "FU": 3,
      "BO": 2,
      "BH": 2,
      "SP": 2,
      "AV": 2,
      "SU": 2,
      "LU": 2,
      "IT": 2,
      "CV": 3,
      "HU": 2
    },
    "right": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "EV": 2,
      "CP": 1,
      "AV": 2,
      "NC": 1,
      "CH": 2
    }
  },
  "q19": {
    "A": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 3,
      "SU": 2,
      "LU": 2
    },
    "B": {
      "EV": 2,
      "NF": 2,
      "FU": 3,
      "WO": 1,
      "IT": 2,
      "CV": 2,
      "HU": 2,
      "BO": 2
    },
    "C": {
      "BR": 2,
      "WO": 2,
      "AR": 2,
      "BH": 1
    },
    "D": {
      "MC": 2,
      "AR": 2,
      "BH": 2,
      "AV": 2,
      "CH": 1
    },
    "E": {
      "SP": 3,
      "EV": 3,
      "MU": 2,
      "NF": 1,
      "LE": 1
    }
  },
  "q20": {
    "1": {
      "EV": 3,
      "CP": 3,
      "WH": 2,
      "MU": 1,
      "CV": 2,
      "HU": 2
    },
    "2": {
      "WH": 2,
      "LI": 2,
      "NC": 2
    },
    "3": {
      "AR": 2,
      "AV": 3,
      "BH": 2,
      "FU": 1,
      "IT": 2
    },
    "4": {
      "BR": 2,
      "MC": 2,
      "WO": 2,
      "AR": 1
    },
    "5": {
      "MC": 2,
      "BR": 3,
      "BH": 2,
      "WO": 1,
      "CH": 2
    }
  },
  "q21": {
    "A": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 3,
      "SU": 2,
      "LU": 2
    },
    "B": {
      "EV": 3,
      "NF": 3,
      "MU": 2,
      "SU": 1,
      "CV": 2
    },
    "C": {
      "SP": 3,
      "MU": 3,
      "EV": 2,
      "HU": 2
    },
    "D": {
      "LE": 3,
      "AV": 3,
      "BH": 2,
      "BO": 2,
      "CH": 1
    },
    "E": {
      "MC": 2,
      "BR": 2,
      "WO": 2,
      "IT": 1
    }
  },
  "q22": {
    "left": {
      "EV": 3,
      "WO": 3,
      "BR": 2,
      "AR": 2,
      "FU": 1,
      "IT": 2,
      "CH": 2
    },
    "right": {
      "SP": 3,
      "WH": 3,
      "NF": 2,
      "LI": 1,
      "CP": 2,
      "BO": 1,
      "LE": 1,
      "AV": 1,
      "SU": 4,
      "LU": 3,
      "CV": 2,
      "HU": 1
    }
  },
  "q23": {
    "A": {
      "BR": 3,
      "AR": 2,
      "MC": 2,
      "BH": 1,
      "WO": 2
    },
    "B": {
      "SP": 3,
      "EV": 3,
      "NF": 2
    },
    "C": {
      "LI": 3,
      "NC": 2,
      "WH": 2,
      "BO": 2,
      "SU": 2,
      "HU": 1
    },
    "D": {
      "MC": 2,
      "MU": 2,
      "AR": 1
    },
    "E": {
      "LE": 3,
      "NF": 2,
      "AV": 3,
      "SP": 2,
      "FU": 1
    }
  },
  "q24": {
    "1": {
      "BR": 3,
      "MC": 2,
      "BH": 2,
      "WO": 1
    },
    "2": {
      "AR": 2,
      "BH": 2,
      "FU": 2,
      "CH": 2
    },
    "3": {
      "AV": 3,
      "BO": 2,
      "BH": 1,
      "LE": 2,
      "IT": 2,
      "CH": 1
    },
    "4": {
      "SP": 2,
      "LE": 2,
      "NC": 2,
      "LI": 1,
      "SU": 2,
      "LU": 2,
      "CV": 2,
      "HU": 1
    },
    "5": {
      "SP": 3,
      "EV": 3,
      "NF": 2,
      "LI": 2,
      "CV": 1
    }
  },
  "pl_q1": {
    "left": {
      "NF": 3,
      "AR": 3,
      "LI": 2,
      "LE": 2,
      "FU": 2,
      "BO": 1,
      "AV": 2,
      "SU": 2,
      "LU": 2,
      "IT": 2,
      "CV": 2,
      "HU": 2
    },
    "right": {
      "MC": 2,
      "MU": 3,
      "CP": 2,
      "EV": 2,
      "BR": 1,
      "SP": 2,
      "WH": 1,
      "CH": 2
    }
  },
  "pl_q2": {
    "A": {
      "NC": 2,
      "MU": 2,
      "WH": 2,
      "CP": 2,
      "AV": 2,
      "SU": 2,
      "LU": 2,
      "CV": 2,
      "HU": 2
    },
    "B": {
      "WO": 3,
      "BR": 3,
      "BH": 2,
      "FU": 1,
      "IT": 2
    },
    "C": {
      "MC": 2,
      "EV": 2,
      "CP": 2,
      "LI": 1,
      "MU": 2,
      "CH": 2
    },
    "D": {
      "BR": 3,
      "BH": 3,
      "AR": 2,
      "MC": 1
    },
    "E": {
      "BO": 3,
      "FU": 3,
      "BH": 2,
      "LE": 1
    }
  },
  "pl_q3": {
    "1": {
      "FU": 3,
      "BO": 3,
      "BH": 2
    },
    "2": {
      "FU": 2,
      "BO": 2,
      "AR": 2,
      "BH": 1,
      "IT": 2
    },
    "3": {
      "AV": 2,
      "NC": 2,
      "WH": 2,
      "SU": 2,
      "CV": 2,
      "LU": 1,
      "HU": 1
    },
    "4": {
      "LI": 2,
      "MU": 2,
      "EV": 2,
      "SP": 2,
      "AV": 2,
      "LU": 2,
      "CH": 2
    },
    "5": {
      "MC": 3,
      "LI": 2,
      "MU": 3,
      "AR": 1,
      "WO": 2,
      "CH": 2
    }
  },
  "pl_q4": {
    "A": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "AR": 1,
      "AV": 2,
      "CH": 2
    },
    "B": {
      "NC": 3,
      "CP": 4,
      "WH": 2,
      "MU": 2,
      "LE": 1,
      "LU": 2,
      "HU": 2
    },
    "C": {
      "SP": 3,
      "AR": 3,
      "EV": 2,
      "NF": 1,
      "LE": 2,
      "FU": 2,
      "CV": 1
    },
    "D": {
      "LI": 2,
      "EV": 3,
      "NC": 2,
      "WH": 2,
      "SU": 2,
      "CV": 3
    },
    "E": {
      "BR": 3,
      "BH": 3,
      "AR": 2,
      "WO": 1,
      "IT": 2
    }
  },
  "pl_q5": {
    "left": {
      "LE": 3,
      "NF": 3,
      "SP": 3,
      "WH": 2,
      "BO": 2,
      "CP": 1,
      "AV": 1,
      "SU": 2,
      "LU": 2,
      "IT": 2,
      "CV": 2,
      "HU": 2
    },
    "right": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "AR": 2,
      "EV": 1,
      "NC": 2,
      "AV": 2,
      "CH": 2
    }
  },
  "pl_q6": {
    "A": {
      "LI": 3,
      "EV": 2,
      "MU": 2,
      "NF": 1,
      "FU": 2,
      "SU": 2,
      "CH": 2,
      "LU": 1,
      "HU": 1
    },
    "B": {
      "AV": 3,
      "NC": 3,
      "BH": 2,
      "AR": 1,
      "LE": 3,
      "SU": 1
    },
    "C": {
      "SP": 3,
      "EV": 3,
      "NF": 2,
      "WH": 1,
      "CV": 2
    },
    "D": {
      "MC": 3,
      "BR": 3,
      "AR": 1,
      "CH": 1,
      "IT": 1
    },
    "E": {
      "BR": 2,
      "WO": 3,
      "BH": 2,
      "LE": 2,
      "IT": 2
    }
  },
  "pl_q7": {
    "left": {
      "WO": 3,
      "BR": 3,
      "FU": 2,
      "IT": 3,
      "BH": 2,
      "MC": 1,
      "BO": 2
    },
    "right": {
      "NC": 2,
      "LU": 3,
      "SU": 2,
      "MU": 2,
      "CP": 2,
      "AV": 2,
      "LI": 1,
      "CV": 1,
      "CH": 2,
      "HU": 1
    }
  },
  "pl_q8": {
    "A": {
      "CH": 3,
      "MC": 1
    },
    "B": {
      "WH": 3,
      "CV": 3,
      "SU": 3,
      "LU": 2,
      "NC": 1,
      "HU": 3
    },
    "C": {
      "FU": 2,
      "AR": 2,
      "BH": 2,
      "AV": 1
    },
    "D": {
      "AV": 3,
      "BH": 2,
      "BR": 2,
      "IT": 1
    },
    "E": {
      "NF": 2,
      "LE": 3,
      "LI": 2,
      "EV": 2,
      "SP": 1
    }
  },
  "pl_q9": {
    "left": {
      "CP": 3,
      "WH": 3,
      "CV": 3,
      "IT": 3,
      "FU": 2,
      "WO": 2,
      "BR": 2,
      "BO": 2,
      "HU": 3
    },
    "right": {
      "LI": 2,
      "NC": 3,
      "SU": 2,
      "LU": 2,
      "MU": 2,
      "EV": 1,
      "CH": 2
    }
  },
  "pl_q10": {
    "A": {
      "FU": 3,
      "BO": 3,
      "IT": 2,
      "BH": 2
    },
    "B": {
      "MC": 3,
      "MU": 2,
      "LU": 2,
      "CH": 2,
      "AR": 1
    },
    "C": {
      "CV": 4,
      "WH": 2,
      "SU": 2,
      "NF": 1,
      "HU": 3
    },
    "D": {
      "AV": 2,
      "NC": 2,
      "BR": 2,
      "BH": 2
    },
    "E": {
      "AR": 2,
      "SP": 2,
      "LE": 3,
      "EV": 1
    }
  },
  "pl_q11": {
    "left": {
      "BO": 3,
      "FU": 3,
      "CP": 2,
      "IT": 3,
      "WO": 2,
      "BR": 2,
      "BH": 2,
      "HU": 3
    },
    "right": {
      "LI": 3,
      "NF": 3,
      "MU": 2,
      "SU": 2,
      "LU": 2,
      "EV": 2,
      "AR": 1,
      "CV": 1,
      "SP": 2,
      "WH": 2
    }
  },
  "pl_q12": {
    "A": {
      "LE": 3,
      "SU": 3,
      "CV": 2,
      "LU": 2,
      "HU": 2
    },
    "B": {
      "SP": 3,
      "EV": 3,
      "NF": 2,
      "CV": 2,
      "WH": 2
    },
    "C": {
      "NF": 3,
      "AR": 2,
      "LU": 2,
      "IT": 1
    },
    "D": {
      "AV": 2,
      "BH": 2,
      "BR": 2,
      "AR": 1
    },
    "E": {
      "MC": 3,
      "WO": 3,
      "FU": 2,
      "IT": 1,
      "BO": 2
    }
  },
  "pl_q13": {
    "left": {
      "NC": 3,
      "CP": 3,
      "WH": 3,
      "CV": 3,
      "WO": 2,
      "IT": 3,
      "FU": 2,
      "SU": 2,
      "BO": 1,
      "CH": 1,
      "HU": 3
    },
    "right": {
      "LI": 2,
      "NF": 3,
      "MU": 2,
      "EV": 2,
      "LU": 2,
      "AR": 2,
      "CH": 1,
      "SP": 2
    }
  },
  "pl_q14": {
    "A": {
      "BO": 2,
      "FU": 2,
      "IT": 2,
      "NC": 1
    },
    "B": {
      "SP": 3,
      "SU": 3,
      "CV": 3,
      "EV": 2,
      "WH": 1,
      "HU": 1
    },
    "C": {
      "MC": 2,
      "WO": 2,
      "BR": 2,
      "BH": 1
    },
    "D": {
      "AV": 3,
      "CH": 3,
      "AR": 2,
      "BR": 1
    },
    "E": {
      "NF": 3,
      "LE": 3,
      "LU": 3,
      "SP": 2,
      "EV": 1
    }
  }
};

// ─── TEAM PERSONALITY DIMENSIONS (for analysis tab) ──────────────────────────
const teamDims = {
  LI:{loyalty:10,emotion:10,ambition:9, process:4, community:9, chaos:4, rootedness:8},
  MC:{loyalty:3, emotion:3, ambition:10,process:10,community:3, chaos:2, rootedness:3},
  AR:{loyalty:5, emotion:7, ambition:7, process:7, community:5, chaos:4, rootedness:5},
  EV:{loyalty:10,emotion:8, ambition:5, process:3, community:7, chaos:4, rootedness:8},
  NC:{loyalty:8, emotion:8, ambition:7, process:4, community:10,chaos:4, rootedness:9},
  WH:{loyalty:6, emotion:8, ambition:5, process:3, community:8, chaos:6, rootedness:9},
  CP:{loyalty:7, emotion:7, ambition:5, process:4, community:8, chaos:5, rootedness:10},
  MU:{loyalty:6, emotion:7, ambition:9, process:5, community:5, chaos:4, rootedness:4},
  SP:{loyalty:7, emotion:9, ambition:7, process:3, community:6, chaos:6, rootedness:5},
  LE:{loyalty:6, emotion:8, ambition:5, process:4, community:6, chaos:7, rootedness:6},
  NF:{loyalty:7, emotion:7, ambition:5, process:3, community:6, chaos:9, rootedness:7},
  BR:{loyalty:4, emotion:3, ambition:7, process:9, community:5, chaos:4, rootedness:5},
  BH:{loyalty:5, emotion:6, ambition:6, process:8, community:6, chaos:4, rootedness:6},
  WO:{loyalty:5, emotion:4, ambition:6, process:8, community:4, chaos:3, rootedness:5},
  FU:{loyalty:5, emotion:4, ambition:4, process:6, community:5, chaos:3, rootedness:7},
  BO:{loyalty:5, emotion:6, ambition:4, process:4, community:7, chaos:5, rootedness:5},
  AV:{loyalty:7, emotion:7, ambition:9, process:6, community:6, chaos:4, rootedness:7},
  SU:{loyalty:9, emotion:9, ambition:6, process:4, community:9, chaos:5, rootedness:8},
  LU:{loyalty:8, emotion:10,ambition:7, process:3, community:7, chaos:8, rootedness:9},
  CH:{loyalty:5, emotion:6, ambition:8, process:5, community:3, chaos:7, rootedness:5},
  IT:{loyalty:8, emotion:6, ambition:5, process:5, community:8, chaos:4, rootedness:9},
  CV:{loyalty:9, emotion:7, ambition:5, process:4, community:7, chaos:5, rootedness:8},
  HU:{loyalty:9, emotion:6, ambition:4, process:3, community:8, chaos:6, rootedness:10},
};


// ── Share card system (canvas, 1080x1350). Section 6 spec. ──────────────
// Fixed dimension palette: colour = trait identity, band height = score.
// Approved badge map. null = intentional monogram (the 2-letter code).
const CARD_BADGES = {LI:null,AR:null,MC:"🚢",EV:"🍬",NC:"🐦‍⬛",MU:"🔱",SP:"🐓",FU:"🏡",CH:"🦁",IT:"🚜",LU:"🦚",CV:"☁️",AV:"🍷",CP:"🦅",LE:"🦊",NF:"🌲",BR:"🐝",BH:"🐦",WO:"🐺",BO:"🍒",SU:"🐱",WH:"⚒️",HU:"🐯"};
// Generic shape emojis vanish on a same-colour roundel: always monogram instead.
const GENERIC_EMOJI = new Set(["🔴","🔵","⚫","⚪","🩵","🟡","🟢","🟣","🟠","🟤","🔶","🔷"]);



const squadUrls = {
  LI:"https://www.premierleague.com/en/clubs/14/liverpool/squad",
  MC:"https://www.premierleague.com/en/clubs/43/manchester-city/squad",
  AR:"https://www.premierleague.com/en/clubs/3/arsenal/squad",
  EV:"https://www.premierleague.com/en/clubs/11/everton/squad",
  NC:"https://www.premierleague.com/en/clubs/4/newcastle-united/squad",
  WH:"https://www.premierleague.com/en/clubs/21/west-ham-united/squad",
  CP:"https://www.premierleague.com/en/clubs/31/crystal-palace/squad",
  MU:"https://www.premierleague.com/en/clubs/1/manchester-united/squad",
  SP:"https://www.premierleague.com/en/clubs/6/tottenham-hotspur/squad",
  LE:"https://www.premierleague.com/en/clubs/13/leicester-city/squad",
  NF:"https://www.premierleague.com/en/clubs/17/nottingham-forest/squad",
  BR:"https://www.premierleague.com/en/clubs/94/brentford/squad",
  BH:"https://www.premierleague.com/en/clubs/36/brighton-and-hove-albion/squad",
  WO:"https://www.premierleague.com/en/clubs/39/wolverhampton-wanderers/squad",
  FU:"https://www.premierleague.com/en/clubs/54/fulham/squad",
  BO:"https://www.premierleague.com/en/clubs/91/bournemouth/squad",
  AV:"https://www.premierleague.com/en/clubs/7/aston-villa/squad",
  SU:"https://www.premierleague.com/en/clubs/56/sunderland/squad",
  LU:"https://www.premierleague.com/en/clubs/2/leeds-united/squad",
  CH:"https://www.premierleague.com/en/clubs/8/chelsea/squad",
  IT:"https://www.premierleague.com/en/clubs/40/ipswich-town/squad",
  CV:"https://www.premierleague.com/en/clubs/57/coventry-city/squad",
  HU:"https://www.premierleague.com/en/clubs/88/hull-city/squad",
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

export { moduleQuestions, teams, archetypes, teamTextColors, archetypeDesc, greats, vitalStats, nearlyGot, scoring, teamDims, DIM_LABELS, DIM_COLORS, DIM_CODES, DIM_ORDER, CARD_BADGES, GENERIC_EMOJI, squadUrls };
