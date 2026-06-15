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
    "question": "It's in your life every single day for half the year, not once a week. That daily presence is:",
    "options": [
      {
        "label": "A comfort. The everyday ritual matters more than any single result.",
        "value": "A"
      },
      {
        "label": "A grind you wouldn't trade, even on the worst nights.",
        "value": "B"
      },
      {
        "label": "A summer-long romance, win or lose.",
        "value": "C"
      },
      {
        "label": "Background noise until it's October, and then it's everything.",
        "value": "D"
      },
      {
        "label": "A faith you keep through every long cold spell.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q2",
    "type": "slider",
    "phase": "The fine print",
    "question": "Which is more you:",
    "left": "It is never truly over. No clock to run out, you get the final out or you don't, and I believe in the final out.",
    "right": "Some things are simply decided, and pretending otherwise is denial. I read it early and make my peace."
  },
  {
    "id": "mlb_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "It's a long haul, full of hot streaks and brutal slumps. The you that shows up is:",
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
        "label": "Loud either way. You feel every pitch, and so does everyone near you.",
        "value": "D"
      },
      {
        "label": "Unbothered. You expect to be fine, and you usually are.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q4",
    "type": "slider",
    "phase": "The fine print",
    "question": "Which is more you:",
    "left": "I keep little rituals I won't break, even knowing full well they do nothing. The faith is the whole point.",
    "right": "I trust what can actually be measured and let the rest go. Do the work right and the results come."
  },
  {
    "id": "mlb_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "Some waits stretch on for years with no end in sight. The longer it goes, the more you:",
    "options": [
      {
        "label": "Dig in. The loyalty is the identity now, the trophy almost beside the point.",
        "value": "A"
      },
      {
        "label": "Ache for it. You need it to happen while you're still here to see it.",
        "value": "B"
      },
      {
        "label": "Laugh and believe again anyway, certain as ever, year after year.",
        "value": "C"
      },
      {
        "label": "Channel it into showing up every single day, no excuses.",
        "value": "D"
      },
      {
        "label": "Don't relate. You don't expect to be kept waiting.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q6",
    "type": "choice",
    "phase": "The fine print",
    "question": "There's an old debate about how to carry yourself when you win. You land on:",
    "options": [
      {
        "label": "Play it straight and humble. Act like you've been there before.",
        "value": "A"
      },
      {
        "label": "Flip the bat and let them hear it. The joy is the point, no apology.",
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
        "label": "However it comes. You're just relieved it finally happened.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Some hopes outlast the people holding them, handed down like a family name. Waiting for something you might not live to see is:",
    "options": [
      {
        "label": "The most romantic thing there is. The wait itself is almost sacred.",
        "value": "A"
      },
      {
        "label": "Something that would break you. You need it within your lifetime.",
        "value": "B"
      },
      {
        "label": "Exactly why you'd treasure the one time it finally arrived.",
        "value": "C"
      },
      {
        "label": "A debt the world owes you, and you have stopped expecting it to pay.",
        "value": "D"
      },
      {
        "label": "Not a thing you think about. You expect yours sooner than that.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Teams get moved, renamed, sold, gutted. When the thing you love changes underneath you, you:",
    "options": [
      {
        "label": "Stay loyal to the place and the roots, whatever they rename or relocate.",
        "value": "A"
      },
      {
        "label": "Build your own from nothing and dare anyone to enjoy facing it.",
        "value": "B"
      },
      {
        "label": "Carry the anger right alongside the love. Both are real, forever.",
        "value": "C"
      },
      {
        "label": "Came back from the lowest point imaginable and made it your proudest chapter.",
        "value": "D"
      },
      {
        "label": "Never happened to you. What's yours has always been yours.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "Which is more you:",
    "left": "Give me nothing and watch me win anyway. Brains and grit beat a fat wallet.",
    "right": "If you want the best, you pay for the best. I spend whatever it takes and I won't apologize."
  },
  {
    "id": "mlb_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Baseball drowns in its own history, the records, the ghosts, the old glory. To you that history is:",
    "options": [
      {
        "label": "Everything. You measure today against a glorious past and mostly find today wanting.",
        "value": "A"
      },
      {
        "label": "A standard to live up to, proof of how it is supposed to be done.",
        "value": "B"
      },
      {
        "label": "A weight you'd love to finally escape by writing something new.",
        "value": "C"
      },
      {
        "label": "Someone else's. Your story is still being written, fresh.",
        "value": "D"
      },
      {
        "label": "Background. You're here for right now, not the museum.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "It all narrows to one person against one person, sixty feet apart, everyone watching. You'd rather be:",
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
    "question": "Strip away winning. On a warm night at the park, what you're really there for is:",
    "options": [
      {
        "label": "The people beside you. It was always about who you share it with.",
        "value": "A"
      },
      {
        "label": "The place. This park, this city, this is home.",
        "value": "B"
      },
      {
        "label": "The everyday escape. A few quiet hours that are just yours.",
        "value": "C"
      },
      {
        "label": "The chance, however small, to see something you'll tell your grandkids about.",
        "value": "D"
      },
      {
        "label": "The win. Don't romanticize it, you came to win.",
        "value": "E"
      }
    ]
  }
];

const teams = {
  "NYY": {
    "name": "New York Yankees",
    "emoji": "🎩",
    "color": "#0C2340",
    "tagline": "You count twenty-seven championships, and you still treat anything short of the next one as a failure.",
    "desc": "Winning is not the goal, it is the floor. You hold twenty-seven titles, more than anyone in the sport, and somehow that only raised the bar instead of settling it. The pinstripes have meant the same thing in the Bronx for a hundred years, and you wear them like a standard everyone else is measured against. Half the sport copies you and the other half roots against you, and you have never once mistaken either for a reason to apologize. A great season without a parade is just a longer way to come up short.",
    "why": [
      "Your ambition sits at the ceiling and never moves. The target is the title, full stop, and a near miss reads to you as a loss with extra steps.",
      "You trust the machine over the moment. A century of winning got built on standards and repetition, not on hoping the magic shows up.",
      "You are at peace being the team everyone wants to beat. The contempt is just the sound of the rest of the league measuring itself against you."
    ]
  },
  "LAD": {
    "name": "Los Angeles Dodgers",
    "emoji": "💙",
    "color": "#005A9C",
    "tagline": "You won it all, then did it again the very next year, and spent every dollar it took without one word of apology.",
    "desc": "You buy the best and you win, and you have made your peace with everyone hating you for it. The latest titles came back to back, the first repeat in a quarter century, and the writers called it inevitable like it was an insult, so you took it as a compliment. Underneath the money is an older nerve, a team that broke a borough's heart by leaving Brooklyn and carried the number forty-two west as a promise. You do not pretend it was close. You stacked the deck, said so out loud, and collected the trophy anyway.",
    "why": [
      "Your ambition is total and your spending is shameless, and you see no contradiction between the two. If the best is for sale, you buy it.",
      "You back want with process. The richest roster still has to be built right, and you trust the system that turns money into rings.",
      "You carry history as fuel without letting it slow you down. The past matters, but the next title matters more."
    ]
  },
  "STL": {
    "name": "St. Louis Cardinals",
    "emoji": "🐦",
    "color": "#C41E3A",
    "tagline": "You have won it all eleven times and made almost no noise doing it. Where you are from, winning the right way is the entire point.",
    "desc": "You win the quiet way, and you believe the quiet way is the only one that counts. Eleven championships sit in your history, more than any team outside New York, and you collected them without theatrics, without a villain era, without ever needing to be the loudest team in the room. There is even a name for it, a way of carrying yourself that prizes fundamentals, class, and no drama. From your patch of the Midwest, that restraint is not modesty, it is the whole identity. Do it right, do it again, and let the trophies speak.",
    "why": [
      "You trust doing things properly more than doing them flashily. The craft and the standard are the point, and the result follows from them.",
      "Your loyalty runs through a place and a way of doing things, not through a marquee name. The institution is bigger than any one season.",
      "You have almost no appetite for chaos. Calm, fundamentals, and quiet confidence are how you were taught to win."
    ]
  },
  "ATL": {
    "name": "Atlanta Braves",
    "emoji": "🪓",
    "color": "#13274F",
    "tagline": "You won fourteen division titles in a row and have a single ring to show for the whole run. A nation adopted you on cable, then watched you find new ways to fall short, until you finally didn't.",
    "desc": "You were great for so long it became its own kind of heartbreak. Fourteen straight division titles, an unmatched run of regular-season dominance, and for years a lone championship at the end of it, the cruelty hiding inside the success. Beamed across the country on cable, you became a team adopted by people who had never been to Georgia, the closest thing the sport had to a national side. The wait for a second title stretched out long enough to ache, and then, when most fanbases would have stopped believing, you went out and got it.",
    "why": [
      "You hold a high standard over a long horizon. One season never defines you; the decade-long body of work does.",
      "You carry the particular ache of being very good for a very long time without the trophies to match. You know the gap between great and champion intimately.",
      "Your reach is national, not local. Belonging, for you, was always something broadcast to a whole country rather than rooted in one block."
    ]
  },
  "SF": {
    "name": "San Francisco Giants",
    "emoji": "🌉",
    "color": "#FD5A1E",
    "tagline": "You won championships in two different cities and a run of titles that somehow only ever arrived in even years. The pedigree is so deep it barely needs the present tense.",
    "desc": "Yours is the oldest kind of greatness, the kind that lives in the bones whether or not the current team can find it. You won titles in New York and then again by the bay, including a strange charmed run that arrived only in even-numbered years, the sort of thing that should not mean anything and somehow does. Your park sits on cold water where kayakers wait for home runs to splash down, and statues of legends ring the gates. The present can sputter, the way it has lately. The lineage does not need it to. The show was always in the blood.",
    "why": [
      "You lean on pedigree more than on present-day hunger. The history is so rich it carries the identity even through lean years.",
      "You have a soft spot for fate and pattern, the romance of a thing that cannot be explained but keeps coming true.",
      "Your sense of place is total: a specific cold, a specific water, a specific lineage that no relocation ever fully erased."
    ]
  },
  "CIN": {
    "name": "Cincinnati Reds",
    "emoji": "🔴",
    "color": "#C6011F",
    "tagline": "You were the first professional team there ever was, and a century and a half later you still play like every ground ball is a fistfight.",
    "desc": "You were here before anyone. The first team to ever pay its players, the oldest roots in the entire sport, a heritage that predates almost everything else baseball calls tradition. Out of that came a style with no patience for coasting, an all-out, head-first way of playing where effort is the whole creed and a routine grounder is treated like a collision worth winning. The dynasty they called the Machine ran on it. The present-day team drifts in and out of contention, the way old franchises do. The intensity in the blood never drifts anywhere.",
    "why": [
      "Your roots run deeper than almost anyone's, and that history is load-bearing for your whole identity.",
      "You play and live at full effort. Half-speed is the one unforgivable thing, on the field or off it.",
      "You carry real emotional heat. The intensity is the point, win or lose, and everyone near you feels it."
    ]
  },
  "CHC": {
    "name": "Chicago Cubs",
    "emoji": "🐻",
    "color": "#0E3386",
    "tagline": "You waited a hundred and eight years, longer than anyone alive, blamed a goat for half of it, and then on one extra-innings night you finally got to stop waiting.",
    "desc": "Your devotion was measured in generations, not seasons. A hundred and eight years passed between titles, the longest wait the sport has ever seen, long enough that fans blamed a billy goat turned away at the gate and half meant it. You loved an ivy-walled ballpark in the afternoon sun and kept showing up for a team that broke your heart on a loop. Then, on a rain-delayed extra-innings night, the waiting finally ended, and a city that had stopped expecting it came completely undone.",
    "why": [
      "Your loyalty is generational and unconditional. You stayed through a wait most people would not believe, because leaving was never once on the table.",
      "You belong to a place as much as a team. An ivy ballpark and its neighborhood are half the reason you show up at all.",
      "You hold heartbreak with humor and romance instead of bitterness. The long wait became a love story rather than a grievance."
    ]
  },
  "BOS": {
    "name": "Boston Red Sox",
    "emoji": "🧦",
    "color": "#BD3039",
    "tagline": "You went eighty-six years cursed, fell behind the team you hate most three games to none, and then won four straight to break both at once.",
    "desc": "Your faith was forged in the longest grudge the sport has. For eighty-six years you went without a title, blamed a long-ago sale that handed your best player to the team you hate most, and watched that rival stack up rings while you lost in ever crueler ways. Then came the autumn you fell behind them three games to none, a single loss from elimination, and won four in a row, the only team in history to do it, before taking the championship. The curse and the grudge broke in one run, and three more titles followed.",
    "why": [
      "Your loyalty runs hot and is bound up with a rivalry that defines you nearly as much as your own team does.",
      "Your emotional intensity is high and entirely public. Here, baseball is argued year-round and felt at full volume.",
      "You carry a long history of suffering that finally paid off, and the memory of the wait still sharpens every single win."
    ]
  },
  "CLE": {
    "name": "Cleveland Guardians",
    "emoji": "🛡️",
    "color": "#E31937",
    "tagline": "You hold the longest title wait of any team that has ever won one, you led a World Series three games to one and somehow lost it, and then you changed your name and kept right on waiting.",
    "desc": "Yours is the longest wait of any team that has actually won one. The last title came in 1948, and the closest you have come since was a World Series you led three games to one before it slipped away in extra innings. You even changed your name, to one drawn from the giant statues guarding a bridge downtown. Through it all you run a thrifty, clever machine that develops stars and then watches them leave for richer teams. The waiting simply continues.",
    "why": [
      "You stay loyal through the longest wait in the sport without once threatening to leave. The drought is part of who you are now.",
      "You respect the smart, resourceful way of doing things, building and developing rather than buying. You take pride in outthinking richer teams.",
      "You hold near misses with a stoic patience rather than rage. You learned to absorb the heartbreak and keep going."
    ]
  },
  "SEA": {
    "name": "Seattle Mariners",
    "emoji": "⚓",
    "color": "#005C5C",
    "tagline": "You are the only team that has never once reached the World Series, you were nine outs away last fall and watched it vanish, and somehow you keep showing up like next year is the year.",
    "desc": "You are the only team in the entire sport that has never once reached the World Series, the lone holdout after half a century of trying. You once won more games in a season than almost any team ever and still missed, and last fall you came nine outs from finally breaking through before a Game 7 ripped it away. None of it stops you. In the far corner of the map by the water, you show up every spring certain that this, at last, is the year.",
    "why": [
      "Your loyalty is almost stubborn. You keep believing through the single longest drought of its kind, with nothing yet to reward it.",
      "You feel the near misses deeply, last fall as sharp as any of it, and you carry the ache into the next season anyway.",
      "You belong to a specific, far-flung place, a corner of the map that makes the devotion feel like its own quiet pact."
    ]
  },
  "PIT": {
    "name": "Pittsburgh Pirates",
    "emoji": "🏴‍☠️",
    "color": "#FDB827",
    "tagline": "You hold the record for losing seasons in a row, you watch it all from maybe the prettiest ballpark in the country, and your loyalty was never once the thing in question. The spending was.",
    "desc": "Your loyalty was tested like almost no other: twenty straight losing seasons, a record across all of American sport, and an ownership that long seemed to treat not spending as the plan. You answer it by showing up anyway, to a ballpark on the river so lovely that visitors come just to see it. You carry a number twenty-one once worn by a man who died bringing relief to strangers, and a song about being family. Even when a generational arm finally arrived, the wallet stayed shut. You stayed too.",
    "why": [
      "Your loyalty is close to unconditional, tested by the longest stretch of losing in American sport and unbroken by it.",
      "You belong to a place and a ballpark as much as a team. The river, the city, the view are half of why you keep coming.",
      "You separate love for the team from trust in the people who run it. You can adore the one while having no faith in the other."
    ]
  },
  "SD": {
    "name": "San Diego Padres",
    "emoji": "⛪",
    "color": "#4E2A1E",
    "tagline": "You are a small-market team that spends like a superpower out of pure want, you have reached the very last stage twice and lost both, and you would give anything for the first ring you have never held.",
    "desc": "You are a small-market team that spends like a superpower, not out of arrogance but out of pure, undisguised want. You wear brown and gold like nobody else and you have chased a first championship harder than teams with three times your history, and twice you have reached the very last stage and come away with nothing. The man who pushed that ambition hardest did not live to see it finished. So you keep swinging for it all, every winter, burning everything you have on the ring you have never once held.",
    "why": [
      "Your ambition is huge and a little reckless, the kind that bets everything on a chance rather than playing it safe.",
      "You feel the want intensely. The chase itself is emotional for you, not a cold calculation.",
      "You carry a streak of glorious chaos, willing to gamble big and live with the swings, because the dream is worth it."
    ]
  },
  "COL": {
    "name": "Colorado Rockies",
    "emoji": "🏔️",
    "color": "#4E4191",
    "tagline": "You play a mile above everyone else, where the ball flies and the rules of the game bend, and in all these years you have reached the World Series exactly once and never solved the thin air.",
    "desc": "You play a mile above everyone else, where the thin air makes baseballs fly and bends the basic rules of the game in ways no other team has to reckon with. It is a beautiful, brutal puzzle, and in all your years you have never solved it. You reached the World Series exactly once, on a charmed October run, and were swept once you arrived. Mostly you have lived far from contention. But the mountains are yours, the altitude is yours, and nobody else plays the game in air like this.",
    "why": [
      "You are shaped by a circumstance no one else shares, and you have made peace with how strange and hard it is.",
      "Your sense of place is elemental: the mountains, the altitude, a setting that defines you more than any trophy.",
      "You hold modest expectations without bitterness. You know the deck is oddly stacked and you show up anyway."
    ]
  },
  "ATH": {
    "name": "Athletics",
    "emoji": "🐘",
    "color": "#006341",
    "tagline": "You wrote the book on winning with no money, you did it in green and gold for a town that loved you, and then they took the name off the city and left you with no home at all.",
    "desc": "You are the original underdog with a calculator, the team that learned to beat the richest clubs in the sport without the money to match them, and you did it in green and gold for a city that adored you. The method you invented gets copied everywhere now. Then ownership pulled the team out of that city entirely, dropped the place-name, and sent you to play in a borrowed minor-league park while a new home rises somewhere you never chose. The colors stay. So does the grudge.",
    "why": [
      "You take real pride in outthinking people with deeper pockets. Doing more with less is not a constraint to you, it is the whole sport.",
      "Your loyalty is to the colors and the idea more than to whoever owns the team. You can love the badge and resent the people moving it.",
      "You carry a genuine grievance under the scrappiness. Something that was yours got taken, and you have not made peace with it."
    ]
  },
  "TB": {
    "name": "Tampa Bay Rays",
    "emoji": "☀️",
    "color": "#092C5C",
    "tagline": "You run one of the smallest budgets in the game and somehow keep beating teams that spend five times more, even after a hurricane tore the roof clean off your home.",
    "desc": "You have spent your whole existence proving money is not the same as brains. On one of the lowest payrolls in the sport, in the toughest division it has, you keep churning out contenders and have reached the last stage twice on a budget that should not allow it. You have never drawn big crowds, and a hurricane once tore the roof off your home and sent you to play a full season in someone else's park. None of it slows the machine. You reload and beat the rich teams again.",
    "why": [
      "You believe brains beat budget, and you have the receipts. Outsmarting wealthier rivals is your default setting.",
      "You are unsentimental and adaptable. Upheaval that would rattle other teams, even losing your own building, you simply route around.",
      "You quietly expect to compete every single year despite every reason not to, and you are usually right."
    ]
  },
  "MIL": {
    "name": "Milwaukee Brewers",
    "emoji": "🍺",
    "color": "#FFC52F",
    "tagline": "You are a small city with a small budget that just refuses to stop winning, and you do it all with a beer in hand and a sausage race in the fifth inning.",
    "desc": "You are proof a small city with a small budget can simply refuse to lose. You ship your best players to richer teams every winter and keep right on winning the division, building contenders out of pitching, development, and stubbornness. And you do it with more joy than almost anyone, a mascot who slides into a giant beer mug and a race of costumed sausages in the middle of every game. Cheap teams are supposed to rebuild and wait. You just keep showing up good.",
    "why": [
      "You make a virtue of resourcefulness, building winners out of what richer teams discard and taking real pride in it.",
      "You refuse to let small-market reality lower your expectations. Rebuilding and waiting is for other people.",
      "You carry your success lightly and joyfully. Winning is supposed to be fun, and you make sure it is."
    ]
  },
  "MIN": {
    "name": "Minnesota Twins",
    "emoji": "⭐",
    "color": "#D31145",
    "tagline": "You won two of the most dramatic World Series ever played, both at home with thousands of white hankies spinning in a roaring dome, then lost eighteen straight playoff games, a record, before you finally broke the spell.",
    "desc": "You won two of the most dramatic World Series the sport has staged, both at home in a deafening indoor dome with thousands of white hankies spinning in the air, one ending on a tenth-inning Game 7 they still call the best ever. Then the other side took over: eighteen straight playoff losses across two decades, a record nobody wanted, the October futility becoming its own grim joke, until at last you broke it. Stoic, northern, and patient, you take the cold and the heartbreak in stride.",
    "why": [
      "You hold both glory and grief without much drama. Stoicism is your native setting, in good times and bad.",
      "Your roots run deep into a specific northern place, its cold, its understatement, its quiet pride.",
      "You have learned to absorb heartbreak and keep showing up, the long October futility never quite killing the faith."
    ]
  },
  "KC": {
    "name": "Kansas City Royals",
    "emoji": "👑",
    "color": "#004687",
    "tagline": "You built a championship out of speed, contact, and a bullpen nobody could touch, and you did it under the only fountains in the game, in a blue that has not changed in fifty years.",
    "desc": "You proved a thing the sport had half forgotten: that you can win it all on speed, contact, defense, and a bullpen that simply shut the door, without the home runs and the payroll everyone else chased. You did it in a blue unchanged in half a century, under the only fountains in the game, in a ballpark people travel to just to see the water. There was a long drought before that ring and struggle since. But the way you won, small-ball and relentless and team-first, only you can really claim it.",
    "why": [
      "You believe in the team-first, fundamentals-first way of winning, the unglamorous craft over the highlight reel.",
      "You take pride in a distinctive identity and a look that has stayed loyal to itself for fifty years.",
      "You hold modest, patient expectations shaped by long droughts, and you savor the rare summit all the more for it."
    ]
  },
  "PHI": {
    "name": "Philadelphia Phillies",
    "emoji": "🔔",
    "color": "#E81828",
    "tagline": "You are the toughest crowd in the sport, the one that famously booed Santa Claus and will boo its own heroes too, because around here love and accountability are the exact same thing.",
    "desc": "You are the most honest crowd in the sport, and honest here means brutal. This is the fanbase that once booed Santa Claus and has booed its own stars ever since, not from cruelty but from a refusal to pretend. You love loud and you boo loud, and you expect the effort to match the feeling in the stands. When it all comes together, the noise at home is something opponents dread. Holding your heroes to account is just another way you love them.",
    "why": [
      "Your emotion runs loud and unfiltered. You feel every game at full volume and you do not hide it.",
      "You hold the people you love to a high standard, and you treat honesty, even harsh honesty, as a form of devotion.",
      "You belong to a fierce collective. The crowd, the noise, the shared intensity are central to how you experience the game."
    ]
  },
  "DET": {
    "name": "Detroit Tigers",
    "emoji": "🐯",
    "color": "#0C2340",
    "tagline": "You come from the city that put the world on wheels and got knocked down harder than most, and you wear an old English letter that means grind, rebuild, and never quit on a town.",
    "desc": "You come from the city that built the American car and then took the worst of its collapse, and your baseball carries all of it: the grind, the toughness, the refusal to be counted out. You wear an old English letter unchanged in a century, the same one your grandparents wore through the good decades and the brutal ones. You have won it all and you have also lost a hundred and nineteen games in a single year. What stays constant is the work. In Detroit, you do not quit on the team or the town.",
    "why": [
      "You define yourself by grit and the willingness to grind through hard times rather than by glamour.",
      "Your loyalty is bound up with a place and its working-class character, through booms and busts alike.",
      "You hold steady when things go wrong. Getting knocked down is just the setup for getting back up."
    ]
  },
  "CWS": {
    "name": "Chicago White Sox",
    "emoji": "SOX",
    "color": "#A6AEB2",
    "tagline": "You are the South Side, blue collar and chip on your shoulder, the half of the city the postcards skip. You won it all in 2005, then lost more games in a season than any team in modern history. You are still here.",
    "desc": "You are the South Side, the half of Chicago the postcards skip, blue collar and proud of the chip on your shoulder. You broke an eighty-eight-year drought of your own in 2005 and barely got the attention for it. Then in 2024 you lost more games in a season than any team in the modern history of the sport, an almost unthinkable low, fans chanting at ownership to sell. Still you show up, because South Side loyalty was never about the standings. It was about not being the other team in town.",
    "why": [
      "You carry a chip on your shoulder and a little defiance, the pride of the overlooked half of a divided town.",
      "Your loyalty has nothing to do with winning. You stay through historic lows because the badge is identity, not entertainment.",
      "You hold a blue-collar toughness that absorbs even rock bottom and shows up again the next day."
    ]
  },
  "BAL": {
    "name": "Baltimore Orioles",
    "emoji": "🟠",
    "color": "#DF4601",
    "tagline": "You believe in doing the small things right and in showing up every single day without fail, the way a hometown great once did for a record two thousand six hundred straight games, all under the brick warehouse in the ballpark everyone else copied.",
    "desc": "You believe in the fundamentals as a creed, the small things done right, and in a kind of relentless reliability, the same spirit as the hometown legend who once played a record two thousand six hundred straight games without ever taking a day. Your ballpark, with its old brick warehouse looming over right field, was so beautiful it set off a wave of imitators across the sport. You have had brilliant runs and lean stretches both. The orange does not waver. Birdland shows up either way.",
    "why": [
      "You value craft and consistency, the unglamorous discipline of doing the basics right, over and over.",
      "You take pride in reliability and showing up, the quiet virtue of being someone people can count on.",
      "Your loyalty is steady and even-keeled, holding through the good years and the lean ones without much drama."
    ]
  },
  "NYM": {
    "name": "New York Mets",
    "emoji": "🍎",
    "color": "#002D72",
    "tagline": "You are New York's other team, the lovable, heartbroken one, and you just spent the biggest contract in the history of sports to pull a superstar out of the Bronx and prove you are nobody's little brother.",
    "desc": "You are New York's second team and you have built an identity out of it, lovable and luckless and self-aware, the home of miracle runs and slow-motion collapses. For decades you lived in the long shadow of the team across town. Then ownership decided enough was enough and signed the single biggest contract in the history of professional sports, pulling a superstar straight out of the Bronx, just to prove you would not be anyone's little brother. However it ends, glory or heartbreak, it will at least be loud.",
    "why": [
      "You wear underdog identity with humor and self-awareness, finding something lovable even in the heartbreak.",
      "Your emotions run high and public, the agony and the ecstasy both lived at full New York volume.",
      "You will go all in to prove a point. When it matters, you would rather swing big and risk the fall than settle for the shadow."
    ]
  },
  "MIA": {
    "name": "Miami Marlins",
    "emoji": "🐟",
    "color": "#00A3E0",
    "tagline": "You won the World Series twice as a young upstart and tore the team apart for parts both times before the confetti settled. In your teal and your heat, nothing beautiful is ever built to last.",
    "desc": "You are the team that proved you can win it all and still get torn down to the studs. Twice you came out of nowhere as a young upstart and won the World Series, and twice, almost before the parade ended, the roster got sold off for parts. You play in teal under the Miami sun, a city of beautiful temporary things, in front of crowds that learned the hard way not to get attached. The flash is real. So is the heartbreak baked into it. Nothing you build is quite allowed to last.",
    "why": [
      "You know glory and loss are often the same story, and you hold success loosely because you have seen it vanish fast.",
      "You have a flair for the sudden and spectacular, the out-of-nowhere run nobody saw coming.",
      "You guard your heart a little. Experience taught you not to get too attached to anything that looks permanent."
    ]
  },
  "TOR": {
    "name": "Toronto Blue Jays",
    "emoji": "🍁",
    "color": "#134A8E",
    "tagline": "You are not a city's team, you are a country's, the only one a whole nation gets to call its own. You went back to back once on a walk-off home run, and last fall you came within a single Game 7 of doing it again.",
    "desc": "You belong to an entire country, the only team a whole nation gets to claim, which makes every season a coast-to-coast affair from Vancouver to the Maritimes. You won it all twice in a row in the early nineties, the second sealed by a walk-off home run a whole country still remembers watching. Last fall you roared back to the brink, then lost a Game 7 in extra innings with the trophy almost in hand. The wait resumes, but it resumes for an entire nation at once.",
    "why": [
      "Your sense of belonging is huge in scale, tied to a whole country rather than a single city.",
      "You take real pride in being singular, the only one of your kind, representing something bigger than a hometown.",
      "You hold recent heartbreak close, last fall still raw, and you channel it into next year's hope."
    ]
  },
  "TEX": {
    "name": "Texas Rangers",
    "emoji": "🤠",
    "color": "#C0111F",
    "tagline": "You waited fifty years and came within one strike of it all, twice in the same heartbreaking night, before it slipped away. Then, a dozen years later, you finally finished the job and won the whole thing.",
    "desc": "For half a century you waited, and the cruelest part came in 2011, when you stood one strike away from the title, twice in the same night, and lost it anyway, the kind of heartbreak that scars a fanbase for a decade. Then in 2023 you went out and finished it, winning the whole thing on the road, the wait finally over. You are Texas-sized in everything, the hurt and the redemption both. You know exactly what the wait costs and exactly what it is worth.",
    "why": [
      "You understand delayed gratification deeply, having waited longer and more painfully than almost anyone before the payoff.",
      "You feel things big, the heartbreak and the triumph both lived at full Texas scale.",
      "You carry the hard-won wisdom of a fanbase that finally got its reward and will never take it for granted."
    ]
  },
  "AZ": {
    "name": "Arizona Diamondbacks",
    "emoji": "🐍",
    "color": "#30CED8",
    "tagline": "You were barely four years old as a franchise when you beat the most storied team in the sport on a last-inning hit in Game 7, the desert upstart nobody saw coming.",
    "desc": "You are the desert upstart who crashed the party fast. Barely four years into your existence, you beat the most storied franchise in the sport in a Game 7 decided in the final at-bat, a championship before most expansion teams find their feet. You play under a roof against the heat with a snake on your chest, and you have stayed scrappy and dangerous since, reaching the big stage again on nerve more than payroll. Nobody hands you anything in the desert. You take it.",
    "why": [
      "You move fast and fearlessly, willing to crash the establishment's party before anyone thinks you are ready.",
      "You take pride in punching above your weight, doing damage on nerve and smarts rather than resources.",
      "You carry an upstart's edge, the scrappy confidence of a team that has shocked the biggest names before."
    ]
  },
  "WSH": {
    "name": "Washington Nationals",
    "emoji": "🏛️",
    "color": "#14225A",
    "tagline": "You started life in Montreal, got uprooted and moved to the nation's capital, and then, after a season that began nineteen and thirty-one, you went on a run that ended with the whole city holding up a championship.",
    "desc": "Your story starts in another country. You were born as the Expos in Montreal, the team that gave Canada baseball before being uprooted to the nation's capital, leaving a city heartbroken behind you. For years in Washington you were good and never quite enough. Then came 2019, a season that opened nineteen and thirty-one, looked finished by May, and became a charmed run to the capital's first championship in nearly a century. You learned the hard way that the season is long and nothing is over until it is.",
    "why": [
      "You carry a relocated history and the resilience of a fanbase that has been through real upheaval and kept going.",
      "You never count anything as finished. A terrible start is just the first act, and you believe in the long comeback.",
      "You hold a hard-won patience, the knowledge that the worst beginnings can still turn into the best endings."
    ]
  },
  "HOU": {
    "name": "Houston Astros",
    "emoji": "🚀",
    "color": "#EB6E1F",
    "tagline": "You became the most relentless winning machine in the sport and the most hated, a title in 2017 that an asterisk still chases, another won clean in 2022, and a fanbase that stopped caring what the rest of you think.",
    "desc": "You turned baseball into a machine and stopped apologizing for being good at it. A title in 2017 that the rest of the sport will forever stamp with an asterisk, after a sign-stealing scheme came to light, then another won clean in 2022 with the whole world rooting against you. For most of a decade you reached the final four almost every year, the most relentless run of contention in the game. You are the team everyone loves to hate, and somewhere along the way you decided that was just fine.",
    "why": [
      "You are relentlessly driven to win and unbothered by the resentment that comes with it.",
      "You trust system and process over sentiment, the cold efficiency of a machine built to keep contending.",
      "You have made peace with being the villain. Outside hatred does not rattle you, it almost fuels you."
    ]
  },
  "LAA": {
    "name": "Los Angeles Angels",
    "emoji": "😇",
    "color": "#BA0021",
    "tagline": "You had two of the greatest players alive on the same team and never won a single October game with them, and then one left for the team up the freeway and won it all twice. You are still waiting under the halo.",
    "desc": "You have spent a generation watching greatness go to waste. You rostered two of the finest players the sport ever produced, at the same time, and never won a single playoff game with them. You have not been to October in over a decade. Then one of those talents left for the team up the freeway and immediately won it all, twice, a gut-punch almost too cruel to script. You have a title, back in 2002, and the lit halo still stands. Mostly you wait, loyal to a team that broke your heart with riches it could not use.",
    "why": [
      "Your loyalty is remarkable and a little tragic, staying devoted through a long drought and squandered greatness.",
      "You know the particular pain of wasted potential, of having everything you needed and still coming up empty.",
      "You keep the faith anyway, holding onto hope and a single old championship through years that tested both."
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

const archetypeDesc = {
  "NYY": "Winning is not the goal, it is the floor. You hold twenty-seven titles, more than anyone in the sport, and somehow that only raised the bar instead of settling it. The pinstripes have meant the same thing in the Bronx for a hundred years, and you wear them like a standard everyone else is measured against. Half the sport copies you and the other half roots against you, and you have never once mistaken either for a reason to apologize. A great season without a parade is just a longer way to come up short.",
  "LAD": "You buy the best and you win, and you have made your peace with everyone hating you for it. The latest titles came back to back, the first repeat in a quarter century, and the writers called it inevitable like it was an insult, so you took it as a compliment. Underneath the money is an older nerve, a team that broke a borough's heart by leaving Brooklyn and carried the number forty-two west as a promise. You do not pretend it was close. You stacked the deck, said so out loud, and collected the trophy anyway.",
  "STL": "You win the quiet way, and you believe the quiet way is the only one that counts. Eleven championships sit in your history, more than any team outside New York, and you collected them without theatrics, without a villain era, without ever needing to be the loudest team in the room. There is even a name for it, a way of carrying yourself that prizes fundamentals, class, and no drama. From your patch of the Midwest, that restraint is not modesty, it is the whole identity. Do it right, do it again, and let the trophies speak.",
  "ATL": "You were great for so long it became its own kind of heartbreak. Fourteen straight division titles, an unmatched run of regular-season dominance, and for years a lone championship at the end of it, the cruelty hiding inside the success. Beamed across the country on cable, you became a team adopted by people who had never been to Georgia, the closest thing the sport had to a national side. The wait for a second title stretched out long enough to ache, and then, when most fanbases would have stopped believing, you went out and got it.",
  "SF": "Yours is the oldest kind of greatness, the kind that lives in the bones whether or not the current team can find it. You won titles in New York and then again by the bay, including a strange charmed run that arrived only in even-numbered years, the sort of thing that should not mean anything and somehow does. Your park sits on cold water where kayakers wait for home runs to splash down, and statues of legends ring the gates. The present can sputter, the way it has lately. The lineage does not need it to. The show was always in the blood.",
  "CIN": "You were here before anyone. The first team to ever pay its players, the oldest roots in the entire sport, a heritage that predates almost everything else baseball calls tradition. Out of that came a style with no patience for coasting, an all-out, head-first way of playing where effort is the whole creed and a routine grounder is treated like a collision worth winning. The dynasty they called the Machine ran on it. The present-day team drifts in and out of contention, the way old franchises do. The intensity in the blood never drifts anywhere.",
  "CHC": "Your devotion was measured in generations, not seasons. A hundred and eight years passed between titles, the longest wait the sport has ever seen, long enough that fans blamed a billy goat turned away at the gate and half meant it. You loved an ivy-walled ballpark in the afternoon sun and kept showing up for a team that broke your heart on a loop. Then, on a rain-delayed extra-innings night, the waiting finally ended, and a city that had stopped expecting it came completely undone.",
  "BOS": "Your faith was forged in the longest grudge the sport has. For eighty-six years you went without a title, blamed a long-ago sale that handed your best player to the team you hate most, and watched that rival stack up rings while you lost in ever crueler ways. Then came the autumn you fell behind them three games to none, a single loss from elimination, and won four in a row, the only team in history to do it, before taking the championship. The curse and the grudge broke in one run, and three more titles followed.",
  "CLE": "Yours is the longest wait of any team that has actually won one. The last title came in 1948, and the closest you have come since was a World Series you led three games to one before it slipped away in extra innings. You even changed your name, to one drawn from the giant statues guarding a bridge downtown. Through it all you run a thrifty, clever machine that develops stars and then watches them leave for richer teams. The waiting simply continues.",
  "SEA": "You are the only team in the entire sport that has never once reached the World Series, the lone holdout after half a century of trying. You once won more games in a season than almost any team ever and still missed, and last fall you came nine outs from finally breaking through before a Game 7 ripped it away. None of it stops you. In the far corner of the map by the water, you show up every spring certain that this, at last, is the year.",
  "PIT": "Your loyalty was tested like almost no other: twenty straight losing seasons, a record across all of American sport, and an ownership that long seemed to treat not spending as the plan. You answer it by showing up anyway, to a ballpark on the river so lovely that visitors come just to see it. You carry a number twenty-one once worn by a man who died bringing relief to strangers, and a song about being family. Even when a generational arm finally arrived, the wallet stayed shut. You stayed too.",
  "SD": "You are a small-market team that spends like a superpower, not out of arrogance but out of pure, undisguised want. You wear brown and gold like nobody else and you have chased a first championship harder than teams with three times your history, and twice you have reached the very last stage and come away with nothing. The man who pushed that ambition hardest did not live to see it finished. So you keep swinging for it all, every winter, burning everything you have on the ring you have never once held.",
  "COL": "You play a mile above everyone else, where the thin air makes baseballs fly and bends the basic rules of the game in ways no other team has to reckon with. It is a beautiful, brutal puzzle, and in all your years you have never solved it. You reached the World Series exactly once, on a charmed October run, and were swept once you arrived. Mostly you have lived far from contention. But the mountains are yours, the altitude is yours, and nobody else plays the game in air like this.",
  "ATH": "You are the original underdog with a calculator, the team that learned to beat the richest clubs in the sport without the money to match them, and you did it in green and gold for a city that adored you. The method you invented gets copied everywhere now. Then ownership pulled the team out of that city entirely, dropped the place-name, and sent you to play in a borrowed minor-league park while a new home rises somewhere you never chose. The colors stay. So does the grudge.",
  "TB": "You have spent your whole existence proving money is not the same as brains. On one of the lowest payrolls in the sport, in the toughest division it has, you keep churning out contenders and have reached the last stage twice on a budget that should not allow it. You have never drawn big crowds, and a hurricane once tore the roof off your home and sent you to play a full season in someone else's park. None of it slows the machine. You reload and beat the rich teams again.",
  "MIL": "You are proof a small city with a small budget can simply refuse to lose. You ship your best players to richer teams every winter and keep right on winning the division, building contenders out of pitching, development, and stubbornness. And you do it with more joy than almost anyone, a mascot who slides into a giant beer mug and a race of costumed sausages in the middle of every game. Cheap teams are supposed to rebuild and wait. You just keep showing up good.",
  "MIN": "You won two of the most dramatic World Series the sport has staged, both at home in a deafening indoor dome with thousands of white hankies spinning in the air, one ending on a tenth-inning Game 7 they still call the best ever. Then the other side took over: eighteen straight playoff losses across two decades, a record nobody wanted, the October futility becoming its own grim joke, until at last you broke it. Stoic, northern, and patient, you take the cold and the heartbreak in stride.",
  "KC": "You proved a thing the sport had half forgotten: that you can win it all on speed, contact, defense, and a bullpen that simply shut the door, without the home runs and the payroll everyone else chased. You did it in a blue unchanged in half a century, under the only fountains in the game, in a ballpark people travel to just to see the water. There was a long drought before that ring and struggle since. But the way you won, small-ball and relentless and team-first, only you can really claim it.",
  "PHI": "You are the most honest crowd in the sport, and honest here means brutal. This is the fanbase that once booed Santa Claus and has booed its own stars ever since, not from cruelty but from a refusal to pretend. You love loud and you boo loud, and you expect the effort to match the feeling in the stands. When it all comes together, the noise at home is something opponents dread. Holding your heroes to account is just another way you love them.",
  "DET": "You come from the city that built the American car and then took the worst of its collapse, and your baseball carries all of it: the grind, the toughness, the refusal to be counted out. You wear an old English letter unchanged in a century, the same one your grandparents wore through the good decades and the brutal ones. You have won it all and you have also lost a hundred and nineteen games in a single year. What stays constant is the work. In Detroit, you do not quit on the team or the town.",
  "CWS": "You are the South Side, the half of Chicago the postcards skip, blue collar and proud of the chip on your shoulder. You broke an eighty-eight-year drought of your own in 2005 and barely got the attention for it. Then in 2024 you lost more games in a season than any team in the modern history of the sport, an almost unthinkable low, fans chanting at ownership to sell. Still you show up, because South Side loyalty was never about the standings. It was about not being the other team in town.",
  "BAL": "You believe in the fundamentals as a creed, the small things done right, and in a kind of relentless reliability, the same spirit as the hometown legend who once played a record two thousand six hundred straight games without ever taking a day. Your ballpark, with its old brick warehouse looming over right field, was so beautiful it set off a wave of imitators across the sport. You have had brilliant runs and lean stretches both. The orange does not waver. Birdland shows up either way.",
  "NYM": "You are New York's second team and you have built an identity out of it, lovable and luckless and self-aware, the home of miracle runs and slow-motion collapses. For decades you lived in the long shadow of the team across town. Then ownership decided enough was enough and signed the single biggest contract in the history of professional sports, pulling a superstar straight out of the Bronx, just to prove you would not be anyone's little brother. However it ends, glory or heartbreak, it will at least be loud.",
  "MIA": "You are the team that proved you can win it all and still get torn down to the studs. Twice you came out of nowhere as a young upstart and won the World Series, and twice, almost before the parade ended, the roster got sold off for parts. You play in teal under the Miami sun, a city of beautiful temporary things, in front of crowds that learned the hard way not to get attached. The flash is real. So is the heartbreak baked into it. Nothing you build is quite allowed to last.",
  "TOR": "You belong to an entire country, the only team a whole nation gets to claim, which makes every season a coast-to-coast affair from Vancouver to the Maritimes. You won it all twice in a row in the early nineties, the second sealed by a walk-off home run a whole country still remembers watching. Last fall you roared back to the brink, then lost a Game 7 in extra innings with the trophy almost in hand. The wait resumes, but it resumes for an entire nation at once.",
  "TEX": "For half a century you waited, and the cruelest part came in 2011, when you stood one strike away from the title, twice in the same night, and lost it anyway, the kind of heartbreak that scars a fanbase for a decade. Then in 2023 you went out and finished it, winning the whole thing on the road, the wait finally over. You are Texas-sized in everything, the hurt and the redemption both. You know exactly what the wait costs and exactly what it is worth.",
  "AZ": "You are the desert upstart who crashed the party fast. Barely four years into your existence, you beat the most storied franchise in the sport in a Game 7 decided in the final at-bat, a championship before most expansion teams find their feet. You play under a roof against the heat with a snake on your chest, and you have stayed scrappy and dangerous since, reaching the big stage again on nerve more than payroll. Nobody hands you anything in the desert. You take it.",
  "WSH": "Your story starts in another country. You were born as the Expos in Montreal, the team that gave Canada baseball before being uprooted to the nation's capital, leaving a city heartbroken behind you. For years in Washington you were good and never quite enough. Then came 2019, a season that opened nineteen and thirty-one, looked finished by May, and became a charmed run to the capital's first championship in nearly a century. You learned the hard way that the season is long and nothing is over until it is.",
  "HOU": "You turned baseball into a machine and stopped apologizing for being good at it. A title in 2017 that the rest of the sport will forever stamp with an asterisk, after a sign-stealing scheme came to light, then another won clean in 2022 with the whole world rooting against you. For most of a decade you reached the final four almost every year, the most relentless run of contention in the game. You are the team everyone loves to hate, and somewhere along the way you decided that was just fine.",
  "LAA": "You have spent a generation watching greatness go to waste. You rostered two of the finest players the sport ever produced, at the same time, and never won a single playoff game with them. You have not been to October in over a decade. Then one of those talents left for the team up the freeway and immediately won it all, twice, a gut-punch almost too cruel to script. You have a title, back in 2002, and the lit halo still stands. Mostly you wait, loyal to a team that broke your heart with riches it could not use."
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
    "LAD": "",
    "STL": "",
    "HOU": "",
    "ATL": ""
  },
  "LAD": {
    "NYY": "",
    "ATL": "",
    "HOU": "",
    "NYM": ""
  },
  "STL": {
    "ATL": "",
    "NYY": "",
    "SF": "",
    "CHC": ""
  },
  "ATL": {
    "STL": "",
    "LAD": "",
    "NYY": "",
    "PHI": ""
  },
  "SF": {
    "STL": "",
    "LAD": "",
    "CHC": "",
    "NYY": ""
  },
  "CIN": {
    "STL": "",
    "PIT": "",
    "DET": "",
    "MIL": ""
  },
  "CHC": {
    "BOS": "",
    "PIT": "",
    "SF": "",
    "STL": ""
  },
  "BOS": {
    "CHC": "",
    "PHI": "",
    "STL": "",
    "CIN": ""
  },
  "CLE": {
    "SEA": "",
    "PIT": "",
    "MIN": "",
    "DET": ""
  },
  "SEA": {
    "CLE": "",
    "PIT": "",
    "COL": "",
    "TEX": ""
  },
  "PIT": {
    "SEA": "",
    "CLE": "",
    "CIN": "",
    "DET": ""
  },
  "SD": {
    "NYM": "",
    "LAD": "",
    "AZ": "",
    "TEX": ""
  },
  "COL": {
    "SEA": "",
    "PIT": "",
    "AZ": "",
    "MIA": ""
  },
  "ATH": {
    "TB": "",
    "CLE": "",
    "MIL": "",
    "SD": ""
  },
  "TB": {
    "ATH": "",
    "CLE": "",
    "MIL": "",
    "HOU": ""
  },
  "MIL": {
    "STL": "",
    "KC": "",
    "TB": "",
    "CIN": ""
  },
  "MIN": {
    "CLE": "",
    "KC": "",
    "DET": "",
    "MIL": ""
  },
  "KC": {
    "MIN": "",
    "CLE": "",
    "MIL": "",
    "STL": ""
  },
  "PHI": {
    "NYM": "",
    "BOS": "",
    "ATL": "",
    "CWS": ""
  },
  "DET": {
    "CLE": "",
    "CIN": "",
    "CWS": "",
    "MIN": ""
  },
  "CWS": {
    "CLE": "",
    "DET": "",
    "PIT": "",
    "CHC": ""
  },
  "BAL": {
    "STL": "",
    "CLE": "",
    "MIL": "",
    "TB": ""
  },
  "NYM": {
    "PHI": "",
    "SD": "",
    "LAD": "",
    "CHC": ""
  },
  "MIA": {
    "TB": "",
    "SD": "",
    "AZ": "",
    "COL": ""
  },
  "TOR": {
    "ATL": "",
    "BOS": "",
    "NYY": "",
    "SEA": ""
  },
  "TEX": {
    "HOU": "",
    "SF": "",
    "SD": "",
    "SEA": ""
  },
  "AZ": {
    "TEX": "",
    "MIA": "",
    "SD": "",
    "COL": ""
  },
  "WSH": {
    "AZ": "",
    "ATL": "",
    "MIA": "",
    "HOU": ""
  },
  "HOU": {
    "LAD": "",
    "NYY": "",
    "TB": "",
    "TEX": ""
  },
  "LAA": {
    "SEA": "",
    "PIT": "",
    "SD": "",
    "TEX": ""
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
      "DET": 2,
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
      "MIN": 2
    }
  },
  "mlb_q2": {
    "1": {
      "KC": 3,
      "TEX": 3,
      "WSH": 3,
      "AZ": 3,
      "BOS": 3,
      "CHC": 3,
      "NYM": 3,
      "PHI": 3,
      "TOR": 3
    },
    "2": {
      "KC": 2,
      "TEX": 2,
      "WSH": 2,
      "AZ": 2,
      "BOS": 2,
      "CHC": 2,
      "NYM": 2,
      "PHI": 2,
      "TOR": 2
    },
    "4": {
      "PIT": 2,
      "SEA": 2,
      "COL": 2,
      "CLE": 2,
      "ATH": 2,
      "MIA": 2,
      "MIN": 2,
      "LAA": 2,
      "CWS": 2
    },
    "5": {
      "PIT": 3,
      "SEA": 3,
      "COL": 3,
      "CLE": 3,
      "ATH": 3,
      "MIA": 3,
      "MIN": 3,
      "LAA": 3,
      "CWS": 3
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
      "SEA": 2,
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
      "CHC": 3,
      "BOS": 3,
      "PHI": 3,
      "PIT": 3,
      "NYM": 3,
      "TOR": 3,
      "KC": 3,
      "CIN": 3
    },
    "2": {
      "CHC": 2,
      "BOS": 2,
      "PHI": 2,
      "PIT": 2,
      "NYM": 2,
      "TOR": 2,
      "KC": 2,
      "CIN": 2
    },
    "4": {
      "TB": 2,
      "ATH": 2,
      "HOU": 2,
      "LAD": 2,
      "CLE": 2,
      "STL": 2,
      "BAL": 2,
      "MIL": 2
    },
    "5": {
      "TB": 3,
      "ATH": 3,
      "HOU": 3,
      "LAD": 3,
      "CLE": 3,
      "STL": 3,
      "BAL": 3,
      "MIL": 3
    }
  },
  "mlb_q5": {
    "A": {
      "CHC": 2,
      "PIT": 2,
      "SEA": 2,
      "CLE": 2,
      "COL": 2
    },
    "B": {
      "NYM": 2,
      "PHI": 2,
      "LAA": 2,
      "SD": 2,
      "TOR": 2
    },
    "C": {
      "KC": 2,
      "AZ": 2,
      "MIA": 2,
      "WSH": 2
    },
    "D": {
      "BAL": 2,
      "DET": 2,
      "CWS": 2,
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
      "SEA": 2,
      "COL": 2,
      "MIA": 2,
      "WSH": 2
    }
  },
  "mlb_q7": {
    "A": {
      "CHC": 2,
      "PIT": 2,
      "SEA": 2,
      "COL": 2,
      "CIN": 2
    },
    "B": {
      "NYM": 2,
      "PHI": 2,
      "LAA": 2,
      "SD": 2,
      "TOR": 2
    },
    "C": {
      "BOS": 2,
      "KC": 2,
      "TEX": 2,
      "WSH": 2,
      "AZ": 2,
      "STL": 2,
      "MIL": 2,
      "DET": 2
    },
    "D": {
      "CLE": 2,
      "ATH": 2,
      "MIA": 2,
      "CWS": 2,
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
      "MIA": 2
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
      "TB": 3,
      "ATH": 3,
      "MIL": 3,
      "CLE": 3,
      "MIN": 3,
      "KC": 3,
      "PIT": 3,
      "BAL": 3,
      "COL": 3,
      "MIA": 3,
      "WSH": 3,
      "DET": 3
    },
    "2": {
      "TB": 2,
      "ATH": 2,
      "MIL": 2,
      "CLE": 2,
      "MIN": 2,
      "KC": 2,
      "PIT": 2,
      "BAL": 2,
      "COL": 2,
      "MIA": 2,
      "WSH": 2,
      "DET": 2
    },
    "4": {
      "NYY": 2,
      "LAD": 2,
      "NYM": 2,
      "SD": 2,
      "HOU": 2,
      "PHI": 2,
      "TEX": 2,
      "LAA": 2,
      "TOR": 2,
      "ATL": 2
    },
    "5": {
      "NYY": 3,
      "LAD": 3,
      "NYM": 3,
      "SD": 3,
      "HOU": 3,
      "PHI": 3,
      "TEX": 3,
      "LAA": 3,
      "TOR": 3,
      "ATL": 3
    }
  },
  "mlb_q10": {
    "A": {
      "CIN": 2,
      "NYY": 2,
      "SF": 2,
      "STL": 2
    },
    "B": {
      "LAD": 2,
      "ATL": 2,
      "BAL": 2,
      "STL": 2
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
      "PIT": 3,
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
      "LAD": 3,
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
  "CWS": "SOX",
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

const badgeUrls = {
  "NYY": "https://a.espncdn.com/i/teamlogos/mlb/500/nyy.png",
  "LAD": "https://a.espncdn.com/i/teamlogos/mlb/500/lad.png",
  "STL": "https://a.espncdn.com/i/teamlogos/mlb/500/stl.png",
  "ATL": "https://a.espncdn.com/i/teamlogos/mlb/500/atl.png",
  "SF": "https://a.espncdn.com/i/teamlogos/mlb/500/sf.png",
  "CIN": "https://a.espncdn.com/i/teamlogos/mlb/500/cin.png",
  "CHC": "https://a.espncdn.com/i/teamlogos/mlb/500/chc.png",
  "BOS": "https://a.espncdn.com/i/teamlogos/mlb/500/bos.png",
  "CLE": "https://a.espncdn.com/i/teamlogos/mlb/500/cle.png",
  "SEA": "https://a.espncdn.com/i/teamlogos/mlb/500/sea.png",
  "PIT": "https://a.espncdn.com/i/teamlogos/mlb/500/pit.png",
  "SD": "https://a.espncdn.com/i/teamlogos/mlb/500/sd.png",
  "COL": "https://a.espncdn.com/i/teamlogos/mlb/500/col.png",
  "ATH": "https://a.espncdn.com/i/teamlogos/mlb/500/ath.png",
  "TB": "https://a.espncdn.com/i/teamlogos/mlb/500/tb.png",
  "MIL": "https://a.espncdn.com/i/teamlogos/mlb/500/mil.png",
  "MIN": "https://a.espncdn.com/i/teamlogos/mlb/500/min.png",
  "KC": "https://a.espncdn.com/i/teamlogos/mlb/500/kc.png",
  "PHI": "https://a.espncdn.com/i/teamlogos/mlb/500/phi.png",
  "DET": "https://a.espncdn.com/i/teamlogos/mlb/500/det.png",
  "CWS": "https://a.espncdn.com/i/teamlogos/mlb/500/chw.png",
  "BAL": "https://a.espncdn.com/i/teamlogos/mlb/500/bal.png",
  "NYM": "https://a.espncdn.com/i/teamlogos/mlb/500/nym.png",
  "MIA": "https://a.espncdn.com/i/teamlogos/mlb/500/mia.png",
  "TOR": "https://a.espncdn.com/i/teamlogos/mlb/500/tor.png",
  "TEX": "https://a.espncdn.com/i/teamlogos/mlb/500/tex.png",
  "AZ": "https://a.espncdn.com/i/teamlogos/mlb/500/ari.png",
  "WSH": "https://a.espncdn.com/i/teamlogos/mlb/500/wsh.png",
  "HOU": "https://a.espncdn.com/i/teamlogos/mlb/500/hou.png",
  "LAA": "https://a.espncdn.com/i/teamlogos/mlb/500/laa.png"
};

const squadUrls = {};  // no per-team roster links yet; the View squad CTA stays hidden (data-gated)


export { moduleQuestions, teams, archetypes, teamTextColors, archetypeDesc, greats, vitalStats, nearlyGot, scoring, teamDims, CARD_BADGES, badgeUrls, squadUrls };
