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
    "code3": "NYY", "kitType": "solid", "secondaryColor": null,
    "name": "New York Yankees",
    "emoji": "🎩",
    "color": "#0C2340",
    "tagline": "Twenty-seven titles, and you still count anything short of the next one as a failure.",
    "desc": "Winning is not the goal, it is the floor. You hold twenty-seven titles, more than anyone in the sport, and somehow that only raised the bar instead of settling it. The pinstripes have meant the same thing in the Bronx for a hundred years, and you wear them like a standard everyone else is measured against. Half the sport copies you and the other half roots against you, and you have never once mistaken either for a reason to apologize. A great season without a parade is just a longer way to come up short.",
    "why": [
      "Your ambition sits at the ceiling and never moves. The target is the title, full stop, and a near miss reads to you as a loss with extra steps.",
      "You trust the machine over the moment. A century of winning got built on standards and repetition, not on hoping the magic shows up.",
      "You are at peace being the team everyone wants to beat. The contempt is just the sound of the rest of the league measuring itself against you."
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
      "Your ambition is total and your spending is shameless, and you see no contradiction between the two. If the best is for sale, you buy it.",
      "You back want with process. The richest roster still has to be built right, and you trust the system that turns money into rings.",
      "You carry history as fuel without letting it slow you down. The past matters, but the next title matters more."
    ]
  },
  "STL": {
    "code3": "STL", "kitType": "duo", "secondaryColor": "#0C2340",
    "name": "St. Louis Cardinals",
    "emoji": "🐦",
    "color": "#C41E3A",
    "tagline": "Eleven titles, almost no noise, and a deep belief in winning the right way.",
    "desc": "You win the quiet way, and you believe the quiet way is the only one that counts. Eleven championships sit in your history, more than any team outside New York, and you collected them without theatrics, without a villain era, without ever needing to be the loudest team in the room. There is even a name for it, a way of carrying yourself that prizes fundamentals, class, and no drama. From your patch of the Midwest, that restraint is not modesty, it is the whole identity. Do it right, do it again, and let the trophies speak.",
    "why": [
      "You trust doing things properly more than doing them flashily. The craft and the standard are the point, and the result follows from them.",
      "Your loyalty runs through a place and a way of doing things, not through a marquee name. The institution is bigger than any one season.",
      "You have almost no appetite for chaos. Calm, fundamentals, and quiet confidence are how you were taught to win."
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
      "You carry the particular ache of being very good for a very long time without the trophies to match. You know the gap between great and champion intimately.",
      "Your reach is national, not local. Belonging, for you, was always something broadcast to a whole country rather than rooted in one block."
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
      "You lean on pedigree more than on present-day hunger. The history is so rich it carries the identity even through lean years.",
      "You have a soft spot for fate and pattern, the romance of a thing that cannot be explained but keeps coming true.",
      "Your sense of place is total: a specific cold, a specific water, a specific lineage that no relocation ever fully erased."
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
      "Your roots run deeper than almost anyone's, and that history is load-bearing for your whole identity.",
      "You play and live at full effort. Half-speed is the one unforgivable thing, on the field or off it.",
      "You carry real emotional heat. The intensity is the point, win or lose, and everyone near you feels it."
    ]
  },
  "CHC": {
    "code3": "CHC", "kitType": "duo", "secondaryColor": "#CC3433",
    "name": "Chicago Cubs",
    "emoji": "🐻",
    "color": "#0E3386",
    "tagline": "A hundred and eight years, a goat to blame, and one extra-innings night that ended it.",
    "desc": "Your devotion was measured in generations, not seasons. A hundred and eight years passed between titles, the longest wait the sport has ever seen, long enough that fans blamed a billy goat turned away at the gate and half meant it. You loved an ivy-walled ballpark in the afternoon sun and kept showing up for a team that broke your heart on a loop. Then, on a rain-delayed extra-innings night, the waiting finally ended, and a city that had stopped expecting it came completely undone.",
    "why": [
      "Your loyalty is generational and unconditional. You stayed through a wait most people would not believe, because leaving was never once on the table.",
      "You belong to a place as much as a team. An ivy ballpark and its neighborhood are half the reason you show up at all.",
      "You hold heartbreak with humor and romance instead of bitterness. The long wait became a love story rather than a grievance."
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
      "Your loyalty runs hot and is bound up with a rivalry that defines you nearly as much as your own team does.",
      "Your emotional intensity is high and entirely public. Here, baseball is argued year-round and felt at full volume.",
      "You carry a long history of suffering that finally paid off, and the memory of the wait still sharpens every single win."
    ]
  },
  "CLE": {
    "code3": "CLE", "kitType": "duo", "secondaryColor": "#0C2340",
    "name": "Cleveland Guardians",
    "emoji": "🛡️",
    "color": "#E31937",
    "tagline": "The longest title wait of any team that's ever won one, and still you keep waiting.",
    "desc": "Yours is the longest wait of any team that has actually won one. The last title came in 1948, and the closest you have come since was a World Series you led three games to one before it slipped away in extra innings. You even changed your name, to one drawn from the giant statues guarding a bridge downtown. Through it all you run a thrifty, clever machine that develops stars and then watches them leave for richer teams. The waiting simply continues.",
    "why": [
      "You stay loyal through the longest wait in the sport without once threatening to leave. The drought is part of who you are now.",
      "You respect the smart, resourceful way of doing things, building and developing rather than buying. You take pride in outthinking richer teams.",
      "You hold near misses with a stoic patience rather than rage. You learned to absorb the heartbreak and keep going."
    ]
  },
  "SEA": {
    "code3": "SEA", "kitType": "duo", "secondaryColor": "#C4CED4",
    "name": "Seattle Mariners",
    "emoji": "⚓",
    "color": "#005C5C",
    "tagline": "The only team never to reach a World Series, still sure next year's the one.",
    "desc": "You are the only team in the entire sport that has never once reached the World Series, the lone holdout after half a century of trying. You once won more games in a season than almost any team ever and still missed, and last fall you came nine outs from finally breaking through before a Game 7 ripped it away. None of it stops you. In the far corner of the map by the water, you show up every spring certain that this, at last, is the year.",
    "why": [
      "Your loyalty is almost stubborn. You keep believing through the single longest drought of its kind, with nothing yet to reward it.",
      "You feel the near misses deeply, last fall as sharp as any of it, and you carry the ache into the next season anyway.",
      "You belong to a specific, far-flung place, a corner of the map that makes the devotion feel like its own quiet pact."
    ]
  },
  "PIT": {
    "code3": "PIT", "kitType": "duo", "secondaryColor": "#27251F",
    "name": "Pittsburgh Pirates",
    "emoji": "🏴‍☠️",
    "color": "#FDB827",
    "tagline": "A record run of losing seasons, watched from the prettiest ballpark in the game.",
    "desc": "Your loyalty was tested like almost no other: twenty straight losing seasons, a record across all of American sport, and an ownership that long seemed to treat not spending as the plan. You answer it by showing up anyway, to a ballpark on the river so lovely that visitors come just to see it. You carry a number twenty-one once worn by a man who died bringing relief to strangers, and a song about being family. Even when a generational arm finally arrived, the wallet stayed shut. You stayed too.",
    "why": [
      "Your loyalty is close to unconditional, tested by the longest stretch of losing in American sport and unbroken by it.",
      "You belong to a place and a ballpark as much as a team. The river, the city, the view are half of why you keep coming.",
      "You separate love for the team from trust in the people who run it. You can adore the one while having no faith in the other."
    ]
  },
  "SD": {
    "code3": "SDP", "kitType": "duo", "secondaryColor": "#FFC425",
    "name": "San Diego Padres",
    "emoji": "⛪",
    "color": "#4E2A1E",
    "tagline": "A small market that spends like a superpower, still chasing a first ring.",
    "desc": "You are a small-market team that spends like a superpower, not out of arrogance but out of pure, undisguised want. You wear brown and gold like nobody else and you have chased a first championship harder than teams with three times your history, and twice you have reached the very last stage and come away with nothing. The man who pushed that ambition hardest did not live to see it finished. So you keep swinging for it all, every winter, burning everything you have on the ring you have never once held.",
    "why": [
      "Your ambition is huge and a little reckless, the kind that bets everything on a chance rather than playing it safe.",
      "You feel the want intensely. The chase itself is emotional for you, not a cold calculation.",
      "You carry a streak of glorious chaos, willing to gamble big and live with the swings, because the dream is worth it."
    ]
  },
  "COL": {
    "code3": "COL", "kitType": "duo", "secondaryColor": "#C4CED4",
    "name": "Colorado Rockies",
    "emoji": "🏔️",
    "color": "#4E4191",
    "tagline": "You play a mile up where the ball flies, and you've never once solved your own thin air.",
    "desc": "You play a mile above everyone else, where the thin air makes baseballs fly and bends the basic rules of the game in ways no other team has to reckon with. It is a beautiful, brutal puzzle, and in all your years you have never solved it. You reached the World Series exactly once, on a charmed October run, and were swept once you arrived. Mostly you have lived far from contention. But the mountains are yours, the altitude is yours, and nobody else plays the game in air like this.",
    "why": [
      "You are shaped by a circumstance no one else shares, and you have made peace with how strange and hard it is.",
      "Your sense of place is elemental: the mountains, the altitude, a setting that defines you more than any trophy.",
      "You hold modest expectations without bitterness. You know the deck is oddly stacked and you show up anyway."
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
      "You take real pride in outthinking people with deeper pockets. Doing more with less is not a constraint to you, it is the whole sport.",
      "Your loyalty is to the colors and the idea more than to whoever owns the team. You can love the badge and resent the people moving it.",
      "You carry a genuine grievance under the scrappiness. Something that was yours got taken, and you have not made peace with it."
    ]
  },
  "TB": {
    "code3": "TBR", "kitType": "duo", "secondaryColor": "#8FBCE6",
    "name": "Tampa Bay Rays",
    "emoji": "☀️",
    "color": "#092C5C",
    "tagline": "One of the smallest budgets in the game, beating teams that spend five times more.",
    "desc": "You have spent your whole existence proving money is not the same as brains. On one of the lowest payrolls in the sport, in the toughest division it has, you keep churning out contenders and have reached the last stage twice on a budget that should not allow it. You have never drawn big crowds, and a hurricane once tore the roof off your home and sent you to play a full season in someone else's park. None of it slows the machine. You reload and beat the rich teams again.",
    "why": [
      "You believe brains beat budget, and you have the receipts. Outsmarting wealthier rivals is your default setting.",
      "You are unsentimental and adaptable. Upheaval that would rattle other teams, even losing your own building, you simply route around.",
      "You quietly expect to compete every single year despite every reason not to, and you are usually right."
    ]
  },
  "MIL": {
    "code3": "MIL", "kitType": "duo", "secondaryColor": "#12284B",
    "name": "Milwaukee Brewers",
    "emoji": "🍺",
    "color": "#FFC52F",
    "tagline": "A small city and a small budget that just refuses to stop winning, beer in hand.",
    "desc": "You are proof a small city with a small budget can simply refuse to lose. You ship your best players to richer teams every winter and keep right on winning the division, building contenders out of pitching, development, and stubbornness. And you do it with more joy than almost anyone, a mascot who slides into a giant beer mug and a race of costumed sausages in the middle of every game. Cheap teams are supposed to rebuild and wait. You just keep showing up good.",
    "why": [
      "You make a virtue of resourcefulness, building winners out of what richer teams discard and taking real pride in it.",
      "You refuse to let small-market reality lower your expectations. Rebuilding and waiting is for other people.",
      "You carry your success lightly and joyfully. Winning is supposed to be fun, and you make sure it is."
    ]
  },
  "MIN": {
    "code3": "MIN", "kitType": "duo", "secondaryColor": "#002B5C",
    "name": "Minnesota Twins",
    "emoji": "⭐",
    "color": "#D31145",
    "tagline": "Two dramatic titles under a roaring dome, then a record run of October losses.",
    "desc": "You won two of the most dramatic World Series the sport has staged, both at home in a deafening indoor dome with thousands of white hankies spinning in the air, one ending on a tenth-inning Game 7 they still call the best ever. Then the other side took over: eighteen straight playoff losses across two decades, a record nobody wanted, the October futility becoming its own grim joke, until at last you broke it. Stoic, northern, and patient, you take the cold and the heartbreak in stride.",
    "why": [
      "You hold both glory and grief without much drama. Stoicism is your native setting, in good times and bad.",
      "Your roots run deep into a specific northern place, its cold, its understatement, its quiet pride.",
      "You have learned to absorb heartbreak and keep showing up, the long October futility never quite killing the faith."
    ]
  },
  "KC": {
    "code3": "KCR", "kitType": "duo", "secondaryColor": "#BD9B60",
    "name": "Kansas City Royals",
    "emoji": "👑",
    "color": "#004687",
    "tagline": "A title built on speed and contact, under the only fountains in the game.",
    "desc": "You proved a thing the sport had half forgotten: that you can win it all on speed, contact, defense, and a bullpen that simply shut the door, without the home runs and the payroll everyone else chased. You did it in a blue unchanged in half a century, under the only fountains in the game, in a ballpark people travel to just to see the water. There was a long drought before that ring and struggle since. But the way you won, small-ball and relentless and team-first, only you can really claim it.",
    "why": [
      "You believe in the team-first, fundamentals-first way of winning, the unglamorous craft over the highlight reel.",
      "You take pride in a distinctive identity and a look that has stayed loyal to itself for fifty years.",
      "You hold modest, patient expectations shaped by long droughts, and you savor the rare summit all the more for it."
    ]
  },
  "PHI": {
    "code3": "PHI", "kitType": "duo", "secondaryColor": "#284898",
    "name": "Philadelphia Phillies",
    "emoji": "🔔",
    "color": "#E81828",
    "tagline": "The toughest crowd in the sport, the one that booed Santa and means it as love.",
    "desc": "You are the most honest crowd in the sport, and honest here means brutal. This is the fanbase that once booed Santa Claus and has booed its own stars ever since, not from cruelty but from a refusal to pretend. You love loud and you boo loud, and you expect the effort to match the feeling in the stands. When it all comes together, the noise at home is something opponents dread. Holding your heroes to account is just another way you love them.",
    "why": [
      "Your emotion runs loud and unfiltered. You feel every game at full volume and you do not hide it.",
      "You hold the people you love to a high standard, and you treat honesty, even harsh honesty, as a form of devotion.",
      "You belong to a fierce collective. The crowd, the noise, the shared intensity are central to how you experience the game."
    ]
  },
  "DET": {
    "code3": "DET", "kitType": "duo", "secondaryColor": "#FA4616",
    "name": "Detroit Tigers",
    "emoji": "🐯",
    "color": "#0C2340",
    "tagline": "The city that put the world on wheels, and an old English D that means grind.",
    "desc": "You come from the city that built the American car and then took the worst of its collapse, and your baseball carries all of it: the grind, the toughness, the refusal to be counted out. You wear an old English letter unchanged in a century, the same one your grandparents wore through the good decades and the brutal ones. You have won it all and you have also lost a hundred and nineteen games in a single year. What stays constant is the work. In Detroit, you do not quit on the team or the town.",
    "why": [
      "You define yourself by grit and the willingness to grind through hard times rather than by glamour.",
      "Your loyalty is bound up with a place and its working-class character, through booms and busts alike.",
      "You hold steady when things go wrong. Getting knocked down is just the setup for getting back up."
    ]
  },
  "CWS": {
    "code3": "CWS", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Chicago White Sox",
    "emoji": "SOX",
    "color": "#A6AEB2",
    "tagline": "The South Side the postcards skip, blue collar and still here through the worst of it.",
    "desc": "You are the South Side, the half of Chicago the postcards skip, blue collar and proud of the chip on your shoulder. You broke an eighty-eight-year drought of your own in 2005 and barely got the attention for it. Then in 2024 you lost more games in a season than any team in the modern history of the sport, an almost unthinkable low, fans chanting at ownership to sell. Still you show up, because South Side loyalty was never about the standings. It was about not being the other team in town.",
    "why": [
      "You carry a chip on your shoulder and a little defiance, the pride of the overlooked half of a divided town.",
      "Your loyalty has nothing to do with winning. You stay through historic lows because the badge is identity, not entertainment.",
      "You hold a blue-collar toughness that absorbs even rock bottom and shows up again the next day."
    ]
  },
  "BAL": {
    "code3": "BAL", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Baltimore Orioles",
    "emoji": "🟠",
    "color": "#DF4601",
    "tagline": "The small things done right every day, under the warehouse everyone else copied.",
    "desc": "You believe in the fundamentals as a creed, the small things done right, and in a kind of relentless reliability, the same spirit as the hometown legend who once played a record two thousand six hundred straight games without ever taking a day. Your ballpark, with its old brick warehouse looming over right field, was so beautiful it set off a wave of imitators across the sport. You have had brilliant runs and lean stretches both. The orange does not waver. Birdland shows up either way.",
    "why": [
      "You value craft and consistency, the unglamorous discipline of doing the basics right, over and over.",
      "You take pride in reliability and showing up, the quiet virtue of being someone people can count on.",
      "Your loyalty is steady and even-keeled, holding through the good years and the lean ones without much drama."
    ]
  },
  "NYM": {
    "code3": "NYM", "kitType": "duo", "secondaryColor": "#FF5910",
    "name": "New York Mets",
    "emoji": "🍎",
    "color": "#002D72",
    "tagline": "New York's other team, lovable and heartbroken, and nobody's little brother.",
    "desc": "You are New York's second team and you have built an identity out of it, lovable and luckless and self-aware, the home of miracle runs and slow-motion collapses. For decades you lived in the long shadow of the team across town. Then ownership decided enough was enough and signed the single biggest contract in the history of professional sports, pulling a superstar straight out of the Bronx, just to prove you would not be anyone's little brother. However it ends, glory or heartbreak, it will at least be loud.",
    "why": [
      "You wear underdog identity with humor and self-awareness, finding something lovable even in the heartbreak.",
      "Your emotions run high and public, the agony and the ecstasy both lived at full New York volume.",
      "You will go all in to prove a point. When it matters, you would rather swing big and risk the fall than settle for the shadow."
    ]
  },
  "MIA": {
    "code3": "MIA", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Miami Marlins",
    "emoji": "🐟",
    "color": "#00A3E0",
    "tagline": "Two titles as a young upstart, both torn apart for parts before the confetti settled.",
    "desc": "You are the team that proved you can win it all and still get torn down to the studs. Twice you came out of nowhere as a young upstart and won the World Series, and twice, almost before the parade ended, the roster got sold off for parts. You play in teal under the Miami sun, a city of beautiful temporary things, in front of crowds that learned the hard way not to get attached. The flash is real. So is the heartbreak baked into it. Nothing you build is quite allowed to last.",
    "why": [
      "You know glory and loss are often the same story, and you hold success loosely because you have seen it vanish fast.",
      "You have a flair for the sudden and spectacular, the out-of-nowhere run nobody saw coming.",
      "You guard your heart a little. Experience taught you not to get too attached to anything that looks permanent."
    ]
  },
  "TOR": {
    "code3": "TOR", "kitType": "duo", "secondaryColor": "#E8291C",
    "name": "Toronto Blue Jays",
    "emoji": "🍁",
    "color": "#134A8E",
    "tagline": "Not a city's team but a country's, back to back once on a walk-off home run.",
    "desc": "You belong to an entire country, the only team a whole nation gets to claim, which makes every season a coast-to-coast affair from Vancouver to the Maritimes. You won it all twice in a row in the early nineties, the second sealed by a walk-off home run a whole country still remembers watching. Last fall you roared back to the brink, then lost a Game 7 in extra innings with the trophy almost in hand. The wait resumes, but it resumes for an entire nation at once.",
    "why": [
      "Your sense of belonging is huge in scale, tied to a whole country rather than a single city.",
      "You take real pride in being singular, the only one of your kind, representing something bigger than a hometown.",
      "You hold recent heartbreak close, last fall still raw, and you channel it into next year's hope."
    ]
  },
  "TEX": {
    "code3": "TEX", "kitType": "duo", "secondaryColor": "#003278",
    "name": "Texas Rangers",
    "emoji": "🤠",
    "color": "#C0111F",
    "tagline": "Fifty years, one strike from it all twice in a night, and finally the whole thing.",
    "desc": "For half a century you waited, and the cruelest part came in 2011, when you stood one strike away from the title, twice in the same night, and lost it anyway, the kind of heartbreak that scars a fanbase for a decade. Then in 2023 you went out and finished it, winning the whole thing on the road, the wait finally over. You are Texas-sized in everything, the hurt and the redemption both. You know exactly what the wait costs and exactly what it is worth.",
    "why": [
      "You understand delayed gratification deeply, having waited longer and more painfully than almost anyone before the payoff.",
      "You feel things big, the heartbreak and the triumph both lived at full Texas scale.",
      "You carry the hard-won wisdom of a fanbase that finally got its reward and will never take it for granted."
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
      "You move fast and fearlessly, willing to crash the establishment's party before anyone thinks you are ready.",
      "You take pride in punching above your weight, doing damage on nerve and smarts rather than resources.",
      "You carry an upstart's edge, the scrappy confidence of a team that has shocked the biggest names before."
    ]
  },
  "WSH": {
    "code3": "WSH", "kitType": "duo", "secondaryColor": "#AB0003",
    "name": "Washington Nationals",
    "emoji": "🏛️",
    "color": "#14225A",
    "tagline": "Born in Montreal, moved to the capital, and ran from nineteen and thirty-one to a title.",
    "desc": "Your story starts in another country. You were born as the Expos in Montreal, the team that gave Canada baseball before being uprooted to the nation's capital, leaving a city heartbroken behind you. For years in Washington you were good and never quite enough. Then came 2019, a season that opened nineteen and thirty-one, looked finished by May, and became a charmed run to the capital's first championship in nearly a century. You learned the hard way that the season is long and nothing is over until it is.",
    "why": [
      "You carry a relocated history and the resilience of a fanbase that has been through real upheaval and kept going.",
      "You never count anything as finished. A terrible start is just the first act, and you believe in the long comeback.",
      "You hold a hard-won patience, the knowledge that the worst beginnings can still turn into the best endings."
    ]
  },
  "HOU": {
    "code3": "HOU", "kitType": "duo", "secondaryColor": "#002D62",
    "name": "Houston Astros",
    "emoji": "🚀",
    "color": "#EB6E1F",
    "tagline": "The most relentless winning machine in the game, and the most hated for it.",
    "desc": "You turned baseball into a machine and stopped apologizing for being good at it. A title in 2017 that the rest of the sport will forever stamp with an asterisk, after a sign-stealing scheme came to light, then another won clean in 2022 with the whole world rooting against you. For most of a decade you reached the final four almost every year, the most relentless run of contention in the game. You are the team everyone loves to hate, and somewhere along the way you decided that was just fine.",
    "why": [
      "You are relentlessly driven to win and unbothered by the resentment that comes with it.",
      "You trust system and process over sentiment, the cold efficiency of a machine built to keep contending.",
      "You have made peace with being the villain. Outside hatred does not rattle you, it almost fuels you."
    ]
  },
  "LAA": {
    "code3": "LAA", "kitType": "duo", "secondaryColor": "#003263",
    "name": "Los Angeles Angels",
    "emoji": "😇",
    "color": "#BA0021",
    "tagline": "Two of the greatest alive at once, and not one October win to show for them.",
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
    "LAD": "Both of you win and let the whole sport resent you for it, no apology offered. The Dodgers stacked the deck on purpose and said so out loud; for you it was never about buying a title, it is the floor, twenty-seven of them, the measure everyone else is held to. They bought inevitability, and you are the thing inevitability gets compared to.",
    "STL": "You and the Cardinals own two of the deepest trophy cases in the sport and almost nothing else in common. St. Louis won eleven the quiet way, no villain era, no noise, just do it right and let the rings speak; you won yours loud and unbothered, the team half the country roots against. One of you wants to be admired for how it wins, and the other stopped caring about that a century ago.",
    "HOU": "Both of you wear the sport's hatred like it keeps you warm, winning anyway and never flinching. Houston earned its villain badge fresh, a 2017 title with an asterisk it cannot outrun; yours is older and purer, the establishment empire that set the standard for a hundred years and never apologized. They are the upstart with a stain, and you are the thing they were trying to become.",
    "ATL": "Both of you turned sustained dominance into a way of life, the kind of greatness that lasts decades. Atlanta's came with a cruel catch, fourteen straight division titles and a single ring to show for most of the run; yours came with the trophies stacked so high a great season without one feels like failure. They learned dominance can still break your heart, and you decided long ago it only counts in October."
  },
  "LAD": {
    "NYY": "Both of you win and dare the sport to hate you for it, and it happily does. The Yankees made winning the floor across a hundred years, twenty-seven rings as the permanent measuring stick; you stacked the deck in the present, said so out loud, and went back-to-back without one word of apology. They are the old empire, and you are the new one that stopped pretending it was ever a fair fight.",
    "ATL": "Both of you have lived at the top of the National League long enough to make it look routine. Atlanta did it on a homegrown run, fourteen straight division titles that mostly ended in October tears before 2021 finally delivered; you did it by buying the best roster money could build and refusing to apologize. One earned its dominance and waited years for the ring, and the other bought the ring and waited for no one.",
    "HOU": "Both of you are the team the rest of the sport lines up to root against, and both of you stopped caring years ago. Houston earned the hate with a 2017 title that still drags an asterisk behind it; you earned yours with a payroll nobody else could touch and zero shame about it. They cheated and kept the ring, and you simply bought a better one.",
    "NYM": "Both of you spend like the sky is the limit and let everyone grumble about it. The difference is what the money has bought. You turned it into back-to-back titles and called the hate a compliment; the Mets turned the biggest contract in sports history into one more chapter of being New York's heartbroken second team. You buy and win, and they buy and hope."
  },
  "STL": {
    "ATL": "Both of you carry yourselves like winning is simply what your franchise does, no fireworks required. Atlanta's version came with a famous ache, a decade and a half on top that produced just one ring before 2021; yours came with eleven of them and a creed about doing it the right way, no drama, no villain era. They endured the long wait inside the dynasty, and you just kept quietly stacking the trophies.",
    "NYY": "You and the Yankees hold the two deepest trophy cases in the sport and could not be less alike about it. New York wins loud, in pinstripes, as the team half the country roots against; you win quiet, no theatrics, the whole point being to do it right and let the rings speak. They want to be feared, and you only ever wanted to be respected.",
    "SF": "Both of you treat winning as a birthright handed down rather than a thing to brag about. San Francisco's greatness lives in the bones, two cities of titles and an even-year charm the present team does not always reach; yours is steadier and more present-tense, the quiet Midwestern creed of doing it right again and again. Their pedigree can coast on the past, and yours insists on showing up now.",
    "CHC": "Both of you sit at the heart of the same Midwest rivalry, and your fans would each tell you they do it the right way. The split is the scoreboard across a century. You won eleven titles quietly and expected each one; the Cubs waited a hundred and eight years, blamed a goat, and came undone the night they finally broke it. You carry winning like a habit, and they carry it like a miracle."
  },
  "ATL": {
    "STL": "Both of you look like winning is just the family business, no need to shout about it. The Cardinals backed it with eleven rings and a creed about doing it the right way; you backed it with fourteen straight division titles that mostly ended in heartbreak before 2021 set it right. They rarely had to wait, and you turned the waiting into part of the story.",
    "LAD": "Both of you have sat atop the National League long enough to make dominance look ordinary. Los Angeles bought its way there and went back-to-back without apology; you got there the homegrown way, fourteen straight division titles that broke your heart over and over until 2021 finally paid it off. They never had to wait, and the waiting is half of who you are.",
    "NYY": "Both of you turned sustained excellence into an identity, the franchise everyone else measures their own against. New York did it with twenty-seven rings and the belief that anything less is failure; you did it with a fourteen-year reign that handed over just one title before 2021. They were the empire that always cashed in, and you were the dynasty that learned how much winning can still hurt.",
    "PHI": "Both of you live in the same division and treat October as the only month that counts. Philadelphia pours it out through the loudest, most unforgiving crowd in the sport, a city that boos its own as a form of love; you carry it cooler, a team adopted across the country on cable that learned to swallow years of near-misses. They make their feelings impossible to miss, and you spent a decade hiding the heartbreak behind all the winning."
  },
  "SF": {
    "STL": "Both of you wear an old-money pedigree like it was always meant to be yours. The Cardinals keep theirs present-tense, eleven titles and a Midwestern creed of doing it right on a loop; yours lives in the bones, two cities of glory and an even-year charm the current team cannot always summon. They prove it again every few years, and yours barely needs the present tense at all.",
    "LAD": "Both of you carried your rivalry across the country from New York and never let it cool. The Dodgers are the bought, dominant present, back-to-back titles and a payroll without apology; you are the deep lineage, even-year magic and statues by the cold bay, a pedigree that does not always need the current team to be good. They are spending to win now, and you have a show that was always in the blood.",
    "CHC": "Both of you are wrapped in ivy and nostalgia, old franchises whose history does a lot of the talking. The Cubs spent a hundred and eight years waiting on a single payoff and finally got it in 2016; you collected titles in charmed even-year bursts and let the pedigree carry the lean years. They lived for the one miracle, and you have a whole lineage to lean on.",
    "NYY": "Both of you trace your greatness back to New York and a pedigree most franchises would envy. The Yankees never let the past soften the present, twenty-seven rings and a standard that calls any ringless season a failure; yours sits comfortably in the bones, two cities of titles and an even-year charm that does not panic when the present sputters. They demand it now, and you trust the lineage to outlast any lean stretch."
  },
  "CIN": {
    "STL": "Both of you are old Midwest baseball to the core and proud of how the game is supposed to be played. The Cardinals frame that as winning the right way, eleven rings and no drama; you frame it as raw effort, the first professional team there ever was, playing every ground ball like a fight worth winning. They have the trophies to back the creed, and you have the longest roots and the hardest motor.",
    "PIT": "Both of you are old river-town clubs whose best decades are a while back now. Pittsburgh's modern story is loyalty tested to the limit, a record run of losing seasons watched from a gorgeous ballpark while ownership kept the wallet shut; yours is the oldest pedigree in the sport and a head-first intensity that never quite leaves the blood. Their fans kept showing up for a team that would not spend, and yours keep playing like every grounder is a brawl.",
    "DET": "Both of you treat effort and toughness as the whole point, no shortcuts allowed. Detroit ties it to the car city that got knocked flat and is clawing back up, the team and the town rebuilding together; you tie it to the oldest roots in the game and a head-first style where coasting was never an option. Theirs is a city's comeback worn on the chest, and yours is a century and a half of refusing to play soft.",
    "MIL": "Both of you are NL Central lifers who do it without big-market shine. Milwaukee turned a small budget into a refusal to stop winning, joy and a sausage race and a beer in hand all the way; you turned the oldest history in the sport into a creed of all-out effort, every play a fight. They keep showing up good on nothing, and you keep playing like the past is watching."
  },
  "CHC": {
    "BOS": "Both of you are the famous curse that finally broke, a faith kept across generations until one October ended it. The shapes differ: yours was the sheer length of it, a hundred and eight years and a billy goat and no real villain but time; Boston's was a grudge against the team it hates most, snapped by coming back from down three games to none against them. You waited longer, and they had an enemy to beat.",
    "PIT": "Both of you asked your fans to keep the faith through droughts most clubs could not survive. Pittsburgh's was a record run of losing seasons watched from the prettiest park around, loyalty tested by an ownership that would not spend; yours was a hundred and eight years that finally ended on one extra-innings night in 2016. They are still waiting on a payoff, and you already got the one that made all the waiting worth it.",
    "SF": "Both of you are ivy-and-nostalgia old, history doing plenty of the talking. San Francisco kept cashing it in, titles in two cities and a charmed even-year run; you spent a hundred and eight years waiting on a single payoff before 2016 finally arrived. Their past keeps refreshing itself, and yours was one long ache redeemed in a single night.",
    "STL": "Both of you sit at the center of the same Midwest rivalry, and the gap between you is a century of scoreboards. St. Louis won eleven titles quietly and expected each one; you waited a hundred and eight years, blamed a goat, and came completely undone the night the wait finally ended. They treat winning as a habit, and you treat it as the miracle you never stopped believing in."
  },
  "BOS": {
    "CHC": "Both of you are the curse that broke at last, a faith carried across lifetimes until one autumn paid it off. Yours was a grudge as much as a drought, eighty-six years tied to the team you hate most, snapped by storming back from down three games to none against them; the Cubs' was pure length, a hundred and eight years and a goat and no villain but the calendar. You had an enemy to beat, and they only had time.",
    "PHI": "Both of you run on loud, passionate, heart-on-the-sleeve fanbases that take the game personally. Philadelphia channels it into booing its own as a form of love, a city with more losses than any team in pro sports daring you to earn the cheers; yours channels it into a grudge with the Yankees and the eighty-six-year curse you finally broke against them. They love by holding you accountable, and you love by remembering exactly how long the wait was.",
    "STL": "Both of you have hung multiple banners and met each other on the sport's biggest stage. The temperaments are opposites: St. Louis wins the quiet way, no villain era, just do it right and let the rings speak; you win loud and tortured, eighty-six years of curse and a grudge with the Yankees that you snapped in the most dramatic way the game has seen. They keep the drama out of it, and you turned the drama into the whole legend.",
    "CIN": "Both of you carry deep history and once met in one of the greatest World Series ever played. Cincinnati's identity is age and effort, the first professional team in the sport playing every grounder like a brawl; yours is the eighty-six-year curse and the Yankees grudge you finally broke at once. They were here before anyone, and you waited longer than almost anyone."
  },
  "CLE": {
    "SEA": "Both of you are the patient wait by the water, fans who keep the faith with little payoff. The difference is whether you have ever tasted it. Seattle has never once reached the World Series in half a century of trying, nine outs away last fall before it vanished; you have the longest drought of any team that has actually won one, with 2016 right in your hands before it slipped away in extra innings. They are still chasing the first, and you are haunted by the one you let go.",
    "PIT": "Both of you build good players and then watch the rich teams take them, loyalty tested by thin budgets. Pittsburgh's wound is an ownership that would not spend even when a generational arm arrived, a record run of losing seasons to show for it; yours is a clever machine that develops stars, lets them walk, and once had a 2016 title in hand before letting that go too. They never got close, and you got achingly close and lost it.",
    "MIN": "Both of you are AL Central clubs who know exactly what October heartbreak feels like. Minnesota's is the record eighteen straight playoff losses, a futility that became a grim joke before it finally broke, set against two roaring dome titles; yours is the longest drought of any team that has won, with the 2016 collapse the wound that stings most. They kept losing once they got there, and you keep not getting all the way back.",
    "DET": "Both of you are rust-belt clubs whose toughness comes straight from the cities behind you. Detroit's is the car town knocked flat and clawing back, team and city rebuilding side by side; yours is a clever, thrifty machine that develops stars, watches them leave, and carries the longest title wait of any team that has won. They are on the way up together, and you are still living inside the drought."
  },
  "SEA": {
    "CLE": "Both of you are the loyal wait by the water with precious little payoff to show. The line is whether it has ever happened at all. Cleveland has a title, just not since 1948, and had 2016 right in its hands before letting it slip; you have never once reached the World Series in fifty years of trying, nine outs from it last fall before it disappeared. They mourn the one they lost, and you are still chasing the first.",
    "PIT": "Both of you ask your fans for faith that rarely gets repaid. Pittsburgh's wound is an ownership that would not spend, a record stretch of losing seasons watched from a beautiful park; yours is the only franchise in the sport never to reach the World Series, showing up every spring sure this is finally the year. Their loyalty was tested by a team that would not try, and yours by a team that tries and still has never made it.",
    "COL": "Both of you live at the far edges of the map and have spent your history short of the prize. Colorado's whole identity is the thin mountain air that warps the game, a puzzle it has never solved, with a single swept World Series trip to show for it; yours is having never reached that stage even once, nine outs away last fall before it slipped. They have a wound about how the game plays, and you have one about never arriving at all.",
    "TEX": "Both of you spent decades in the AL West waiting on a breakthrough. Texas got the cruelest possible tease, one strike from the title twice in a single 2011 night, then finally finished the job and won it all in 2023; you are still the only team never to reach the World Series, nine outs short last fall. They know what the wait costs and what ending it feels like, and you are still living the first half of that story."
  },
  "PIT": {
    "SEA": "Both of you have asked your fans to stay loyal through long, thankless stretches. Seattle's wound is having never once reached the World Series, faith with nothing to cash in; yours is an ownership that would not spend, a record run of losing seasons watched from the prettiest ballpark in the country. Their team kept trying and never made it, and yours never seemed to fully try at all.",
    "CLE": "Both of you develop good players and lose them to richer clubs, loyalty stretched by thin wallets. Cleveland runs a clever machine that at least put a 2016 title within reach before it slipped, carrying the longest drought of any team that has won; yours is a record stretch of losing seasons and an ownership that would not spend even when the talent arrived. They got close and lost it, and you rarely got close at all.",
    "CIN": "Both of you are old river-town clubs whose glory decades are behind you. Cincinnati leans on the oldest history in the sport and a head-first intensity that never fades; yours leans on a loyalty tested like few others, a record run of losing seasons borne from a gorgeous ballpark while ownership kept the wallet shut. Their pride is the deep past, and yours is showing up anyway when the team would not.",
    "DET": "Both of you are working-town clubs whose fans never wavered through the hard years. Detroit's grind is a car city knocked down and climbing back, team and town rising together; yours is loyalty tested by a record run of losing seasons and an ownership that would not spend, the faith never in question even when the effort was. They are on the way back up, and you kept showing up while the team stood still."
  },
  "SD": {
    "NYM": "Both of you spend like the prize is right there and keep coming up empty. The motive splits you. The Mets pour out the biggest contracts in sports to escape life as New York's second team, still chasing the spotlight across town; you are a small-market club spending like a giant out of pure want, twice to the final stage and never once holding the ring. They spend to stop being overshadowed, and you spend just to finally win the first one.",
    "LAD": "Both of you open the checkbook and chase the best in the same division. Los Angeles does it from a bottomless well and goes back-to-back without apology; you do it as a small-market club punching far above your size, twice to the brink and never once a champion. They spend and win, and you spend everything you have and keep waiting.",
    "AZ": "Both of you are western clubs who came into the game hungry and unafraid. Arizona crashed the party fast, a championship in only its fourth year by taking down the Yankee dynasty; you have chased your first ring far longer and harder, twice to the last stage and still empty-handed. They grabbed it before they had any right to, and you are still waiting on the one you want most.",
    "TEX": "Both of you spent big and bet everything on ending a long wait. Texas got there, fifty years and the cruelest near-miss in 2011 before finally winning it all in 2023; you are still chasing, twice to the final stage and never once a champion. They know what finishing the job feels like, and you are still trying to find out."
  },
  "COL": {
    "SEA": "Both of you sit at the far edges of the map, short of the prize for most of your history. Seattle's wound is having never once reached the World Series, still chasing a first trip; yours is the thin mountain air that bends the game itself, a puzzle you have never solved, with one swept Series appearance to show for it. They have never arrived, and you arrived once and could not adjust to your own altitude.",
    "PIT": "Both of you have spent long stretches well outside the race. Pittsburgh's reason is an ownership that would not spend, a record run of losing seasons watched from a beautiful park; yours is the mile-high air that warps the game in ways no other team has to face, a puzzle still unsolved. Their problem is the wallet, and yours is the altitude.",
    "AZ": "Both of you play out west in conditions the rest of the league does not deal with. Arizona handled the desert heat well enough to win it all in just its fourth year, taking down the Yankees; you play a mile up where the ball flies and the rules bend, a puzzle you have never once solved across all these years. They turned their setting into a quick title, and you are still wrestling with yours.",
    "MIA": "Both of you are newer clubs who have spent most of your history outside the contention window. Miami actually won it all twice as a young upstart, then sold the team for parts both times before the confetti settled; you reached the Series once on a charmed run, got swept, and have mostly battled the thin air that warps your whole game. They could not keep a winner together, and you have never solved the conditions you play in."
  },
  "ATH": {
    "TB": "Both of you turned having no money into a way to beat the rich, brains over budget every year. The wounds rhyme but differ: Tampa Bay had a hurricane tear the roof off its home and spent a season exiled to a rival's park; you wrote the original book on it in green and gold before ownership dropped the city's name and shipped you off entirely. They lost their building, and you lost your whole town.",
    "CLE": "Both of you run clever, thrifty machines that beat richer teams more often than the payroll says you should. Cleveland develops stars, watches them leave, and carries the longest drought of any team that has won, with 2016 the one that got away; yours wrote the original out-think-money book before ownership stripped the city's name off and moved you out. Their ache is a title that slipped, and yours is a home that was taken.",
    "MIL": "Both of you prove a small budget does not have to mean losing, contenders built on brains and development. Milwaukee does it with joy intact, beer and a sausage race and a stubborn refusal to stop winning the division; you wrote the original underdog playbook in green and gold before ownership took the team out of the only city that loved you. They kept their home and their fun, and you kept the grudge.",
    "SD": "Both of you are West Coast clubs who have never held the trophy, but you chase it from opposite ends of the bank account. San Diego spends like a superpower out of pure want and has come up empty twice on the final stage; you beat the rich with brains and no budget at all before ownership packed up the team and left the city behind. They threw money at it and missed, and you never had the money and lost the city anyway."
  },
  "TB": {
    "ATH": "Both of you turned an empty wallet into a method for beating the rich, year after year. The wounds echo each other: you had a hurricane rip the roof off your home and spent a season playing in a rival's park; the Athletics wrote the original out-think-money book before ownership dropped the city's name and moved them away entirely. You lost your building, and they lost their whole town.",
    "CLE": "Both of you are small-budget brains operations that keep producing contenders the payroll says you should not. Cleveland develops stars, lets them walk, and carries the longest drought of any team that has won, 2016 the one it let slip; yours reached the final stage twice with nothing, then watched a hurricane tear the roof off your home. They are haunted by a title in reach, and you by a method that still has not finished the job.",
    "MIL": "Both of you win games rich teams think you have no business winning, year after year on a shoestring. Milwaukee does it with joy out front, beer and a sausage race and a stubborn refusal to lose the division; you do it as a cold, clinical analytics lab in the toughest division there is, even after a hurricane took your roof. They make it look fun, and you make it look engineered.",
    "HOU": "Both of you turned baseball into a problem to be solved and got very good at the math. Houston built that into the most relentless winning machine in the sport, two titles and an asterisk it stopped apologizing for; you built it into a perennial contender on one of the smallest budgets in the game, two pennants and no ring. They had the money and the results, and you had neither and kept beating teams that did."
  },
  "MIL": {
    "STL": "Both of you are NL Central mainstays who pride yourselves on doing more with the roster than the standings suggest. St. Louis backs it with eleven quiet titles and a creed about winning the right way; you back it with a small budget, a beer in hand, and a refusal to stop winning the division despite shipping your best players off every winter. They have the rings, and you have the joy and the stubbornness.",
    "KC": "Both of you are small-market Midwest clubs that win by being smarter and more stubborn than the budget allows. Kansas City turned speed, contact, and a shutdown bullpen into an actual title in 2015, small-ball nobody else valued; you turn development and grit into a division winner year after year, with the joy turned all the way up, but no ring yet. They closed it out their own way, and you are still chasing yours.",
    "TB": "Both of you beat richer teams on a shoestring as a matter of routine. Tampa Bay does it as a cold analytics lab in the toughest division, even after a hurricane took its roof; you do it with joy out front, beer and brats and a sausage race, refusing to stop winning the division. They make it look engineered, and you make it look like a party.",
    "CIN": "Both of you are NL Central lifers without big-market money to lean on. Cincinnati leans on the oldest history in the sport and a head-first intensity that never quits; you lean on a small budget turned into a refusal to lose, joy and a sausage race and a stubborn knack for staying good. Their pride is the deep past, and yours is the fun you have winning on nothing."
  },
  "MIN": {
    "CLE": "Both of you are AL Central clubs intimate with October pain. Cleveland's is the longest drought of any team that has won, the 2016 collapse the wound that lingers; yours is the record eighteen straight playoff losses, a futility that became a grim joke before you finally snapped it, balanced against two roaring dome titles. They keep falling short of getting back, and you spent years losing once you got there.",
    "KC": "Both of you are AL Central clubs who found a way to win it all in your own style. Kansas City did it on speed, contact, and a lockdown bullpen, small-ball nobody else valued, capped in 2015; yours came twice in a deafening dome with white hankies spinning, before a record run of October losses set in. They have the recent ring, and you have the loud old glory and the long drought that followed.",
    "DET": "Both of you are cold-weather AL Central clubs built on patience and toughness. Detroit's toughness is a car town knocked flat and clawing back, team and city rising together; yours is the stoic northern kind, two dome titles and a record stretch of October losses taken in stride before you broke it. They are on the way up, and you have learned to weather both the cold and the heartbreak.",
    "MIL": "Both of you are upper-Midwest clubs without big-market budgets to lean on. Milwaukee turns that into a joyful refusal to lose, beer and a sausage race and a stubborn division winner every year, still chasing a first ring; yours has two dome titles in the past and a record run of October losses that followed before you finally broke it. They are all joy and no ring yet, and you have the rings but a long ache after them."
  },
  "KC": {
    "MIN": "Both of you are AL Central clubs who won it all your own way. Minnesota did it twice in a roaring dome with hankies spinning, then suffered a record run of October losses; you did it on speed, contact, and a shutdown bullpen, small-ball the rest of the sport had half forgotten. They have the older glory and the longer drought, and you have the recent ring won the way only you could claim.",
    "CLE": "Both of you are small-market AL Central clubs that develop talent and live and die by it. Cleveland runs a clever machine, lets its stars leave, and carries the longest drought of any team that has won, 2016 still aching; yours turned speed, defense, and a lockdown bullpen into a 2015 title, the small stuff nobody else valued. They are still chasing the next one, and you already have one won the only way you would want it.",
    "MIL": "Both of you are small-market Midwest clubs who win by outsmarting and outworking the budget. Milwaukee keeps winning the division with joy out front and no ring to cap it; you turned speed, contact, and a shutdown bullpen into an actual title in 2015. They are still chasing the close, and you got there your own homegrown way.",
    "STL": "Both of you call Missouri home and once met in a World Series neighbors still argue about. St. Louis carries eleven titles and a creed about winning the quiet, proper way; you carry one, won on speed and contact and a bullpen nobody could touch, the small-market style only you can really claim. They win like it is expected, and you won like it had to be earned a different way."
  },
  "PHI": {
    "NYM": "Both of you are loud NL East clubs whose fans live and die with every pitch. The Mets lean into being lovable and luckless, New York's heartbroken second team now spending the biggest contracts in sports to escape the shadow; you lean into being the most unforgiving crowd in the game, a city that boos its own as a form of love. They want to finally be taken seriously, and you just want the effort to match the noise in the stands.",
    "BOS": "Both of you run on passionate, heart-on-the-sleeve fanbases the rest of the sport notices. Boston pours it into a grudge with the Yankees and the eighty-six-year curse it finally snapped against them; you pour it into booing your own as a form of love, the most honest and brutal crowd in the game with more losses than any team in pro sports behind it. They love by remembering the wait, and you love by holding everyone accountable in the moment.",
    "ATL": "Both of you live in the same division and treat October as the only thing that matters. Atlanta carries it cooler, a team adopted nationwide on cable that swallowed a decade of near-misses before 2021; you carry it loud, the most unforgiving crowd in the sport, booing your own as a way of loving them. They hid the heartbreak behind the winning, and you put every feeling right out in the open.",
    "CWS": "Both of you wear a working-class chip on the shoulder and refuse to pretend things are fine when they are not. Chicago's South Side owns the joke, a 1919 scandal and the worst season in modern history, proud to be the half of the city the postcards skip; yours is the loudest, most unforgiving crowd in the sport, booing its own as a form of love with more losses than any team in pro sports behind it. They take the punchline and keep showing up, and you demand the effort match the noise."
  },
  "DET": {
    "CLE": "Both of you are rust-belt clubs whose toughness comes from the cities behind you. Cleveland runs a thrifty, clever machine that develops stars, loses them, and carries the longest drought of any team that has won; yours is a car town knocked flat and clawing back, team and city climbing together. They are stuck inside the drought, and you are on the way back up.",
    "CIN": "Both of you treat effort and toughness as the entire point. Cincinnati ties it to the oldest roots in the sport and a head-first style where coasting was never allowed; yours ties it to a car city that got knocked down and is grinding its way back, team and town together. Theirs is a century and a half of refusing to play soft, and yours is a comeback worn on the chest.",
    "CWS": "Both of you are blue-collar Midwest clubs with a chip earned the hard way. Chicago's South Side owns rock bottom, the worst season in modern history and a fanbase chanting for the owner to sell, proud to be the part of town the postcards skip; yours is a car city knocked flat and now climbing back, team and town rising together. They are owning the joke at the bottom, and you are clawing your way up.",
    "MIN": "Both of you are cold-weather AL Central clubs built on patience and grit. Minnesota's is the stoic northern kind, two dome titles long ago and a record run of October losses taken in stride; yours is a car town knocked down and clawing back, team and city rising together. They have weathered the heartbreak, and you are in the middle of the comeback."
  },
  "CWS": {
    "CLE": "Both of you are AL Central clubs carrying old wounds and thin recent years. Cleveland's is the longest drought of any team that has won, with the 2016 collapse the cut that lingers; yours is being the sport's punchline, from throwing the 1919 Series to the worst season in modern history, proud to be the half of Chicago the postcards skip. They are haunted by a title they let go, and you own the joke and keep showing up anyway.",
    "DET": "Both of you are blue-collar Midwest clubs with a chip you earned honestly. Detroit is a car city knocked flat and climbing back, team and town rising together; yours owns rock bottom, the worst season in modern history and fans chanting for the owner to sell, the part of Chicago the postcards skip. They are clawing back up, and you are owning the joke at the floor.",
    "PIT": "Both of you ask your fans to keep the faith through seasons that would break most fanbases. Pittsburgh's wound is an ownership that would not spend, a record run of losing seasons watched from a gorgeous park; yours is being the punchline, the worst season in modern history on the South Side, fans chanting for the owner to sell. Their loyalty is to a team that would not try, and yours is to not being the other team in town.",
    "CHC": "Both of you share a city and almost nothing else about how it sees you. The Cubs are the postcard, ivy and day games and a hundred and eight years of romance that ended in a 2016 title; you are the South Side the postcards skip, blue collar and chip-shouldered, owners of a 2005 ring nobody noticed and the worst season in modern history. They are the lovable side of town, and you are proud not to be."
  },
  "BAL": {
    "STL": "Both of you turned doing things the right way into a whole identity, fundamentals over flash. St. Louis backs it with eleven quiet titles and a creed about winning without drama; yours backs it with the small things done daily, the spirit of a hometown legend who played a record two thousand six hundred straight games. They have the rings to prove the creed, and you have the relentless reliability that defines it.",
    "CLE": "Both of you build around homegrown talent and a belief in doing the small things right. Cleveland's clever, thrifty machine carries the longest drought of any team that has won, 2016 still aching; yours is the Oriole Way, fundamentals and reliability under the brick warehouse at the ballpark everyone copied. They are defined by the wait, and you by the creed of showing up every single day.",
    "MIL": "Both of you win by being sound and stubborn rather than rich. Milwaukee does it with joy out front, beer and a sausage race and a refusal to stop winning the division; yours does it with the small things done right every day, the Oriole Way under a brick warehouse at the park everyone copied. They make it fun, and you make it disciplined.",
    "TB": "Both of you are AL East clubs who win by being smarter than the payroll, not richer. Tampa Bay is the cold analytics lab in the toughest division, contenders on nothing even after a hurricane took its roof; yours is the old-school creed of fundamentals and reliability, the small things done daily under the brick warehouse. They trust the numbers, and you trust the everyday discipline."
  },
  "NYM": {
    "PHI": "Both of you are loud NL East clubs whose fans live and die with every pitch. Philadelphia is the most unforgiving crowd in the game, booing its own as a form of love, more losses than any team in pro sports behind it; yours is the lovable, luckless second team in New York, now spending the biggest contracts in sports to finally escape the shadow. They demand the effort out loud, and you are buying your way out of being overlooked.",
    "SD": "Both of you spend like the prize is within reach and keep ending up empty. San Diego is a small-market club spending like a giant out of pure want, twice to the final stage and never a champion; yours is a big-market team throwing the richest contracts in sports at escaping life as New York's second team. They spend to finally win one, and you spend to stop being overshadowed.",
    "LAD": "Both of you open the checkbook all the way and let the sport grumble. Los Angeles turns it into back-to-back titles and calls the resentment a compliment; yours turns the biggest contract in sports history into one more chapter of being New York's heartbroken second team. They buy and win, and you buy and keep hoping.",
    "CHC": "Both of you spent generations as the lovable, heartbroken team your city could not stop loving. The Cubs waited a hundred and eight years and finally broke it in 2016; yours is still waiting, the perennial little brother now spending the biggest contracts in sports to change the ending. They got their miracle, and you are trying to buy yours."
  },
  "MIA": {
    "TB": "Both of you are Florida clubs who win on the cheap and fight for every crowd. Tampa Bay reloads endlessly on a tiny budget, two pennants and no ring, even after a hurricane took its roof; yours actually won it all twice as a young upstart, then sold the team for parts both times before the parade ended. They keep the machine running without a title, and you held the title twice and would not keep the team.",
    "SD": "Both of you know the ache of a roster that never quite gets to stay together. San Diego spends like a superpower out of pure want and has reached the final stage twice without a ring; yours actually won it all twice and tore the team apart for parts both times before the confetti settled. They spend everything and keep missing, and you grabbed it and refused to hold on.",
    "AZ": "Both of you are young clubs that crashed the party fast and won it all early. Arizona took a title in only its fourth year and stayed scrappy and dangerous since; yours won twice as an upstart and tore the team down for parts both times, a city of beautiful temporary things. They kept building on the win, and you let it slip away on purpose both times.",
    "COL": "Both of you are newer NL clubs who have spent most of your history short of contention. Colorado plays a mile up where the ball flies and the rules bend, a puzzle it has never solved, with one swept Series trip to show for it; yours won it all twice as a young upstart and sold the team for parts both times. They never cracked their own conditions, and you cracked it twice and would not hold on."
  },
  "TOR": {
    "ATL": "Both of you draw from a fanbase far bigger than one city, a team a whole region claims. Atlanta became America's team on cable and finally cashed in a decade of near-misses in 2021; yours belongs to an entire country, back-to-back champions in the nineties before coming two outs from glory in 2025 and losing in extra innings. They got the redemption, and your whole nation is still aching from the latest miss.",
    "BOS": "Both of you are passionate AL East clubs with titles in your past and heartbreak woven through. Boston's was the eighty-six-year curse and the Yankees grudge it finally snapped; yours is the only team a whole country claims, back-to-back champions in the nineties and then two outs from another in 2025 before it slipped in extra innings. They broke their long wait, and you reopened yours in the cruelest way.",
    "NYY": "Both of you play in the same division and treat October as the whole point. New York is the empire, twenty-seven titles and a standard that calls any ringless season a failure; yours is the team an entire country claims, back-to-back champions in the nineties and two outs from another in 2025 before it vanished. They expect the trophy as a birthright, and you carry a nation's heartbreak from just missing it.",
    "SEA": "Both of you came painfully close in 2025 and watched a Game 7 take it away. The histories behind the heartbreak differ: Seattle has never once reached the World Series in fifty years, nine outs from finally breaking through; yours already won it all twice in the nineties and came two outs from doing it again. They are still chasing the first, and you were achingly close to the next."
  },
  "TEX": {
    "HOU": "Both of you are Texas clubs who finally won it all in the same recent stretch, and the rivalry runs hot. Houston did it as the most relentless machine in the sport, a 2017 title with an asterisk and a 2022 one won clean, hated and fine with it; yours did it the hard way, fifty years of waiting and a 2011 night one strike from glory twice before 2023 finally delivered. They won like a juggernaut, and you won like a wound finally healing.",
    "SF": "Both of you have stood on the final stage and know what it takes to win there. San Francisco does it on deep old-money pedigree and a charmed even-year run, the show always in the blood; yours came the hard way, fifty years of waiting and the cruelest 2011 near-miss before finally finishing the job in 2023. They win in charmed bursts, and you won by outlasting half a century of heartbreak.",
    "SD": "Both of you spent big chasing the end of a long wait. San Diego is still chasing, a small-market club spending like a giant out of pure want, twice to the final stage and never a champion; yours got there, fifty years and a brutal 2011 near-miss before finally winning it all in 2023. They are still waiting on the first, and you finally know what finishing it feels like.",
    "SEA": "Both of you spent decades in the AL West waiting on a breakthrough. Seattle is still the only team never to reach the World Series, nine outs away in 2025 before it slipped; yours waited fifty years through the cruelest 2011 near-miss before finally winning it all in 2023. They are still chasing the first trip, and you already turned your long wait into a ring."
  },
  "AZ": {
    "TEX": "Both of you are western clubs who reached the top on nerve more than payroll. Texas got there the hard way, fifty years of waiting and a cruel 2011 near-miss before finally winning it all in 2023; yours crashed the party almost immediately, a championship in just your fourth year by taking down the Yankee dynasty. They earned it by outlasting the heartbreak, and you took it before anyone thought you could.",
    "MIA": "Both of you are young clubs who won it all early and surprised everyone. Miami did it twice as an upstart, then tore the team apart for parts both times before the parade ended; yours took a title in just your fourth year and stayed scrappy and dangerous since. They could not hold onto what they built, and you kept swinging from it.",
    "SD": "Both of you are western clubs who came in hungry and unafraid. San Diego spends like a superpower out of pure want and has reached the final stage twice without a ring; yours grabbed a championship in just its fourth year, the desert upstart that took down the Yankee dynasty. They are still chasing the one they have never held, and you got yours before you had any right to.",
    "COL": "Both of you play out west in conditions the rest of the league does not face. Colorado plays a mile up where the ball flies and the rules bend, a puzzle it has never solved, with one swept Series trip to show for it; yours handled the desert well enough to win it all in just your fourth year. They are still fighting their setting, and you turned yours into an early title."
  },
  "WSH": {
    "AZ": "Both of you won it all on a charmed, against-the-odds run nobody fully expected. Arizona did it as a desert upstart in just its fourth year, taking down the Yankee dynasty; yours did it after starting a country over, the Expos uprooted from Montreal to the capital, then a 2019 team left for dead in May that fought all the way to the title. They rose fast, and you rose from the brink after years of heartbreak.",
    "ATL": "Both of you are NL East clubs who turned years of frustration into a title within the same era. Atlanta endured a decade and a half of division crowns and near-misses before 2021 set it right; yours started life as the Expos in Montreal, got uprooted to the capital, and after years of falling short fought from nineteen and thirty-one all the way to the 2019 title. They waited inside the dominance, and you waited through a whole relocation.",
    "MIA": "Both of you know how it feels to have a team uprooted from under your feet, in your own ways. Miami won it all twice as a young upstart and sold the team for parts both times, nothing beautiful ever built to last; yours started as the Expos in Montreal before being moved to the capital, then fought from the brink to the 2019 title. They tore down their winners on purpose, and you rebuilt an identity in a whole new city.",
    "HOU": "Both of you met on the final stage in 2019, and you could not have arrived more differently. Houston came as the most relentless machine in the sport, a 2017 asterisk and a roster built to dominate; yours came as the team left for dead in May, the old Expos uprooted to the capital, fighting from nineteen and thirty-one all the way. They were the juggernaut everyone expected, and you were the underdog who would not quit."
  },
  "HOU": {
    "LAD": "Both of you are the team the rest of the sport lines up to root against, and neither of you loses sleep over it. Los Angeles earned the hate with a bottomless payroll and back-to-back titles without apology; yours earned it with a 2017 scandal it kept the ring from and a defiant shrug ever since. They bought their villainy, and you cheated your way into yours and won another clean.",
    "NYY": "Both of you carry the whole sport's hatred and have stopped flinching at it. New York is the establishment empire, twenty-seven titles and a standard that makes any ringless season a failure; yours is the new villain, a 2017 title with an asterisk it cannot outrun and a defiance about it. They are the old empire everyone resents, and you are the upstart that won anyway and dared you to complain.",
    "TB": "Both of you turned baseball into a problem to solve and got very good at the math. Tampa Bay built it into a perennial contender on one of the smallest budgets in the game, two pennants and no ring; yours built it into the most relentless winning machine in the sport, two titles and an asterisk you stopped apologizing for. They did it with nothing, and you did it with everything and dared the sport to hate you.",
    "TEX": "Both of you are Texas clubs who won it all in the same recent stretch, and the rivalry runs hot. Texas did it the hard way, fifty years of waiting and a 2011 night one strike from glory twice before 2023 finally delivered; yours did it as the most relentless machine in the sport, an asterisk on 2017 and a clean ring in 2022, hated and fine with it. They won like a wound healing, and you won like a juggernaut that did not care who was watching."
  },
  "LAA": {
    "SEA": "Both of you are AL West clubs whose history is mostly waiting. Seattle has never once reached the World Series in fifty years, nine outs away in 2025 before it slipped; yours rostered two of the greatest players alive at the same time and never won a single October game with them, then watched one leave and win it all up the freeway. They never had the talent to break through, and you had it twice over and wasted it.",
    "PIT": "Both of you know the particular pain of talent that went nowhere. Pittsburgh's wound is an ownership that would not spend even when a generational arm arrived, a record run of losing seasons to show for it; yours rostered two of the finest players alive at once and never won an October game with them. Their stars never got the support, and yours had everything and still wasted it.",
    "SD": "Both of you are California clubs still chasing what keeps slipping away. San Diego spends like a superpower out of pure want and has reached the final stage twice without a ring; yours had two of the greatest players alive together and never won an October game with them before one left and won it all elsewhere. They keep spending and missing, and you had it all and let it walk.",
    "TEX": "Both of you spent long stretches of the AL West waiting on a payoff. Texas got there, fifty years and a brutal 2011 near-miss before finally winning it all in 2023; yours rostered two of the greatest players alive at once and never won a single October game with them, then watched one leave and win elsewhere. They turned the long wait into a ring, and you turned a golden roster into nothing."
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
      "WSH": 2,
      "TEX": 2
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
      "NYY": 3,
      "SF": 2
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


const squadUrls = {};  // no per-team roster links yet; the View squad CTA stays hidden (data-gated)


export { moduleQuestions, teams, archetypes, teamTextColors, archetypeDesc, greats, vitalStats, nearlyGot, scoring, teamDims, CARD_BADGES, squadUrls };
