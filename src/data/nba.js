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
        "label": "the place you've always known",
        "value": "A"
      },
      {
        "label": "one you chose and made yours",
        "value": "B"
      },
      {
        "label": "wherever the best game is",
        "value": "C"
      },
      {
        "label": "somewhere still being built",
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
        "label": "one person who lifted everyone",
        "value": "A"
      },
      {
        "label": "the chemistry across the whole group",
        "value": "B"
      },
      {
        "label": "a way of doing things you all trusted",
        "value": "C"
      },
      {
        "label": "the raw ability in the room",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "The trophy, or the climb?",
    "left": "only the win counts",
    "right": "the climb is the whole point"
  },
  {
    "id": "nba_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "How do you get where you're going?",
    "options": [
      {
        "label": "tear it down and build right",
        "value": "A"
      },
      {
        "label": "patient, develop slowly",
        "value": "B"
      },
      {
        "label": "go all-in right now",
        "value": "C"
      },
      {
        "label": "take the proven shortcut",
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
        "label": "stay and grind it out",
        "value": "A"
      },
      {
        "label": "leave for somewhere better",
        "value": "B"
      },
      {
        "label": "make them change",
        "value": "C"
      },
      {
        "label": "depends who's there with me",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q6",
    "type": "slider",
    "phase": "The fine print",
    "question": "Under the highest pressure, what happens to you?",
    "left": "ice in the veins",
    "right": "all nerves and feeling"
  },
  {
    "id": "nba_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When you chase something big, how do you do it?",
    "options": [
      {
        "label": "calculated and steady",
        "value": "A"
      },
      {
        "label": "one all-in gamble",
        "value": "B"
      },
      {
        "label": "scrappy and improvised",
        "value": "C"
      },
      {
        "label": "let the talent take over",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "What kind of place feels like home?",
    "options": [
      {
        "label": "the small place that punches up",
        "value": "A"
      },
      {
        "label": "the bright lights and big stage",
        "value": "B"
      },
      {
        "label": "the hard-nosed working town",
        "value": "C"
      },
      {
        "label": "somewhere new and unwritten",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "Through a long haul, you're...?",
    "left": "steady and disciplined",
    "right": "flat-out every single day"
  },
  {
    "id": "nba_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When you're not there yet, what keeps you going?",
    "options": [
      {
        "label": "faith it's coming",
        "value": "A"
      },
      {
        "label": "a chip on the shoulder",
        "value": "B"
      },
      {
        "label": "one break fixes it all",
        "value": "C"
      },
      {
        "label": "joy in the meantime",
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
        "label": "one extraordinary talent",
        "value": "A"
      },
      {
        "label": "a tight collective",
        "value": "B"
      },
      {
        "label": "a brilliant plan",
        "value": "C"
      },
      {
        "label": "relentless effort",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Where are you most at home?",
    "options": [
      {
        "label": "on top, target on your back",
        "value": "A"
      },
      {
        "label": "chasing, something to prove",
        "value": "B"
      },
      {
        "label": "the long shot nobody believed",
        "value": "C"
      },
      {
        "label": "just thrilled to be in it",
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

const archetypeDesc = {
  "LAL": "You were raised to expect the trophy, and to want it to look good walking in. Seventeen championships line your rafters, gold on purple, in a town that treats the team as the marquee act. The stars come to you, the cameras come with them, and you have never apologized for the spectacle. Under the glitz is an older truth, a franchise that carried a lakes-country name across the country to a city without a single lake and won anyway, until winning in style became the only acceptable way to win.",
  "BOS": "You were taught that history is a scoreboard, and yours reads higher than anyone's. Eighteen titles, the most the league has ever seen, and you hold them like a duty to keep the number climbing. You love a battered green floor and the team-first, no-shortcuts way of winning the place demands, and you have no use for spectacle. A new banner is not a celebration. It is the rent you owe the eighteen already up there.",
  "GSW": "You believe the right way to win is to build it, not buy it. You drafted a core, kept it together, let it grow into a dynasty, and talked the entire sport into shooting from places it used to call crazy. Your game is a passing game, strength in numbers instead of one hero with the rock. Four banners came in eight years, not one by stacking a roster overnight. You did the patient thing in a league built on shortcuts, and made it look like the most fun anyone has ever had.",
  "CHI": "You belong to the most famous winning the game has ever seen. Six titles in eight years, two perfect three-peats, a red jersey that became a flag in every country on earth, the team that made the whole world watch. Then it ended, all at once, and the decades since have been spent inside its enormous shadow. You measure every season against a standard almost no one could meet, because you watched your team set it. The ghost is the hardest thing you have ever tried to live up to.",
  "SAS": "You win the quiet way, in a small market most of the league forgets exists, and you have never needed the spotlight to do it. Five championships came without scandal or theater, built on fundamentals, patience, and a continuity that became the envy of the sport. There was a beautiful, unselfish version of the game you played better than anyone. Now a once-in-a-generation talent has arrived to start the climb over, and you are not rattled. Doing it right, year after year, is what eventually gets it done.",
  "OKC": "You believe in the long plan, and you have patience almost no one else can stomach. In the smallest market in the league you tore the whole thing down on purpose, stockpiled picks, drafted well, and waited years for it to grow up while everyone louder chased shortcuts. In 2025 it paid off, the youngest champion in nearly fifty years, a title built entirely from the inside instead of bought off a shelf. You earned it the slow way, the only way you ever wanted it.",
  "PHI": "You believe in the plan even when believing looks insane. You are the team that decided to be terrible on purpose, to bottom out and hoard the picks, and you told a passionate, demanding city to trust that the suffering was a strategy. They called it a joke, a tank, an embarrassment. You called it the Process and wore it like a badge. The payoff has been promised for years and has not fully arrived, and still you believe. One day it lands. Until then, you trust it.",
  "DEN": "You win the unglamorous way, the way that does not make the highlight shows until the trophy is already in your hands. A mile above everyone else, you built around a big man the league overlooked for years, a passer first and a showman never, and let the game run through him until it became unstoppable. No superteam, no shortcut, just a system and an unselfishness that broke through for a first championship in 2023. You proved the slow, generous game can win it all, and you have the banner to settle the argument.",
  "MIL": "You are a small market that does things the hard, homegrown way. You found a teenager nobody else understood, a project bigger franchises passed on, and developed him into a superstar instead of buying one. In 2021 it ended a fifty-year wait, a championship for a blue-collar town that had earned every bit of it. Your faith was never in spending power, because you never had it. It was in patience, development, and a community that shows up. You proved a small place can build something the whole league has to reckon with.",
  "IND": "You come from the one place where basketball is not a sport but a civic religion, where every small town has a gym that doubles as its heart and the whole state organizes its winters around the game. You are not a big market and have never pretended to be. What you have is devotion, the kind that fills a building win or lose. In 2025 you came within a single game of all of it, a Game 7 in the Finals that slipped away, and your people did not turn on you. You love the game itself, first and last.",
  "MIN": "You come from the frozen north, and for most of your existence the cold was the most exciting thing about your team. Decades of futility, a near-permanent address in the lottery, and the particular ache of letting your greatest player go and watching him win a championship somewhere else the very next year. You stayed anyway. Then it turned, and you reached the doorstep of the Finals two years running, close enough to touch a thing your franchise has never held. After all those empty years, being a team that matters is its own kind of arrival.",
  "DET": "You are the Motor City, and your basketball is supposed to look like the work the town was built on. Your proudest era was also your meanest, a defense so punishing that beating you felt like surviving you, and a title won by grinders nobody thought could beat the stars. Then came a losing streak longer than any in league history, in your own building. You did not tank out of it and you did not buy your way out. You went back to work and clawed back one honest game at a time. The refusal to take a shortcut matters more.",
  "MEM": "You were born in Canada and raised in the deep south, an odd journey that ended in the one city that fit you perfectly. Memphis is a place of soul and grit and hard living, and you became its team by playing the way it lives, all defense, all elbows, all heart, never the most talented group in the room and always the hardest to play against. Grit and grind was not a slogan, it was a value system. You are here to make the other guy's night miserable.",
  "UTA": "You are the faithful of a small mountain market, and your golden age was a masterpiece of fundamentals. You ran a pick-and-roll so pure that coaches still teach it, two players in perfect rhythm, and it carried you to back-to-back Finals against the greatest dynasty of the era. You lost both, not blown out, just edged by a team at the peak of its powers. You never quite got over coming that close, and you would not want to, because the near miss is proof of how good you were. You came one dynasty short, and you are still proud of the chase.",
  "POR": "You are Rip City, and your loyalty is close to legendary. One championship, in 1977, and then decades of being good but not quite, of seasons that ended in heartbreak instead of parades. The cruelest part is the draft, where twice you held the pick that could have rewritten your history and twice chose the big man who got hurt over the all-timer who got away. You sold out the building anyway, year after year, for a team that kept finding new ways to break your heart. The faith never went anywhere.",
  "NYK": "You are the heartbeat of basketball in the city that thinks it invented the game. Madison Square Garden is your cathedral, the loudest and most unforgiving room in the sport, and for fifty-three years it was also the site of a long, public heartbreak. You demanded everything and got nothing to show for it, and you stayed louder than anyone anyway, because in your town loyalty is showing up and caring too much, not trophies. Then, in 2026, it finally happened. You waited longer than almost anyone, and never stopped believing it was yours.",
  "CLE": "You come from a city that knew heartbreak as a way of life, a place that went more than half a century without a single championship in any sport. Then, in 2016, you got the one. The greatest comeback the Finals had ever seen, down three games to one against a team that had just had the best season in league history, and your city finally got to celebrate. The player who delivered it had left you once, come home to keep a promise, then left again. You hold the abandonment and the redemption at once, because that title was worth the wait.",
  "SAC": "You are the patron saint of the long wait. Your last championship came in 1951, when the franchise lived in a different city in a different era, which makes yours the longest title drought of any team that has ever won one at all. Then came seventeen straight seasons without so much as a playoff game, endured by one of the most loyal small-market crowds anywhere. And when it finally ended, you lit a purple beam over the city after every single win. The devotion never wavered, because for you, showing up was never about the standings.",
  "ATL": "You root for a team whose only trophy is a kind of inheritance. The one banner was won in 1958, in St. Louis, by players who never set foot in your city, hung up before the franchise ever came south. Since it became truly yours, you have been one of the most electric, highlight-spawning teams in the league, and never gotten all the way back. You come from a new-South city the rest of the country loves to call disloyal, and you have spent years proving that wrong. You would trade a thousand highlights for one banner that actually belongs to Atlanta.",
  "WAS": "You won it all once, in 1978, except the team that did it had a different name, one you have since retired. You are the Wizards now, and under that name you have never won anything at all, a glory that belongs to a version of you that no longer exists. You root in the nation's capital, a transient town that has never treated basketball as its first love. So you made peace with it, the long stretches of mediocrity, the years of just hoping to matter. Your loyalty was never about the trophy. It was about staying.",
  "BKN": "You believe in the big swing, the kind that makes the whole league stop and stare. You brought three of the biggest names in basketball to the most stylish borough in America and dared everyone to bet against the coronation. It was thrilling while it lasted, and also a house with no foundation, and it came down fast, drama and injury and clashing egos turning a sure thing into a punchline overnight. You have learned the hard way that buying greatness is not the same as building it. You would do it again, though. The swing was too much fun.",
  "LAC": "You have waited your whole life for a moment that has never come, the oldest franchise never to reach a Finals, and you did it in the shadow of the most glamorous team in the league, sharing a city and for years even a building with the franchise that collected the rings you only dreamed about. You drafted stars, traded for them, bought them outright, and watched it fall apart in the playoffs again and again. Finally you got your own house, nobody's but yours. But you are still here, still convinced this is the year it breaks the other way.",
  "PHX": "You are the heartbreak kid of the desert. Three trips to the Finals across the decades, three times sent home empty, including a recent, expensive gamble on a roster of big names that flamed out almost immediately. You play in the Valley, where the sun is relentless and so, somehow, is the disappointment. You have never been short on stars or style or reasons to believe this was finally the year. You have only ever been short on the one thing that counts. You keep swinging, because hope in the Valley is a renewable resource.",
  "MIA": "You are discipline disguised as glamour. On the surface you are South Beach, sunshine and spectacle, but underneath you run the most demanding program in the sport, where the conditioning tests are brutal, the standard is non-negotiable, and undrafted players nobody wanted become somebodies. Three championships have come out of that combination, and you treat every season that does not end in contention as a failure of will. You believe greatness is a habit, not a gift. You can have the beach and the standard at once, and you have proven it for decades.",
  "DAL": "You know the highest high and one of the cruelest lows the sport can hand a fanbase. In 2011 you won it all by toppling a superteam the world had already crowned, perfect revenge for an earlier heartbreak against that same team. Then came the unthinkable: you traded your own generational superstar, in his prime, the face of the franchise, a move that blindsided the league and broke hearts in a way losing never could. You are loyalty and whiplash at once. You have learned that here, nothing, not even your best player, is ever truly safe.",
  "HOU": "You are Clutch City, and you earned the name the hard way. Two titles, back to back, won by a team the whole country had written off as chokers until it shoved the label back down their throats. Ever since, you have been the league's great pendulum, swinging from all-in superteam to total teardown and back, always either chasing a ring right now or blowing it up to chase one later. You do not do patience and you do not do mediocrity. You would rather gamble big and live with the wreckage than settle for being just okay.",
  "TOR": "You are not just a team, you are a country's team, the only franchise in the league that lives outside the United States and carries the hopes of an entire nation the sport spent years ignoring. We the North was a chip on the shoulder before it was a rallying cry, the pride of being the outsiders nobody took seriously. Then, in 2019, you stunned the world and won the title, partly on a superstar who stayed for exactly one glorious season and then left. It did not matter. You had the only banner in the country, and nobody can ever take that year away.",
  "ORL": "You know what it is to fall in love with greatness and watch it walk out the door. Twice you drafted a young giant who looked like the future of the entire league, twice he carried you to the Finals, and twice, once the losing stung and the grass looked greener, he left to win somewhere else. It is a specific kind of heartbreak, being the place stars come from rather than the place they stay. You have built and rebuilt and built again, always hoping the cornerstone stays long enough to finish what he started. You keep getting attached anyway.",
  "NOP": "You are the newest thing in the league, an identity barely old enough to feel permanent, in a city that has always loved football first. Your short history has a cruel rhythm, you find a star, sometimes one of the very best in the world, build around him, and then the day comes when he wants out and you have to let him go and start again. You have done the starting-over so many times it is almost the defining feature of who you are. You are young, and you are searching. The story is genuinely still being written.",
  "CHA": "Your story is about losing your team and then taking it back. You had a beloved one, teal and purple, all buzz and energy, and then it was packed up and moved a thousand miles away, and you were handed a replacement that never felt like the real thing. But you never accepted that the history belonged to someone else. You fought to reclaim the name, the colors, the records, all of it, and you got it back, an identity restored to the city it was born in. You are Buzz City again, on purpose. A team is a name and a history and a place, and yours was worth fighting to keep."
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

const nearlyGot = {
  "LAL": {
    "BOS": "Both of you live by banners and refuse to apologize for expecting the next one. The difference is the staging: Boston treats a title as a debt owed to the rafters, won on a scuffed parquet floor with no use for spectacle, while you were raised to want yours under the lights, with the stars and cameras that follow.",
    "CHI": "Both of you turned winning into global fame, with stars the whole world tuned in to watch. The difference is the tense: Chicago lived one perfect run and has spent every year since inside its shadow, while you simply reload, pulling the next marquee name into the gold and purple. Same spotlight, one chasing a ghost and one still casting it.",
    "GSW": "Both of you are modern champions who treat winning as the only acceptable outcome. The difference is how the roster gets built: Golden State drafted a core and grew it into a dynasty, the patient way, while you have always trusted that the biggest stars will simply come to you. Same trophies, one built from the inside and one drawn in by the lights.",
    "MIA": "Both of you wrap winning in glamour and never apologize for the shine. The difference is what sits underneath it: Miami runs the most punishing program in the league and treats greatness as a habit earned in the gym, while you were raised to believe the spotlight and the stars are a birthright. Same beautiful surface, one earned through sweat and one expected by right."
  },
  "BOS": {
    "LAL": "Both of you live by banners and refuse to apologize for expecting the next one. The difference is the staging: you treat a title as a debt owed to the rafters, won on a scuffed parquet floor with no use for spectacle, while Los Angeles was raised to want it under the lights, with the stars and cameras that follow. Same hunger, opposite feelings about being watched.",
    "GSW": "Both of you believe in the team-first, no-shortcuts way of winning and have the rings to back it. The difference is the source: you carry the heaviest history in the sport and win out of duty to it, while Golden State built its dynasty from scratch and rewired how the whole league shoots. Same right-way creed, one honoring tradition and one inventing the future.",
    "CHI": "Both of you measure everything by titles and the history behind them. The difference is the shape of that history: Chicago is one flawless run frozen in time, living forever in its own shadow, while yours is an ever-growing number you feel duty-bound to keep climbing. Same obsession with banners, one a single legend and one a standing account.",
    "NYK": "Both of you are charter institutions of the sport, rooted in loud, demanding northeastern cities that expect everything. The difference is what the history holds: yours is eighteen banners and the duty to add more, while New York's is a half-century of devotion through drought, loyalty measured in showing up rather than trophies. Same fierce city, one defined by winning and one by waiting."
  },
  "GSW": {
    "BOS": "Both of you believe in the team-first, no-shortcuts way of winning and have the rings to back it. The difference is the source: Boston carries the heaviest history in the sport and wins out of duty to it, while you built your dynasty from scratch and rewired how the whole league shoots. Same right-way creed, one honoring tradition and one inventing the future.",
    "DEN": "Both of you won without a superteam, on unselfish passing and a system instead of one hero with the ball. The difference is the texture: Denver wins the unglamorous way, a mile up, off the highlight shows until the trophy is already in hand, while you made the patient build look like the most fun anyone ever had. Same blueprint, one quiet and one electric.",
    "MIL": "Both of you proved you can build a winner instead of buying one, growing talent rather than stacking a roster overnight. The difference is the scale: Milwaukee developed a single raw teenager into an MVP to end a fifty-year wait, while you kept a drafted core together until it became a four-title dynasty. Same homegrown faith, one a long-awaited breakthrough and one a sustained empire.",
    "LAL": "Both of you are modern champions who treat winning as the only acceptable outcome. The difference is how the roster gets built: you drafted a core and grew it into a dynasty, the patient way, while Los Angeles has always trusted that the biggest stars will simply come to it. Same trophies, one built from the inside and one drawn in by the lights."
  },
  "CHI": {
    "LAL": "Both of you turned winning into global fame, with stars the whole world tuned in to watch. The difference is the tense: you lived one perfect run and have spent every year since inside its shadow, while Los Angeles simply reloads, pulling the next marquee name into the gold and purple. Same spotlight, one chasing a ghost and one still casting it.",
    "BOS": "Both of you measure everything by titles and the history behind them. The difference is the shape of that history: yours is one flawless run frozen in time, living forever in its own shadow, while Boston's is an ever-growing number it feels duty-bound to keep climbing. Same obsession with banners, one a single legend and one a standing account.",
    "GSW": "Both of you became global names by reshaping how the game is played and won. The difference is the engine: Golden State did it as a collective, a drafted core and a passing system built together, while your era ran through a single transcendent talent and a dynasty no one has matched since. Same worldwide fame, one a shared system and one a lone legend now living as a ghost.",
    "NYK": "Both of you are huge-market giants haunted by something just out of reach. The difference is what does the haunting: New York spent fifty-three years aching for a title it only just won, while you are chased by your own perfect past, every season measured against a standard you watched your team set. Same heavy weight, one the absence of glory and one the memory of it."
  },
  "SAS": {
    "DEN": "Both of you win the quiet, unselfish way, a system over stars and no need for the spotlight. The difference is the resume: Denver broke through for a single recent title a mile in the air, while you stacked five championships so calmly the league barely noticed. Same patient creed, one a first taste and one a long-proven institution.",
    "OKC": "Both of you proved a tiny market can win the patient way, on drafted talent and a stomach for the long build louder franchises never had. The difference is where you stand in the story: you are the monastery that already cashed in, five quiet titles the league barely noticed, while Oklahoma City is the hungry young version of the same idea, a brand-new champion still in its first flush.",
    "UTA": "Both of you come from small markets and built beautiful, fundamentally sound basketball that the sport still studies. The difference is the ending: Utah ran its perfect pick-and-roll to back-to-back Finals and lost both to a peak dynasty, one heartbreak short, while you finished the job five times over. Same devotion to doing it right, one a proud near-miss and one a closed case.",
    "IND": "Both of you are small markets who never needed the spotlight and built loyalty the honest way. The difference is the reward: Indiana came within a single Game 7 of it all and loves the game itself whether the trophy comes or not, while you quietly collected five and made winning right look routine. Same humility, one still chasing the banner and one with a wall of them."
  },
  "OKC": {
    "DEN": "Both of you built a champion entirely from the inside, no shortcuts, after years of patience. The difference is the method: Denver grew around a big man the league overlooked and let the game run through him, while you tore it all down on purpose and stockpiled picks until the youngest champion in fifty years grew up. Same slow faith, two roads to one banner.",
    "SAS": "Both of you proved a tiny market can win the patient way, on drafted talent and a stomach for the long build louder franchises never had. The difference is where you stand in the story: San Antonio is the monastery that already cashed in, five quiet titles the league barely noticed, while you are the hungry young version of the same idea, a brand-new champion still in its first flush.",
    "MIL": "Both of you are small markets that built a winner from homegrown talent instead of buying one. The difference is the shape of the build: Milwaukee grew a single raw teenager into an MVP to end a fifty-year wait, while you hoarded years of picks and patience until the youngest champion in decades came of age. Same refusal to shortcut, one a single star and one a stockpile.",
    "UTA": "Both of you are small markets that trusted patience and fundamentals over splashy spending. The difference is the payoff: Utah ran its perfect system to back-to-back Finals and came one dynasty short, while you waited out the long rebuild and cashed it for a title. Same belief in the slow way, one a beautiful near-miss and one the banner itself."
  },
  "PHI": {
    "DEN": "Both of you bet everything on a plan the league laughed at, building patiently around a big man nobody valued. The difference is the ending: Denver's faith already paid off, a quiet title won a mile in the air with no superteam, while yours is still a promise. You wore the suffering as a badge and called it the Process; they just won.",
    "OKC": "Both of you chose to bottom out on purpose and hoard picks, trusting the long plan while everyone louder chased shortcuts. The difference is the result: Oklahoma City's tank matured into the youngest champion in fifty years, while your Process is still a promise the city is waiting on. Same insane faith in the slow way, one redeemed and one unredeemed.",
    "MIL": "Both of you asked a passionate, demanding town to trust patience over spending and to wait for a payoff. The difference is whether it came: Milwaukee's homegrown gamble ended a fifty-year wait with a banner, while you are still wearing the suffering and trusting that one day it lands. Same long faith, one rewarded and one still owed.",
    "CLE": "Both of you are loyal, long-suffering cities promised that the wait would be worth it. The difference is the payoff: Cleveland got its miracle, a title from the brink that broke a fifty-two-year curse, while you are still trusting the Process to deliver the one it keeps promising. Same enduring belief, one already cashed and one still pending."
  },
  "DEN": {
    "OKC": "Both of you built a champion entirely from the inside, no shortcuts, after years of patience. The difference is the method: you grew around a big man the league overlooked and let the game run through him, while Oklahoma City tore it all down on purpose and stockpiled picks until the youngest champion in fifty years grew up. Same slow faith, two roads to one banner.",
    "SAS": "Both of you win the quiet, unselfish way, a system over stars and no need for the spotlight. The difference is the resume: you broke through for a single recent title a mile in the air, while San Antonio stacked five championships so calmly the league barely noticed. Same patient creed, one a first taste and one a long-proven institution.",
    "GSW": "Both of you won without a superteam, on unselfish passing and a system instead of one hero with the ball. The difference is the texture: you win the unglamorous way, a mile up, off the highlight shows until the trophy is already in hand, while Golden State made the patient build look like the most fun anyone ever had. Same blueprint, one quiet and one electric.",
    "MIL": "Both of you are small markets that built a winner around a developed star and ended a long drought with it. The difference is the flavor: Milwaukee grew a raw teenager into an MVP for a blue-collar town, while you let an overlooked passer run everything a mile in the air. Same homegrown breakthrough, one built on grit and one on an unselfish system."
  },
  "MIL": {
    "IND": "Both of you are small Midwest markets whose loyalty was never about spending power. The difference is the finish: you grew a homegrown star into an MVP and ended a fifty-year wait with a banner, while Indiana came within a single Game 7 and still loves the game whether the trophy comes or not. Same devotion, one over the line and one a game short.",
    "UTA": "Both of you trusted patience and development over splashy money in a small market. The difference is the ending: you grew a raw teenager into a champion and broke a fifty-year wait, while Utah ran its perfect system to back-to-back Finals and came one dynasty short. Same homegrown faith, one a title and one a proud near-miss.",
    "DEN": "Both of you are small markets that built a winner around a developed star and ended a long drought with it. The difference is the flavor: you grew a raw teenager into an MVP for a blue-collar town, while Denver let an overlooked passer run everything a mile in the air. Same homegrown breakthrough, one built on grit and one on an unselfish system.",
    "OKC": "Both of you are small markets that built a winner from homegrown talent instead of buying one. The difference is the shape of the build: you grew a single raw teenager into an MVP to end a fifty-year wait, while Oklahoma City hoarded years of picks and patience until the youngest champion in decades came of age. Same refusal to shortcut, one a single star and one a stockpile."
  },
  "IND": {
    "MIL": "Both of you are small Midwest markets whose loyalty was never about spending power. The difference is the finish: Milwaukee grew a homegrown star into an MVP and ended a fifty-year wait with a banner, while you came within a single Game 7 and still love the game whether the trophy comes or not. Same devotion, one over the line and one a game short.",
    "UTA": "Both of you are small markets devoted to the game itself, and both came agonizingly close to a title. The difference is the texture of the heartbreak: Utah lost back-to-back Finals to a peak dynasty on its beautiful pick-and-roll, while you let Game 7 slip away in a state where the gym is the town square. Same near-miss ache, two different kinds of devotion behind it.",
    "DET": "Both of you are blue-collar Midwest teams who believe in honest work over shortcuts. The difference is the proof: Detroit built the meanest defense ever and clawed back from a record losing streak one game at a time, while you treat basketball as a civic religion and love the building win or lose. Same work-ethic soul, one grinding toughness and one pure devotion.",
    "POR": "Both of you are small markets whose crowds keep filling the building no matter how the season ends. The difference is the heartbreak: Portland's came at the draft, twice passing on an all-timer, plus decades of almost, while yours came a single Game 7 from the title. Same unwavering loyalty, two different cruelties behind it."
  },
  "MIN": {
    "MEM": "Both of you carry an odd-journey, cold-or-displaced identity and made grit the whole personality. The difference is the arc: Memphis turned hard-nosed defense into a value system and a permanent chip, while you endured decades of frozen-north futility before finally reaching the doorstep twice. Same underdog edge, one a settled grind and one a long-awaited arrival.",
    "UTA": "Both of you reached the edge of the Finals and got turned away. The difference is how far the edge was: Utah actually made it twice and lost both to a peak dynasty, while you got within a round two years running and are still chasing a first Finals your franchise has never seen. Same doorstep heartbreak, one a near-dynasty and one a first taste of mattering.",
    "POR": "Both of you are northern small markets who stayed loyal through long stretches of heartbreak. The difference is the moment you are in: Portland's loyalty runs through a 1977 title and decades of draft-day cruelty, while you spent years in the lottery and only recently became a team that matters. Same faithful cold-weather crowd, one rich in old scars and one new to relevance.",
    "OKC": "Both of you rebuilt from the very bottom in a small market and asked your people to wait. The difference is the payoff: Oklahoma City's patience already cashed for the youngest title in fifty years, while you are still chasing a first Finals after years of futility. Same long rebuild, one already crowned and one still climbing."
  },
  "DET": {
    "IND": "Both of you are blue-collar Midwest teams who believe in honest work over shortcuts. The difference is the proof: you built the meanest defense ever and clawed back from a record losing streak one game at a time, while Indiana treats basketball as a civic religion and loves the building win or lose. Same work-ethic soul, one grinding toughness and one pure devotion.",
    "POR": "Both of you are loyal, hard-luck franchises that never went looking for a shortcut. The difference is the source of the pain: Portland's was the draft and decades of almost, endured by a sold-out building, while yours was a record losing streak you refused to tank out of and clawed back by sheer work. Same honest refusal, one faith through heartbreak and one grind back to respectability.",
    "MIL": "Both of you are blue-collar Midwest towns that did it the hard, homegrown way. The difference is the method: Milwaukee grew a teenager into an MVP for a single title, while your proudest era was the meanest defense in history and a title won by grinders nobody believed in. Same no-shortcut ethic, one development and one pure toughness.",
    "CLE": "Both of you are rust-belt cities that know hardship as a way of life. The difference is the deliverance: Cleveland got its miracle, a title from the brink after fifty-two dry years, while you clawed out of a record losing streak the only way you respect, one honest game at a time. Same grit, one a redemption story and one a refusal to take the easy way out."
  },
  "MEM": {
    "MIN": "Both of you carry an odd-journey, cold-or-displaced identity and made grit the whole personality. The difference is the arc: you turned hard-nosed defense into a value system and a permanent chip, while Minnesota endured decades of frozen-north futility before finally reaching the doorstep twice. Same underdog edge, one a settled grind and one a long-awaited arrival.",
    "IND": "Both of you are small markets who never needed the spotlight, just devotion to the game. The difference is the flavor: Indiana loves basketball as a civic religion and came a single Game 7 short, while you became your city by being the hardest team in the league to play against. Same humble heart, one pure devotion and one pure grit.",
    "UTA": "Both of you are small markets whose identity outran your raw talent. The difference is the expression: Utah built a flawless, fundamentally pure pick-and-roll that reached two Finals, while you turned all-defense, all-elbows toughness into a creed and made every opponent's night miserable. Same overlooked-market pride, one beautiful fundamentals and one sheer grind.",
    "ORL": "Both of you are younger, non-traditional markets trying to build something that lasts. The difference is the staying power: Orlando kept drafting giants who carried it to the Finals and then left, while you found your soul in a city of grit and built an identity nobody could poach. Same outsider roots, one heartbreak when the stars leave and one a grind that stays put."
  },
  "UTA": {
    "SAS": "Both of you come from small markets and built beautiful, fundamentally sound basketball that the sport still studies. The difference is the ending: you ran your perfect pick-and-roll to back-to-back Finals and lost both to a peak dynasty, one heartbreak short, while San Antonio finished the job five times over. Same devotion to doing it right, one a proud near-miss and one a closed case.",
    "IND": "Both of you are small markets devoted to the game itself, and both came agonizingly close to a title. The difference is the texture of the heartbreak: you lost back-to-back Finals to a peak dynasty on your beautiful pick-and-roll, while Indiana let Game 7 slip away in a state where the gym is the town square. Same near-miss ache, two different kinds of devotion behind it.",
    "DEN": "Both of you are small mountain-west markets that win on system and fundamentals, not star power. The difference is the result: you ran the purest pick-and-roll ever to two Finals and came one dynasty short, while Denver's altitude system finally broke through for the banner. Same belief in the team game, one a proud near-miss and one a settled argument.",
    "MIL": "Both of you trusted patience and development over splashy money in a small market. The difference is the ending: you ran your perfect system to back-to-back Finals and came one dynasty short, while Milwaukee grew a raw teenager into a champion and broke a fifty-year wait. Same homegrown faith, one a proud near-miss and one a title."
  },
  "POR": {
    "IND": "Both of you are small markets whose crowds keep filling the building no matter how the season ends. The difference is the heartbreak: yours came at the draft, twice passing on an all-timer, plus decades of almost, while Indiana came a single Game 7 from the title. Same unwavering loyalty, two different cruelties behind it.",
    "DET": "Both of you are loyal, hard-luck franchises that never went looking for a shortcut. The difference is the source of the pain: yours was the draft and decades of almost, endured by a sold-out building, while Detroit's was a record losing streak it refused to tank out of and clawed back by sheer work. Same honest refusal, one faith through heartbreak and one grind back to respectability.",
    "UTA": "Both of you are small western markets whose loyalty survived years of coming up short. The difference is the cruelty: Utah's was two Finals lost to a peak dynasty, while yours was the draft, twice holding the pick that could have rewritten history and twice choosing wrong. Same faithful crowd, one a Finals near-miss and one a draft-day curse.",
    "MEM": "Both of you are smaller markets defined by toughness and devotion rather than star power. The difference is the texture: Memphis made grit and defense a value system and a chip on the shoulder, while you sold out the building for decades for a team that kept finding new ways to break your heart. Same loyal underdog soul, one make-it-miserable grind and one faith through heartbreak."
  },
  "NYK": {
    "CLE": "Both of you waited out a half-century drought and finally got the one. The difference is the cast: Cleveland's came as a miracle from the brink, delivered by a hometown hero who left and came home, while yours broke after fifty-three years of the loudest, most demanding devotion in the sport. Same long-overdue payoff, one a small-market redemption and one a big-city release.",
    "BOS": "Both of you are charter institutions of the sport, rooted in loud, demanding northeastern cities that expect everything. The difference is what the history holds: Boston's is eighteen banners and the duty to add more, while yours was a half-century of devotion through drought, loyalty measured in showing up rather than trophies. Same fierce city, one defined by winning and one by waiting.",
    "CHI": "Both of you are huge-market giants haunted by something just out of reach. The difference is what does the haunting: you spent fifty-three years aching for a title you only just won, while Chicago is chased by its own perfect past, every season measured against a standard it watched its team set. Same heavy weight, one the absence of glory and one the memory of it.",
    "ATL": "Both of you measured your franchises by a title that stayed out of reach for generations. The difference is the resolution: Atlanta's only banner is a 1958 inheritance from another city and it is still chasing one that truly belongs to it, while you waited fifty-three loud years and finally won the real thing. Same long ache, one still searching and one at last rewarded."
  },
  "CLE": {
    "NYK": "Both of you waited out a half-century drought and finally got the one. The difference is the cast: yours came as a miracle from the brink, delivered by a hometown hero who left and came home, while New York's broke after fifty-three years of the loudest, most demanding devotion in the sport. Same long-overdue payoff, one a small-market redemption and one a big-city release.",
    "DET": "Both of you are rust-belt cities that know hardship as a way of life. The difference is the deliverance: yours was a miracle, a title from the brink after fifty-two dry years, while Detroit clawed out of a record losing streak the only way it respects, one honest game at a time. Same grit, one a redemption story and one a refusal to take the easy way out.",
    "PHI": "Both of you are loyal, long-suffering cities promised that the wait would be worth it. The difference is the payoff: you got your miracle, a title from the brink that broke a fifty-two-year curse, while Philadelphia is still trusting the Process to deliver the one it keeps promising. Same enduring belief, one already cashed and one still pending.",
    "CHI": "Both of you had an era defined by a single transcendent talent. The difference is the shape of it: Chicago's was a six-ring dynasty now living as a ghost, while yours was one redemptive miracle delivered by a hometown hero who left, returned to keep a promise, then left again. Same one-superstar story, one an untouchable legend and one a tangle of abandonment and redemption."
  },
  "SAC": {
    "ATL": "Both of you carry a title so old it barely feels like yours. The difference is the devotion underneath: Atlanta's only banner is a 1958 inheritance and it spends its energy proving it is not disloyal, while you survived the longest drought of any champion, since 1951, and light a purple beam over the city after every single win. Same distant glory, one chasing relevance and one pure faith.",
    "CLE": "Both of you are cities defined by the long, long wait. The difference is the ending: Cleveland's broke in 2016 with a miracle from the brink, while yours stretches back to 1951, the longest drought of any team that has ever won, still unbroken. Same patient suffering, one finally redeemed and one still keeping the faith.",
    "POR": "Both of you have some of the most loyal small-market crowds anywhere, faithful through endless almost-and-nothing. The difference is the scar: Portland's runs through a 1977 title and decades of draft-day cruelty, while yours is the longest drought of any champion and seventeen straight years without a playoff game, endured and answered with a purple beam. Same showing-up devotion, two different lengths of wait.",
    "WAS": "Both of you hold a championship that belongs to a different version of the franchise. The difference is the response: Washington's came in 1978 under a name it has since retired, and it made peace with mediocrity, while yours dates to 1951 in another city and you answered the long wait with relentless devotion and a beam in the sky. Same borrowed glory, one resigned and one still burning."
  },
  "ATL": {
    "WAS": "Both of you hold one ancient title that hardly counts as yours. The difference is the feeling: Washington won in 1978 under a name it has since retired and made peace with the quiet years, while your only banner is a 1958 inheritance from St. Louis and you are still trying to win one that truly belongs to Atlanta. Same distant trophy, one resigned and one still hungry.",
    "SAC": "Both of you carry a title so old it barely feels like yours. The difference is the devotion underneath: yours is a 1958 inheritance and you spend your energy proving you are not disloyal, while Sacramento survived the longest drought of any champion, since 1951, and lights a purple beam over the city after every win. Same distant glory, one chasing relevance and one pure faith.",
    "PHX": "Both of you are electric, perennially exciting teams that have never quite gotten the one. The difference is how close you came: Phoenix reached the Finals three times and lost them all in the Valley, while your only banner is a 1958 inheritance and you have never made it back at all. Same ringless ache, one heartbreak at the doorstep and one still chasing a true Atlanta title.",
    "ORL": "Both of you are exciting southern markets that the rest of the country underrates. The difference is the heartbreak: Orlando twice reached the Finals on a young giant who then left, while your only trophy is a 1958 inheritance and you have spent years just proving your city is not disloyal. Same underrated-South pride, one stars-leaving pain and one a borrowed banner."
  },
  "WAS": {
    "SAC": "Both of you hold a championship that belongs to a different version of the franchise. The difference is the response: yours came in 1978 under a name you have since retired, and you made peace with mediocrity, while Sacramento's dates to 1951 in another city and it answered the long wait with relentless devotion and a beam in the sky. Same borrowed glory, one resigned and one still burning.",
    "ATL": "Both of you hold one ancient title that hardly counts as yours. The difference is the feeling: your 1978 banner came under a name you have since retired and you made peace with the quiet years, while Atlanta's is a 1958 inheritance and it is still trying to win one that truly belongs to it. Same distant trophy, one resigned and one still hungry.",
    "CLE": "Both of you made a kind of peace with long stretches of not mattering. The difference is the ending: Cleveland's wait broke in 2016 with a miracle from the brink, while yours simply continued, a title only in a retired name and a capital that never loved basketball first. Same endurance, one finally redeemed and one whose loyalty was always just about staying.",
    "ORL": "Both of you root in towns where basketball was never the first love and the best days feel borrowed or gone. The difference is the texture: Orlando keeps getting attached to giants who carry it to the Finals and then leave, while your only glory lives under a retired name and you made peace with just staying. Same wistful loyalty, one heartbreak of departure and one quiet endurance."
  },
  "BKN": {
    "LAC": "Both of you are big-market teams who collected stars and live in another franchise's shadow. The difference is the failure: you brought three superstars to the coolest borough and watched it implode before a Finals, while the Clippers are the oldest team never to reach one at all, collapsing in the playoffs year after year. Same star-stacking dream, one a fast explosion and one a slow drought.",
    "PHX": "Both of you went all-in on a roster of big names that flamed out. The difference is how far it got: Phoenix's expensive gamble at least reached three Finals across its history before the latest one fizzled, while yours blew up before a single Finals, drama and injury turning a sure thing into a punchline overnight. Same bought-greatness lesson, one a near-miss and one a quick implosion.",
    "HOU": "Both of you swing big, chasing greatness with a bold all-in roster. The difference is whether it landed: Houston's gambles delivered back-to-back titles and buried the doubters, while your three-superstar coronation came down fast with no foundation under it. Same appetite for the big move, one that paid off and one that became a cautionary tale.",
    "DAL": "Both of you are bold, star-driven franchises burned by the very stars you bet on. The difference is the wound: Dallas won it all in 2011 and then stunned everyone by trading away its own generational face, while you assembled three of the biggest names alive and watched the whole thing implode before a Finals. Same star-sized heartbreak, one a self-inflicted trade and one a house with no foundation."
  },
  "LAC": {
    "PHX": "Both of you are star-laden franchises forever chasing the one thing that never comes. The difference is the distance: Phoenix at least reached the Finals three times and lost, while you are the oldest team in the league never to make it at all. Same ringless heartbreak, one losing at the summit and one never quite reaching it.",
    "BKN": "Both of you are big-market teams who collected stars and live in another franchise's shadow. The difference is the failure: Brooklyn brought three superstars to the coolest borough and watched it implode before a Finals, while you are the oldest team never to reach one at all, collapsing in the playoffs year after year. Same star-stacking dream, one a fast explosion and one a slow drought.",
    "HOU": "Both of you chased rings by stacking talent and swinging big. The difference is the result: Houston's all-in bets delivered back-to-back titles, while yours fell apart in the playoffs again and again without a single Finals to show for it. Same star-chasing ambition, one that broke through and one still waiting for its first taste.",
    "DAL": "Both of you built around stars and learned how cruel the playoffs can be. The difference is the high point: Dallas toppled a crowned superteam to win it all in 2011, while you are still the oldest franchise never to reach a Finals, undone by collapse after collapse. Same star-driven design, one with a banner and one still chasing the breakthrough."
  },
  "PHX": {
    "LAC": "Both of you are star-laden franchises forever chasing the one thing that never comes. The difference is the distance: you reached the Finals three times and lost, while the Clippers are the oldest team in the league never to make it at all. Same ringless heartbreak, one losing at the summit and one never quite reaching it.",
    "DAL": "Both of you are star-driven franchises the desert and the Metroplex built big dreams around. The difference is the cruelty: Dallas actually won it all in 2011 and then broke its own heart by trading its star, while you reached three Finals and came home empty every time. Same big-name ambition, one had the ring and lost the player and one never got the ring at all.",
    "HOU": "Both of you swing big with star-driven rosters and refuse to settle for the middle. The difference is the payoff: Houston turned its boldness into back-to-back titles, while you turned yours into three trips to the Finals and three rides home empty. Same gambler's heart, one that cashed and one that keeps coming up just short.",
    "ATL": "Both of you are electric, perennially exciting teams that have never quite gotten the one. The difference is how close you came: you reached the Finals three times and lost them all in the Valley, while Atlanta's only banner is a 1958 inheritance and it has never made it back at all. Same ringless ache, one heartbreak at the doorstep and one still chasing a true title."
  },
  "MIA": {
    "HOU": "Both of you are bold winners who shoved the doubters' label right back at them. The difference is the engine: Houston was Clutch City, back-to-back rings that buried the choke talk, while you run the most demanding culture in the sport and turn castoffs into somebodies. Same defiant edge, one clutch swagger and one relentless standard.",
    "DAL": "Both of you mix star power with championship pedigree and a streak of drama. The difference is the constant: you treat greatness as a non-negotiable habit, three titles out of a brutal program, while Dallas won in 2011 and then blindsided everyone by trading its own franchise face. Same big stage, one a steady standard and one a loyalty whiplash.",
    "PHX": "Both of you are sun-and-style markets that wrap basketball in glamour. The difference is what the shine produces: you back yours with the most punishing program in the league and three titles, while Phoenix has the style and the stars but three lost Finals and no ring. Same glamorous surface, one discipline that wins and one heartbreak that does not.",
    "LAL": "Both of you wrap winning in glamour and never apologize for the shine. The difference is what sits underneath it: you run the most punishing program in the league and treat greatness as a habit earned in the gym, while Los Angeles was raised to believe the spotlight and the stars are a birthright. Same beautiful surface, one earned through sweat and one expected by right."
  },
  "DAL": {
    "PHX": "Both of you are star-driven franchises the desert and the Metroplex built big dreams around. The difference is the cruelty: you actually won it all in 2011 and then broke your own heart by trading your star, while Phoenix reached three Finals and came home empty every time. Same big-name ambition, one had the ring and lost the player and one never got the ring at all.",
    "HOU": "Both of you are Texas franchises who swing boldly and live with the consequences. The difference is the shape of the swing: Houston gambles between all-in and total teardown and won back-to-back along the way, while you won in 2011 and then made the unthinkable move of trading your own generational face. Same nerve, one a pendulum of teardowns and one a single shocking betrayal.",
    "MIA": "Both of you mix star power with championship pedigree and a streak of drama. The difference is the constant: Miami treats greatness as a non-negotiable habit, three titles out of a brutal program, while you won in 2011 and then blindsided everyone by trading your own franchise face. Same big stage, one a steady standard and one a loyalty whiplash.",
    "LAC": "Both of you built around stars and learned how cruel the playoffs can be. The difference is the high point: you toppled a crowned superteam to win it all in 2011, while the Clippers are still the oldest franchise never to reach a Finals. Same star-driven design, one with a banner and one still chasing the breakthrough."
  },
  "HOU": {
    "DAL": "Both of you are Texas franchises who swing boldly and live with the consequences. The difference is the shape of the swing: you gamble between all-in and total teardown and won back-to-back along the way, while Dallas won in 2011 and then made the unthinkable move of trading its own generational face. Same nerve, one a pendulum of teardowns and one a single shocking betrayal.",
    "PHX": "Both of you swing big with star-driven rosters and refuse to settle for the middle. The difference is the payoff: you turned your boldness into back-to-back titles, while Phoenix turned its into three trips to the Finals and three rides home empty. Same gambler's heart, one that cashed and one that keeps coming up just short.",
    "MIA": "Both of you are bold winners who shoved the doubters' label right back at them. The difference is the engine: you were Clutch City, back-to-back rings that buried the choke talk, while Miami runs the most demanding culture in the sport and turns castoffs into somebodies. Same defiant edge, one clutch swagger and one relentless standard.",
    "LAC": "Both of you chased rings by stacking talent and swinging big. The difference is the result: your all-in bets delivered back-to-back titles, while the Clippers fell apart in the playoffs again and again without a single Finals to show for it. Same star-chasing ambition, one that broke through and one still waiting for its first taste."
  },
  "TOR": {
    "ORL": "Both of you reached for greatness through a superstar who would not stay. The difference is the timing: Orlando twice rode a young giant to the Finals only to watch him leave without a banner, while your transcendent star stayed exactly one glorious season, won it all, and then walked. Same star-who-left story, one that got the trophy first and one that never did.",
    "CHA": "Both of you are non-traditional markets fighting to be taken seriously. The difference is the prize: Charlotte fought to reclaim a team, name, and history that had been taken away, while you carried a whole country's hopes as the league's lone outsider and stunned everyone with a 2019 title. Same outsider's chip, one an identity restored and one a national banner.",
    "NOP": "Both of you are younger franchises in markets that loved another sport first and have wrestled with losing stars. The difference is the payoff: New Orleans keeps finding a star and watching him leave, still searching, while you cashed one glorious year, a star who stayed just long enough to win it all. Same fragile star-hold, one a banner and one a story still being written.",
    "MIN": "Both of you spent years as overlooked outsiders the sport barely noticed. The difference is the reward: you stunned the world as the league's only team abroad and won the 2019 title, while Minnesota endured frozen-north futility and is only now reaching the doorstep. Same underdog identity, one with a banner no one can take and one still chasing a first Finals."
  },
  "ORL": {
    "TOR": "Both of you reached for greatness through a superstar who would not stay. The difference is the timing: you twice rode a young giant to the Finals only to watch him leave without a banner, while Toronto's transcendent star stayed exactly one glorious season, won it all, and then walked. Same star-who-left story, one that got the trophy first and one that never did.",
    "NOP": "Both of you are young southern markets that keep building around a star who eventually leaves. The difference is how high you climbed: you twice reached the Finals on a young giant before he walked, while New Orleans tends to lose its star before the breakthrough ever comes. Same departure heartbreak, one that touched the Finals and one still waiting to.",
    "CHA": "Both of you are younger southern markets carrying a particular kind of loss. The difference is the shape of it: Charlotte had its very team taken away and fought to win the name and history back, while you keep falling for giants who carry you to the Finals and then leave. Same heartbreak, one an identity stolen and reclaimed and one stars who would not stay.",
    "MEM": "Both of you are younger, non-traditional markets trying to build something that lasts. The difference is the staying power: you kept drafting giants who carried you to the Finals and then left, while Memphis found its soul in a city of grit and built an identity nobody could poach. Same outsider roots, one heartbreak when the stars leave and one a grind that stays put."
  },
  "NOP": {
    "ORL": "Both of you are young southern markets that keep building around a star who eventually leaves. The difference is how high you climbed: Orlando twice reached the Finals on a young giant before he walked, while you tend to lose your star before the breakthrough ever comes. Same departure heartbreak, one that touched the Finals and one still waiting to.",
    "CHA": "Both of you are young, identity-unsettled franchises in football-first towns. The difference is the chapter: Charlotte lost its team entirely and fought to win the name and history back, while you are the newest name in the league, still finding a star, losing him, and starting over. Same search for solid ground, one a reclamation and one a story still being written.",
    "TOR": "Both of you are younger franchises whose stars tend not to stay. The difference is the payoff: Toronto's transcendent player stayed exactly one season, won it all, and left with the banner secured, while you keep finding a star and watching him go before the breakthrough. Same fragile star-hold, one that cashed a glorious year and one still searching.",
    "MEM": "Both of you are younger southern markets without a long history to lean on. The difference is the certainty: Memphis knows exactly who it is, all grit and defense and making the other guy's night miserable, while you are still the newest name in the league, searching, losing stars, starting over. Same youth, one a settled identity and one a story still being written."
  },
  "CHA": {
    "NOP": "Both of you are young, identity-unsettled franchises in football-first towns. The difference is the chapter: you lost your team entirely and fought to win the name and history back, while New Orleans is the newest name in the league, still finding a star, losing him, and starting over. Same search for solid ground, one a reclamation and one a story still being written.",
    "ORL": "Both of you are younger southern markets carrying a particular kind of loss. The difference is the shape of it: you had your very team taken away and fought to win the name and history back, while Orlando keeps falling for giants who carry it to the Finals and then leave. Same heartbreak, one an identity stolen and reclaimed and one stars who would not stay.",
    "TOR": "Both of you are non-traditional markets fighting to be taken seriously. The difference is the prize: you fought to reclaim a team, name, and history that had been taken away, while Toronto carried a whole country's hopes as the league's lone outsider and stunned everyone with a 2019 title. Same outsider's chip, one an identity restored and one a national banner.",
    "MEM": "Both of you are younger southern markets with a fierce sense of who you are. The difference is where it came from: Memphis forged its identity out of grit and an odd journey, the hardest team to play against, while yours was taken away and you fought to win the name, the colors, and the history back. Same hard-won self, one born of grind and one of reclamation."
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
      "POR": 2
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
    "1": {
      "LAL": 3,
      "BOS": 3,
      "MIA": 3,
      "NYK": 3,
      "HOU": 3,
      "DAL": 3,
      "PHX": 3,
      "BKN": 3,
      "LAC": 3
    },
    "2": {
      "LAL": 2,
      "BOS": 2,
      "MIA": 2,
      "NYK": 2,
      "HOU": 2,
      "DAL": 2,
      "PHX": 2,
      "BKN": 2,
      "LAC": 2
    },
    "4": {
      "SAS": 2,
      "OKC": 2,
      "DEN": 2,
      "PHI": 2,
      "GSW": 2,
      "IND": 2,
      "POR": 2,
      "SAC": 2,
      "MIN": 2,
      "MEM": 2,
      "UTA": 2,
      "DET": 2,
      "MIL": 2,
      "CHA": 2,
      "WAS": 2
    },
    "5": {
      "SAS": 3,
      "OKC": 3,
      "DEN": 3,
      "PHI": 3,
      "GSW": 3,
      "IND": 3,
      "POR": 3,
      "SAC": 3,
      "MIN": 3,
      "MEM": 3,
      "UTA": 3,
      "DET": 3,
      "MIL": 3,
      "CHA": 3,
      "WAS": 3
    }
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
      "NYK": 2
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
      "MIN": 2
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
    "1": {
      "SAS": 3,
      "DEN": 3,
      "UTA": 3,
      "OKC": 3,
      "GSW": 3,
      "MIL": 3,
      "MIN": 3,
      "WAS": 3,
      "BOS": 3,
      "MIA": 3
    },
    "2": {
      "SAS": 2,
      "DEN": 2,
      "UTA": 2,
      "OKC": 2,
      "GSW": 2,
      "MIL": 2,
      "MIN": 2,
      "WAS": 2,
      "BOS": 2,
      "MIA": 2
    },
    "4": {
      "NYK": 2,
      "CLE": 2,
      "SAC": 2,
      "PHI": 2,
      "DAL": 2,
      "IND": 2,
      "DET": 2,
      "MEM": 2,
      "LAL": 2,
      "CHI": 2,
      "ATL": 2,
      "PHX": 2,
      "CHA": 2
    },
    "5": {
      "NYK": 3,
      "CLE": 3,
      "SAC": 3,
      "PHI": 3,
      "DAL": 3,
      "IND": 3,
      "DET": 3,
      "MEM": 3,
      "LAL": 3,
      "CHI": 3,
      "ATL": 3,
      "PHX": 3,
      "CHA": 3
    }
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
      "PHI": 2
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
    "1": {
      "SAS": 3,
      "UTA": 3,
      "OKC": 3,
      "DEN": 3,
      "GSW": 3,
      "MIL": 3,
      "BOS": 3,
      "PHI": 3,
      "MIN": 3,
      "TOR": 3
    },
    "2": {
      "SAS": 2,
      "UTA": 2,
      "OKC": 2,
      "DEN": 2,
      "GSW": 2,
      "MIL": 2,
      "BOS": 2,
      "PHI": 2,
      "MIN": 2,
      "TOR": 2
    },
    "4": {
      "DET": 2,
      "MEM": 2,
      "IND": 2,
      "MIA": 2,
      "POR": 2,
      "SAC": 2,
      "NYK": 2,
      "CLE": 2,
      "DAL": 2,
      "CHA": 2
    },
    "5": {
      "DET": 3,
      "MEM": 3,
      "IND": 3,
      "MIA": 3,
      "POR": 3,
      "SAC": 3,
      "NYK": 3,
      "CLE": 3,
      "DAL": 3,
      "CHA": 3
    }
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
      "MEM": 2
    },
    "C": {
      "LAC": 2,
      "PHX": 2,
      "BKN": 2,
      "HOU": 2,
      "DAL": 2
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

export { moduleQuestions, teams, archetypes, teamTextColors, archetypeDesc, greats, vitalStats, nearlyGot, scoring, teamDims, CARD_BADGES, badgeUrls, squadUrls };
