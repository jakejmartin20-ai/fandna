// FanDNA - MLB module data (sport three). Same shape as pl.js / nfl.js: the app, the
// scoring engine, the share card and the genome home all read these named exports through
// SPORT_DATA[code], so turning MLB on is its manifest entry plus the import in sportData.js.
//
// MLB is a FINGERPRINT sport (like NFL): the shared 7-dim coreProfile is matched against each
// team's teamDims (closer team, bigger head start), and the 12 module answers add the
// "points toward" tiebreakers below to separate teams that sit close in dim-space. The taglines,
// descriptions and result-screen evidence carry each team's exclusive history; the module
// QUESTIONS are universal, baseball-native, and answerable with zero baseball knowledge.
// Flag-gated off the manifest (live:false) until the flip.


const moduleQuestions = [
  {
    "id": "mlb_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "When something's there every day, not just for the big moments, that constant presence is:",
    "options": [
      {
        "label": "A comfort. The ritual itself matters more than how any one day turns out.",
        "value": "A"
      },
      {
        "label": "A grind I wouldn't trade, even on the worst days.",
        "value": "B"
      },
      {
        "label": "A long, slow romance, the good days and the bad.",
        "value": "C"
      },
      {
        "label": "Background noise until the moment that actually counts, and then it's everything.",
        "value": "D"
      },
      {
        "label": "A faith I keep through every long lean stretch.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q2",
    "type": "slider",
    "phase": "The fine print",
    "question": "Believe to the very end, or read it early and make peace?",
    "left": "It's never truly over till the very last moment, and I believe right to the end.",
    "right": "Some things are simply decided, and pretending otherwise is denial. I read it early and make my peace."
  },
  {
    "id": "mlb_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "Over a long haul full of hot streaks and rough patches, the you that shows up is:",
    "options": [
      {
        "label": "Steady. One bad week doesn't move me, the whole body of work is what counts.",
        "value": "A"
      },
      {
        "label": "All in on the hot streak, riding the high like it'll never end.",
        "value": "B"
      },
      {
        "label": "Bracing through the slump, certain the turn is coming any day.",
        "value": "C"
      },
      {
        "label": "Loud either way. I feel every moment of it, and so does everyone near me.",
        "value": "D"
      },
      {
        "label": "Unbothered. I expect to be fine, and I usually am.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q4",
    "type": "slider",
    "phase": "The fine print",
    "question": "Keep the faith and the rituals, or trust only what's measured?",
    "left": "I keep little rituals I won't break, even knowing full well they do nothing. The faith is the whole point.",
    "right": "I trust what can actually be measured and let the rest go. Do the work right and the results come."
  },
  {
    "id": "mlb_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "What does wanting something for years do to you?",
    "options": [
      {
        "label": "I dig in. The loyalty becomes the point, not the prize.",
        "value": "A"
      },
      {
        "label": "I ache for it. I need it while I'm still here to feel it.",
        "value": "B"
      },
      {
        "label": "I laugh and believe again, same as every year.",
        "value": "C"
      },
      {
        "label": "I put my head down and keep showing up anyway.",
        "value": "D"
      },
      {
        "label": "Not much. I've never expected to go without for long.",
        "value": "E"
      },
      {
        "label": "I had it once, and losing it hurt worse than never having it.",
        "value": "F"
      }
    ]
  },
  {
    "id": "mlb_q6",
    "type": "choice",
    "phase": "The fine print",
    "question": "When you win, how do you carry it?",
    "options": [
      {
        "label": "Play it straight and humble. Act like you've been there before.",
        "value": "A"
      },
      {
        "label": "Let it all out and let them hear it. The joy is the point, no apology.",
        "value": "B"
      },
      {
        "label": "Win ugly, win tough, do the unglamorous things right.",
        "value": "C"
      },
      {
        "label": "Make it a show. The spectacle is half of why anyone watches.",
        "value": "D"
      },
      {
        "label": "However it comes. I'm just relieved it finally happened.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "How do you hold a hope bigger than your own life?",
    "options": [
      {
        "label": "As the most romantic thing there is. Holding it is the point.",
        "value": "A"
      },
      {
        "label": "Badly. I need it while I'm still here to feel it.",
        "value": "B"
      },
      {
        "label": "Lightly, but I'd treasure the one time it came.",
        "value": "C"
      },
      {
        "label": "As a debt I'm owed, and I've stopped expecting it paid.",
        "value": "D"
      },
      {
        "label": "I don't. I expect mine long before then.",
        "value": "E"
      },
      {
        "label": "I finally got it, then watched it slip, and I want it back more than ever.",
        "value": "F"
      }
    ]
  },
  {
    "id": "mlb_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When something you've given your loyalty to gets changed out from under you, you:",
    "options": [
      {
        "label": "Stay loyal to where it came from, whatever they turn it into.",
        "value": "A"
      },
      {
        "label": "Build my own thing from nothing, and dare anyone to enjoy taking it on.",
        "value": "B"
      },
      {
        "label": "Carry the anger right alongside the love. Both are real, forever.",
        "value": "C"
      },
      {
        "label": "Came back from the lowest point imaginable and made it my proudest chapter.",
        "value": "D"
      },
      {
        "label": "Never happened to me. What's mine has always been mine.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "Win on brains and grit, or pay for the best?",
    "left": "Give me nothing and watch me win anyway. Brains and grit beat a fat wallet.",
    "right": "If you want the best, you pay for the best. I spend whatever it takes and I won't apologize."
  },
  {
    "id": "mlb_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Some things drown in their own history, the records, the ghosts of everyone before. To you all that is:",
    "options": [
      {
        "label": "Everything. I measure today against a glorious past and mostly find today wanting.",
        "value": "A"
      },
      {
        "label": "A standard to live up to, proof of how it is supposed to be done.",
        "value": "B"
      },
      {
        "label": "A weight I'd love to finally escape by writing something new.",
        "value": "C"
      },
      {
        "label": "Someone else's. My story is still being written, fresh.",
        "value": "D"
      },
      {
        "label": "Background. I'm here for right now, not the museum.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "One against one, everyone watching, nowhere to hide. You'd rather be:",
    "options": [
      {
        "label": "The one expected to win, with everything to lose. Pressure is the price of being good.",
        "value": "A"
      },
      {
        "label": "The underdog nobody's betting on, with everything to gain.",
        "value": "B"
      },
      {
        "label": "The one who's been here a hundred times and feels nothing but calm.",
        "value": "C"
      },
      {
        "label": "The one running on pure heart, refusing to blink when the odds say blink.",
        "value": "D"
      },
      {
        "label": "The one putting on a show, daring the moment to go wrong.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Strip away winning. When you show up, what you're really there for is:",
    "options": [
      {
        "label": "The people beside me. It was always about who I share it with.",
        "value": "A"
      },
      {
        "label": "The place. This spot, this city, this is home.",
        "value": "B"
      },
      {
        "label": "The everyday escape. A few quiet hours that are just mine.",
        "value": "C"
      },
      {
        "label": "The chance, however small, to see something I'll tell my grandkids about.",
        "value": "D"
      },
      {
        "label": "The win. Don't romanticize it, I came to win.",
        "value": "E"
      }
    ]
  }
];

const teams = {
  "NYY": {
    "code3": "NYY", "kitType": "solid", "secondaryColor": null,
    "name": "New York Yankees",
    "emoji": "🎩",
    "color": "#0C2340",
    "tagline": "Twenty-seven titles. Anything short of the twenty-eighth still reads to you as failure.",
    "desc": "Winning is not the goal, it is the floor. You hold twenty-seven titles, more than anyone in the sport, and somehow that only raised the bar instead of settling it. The pinstripes have meant the same thing in the Bronx for a hundred years, and you wear them like a standard everyone else is measured against. Half the sport copies you and the other half roots against you, and you have never once mistaken either for a reason to apologize. A great season without a parade is just a longer way to come up short.",
    "why": [
      "The target is the title and it does not move. A near miss is just a loss with extra steps.",
      "Standards, not magic. A century of winning got built on repetition, and you trust the machine over the moment.",
      "Being everyone's villain costs you nothing. The contempt is just the rest of the league measuring itself against you."
    ]
  },
  "LAD": {
    "code3": "LAD", "kitType": "solid", "secondaryColor": null,
    "name": "Los Angeles Dodgers",
    "emoji": "💙",
    "color": "#005A9C",
    "tagline": "You won it all, did it again the next year, and never apologized for what it cost.",
    "desc": "You buy the best and you win, and you have made your peace with everyone hating you for it. The latest titles came back to back, the first repeat in a quarter century, and the writers called it inevitable like it was an insult, so you took it as a compliment. Underneath the money is an older nerve, a team that broke a borough's heart by leaving Brooklyn and carried the number forty-two west as a promise. You do not pretend it was close. You stacked the deck, said so out loud, and collected the trophy anyway.",
    "why": [
      "Your ambition is total and your spending is shameless, and you see no contradiction in that. If the best is for sale, you buy it.",
      "Money still has to be built into something. You trust the process that turns a payroll into rings, and you carry the Brooklyn history as fuel rather than ballast."
    ]
  },
  "STL": {
    "code3": "STL", "kitType": "duo", "secondaryColor": "#0C2340",
    "name": "St. Louis Cardinals",
    "emoji": "🐦",
    "color": "#C41E3A",
    "tagline": "Eleven titles and almost no noise. There is one right way to win and you were raised on it.",
    "desc": "You win the quiet way, and you believe the quiet way is the only one that counts. Eleven championships sit in your history, more than any team outside New York, and you collected them without theatrics, without a villain era, without ever needing to be the loudest team in the room. There is even a name for it, a way of carrying yourself that prizes fundamentals, class, and no drama. From your patch of the Midwest, that restraint is not modesty, it is the whole identity. Do it right, do it again, and let the trophies speak.",
    "why": [
      "Done properly beats done flashily. The craft and the standard are the point, and the result follows from them.",
      "Your loyalty runs through a place and a way of doing things, not through a marquee name. The institution outlives any one season.",
      "Chaos holds almost no appeal for you. Calm, fundamentals, quiet confidence: that is how you were taught this game."
    ]
  },
  "ATL": {
    "code3": "ATL", "kitType": "duo", "secondaryColor": "#CE1141",
    "name": "Atlanta Braves",
    "emoji": "🪓",
    "color": "#13274F",
    "tagline": "Fourteen division titles in a row, and a nation that adopted you on cable.",
    "desc": "You were great for so long it became its own kind of heartbreak. Fourteen straight division titles, an unmatched run of regular-season dominance, and for years a lone championship at the end of it, the cruelty hiding inside the success. Beamed across the country on cable, you became a team adopted by people who had never been to Georgia, the closest thing the sport had to a national side. The wait for a second title stretched out long enough to ache, and then, when most fanbases would have stopped believing, you went out and got it.",
    "why": [
      "You hold a high standard over a long horizon. One season never defines you; the decade-long body of work does.",
      "Fourteen straight division titles, one trophy at the end of them. You know the exact distance between great and champion.",
      "Belonging, for you, arrived by broadcast. Your people are scattered across a country rather than packed into one neighborhood.",
      "And you kept believing past the point most would have stopped, which is the only reason the second one ever came."
    ]
  },
  "SF": {
    "code3": "SFG", "kitType": "duo", "secondaryColor": "#27251F",
    "name": "San Francisco Giants",
    "emoji": "🌉",
    "color": "#FD5A1E",
    "tagline": "Champions in two cities, with a strange run of titles that only ever came in even years.",
    "desc": "Yours is the oldest kind of greatness, the kind that lives in the bones whether or not the current team can find it. You won titles in New York and then again by the bay, including a strange charmed run that arrived only in even-numbered years, the sort of thing that should not mean anything and somehow does. Your park sits on cold water where kayakers wait for home runs to splash down, and statues of legends ring the gates. The present can sputter, the way it has lately. The lineage does not need it to. The show was always in the blood.",
    "why": [
      "Pedigree carries you further than present-day hunger does. The history is rich enough to hold the identity through lean years.",
      "You have a soft spot for fate and pattern, for a thing that cannot be explained and keeps coming true anyway.",
      "A specific cold, a specific water, a specific lineage. No relocation ever fully erased any of it."
    ]
  },
  "CIN": {
    "code3": "CIN", "kitType": "solid", "secondaryColor": null,
    "name": "Cincinnati Reds",
    "emoji": "🔴",
    "color": "#C6011F",
    "tagline": "The first professional team there ever was, still playing like every grounder's a fight.",
    "desc": "You were here before anyone. The first team to ever pay its players, the oldest roots in the entire sport, a heritage that predates almost everything else baseball calls tradition. Out of that came a style with no patience for coasting, an all-out, head-first way of playing where effort is the whole creed and a routine grounder is treated like a collision worth winning. The dynasty they called the Machine ran on it. The present-day team drifts in and out of contention, the way old franchises do. The intensity in the blood never drifts anywhere.",
    "why": [
      "Your roots run deeper than anyone's in the sport, and that history is load-bearing for the whole identity.",
      "Full effort or nothing. Half-speed is the one unforgivable thing here, on the field or off it, and everyone near you feels the heat."
    ]
  },
  "CHC": {
    "code3": "CHC", "kitType": "duo", "secondaryColor": "#CC3433",
    "name": "Chicago Cubs",
    "emoji": "🐻",
    "color": "#0E3386",
    "tagline": "A hundred and eight years, a goat to blame, and the extra-innings night you finally ended it.",
    "desc": "Your devotion was measured in generations, not seasons. A hundred and eight years passed between titles, the longest wait the sport has ever seen, long enough that fans blamed a billy goat turned away at the gate and half meant it. You loved an ivy-walled ballpark in the afternoon sun and kept showing up for a team that broke your heart on a loop. Then, after a rain delay and extra innings, a city that had long since stopped expecting it came completely undone.",
    "why": [
      "Your loyalty is generational. You stayed through a wait most people would not believe, because leaving was never once on the table.",
      "The ballpark is half of it. Ivy, an afternoon, a neighborhood you would go to even if the team were unwatchable, which it often was.",
      "Heartbreak became a love story rather than a grievance. Humor and romance got you through where bitterness would have finished it."
    ]
  },
  "BOS": {
    "code3": "BOS", "kitType": "duo", "secondaryColor": "#0C2340",
    "name": "Boston Red Sox",
    "emoji": "🧦",
    "color": "#BD3039",
    "tagline": "Eighty-six years cursed, then four straight from down 0-3 to break it against your rival.",
    "desc": "Your faith was forged in the longest grudge the sport has. For eighty-six years you went without a title, blamed a long-ago sale that handed your best player to the team you hate most, and watched that rival stack up rings while you lost in ever crueler ways. Then came the autumn you fell behind them three games to none, a single loss from elimination, and won four in a row, the only team in history to do it, before taking the championship. The curse and the grudge broke in one run, and three more titles followed.",
    "why": [
      "Your loyalty runs hot, and a rivalry defines you nearly as much as your own team does.",
      "Nothing is felt privately here. Baseball is argued year-round and lived at full volume.",
      "Eighty-six years of suffering finally paid, and the memory of the wait still sharpens every win.",
      "Down three games to none to them, and then four straight. That night is load-bearing for the whole identity."
    ]
  },
  "CLE": {
    "code3": "CLE", "kitType": "duo", "secondaryColor": "#0C2340",
    "name": "Cleveland Guardians",
    "emoji": "🛡️",
    "color": "#E31937",
    "tagline": "Seventy-eight years and counting, and not once has that been a reason to leave.",
    "desc": "Yours is the longest wait of any team that has actually won one. The last title came in 1948, and the closest you have come since was a World Series you led three games to one before it slipped away in extra innings. You even changed your name, to one drawn from the giant statues guarding a bridge downtown. Through it all you run a thrifty, clever machine that develops stars and then watches them leave for richer teams. The drought outlasts every star who passes through.",
    "why": [
      "Nineteen forty-eight, and not once have you threatened to leave over it. The drought is part of who you are now.",
      "Patience is your default rather than resignation. You absorbed a three-games-to-one collapse in extra innings and went back to work the next spring.",
      "You like a thing built carefully and run well, and you would never make a speech about it."
    ]
  },
  "SEA": {
    "code3": "SEA", "kitType": "duo", "secondaryColor": "#C4CED4",
    "name": "Seattle Mariners",
    "emoji": "⚓",
    "color": "#005C5C",
    "tagline": "The only team never to reach a World Series. Next year is still the one, and you mean it.",
    "desc": "You are the only team in the entire sport that has never once reached the World Series, the lone holdout after half a century of trying. You once won more games in a season than almost any team ever and still missed, and last fall you came nine outs from finally breaking through before a Game 7 ripped it away. None of it stops you. In the far corner of the map by the water, you show up every spring anyway, faithful past all reason.",
    "why": [
      "Fifty years, no World Series, and not once have you gone looking for another team.",
      "Nine outs. That is how close last fall came, and you will be back in April like it never happened.",
      "The ache is not a side effect. For you it is most of the feeling, and indifference would be worse.",
      "It is tied to a place, too. Nobody drifts into this by accident, which makes the devotion feel less like habit and more like a pact you keep on purpose."
    ]
  },
  "PIT": {
    "code3": "PIT", "kitType": "duo", "secondaryColor": "#27251F",
    "name": "Pittsburgh Pirates",
    "emoji": "🏴‍☠️",
    "color": "#FDB827",
    "tagline": "Twenty straight losing seasons, the longest run in American sport. You watched every one from the prettiest ballpark in it.",
    "desc": "Your loyalty was tested like almost no other: twenty straight losing seasons, a record across all of American sport, and an ownership that long seemed to treat not spending as the plan. You answer it by showing up anyway, to a ballpark on the river so lovely that visitors come just to see it. You carry a number twenty-one once worn by a man who died bringing relief to strangers, and a song about being family. Even when a generational arm finally arrived, the wallet stayed shut. You stayed too.",
    "why": [
      "Twenty losing seasons in a row did not break it, which tells you most of what your loyalty is.",
      "You belong to a place and a ballpark as much as to a team. The river, the bridge, the view are half of why you keep coming.",
      "Loving the team and trusting the people who run it are two different accounts for you, and only one of them is full."
    ]
  },
  "SD": {
    "code3": "SDP", "kitType": "duo", "secondaryColor": "#FFC425",
    "name": "San Diego Padres",
    "emoji": "⛪",
    "color": "#4E2A1E",
    "tagline": "A small market that spends like a superpower. Still no ring, and still swinging for it.",
    "desc": "You are a small-market team that spends like a superpower, not out of arrogance but out of pure, undisguised want. You wear brown and gold like nobody else and you have chased a first championship harder than teams with three times your history, and twice you have reached the very last stage and come away with nothing. The man who pushed that ambition hardest did not live to see it finished. So you keep swinging for it all, every winter, burning everything you have and betting the want will finally be enough.",
    "why": [
      "Your ambition is huge and a little reckless, the kind that bets everything on the chance rather than playing it safe.",
      "The want is emotional for you, not a calculation. The chase itself is most of the feeling.",
      "Brown and gold, all in, every winter. You will take the swings and live with the wreckage because the dream is worth it."
    ]
  },
  "COL": {
    "code3": "COL", "kitType": "duo", "secondaryColor": "#C4CED4",
    "name": "Colorado Rockies",
    "emoji": "🏔️",
    "color": "#4E4191",
    "tagline": "A mile up, where the ball flies and the rules bend. You have never once solved your own air.",
    "desc": "You play a mile above everyone else, where the thin air makes baseballs fly and bends the basic rules of the game in ways no other team has to reckon with. It is a beautiful, brutal puzzle, and in all your years you have never solved it. You reached the World Series exactly once, on a charmed October run, and were swept once you arrived. Mostly you have lived far from contention. But the mountains are yours, the altitude is yours, and nobody else plays the game in air like this.",
    "why": [
      "You are shaped by a circumstance nobody else shares, and you have made peace with how strange and hard it is.",
      "The mountains and the altitude define you more than any trophy could. You know the deck is oddly stacked, and you show up without bitterness."
    ]
  },
  "ATH": {
    "code3": "ATH", "kitType": "duo", "secondaryColor": "#EFB21E",
    "name": "Athletics",
    "emoji": "🐘",
    "color": "#006341",
    "tagline": "You wrote the book on winning with no money, then they took your city's name.",
    "desc": "You are the original underdog with a calculator, the team that learned to beat the richest clubs in the sport without the money to match them, and you did it in green and gold for a city that adored you. The method you invented gets copied everywhere now. Then ownership pulled the team out of that city entirely, dropped the place-name, and sent you to play in a borrowed minor-league park while a new home rises somewhere you never chose. The colors stay. So does the grudge.",
    "why": [
      "You take real pride in outthinking people with deeper pockets. Doing more with less is not a constraint, it is the whole sport to you.",
      "Your loyalty is to the colors and the idea, not to whoever holds the deed. You can love the badge and resent the people moving it.",
      "Something that was yours got taken. The grudge sits under the scrappiness and you have not made peace with it."
    ]
  },
  "TB": {
    "code3": "TBR", "kitType": "duo", "secondaryColor": "#8FBCE6",
    "name": "Tampa Bay Rays",
    "emoji": "☀️",
    "color": "#092C5C",
    "tagline": "You solved baseball like a math problem. Then a hurricane took your roof and you kept solving it.",
    "desc": "You have spent your whole existence proving money is not the same as brains. On one of the lowest payrolls in the sport, in the toughest division it has, you keep churning out contenders and have reached the last stage twice on a budget that should not allow it. You have never drawn big crowds, and a hurricane once tore the roof off your home and sent you to play a full season in someone else's park. None of it slows the machine. You reload and beat the rich teams again.",
    "why": [
      "Cold math over sentiment, every time. You would trade a beloved player for a better one on a Tuesday and sleep fine.",
      "You are unsentimental and adaptable. Upheaval that would rattle other clubs, even losing your own building, you route around.",
      "Expecting to contend is not optimism for you, it is arithmetic. You quietly assume it every year and you are usually right."
    ]
  },
  "MIL": {
    "code3": "MIL", "kitType": "duo", "secondaryColor": "#12284B",
    "name": "Milwaukee Brewers",
    "emoji": "🍺",
    "color": "#FFC52F",
    "tagline": "You ship your best players away every winter, and somehow the party never stops.",
    "desc": "You are proof a small city with a small budget can simply refuse to lose. You ship your best players to richer teams every winter and keep right on winning the division, building contenders out of pitching, development, and stubbornness. And you do it with more joy than almost anyone, a mascot with his own slide above left field and a race of costumed sausages in the middle of every game. Cheap teams are supposed to rebuild and wait. You just keep showing up good.",
    "why": [
      "Small city, high expectations, no apology for either. Sitting back and waiting is for other people.",
      "You take real pride in what you can make out of what you have, and none of it has ever felt like settling.",
      "Winning is supposed to be fun and you make sure it is. The joy is not a consolation prize here, it is most of the point."
    ]
  },
  "MIN": {
    "code3": "MIN", "kitType": "duo", "secondaryColor": "#002B5C",
    "name": "Minnesota Twins",
    "emoji": "⭐",
    "color": "#D31145",
    "tagline": "Two dramatic titles under a roaring dome, and then a record run of Octobers that broke you.",
    "desc": "You won two of the most dramatic World Series the sport has staged, both at home in a deafening indoor dome with thousands of white hankies spinning in the air, one ending on a tenth-inning Game 7 they still call the best ever. Then the other side took over: eighteen straight playoff losses across two decades, a record nobody wanted, the October futility becoming its own grim joke, until at last you broke it. Stoic, northern, and patient, you take the cold and the heartbreak in stride.",
    "why": [
      "Glory and grief both get held without much drama. Stoicism is your native setting, in good times and bad.",
      "Your roots run deep into a specific northern place: its cold, its understatement, its quiet pride.",
      "Eighteen straight October losses never quite killed the faith. You absorbed it and kept showing up, which is the whole northern trick."
    ]
  },
  "KC": {
    "code3": "KCR", "kitType": "duo", "secondaryColor": "#BD9B60",
    "name": "Kansas City Royals",
    "emoji": "👑",
    "color": "#004687",
    "tagline": "Two titles, thirty years apart, and neither one bought.",
    "desc": "You proved a thing the sport had half forgotten: that you can win it all on speed, contact, defense, and a bullpen that simply shut the door, without the home runs and the payroll everyone else chased. You did it in a blue unchanged in half a century, under the only fountains in the game, in a ballpark people travel to just to see the water. There was a long drought before that ring and struggle since. But the way you won, small-ball and relentless and team-first, only you can really claim it.",
    "why": [
      "The unglamorous craft beats the highlight reel for you. Speed, contact, defense, a bullpen that shuts the door.",
      "You take pride in a look and an identity that have stayed loyal to themselves for fifty years, and long droughts taught you to savor the rare summit."
    ]
  },
  "PHI": {
    "code3": "PHI", "kitType": "duo", "secondaryColor": "#284898",
    "name": "Philadelphia Phillies",
    "emoji": "🔔",
    "color": "#E81828",
    "tagline": "The toughest crowd in the sport. You booed Santa Claus and meant it as love.",
    "desc": "You are the most honest crowd in the sport, and honest here means brutal. This is the fanbase that once booed Santa Claus and has booed its own stars ever since, not from cruelty but from a refusal to pretend. You love loud and you boo loud, and you expect the effort to match the feeling in the stands. When it all comes together, the noise at home is something opponents dread. Holding your heroes to account is just another way you love them.",
    "why": [
      "Loud, unfiltered, and impossible to hide. You feel every game at full volume and you have never once pretended otherwise.",
      "You hold the people you love to a high standard, and honesty, even harsh honesty, is how you show it.",
      "The crowd is not background for you. The noise and the shared intensity are central to how the game gets experienced at all."
    ]
  },
  "DET": {
    "code3": "DET", "kitType": "duo", "secondaryColor": "#FA4616",
    "name": "Detroit Tigers",
    "emoji": "🐯",
    "color": "#0C2340",
    "tagline": "The city that put the world on wheels. The same old English D your grandparents wore, through every boom and every bust.",
    "desc": "You come from the city that built the American car and then took the worst of its collapse, and your baseball carries all of it: the grind, the toughness, the refusal to be counted out. You wear an old English letter unchanged in a century, the same one your grandparents wore through the good decades and the brutal ones. You have won it all and you have also lost a hundred and nineteen games in a single year. What stays constant is the work. In Detroit, you do not quit on the team or the town.",
    "why": [
      "The same letter on the chest for a century. Other clubs freshen the look every few years; you have never once seen the need.",
      "You hold steady when things go wrong. A hundred and nineteen losses in a single year did not produce a crisis of faith, just a longer winter.",
      "Your loyalty is bound up with a place and its working life, through booms and busts alike."
    ]
  },
  "CWS": {
    "code3": "CWS", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Chicago White Sox",
    "emoji": "⚪",
    "color": "#A6AEB2",
    "tagline": "Chicago's other team, and you would not cross town for anything.",
    "desc": "You are the South Side, the half of Chicago the postcards skip, blue collar and proud of the chip on your shoulder. You broke an eighty-eight-year drought of your own in 2005 and barely got the attention for it. Then in 2024 you lost more games in a season than any team in the modern history of the sport, an almost unthinkable low, fans chanting at ownership to sell. Still you show up, because South Side loyalty was never about the standings. It was about not being the other team in town.",
    "why": [
      "A chip on the shoulder is standard issue here, the pride of the overlooked half of a divided town.",
      "Your loyalty has nothing to do with the standings. You stayed through the most losses any modern team has ever taken, because the badge is identity and not entertainment.",
      "You are not tidy about any of it. The defiance is loud, the grudge against the other side of town is permanent, and neither is going anywhere."
    ]
  },
  "BAL": {
    "code3": "BAL", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Baltimore Orioles",
    "emoji": "🟠",
    "color": "#DF4601",
    "tagline": "You do the small things right every day, under the warehouse everyone else copied.",
    "desc": "You believe in the fundamentals as a creed, the small things done right, and in a kind of relentless reliability, the same spirit as the hometown legend who once played a record two thousand six hundred straight games without ever taking a day. Your ballpark, with its old brick warehouse looming over right field, was so beautiful it set off a wave of imitators across the sport. You have had brilliant runs and lean stretches both. The orange does not waver. Birdland shows up either way.",
    "why": [
      "Craft and consistency, the unglamorous discipline of doing the basics right, over and over.",
      "You are steady and even-keeled through good years and lean ones, the kind people can count on without ever being told to."
    ]
  },
  "NYM": {
    "code3": "NYM", "kitType": "duo", "secondaryColor": "#FF5910",
    "name": "New York Mets",
    "emoji": "🍎",
    "color": "#002D72",
    "tagline": "You're New York's other team, lovable and heartbroken, and nobody's little brother.",
    "desc": "You are New York's second team and you have built an identity out of it, lovable and luckless and self-aware, the home of miracle runs and slow-motion collapses. For decades you lived in the long shadow of the team across town. Then ownership decided enough was enough and signed the single biggest contract in the history of professional sports, pulling a superstar straight out of the Bronx, just to prove you would not be anyone's little brother. However it ends, glory or heartbreak, it will at least be loud.",
    "why": [
      "Underdog identity worn with humor and self-awareness. You find something lovable in the heartbreak, which is lucky, because there is a lot of it.",
      "Your emotions run high and public, agony and ecstasy both lived at full New York volume.",
      "You will go all in to prove a point. Given the choice between the safe thing and the enormous swing, you take the swing.",
      "Second team in town is a label, not a verdict. You have never once accepted being anyone's little brother."
    ]
  },
  "MIA": {
    "code3": "MIA", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Miami Marlins",
    "emoji": "🐟",
    "color": "#00A3E0",
    "tagline": "Two titles as a young upstart, both sold for parts before your confetti settled.",
    "desc": "You are the team that proved you can win it all and still get torn down to the studs. Twice you came out of nowhere as a young upstart and won the World Series, and twice, almost before the parade ended, the roster got sold off for parts. You play in teal under the Miami sun, a city of beautiful temporary things, in front of crowds that learned the hard way not to get attached. The flash is real. So is the heartbreak baked into it. Nothing you build is quite allowed to last.",
    "why": [
      "Glory and loss are often the same story to you, so you hold success loosely. You have watched it vanish inside a single winter.",
      "You have a flair for the sudden and spectacular, the run out of nowhere that nobody saw coming.",
      "Guarding your heart is not cynicism, it is experience. Nothing here has ever been allowed to last."
    ]
  },
  "TOR": {
    "code3": "TOR", "kitType": "duo", "secondaryColor": "#E8291C",
    "name": "Toronto Blue Jays",
    "emoji": "🍁",
    "color": "#134A8E",
    "tagline": "You're not a city's team but a country's, back to back once on a walk-off home run.",
    "desc": "You belong to an entire country, the only team a whole nation gets to claim, which makes every season a coast-to-coast affair from Vancouver to the Maritimes. You won it all twice in a row in the early nineties, the second sealed by a walk-off home run a whole country still remembers watching. Last fall you roared back to the brink, then lost a Game 7 in extra innings with the trophy almost in hand. The wait resumes, but it resumes for an entire nation at once.",
    "why": [
      "Your sense of belonging is enormous in scale, tied to a whole country rather than one city.",
      "Being the only one of your kind matters to you. There is real pride in representing something bigger than a hometown.",
      "Last fall is still raw. They clinched it on your field, in front of your people, and you will carry that straight into next April."
    ]
  },
  "TEX": {
    "code3": "TEX", "kitType": "duo", "secondaryColor": "#003278",
    "name": "Texas Rangers",
    "emoji": "🤠",
    "color": "#C0111F",
    "tagline": "Twice one strike away in a single night. Fifty years later you finally finished it.",
    "desc": "For half a century you waited, and the cruelest part came in 2011, when you stood one strike away from the title, twice in the same night, and lost it anyway, the kind of heartbreak that scars a fanbase for a decade. Then in 2023 you went out and finished it, winning the whole thing on the road, the wait finally over. You are Texas-sized in everything, the hurt and the redemption both. You know exactly what the wait costs and exactly what it is worth.",
    "why": [
      "Delayed gratification is something you understand in your bones. The wait was long and it was not gentle.",
      "You feel it all at full Texas scale, the heartbreak and the triumph both, and you will never take the payoff for granted."
    ]
  },
  "AZ": {
    "code3": "AZ", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Arizona Diamondbacks",
    "emoji": "🐍",
    "color": "#30CED8",
    "tagline": "Barely four years old when you beat the sport's most storied team on a Game 7 hit.",
    "desc": "You are the desert upstart who crashed the party fast. Barely four years into your existence, you beat the most storied franchise in the sport in a Game 7 decided in the final at-bat, a championship before most expansion teams find their feet. You play under a roof against the heat with a snake on your chest, and you have stayed scrappy and dangerous since, reaching the big stage again on nerve more than payroll. Nobody hands you anything in the desert. You take it.",
    "why": [
      "You move fast and fearlessly, willing to crash the party before anyone thinks you are ready.",
      "Nerve and preparation do the work. Punching above your weight is not a slogan for you, it is the record.",
      "You carry an upstart's swagger, the confidence of a team that already shocked the biggest name in the sport and knows it can happen again."
    ]
  },
  "WSH": {
    "code3": "WSH", "kitType": "duo", "secondaryColor": "#AB0003",
    "name": "Washington Nationals",
    "emoji": "🏛️",
    "color": "#14225A",
    "tagline": "Born in Montreal, uprooted to the capital. You started one season nineteen and thirty-one and won the whole thing.",
    "desc": "Your story starts in another country. You were born as the Expos in Montreal, the team that gave Canada baseball before being uprooted to the nation's capital, leaving a city heartbroken behind you. For years in Washington you were good and never quite enough. Then came 2019, a season that opened nineteen and thirty-one, looked finished by May, and became a charmed run to the capital's first championship in nearly a century. You learned the hard way that the season is long and nothing is over until it is.",
    "why": [
      "Your history started somewhere else and moved. You came through the upheaval of that and kept going.",
      "You never count anything as finished. A terrible start is just the first act.",
      "Patience here was hard-won. You learned that the worst beginning can still turn into the best ending."
    ]
  },
  "HOU": {
    "code3": "HOU", "kitType": "duo", "secondaryColor": "#002D62",
    "name": "Houston Astros",
    "emoji": "🚀",
    "color": "#EB6E1F",
    "tagline": "You're the most relentless winning machine in the game, and the most hated for it.",
    "desc": "You turned baseball into a machine and stopped apologizing for being good at it. A title in 2017 that the rest of the sport will forever stamp with an asterisk, after a sign-stealing scheme came to light, then another won clean in 2022 with the whole world rooting against you. For most of a decade you reached the final four almost every year, the most relentless run of contention in the game. You are the team everyone loves to hate, and somewhere along the way you decided that was just fine.",
    "why": [
      "You are relentlessly driven and completely unbothered by the resentment that comes with it.",
      "System over sentiment. The cold efficiency of a machine built to keep contending is the thing you actually trust.",
      "Being the villain stopped bothering you a long time ago. The outside hatred does not rattle you, it very nearly fuels you."
    ]
  },
  "LAA": {
    "code3": "LAA", "kitType": "duo", "secondaryColor": "#003263",
    "name": "Los Angeles Angels",
    "emoji": "😇",
    "color": "#BA0021",
    "tagline": "Two of the greatest who ever lived, at the same time. Not one October win to show for it.",
    "desc": "You have spent a generation watching greatness go to waste. You rostered two of the finest players the sport ever produced, at the same time, and never won a single playoff game with them. You have not been to October in over a decade. Then one of those talents left for the team up the freeway and immediately won it all, twice, a gut-punch almost too cruel to script. You have a title, back in 2002, and the lit halo still stands. Mostly you wait, loyal to a team that broke your heart with riches it could not use.",
    "why": [
      "Your loyalty is remarkable and a little tragic, held through a long drought and a generation of squandered greatness.",
      "You know the specific pain of wasted potential, of having everything you needed and still coming up empty.",
      "The faith holds anyway. One old championship and a lit halo, and you are still here."
    ]
  }
};

const archetypes = {
  "NYY": "The Bronx Bomber",
  "LAD": "Blue Heaven",
  "STL": "The Redbird",
  "ATL": "Braves Country",
  "SF": "Orange and Black",
  "CIN": "The Redleg",
  "CHC": "The Bleacher Bum",
  "BOS": "Red Sox Nation",
  "CLE": "The Guardian",
  "SEA": "The Mariner",
  "PIT": "The Bucco",
  "SD": "The Friar",
  "COL": "Purple Row",
  "ATH": "Moneyball",
  "TB": "The Cowbell",
  "MIL": "The Brew Crew",
  "MIN": "Twins Territory",
  "KC": "The Fountains",
  "PHI": "The Phanatic",
  "DET": "Bless You Boys",
  "CWS": "The South Side",
  "BAL": "Birdland",
  "NYM": "The Amazins",
  "MIA": "The Fish",
  "TOR": "Canada's Team",
  "TEX": "The Ranger",
  "AZ": "The Snake",
  "WSH": "Stay in the Fight",
  "HOU": "The Stros",
  "LAA": "The Halo"
};

const teamTextColors = {
  "NYY": "#8FA3C4",
  "LAD": "#7FB3D9",
  "STL": "#E0889A",
  "ATL": "#8295B8",
  "SF": "#F2A06B",
  "CIN": "#E58A8A",
  "CHC": "#7C97D6",
  "BOS": "#E58A8E",
  "CLE": "#F0909C",
  "SEA": "#6FBFBF",
  "PIT": "#FFE08A",
  "SD": "#C9A07E",
  "COL": "#A99BD6",
  "ATH": "#6FBE9E",
  "TB": "#7FA8D8",
  "MIL": "#FFD97A",
  "MIN": "#F08CA0",
  "KC": "#7FB0DE",
  "PHI": "#F58A93",
  "DET": "#8FA3C4",
  "CWS": "#D5DADD",
  "BAL": "#F5A06B",
  "NYM": "#6E8FD0",
  "MIA": "#6FCDEE",
  "TOR": "#7CA3DC",
  "TEX": "#F0808C",
  "AZ": "#8FE4EC",
  "WSH": "#8295C0",
  "HOU": "#F5A878",
  "LAA": "#EE8090"
};

const greats = {
  "NYY": [
    {
      "name": "Babe Ruth",
      "years": "1920-1934",
      "note": "the slugger sold from Boston who built the franchise into a dynasty"
    },
    {
      "name": "Lou Gehrig",
      "years": "1923-1939",
      "note": "the Iron Horse and the luckiest-man-alive farewell"
    },
    {
      "name": "Mickey Mantle",
      "years": "1951-1968",
      "note": "the switch-hitting heart of the postwar dynasty"
    },
    {
      "name": "Derek Jeter",
      "years": "1995-2014",
      "note": "the captain of five title teams"
    }
  ],
  "LAD": [
    {
      "name": "Jackie Robinson",
      "years": "1947-1956",
      "note": "broke the color line; his 42 is retired across all of baseball"
    },
    {
      "name": "Sandy Koufax",
      "years": "1955-1966",
      "note": "the lefty who walked away at his absolute peak"
    },
    {
      "name": "Fernando Valenzuela",
      "years": "1980-1990",
      "note": "the rookie who set off Fernandomania"
    },
    {
      "name": "Clayton Kershaw",
      "years": "2008-2025",
      "note": "the franchise ace who finally lifted the trophy"
    }
  ],
  "STL": [
    {
      "name": "Stan Musial",
      "years": "1941-1963",
      "note": "Stan the Man, the gentleman superstar"
    },
    {
      "name": "Bob Gibson",
      "years": "1959-1975",
      "note": "the most intimidating arm of his era"
    },
    {
      "name": "Ozzie Smith",
      "years": "1982-1996",
      "note": "the Wizard and his backflip"
    },
    {
      "name": "Albert Pujols",
      "years": "2001-2011, 2022",
      "note": "the Machine, home run number 700"
    }
  ],
  "ATL": [
    {
      "name": "Hank Aaron",
      "years": "1954-1974",
      "note": "broke the all-time home run record through a wall of death threats"
    },
    {
      "name": "Chipper Jones",
      "years": "1993-2012",
      "note": "the switch-hitting face of the dynasty years"
    },
    {
      "name": "Greg Maddux",
      "years": "1993-2003",
      "note": "the surgeon who made dominance look boring"
    },
    {
      "name": "John Smoltz",
      "years": "1988-2008",
      "note": "the ace who starred as both starter and closer"
    }
  ],
  "SF": [
    {
      "name": "Willie Mays",
      "years": "1951-1972",
      "note": "the Say Hey Kid, maker of the most famous catch in the game; died June 2024"
    },
    {
      "name": "Barry Bonds",
      "years": "1993-2007",
      "note": "the all-time home run king at 762"
    },
    {
      "name": "Willie McCovey",
      "years": "1959-1980",
      "note": "Stretch, the cove behind the park bears his name"
    },
    {
      "name": "Buster Posey",
      "years": "2009-2021",
      "note": "three rings behind the plate, now running the front office"
    }
  ],
  "CIN": [
    {
      "name": "Pete Rose",
      "years": "1963-1986",
      "note": "the all-time hits leader at 4,256, banned for betting and reinstated posthumously in 2025"
    },
    {
      "name": "Johnny Bench",
      "years": "1967-1983",
      "note": "widely called the greatest catcher ever"
    },
    {
      "name": "Joe Morgan",
      "years": "1972-1979",
      "note": "back-to-back MVP engine of the Machine"
    },
    {
      "name": "Barry Larkin",
      "years": "1986-2004",
      "note": "the hometown shortstop who stayed his whole career"
    }
  ],
  "CHC": [
    {
      "name": "Ernie Banks",
      "years": "1953-1971",
      "note": "Mr. Cub, \"Let's play two,\" who never once reached the postseason"
    },
    {
      "name": "Ron Santo",
      "years": "1960-1973",
      "note": "the beating heart of the North Side"
    },
    {
      "name": "Ryne Sandberg",
      "years": "1981-1997",
      "note": "the franchise second baseman of his era"
    },
    {
      "name": "Anthony Rizzo",
      "years": "2012-2021",
      "note": "cornerstone of the team that finally broke it"
    }
  ],
  "BOS": [
    {
      "name": "Ted Williams",
      "years": "1939-1960",
      "note": "the last man to hit .400, the Splendid Splinter"
    },
    {
      "name": "Carl Yastrzemski",
      "years": "1961-1983",
      "note": "Yaz, the 1967 Impossible Dream Triple Crown"
    },
    {
      "name": "Pedro Martinez",
      "years": "1998-2004",
      "note": "the most electric arm of the curse-breaking years"
    },
    {
      "name": "David Ortiz",
      "years": "2003-2016",
      "note": "Big Papi, the soul of three champions"
    }
  ],
  "CLE": [
    {
      "name": "Bob Feller",
      "years": "1936-1956",
      "note": "Rapid Robert, who left his peak to serve in the war"
    },
    {
      "name": "Larry Doby",
      "years": "1947-1959",
      "note": "the first Black player in the American League"
    },
    {
      "name": "Jim Thome",
      "years": "1991-2002",
      "note": "the gentle-giant slugger of the nineties"
    },
    {
      "name": "Francisco Lindor",
      "years": "2015-2020",
      "note": "the franchise shortstop dealt away in his prime"
    }
  ],
  "SEA": [
    {
      "name": "Ken Griffey Jr.",
      "years": "1989-1999",
      "note": "the swing that saved baseball in Seattle"
    },
    {
      "name": "Edgar Martinez",
      "years": "1987-2004",
      "note": "the greatest designated hitter ever; The Double in 1995"
    },
    {
      "name": "Ichiro Suzuki",
      "years": "2001-2012",
      "note": "the hit machine who crossed an ocean to dominate"
    },
    {
      "name": "Felix Hernandez",
      "years": "2005-2019",
      "note": "King Felix, loyal to a team that never reached October in his prime"
    }
  ],
  "PIT": [
    {
      "name": "Honus Wagner",
      "years": "1900-1917",
      "note": "the Flying Dutchman, his the rarest card in the world"
    },
    {
      "name": "Roberto Clemente",
      "years": "1955-1972",
      "note": "3,000 hits, who died delivering earthquake relief"
    },
    {
      "name": "Willie Stargell",
      "years": "1962-1982",
      "note": "Pops, heart of the 1979 champions"
    },
    {
      "name": "Barry Bonds",
      "years": "1986-1992",
      "note": "who began his career here before leaving"
    }
  ],
  "SD": [
    {
      "name": "Tony Gwynn",
      "years": "1982-2001",
      "note": "Mr. Padre, eight batting titles, one team his whole life"
    },
    {
      "name": "Trevor Hoffman",
      "years": "1993-2008",
      "note": "the all-time saves king of his era"
    },
    {
      "name": "Dave Winfield",
      "years": "1973-1980",
      "note": "the multisport star who began in San Diego"
    },
    {
      "name": "Fernando Tatis Jr.",
      "years": "2019-2025",
      "note": "the electric face of the spend-to-win era"
    }
  ],
  "COL": [
    {
      "name": "Todd Helton",
      "years": "1997-2013",
      "note": "the franchise cornerstone who stayed his whole career"
    },
    {
      "name": "Larry Walker",
      "years": "1995-2004",
      "note": "the MVP who mastered the altitude"
    },
    {
      "name": "Troy Tulowitzki",
      "years": "2006-2015",
      "note": "the shortstop face of the 2007 run"
    },
    {
      "name": "Nolan Arenado",
      "years": "2013-2020",
      "note": "the defensive wizard at third before the trade"
    }
  ],
  "ATH": [
    {
      "name": "Rickey Henderson",
      "years": "1979-1998",
      "note": "the greatest leadoff man and base-stealer ever, an Oakland kid"
    },
    {
      "name": "Reggie Jackson",
      "years": "1967-1975",
      "note": "Mr. October, heart of the early-seventies dynasty"
    },
    {
      "name": "Catfish Hunter",
      "years": "1965-1974",
      "note": "the ace of the three-peat"
    },
    {
      "name": "Dennis Eckersley",
      "years": "1987-1995",
      "note": "the closer who redefined the role"
    }
  ],
  "TB": [
    {
      "name": "Evan Longoria",
      "years": "2008-2017",
      "note": "the franchise cornerstone and the homer that clinched 2008"
    },
    {
      "name": "Carl Crawford",
      "years": "2002-2010",
      "note": "the speed that defined the early Rays"
    },
    {
      "name": "David Price",
      "years": "2008-2014",
      "note": "the homegrown ace"
    },
    {
      "name": "Ben Zobrist",
      "years": "2006-2014",
      "note": "the original super-utility man"
    }
  ],
  "MIL": [
    {
      "name": "Robin Yount",
      "years": "1974-1993",
      "note": "two-time MVP, one team his whole life"
    },
    {
      "name": "Paul Molitor",
      "years": "1978-1992",
      "note": "the Ignitor"
    },
    {
      "name": "Cecil Cooper",
      "years": "1977-1987",
      "note": "the slugging heart of the 1982 club"
    },
    {
      "name": "Christian Yelich",
      "years": "2018-present",
      "note": "the MVP face of the modern Crew"
    }
  ],
  "MIN": [
    {
      "name": "Harmon Killebrew",
      "years": "1954-1974",
      "note": "the gentle slugger and franchise icon"
    },
    {
      "name": "Rod Carew",
      "years": "1967-1978",
      "note": "the batting-title machine"
    },
    {
      "name": "Kirby Puckett",
      "years": "1984-1995",
      "note": "the beloved heart of both title teams"
    },
    {
      "name": "Joe Mauer",
      "years": "2004-2018",
      "note": "the hometown catcher who stayed"
    }
  ],
  "KC": [
    {
      "name": "George Brett",
      "years": "1973-1993",
      "note": "the franchise icon and the pine-tar legend"
    },
    {
      "name": "Bret Saberhagen",
      "years": "1984-1991",
      "note": "the ace of the 1985 champions"
    },
    {
      "name": "Frank White",
      "years": "1973-1990",
      "note": "the Gold Glove hometown hero"
    },
    {
      "name": "Salvador Perez",
      "years": "2011-present",
      "note": "the catcher and heart of 2015"
    }
  ],
  "PHI": [
    {
      "name": "Mike Schmidt",
      "years": "1972-1989",
      "note": "the greatest third baseman ever"
    },
    {
      "name": "Steve Carlton",
      "years": "1972-1986",
      "note": "Lefty"
    },
    {
      "name": "Robin Roberts",
      "years": "1948-1961",
      "note": "the Whiz Kids ace"
    },
    {
      "name": "Chase Utley",
      "years": "2003-2015",
      "note": "the heart of the 2008 champions"
    }
  ],
  "DET": [
    {
      "name": "Ty Cobb",
      "years": "1905-1926",
      "note": "the ferocious record-setter"
    },
    {
      "name": "Al Kaline",
      "years": "1953-1974",
      "note": "Mr. Tiger, one team his whole life"
    },
    {
      "name": "Hank Greenberg",
      "years": "1930-1946",
      "note": "the slugger who faced down antisemitism"
    },
    {
      "name": "Miguel Cabrera",
      "years": "2008-2023",
      "note": "the last Triple Crown winner"
    }
  ],
  "CWS": [
    {
      "name": "Frank Thomas",
      "years": "1990-2005",
      "note": "the Big Hurt"
    },
    {
      "name": "Luke Appling",
      "years": "1930-1950",
      "note": "Old Aches and Pains"
    },
    {
      "name": "Minnie Minoso",
      "years": "1951-1980",
      "note": "the trailblazing Cuban star and South Side icon"
    },
    {
      "name": "Paul Konerko",
      "years": "1999-2014",
      "note": "captain of the 2005 champions"
    }
  ],
  "BAL": [
    {
      "name": "Cal Ripken Jr.",
      "years": "1981-2001",
      "note": "the Iron Man, 2,632 straight games"
    },
    {
      "name": "Brooks Robinson",
      "years": "1955-1977",
      "note": "the Human Vacuum Cleaner at third"
    },
    {
      "name": "Frank Robinson",
      "years": "1966-1971",
      "note": "the Triple Crown MVP"
    },
    {
      "name": "Jim Palmer",
      "years": "1965-1984",
      "note": "the ace of the great seventies teams"
    }
  ],
  "NYM": [
    {
      "name": "Tom Seaver",
      "years": "1967-1977",
      "note": "Tom Terrific, the franchise's first ace"
    },
    {
      "name": "Mike Piazza",
      "years": "1998-2005",
      "note": "the slugger and the post-9/11 home run"
    },
    {
      "name": "Dwight Gooden",
      "years": "1984-1994",
      "note": "Doc, the electric phenom"
    },
    {
      "name": "David Wright",
      "years": "2004-2018",
      "note": "the Captain who stayed"
    }
  ],
  "MIA": [
    {
      "name": "Giancarlo Stanton",
      "years": "2010-2017",
      "note": "prodigious power before the inevitable trade"
    },
    {
      "name": "Miguel Cabrera",
      "years": "2003-2007",
      "note": "who won a title here as a kid before being dealt"
    },
    {
      "name": "Gary Sheffield",
      "years": "1993-1998",
      "note": "the original Marlins slugger"
    },
    {
      "name": "Josh Beckett",
      "years": "2001-2005",
      "note": "the young ace of 2003"
    }
  ],
  "TOR": [
    {
      "name": "Roberto Alomar",
      "years": "1991-1995",
      "note": "the slick second baseman of the title teams"
    },
    {
      "name": "Joe Carter",
      "years": "1991-1997",
      "note": "the walk-off that won 1993"
    },
    {
      "name": "Roy Halladay",
      "years": "1998-2009",
      "note": "Doc, the ace who deserved more October"
    },
    {
      "name": "Vladimir Guerrero Jr.",
      "years": "2019-present",
      "note": "the homegrown face of the 2025 run"
    }
  ],
  "TEX": [
    {
      "name": "Ivan Rodriguez",
      "years": "1991-2002",
      "note": "Pudge, the Hall of Fame catcher"
    },
    {
      "name": "Nolan Ryan",
      "years": "1989-1993",
      "note": "the Ryan Express"
    },
    {
      "name": "Michael Young",
      "years": "2000-2012",
      "note": "the steady franchise face"
    },
    {
      "name": "Adrian Beltre",
      "years": "2011-2018",
      "note": "the beloved star of the heartbreak years"
    }
  ],
  "AZ": [
    {
      "name": "Randy Johnson",
      "years": "1999-2004",
      "note": "the Big Unit, co-MVP of 2001"
    },
    {
      "name": "Curt Schilling",
      "years": "2000-2003",
      "note": "the other ace of 2001"
    },
    {
      "name": "Luis Gonzalez",
      "years": "1999-2006",
      "note": "the hit that won it all"
    },
    {
      "name": "Paul Goldschmidt",
      "years": "2011-2018",
      "note": "the franchise first baseman"
    }
  ],
  "WSH": [
    {
      "name": "Vladimir Guerrero",
      "years": "1996-2003",
      "note": "the Expos' electric superstar"
    },
    {
      "name": "Ryan Zimmerman",
      "years": "2005-2021",
      "note": "Mr. National"
    },
    {
      "name": "Max Scherzer",
      "years": "2015-2021",
      "note": "the intense ace of 2019"
    },
    {
      "name": "Juan Soto",
      "years": "2018-2022",
      "note": "the young phenom of the title team before the trade"
    }
  ],
  "HOU": [
    {
      "name": "Jeff Bagwell",
      "years": "1991-2005",
      "note": "the franchise cornerstone"
    },
    {
      "name": "Craig Biggio",
      "years": "1988-2007",
      "note": "3,000 hits, one team his whole life"
    },
    {
      "name": "Jose Altuve",
      "years": "2011-present",
      "note": "the homegrown heart of the title teams"
    },
    {
      "name": "Lance Berkman",
      "years": "1999-2010",
      "note": "Big Puma"
    }
  ],
  "LAA": [
    {
      "name": "Mike Trout",
      "years": "2011-present",
      "note": "a generational talent still chasing his October"
    },
    {
      "name": "Tim Salmon",
      "years": "1992-2006",
      "note": "Mr. Angel and 2002 champion"
    },
    {
      "name": "Garret Anderson",
      "years": "1994-2008",
      "note": "the steady star of the title team"
    },
    {
      "name": "Troy Percival",
      "years": "1995-2004",
      "note": "the closer of the 2002 champions"
    }
  ]
};

const vitalStats = {
  "NYY": {
    "nickname": "Bronx Bombers",
    "founded": "1901",
    "stadium": "Yankee Stadium",
    "city": "Bronx, NY",
    "capacity": "46,537",
    "colors": "Navy & white pinstripes",
    "titles": "27 World Series",
    "lastTitle": "2009 (lost the 2024 World Series to the Dodgers)"
  },
  "LAD": {
    "nickname": "The Boys in Blue",
    "founded": "1883 (Brooklyn)",
    "stadium": "Dodger Stadium",
    "city": "Los Angeles, CA",
    "capacity": "56,000",
    "colors": "Dodger blue & white",
    "titles": "9 World Series",
    "lastTitle": "2025 (back to back, over Toronto)"
  },
  "STL": {
    "nickname": "The Redbirds",
    "founded": "1882",
    "stadium": "Busch Stadium",
    "city": "St. Louis, MO",
    "capacity": "44,494",
    "colors": "Cardinal red & white",
    "titles": "11 World Series",
    "lastTitle": "2011"
  },
  "ATL": {
    "nickname": "America's Team",
    "founded": "1871 (Boston, then Milwaukee, then Atlanta in 1966)",
    "stadium": "Truist Park",
    "city": "Atlanta, GA",
    "capacity": "41,084",
    "colors": "Navy & scarlet",
    "titles": "4 World Series (1914, 1957, 1995, 2021)",
    "lastTitle": "2021"
  },
  "SF": {
    "nickname": "The G-Men",
    "founded": "1883 (New York)",
    "stadium": "Oracle Park",
    "city": "San Francisco, CA",
    "capacity": "41,265",
    "colors": "Orange, black & cream",
    "titles": "8 World Series (5 in New York, 3 in San Francisco)",
    "lastTitle": "2014"
  },
  "CIN": {
    "nickname": "The Big Red Machine",
    "founded": "1869 (baseball's first professional team)",
    "stadium": "Great American Ball Park",
    "city": "Cincinnati, OH",
    "capacity": "43,500",
    "colors": "Red & white",
    "titles": "5 World Series",
    "lastTitle": "1990"
  },
  "CHC": {
    "nickname": "The Cubbies",
    "founded": "1876 (a charter National League club)",
    "stadium": "Wrigley Field",
    "city": "Chicago, IL",
    "capacity": "41,649",
    "colors": "Cubbie blue & red",
    "titles": "3 World Series",
    "lastTitle": "2016 (ended a 108-year drought)"
  },
  "BOS": {
    "nickname": "The Olde Towne Team",
    "founded": "1901",
    "stadium": "Fenway Park",
    "city": "Boston, MA",
    "capacity": "37,755",
    "colors": "Red, navy & white",
    "titles": "9 World Series",
    "lastTitle": "2018"
  },
  "CLE": {
    "nickname": "The Guards",
    "founded": "1901",
    "stadium": "Progressive Field",
    "city": "Cleveland, OH",
    "capacity": "34,830",
    "colors": "Navy & red",
    "titles": "2 World Series (1920, 1948)",
    "lastTitle": "1948 (the sport's longest active drought among champions)"
  },
  "SEA": {
    "nickname": "The M's",
    "founded": "1977",
    "stadium": "T-Mobile Park",
    "city": "Seattle, WA",
    "capacity": "47,929",
    "colors": "Navy & Northwest teal",
    "titles": "0",
    "lastTitle": "None; reached the ALCS in 2025 and lost Game 7"
  },
  "PIT": {
    "nickname": "The Bucs",
    "founded": "1881",
    "stadium": "PNC Park",
    "city": "Pittsburgh, PA",
    "capacity": "38,747",
    "colors": "Black & gold",
    "titles": "5 World Series",
    "lastTitle": "1979 (We Are Family)"
  },
  "SD": {
    "nickname": "The Friars",
    "founded": "1969",
    "stadium": "Petco Park",
    "city": "San Diego, CA",
    "capacity": "40,000",
    "colors": "Brown & gold",
    "titles": "0",
    "lastTitle": "None; lost the World Series in 1984 and 1998"
  },
  "COL": {
    "nickname": "The Rox",
    "founded": "1993",
    "stadium": "Coors Field",
    "city": "Denver, CO",
    "capacity": "50,144",
    "colors": "Purple, black & silver",
    "titles": "0",
    "lastTitle": "None; lost the 2007 World Series (Rocktober)"
  },
  "ATH": {
    "nickname": "The A's",
    "founded": "1901 (Philadelphia, Kansas City, then Oakland 1968-2024)",
    "stadium": "Oakland Coliseum, now displaced",
    "city": "Oakland, CA",
    "capacity": "46,847",
    "colors": "Green & gold",
    "titles": "9 World Series",
    "lastTitle": "1989 (the Bay Bridge sweep)"
  },
  "TB": {
    "nickname": "The Rays",
    "founded": "1998 (as the Devil Rays)",
    "stadium": "Tropicana Field",
    "city": "St. Petersburg, FL",
    "capacity": "25,000",
    "colors": "Navy, light blue & sunburst yellow",
    "titles": "0",
    "lastTitle": "None; AL pennants in 2008 and 2020, lost both"
  },
  "MIL": {
    "nickname": "The Brew Crew",
    "founded": "1969 (as the Seattle Pilots, Milwaukee from 1970)",
    "stadium": "American Family Field",
    "city": "Milwaukee, WI",
    "capacity": "41,700",
    "colors": "Navy, gold & blue",
    "titles": "0",
    "lastTitle": "None; NLCS in 2025, World Series in 1982"
  },
  "MIN": {
    "nickname": "The Twins",
    "founded": "1901 (as the Washington Senators, Minnesota from 1961)",
    "stadium": "Target Field",
    "city": "Minneapolis, MN",
    "capacity": "38,544",
    "colors": "Navy, scarlet & white",
    "titles": "3 World Series (1924, 1987, 1991)",
    "lastTitle": "1991"
  },
  "KC": {
    "nickname": "The Royals",
    "founded": "1969",
    "stadium": "Kauffman Stadium",
    "city": "Kansas City, MO",
    "capacity": "37,903",
    "colors": "Royal blue & white",
    "titles": "2 World Series (1985, 2015)",
    "lastTitle": "2015"
  },
  "PHI": {
    "nickname": "The Phightin' Phils",
    "founded": "1883",
    "stadium": "Citizens Bank Park",
    "city": "Philadelphia, PA",
    "capacity": "42,901",
    "colors": "Red, white & blue",
    "titles": "2 World Series (1980, 2008)",
    "lastTitle": "2008"
  },
  "DET": {
    "nickname": "The Tigers",
    "founded": "1901",
    "stadium": "Comerica Park",
    "city": "Detroit, MI",
    "capacity": "41,083",
    "colors": "Navy & orange",
    "titles": "4 World Series (1935, 1945, 1968, 1984)",
    "lastTitle": "1984"
  },
  "CWS": {
    "nickname": "The Pale Hose",
    "founded": "1901",
    "stadium": "Rate Field",
    "city": "Chicago, IL",
    "capacity": "40,615",
    "colors": "Black & silver",
    "titles": "3 World Series (1906, 1917, 2005)",
    "lastTitle": "2005"
  },
  "BAL": {
    "nickname": "Birdland",
    "founded": "1901 (as the Milwaukee Brewers, Baltimore from 1954)",
    "stadium": "Camden Yards",
    "city": "Baltimore, MD",
    "capacity": "44,970",
    "colors": "Orange & black",
    "titles": "3 World Series (1966, 1970, 1983)",
    "lastTitle": "1983"
  },
  "NYM": {
    "nickname": "The Amazins",
    "founded": "1962",
    "stadium": "Citi Field",
    "city": "Queens, NY",
    "capacity": "41,922",
    "colors": "Blue & orange",
    "titles": "2 World Series (1969, 1986)",
    "lastTitle": "1986"
  },
  "MIA": {
    "nickname": "The Fish",
    "founded": "1993",
    "stadium": "loanDepot Park",
    "city": "Miami, FL",
    "capacity": "36,742",
    "colors": "Miami blue, red & black",
    "titles": "2 World Series (1997, 2003)",
    "lastTitle": "2003"
  },
  "TOR": {
    "nickname": "The Jays",
    "founded": "1977",
    "stadium": "Rogers Centre",
    "city": "Toronto, ON",
    "capacity": "41,500",
    "colors": "Blue & white",
    "titles": "2 World Series (1992, 1993)",
    "lastTitle": "1993 (lost the 2025 World Series in Game 7)"
  },
  "TEX": {
    "nickname": "The Rangers",
    "founded": "1961 (as the second Washington Senators, Texas from 1972)",
    "stadium": "Globe Life Field",
    "city": "Arlington, TX",
    "capacity": "40,300",
    "colors": "Royal blue & red",
    "titles": "1 World Series (2023)",
    "lastTitle": "2023"
  },
  "AZ": {
    "nickname": "The D-backs",
    "founded": "1998",
    "stadium": "Chase Field",
    "city": "Phoenix, AZ",
    "capacity": "48,686",
    "colors": "Sedona red, black & teal",
    "titles": "1 World Series (2001)",
    "lastTitle": "2001 (NL pennant in 2023)"
  },
  "WSH": {
    "nickname": "The Nats",
    "founded": "1969 (as the Montreal Expos, Washington from 2005)",
    "stadium": "Nationals Park",
    "city": "Washington, DC",
    "capacity": "41,339",
    "colors": "Red, white & navy",
    "titles": "1 World Series (2019)",
    "lastTitle": "2019"
  },
  "HOU": {
    "nickname": "The Stros",
    "founded": "1962 (as the Colt .45s)",
    "stadium": "Daikin Park",
    "city": "Houston, TX",
    "capacity": "41,000",
    "colors": "Navy & orange",
    "titles": "2 World Series (2017, 2022)",
    "lastTitle": "2022"
  },
  "LAA": {
    "nickname": "The Halos",
    "founded": "1961",
    "stadium": "Angel Stadium",
    "city": "Anaheim, CA",
    "capacity": "45,517",
    "colors": "Red, navy & silver",
    "titles": "1 World Series (2002)",
    "lastTitle": "2002"
  }
};

const nearlyGot = {
  "NYY": {
    "LAD": "You and the Dodgers both win and treat the sport's resentment as the cost of winning, no apology offered. The Dodgers stacked the deck on purpose and said so out loud. For you it was never about buying a title, it is the floor, twenty-seven of them, the measure everyone else is held to. They bought inevitability, and you are the thing inevitability gets compared to.",
    "STL": "Two of the deepest trophy cases in the sport, and no two temperaments less alike. St. Louis won eleven the quiet way, no villain era, no noise, just do it right and let the rings speak; you won yours loud and unbothered, the team half the country roots against. One of you wants to be admired for how it wins, and the other stopped caring about that a century ago.",
    "HOU": "The Astros wear the sport's hatred the way you do, like it keeps them warm, winning anyway and never flinching. Houston earned its villain badge fresh, a 2017 title with an asterisk it cannot outrun. Yours is older and purer, the establishment empire that has set the standard for a century and never explained itself to anyone. They are the upstart with a stain, and you are the thing they were trying to become.",
    "ATL": "Atlanta turned sustained dominance into a way of life the way you did, the kind of greatness that lasts decades. Atlanta's came with a cruel catch, fourteen straight division titles and a single ring to show for most of the run. Yours came with the trophies stacked so high a great season without one feels like failure. They learned dominance can still break your heart, and you decided long ago it only counts in October."
  },
  "LAD": {
    "NYY": "The Yankees win and dare the sport to hate them the way you do, and it happily obliges. The Yankees made winning the floor across a hundred years, twenty-seven rings as the permanent measuring stick. You stacked the deck in the present, said so out loud, and went back-to-back without one word of apology. They are the old empire, and you are the new one that stopped pretending it was ever a fair fight.",
    "ATL": "You and the Braves have both lived at the top of the National League long enough to make it look routine. Atlanta did it on a homegrown run, fourteen straight division titles that mostly ended in October tears before 2021 finally delivered; you did it by buying the best roster money could build and refusing to apologize. One earned its dominance and waited years for the ring, and the other bought the ring and waited for no one.",
    "HOU": "Two teams the rest of the sport lines up to root against, and both of you stopped caring years ago. Houston earned the hate with a 2017 title that still drags an asterisk behind it. You earned yours with a payroll nobody else could touch and zero shame about it. They cheated and kept the ring, and you simply bought a better one.",
    "NYM": "One of you spends like the sky is the limit and wins, the other spends the same and only hopes. The difference is what the money has bought. You turned it into back-to-back titles and called the hate a compliment. The Mets turned the biggest contract in sports history into one more chapter of being New York's heartbroken second team. You buy and win, and they buy and hope."
  },
  "STL": {
    "ATL": "You and the Braves both carry yourselves like winning is simply what the franchise does, no fireworks required. Atlanta's version came with a famous ache, a decade and a half on top that produced just one ring before 2021; yours came with eleven of them and a creed about doing it the right way, no drama, no villain era. They endured the long wait inside the dynasty, and you just kept quietly stacking the trophies.",
    "NYY": "Two of the deepest trophy cases in the sport, and no two clubs less alike about it. New York wins loud, in pinstripes, as the team half the country roots against. You win quiet, no theatrics, the whole point being to do it right and let the rings speak. They want to be feared, and you only ever wanted to be respected.",
    "SF": "San Francisco treats winning as a birthright handed down, the way you do, rather than a thing to brag about. San Francisco's greatness lives in the bones, two cities of titles and an even-year charm the present team does not always reach. Yours is steadier and more present-tense, the quiet Midwestern creed of doing it right again and again. Their pedigree can coast on the past, and yours insists on showing up now.",
    "CHC": "The Cubs sit at the heart of the same Midwest rivalry, and each fanbase swears it does it the right way. The split is the scoreboard across a century. You won eleven titles quietly and expected each one. The Cubs waited a hundred and eight years, blamed a goat, and came undone the night they finally broke it. You carry winning like a habit, and they carry it like a miracle."
  },
  "ATL": {
    "STL": "The Cardinals look like winning is just the family business, the way you do, no need to shout about it. The Cardinals backed it with eleven rings and a creed about doing it the right way. You backed it with fourteen straight division titles that mostly ended in heartbreak before 2021 set it right. They rarely had to wait, and you turned the waiting into part of the story.",
    "LAD": "You and the Dodgers have both sat atop the National League long enough to make dominance look ordinary. Los Angeles bought its way there and went back-to-back without apology; you got there the homegrown way, fourteen straight division titles that broke your heart over and over until 2021 finally paid it off. They never had to wait, and the waiting is half of who you are.",
    "NYY": "Two franchises that turned sustained excellence into an identity, the standard everyone else measures against. New York did it with twenty-seven rings and the belief that anything less is failure. You did it with a fourteen-year reign that handed over just one title before 2021. They were the empire that always cashed in, and you were the dynasty that learned how much winning can still hurt.",
    "PHI": "Philadelphia shares your division and your belief that October is the only month that counts. Philadelphia pours it out through the loudest, most unforgiving crowd in the sport, a city that boos its own as a form of love. You carry it cooler, a team adopted across the country on cable that learned to swallow years of near-misses. They make their feelings impossible to miss, and you spent a decade hiding the heartbreak behind all the winning."
  },
  "SF": {
    "STL": "The Cardinals wear an old-money pedigree the way you do, like it was always meant to be theirs. The Cardinals keep theirs present-tense, eleven titles and a Midwestern creed of doing it right on a loop; yours lives in the bones, two cities of glory and an even-year charm the current team cannot always summon. They prove it again every few years, and yours barely needs the present tense at all.",
    "LAD": "Two rivalries carried across the country from New York and never allowed to cool. The Dodgers are the bought, dominant present, back-to-back titles and a payroll without apology. You are the deep lineage, even-year magic and statues by the cold bay, a pedigree that does not always need the current team to be good. They are spending to win now, and you have a show that was always in the blood.",
    "CHC": "The Cubs are wrapped in the same ivy and nostalgia as you, old franchises whose history does the talking. The Cubs spent a hundred and eight years waiting on a single payoff and finally got it in 2016. You collected titles in charmed even-year bursts and let the pedigree carry the lean years. They lived for the one miracle, and you have a whole lineage to lean on.",
    "NYY": "You and the Yankees both trace your greatness back to New York and a pedigree most franchises would envy. The Yankees never let the past soften the present, twenty-seven rings and a standard that calls any ringless season a failure. Yours sits comfortably in the bones, two cities of titles and an even-year charm that does not panic when the present sputters. They demand it now, and you trust the lineage to outlast any lean stretch."
  },
  "CIN": {
    "STL": "The Cardinals are old Midwest baseball to the core, the way you are, proud of how the game is meant to be played. The Cardinals frame that as winning the right way, eleven rings and no drama; you frame it as raw effort, the first professional team there ever was, playing every ground ball like a fight worth winning. They have the trophies to back the creed, and you have the longest roots and the hardest motor.",
    "PIT": "Two old river-town clubs whose best decades are a while back now. Pittsburgh's modern story is loyalty tested to the limit, a record run of losing seasons watched from a gorgeous ballpark while ownership kept the wallet shut. Yours is the oldest pedigree in the sport and a head-first intensity that never quite leaves the blood. Their fans kept showing up for a team that would not spend, and yours keep playing like every grounder is a brawl.",
    "DET": "Detroit treats effort and toughness as the entire point, no shortcuts, exactly your creed. Detroit ties it to the car city that got knocked flat and is clawing back up, the team and the town rebuilding together. You tie it to the oldest roots in the game and a head-first style where coasting was never an option. Theirs is a city's comeback worn on the chest, and yours is a century and a half of refusing to play soft.",
    "MIL": "You and the Brewers are NL Central lifers who do it without big-market shine. Milwaukee turned a small budget into a refusal to stop winning, joy and a sausage race and a beer in hand all the way. You turned the oldest history in the sport into a creed of all-out effort, every play a fight. They keep showing up good on nothing, and you keep playing like the past is watching."
  },
  "CHC": {
    "BOS": "Two famous curses that finally broke, a faith kept across generations until one October ended it. The shapes differ: yours was the sheer length of it, a hundred and eight years and a billy goat and no real villain but time; Boston's was a grudge against the team it hates most, snapped by coming back from down three games to none against them. You waited longer, and they had an enemy to beat.",
    "PIT": "Pittsburgh asked its fans to keep the faith through a drought the way you did, one most clubs could not survive. Pittsburgh's was a record run of losing seasons watched from the prettiest park around, loyalty tested by an ownership that would not spend. Yours ran on for generations and ended in the tenth inning of a Game 7 in 2016. They are still waiting on a payoff, and you already got the one that made all the waiting worth it.",
    "SF": "San Francisco is ivy-and-nostalgia old the way you are, history doing plenty of the talking. San Francisco kept cashing it in, titles in two cities and a charmed even-year run. Yours went the other way entirely, one enormous wait with a single payoff at the end of it. Their past keeps refreshing itself, and yours was one long ache redeemed in a single night.",
    "STL": "You share the center of the Midwest rivalry with the Cardinals, and the gap between you is a century of scoreboards. St. Louis won eleven titles quietly and expected each one. You waited, blamed a goat, and came completely undone the night the wait finally ended. They treat winning as a habit, and you treat it as the miracle you never stopped believing in."
  },
  "BOS": {
    "CHC": "Two curses that broke at last, a faith carried across lifetimes until one autumn paid it off. Yours was a grudge as much as a drought, eighty-six years tied to the team you hate most, snapped by storming back from down three games to none against them; the Cubs' was pure length, a hundred and eight years and a goat and no villain but the calendar. You had an enemy to beat, and they only had time.",
    "PHI": "Philadelphia runs on a loud, heart-on-the-sleeve fanbase the way you do, taking the game personally. Philadelphia channels it into booing its own as a form of love, a city with more losses than any team in pro sports daring you to earn the cheers. Yours channels it into a grudge with the Yankees and the eighty-six-year curse you finally broke against them. They love by holding you accountable, and you love by remembering exactly how long the wait was.",
    "STL": "You and the Cardinals have both hung multiple banners and met on the sport's biggest stage. The temperaments are opposites: St. Louis wins the quiet way, no villain era, just do it right and let the rings speak. You win loud and tortured, eighty-six years of curse and a grudge with the Yankees that you snapped in the most dramatic way the game has seen. They keep the drama out of it, and you turned the drama into the whole legend.",
    "CIN": "Cincinnati was here before anyone, and once met you in one of the greatest World Series ever played. Cincinnati's identity is age and effort, the first professional team in the sport playing every grounder like a brawl. Yours is the eighty-six-year curse and the Yankees grudge you finally broke at once. They were here before anyone, and you waited longer than almost anyone."
  },
  "CLE": {
    "SEA": "Two patient waits by the water, fans who keep the faith with little payoff. The difference is whether you have ever tasted it. Seattle has never once reached the World Series in half a century of trying, nine outs away last fall before it vanished. You have the longest drought of any team that has actually won one, with 2016 right in your hands before it slipped away in extra innings. They are still chasing the first, and you are haunted by the one you let go.",
    "PIT": "Pittsburgh builds good players and watches the rich teams take them, the same loyalty test you know. Pittsburgh's wound is an ownership that would not spend even when a generational arm arrived, a record run of losing seasons to show for it; yours is a clever machine that develops stars, lets them walk, and once had a 2016 title in hand before letting that go too. They never got close, and you got achingly close and lost it.",
    "MIN": "You and the Twins are AL Central clubs who know exactly what October heartbreak feels like. Minnesota's is the record eighteen straight playoff losses, a futility that became a grim joke before it finally broke, set against two roaring dome titles. Yours is a longer wait than any champion has ever had to sit through, with the 2016 collapse the wound that stings most. They kept losing once they got there, and you keep not getting all the way back.",
    "DET": "Detroit's toughness comes straight from the city behind it, the way yours does. Detroit's is the car town knocked flat and clawing back, team and city rebuilding side by side. Yours is a clever, thrifty machine that develops stars, watches them leave, and is still waiting on 1948 to be answered. They are on the way up together, and you are still living inside the drought."
  },
  "SEA": {
    "CLE": "Two loyal waits by the water with precious little payoff to show. The line is whether it has ever happened at all. Cleveland has a title, just not since 1948, and had 2016 right in its hands before letting it slip. You have never once reached the World Series in fifty years of trying, nine outs from it last fall before it disappeared. They mourn the one they lost, and you are still chasing the first.",
    "PIT": "Pittsburgh asks its fans for faith that rarely gets repaid, the way yours do. Pittsburgh's wound is an ownership that would not spend, a record stretch of losing seasons watched from a beautiful park; yours is the only franchise in the sport never to reach the World Series, showing up every spring sure this is finally the year. Their loyalty was tested by a team that would not try, and yours by a team that tries and still has never made it.",
    "COL": "You and the Rockies live at the far edges of the map, short of the prize for most of your history. Colorado's whole identity is the thin mountain air that warps the game, a puzzle it has never solved, with a single swept World Series trip to show for it. Yours is having never reached that stage even once, nine outs away last fall before it slipped. They have a wound about how the game plays, and you have one about never arriving at all.",
    "TEX": "Texas spent decades in the AL West waiting on a breakthrough, right alongside you. Texas got the cruelest possible tease, one strike from the title twice in a single 2011 night, then finally finished the job and won it all in 2023. You are still the only team never to reach the World Series, nine outs short last fall. They know what the wait costs and what ending it feels like, and you are still living the first half of that story."
  },
  "PIT": {
    "SEA": "Seattle has asked its fans to stay loyal through long, thankless stretches, exactly as you have. Seattle's wound is having never once reached the World Series, faith with nothing to cash in. Yours is an ownership that would not spend, a record run of losing seasons watched from the prettiest ballpark in the country. Their team kept trying and never made it, and yours never seemed to fully try at all.",
    "CLE": "You and the Guardians both develop good players and lose them to richer clubs, loyalty stretched by thin wallets. Cleveland runs a clever machine that at least put a 2016 title within reach before it slipped, carrying the longest drought of any team that has won; yours is a longer stretch of futility still, and a front office that never matched the talent it found. They got close and lost it, and you rarely got close at all.",
    "CIN": "Two old river-town clubs whose glory decades are behind them. Cincinnati leans on the oldest history in the sport and a head-first intensity that never fades. Yours leans on a loyalty tested like few others, two decades of losing borne from a gorgeous ballpark while the wallet stayed shut. Their pride is the deep past, and yours is showing up anyway when the team would not.",
    "DET": "Detroit grinds through the hard years the way your city does, fans who never wavered. Detroit's grind is a car city knocked down and climbing back, team and town rising together. Yours is loyalty tested by two decades of losing and a front office that never matched it, the faith never in question even when the effort was. They are on the way back up, and you kept showing up while the team stood still."
  },
  "SD": {
    "NYM": "Two clubs that spend like the prize is right there and keep coming up empty. The motive splits you. The Mets pour out the biggest contracts in sports to escape life as New York's second team, still chasing the spotlight across town. You are a small-market club spending like a giant out of pure want, twice to the final stage and never once holding the ring. They spend to stop being overshadowed, and you spend just to finally win the first one.",
    "LAD": "You and the Dodgers both open the checkbook and chase the best in the same division. Los Angeles does it from a bottomless well and goes back-to-back without apology; you do it as a small-market club punching far above your size, twice to the brink and never once a champion. They spend and win, and you spend everything you have and keep waiting.",
    "AZ": "Arizona came into the game hungry and unafraid, the same nerve you play with. Arizona crashed the party fast, a championship in only its fourth year by taking down the Yankee dynasty. You have chased your first ring far longer and harder, twice to the last stage and still empty-handed. They grabbed it before they had any right to, and you are still waiting on the one you want most.",
    "TEX": "Texas spent big and bet everything on ending a long wait, just as you keep doing. Texas got there, fifty years and the cruelest near-miss in 2011 before finally winning it all in 2023. You are still chasing, twice to the final stage and never once a champion. They know what finishing the job feels like, and you are still trying to find out."
  },
  "COL": {
    "SEA": "You and the Mariners sit at the far edges of the map, short of the prize for most of your history. Seattle's wound is having never once reached the World Series, still chasing a first trip; yours is the thin mountain air that bends the game itself, a puzzle you have never solved, with one swept Series appearance to show for it. They have never arrived, and you arrived once and could not adjust to your own altitude.",
    "PIT": "Pittsburgh has spent long stretches well outside the race, the way you have. Pittsburgh's reason is an ownership that would not spend, a record run of losing seasons watched from a beautiful park. Yours is the mile-high air that warps the game in ways no other team has to face, a puzzle still unsolved. Their problem is the wallet, and yours is the altitude.",
    "AZ": "Arizona handles the desert the way you handle the mountains, a setting the rest of the league never faces. Arizona handled the desert heat well enough to win it all in just its fourth year, taking down the Yankees. You play a mile up where the ball flies and the rules bend, a puzzle you have never once solved across all these years. They turned their setting into a quick title, and you are still wrestling with yours.",
    "MIA": "Two newer clubs who have spent most of their history outside the contention window. Miami actually won it all twice as a young upstart, then sold the team for parts both times before the confetti settled. You reached the Series once on a charmed run, got swept, and have mostly battled the thin air that warps your whole game. They could not keep a winner together, and you have never solved the conditions you play in."
  },
  "ATH": {
    "TB": "You and the Rays both turned having no money into a way to beat the rich, brains over budget every year. The wounds rhyme but differ: Tampa Bay had a hurricane tear the roof off its home and spent a season exiled to a rival's park; you wrote the original book on it in green and gold before ownership dropped the city's name and shipped you off entirely. They lost their building, and you lost your whole town.",
    "CLE": "Cleveland runs a clever, thrifty machine that beats richer teams the way you always did. Cleveland develops stars, watches them leave, and carries the longest drought of any team that has won, with 2016 the one that got away. Yours wrote the original out-think-money book before ownership stripped the city's name off and moved you out. Their ache is a title that slipped, and yours is a home that was taken.",
    "MIL": "Milwaukee proves a small budget need not mean losing, the same point you made first. Milwaukee does it with joy intact, beer and a sausage race and a stubborn refusal to stop winning the division. You wrote the original underdog playbook in green and gold before ownership took the team out of the only city that loved you. They kept their home and their fun, and you kept the grudge.",
    "SD": "Two West Coast clubs who have never held the trophy, chasing it from opposite ends of the bank account. San Diego spends like a superpower out of pure want and has come up empty twice on the final stage. You beat the rich with brains and no budget at all before ownership packed up the team and left the city behind. They threw money at it and missed, and you never had the money and lost the city anyway."
  },
  "TB": {
    "ATH": "You and the Athletics both turned an empty wallet into a method for beating the rich, year after year. The wounds echo each other: you had a hurricane rip the roof off your home and spent a season playing in a rival's park; the Athletics wrote the original out-think-money book before ownership dropped the city's name and moved them away entirely. You lost your building, and they lost their whole town.",
    "CLE": "Cleveland is a small-budget brains operation that keeps producing contenders, exactly like you. Cleveland develops stars, lets them walk, and carries the longest drought of any team that has won, 2016 the one it let slip. Yours reached the final stage twice with nothing, then watched a hurricane tear the roof off your home. They are haunted by a title in reach, and you by a method that still has not finished the job.",
    "MIL": "Milwaukee wins games rich teams think it has no business winning, the same trick you pull. Milwaukee does it with joy out front, beer and a sausage race and a stubborn refusal to lose the division. You do it as a cold, clinical analytics lab in the toughest division there is, even after a hurricane took your roof. They make it look fun, and you make it look engineered.",
    "HOU": "Two front offices that turned baseball into a problem to be solved and got very good at the math. Houston built that into the most relentless winning machine in the sport, two titles and an asterisk it stopped apologizing for. You built it into a perennial contender on one of the smallest budgets in the game, two pennants and no ring. They had the money and the results, and you had neither and kept beating teams that did."
  },
  "MIL": {
    "STL": "You and the Cardinals are NL Central mainstays who pride yourselves on doing more with the roster than the standings suggest. St. Louis backs it with eleven quiet titles and a creed about winning the right way; you back it with a small budget, a beer in hand, and a refusal to stop winning the division despite shipping your best players off every winter. They have the rings, and you have the joy and the stubbornness.",
    "KC": "Kansas City is a small-market Midwest club that wins by being smarter than the budget allows, just like you. Kansas City turned speed, contact, and a shutdown bullpen into an actual title in 2015, small-ball nobody else valued. You turn development and grit into a division winner year after year, with the joy turned all the way up, but no ring yet. They closed it out their own way, and you are still chasing yours.",
    "TB": "Tampa Bay beats richer teams on a shoestring as routinely as you do. Tampa Bay does it as a cold analytics lab in the toughest division, even after a hurricane took its roof. You do it with joy out front, beer and brats and a sausage race, refusing to stop winning the division. They make it look engineered, and you make it look like a party.",
    "CIN": "Two NL Central lifers without big-market money to lean on. Cincinnati leans on the oldest history in the sport and a head-first intensity that never quits. You lean on a small budget turned into a refusal to lose, joy and a sausage race and a stubborn knack for staying good. Their pride is the deep past, and yours is the fun you have winning on nothing."
  },
  "MIN": {
    "CLE": "You and the Guardians are AL Central clubs intimate with October pain. Cleveland's is the longest drought of any team that has won, the 2016 collapse the wound that lingers; yours is the record eighteen straight playoff losses, a futility that became a grim joke before you finally snapped it, balanced against two roaring dome titles. They keep falling short of getting back, and you spent years losing once you got there.",
    "KC": "Kansas City found a way to win it all in its own style, the way you once did. Kansas City did it on speed, contact, and a lockdown bullpen, small-ball nobody else valued, capped in 2015. Yours came twice in a deafening dome with white hankies spinning, before a record run of October losses set in. They have the recent ring, and you have the loud old glory and the long drought that followed.",
    "DET": "Detroit leans on patience and toughness the way you do, a cold-weather AL Central club. Detroit's toughness is a car town knocked flat and clawing back, team and city rising together. Yours is the stoic northern kind, two dome titles and a record stretch of October losses taken in stride before you broke it. They are on the way up, and you have learned to weather both the cold and the heartbreak.",
    "MIL": "Two upper-Midwest clubs without big-market budgets to lean on. Milwaukee turns that into a joyful refusal to lose, beer and a sausage race and a stubborn division winner every year, still chasing a first ring. Yours has two dome titles in the past and a record run of October losses that followed before you finally broke it. They are all joy and no ring yet, and you have the rings but a long ache after them."
  },
  "KC": {
    "MIN": "You and the Twins are AL Central clubs who won it all your own way. Minnesota did it twice in a roaring dome with hankies spinning, then suffered a record run of October losses; you did it on speed, contact, and a shutdown bullpen, small-ball the rest of the sport had half forgotten. They have the older glory and the longer drought, and you have the recent ring won the way only you could claim.",
    "CLE": "Cleveland develops talent and lives and dies by it, the same small-market bet you make. Cleveland runs a clever machine, lets its stars leave, and carries the longest drought of any team that has won, 2016 still aching. Yours turned speed, defense, and a lockdown bullpen into a 2015 title, the small stuff nobody else valued. They are still chasing the next one, and you already have one won the only way you would want it.",
    "MIL": "Milwaukee wins by outsmarting and outworking the budget, exactly your approach. Milwaukee keeps winning the division with joy out front and no ring to cap it. You turned speed, contact, and a shutdown bullpen into an actual title in 2015. They are still chasing the close, and you got there your own homegrown way.",
    "STL": "Two Missouri clubs who once met in a World Series neighbors still argue about. St. Louis carries eleven titles and a creed about winning the quiet, proper way. You carry one, won on speed and contact and a bullpen nobody could touch, the small-market style only you can really claim. They win like it is expected, and you won like it had to be earned a different way."
  },
  "PHI": {
    "NYM": "You and the Mets are loud NL East clubs whose fans live and die with every pitch. The Mets lean into being lovable and luckless, New York's heartbroken second team now spending the biggest contracts in sports to escape the shadow; you lean into being the most unforgiving crowd in the game, a city that boos its own as a form of love. They want to finally be taken seriously, and you just want the effort to match the noise in the stands.",
    "BOS": "Boston runs on a passionate, heart-on-the-sleeve fanbase the way you do. Boston pours it into a grudge with the Yankees and the eighty-six-year curse it finally snapped against them. You pour it into holding your own to account out loud, the most honest and brutal fanbase in the game with more losses than any team in pro sports behind it. They love by remembering the wait, and you love by holding everyone accountable in the moment.",
    "ATL": "Atlanta shares your division and treats October as the only thing that matters. Atlanta carries it cooler, a team adopted nationwide on cable that swallowed a decade of near-misses before 2021. You carry it loud, and the booing is the loving, delivered at full volume and never once withheld. They hid the heartbreak behind the winning, and you put every feeling right out in the open.",
    "CWS": "Two working-class clubs that refuse to pretend things are fine when they are not. Chicago's South Side owns the joke, a 1919 scandal and the worst season in modern history, proud to be the half of the city the postcards skip. Yours is the loudest support in the sport and the least forgiving, with more losses than any team in pro sports behind it. They take the punchline and keep showing up, and you demand the effort match the noise."
  },
  "DET": {
    "CLE": "You and the Guardians are rust-belt clubs whose toughness comes from the cities behind you. Cleveland runs a thrifty, clever machine that develops stars, loses them, and carries the longest drought of any team that has won; yours is a car town knocked flat and clawing back, team and city climbing together. They are stuck inside the drought, and you are on the way back up.",
    "CIN": "Cincinnati treats effort and toughness as the entire point, the same as you. Cincinnati ties it to the oldest roots in the sport and a head-first style where coasting was never allowed. Yours ties it to a place that got knocked down and is grinding its way back, the town working alongside it. Theirs is a century and a half of refusing to play soft, and yours is a comeback worn on the chest.",
    "CWS": "Chicago's South Side wears a chip earned the hard way, the way you do. Chicago's South Side owns rock bottom, the worst season in modern history and a fanbase chanting for the owner to sell, proud to be the part of town the postcards skip. Yours is a city that got flattened and is now on the way up, the whole place rising with it. They are owning the joke at the bottom, and you are clawing your way up.",
    "MIN": "Two cold-weather AL Central clubs built on patience and grit. Minnesota's is the stoic northern kind, two dome titles long ago and a record run of October losses taken in stride. Yours is the industrial one, knocked down and coming back, club and city at the same time. They have weathered the heartbreak, and you are in the middle of the comeback."
  },
  "CWS": {
    "CLE": "You and the Guardians are AL Central clubs carrying old wounds and thin recent years. Cleveland's is the longest drought of any team that has won, with the 2016 collapse the cut that lingers; yours is being the sport's punchline, from throwing the 1919 Series onward, and wearing it without once flinching. They are haunted by a title they let go, and you own the joke and keep showing up anyway.",
    "DET": "Detroit is a blue-collar Midwest club with a chip earned honestly, the same as you. Detroit is a car city knocked flat and climbing back, team and town rising together. Yours owns rock bottom outright, the worst season in modern history and fans chanting for the owner to sell. They are clawing back up, and you are owning the joke at the floor.",
    "PIT": "Pittsburgh asks its fans to keep the faith through seasons that would break most fanbases, the way you do. Pittsburgh's wound is an ownership that would not spend, a record run of losing seasons watched from a gorgeous park. Yours is being the punchline and answering to it anyway, with the South Side chanting for the owner to sell. Their loyalty is to a team that would not try, and yours is to not being the other team in town.",
    "CHC": "Two clubs that share a city and almost nothing else about how it sees them. The Cubs are the postcard, ivy and day games and a hundred and eight years of romance that ended in a 2016 title. You are the South Side the postcards skip, blue collar and chip-shouldered, owners of a 2005 ring nobody noticed. They are the lovable side of town, and you are proud not to be."
  },
  "BAL": {
    "STL": "You and the Cardinals turned doing things the right way into a whole identity, fundamentals over flash. St. Louis backs it with eleven quiet titles and a creed about winning without drama; yours backs it with the small things done daily, the spirit of a hometown legend who played a record two thousand six hundred straight games. They have the rings to prove the creed, and you have the relentless reliability that defines it.",
    "CLE": "Cleveland builds around homegrown talent and a belief in the little details, exactly as you do. Cleveland's clever, thrifty machine carries the longest drought of any team that has won, 2016 still aching. Yours is the Oriole Way, fundamentals and reliability under the brick warehouse at the ballpark everyone copied. They are defined by the wait, and you by the creed of showing up every single day.",
    "MIL": "Milwaukee wins by being sound and stubborn rather than rich, the same way you do. Milwaukee does it with joy out front, beer and a sausage race and a refusal to stop winning the division. Yours does it with the Oriole Way, discipline repeated daily and never once dressed up. They make it fun, and you make it disciplined.",
    "TB": "Two AL East clubs who win by being smarter than the payroll, not richer. Tampa Bay is the cold analytics lab in the toughest division, contenders on nothing even after a hurricane took its roof. Yours is the old-school creed of fundamentals and reliability, learned by repetition and trusted over any model. They trust the numbers, and you trust the everyday discipline."
  },
  "NYM": {
    "PHI": "You and the Phillies are loud NL East clubs whose fans live and die with every pitch. Philadelphia is the most unforgiving crowd in the game, booing its own as a form of love, more losses than any team in pro sports behind it; yours is the lovable, luckless second team in New York, now spending the biggest contracts in sports to finally escape the shadow. They demand the effort out loud, and you are buying your way out of being overlooked.",
    "SD": "San Diego spends like the prize is within reach and keeps ending up empty, the same as you. San Diego is a small-market club spending like a giant out of pure want, twice to the final stage and never a champion. Yours is a big-market team throwing the richest contracts in sports at escaping life as New York's second team. They spend to finally win one, and you spend to stop being overshadowed.",
    "LAD": "Los Angeles opens the checkbook all the way and lets the sport grumble, just as you do. Los Angeles turns it into back-to-back titles and calls the resentment a compliment. Yours turns the biggest contract in sports history into one more chapter of being New York's heartbroken second team. They buy and win, and you buy and keep hoping.",
    "CHC": "Two clubs that spent generations as the lovable, heartbroken team their city could not stop loving. The Cubs waited a hundred and eight years and finally broke it in 2016. Yours is still waiting, the perennial little brother now spending the biggest contracts in sports to change the ending. They got their miracle, and you are trying to buy yours."
  },
  "MIA": {
    "TB": "You and the Rays are Florida clubs who win on the cheap and fight for every crowd. Tampa Bay reloads endlessly on a tiny budget, two pennants and no ring, even after a hurricane took its roof; yours actually won it all twice as a young upstart, then sold the team for parts both times before the parade ended. They keep the machine running without a title, and you held the title twice and would not keep the team.",
    "SD": "San Diego knows the ache of a roster that never quite gets to stay together, and so do you. San Diego spends like a superpower out of pure want and has reached the final stage twice without a ring. Yours actually held the trophy, then dismantled the roster before the confetti had settled. They spend everything and keep missing, and you grabbed it and refused to hold on.",
    "AZ": "Arizona crashed the party fast and won it all early, the same way you did. Arizona took a title in only its fourth year and stayed scrappy and dangerous since. Yours did the same and then took the whole thing apart on purpose, a city of beautiful temporary things. They kept building on the win, and you let it go deliberately.",
    "COL": "Two newer NL clubs who have spent most of their history short of contention. Colorado plays a mile up where the ball flies and the rules bend, a puzzle it has never solved, with one swept Series trip to show for it. Yours cracked it early and then chose not to keep any of it. They never solved their own conditions, and you solved yours and walked away."
  },
  "TOR": {
    "ATL": "You and the Braves both draw from a fanbase far bigger than one city, a team a whole region claims. Atlanta became America's team on cable and finally cashed in a decade of near-misses in 2021; yours belongs to an entire country, back-to-back champions in the nineties before coming two outs from glory in 2025 and losing in extra innings. They got the redemption, and your whole nation is still aching from the latest miss.",
    "BOS": "Boston is a passionate AL East club with titles in its past and heartbreak woven through, the same as you. Boston's was the eighty-six-year curse and the Yankees grudge it finally snapped. Yours is the only team a whole country claims, twice a champion long ago and then falling just short of another in 2025, in extra innings. They broke their long wait, and you reopened yours in the cruelest way.",
    "NYY": "New York expects the trophy as a birthright while you carry a whole nation into every October. New York is the empire, twenty-seven titles and a standard that calls any ringless season a failure. Yours is the team an entire country claims, a pair of titles decades back and a 2025 run that ended just short. They expect the trophy as a birthright, and you carry a nation's heartbreak from just missing it.",
    "SEA": "Two clubs that came painfully close in 2025 and watched a Game 7 take it away. The histories behind the heartbreak differ: Seattle has never once reached the World Series in fifty years, nine outs from finally breaking through. Yours already won it all twice before and came close enough in 2025 to taste it. They are still chasing the first, and you were achingly close to the next."
  },
  "TEX": {
    "HOU": "You and the Astros are Texas clubs who finally won it all in the same recent stretch, and the rivalry runs hot. Houston did it as the most relentless machine in the sport, a 2017 title with an asterisk and a 2022 one won clean, hated and fine with it; yours did it the hard way, fifty years of waiting and a 2011 night one strike from glory twice before 2023 finally delivered. They won like a juggernaut, and you won like a wound finally healing.",
    "SF": "San Francisco has stood on the final stage and knows what it takes to win there, the same as you. San Francisco does it on deep old-money pedigree and a charmed even-year run, the show always in the blood. Yours came the hard way, half a century of waiting and one unbearable night in 2011 before the job was finished in 2023. They win in charmed bursts, and you won by outlasting half a century of heartbreak.",
    "SD": "San Diego spent big chasing the end of a long wait, exactly as you did. San Diego is still chasing, a small-market club spending like a giant out of pure want, twice to the final stage and never a champion. Yours got there in the end, after decades of waiting and the night in 2011 that still does not bear thinking about. They are still waiting on the first, and you finally know what finishing it feels like.",
    "SEA": "Two AL West clubs who spent decades waiting on a breakthrough. Seattle is still the only team never to reach the World Series, nine outs away in 2025 before it slipped. Yours waited five decades, survived 2011, and turned the whole thing into a ring in 2023. They are still chasing the first trip, and you already turned your long wait into a ring."
  },
  "AZ": {
    "TEX": "You and the Rangers are western clubs who reached the top on nerve more than payroll. Texas got there the hard way, fifty years of waiting and a cruel 2011 near-miss before finally winning it all in 2023; yours crashed the party almost immediately, a championship in just your fourth year by taking down the Yankee dynasty. They earned it by outlasting the heartbreak, and you took it before anyone thought you could.",
    "MIA": "Miami won it all early and surprised everyone, the same way you did. Miami did it twice as an upstart, then tore the team apart for parts both times before the parade ended. Yours arrived almost immediately, took the title, and stayed scrappy and dangerous ever since. They could not hold onto what they built, and you kept swinging from it.",
    "SD": "San Diego chases the same prize with a very different hunger from the one you brought. San Diego spends like a superpower out of pure want and has reached the final stage twice without a ring. Yours grabbed the trophy before anyone had learned the roster, the desert upstart that took down the Yankee dynasty. They are still chasing the one they have never held, and you got yours before you had any right to.",
    "COL": "Two clubs that play out west in conditions the rest of the league does not face. Colorado plays a mile up where the ball flies and the rules bend, a puzzle it has never solved, with one swept Series trip to show for it. Yours handled the desert well enough to win it all almost straight away. They are still fighting their setting, and you turned yours into an early title."
  },
  "WSH": {
    "AZ": "You and the Diamondbacks both won it all on a charmed, against-the-odds run nobody fully expected. Arizona did it as a desert upstart in just its fourth year, taking down the Yankee dynasty; yours did it after starting a country over, the Expos uprooted from Montreal to the capital, then a 2019 team left for dead in May that fought all the way to the title. They rose fast, and you rose from the brink after years of heartbreak.",
    "ATL": "Atlanta turned years of frustration into a title within the same era, the way you did. Atlanta endured a decade and a half of division crowns and near-misses before 2021 set it right. Yours came from a franchise that had to be moved a country south, and after years of falling short fought from nineteen and thirty-one all the way to a championship. They waited inside the dominance, and you waited through a whole relocation.",
    "MIA": "Miami tore its winners down on purpose while you were torn from a whole city. Miami won it all twice as a young upstart and sold the team for parts both times, nothing beautiful ever built to last. Yours was uprooted from the city that first loved it, then rebuilt itself into a champion in 2019. They tore down their winners on purpose, and you rebuilt an identity in a whole new city.",
    "HOU": "Two teams that met on the final stage in 2019 and could not have arrived more differently. Houston came as the most relentless machine in the sport, a 2017 asterisk and a roster built to dominate. Yours came as the team left for dead in May, fighting from nineteen and thirty-one all the way. They were the juggernaut everyone expected, and you were the underdog who would not quit."
  },
  "HOU": {
    "LAD": "You and the Dodgers are the team the rest of the sport lines up to root against, and neither loses sleep over it. Los Angeles earned the hate with a bottomless payroll and back-to-back titles without apology; yours earned it with a 2017 scandal it kept the ring from and a defiant shrug ever since. They bought their villainy, and you cheated your way into yours and won another clean.",
    "NYY": "New York carries the whole sport's hatred and stopped flinching long ago, the same as you. New York is the establishment empire, twenty-seven titles and a standard that makes any ringless season a failure. Yours is the new villain, a 2017 title with an asterisk it cannot outrun and a defiance about it. They are the old empire everyone resents, and you are the upstart that won anyway and dared you to complain.",
    "TB": "Two front offices that turned baseball into a problem to solve and got very good at the math. Tampa Bay built it into a perennial contender on one of the smallest budgets in the game, two pennants and no ring. Yours built it into the most relentless winning machine in the sport, two titles and an asterisk you stopped apologizing for. They did it with nothing, and you did it with everything and dared the sport to hate you.",
    "TEX": "Texas won it all in the same recent stretch you did, and the in-state rivalry runs hot. Texas did it the hard way, fifty years of waiting and a 2011 night one strike from glory twice before 2023 finally delivered. Yours did it as the most relentless machine in the sport, an asterisk on 2017 and a clean ring in 2022, hated and fine with it. They won like a wound healing, and you won like a juggernaut that did not care who was watching."
  },
  "LAA": {
    "SEA": "You and the Mariners are AL West clubs whose history is mostly waiting. Seattle has never once reached the World Series in fifty years, nine outs away in 2025 before it slipped; yours rostered two of the greatest players alive at the same time and never won a single October game with them, then watched one leave and win it all up the freeway. They never had the talent to break through, and you had it twice over and wasted it.",
    "PIT": "Pittsburgh knows the particular pain of talent that went nowhere, the same as you. Pittsburgh's wound is an ownership that would not spend even when a generational arm arrived, a record run of losing seasons to show for it. Yours had no such excuse, because the talent was there in abundance and October still never arrived. Their stars never got the support, and yours had everything and still wasted it.",
    "SD": "Two California clubs still chasing what keeps slipping away. San Diego spends like a superpower out of pure want and has reached the final stage twice without a ring. Yours never had to spend for it, since the two best players in the game were already here, and it came to nothing anyway. They keep spending and missing, and you had it all and let it walk.",
    "TEX": "Texas outlasted a long AL West wait the way you never could. Texas got there, fifty years and a brutal 2011 near-miss before finally winning it all in 2023. Yours was handed the golden roster instead of the long wait and turned it into nothing at all. They turned the long wait into a ring, and you turned a golden roster into nothing."
  }
};

const scoring = {
  "mlb_q1": {
    "A": {
      "STL": 2,
      "CIN": 2,
      "MIL": 2,
      "BAL": 2,
      "KC": 2
    },
    "B": {
      "PHI": 2,
      "CWS": 2,
      "PIT": 2,
      "CLE": 2,
      "DET": 3,
      "ATH": 2,
      "TB": 2
    },
    "C": {
      "CHC": 2,
      "BOS": 2,
      "SF": 2,
      "TOR": 2,
      "SEA": 2
    },
    "D": {
      "NYY": 2,
      "LAD": 2,
      "HOU": 2,
      "ATL": 2,
      "NYM": 2,
      "TEX": 2
    },
    "E": {
      "SD": 2,
      "COL": 2,
      "WSH": 2,
      "MIA": 2,
      "AZ": 2,
      "LAA": 2,
      "MIN": 3
    }
  },
  "mlb_q2": {
    "1": {
      "CHC": 3,
      "BOS": 3,
      "KC": 3,
      "PHI": 3,
      "NYM": 3,
      "TOR": 3,
      "TEX": 3,
      "AZ": 3,
      "WSH": 3
    },
    "2": {
      "CHC": 2,
      "BOS": 2,
      "KC": 2,
      "PHI": 2,
      "NYM": 2,
      "TOR": 2,
      "TEX": 2,
      "AZ": 2,
      "WSH": 2,
      "NYY": 1,
      "LAD": 1,
      "STL": 1,
      "ATL": 1,
      "SF": 1,
      "CIN": 1,
      "SD": 1,
      "TB": 1,
      "MIL": 1,
      "DET": 1,
      "BAL": 1,
      "HOU": 1
    },
    "3": {
      "NYY": 3,
      "LAD": 3,
      "STL": 3,
      "ATL": 3,
      "SF": 3,
      "CIN": 3,
      "SD": 3,
      "TB": 3,
      "MIL": 3,
      "DET": 3,
      "BAL": 3,
      "HOU": 3
    },
    "4": {
      "CLE": 2,
      "SEA": 2,
      "PIT": 2,
      "COL": 2,
      "ATH": 2,
      "MIN": 2,
      "CWS": 2,
      "MIA": 2,
      "LAA": 2,
      "NYY": 1,
      "LAD": 1,
      "STL": 1,
      "ATL": 1,
      "SF": 1,
      "CIN": 1,
      "SD": 1,
      "TB": 1,
      "MIL": 1,
      "DET": 1,
      "BAL": 1,
      "HOU": 1
    },
    "5": {
      "CLE": 3,
      "SEA": 3,
      "PIT": 3,
      "COL": 3,
      "ATH": 3,
      "MIN": 3,
      "CWS": 3,
      "MIA": 3,
      "LAA": 3
    }
  },
  "mlb_q3": {
    "A": {
      "STL": 2,
      "ATL": 2,
      "BAL": 2,
      "TB": 2,
      "MIL": 2,
      "ATH": 2,
      "LAD": 2
    },
    "B": {
      "PHI": 2,
      "NYM": 2,
      "AZ": 2,
      "MIA": 2,
      "TEX": 2,
      "TOR": 2
    },
    "C": {
      "CHC": 2,
      "SEA": 3,
      "SD": 2,
      "COL": 2,
      "MIN": 2,
      "WSH": 2,
      "KC": 2,
      "CLE": 2
    },
    "D": {
      "CWS": 2,
      "PIT": 2,
      "DET": 2,
      "BOS": 2,
      "CIN": 2,
      "LAA": 2
    },
    "E": {
      "NYY": 2,
      "HOU": 2,
      "SF": 2
    }
  },
  "mlb_q4": {
    "1": {
      "CIN": 3,
      "CHC": 3,
      "BOS": 3,
      "PIT": 3,
      "KC": 1,
      "PHI": 3,
      "NYM": 3,
      "TOR": 2
    },
    "2": {
      "CIN": 1,
      "CHC": 1,
      "BOS": 2,
      "PIT": 1,
      "KC": 3,
      "PHI": 2,
      "NYM": 1,
      "TOR": 3,
      "SF": 1,
      "SEA": 1,
      "SD": 1,
      "COL": 1,
      "MIN": 1,
      "DET": 1,
      "CWS": 2,
      "MIA": 2,
      "TEX": 1,
      "AZ": 1,
      "WSH": 1,
      "LAA": 2
    },
    "3": {
      "KC": 1,
      "NYY": 3,
      "ATL": 3,
      "SF": 3,
      "SEA": 3,
      "SD": 3,
      "COL": 3,
      "MIN": 3,
      "DET": 3,
      "CWS": 3,
      "MIA": 3,
      "TEX": 3,
      "AZ": 3,
      "WSH": 3,
      "LAA": 3
    },
    "4": {
      "LAD": 1,
      "STL": 1,
      "CLE": 3,
      "ATH": 1,
      "TB": 1,
      "MIL": 2,
      "BAL": 2,
      "HOU": 1,
      "NYY": 2,
      "ATL": 2,
      "SF": 1,
      "SEA": 1,
      "SD": 1,
      "COL": 1,
      "MIN": 1,
      "DET": 1,
      "TEX": 1,
      "AZ": 1,
      "WSH": 1
    },
    "5": {
      "LAD": 3,
      "STL": 3,
      "CLE": 2,
      "ATH": 3,
      "TB": 3,
      "MIL": 3,
      "BAL": 3,
      "HOU": 3
    }
  },
  "mlb_q5": {
    "A": {
      "PIT": 2,
      "SEA": 2,
      "CLE": 2,
      "COL": 2
    },
    "B": {
      "NYM": 2,
      "PHI": 2,
      "SD": 2,
      "TOR": 2
    },
    "C": {
      "KC": 2,
      "AZ": 2,
      "MIA": 2,
      "TEX": 2
    },
    "D": {
      "BAL": 2,
      "DET": 2,
      "MIL": 2,
      "MIN": 2,
      "ATH": 2,
      "TB": 2
    },
    "E": {
      "NYY": 2,
      "LAD": 2,
      "STL": 2,
      "ATL": 2,
      "HOU": 2,
      "SF": 2,
      "CIN": 2,
      "BOS": 2
    },
    "F": {
      "CHC": 2,
      "CWS": 2,
      "WSH": 2,
      "LAA": 2
    }
  },
  "mlb_q6": {
    "A": {
      "STL": 2,
      "SF": 2,
      "ATL": 2,
      "BAL": 2,
      "CLE": 2,
      "MIN": 2,
      "MIL": 2
    },
    "B": {
      "TOR": 2,
      "SD": 2,
      "NYM": 2,
      "AZ": 2,
      "CWS": 2
    },
    "C": {
      "PIT": 2,
      "DET": 2,
      "ATH": 2,
      "TB": 2,
      "KC": 2,
      "PHI": 2
    },
    "D": {
      "NYY": 2,
      "LAD": 2,
      "HOU": 2,
      "LAA": 2,
      "CIN": 2,
      "TEX": 2
    },
    "E": {
      "CHC": 2,
      "BOS": 2,
      "SEA": 3,
      "COL": 2,
      "MIA": 2,
      "WSH": 2
    }
  },
  "mlb_q7": {
    "A": {
      "PIT": 2,
      "SEA": 2,
      "COL": 2,
      "CIN": 2
    },
    "B": {
      "NYM": 2,
      "PHI": 2,
      "SD": 2,
      "TOR": 2
    },
    "C": {
      "BOS": 2,
      "KC": 2,
      "TEX": 2,
      "AZ": 2,
      "STL": 2,
      "MIL": 2,
      "DET": 2
    },
    "D": {
      "CLE": 3,
      "ATH": 2,
      "MIA": 2,
      "MIN": 2,
      "BAL": 2,
      "TB": 2
    },
    "E": {
      "NYY": 2,
      "LAD": 2,
      "ATL": 2,
      "HOU": 2,
      "SF": 2
    },
    "F": {
      "CHC": 2,
      "CWS": 2,
      "WSH": 2,
      "LAA": 2
    }
  },
  "mlb_q8": {
    "A": {
      "PIT": 2,
      "DET": 2,
      "CLE": 2,
      "ATH": 2,
      "PHI": 2,
      "CWS": 2,
      "COL": 2
    },
    "B": {
      "TB": 2,
      "MIL": 2,
      "AZ": 2
    },
    "C": {
      "NYM": 2,
      "SEA": 2,
      "SD": 2,
      "TOR": 2,
      "LAA": 2,
      "MIA": 2,
      "ATH": 2,
      "CWS": 2
    },
    "D": {
      "WSH": 2,
      "KC": 2,
      "BOS": 2,
      "TEX": 2,
      "CHC": 2,
      "HOU": 2
    },
    "E": {
      "NYY": 2,
      "LAD": 2,
      "STL": 2,
      "ATL": 2,
      "SF": 2,
      "CIN": 2,
      "BAL": 2,
      "MIN": 2
    }
  },
  "mlb_q9": {
    "1": {
      "CLE": 3,
      "COL": 3,
      "ATH": 2,
      "MIL": 1,
      "KC": 2,
      "DET": 3,
      "BAL": 2,
      "MIA": 3,
      "WSH": 3
    },
    "2": {
      "CLE": 2,
      "COL": 1,
      "ATH": 3,
      "TB": 3,
      "MIL": 3,
      "KC": 3,
      "DET": 2,
      "BAL": 3,
      "MIA": 2,
      "WSH": 2,
      "SF": 1,
      "CIN": 1,
      "CHC": 1,
      "SEA": 1,
      "CWS": 2
    },
    "3": {
      "TB": 2,
      "MIL": 1,
      "PHI": 1,
      "TOR": 1,
      "LAA": 2,
      "STL": 3,
      "SF": 3,
      "CIN": 3,
      "CHC": 3,
      "BOS": 3,
      "SEA": 3,
      "CWS": 3,
      "AZ": 3
    },
    "4": {
      "NYY": 1,
      "LAD": 1,
      "ATL": 3,
      "SD": 3,
      "PHI": 3,
      "NYM": 3,
      "TOR": 3,
      "TEX": 3,
      "HOU": 2,
      "LAA": 3,
      "STL": 2,
      "SF": 1,
      "CIN": 1,
      "CHC": 1,
      "BOS": 2,
      "SEA": 1,
      "AZ": 2
    },
    "5": {
      "NYY": 3,
      "LAD": 3,
      "ATL": 2,
      "SD": 2,
      "PHI": 1,
      "NYM": 2,
      "TOR": 1,
      "TEX": 2,
      "HOU": 3
    }
  },
  "mlb_q10": {
    "A": {
      "CIN": 3,
      "NYY": 3,
      "SF": 2
    },
    "B": {
      "LAD": 2,
      "ATL": 2,
      "BAL": 2,
      "STL": 2,
      "SF": 2
    },
    "C": {
      "CHC": 2,
      "BOS": 2,
      "CLE": 2,
      "SEA": 2,
      "PIT": 2,
      "CWS": 2
    },
    "D": {
      "AZ": 2,
      "TB": 2,
      "MIA": 2,
      "WSH": 2,
      "COL": 2,
      "SD": 2,
      "TOR": 2,
      "TEX": 2,
      "HOU": 2
    },
    "E": {
      "NYM": 2,
      "LAA": 2,
      "DET": 2,
      "KC": 2,
      "MIL": 2,
      "MIN": 2,
      "ATH": 2,
      "PHI": 2
    }
  },
  "mlb_q11": {
    "A": {
      "NYY": 2,
      "LAD": 2,
      "ATL": 2,
      "HOU": 2
    },
    "B": {
      "TB": 2,
      "ATH": 2,
      "MIL": 2,
      "KC": 2,
      "AZ": 2,
      "MIA": 2,
      "COL": 2
    },
    "C": {
      "SF": 2,
      "STL": 2,
      "BAL": 2,
      "CLE": 2,
      "MIN": 2
    },
    "D": {
      "PHI": 2,
      "PIT": 2,
      "DET": 2,
      "CWS": 2,
      "NYM": 2,
      "TOR": 2,
      "WSH": 2,
      "BOS": 2,
      "CHC": 2
    },
    "E": {
      "SD": 2,
      "CIN": 2,
      "LAA": 2,
      "TEX": 2,
      "SEA": 2
    }
  },
  "mlb_q12": {
    "A": {
      "STL": 3,
      "MIL": 3,
      "KC": 3,
      "CIN": 3,
      "MIN": 3
    },
    "B": {
      "PIT": 2,
      "DET": 3,
      "PHI": 3,
      "CLE": 3,
      "WSH": 3,
      "ATH": 3,
      "CWS": 3
    },
    "C": {
      "SEA": 3,
      "COL": 3,
      "SD": 3,
      "BAL": 3,
      "TB": 3,
      "MIA": 3
    },
    "D": {
      "CHC": 3,
      "AZ": 3,
      "TOR": 3,
      "NYM": 3,
      "BOS": 3
    },
    "E": {
      "NYY": 3,
      "LAD": 2,
      "HOU": 3,
      "ATL": 3,
      "SF": 3,
      "TEX": 3,
      "LAA": 3
    }
  }
};

const teamDims = {
  "NYY": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 10,
    "process": 8,
    "community": 5,
    "chaos": 2,
    "rootedness": 9
  },
  "LAD": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 10,
    "process": 9,
    "community": 6,
    "chaos": 3,
    "rootedness": 6
  },
  "STL": {
    "loyalty": 8,
    "emotion": 5,
    "ambition": 7,
    "process": 9,
    "community": 8,
    "chaos": 1,
    "rootedness": 8
  },
  "ATL": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 8,
    "process": 8,
    "community": 7,
    "chaos": 3,
    "rootedness": 7
  },
  "SF": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 6,
    "process": 5,
    "community": 6,
    "chaos": 4,
    "rootedness": 7
  },
  "CIN": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 6,
    "process": 4,
    "community": 7,
    "chaos": 5,
    "rootedness": 9
  },
  "CHC": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 5,
    "process": 4,
    "community": 9,
    "chaos": 6,
    "rootedness": 9
  },
  "BOS": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 7,
    "process": 5,
    "community": 8,
    "chaos": 5,
    "rootedness": 9
  },
  "CLE": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 7,
    "community": 6,
    "chaos": 4,
    "rootedness": 8
  },
  "SEA": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 5,
    "community": 7,
    "chaos": 4,
    "rootedness": 8
  },
  "PIT": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 4,
    "process": 4,
    "community": 8,
    "chaos": 4,
    "rootedness": 9
  },
  "SD": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 8,
    "process": 4,
    "community": 7,
    "chaos": 7,
    "rootedness": 7
  },
  "COL": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 4,
    "process": 4,
    "community": 6,
    "chaos": 6,
    "rootedness": 8
  },
  "ATH": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 6,
    "process": 9,
    "community": 4,
    "chaos": 6,
    "rootedness": 5
  },
  "TB": {
    "loyalty": 5,
    "emotion": 4,
    "ambition": 8,
    "process": 9,
    "community": 4,
    "chaos": 5,
    "rootedness": 3
  },
  "MIL": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 8,
    "community": 8,
    "chaos": 5,
    "rootedness": 7
  },
  "MIN": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 4,
    "process": 5,
    "community": 7,
    "chaos": 3,
    "rootedness": 8
  },
  "KC": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 6,
    "process": 8,
    "community": 6,
    "chaos": 6,
    "rootedness": 7
  },
  "PHI": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 7,
    "process": 5,
    "community": 8,
    "chaos": 6,
    "rootedness": 7
  },
  "DET": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 6,
    "community": 7,
    "chaos": 4,
    "rootedness": 8
  },
  "CWS": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 4,
    "process": 3,
    "community": 6,
    "chaos": 7,
    "rootedness": 8
  },
  "BAL": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 6,
    "process": 8,
    "community": 7,
    "chaos": 3,
    "rootedness": 7
  },
  "NYM": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 8,
    "process": 4,
    "community": 7,
    "chaos": 8,
    "rootedness": 6
  },
  "MIA": {
    "loyalty": 4,
    "emotion": 5,
    "ambition": 5,
    "process": 3,
    "community": 4,
    "chaos": 8,
    "rootedness": 4
  },
  "TOR": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 9,
    "chaos": 4,
    "rootedness": 7
  },
  "TEX": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "AZ": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 7,
    "process": 7,
    "community": 5,
    "chaos": 6,
    "rootedness": 5
  },
  "WSH": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 5,
    "process": 5,
    "community": 5,
    "chaos": 7,
    "rootedness": 4
  },
  "HOU": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 9,
    "process": 9,
    "community": 5,
    "chaos": 5,
    "rootedness": 7
  },
  "LAA": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 3,
    "community": 5,
    "chaos": 5,
    "rootedness": 5
  }
};

const CARD_BADGES = {
  "NYY": "🎩",
  "LAD": "💙",
  "STL": "🐦",
  "ATL": "🪓",
  "SF": "🌉",
  "CIN": "🔴",
  "CHC": "🐻",
  "BOS": "🧦",
  "CLE": "🛡️",
  "SEA": "⚓",
  "PIT": "🏴‍☠️",
  "SD": "⛪",
  "COL": "🏔️",
  "ATH": "🐘",
  "TB": "☀️",
  "MIL": "🍺",
  "MIN": "⭐",
  "KC": "👑",
  "PHI": "🔔",
  "DET": "🐯",
  "CWS": "⚪",
  "BAL": "🟠",
  "NYM": "🍎",
  "MIA": "🐟",
  "TOR": "🍁",
  "TEX": "🤠",
  "AZ": "🐍",
  "WSH": "🏛️",
  "HOU": "🚀",
  "LAA": "😇"
};


const squadUrls = {};  // no per-team roster links yet; the View squad CTA stays hidden (data-gated)


const milestones = {
  "NYY": ["Twenty-seven World Series titles, more than any other team in North American professional sports.", "The 1927 Murderers' Row lineup, still called the greatest team the game has ever produced.", "Joe DiMaggio's fifty-six-game hitting streak in 1941, a record no one has come close to since.", "The heart of the order for generations, from Ruth and Gehrig to Mantle to Jeter.", "A five-game loss to the Dodgers in the 2024 World Series, the first Fall Classic in the Bronx since 2009."],
  "LAD": ["Back-to-back World Series titles in 2024 and 2025, the first team to repeat in twenty-five years.", "Nine championships in all, the ninth clinched in an eleven-inning Game 7 over Toronto.", "Jackie Robinson breaking baseball's color line in a Brooklyn uniform in 1947.", "Brooklyn's only title in 1955, the Boys of Summer finally beating the Yankees.", "Kirk Gibson's limping walk-off home run in the 1988 World Series, an iconic swing."],
  "STL": ["Eleven World Series titles, the most of any National League club and second only to the Yankees.", "The 2011 crown, taken from a game once a single strike from over, twice, against Texas.", "Stan Musial, Bob Gibson, Ozzie Smith, Albert Pujols, a lineage of franchise legends.", "The Gashouse Gang of the 1930s, the rowdiest champions the sport had seen.", "A fan base so devoted it is widely called the best in baseball."],
  "ATL": ["Four World Series titles across three cities, from Boston to Milwaukee to Atlanta.", "Fourteen straight division titles from 1991 to 2005, a record run of dominance.", "Hank Aaron's 715th home run in 1974, passing Babe Ruth in a Braves uniform.", "The 1995 championship, the crown that finally rewarded the era's great pitching staffs.", "A young, homegrown 2021 team that caught fire in October and won it all."],
  "SF": ["Eight World Series titles, five in New York and three in San Francisco.", "Three championships in five years, 2010, 2012 and 2014, all in even years.", "Barry Bonds and 762 career home runs, the most anyone has ever hit.", "Willie Mays and The Catch in the 1954 World Series, an over-the-shoulder grab for the ages.", "The move west from New York in 1958, carrying a century of history to the coast."],
  "CIN": ["Baseball's first professional team, the 1869 Red Stockings, the oldest roots in the sport.", "Five World Series titles, the last a wire-to-wire sweep in 1990.", "The Big Red Machine of the 1970s, back-to-back champions in 1975 and 1976.", "Pete Rose and his 4,256 hits, more than any player in history.", "Johnny Bench, Joe Morgan, Tony Perez, the everyday core of a dynasty."],
  "CHC": ["The 2016 title that ended a 108-year drought, the longest in North American sports history.", "A Game 7 won in extra innings over Cleveland, after a rain delay and a blown lead.", "Wrigley Field and its ivy walls, home since 1916 and a cathedral of the game.", "The Billy Goat curse, blamed for decades of heartbreak until 2016 broke the spell.", "Ernie Banks, Mr. Cub, who played nineteen seasons and never reached the postseason."],
  "BOS": ["Nine World Series titles, the first in 1903 and the latest in 2018.", "The 2004 team that broke the eighty-six-year Curse of the Bambino.", "Down three games to none to the Yankees in 2004, then four straight wins, the only such comeback in baseball.", "Ted Williams hitting .406 in 1941, the last man to bat .400 for a season.", "Fenway Park and the Green Monster, the oldest ballpark in the majors."],
  "CLE": ["Two World Series titles, in 1920 and 1948, and nothing since.", "The longest active championship drought in baseball, seventy-seven years and counting.", "Twenty-two straight wins in 2017, the longest streak the American League has ever seen.", "A three-games-to-one lead lost to the Cubs in the 2016 World Series, Game 7 in extra innings.", "Larry Doby breaking the American League color line in 1947, weeks after Robinson."],
  "SEA": ["The only team in Major League Baseball never to reach a World Series, forty-nine years running.", "The 2001 team won 116 games, tied for the most ever, and still missed the World Series.", "Edgar Martinez's double in the 1995 division series, the hit credited with saving baseball in Seattle.", "Twenty-one straight years without a playoff berth after 2001, ended at last in 2022.", "Game 7 of the 2025 ALCS, the closest the franchise has ever come to the Fall Classic."],
  "PIT": ["Five World Series titles, the last in 1979 to the anthem We Are Family.", "Bill Mazeroski's walk-off home run to win Game 7 in 1960, the first ever to end a World Series.", "Roberto Clemente and his 3,000 hits, a Hall of Famer lost far too soon.", "Twenty straight losing seasons from 1993 to 2012, the longest such run in major American sports.", "Honus Wagner and the early dynasties, roots reaching back to the 1880s."],
  "SD": ["No World Series title yet, but two pennants, in 1984 and 1998.", "Tony Gwynn and his eight batting titles, a lifetime .338 hitter who never left San Diego.", "The 1998 team that won 98 games and reached the Fall Classic before the Yankees swept it.", "Trevor Hoffman and the entrance music, six hundred saves to the toll of a bell.", "A long wait for a first crown, still chasing it after more than fifty years."],
  "COL": ["No World Series title, but one wild pennant run in 2007 called Rocktober.", "Twenty-one wins in twenty-two games to reach the 2007 Fall Classic, then a sweep by Boston.", "Coors Field and its thin mountain air, where baseballs fly like nowhere else.", "Todd Helton, a lifetime Rockie and Hall of Famer, the face of the franchise.", "Larry Walker, an MVP and batting champion in the purple pinstripes."],
  "ATH": ["Nine World Series titles across Philadelphia and Oakland, a storied and much-moved franchise.", "The 1989 Bay Bridge sweep of the Giants, a series interrupted by an earthquake.", "Connie Mack, who managed the team for fifty years and built its early dynasties.", "The Moneyball era and a twenty-game winning streak in 2002 on the game's smallest budgets.", "The Bash Brothers, Reggie Jackson, Rickey Henderson, stars from a rich Oakland history."],
  "TB": ["No World Series title, but American League pennants in 2008 and 2020.", "A worst-to-first 2008 team that reached the Fall Classic on one of the game's smallest payrolls.", "Evan Longoria's rookie heroics, the young star who put the franchise on the map.", "A reputation for outsmarting richer rivals year after year on a shoestring budget.", "The 2020 pennant, pushed to six games by the Dodgers before falling short."],
  "MIL": ["No World Series title, the closest a 1982 loss to the Cardinals in seven games.", "Harvey's Wallbangers, the mashing 1982 club that remains the only Brewers pennant winner.", "Robin Yount, a two-time MVP who spent all twenty of his seasons in Milwaukee.", "A jump from the American League to the National in 1998, a rare switch of leagues.", "The 2025 team that took the National League's top seed before a sweep in the NLCS."],
  "MIN": ["Three World Series titles, one as the Washington Senators in 1924 and two in Minnesota.", "The 1991 championship, ended by a ten-inning Game 7 shutout, one of the greatest ever played.", "Kirby Puckett's Game 6 heroics in 1991, telling teammates to jump on his back.", "Harmon Killebrew and 573 home runs, the quiet slugger who defined the franchise.", "A run of eighteen straight postseason losses, finally broken in 2023."],
  "KC": ["Two World Series titles, in 1985 and 2015, thirty years apart.", "The 1985 I-70 Series over the Cardinals, sealed after a famous blown call at first.", "George Brett, a lifetime Royal and batting champion who once flirted with .400.", "Back-to-back pennants in 2014 and 2015, the contact-and-speed teams that ran wild.", "The 2015 champions, relentless late-inning comebacks all the way to the crown."],
  "PHI": ["Two World Series titles, the first in 1980 after nearly a century of waiting.", "The 2008 champions, a title the city held close through the lean years after.", "The first franchise in sports to lose 10,000 games, a long and stubborn history.", "Mike Schmidt, widely regarded as the finest third baseman the game has produced.", "A ballpark famous for its passion, and for booing anything that stands still."],
  "DET": ["Four World Series titles, the last a wire-to-wire romp in 1984.", "The 1984 team started 35 and 5, one of the great openings in baseball history.", "Ty Cobb and a .366 lifetime average, the highest anyone has ever hit.", "Al Kaline, Mr. Tiger, who wore the Old English D for twenty-two seasons.", "Miguel Cabrera's 2012 Triple Crown, the first in forty-five years."],
  "CWS": ["Three World Series titles, in 1906, 1917 and 2005.", "The 2005 champions swept the Astros to end an eighty-eight-year drought.", "The 1919 Black Sox scandal, eight players banned for throwing the World Series.", "Frank Thomas, the Big Hurt, a two-time MVP and the face of the South Side.", "A century of baseball on Chicago's South Side, at Comiskey and its successors."],
  "BAL": ["Three World Series titles, in 1966, 1970 and 1983.", "Cal Ripken Jr. and 2,632 straight games, the Iron Man streak once thought unbreakable.", "The 1966 sweep of the Dodgers, allowing just two runs across four games.", "Brooks and Frank Robinson, cornerstones of the great teams under Earl Weaver.", "A pitching-and-defense tradition known simply as the Oriole Way."],
  "NYM": ["Two World Series titles, the Miracle Mets of 1969 and the champions of 1986.", "Game 6 in 1986, a ground ball through Bill Buckner's legs that kept the season alive.", "An expansion 1962 team that lost 120 games, among the worst seasons ever played.", "Tom Seaver, The Franchise, the ace who turned a laughingstock into a champion.", "Amazin' comebacks and heartbreak in equal measure, the story of the Mets."],
  "MIA": ["Two World Series titles, in 1997 and 2003, both won as a wild card.", "A 1997 championship in only the franchise's fifth season, then a roster sold off for parts.", "The 2003 upset of the Yankees, a young and fearless team nobody saw coming.", "Josh Beckett shutting the door in the Bronx to close out the 2003 title.", "Boom-and-bust cycles, two crowns bracketed by long, lean rebuilds."],
  "TOR": ["Back-to-back World Series titles in 1992 and 1993, the first crowns won outside the United States.", "Joe Carter's walk-off home run to end the 1993 World Series, one of only two in history.", "A 2025 return to the Fall Classic, their first pennant in thirty-two years.", "A Game 7 loss to the Dodgers in eleven innings in 2025, the title one swing away.", "Roberto Alomar and the SkyDome era, a powerhouse north of the border."],
  "TEX": ["A first World Series title in 2023, after sixty-two years without one.", "An 11 and 0 run on the road that postseason, a perfect October away from home.", "One strike away from the crown, twice, in the crushing 2011 World Series loss.", "Back-to-back pennants in 2010 and 2011 that ended in heartbreak both times.", "Corey Seager's clutch October bat, a two-time World Series MVP."],
  "AZ": ["A 2001 World Series title in only the fourth season, the fastest any expansion team has done it.", "Luis Gonzalez's walk-off single off Mariano Rivera to win Game 7 over the Yankees.", "Randy Johnson and Curt Schilling, co-MVPs who carried the 2001 staff.", "A surprise 2023 pennant, back to the World Series before falling to Texas.", "The only major professional sports title the state of Arizona has ever won."],
  "WSH": ["A first World Series title in 2019, the franchise's only crown.", "Every game of that 2019 Series won by the road team, a first in baseball history.", "Comebacks in all five elimination games of the 2019 run, again and again.", "The Expos roots in Montreal from 1969, before the move to Washington in 2005.", "Washington's first baseball champion since the Senators of 1924."],
  "HOU": ["Two World Series titles, in 2017 and 2022, the heart of a decade of contention.", "Seven straight American League Championship Series from 2017 to 2023.", "The 2017 title, later stained by a sign-stealing scandal that shook the sport.", "A dominant 2022 championship, redemption for the franchise.", "Jeff Bagwell and Craig Biggio, the Killer B's who defined the earlier Astros era."],
  "LAA": ["A first and only World Series title in 2002, powered by the Rally Monkey.", "A comeback from the brink in Game 6, then Game 7 over the Giants.", "Mike Trout, a three-time MVP whose prime passed with barely a playoff game to show.", "Shohei Ohtani's two-way brilliance in Anaheim, unanimous MVPs and no October.", "Nolan Ryan's no-hitters and hundred-mile-per-hour heat, an early face of the franchise."],
};

export { moduleQuestions, teams, archetypes, teamTextColors, greats, vitalStats, milestones, nearlyGot, scoring, teamDims, CARD_BADGES, squadUrls };
