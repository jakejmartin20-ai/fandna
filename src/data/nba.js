// FanDNA NBA data (sport four, fingerprint path). Same export shape as nfl.js / mlb.js.
// 30 teams from fandna-nba-craft.md; 12 module questions from fandna-nba-architecture.md.
// Fingerprint sport: every module cell is a shared lean-list; the dimensional fingerprint
// (teamDims) does the unique per-team landing. Wiring audited by coverage + membership.

const moduleQuestions = [
  {
    "id": "nba_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "Where do you feel most like yourself?",
    "options": [
      {
        "label": "The place I've always known. I never had to go looking.",
        "value": "A"
      },
      {
        "label": "One I chose for myself and made mine.",
        "value": "B"
      },
      {
        "label": "Wherever the best of it is happening. I go where the action is.",
        "value": "C"
      },
      {
        "label": "Somewhere still being built, where I get to shape it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "When a team you were on succeeded, what do you credit most?",
    "options": [
      {
        "label": "One person good enough to lift everyone else up.",
        "value": "A"
      },
      {
        "label": "The chemistry. A whole group clicking, no one bigger than the rest.",
        "value": "B"
      },
      {
        "label": "A way of doing things we all trusted. Follow it and the wins come.",
        "value": "C"
      },
      {
        "label": "Raw ability, plainly. Whoever had more of it than the rest.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "The trophy, or the climb to it?",
    "left": "Only the trophy counts. I'm not here for the journey, I want the thing at the end.",
    "right": "The climb is the whole point. The slow build to the top is what I'm here for."
  },
  {
    "id": "nba_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "How do you get where you're going?",
    "options": [
      {
        "label": "Tear it down and build it right. I'd rather start clean than patch.",
        "value": "A"
      },
      {
        "label": "Patiently, piece by piece. I trust the slow build to hold.",
        "value": "B"
      },
      {
        "label": "Everything at once, right now. I'm not built to wait.",
        "value": "C"
      },
      {
        "label": "Bring in proven names. If it wins, I'll pay for it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "If a place stops serving you, what do you do?",
    "options": [
      {
        "label": "Stay and grind it out. Leaving never really crosses my mind.",
        "value": "A"
      },
      {
        "label": "Move on to somewhere better. Loyalty shouldn't cost me everything.",
        "value": "B"
      },
      {
        "label": "Refuse to accept it. I push until they fix it.",
        "value": "C"
      },
      {
        "label": "Follow the people I trust. The place matters less than them.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q6",
    "type": "slider",
    "phase": "The fine print",
    "question": "Under the highest pressure, what happens to you?",
    "left": "I go ice cold. The bigger the moment, the calmer I run.",
    "right": "It's all nerves and feeling. I feel every bit of it, and it shows."
  },
  {
    "id": "nba_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When you go after something that matters, how do you actually approach it?",
    "options": [
      {
        "label": "Calm and calculated. I grind it down, steady, no drama.",
        "value": "A"
      },
      {
        "label": "Everything on one big move. I'd rather swing hard than chip away.",
        "value": "B"
      },
      {
        "label": "Scrappy, making it up as I go, and getting there anyway.",
        "value": "C"
      },
      {
        "label": "Put the most talented people out front and let them carry it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "You're at your best as:",
    "options": [
      {
        "label": "The underdog with everything to prove, punching up at the big names.",
        "value": "A"
      },
      {
        "label": "The one in the spotlight, all eyes on me. I want to be watched.",
        "value": "B"
      },
      {
        "label": "The hard-nosed grinder, heads down on the real work.",
        "value": "C"
      },
      {
        "label": "The one working on something new and unwritten, nothing shaped yet.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "Where you started, or wherever's next?",
    "left": "The place that made me. I've got deep roots and I'm not going anywhere.",
    "right": "Wherever I'm headed next. Staying put too long feels like standing still."
  },
  {
    "id": "nba_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When you're not there yet, what keeps you going?",
    "options": [
      {
        "label": "Faith that it's coming. I believe it, same as I always have.",
        "value": "A"
      },
      {
        "label": "A chip on my shoulder. Being doubted is the best fuel there is.",
        "value": "B"
      },
      {
        "label": "The sense that one break fixes everything. I'm a moment away.",
        "value": "C"
      },
      {
        "label": "The joy of it in the meantime. The wait never kills the love.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "What turns things around for you?",
    "options": [
      {
        "label": "One extraordinary talent, a level above everyone else.",
        "value": "A"
      },
      {
        "label": "A tight collective, everyone pulling the same way.",
        "value": "B"
      },
      {
        "label": "A brilliant plan, and the discipline to run it right.",
        "value": "C"
      },
      {
        "label": "Relentless effort. I outwork it, plain and simple.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The role you're most comfortable in:",
    "options": [
      {
        "label": "On top, with a target on my back and everyone gunning for me.",
        "value": "A"
      },
      {
        "label": "Chasing hard, with something to prove.",
        "value": "B"
      },
      {
        "label": "The long shot nobody believed in.",
        "value": "C"
      },
      {
        "label": "Just thrilled to be in it at all.",
        "value": "D"
      }
    ]
  }
];

const teams = {
  "LAL": {
    "name": "Los Angeles Lakers",
    "emoji": "💜",
    "color": "#552583",
    "code3": "LAL", "kitType": "duo", "secondaryColor": "#FDB927",
    "tagline": "Seventeen banners and courtside stars, glamour and winning never split.",
    "desc": "You were raised to expect the trophy, and to want it to look good walking in. Seventeen championships line your rafters, gold on purple, in a town that treats the team as the marquee act. The stars come to you, the cameras come with them, and you have never apologized for the spectacle. Under the glitz is an older truth, a franchise that carried a lakes-country name across the country to a city without a single lake and won anyway, until winning in style became the only acceptable way to win.",
    "why": [
      "Your ambition sits at the very top and only counts in trophies. A great year that ends without a title reads to you as a near miss, not a success.",
      "You want the win to arrive with the lights on. The spectacle is not a distraction from greatness, it is part of how you define it.",
      "You believe the best should want to come to you. Where you are from, being the main attraction is treated as a birthright, not a hope."
    ]
  },
  "BOS": {
    "name": "Boston Celtics",
    "emoji": "🍀",
    "color": "#007A33",
    "code3": "BOS", "kitType": "duo", "secondaryColor": "#BA9653",
    "tagline": "Eighteen banners over the parquet, and the flag was always the only thing that counted.",
    "desc": "You were taught that history is a scoreboard, and yours reads higher than anyone's. Eighteen titles, the most the league has ever seen, and you hold them like a duty to keep the number climbing. You love a battered green floor and the team-first, no-shortcuts way of winning the place demands, and you have no use for spectacle. A new banner is not a celebration. It is the rent you owe the eighteen already up there.",
    "why": [
      "Your ambition only speaks in trophies, and you measure it against the whole history of the sport, not against this one season.",
      "Your loyalty runs to an institution and a tradition far bigger than any current roster. The badge and the banners outrank whoever wears them now.",
      "You trust the unflashy, team-first way of winning. Spectacle leaves you cold; the work and the result are what earn your respect."
    ]
  },
  "GSW": {
    "name": "Golden State Warriors",
    "emoji": "🌉",
    "color": "#1D428A",
    "code3": "GSW", "kitType": "duo", "secondaryColor": "#FFC72C",
    "tagline": "Four titles in eight years, built not bought, and you changed how the sport shoots.",
    "desc": "You believe the right way to win is to build it, not buy it. You drafted a core, kept it together, let it grow into a dynasty, and talked the entire sport into shooting from places it used to call crazy. Your game is a passing game, strength in numbers instead of one hero with the rock. Four banners came in eight years, not one by stacking a roster overnight. You did the patient thing in a league built on shortcuts, and made it look like the most fun anyone has ever had.",
    "why": [
      "You trust building over buying. The right way to win is to draft well, develop patiently, and keep a core together long enough to peak.",
      "You believe in the group over the individual. The ball moving and everyone touching it beats one star carrying the load.",
      "You aim as high as anyone, but with none of the panic. You would rather get there on purpose than gamble your way there."
    ]
  },
  "CHI": {
    "name": "Chicago Bulls",
    "emoji": "🐂",
    "color": "#CE1141",
    "code3": "CHI", "kitType": "duo", "secondaryColor": "#000000",
    "tagline": "Six rings in eight years, the most famous run ever, and nothing but its shadow since.",
    "desc": "You belong to the most famous winning the game has ever seen. Six titles in eight years, two perfect three-peats, a red jersey that became a flag in every country on earth, the team that made the whole world watch. Then it ended, all at once, and the decades since have been spent inside its enormous shadow. You measure every season against a standard almost no one could meet, because you watched your team set it. The ghost is the hardest thing you have ever tried to live up to.",
    "why": [
      "Your loyalty is anchored to a peak you lived through. You stay devoted to a standard one unrepeatable run set.",
      "You judge everything against the very top, because you watched your team actually be the top of the world.",
      "You carry a golden past more vividly than most people carry the present. The memory is part of how you root, not something you have let go."
    ]
  },
  "SAS": {
    "name": "San Antonio Spurs",
    "emoji": "⚫",
    "color": "#C4CED4",
    "code3": "SAS", "kitType": "duo", "secondaryColor": "#000000",
    "tagline": "Five titles out of a small Texas market, won so quietly the league barely noticed.",
    "desc": "You win the quiet way, in a small market most of the league forgets exists, and you have never needed the spotlight to do it. Five championships came without scandal or theater, built on fundamentals, patience, and a continuity that became the envy of the sport. There was a beautiful, unselfish version of the game you played better than anyone. Now a once-in-a-generation talent has arrived to start the climb over, and you are not rattled. Doing it right, year after year, is what eventually gets it done.",
    "why": [
      "You trust the system and the standard over the spotlight. Doing it right, repeatedly, is the only way you respect.",
      "You have almost no appetite for chaos. Calm, fundamentals, and continuity are how you were taught to win.",
      "Your loyalty is to an institution and a way of doing things far bigger than any one roster or season."
    ]
  },
  "OKC": {
    "name": "Oklahoma City Thunder",
    "emoji": "⚡",
    "color": "#007AC1",
    "code3": "OKC", "kitType": "duo", "secondaryColor": "#EF3B24",
    "tagline": "Smallest market in the league, a 2025 champion built on patience and the draft.",
    "desc": "You believe in the long plan, and you have patience almost no one else can stomach. In the smallest market in the league you tore the whole thing down on purpose, stockpiled picks, drafted well, and waited years for it to grow up while everyone louder chased shortcuts. In 2025 it paid off, the youngest champion in nearly fifty years, a title built entirely from the inside instead of bought off a shelf. You earned it the slow way, the only way you ever wanted it.",
    "why": [
      "You trust the long plan over the quick fix. A clear blueprint, run patiently, beats panic and shortcuts every time.",
      "You believe a team should be built and grown, not assembled. How the pieces came together matters as much as the pieces.",
      "You have no taste for gambling your way to the top. You would rather earn it slowly and know exactly how you got there."
    ]
  },
  "PHI": {
    "name": "Philadelphia 76ers",
    "emoji": "🔔",
    "color": "#006BB6",
    "code3": "PHI", "kitType": "duo", "secondaryColor": "#ED174C",
    "tagline": "The only fans ever told to root for losing. You trusted the Process, still waiting.",
    "desc": "You believe in the plan even when believing looks insane. You are the team that decided to be terrible on purpose, to bottom out and hoard the picks, and you told a passionate, demanding city to trust that the suffering was a strategy. They called it a joke, a tank, an embarrassment. You called it the Process and wore it like a badge. The payoff has been promised for years and has not fully arrived, and still you believe. One day it lands. Until then, you trust it.",
    "why": [
      "You trust a long plan with a faith most people cannot stomach. You will endure years of pain if the blueprint promises a payoff.",
      "You feel every bit of it. The wait is not stoic for you, it is agony and hope at once, and you would not have it any other way.",
      "Your loyalty does not need a trophy to justify it. You stayed through the deliberate losing because belief, for you, is the whole identity."
    ]
  },
  "DEN": {
    "name": "Denver Nuggets",
    "emoji": "⛏️",
    "color": "#0E2240",
    "code3": "DEN", "kitType": "duo", "secondaryColor": "#FEC524",
    "tagline": "A mile above the league, you won a 2023 title the least glamorous way there is.",
    "desc": "You win the unglamorous way, the way that does not make the highlight shows until the trophy is already in your hands. A mile above everyone else, you built around a big man the league overlooked for years, a passer first and a showman never, and let the game run through him until it became unstoppable. No superteam, no shortcut, just a system and an unselfishness that broke through for a first championship in 2023. You proved the slow, generous game can win it all, and you have the banner to settle the argument.",
    "why": [
      "You trust the system over the star. The right structure, run patiently, beats a roster of names.",
      "You believe the ball belongs to everyone. The generous, share-it version of the game is the one you find beautiful.",
      "You aim to win it all without needing anyone to notice how. The result speaks; the noise never mattered to you."
    ]
  },
  "MIL": {
    "name": "Milwaukee Bucks",
    "emoji": "🦌",
    "color": "#00471B",
    "code3": "MIL", "kitType": "duo", "secondaryColor": "#0077C0",
    "tagline": "A small market grew a raw teenager into an MVP and ended a fifty-year wait in 2021.",
    "desc": "You are a small market that does things the hard, homegrown way. You found a teenager nobody else understood, a project bigger franchises passed on, and developed him into a superstar instead of buying one. In 2021 it ended a fifty-year wait, a championship for a blue-collar town that had earned every bit of it. Your faith was never in spending power, because you never had it. It was in patience, development, and a community that shows up. You proved a small place can build something the whole league has to reckon with.",
    "why": [
      "Your loyalty runs to a place and a community, not to spending power. You show up regardless of the market's size.",
      "You believe in developing what you have over buying what you want. The homegrown project beats the ready-made star.",
      "You aim high but on your own terms. A title earned the hard way means more than one purchased."
    ]
  },
  "IND": {
    "name": "Indiana Pacers",
    "emoji": "🏁",
    "color": "#002D62",
    "code3": "IND", "kitType": "duo", "secondaryColor": "#FDBB30",
    "tagline": "Where the gym is the town square, you lost Game 7 of the 2025 Finals by a single win.",
    "desc": "You come from the one place where basketball is not a sport but a civic religion, where every small town has a gym that doubles as its heart and the whole state organizes its winters around the game. You are not a big market and have never pretended to be. What you have is devotion, the kind that fills a building win or lose. In 2025 you came within a single game of all of it, a Game 7 in the Finals that slipped away, and your people did not turn on you. You love the game itself, first and last.",
    "why": [
      "Your sense of belonging runs through a place and its love of the game, not through trophies. The gym is your town square.",
      "Your loyalty does not flinch at a loss. You fill the building win or lose, because the devotion was never conditional.",
      "You love the sport for its own sake first. The result matters, but the game in the gym matters more."
    ]
  },
  "MIN": {
    "name": "Minnesota Timberwolves",
    "emoji": "🐺",
    "color": "#0C2340",
    "code3": "MIN", "kitType": "duo", "secondaryColor": "#78BE20",
    "tagline": "Frozen-north faithful, twice to the doorstep, turned back, still chasing a first Finals.",
    "desc": "You come from the frozen north, and for most of your existence the cold was the most exciting thing about your team. Decades of futility, a near-permanent address in the lottery, and the particular ache of letting your greatest player go and watching him win a championship somewhere else the very next year. You stayed anyway. Then it turned, and you reached the doorstep of the Finals two years running, close enough to touch a thing your franchise has never held. After all those empty years, being a team that matters is its own kind of arrival.",
    "why": [
      "Your loyalty was forged in lean years. You stayed devoted through a long stretch of nothing to root for, and that is the realest part of you.",
      "You know the ache of watching from the outside, of getting close and being turned away, better than almost anyone.",
      "You do not take being good for granted, because you remember exactly how long it took to get here."
    ]
  },
  "DET": {
    "name": "Detroit Pistons",
    "emoji": "⚙️",
    "color": "#C8102E",
    "code3": "DET", "kitType": "duo", "secondaryColor": "#1D42BA",
    "tagline": "Blue-collar ball, the meanest defense ever, a record losing streak clawed back by work.",
    "desc": "You are the Motor City, and your basketball is supposed to look like the work the town was built on. Your proudest era was also your meanest, a defense so punishing that beating you felt like surviving you, and a title won by grinders nobody thought could beat the stars. Then came a losing streak longer than any in league history, in your own building. You did not tank out of it and you did not buy your way out. You went back to work and clawed back one honest game at a time. The refusal to take a shortcut matters more.",
    "why": [
      "You believe in earning it the hard way. Effort and toughness are not tactics for you, they are a moral position.",
      "Your loyalty is to a working town and its values. You root the way your city works: stubborn, physical, no shortcuts.",
      "You measure yourself by how you respond to the bottom. Clawing back from humiliation, on your own sweat, is the part you are proudest of."
    ]
  },
  "MEM": {
    "name": "Memphis Grizzlies",
    "emoji": "🐻",
    "color": "#5D76A9",
    "code3": "MEM", "kitType": "duo", "secondaryColor": "#12173F",
    "tagline": "Pulled from Canada to the deep south, you became basketball's hardest-nosed grind.",
    "desc": "You were born in Canada and raised in the deep south, an odd journey that ended in the one city that fit you perfectly. Memphis is a place of soul and grit and hard living, and you became its team by playing the way it lives, all defense, all elbows, all heart, never the most talented group in the room and always the hardest to play against. Grit and grind was not a slogan, it was a value system. You are here to make the other guy's night miserable.",
    "why": [
      "You would rather out-work and out-tough than out-talent. Effort and grit are the qualities you actually respect.",
      "Your identity is bound to a hard-living, soulful city, and you play the way it lives.",
      "You do not need to be the prettiest team in the room. Making the night miserable for a better-looking opponent is its own reward."
    ]
  },
  "UTA": {
    "name": "Utah Jazz",
    "emoji": "🎵",
    "color": "#002B5C",
    "code3": "UTA", "kitType": "duo", "secondaryColor": "#F9A01B",
    "tagline": "The most famous pick-and-roll ever, two straight Finals lost to one dynasty.",
    "desc": "You are the faithful of a small mountain market, and your golden age was a masterpiece of fundamentals. You ran a pick-and-roll so pure that coaches still teach it, two players in perfect rhythm, and it carried you to back-to-back Finals against the greatest dynasty of the era. You lost both, not blown out, just edged by a team at the peak of its powers. You never quite got over coming that close, and you would not want to, because the near miss is proof of how good you were. You came one dynasty short, and you are still proud of the chase.",
    "why": [
      "You believe in doing the simple things perfectly. Execution and repetition beat flash, every time.",
      "Your loyalty is deep and patient. You have stayed faithful to a small market and a way of playing for the long haul.",
      "You carry a near miss with pride rather than bitterness. Coming that close, the right way, is its own kind of achievement."
    ]
  },
  "POR": {
    "name": "Portland Trail Blazers",
    "emoji": "🌲",
    "color": "#E03A3E",
    "code3": "POR", "kitType": "duo", "secondaryColor": "#000000",
    "tagline": "One title, in 1977, and a Rip City faithful that never stopped filling the building.",
    "desc": "You are Rip City, and your loyalty is close to legendary. One championship, in 1977, and then decades of being good but not quite, of seasons that ended in heartbreak instead of parades. The cruelest part is the draft, where twice you held the pick that could have rewritten your history and twice chose the big man who got hurt over the all-timer who got away. You sold out the building anyway, year after year, for a team that kept finding new ways to break your heart. The faith never went anywhere.",
    "why": [
      "Your loyalty is the unconditional kind. You fill the building through heartbreak after heartbreak because leaving was never an option.",
      "You belong to a city and a crowd as much as a team. Rip City is an identity, not just a slogan.",
      "You hold the near-misses and the what-ifs without bitterness. The faith outlasts the disappointments, every time."
    ]
  },
  "NYK": {
    "name": "New York Knicks",
    "emoji": "🗽",
    "color": "#F58426",
    "code3": "NYK", "kitType": "duo", "secondaryColor": "#006BB6",
    "tagline": "Fifty-three years in the loudest basketball city alive, and in 2026 the wait broke.",
    "desc": "You are the heartbeat of basketball in the city that thinks it invented the game. Madison Square Garden is your cathedral, the loudest and most unforgiving room in the sport, and for fifty-three years it was also the site of a long, public heartbreak. You demanded everything and got nothing to show for it, and you stayed louder than anyone anyway, because in your town loyalty is showing up and caring too much, not trophies. Then, in 2026, it finally happened. You waited longer than almost anyone, and never stopped believing it was yours.",
    "why": [
      "Your loyalty is total and unconditional. You show up and care too much, win or lose, decade after decade.",
      "You feel the game more intensely than almost anyone. Basketball is not entertainment for you, it is closer to civic identity.",
      "You know the ache of waiting better than most, and you know exactly how sweet it is when the waiting finally ends."
    ]
  },
  "CLE": {
    "name": "Cleveland Cavaliers",
    "emoji": "⚔️",
    "color": "#860038",
    "code3": "CLE", "kitType": "duo", "secondaryColor": "#FDBB30",
    "tagline": "Fifty-two years dry, then a 2016 title from down 3-1 on the best regular season ever.",
    "desc": "You come from a city that knew heartbreak as a way of life, a place that went more than half a century without a single championship in any sport. Then, in 2016, you got the one. The greatest comeback the Finals had ever seen, down three games to one against a team that had just had the best season in league history, and your city finally got to celebrate. The player who delivered it had left you once, come home to keep a promise, then left again. You hold the abandonment and the redemption at once, because that title was worth the wait.",
    "why": [
      "You feel sports deeply, the heartbreak and the joy both, because you come from a place that knew far more of the former.",
      "Your loyalty survived being abandoned and rewarded both. You know the ones who leave can come home, and the wait can still be worth it.",
      "You measure everything against a single, hard-won title, because you know exactly how rare and how sweet it was."
    ]
  },
  "SAC": {
    "name": "Sacramento Kings",
    "emoji": "👑",
    "color": "#5A2D81",
    "code3": "SAC", "kitType": "duo", "secondaryColor": "#63727A",
    "tagline": "Longest drought of any champion since 1951, now lit by a purple beam downtown.",
    "desc": "You are the patron saint of the long wait. Your last championship came in 1951, when the franchise lived in a different city in a different era, which makes yours the longest title drought of any team that has ever won one at all. Then came seventeen straight seasons without so much as a playoff game, endured by one of the most loyal small-market crowds anywhere. And when it finally ended, you lit a purple beam over the city after every single win. The devotion never wavered, because for you, showing up was never about the standings.",
    "why": [
      "Your loyalty is the marathon kind. You filled the building through the longest droughts in the sport because leaving was never the point.",
      "You feel it all the way down. When the wait finally broke, the joy you let out had decades behind it.",
      "You show up regardless of the record. For you, belonging was never conditional on winning."
    ]
  },
  "ATL": {
    "name": "Atlanta Hawks",
    "emoji": "🦅",
    "color": "#E03A3E",
    "code3": "ATL", "kitType": "duo", "secondaryColor": "#26282A",
    "tagline": "Your only banner, won in 1958 in another city, before the team was ever Atlanta's.",
    "desc": "You root for a team whose only trophy is a kind of inheritance. The one banner was won in 1958, in St. Louis, by players who never set foot in your city, hung up before the franchise ever came south. Since it became truly yours, you have been one of the most electric, highlight-spawning teams in the league, and never gotten all the way back. You come from a new-South city the rest of the country loves to call disloyal, and you have spent years proving that wrong. You would trade a thousand highlights for one banner that actually belongs to Atlanta.",
    "why": [
      "Your history is complicated and a little borrowed, and you carry it without pretending otherwise. The deep roots other fans claim were never quite available to you.",
      "You are drawn to the electric and the watchable, the highlight over the grind. Style matters to you, even when the trophies do not come.",
      "You have been doubted as a fanbase your whole life, and you show up anyway, partly to prove the doubters wrong."
    ]
  },
  "WAS": {
    "name": "Washington Wizards",
    "emoji": "🧙",
    "color": "#002B5C",
    "code3": "WAS", "kitType": "duo", "secondaryColor": "#E31837",
    "tagline": "One title in 1978 as the Bullets, a name you retired, and nothing since as the Wizards.",
    "desc": "You won it all once, in 1978, except the team that did it had a different name, one you have since retired. You are the Wizards now, and under that name you have never won anything at all, a glory that belongs to a version of you that no longer exists. You root in the nation's capital, a transient town that has never treated basketball as its first love. So you made peace with it, the long stretches of mediocrity, the years of just hoping to matter. Your loyalty was never about the trophy. It was about staying.",
    "why": [
      "Your loyalty was never conditional on winning. You stayed for the love of it through long stretches that offered little else.",
      "You have made a kind of peace with modest expectations. You root to belong, not to demand a parade.",
      "You carry a complicated history, a glory that wore a different name, and you hold it without pretending it is simple."
    ]
  },
  "BKN": {
    "name": "Brooklyn Nets",
    "emoji": "🌃",
    "color": "#000000",
    "code3": "BKN", "kitType": "duo", "secondaryColor": "#FFFFFF",
    "tagline": "Three superstars in the coolest borough, a sure thing that blew up before a Finals.",
    "desc": "You believe in the big swing, the kind that makes the whole league stop and stare. You brought three of the biggest names in basketball to the most stylish borough in America and dared everyone to bet against the coronation. It was thrilling while it lasted, and also a house with no foundation, and it came down fast, drama and injury and clashing egos turning a sure thing into a punchline overnight. You have learned the hard way that buying greatness is not the same as building it. You would do it again, though. The swing was too much fun.",
    "why": [
      "You are drawn to the bold, all-or-nothing move. The biggest swing in the room is the one that excites you, even when it misses.",
      "You believe in star power and spectacle more than slow building. You would rather chase greatness than construct it brick by brick.",
      "You live with volatility comfortably. The thrill of the gamble matters more to you than the safety of a plan."
    ]
  },
  "LAC": {
    "name": "Los Angeles Clippers",
    "emoji": "⛵",
    "color": "#C8102E",
    "code3": "LAC", "kitType": "duo", "secondaryColor": "#1D428A",
    "tagline": "The oldest team never to reach a Finals, second fiddle in a star's own city.",
    "desc": "You have waited your whole life for a moment that has never come, the oldest franchise never to reach a Finals, and you did it in the shadow of the most glamorous team in the league, sharing a city and for years even a building with the franchise that collected the rings you only dreamed about. You drafted stars, traded for them, bought them outright, and watched it fall apart in the playoffs again and again. Finally you got your own house, nobody's but yours. But you are still here, still convinced this is the year it breaks the other way.",
    "why": [
      "You know the particular ache of always being close and never quite there. Hope and heartbreak are old companions for you.",
      "You believe in swinging for stars and big moves. You would rather chase the dream loudly than settle for steady mediocrity.",
      "You have spent your life as the second choice and shown up anyway. Your loyalty is the kind that does not need to be the favorite."
    ]
  },
  "PHX": {
    "name": "Phoenix Suns",
    "emoji": "☀️",
    "color": "#E56020",
    "code3": "PHX", "kitType": "duo", "secondaryColor": "#1D1160",
    "tagline": "Three trips to the Finals, three times home empty, and in the Valley still never a ring.",
    "desc": "You are the heartbreak kid of the desert. Three trips to the Finals across the decades, three times sent home empty, including a recent, expensive gamble on a roster of big names that flamed out almost immediately. You play in the Valley, where the sun is relentless and so, somehow, is the disappointment. You have never been short on stars or style or reasons to believe this was finally the year. You have only ever been short on the one thing that counts. You keep swinging, because hope in the Valley is a renewable resource.",
    "why": [
      "You aim high and swing big, drawn to star power and the bold bet over the patient build.",
      "You have a high tolerance for the spectacular and the heartbreaking both, because your history has handed you plenty of each.",
      "You keep believing through disappointment after disappointment. Hope, for you, refills faster than it drains."
    ]
  },
  "MIA": {
    "name": "Miami Heat",
    "emoji": "🔥",
    "color": "#98002E",
    "code3": "MIA", "kitType": "duo", "secondaryColor": "#000000",
    "tagline": "The league's hardest-working program, with South Beach glamour and three titles.",
    "desc": "You are discipline disguised as glamour. On the surface you are South Beach, sunshine and spectacle, but underneath you run the most demanding program in the sport, where the conditioning tests are brutal, the standard is non-negotiable, and undrafted players nobody wanted become somebodies. Three championships have come out of that combination, and you treat every season that does not end in contention as a failure of will. You believe greatness is a habit, not a gift. You can have the beach and the standard at once, and you have proven it for decades.",
    "why": [
      "You hold yourself to a non-negotiable standard. Anything short of contention reads as a failure of effort, not luck.",
      "You believe greatness is built through relentless work, not handed over. The grind is not a means to you, it is a value.",
      "You see no contradiction between style and substance. You want the spectacle and the standard at once, and you expect both."
    ]
  },
  "DAL": {
    "name": "Dallas Mavericks",
    "emoji": "🐎",
    "color": "#00538C",
    "code3": "DAL", "kitType": "duo", "secondaryColor": "#B8C4CA",
    "tagline": "A 2011 title over a crowned superteam, then trading your own star in his prime.",
    "desc": "You know the highest high and one of the cruelest lows the sport can hand a fanbase. In 2011 you won it all by toppling a superteam the world had already crowned, perfect revenge for an earlier heartbreak against that same team. Then came the unthinkable: you traded your own generational superstar, in his prime, the face of the franchise, a move that blindsided the league and broke hearts in a way losing never could. You are loyalty and whiplash at once. You have learned that here, nothing, not even your best player, is ever truly safe.",
    "why": [
      "You feel the extremes more than most. You have known the sweetest triumph and a uniquely brutal heartbreak, and you carry both.",
      "You are comfortable with whiplash. Your fandom taught you that anything can change overnight, even what you were sure was permanent.",
      "You aim high and you like it loud. The big personality and the big swing are part of how you experience the game."
    ]
  },
  "HOU": {
    "name": "Houston Rockets",
    "emoji": "🚀",
    "color": "#CE1141",
    "code3": "HOU", "kitType": "duo", "secondaryColor": "#000000",
    "tagline": "Clutch City, back-to-back rings that buried the choke label, all-in or teardown since.",
    "desc": "You are Clutch City, and you earned the name the hard way. Two titles, back to back, won by a team the whole country had written off as chokers until it shoved the label back down their throats. Ever since, you have been the league's great pendulum, swinging from all-in superteam to total teardown and back, always either chasing a ring right now or blowing it up to chase one later. You do not do patience and you do not do mediocrity. You would rather gamble big and live with the wreckage than settle for being just okay.",
    "why": [
      "You have no patience for the middle. You would rather swing all the way to contention or all the way to a teardown than drift in between.",
      "You chase the ring with everything, right now, and you will gamble big to do it.",
      "Your roots run deep enough to survive the swings. The wreckage of a failed gamble never makes you stop believing the next one works."
    ]
  },
  "TOR": {
    "name": "Toronto Raptors",
    "emoji": "🦖",
    "color": "#CE1141",
    "code3": "TOR", "kitType": "duo", "secondaryColor": "#000000",
    "tagline": "The only team in another country, a whole nation's hopes, and a stunning 2019 title.",
    "desc": "You are not just a team, you are a country's team, the only franchise in the league that lives outside the United States and carries the hopes of an entire nation the sport spent years ignoring. We the North was a chip on the shoulder before it was a rallying cry, the pride of being the outsiders nobody took seriously. Then, in 2019, you stunned the world and won the title, partly on a superstar who stayed for exactly one glorious season and then left. It did not matter. You had the only banner in the country, and nobody can ever take that year away.",
    "why": [
      "You carry an outsider's pride, the chip-on-the-shoulder of representing a whole place the rest of the sport overlooked.",
      "Your sense of belonging is bigger than a city. You root as a nation, and that makes the loyalty enormous.",
      "You know the specific joy of proving the doubters wrong on the biggest stage, because you actually did it."
    ]
  },
  "ORL": {
    "name": "Orlando Magic",
    "emoji": "✨",
    "color": "#0077C0",
    "code3": "ORL", "kitType": "duo", "secondaryColor": "#000000",
    "tagline": "Two Finals on two generational centers, and both left to win elsewhere.",
    "desc": "You know what it is to fall in love with greatness and watch it walk out the door. Twice you drafted a young giant who looked like the future of the entire league, twice he carried you to the Finals, and twice, once the losing stung and the grass looked greener, he left to win somewhere else. It is a specific kind of heartbreak, being the place stars come from rather than the place they stay. You have built and rebuilt and built again, always hoping the cornerstone stays long enough to finish what he started. You keep getting attached anyway.",
    "why": [
      "You keep getting attached even though you have been left before. Your loyalty outlasts the people who do not return it.",
      "You believe in building from the ground up, again and again, hoping that this time the foundation holds.",
      "You do not have the old, deep roots, so you root with hope more than history, looking forward to the breakthrough that has not come."
    ]
  },
  "NOP": {
    "name": "New Orleans Pelicans",
    "emoji": "🐦",
    "color": "#0C2340",
    "code3": "NOP", "kitType": "duo", "secondaryColor": "#B4975A",
    "tagline": "The youngest name in the league, always landing a star and then watching him leave.",
    "desc": "You are the newest thing in the league, an identity barely old enough to feel permanent, in a city that has always loved football first. Your short history has a cruel rhythm, you find a star, sometimes one of the very best in the world, build around him, and then the day comes when he wants out and you have to let him go and start again. You have done the starting-over so many times it is almost the defining feature of who you are. You are young, and you are searching. The story is genuinely still being written.",
    "why": [
      "Your identity is still forming, and you are comfortable with that. You root with hope and openness rather than deep, settled history.",
      "You have learned to hold on loosely. You get attached to your stars knowing the goodbye might come, and you love them anyway.",
      "You are good at starting over. Each rebuild is a chance to become something new, and you meet it with more optimism than bitterness."
    ]
  },
  "CHA": {
    "name": "Charlotte Hornets",
    "emoji": "🐝",
    "color": "#00788C",
    "code3": "CHA", "kitType": "duo", "secondaryColor": "#1D1160",
    "tagline": "Your team was taken, and you fought back the name, the history, the teal and purple.",
    "desc": "Your story is about losing your team and then taking it back. You had a beloved one, teal and purple, all buzz and energy, and then it was packed up and moved a thousand miles away, and you were handed a replacement that never felt like the real thing. But you never accepted that the history belonged to someone else. You fought to reclaim the name, the colors, the records, all of it, and you got it back, an identity restored to the city it was born in. You are Buzz City again, on purpose. A team is a name and a history and a place, and yours was worth fighting to keep.",
    "why": [
      "Your loyalty is to a name and a history more than a trophy case. You fought to reclaim an identity because it mattered that much.",
      "You feel the pride of getting something back that was taken, a specific joy most fanbases never get to know.",
      "You care more about who you are than about chasing every flag. The name on the jersey was the thing worth protecting."
    ]
  }
};

const archetypes = {
  "LAL": "The Lake Show",
  "BOS": "Celtic Pride",
  "GSW": "Dub Nation",
  "CHI": "The Madhouse on Madison",
  "SAS": "Go Spurs Go",
  "OKC": "Thunder Up",
  "PHI": "Trust the Process",
  "DEN": "The Skyline",
  "MIL": "Bucks in Six",
  "IND": "Hoosier Hysteria",
  "MIN": "Bring Ya Ass",
  "DET": "Motor City",
  "MEM": "Grit and Grind",
  "UTA": "The Note",
  "POR": "Rip City",
  "NYK": "The Mecca",
  "CLE": "The Land",
  "SAC": "Light the Beam",
  "ATL": "The Highlight Factory",
  "WAS": "The DMV",
  "BKN": "Brooklyn's Own",
  "LAC": "Lob City",
  "PHX": "The Valley",
  "MIA": "Heat Culture",
  "DAL": "MFFL",
  "HOU": "Clutch City",
  "TOR": "We the North",
  "ORL": "Pure Magic",
  "NOP": "NOLA",
  "CHA": "Buzz City"
};

const teamTextColors = {
  "LAL": "#C7A4E6",
  "BOS": "#6FBF8E",
  "GSW": "#7FA0D9",
  "CHI": "#E8889A",
  "SAS": "#E2E8EC",
  "OKC": "#6FB4E0",
  "PHI": "#6FA8D6",
  "DEN": "#6B89B0",
  "MIL": "#6FA886",
  "IND": "#6B86B0",
  "MIN": "#6E86A8",
  "DET": "#E8889A",
  "MEM": "#9DB0CF",
  "UTA": "#6E8BB0",
  "POR": "#F0888A",
  "NYK": "#F8A86B",
  "CLE": "#C76B86",
  "SAC": "#A98BCE",
  "ATL": "#F0888A",
  "WAS": "#6E8BB0",
  "BKN": "#FFFFFF",
  "LAC": "#E8889A",
  "PHX": "#F0936B",
  "MIA": "#C76B86",
  "DAL": "#6F9DC9",
  "HOU": "#E8889A",
  "TOR": "#E8889A",
  "ORL": "#6FB0DE",
  "NOP": "#6E86A8",
  "CHA": "#5FB0BE"
};

const greats = {
  "LAL": [
    {
      "name": "Magic Johnson",
      "years": "1979-1991, 1996",
      "note": "the no-look passing that ran Showtime to five titles"
    },
    {
      "name": "Kareem Abdul-Jabbar",
      "years": "1975-1989",
      "note": "the unblockable skyhook and decades as the all-time scoring leader"
    },
    {
      "name": "Kobe Bryant",
      "years": "1996-2016",
      "note": "the Mamba, five rings and an eighty-one-point night; died 2020"
    },
    {
      "name": "LeBron James",
      "years": "2018-present",
      "note": "arrived a four-time champion, passed the all-time scoring record, delivered the 2020 ring"
    }
  ],
  "BOS": [
    {
      "name": "Bill Russell",
      "years": "1956-1969",
      "note": "eleven titles in thirteen years, the greatest winner in team sports; the Finals MVP award bears his name"
    },
    {
      "name": "Bob Cousy",
      "years": "1950-1963",
      "note": "the Houdini of the Hardwood, the game's first great playmaker"
    },
    {
      "name": "Larry Bird",
      "years": "1979-1992",
      "note": "Larry Legend, three straight MVPs"
    },
    {
      "name": "Paul Pierce",
      "years": "1998-2017",
      "note": "the Truth, the heart of the 2008 banner"
    }
  ],
  "GSW": [
    {
      "name": "Stephen Curry",
      "years": "2009-present",
      "note": "the greatest shooter the game has seen, four rings, a unanimous MVP"
    },
    {
      "name": "Wilt Chamberlain",
      "years": "1959-1965",
      "note": "scored one hundred points in a single night"
    },
    {
      "name": "Rick Barry",
      "years": "1965-1978",
      "note": "the underhand free throw and the 1975 title"
    },
    {
      "name": "Klay Thompson",
      "years": "2011-2024",
      "note": "the splash-brother sharpshooter of the dynasty"
    }
  ],
  "CHI": [
    {
      "name": "Michael Jordan",
      "years": "1984-1993, 1995-1998",
      "note": "six titles and six Finals MVPs, widely called the greatest ever"
    },
    {
      "name": "Scottie Pippen",
      "years": "1987-1998",
      "note": "the two-way running mate of the whole dynasty"
    },
    {
      "name": "Dennis Rodman",
      "years": "1995-1998",
      "note": "the rebounding engine of the second three-peat"
    },
    {
      "name": "Derrick Rose",
      "years": "2008-2016",
      "note": "the hometown kid, the youngest MVP in league history"
    }
  ],
  "SAS": [
    {
      "name": "Tim Duncan",
      "years": "1997-2016",
      "note": "the Big Fundamental, five titles, arguably the best power forward ever"
    },
    {
      "name": "David Robinson",
      "years": "1989-2003",
      "note": "the Admiral, the cornerstone of the first two titles"
    },
    {
      "name": "Tony Parker",
      "years": "2001-2018",
      "note": "the French floor general of four championships"
    },
    {
      "name": "Manu Ginobili",
      "years": "2002-2018",
      "note": "the Argentine sixth-man genius"
    }
  ],
  "OKC": [
    {
      "name": "Gary Payton",
      "years": "1990-2003",
      "note": "the Glove, the Hall of Fame defender of the Seattle era"
    },
    {
      "name": "Kevin Durant",
      "years": "2007-2016",
      "note": "the scoring champion who carried the young team to the 2012 Finals"
    },
    {
      "name": "Russell Westbrook",
      "years": "2008-2019",
      "note": "the triple-double machine and 2017 MVP"
    },
    {
      "name": "Shai Gilgeous-Alexander",
      "years": "2018-present",
      "note": "the 2025 MVP, scoring champion, and Finals MVP"
    }
  ],
  "PHI": [
    {
      "name": "Julius Erving",
      "years": "1976-1987",
      "note": "Dr. J, the soaring face of the 1983 title"
    },
    {
      "name": "Allen Iverson",
      "years": "1996-2006, 2009",
      "note": "the Answer, the 2001 MVP who dragged a team to the Finals"
    },
    {
      "name": "Charles Barkley",
      "years": "1984-1992",
      "note": "the undersized force of nature on the glass"
    },
    {
      "name": "Joel Embiid",
      "years": "2014-present",
      "note": "the literal embodiment of the Process and the 2023 MVP"
    }
  ],
  "DEN": [
    {
      "name": "Alex English",
      "years": "1980-1990",
      "note": "the franchise's all-time leading scorer and the smoothest mid-range game of his era"
    },
    {
      "name": "David Thompson",
      "years": "1975-1982",
      "note": "Skywalker, one of the great leapers the game has seen"
    },
    {
      "name": "Dikembe Mutombo",
      "years": "1991-1996",
      "note": "the finger-wagging shot-blocker behind a historic 1994 upset"
    },
    {
      "name": "Nikola Jokic",
      "years": "2015-present",
      "note": "the second-round pick who became a perennial MVP and the 2023 Finals MVP"
    }
  ],
  "MIL": [
    {
      "name": "Oscar Robertson",
      "years": "1970-1974",
      "note": "the Big O, whose arrival pushed Milwaukee to the 1971 title"
    },
    {
      "name": "Sidney Moncrief",
      "years": "1979-1989",
      "note": "five-time All-Star and defensive heart of the 80s Bucks"
    },
    {
      "name": "Ray Allen",
      "years": "1996-2003",
      "note": "one of the great shooters the game has seen"
    },
    {
      "name": "Giannis Antetokounmpo",
      "years": "2013-present",
      "note": "the 15th pick who became a two-time MVP and 2021 Finals MVP"
    }
  ],
  "IND": [
    {
      "name": "Reggie Miller",
      "years": "1987-2005",
      "note": "the clutch sharpshooter who defined the franchise"
    },
    {
      "name": "Mel Daniels",
      "years": "1968-1974",
      "note": "the dominant big of the three ABA title teams"
    },
    {
      "name": "Jermaine O'Neal",
      "years": "2000-2008",
      "note": "the All-Star anchor of the early-2000s contenders"
    },
    {
      "name": "Tyrese Haliburton",
      "years": "2022-present",
      "note": "the playmaker who led the 2025 Finals run"
    }
  ],
  "MIN": [
    {
      "name": "Kevin Garnett",
      "years": "1995-2007, 2015-2016",
      "note": "the franchise's greatest, the MVP they let go and brought home"
    },
    {
      "name": "Kevin Love",
      "years": "2008-2014",
      "note": "the double-double machine"
    },
    {
      "name": "Karl-Anthony Towns",
      "years": "2015-2024",
      "note": "the All-Star big of the long climb"
    },
    {
      "name": "Anthony Edwards",
      "years": "2020-present",
      "note": "the high-flying star who led the rise"
    }
  ],
  "DET": [
    {
      "name": "Isiah Thomas",
      "years": "1981-1994",
      "note": "the heart of the Bad Boys and two titles"
    },
    {
      "name": "Joe Dumars",
      "years": "1985-1999",
      "note": "the 1989 Finals MVP, later the architect of the 2004 champion"
    },
    {
      "name": "Ben Wallace",
      "years": "2000-2006, 2009",
      "note": "the undrafted defensive force of Goin' to Work"
    },
    {
      "name": "Chauncey Billups",
      "years": "2002-2008",
      "note": "Mr. Big Shot, the 2004 Finals MVP"
    }
  ],
  "MEM": [
    {
      "name": "Zach Randolph",
      "years": "2009-2017",
      "note": "Z-Bo, the bruising heart of Grit and Grind"
    },
    {
      "name": "Tony Allen",
      "years": "2010-2017",
      "note": "the Grindfather, the elite defender who coined the phrase"
    },
    {
      "name": "Marc Gasol",
      "years": "2008-2019",
      "note": "the skilled big and a Defensive Player of the Year"
    },
    {
      "name": "Ja Morant",
      "years": "2019-present",
      "note": "the explosive star of the modern era"
    }
  ],
  "UTA": [
    {
      "name": "John Stockton",
      "years": "1984-2003",
      "note": "the all-time leader in assists and steals, the pick-and-roll maestro"
    },
    {
      "name": "Karl Malone",
      "years": "1985-2003",
      "note": "the Mailman, a two-time MVP and one of the great scorers ever"
    },
    {
      "name": "Pete Maravich",
      "years": "1974-1980",
      "note": "Pistol Pete, the dazzling original star of the New Orleans era"
    },
    {
      "name": "Rudy Gobert",
      "years": "2013-2022",
      "note": "the rim-protecting anchor and three-time Defensive Player of the Year"
    }
  ],
  "POR": [
    {
      "name": "Bill Walton",
      "years": "1974-1979",
      "note": "the redheaded center and MVP of the 1977 title"
    },
    {
      "name": "Clyde Drexler",
      "years": "1983-1995",
      "note": "Clyde the Glide, the face of the early-90s Finals teams"
    },
    {
      "name": "Brandon Roy",
      "years": "2006-2011",
      "note": "the beloved All-Star whose knees cut a brilliant career short"
    },
    {
      "name": "Damian Lillard",
      "years": "2012-2023",
      "note": "Dame Time, the clutch-shot icon of the modern era"
    }
  ],
  "NYK": [
    {
      "name": "Willis Reed",
      "years": "1964-1974",
      "note": "the captain who limped out for Game 7 of the 1970 Finals"
    },
    {
      "name": "Walt Frazier",
      "years": "1967-1977",
      "note": "Clyde, the ice-cool floor general of both 70s titles"
    },
    {
      "name": "Patrick Ewing",
      "years": "1985-2000",
      "note": "the franchise's greatest, the heart of the 90s Finals runs"
    },
    {
      "name": "Jalen Brunson",
      "years": "2022-present",
      "note": "the 2026 Finals MVP who ended the 53-year wait"
    }
  ],
  "CLE": [
    {
      "name": "LeBron James",
      "years": "2003-2010, 2014-2018",
      "note": "the hometown kid who brought the 2016 title and ended a 52-year city-wide drought"
    },
    {
      "name": "Kyrie Irving",
      "years": "2011-2017",
      "note": "the co-star whose Game 7 three sealed the 2016 Finals"
    },
    {
      "name": "Mark Price",
      "years": "1986-1995",
      "note": "the sharpshooting point guard of the first good Cavs era"
    },
    {
      "name": "Donovan Mitchell",
      "years": "2022-present",
      "note": "the All-NBA guard of the modern revival"
    }
  ],
  "SAC": [
    {
      "name": "Nate Archibald",
      "years": "1970-1976",
      "note": "Tiny, the only man ever to lead the league in scoring and assists the same season"
    },
    {
      "name": "Mitch Richmond",
      "years": "1991-1998",
      "note": "the All-Star scorer of the early Sacramento years"
    },
    {
      "name": "Chris Webber",
      "years": "1998-2005",
      "note": "the face of the beloved Greatest Show on Court teams"
    },
    {
      "name": "De'Aaron Fox",
      "years": "2017-2025",
      "note": "the engine of the Beam Team breakthrough"
    }
  ],
  "ATL": [
    {
      "name": "Bob Pettit",
      "years": "1954-1965",
      "note": "the franchise's greatest, the first league MVP and the heart of the 1958 title"
    },
    {
      "name": "Dominique Wilkins",
      "years": "1982-1994",
      "note": "the Human Highlight Film who gave the era its name"
    },
    {
      "name": "Joe Johnson",
      "years": "2005-2012",
      "note": "the iso-scoring All-Star of the mid-2000s playoff teams"
    },
    {
      "name": "Trae Young",
      "years": "2018-present",
      "note": "the deep-range scorer and playmaker of the current era"
    }
  ],
  "WAS": [
    {
      "name": "Wes Unseld",
      "years": "1968-1981",
      "note": "the franchise icon and MVP of the 1978 title"
    },
    {
      "name": "Elvin Hayes",
      "years": "1972-1981",
      "note": "the Big E, the scoring force of the champion"
    },
    {
      "name": "Gilbert Arenas",
      "years": "2003-2011",
      "note": "Agent Zero, the high-scoring, buzzer-beating face of the 2000s"
    },
    {
      "name": "John Wall",
      "years": "2010-2018",
      "note": "the explosive All-Star point guard of the modern era"
    }
  ],
  "BKN": [
    {
      "name": "Jason Kidd",
      "years": "2001-2008",
      "note": "the triple-double engine of back-to-back Finals teams"
    },
    {
      "name": "Vince Carter",
      "years": "2004-2009",
      "note": "the high-flying scorer of the New Jersey era"
    },
    {
      "name": "Buck Williams",
      "years": "1981-1989",
      "note": "the relentless rebounder of the early Nets"
    },
    {
      "name": "Drazen Petrovic",
      "years": "1991-1993",
      "note": "the pioneering European sharpshooter whose life was cut short"
    }
  ],
  "LAC": [
    {
      "name": "Bob McAdoo",
      "years": "1972-1976",
      "note": "the Buffalo-era scoring champion and the franchise's only MVP"
    },
    {
      "name": "Blake Griffin",
      "years": "2009-2018",
      "note": "the high-flying face of Lob City"
    },
    {
      "name": "Chris Paul",
      "years": "2011-2017",
      "note": "the floor general who ran it"
    },
    {
      "name": "Kawhi Leonard",
      "years": "2019-present",
      "note": "the star brought in to finally break through"
    }
  ],
  "PHX": [
    {
      "name": "Charles Barkley",
      "years": "1992-1996",
      "note": "the MVP who led the 1993 Finals run"
    },
    {
      "name": "Steve Nash",
      "years": "1996-1998, 2004-2012",
      "note": "the two-time MVP of Seven Seconds or Less"
    },
    {
      "name": "Kevin Johnson",
      "years": "1988-2000",
      "note": "KJ, the explosive All-Star point guard"
    },
    {
      "name": "Devin Booker",
      "years": "2015-present",
      "note": "the franchise scoring leader and 2021 Finals star"
    }
  ],
  "MIA": [
    {
      "name": "Dwyane Wade",
      "years": "2003-2016, 2018-2019",
      "note": "the franchise icon and the heart of three titles"
    },
    {
      "name": "Alonzo Mourning",
      "years": "1995-2008",
      "note": "the fierce defensive anchor of the early Heat and the 2006 champion"
    },
    {
      "name": "Chris Bosh",
      "years": "2010-2017",
      "note": "the third star of the back-to-back Big Three titles"
    },
    {
      "name": "Jimmy Butler",
      "years": "2019-2025",
      "note": "the relentless face of the Heat Culture playoff runs"
    }
  ],
  "DAL": [
    {
      "name": "Dirk Nowitzki",
      "years": "1998-2019",
      "note": "the franchise's greatest, the 2011 title and Finals MVP"
    },
    {
      "name": "Luka Doncic",
      "years": "2018-2025",
      "note": "the generational talent dealt away at his peak"
    },
    {
      "name": "Rolando Blackman",
      "years": "1981-1992",
      "note": "the smooth scoring star of the original Mavs"
    },
    {
      "name": "Michael Finley",
      "years": "1996-2005",
      "note": "the steady wing of the Dirk-era rise"
    }
  ],
  "HOU": [
    {
      "name": "Hakeem Olajuwon",
      "years": "1984-2001",
      "note": "the Dream, the two-time champion and the franchise's greatest"
    },
    {
      "name": "Moses Malone",
      "years": "1976-1982",
      "note": "the MVP center of the early Houston teams"
    },
    {
      "name": "Yao Ming",
      "years": "2002-2011",
      "note": "the superstar who made the franchise global"
    },
    {
      "name": "James Harden",
      "years": "2012-2021",
      "note": "the Beard, the MVP and scoring champion of the all-in era"
    }
  ],
  "TOR": [
    {
      "name": "DeMar DeRozan",
      "years": "2009-2018",
      "note": "the loyal scorer who carried the franchise's rise"
    },
    {
      "name": "Kyle Lowry",
      "years": "2012-2021",
      "note": "the franchise's greatest and the heart of the 2019 title"
    },
    {
      "name": "Pascal Siakam",
      "years": "2016-2024",
      "note": "the homegrown role player who grew into an All-NBA champion"
    },
    {
      "name": "Fred VanVleet",
      "years": "2016-2023",
      "note": "the undrafted guard who became a champion"
    }
  ],
  "ORL": [
    {
      "name": "Shaquille O'Neal",
      "years": "1992-1996",
      "note": "the dominant young center of the 1995 Finals run"
    },
    {
      "name": "Penny Hardaway",
      "years": "1993-1999",
      "note": "the dynamic guard who paired with him"
    },
    {
      "name": "Tracy McGrady",
      "years": "2000-2004",
      "note": "the two-time scoring champion of the early-2000s"
    },
    {
      "name": "Dwight Howard",
      "years": "2004-2012",
      "note": "the Defensive Player of the Year who carried the 2009 Finals team"
    }
  ],
  "NOP": [
    {
      "name": "David West",
      "years": "2003-2011",
      "note": "the All-Star forward who anchored the early New Orleans teams"
    },
    {
      "name": "Anthony Davis",
      "years": "2012-2019",
      "note": "the generational big the franchise drafted and later traded"
    },
    {
      "name": "Jrue Holiday",
      "years": "2013-2020",
      "note": "the two-way guard at the heart of the first decade"
    },
    {
      "name": "Zion Williamson",
      "years": "2019-present",
      "note": "the explosive number-one pick"
    }
  ],
  "CHA": [
    {
      "name": "Larry Johnson",
      "years": "1991-1996",
      "note": "Grandmama, the number-one pick and face of the original Hornets"
    },
    {
      "name": "Muggsy Bogues",
      "years": "1988-1997",
      "note": "the beloved 5-foot-3 point guard, the shortest player in league history"
    },
    {
      "name": "Kemba Walker",
      "years": "2011-2019",
      "note": "the electric scoring guard and most beloved star of the modern era"
    },
    {
      "name": "LaMelo Ball",
      "years": "2020-present",
      "note": "the flashy playmaking centerpiece"
    }
  ]
};

const vitalStats = {
  "LAL": {
    "nickname": "Showtime",
    "founded": "1947 (Minneapolis, to Los Angeles 1960)",
    "stadium": "Crypto.com Arena",
    "city": "Los Angeles, CA",
    "capacity": "18,997",
    "colors": "Purple & gold",
    "titles": "17 NBA championships",
    "lastTitle": "2020"
  },
  "BOS": {
    "nickname": "The Green",
    "founded": "1946",
    "stadium": "TD Garden",
    "city": "Boston, MA",
    "capacity": "19,156",
    "colors": "Green & white",
    "titles": "18 NBA championships (most all-time)",
    "lastTitle": "2024, the league's signature rivalry, a record number of Finals against the Lakers"
  },
  "GSW": {
    "nickname": "Strength in Numbers",
    "founded": "1946 (Philadelphia, to the Bay Area in 1962)",
    "stadium": "Chase Center",
    "city": "San Francisco, CA",
    "capacity": "18,064",
    "colors": "Royal blue & gold",
    "titles": "7 NBA championships",
    "lastTitle": "2022"
  },
  "CHI": {
    "nickname": "Da Bulls",
    "founded": "1966",
    "stadium": "United Center",
    "city": "Chicago, IL",
    "capacity": "20,917",
    "colors": "Red, black & white",
    "titles": "6 NBA championships (1991-1993, 1996-1998)",
    "lastTitle": "1998"
  },
  "SAS": {
    "nickname": "Pounding the Rock",
    "founded": "1967 (ABA; to San Antonio 1973, NBA 1976)",
    "stadium": "Frost Bank Center",
    "city": "San Antonio, TX",
    "capacity": "18,418",
    "colors": "Silver & black",
    "titles": "5 NBA championships",
    "lastTitle": "2014, led by Gregg Popovich for nearly three decades, the longest coaching tenure in the major American leagues"
  },
  "OKC": {
    "nickname": "Loud City",
    "founded": "1967 (Seattle SuperSonics; to Oklahoma City 2008)",
    "stadium": "Paycom Center",
    "city": "Oklahoma City, OK",
    "capacity": "18,203",
    "colors": "Blue, orange & sunset",
    "titles": "1 NBA championship (2025); the franchise also won 1979 as the Seattle SuperSonics",
    "lastTitle": "2025"
  },
  "PHI": {
    "nickname": "The Sixers",
    "founded": "1946 (Syracuse Nationals; to Philadelphia 1963)",
    "stadium": "Wells Fargo Center",
    "city": "Philadelphia, PA",
    "capacity": "20,478",
    "colors": "Blue, red & white",
    "titles": "3 NBA championships (1955, 1967, 1983)",
    "lastTitle": "1983"
  },
  "DEN": {
    "nickname": "Mile High Magic",
    "founded": "1967 (ABA; NBA 1976)",
    "stadium": "Ball Arena",
    "city": "Denver, CO",
    "capacity": "19,520",
    "colors": "Midnight blue & gold",
    "titles": "1 NBA championship (2023)",
    "lastTitle": "2023"
  },
  "MIL": {
    "nickname": "The Deer District",
    "founded": "1968",
    "stadium": "Fiserv Forum",
    "city": "Milwaukee, WI",
    "capacity": "17,341",
    "colors": "Green & cream",
    "titles": "2 NBA championships (1971, 2021)",
    "lastTitle": "2021"
  },
  "IND": {
    "nickname": "Boom Baby",
    "founded": "1967 (ABA; NBA 1976)",
    "stadium": "Gainbridge Fieldhouse",
    "city": "Indianapolis, IN",
    "capacity": "17,274",
    "colors": "Blue & gold",
    "titles": "0 NBA championships (3 ABA titles: 1970, 1972, 1973)",
    "lastTitle": "NBA Finals 2000, 2025"
  },
  "MIN": {
    "nickname": "The Wolves",
    "founded": "1989",
    "stadium": "Target Center",
    "city": "Minneapolis, MN",
    "capacity": "18,798",
    "colors": "Navy, blue & green",
    "titles": "0 NBA championships",
    "lastTitle": "best finish: conference finals (2024, 2025)"
  },
  "DET": {
    "nickname": "Detroit Basketball",
    "founded": "1941 (Fort Wayne; to Detroit 1957)",
    "stadium": "Little Caesars Arena",
    "city": "Detroit, MI",
    "capacity": "20,332",
    "colors": "Red, white & blue",
    "titles": "3 NBA championships (1989, 1990, 2004)",
    "lastTitle": "2004"
  },
  "MEM": {
    "nickname": "The Grindhouse",
    "founded": "1995 (Vancouver; to Memphis 2001)",
    "stadium": "FedExForum",
    "city": "Memphis, TN",
    "capacity": "17,794",
    "colors": "Beale Street blue, navy & gold",
    "titles": "0 NBA championships",
    "lastTitle": "best finish: conference finals (2013)"
  },
  "UTA": {
    "nickname": "Purple Mountains",
    "founded": "1974 (New Orleans; to Utah 1979)",
    "stadium": "Delta Center",
    "city": "Salt Lake City, UT",
    "capacity": "18,206",
    "colors": "Navy, yellow & green",
    "titles": "0 NBA championships",
    "lastTitle": "NBA Finals 1997, 1998"
  },
  "POR": {
    "nickname": "Blazermania",
    "founded": "1970",
    "stadium": "Moda Center",
    "city": "Portland, OR",
    "capacity": "19,393",
    "colors": "Red, black & white",
    "titles": "1 NBA championship (1977)",
    "lastTitle": "1977"
  },
  "NYK": {
    "nickname": "The Knickerbockers",
    "founded": "1946",
    "stadium": "Madison Square Garden",
    "city": "New York, NY",
    "capacity": "19,812",
    "colors": "Orange, blue & white",
    "titles": "3 NBA championships (1970, 1973, 2026)",
    "lastTitle": "2026"
  },
  "CLE": {
    "nickname": "The Wine and Gold",
    "founded": "1970",
    "stadium": "Rocket Arena",
    "city": "Cleveland, OH",
    "capacity": "19,432",
    "colors": "Wine & gold",
    "titles": "1 NBA championship (2016)",
    "lastTitle": "2016"
  },
  "SAC": {
    "nickname": "The Beam Team",
    "founded": "1945 (Rochester Royals; to Sacramento 1985)",
    "stadium": "Golden 1 Center",
    "city": "Sacramento, CA",
    "capacity": "17,583",
    "colors": "Purple, silver & black",
    "titles": "1 NBA championship (1951, as the Rochester Royals)",
    "lastTitle": "1951"
  },
  "ATL": {
    "nickname": "True to Atlanta",
    "founded": "1946 (Tri-Cities Blackhawks; to Atlanta 1968)",
    "stadium": "State Farm Arena",
    "city": "Atlanta, GA",
    "capacity": "16,600",
    "colors": "Red, black & volt green",
    "titles": "1 NBA championship (1958, as the St. Louis Hawks)",
    "lastTitle": "1958"
  },
  "WAS": {
    "nickname": "The Bullets",
    "founded": "1961 (Chicago Packers; Baltimore and Washington Bullets; Wizards since 1997)",
    "stadium": "Capital One Arena",
    "city": "Washington, DC",
    "capacity": "20,356",
    "colors": "Navy, red & silver",
    "titles": "1 NBA championship (1978, as the Washington Bullets)",
    "lastTitle": "1978"
  },
  "BKN": {
    "nickname": "The Black and White",
    "founded": "1967 (ABA; New Jersey Nets; to Brooklyn 2012)",
    "stadium": "Barclays Center",
    "city": "Brooklyn, NY",
    "capacity": "17,732",
    "colors": "Black & white",
    "titles": "0 NBA championships (2 ABA titles, 1974 and 1976)",
    "lastTitle": "NBA Finals 2002, 2003 as the New Jersey Nets"
  },
  "LAC": {
    "nickname": "The Clips",
    "founded": "1970 (Buffalo Braves; to San Diego 1978, Los Angeles 1984)",
    "stadium": "Intuit Dome",
    "city": "Inglewood, CA",
    "capacity": "18,000",
    "colors": "Red, blue & white",
    "titles": "0 NBA championships",
    "lastTitle": "best finish: conference finals (2021)"
  },
  "PHX": {
    "nickname": "Planet Orange",
    "founded": "1968",
    "stadium": "Footprint Center",
    "city": "Phoenix, AZ",
    "capacity": "17,071",
    "colors": "Purple & orange",
    "titles": "0 NBA championships",
    "lastTitle": "NBA Finals 1976, 1993, 2021"
  },
  "MIA": {
    "nickname": "White Hot",
    "founded": "1988",
    "stadium": "Kaseya Center",
    "city": "Miami, FL",
    "capacity": "19,600",
    "colors": "Red, black & white",
    "titles": "3 NBA championships (2006, 2012, 2013)",
    "lastTitle": "2013"
  },
  "DAL": {
    "nickname": "Big D",
    "founded": "1980",
    "stadium": "American Airlines Center",
    "city": "Dallas, TX",
    "capacity": "19,200",
    "colors": "Royal blue, navy & silver",
    "titles": "1 NBA championship (2011)",
    "lastTitle": "2011"
  },
  "HOU": {
    "nickname": "Red Nation",
    "founded": "1967 (San Diego; to Houston 1971)",
    "stadium": "Toyota Center",
    "city": "Houston, TX",
    "capacity": "18,055",
    "colors": "Red, black & silver",
    "titles": "2 NBA championships (1994, 1995)",
    "lastTitle": "1995"
  },
  "TOR": {
    "nickname": "Canada's Team",
    "founded": "1995",
    "stadium": "Scotiabank Arena",
    "city": "Toronto, Ontario, Canada",
    "capacity": "19,800",
    "colors": "Red, black & silver",
    "titles": "1 NBA championship (2019)",
    "lastTitle": "2019"
  },
  "ORL": {
    "nickname": "The Pinstripes",
    "founded": "1989",
    "stadium": "Kia Center",
    "city": "Orlando, FL",
    "capacity": "18,846",
    "colors": "Blue, black & silver",
    "titles": "0 NBA championships",
    "lastTitle": "NBA Finals 1995, 2009"
  },
  "NOP": {
    "nickname": "The Pels",
    "founded": "2002 (relocated from Charlotte; Pelicans since 2013)",
    "stadium": "Smoothie King Center",
    "city": "New Orleans, LA",
    "capacity": "16,867",
    "colors": "Navy, gold & red",
    "titles": "0 NBA championships",
    "lastTitle": "best finish: conference semifinals"
  },
  "CHA": {
    "nickname": "The Hive",
    "founded": "1988 (as the Bobcats in 2004, reclaimed the Hornets name and history in 2014)",
    "stadium": "Spectrum Center",
    "city": "Charlotte, NC",
    "capacity": "19,077",
    "colors": "Teal, purple & white",
    "titles": "0 NBA championships",
    "lastTitle": "best finish: conference semifinals"
  }
};

const scoring = {
  "nba_q1": {
    "A": {
      "BOS": 2,
      "NYK": 2,
      "CHI": 2,
      "LAL": 2,
      "DET": 2,
      "IND": 2,
      "POR": 2,
      "DAL": 2,
      "WAS": 2
    },
    "B": {
      "MEM": 2,
      "CHA": 2,
      "MIL": 2,
      "GSW": 2,
      "UTA": 2,
      "CLE": 2,
      "SAS": 2
    },
    "C": {
      "MIA": 2,
      "LAC": 2,
      "PHX": 2,
      "BKN": 2,
      "HOU": 2,
      "ATL": 2
    },
    "D": {
      "TOR": 2,
      "ORL": 2,
      "NOP": 2,
      "OKC": 2,
      "PHI": 2,
      "MIN": 2,
      "DEN": 2,
      "SAC": 2
    }
  },
  "nba_q2": {
    "A": {
      "CLE": 2,
      "DAL": 2,
      "NOP": 2,
      "ORL": 2,
      "TOR": 2,
      "NYK": 2,
      "WAS": 2
    },
    "B": {
      "GSW": 2,
      "IND": 2,
      "DEN": 2,
      "SAS": 2,
      "UTA": 2,
      "POR": 2,
      "MIN": 2
    },
    "C": {
      "OKC": 2,
      "PHI": 2,
      "MIA": 2,
      "DET": 2,
      "BOS": 2,
      "MIL": 2,
      "MEM": 2,
      "SAC": 2
    },
    "D": {
      "LAL": 2,
      "CHI": 2,
      "BKN": 2,
      "LAC": 2,
      "PHX": 2,
      "HOU": 2,
      "CHA": 2,
      "ATL": 2
    }
  },
  "nba_q3": {
    "1": { "LAL": 2, "CHI": 1, "ATL": 1, "BKN": 3, "LAC": 2, "PHX": 2, "DAL": 1 },
    "2": { "LAL": 3, "BOS": 1, "CHI": 3, "DET": 1, "NYK": 3, "CLE": 1, "SAC": 1, "ATL": 3, "WAS": 3, "BKN": 1, "LAC": 3, "PHX": 3, "DAL": 3, "HOU": 3, "TOR": 1, "NOP": 1, "CHA": 3 },
    "3": { "BOS": 3, "GSW": 2, "CHI": 1, "MIL": 2, "IND": 2, "MIN": 2, "DET": 3, "MEM": 2, "UTA": 1, "POR": 2, "NYK": 2, "CLE": 3, "SAC": 3, "ATL": 1, "WAS": 2, "MIA": 2, "DAL": 1, "HOU": 2, "TOR": 3, "ORL": 2, "NOP": 3, "CHA": 2 },
    "4": { "BOS": 1, "GSW": 3, "SAS": 1, "OKC": 1, "PHI": 3, "DEN": 3, "MIL": 3, "IND": 3, "MIN": 3, "DET": 1, "MEM": 3, "UTA": 3, "POR": 3, "CLE": 1, "SAC": 1, "MIA": 3, "TOR": 1, "ORL": 3, "NOP": 1 },
    "5": { "SAS": 3, "OKC": 3, "PHI": 2, "DEN": 2, "UTA": 1 }
  },
  "nba_q4": {
    "A": {
      "PHI": 2,
      "OKC": 2,
      "HOU": 2,
      "ORL": 2,
      "SAC": 2,
      "CHA": 2,
      "NOP": 2,
      "WAS": 2
    },
    "B": {
      "SAS": 2,
      "DEN": 2,
      "MIL": 2,
      "GSW": 2,
      "IND": 2,
      "MEM": 2,
      "UTA": 2,
      "POR": 2,
      "DET": 2,
      "MIN": 2
    },
    "C": {
      "LAL": 2,
      "BKN": 2,
      "LAC": 2,
      "PHX": 2,
      "MIA": 2,
      "NYK": 2,
      "DAL": 2
    },
    "D": {
      "BOS": 2,
      "CHI": 2,
      "ATL": 2,
      "CLE": 2,
      "TOR": 2
    }
  },
  "nba_q5": {
    "A": {
      "NYK": 2,
      "BOS": 2,
      "SAS": 2,
      "IND": 2,
      "UTA": 2,
      "DET": 2,
      "POR": 2,
      "SAC": 2,
      "MIN": 2,
      "DAL": 2
    },
    "B": {
      "BKN": 2,
      "LAC": 2,
      "PHX": 2,
      "HOU": 2,
      "LAL": 2,
      "MIA": 2
    },
    "C": {
      "PHI": 2,
      "OKC": 2,
      "GSW": 2,
      "DEN": 2,
      "MIL": 2
    },
    "D": {
      "MEM": 2,
      "TOR": 2,
      "NOP": 2,
      "ORL": 2,
      "ATL": 2,
      "CHA": 2,
      "CLE": 2,
      "WAS": 2,
      "CHI": 2
    }
  },
  "nba_q6": {
    "1": { "SAS": 3, "DEN": 1, "UTA": 1 },
    "2": { "GSW": 2, "SAS": 1, "OKC": 2, "DEN": 3, "MIL": 2, "MIN": 2, "UTA": 3, "WAS": 2, "BKN": 2, "LAC": 2, "HOU": 2, "ORL": 2, "NOP": 2 },
    "3": { "LAL": 3, "BOS": 3, "GSW": 3, "CHI": 3, "OKC": 3, "PHI": 1, "DEN": 1, "MIL": 3, "IND": 3, "MIN": 3, "DET": 3, "MEM": 3, "UTA": 1, "POR": 3, "CLE": 1, "SAC": 1, "ATL": 3, "WAS": 3, "BKN": 3, "LAC": 3, "PHX": 3, "MIA": 3, "DAL": 1, "HOU": 3, "TOR": 3, "ORL": 3, "NOP": 3, "CHA": 3 },
    "4": { "LAL": 2, "BOS": 2, "CHI": 2, "PHI": 3, "IND": 2, "DET": 2, "MEM": 2, "POR": 2, "NYK": 1, "CLE": 3, "SAC": 3, "ATL": 2, "PHX": 2, "MIA": 2, "DAL": 3, "TOR": 2, "CHA": 2 },
    "5": { "PHI": 1, "NYK": 3, "CLE": 1, "SAC": 1, "DAL": 1 }
  },
  "nba_q7": {
    "A": {
      "SAS": 2,
      "UTA": 2,
      "OKC": 2,
      "DEN": 2,
      "IND": 2,
      "MIL": 2,
      "GSW": 2,
      "BOS": 2,
      "POR": 2,
      "PHI": 2,
      "MIA": 2
    },
    "B": {
      "BKN": 2,
      "DAL": 2,
      "LAC": 2,
      "PHX": 2,
      "HOU": 2
    },
    "C": {
      "MEM": 2,
      "DET": 2,
      "SAC": 2,
      "CHA": 2,
      "NOP": 2,
      "ORL": 2,
      "CLE": 2,
      "WAS": 2,
      "TOR": 2,
      "MIN": 2
    },
    "D": {
      "LAL": 2,
      "NYK": 2,
      "CHI": 2,
      "ATL": 2
    }
  },
  "nba_q8": {
    "A": {
      "MIL": 2,
      "IND": 2,
      "MEM": 2,
      "UTA": 2,
      "MIN": 2,
      "OKC": 2,
      "SAC": 2,
      "DEN": 2,
      "SAS": 2,
      "GSW": 2
    },
    "B": {
      "LAL": 2,
      "NYK": 2,
      "MIA": 2,
      "BKN": 2,
      "LAC": 2,
      "CHI": 2,
      "BOS": 2
    },
    "C": {
      "DET": 2,
      "CLE": 2,
      "PHI": 2,
      "POR": 2,
      "HOU": 2
    },
    "D": {
      "TOR": 2,
      "ORL": 2,
      "NOP": 2,
      "CHA": 2,
      "ATL": 2,
      "PHX": 2
    }
  },
  "nba_q9": {
    "1": { "LAL": 2, "BOS": 3, "CHI": 1, "SAS": 1, "PHI": 1, "IND": 1, "DET": 1, "NYK": 2 },
    "2": { "LAL": 3, "BOS": 1, "GSW": 2, "CHI": 3, "SAS": 3, "PHI": 3, "IND": 3, "DET": 3, "UTA": 2, "POR": 2, "NYK": 3, "HOU": 2 },
    "3": { "GSW": 3, "CHI": 1, "SAS": 1, "OKC": 1, "PHI": 1, "DEN": 3, "MIL": 3, "IND": 1, "DET": 1, "UTA": 3, "POR": 3, "CLE": 3, "SAC": 3, "WAS": 3, "PHX": 3, "MIA": 3, "DAL": 3, "HOU": 3 },
    "4": { "OKC": 3, "DEN": 2, "MIL": 2, "MIN": 3, "MEM": 3, "CLE": 2, "SAC": 2, "ATL": 1, "WAS": 2, "BKN": 3, "LAC": 3, "PHX": 2, "MIA": 2, "DAL": 2, "TOR": 3, "ORL": 3, "NOP": 1, "CHA": 3 },
    "5": { "OKC": 1, "MIN": 2, "MEM": 2, "ATL": 3, "BKN": 2, "LAC": 2, "TOR": 2, "ORL": 2, "NOP": 3, "CHA": 2 }
  },
  "nba_q10": {
    "A": {
      "SAC": 2,
      "MIN": 2,
      "WAS": 2,
      "ORL": 2,
      "NOP": 2,
      "CHA": 2,
      "CLE": 2,
      "UTA": 2,
      "PHI": 2,
      "NYK": 2
    },
    "B": {
      "TOR": 2,
      "ATL": 2,
      "DET": 2,
      "MIL": 2,
      "OKC": 2,
      "MEM": 2,
      "BKN": 2,
      "DAL": 2,
      "HOU": 2,
      "MIA": 2
    },
    "C": {
      "LAC": 2,
      "PHX": 2,
      "MIN": 2,
      "IND": 2,
      "ORL": 2
    },
    "D": {
      "IND": 2,
      "POR": 2,
      "GSW": 2,
      "SAS": 2,
      "LAL": 2,
      "BOS": 2,
      "CHI": 2,
      "DEN": 2
    }
  },
  "nba_q11": {
    "A": {
      "LAL": 2,
      "CLE": 2,
      "DAL": 2,
      "NOP": 2,
      "ORL": 2,
      "ATL": 2,
      "TOR": 2,
      "NYK": 2,
      "PHX": 2,
      "CHI": 2
    },
    "B": {
      "GSW": 2,
      "IND": 2,
      "SAS": 2,
      "UTA": 2,
      "POR": 2,
      "BOS": 2,
      "MIN": 2
    },
    "C": {
      "OKC": 2,
      "PHI": 2,
      "DEN": 2,
      "HOU": 2,
      "BKN": 2,
      "LAC": 2
    },
    "D": {
      "DET": 2,
      "MIA": 2,
      "MEM": 2,
      "SAC": 2,
      "MIL": 2,
      "WAS": 2,
      "CHA": 2
    }
  },
  "nba_q12": {
    "A": {
      "LAL": 3,
      "BOS": 3,
      "GSW": 3,
      "CHI": 3,
      "OKC": 3,
      "MIA": 3,
      "NYK": 3,
      "DEN": 3,
      "BKN": 3
    },
    "B": {
      "PHI": 3,
      "MIL": 3,
      "DAL": 3,
      "HOU": 3,
      "PHX": 3,
      "LAC": 3,
      "CLE": 3,
      "SAS": 3
    },
    "C": {
      "TOR": 3,
      "IND": 3,
      "MEM": 3,
      "SAC": 3,
      "DET": 3,
      "NOP": 2
    },
    "D": {
      "ORL": 3,
      "CHA": 3,
      "WAS": 3,
      "MIN": 3,
      "UTA": 3,
      "POR": 3,
      "ATL": 3
    }
  }
};

const teamDims = {
  "LAL": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 10,
    "process": 3,
    "community": 3,
    "chaos": 6,
    "rootedness": 9
  },
  "BOS": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 10,
    "process": 6,
    "community": 6,
    "chaos": 4,
    "rootedness": 10
  },
  "GSW": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 9,
    "process": 7,
    "community": 7,
    "chaos": 4,
    "rootedness": 7
  },
  "CHI": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 8,
    "process": 4,
    "community": 4,
    "chaos": 5,
    "rootedness": 8
  },
  "SAS": {
    "loyalty": 9,
    "emotion": 4,
    "ambition": 8,
    "process": 10,
    "community": 9,
    "chaos": 2,
    "rootedness": 8
  },
  "OKC": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 8,
    "process": 10,
    "community": 8,
    "chaos": 3,
    "rootedness": 5
  },
  "PHI": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 8,
    "process": 9,
    "community": 6,
    "chaos": 6,
    "rootedness": 8
  },
  "DEN": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 8,
    "process": 9,
    "community": 8,
    "chaos": 3,
    "rootedness": 6
  },
  "MIL": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 8,
    "process": 7,
    "community": 8,
    "chaos": 4,
    "rootedness": 6
  },
  "IND": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 7,
    "community": 9,
    "chaos": 3,
    "rootedness": 8
  },
  "MIN": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 6,
    "process": 7,
    "community": 7,
    "chaos": 4,
    "rootedness": 4
  },
  "DET": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 8,
    "chaos": 5,
    "rootedness": 8
  },
  "MEM": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 6,
    "process": 7,
    "community": 8,
    "chaos": 5,
    "rootedness": 4
  },
  "UTA": {
    "loyalty": 9,
    "emotion": 5,
    "ambition": 6,
    "process": 8,
    "community": 8,
    "chaos": 2,
    "rootedness": 7
  },
  "POR": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 7,
    "community": 8,
    "chaos": 4,
    "rootedness": 7
  },
  "NYK": {
    "loyalty": 10,
    "emotion": 9,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 6,
    "rootedness": 9
  },
  "CLE": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 7,
    "process": 6,
    "community": 6,
    "chaos": 6,
    "rootedness": 6
  },
  "SAC": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 6,
    "process": 6,
    "community": 7,
    "chaos": 5,
    "rootedness": 6
  },
  "ATL": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 6,
    "process": 4,
    "community": 5,
    "chaos": 7,
    "rootedness": 3
  },
  "WAS": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 4,
    "process": 5,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "BKN": {
    "loyalty": 4,
    "emotion": 6,
    "ambition": 8,
    "process": 2,
    "community": 3,
    "chaos": 9,
    "rootedness": 4
  },
  "LAC": {
    "loyalty": 5,
    "emotion": 6,
    "ambition": 8,
    "process": 3,
    "community": 4,
    "chaos": 7,
    "rootedness": 4
  },
  "PHX": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 8,
    "process": 3,
    "community": 4,
    "chaos": 7,
    "rootedness": 6
  },
  "MIA": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 9,
    "process": 7,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "DAL": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 8,
    "process": 4,
    "community": 5,
    "chaos": 8,
    "rootedness": 6
  },
  "HOU": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 8,
    "process": 5,
    "community": 5,
    "chaos": 7,
    "rootedness": 7
  },
  "TOR": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 7,
    "chaos": 4,
    "rootedness": 4
  },
  "ORL": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 6,
    "process": 7,
    "community": 6,
    "chaos": 5,
    "rootedness": 4
  },
  "NOP": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 6,
    "process": 6,
    "community": 5,
    "chaos": 6,
    "rootedness": 3
  },
  "CHA": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 5,
    "process": 5,
    "community": 6,
    "chaos": 6,
    "rootedness": 4
  }
};

const CARD_BADGES = {
  "LAL": "💜",
  "BOS": "🍀",
  "GSW": "🌉",
  "CHI": "🐂",
  "SAS": "⚫",
  "OKC": "⚡",
  "PHI": "🔔",
  "DEN": "⛏️",
  "MIL": "🦌",
  "IND": "🏁",
  "MIN": "🐺",
  "DET": "⚙️",
  "MEM": "🐻",
  "UTA": "🎵",
  "POR": "🌲",
  "NYK": "🗽",
  "CLE": "⚔️",
  "SAC": "👑",
  "ATL": "🦅",
  "WAS": "🧙",
  "BKN": "🌃",
  "LAC": "⛵",
  "PHX": "☀️",
  "MIA": "🔥",
  "DAL": "🐎",
  "HOU": "🚀",
  "TOR": "🦖",
  "ORL": "✨",
  "NOP": "🐦",
  "CHA": "🐝"
};

const badgeUrls = {
  "LAL": "https://a.espncdn.com/i/teamlogos/nba/500/lal.png",
  "BOS": "https://a.espncdn.com/i/teamlogos/nba/500/bos.png",
  "GSW": "https://a.espncdn.com/i/teamlogos/nba/500/gs.png",
  "CHI": "https://a.espncdn.com/i/teamlogos/nba/500/chi.png",
  "SAS": "https://a.espncdn.com/i/teamlogos/nba/500/sa.png",
  "OKC": "https://a.espncdn.com/i/teamlogos/nba/500/okc.png",
  "PHI": "https://a.espncdn.com/i/teamlogos/nba/500/phi.png",
  "DEN": "https://a.espncdn.com/i/teamlogos/nba/500/den.png",
  "MIL": "https://a.espncdn.com/i/teamlogos/nba/500/mil.png",
  "IND": "https://a.espncdn.com/i/teamlogos/nba/500/ind.png",
  "MIN": "https://a.espncdn.com/i/teamlogos/nba/500/min.png",
  "DET": "https://a.espncdn.com/i/teamlogos/nba/500/det.png",
  "MEM": "https://a.espncdn.com/i/teamlogos/nba/500/mem.png",
  "UTA": "https://a.espncdn.com/i/teamlogos/nba/500/utah.png",
  "POR": "https://a.espncdn.com/i/teamlogos/nba/500/por.png",
  "NYK": "https://a.espncdn.com/i/teamlogos/nba/500/ny.png",
  "CLE": "https://a.espncdn.com/i/teamlogos/nba/500/cle.png",
  "SAC": "https://a.espncdn.com/i/teamlogos/nba/500/sac.png",
  "ATL": "https://a.espncdn.com/i/teamlogos/nba/500/atl.png",
  "WAS": "https://a.espncdn.com/i/teamlogos/nba/500/wsh.png",
  "BKN": "https://a.espncdn.com/i/teamlogos/nba/500/bkn.png",
  "LAC": "https://a.espncdn.com/i/teamlogos/nba/500/lac.png",
  "PHX": "https://a.espncdn.com/i/teamlogos/nba/500/phx.png",
  "MIA": "https://a.espncdn.com/i/teamlogos/nba/500/mia.png",
  "DAL": "https://a.espncdn.com/i/teamlogos/nba/500/dal.png",
  "HOU": "https://a.espncdn.com/i/teamlogos/nba/500/hou.png",
  "TOR": "https://a.espncdn.com/i/teamlogos/nba/500/tor.png",
  "ORL": "https://a.espncdn.com/i/teamlogos/nba/500/orl.png",
  "NOP": "https://a.espncdn.com/i/teamlogos/nba/500/no.png",
  "CHA": "https://a.espncdn.com/i/teamlogos/nba/500/cha.png"
};

const squadUrls = {};  // no per-team roster links yet; the View squad CTA stays hidden (data-gated)

const milestones = {
  "LAL": [
    "Seventeen championships, second only to Boston, a legacy from Minneapolis to Showtime to the modern Lakers.",
    "The Showtime dynasty of the 1980s, Magic Johnson and Kareem winning five titles in a decade.",
    "Kobe Bryant's twenty years in purple and gold, five rings and an eighty-one-point night.",
    "The 2020 title in the Florida bubble, LeBron James delivering for a grieving city.",
    "George Mikan's Minneapolis Lakers, professional basketball's first dynasty in the early 1950s."
  ],
  "BOS": [
    "Eighteen championships, the most in NBA history, a green banner for nearly every era of the league.",
    "Bill Russell's eleven rings in thirteen seasons, including eight straight from 1959 to 1966.",
    "The rivalry with the Lakers, met a record twelve times in the Finals across seven decades.",
    "Larry Bird's 1980s, three titles and a trilogy with Magic Johnson that revived the league.",
    "Banner 18 in 2024 behind Jayson Tatum and Jaylen Brown, breaking a tie with the Lakers."
  ],
  "GSW": [
    "Seven championships, spanning the Philadelphia origins to the modern Golden State dynasty.",
    "Four titles in eight years behind Stephen Curry's revolution from beyond the arc.",
    "A record seventy-three wins in 2016, the best regular season the league has ever seen.",
    "The 2016 Finals collapse, up three games to one before losing to Cleveland.",
    "Wilt Chamberlain's hundred-point game in 1962, scored as a Warrior in Philadelphia."
  ],
  "CHI": [
    "Six championships in the 1990s, two three-peats and never a Finals defeat.",
    "Michael Jordan, six rings and six Finals MVPs, often called the greatest to ever play.",
    "The 1996 team's seventy-two wins, a record that stood for twenty years.",
    "Jordan's series-winning shot over Cleveland in 1989, remembered simply as The Shot.",
    "The last dance in 1998, Jordan's jumper over Utah to clinch a sixth title."
  ],
  "SAS": [
    "Five championships between 1999 and 2014, a quarter-century of quiet excellence.",
    "Tim Duncan and David Robinson, the Twin Towers, under coach Gregg Popovich for decades.",
    "The 2014 team's beautiful ball movement, avenging the previous year's loss to Miami.",
    "Ray Allen's 2013 corner three, seconds from a Spurs title, that broke San Antonio's heart.",
    "Victor Wembanyama carrying the Spurs back to the Finals in 2026."
  ],
  "OKC": [
    "The 2025 championship, Oklahoma City's first, won in a seven-game Finals over Indiana.",
    "Shai Gilgeous-Alexander's 2025: regular-season MVP, scoring title, and Finals MVP in a single year.",
    "A franchise-record sixty-eight wins that season, with the best scoring margin the league had ever seen.",
    "The 1979 title in Seattle, and the Durant, Westbrook, and Harden Finals run in 2012 that fell to Miami.",
    "The first major professional sports championship in the state of Oklahoma."
  ],
  "PHI": [
    "Three championships, the last in 1983 behind a dominant Moses Malone.",
    "Wilt Chamberlain's 1967 team, long ranked among the greatest ever assembled.",
    "Julius Erving, Doctor J, whose grace above the rim redefined the game.",
    "Allen Iverson's 2001 run to the Finals, the little man who carried a city.",
    "The Process, years of tearing down and drafting high in search of the next title."
  ],
  "DEN": [
    "The 2023 championship, Denver's first, in the franchise's forty-seventh NBA season.",
    "Nikola Jokic, a three-time MVP and Finals MVP who redefined the center position.",
    "Beating Miami in the 2023 Finals in five games, a coronation for Jokic and Jamal Murray.",
    "Alex English and the high-scoring Nuggets of the 1980s, all offense and altitude.",
    "An ABA original from 1967, mile-high basketball that waited decades for its first crown."
  ],
  "MIL": [
    "Two championships, fifty years apart, the first in 1971 and the second in 2021.",
    "The 1971 title behind Kareem Abdul-Jabbar and Oscar Robertson, in only the third season.",
    "Giannis Antetokounmpo's fifty-point closeout in Game 6 of the 2021 Finals.",
    "The Greek Freak, back-to-back MVPs and a Defensive Player of the Year.",
    "The Deer District, a city that spilled into the streets to celebrate in 2021."
  ],
  "IND": [
    "No NBA championship, but three ABA titles in the early 1970s.",
    "Reggie Miller, eight points in nine seconds against the Knicks in 1995.",
    "The 2000 Finals run under coach Larry Bird, falling to the Lakers.",
    "The 2025 Finals, Tyrese Haliburton's heroics before a Game 7 loss to Oklahoma City.",
    "Boom Baby, decades of gym-rat basketball in a state that lives for the game."
  ],
  "MIN": [
    "No championship in franchise history, with the deepest runs reaching the conference finals.",
    "Kevin Garnett's fifteen seasons, the heart of the franchise and its 2004 MVP peak.",
    "The 2004 team's run to the Western Conference finals, the high-water mark for years.",
    "Back-to-back conference finals in 2024 and 2025, the franchise's best stretch yet.",
    "Anthony Edwards, the electric young guard leading a new era in Minnesota."
  ],
  "DET": [
    "Three championships, the Bad Boys of 1989 and 1990 and the 2004 upset.",
    "The Bad Boys, Isiah Thomas and a defense built to bruise, back-to-back titles.",
    "The 2004 team beating a favored Lakers superteam nobody thought they could touch.",
    "Chauncey Billups, Mr. Big Shot, Finals MVP of those 2004 champions.",
    "A blue-collar city that has always loved its basketball played on the defensive end."
  ],
  "MEM": [
    "No title, with the deepest playoff run reaching the conference finals in 2013.",
    "Grit and Grind, the tough 2010s teams built on defense and sheer will.",
    "Zach Randolph, Marc Gasol, Mike Conley, and Tony Allen, the heart of the Grindhouse.",
    "Ja Morant, whose highlight dunks made Memphis appointment viewing again.",
    "A franchise born in Vancouver in 1995 before finding a home on Beale Street."
  ],
  "UTA": [
    "No championship, but back-to-back trips to the Finals in 1997 and 1998.",
    "John Stockton and Karl Malone, the pick-and-roll perfected over eighteen seasons together.",
    "Stockton's series-winning three to reach the 1997 Finals against Houston.",
    "Two Finals losses to Michael Jordan's Bulls, so close to the summit.",
    "Stockton's all-time records for assists and steals, marks that still stand."
  ],
  "POR": [
    "One championship, the 1977 title behind Bill Walton's brilliant MVP season.",
    "Blazermania, a fanbase that packed the arena for one of the longest sellout streaks in sports.",
    "Clyde Drexler and the Finals runs of 1990 and 1992.",
    "Damian Lillard's series-ending buzzer-beater over Oklahoma City in 2019.",
    "The 1984 draft, taking Sam Bowie one pick before Michael Jordan, a what-if that lingers."
  ],
  "NYK": [
    "Three championships, the 1970 and 1973 title teams and the 2026 breakthrough.",
    "The 2026 title, ending a fifty-three-year drought with the largest comeback in Finals history.",
    "Willis Reed limping out for Game 7 in 1970, one of sport's iconic images.",
    "Patrick Ewing's 1990s Knicks, bruising basketball before a sold-out Garden.",
    "Jalen Brunson's forty-five points to clinch the 2026 championship in San Antonio."
  ],
  "CLE": [
    "One championship, the 2016 title that broke Cleveland's fifty-two-year sports drought.",
    "LeBron James delivering on his promise to bring a title home to Ohio.",
    "Down three games to one to a seventy-three-win Golden State, then three straight wins.",
    "LeBron's chase-down block and Kyrie Irving's dagger three in Game 7 of 2016.",
    "Four straight Finals from 2015 to 2018 across two LeBron eras."
  ],
  "SAC": [
    "One championship, all the way back in 1951 as the Rochester Royals.",
    "The longest title drought in the NBA, unbroken since that Rochester team.",
    "The early 2000s Kings, Chris Webber and the most entertaining offense of their day.",
    "The 2002 Western Conference finals against the Lakers, a series still argued over.",
    "Light the Beam, a roaring return to the playoffs in 2023 after sixteen years away."
  ],
  "ATL": [
    "One championship, in 1958 as the St. Louis Hawks.",
    "Bob Pettit, the first player in league history to reach twenty thousand career points.",
    "Dominique Wilkins, the Human Highlight Film, decades of appointment-viewing dunks.",
    "A franchise that traces from Tri-Cities to St. Louis to Atlanta since 1946.",
    "The sixty-win 2015 team, the best regular season in Atlanta's history."
  ],
  "WAS": [
    "One championship, the 1978 title won as the Washington Bullets.",
    "Wes Unseld and Elvin Hayes, the powerful frontcourt of that title team.",
    "Back-to-back Finals in 1978 and 1979, winning one and losing one to Seattle.",
    "Gilbert Arenas, Agent Zero, whose buzzer-beaters lit up the mid-2000s.",
    "A long wait since, the Bullets-to-Wizards decades still chasing a second title."
  ],
  "BKN": [
    "No NBA title, but two ABA championships in 1974 and 1976 behind Julius Erving.",
    "Back-to-back NBA Finals in 2002 and 2003 as the New Jersey Nets.",
    "Jason Kidd running the show, the engine of those New Jersey Finals teams.",
    "The 2021 superteam of Durant, Irving, and Harden that never quite delivered.",
    "The move to Brooklyn in 2012, big-market ambition on a brand-new stage."
  ],
  "LAC": [
    "No championship, the deepest run reaching the conference finals in 2021.",
    "Decades as the other Los Angeles team, long the league's hard-luck franchise.",
    "Lob City, Chris Paul and Blake Griffin bringing the highlight reel to Los Angeles.",
    "The 2021 run behind Kawhi Leonard and Paul George, the franchise's first conference finals.",
    "The move into the Intuit Dome in 2024, a home to finally call their own."
  ],
  "PHX": [
    "No championship, but three trips to the Finals in 1976, 1993, and 2021.",
    "The 1976 Finals and its triple-overtime Game 5, one of the greatest games ever played.",
    "Charles Barkley's 1993 MVP season and Finals run against Michael Jordan.",
    "Steve Nash's seven-seconds-or-less offense, back-to-back MVPs that changed the game.",
    "The 2021 Finals, a two-nothing lead over Milwaukee before falling in six."
  ],
  "MIA": [
    "Three championships, in 2006 and back-to-back in 2012 and 2013.",
    "Dwyane Wade's 2006 Finals, a comeback from two games down against Dallas.",
    "The Big Three of LeBron James, Wade, and Chris Bosh, four straight Finals.",
    "Ray Allen's corner three in Game 6 of 2013, seconds from elimination.",
    "Heat Culture, an undrafted-and-overlooked identity under Pat Riley and Erik Spoelstra."
  ],
  "DAL": [
    "One championship, the 2011 title over a favored Miami superteam.",
    "Dirk Nowitzki, twenty-one seasons in a single uniform and a 2011 Finals MVP.",
    "Avenging the 2006 Finals collapse against the very same Miami Heat.",
    "Luka Doncic carrying Dallas to the 2024 Finals, then a stunning trade to the Lakers in 2025.",
    "Mark Cuban's era, a big-personality owner who made the Mavericks matter."
  ],
  "HOU": [
    "Two championships, back-to-back in 1994 and 1995, the franchise's golden age.",
    "Hakeem Olajuwon, the Dream, whose footwork carried both title teams.",
    "Winning the 1995 title as a sixth seed, one of the great playoff runs.",
    "Clutch City, a Houston team that refused to be counted out.",
    "The James Harden years, MVP scoring and a sixty-five-win near-miss in 2018."
  ],
  "TOR": [
    "One championship, the 2019 title in only the franchise's twenty-fourth season.",
    "Kawhi Leonard's series-winning bounce over Philadelphia, four rims and in.",
    "Canada's team, an entire country adopting the Raptors in 2019.",
    "Beating a Golden State dynasty in six games for the 2019 title.",
    "Vince Carter, Air Canada, whose dunks put the young franchise on the map."
  ],
  "ORL": [
    "No championship, but two NBA Finals appearances, in 1995 and 2009.",
    "Shaquille O'Neal and Penny Hardaway, the young 1990s duo that reached the 1995 Finals.",
    "Dwight Howard anchoring the 2009 Finals team, the franchise's second trip.",
    "Tracy McGrady's scoring-title years, must-watch basketball in the early 2000s.",
    "An expansion team from 1989, still chasing its first championship."
  ],
  "NOP": [
    "No NBA Finals yet, the deepest run stopping in the second round.",
    "Chris Paul's 2008 team pushing the defending-champion Spurs to seven games in the second round.",
    "Anthony Davis, the top pick in 2012, who became a superstar before forcing a trade to the Lakers.",
    "Zion Williamson taken first overall in 2019, the face of the franchise's next era.",
    "Two seasons displaced to Oklahoma City after Hurricane Katrina before the team came home."
  ],
  "CHA": [
    "No championship, and no conference finals appearance in the franchise's history.",
    "The original Hornets of the late 1980s, teal and purple and instantly beloved.",
    "Larry Johnson and Alonzo Mourning, the young core that packed the old Coliseum.",
    "A franchise that reclaimed its Hornets name and history in 2014.",
    "Still chasing a first trip past the second round, let alone the Finals."
  ]
};

export { moduleQuestions, teams, archetypes, teamTextColors, greats, vitalStats, milestones, scoring, teamDims, CARD_BADGES, badgeUrls, squadUrls };
