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
      "Feeling something quietly has never made sense to you. If it matters, it shows.",
      "Belonging to something vast is the pull, and not for the status of it. It is the sheer scale of the shared feeling.",
      "The history is not weight you carry. It is the reason tonight counts for anything.",
    ],
    note:"18 league titles. 6 European Cups. You'll Never Walk Alone started as a show tune. It became a religion. That transformation is very Liverpool.",
    kit:"https://store.liverpoolfc.com",
  },
  MC: {
    "code3": "MCI", "kitType": "solid", "secondaryColor": null,
    name:"Manchester City",   emoji:"🔵", color:"#6CABDD",
    tagline:"You watched a team hit 100 points and asked where the other 14 went.",
    desc:"You expect things done as well as they can be done, repeatedly, and you don't apologise for the standard. But the part outsiders miss is that you were here long before any of it: the lean years, the lower divisions, the old ground that was half falling down and full anyway. The excellence is recent. The loyalty isn't. You hold both at once, a demand for control on the pitch and a stubborn, local, working-class faith that long predates the trophies. People who only see the spending have never understood the half of it.",
    why:[
      "Preparation beats inspiration in your book, and you would rather do the excellent thing repeatedly than the brilliant thing once.",
      "You were here for the lean years and the lower divisions. That part does not show up in anything written about this club now.",
      "The roots are working-class and they never moved. This is still the club of the people actually from here.",
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
      "How it gets done is not separate from whether it got done. You have never been able to split those two.",
      "You care about the quality of the thing and not only the scoreline, which is why the faith survives the near-misses. The approach was sound either way.",
    ],
    note:"The Invincibles. 2003/04. An entire Premier League season without a loss. It gets mentioned daily. It was earned.",
    kit:"https://arsenaldirect.arsenal.com",
  },
  EV: {
    "code3": "EVE", "kitType": "solid", "secondaryColor": null,
    name:"Everton",           emoji:"🔵", color:"#003399",
    tagline:"You loved Goodison most in the seasons it gave you least.",
    desc:"The people you love most are the ones you've stuck with through the hard patches. Not because you couldn't leave, because that's not what loyalty means to you. You absorb things quietly. You don't perform your suffering for an audience. You've been waiting a long time for something and you've made a kind of peace with the waiting that isn't acceptance, exactly, more like stubbornness dressed up as patience. Goodison has held this feeling for over a century. You understand it completely.",
    why:[
      "You stay. There is not much more to say about it than that, and there does not need to be.",
      "The suffering goes inward. You do not broadcast it, you just carry it, which is very Evertonian.",
      "Calling it optimism would be too soft. It is something more stubborn, and it has held through droughts that ended other people's patience.",
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
      "The local, place-rooted kind of belonging is the one that moves you. Not the global-brand version of it.",
      "Things happen together or they barely count. Feeling it alone has never really worked for you.",
      "Two decades of the Ashley years sit underneath the joy now. It is real, and it lands differently because of what came first.",
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
      "East London, the Boleyn Ground, what stood there before. The brand was never the club and you have never once confused the two.",
      "You carry the love and the grievance at the same time, and you do not see why you should have to pick.",
      "Plenty of decisions have been made that you disagreed with. Leaving still never seriously crossed your mind.",
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
      "Nobody handed this to you in the form of trophies. You built it, week after week, out of sustained effort.",
      "You have no use for mythology. The noise you make is the story.",
      "When it gets hard you get louder. Retreating has never been in the repertoire.",
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
      "The past is not background for you. It is the measure everything current gets held against.",
      "This is a particular kind of ache: not wanting something you have never had, but knowing exactly what it felt like and watching it not happen.",
      "United belongs to Manchester and to half the planet at once. You have made peace with that, mostly.",
    ],
    note:"20 league titles. 3 European Cups. The Fergie era produced something that may not be repeated. Current situation pending.",
    kit:"https://store.manutd.com",
  },
  SP: {
    "code3": "TOT", "kitType": "solid", "secondaryColor": null,
    name:"Tottenham Hotspur", emoji:"⚪", color:"#132257",
    tagline:"You know exactly what Spursy means. You believe anyway.",
    desc:"You've developed a very specific psychological skill: you believe completely in something while also knowing, analytically, that the odds are against you, the history is against you, and you've been here before. This isn't delusion, it's a kind of sophisticated resilience that most people mistake for stubbornness. The dark humour is real. The hope is also real. Somehow both exist at the same time. Spurs fans have had to figure this out across sixty years of almost. You've figured it out too.",
    why:[
      "Disappointment does not stick to you the way it should. You reset, you believe again, and you do it on schedule.",
      "You can make the joke and mean the hope in the same breath. Underneath it is a want for one clean, undeniable moment that nobody gets to qualify.",
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
      "Five thousand to one came in and you watched it happen. That does something permanent to what you think is possible.",
      "You keep expectations managed and hope alive underneath, protected rather than put out.",
      "Chaos has already handed you the best thing that ever happened. You are not going to start fearing it now.",
    ],
    note:"2015/16. 5000-to-1. Ranieri, Mahrez, Vardy. Statistically the most improbable title win in Premier League history. The evidence is there.",
    kit:"https://shop.lcfc.com",
  },
  NF: {
    "code3": "NFO", "kitType": "solid", "secondaryColor": null,
    name:"Nottingham Forest",  emoji:"🌲", color:"#DD0000",
    tagline:"You won two European Cups against all logic. You've chased that height ever since.",
    desc:"Most clubs your size never touched the European Cup once. You won it twice, back to back, with a manager and a team that came from nowhere, and then you spent decades outside the top flight carrying that history like a torch nobody else could see. You stayed. Through the divisions, through the wilderness, the City Ground stayed full and stayed loud. The past isn't a burden to you, it's the proof of what this club is and the height you ache to reach again.",
    why:[
      "Two European Cups are not a dusty record to you. They are the reason, the proof, and the bar.",
      "You stayed through the wilderness decades. The faith never depended on which division it was.",
      "The City Ground was full and loud through all of it.",
      "The pride comes with an ache in it. Immense at what was done, sore at how far it fell. Both are true and both are yours.",
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
      "Local, generational, genuinely rooted. None of it was manufactured and you would know if it had been.",
      "Being underestimated suits you fine. The model working is satisfying, but you were there before anyone had proved the model, and that is the part that actually says something.",
    ],
    note:"Third tier in 2014. Premier League regulars by 2021. Griffin Park's four-corner pubs are gone. The Community Stadium kept the tradition alive. That matters.",
    kit:"https://shop.brentfordfc.com",
  },
  BH: {
    "code3": "BHA", "kitType": "stripes", "secondaryColor": "#FFFFFF",
    name:"Brighton",          emoji:"🐦", color:"#0057B8",
    tagline:"You sell your best player every summer and somehow finish higher.",
    desc:"You apply real intelligence to most things you care about and you've found it pays off more often than people expect, partly because most people don't bother. But unlike some people who think carefully and become cold about it, you've stayed genuinely warm. You're still delighted when things go right. Brighton figured out that being smart and being joyful aren't opposites, you can have the careful model and the seaside atmosphere and the European nights and still feel like the whole thing is slightly miraculous. You feel the same way about your own life sometimes.",
    why:[
      "Running on analysis has not made you cold, which is a rarer combination than it sounds.",
      "You expected less than you got, and you have chosen to enjoy that rather than take it as owed.",
      "Progressive, rooted, and quite happy to be exactly where you are. The Amex is precisely that.",
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
      "Molineux and Wolverhampton have been inseparable for over a hundred and thirty years, and the place is not a detail of this for you.",
      "The city knows what you are. You have never needed anyone outside it to confirm that, and being underestimated by people who have not looked closely costs you nothing.",
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
      "The contentment is real. Not suppressed ambition, not resignation, just an unusually clear sense of what you actually want.",
      "Craven Cottage over a sixty-thousand-seater, every time. The river, the ritual, the walk. Identity through character rather than through trophies.",
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
      "No chip, no complex, nothing being performed. You are simply comfortable being who you are.",
      "The ride means more to you than the prestige does. That is not a consolation, it is the actual preference.",
      "League Two to the Premier League, then down and back up again. That teaches you not to take a single bit of it for granted, and you learned it properly.",
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
      "You back things before they are proven, and not out of naivety. You read the signs early.",
      "The past informs you without anchoring you. Villa Park is history and momentum in the same breath.",
      "Ambition and patience together is the rare pairing, and it is the one that makes this particular climb worth watching.",
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
      "Near-extinction to the Premier League. That journey maps almost exactly onto your own stubbornness.",
      "The suffering was communal and so is the resurrection. One was never going to arrive without the other.",
      "Forty-six thousand in the Stadium of Light while the club was in League One is one of the most striking images in English football.",
      "You understood exactly what that crowd was saying.",
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
      "You feel it about as hard as it is possible to feel it, and it runs straight into who you are. The full arc counts, not only the good parts.",
      "The Bielsa years proved something you already half suspected: the right person with the right ideas can make you believe again. You hold onto that kind of evidence.",
      "Leeds' history demands a tolerance for chaos. What keeps you there is older and more stubborn than reason.",
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
      "This club's identity has shifted more than once and you moved through every version of it.",
      "The Abramovich years gave long-term supporters something they never expected and now quietly mourn, which is close to impossible to explain to anyone outside it.",
      "Stamford Bridge is still there. The old guard are still in the seats. Some things outlast the money and the noise.",
    ],
    note:"Stamford Bridge since 1905. Founded in a pub opposite the ground. The King's Road: Mary Quant, punk, the Rolling Stones, now boutiques. 6 league titles. 2 Champions Leagues. 19 trophies under Abramovich. The current chapter is unresolved.",
    kit:"https://store.chelseafc.com",
  },
  IT: {
    "code3": "IPS", "kitType": "solid", "secondaryColor": null,
    name:"Ipswich Town",      emoji:"🔵", color:"#0044A9",
    tagline:"You chose Portman Road over the glamour an hour down the A12. Every time.",
    desc:"Bobby Robson managed Ipswich for 13 years, won the FA Cup and the UEFA Cup, and turned a small Suffolk market town into a place the whole of English football knew. That story, of a modest club doing extraordinary things through genuine quality and community rootedness, is the soul of Ipswich. Kieran McKenna then delivered back-to-back promotions without losing an ounce of that spirit. The fanbase is warm, self-aware about their own scale, and completely unbothered by not being Chelsea or Manchester United. You recognise this posture: the confidence that comes from knowing exactly what you are and finding it genuinely enough.",
    why:[
      "Suffolk, Portman Road, the Bobby Robson mythology. Not global, not branded, just real.",
      "You know you are not a big club and you have never once needed to pretend otherwise. That undefensiveness is the whole posture.",
      "You believe the right person who actually cares about a place gets more out of it than the budget says is possible.",
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
      "Few sets of supporters have had more reason to feel abandoned by their own club, and you stayed through all of it.",
      "This is loyalty tested by active institutional failure, which is a different thing from Everton's quiet endurance. Yours got tested more directly.",
      "Getting to the Premier League after that carries a particular weight. You know what it is to finally receive something that took far too long.",
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
      "The place is not a detail of who you support. It is the entire point.",
      "Bad seasons never tested your loyalty. What tested it was someone trying to change what the club fundamentally is.",
      "You held the line.",
      "Ownership is a paperwork question. Whose club it is was settled long ago by the people in the stands, and you have the receipts to prove you mean that.",
    ],
    note:"In 2014, the FA blocked an owner's bid to rename the club Hull Tigers, after the fans refused it first. A name standing since 1904 never moved, and the owner eventually sold up. Some clubs win trophies. This one won the right to stay itself.",
    kit:"https://www.tigerleisure.com",
  },
};

// Per-club, per-dimension flavour for the result's 'where you differ' line (display-only; drawn
// from each club's own why-copy). Merged onto teams below; the scoring path never reads it.
const teamEdge = {
  LI: {emotion:"felt at full volume, outward and unreserved, or it isn't real at all", community:"belonging to something vast, the sheer scale of the shared feeling", rootedness:"the past carried forward as fuel, the history the reason this moment means anything"},
  MC: {process:"a relentless standard, preparation over inspiration, excellence done deliberately and repeatedly", loyalty:"predating the success, there for the lean years and the lower divisions, a local faith outsiders never see", rootedness:"working-class roots that never went anywhere, the club of the people actually from here"},
  AR: {process:"how it wins mattering as much as the winning, the care for the quality of the thing not just the scoreline", ambition:"a faith through the near-misses that holds because the approach is sound"},
  EV: {loyalty:"unconditional, defining more than almost anything else, the whole statement being that it stays", emotion:"suffering carried inward and private rather than broadcast", rootedness:"a resilience through the long droughts, something more stubborn than hope"},
  NC: {community:"the real, local, place-rooted kind, not the global-brand kind", emotion:"collective and outward, it happens together or it barely counts", loyalty:"the joy real now, landing differently for the two decades of frustration that came before"},
  WH: {rootedness:"east London, the Boleyn Ground and what was there before, the brand never the club", emotion:"proud but genuinely complicated, both the love and the legitimate grievance carried", loyalty:"a low tolerance for decisions it disagrees with, though leaving never seriously crossed its mind"},
  CP: {community:"intense but self-created, built through sustained collective effort rather than handed down by trophies", emotion:"no need for mythology, the atmosphere it makes being the whole narrative", chaos:"backs-against-the-wall energy, getting louder when things get hard rather than retreating"},
  MU: {rootedness:"defining itself through what has been, not just what is happening now", emotion:"the grief of former greatness, suffering not for never winning but for knowing it has and it isn't now", community:"a global identity that transcends any one place, for better and for worse"},
  SP: {emotion:"processing the disappointment, resetting fast, and genuinely believing again", ambition:"the longing for one defining moment, and the belief that it is still coming"},
  LE: {chaos:"earned, having seen chaos produce the best thing that ever happened", ambition:"one improbable moment as permanent proof of what is possible"},
  NF: {rootedness:"two European Cups carried as living identity, the reason, the proof and the standard", loyalty:"staying through decades in the wilderness, the City Ground full and loud through all of it", emotion:"pride tinged with longing, immense in what was done and aching at how far it once fell"},
  BR: {community:"local, generational and genuinely rooted, community over brand and never manufactured", ambition:"comfortable being underestimated, needing no validation from outside the community that already gets it"},
  BH: {process:"a clear, analytical approach with the emotional warmth never dropped, rarer than it sounds", emotion:"having expected less and got more, enjoying it rather than taking it for granted", community:"progressive and community-rooted, genuinely happy to be where it is"},
  WO: {rootedness:"deep and working-class, Molineux and Wolverhampton inseparable for over 130 years", ambition:"quietly competitive and historically proud, comfortable being underestimated by those who haven't looked closely"},
  FU: {ambition:"genuine contentment, neither suppressed ambition nor resignation but real self-knowledge", rootedness:"warm and specific, the cottage, the river and the ritual, identity through character not trophies"},
  BO: {emotion:"comfortable in its own skin, no chip and no complex, just real enjoyment", ambition:"finding more meaning in the ride itself than in prestige or status", chaos:"genuine, League Two to the Premier League and then down and back up again, learned not to take any of it for granted"},
  AV: {ambition:"grounded optimism and patience, backing the rebuild before it is proven because it reads the signs early", rootedness:"a balanced relationship with the past, Villa Park history and momentum at once, the past informing without anchoring"},
  SU: {loyalty:"through institutional difficulty, the journey from near-extinction to the Premier League mapped onto pure stubbornness", emotion:"communal suffering and communal resurrection equally real, the joy never coming without the grief before it", community:"forty-six thousand at the Stadium of Light in League One, and knowing exactly what that crowd was saying"},
  LU: {emotion:"as hard as it comes and tied to identity, defined through the full arc, not just the highs", chaos:"real, the history requires it, and what keeps it there is something older and more stubborn than reason"},
  CH: {chaos:"an identity that has shifted repeatedly, and having moved through all of it", emotion:"the complicated grief of the Abramovich era, mourned in a way hard to explain to outsiders", rootedness:"Stamford Bridge still there and the old guard still in the seats, some things surviving the money and the chaos"},
  IT: {community:"Suffolk, Portman Road and the Bobby Robson mythology, not global, not branded, real", ambition:"high, undefensive self-knowledge, not a big club and never pretending otherwise"},
  CV: {loyalty:"explicitly unconditional in the face of active institutional failure, tested directly rather than quietly", emotion:"an institutional grief earned by being genuinely abandoned by its own club"},
  HU: {rootedness:"the place as the entire point, and never letting anyone treat it as negotiable", loyalty:"load-bearing rather than sentimental, tested when someone tried to change what the club fundamentally is, and holding the line", community:"the kind that organises, a fanbase that has already proved the point once"},
};
Object.keys(teamEdge).forEach(k=>{ if(teams[k]) teams[k].edge = teamEdge[k]; });



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
    HU:"Like Hull City, you live inside the club rather than watch it. Yours is mythology at full volume, European nights and a global Kop. Hull's is narrower, a belonging it once had to physically protect when an owner came for the name. You expect to win. Hull expects to last.",
    NC:"You both live for collective belonging and loud shared emotion. Liverpool wraps it in mythology and global reach, YNWA, European nights, a fanbase that spans continents. Newcastle is more local, more raw. Liverpool fans carry history like armour; Newcastle fans carry it like a wound that's finally starting to heal.",
    EV:"Same city, same working-class roots, same capacity for deep feeling. The gap is expectation: Liverpool fans carry the weight of what they've won, Everton fans the weight of what they haven't. Both are heavy. Different kind of heavy.",
    WH:"Loud, emotional, place-proud, both of you, but West Ham's identity is more complicated: the stadium move, the cockney mythology, the sense of something lost. Liverpool's collective feeling isn't shadowed by institutional grief. If the 'complicated' part is what resonated, West Ham might actually be your club.",
    MU:"Two former-greatness clubs with global fanbases and a demand for excellence. Liverpool's identity is built on collective soul, United's on legacy and status. Liverpool fans sing; United fans remember. If it's the feeling that drives you more than the prestige, Liverpool's right.",

    AV:"Genuine European pedigree on both sides, and real current ambition. Liverpool's identity is fully formed and rooted in mythology; Villa's is being rebuilt, the hunger newer. Want the completed story, Liverpool. Want to be part of one being written, Villa.",

    LU:"Maximum-intensity clubs, huge fanbases, complete emotional commitment. Liverpool's identity is built on collective myth, YNWA, the Kop, the European nights. Leeds' is more chaotic, built on defiance as much as belonging. Want the clean collective version, Liverpool. Want the operatic one, Leeds.",
 
    MC:"Both expect to win things and hold the club to the highest standard. City's expectation is systematic and cool; Liverpool's is emotional and mythological. City fans process trophies as validation of the process. Liverpool fans experience them as belonging confirmed.",
 
    AR:"You both carry a strong sense of what the club represents beyond results. Arsenal's is philosophical and principled, Liverpool's mythological and collective. Each holds the club to a standard that's partly about identity, not just winning. Arsenal fans argue about the method. Liverpool fans feel it together.",
 
    SP:"For both, proximity to greatness and the occasional near-miss is part of the experience. Spurs' relationship with it is tortured and self-aware; Liverpool's is less so, because they've converted it repeatedly. The difference is one has delivered and one keeps almost delivering.",
 
    BR:"Specific communities sit at the heart of what each club means. Liverpool's is global, but the core is Merseyside and the mythology of the Kop. Brentford's is west London and intensely local. The scale is incomparable; the authenticity of each is real.",
 
    BH:"You both think carefully about how football should work and want the club to embody a philosophy. Liverpool's is emotional and rooted in collective identity, Brighton's analytical and model-driven. Liverpool fans feel it. Brighton fans understand it.",
 
    WO:"Neither identity needs external validation. Wolves do it quietly, with Midlands pride; Liverpool do it loudly, with mythology and collective emotion. Both know exactly who they are. Wolves are understated about it. Liverpool are not, and that's entirely the point.",
 
    FU:"A specific place defines each club. Anfield defines Liverpool, Craven Cottage defines Fulham, and both are irreplaceable. Liverpool's ground generates mythology on a global scale; Fulham's a gentle, particular pride. Either fanbase would feel losing it as a loss of identity.",
 
    BO:"Genuine joy in what the club represents, on both sides. Liverpool's is operatic and global, Bournemouth's quieter and more personal. Liverpool fans live the club as mythology; Bournemouth fans experience it as something surprising that keeps being good.",
 
    SU:"Unconditional, communal loyalty binds both fanbases. Liverpool's community has mythology and global reach; Sunderland's is more local and more tested, the Stadium of Light held 46,000 in League One. Liverpool's is louder. Sunderland's may be deeper.",
 
    CH:"Major trophies won, and the expectation to compete for more. Liverpool's identity is rooted in community and mythology; Chelsea's in a west London identity complicated by billionaire ownership. Liverpool fans carry the past as fuel. Chelsea fans navigate which version of it is still relevant.",
 
    IT:"Passionate communities stand behind both badges, Liverpool's global, Ipswich's county-specific. Each experiences the club as something that belongs to a community rather than an owner. Liverpool's is larger by every measure. Ipswich's is more intimate.",
 
    CV:"Collective loyalty is the defining quality for both fanbases. Liverpool's has been rewarded with sustained success; Coventry's has been tested by years of institutional difficulty. Real communities, both, holding the club together through whatever comes. The scale and the recent experience are completely different.",
  },
  MC:{
    HU:"You are close to opposites. You are the engineered global project, success built deliberately and sold to the world. Hull is the club offered exactly that path, an owner promising a bigger market for a smaller name, and it turned the offer down flat. Start with the overlap. You know what global ambition looks like. You chased it. Hull refused it.",
    BR:"Analytically wired and process-first, both of you. The gap is scale and sentiment: City are a machine built to dominate, Brentford a machine built to punch above their weight. If smart underdogs interest you more than smart favourites, Brentford might fit you better.",
    BH:"You both think carefully and back the evidence. Brighton adds warmth, they're genuinely delighted to be here. City are not delighted; they expect. If the joy of the journey matters alongside the thinking, Brighton is the call.",
    WO:"Private, process-oriented, low on chaos, the difference is that Wolves are underdog-comfortable and City are not. If quiet competence at a smaller scale appeals more than relentless dominance, Wolves fills that gap.",
    AR:"You both value doing things properly. Arsenal care deeply about the aesthetics of the process; City only care whether the process produces wins. If how it looks matters to you, Arsenal is closer.",
 
    LI:"Two genuinely great clubs of the modern era, high expectations on both sides. Liverpool's greatness is mythological and community-rooted, City's systematic and process-driven. Liverpool fans experience success as confirmation of something they already felt. City fans experience it as validation of a model.",
 
    EV:"Same city, very different relationships to success, City have had sustained dominance, Everton prolonged frustration. City fans now expect success as a right. Everton fans have learned to appreciate the identity separately from any expectation of it.",
 
    NC:"State-adjacent wealth on both sides, and the division of opinion that comes with it. City's transformation was earlier and more complete; Newcastle's is newer and still being processed. City fans have had longer to navigate what their club became. Newcastle fans are still in the middle of it.",
 
    WH:"Both transformed by investment relative to what they were, City's transformation total and historic, West Ham's more modest. Each fanbase has had to navigate what the club means after the money arrived. West Ham fans have had more to protect. City fans have had more to accept.",
 
    CP:"Each has lived the contrast between what the club used to be and what it is now. City's runs from provincial struggle to global dominance, Palace's from near-extinction to sustained Premier League presence. Both journeys were real. City's was more extreme in both directions.",
 
    SP:"The expectation of winning is a defining experience for both. City's is backed by sustained delivery; Spurs' by decades of hope and frustration. City fans have the trophies. Spurs fans are still waiting for the current version of the club to produce one.",
 
    LE:"Unlikely success on both sides, but City's was built systematically over years, Leicester's a single miraculous season. City's reference point has been repeated many times. Leicester's happened once, in a way that can never be fully explained.",
 
    NF:"Genuine European greatness in both histories. Forest's was older and more improbable, City's more recent and more systematically achieved. Forest's came through chaos and genius. City's came through investment and process.",
 
    FU:"You both appreciate football done well, but the relationship to it is completely different. City fans expect systematic excellence and are frustrated when it wavers. Fulham fans appreciate good football while being genuinely content with their position. One requires it. The other is grateful for it.",
 
    BO:"The quality of the football is appreciated at both clubs. City's comes with enormous expectation; Bournemouth's with genuine surprise that they're here competing with clubs like City at all. City fans take it as their right. Bournemouth fans take it as a gift.",
 
    AV:"Genuine quality and ambition, both of you, but City's is dominant and systematic, Villa's newer and more exciting for being less expected. City fans expect it to produce trophies. Villa fans are enjoying it as something being built.",
 
    SU:"Large northern fanbases, very different kinds of difficulty. City's was years of mid-table obscurity; Sunderland's a fall to League One. City fans now live in a completely different reality. Sunderland fans are climbing back.",
 
    LU:"Big northern fanbases, great success somewhere in each history, City's current and ongoing, Leeds' historical with the rebuilding still underway. City fans know it because it's happening. Leeds fans believe it because it used to be true.",
 
    CH:"Significant spending, real trophies, on both sides. Chelsea's came first and built an identity around winning; City's was more sustained and more dominant. Chelsea fans currently feel the absence of that clarity. City fans still live inside it.",
 
    IT:"Each has been competitive beyond what its resources originally suggested. City's original resources were modest; Ipswich's UEFA Cup came under Bobby Robson on minimal budget. City's has been followed by many more achievements. Ipswich's stands alone.",
 
    CV:"Long difficult periods before things improved, held through by both fanbases. City spent decades in the lower divisions and in Liverpool and United's shadow; Coventry spent years without a proper home. Both kept going. City's improvement was transformative. Coventry's has been more modest, but no less significant to the fanbase.",
  },
  AR:{
    HU:"There's real kinship here: you stand on principle, the sense that there is a right way you will not abandon. Yours is the method, doing it properly even when the result disagrees. Hull's is identity, staying who it is even when an owner says it costs money. Both would rather be right than convenient. You defend your style. Hull defended its name.",
    BH:"Progressive, thinking clubs, both of you, but Brighton is more cheerful about it, pleasantly surprised by their own success, while Arsenal carries the weight of expectation and the torment of almost. If you're more optimist than tortured, Brighton might suit you.",
    NF:"Romantic clubs, both, in how they relate to football. Forest is purer chaos and mythology; Arsenal is more principled, wanting to do it properly rather than just dramatically. If the messy story appeals more than the right method, Forest is worth a second look.",
    FU:"You both find value in doing things properly at your own pace. Arsenal fans still want to win everything; Fulham fans are genuinely fine with a good season. If you're more settled than restless, Fulham is the honest answer.",
    SP:"Near-misses suffered through principled identities, on both sides. Arsenal have a clear philosophy they hold sacred; Spurs are more chaotically self-aware. If you take the method seriously, Arsenal. If you've made a kind of peace with the comedy of your own hope, Spurs.",

    MC:"Conviction about method binds both of you. Arsenal care about the right way to play football as an aesthetic position; City care about winning through the right process. Arsenal's version is more emotionally charged, City's cooler and more systematic. If the feeling of rightness matters as much as the result, Arsenal. If you just want the process to be excellent, City.",

    MU:"Historical prestige and the expectation of winning, on both sides. United's identity is built on being the biggest club in England and the grief of not currently being that. Arsenal's is built on a belief that there's a right way to do football and they embody it. United feel entitled to success. Arsenal feel they deserve it through principle.",

    CH:"Two London clubs with prestige and a fanbase that holds the club to high standards. Chelsea's standards are performance-driven and recent, built on spending; Arsenal's philosophical and older. If winning by any means is fine, Chelsea. If the method has to be right, Arsenal.",
 
    LI:"High standards on both sides, and a demand that the club embody something beyond results. Liverpool's identity is rooted in collective emotion and mythology; Arsenal's in method and aesthetic principle. Liverpool fans feel it together, loudly. Arsenal fans hold the club to a standard that's partly philosophical.",
 
    EV:"A long-suffering relationship with trophies you feel you deserve, on both sides. Everton's suffering is quieter and more resigned; Arsenal's more vocal and principled, always a reason why the method was right even when the result wasn't. If you absorb the pain quietly, Everton. If you need to explain why it still mattered, Arsenal.",
 
    NC:"Intensity of support defines both, and a sense that the fanbase deserves more. Newcastle's identity is place-rooted and community-first; Arsenal's method-first and principled. The frustration is shared but the source differs: Newcastle fans feel geographically isolated from power, Arsenal fans philosophically misunderstood.",
 
    WH:"Method matters to both fanbases. West Ham's is rooted in working-class identity and the academy tradition; Arsenal's in a belief about how football should be played. Each feels strongly that its approach has value beyond trophies. Arsenal's belief is more explicit and more argued over.",
 
    CP:"Each fanbase has built something more authentic than the institution sometimes deserves. Palace built it through fan organisation; Arsenal through decades of expectation and the specific culture of Highbury and the Emirates. Both take the identity seriously as a thing worth protecting.",
 
    LE:"The specific joy of doing it properly and having it recognised, known to both. Leicester's recognition came once, explosively, in 2016; Arsenal's in cycles, and is being rebuilt. Each understands what it feels like when the approach justifies itself. Leicester's came as a shock, Arsenal's as vindication.",
 
    SU:"A fanbase that stays through difficulty out of genuine belief rather than habit, on both sides. Sunderland's belief has been tested more severely; Arsenal's difficulty has been relative, near-misses rather than relegation. Both know what it is to support a club that should be better and keep showing up anyway.",
 
    LU:"Strong sense of identity, and a fanbase that holds the institution to it, in both cases. Leeds' identity is combative and confrontational; Arsenal's principled and aesthetic. Each will tell you loudly who they are. Leeds' version involves more defiance, Arsenal's more conviction.",
 
    CV:"The fanbase's belief outlasted the institution's ability to justify it, at both clubs. Coventry's difficulty was structural and prolonged; Arsenal's a matter of failing to convert genuine quality into trophies. Both kept the faith when they had reasons not to. The scale of the test was very different.",
 
    WO:"Systematic clubs with a clear identity and a fanbase that understands it, both of you. Wolves do it quietly, without needing external validation; Arsenal do it publicly, with considerable argument about whether the method is being upheld. If you need to make the case for the approach, Arsenal. If you just live it, Wolves.",
 
    BO:"Genuine satisfaction in doing football properly at your own scale, on both sides. Bournemouth's scale is smaller and the satisfaction simpler; Arsenal's comes with the expectation that the method should eventually produce trophies. Bournemouth fans are genuinely content. Arsenal fans are content with the approach but not the gap between approach and achievement.",
 
    AV:"Two clubs rebuilding toward something they believe they deserve. Villa's rebuild is newer and the excitement less complicated; Arsenal's longer-running and heavier with expectation. Each fanbase genuinely believes the club is heading somewhere. Arsenal's belief is more anxious, Villa's more hopeful.",
  },
  EV:{
    HU:"For both of you, loyalty is what you prove when the club gives you the least. Yours was tested on the pitch, decades of waiting without once thinking of leaving. Hull's was tested in the boardroom, an owner deciding the name was holding the club back. The resemblance is real. You treat staying as the whole statement. You stayed through the football. Hull stayed through the rebrand.",
    SP:"Long-suffering clubs with painful near-misses, both of you, but Everton suffer quietly and inwardly where Spurs perform the suffering publicly, with a kind of self-aware dark humour. If your pain is something you share loudly rather than absorb alone, Spurs is probably you.",
    MU:"Former glory and present frustration, carried by both. United's former greatness is more recent and more dominant; Everton's older and harder to hold onto. The question: are you haunted by recent proximity to greatness, or by a longer drought?",
    LI:"Same city, same roots, very different emotional register. The fork: do you expect success or endure without it? Liverpool fans expect. Everton fans endure. One isn't better than the other. They're just different kinds of love.",
    NF:"Stubbornly loyal to a romantic version of what the club means, both of you. Everton's loyalty is quiet, place-specific, unconditional; Forest's mythological and chaos-tolerant. If you love the improbable story more than the steady commitment, Forest is closer.",

    SU:"Loyalty that required no reward to persist defines both. Everton's operates in the shadow of Liverpool, Sunderland's in the shadow of Newcastle. Each carries legitimate grievance about institutional decisions made above the fanbase. Sunderland's recent journey from League One to the top flight adds a chapter Everton's doesn't have.",

    LU:"Real, unconditional passion on both sides. Everton's is quieter and absorbed internally; Leeds' louder and more confrontational. Everton fans endure. Leeds fans assert. If the suffering is something you carry privately, Everton. If it's something you need to express at volume, Leeds.",

    CV:"Loyalty through genuinely difficult circumstances defines both. Everton's difficulty is measured in near-misses and Liverpool's shadow; Coventry's in years without a proper home ground. Each fanbase kept showing up when the reasonable thing would have been to walk away.",
 
    NC:"Passionate, place-rooted fanbases, both, and a long history of being underserved by the institution. Newcastle's frustration has been louder and more confrontational, Everton's quieter and more absorbed. Both know what it means to care deeply about a club that doesn't always deserve it.",
 
    WH:"Working-class clubs with genuine place-rooted identities and complicated institutional histories, both of you. West Ham's identity is East End and explicitly historical; Everton's Merseyside and defined partly by what it is not. Each resists the drift toward corporate football. Each has something worth protecting.",
 
    CP:"The fanbase's authenticity is the most reliable thing about the institution, at both clubs. Palace built their culture deliberately through fan organisation; Everton's is older and more absorbed, just how it's always been. Each resists the drift toward corporate football. Each is worth protecting.",
 
    BR:"Fanbases that care about the club as a community institution rather than a product, on both sides. Brentford formalised this through community ownership; Everton's version is older and less explicit but no less real. Brentford has institutional structures to enforce it. Everton relies on culture.",
 
    BH:"Football done properly, and standards that go beyond winning, valued by both. Brighton's standards are analytical and model-driven; Everton's older and rooted in a specific tradition. Each will tell you when the club isn't meeting the standard. The standards are from different eras.",
 
    WO:"Two clubs that get on with it without drama. Wolves do it quietly in the Midlands, Everton quietly on Merseyside. Each absorbs difficulty without excessive performance. Each resists the drift toward the performative. Each just cares, genuinely and without theatrics.",
 
    FU:"Contentment with identity coexists with frustration at results, for both. Fulham are more genuinely content; Everton's relationship with contentment is more complicated, they want more, they've always wanted more, but they've learned to absorb not getting it. Fulham's understanding is simpler and lighter.",
 
    BO:"The passion is genuine rather than performed, on both sides. Bournemouth's is newer and comes with more surprise; Everton's older and comes with more weight. Bournemouth fans are grateful to be here. Everton fans are here because they've always been here and always will be.",
 
    AV:"Two historically significant clubs navigating difficult periods against their own standards. Villa's resurgence is real and current; Everton's difficulty more prolonged and painful. Each fanbase remembers better times. The current trajectories differ sharply.",
 
    IT:"Belonging to the local community matters more than national profile, at both clubs. Ipswich's community is Suffolk-specific; Everton's Merseyside, in Liverpool's shadow, carrying an identity defined partly by what it refuses to become. Both are genuine. Both are more interesting than their current profiles suggest.",
  },
  NC:{
    HU:"Here's the common ground: you want something real instead of something global, the rooted over the marketable. You never had to defend it, the city and the club inseparable for generations. Hull did, against an owner who wanted the name to travel further than the place it came from. Same instinct at work. You won that argument. You won it by simply being. Hull won it by fighting.",
    LI:"The communal dimension is nearly identical. The fork is mythology versus locality: Liverpool is a global phenomenon built on story and anthem, Newcastle a city that simply cannot be separated from its club. If you want the purer, rawer version of collective belonging without the global scale, Newcastle is it.",
    WH:"Place-defined, proud, working-class-rooted, both clubs. Newcastle's trajectory is currently upward and optimistic; West Ham's identity is tangled in a stadium move many fans resented. If you're drawn to the upward arc, Newcastle. If the complicated loyalty resonates more, West Ham.",
    CP:"Intensely local and no-frills, both of you, Palace south London, Newcastle the northeast. The distinction is scale: Newcastle engulfs an entire city, Palace is a tight, fiercely proud corner of London. Both are real. One is bigger.",

    AV:"Proud histories and a genuine resurgence, shared by two ambitious clubs. The difference is place and community: Newcastle is a whole city with a single football identity, Villa a sleeping giant in the UK's second city, which makes the identity bigger and more distributed. If the place being the whole point matters, Newcastle. If the scale of the ambition matters, Villa.",

    SU:"Northern, communal, place-rooted, both, with painful institutional histories and intensely loyal fanbases. Newcastle's loyalty is louder and more confrontational; Sunderland's quieter and more about endurance. The Stadium of Light held 46,000 in League One, loyalty of a different character to St James' Park.",

    IT:"The community is the whole point and the football serves a larger local identity, at both clubs. Newcastle's is a city entirely organised around its club; Ipswich's a county town with a specific Suffolk pride. The scale differs but the principle is identical: the club belongs to its place more than to any other relationship.",
 
    MC:"State-adjacent investment that has divided opinion, on both sides. Newcastle's is newer and still being processed; City's transformation more complete. Newcastle fans are still in the middle of navigating what the ownership means. City fans have had longer to make their peace with it.",
 
    AR:"The fanbase feels the club should be competing at the top and is frustrated when it isn't, at both clubs. Arsenal's frustration is principled; Newcastle's communal and place-rooted. Arsenal fans argue about the method. Newcastle fans feel the absence of success as a community-level injustice.",
 
    EV:"Passionate, place-rooted fanbases, both, with long histories of being underserved by the institution. Everton's suffering has been quieter and more resigned; Newcastle's louder and more confrontational. Both know what it means to care deeply about a club that doesn't always deserve it.",
 
    MU:"Northern clubs with big fanbases and a strong sense of where they belong in football's hierarchy, both of you. United's hierarchy is backed by historical dominance; Newcastle's by community scale and a sense of injustice about not being where they belong. United's belief has more evidence. Newcastle's has more conviction.",
 
    SP:"Proximity to greatness, and the frustration of not quite getting there, part of the experience for both. Spurs do it with self-aware dark humour; Newcastle with a directness that reflects the character of the city. Both keep believing.",
 
    LE:"Improbable moments of genuine success, experienced by both. Leicester's was the 2016 title; Newcastle's greatest moments were earlier, Kevin Keegan's entertainers of the 1990s who nearly won it. Each fanbase has a reference point for what's possible. Leicester's is more recent.",
 
    NF:"Improbable histories relative to their size, on both sides. Forest's improbability is European and mythological; Newcastle's the scale of community attachment relative to the number of trophies. Both know what it means to have had moments of genuine greatness.",
 
    BR:"Something real built through community, on both sides. Newcastle's community is a whole city; Brentford's a west London neighbourhood. Both feel genuinely local. The scale is incomparable but the rootedness is equally real.",
 
    BH:"Genuinely invested in what the club represents, both fanbases. Newcastle's investment is place-rooted and communal; Brighton's model-driven and progressive. Newcastle fans care about the city having a club at the top. Brighton fans care about an intelligent club earning its place.",
 
    FU:"A specific place defines each club's identity. St James' Park towers over Newcastle and is inseparable from the city; Craven Cottage sits by the Thames and gives Fulham something irreplaceable. Either fanbase would feel losing its ground as a loss of identity.",
 
    BO:"The community matters more than the trophy count, at both clubs. Newcastle's is larger and louder, the frustration at not winning felt at city scale; Bournemouth's smaller and quieter, currently grateful for what they have.",
 
    LU:"Massive northern fanbases with a strong sense that they belong at the top, both of you. Leeds' sense is more historically loaded and confrontational; Newcastle's more community-rooted and directly about the city. Both believe it. Both are louder than their recent results justify.",
 
    CH:"Significant fanbases, and a belief that the club belongs among the elite, on both sides. Chelsea's elite status is recent and money-powered; Newcastle's claim is community-scale and historically backed. Both currently feel the gap between where they are and where they believe they should be.",
 
    CV:"Institutional decisions tested the fanbase's relationship with the institution, at both clubs. Newcastle's ownership saga divided opinion; Coventry lost their home ground. Each navigated something difficult without abandoning the club. Both know the club is the community more than it is the institution.",
  },
  WH:{
    HU:"The near-miss makes sense: you love a club you have also had to fight, carrying the love and the grievance together. Yours was the move from Upton Park, the feeling of being made bigger and less yourself at once. Hull's was the rebrand, an owner trying to swap the name for a brand. You've got genuine overlap. You stayed and fought rather than walked. You lost the ground but kept the club. Hull kept the name.",
    NC:"The shared dimension is raw belonging and working-class place pride. West Ham's specific identity is more conflicted, the move from Upton Park left a visible scar; Newcastle's current chapter is more optimistic. If complicated institutional grief rings true, West Ham is real.",
    CP:"Unpretentious and locally-rooted, both of you, but West Ham carries more history and complexity behind the identity, Palace simpler and less burdened by institutional decisions. If you want the cleaner version of local pride, Palace might suit you better.",
    LI:"Loud and place-proud, both, but Liverpool's collective emotion is uncomplicated by the kind of institutional grief West Ham carries. If you want the feeling without the baggage, Liverpool. If the baggage is part of what makes it real, West Ham.",

    NF:"Chaos-tolerant, both of you, with complicated histories with your own institutions. Forest's chaos is romantic, rooted in the Clough mythology; West Ham's more civic, connected to the East End and the sense that decisions are always made against the fan's interest. Each has a relationship with difficulty that is almost defining.",

    CH:"London clubs with complicated relationships between working-class roots and the money that arrived, both of you. Chelsea's money came from outside and transformed the club entirely; West Ham's identity resisted transformation more stubbornly. If the roots still feel like the club, West Ham. If the transformation and the ambition it brought is part of the appeal, Chelsea.",

    CV:"Institutional decisions made above the fanbase left lasting damage, and yet the loyalty held, at both clubs. West Ham lost Upton Park and moved to the Olympic Stadium against significant opposition; Coventry lost their home ground entirely for years. Both are studies in what fanbases absorb when they have no choice but to keep going.",
 
    MC:"Transformed by investment relative to what they were, both of you. City's transformation is total and historic; West Ham's more modest and more contested. West Ham fans have more of the original identity to protect. City fans have more success to justify the change.",
 
    AR:"You both find value in doing things a certain way. Arsenal's is principled and philosophical; West Ham's rooted in the academy tradition, the idea that the club produces players rather than buys them. Each holds the club to a standard measured in character, not only in results.",
 
    EV:"Working-class clubs with genuine place-rooted identities and fanbases that carry them regardless of results, both of you. Everton's identity is Merseyside; West Ham's East End and explicitly historical. Each resists the drift toward corporate football. Each has something worth protecting.",
 
    MU:"Histories that define the fanbase, carried by both. United's is about sustained dominance and individual brilliance; West Ham's about the 1966 World Cup winners, the academy tradition, and an East London identity specific and consciously held. The gap between that history and current reality differs.",
 
    SP:"Histories of brilliant football and complicated relationships with trophies, on both sides. Spurs' involves attacking football and the specific torture of nearly winning things; West Ham's producing England's greatest players and a specific East End identity. Both endure.",
 
    LE:"The specific joy of doing something improbable at your level, known to both. Leicester's 2016 title is legendary; West Ham won the FA Cup three times and produced three of England's World Cup winners. Each has something to point to. Leicester's most recent something is more improbable.",
 
    BR:"Genuine community identities rooted in working-class support, on both sides. West Ham's is East End and historical; Brentford's explicitly maintained through community ownership. Each resists the drift toward corporate football. West Ham fans feel the history. Brentford fans have institutional structures to protect the identity.",
 
    BH:"Atmosphere and community matter to both fanbases. West Ham's community is East End and place-specific; Brighton's south coast and more broadly progressive. West Ham's version is heavier and more historically loaded. Brighton's is more engaged and forward-looking.",
 
    WO:"Specific regional identities carried without drama, on both sides. Wolves are Midlands, quiet, process-driven; West Ham East End, historical, more explicit about their working-class roots. West Ham fans carry more weight of history.",
 
    FU:"West and East London community identities that survived commercial football. Fulham's is west London gentility; West Ham's East London working-class. Both are real and specific. West Ham's comes with more frustration and more explicit historical weight. Fulham's is lighter and more comfortable.",
 
    BO:"The community matters at both clubs. West Ham's is East End and historically loaded; Bournemouth's south coast and newer to the Premier League. West Ham fans carry the weight of history. Bournemouth fans carry a sense of surprise and gratitude.",
 
    SU:"Institutional decisions tested the fanbase's relationship with the institution, at both clubs. West Ham left Upton Park against significant opposition; Sunderland fell to League One under ownership that didn't deserve the fanbase it had. Both absorbed what no supporter base should have to. Both are still there.",
 
    LU:"Working-class roots carried as identity, on both sides. Leeds' are West Yorkshire and more confrontational; West Ham's East End and more explicitly historical. Each resists the drift toward corporate football. Both mean it.",
 
    IT:"Community and belonging matter more than profile, at both clubs. West Ham's community is East End and explicitly historical; Ipswich's Suffolk and rooted in the Bobby Robson era. The communities are specific, different, and equally genuine.",
 
    AV:"Genuine histories, and a fanbase that believes the club deserves more, on both sides. Villa's belief is currently being rewarded with genuine quality and ambition; West Ham's more frustrated, the stadium move complicated the identity and the results haven't consistently justified the ambition.",
  },
  CP:{
    HU:"You are the two most rooted clubs in the league, both certain the place is the point. You built that identity from nothing, manufacturing an atmosphere at a club with no trophies to lean on. Hull defended one it inherited, going to war to keep the name an owner wanted to sell. Cut to what's shared: you refused to let the club turn generic. You made your roots. Hull guarded its.",
    NC:"Intensely local and belonging-focused, both of you. Scale is the gap: Newcastle engulfs a whole city, Palace owns a corner of London. Palace fans don't need the whole city, they have Selhurst, and that is genuinely enough.",
    WH:"Unpretentious and local, both of you, but Palace is the simpler of the two, less burdened by institutional history. If you have no interest in the complicated backstory and just want the thing itself, Palace is the cleaner answer.",
    MU:"The only thing you share is the direct, front-facing approach. United demand results from historical greatness; Palace's directness comes from pride without pretension. Completely different sources, similar energy.",
 
    LI:"A specific atmosphere that means something culturally, more than just noise, on both sides. The Kop is a global institution; Selhurst Park's Holmesdale End was built from scratch by organised fans and is arguably the most genuine atmosphere in the Premier League. Liverpool's is mythological. Palace's is almost defiant in its authenticity.",
 
    MC:"Each fanbase knows what it feels like when football goes right. City's experience of it is sustained and dominant; Palace's more episodic, a great cup run, a good season, a famous result. Both appreciate genuine quality. City's comes with expectation, Palace's still with surprise.",
 
    AR:"A fanbase that believes the club represents something worth defending, on both sides. Arsenal's identity is principled and philosophical; Palace's local and atmospheric. Each will fight for it. Arsenal fans argue about whether the method is right. Palace fans just turn up and generate something.",
 
    EV:"The fanbase's authenticity is the defining quality of the institution, at both clubs. Everton's is rooted in decades of frustrated loyalty in Liverpool's shadow; Palace's in south London and an atmosphere built deliberately by organised fan culture. Both are real. Both are worth protecting.",
 
    SP:"London clubs with specific identities their fanbases take seriously, both of you. Spurs' involves suffering and dark self-awareness; Palace's a south London belonging and an atmosphere the fanbase built themselves. Both know who they are. Spurs fans perform their identity. Palace fans live theirs.",
 
    LE:"Punching well above their resources, both of them. Leicester's 2016 title is the most statistically improbable achievement of the Premier League era; Palace's sustained Premier League presence is impressive for a south London club of their size. Both earned something. Leicester's moment was louder.",
 
    NF:"Improbable histories that define the fanbase's relationship with the possible, on both sides. Forest's improbability is European and mythological; Palace's more local, a club sustaining Premier League presence through sheer fanbase intensity. Both prove that size isn't everything.",
 
    BR:"Two clubs that earned their place by being exactly what they are. Brentford did it through data and community ownership; Palace through atmosphere and fan culture. The methods differed, but the spirit of earning it rather than buying it is the same.",
 
    BH:"South and south-east clubs that built genuine Premier League presences, both of you. Brighton did it through a smart model; Palace through fan culture and an atmosphere that made Selhurst Park one of the most difficult away venues in England. Both belong here. Brighton earned it analytically. Palace atmospherically.",
 
    WO:"Neither club needs external validation. Wolves get on with it through Midlands grit and systematic football; Palace through south London identity and an atmosphere that covers for whatever the pitch produces. Both are undefensive about their scale. Both belong in the Premier League on their own terms.",
 
    FU:"Community identities that survived commercial football, on both sides. Fulham's is west London gentility; Palace's south London intensity. Both are real and specific. Fulham fans appreciate the Cottage. Palace fans appreciate Selhurst and everything the Holmesdale represents.",
 
    BO:"Arriving in the Premier League without the obvious resources, and finding a way to stay, is the shared story. Bournemouth did it through coaching excellence; Palace through fan culture and a specific south London stubbornness. Both are genuine. Both belong. The routes were different.",
 
    AV:"A fanbase culture larger than the club's current resources, on both sides. Villa's is rooted in history and genuine ambition; Palace's in a south London identity the Holmesdale Fanatics built deliberately. Each has something real beneath the badge. Villa's ambition is currently being matched by the club. Palace's is quieter and more local.",
 
    SU:"The fanbase built something the institution didn't always deserve, at both clubs. Sunderland fans filled the Stadium of Light in League One; Palace fans built the Holmesdale atmosphere from scratch. Both proved what a community can do without the club doing much to earn it. Both are studies in genuine belonging.",
 
    LU:"Atmospheres more intense than the club's position in football's hierarchy might suggest, on both sides. Leeds' at Elland Road is historically one of the most intimidating in England; Palace's at Selhurst among the most genuine in the Premier League. Both are louder than they should be. Leeds' intensity comes with edge. Palace's with joy.",
 
    CH:"Complicated relationships to their own identities, on both sides. Chelsea's was transformed by money; Palace's built from below by organised fans. Both have west and south London roots. Palace's identity is cleaner and more consistently held.",
 
    IT:"Belonging to the local community matters more than national profile, at both clubs. Ipswich's is county-specific and quietly proud; Palace's south London and deliberately built. Both are genuine. Both would trade profile for authenticity. Palace's atmosphere is nationally recognised. Ipswich's identity is more internally held.",
 
    CV:"The fanbase kept the identity alive through periods the institution made difficult, at both clubs. Coventry had ownership crises and years without a home; Palace had ownership crises and near-extinction moments. Both developed a specific resilience. Both know what it feels like to belong to something that might not survive. Both did.",
  },
  MU:{
    HU:"It's a close call for a reason. You guard an identity, but very different ones. You guard a winning past, the memory of dominance you cannot quite recreate. Hull guarded a name, the plain fact of being Hull City, when an owner tried to trade it for a global brand. You share the core of it. You refuse a lesser version of the club. You want your old self back. Hull simply kept its.",
    LI:"Global, historically great, emotionally demanding, both of you. The fork: Liverpool's identity is collective and mythological, United's individual excellence and status. YNWA is about everyone together; United at their best is about being the undisputed best.",
    EV:"The weight of expectation and former glory, carried by both. United's was more recent and more dominant; Everton's older and harder to hold. The question: are you haunted by proximity to what you had, or waiting for something that feels further away?",
    SP:"Suffering from proximity to former success, both of you. United's former greatness was more recent and more dominant; Spurs' has been further away for longer. If you believe your club is currently underperforming relative to its actual quality, United. If you're not sure it'll ever quite come together, Spurs.",
    AR:"Historical prestige, and the work of returning to it, on both sides. Arsenal's identity is more aesthetic and principled; United's more about scale and dominance. If you care about how it looks, Arsenal. If you care about being the biggest, United.",

    CP:"A direct, front-facing identity binds both. The difference is scale and recent history: United carry the weight of former greatness and the expectation that came with it, Palace carry no such weight, which makes their belonging simpler. If the history and expectation are part of what you need, United. If you just want to belong without the burden, Palace.",

    AV:"Former-greatness clubs with European Cup history and current ambition to return, both of you. United's former greatness was more recent and more dominant, which makes the present feel more like failure; Villa's is older and the current rebuild feels more hopeful than grief-stricken. If you're grieving something, United. If you're building toward something, Villa.",

    CH:"Historically great clubs navigating the gap between recent peak and current reality, both of you. United's pain is more operatic, the decline more public; Chelsea's more chaotic, less narrative. United fans feel the weight of specific glory lost. Chelsea fans feel the confusion of a club without a stable identity beneath the spending.",
 
    NC:"Massive fanbases, and a strong sense of where they belong in football's hierarchy, on both sides. Newcastle's identity is place-rooted and community-first; United's about historical greatness and global reach. Newcastle's belief is rooted in belonging. United's in entitlement.",
 
    WH:"Histories that are important to the identity, carried by both. West Ham's is working-class and East London; United's the Busby Babes, Charlton, Best, Cantona, Ferguson. Each fanbase feels the gap between where they are now and where they were. West Ham's gap is about a different kind of belonging. United's about a different kind of greatness.",
 
    BR:"Passionate fanbases and very different identities, both of you. United's is about historical dominance and the expectation of returning to it; Brentford's about community ownership and doing football properly without spending big. What each supports is from entirely different ends of football's spectrum.",
 
    BH:"Fanbases that hold the institution to standards, on both sides. United's standards are about greatness and dominance; Brighton's about intelligent, principled football. Each will tell you when the club isn't meeting the standard. The frameworks they're measuring against are completely different.",
 
    WO:"Clear identities their fanbases defend, both of you. Wolves' is Midlands, quiet, process-driven; United's global, loud, historically loaded. The representation they're protecting is from entirely different ends of football's scale.",
 
    FU:"Specific histories their fanbases carry, on both sides. United's is trophies, individuals, Ferguson; Fulham's Craven Cottage, the Thames, and a long story of being in football without being at the top. What it means is completely different.",
 
    BO:"Passion on both sides, but the emotional register is completely different. United's comes with expectation, history, and grief when it isn't met; Bournemouth's with gratitude and surprise. The scale of what each fanbase carries is incomparable.",
 
    SU:"Northern clubs with large fanbases and complicated institutional histories, both of you. Sunderland's involved relegation to League One; United's a fall from the sustained dominance of the Ferguson era. Sunderland fans have experienced more extreme difficulty. United fans more extreme success.",
 
    LU:"Big northern fanbases with a strong sense of where they belong, both of you. United's is backed by recent historical dominance; Leeds' by older history and fierce conviction. Both believe it. United's belief is more recently justified.",
 
    IT:"Proud histories their fanbases carry, on both sides. United's involves European cups and the most successful English manager in history; Ipswich's a UEFA Cup and the Bobby Robson era. United's something is bigger. Ipswich's more personally held.",
 
    CV:"The fanbase's loyalty has been tested relative to expectations, at both clubs. United fans expected sustained success and are navigating its absence; Coventry fans expected a home ground and a stable institution and were tested to the limit. The nature of what they were holding on for was very different.",
  },
  SP:{
    HU:"Set you beside Hull City and the likeness shows: you hold belief and clear eyes at once, fully invested and fully self-aware. You laugh at your own near-misses, self-deprecation as a survival skill. Hull refused to be laughed at, defending its name without flinching when an owner treated it as a punchline. You'd recognise yourself in Hull City. You know exactly who you are. You joke about it. Hull went to war over it.",
    EV:"The fork is public versus private suffering. Spurs fans perform it with a kind of dark comedy and self-awareness; Everton fans absorb it quietly and carry it alone. You know which one you are.",
    AR:"Long-suffering, principled, tortured by near-misses, both of you. Arsenal hold a clear philosophy as sacred; Spurs are more chaotically self-aware about their own absurdity. If you take the method seriously, Arsenal. If you've developed a sense of humour about your own hope, Spurs.",
    LE:"Defined by hope that won't die, both of you. Leicester actually got the impossible thing; Spurs have come agonisingly close. If you want to follow a club where the miracle already happened and now you need a second one, Leicester. If you prefer living in the agonising anticipation, Spurs.",
    MU:"Each defines itself by proximity to greatness it can almost touch. The difference is United have actually held it, and the weight of that memory makes the present feel like failure. Spurs have not, which makes the hope feel cleaner, less contaminated by what it used to be.",
 
    LI:"High expectations and a passionate fanbase, on both sides. Liverpool's expectations are consistently met; Spurs' exist in a permanently unresolved relationship with delivery. Liverpool fans experience football as collective myth that keeps getting confirmed. Spurs fans as hope that keeps almost arriving.",
 
    MC:"Champions League finals, experienced by both. City won theirs; Spurs reached theirs in 2019 and didn't. City fans know what getting it feels like. Spurs fans know what getting close feels like, which is both better and worse than not getting close at all.",
 
    NC:"A fanbase that feels the club should be competing at the highest level, on both sides. Newcastle's feeling is place-rooted; Spurs' historically backed, England's first double winners with genuine claims to being a big club. Both live with the gap between where they are and where they feel they should be.",
 
    WH:"London clubs with specific identities and fanbases that know exactly who they are, both of you. West Ham's is East End and working-class; Spurs' involves the fighting cockerel, the pub at the foot of White Hart Lane, and a history of brilliant football that hasn't produced Premier League trophies. Both are real. Both endure.",
 
    CP:"Specific identities their fanbases defend, on both sides. Palace's is south London and built from below; Spurs' north London and historically rooted in a culture of brilliant attacking football. Each has supporters who feel the identity is worth more than the current trophy count suggests.",
 
    BR:"Community identities that genuinely matter, on both sides. Brentford's is explicit community ownership and a neighbourhood; Spurs' the Jewish community of north London and a long tradition of specific football culture. Each has a community the club belongs to in a meaningful sense.",
 
    BH:"An identity built around doing things properly, on both sides. Brighton's version is analytical and progressive; Spurs' involves a history of brilliant attractive football held up as the standard. Each fanbase will tell you when the football isn't meeting it.",
 
    WO:"A clear identity around how football should be played, on both sides. Wolves' involves systematic, organised football; Spurs' attacking football, individual brilliance, a culture of flair. The aesthetics in question are very different.",
 
    FU:"Identities that predate the Premier League, both of you. Spurs' involves suffering and the specific torture of nearly winning things; Fulham's contentment and the pleasure of being exactly what they are. Both are valid. One's validity costs more emotionally.",
 
    BO:"Hope is a central feature for both fanbases. Spurs' is tortured and self-aware; Bournemouth's simpler and more straightforward. Spurs fans believe it against considerable historical evidence. Bournemouth fans because things have been genuinely going well.",
 
    NF:"Improbable histories, both of you. Forest's happened and is finished, two European Cups; Spurs' feels ongoing and perpetually about to arrive. Forest's evidence is conclusive. Spurs' is pending.",
 
    AV:"Proximity to greatness is part of the experience for both. Spurs have been close in the Premier League era without converting; Villa achieved it decades ago and are building toward something again. Spurs' belief is more tortured. Villa's more hopeful.",
 
    SU:"Loyalty tested, and a fanbase that keeps showing up regardless, on both sides. Sunderland's tests have been more severe; Spurs endure a different kind of difficulty, the specific frustration of being close without getting there. Sunderland's loyalty involves more genuine hardship. Spurs' more self-aware anguish.",
 
    LU:"Big fanbases and complicated relationships with success they feel they deserve, both of you. Leeds' complication is about a historical identity that demands to be at the top; Spurs' about being good enough to compete but not quite to win. Leeds fans believe confrontationally. Spurs fans with resigned self-awareness.",
 
    CH:"Histories and expectations that weigh on both fanbases. Chelsea's are rooted in recent dominance; Spurs' in a history of brilliant football and the specific frustration of not winning the Premier League. Both have complicated recent histories.",
 
    IT:"Histories their fanbases carry with genuine investment, on both sides. Ipswich's is specific and county-rooted; Spurs' broader, a claim to being among England's great clubs. Spurs fans measure everything against a standard the club hasn't fully met in decades.",
 
    CV:"The fanbase's loyalty has been tested over prolonged periods, at both clubs. Coventry's tests were structural and existential; Spurs' the specific frustration of nearly winning things and not quite getting there. The nature of the tests was very different but the loyalty equally genuine.",
  },
  LE:{
    HU:"There's shared DNA here. You have lived proof that the impossible happens. Yours was a 5000-to-1 title nobody had any right to win. Hull's was smaller and stranger, a fanbase that beat its own owner to keep the name on the badge. The overlap runs deep: you know the long shot can land. You won a trophy. Hull won an argument that mattered more to it than any trophy.",
    NF:"Miracle clubs, both of you. Forest's is older and mythologically bigger, pure chaos and manager mythology; Leicester's more recent and arguably more statistically improbable, the team 5000-to-1 couldn't stop. If chaos and the long-ago miracle appeal over the recent one, Forest.",
    SP:"Impossible hope is the whole point for both. The fork is that Leicester actually converted theirs in 2016, which changed what hope means for them permanently, while Spurs carry the hope without the proof. That shapes everything about how each fanbase relates to the next season.",
    BH:"Pleasantly surprised to be where they are, both of you. Brighton earns it through careful thinking; Leicester earned it through the most improbable moment in modern football. If you'd rather be the joyful smart club than the miracle club still chasing the second one, Brighton is the closer fit.",

    BO:"Small clubs with improbable recent histories in the Premier League, both of you. Leicester's story is more dramatic and comes with more expectation now; Bournemouth are still in the earlier chapter of their ascent, lighter, less complicated by what came before. If the miracle already happened and you carry it, Leicester. If you're still living the surprise, Bournemouth.",
 
    LI:"European glory that changed what the fanbase believes is possible, on both sides. Liverpool's is sustained and recurring; Leicester's a single extraordinary night in Madrid. Both know what it means when a football club becomes something bigger than the game itself.",
 
    MC:"The specific satisfaction of being right about something others doubted, felt by both. City proved that sustained investment and systematic excellence works; Leicester that sometimes football just does the impossible. Each fanbase has been part of something that changed the conversation.",
 
    AR:"Doing it properly and having that recognised is a joy both know. Arsenal's recognition came in cycles; Leicester's once, in 2016, overwhelmingly and improbably. Each knows what it feels like when the approach justifies itself. Leicester's moment was more sudden and more surprising.",
 
    EV:"Long histories and fanbases that remember better times, on both sides. Everton's history is longer and the frustration of not winning recently deeper; Leicester had their extraordinary 2016 moment that changed the reference point permanently. Each has something to point to. Leicester's is more recent and more improbable.",
 
    NC:"Passionate fanbases and genuine recent high points, both of you. Newcastle's high points were mostly historical; Leicester's was 2016, the most improbable thing Premier League football has produced.",
 
    WH:"Genuine histories their fanbases carry, on both sides. West Ham's is working-class and place-rooted; Leicester's midland and now permanently framed by 2016. West Ham fans feel the weight of East London history. Leicester fans the specific lightness of knowing they got the impossible thing.",
 
    CP:"Something bigger than their resources should have allowed, achieved by both. Leicester's title is the most statistically improbable achievement in Premier League history; Palace's sustained presence is impressive for a south London club of their size. Both earned something. Leicester's moment was louder.",
 
    MU:"Major trophies carried by both. United's are more numerous and more recent; Leicester's singular and improbable in a way United's never were. Leicester's reference point is permanently different in character to anything any other English club has.",
 
    WO:"East Midlands and Midlands clubs with specific regional identities, both of you. Wolves' is Midlands grit and quiet consistency; Leicester's now permanently framed by a miracle. Each fanbase understands the club as something beyond results.",
 
    FU:"A certain acceptance of what they are alongside moments of genuine quality, on both sides. Fulham's acceptance is comfortable and long-standing; Leicester's was transformed in 2016 and hasn't quite settled back. Leicester fans have a higher watermark that can never be lowered.",
 
    SU:"Loyalty tested and held, on both sides. Sunderland's test was institutional and prolonged; Leicester have had relegations and difficult periods. Each kept its identity regardless. Leicester fans now also know what the impossible feels like.",
 
    LU:"East and West Yorkshire and East Midlands clubs with big fanbases and complicated histories, both of you. Leeds' history involves European nights and a combative identity; Leicester's now includes the most improbable title in Premier League history.",
 
    CH:"The Premier League title, won by both. Chelsea won it multiple times through significant spending; Leicester once, through something that still can't be fully explained. Chelsea's memories come with the expectation it will happen again. Leicester's with a kind of permanent disbelief that it happened at all.",
 
    IT:"Improbable histories relative to their size, on both sides. Ipswich won a UEFA Cup with a county town club; Leicester the Premier League at 5000-1. Both proved that football occasionally does the impossible for smaller clubs.",
 
    AV:"European Cup history that defines the club's identity, on both sides. Villa's is 1982, part of a longer history; Leicester's more recent, and came after the most improbable title in the league's history. Each fanbase knows what it means when a club achieves something supposed to be impossible.",
 
    CV:"Midlands-adjacent clubs with loyal fanbases and complicated recent histories, both of you. Coventry's difficulty has been more prolonged and structural; Leicester's post-2016 has involved relegations and rebuilding. Each holds the club's identity regardless of league position. Leicester's now has a permanent reference point most clubs will never have.",
  },
  NF:{
    HU:"First, the kinship. You love the stories that had no business happening. Yours was two European Cups won from outside the top flight, the most improbable rise in the English game. Hull's was quieter, a supporters' campaign overturning an owner's rebrand to keep a name dating to 1904. Like Hull City, you trust the improbable. You conquered Europe. Hull kept itself.",
    LE:"Forest's miracle is older, less statistical, more mythological, Clough, a manager cult, a team that shouldn't have existed at that level. Leicester's is more recent and more data-defying. Both are romantic clubs. Forest has more mythology; Leicester more recent proof.",
    AR:"A romantic relationship with the club's past, and a sense of what it means beyond results, on both sides. Arsenal's romance is about doing it properly; Forest's about doing it impossibly. One worships the method; one worships the myth.",
    WH:"Chaos-tolerant, both of you, with complicated histories. Forest's chaos is mythological and historic; West Ham's more ongoing and present-tense. If you prefer your chaos to be legendary rather than current, Forest.",

    EV:"A stubborn romantic loyalty to a version of the club that no longer quite exists, on both sides. Everton's is about the School of Science and the belief they should be better; Forest's about Clough and the European Cups and the improbability of what they achieved. Each fanbase waits for a return that may or may not come.",
 
    LI:"European glory that defines the club's identity, on both sides. Liverpool's is sustained and recurring; Forest's older and more mythological, two European Cups in the late 1970s under a manager who built it from almost nothing. Both know what it means when a football club becomes something bigger than the game. Forest's happened in a way that makes it permanently extraordinary.",
 
    MC:"Genuine dominance in Europe, experienced by both. City's is more recent and more resource-intensive; Forest's older and more improbable. The mechanisms were completely different: City through systematic investment, Forest through one man's genius and a specific kind of chaos.",
 
    NC:"Northern clubs with passionate fanbases and a sense of belonging at a higher level than they sometimes occupy, both of you. Newcastle's is place-rooted; Forest's rooted in the mythology of what they achieved under Clough. Each carries that reference point as permanent background conviction.",
 
    CP:"Histories improbable enough to reshape what the fanbase believes is possible, on both sides. Forest's is European and mythological; Palace's more local, sustained Premier League presence through sheer fanbase intensity. Both prove that size isn't the whole story.",
 
    MU:"European Cup history that defines the club's identity, on both sides. United's is more sustained and more recent; Forest's older and more improbable. The character of how they got there is very different: United through sustained excellence, Forest through chaos and genius.",
 
    SP:"Hope and the possibility of improbable success, part of the experience for both. Spurs' hope is contemporary and tortured; Forest's historical and mythological, they did the impossible and it happened when nobody thought it could. Spurs are waiting for their version. Forest's already happened.",
 
    BR:"Two clubs that earned something improbable. Brentford earned Premier League football through a model; Forest European Cups through something that can't be fully modelled. Forest's achievement is older and less replicable.",
 
    BH:"The romance of improbable success runs through both. Forest's is older and more mythological; Brighton's more recent and more analytically understood. Both know what it feels like when a smaller club achieves something that wasn't supposed to happen. Forest's version is more chaos-driven. Brighton's more intentional.",
 
    WO:"Midlands-adjacent clubs with specific identities and fanbases that carry their history with pride, both of you. Wolves have their own identity rooted in Midlands grit; Forest the mythology of Clough and the City Ground. Both prove that English football has depth beyond the big six.",
 
    FU:"A specific relationship to place that defines the club, on both sides. Forest have the City Ground and the Trent; Fulham Craven Cottage and the Thames. Both grounds are irreplaceable. Forest's carries more dramatic history. Fulham's more gentle continuity.",
 
    BO:"Improbable recent histories, and fanbases that appreciate how unlikely it is to be here, on both sides. Forest's improbability is historical and mythological; Bournemouth's more recent. Both know that smaller clubs can achieve things that weren't supposed to happen. Forest's evidence is older and more extreme.",
 
    AV:"Winning the European Cup defines both clubs' identities. Villa's came in 1982, part of a longer history of genuine ambition; Forest's back-to-back triumphs under Clough were among the most improbable achievements in football. Forest's version was more improbable.",
 
    SU:"Loyalty tested and held through genuinely difficult periods, on both sides. Sunderland fell to League One; Forest spent years outside the top flight after their extraordinary peak. Each kept its identity regardless. Both are now in better places.",
 
    LU:"A specific golden era that defines how the fanbase relates to the possible, on both sides. Forest's is Clough and two European Cups; Leeds' Revie and European nights. Both prove that English clubs outside the current elite can be genuinely great.",
 
    IT:"Two clubs whose golden eras defied their size. Forest won back-to-back European Cups; Ipswich lifted the UEFA Cup under Bobby Robson. Both are proof that the impossible visits English clubs that are properly run and properly believed in. Forest's peak was higher; Ipswich's no less improbable for it.",
 
    CH:"Major European trophies, won by both. Chelsea's came through significant spending; Forest's through something that will never be fully explained. Chelsea's came with expectation. Forest's felt like it was happening to people who couldn't quite believe it.",
 
    CV:"Midlands clubs with fanbases that held on through long difficult periods, both of you. Forest spent years outside the top flight after their peak; Coventry years without a home ground. Each kept its identity regardless. Both know that football clubs mean something to their communities that outlasts any particular era.",
  },
  BR:{
    HU:"Start with the overlap. You reached this level from outside the obvious path, by routes that could not differ more. You outsmarted the system, building an edge from data nobody else trusted. Hull dug in and refused to be moved, keeping a name an owner had already decided to sell. Same league, opposite method. You were the cleverest team in the room. Hull was the most immovable.",
    MC:"Process-first and analytically wired, both of you. The underdog/favourite divide is the line: City expect to win everything, Brentford expect to be smart enough to compete with people who spend ten times what they spend.",
    BH:"Data-forward clubs, both of you. Brighton does it with more warmth and communal joy; Brentford more quietly and with more contrarian energy. If you celebrate the smartness openly, Brighton. If you just act on it without needing anyone to notice, Brentford.",
    WO:"Private, process-driven, underdog-comfortable, both of you. Brentford is more explicitly contrarian; Wolves more quietly disciplined. If the data-nerd identity resonates strongly and you want people to know it, Brentford. If it's just how you operate, Wolves.",
 
    LI:"A community at the heart of what the club means, on both sides. Liverpool's is global and mythological; Brentford's intensely local, Griffin Park's streets, Bees United, the community ownership model. Liverpool fans feel the belonging at scale. Brentford fans in a way that's specific and almost private.",
 
    AR:"You both think carefully about how football should be done. Arsenal's thinking is aesthetic and philosophical; Brentford's operational and data-driven. Each believes there's a right way. Arsenal fans argue the case publicly. Brentford fans just see it working and find satisfaction in that.",
 
    EV:"The fanbase's authenticity is the best thing about the institution, at both clubs. Everton's is old, place-rooted, and currently frustrated; Brentford's newer and more consciously constructed through community ownership. Both have genuine supporters. Everton's loyalty has been tested more severely.",
 
    NC:"Something real built through community and collective ownership of identity, on both sides. Newcastle's community is a whole city; Brentford's a west London neighbourhood. Both feel genuinely local. The scale is completely different but the rootedness equally real.",
 
    WH:"Working-class clubs with a strong sense of local identity, both of you. West Ham's is East End and historical; Brentford's west London and more recently constructed through community ownership. Each resists the drift toward corporate football. West Ham fans feel the history. Brentford fans feel the model.",
 
    CP:"South and west London clubs that built genuine Premier League presences without massive resources, both of you. Palace did it through fan culture and atmosphere; Brentford through data and community ownership. The methods differed but the spirit of earning it rather than buying it is the same.",
 
    MU:"Fanbases that know what the club stands for and hold it to that standard, on both sides. United's is historical greatness and the expectation of trophies; Brentford's community ownership, smart thinking, belonging. Each will tell you when the club isn't meeting it. The standards are from entirely different worlds.",
 
    SP:"London clubs with specific identities and a fanbase that takes them seriously, both of you. Spurs' involves history, suffering, a particular kind of dark hope; Brentford's community, process, a quiet satisfaction in doing things properly. Each has supporters who understand what their club represents.",
 
    LE:"Something improbable achieved, and a fanbase's sense of the possible changed, on both sides. Leicester's moment was more explosive and more statistically impossible; Brentford's rise more incremental and model-driven. Both know what it feels like to earn a place most people didn't think was coming.",
 
    NF:"Improbable stories at the heart of both. Forest's improbability is historical and mythological; Brentford's recent and methodological. Both know what it means to be a smaller club that earned something bigger than expected. Forest's involved a genius manager and pure chaos. Brentford's systematic excellence.",
 
    FU:"West London clubs with community-first identities and no complex about their scale, both of you. Fulham have Craven Cottage and a longer top-flight history; Brentford community ownership and a data model that's become nationally admired. Both are undefensive. Both belong.",
 
    SU:"Loyalty tested and held, on both sides. Sunderland's test was more severe, League One, years of decline; Brentford spent decades in the lower leagues before their rise. Each fanbase kept showing up. The character of the loyalty is similar even if the scale of the difficulty differed.",
 
    LU:"Fanbases that feel the identity of the club as something worth protecting, on both sides. Leeds' is confrontational and historically loaded; Brentford's communal and analytically grounded. Both are serious about what the club means. Leeds fans assert it loudly. Brentford fans live it quietly.",
 
    CH:"Two London clubs with recent Premier League presence but opposite routes to it. Chelsea's is backed by enormous spending and historical dominance; Brentford's by smart thinking and community ownership. Both are genuinely Premier League clubs. The contrast between how each got there, and what it means to the fanbase, is about as stark as it gets.",
 
    AV:"The journey to the current position involved real work, on both sides. Villa's involved new ownership and significant investment; Brentford's years of building a model that eventually worked. Both are enjoying a position they earned. The mechanisms and scale were very different.",
 
    IT:"Community pride and belonging to something real matters more than profile, at both clubs. Ipswich's is county-specific; Brentford's neighbourhood-specific. Both are undefensive about their scale. Both arrived in the Premier League by being exactly what they are rather than pretending to be something bigger.",
 
    CV:"The fanbase's loyalty was tested by institutional difficulty, at both clubs. Coventry's was structural and prolonged; Brentford spent decades in the lower divisions before their rise. Both know what it means to keep believing when the circumstances don't justify it. Both are now in better places.",
  },
  BH:{
    HU:"There's real kinship here: you have punched above your size by opposite methods. You did it with a clever plan, an analytics model that turned a small club into a smart one. Hull did it with a flat refusal to be moved, beating an owner's rebrand through collective stubbornness. The resemblance is real. You proved size is not the whole story. You outthought the room. Hull out-stubborned it.",
    BR:"Analytically run, community-rooted, earning your place through intelligence rather than spending, both of you. Brighton does it with more warmth and a bigger stage; Brentford smaller, quieter, more insider. The values are identical, the volume differs.",
    MC:"You both think carefully. Brighton adds warmth, the Amex atmosphere, the community, the delight. City have none of the delight; they have the expectation. Very different emotional registers built on similar analytical foundations.",
    AR:"Careful thinking about how football should be played, on both sides. Brighton is more cheerful and less tortured; Arsenal carries more expectation and more pain. If you're content with your club's direction, Brighton. If you need things to match what they should be, Arsenal.",

    LE:"Pleasantly surprised to find themselves here, both of you. Brighton earned it through a carefully built model; Leicester through a miracle. Brighton's version is more sustained and deliberate, Leicester's more concentrated and explosive. If the careful build matters, Brighton. If you want the one extraordinary thing, Leicester.",

    BO:"South coast clubs without historical reason to be in the Premier League, both of you. Brighton have the bigger operation, the smarter model, the louder stadium; Bournemouth the simpler joy and less overthinking. If the intelligence of the club matters to you, Brighton. If you just want to enjoy it, Bournemouth.",
 
    LI:"You both demand that the club embody a coherent philosophy. Liverpool's is emotional and mythological; Brighton's analytical and process-driven. Each fanbase is engaged beyond the surface. Liverpool's engagement is felt collectively; Brighton's understood intellectually.",
 
    EV:"Loyalty that's unconditional but expressed differently, on both sides. Everton's is quiet, absorbed, place-specific; Brighton's more engaged with the model and the approach. Everton fans endure. Brighton fans understand why things are being done and appreciate the logic even when results disappoint.",
 
    NC:"Genuinely invested in what the club represents beyond results, both fanbases. Newcastle's is place-rooted and communal; Brighton's model-driven and progressive. Newcastle fans care about the city having a club at the top. Brighton fans about a smart club earning its place. Different kinds of pride, equally genuine.",
 
    WH:"Atmosphere and community matter as much as what happens on the pitch, at both clubs. West Ham's community is East End and place-rooted; Brighton's south coast and more broadly progressive. Both feel real. West Ham's identity is more traditional; Brighton's more forward-looking.",
 
    CP:"South London and south coast clubs that built real atmospheres without massive resources, both of you. Palace did it through fan organisation and sheer local intensity; Brighton through an intelligent model and a stadium that generates genuine noise. Both arrived through genuine effort rather than money.",
 
    MU:"Fanbases that hold the club to a standard beyond winning, on both sides. United's is about historical greatness and the expectation of dominance; Brighton's about intelligent, principled football done the right way. Each will tell you when the club isn't meeting it. The standards themselves are very different.",
 
    SP:"An identity built around doing things properly rather than just winning, on both sides. Spurs' version involves suffering and dark humour; Brighton's understanding and appreciating the model. Both fanbases are sophisticated. Spurs fans feel it emotionally. Brighton fans engage with it analytically.",
 
    WO:"Quietly methodical clubs that earn their place through process rather than spending, both of you. Wolves do it with Midlands grit and specific defensive organisation; Brighton with data and a well-understood progressive model. Both avoid chaos. Brighton's version is louder academically; Wolves' quieter culturally.",
 
    FU:"Comfortable with their identity and undefensive about not being one of the biggest clubs, both of you. Fulham's comfort is rooted in Craven Cottage and a long history; Brighton's in a model they believe in. Each fanbase appreciates football done well. Fulham are content. Brighton are engaged.",
 
    NF:"A romantic relationship with improbable success, on both sides. Forest's is older and more mythological; Brighton's more recent and more analytically understood. Both know what it feels like when a smaller club achieves something that wasn't supposed to happen. Forest's version is more chaos-driven. Brighton's more intentional.",
 
    SU:"Fanbases that stayed through difficult periods and now get to enjoy something better, on both sides. Sunderland's difficult period was more extreme; Brighton's rise more sustained and deliberate. Both appreciate their current position, but the emotional journey to get here was very different in character.",
 
    LU:"The fanbase's intensity outlasted the institution's ability to match it, at both clubs. Leeds' is more confrontational and carries more historical weight; Brighton's more engaged and forward-looking. Both care deeply. Leeds fans carry the past loudly. Brighton fans are more focused on the present model.",
 
    CH:"Clubs that have won things and expect to compete, both of you. Chelsea's expectation is rooted in recent spending-powered dominance; Brighton's in a model they believe can sustain. Chelsea fans are currently confused. Brighton fans understand exactly what the club is doing and broadly approve.",
 
    AV:"Genuine positive moments right now, both of you. Villa's is more traditionally rooted, big club, big history, big ambition; Brighton's model-driven and philosophically consistent. Both are enjoyable. Villa fans want trophies. Brighton fans want the model to keep producing.",
 
    IT:"Modest clubs that earned their place through intelligence rather than resources, both of you. Ipswich's is rooted in community and a specific Suffolk pride; Brighton's operational and data-driven. Both are undefensive about their scale. Brighton's approach is more explicitly modern. Ipswich's identity more traditionally community-based.",
 
    CV:"The fanbase's loyalty survived institutional difficulty, at both clubs. Coventry's was more prolonged and structural; Brighton's rise involved years of lower league football and ground-sharing before the Amex. Both have earned their current position. The nature of the difficulty was different but the loyalty equally genuine.",
  },
  WO:{
    HU:"You share the amber and the quiet pride in your own corner of England. You never had to shout about it, Wolverhampton's certainty in itself never really questioned. Hull did have to shout, fighting to keep the City an owner tried to delete from its name. You and Hull City are proud of a place outside the spotlight. You assume it. Hull defended it.",
    BR:"Quietly methodical clubs with no interest in performing for anyone outside the ground, both of you. Brentford earns that through data and community ownership; Wolves through Midlands grit and a consistently underrated football culture. The difference is Wolves have a longer history of genuine top-flight presence.",
    MC:"Systematic, low-chaos, high process, both of you. Scale separates them: City want everything, Wolves want to exceed what they're supposed to be. If disciplined punching-above-weight appeals more than relentless dominance, Wolves.",
    FU:"Quiet and comfortable with their identity, both of you, but Wolves are more competitive about it, there's a quiet fire, a chip; Fulham are more genuinely at peace. If you have the quiet fire, Wolves. If you're actually fine, Fulham.",
 
    LI:"Specific communities the club belongs to, on both sides. Liverpool's is global and mythological; Wolves' Midlands and specific to a city that's always been understated about its football culture relative to what it actually has. Liverpool's is louder by every measure. Wolves' quieter and perhaps more genuinely local for it.",
 
    AR:"A systematic approach to football, on both sides. Arsenal's is aesthetic and principled; Wolves' tactical and organisational. Arsenal fans argue about whether the method is right. Wolves fans just see it working and get on with it. The emotional register around the approach differs significantly.",
 
    EV:"The fanbase gets on with it without drama, at both clubs. Everton absorb difficulty quietly on Merseyside; Wolves quietly in the Midlands. Both care without excessive performance. Both are genuine.",
 
    NC:"Specific regional identities that feel more real than many bigger clubs', on both sides. Newcastle is a whole city organised around football; Wolves a Midlands club with an identity rooted in the city and the region. Both feel locally owned. Newcastle's scale is greater. Wolves' more understated.",
 
    WH:"Working-class clubs with specific regional identities carried without drama, both of you. West Ham are East End, historical, more explicit about their working-class roots; Wolves Midlands, quiet, process-driven. Each resists the drift toward corporate football.",
 
    CP:"Two clubs that arrived in the Premier League and stayed without the resources of bigger clubs. Palace did it through atmosphere and fan culture; Wolves through systematic excellence and a specific approach to recruitment. Neither arrived through spending their way in.",
 
    MU:"Fanbases that defend a clear identity, both of you. United's is about historical dominance and global greatness; Wolves' Midlands, quiet, process-driven, uninterested in being something bigger than it is. The representations are from entirely different ends of football's scale.",
 
    SP:"A specific approach to football the fanbase holds the institution to, on both sides. Spurs' standard is attacking football and individual brilliance; Wolves' systematic, defensively organised, process-driven. The standards they're measuring against are different.",
 
    LE:"Midlands clubs with improbable histories, both of you. Leicester's is the 2016 title; Wolves' their 1950s dominance under Stan Cullis and their recent return to European football. Both prove that Midlands football has depth.",
 
    NF:"Midlands-adjacent clubs with specific identities and fanbases that carry their history, both of you. Forest's is mythological and European; Wolves' domestic and rooted in the 1950s. Both prove that English football has depth beyond the big six.",
 
    BH:"Methodical clubs that earn their place through process, both of you. Brighton's is more explicitly analytical and nationally recognised; Wolves' quieter and more traditional. Brighton's version is louder academically. Wolves' quieter culturally.",
 
    BO:"Comfortable with their identity and undefensive about their scale, both of you. Bournemouth's comfort is newer; Wolves' rooted in a longer history and a Midlands identity that's always been understated. Wolves want to win things. Bournemouth are happy to be here.",
 
    SU:"Fanbases that absorb difficulty without excessive drama, both of you. Sunderland absorbed League One; Wolves years outside the top flight before their recent return. Both held on. Sunderland's version of holding on required more endurance.",
 
    LU:"Specific identities carried with genuine commitment, on both sides. Leeds' is confrontational and historically loaded; Wolves' quieter and more understated. Leeds fans assert it loudly. Wolves fans live it without feeling the need to tell anyone.",
 
    CH:"Quality and resources relative to the league, on both sides. Chelsea have more of both; Wolves are more consistent in their identity. Chelsea are currently finding themselves post-Abramovich. Wolves know exactly who they are and have for decades.",
 
    AV:"Proud histories and quality fanbases, both Midlands clubs. Villa have bigger ambitions and a larger historical footprint; Wolves an identity built around quiet consistency. Both understand the specific experience of being a major club that isn't always in the national conversation as much as it deserves.",
 
    IT:"Doing things properly without needing external recognition, part of the identity for both. Ipswich's version is Suffolk-specific and rooted in the Bobby Robson era; Wolves' Midlands-specific and rooted in decades of systematic football. Both are undefensive about their scale.",
 
    CV:"Midlands clubs where the club belongs to its community more than to any owner, both of you. Coventry's community went through years of groundlessness; Wolves' has had a more stable relationship with its ground. Both prove that Midlands football is more than Birmingham and Aston Villa.",
  },
  FU:{
    HU:"Here's the common ground: you have made peace with not being famous, content at the size you are. Yours came easily, the gentle confidence of a club that never needed to argue about itself. Hull's came after a war, an owner insisting it would be worth more as something else, and a fanbase that disagreed and won. You and Hull City alike are comfortable being yourselves. You always were. Hull earned it.",
    BO:"Two genuinely content clubs, no complex about scale on either side. Fulham have Craven Cottage, the Thames, a long top-flight history and a gentility that sets them apart. Bournemouth's contentment is newer and simpler. If the character of the place matters, Fulham. If you just want the joy without the history, Bournemouth.",
    WO:"Both quiet, but Wolves have a competitive edge beneath the calm, a want to exceed expectations, where Fulham are more genuinely fine. If you carry the quiet fire, Wolves. If you're actually content, Fulham is the honest answer.",
    AR:"You both find meaning in doing things properly. Fulham are content with that as the goal itself; Arsenal fans want the trophies to follow. If you genuinely don't need the trophies to feel like it meant something, Fulham is the more honest answer.",

    IT:"Each club knows exactly what it is and finds that genuinely enough. Ipswich's version is rooted in Suffolk identity and the pride of a small-city club that once competed in Europe. Fulham's in Craven Cottage and a kind of London gentility. Neither is remotely defensive about its scale.",
 
    LI:"A specific place defines each club more than trophies do. The Kop defines Liverpool, Craven Cottage defines Fulham, and both are irreplaceable. Liverpool's place generates mythology and collective emotion; Fulham's a gentle pride, the Cottage, the Thames, a ground that's stood there since 1896.",
 
    MC:"You both appreciate football done well, but the register is entirely different. City fans expect dominance and systematic excellence. Fulham fans appreciate good football while comfortable not expecting to win anything. One's enjoyment comes with expectation. The other's comes with none.",
 
    EV:"For both, the identity matters more than the trophy count. Everton's is rooted in Merseyside loyalty and frustrated ambition; Fulham's in Craven Cottage and a west London contentment. Everton's version carries more frustrated expectation. Fulham's more genuine peace.",
 
    NC:"The place matters as much as the football, for both fanbases. Newcastle's is a whole city; Fulham's a stretch of the Thames and an Edwardian ground. Newcastle fans would follow the club anywhere. Fulham fans are partly there for the Cottage itself.",
 
    WH:"London clubs, working-class roots, genuine community identities, both of you, but West Ham's is more historically loaded and more explicitly defended, Fulham's gentler and more comfortable. West Ham fans feel the weight of history. Fulham fans the lightness of knowing who they are without needing to argue about it.",
 
    CP:"Two London identities that survived commercial football: Palace's south London intensity, Fulham's west London gentility. Both are worth preserving. Palace's version is louder. Fulham's quieter and more comfortable with itself.",
 
    MU:"A clear sense of what the club should be, on both sides. United's is rooted in historical greatness and the expectation of dominance; Fulham's in Craven Cottage and not needing dominance. Each knows what it wants from its club. What they want is completely different.",
 
    SP:"London clubs whose identities predate the Premier League, both of you. Spurs' involves suffering and the specific torture of nearly winning things; Fulham's contentment and the pleasure of being exactly what they are. Both are valid. One's validity costs more emotionally.",
 
    LE:"Premier League survival and occasional flourishing without any expectation of dominance, on both sides. Leicester had their extraordinary moment; Fulham have had their good seasons. Leicester's high-water mark was bigger and more defining.",
 
    NF:"A romantic relationship to their own history and place, on both sides. Forest's romance is Clough and European nights; Fulham's the Cottage, the Thames, and a long story of being in football without being at the top of it. Forest's character involves chaos. Fulham's comfort.",
 
    BH:"Comfortable in their own skin, both of you, Brighton as a data-led progressive club, Fulham as Craven Cottage and west London identity. Both belong. Brighton's identity is forward-looking; Fulham's gently conservative.",
 
    SU:"The fanbase's loyalty outlasted the institution's ability to reward it, on both sides. Sunderland's test was far more severe, Fulham have had relegations and difficult periods but nothing like League One. Both kept showing up. Both know what the club means beyond any particular season.",
 
    LU:"Each fanbase carries the club's identity with genuine commitment. Leeds' is confrontational and historically loaded; Fulham's gentler and more comfortable. Leeds fans assert the identity loudly. Fulham fans carry it quietly, the Cottage always in the background.",
 
    CH:"Two west London clubs with completely different relationships to ambition and money. Chelsea built an identity around dominance through spending; Fulham theirs around Craven Cottage and being comfortable with what they are. Chelsea's identity currently feels unmoored. Fulham's is as clear as it's ever been.",
 
    CV:"Contentment with identity defines both, but Coventry's was forged through necessity, because when you lose your home ground you learn to carry the identity without the place. Fulham's is more comfortable and long-standing. Both know who they are. Coventry's knowledge was harder to hold onto.",
  },
  BO:{
    HU:"The two of you are genuinely glad to be exactly where you are. Yours is sunshine, the easy joy of a small south-coast club that keeps surprising itself. Hull's is harder won, a club it once had to defend from an owner who wanted to rename it. Hull City and you are content in your own skin. Yours came free. Hull's it had to fight for.",
    FU:"Genuinely content clubs with no identity crisis about their size, both of you. Fulham has the Thames, Craven Cottage, and a century of First Division football as context for that contentment. Bournemouth's is newer, earned through an unlikely ascent, and carries more of the surprise still in it.",
    LE:"Small clubs with improbable recent histories, both of you. Leicester's story is more dramatic now and comes with more expectation; Bournemouth are still just happy to be here, no complex attached. If the miracle still defines you, Leicester. If you've moved past that and just want to enjoy the football, Bournemouth.",
    BH:"South coast, progressive, without historical reason to be in the Premier League, both of you. Brighton have the smarter operation and the bigger stadium; Bournemouth the simpler joy and less overthinking. If the analytics and the careful model matter to you, Brighton. If you just want to enjoy it, Bournemouth.",

    IT:"Modest clubs genuinely content with their place, both of you. Ipswich's is rooted in a specific Suffolk identity and the Bobby Robson era; Bournemouth's newer, built around a rapid rise. Both are undefensive about their size. The difference is history versus present tense.",
 
    LI:"Genuine joy in what the club represents beyond the weekly result, on both sides. Liverpool's is operatic and collective; Bournemouth's simpler and more personal. Liverpool fans feel it as mythology. Bournemouth fans as something still surprising. Both are genuine. The scale of the emotional investment is very different.",
 
    MC:"The quality of football is something to appreciate at both clubs. City's comes with enormous expectation; Bournemouth's with genuine surprise that they're here at all. Both enjoy good football. City fans take it as their right. Bournemouth fans as a gift.",
 
    AR:"Meaning found in football done properly, on both sides. Arsenal's comes with philosophical weight and decades of expectation; Bournemouth's is simpler, they're just genuinely happy to be playing good football in the Premier League. Both appreciate the how. Arsenal fans argue about it; Bournemouth fans just enjoy it.",
 
    EV:"The fanbase is the most genuine thing about the institution, at both clubs. Everton's carries decades of frustrated loyalty; Bournemouth's is newer to the Premier League and still partly amazed by it. Both have real communities. Everton's is heavier; Bournemouth's lighter.",
 
    NC:"Community is central at both clubs. Newcastle's is a whole city organised around football; Bournemouth's a south coast town that didn't expect to be here. Both have genuine local identity. The scale and intensity of Newcastle's community attachment is significantly greater.",
 
    WH:"Belonging and place matter at both clubs. West Ham's belonging is working-class East London, historically loaded; Bournemouth's south coast and newer. Both have real local identity. West Ham fans carry a weight of history with their belonging. Bournemouth fans a sense of surprise.",
 
    CP:"Two clubs that arrived in the Premier League without the resources of bigger clubs and found a way to stay. Palace did it through atmosphere and fan culture; Bournemouth through coaching excellence and a community identity. Both are genuinely happy to be competing. The routes were different but the spirit of earning it is the same.",
 
    MU:"Real passion on both sides, but the emotional register is completely different. United's comes with expectation, history, and grief when it isn't met; Bournemouth's with gratitude and surprise. United fans feel entitled to success. Bournemouth fans feel lucky to be involved.",
 
    SP:"Hope plays a central role in the fanbase experience, on both sides. Spurs' is tortured and self-aware; Bournemouth's simpler and more straightforward. Both keep believing. Spurs fans do it despite historical evidence that it will probably hurt. Bournemouth fans because things have genuinely been going well.",
 
    NF:"Improbable recent histories, both of you. Forest's is older and more mythological; Bournemouth's more recent and still being written. Both know what it means to be a smaller club that achieved something bigger than expected. Forest's version involves more chaos. Bournemouth's more steady progress.",
 
    BR:"Modest clubs that earned their place through quality rather than resources, both of you. Brentford's is analytical and community-rooted; Bournemouth's coaching-driven and community-based. Both are genuinely content to be competing. Brentford's route was more explicitly model-driven; Bournemouth's more personality-driven.",
 
    WO:"Comfortable with their scale and undefensive about it, both of you. Wolves have a longer history and a Midlands identity that gives the contentment more weight; Bournemouth's is newer. Both just get on with it without needing external validation.",
 
    SU:"The fanbase's loyalty outlasted genuinely difficult periods, on both sides. Sunderland's was more severe; Bournemouth's rise more recent and less hard-won. Both appreciate where they are now relative to where they've been. The character of the journey was very different.",
 
    LU:"The community's passion is genuine and real, on both sides. Leeds' is louder, more confrontational, and carries historical weight; Bournemouth's quieter and more grateful. Both care. Leeds fans assert their identity. Bournemouth fans enjoy theirs.",
 
    CH:"Success is something both fanbases have tasted. Chelsea's was bought and dominant; Bournemouth's smaller and more personal. Each has good memories to draw on. Chelsea fans expect more of it. Bournemouth fans are happy with what they have and what might still come.",
 
    AV:"Fanbases in positive moments relative to recent history, both of you. Villa's is bigger in scale and ambition; Bournemouth's simpler and more grounded. Both appreciate it. Villa fans want trophies. Bournemouth fans want to keep being competitive in the best league in the world.",
 
    CV:"Survival has been a genuine theme at both clubs. Coventry's story is more dramatic and structural; Bournemouth went through administration before their remarkable rise. Both know what it means to exist without certainty. The current contentment of both fanbases is earned rather than assumed.",
  },
  AV:{
    HU:"Same instinct at work. You respect where you came from, the history and the place behind the club. You carry the past without being trapped by it, the old glory feeding the hunger rather than replacing it. Hull was ready to go to the wall for its, refusing to let an owner sell the name off for reach. The near-miss makes sense: you honour the roots. You build on them. Hull defended them.",
    LI:"Genuine European pedigree and current ambition, on both sides. Liverpool's identity is fully formed and rooted in mythology; Villa's being rebuilt, the hunger newer and the joy of it different. If you want the completed story, Liverpool. If you want to be part of one being written, Villa.",
    NC:"Ambitious clubs with proud histories and a genuine resurgence, both of you. The difference is place and scale: Newcastle is a whole city with a single identity, Villa a sleeping giant in the UK's second city, which makes the identity bigger and more diverse.",
    MU:"Former-greatness clubs with European Cup history and high expectations, both of you. United's former greatness was more recent and more dominant; Villa's older and the current rebuild feels more hopeful. If you're grieving something, United. If you're building toward something, Villa.",
 
    MC:"A genuinely exciting period of ambition and quality, enjoyed by both. City's is sustained and dominant; Villa's newer and feels more like a return than a continuation. Both fanbases enjoy watching good football, but City fans now expect it while Villa fans are still partly surprised by it.",
 
    AR:"Two clubs rebuilding toward historical standards they feel they belong at. Arsenal's rebuild is longer and more argued over; Villa's newer and the excitement less complicated. Each believes the club is going somewhere. Arsenal fans are more anxious about it. Villa fans more openly enjoying the ride.",
 
    EV:"Historically significant clubs navigating difficult periods relative to their own standards, both of you. Everton's has been more prolonged and painful; Villa's resurgence real and recent. Each understands what it means to be a big club that isn't currently at the top. The register is different: Everton endures, Villa believes.",
 
    WH:"Working-class roots and genuine histories navigating the modern game, both of you. West Ham's identity is more place-specific and resistant to change; Villa's has broadened and the ambition is currently higher. Each fanbase remembers better times and believes they're coming back. Villa's belief is currently being vindicated.",
 
    CP:"A real fanbase culture built without the infrastructure to match it, on both sides. Palace's is more locally concentrated; Villa's regional and broader. Each has something authentic beneath the club's fortunes. Villa's current moment is giving that authenticity a platform it hasn't had in decades.",
 
    SP:"Defined by proximity to greatness they can almost reach, both of you. Spurs have been close without converting; Villa have history but it's older, and the current rebuild is trying to write the next chapter. Each lives with the knowledge that the club could and should be competing at the top. Villa's hope currently feels more grounded.",
 
    LE:"The specific joy of doing something improbable, experienced by both. Leicester's moment was more concentrated and more statistically impossible; Villa's European Cup was longer ago but equally defining. Each knows what it feels like when a football club becomes something bigger than the game for a moment.",
 
    NF:"European Cup history that defines the club regardless of what comes after, on both sides. Forest's is more mythological, Clough, the chaos, the back-to-back improbability; Villa's part of a longer history of genuine top-flight presence. Each knows what it is to have been truly great and to be working toward that again.",
 
    BR:"Careful thinking driving genuine progress, on both sides. Brentford's is operational and data-led; Villa's more traditional but with new ownership and genuine investment. Brentford are building steadily. Villa rapidly. Both believe in a process. The scale and pace are very different.",
 
    BH:"Genuine progress through intelligent approaches, on both sides. Brighton's model is one of the most admired in European football; Villa's more conventional but backed by serious investment. Each fanbase is currently enjoying watching their club play good football. Brighton's satisfaction is more about the model; Villa's more about the destination.",
 
    WO:"Midlands clubs with proud histories and quality fanbases, both of you. Wolves have a specific identity built around quiet consistency and Midlands grit; Villa broader ambitions and a bigger historical footprint. Both understand the specific experience of being a major club that isn't in the national conversation as much as it deserves.",
 
    FU:"A certain elegance about the identity, on both sides. Fulham's is understated and rooted in Craven Cottage; Villa's grander and more historically loaded. Each fanbase appreciates football done properly. Fulham's contentment is quieter. Villa's ambition louder and currently being matched by the club's trajectory.",
 
    BO:"Punching above what their recent histories suggested, both of you. Bournemouth's rise is more recent and more surprising; Villa's a return rather than a first arrival. Each fanbase is genuinely enjoying the current moment. The difference is Villa fans have a historical standard to return to, Bournemouth fans are writing the first chapter.",
 
    SU:"Community loyalty unconditional, institutional history complicated, on both sides. Sunderland's complications have been more painful and more recent; Villa's difficulties real but briefer. Each knows what it means to support a club through genuine difficulty. Villa's current trajectory makes the contrast sharper.",
 
    LU:"Big fanbases and complicated histories, both of you. Leeds' identity is more combative and confrontational; Villa's grander and more historically established. Each has fans who feel the club should be competing at the highest level. Leeds' frustration is louder. Villa's belief is currently being rewarded.",
 
    CH:"Genuine historical prestige navigating transitions, on both sides. Chelsea's is chaotic and identity-less beneath the spending; Villa's purposeful and building toward something specific. Both have won major trophies. Chelsea fans currently feel the confusion of a club without a clear identity. Villa fans the excitement of one being rebuilt.",
 
    IT:"Community pride is genuine and the football matters beyond results, at both clubs. Ipswich's is county-specific and rooted in the Bobby Robson era; Villa's broader and more historically loaded. Each has fans who care about the club as an institution. The scale of ambition currently differs significantly.",
 
    CV:"Loyal Midlands fanbases that have been through genuinely difficult periods, both of you. Coventry's was more prolonged and more structural; Villa's shorter and the recovery more dramatic. Each knows what it means to support a club that should be bigger than its current circumstances. Villa's circumstances have dramatically improved.",
  },
  SU:{
    HU:"You've got genuine overlap. You stayed through the kind of collapse that empties other grounds. You stayed out of heartbreak, filling 46,000 seats in the third tier when nobody would have blamed you for drifting off. Hull stayed out of stubbornness, refusing to be rebranded out of its own identity. Both loyalties were proven in the bad years. Yours is grief carried with pride. Hull's is defiance.",
    NC:"Northern, communal, place-rooted, both, with painful institutional histories followed by genuine optimism. Newcastle's fanbase is larger and the trajectory further along; Sunderland's story rawer, the fall deeper and the comeback still being written.",
    EV:"Defined by loyalty through difficulty and communal suffering, both of you. Everton's is quieter and more private; Sunderland's was documented publicly, which gave it a different quality, the whole world watched the pain and the comeback.",
    LU:"Intensely passionate northern fanbases that have been through genuine darkness and come back, both of you. Leeds' identity is more operatic and volatile; Sunderland's more communal and specifically rooted in a city that lost more than just its football club.",

    CV:"Defined by survival and institutional difficulty the fanbase absorbed without abandoning ship, both of you. Sunderland's involved a fall to League One and the long climb back; Coventry's years without a proper home ground. Each tested loyalty beyond what most fanbases would tolerate and found it still there.",
 
    LI:"The fanbase's loyalty is unconditional and communal, on both sides. Liverpool's community has mythology and global reach; Sunderland's is more local and has been tested more severely, the Stadium of Light held 46,000 in League One. Liverpool's is louder. Sunderland's may be more unconditional.",
 
    MC:"Large northern fanbases that have been through very different kinds of difficulty, both of you. City's was mid-table obscurity; Sunderland's a fall to the third tier. City's story resolved into extraordinary dominance. Sunderland's is a longer climb back toward where they believe they belong.",
 
    AR:"A fanbase that believes the club deserves more than it currently has, on both sides. Arsenal's belief is principled and argued; Sunderland's simpler and more communal, this is our club, it belongs here, it should be competing. Both are frustrated. The scale and character of the frustration is different.",
 
    WH:"Institutional decisions damaged the fanbase's trust, and yet the loyalty held, at both clubs. West Ham left Upton Park; Sunderland fell to League One under ownership that didn't deserve the fanbase it had. Both absorbed what no supporter base should have to. Both are still there.",
 
    CP:"Supporters built something the institution didn't always deserve, at both clubs. Palace fans created the Holmesdale atmosphere from scratch; Sunderland fans filled the Stadium of Light in League One. Both proved what a community can do without the club doing much to earn it.",
 
    MU:"Large fanbases and complicated institutional histories, both of them northern. United's involves a fall from sustained dominance; Sunderland's a fall to the third tier. The scale of what they were holding on for was completely different.",
 
    SP:"Loyalty tested by the institution's inability to meet the fanbase's reasonable expectations, on both sides. Spurs' frustration is about trophies; Sunderland's has been about stability, league position, basic institutional competence. Both kept showing up. Sunderland's loyalty has been tested more severely.",
 
    LE:"The specific joy of getting something they'd been waiting for, experienced by both. Leicester got the Premier League title; Sunderland their return to the Premier League after years in the lower divisions. Both were earned. Leicester's was more globally celebrated. Sunderland's more deeply personal.",
 
    NF:"Golden eras carried as permanent proof of what the club can be, on both sides. Forest's is European cups under Clough; Sunderland's the First Division titles from the early 20th century and moments like the 1973 FA Cup Final. Both know the club was genuinely great once.",
 
    BR:"Community and the specific identity of the place is central to what the club means, on both sides. Brentford is explicitly community-owned; Sunderland's community kept the club going through League One and back. Both are examples of supporters defining the club rather than the club defining the supporters.",
 
    BH:"Genuine rather than performative fanbases, on both sides. Brighton's authenticity is newer and more analytically engaged; Sunderland's older and more severely tested. Brighton fans understand what the club is trying to do. Sunderland fans just keep showing up because it's their club and that's what you do.",
 
    WO:"Two clubs that get on with it without needing external validation. Wolves do it quietly in the Midlands; Sunderland with a quiet northern stoicism on Wearside. Both absorb difficulty without excessive performance. Sunderland's version has required more endurance.",
 
    FU:"The identity held independently of results, at both clubs. Fulham's is comfortable and specific to Craven Cottage; Sunderland's survived League One. Fulham's knowledge is lighter. Sunderland's was forged through something more difficult.",
 
    BO:"Prolonged difficulty before better times, experienced by both. Bournemouth went through administration; Sunderland went to League One. Each held on through periods that tested loyalty. Both are now competing at a higher level. Bournemouth's improvement has been more dramatic.",
 
    IT:"Community loyalty carried through difficult periods defines both. Ipswich have had long periods outside the top flight; Sunderland went further, all the way to League One. Each kept its identity regardless of division.",
 
    CH:"The fanbase's identity complicated by institutional decisions, at both clubs. Chelsea's was shaped by billionaire ownership that transformed the club; Sunderland's by ownership that took the club to League One. Sunderland's test was more basic and more prolonged.",
 
    AV:"Unconditional loyalty, complicated institutional history, on both sides. Villa's complications were briefer and the recovery more dramatic; Sunderland's difficulty more prolonged. Villa's belief is currently being rewarded more visibly.",
  },
  LU:{
    HU:"You and Hull City are rooted and road-worn, fanbases that have been down the divisions and back. You live every high and low at full volume, the drama half the identity. Hull held its line more quietly, fighting to keep its name without making theatre of it. You and Hull City alike are unmistakably yourselves. You perform it. Hull just refused to be anything else.",
    LI:"Maximum-intensity clubs with huge fanbases and complete emotional commitment, both of you. Liverpool's identity is more mythological and the history cleaner; Leeds' more chaotic and contradictory. If you want the clean collective myth, Liverpool. If you want the full complicated operatic version, Leeds.",
    SU:"Intensely passionate northern fanbases that have been through institutional pain and still show up, both of you. The difference is Leeds carry it at higher volume and with more edge: Elland Road is confrontational, the identity combative. Sunderland's loyalty is quieter, more resigned, more about endurance than assertion.",
    EV:"Suffering is real and loyalty unconditional, at both clubs. Everton's is quieter; Leeds' louder and with more chaos and more recent trauma. If you stew privately, Everton. If you process it loudly, Leeds.",
 
    MC:"A dramatic transformation in the recent history of both. City's brought sustained dominance; Leeds' a dramatic fall and a long rebuilding. City fans expect the top. Leeds fans believe they belong there and are frustrated by not being there.",
 
    AR:"Strong sense of identity, and a fanbase that holds the institution to it, on both sides. Arsenal's is principled and aesthetic; Leeds' confrontational and historically rooted in Revie, Bremner, and a specific northern English combativeness about what the club means. Each will tell you loudly who they are.",
 
    NC:"Northern clubs with massive fanbases and a sense they should be competing at the top, both of you. Newcastle's is place-rooted and community-first; Leeds' more historically loaded and combative. Each feels the club is bigger than its current position. Both are probably right.",
 
    WH:"Roots in the working class, carried as identity, on both sides. West Ham's are East End and historical; Leeds' West Yorkshire and more confrontational. Each resists the drift toward corporate football. Each would tell you it's more real than most other supporters. Both mean it.",
 
    CP:"Atmospheres more intense than the club's position might suggest, on both sides. Palace's Holmesdale is the most organised fan culture in the Premier League; Elland Road historically one of the most intimidating grounds in England. Each fanbase has created something the institution didn't give them.",
 
    MU:"Big northern fanbases and complicated histories, both of you. United's is more successful but Leeds' arguably more operatic, the Revie era, the fall, the Championship years. Each believes the club belongs at the top. United's belief is backed by recent evidence. Leeds' by older history and sheer conviction.",
 
    SP:"Suffering and hope coexist in an ongoing unresolved relationship, on both sides. Spurs do it with self-aware dark humour; Leeds with confrontational intensity. Each has been close to things without consistently getting them. Both keep believing. The register around that belief is very different.",
 
    LE:"Significant moments in their history that define how the fanbase relates to the possible, on both sides. Leicester's is 2016; Leeds' the Revie era and the European nights. Both have reference points for genuine greatness. Leicester's is more recent. Leeds' older but equally defining for those who lived it.",
 
    NF:"A specific era defines the fanbase's relationship with the possible, on both sides. Forest's is Clough and two European Cups; Leeds' Revie and a team feared across Europe. Both prove that smaller English clubs can be genuinely great. Each carries that knowledge and measures subsequent managers accordingly.",
 
    BR:"The club's identity is something worth protecting, both fanbases feel. Brentford's is communal and analytically grounded; Leeds' combative and historically loaded. Both are serious about what the club means. Leeds fans assert it loudly. Brentford fans live it quietly.",
 
    BH:"Strong identities but very different emotional registers, on both sides. Brighton's is forward-looking and model-driven; Leeds' historically rooted and confrontational. Brighton fans appreciate the process. Leeds fans carry the weight of what the club used to be and still believe it can be.",
 
    WO:"Two clubs that know who they are without external validation. Wolves do it quietly in the Midlands; Leeds loudly in West Yorkshire. Each feels its club belongs higher than it sometimes is. Wolves' version of that feeling is quieter. Leeds' significantly louder.",
 
    FU:"Genuine histories their fanbases carry, on both sides. Fulham's is gentle and specific to Craven Cottage; Leeds' operatic and nationally loaded. Fulham's understanding is lighter. Leeds' heavier and more confrontational.",
 
    BO:"Genuine rather than performative fanbases, on both sides. Bournemouth's passion is newer and lighter; Leeds' older and carries more weight. Bournemouth fans are grateful for what they have. Leeds fans believe they deserve more than they currently have and are vocal about it.",
 
    IT:"Genuine commitment to a proud history, on both sides. Ipswich's is quieter and county-specific; Leeds' louder and nationally loaded. Leeds fans tend to believe it confrontationally. Ipswich fans quietly.",
 
    CH:"Significant historical identities navigating complicated recent periods, on both sides. Chelsea's involves post-billionaire confusion; Leeds' a dramatic fall from the top and a prolonged attempt to return. Chelsea fans currently navigate which version of the club they belong to. Leeds fans have always known.",
 
    CV:"Proud histories, and fanbases that kept the identity alive through genuinely difficult periods, on both sides. Coventry's difficulty was structural and prolonged; Leeds' involved Championship years and ownership chaos. Both held on. Each believes the club should be bigger than its circumstances. Leeds fans tend to be louder about that belief.",
  },
  CH:{
    HU:"Cut to what's shared: you remember what it felt like when it mattered. You remember winning, the trophies and nights that defined a generation. Hull remembers a fight, the years its fanbase spent refusing to let an owner rebrand the club out of existence. It's a close call for a reason. You hold onto something the club used to be. You miss the winning. Hull kept the thing worth keeping.",
    MU:"Historically great clubs navigating decline from very recent peaks, both of you. United's identity is more rooted in legacy and status; Chelsea's more layered, the glamour of the neighbourhood, the Abramovich transformation, the specific grief of having it taken by geopolitics.",
    AR:"London clubs with prestige and a fanbase that holds its identity carefully, both of you. Arsenal's is principled and aesthetic; Chelsea's more worldly, shaped by money and transformation and grief in ways Arsenal's hasn't been.",
    WH:"West London clubs with complicated relationships with their own identity, both of you. West Ham's complication is the stadium move; Chelsea's the Abramovich era and what came after. The difference is mythology: West Ham have Upton Park, Chelsea the King's Road and 19 trophies.",
 
    LI:"European pedigree and passionate fanbases on both sides. Liverpool's identity is rooted in community and mythology; Chelsea's in a specific west London identity that predates the money and has been somewhat buried by it. Liverpool fans carry the past as fuel. Chelsea fans navigate which version of the club they belong to.",
 
    MC:"Titles won through significant investment and systematic excellence, on both sides. City's has been more sustained and more dominant; Chelsea's more chaotic and less consistent. City fans now expect to win things. Chelsea fans have more complicated feelings about what their recent dominance means.",
 
    EV:"Former glory and current frustration, carried by both. Everton's is longer and deeper; Chelsea's more recent and more confusing, they spent enormous amounts and the results were inconsistent. Each understands what it means to expect more than they're getting. The emotional quality of the frustration is different.",
 
    NC:"A fanbase that feels the club belongs at the top of the game, on both sides. Newcastle's belief is rooted in place and community; Chelsea's in recent dominance and historical west London identity. Both currently feel the gap between where they are and where they should be. Newcastle's frustration is older and more communal. Chelsea's more recent and more confused.",
 
    CP:"Specific community identities behind both badges. Palace's is south London, locally concentrated, fiercely maintained; Chelsea's west London, historically rooted, but complicated by decades of external money and ownership. Both are real. Palace's has been better preserved.",
 
    SP:"History and expectation weigh on both fanbases. Spurs' is rooted in proximity to greatness they haven't quite reached; Chelsea's in recent dominance that is now fading. Both currently feel a gap between what they should be and what they are. Spurs fans have always felt it. Chelsea fans are newer to it.",
 
    LE:"The title won in circumstances that felt surprising to the wider world, on both sides. Chelsea's titles were driven by spending; Leicester's by something genuinely miraculous. Each has a moment to point to. Chelsea fans have multiple. Leicester fans one that will never be fully explained.",
 
    NF:"European Cup wins that define the club's identity, on both sides. Forest's were more improbable and more mythological; Chelsea's more recent and more resource-intensive. Both know what it means to have been genuinely great in Europe. The character of how they got there is very different.",
 
    BR:"London clubs, and the contrast in how each relates to community and money is about as stark as football offers. Brentford is community-owned, data-led, rooted in a neighbourhood; Chelsea has been shaped by external billionaire ownership. Both have supporters who care. What they're supporting is entirely different.",
 
    BH:"Careful thinking about football, on both sides. Brighton thinks analytically and builds a model; Chelsea spends and iterates. Both have had periods of genuine quality. Brighton's satisfaction comes from the method. Chelsea's from the results. Currently Brighton's method feels more coherent than Chelsea's approach.",
 
    WO:"Quality and expectation but very different identities, on both sides. Wolves are quiet, methodical, Midlands-rooted; Chelsea loud, resourced, and currently finding themselves. Both have good footballers. Wolves know what they are. Chelsea are working out what they are post-Abramovich.",
 
    FU:"Two west London neighbours with very different relationships to money and identity. Fulham are content with what they are; Chelsea have built an identity around ambition and spending that is currently feeling unmoored. Both have real history. Fulham's identity is clearer and more consistently held.",
 
    BO:"Both have won things and know what success feels like. Chelsea's was bought and dominant; Bournemouth's smaller and more genuine. Chelsea fans expect more success. Bournemouth fans appreciate what they have. The relationship each fanbase has to success is formed by completely different experiences of it.",
 
    SU:"The fanbase's loyalty has been tested, on both sides. Sunderland's test was institutional and prolonged; Chelsea's is more existential, who are we without the billionaire? Both are navigating what the club means. Sunderland fans know exactly. Chelsea fans are working it out.",
 
    LU:"Big fanbases and complicated recent histories, both of you. Leeds' are rooted in a dramatic fall from the top; Chelsea's in money-fuelled success that is now gone. Each has fans who remember better times. Leeds fans carry it as identity. Chelsea fans as expectation.",
 
    IT:"Belonging to the institution means something specific, at both clubs. Ipswich's is local, community-rooted, tied to the Bobby Robson era; Chelsea's more fragmented, different eras meaning different things to different fans. Ipswich fans know exactly what the club means to them. Chelsea fans have more to navigate.",
 
    CV:"The fanbase's identity complicated by decisions made above them, at both clubs. Coventry lost their ground; Chelsea lost their owner and the certainty that came with him. Each is navigating what the club is without the defining thing that shaped it. Coventry fans held on through it. Chelsea fans are still finding out if they will.",
  },
  IT:{
    HU:"You share the core of it. You choose belonging to something real over something famous, and neither feels small about it. You settled into that peacefully, a Suffolk identity at ease with itself. Hull arrived at the same place through a fight, when an owner tried to trade the name away for a bigger market. Both communities are rooted and unbothered by scale. Yours was never threatened. Hull's was, and it held.",
    FU:"Two clubs that know exactly what they are and find it genuinely enough. Fulham has the character of place, Craven Cottage, the Thames, the understated history; Ipswich the community roots in Suffolk and the Bobby Robson mythology.",
    BO:"Modest clubs genuinely happy to be in the Premier League and undefensive about not being Arsenal, both of you. Ipswich has the deeper historical roots and the Robson mythology; Bournemouth is simpler, smaller, and lighter about it.",
    NC:"Community is the whole point at both clubs. Newcastle's is louder and larger; Ipswich's more specific, Suffolk, Portman Road, a market town that happens to have a football club.",
 
    LI:"Specific communities at the heart of what the club means, on both sides. Liverpool's is global and mythological; Ipswich's a county, Suffolk, specific, agricultural, quietly proud. Both matter to people for reasons beyond football. Liverpool's globally. Ipswich's locally, and all the more specifically for that.",
 
    MC:"Extraordinary things achieved at their level, by both. City achieved sustained domestic dominance; Ipswich a UEFA Cup with a county town club under Bobby Robson. Each has a period to point to. City fans live in it continuously. Ipswich fans hold it as something improbable that actually happened.",
 
    AR:"Value found in doing things properly, on both sides. Arsenal's version is philosophical and aesthetic; Ipswich's quieter and more community-rooted, the Bobby Robson era, the specific Suffolk pride. Each believes in the right way. Arsenal argues about it. Ipswich just remembers it.",
 
    EV:"The local community identity is the most genuine thing about the institution, at both clubs. Everton's is Merseyside, in Liverpool's shadow; Ipswich's Suffolk, distinct and quietly proud. Each holds the club as something that belongs to its place more than to any owner.",
 
    WH:"Specific working-class or community identities that matter independently of results, on both sides. West Ham's is East End, historical, explicitly defended; Ipswich's Suffolk, quieter, rooted in a specific era under Bobby Robson that gave the fanbase something to hold onto permanently.",
 
    CP:"Local belonging outranks national profile for both. Palace's is south London intensity; Ipswich's Suffolk quietness. Both are real. Both would trade national profile for authenticity without hesitation.",
 
    MU:"A clear sense of what the club means to the fanbase, on both sides. United's is rooted in historical greatness and global reach; Ipswich's in a county, a community, and a specific era under Bobby Robson. Both care deeply. What they're caring about is from entirely different ends of football's scale.",
 
    SP:"Hope plays a consistent role for both fanbases. Spurs' is about trophies that never quite arrive; Ipswich's about belonging to the top flight and remaining competitive. Both keep believing. Spurs fans with increasing self-awareness. Ipswich fans with a quiet optimism rooted in a community that genuinely loves the club.",
 
    LE:"Something bigger than their profile suggested possible, achieved by both. Leicester won the title against all odds; Ipswich the UEFA Cup under Bobby Robson with a team that cost almost nothing. Each has a moment. Leicester's is more recent. Ipswich's older and perhaps more surprising in context.",
 
    NF:"Improbable golden eras their fanbases carry permanently, on both sides. Forest won two European Cups; Ipswich a UEFA Cup under Bobby Robson. Both prove that the impossible happens in English football to clubs that are properly run and properly believed in.",
 
    BR:"Doing things properly without spending big is a point of pride, on both sides. Brentford formalised this through data and community ownership; Ipswich's version is older and rooted in the Bobby Robson era. Both arrived in the Premier League as themselves. Both belong.",
 
    BH:"Earned a Premier League place through intelligence and organisation rather than spending, both of you. Brighton's model is nationally recognised; Ipswich's quieter and more historically rooted. Both are genuine. Brighton's approach is more explicitly modern. Ipswich's more traditionally community-based.",
 
    WO:"Neither club needs external validation. Wolves get on with it through Midlands grit; Ipswich through Suffolk quiet. Both are completely undefensive about their scale. Neither needs to be bigger than it is to feel the identity is worth having.",
 
    AV:"Genuine pride, and football that matters beyond results, at both clubs. Villa's is bigger, grander, and currently being matched by genuine ambition; Ipswich's quieter and more internally held. The scale of ambition and resources currently differs significantly.",
 
    SU:"Defined by community loyalty through difficult periods, both of you. Sunderland's was more severe and more recent; Ipswich have had long periods outside the top flight. Each kept its identity regardless of league position. Both know the club means something specific to a specific community regardless of division.",
 
    LU:"Proud histories carried with genuine commitment, on both sides. Leeds' involves European nights and a combative national identity; Ipswich's an FA Cup and a UEFA Cup under Bobby Robson. Each believes in what the club was and what it could be. Leeds is louder about it.",
 
    CH:"Things won in European competition, by both. Chelsea's record is more recent and more resourced; Ipswich's older and more improbable. Each fanbase has good memories to draw on. Chelsea fans many recent ones. Ipswich fans fewer but perhaps more personally meaningful ones.",
 
    CV:"For both clubs the local community is the whole point, and always has been. Coventry is a city that kept its football club at the centre of its identity through industrial change; Ipswich a county town that once competed in Europe and holds that memory with quiet pride. Both are examples of football genuinely belonging to its place.",
  },
  CV:{
    HU:"Set you beside Hull City and the likeness shows: you kept faith through a club that kept finding ways to test it. Yours was exile, years spent playing miles from the city on the badge before you got home. Hull's was the name itself, an owner who decided the word City was bad for business. Neither of you let go of the thing that made the club yours. You got your ground back. Hull kept its name.",
    WH:"Institutional decisions made above the fanbase left genuine scars, at both clubs. West Ham's wound is the Upton Park move; Coventry's the ground saga. Each involves a fanbase that kept showing up despite having every reason not to.",
    EV:"Defined by loyalty that required no reward to persist, both of you. Everton's is quiet and absorbed; Coventry's has been tested more directly by institutional failure, they didn't just wait, they kept showing up for a club that seemed to be actively dismantling what belonging meant.",
    SU:"Defined by survival and comeback, both of you. Sunderland's fall was more dramatic; Coventry's different, the club was there, but the home wasn't. Both are genuinely about loyalty in extremis.",
 
    LI:"The identity held passionately regardless of circumstances, on both sides. Liverpool's passion is loud, mythological, and backed by sustained success; Coventry's quieter, more resigned, and backed by a loyalty that survived years without a proper home ground. Both are genuine. The emotional register is completely different.",
 
    MC:"Prolonged periods without the thing they most wanted, endured by both. City spent decades below Arsenal and United; Coventry years without a home ground. Both held on. City's wait ended with extraordinary dominance. Coventry's with a return to the CBS Arena.",
 
    AR:"A fanbase that believes the club deserves better than it currently has, on both sides. Arsenal's is rooted in philosophical conviction; Coventry's in a simpler loyalty, this is our club, it should have a proper home, it should be competing. Both are frustrated. Arsenal's is about standard. Coventry's about survival.",
 
    NC:"The community's relationship to the institution tested by decisions made above the fanbase, on both sides. Newcastle's community was sold to sportswashing ownership; Coventry's lost their home ground. Each kept showing up. The nature of the betrayal was different but the loyalty the same.",
 
    MU:"The gap between what the fanbase deserves and what the institution provides has been considerable, on both sides. United's is about recent decline after extraordinary success; Coventry's about years of structural neglect. Both held on. The scale and character of the expectation is entirely different.",
 
    SP:"Defined by hope in the face of persistent near-misses or difficulty, both of you. Spurs' is about trophies that keep not arriving; Coventry's about stability and a proper home that kept not arriving. Both kept believing. Spurs fans with dark humour. Coventry fans with quiet stubborn loyalty.",
 
    LE:"Midlands-adjacent clubs with improbable recent histories, both of you. Leicester's was a title won against all odds; Coventry's surviving prolonged structural chaos. Each proved something about what fanbases can hold onto. Leicester proved miracles happen. Coventry that loyalty outlasts almost anything.",
 
    NF:"The fanbase's stubbornness kept the club going through difficult periods, on both sides. Forest's difficulty was a long fall from the heights of the Clough era; Coventry's structural and physical, years without a real home. Each held on to something it believed was worth preserving.",
 
    BR:"The community relationship is central to what the club means, on both sides. Brentford is community-owned; Coventry's fanbase fought for years to bring the club home. Both are examples of what supporters do when they decide the club belongs to them rather than to whoever owns it.",
 
    BH:"Patience required for things to improve, on both sides. Brighton's was rewarded with an intelligent model and Premier League stability; Coventry's with a return to the CBS Arena. Each understands what it means to wait for something and still care enough to keep waiting.",
 
    FU:"Contentment with identity as a survival mechanism as much as a choice, on both sides. Fulham's is comfortable and long-standing; Coventry's was forged through necessity, because when you don't have a home ground, you learn to carry the identity without the place. Both know who they are. Coventry's knowledge was hard-won.",
 
    BO:"Periods where existence itself was the achievement, lived through by both. Bournemouth went through administration before their rise; Coventry lost their home ground. Each kept the club alive through difficult times. Both are now in better positions. Bournemouth's improvement has been more dramatic.",
 
    AV:"Midlands clubs with loyal fanbases navigating complicated recent histories, both of you. Villa's has dramatically improved; Coventry's improvement is more modest. Each has fans who believe in the club beyond what the results justify. Villa's belief is currently being rewarded. Coventry's patience is ongoing.",
 
    LU:"Proud histories carried despite long periods without commensurate success, on both sides. Leeds' involves European nights and Don Revie; Coventry's an FA Cup and Jimmy Hill's transformation of the club. Both know what they used to be and believe in what they still are.",
 
    IT:"The local community is the whole point, at both clubs. Ipswich's is Suffolk, specific, agricultural, distinct; Coventry's a city that has kept its football club at the centre of its identity through industrial change. Both are examples of football genuinely belonging to its place.",
 
    CH:"The fanbase's identity tested by decisions made above them, on both sides. Chelsea's was shaped by billionaire ownership that is now gone; Coventry's by years without a proper home ground. Each navigated something that tested what the club means. Coventry's test was more basic and more prolonged.",
  },
  HU:{
    IT:"You'd recognise yourself in Ipswich Town. You choose belonging to something real over something famous, and neither of you feels small about it. Ipswich arrived there peacefully, a Suffolk identity at ease with itself. You arrived through a fight, when an owner tried to trade your name away for a bigger market. Both communities are rooted and unbothered by scale. Ipswich's was never threatened. Yours was, and it held.",
    CV:"There's shared DNA here. You kept faith through a club that kept finding new ways to test it. Coventry's test was exile, years spent playing miles from the city on the badge. Yours was the name itself, an owner who decided the word City was bad for business. Neither of you let go of the thing that made the club yours. Coventry got its ground back. You kept your name.",
    SU:"The overlap runs deep: you stayed through the kind of collapse that empties other grounds. Sunderland stayed out of heartbreak, filling 46,000 seats in the third tier because leaving was never a real thought. You stayed out of stubbornness, refusing to be rebranded out of your own identity. Both loyalties were proven in the bad years rather than the good ones. Sunderland's is grief. Yours is defiance.",
    NC:"First, the kinship. You want to belong to something real instead of something global, the local over the marketable. Newcastle never had to defend that, the city and the club inseparable for generations. You did, against an owner who wanted the name to travel further than the place it came from. Like Newcastle United, you won the argument. Newcastle by simply being. You by fighting.",
    WH:"Start with the overlap. You love a club you have also had to fight, carrying the love and the grievance at once. West Ham's fight was the move from Upton Park, the feeling of being made bigger and less itself at the same time. Yours was the rebrand, an owner trying to swap the name for a brand. There's real kinship here: you stayed and fought rather than walked. West Ham lost its ground. You kept your name.",
    EV:"For both of you, loyalty is the thing you prove when the club gives you the least, not the most. Everton's test came on the pitch, decades of waiting without once thinking of leaving. Yours came in the boardroom, an owner deciding the name was holding the club back. The resemblance is real. You treat staying as the whole statement. Everton stayed through the football. You stayed through the rebrand.",
    CP:"You are the two most rooted clubs in the league, both certain that the place is the point. Palace built that identity from nothing, manufacturing an atmosphere at a club with no trophies to lean on. You defended one you inherited, going to war to keep the name an owner wanted to sell. Here's the common ground: you refused to let the club turn generic. Palace made its roots. You guarded yours.",
    LE:"Same instinct at work. You have lived proof that the impossible actually happens, and it changed how you see what is possible. Leicester's proof was a 5000-to-1 title nobody had any right to win. Yours was smaller and stranger, a fanbase that beat its own owner to keep the name on the badge. The near-miss makes sense: you know the long shot can land. Leicester won a trophy. You won an argument that mattered more.",
    NF:"The two of you are drawn to the stories that had no business happening. Forest's was two European Cups won from outside the top flight, the most improbable rise in the English game. Yours was quieter, a supporters' campaign overturning an owner's rebrand to keep a name dating to 1904. You've got genuine overlap. You trust the improbable. Forest conquered Europe. You kept yourselves.",
    LU:"Leeds United and you are rooted and road-worn, fanbases that have been down the divisions and back. Leeds lives every high and low at full volume, the drama half the identity. You held your line more quietly, fighting to keep your name without ever making theatre of it. You and Leeds United are unmistakably yourselves. Leeds performs it. You simply refused to be anything else.",
    LI:"Cut to what's shared: you live inside the club rather than watch it from a distance, the belonging total. Liverpool's is mythology at full volume, European nights and a global Kop. Yours is narrower and more defensive, a belonging you once had to physically protect when an owner came for the name. It's a close call for a reason. You feel it completely. Liverpool expects to win. You expect to last.",
    MU:"You share the core of it. You guard an identity, but you guard very different things. United guards a winning past, the memory of dominance it cannot quite recreate. You guarded a name, the plain fact of being Hull City, when an owner tried to trade it for a global brand. Set you beside Manchester United and the likeness shows: you refuse a lesser version of the club. United wants its old self back. You kept yours.",
    MC:"You are close to opposites. The Blue Moon is the engineered global project, success built deliberately and sold to the world. You are the club offered exactly that path, an owner promising a bigger market for a smaller name, and you turned it down flat. You'd recognise yourself in Manchester City. You know what global ambition looks like. City chased it. You refused it.",
    AR:"There's shared DNA here. You stand on principle, the sense that there is a right way and you will not abandon it. Arsenal's principle is the method, doing it properly even when the result disagrees. Yours is identity, staying who you are even when an owner says it costs you money. Both would rather be right than convenient. Arsenal defends its style. You defended your name.",
    CH:"The overlap runs deep: you remember what it felt like when it mattered, and you carry that forward. Chelsea remembers winning, the trophies and the nights that defined a generation. You remember a fight, the years your fanbase spent refusing to let an owner rebrand the club out of existence. First, the kinship. You hold onto something the club used to be. Chelsea misses the winning. You kept the thing worth keeping.",
    SP:"Like Tottenham Hotspur, you hold belief and clear eyes at the same time, fully invested and fully self-aware. Spurs laughs at its own near-misses, self-deprecation as a survival skill. You refused to be laughed at, defending your name without flinching when an owner treated it as a punchline. Start with the overlap. You know exactly who you are. Spurs jokes about it. You went to war over it.",
    AV:"There's real kinship here: you respect where you came from, the history and the place that made the club. Villa carries its past without being trapped by it, the old glory feeding the hunger rather than replacing it. You were ready to go to the wall for yours, refusing to let an owner sell the name off for reach. The resemblance is real. You honour the roots. Villa builds on them. You defended them.",
    BH:"Here's the common ground: you have punched above your size, but by completely opposite methods. Brighton did it with a clever plan, an analytics model that turned a small club into a smart one. You did it with a flat refusal to be moved, beating an owner's rebrand through sheer collective stubbornness. Same instinct at work. You proved size is not the whole story. Brighton outthought the room. You out-stubborned it.",
    BR:"The near-miss makes sense: you reached this level from outside the obvious path, by routes that could not differ more. Brentford outsmarted the system, building an edge from data nobody else trusted. You dug in and refused to be moved, keeping a name an owner had already decided to sell. Same league, opposite method. Brentford was the cleverest team in the room. You were the most immovable.",
    WO:"You share the amber and the quiet pride in your own corner of England. Wolves never had to shout about it, Wolverhampton's certainty in itself never seriously questioned. You did have to shout, fighting to keep the City an owner tried to delete from your name. You and Wolves alike are proud of a place outside the spotlight. Wolves assumes it. You defended it.",
    FU:"You've got genuine overlap. You have made peace with not being famous, content to be exactly the size you are. Fulham's peace came easily, the gentle confidence of a club that never needed to argue about itself. Yours came after a war, an owner insisting you would be worth more as something else, and a fanbase that disagreed and won. The two of you are comfortable being yourselves. Fulham always was. You earned it.",
    BO:"Bournemouth and you are genuinely glad to be exactly where you are, with no performance about it. Bournemouth's gladness is sunshine, the easy joy of a small south-coast club that keeps surprising itself. Yours is harder won, a club you once had to defend from an owner who wanted to rename it. You and Bournemouth are content in your own skin. Bournemouth's came free. Yours you had to fight for.",
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
      "BO": 3,
      "LE": 2,
      "CV": 2,
      "IT": 1,
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
      "FU": 4,
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
      "BO": 3,
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
      "FU": 3,
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
      "BO": 3,
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
      "BO": 3,
      "SU": 2,
      "IT": 1,
      "LU": 1,
      "HU": 1
    },
    "D": {
      "LI": 2,
      "MU": 3,
      "EV": 2,
      "NF": 2,
      "SP": 1,
      "AV": 2
    },
    "E": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "CH": 3
    }
  },
  "q18": {
    "left": {
      "AR": 3,
      "NF": 3,
      "FU": 3,
      "BO": 3,
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
      "IT": 1,
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
      "BO": 3,
      "BH": 1,
      "LE": 2,
      "IT": 1,
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
      "IT": 1
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
      "BO": 3,
      "CP": 1,
      "AV": 1,
      "SU": 2,
      "LU": 2,
      "IT": 1,
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
      "BO": 3
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
      "CP": 2,
      "EV": 3,
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
      "EV": 2,
      "CP": 3,
      "WH": 3,
      "CV": 3,
      "IT": 3,
      "FU": 3,
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
      "CP": 2,
      "EV": 2,
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
      "CP": 2,
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
      "FU": 3,
      "IT": 1,
      "NC": 1
    },
    "B": {
      "CP": 2,
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
      "MU": 1,
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
  MC:{loyalty:7, emotion:6, ambition:10,process:9, community:7, chaos:2, rootedness:7},
  AR:{loyalty:5, emotion:8, ambition:7, process:7, community:5, chaos:4, rootedness:5},
  EV:{loyalty:10,emotion:8, ambition:5, process:3, community:7, chaos:4, rootedness:8},
  NC:{loyalty:8, emotion:8, ambition:7, process:4, community:10,chaos:4, rootedness:9},
  WH:{loyalty:6, emotion:8, ambition:5, process:3, community:8, chaos:6, rootedness:9},
  CP:{loyalty:7, emotion:7, ambition:5, process:4, community:8, chaos:5, rootedness:10},
  MU:{loyalty:6, emotion:7, ambition:9, process:5, community:5, chaos:4, rootedness:4},
  SP:{loyalty:7, emotion:9, ambition:7, process:3, community:6, chaos:6, rootedness:5},
  LE:{loyalty:6, emotion:8, ambition:5, process:4, community:6, chaos:7, rootedness:6},
  NF:{loyalty:8, emotion:7, ambition:5, process:3, community:7, chaos:4, rootedness:9},
  BR:{loyalty:4, emotion:3, ambition:7, process:9, community:5, chaos:4, rootedness:5},
  BH:{loyalty:5, emotion:6, ambition:6, process:8, community:6, chaos:4, rootedness:6},
  WO:{loyalty:6, emotion:5, ambition:6, process:5, community:7, chaos:3, rootedness:8},
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
  LI:"https://www.liverpoolfc.com",
  MC:"https://www.mancity.com",
  AR:"https://www.arsenal.com",
  EV:"https://www.evertonfc.com",
  NC:"https://www.nufc.co.uk",
  WH:"https://www.whufc.com",
  CP:"https://www.cpfc.co.uk",
  MU:"https://www.manutd.com",
  SP:"https://www.tottenhamhotspur.com",
  LE:"https://www.lcfc.com",
  NF:"https://www.nottinghamforest.co.uk",
  BR:"https://www.brentfordfc.com",
  BH:"https://www.brightonandhovealbion.com",
  WO:"https://www.wolves.co.uk",
  FU:"https://www.fulhamfc.com",
  BO:"https://www.afcb.co.uk",
  AV:"https://www.avfc.co.uk",
  SU:"https://www.safc.com",
  LU:"https://www.leedsunited.com",
  CH:"https://www.chelseafc.com",
  IT:"https://www.itfc.co.uk",
  CV:"https://www.ccfc.co.uk",
  HU:"https://www.wearehullcity.co.uk",
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

export { moduleQuestions, teams, archetypes, teamTextColors, greats, vitalStats, nearlyGot, scoring, teamDims, DIM_LABELS, DIM_COLORS, DIM_CODES, DIM_ORDER, CARD_BADGES, GENERIC_EMOJI, squadUrls };
