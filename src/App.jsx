import { useState, useEffect, useRef, useMemo } from "react";

// ─── QUESTIONS ────────────────────────────────────────────────────────────────
// 30 questions across 5 phases
// Types: "choice" (5 opts), "binary" (2 tiles), "slider" (1-5 scale)

const questions = [

  // ── PHASE 1: GLOBAL PERSONALITY (Q1–Q6) ─────────────────────────────────────

  {
    id:"q1", type:"choice",
    phase:"Who are you?",
    question:"You're furious about something. What do people around you see?",
    options:[
      {label:"They know immediately. I don't hide it.",              value:"A"},
      {label:"I get quieter. The colder the worse.",                 value:"B"},
      {label:"I vent loudly, then it's gone fast.",                  value:"C"},
      {label:"Nothing — I process alone and come back sorted.",      value:"D"},
      {label:"Depends entirely on who caused it.",                   value:"E"},
    ]
  },
  {
    id:"q2", type:"binary",
    phase:"Who are you?",
    question:"Instinctively:",
    left:"I set the bar high and feel it when we fall short",
    right:"I manage expectations to protect myself from the fall",
  },
  {
    id:"q3", type:"choice",
    phase:"Who are you?",
    question:"Something you worked hard on gets overlooked. Your move:",
    options:[
      {label:"Say nothing. Let the next thing speak.",               value:"A"},
      {label:"Bring it up — clearly, calmly, once.",                 value:"B"},
      {label:"Stew. For longer than I'd admit.",                     value:"C"},
      {label:"Move on fast. Dwelling is a waste.",                   value:"D"},
      {label:"Take it personally. It stays with me.",                value:"E"},
    ]
  },
  {
    id:"q4", type:"slider",
    phase:"Who are you?",
    question:"When a plan falls apart:",
    left:"I need a moment — then I rebuild methodically",
    right:"I adapt in real time. Chaos doesn't slow me down",
  },
  {
    id:"q5", type:"choice",
    phase:"Who are you?",
    question:"Your ideal Saturday:",
    options:[
      {label:"Big group, loud, energy feeding energy.",              value:"A"},
      {label:"Four or five people I actually trust.",                value:"B"},
      {label:"One other person, or nobody.",                         value:"C"},
      {label:"Structured — I like having a plan.",                   value:"D"},
      {label:"Whatever feels right that morning.",                   value:"E"},
    ]
  },
  {
    id:"q6", type:"binary",
    phase:"Who are you?",
    question:"In a group:",
    left:"I lead from the front — visibly",
    right:"I shape things from behind the scenes",
  },

  // ── PHASE 2: IDENTITY + BELONGING (Q7–Q12) ──────────────────────────────────

  {
    id:"q7", type:"choice",
    phase:"Where do you belong?",
    question:"What do people underestimate about you?",
    options:[
      {label:"How competitive I actually am.",                       value:"A"},
      {label:"How deeply I care.",                                   value:"B"},
      {label:"How patiently I can wait.",                            value:"C"},
      {label:"How analytically I think.",                            value:"D"},
      {label:"How stubborn I become once I've decided.",             value:"E"},
    ]
  },
  {
    id:"q8", type:"slider",
    phase:"Where do you belong?",
    question:"Your relationship with where you're from:",
    left:"It's one part of me — I'm not defined by it",
    right:"It's everything. Identity starts with place",
  },
  {
    id:"q9", type:"choice",
    phase:"Where do you belong?",
    question:"A long-standing group you love is struggling badly. You:",
    options:[
      {label:"Double down. Hard times are when loyalty counts.",     value:"A"},
      {label:"Stay, but it costs you more than you show.",           value:"B"},
      {label:"Try to fix it from the inside.",                       value:"C"},
      {label:"Give it a defined window, then reassess.",             value:"D"},
      {label:"Accept the struggle as part of belonging.",            value:"E"},
    ]
  },
  {
    id:"q10", type:"binary",
    phase:"Where do you belong?",
    question:"Honestly:",
    left:"I need to be part of something bigger than myself",
    right:"I find meaning in doing excellent work independently",
  },
  {
    id:"q11", type:"choice",
    phase:"Where do you belong?",
    question:"Your relationship with the past:",
    options:[
      {label:"It's fuel — I carry it forward.",                      value:"A"},
      {label:"It's an anchor — hard to fully shake.",                value:"B"},
      {label:"I reference it often. Others find this annoying.",     value:"C"},
      {label:"Useful context, not a destination.",                   value:"D"},
      {label:"I'm actively building something new. Past is fine.",   value:"E"},
    ]
  },
  {
    id:"q12", type:"slider",
    phase:"Where do you belong?",
    question:"When you care about something:",
    left:"My intensity is internal — I feel it but don't broadcast it",
    right:"Everyone around me knows exactly how much I care",
  },

  // ── PHASE 3: AMBITION + PROCESS (Q13–Q18) ───────────────────────────────────

  {
    id:"q13", type:"choice",
    phase:"How do you win?",
    question:"What does winning actually mean to you?",
    options:[
      {label:"Everything. The only point of competing.",             value:"A"},
      {label:"It matters, but how you win matters too.",             value:"B"},
      {label:"It would mean everything after everything we've been through.", value:"C"},
      {label:"Proof that the model is right.",                       value:"D"},
      {label:"A step, not a destination — immediately onto the next.", value:"E"},
    ]
  },
  {
    id:"q14", type:"binary",
    phase:"How do you win?",
    question:"Pick one — no negotiating:",
    left:"Romantic underdog",
    right:"Ruthless favourite",
  },
  {
    id:"q15", type:"choice",
    phase:"How do you win?",
    question:"Your tolerance for chaos and disorder:",
    options:[
      {label:"Zero. Systems and process prevent chaos.",             value:"A"},
      {label:"Low. I prefer order and can usually maintain it.",     value:"B"},
      {label:"Medium — depends entirely on what's at stake.",        value:"C"},
      {label:"High. I see pattern where others see chaos.",          value:"D"},
      {label:"I generate it. Controlled chaos is my natural state.", value:"E"},
    ]
  },
  {
    id:"q16", type:"slider",
    phase:"How do you win?",
    question:"Being the underdog:",
    left:"Insulting — I expect to compete, not scrape",
    right:"Comfortable — low expectations are freeing",
  },
  {
    id:"q17", type:"choice",
    phase:"How do you win?",
    question:"What motivates you most?",
    options:[
      {label:"Proving people wrong.",                                value:"A"},
      {label:"The craft — doing it as well as it can be done.",      value:"B"},
      {label:"The people I'm doing it with.",                        value:"C"},
      {label:"Legacy — what it means long after.",                   value:"D"},
      {label:"Winning. That's the whole thing.",                     value:"E"},
    ]
  },
  {
    id:"q18", type:"binary",
    phase:"How do you win?",
    question:"Be honest:",
    left:"The journey genuinely matters more than the destination",
    right:"Results are all that actually counts in the end",
  },

  // ── PHASE 4: EMOTIONAL TEXTURE (Q19–Q24) ────────────────────────────────────

  {
    id:"q19", type:"choice",
    phase:"How do you feel it?",
    question:"You just got genuinely good news. You:",
    options:[
      {label:"Celebrate loudly and immediately.",                    value:"A"},
      {label:"Share it with one or two people close to you.",        value:"B"},
      {label:"Sit with it quietly for a while first.",               value:"C"},
      {label:"Feel it for ten minutes then think about what's next.",value:"D"},
      {label:"Wait for the catch — good news makes you nervous.",    value:"E"},
    ]
  },
  {
    id:"q20", type:"slider",
    phase:"How do you feel it?",
    question:"When something goes wrong, your instinct is:",
    left:"Find who's responsible",
    right:"Fix the system so it doesn't happen again",
  },
  {
    id:"q21", type:"choice",
    phase:"How do you feel it?",
    question:"A long drought finally ends. First reaction:",
    options:[
      {label:"Pure, immediate, overwhelming joy.",                   value:"A"},
      {label:"Tears. The genuine kind.",                             value:"B"},
      {label:"Relief so deep it almost feels like grief.",           value:"C"},
      {label:"Disbelief. Takes a while to land.",                    value:"D"},
      {label:"Quiet satisfaction. You always knew.",                 value:"E"},
    ]
  },
  {
    id:"q22", type:"binary",
    phase:"How do you feel it?",
    question:"Your suffering:",
    left:"Is private — you feel it alone",
    right:"Is shared — misery loves company and honesty",
  },
  {
    id:"q23", type:"choice",
    phase:"How do you feel it?",
    question:"Something you built from scratch finally pays off. You feel:",
    options:[
      {label:"Vindicated. You knew it all along.",                   value:"A"},
      {label:"Relieved, more than anything else.",                   value:"B"},
      {label:"Proud of everyone involved.",                          value:"C"},
      {label:"Already onto the next challenge.",                     value:"D"},
      {label:"Like it doesn't compute yet — need time to absorb.",   value:"E"},
    ]
  },
  {
    id:"q24", type:"slider",
    phase:"How do you feel it?",
    question:"Hope, for you:",
    left:"Is rational — based on genuine evidence",
    right:"Persists regardless of evidence. You can't kill it",
  },

  // ── PHASE 5: INTRA-CLUSTER DISCRIMINATORS (Q25–Q30) ─────────────────────────

  {
    id:"q25", type:"binary",
    phase:"The fine print",
    question:"Which lands closer:",
    left:"The story of how it happened matters as much as that it happened",
    right:"Nobody remembers how. They remember the result",
  },
  {
    id:"q26", type:"choice",
    phase:"The fine print",
    question:"Your relationship with being right:",
    options:[
      {label:"I need the world to eventually acknowledge it.",       value:"A"},
      {label:"Knowing I was right is enough.",                       value:"B"},
      {label:"Being right without winning is cold comfort.",         value:"C"},
      {label:"I'm more interested in being accurate than right.",    value:"D"},
      {label:"I'm wrong often enough that I hold it loosely.",       value:"E"},
    ]
  },
  {
    id:"q27", type:"slider",
    phase:"The fine print",
    question:"Contentment:",
    left:"I'm genuinely okay with what I have — peace is underrated",
    right:"Contentment is just ambition that gave up",
  },
  {
    id:"q28", type:"choice",
    phase:"The fine print",
    question:"Which stings most?",
    options:[
      {label:"Being second when you should have won.",               value:"A"},
      {label:"Not being taken seriously.",                           value:"B"},
      {label:"Getting close over and over and never quite making it.",value:"C"},
      {label:"Being let down by someone you trusted completely.",    value:"D"},
      {label:"Watching someone else succeed with your approach.",    value:"E"},
    ]
  },
  {
    id:"q29", type:"binary",
    phase:"The fine print",
    question:"Deep down:",
    left:"I want one perfect, improbable, unforgettable moment",
    right:"I want sustained, proven, undeniable excellence",
  },
  {
    id:"q30", type:"choice",
    phase:"The fine print",
    question:"Which sentence actually fits:",
    options:[
      {label:"\"We've been here before. We know what to do.\"",      value:"A"},
      {label:"\"This time genuinely feels different.\"",             value:"B"},
      {label:"\"Just once. I just want it to happen once.\"",        value:"C"},
      {label:"\"The process is right. Results follow.\"",            value:"D"},
      {label:"\"They never saw us coming.\"",                        value:"E"},
    ]
  },

  // ── PHASE 6: WHAT IT COMES DOWN TO (Q31–Q38) ────────────────────────────────

  {
    id:"q31", type:"binary",
    phase:"What it comes down to",
    question:"When you turn out to be right:",
    left:"Knowing it yourself is enough",
    right:"You need the world to eventually acknowledge it",
  },
  {
    id:"q32", type:"choice",
    phase:"What it comes down to",
    question:"An institution you love makes a decision that feels like a betrayal. You:",
    options:[
      {label:"Leave. That decision tells you everything.",                   value:"A"},
      {label:"Stay, but carry the anger alongside the love. Both are real.", value:"B"},
      {label:"Understand it even if you hate it. Institutions aren't simple.",value:"C"},
      {label:"Try to change it from the inside.",                           value:"D"},
      {label:"Separate the institution from the thing you actually love.",  value:"E"},
    ]
  },
  {
    id:"q33", type:"binary",
    phase:"What it comes down to",
    question:"Belonging feels most real when:",
    left:"It's tight and local — the same streets, the same faces",
    right:"It's vast — thousands of people feeling the same thing simultaneously",
  },
  {
    id:"q34", type:"choice",
    phase:"What it comes down to",
    question:"The absence of burning ambition is:",
    options:[
      {label:"Peace. Not everything needs to be a project.",                value:"A"},
      {label:"Concerning. Contentment is ambition that gave up.",           value:"B"},
      {label:"Complicated. Depends what you've been through to get there.", value:"C"},
      {label:"Fine for now. The ambition comes back eventually.",            value:"D"},
      {label:"Sometimes wisdom, sometimes fear. Hard to tell from inside.", value:"E"},
    ]
  },
  {
    id:"q35", type:"binary",
    phase:"What it comes down to",
    question:"Something you love:",
    left:"Doesn't need to mean more than it is — the thing itself is enough",
    right:"Needs to feel like it matters, like it's part of a bigger story",
  },
  {
    id:"q36", type:"choice",
    phase:"What it comes down to",
    question:"Your relationship with the improbable:",
    options:[
      {label:"I've seen it happen. That changed how I see what's possible.", value:"A"},
      {label:"I believe in it. I have no proof but I can't stop.",           value:"B"},
      {label:"I'm drawn to it in stories even if I'm careful in real life.", value:"C"},
      {label:"I find it useful as a concept. Possibility matters.",         value:"D"},
      {label:"I don't think in those terms. What happens, happens.",        value:"E"},
    ]
  },
  {
    id:"q37", type:"binary",
    phase:"What it comes down to",
    question:"Belonging needs:",
    left:"A place — a ground, a street, a city. Geography is the whole thing",
    right:"A story — a history, a mythology, something that gives it meaning",
  },
  {
    id:"q38", type:"choice",
    phase:"What it comes down to",
    question:"Holding genuine belief alongside full awareness of how unlikely it is:",
    options:[
      {label:"That's just called hope. Everyone does this.",                value:"A"},
      {label:"It's a specific skill I've developed over years of practice.", value:"B"},
      {label:"I find it exhausting honestly.",                              value:"C"},
      {label:"I believe when I need to and protect myself when I don't.",   value:"D"},
      {label:"I've stopped trying to reconcile the two. They both exist.",  value:"E"},
    ]
  },
];

// ─── CLUB DEFINITIONS ──────────────────────────────────────────────────────────
// 16 clubs. Each has: name, emoji, color, tagline, desc, why[], note, kit URL

const teams = {
  LI: {
    name:"Liverpool",         emoji:"🔴", color:"#C8102E",
    tagline:"You don't experience things. You inhabit them.",
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
    name:"Manchester City",   emoji:"🔵", color:"#6CABDD",
    tagline:"You don't find excellence inspiring. You find anything less insulting.",
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
    name:"Arsenal",           emoji:"🔴", color:"#EF0107",
    tagline:"Getting it right matters even when the result disagrees.",
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
    name:"Everton",           emoji:"🔵", color:"#003399",
    tagline:"You understand that loyalty isn't something you feel when things are good.",
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
    name:"Newcastle United",  emoji:"⚫", color:"#241F20",
    tagline:"You don't want to belong to something global. You want to belong to something real.",
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
    name:"West Ham",          emoji:"⚒️", color:"#7A263A",
    tagline:"You can love something and be angry at it at the same time. You've had practice.",
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
    name:"Crystal Palace",    emoji:"🦅", color:"#1B458F",
    tagline:"You don't need a mythology. You make the atmosphere yourself.",
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
    name:"Manchester United",  emoji:"🔴", color:"#DA291C",
    tagline:"You know what this is supposed to feel like. That's the whole problem.",
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
    name:"Tottenham Hotspur", emoji:"⚪", color:"#132257",
    tagline:"You hold genuine belief and full self-awareness simultaneously. Most people can't do that.",
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
    name:"Leicester City",    emoji:"🦊", color:"#003090",
    tagline:"You have evidence that the impossible happens. That changes everything.",
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
    name:"Nottingham Forest",  emoji:"🌲", color:"#DD0000",
    tagline:"You know the best stories are the ones that shouldn't have happened.",
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
    name:"Brentford",         emoji:"🐝", color:"#D20000",
    tagline:"You were there before it was easy to be there.",
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
    name:"Brighton",          emoji:"🐦", color:"#0057B8",
    tagline:"You got here by thinking carefully, and you haven't stopped being surprised that it worked.",
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
    name:"Wolves",            emoji:"🐺", color:"#FDB913",
    tagline:"Your city doesn't need the world's attention. It has its own.",
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
    name:"Fulham",            emoji:"⚫", color:"#CC0000",
    tagline:"You've made peace with exactly what you are, and that took more confidence than ambition would.",
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
    name:"Bournemouth",       emoji:"🍒", color:"#DA291C",
    tagline:"You're genuinely happy to be here, and you don't think that's a small thing.",
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
    name:"Aston Villa",       emoji:"💜", color:"#670E36",
    tagline:"You respect where you came from without being imprisoned by it.",
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
    name:"Sunderland",        emoji:"🔴", color:"#EB172B",
    tagline:"You stayed when staying was the hardest thing to do.",
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
    name:"Leeds United",      emoji:"⚪", color:"#1D428A",
    tagline:"You experience everything at full range. The highs, the lows, and the chaos in between.",
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
    name:"Chelsea",           emoji:"🔵", color:"#034694",
    tagline:"You know what it felt like when it worked. That's not something you forget.",
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
    name:"Ipswich Town",      emoji:"🔵", color:"#0044A9",
    tagline:"You find more meaning in belonging to something real than something famous.",
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
    name:"Coventry City",     emoji:"🩵", color:"#59CBEE",
    tagline:"You keep showing up for something that keeps making it hard to show up.",
    desc:"Coventry City played their home games at Birmingham City's ground. Then almost moved to Northampton. Then came back to a half-built stadium in their own city. The fanbase kept showing up through all of it, not because they were naive about what was happening, not because they approved of the decisions, but because the club was theirs and that fact didn't change regardless of what the ownership did with it. This is a very specific kind of love. It isn't blind. It isn't easy. It's the love that stays when leaving would have been completely understandable. The Premier League is the payoff for years of stubborn, complicated belonging.",
    why:[
      "Your institutional grief score is the defining dimension, Coventry fans have had more reason to feel abandoned by their own club than almost anyone in English football.",
      "Your loyalty is explicitly unconditional in the face of active institutional failure. This is different from Everton's quiet endurance, it's been tested more directly.",
      "The payoff of actually being in the Premier League after all of that carries a specific weight. You understand what it means to finally get something that was a long time coming.",
    ],
    note:"FA Cup winners 1987. The Ricoh Arena / CBS Arena saga. Playing at St Andrew's. Almost Northampton. Back in Coventry. Now in the Premier League. The fans made this happen by simply refusing to stop caring.",
    kit:"https://shop.ccfc.co.uk",
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
};

const teamTextColors = {
  LI:"#ff4444", MC:"#6CABDD", AR:"#ff5555", EV:"#6688dd",
  NC:"#cccccc", WH:"#cc6677", CP:"#6688cc", MU:"#ff5555",
  SP:"#7799dd", LE:"#6699ee", NF:"#ff5555", BR:"#ff5555",
  BH:"#4499ee", WO:"#FDB913", FU:"#ff5555", BO:"#ff5566",
  AV:"#dd55aa", SU:"#ff5555", LU:"#6688cc", CH:"#5588dd",
  IT:"#6688dd", CV:"#59CBEE",
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
};

const vitalStats = {
  LI:{ founded:1892, ground:"Anfield",               city:"Liverpool",       capacity:"61,276",  lastTitle:"2019/20 (PL)",   kitMaker:"Adidas",   colors:"Red & white",         nickname:"The Reds",        },
  MC:{ founded:1880, ground:"Etihad Stadium",         city:"Manchester",      capacity:"53,400",  lastTitle:"2023/24 (PL)",   kitMaker:"Puma",     colors:"Sky blue & white",    nickname:"The Citizens",    },
  AR:{ founded:1886, ground:"Emirates Stadium",       city:"London (N7)",     capacity:"60,704",  lastTitle:"2003/04 (PL)",   kitMaker:"Adidas",   colors:"Red & white",         nickname:"The Gunners",     },
  EV:{ founded:1878, ground:"Goodison Park",          city:"Liverpool",       capacity:"39,572",  lastTitle:"1986/87 (Div 1)",kitMaker:"Hummel",   colors:"Royal blue & white",  nickname:"The Toffees",     },
  NC:{ founded:1892, ground:"St. James' Park",        city:"Newcastle",       capacity:"52,305",  lastTitle:"1926/27 (Div 1)",kitMaker:"Castore",  colors:"Black & white",       nickname:"The Magpies",     },
  WH:{ founded:1895, ground:"London Stadium",         city:"London (E20)",    capacity:"62,500",  lastTitle:"None (PL era)",  kitMaker:"Umbro",    colors:"Claret & blue",       nickname:"The Hammers",     },
  CP:{ founded:1905, ground:"Selhurst Park",          city:"London (SE25)",   capacity:"25,456",  lastTitle:"None (PL era)",  kitMaker:"Macron",   colors:"Red & blue",          nickname:"The Eagles",      },
  MU:{ founded:1878, ground:"Old Trafford",           city:"Manchester",      capacity:"74,310",  lastTitle:"2012/13 (PL)",   kitMaker:"Adidas",   colors:"Red, white & black",  nickname:"The Red Devils",  },
  SP:{ founded:1882, ground:"Tottenham Hotspur Stad.",city:"London (N17)",    capacity:"62,850",  lastTitle:"1960/61 (Div 1)",kitMaker:"Nike",     colors:"White & navy",        nickname:"Spurs",           },
  LE:{ founded:1884, ground:"King Power Stadium",     city:"Leicester",       capacity:"32,357",  lastTitle:"2015/16 (PL)",   kitMaker:"Adidas",   colors:"Blue & white",        nickname:"The Foxes",       },
  NF:{ founded:1865, ground:"City Ground",            city:"Nottingham",      capacity:"30,445",  lastTitle:"1977/78 (Div 1)",kitMaker:"Umbro",    colors:"Red & white",         nickname:"Forest",          },
  BR:{ founded:1889, ground:"Gtech Community Stad.",  city:"London (TW8)",    capacity:"17,250",  lastTitle:"None (PL era)",  kitMaker:"Umbro",    colors:"Red & white stripes", nickname:"The Bees",        },
  BH:{ founded:1901, ground:"Amex Stadium",           city:"Brighton",        capacity:"31,876",  lastTitle:"None (PL era)",  kitMaker:"Nike",     colors:"Blue & white",        nickname:"The Seagulls",    },
  WO:{ founded:1877, ground:"Molineux",               city:"Wolverhampton",   capacity:"32,050",  lastTitle:"1958/59 (Div 1)",kitMaker:"Adidas",   colors:"Gold & black",        nickname:"Wolves",          },
  FU:{ founded:1879, ground:"Craven Cottage",         city:"London (SW6)",    capacity:"25,700",  lastTitle:"None (PL era)",  kitMaker:"Adidas",   colors:"White & black",       nickname:"The Cottagers",   },
  BO:{ founded:1899, ground:"Vitality Stadium",       city:"Bournemouth",     capacity:"11,307",  lastTitle:"None (PL era)",  kitMaker:"Castore",  colors:"Red & black",         nickname:"The Cherries",    },

  AV:{ founded:1874, ground:"Villa Park",              city:"Birmingham",      capacity:"52,509",  lastTitle:"1980/81 (Div 1)", kitMaker:"Castore",  colors:"Claret & blue",       nickname:"The Villans",     },
  SU:{ founded:1879, ground:"Stadium of Light",        city:"Sunderland",      capacity:"46,000",  lastTitle:"1935/36 (Div 1)", kitMaker:"Adidas",   colors:"Red & white",         nickname:"The Black Cats",  },
  LU:{ founded:1919, ground:"Elland Road",             city:"Leeds",           capacity:"37,890",  lastTitle:"1991/92 (Div 1)", kitMaker:"Adidas",   colors:"White & blue",        nickname:"The Whites",      },
  CH:{ founded:1905, ground:"Stamford Bridge",         city:"London (SW6)",    capacity:"40,341",  lastTitle:"2021/22 (PL)",    kitMaker:"Nike",     colors:"Blue & white",        nickname:"The Blues",       },
  IT:{ founded:1878, ground:"Portman Road",            city:"Ipswich",         capacity:"30,311",  lastTitle:"None (PL era)",   kitMaker:"Hummel",   colors:"Blue & white",        nickname:"The Tractor Boys", },
  CV:{ founded:1883, ground:"CBS Arena",               city:"Coventry",        capacity:"32,609",  lastTitle:"None (PL era)",   kitMaker:"Hummel",   colors:"Sky blue & white",    nickname:"The Sky Blues",   },
};

const nearlyGot = {
  LI:{
    NC:"You both live for collective belonging and loud shared emotion. The difference: Liverpool wraps it in mythology and global reach, YNWA, European nights, a fanbase that spans continents. Newcastle is more local, more raw, less ornate. Liverpool fans carry history like armour. Newcastle fans carry it like a wound that's finally starting to heal.",
    EV:"You share the same city, the same working-class roots, the same capacity for deep feeling. The gap is expectation: Liverpool fans carry the weight of what they've won. Everton fans carry the weight of what they haven't. Both are heavy. Different kind of heavy.",
    WH:"Both loud, emotional, place-proud. West Ham's identity is more complicated, the stadium move, the cockney mythology, the sense of something lost. Liverpool's collective feeling is uncomplicated by institutional grief. If you found the 'complicated' part resonant, West Ham might actually be your club.",
    MU:"Both are former-greatness clubs with global fanbases and a demand for excellence. Liverpool's identity is built on collective soul. United's is built on legacy and status. Liverpool fans sing; United fans remember. If it's the feeling that drives you more than the prestige, Liverpool's right.",
  },
  MC:{
    BR:"Both are analytically wired and process-first. The gap is scale and sentiment. City are a machine built to dominate; Brentford are a machine built to punch above their weight. If you find smart underdogs more interesting than smart favourites, Brentford might actually fit you better.",
    BH:"Both think carefully and back evidence. Brighton adds warmth, they're genuinely delighted to be here. City are not delighted; they expect. If the joy of the journey matters alongside the thinking, Brighton is the right call.",
    WO:"Both private, process-oriented, low on chaos. Wolves are underdog-comfortable; City are not. If you find more appeal in quiet competence at a smaller scale than relentless dominance, Wolves fits that gap.",
    AR:"Both value doing things properly. Arsenal care deeply about the aesthetics of the process. City only care whether the process produces wins. If how it looks matters to you, Arsenal is closer.",
  },
  AR:{
    BH:"Both are progressive, thinking clubs that care about the how. Brighton is more cheerful about it, pleasantly surprised by their own success. Arsenal carries the weight of expectation and the torment of almost. If you're more optimist than tortured, Brighton might suit you.",
    NF:"Both are romantic in how they relate to football. Forest is purer chaos and mythology. Arsenal is more principled, they want to do it properly, not just dramatically. If the messy story appeals more than the right method, Forest is worth a second look.",
    FU:"Both find value in doing things properly at their own pace. Arsenal fans still want to win everything; Fulham fans are genuinely fine with a good season. If you're more settled than restless, Fulham is the honest answer.",
    SP:"Both suffer through near-misses with principled identities. Arsenal have a clear philosophy they hold sacred. Spurs are more chaotically self-aware. If you take the method seriously, Arsenal. If you've made a kind of peace with the comedy of your own hope, Spurs.",
  },
  EV:{
    SP:"Both are long-suffering clubs with painful near-misses. Everton suffer quietly and inwardly; Spurs perform the suffering publicly with a kind of self-aware dark humour. If your pain is something you share loudly rather than absorb alone, Spurs is probably you.",
    MU:"Both carry former glory and present frustration. United's former greatness is more recent and more dominant; Everton's is older and harder to hold onto. The key question: are you haunted by recent proximity to greatness, or by a longer drought?",
    LI:"Same city, same roots, very different emotional register. The key fork: do you expect success or endure without it? Liverpool fans expect. Everton fans endure. One isn't better than the other. They're just different kinds of love.",
    NF:"Both stubbornly loyal to a romantic version of what their club means. Everton's loyalty is quiet, place-specific, unconditional. Forest's is mythological and chaos-tolerant. If you love the improbable story more than the steady commitment, Forest is closer.",
  },
  NC:{
    LI:"The communal dimension is nearly identical. The fork is mythology vs locality: Liverpool is a global phenomenon built on story and anthem. Newcastle is a city that simply cannot be separated from its club. If you want the purer, rawer version of collective belonging without the global scale, Newcastle is it.",
    WH:"Both place-defined, proud, working-class-rooted clubs. Newcastle's trajectory is currently upward and optimistic; West Ham's identity is tangled in a stadium move many fans resented. If you're drawn to the upward arc, Newcastle. If the complicated loyalty resonates more, West Ham.",
    CP:"Both intensely local and no-frills, Palace south London, Newcastle the northeast. The main distinction is scale: Newcastle engulfs an entire city. Palace is a tight, fiercely proud corner of London. Both are real. One is bigger.",
  },
  WH:{
    NC:"The shared dimension is raw belonging and working-class place pride. West Ham's specific identity is more conflicted, the move from Upton Park left a visible scar. Newcastle's current chapter is more optimistic. If complicated institutional grief rings true, West Ham is real.",
    CP:"Both unpretentious and locally-rooted. West Ham has more history and complexity behind the identity. Palace is simpler and less burdened by institutional decisions. If you want the cleaner version of local pride, Palace might suit you better.",
    LI:"Both loud and place-proud. Liverpool's collective emotion is uncomplicated by the kind of institutional grief West Ham carries. If you want the feeling without the baggage, Liverpool. If the baggage is part of what makes it real, West Ham.",
  },
  CP:{
    NC:"Both intensely local and belonging-focused. Scale is the gap: Newcastle engulfs a whole city; Palace owns a corner of London. Palace fans don't need the whole city, they have Selhurst, and that is genuinely enough.",
    WH:"Both unpretentious and local. Palace is the simpler of the two, less burdened by institutional history. If you have no interest in the complicated backstory and just want the thing itself, Palace is the cleaner answer.",
    MU:"The only thing you share is the direct, front-facing approach. United demand results from historical greatness. Palace's directness comes from pride without pretension. Completely different sources, similar energy.",
  },
  MU:{
    LI:"Both global, both historically great, both emotionally demanding. The fork: Liverpool's identity is collective and mythological. United's is individual excellence and status. YNWA is about everyone together; United at their best is about being the undisputed best.",
    EV:"Both carry the weight of expectation and former glory. United's was more recent and more dominant; Everton's is older and harder to hold. The question: are you haunted by proximity to what you had, or waiting for something that feels further away?",
    SP:"Both suffering from proximity to former success. United's former greatness was more recent and more dominant. Spurs' has been further away for longer. If you believe your club is currently underperforming relative to its actual quality, United. If you're not sure it'll ever quite come together, Spurs.",
    AR:"Both have historical prestige and are working to return. Arsenal's identity is more aesthetic and principled; United's is more about scale and dominance. If you care about how it looks, Arsenal. If you care about being the biggest, United.",
  },
  SP:{
    EV:"The key fork is public versus private suffering. Spurs fans perform the suffering with a kind of dark comedy and self-awareness. Everton fans absorb it quietly and carry it alone. You know which one you are.",
    AR:"Both long-suffering with principled identities and tortured near-misses. Arsenal hold a clear philosophy as sacred. Spurs are more chaotically self-aware about their own absurdity. If you take the method seriously, Arsenal. If you've developed a sense of humour about your own hope, Spurs.",
    LE:"Both defined by hope that won't die. Leicester actually got the impossible thing. Spurs have come agonisingly close. If you want to follow a club where the miracle already happened and now you need a second one, Leicester. If you prefer living in the agonising anticipation, Spurs.",
    MU:"See United entry.",
  },
  LE:{
    NF:"Both are miracle clubs, Forest's is older and mythologically bigger; Leicester's is more recent and arguably more statistically improbable. Forest is pure chaos and manager mythology. Leicester is the team 5000-to-1 couldn't stop. If chaos and the long-ago miracle appeal over the recent one, Forest.",
    SP:"See Spurs entry, the key question is whether you want to be the club where it happened or the club still waiting.",
    BH:"Both pleasantly surprised to be where they are. Brighton earns it through careful thinking. Leicester earned it through the most improbable moment in modern football. If you'd rather be the joyful smart club than the miracle club still chasing the second one, Brighton is the closer fit.",
  },
  NF:{
    LE:"Forest's miracle is older, less statistical, more mythological, Clough, a manager cult, a team that shouldn't have existed at that level. Leicester's is more recent, more data-defying. Both are romantic clubs. Forest has more mythology; Leicester has more recent proof.",
    AR:"Both have a romantic relationship with their club's past and a sense of what the club means beyond results. Arsenal's romance is about doing it properly. Forest's is about doing it impossibly. One worships the method; one worships the myth.",
    WH:"Both tolerate chaos and have complicated histories. Forest's chaos is mythological and historic; West Ham's is more ongoing and present-tense. If you prefer your chaos to be legendary rather than current, Forest.",
  },
  BR:{
    MC:"Both are process-first and analytically wired. The underdog/favourite divide is the line. City expect to win everything. Brentford expect to be smart enough to compete with people who spend ten times what they spend.",
    BH:"Both are data-forward clubs. Brighton does it with more warmth and communal joy. Brentford does it more quietly and with more contrarian energy. If you celebrate the smartness openly, Brighton. If you just act on it without needing anyone to notice, Brentford.",
    WO:"Both private, process-driven, underdog-comfortable. Brentford is more explicitly contrarian. Wolves are more quietly disciplined. If the data-nerd identity resonates strongly and you want people to know it, Brentford. If it's just how you operate, Wolves.",
  },
  BH:{
    BR:"See Brentford entry, both smart clubs. Brighton does it louder and with more joy; Brentford does it quieter and with more contrarianism.",
    MC:"Both think carefully. Brighton adds warmth, the Amex atmosphere, the community, the delight. City have none of the delight; they have the expectation. Very different emotional registers built on similar analytical foundations.",
    AR:"Both think carefully about how football should be played. Brighton is more cheerful and less tortured. Arsenal carries more expectation and more pain. If you're content with your club's direction, Brighton. If you need things to match what they should be, Arsenal.",
  },
  WO:{
    BR:"See Brentford entry, both quiet and process-driven. Brentford is more explicitly contrarian; Wolves just get on with it.",
    MC:"Both systematic, low-chaos, high process. Scale separates them. City want everything. Wolves want to exceed what they're supposed to be. Disciplined punching-above-weight appeals more than relentless dominance? Wolves.",
    FU:"Both quiet and comfortable with their identity. Wolves are more competitive about it, there's a quiet fire, a chip. Fulham are more genuinely at peace. If you have the quiet fire, Wolves. If you're actually fine, Fulham.",
  },
  FU:{
    BO:"Both genuinely content clubs with no complex about their scale. Fulham have Craven Cottage, the Thames, a long top-flight history, and a kind of gentility that sets them apart. Bournemouth are newer to it, smaller, simpler. If the character of the place matters, Fulham. If you just want the joy without the history, Bournemouth.",
    WO:"Both quiet. Wolves have a competitive edge beneath the calm, they want to exceed expectations. Fulham are more genuinely fine. If you have the quiet competitive fire, Wolves. If you're actually content, Fulham is the honest answer.",
    AR:"Both find meaning in doing things properly. Fulham are content with that as the goal itself. Arsenal fans want the trophies to follow. If you genuinely don't need the trophies to feel like it meant something, Fulham is the more honest answer.",
  },
  BO:{
    FU:"See Fulham entry, both content, no complex. Fulham has the character of place; Bournemouth has the simpler joy.",
    LE:"Both small clubs with improbable recent histories. Leicester's story is more dramatic now and comes with more expectation. Bournemouth are still just happy to be here, no complex attached. If the miracle still defines you, Leicester. If you've moved past that and just want to enjoy the football, Bournemouth.",
    BH:"Both south coast, both progressive, both without historical reason to be in the Premier League. Brighton have the smarter operation and the bigger stadium. Bournemouth have the simpler joy and less overthinking. If the analytics and the careful model matter to you, Brighton. If you just want to enjoy it, Bournemouth.",
  },
  AV:{
    LI:"Both are clubs with genuine European pedigree and current ambition. Liverpool's identity is fully formed and rooted in mythology. Villa's is in the process of being rebuilt, the hunger is newer and the joy of it is different. If you want the completed story, Liverpool. If you want to be part of one being written, Villa.",
    NC:"Both are ambitious clubs with proud histories experiencing a genuine resurgence. The difference is place and scale: Newcastle is a whole city with a single identity. Villa is a sleeping giant in the UK's second city, which means the identity is bigger and more diverse.",
    MU:"Both are former-greatness clubs with European Cup history and high expectations. United's former greatness was more recent and more dominant. Villa's is older and the current rebuild feels more hopeful. If you're grieving something, United. If you're building toward something, Villa.",
  },
  SU:{
    NC:"Both are northern, communal, place-rooted clubs with painful institutional histories followed by genuine optimism. Newcastle's fanbase is larger and the trajectory is further along. Sunderland's story is rawer, the fall was deeper and the comeback is still being written.",
    EV:"Both are clubs defined by loyalty through difficulty and communal suffering. Everton's is quieter and more private. Sunderland's was documented publicly, which gave it a different quality, the whole world watched the pain and the comeback.",
    LU:"Both are intensely passionate northern fanbases that have been through genuine darkness and come back. Leeds' identity is more operatic and volatile. Sunderland's is more communal and specifically rooted in a city that lost more than just its football club.",
  },
  LU:{
    LI:"Both are maximum-intensity clubs with huge fanbases and complete emotional commitment. Liverpool's identity is more mythological and the history is cleaner. Leeds' is more chaotic and contradictory. If you want the clean collective myth, Liverpool. If you want the full complicated operatic version, Leeds.",
    SU:"See Sunderland entry.",
    EV:"Both are clubs where suffering is real and loyalty is unconditional. Everton's is quieter. Leeds' is louder and comes with more chaos and more recent trauma. If you stew privately, Everton. If you process it loudly, Leeds.",
  },
  CH:{
    MU:"Both are historically great clubs navigating decline from very recent peaks. United's identity is more rooted in legacy and status. Chelsea's is more layered, the glamour of the neighbourhood, the Abramovich transformation, the specific grief of having it taken by geopolitics.",
    AR:"Both are London clubs with prestige and a fanbase that holds its identity carefully. Arsenal's identity is principled and aesthetic. Chelsea's is more worldly, shaped by money and transformation and grief in ways Arsenal's hasn't been.",
    WH:"Both are west London clubs with complicated relationships with their own identity. West Ham's complication is the stadium move. Chelsea's is the Abramovich era and what came after. The difference is mythology: West Ham have Upton Park. Chelsea have the King's Road and 19 trophies.",
  },
  IT:{
    FU:"Both are clubs that know exactly what they are and find it genuinely enough. Fulham has the character of place, Craven Cottage, the Thames, the understated history. Ipswich has the community roots in Suffolk and the Bobby Robson mythology.",
    BO:"Both are modest clubs genuinely happy to be in the Premier League and undefensive about not being Arsenal. Ipswich has the deeper historical roots and the Robson mythology. Bournemouth is simpler, smaller, and lighter about it.",
    NC:"Both are clubs where community is the whole point. Newcastle's community is louder and larger. Ipswich's is more specific, Suffolk, Portman Road, a market town that happens to have a football club.",
  },
  CV:{
    WH:"Both are clubs where institutional decisions made above the fanbase left genuine scars. West Ham's wound is the Upton Park move. Coventry's is the ground saga. Both involve a fanbase that kept showing up despite having every reason not to.",
    EV:"Both are defined by loyalty that required no reward to persist. Everton's is quiet and absorbed. Coventry's has been tested more directly by institutional failure, they didn't just wait, they kept showing up for a club that seemed to be actively dismantling what belonging meant.",
    SU:"Both are clubs defined by survival and comeback. Sunderland's fall was more dramatic. Coventry's was different, the club was there, but the home wasn't. Both are genuinely about loyalty in extremis.",
  },
};

// ─── SCORING MATRIX ───────────────────────────────────────────────────────────
// Every club should accumulate ~38-42 points across a "perfect" answer set
// Weights: 3 = primary signal, 2 = secondary, 1 = mild lean

const scoring = {
  // Q1: anger expression
  // A=visible/loud → communal; B=cold/quiet → analytical/private; C=vent+forget → chaos/West Ham
  // D=process alone → analytical; E=depends → flexible/Bournemouth
  q1:{
    A:{LI:3,NC:3,WH:2,CP:3,MU:1,SU:2,LU:3},
    B:{MC:3,WO:2,BR:2,EV:1,IT:2},
    C:{WH:3,NF:2,CP:2,BO:1,SP:1,LU:1,CV:1},
    D:{MC:2,BR:3,BH:2,WO:1},
    E:{BO:3,FU:2,BH:1,LE:1,AV:1,CH:2,IT:1,CV:2},
  },
  // Q2: high expectations vs managing down
  q2:{
    left: {MC:3,LI:2,MU:3,AR:2,NC:2,EV:1,AV:2,LU:2,SU:1},
    right:{EV:3,SP:3,NF:2,FU:2,BO:2,LE:2,CV:2,IT:2,CH:1},
  },
  // Q3: overlooked — reaction
  q3:{
    A:{MC:2,WO:3,BR:2,BH:1},
    B:{AR:3,BH:2,FU:3,BR:1,IT:2},
    C:{EV:2,SP:3,MU:2,NF:1},
    D:{MC:2,BO:3,LE:2,CP:1,AV:2,CH:2},
    E:{LI:2,EV:3,NC:2,WH:1,LU:2,SU:2},
  },
  // Q4: methodical rebuild vs real-time adapt
  q4:{
    1:{MC:3,AR:2,WO:2,BR:1},
    2:{MC:2,AR:2,BH:2,WO:1},
    3:{AV:3,FU:2,BO:3,BH:1,CP:1},
    4:{LI:2,NC:2,WH:2,NF:1,AV:2,SP:1,CV:1},
    5:{NF:3,WH:2,LE:3,CP:2,LU:2,CH:2,CV:1},
  },
  // Q5: group size / social preference
  q5:{
    A:{LI:3,NC:3,WH:2,CP:3,SU:2,LU:2},
    B:{EV:2,NF:2,WO:2,FU:1,SP:1,IT:2,CV:2},
    C:{BR:3,WO:3,MC:1},
    D:{MC:3,BR:2,AR:1,AV:1},
    E:{BO:3,BH:2,FU:2,LE:2,AV:1,CH:2},
  },
  // Q6: lead from front vs behind scenes
  q6:{
    left: {LI:3,NC:3,MU:2,WH:2,CP:2,SP:1,AV:2,SU:2,LU:2,CV:1},
    right:{MC:2,BR:3,AR:2,BH:2,WO:1,CH:2,IT:2},
  },
  // Q7: what people underestimate
  q7:{
    A:{MC:2,LI:2,MU:2,NC:1,CP:2,SP:1,AV:2,CH:1},
    B:{EV:3,NF:3,LI:2,WH:1,BO:1,SU:2},
    C:{NF:2,WO:2,EV:2,FU:1,AV:2,LE:1,IT:2},
    D:{BR:3,BH:3,MC:2,AR:1},
    E:{EV:2,MU:2,WO:2,SP:1,LU:2,CV:2},
  },
  // Q8: place identity slider
  q8:{
    1:{MU:2,MC:2,WO:3,BR:1,BH:1},
    2:{AR:2,BH:2,BO:2,CH:3},
    3:{FU:2,AV:3,LE:1,CP:1,SP:1,IT:1},
    4:{WH:2,EV:2,NF:2,NC:1,CV:2,IT:2},
    5:{NC:3,CP:3,LI:2,WH:2,SU:3,LU:3},
  },
  // Q9: stick with struggling group
  q9:{
    A:{EV:2,LI:3,NC:2,CP:3,FU:1,SU:3,LU:2,IT:2,CV:3},
    B:{EV:2,MU:2,SP:2,NF:1,WH:2,AV:2,CH:1},
    C:{AR:2,BH:2,AV:3,BR:1,CH:2},
    D:{MC:2,SP:2,BO:2,LE:1},
    E:{LI:2,NF:2,BO:2,LE:1},
  },
  // Q10: part of something bigger vs excellent independently
  q10:{
    left: {LI:3,NC:3,WH:2,CP:3,MU:2,EV:1,AV:1,BO:1},
    right:{MC:2,BR:3,WO:3,AR:2,BH:1},
  },
  // Q11: relationship with the past
  q11:{
    A:{LI:3,MU:2,NF:2,EV:1,WH:2,SU:2,IT:2,CV:2},
    B:{EV:3,MU:3,SP:2,NF:1},
    C:{MU:3,EV:2,LI:2,NF:2,CP:2},
    D:{AR:2,BH:2,BR:2,AV:1,FU:2,WO:1},
    E:{MC:2,NC:2,AV:3,BH:2,BO:2,LE:1},
  },
  // Q12: emotional intensity slider (private ↔ public)
  q12:{
    1:{BR:2,WO:3,MC:2,BH:1},
    2:{AR:2,WO:2,FU:3,IT:2},
    3:{FU:2,BH:2,BO:2,LE:1,AV:2,CH:2},
    4:{NC:2,EV:2,SP:2,LI:1},
    5:{LI:2,NC:3,WH:3,CP:3,SU:3,LU:3},
  },
  // Q13: what winning means
  q13:{
    A:{MC:3,LI:2,MU:2,CH:2},
    B:{AR:3,BH:2,AV:3,FU:1,IT:2},
    C:{EV:3,SP:3,NF:2,WH:2,LE:2,NC:2,SU:2,LU:2,CV:2},
    D:{BR:3,MC:2,BH:2,AV:1},
    E:{MC:2,LI:3,MU:2,CP:1,AV:2,CH:1},
  },
  // Q14: romantic underdog vs ruthless favourite
  q14:{
    left: {NF:3,BR:2,LE:3,BO:2,FU:2,BH:1,SU:2,LU:2,IT:2,CV:3},
    right:{MC:2,LI:2,MU:3,AR:1,EV:1,AV:2,CH:2,WH:1,NC:1},
  },
  // Q15: chaos tolerance
  q15:{
    A:{MC:3,WO:2,BR:2,AR:1},
    B:{AR:2,BH:2,WO:2,FU:2,IT:2},
    C:{AV:3,NC:2,FU:2,BO:1,SP:1,LE:1,SU:2,CV:1},
    D:{BR:3,AR:2,NF:2,BH:1},
    E:{NF:3,WH:3,LE:3,CP:2,LU:2,CH:2},
  },
  // Q16: underdog comfort slider
  q16:{
    1:{MC:2,MU:3,LI:2,CH:2},
    2:{LI:2,AR:2,MU:2,EV:1,CP:1,AV:2},
    3:{SP:3,NC:2,WH:2,AV:1,SU:2,LU:2},
    4:{NF:2,LE:2,BO:2,WH:1,IT:2,CV:2},
    5:{BR:2,WO:3,BH:2,LE:2},
  },
  // Q17: motivation
  q17:{
    A:{NC:3,CP:3,EV:2,MU:2,SP:2,LU:2,CV:2,SU:2,AV:2},
    B:{AR:3,BR:3,BH:2,FU:1,WO:2},
    C:{LI:3,WH:2,NC:2,BO:2,SU:2,IT:2,LU:1},
    D:{LI:2,MU:2,EV:2,NF:2,SP:1,AV:2},
    E:{MC:3,LI:2,MU:1},
  },
  // Q18: journey vs results
  q18:{
    left: {AR:3,NF:3,FU:3,BO:2,BH:2,SP:2,AV:2,SU:2,LU:2,IT:2,CV:3},
    right:{MC:3,LI:2,MU:2,EV:2,CP:1,AV:2,NC:1,CH:2},
  },
  // Q19: reaction to good news
  q19:{
    A:{LI:3,NC:3,WH:2,CP:3,SU:2,LU:2},
    B:{EV:2,NF:2,FU:3,WO:1,IT:2,CV:2},
    C:{BR:2,WO:2,AR:2,BH:1},
    D:{MC:2,AR:2,BH:2,AV:2,CH:1},
    E:{SP:3,EV:3,MU:2,NF:1,LE:1},
  },
  // Q20: blame vs fix system slider
  q20:{
    1:{EV:3,CP:3,WH:2,MU:1,CV:2},
    2:{WH:2,LI:2,NC:2},
    3:{AR:2,AV:3,BH:2,FU:1,IT:2},
    4:{BR:2,MC:2,WO:2,AR:1},
    5:{MC:2,BR:3,BH:2,WO:1,CH:2},
  },
  // Q21: drought ending reaction
  q21:{
    A:{LI:3,NC:3,WH:2,CP:3,SU:2,LU:2},
    B:{EV:3,NF:3,MU:2,SU:1,CV:2},
    C:{SP:3,MU:3,EV:2},
    D:{LE:3,AV:3,BH:2,BO:2,CH:1},
    E:{MC:2,BR:2,WO:2,IT:1},
  },
  // Q22: suffering private vs shared
  q22:{
    left: {EV:3,WO:3,BR:2,AR:2,FU:1,IT:2,CH:2},
    right:{SP:3,WH:3,NF:2,LI:1,CP:2,BO:1,LE:1,AV:1,SU:3,LU:3,CV:2},
  },
  // Q23: payoff reaction
  q23:{
    A:{BR:3,AR:2,MC:2,BH:1,WO:2},
    B:{SP:3,EV:3,NF:2},
    C:{LI:3,NC:2,WH:2,BO:2,SU:2},
    D:{MC:2,MU:2,AR:1},
    E:{LE:3,NF:2,AV:3,SP:2,FU:1},
  },
  // Q24: hope (rational ↔ irrational persistence)
  q24:{
    1:{BR:3,MC:2,BH:2,WO:1},
    2:{AR:2,BH:2,FU:2,CH:2},
    3:{AV:3,BO:2,BH:1,LE:2,IT:2,CH:1},
    4:{SP:2,LE:2,NC:2,LI:1,SU:2,LU:2,CV:2},
    5:{SP:3,EV:3,NF:2,LI:2,CV:1},
  },
  // Q25: story matters vs result only (key intra-cluster discriminator)
  q25:{
    left: {NF:3,AR:3,LI:2,LE:2,FU:2,BO:1,AV:2,SU:2,LU:2,IT:2,CV:2},
    right:{MC:2,MU:3,CP:2,EV:2,BR:1,SP:2,WH:1,CH:2},
  },
  // Q26: relationship with being right
  q26:{
    A:{NC:2,MU:2,WH:2,CP:2,AV:2,SU:2,LU:2,CV:2},
    B:{WO:3,BR:3,BH:2,FU:1,IT:2},
    C:{MC:2,EV:2,CP:2,LI:1,MU:2,CH:2},
    D:{BR:3,BH:3,AR:2,MC:1},
    E:{BO:3,FU:3,BH:2,LE:1},
  },
  // Q27: contentment slider
  q27:{
    1:{FU:3,BO:3,BH:2},
    2:{FU:2,BO:2,AR:2,BH:1,IT:2},
    3:{AV:2,NC:2,WH:2,SU:2,CV:2,LU:1},
    4:{LI:2,MU:2,EV:2,SP:2,AV:2,LU:2,CH:2},
    5:{MC:3,LI:2,MU:3,AR:1,WO:2,CH:2},
  },
  // Q28: what stings most (key intra-cluster: Spurs/Arsenal/EV/Man Utd split)
  q28:{
    A:{MC:3,LI:2,MU:2,AR:1,AV:2,CH:2},
    B:{NC:3,CP:3,WH:2,MU:2,LE:1,LU:2},
    C:{SP:3,AR:3,EV:2,NF:1,LE:2,FU:2,CV:1},
    D:{LI:2,EV:3,NC:2,WH:2,SU:2,CV:3},
    E:{BR:3,BH:3,AR:2,WO:1,IT:2},
  },
  // Q29: one moment vs sustained excellence (key discriminator: LE/NF/Forest vs MC/LI)
  q29:{
    left: {LE:3,NF:3,SP:3,WH:2,BO:2,CP:1,AV:1,SU:2,LU:2,IT:2,CV:2},
    right:{MC:3,LI:2,MU:2,AR:2,EV:1,NC:2,AV:2,CH:2},
  },
  // Q30: defining phrase
  q30:{
    A:{LI:3,EV:2,MU:2,NF:1,FU:2,SU:2,CH:2,LU:1},
    B:{AV:3,NC:3,BH:2,AR:1,LE:3,SU:1},
    C:{SP:3,EV:3,NF:2,WH:1},
    D:{MC:3,BR:3,AR:1,CH:1,IT:1},
    E:{BR:2,WO:3,BH:2,LE:2,IT:2},
  },

  // Q31: knowing you're right privately vs needing acknowledgment
  // left=private → WO,BR,FU,IT; right=acknowledged → NC,LU,SU,MU,CP,AV
  q31:{
    left: {WO:3,BR:3,FU:2,IT:3,BH:2,MC:1,BO:2},
    right:{NC:2,LU:3,SU:2,MU:2,CP:2,AV:2,LI:1,CV:1,CH:2},
  },
  // Q32: institution betrayal reaction
  // A=leave → CH (pre-Abramovich fans some left); B=carry anger+love → WH,CV,SU; 
  // C=understand complexity → FU,AR; D=fix from inside → AV,BH; E=separate thing from inst. → NF,LE,LI
  q32:{
    A:{CH:3,MC:1},
    B:{WH:3,CV:3,SU:3,LU:2,NC:1},
    C:{FU:2,AR:2,BH:2,AV:1},
    D:{AV:3,BH:2,BR:2,IT:1},
    E:{NF:2,LE:3,LI:2,EV:2,SP:1},
  },
  // Q33: tight/local vs vast/collective belonging
  // left=local → CP,WH,CV,IT,FU,WO; right=vast → LI,NC,SU,LU,MU
  q33:{
    left: {CP:3,WH:3,CV:3,IT:3,FU:2,WO:2,BR:2,BO:2},
    right:{LI:2,NC:3,SU:2,LU:2,MU:2,EV:1,CH:2},
  },
  // Q34: absence of ambition
  // A=peace → FU,BO,IT; B=concerning → MC,MU,LU,CH; C=complicated → CV,WH,SU; D=comes back → AV,NC; E=wisdom/fear → AR,SP,LE
  q34:{
    A:{FU:3,BO:3,IT:2,BH:2},
    B:{MC:3,MU:2,LU:2,CH:2,AR:1},
    C:{CV:3,WH:2,SU:2,NF:1},
    D:{AV:2,NC:2,BR:2,BH:2},
    E:{AR:2,SP:2,LE:3,EV:1},
  },
  // Q35: thing itself is enough vs needs bigger story
  // left=thing itself → BO,FU,CP,IT,WO; right=bigger story → LI,NF,MU,SU,LU,EV
  q35:{
    left: {BO:3,FU:3,CP:2,IT:3,WO:2,BR:2,BH:2},
    right:{LI:3,NF:3,MU:2,SU:2,LU:2,EV:2,AR:1,CV:1},
  },
  // Q36: relationship with the improbable
  // A=seen it/evidence → LE,SU; B=believe without proof → SP,EV,CV; C=drawn to stories → NF,AR; D=useful concept → AV,BH,BR; E=don't think in those terms → MC,WO,FU
  q36:{
    A:{LE:3,SU:3,CV:2,LU:2},
    B:{SP:3,EV:3,NF:2,CV:2},
    C:{NF:3,AR:2,LU:2,IT:1},
    D:{AV:2,BH:2,BR:2,AR:1},
    E:{MC:3,WO:3,FU:2,IT:1,BO:2},
  },
  // Q37: place vs story for belonging
  // left=place → NC,CP,WH,CV,WO,IT,FU,SU; right=story → LI,NF,MU,EV,LU,AR
  q37:{
    left: {NC:3,CP:3,WH:3,CV:3,WO:2,IT:3,FU:2,SU:2,BO:1,CH:1},
    right:{LI:2,NF:3,MU:2,EV:2,LU:2,AR:2,CH:1},
  },
  // Q38: holding belief and self-awareness together
  // A=everyone does this → BO,FU; B=specific skill developed → SP,SU,CV,EV; C=exhausting → MC,WO,BR; D=strategic belief → AV,CH,AR; E=both coexist without reconciling → NF,LE,LU,SP
  q38:{
    A:{BO:2,FU:2,IT:2,NC:1},
    B:{SP:3,SU:3,CV:3,EV:2,WH:1},
    C:{MC:2,WO:2,BR:2,BH:1},
    D:{AV:3,CH:3,AR:2,BR:1},
    E:{NF:3,LE:3,LU:3,SP:2,EV:1},
  },
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
};

const DIM_LABELS = {
  loyalty:"Loyalty",emotion:"Emotional intensity",ambition:"Ambition",
  process:"Process thinking",community:"Community drive",chaos:"Chaos tolerance",rootedness:"Rootedness",
};


const badgeUrls = {
  LI:"https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
  MC:"https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
  AR:"https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
  EV:"https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg",
  NC:"https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg",
  WH:"https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg",
  CP:"https://upload.wikimedia.org/wikipedia/en/0/0c/Crystal_Palace_FC_logo_%282022%29.svg",
  MU:"https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
  SP:"https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
  LE:"https://upload.wikimedia.org/wikipedia/en/2/2d/Leicester_City_crest.svg",
  NF:"https://upload.wikimedia.org/wikipedia/en/e/e5/Nottingham_Forest_F.C._logo.svg",
  BR:"https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg",
  BH:"https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg",
  WO:"https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg",
  FU:"https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg",
  BO:"https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg",
  AV:"https://upload.wikimedia.org/wikipedia/en/9/9f/Aston_Villa_FC_crest_%282016%29.svg",
  SU:"https://upload.wikimedia.org/wikipedia/en/7/77/Sunderland_AFC_logo.svg",
  LU:"https://upload.wikimedia.org/wikipedia/en/5/54/Leeds_United_F.C._logo.svg",
  CH:"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
  IT:"https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg",
  CV:"https://upload.wikimedia.org/wikipedia/en/8/8e/Coventry_City_FC_logo.svg",
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function getAllScores(answers) {
  const s = Object.fromEntries(Object.keys(teams).map(k=>[k,0]));
  for (const [qId,ans] of Object.entries(answers)) {
    for (const [club,pts] of Object.entries(scoring[qId]?.[ans]||{})) {
      if (s[club]!==undefined) s[club]+=pts;
    }
  }
  return s;
}

// ─── QUESTION COMPONENTS ──────────────────────────────────────────────────────
const BTN = {
  base:{
    background:"#1c1c28",border:"1px solid #404058",borderRadius:6,
    cursor:"pointer",fontFamily:"inherit",transition:"all .15s ease",
    textAlign:"left",lineHeight:1.5,color:"#d0ccc6",
  },
};

function ChoiceQ({q,onSelect}){
  const [hov,setHov]=useState(null);
  return(
    <div style={{display:"flex",flexDirection:"column",gap:7}}>
      {q.options.map((o,i)=>(
        <button key={o.value}
          onClick={()=>onSelect(o.value)}
          onMouseEnter={()=>setHov(o.value)}
          onMouseLeave={()=>setHov(null)}
          style={{
            ...BTN.base,padding:"13px 16px",
            color:hov===o.value?"#ffffff":"#d0ccc6",
            background:hov===o.value?"#26263a":"#1c1c28",
            borderColor:hov===o.value?"#6a6a90":"#404058",
            display:"flex",gap:12,alignItems:"flex-start",
            fontSize:"clamp(13px,3vw,15px)",
          }}
        >
          <span style={{color:"#aaa",fontFamily:"monospace",fontSize:12,minWidth:18,paddingTop:2}}>{i+1}</span>
          {o.label}
        </button>
      ))}
    </div>
  );
}

function BinaryQ({q,onSelect}){
  const [hov,setHov]=useState(null);
  return(
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
      {[{label:q.left,val:"left"},{label:q.right,val:"right"}].map((side,i)=>(
        <button key={side.val}
          onClick={()=>onSelect(side.val)}
          onMouseEnter={()=>setHov(side.val)}
          onMouseLeave={()=>setHov(null)}
          style={{
            ...BTN.base,padding:"22px 16px",
            textAlign:"center",minHeight:100,
            display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,
            color:hov===side.val?"#ffffff":"#d0ccc6",
            background:hov===side.val?"#26263a":"#1c1c28",
            borderColor:hov===side.val?"#6a6a90":"#404058",
            fontSize:"clamp(13px,3vw,15px)",
          }}
        >
          <span style={{color:"#888",fontFamily:"monospace",fontSize:9}}>{i+1}</span>
          {side.label}
        </button>
      ))}
    </div>
  );
}

function SliderQ({q,onSelect}){
  const [hov,setHov]=useState(null);
  return(
    <div>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:18}}>
        <span style={{fontSize:12,color:"#bbb",maxWidth:"42%",lineHeight:1.45}}>{q.left}</span>
        <span style={{fontSize:12,color:"#bbb",maxWidth:"42%",textAlign:"right",lineHeight:1.45}}>{q.right}</span>
      </div>
      <div style={{display:"flex",gap:8,justifyContent:"center"}}>
        {[1,2,3,4,5].map(n=>(
          <button key={n}
            onClick={()=>onSelect(n)}
            onMouseEnter={()=>setHov(n)}
            onMouseLeave={()=>setHov(null)}
            style={{
              ...BTN.base,
              width:48,height:48,borderRadius:"50%",
              display:"flex",alignItems:"center",justifyContent:"center",
              textAlign:"center",
              color:hov===n?"#ffffff":"#d0ccc6",
              background:hov===n?"#26263a":"#1c1c28",
              borderColor:hov===n?"#6a6a90":"#404058",
              fontSize:14,fontFamily:"monospace",flexShrink:0,
            }}
          >{n}</button>
        ))}
      </div>
    </div>
  );
}

// ─── RESULT COMPONENTS ────────────────────────────────────────────────────────
function DimBars({teamKey,color}){
  const dims=teamDims[teamKey];
  return(
    <div>
      {Object.entries(DIM_LABELS).map(([k,label])=>(
        <div key={k} style={{marginBottom:8}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
            <span style={{fontSize:11,color:"#bbb",fontFamily:"monospace"}}>{label}</span>
            <span style={{fontSize:11,color:"#bbb",fontFamily:"monospace"}}>{dims[k]}/10</span>
          </div>
          <div style={{height:2,background:"#141420",borderRadius:2,overflow:"hidden"}}>
            <div style={{
              height:"100%",width:`${dims[k]*10}%`,
              background:`linear-gradient(90deg,${color}66,${color})`,
              borderRadius:2,transition:"width 1s cubic-bezier(.4,0,.2,1)",
            }}/>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

// BadgeImg: renders img if CDN loads, otherwise emoji. Never both.
function BadgeImg({url, emoji, size}){
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImg = url && loaded && !failed;
  return(
    <div style={{width:size,height:size,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
      {!showImg&&(
        <span style={{fontSize:size*0.72,lineHeight:1}}>{emoji}</span>
      )}
      {url&&(
        <img src={url} width={size} height={size}
          style={{objectFit:"contain",display:showImg?"block":"none"}}
          onLoad={()=>setLoaded(true)}
          onError={()=>setFailed(true)}
        />
      )}
    </div>
  );
}

export default function App(){
  const [cur,setCur]=useState(0);
  const [answers,setAnswers]=useState({});
  const [scores,setScores]=useState(null);
  const [result,setResult]=useState(null);
  const [phase,setPhase]=useState("in");
  const [tab,setTab]=useState("result");
  const [debugOpen,setDebugOpen]=useState(false);
  const [debugExpanded,setDebugExpanded]=useState(false);
  const containerRef=useRef(null);

  const q=questions[cur];
  const pct=Math.round((cur/questions.length)*100);
  const currentPhase=q?.phase;

  // Keyboard handler
  useEffect(()=>{
    const h=(e)=>{
      if(result) return;
      if(q.type==="choice"){
        const n=parseInt(e.key);
        if(n>=1&&n<=q.options.length) handleSelect(q.options[n-1].value);
      }
      if(q.type==="slider"&&["1","2","3","4","5"].includes(e.key)) handleSelect(Number(e.key));
      if(q.type==="binary"){
        if(e.key==="1") handleSelect("left");
        if(e.key==="2") handleSelect("right");
      }
      if(e.key==="ArrowLeft"&&cur>0) goBack();
    };
    window.addEventListener("keydown",h);
    return()=>window.removeEventListener("keydown",h);
  },[cur,q,result]);

  function handleSelect(val){
    const na={...answers,[q.id]:val};
    setAnswers(na);
    if(cur+1<questions.length){
      setPhase("out");
      setTimeout(()=>{setCur(c=>c+1);setPhase("in");},220);
    } else {
      const s=getAllScores(na);
      const top=Object.entries(s).sort((a,b)=>b[1]-a[1])[0][0];
      setScores(s);
      setResult(top);
    }
  }

  function goBack(){
    if(cur===0) return;
    setPhase("out");
    setTimeout(()=>{setCur(c=>c-1);setPhase("in");},220);
  }

  function restart(){
    setPhase("out");
    setTimeout(()=>{
      setCur(0);setAnswers({});setScores(null);setResult(null);setTab("result");setPhase("in");
    },160);
  }

  const team=result?teams[result]:null;
  const sortedOthers=scores
    ?Object.entries(scores).sort((a,b)=>b[1]-a[1]).filter(([k])=>k!==result)
    :[];
  const maxScore=scores?Math.max(...Object.values(scores)):1;

  // Phase label colours
  const phaseColors={
    "Who are you?":"#4a4a6a",
    "Where do you belong?":"#3a5a4a",
    "How do you win?":"#5a3a3a",
    "How do you feel it?":"#4a3a5a",
    "The fine print":"#5a4a2a",
    "What it comes down to":"#3a4a5a",
  };
  const phaseTextColors={
    "Who are you?":          "#9a9acc",
    "Where do you belong?":  "#7abf9a",
    "How do you win?":       "#cc8a8a",
    "How do you feel it?":   "#aa8acc",
    "The fine print":        "#ccaa6a",
    "What it comes down to": "#7aaacc",
  };
  const phaseShortNames={
    "Who are you?":          "Identity",
    "Where do you belong?":  "Place",
    "How do you win?":       "Mentality",
    "How do you feel it?":   "Passion",
    "The fine print":        "Details",
    "What it comes down to": "The crunch",
  };

  // Live scores for debug panel — computed from current answers
  const liveScores = getAllScores(answers);
  const liveMax = Math.max(...Object.values(liveScores), 1);
  const liveSorted = Object.entries(liveScores).sort((a,b)=>b[1]-a[1]);
  // What did the last answer contribute?
  const lastQ = cur > 0 ? questions[cur-1] : questions[cur];
  const lastAns = answers[lastQ?.id];
  const lastContrib = lastQ && lastAns ? (scoring[lastQ.id]?.[lastAns] || {}) : {};

  // ── Squad tab state ────────────────────────────────────────────────────────
  const [squadData, setSquadData] = useState(null);
  const [squadLoading, setSquadLoading] = useState(false);
  const [squadError, setSquadError] = useState(null);
  const [squadFetched, setSquadFetched] = useState(null);

  useEffect(()=>{
    if(tab==="squad" && result && squadFetched!==result){
      setSquadLoading(true);
      setSquadData(null);
      setSquadError(null);
      setSquadFetched(result);
      const teamName = teams[result]?.name || result;
      fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json","anthropic-version":"2023-06-01","x-api-key":import.meta.env.VITE_ANTHROPIC_KEY||""},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:2000,
          tools:[{"type":"web_search_20250305","name":"web_search"}],
          system:'You are a football data assistant. Use web search to find the current squad. After searching, return ONLY a valid JSON object as your final text response. No markdown fences, no preamble. Format: {"manager":"Full Name","formation":"4-3-3","players":[{"name":"Full Name","position":"GK","note":"brief role note"}],"source_note":"Verified via web search"} Positions: GK, DEF, MID, FWD only. Return 11-13 players.',
          messages:[{role:"user",content:`Search for and return the current ${teamName} first team squad for the 2025/26 season. Include the manager, formation, and 11-13 key players with positions.`}]
        })
      })
      .then(r=>r.json())
      .then(async data=>{
        if(data.error) throw new Error(data.error.message||"API error");
        // If model used web search, we need to continue the conversation
        const stopReason = data.stop_reason;
        if(stopReason==="tool_use"){
          // Extract tool use blocks and results, then send follow-up
          const toolUseBlocks = (data.content||[]).filter(c=>c.type==="tool_use");
          const toolResults = toolUseBlocks.map(b=>({type:"tool_result",tool_use_id:b.id,content:"Search completed."}));
          const followUp = await fetch("https://api.anthropic.com/v1/messages",{
            method:"POST",
            headers:{"Content-Type":"application/json","anthropic-version":"2023-06-01","x-api-key":import.meta.env.VITE_ANTHROPIC_KEY||""},
            body:JSON.stringify({
              model:"claude-sonnet-4-20250514",
              max_tokens:1000,
              tools:[{"type":"web_search_20250305","name":"web_search"}],
              system:'Return ONLY a valid JSON object with this format: {"manager":"Full Name","formation":"4-3-3","players":[{"name":"Full Name","position":"GK","note":"brief role note"}],"source_note":"from web search"} Positions: GK, DEF, MID, FWD. Return 11-13 players. No markdown, no explanation.',
              messages:[
                {role:"user",content:`Search for and return the current first team squad for the 2025/26 season. Include the manager, formation, and 11-13 key players with positions.`},
                {role:"assistant",content:data.content},
                {role:"user",content:[...toolResults,{type:"text",text:"Now return the JSON object with the squad data you found."}]},
              ]
            })
          }).then(r=>r.json());
          const text2 = (followUp.content||[]).filter(c=>c.type==="text").map(c=>c.text).join("");
          const match2 = text2.match(/\{[\s\S]*\}/);
          if(!match2) throw new Error("No JSON in follow-up");
          setSquadData(JSON.parse(match2[0]));
        } else {
          const blocks = (data.content||[]).filter(c=>c.type==="text");
          if(!blocks.length) throw new Error("No text response");
          const raw = blocks.map(c=>c.text).join("");
          const jsonMatch = raw.match(/\{[\s\S]*\}/);
          if(!jsonMatch) throw new Error("No JSON in response");
          setSquadData(JSON.parse(jsonMatch[0]));
        }
        setSquadLoading(false);
      })
      .catch(err=>{
        console.error("Squad fetch error:", err);
        setSquadError("Could not load squad data. Try again later.");
        setSquadLoading(false);
      });
    }
  },[tab, result]);

  // ── Squad pitch data (pre-computed, no IIFE in JSX) ───────────────────────
  const squadPitchData = useMemo(()=>{
    if(!squadData) return null;
    const fRows = (squadData.formation||"4-3-3").split("-").map(Number).filter(Boolean);
    const gk = (squadData.players||[]).filter(p=>p.position==="GK");
    const outfield = (squadData.players||[]).filter(p=>p.position!=="GK");
    const rows = [];
    let pidx = 0;
    for(let i=0;i<fRows.length;i++){
      rows.push(outfield.slice(pidx, pidx+fRows[i]));
      pidx+=fRows[i];
    }
    return { allRows:[gk,...rows], rowCount:[gk,...rows].length };
  },[squadData]);

    // ── Pre-compute tab data (no logic inside JSX) ───────────────────────────
  const statsData = result && vitalStats[result] ? [
    ["Nickname",    vitalStats[result].nickname],
    ["Founded",     String(vitalStats[result].founded)],
    ["Ground",      vitalStats[result].ground],
    ["City",        vitalStats[result].city],
    ["Capacity",    vitalStats[result].capacity],
    ["Kit colours", vitalStats[result].colors],
    ["Kit maker",   vitalStats[result].kitMaker],
    ["Last title",  vitalStats[result].lastTitle],
  ].filter(([,v])=>v!=null) : [];

  const ng = result ? (nearlyGot[result]||{}) : {};
  const nearClubs = sortedOthers.slice(0,4).map(([k])=>k).filter(k=>teams[k]);

  return(
    <div ref={containerRef} style={{
      minHeight:"100vh",
      background:"#16161e",
      display:"flex",alignItems:"center",justifyContent:"center",
      padding:"52px 20px",
      fontFamily:"'Georgia','Times New Roman',serif",
      position:"relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
        @keyframes slideIn  {from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideOut {from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-8px)}}
        @keyframes popIn    {0%{opacity:0;transform:scale(.94)}60%{transform:scale(1.01)}100%{opacity:1;transform:scale(1)}}
        @keyframes fadeIn   {from{opacity:0}to{opacity:1}}
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#16161e}
        ::-webkit-scrollbar-thumb{background:#1e1e2e;border-radius:2px}
      `}</style>

      {/* Ambient glow — changes with phase */}
      <div style={{
        position:"fixed",inset:0,zIndex:0,pointerEvents:"none",
        background:`radial-gradient(ellipse at 30% 40%, ${result?teams[result].color+"08":"#ffffff08"} 0%, transparent 65%)`,
        transition:"background 1s ease",
      }}/>

      {/* Progress bar */}
      {!result&&(
        <div style={{position:"fixed",top:0,left:0,right:0,height:1,background:"#1e1e2e",zIndex:99}}>
          <div style={{height:"100%",width:`${pct}%`,background:"#5a5a88",transition:"width .3s ease"}}/>
        </div>
      )}

      <div style={{
        width:"100%",maxWidth:560,position:"relative",zIndex:1,
        animation:`${phase==="out"?"slideOut":"slideIn"} .22s ease forwards`,
      }}>

        {/* ── QUIZ ── */}
        {!result&&(
          <>
            {/* Nav row */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:28,flexWrap:"nowrap",gap:8}}>
              <div style={{display:"flex",gap:10,alignItems:"center",flexShrink:1}}>
                <button onClick={goBack} disabled={cur===0}
                  style={{
                    background:"none",border:"none",padding:0,
                    color:cur===0?"#333344":"#9898b8",
                    fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",
                    fontFamily:"'DM Mono',monospace",cursor:cur===0?"default":"pointer",
                    transition:"color .15s",
                  }}
                  onMouseEnter={e=>cur>0&&(e.currentTarget.style.color="#ccc")}
                  onMouseLeave={e=>e.currentTarget.style.color=cur===0?"#222232":"#4a4a6a"}
                >← back</button>
                <button onClick={()=>setDebugOpen(o=>!o)}
                  title="Toggle debug scores"
                  style={{
                    background:debugOpen?"#1a1a2e":"none",
                    border:`1px solid ${debugOpen?"#3a3a5a":"#222230"}`,
                    borderRadius:3,padding:"2px 7px",
                    color:debugOpen?"#6a6a9a":"#555",
                    fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",
                    fontFamily:"'DM Mono',monospace",cursor:"pointer",transition:"all .12s",
                  }}
                >debug</button>
              </div>

              <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0,minWidth:0}}>
                {/* Phase pill */}
                <span style={{
                  fontSize:11,color:phaseTextColors[currentPhase]||"#aaa",
                  letterSpacing:"0.2em",textTransform:"uppercase",
                  fontFamily:"'DM Mono',monospace",
                  border:`1px solid ${phaseColors[currentPhase]||"#333"}`,
                  background:`${phaseColors[currentPhase]||"#333"}22`,
                  padding:"4px 10px",borderRadius:20,fontWeight:500,
                  maxWidth:"clamp(100px,35vw,180px)",overflow:"hidden",
                  textOverflow:"ellipsis",whiteSpace:"nowrap",
                }}>
                  {phaseShortNames[currentPhase]||currentPhase}
                </span>
                <span style={{fontSize:10,color:"#aaa",letterSpacing:"0.15em",fontFamily:"'DM Mono',monospace"}}>
                  {cur+1}/{questions.length}
                </span>
              </div>
            </div>

            {/* Question */}
            <h2 style={{
              fontFamily:"'Cormorant Garamond',Georgia,serif",
              fontSize:"clamp(22px,5vw,30px)",
              fontWeight:300,color:"#d8d4ce",
              lineHeight:1.35,margin:"0 0 28px",
              letterSpacing:".01em",
            }}>{q.question}</h2>

            {q.type==="choice"&&<ChoiceQ q={q} onSelect={handleSelect}/>}
            {q.type==="binary"&&<BinaryQ q={q} onSelect={handleSelect}/>}
            {q.type==="slider"&&<SliderQ q={q} onSelect={handleSelect}/>}


            {/* ── DEBUG PANEL ── */}
            {debugOpen&&(
              <div style={{
                marginTop:24,background:"#05050e",
                border:"1px solid #1a1a2e",borderRadius:8,overflow:"hidden",
                fontFamily:"'DM Mono',monospace",
              }}>
                {/* Header */}
                <div style={{
                  display:"flex",justifyContent:"space-between",alignItems:"center",
                  padding:"10px 14px",borderBottom:"1px solid #0f0f1a",
                  background:"#141420",
                }}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <span style={{fontSize:11,color:"#4a4a7a",letterSpacing:"0.2em",textTransform:"uppercase"}}>
                      live score tracker
                    </span>
                    <span style={{fontSize:11,color:"#aaa",letterSpacing:"0.1em"}}>
                      {cur} of {questions.length} answered
                    </span>
                  </div>
                  <button onClick={()=>setDebugExpanded(e=>!e)}
                    style={{background:"none",border:"none",color:"#3a3a5a",fontSize:11,cursor:"pointer",
                      fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em",textTransform:"uppercase"}}
                  >{debugExpanded?"collapse":"expand all"}</button>
                </div>

                {/* Last answer contribution */}
                {Object.keys(lastContrib).length>0&&(
                  <div style={{padding:"8px 14px",borderBottom:"1px solid #1e1e2e",background:"#060612"}}>
                    <div style={{fontSize:9,color:"#3a3a5a",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:5}}>
                      Q{cur} just gave points to:
                    </div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                      {Object.entries(lastContrib).sort((a,b)=>b[1]-a[1]).map(([club,pts])=>(
                        <span key={club} style={{
                          fontSize:10,
                          color: pts>=3?"#e8e4de": pts===2?"#888":"#555",
                          background: pts>=3?"#1a1a2e":"#0a0a12",
                          border:`1px solid ${pts>=3?"#2a2a4a":"#141422"}`,
                          borderRadius:3,padding:"2px 8px",
                        }}>
                          {teams[club]?.name} <span style={{color:pts>=3?"#6a6aaa":"#333"}}>+{pts}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Running totals */}
                <div style={{padding:"10px 14px",maxHeight:debugExpanded?"none":"200px",overflow:"hidden"}}>
                  <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:8}}>
                    running totals
                  </div>
                  {liveSorted.map(([key,score],i)=>{
                    const pct=Math.round((score/liveMax)*100)||0;
                    const t=teams[key];
                    const isLeading=i===0&&score>0;
                    return(
                      <div key={key} style={{marginBottom:5}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
                          <span style={{
                            fontSize:10,
                            color:isLeading?"#e8e4de":score>0?"#555":"#555",
                            fontWeight:isLeading?"500":"normal",
                          }}>
                            {isLeading?"▶ ":""}{t?.name}
                          </span>
                          <span style={{fontSize:10,color:isLeading?"#aaa":"#666"}}>
                            {score} pts {score>0&&`(${pct}%)`}
                          </span>
                        </div>
                        <div style={{height:2,background:"#0a0a12",borderRadius:1,overflow:"hidden"}}>
                          <div style={{
                            height:"100%",
                            width:`${pct}%`,
                            background:isLeading?t?.color:"#1e1e2e",
                            borderRadius:1,
                            transition:"width .3s ease",
                          }}/>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Answer log */}
                {debugExpanded&&Object.keys(answers).length>0&&(
                  <div style={{borderTop:"1px solid #0a0a14",padding:"10px 14px"}}>
                    <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:8}}>answer log</div>
                    {Object.entries(answers).map(([qId,ans])=>{
                      const qi=questions.find(q=>q.id===qId);
                      const contrib=scoring[qId]?.[ans]||{};
                      const label = qi?.type==="binary"
                        ? (ans==="left"?qi.left:qi.right)
                        : qi?.type==="slider"
                        ? `Scale ${ans}/5`
                        : qi?.options?.find(o=>o.value===ans)?.label;
                      return(
                        <div key={qId} style={{marginBottom:8,paddingBottom:8,borderBottom:"1px solid #1a1a28"}}>
                          <div style={{fontSize:11,color:"#aaa",marginBottom:2}}>
                            {qId.toUpperCase()}: <span style={{color:"#aaa"}}>{label?.slice(0,60)}{label?.length>60?"…":""}</span>
                          </div>
                          <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                            {Object.entries(contrib).sort((a,b)=>b[1]-a[1]).map(([club,pts])=>(
                              <span key={club} style={{fontSize:9,color:pts>=3?"#8888cc":"#444",
                                background:"#0a0a14",borderRadius:2,padding:"1px 6px"}}>
                                {teams[club]?.name}+{pts}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* ── RESULT ── */}
        {result&&(
          <div style={{animation:"popIn .45s cubic-bezier(.2,.8,.3,1) both",background:`linear-gradient(160deg,${team.color}06 0%,transparent 40%)`,borderRadius:12,padding:"4px"}}>

            {/* Club header */}
            <div style={{marginBottom:20,paddingBottom:20,borderBottom:"1px solid #0f0f1a"}}>
              <div style={{fontSize:11,color:"#888",letterSpacing:"0.4em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:16,textAlign:"center"}}>your club</div>
              <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:12}}>
                {/* Badge - emoji default, img replaces on successful load */}
                <BadgeImg url={badgeUrls[result]} emoji={team.emoji} size={60}/>
                {/* Name + tagline + archetype inline */}
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",marginBottom:4}}>
                    <h1 style={{fontFamily:"'Cormorant Garamond',Georgia,serif",margin:0,fontSize:"clamp(26px,6vw,38px)",fontWeight:300,color:"#e8e4de",letterSpacing:"-.02em",lineHeight:1}}>{team.name}</h1>
                    <div style={{display:"inline-flex",alignItems:"center",gap:6,background:`${team.color}15`,border:`1px solid ${team.color}30`,borderRadius:4,padding:"3px 10px",flexShrink:0}}>
                      <span style={{fontSize:11,color:"#aaa",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace"}}>archetype</span>
                      <span style={{fontSize:11,color:(teamTextColors[result]||team.color),fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>{archetypes[result]}</span>
                    </div>
                  </div>
                  <p style={{margin:0,fontSize:13,color:(teamTextColors[result]||team.color),fontStyle:"italic",letterSpacing:".01em",opacity:0.9}}>{team.tagline}</p>
                </div>
              </div>
            </div>

            {/* Tabs — scrollable row */}
            <div style={{position:"relative",marginBottom:22}}>
              <div style={{display:"flex",gap:0,marginBottom:0,borderBottom:"1px solid #0f0f1a",overflowX:"auto",scrollbarWidth:"none",WebkitOverflowScrolling:"touch",msOverflowStyle:"none"}}>
              {[["result","Match"],["analysis","Why you?"],["stats","Club Vitals"],["squad","Squad"],["nearly","Almost you"]].map(([id,label])=>(
                <button key={id} onClick={()=>setTab(id)}
                  style={{
                    background:"none",border:"none",
                    borderBottom:`2px solid ${tab===id?team.color:"transparent"}`,
                    padding:"8px 14px 10px",marginBottom:-1,whiteSpace:"nowrap",
                    color:tab===id?"#e8e4de":"#666",
                    fontSize:11,letterSpacing:"0.14em",textTransform:"uppercase",
                    fontFamily:"'DM Mono',monospace",cursor:"pointer",
                    transition:"all .15s ease",flexShrink:0,
                    fontWeight:tab===id?"500":"400",
                  }}
                >{label}</button>
              ))}
            </div>
              {/* Right-edge fade — indicates more tabs off-screen */}
              <div style={{
                position:"absolute",top:0,right:0,width:52,height:"calc(100% - 1px)",
                background:"linear-gradient(to right, transparent, #16161e)",
                pointerEvents:"none",
              }}/>
            </div>

            {/* ── Tab: Match ── */}
            {tab==="result"&&(
              <div style={{animation:"fadeIn .3s ease"}}>
                <div style={{width:28,height:2,background:team.color,marginBottom:18,borderRadius:2}}/>
                <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:"clamp(17px,3.5vw,19px)",fontWeight:300,color:"#d8d4ce",lineHeight:1.85,margin:"0 0 20px",fontStyle:"italic"}}>{team.desc}</p>
                <p style={{fontSize:12,color:"#bbb",lineHeight:1.75,margin:"0 0 24px",borderLeft:`1px solid #252535`,paddingLeft:14,fontFamily:"'DM Mono',monospace"}}>{team.note}</p>
                {/* Share card */}
                <div style={{background:"#141420",border:"1px solid #222230",borderRadius:8,padding:"16px 18px",marginBottom:20,marginTop:28,borderTop:`2px solid ${team.color}20`}}>
                  <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:10}}>Share your result</div>
                  <div style={{
                    background:`linear-gradient(135deg,${team.color}25,#0c0c18)`,
                    border:`1px solid ${team.color}22`,borderRadius:6,
                    padding:"14px 16px",marginBottom:12,
                    fontFamily:"'Cormorant Garamond',Georgia,serif",
                  }}>
                    <div style={{fontSize:11,color:"#888",marginBottom:10,fontFamily:"'DM Mono',monospace",letterSpacing:"0.15em",textTransform:"uppercase"}}>My Premier League club is</div>
                    <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
                      <BadgeImg url={badgeUrls[result]} emoji={team.emoji} size={44}/>
                      <div>
                        <div style={{fontSize:24,color:"#ffffff",fontWeight:300,letterSpacing:"-.01em",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>{team.name}</div>
                        <div style={{fontSize:12,color:(teamTextColors[result]||team.color),fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>{archetypes[result]}</div>
                      </div>
                    </div>
                    {archetypeDesc[result]&&(
                      <p style={{margin:0,fontSize:13,color:"#ccc",lineHeight:1.65,fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic",borderTop:`1px solid ${team.color}20`,paddingTop:8,marginTop:4}}>
                        {archetypeDesc[result]}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={()=>{
                      const text=`My Premier League club is ${team.name} (${archetypes[result]}). ${archetypeDesc[result]||team.tagline} Find yours:`;
                      navigator.clipboard?.writeText(text).then(()=>alert("Copied to clipboard!")).catch(()=>alert("Copy: "+text));
                    }}
                    style={{
                      background:`${team.color}15`,border:`1px solid ${team.color}30`,borderRadius:4,
                      padding:"8px 16px",color:(teamTextColors[result]||team.color),fontSize:10,letterSpacing:"0.15em",
                      textTransform:"uppercase",fontFamily:"'DM Mono',monospace",cursor:"pointer",
                      transition:"all .15s",
                    }}
                    onMouseEnter={e=>{e.currentTarget.style.background=`${team.color}25`;}}
                    onMouseLeave={e=>{e.currentTarget.style.background=`${team.color}15`;}}
                  >↗ Copy result</button>
                </div>
                <a href={team.kit} target="_blank" rel="noopener noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:10,background:`${team.color}22`,border:`1px solid ${team.color}55`,borderRadius:5,padding:"12px 20px",color:"#e8e4de",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"all .15s ease",fontWeight:500}}>
                  <span style={{color:(teamTextColors[result]||team.color)}}>↗</span> Buy the {team.name} kit
                </a>
              </div>
            )}

            {/* ── Tab: Analysis ── */}
            {tab==="analysis"&&(
              <div style={{animation:"fadeIn .3s ease"}}>
                <div style={{marginBottom:24}}>
                  <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:14}}>Why this match</div>
                  {team.why.map((line,i)=>(
                    <div key={i} style={{display:"flex",gap:12,marginBottom:14,alignItems:"flex-start"}}>
                      <span style={{color:(teamTextColors[result]||team.color),fontFamily:"'DM Mono',monospace",fontSize:10,marginTop:4,flexShrink:0}}>→</span>
                      <p style={{margin:0,fontSize:"clamp(14px,3vw,15px)",color:"#c8c4be",lineHeight:1.8}}>{line}</p>
                    </div>
                  ))}
                </div>
                <div style={{borderTop:"1px solid #0f0f1a",paddingTop:20}}>
                  <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:14}}>Personality dimensions</div>
                  <DimBars teamKey={result} color={team.color}/>
                </div>
              </div>
            )}

            {/* ── Tab: Club Stats ── */}
            {tab==="stats"&&(
              <div style={{animation:"fadeIn .3s ease"}}>
                <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:18}}>Club Info</div>
                {statsData.length>0?(
                  <>
                    <div style={{border:"1px solid #1e1e2e",borderRadius:8,overflow:"hidden",marginBottom:20}}>
                      <div style={{height:3,background:team.color}}/>
                      {statsData.map(([label,val],i)=>(
                        <div key={label} style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center",
                          padding:"11px 16px",
                          borderBottom:i<statsData.length-1?"1px solid #0a0a14":"none",
                          background:i%2===0?"transparent":"#111120",
                        }}>
                          <span style={{fontSize:11,color:"#aaa",fontFamily:"'DM Mono',monospace",letterSpacing:"0.08em",textTransform:"uppercase"}}>{label}</span>
                          <span style={{fontSize:13,color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif",textAlign:"right",maxWidth:"55%"}}>{val}</span>
                        </div>
                      ))}
                    </div>
                    {/* All-time greats */}
                    {greats[result]&&(
                      <div style={{marginBottom:20}}>
                        <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:12,marginTop:20}}>All-time greats</div>
                        {greats[result].map((g,i)=>(
                          <div key={i} style={{padding:"10px 0",borderBottom:"1px solid #1e1e2e"}}>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                              <span style={{fontSize:15,color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400}}>{g.name}</span>
                              <span style={{fontSize:10,color:(teamTextColors[result]||team.color),fontFamily:"'DM Mono',monospace"}}>{g.years}</span>
                            </div>
                            <p style={{margin:0,fontSize:13,color:"#bbb",lineHeight:1.65,fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>{g.note}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <a href={team.kit} target="_blank" rel="noopener noreferrer"
                      style={{display:"inline-flex",alignItems:"center",gap:10,background:`${team.color}12`,border:`1px solid ${team.color}30`,borderRadius:5,padding:"11px 18px",color:(teamTextColors[result]||team.color),fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",textDecoration:"none",transition:"all .15s ease"}}
                      onMouseEnter={e=>{e.currentTarget.style.background=`${team.color}20`;e.currentTarget.style.borderColor=`${team.color}55`;}}
                      onMouseLeave={e=>{e.currentTarget.style.background=`${team.color}12`;e.currentTarget.style.borderColor=`${team.color}30`;}}
                    >↗ Shop official kits</a>
                  </>
                ):(
                  <p style={{fontSize:13,color:"#aaa",fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>Stats not available for this club yet.</p>
                )}
              </div>
            )}

                        
            {/* ── Tab: Squad ── */}
            {tab==="squad"&&(
              <div style={{animation:"fadeIn .3s ease"}}>
                <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:18}}>Current squad</div>
                {squadLoading&&(
                  <div style={{padding:"40px 0",textAlign:"center"}}>
                    <div style={{fontSize:11,color:"#aaa",fontFamily:"'DM Mono',monospace",letterSpacing:"0.15em"}}>Fetching live squad data...</div>
                  </div>
                )}
                {squadError&&(
                  <p style={{fontSize:13,color:"#ccc",fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>{squadError}</p>
                )}
                {squadData&&squadPitchData&&(
                  <>
                    <div style={{display:"flex",gap:12,marginBottom:16,flexWrap:"wrap"}}>
                      <div style={{background:`${team.color}12`,border:`1px solid ${team.color}25`,borderRadius:5,padding:"8px 14px"}}>
                        <div style={{fontSize:11,color:"#888",letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:3}}>Manager</div>
                        <div style={{fontSize:15,color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>{squadData.manager}</div>
                      </div>
                      <div style={{background:`${team.color}12`,border:`1px solid ${team.color}25`,borderRadius:5,padding:"8px 14px"}}>
                        <div style={{fontSize:11,color:"#888",letterSpacing:"0.15em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:3}}>Formation</div>
                        <div style={{fontSize:15,color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>{squadData.formation}</div>
                      </div>
                    </div>
                    <div style={{width:"100%",maxWidth:520,margin:"0 auto 20px",borderRadius:8,overflow:"hidden"}}>
                      <svg viewBox="0 0 520 360" style={{width:"100%",display:"block"}}>
                        <rect width={520} height={360} fill="#0a1a0a"/>
                        {[0,1,2,3,4,5,6,7].map(i=>(
                          <rect key={i} x={0} y={i*45} width={520} height={22} fill="#0d1f0d" opacity={0.6}/>
                        ))}
                        <rect x={16} y={10} width={488} height={340} fill="none" stroke="#ffffff18" strokeWidth={1.5}/>
                        <line x1={260} y1={10} x2={260} y2={350} stroke="#ffffff12" strokeWidth={1}/>
                        <circle cx={260} cy={180} r={44} fill="none" stroke="#ffffff12" strokeWidth={1}/>
                        <circle cx={260} cy={180} r={2} fill="#ffffff25"/>
                        <rect x={200} y={10} width={120} height={50} fill="none" stroke="#ffffff10" strokeWidth={1}/>
                        <rect x={200} y={300} width={120} height={50} fill="none" stroke="#ffffff10" strokeWidth={1}/>
                        {squadPitchData.allRows.map((row,rowIdx)=>{
                          const y=308-(rowIdx*(272/Math.max(squadPitchData.rowCount,1)));
                          return row.map((player,colIdx)=>{
                            const x=row.length===1?260:62+colIdx*(396/Math.max(row.length-1,1));
                            // Smart name: prefer last name, fallback to first 8 chars of full name
                            const parts=(player.name||"").trim().split(" ");
                            const displayName = parts.length>1
                              ? parts[parts.length-1].slice(0,8)
                              : parts[0].slice(0,8);
                            return(
                              <g key={`r${rowIdx}c${colIdx}`}>
                                <circle cx={x} cy={y} r={18} fill={team.color} opacity={0.9}/>
                                <circle cx={x} cy={y} r={18} fill="none" stroke="#ffffff30" strokeWidth={1.5}/>
                                <text x={x} y={y+4} textAnchor="middle" fontSize={9} fill="#ffffff" fontFamily="sans-serif" fontWeight="700">{displayName}</text>
                                <text x={x} y={y+24} textAnchor="middle" fontSize={7} fill="#ffffffaa" fontFamily="monospace">{player.position}</text>
                              </g>
                            );
                          });
                        })}
                      </svg>
                    </div>
                    {["GK","DEF","MID","FWD"].map(pos=>{
                      const group=(squadData.players||[]).filter(p=>p.position===pos);
                      if(!group.length) return null;
                      const posLabels={GK:"Goalkeeper",DEF:"Defenders",MID:"Midfielders",FWD:"Forwards"};
                      return(
                        <div key={pos} style={{marginBottom:12}}>
                          <div style={{fontSize:11,color:(teamTextColors[result]||team.color),letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:6,opacity:0.8}}>{posLabels[pos]}</div>
                          {group.map((p,i)=>(
                            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"6px 0",borderBottom:"1px solid #141422"}}>
                              <div style={{fontSize:14,color:"#e8e4de",fontFamily:"'Cormorant Garamond',Georgia,serif",minWidth:130}}>{p.name}</div>
                              <div style={{fontSize:11,color:"#bbb",fontFamily:"'DM Mono',monospace",textAlign:"right",maxWidth:"52%",lineHeight:1.5}}>{p.note}</div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                    {squadData.source_note&&(
                      <p style={{fontSize:10,color:"#aaa",fontFamily:"'DM Mono',monospace",marginTop:12,lineHeight:1.5}}>{squadData.source_note}</p>
                    )}
                  </>
                )}
              </div>
            )}

            {/* ── Tab: Nearly Got ── */}
            {tab==="nearly"&&(
              <div style={{animation:"fadeIn .3s ease"}}>
                <div style={{fontSize:11,color:"#aaa",letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",marginBottom:6}}>Almost you...</div>
                <p style={{fontSize:12,color:"#aaa",margin:"0 0 20px",fontFamily:"'DM Mono',monospace",lineHeight:1.6}}>
                  These clubs scored closest to you. Here's what you share — and what separates you.
                </p>
                {nearClubs.length===0&&(
                  <p style={{fontSize:13,color:"#ccc",fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>
                    Your match was clear, no close runners-up.
                  </p>
                )}
                {nearClubs.map((k)=>{
                  const nt=teams[k];
                  if(!nt) return null;
                  const rawPct=maxScore>0?Math.round(((scores||{})[k]||0)/maxScore*100):0;
                  return(
                    <div key={k} style={{marginBottom:20,border:"1px solid #1e1e2e",borderRadius:8,overflow:"hidden"}}>
                      <div style={{height:2,background:nt.color}}/>
                      <div style={{padding:"14px 16px"}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                          <div style={{display:"flex",alignItems:"center",gap:10}}>
                            <BadgeImg url={badgeUrls[k]} emoji={nt.emoji} size={36}/>
                            <div>
                              <div style={{fontSize:15,color:"#ddd",fontFamily:"'Cormorant Garamond',Georgia,serif",fontWeight:400}}>{nt.name}</div>
                              <div style={{fontSize:10,color:(teamTextColors[k]||nt.color),fontStyle:"italic",fontFamily:"'Cormorant Garamond',Georgia,serif"}}>{archetypes[k]||""}</div>
                            </div>
                          </div>
                          <div style={{textAlign:"right"}}>
                            <div style={{fontSize:18,color:"#ddd",fontFamily:"'DM Mono',monospace",fontWeight:300}}>{rawPct}%</div>
                            <div style={{fontSize:11,color:"#aaa",fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em"}}>of your score</div>
                          </div>
                        </div>
                        <div style={{height:2,background:"#141420",borderRadius:2,marginBottom:12,overflow:"hidden"}}>
                          <div style={{height:"100%",width:`${rawPct}%`,background:nt.color,borderRadius:2}}/>
                        </div>
                        {ng[k]?(
                          <p style={{margin:0,fontSize:"clamp(13px,3vw,14px)",color:"#ccc",lineHeight:1.8,fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>
                            {ng[k]}
                          </p>
                        ):(
                          <p style={{margin:0,fontSize:13,color:"#ccc",lineHeight:1.7,fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>
                            {nt.tagline}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            
            <div style={{marginTop:32,textAlign:"center"}}>
              <button onClick={restart}
                style={{background:"none",border:"1px solid #444",borderRadius:5,padding:"9px 22px",color:"#bbb",fontSize:11,letterSpacing:"0.25em",textTransform:"uppercase",fontFamily:"'DM Mono',monospace",cursor:"pointer",transition:"all .15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#888";e.currentTarget.style.color="#aaa";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#252535";e.currentTarget.style.color="#666";}}
              >retake</button>
              <div style={{marginTop:20,paddingTop:20,borderTop:"1px solid #141422"}}>
                <a href="https://buymeacoffee.com/yourname" target="_blank" rel="noopener noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:8,color:"#aaa",fontSize:11,fontFamily:"'DM Mono',monospace",textDecoration:"none",letterSpacing:"0.05em",transition:"color .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.color="#aaa"}
                  onMouseLeave={e=>e.currentTarget.style.color="#666"}
                >
                  <span style={{fontSize:15}}>☕</span> If this nailed your club, buy me a coffee
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
