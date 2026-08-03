// FanDNA - NFL data (Phase 4). Sport two. Seeded from the locked Track B handoff
// and the Phase 4 craft feeder. Same shape as src/data/pl.js so the sport-aware shell
// reads it identically. teamDims are the genotype (the fingerprint match runs on these);
// the 12 module questions carry the cluster separation (module tiebreakers).
//
// Seeded AS LOCKED, then brought to the EPL bar in the Jun 2026 NFL depth pass
// (session 12 craft + the session 11 reachability cells, shipped together):
//  - Flag A RESOLVED: Buffalo/New England/Green Bay/Dallas descs rebuilt to second person.
//  - Flag B RESOLVED: New England + Green Bay taglines were already retrofitted (not stat-forward); kept.
//  - Flag C RESOLVED: Titans Type handle is TITAN UP; Two-Tone Blue kept only as the vitals nickname.
//  - Crest URLs are drafts to verify on preview; the result screen falls back to the
//    badge emoji if a crest fails to load, and the canvas card always uses the emoji.

const moduleQuestions = [
  {
    "id": "nfl_q13",
    "type": "choice",
    "phase": "The fine print",
    "question": "What makes something feel truly yours?",
    "options": [
      {
        "label": "Something handed down. A legacy you inherited and carry on.",
        "value": "A"
      },
      {
        "label": "Something you built. Made from nothing, owing no one.",
        "value": "B"
      }
    ]
  },
  {
    "id": "nfl_q14",
    "type": "choice",
    "phase": "The fine print",
    "question": "How do you want to be seen?",
    "options": [
      {
        "label": "On the big stage. Bright lights, everyone watching.",
        "value": "A"
      },
      {
        "label": "Underestimated. Overlooked, and out to prove them all wrong.",
        "value": "B"
      }
    ]
  },
  {
    "id": "nfl_q15",
    "type": "choice",
    "phase": "The fine print",
    "question": "What earns your respect?",
    "options": [
      {
        "label": "The grind. The unglamorous work nobody thanks you for.",
        "value": "A"
      },
      {
        "label": "The style. Doing the hard thing and making it look easy.",
        "value": "B"
      }
    ]
  },
  {
    "id": "nfl_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "Your best days are:",
    "options": [
      {
        "label": "Behind me, and I guard the memory like it's treasure.",
        "value": "A"
      },
      {
        "label": "Happening right now, and honestly part of me can't believe it.",
        "value": "B"
      },
      {
        "label": "Still ahead, same as ever. I'm grinding toward them.",
        "value": "C"
      },
      {
        "label": "Whenever. I expect to be good, and I usually am.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nfl_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "The thing you love keeps breaking your heart. Inside, you:",
    "options": [
      {
        "label": "Show up louder. Every heartbreak somehow pulled more people in.",
        "value": "A"
      },
      {
        "label": "Brace for the knife. You made peace with doom and cheer anyway.",
        "value": "B"
      },
      {
        "label": "Laugh, and believe again next year. Wrong every time, certain anyway.",
        "value": "C"
      },
      {
        "label": "Stopped keeping score of what it owes you. It's just yours.",
        "value": "D"
      },
      {
        "label": "Don't have that problem. I expect to win, and mostly I do.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "What you're proudest of comes down to:",
    "options": [
      {
        "label": "Where I'm from. The place made me, and I judge everything by it.",
        "value": "A"
      },
      {
        "label": "The standard I keep, and I never slow down to make it comfortable.",
        "value": "B"
      },
      {
        "label": "One perfect thing I did that nobody has matched since.",
        "value": "C"
      },
      {
        "label": "Outlasting it all. Handed almost nothing, and I'm still standing.",
        "value": "D"
      },
      {
        "label": "The show. I love the spotlight and never once apologize for it.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "Strip away the wins. What are you actually loyal to?",
    "options": [
      {
        "label": "The city. Always the city, win or lose, name or no name.",
        "value": "A"
      },
      {
        "label": "The colors and the attitude. I'll wear them in any zip code.",
        "value": "B"
      },
      {
        "label": "What we're building. I lost something once and built my own.",
        "value": "C"
      },
      {
        "label": "The people in the seats next to me. The rest is decoration.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nfl_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "How does the world see you, and how do you feel about it?",
    "options": [
      {
        "label": "They hate me because I win, and I make no apologies for it.",
        "value": "A"
      },
      {
        "label": "They wrote me off, so I stopped wanting to be liked.",
        "value": "B"
      },
      {
        "label": "Overlooked, so I dug into where I'm from till I couldn't be ignored.",
        "value": "C"
      },
      {
        "label": "They barely think of me. I have the calm of one who already won.",
        "value": "D"
      },
      {
        "label": "They pity me. I've turned losing into a whole personality.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q6",
    "type": "slider",
    "phase": "The fine print",
    "question": "Which lands closer:",
    "left": "Three yards, a cloud of dust, and no apologies. The grind is the glory.",
    "right": "Win with style. The spotlight, the spectacle, the show is half the point."
  },
  {
    "id": "nfl_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "There's one that got away. How do you carry it?",
    "options": [
      {
        "label": "Got so close I could feel it, then it slipped away.",
        "value": "A"
      },
      {
        "label": "I had it in hand and watched it slip. I don't trust a lead anymore.",
        "value": "B"
      },
      {
        "label": "Close so often it stopped surprising me. I expect the door to shut.",
        "value": "C"
      },
      {
        "label": "It hurt, then it made the love louder, not smaller.",
        "value": "D"
      },
      {
        "label": "I don't dwell. There's always next year, and I mean it.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Something you loved got taken from you. What did you do?",
    "options": [
      {
        "label": "Built my own from scratch and never looked back. Worth every bit.",
        "value": "A"
      },
      {
        "label": "Fought to keep the name, the colors, the history. Kept it mine.",
        "value": "B"
      },
      {
        "label": "Built a new one and made sure nobody would enjoy facing it.",
        "value": "C"
      },
      {
        "label": "Hit bottom once, and built the best chapter from the wreckage.",
        "value": "D"
      },
      {
        "label": "It never happened to me, and I intend to keep it that way.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "Which is more you:",
    "left": "I did something once that was flat-out perfect, and no one has matched it since. A small, honest part of me roots for everyone else to keep falling short, so it stays mine alone.",
    "right": "I just refuse to disappear. Given almost nothing, somehow impossible to get rid of."
  },
  {
    "id": "nfl_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Deep down, the principle you run on:",
    "options": [
      {
        "label": "It's never over till it's over. I fight long after others fold.",
        "value": "A"
      },
      {
        "label": "Count me out and I just get more certain, doubters be damned.",
        "value": "B"
      },
      {
        "label": "I don't care how it looks or who it upsets. Winning settles it.",
        "value": "C"
      },
      {
        "label": "Respected through gritted teeth beats liked. Feared suits me fine.",
        "value": "D"
      },
      {
        "label": "Whatever can go wrong will, and I'll be back for more anyway.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q11",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "Your volume:",
    "left": "Calm. I don't need to make noise, the results speak.",
    "right": "Loud enough to move the needle, and on a good day loud enough to move the ground."
  },
  {
    "id": "nfl_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When it all comes down to it, what do you trust?",
    "options": [
      {
        "label": "Brilliance. One genius, the impossible made routine.",
        "value": "A"
      },
      {
        "label": "Toughness and preparation. We do the hard things right.",
        "value": "B"
      },
      {
        "label": "Heart. Flat refusal to quit, even when the math says quit.",
        "value": "C"
      },
      {
        "label": "The crowd. The noise, the people. We're not watching, we're in it.",
        "value": "D"
      },
      {
        "label": "Swagger. I play the headline act and dare the results to disagree.",
        "value": "E"
      }
    ]
  }
];

const teams = {
  "BUF": {
    "code3": "BUF", "kitType": "duo", "secondaryColor": "#C60C30",
    "name": "Buffalo Bills",
    "emoji": "🦬",
    "color": "#00338D",
    "tagline": "You lost four straight Super Bowls, watched the kick sail wide right, and only got louder.",
    "desc": "Your devotion was forged in the cruelest way the game allows. You went to four straight Super Bowls in the early nineties and lost every one, the first on a kick that sailed wide right, a phrase that has haunted you ever since. None of it ever thinned the crowd. You became Bills Mafia, leaping through folding tables in the snow and raising millions for strangers, louder after every heartbreak. The trophy never came, and the faith never once needed it.",
    "why": [
      "Your loyalty is unconditional and sits at the ceiling. You do not leave, and Bills Mafia turned a city's worst heartbreaks into a reason to show up harder. You are the same.",
      "Your emotional expression is loud, collective, and unembarrassed. The feeling happens in public or it barely happened, and a parking lot full of smashed tables is just that turned all the way up.",
      "You convert pain into belonging instead of bitterness. Four lost finals would have scattered most groups. It only ever made yours bigger."
    ]
  },
  "NE": {
    "code3": "NWE", "kitType": "duo", "secondaryColor": "#C60C30",
    "name": "New England Patriots",
    "emoji": "🇺🇸",
    "color": "#002244",
    "tagline": "You were never the neutral's pick, and you never once wanted to be.",
    "desc": "Your standard is winning, and you have never apologized for it. Across eighteen years you collected six titles, until a generation of dominance stopped feeling like a thrill and became the baseline, the bare minimum, the way things were supposed to go. The rest of the league called you cheaters and resented every banner, and you took the contempt as proof. Do your job, say nothing, win again. The hatred was only ever the sound of everyone else losing.",
    "why": [
      "Your trust in the system is at the absolute ceiling. You lean on preparation over inspiration and systems over sentiment, which is exactly how a generation of titles got built.",
      "Your chaos tolerance is genuinely low. You want control and the discipline to earn it, and you have no patience for doing things the romantic way.",
      "Your relationship to being liked is indifferent. You were here to be right, the scoreboard agreed for years, and the contempt only ever read as confirmation."
    ]
  },
  "GB": {
    "code3": "GNB", "kitType": "duo", "secondaryColor": "#FFB612",
    "name": "Green Bay Packers",
    "emoji": "🧀",
    "color": "#203731",
    "tagline": "You own a piece of it, and the smallest town in the league made it impossible to take.",
    "desc": "Your team cannot be bought, moved, or taken from you, because you already own it. The smallest market in the league is also the only one whose fans hold actual shares, hundreds of thousands of them, in a team owned by the public instead of a billionaire. You fill a frozen stadium they call the tundra, you wear foam wedges of cheese without a trace of irony, and you live in Titletown, with more championships than anyone. No one can ever make this someone else's trophy.",
    "why": [
      "Your loyalty is unconditional and sits at the absolute ceiling. You stay, full stop, and a town small enough to own its team outright is built entirely on people who feel that way. You are the same.",
      "Your community drive is the place-rooted, collective kind, not the global-brand kind. The thing is shared or it barely counts, which is why a town of a hundred thousand can out-belong every metropolis in the sport.",
      "Your rootedness is total and you do not pull it up for a warmer offer. Where you are from is load-bearing, and you would sooner freeze in the stands than let it be moved."
    ]
  },
  "DAL": {
    "code3": "DAL", "kitType": "duo", "secondaryColor": "#869397",
    "name": "Dallas Cowboys",
    "emoji": "⭐",
    "color": "#003594",
    "tagline": "Thirty years without a title, the most valuable team in sports, and your swagger never dipped.",
    "desc": "You are the most famous team in sports and the most divisive, which turns out to be the same thing. The blue star shows up in every state and half the world, worn by people who have never set foot in Texas. You won three titles in the nineties, then nothing for thirty years, the longest drought of any team that still acts like the main event. None of it touched the swagger or the price tag, still the most valuable franchise on earth. America's Team was never about being loved. It was about being impossible to ignore.",
    "why": [
      "Your ambition is at the absolute ceiling, and crucially it does not wait for evidence. You behave like the main event whether or not the results agree, which is the only kind of fan a lone star on the helmet was ever going to suit.",
      "Your need to be seen runs high. You would rather be the story than the role player, and a self-appointed America's Team is exactly that instinct made into an identity.",
      "Your self-belief survives long droughts intact. Decades without the prize never dented the swagger, because the swagger was never really about the prize."
    ]
  },
  "PIT": {
    "code3": "PIT", "kitType": "duo", "secondaryColor": "#101820",
    "name": "Pittsburgh Steelers",
    "emoji": "⚒️",
    "color": "#FFB612",
    "tagline": "You come from a place that made steel and judged it by whether it held, and you expect no less.",
    "desc": "Your belonging is inseparable from where you came from. Yinzer comes from yinz, the Pittsburgh word for 'you all,' an identity older than the team's success. The Terrible Towel began in 1975 as a radio gimmick and became a talisman that now funds care for people with disabilities, and when the mills closed and scattered the city, waving it was how you held onto home. Wherever you ended up, the team and the place stayed inseparable.",
    "why": [
      "Your rootedness is near the ceiling and it is the specific, place-fused kind. Where you come from is inseparable from who you are, and Yinzer is literally the local word for \"you all.\"",
      "Your standards are high and unsentimental. You come from a place that made steel and judged it by whether it held, and you have never learned to expect less of anything.",
      "Your loyalty is steady and low-drama. You do not chase chaos or reinvention, you just expect things to be done right and done to last."
    ]
  },
  "LV": {
    "code3": "LVR", "kitType": "duo", "secondaryColor": "#A5ACAF",
    "name": "Las Vegas Raiders",
    "emoji": "☠️",
    "color": "#000000",
    "tagline": "You followed the silver and black through three home cities, loyal to the colors and never the place.",
    "desc": "You belong to an identity, not an address, and you wear it like a warning. The Black Hole began in 1995 when a group of fans in Oakland built the most feared section in the league, painted silver and black, asking nobody's permission. Then the team left for Los Angeles, came back, and left again for Las Vegas, and the Black Hole went with it every time. The city kept changing. The thing you belonged to never did.",
    "why": [
      "Your chaos tolerance is near the ceiling. You are drawn to the outlaw edge, the thing that asks nobody's permission, and a section painted silver and black that scares the league is exactly your speed.",
      "Your loyalty is to an identity rather than an address. Three home cities never loosened your grip, because you were never loyal to the place, only to the colors.",
      "Your emotional pull is to menace and belonging at once. You want to be feared and you want to be part of something, and the Black Hole gives you both."
    ]
  },
  "NO": {
    "code3": "NOR", "kitType": "duo", "secondaryColor": "#101820",
    "name": "New Orleans Saints",
    "emoji": "⚜️",
    "color": "#D3BC8D",
    "tagline": "Your city went under and was told to stay down, so you answered as champions.",
    "desc": "Your faith was tested the way few fanbases ever are. Who Dat is the chant that answers itself: who dat say dey gonna beat dem Saints? For years the honest answer was everybody, and fans wore paper bags as the Aints. Then Katrina flooded the city and turned the Superdome into a shelter for the desperate. Four years later the Saints won it all, and a city that had been told to give up put the paper bags away for good.",
    "why": [
      "Your emotional expression is at the absolute ceiling, communal and unguarded. The feeling is the whole point, and Who Dat is a chant a whole city answers together.",
      "Your loyalty was tested harder than most ever face and held. The dome sheltered the city before it hosted the parade, and you were loud in both.",
      "Your community and roots run deep and local. This is your city before it is your team, which is exactly why the comeback meant what it did."
    ]
  },
  "DET": {
    "code3": "DET", "kitType": "duo", "secondaryColor": "#B0B7BC",
    "name": "Detroit Lions",
    "emoji": "🦁",
    "color": "#0076B6",
    "tagline": "Every Thanksgiving the whole country tunes in, and for decades you lost in front of them and stayed.",
    "desc": "You show up for something that has given you almost nothing back, and you decided long ago that was enough. A pride is a family of lions, and pride is what this fanbase has instead of trophies. No title since 1957, never a Super Bowl, and once an entire season without a single win. None of it ever made you reconsider, because you were never in it for the payoff. You were in it because it is yours.",
    "why": [
      "Your loyalty is at the absolute ceiling, and it is not a transaction. There is no return on this investment and there never needed to be one.",
      "Your rootedness is deep and unglamorous. This is a family thing, a city thing, a generational thing, not a bandwagon, and a pride is exactly a family.",
      "Your motivation is the belonging itself, not the payoff. The trophy case being bare changes nothing about whose team this is."
    ]
  },
  "KC": {
    "code3": "KAN", "kitType": "duo", "secondaryColor": "#FFB81C",
    "name": "Kansas City Chiefs",
    "emoji": "🏹",
    "color": "#E31837",
    "tagline": "Fifty years between titles, and now you are the team the whole league is desperate to beat.",
    "desc": "You belong to a kingdom that spent most of its history waiting, and now sits on the throne. Chiefs Kingdom is what Kansas City calls itself, and Arrowhead is the loudest stadium on earth, a Guinness record, red from the first row to the last. The titles came late and all at once, and somewhere in the celebration you noticed you had become the team you grew up resenting. You carry it differently than the cold dynasties do, because you remember the fifty years before.",
    "why": [
      "Your ambition is high and recently fulfilled, and you carry it differently than people born winning. You spent decades waiting, so the throne still feels a little unreal.",
      "Your emotional and community pull is loud and shared. The noise holds a world record, and the point of it was never volume, it was doing something together.",
      "Your self-awareness is high. Success arrived and turned you into the empire, and you keep checking the mirror because you remember the other side of it."
    ]
  },
  "SF": {
    "code3": "SFO", "kitType": "duo", "secondaryColor": "#B3995D",
    "name": "San Francisco 49ers",
    "emoji": "⛏️",
    "color": "#AA0000",
    "tagline": "You struck gold so completely once that everything since has felt a step short of it.",
    "desc": "You expect excellence the way only people who once had it can. The name comes from the forty-niners, the prospectors who rushed west in 1849 chasing gold, and the franchise struck it: five championships in an era so elegant it set the standard for everyone else. Everything since has been measured against that, which is why the recent near-misses sting the way they do. The fanbase calls itself the Faithful, and lately it has also been Fitful.",
    "why": [
      "Your ambition and process both run high. Winning is necessary but not sufficient; it has to be done beautifully, the way the dynasty years taught you it could be.",
      "You hold yourself to a peak you have actually stood on, which is the difference between hunger and homesickness. Coming close no longer counts here.",
      "Your faith is real but fraying at the edges. The Faithful is the name, and lately it has also felt a little Fitful, waiting to feel that good again."
    ]
  },
  "PHI": {
    "code3": "PHI", "kitType": "duo", "secondaryColor": "#A5ACAF",
    "name": "Philadelphia Eagles",
    "emoji": "🦅",
    "color": "#004C54",
    "tagline": "You were the best team in football and still wore dog masks, then took the title off the dynasty.",
    "desc": "You turned being doubted into a personality. The chant you adopted came from a London club branded as hooligans in the 1970s, fans who decided the contempt suited them fine, and Philadelphia heard its own soul in it. You booed Santa, booed your own picks, wore dog masks when the world called you underdogs, then climbed greased poles when you beat the dynasties anyway. Nobody likes you. You genuinely could not care less.",
    "why": [
      "Your rootedness is at the absolute ceiling and it is fiercely local. This is Philadelphia's team to its bones, and no borrowed anthem changed whose accent it gets sung in.",
      "Your emotional expression and chaos tolerance both run hot. You boo your own picks, wear dog masks, and climb greased poles, because the feeling has to come all the way out.",
      "You stopped wanting to be liked a long time ago. What you want is to be proven right, and you have made a habit of taking it from the teams that were supposed to win."
    ]
  },
  "SEA": {
    "code3": "SEA", "kitType": "duo", "secondaryColor": "#69BE28",
    "name": "Seattle Seahawks",
    "emoji": "🔊",
    "color": "#002244",
    "tagline": "You are loud enough to move the needle, and on your best day you move the ground itself.",
    "desc": "You do not believe in the difference between the crowd and the team. In 1984 the franchise retired the number twelve so no player could ever wear it again, because the twelfth man was you. You have drawn false starts out of silence, set world records for sheer volume, and once roared loud enough to register as an earthquake. Other fans show up to watch their team. You show up to be on it.",
    "why": [
      "Your community drive is at the absolute ceiling. You have never accepted that being in the stands means being outside the game, and the franchise agreed strongly enough to put it in the rafters.",
      "Your emotional expression is collective and physical. When this crowd decides to be heard, seismographs and opposing linemen find out together.",
      "You show up to participate, not to watch. Other fans attend their team. You consider yourself on it."
    ]
  },
  "MIA": {
    "code3": "MIA", "kitType": "duo", "secondaryColor": "#FC4C02",
    "name": "Miami Dolphins",
    "emoji": "🐬",
    "color": "#008E97",
    "tagline": "You hold the one perfect season nobody has matched in fifty years, and you need it to stay that way.",
    "desc": "You are the keeper of the one perfect thing. In 1972 the franchise won every game it played, the only flawless season in the sport's history, and no one has matched it in over fifty years. Every autumn the survivors are said to raise a glass the moment the last unbeaten team falls, because the record is the inheritance. You have spent decades proud of a ghost and waiting to feel that good again. Dolfan is the word. The perfection is the point.",
    "why": [
      "Your defining trait is guarding one perfect thing. Nineteen seventy-two still stands alone, and a small honest part of you needs it to stay that way.",
      "Your pride is inheritance more than ambition. The record is the point, passed down and toasted every autumn the last unbeaten team falls.",
      "Your relationship to the present is patient and a little haunted. The best thing that ever happened here happened before most of you were born, and you are still setting a place for its successor."
    ]
  },
  "LAC": {
    "code3": "LAC", "kitType": "duo", "secondaryColor": "#FFC20E",
    "name": "Los Angeles Chargers",
    "emoji": "⚡",
    "color": "#0080C6",
    "tagline": "You expect the heartbreak and show up anyway, even after they left San Diego.",
    "desc": "You keep bolting up for a team that keeps finding new ways to break your heart. After fifty-six years in San Diego it packed up for Los Angeles in 2017, leaving a fanbase that burned its jerseys in the street, and it now plays home games to crowds wearing the other team's colors. It has never won a title and has a gift for losing the games it should win. You keep coming back, because the curse is yours and so is the hope.",
    "why": [
      "Your chaos tolerance is high and your roots are loose, which is a hard combination to live with. The heartbreak arrives annually in a new costume, and annually you renew the season tickets.",
      "Your emotional investment is real and a little masochistic. You have learned to expect the heartbreak and turn up for it anyway.",
      "Your loyalty survived an actual abandonment. They left the city that loved them for half a century, and that still is not the cruelest thing they have done to you."
    ]
  },
  "BAL": {
    "code3": "BAL", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Baltimore Ravens",
    "emoji": "🐦‍⬛",
    "color": "#241773",
    "tagline": "A team stolen in the night, rebuilt under a poem's name and made to be feared.",
    "desc": "You come from a city that does not forgive easily and does not forget at all. Baltimore lost its old team to Indianapolis in 1984, waited twelve years, and got a new one only because Cleveland lost its own. They named it for the raven in Edgar Allan Poe's most famous poem, since Poe is buried here, and built it on a defense so suffocating it set the league's standard for menace. The Flock releases live ravens before kickoff. Nevermore was always the mood.",
    "why": [
      "Your defining instinct is to be feared rather than liked. The franchise took its name from the darkest poem in American letters and its reputation from its defense, and both fit you.",
      "Your loyalty and roots are deep and a little vengeful. A team was taken from your city in the night, so you built a new one and made sure no one would enjoy facing it.",
      "Your emotional register is dark and proud. You took your name from a poem about something that refuses to leave, and Nevermore was always the mood."
    ]
  },
  "CLE": {
    "code3": "CLE", "kitType": "duo", "secondaryColor": "#311D00",
    "name": "Cleveland Browns",
    "emoji": "🐶",
    "color": "#FF3C00",
    "tagline": "They took your team, so you kept its name and colors and never stopped barking.",
    "desc": "You bark. It started in 1985, when two cornerbacks barked at each other in practice and the cheap-seat bleachers barked back, and it never stopped. Not when the owner moved the team to Baltimore in 1995, not when you fought to keep the name and colors and history and waited three years to get a team back, not through a winless season and a list of heartbreaks the city knows by name. You have never seen a Super Bowl. You would not be anyone else.",
    "why": [
      "Your loyalty is at the absolute ceiling and entirely unconditional. The team has given you almost nothing, and you would not trade a single bark of it.",
      "Your community and chaos both run hot. The Dawg Pound barks because that is how a working city makes its love physical and loud.",
      "Your wound is external and you refused to let it win. The move happened in public, and what came back three years later was still, unmistakably, yours."
    ]
  },
  "NYG": {
    "code3": "NYG", "kitType": "duo", "secondaryColor": "#A71930",
    "name": "New York Giants",
    "emoji": "🗽",
    "color": "#0B2265",
    "tagline": "You carry the calm of a team that already won, and you are the reason the unbeatable one wasn't.",
    "desc": "You do not panic. You have the unbothered confidence of old money, the kind that has won enough already to stop chasing the spotlight. One family bought this team for five hundred dollars in 1925 and never let go, and it became the calm grown-up of a loud league. Your quiet talent is for humbling the teams everyone else is afraid of, the unbeaten ones, the untouchable ones, the dynasties certain their moment had finally arrived. Big Blue doesn't chase legends. It ends them.",
    "why": [
      "Your defining trait is calm. The loudest league in sport has never once raised your heart rate, and the trophies came without the shouting.",
      "Your loyalty and roots are deep and quiet. A century of single-family stewardship gave this team its temperament, and it gave you yours.",
      "Your talent is for humbling giants. You do not make noise, but the one time a team looked truly unbeatable, you were the reason it was not."
    ]
  },
  "TB": {
    "code3": "TBB", "kitType": "duo", "secondaryColor": "#34302B",
    "name": "Tampa Bay Buccaneers",
    "emoji": "🏴‍☠️",
    "color": "#D50A0A",
    "tagline": "You were the punchline so long that every win still feels like a heist, cannon and all.",
    "desc": "You started by losing. Not a game, not a season, but the first twenty-six games this franchise ever played, the worst start in the sport's history. So Tampa leaned all the way into its old pirate festival: the Krewe, the costumes, a hundred-foot ship in the end zone that fires a cannon every time you score. Then, against all of it, you won the whole thing. Twice. You party because you remember the alternative.",
    "why": [
      "Your chaos tolerance runs high and you wear it as fun. You were the punchline for so long that winning still feels like a heist, so you dress like pirates and fire a cannon.",
      "Your relationship to success is gleeful and disbelieving. You celebrate like people who remember being the worst, because you were, historically so.",
      "Your identity is built on the turnaround, not the pedigree. No team has ever opened worse, no party has ever earned its cannon more, and both facts are yours."
    ]
  },
  "MIN": {
    "code3": "MIN", "kitType": "duo", "secondaryColor": "#FFC62F",
    "name": "Minnesota Vikings",
    "emoji": "⚔️",
    "color": "#4F2683",
    "tagline": "Four times at the doorstep of it all, denied every time, and you chant Skol anyway.",
    "desc": "You expect the worst, and you show up anyway. Minnesota was settled by Scandinavians, so its team is the Vikings, with the horns and a war chant the whole stadium thunders together: Skol. Four times this team reached the edge of a championship, and four times found a new and crueler way to fall short. You have made your peace with the doom. You raise your arms and chant for it anyway, because a hope you can't kill is its own kind of religion.",
    "why": [
      "Your emotional expression is loud and communal, and it has been hardened by loss. The whole stadium thunders the Skol chant together, and you mean every beat of it.",
      "Your defining pattern is bracing for the worst. Four times at the doorstep, four crueler ways to fall short, and you stopped expecting a different ending long ago.",
      "Your loyalty is fatalist but unbreakable. You have watched the worst outcome arrive four separate times, and the chant next season is always exactly as loud."
    ]
  },
  "CHI": {
    "code3": "CHI", "kitType": "duo", "secondaryColor": "#C83803",
    "name": "Chicago Bears",
    "emoji": "🐻",
    "color": "#0B162A",
    "tagline": "You helped invent this league and mastered everything but the one spot that decides games.",
    "desc": "You don't say 'the Bears,' you say Da Bears, in the accent the whole city shares. This team helped invent the league in 1920, has won more games than anyone since, and built a century on ferocious defense and refusing to do anything the easy way. The Monsters of the Midway peaked with one of the most dominant teams the sport has seen, then spent the decades since hunting the one thing they could never draft: a quarterback. You grind on anyway. That's the whole point of you.",
    "why": [
      "Your rootedness is near the ceiling and it is woven into the city's accent. You do not say the Bears, you say Da Bears, and the whole town says it with you.",
      "Your pride is in toughness and doing the hard things right. A hundred seasons of shoulder-first football, and you would not trade one of them for style points.",
      "Your one running frustration is real and a little maddening. You have mastered every part of the game except the one glamorous position that decides it, and you have stopped pretending that does not get to you."
    ]
  },
  "IND": {
    "code3": "IND", "kitType": "solid", "secondaryColor": null,
    "name": "Indianapolis Colts",
    "emoji": "🐎",
    "color": "#002C5F",
    "tagline": "You win with precision indoors, behind one brilliant arm at a time that never stays long.",
    "desc": "You arrived in the dead of night. In 1984 fifteen moving trucks pulled the whole franchise out of Baltimore before the city woke, and Indianapolis got the team it had already built a dome for. You learned to win the clean way, climate-controlled, on precision and the arm of a quarterback who could thread anything. Twice you found that genius. Twice he was gone too soon, once to his body, once to a retirement no one saw coming. You win on brilliance, and you have learned to brace for its end.",
    "why": [
      "Your trust in the system runs high and clean. You win with precision, climate-controlled, on preparation and a brilliant arm, never the ugly way.",
      "Your defining ache is the brevity of genius. The greatest arms of two eras both left before the story finished, and part of you now reads every golden age as borrowed time.",
      "Your roots are real but recent and a little unsettled. The franchise's first hours here were a secret, and you built an honest home on top of that strange beginning."
    ]
  },
  "DEN": {
    "code3": "DEN", "kitType": "duo", "secondaryColor": "#002244",
    "name": "Denver Broncos",
    "emoji": "🏔️",
    "color": "#FB4F14",
    "tagline": "You play a mile up where even the air is on your side, carried like the ground roots for you.",
    "desc": "You are the only team for a thousand miles, so the whole Rocky Mountain region rolls in behind you, the way it has since 1960. Your home sits exactly one mile up, and visiting teams spend the fourth quarter gasping at air that has never once bothered you. You have won it all three times, you expect to again, and that expectation does not rise or fall with the standings. You do not just support this team. You are the altitude it plays at.",
    "why": [
      "Your rootedness is deep and regional. From the plains to the peaks there is exactly one flag to fly, and an entire corner of the map flies it with you.",
      "Your standard is high and the environment itself backs you. Home sits a mile above everyone else, and late in games the visitors always remember it.",
      "Your expectation is steady and unshaken by the standings. Championships are not a dream here, they are a schedule that happens to be running late."
    ]
  },
  "LAR": {
    "code3": "LAR", "kitType": "duo", "secondaryColor": "#FFA300",
    "name": "Los Angeles Rams",
    "emoji": "🐏",
    "color": "#003594",
    "tagline": "You have never been the kind to stay somewhere just because you started there.",
    "desc": "You are the only franchise to win it all in three different cities, because you have always gone where the lights were brightest and never looked back at the ones you left. In 1948 you became the first team to paint a logo on a helmet, two curling horns, because of course you did. You built the most dazzling offense the sport had seen and let the world call it a show. When you wanted another title you traded the whole future to buy it, and it worked. You don't wait around for brilliance. You chase it across the map, and you have never once been sorry.",
    "why": [
      "Your ambition is at the ceiling and your roots are deliberately light. You follow the brightest lights on the field, and you have never apologized for loving the show more than the postcode.",
      "Your process is sharp and aggressive. Patience is for franchises without a plan; you mortgage tomorrow when the window is open, and the window opened.",
      "Your relationship to place is unsentimental. Home is wherever the stage is biggest right now, and you have never once apologized for moving toward it."
    ]
  },
  "CIN": {
    "code3": "CIN", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Cincinnati Bengals",
    "emoji": "🐯",
    "color": "#FB4F14",
    "tagline": "Thirty-one years without a playoff win, and you never once switched the striped helmets.",
    "desc": "You were founded in 1968 by a coach the team up the road had just thrown away, which tells you everything about the chip you've carried since. For decades you were the small-market afterthought, and you reached the big game three times and lost all three. You wore tiger stripes nobody else would dare and chanted Who Dey into rooms that weren't listening. Then lately you got a team good enough to scare people. The swagger is new. The chip is not, and you would not trade it for anything.",
    "why": [
      "Your defining trait is a chip on the shoulder that never quite leaves. You were overlooked for so long that respect, now it is here, still feels mostly like a score to settle.",
      "Your roots and community run deep in a small market. The chant was there long before the winning was, and you never needed an audience to keep it going.",
      "Your chaos tolerance is real. A franchise born from a grudge spent decades as the afterthought, and the recent rise has not softened the edge."
    ]
  },
  "ATL": {
    "code3": "ATL", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Atlanta Falcons",
    "emoji": "🪶",
    "color": "#A71930",
    "tagline": "Up twenty-five in the biggest game of your life, and you've never trusted a lead since.",
    "desc": "You came into the league in 1966 named for a bird that climbs, and your slogan, decades later, became Rise Up, which is the cruel joke, because what the world remembers about you is a fall. You reached the big game twice and lost both, and the second time you were twenty-five points up and watched all of it go in front of everyone. A single scoreline has stood in for your whole history ever since. You are the Dirty Birds, and you have learned to enjoy the climb and brace for the drop at once.",
    "why": [
      "Your defining trait is not trusting a lead, ever. You have seen the sure thing dissolve on the grandest occasion there is, and the flinch never fully left.",
      "Your chaos tolerance is high and a little haunted. The whole identity points upward, and the moment everyone else remembers points the other way.",
      "Your emotional life swings between the climb and the dread. Every good season comes with a countdown in the back of your mind, and you have learned to love it anyway."
    ]
  },
  "ARI": {
    "code3": "ARI", "kitType": "duo", "secondaryColor": "#000000",
    "name": "Arizona Cardinals",
    "emoji": "🐦",
    "color": "#97233F",
    "tagline": "You back the oldest team in football, no title since 1947, and only harder to get rid of.",
    "desc": "You go back to 1898, older than the league itself, named off a box of faded hand-me-downs. You've been hauled from Chicago to St. Louis to the desert, lost more games than any team in the sport, and watched your last title recede so far back the people who saw it are mostly gone. You got close once and lost that too, in the final minute. And you are still here, the team that outlasted two World Wars, the Depression, and every reason in the world to quit.",
    "why": [
      "Your defining trait is sheer endurance. You have been given almost nothing for longer than almost anyone, and somehow that only made you harder to get rid of.",
      "Your loyalty is quiet and stubborn. Three cities, twelve decades, more defeats than anyone, and quitting has never once been on the table.",
      "Your relationship to glory is patient and distant. The last title is nearly a century back, and your response has been to outlast everything that came after it."
    ]
  },
  "WAS": {
    "code3": "WAS", "kitType": "duo", "secondaryColor": "#FFB612",
    "name": "Washington Commanders",
    "emoji": "🏛️",
    "color": "#5A1414",
    "tagline": "Your loyalty was never to the name, so when the name changed, you didn't.",
    "desc": "For one stretch in the eighties and nineties you were as good as anyone alive: three titles in a decade, a famous offensive line, a stadium in the capital that shook when the crowd got loud. Then came the long fall, a generation of losing and mismanagement, and a team that for two years did not even carry a name. You stayed for all of it, the way you always have, for the burgundy and gold, the city, and the people beside you.",
    "why": [
      "Your loyalty is to something deeper than a name. When the name itself changed, you did not, because you were never loyal to the name in the first place.",
      "Your roots run deep through a glory era and a long fall alike. You have seen this team at the very top and at rock bottom, and your seat never changed.",
      "Your attachment survived the one test most fandoms never face: the badge itself going away. What you support turned out to be deeper than anything printed on it."
    ]
  },
  "NYJ": {
    "code3": "NYJ", "kitType": "solid", "secondaryColor": null,
    "name": "New York Jets",
    "emoji": "✈️",
    "color": "#125740",
    "tagline": "One title on a guarantee, the longest wait in sports for a second, and you are back every year.",
    "desc": "You arrived in 1960, and a decade later your brash young quarterback guaranteed a win nobody gave you a prayer in, then delivered it. That was the peak. You've spent every season since chasing it through dysfunction so reliable it became a punchline, sharing a stadium with the calm, decorated older team while you supplied the chaos. You are Gang Green, certain every August that this is the year. You are almost always wrong, and you have never once stopped being certain.",
    "why": [
      "Your defining pattern is hope that survives everything. Your heart breaks every year, you choose to believe anyway, and somehow that has always been enough.",
      "Your chaos tolerance is near the ceiling. The roommate has all the rings and none of the drama, and you have long since made the drama your entire personality.",
      "Your loyalty is comic and unkillable. Sixty years of evidence have not put a dent in your optimism, and at this point nothing will."
    ]
  },
  "TEN": {
    "code3": "TEN", "kitType": "duo", "secondaryColor": "#002244",
    "name": "Tennessee Titans",
    "emoji": "🗡️",
    "color": "#4B92DB",
    "tagline": "One yard short of it all on the final play, and you've measured every yard since.",
    "desc": "You came to Tennessee in 1997 from another city and another name, left a beloved old identity behind, and built a new one out of the hardest, most physical football you could play. In your first year under the new name you ran all the way to the Super Bowl and lost it by the length of a man's reach, a receiver stretched out and stopped a yard from tying the game as the clock hit zero. You grind for every yard there is. The one that mattered most, you came up thirty-six inches short of, and you've measured everything against it since.",
    "why": [
      "Your effort-over-flash score is the defining one. No need for the spotlight, just the willingness to do the hard, unglamorous work, and that is the whole Titans identity.",
      "Your loyalty is real but quiet, the kind measured in showing up rather than trophies won. Two-Tone Blue runs the same way.",
      "Your resilience through near-misses is fuel, not scar tissue. Coming up just short taught you more than an easy win could, and you have measured everything against it since."
    ]
  },
  "HOU": {
    "code3": "HOU", "kitType": "duo", "secondaryColor": "#C41230",
    "name": "Houston Texans",
    "emoji": "🐂",
    "color": "#03202F",
    "tagline": "Your city lost its team, so you built one from nothing with the whole state's name on it.",
    "desc": "In the late nineties the fourth-biggest city in America had its football team taken away to another state, and for a few years Houston had nothing. So in 2002 you started over: a new team, a bull's head on the helmet with a lone star for an eye, the whole state's name across the chest. You don't have the decades of glory and heartbreak the old guard trades on. What you have is a young team, a huge proud city, and the specific chip of people who know exactly what it feels like to lose a team and have sworn never to feel it again. H-Town, built from the ground up.",
    "why": [
      "Your defining trait is restoration after loss. Your city had its team taken away, so you built your own, and you have never been more certain it was worth it.",
      "Your roots are young but proud and very local. No inherited tradition, no borrowed history: everything this fandom is, people in one city made in twenty years.",
      "Your chip is specific. The city spent a few autumns with no team at all, and everything since has been fueled by the refusal to let that repeat."
    ]
  },
  "CAR": {
    "code3": "CAR", "kitType": "duo", "secondaryColor": "#101820",
    "name": "Carolina Panthers",
    "emoji": "🐈‍⬛",
    "color": "#0085CA",
    "tagline": "You live by a two-word creed to keep fighting, from a man who lived it, and you never stop.",
    "desc": "You arrived in 1995 as the team for two whole states, the Carolinas, nobody's single city and everybody's region. Your defining moment was never a trophy. It was a beloved coach, facing a terminal diagnosis, who told the team he'd had two choices, quit or keep pounding, and he had chosen to keep pounding, then outlasted his prognosis by more than a year. Those two words became your creed, beaten on a drum before every home game. You've reached the very biggest stage twice and come away with nothing both times, and not once has it made you want to quit. That was always the point.",
    "why": [
      "Your defining trait is a creed of never quitting. Your whole identity is two words that mean keep fighting no matter the score, and you believe them because they came from someone who lived them when it counted most.",
      "Your loyalty is regional and broad. No single skyline owns this fandom; it stretches across two states and belongs to everyone in between.",
      "Your resilience is the point, not the trophy. Keep pounding is not a slogan to you, it is the whole instruction, and empty-handed seasons have never rewritten it."
    ]
  },
  "JAX": {
    "code3": "JAX", "kitType": "duo", "secondaryColor": "#101820",
    "name": "Jacksonville Jaguars",
    "emoji": "🐆",
    "color": "#006778",
    "tagline": "Treated like the league's secret, so you got loud and chant your county like a dare.",
    "desc": "You arrived in 1995 in one of the smallest markets the league has, a city plenty of people didn't expect to keep a team at all. You've spent the years since overlooked, ridiculed, even shipped overseas to play home games as if you belonged to no one. So you did the opposite of fade: you painted yourselves teal and turned the name of your own county into a roar nobody could pretend not to hear. Duuuval. You are the most local fans in football, on purpose, because everyone keeps treating you as the least permanent.",
    "why": [
      "Your defining trait is defiant locality. Everyone keeps overlooking you, so you got louder and more local than anyone, roaring exactly where you are from like a dare.",
      "Your community and roots are fierce and specific. The louder the outside laughed, the more local this fandom got, until the whole county was one voice.",
      "Your chip comes from being treated as the least permanent. Every relocation rumor got answered the same way, by digging in deeper, and the roots are now the deepest part."
    ]
  }
};

const archetypes = {
  "BUF": "Bills Mafia",
  "NE": "The Minuteman",
  "GB": "The Cheesehead",
  "DAL": "The Star",
  "PIT": "The Yinzer",
  "LV": "The Black Hole",
  "NO": "Who Dat Nation",
  "DET": "The Pride",
  "KC": "Chiefs Kingdom",
  "SF": "The Faithful",
  "PHI": "Bird Gang",
  "SEA": "The 12s",
  "MIA": "Dolfan",
  "LAC": "Bolt Up",
  "BAL": "The Flock",
  "CLE": "The Dawg Pound",
  "NYG": "Big Blue",
  "TB": "The Krewe",
  "MIN": "Skol",
  "CHI": "Da Bears",
  "IND": "The Horseshoe",
  "DEN": "Broncos Country",
  "LAR": "The Horns",
  "CIN": "The Stripes",
  "ATL": "The Dirty Birds",
  "ARI": "Big Red",
  "WAS": "The Burgundy and Gold",
  "NYJ": "Gang Green",
  "TEN": "Titan Up",
  "HOU": "H-Town",
  "CAR": "Keep Pounding",
  "JAX": "Duuuval"
};

const teamTextColors = {
  "BUF": "#93A9CF",
  "NE": "#93A1B0",
  "GB": "#A1AAA8",
  "DAL": "#93AAD2",
  "PIT": "#FFB612",
  "LV": "#B9B9B9",
  "NO": "#D3BC8D",
  "DET": "#93C5E0",
  "KC": "#F39EAA",
  "SF": "#DB9393",
  "PHI": "#93B4B7",
  "SEA": "#93A1B0",
  "MIA": "#59B6BB",
  "LAC": "#59ACDA",
  "BAL": "#A39DC4",
  "CLE": "#FF8059",
  "NYG": "#98A1BE",
  "TB": "#ED9898",
  "MIN": "#B5A3CA",
  "CHI": "#BCBFC4",
  "IND": "#93A6BB",
  "DEN": "#FC8D66",
  "LAR": "#93AAD2",
  "CIN": "#FC8D66",
  "ATL": "#DA9EA7",
  "ARI": "#D3A2AE",
  "WAS": "#B99C9C",
  "NYJ": "#9BB8AE",
  "TEN": "#8AB8E8",
  "HOU": "#94A1A7",
  "CAR": "#59B0DD",
  "JAX": "#93BFC6"
};

const greats = {
  "BUF": [
    {
      "name": "Jim Kelly",
      "years": "1986-1996",
      "note": "the quarterback who ran the no-huddle K-Gun to four straight Super Bowls."
    },
    {
      "name": "Bruce Smith",
      "years": "1985-1999",
      "note": "the most prolific pass rusher in league history, the spine of those defenses."
    },
    {
      "name": "Thurman Thomas",
      "years": "1988-2000",
      "note": "the dual-threat back who made the hurry-up offense go."
    },
    {
      "name": "Andre Reed",
      "years": "1985-1999",
      "note": "the receiver who turned short catches into long agony for defenses."
    },
    {
      "name": "Marv Levy",
      "years": "1986-1997",
      "note": "the coach who held the four-final era together with calm and conviction."
    }
  ],
  "NE": [
    {
      "name": "Tom Brady",
      "years": "2000-2019",
      "note": "the quarterback at the center of the entire dynasty, six titles in New England."
    },
    {
      "name": "Bill Belichick",
      "years": "2000-2023",
      "note": "the coach whose preparation and adaptability defined the era."
    },
    {
      "name": "John Hannah",
      "years": "1973-1985",
      "note": "widely called the greatest offensive lineman the sport has produced."
    },
    {
      "name": "Rob Gronkowski",
      "years": "2010-2018",
      "note": "the tight end who reset what the position could be."
    },
    {
      "name": "Adam Vinatieri",
      "years": "1996-2005",
      "note": "the kicker whose nerve decided two of the championships."
    }
  ],
  "GB": [
    {
      "name": "Curly Lambeau",
      "years": "1919-1949",
      "note": "founder, player, and coach who built the team and whose name the field carries."
    },
    {
      "name": "Don Hutson",
      "years": "1935-1945",
      "note": "the original superstar receiver who rewrote the position."
    },
    {
      "name": "Vince Lombardi",
      "years": "1959-1967",
      "note": "the coach whose dynasty was so total the Super Bowl trophy bears his name."
    },
    {
      "name": "Bart Starr",
      "years": "1956-1971",
      "note": "the quarterback who won the first two Super Bowls and the frozen Ice Bowl."
    },
    {
      "name": "Brett Favre",
      "years": "1992-2007",
      "note": "the gunslinger who made Lambeau his kingdom and a record start streak his calling card."
    }
  ],
  "DAL": [
    {
      "name": "Roger Staubach",
      "years": "1969-1979",
      "note": "the quarterback who made the late comeback a Cowboys trademark."
    },
    {
      "name": "Emmitt Smith",
      "years": "1990-2002",
      "note": "the all-time leading rusher in league history, the engine of the 90s titles."
    },
    {
      "name": "Troy Aikman",
      "years": "1989-2000",
      "note": "the precise passer at the helm of three championships."
    },
    {
      "name": "Bob Lilly",
      "years": "1961-1974",
      "note": "\"Mr. Cowboy,\" the first true franchise cornerstone on defense."
    },
    {
      "name": "Tom Landry",
      "years": "1960-1988",
      "note": "the coach in the fedora who built the brand over three decades."
    }
  ],
  "PIT": [
    {
      "name": "Joe Greene",
      "years": "1969-1981",
      "note": "\"Mean Joe,\" the anchor of the Steel Curtain defense."
    },
    {
      "name": "Terry Bradshaw",
      "years": "1970-1983",
      "note": "the quarterback who won four titles in six seasons."
    },
    {
      "name": "Franco Harris",
      "years": "1972-1983",
      "note": "the back behind the most famous play in league history."
    },
    {
      "name": "Jack Lambert",
      "years": "1974-1984",
      "note": "the gap-toothed linebacker who embodied the city's menace."
    },
    {
      "name": "Troy Polamalu",
      "years": "2003-2014",
      "note": "the safety whose instinct defined the modern Steelers."
    }
  ],
  "LV": [
    {
      "name": "Ken Stabler",
      "years": "1970-1979",
      "note": "\"The Snake,\" the gunslinger quarterback of the renegade era."
    },
    {
      "name": "Marcus Allen",
      "years": "1982-1992",
      "note": "the back whose vision and cutbacks defined a generation."
    },
    {
      "name": "Tim Brown",
      "years": "1988-2003",
      "note": "the receiver who carried the franchise through lean years."
    },
    {
      "name": "Howie Long",
      "years": "1981-1993",
      "note": "the defensive end who embodied the silver-and-black menace."
    },
    {
      "name": "Gene Upshaw",
      "years": "1967-1981",
      "note": "the Hall of Fame guard who anchored the great lines."
    }
  ],
  "NO": [
    {
      "name": "Drew Brees",
      "years": "2006-2020",
      "note": "the quarterback who arrived after the flood and led the city to its title."
    },
    {
      "name": "Archie Manning",
      "years": "1971-1982",
      "note": "the beloved passer who stayed loyal through the lean decades."
    },
    {
      "name": "Rickey Jackson",
      "years": "1981-1993",
      "note": "the relentless linebacker of the Dome Patrol defense."
    },
    {
      "name": "Deuce McAllister",
      "years": "2001-2008",
      "note": "the bruising back who became a hometown favorite."
    },
    {
      "name": "Sam Mills",
      "years": "1986-1994",
      "note": "the undersized linebacker whose heart defined the defense."
    }
  ],
  "DET": [
    {
      "name": "Barry Sanders",
      "years": "1989-1998",
      "note": "the back whose impossible cuts made him must-watch on bad teams."
    },
    {
      "name": "Calvin Johnson",
      "years": "2007-2015",
      "note": "\"Megatron,\" the receiver who looked unfair against any defense."
    },
    {
      "name": "Bobby Layne",
      "years": "1950-1958",
      "note": "the quarterback who led the franchise to its last titles."
    },
    {
      "name": "Joe Schmidt",
      "years": "1953-1965",
      "note": "the linebacker who modernized the position in Detroit."
    },
    {
      "name": "Dick Lane",
      "years": "1960-1965",
      "note": "\"Night Train,\" one of the great cornerbacks of any era."
    }
  ],
  "KC": [
    {
      "name": "Patrick Mahomes",
      "years": "2017-present",
      "note": "the quarterback at the center of the modern dynasty."
    },
    {
      "name": "Len Dawson",
      "years": "1962-1975",
      "note": "the passer who won the franchise's first championship."
    },
    {
      "name": "Derrick Thomas",
      "years": "1989-1999",
      "note": "the linebacker whose pass rush terrified the league."
    },
    {
      "name": "Tony Gonzalez",
      "years": "1997-2008",
      "note": "the tight end who redefined the position."
    },
    {
      "name": "Travis Kelce",
      "years": "2013-present",
      "note": "the tight end at the heart of the recent titles."
    }
  ],
  "SF": [
    {
      "name": "Joe Montana",
      "years": "1979-1992",
      "note": "the quarterback who won four titles and never seemed to panic."
    },
    {
      "name": "Jerry Rice",
      "years": "1985-2000",
      "note": "the receiver widely regarded as the greatest ever."
    },
    {
      "name": "Steve Young",
      "years": "1987-1999",
      "note": "the passer who stepped out of a legend's shadow into his own title."
    },
    {
      "name": "Ronnie Lott",
      "years": "1981-1990",
      "note": "the safety who hit like the whole defense at once."
    },
    {
      "name": "Bill Walsh",
      "years": "1979-1988",
      "note": "the coach whose offense reshaped the sport."
    }
  ],
  "PHI": [
    {
      "name": "Reggie White",
      "years": "1985-1992",
      "note": "the dominant pass rusher who terrorized the league from Philadelphia."
    },
    {
      "name": "Brian Dawkins",
      "years": "1996-2008",
      "note": "\"Weapon X,\" the safety who played with the city's full fury."
    },
    {
      "name": "Chuck Bednarik",
      "years": "1949-1962",
      "note": "\"Concrete Charlie,\" among the last to play both ways."
    },
    {
      "name": "Donovan McNabb",
      "years": "1999-2009",
      "note": "the quarterback of the long contending era."
    },
    {
      "name": "Jason Kelce",
      "years": "2011-2023",
      "note": "the center who became the beating heart of the fanbase."
    }
  ],
  "SEA": [
    {
      "name": "Steve Largent",
      "years": "1976-1989",
      "note": "the receiver who was the franchise's first great."
    },
    {
      "name": "Walter Jones",
      "years": "1997-2008",
      "note": "the left tackle widely rated among the best ever."
    },
    {
      "name": "Cortez Kennedy",
      "years": "1990-2000",
      "note": "the disruptive tackle who starred through lean years."
    },
    {
      "name": "Marshawn Lynch",
      "years": "2010-2019",
      "note": "\"Beast Mode,\" the back who embodied the team's force."
    },
    {
      "name": "Bobby Wagner",
      "years": "2012-2023",
      "note": "the linebacker at the center of the title-era defense."
    }
  ],
  "MIA": [
    {
      "name": "Dan Marino",
      "years": "1983-1999",
      "note": "the quarterback whose arm is legend and whose ring never came."
    },
    {
      "name": "Bob Griese",
      "years": "1967-1980",
      "note": "the passer who led the perfect season."
    },
    {
      "name": "Larry Csonka",
      "years": "1968-1979",
      "note": "the bruising back of the early-70s champions."
    },
    {
      "name": "Don Shula",
      "years": "1970-1995",
      "note": "the coach with the most wins ever and the only flawless season."
    },
    {
      "name": "Jason Taylor",
      "years": "1997-2011",
      "note": "the pass rusher who carried the defense for a generation."
    }
  ],
  "LAC": [
    {
      "name": "LaDainian Tomlinson",
      "years": "2001-2009",
      "note": "the back who set the single-season touchdown record."
    },
    {
      "name": "Dan Fouts",
      "years": "1973-1987",
      "note": "the passer who ran the high-flying Air Coryell offense."
    },
    {
      "name": "Antonio Gates",
      "years": "2003-2018",
      "note": "the tight end who arrived from basketball and rewrote the record book."
    },
    {
      "name": "Philip Rivers",
      "years": "2004-2019",
      "note": "the gunslinger who started every game for years on end."
    },
    {
      "name": "Junior Seau",
      "years": "1990-2002",
      "note": "the linebacker who played with relentless, full-tilt force."
    }
  ],
  "BAL": [
    {
      "name": "Ray Lewis",
      "years": "1996-2012",
      "note": "the linebacker who was the heart of two championship defenses."
    },
    {
      "name": "Ed Reed",
      "years": "2002-2012",
      "note": "the safety whose instincts changed games on their own."
    },
    {
      "name": "Jonathan Ogden",
      "years": "1996-2007",
      "note": "the left tackle and the franchise's very first draft pick."
    },
    {
      "name": "Joe Flacco",
      "years": "2008-2018",
      "note": "the quarterback who delivered the second title."
    },
    {
      "name": "Lamar Jackson",
      "years": "2018-present",
      "note": "the dual-threat passer and two-time MVP."
    }
  ],
  "CLE": [
    {
      "name": "Jim Brown",
      "years": "1957-1965",
      "note": "widely considered the greatest running back the sport has produced."
    },
    {
      "name": "Otto Graham",
      "years": "1946-1955",
      "note": "the quarterback who reached the title game nearly every year he played."
    },
    {
      "name": "Lou Groza",
      "years": "1946-1967",
      "note": "\"The Toe,\" the tackle and kicker who spanned the golden era."
    },
    {
      "name": "Ozzie Newsome",
      "years": "1978-1990",
      "note": "the tight end who became a Hall of Famer in brown and orange."
    },
    {
      "name": "Joe Thomas",
      "years": "2007-2017",
      "note": "the left tackle who never missed a snap on years of bad teams."
    }
  ],
  "NYG": [
    {
      "name": "Lawrence Taylor",
      "years": "1981-1993",
      "note": "the linebacker who changed how defense is played."
    },
    {
      "name": "Eli Manning",
      "years": "2004-2019",
      "note": "the quarterback who beat a perfect team in the Super Bowl, then did it again."
    },
    {
      "name": "Phil Simms",
      "years": "1979-1993",
      "note": "the passer of the first modern title team."
    },
    {
      "name": "Michael Strahan",
      "years": "1993-2007",
      "note": "the pass rusher who set the single-season sack record."
    },
    {
      "name": "Frank Gifford",
      "years": "1952-1964",
      "note": "the versatile star of the franchise's early glory."
    }
  ],
  "TB": [
    {
      "name": "Derrick Brooks",
      "years": "1995-2008",
      "note": "the linebacker who anchored the championship defense."
    },
    {
      "name": "Warren Sapp",
      "years": "1995-2003",
      "note": "the disruptive tackle at the center of that unit."
    },
    {
      "name": "John Lynch",
      "years": "1993-2003",
      "note": "the hard-hitting safety of the same era."
    },
    {
      "name": "Mike Alstott",
      "years": "1996-2007",
      "note": "\"A-Train,\" the bruising fullback the city adored."
    },
    {
      "name": "Lee Roy Selmon",
      "years": "1976-1984",
      "note": "the franchise's first star and first Hall of Famer."
    }
  ],
  "MIN": [
    {
      "name": "Fran Tarkenton",
      "years": "1961-1978",
      "note": "the scrambling quarterback who led three of the Super Bowl runs."
    },
    {
      "name": "Alan Page",
      "years": "1967-1978",
      "note": "the tackle and anchor of the Purple People Eaters."
    },
    {
      "name": "Cris Carter",
      "years": "1990-2001",
      "note": "the receiver who made the impossible catch routine."
    },
    {
      "name": "Randy Moss",
      "years": "1998-2004",
      "note": "the receiver who terrified defenses the moment he arrived."
    },
    {
      "name": "Adrian Peterson",
      "years": "2007-2016",
      "note": "the back who ran with singular violence and grace."
    }
  ],
  "CHI": [
    {
      "name": "Walter Payton",
      "years": "1975-1987",
      "note": "\"Sweetness,\" among the greatest and most complete backs ever."
    },
    {
      "name": "Dick Butkus",
      "years": "1965-1973",
      "note": "the linebacker who became the byword for football menace."
    },
    {
      "name": "Gale Sayers",
      "years": "1965-1971",
      "note": "the back whose grace made him unforgettable despite a short career."
    },
    {
      "name": "Brian Urlacher",
      "years": "2000-2012",
      "note": "the linebacker who carried the defense into the modern era."
    },
    {
      "name": "Mike Ditka",
      "years": "player and coach",
      "note": "the tight end and later coach of the 1985 champions."
    }
  ],
  "IND": [
    {
      "name": "Peyton Manning",
      "years": "1998-2011",
      "note": "the quarterback who delivered the Indianapolis title."
    },
    {
      "name": "Johnny Unitas",
      "years": "1956-1972",
      "note": "the passer who defined the franchise in its Baltimore years."
    },
    {
      "name": "Marvin Harrison",
      "years": "1996-2008",
      "note": "the receiver who turned precision into an art with Manning."
    },
    {
      "name": "Reggie Wayne",
      "years": "2001-2014",
      "note": "the receiver who carried the passing game for over a decade."
    },
    {
      "name": "Dwight Freeney",
      "years": "2002-2012",
      "note": "the pass rusher whose spin move defined the defense."
    }
  ],
  "DEN": [
    {
      "name": "John Elway",
      "years": "1983-1998",
      "note": "the quarterback who finally won it all twice to close his career."
    },
    {
      "name": "Terrell Davis",
      "years": "1995-2001",
      "note": "the back who powered both title runs."
    },
    {
      "name": "Von Miller",
      "years": "2011-2021",
      "note": "the pass rusher and Super Bowl 50 MVP."
    },
    {
      "name": "Champ Bailey",
      "years": "2004-2013",
      "note": "the cornerback who shut down half the field."
    },
    {
      "name": "Shannon Sharpe",
      "years": "1990-2003",
      "note": "the tight end who redefined the position in Denver."
    }
  ],
  "LAR": [
    {
      "name": "Eric Dickerson",
      "years": "1983-1987",
      "note": "the back who set the single-season rushing record."
    },
    {
      "name": "Merlin Olsen",
      "years": "1962-1976",
      "note": "the tackle of the Fearsome Foursome."
    },
    {
      "name": "Deacon Jones",
      "years": "1961-1971",
      "note": "the end who coined the term \"sack\" and embodied it."
    },
    {
      "name": "Aaron Donald",
      "years": "2014-2023",
      "note": "the dominant interior lineman of his era."
    },
    {
      "name": "Kurt Warner",
      "years": "1998-2003",
      "note": "the quarterback of the Greatest Show on Turf."
    }
  ],
  "CIN": [
    {
      "name": "Anthony Munoz",
      "years": "1980-1992",
      "note": "widely rated the greatest offensive lineman ever."
    },
    {
      "name": "Ken Anderson",
      "years": "1971-1986",
      "note": "the precise passer of the first Super Bowl team."
    },
    {
      "name": "Boomer Esiason",
      "years": "1984-1992",
      "note": "the quarterback of the second Super Bowl run."
    },
    {
      "name": "Chad Johnson",
      "years": "2001-2010",
      "note": "the receiver whose showmanship defined an era."
    },
    {
      "name": "Joe Burrow",
      "years": "2020-present",
      "note": "the passer who dragged the franchise back to the big game."
    }
  ],
  "ATL": [
    {
      "name": "Matt Ryan",
      "years": "2008-2021",
      "note": "the quarterback who led the team to its closest brush with a title."
    },
    {
      "name": "Julio Jones",
      "years": "2011-2020",
      "note": "the receiver who was nearly impossible to cover at his peak."
    },
    {
      "name": "Deion Sanders",
      "years": "1989-1993",
      "note": "\"Prime Time,\" the electrifying cornerback and returner."
    },
    {
      "name": "Claude Humphrey",
      "years": "1968-1978",
      "note": "the pass rusher who starred in the early decades."
    },
    {
      "name": "Tommy Nobis",
      "years": "1966-1976",
      "note": "the linebacker and the franchise's very first draft pick."
    }
  ],
  "ARI": [
    {
      "name": "Larry Fitzgerald",
      "years": "2004-2020",
      "note": "the receiver who stayed loyal and made the Hall of Fame in the desert."
    },
    {
      "name": "Kurt Warner",
      "years": "2005-2009",
      "note": "the quarterback who led the lone Super Bowl run."
    },
    {
      "name": "Aeneas Williams",
      "years": "1991-2000",
      "note": "the cornerback who starred through the lean years."
    },
    {
      "name": "Pat Tillman",
      "years": "1998-2001",
      "note": "the safety who left the game to serve and is honored across the sport."
    },
    {
      "name": "Charley Trippi",
      "years": "1947-1955",
      "note": "the back from the last championship team."
    }
  ],
  "WAS": [
    {
      "name": "Sammy Baugh",
      "years": "1937-1952",
      "note": "the quarterback who modernized passing in the early era."
    },
    {
      "name": "Darrell Green",
      "years": "1983-2002",
      "note": "the cornerback whose speed lasted two decades in one place."
    },
    {
      "name": "Art Monk",
      "years": "1980-1993",
      "note": "the receiver who set records across the title years."
    },
    {
      "name": "John Riggins",
      "years": "1976-1985",
      "note": "the bruising back who powered a Super Bowl run."
    },
    {
      "name": "Joe Gibbs",
      "years": "coach",
      "note": "the coach who won three titles with three different quarterbacks."
    }
  ],
  "NYJ": [
    {
      "name": "Joe Namath",
      "years": "1965-1976",
      "note": "the quarterback who guaranteed a title nobody believed in and delivered it."
    },
    {
      "name": "Curtis Martin",
      "years": "1998-2005",
      "note": "the back who quietly piled up Hall of Fame numbers."
    },
    {
      "name": "Don Maynard",
      "years": "1960-1972",
      "note": "the receiver of the franchise's only championship."
    },
    {
      "name": "Joe Klecko",
      "years": "1977-1987",
      "note": "the lineman who anchored the defense across positions."
    },
    {
      "name": "Darrelle Revis",
      "years": "2007-2016",
      "note": "the cornerback whose coverage island defined an era."
    }
  ],
  "TEN": [
    {
      "name": "Earl Campbell",
      "years": "1978-1984",
      "note": "the bruising back who powered the Luv Ya Blue era."
    },
    {
      "name": "Warren Moon",
      "years": "1984-1993",
      "note": "the quarterback who lit up the Houston offense."
    },
    {
      "name": "Steve McNair",
      "years": "1995-2005",
      "note": "the fearless co-MVP who came within a yard of a title."
    },
    {
      "name": "Eddie George",
      "years": "1996-2003",
      "note": "the workhorse who became the face of the Tennessee years."
    },
    {
      "name": "Bruce Matthews",
      "years": "1983-2001",
      "note": "nineteen seasons on the line, the iron man of Oilers and Titans."
    }
  ],
  "HOU": [
    {
      "name": "Andre Johnson",
      "years": "2003-2015",
      "note": "the receiver who was the franchise's first true star."
    },
    {
      "name": "J.J. Watt",
      "years": "2011-2020",
      "note": "the defensive end and three-time Defensive Player of the Year."
    },
    {
      "name": "DeMeco Ryans",
      "years": "2006-2011",
      "note": "the linebacker who anchored the early defenses."
    },
    {
      "name": "Duane Brown",
      "years": "2006-2017",
      "note": "the left tackle who protected a decade of offenses."
    },
    {
      "name": "Arian Foster",
      "years": "2009-2015",
      "note": "the back who went undrafted and became a star."
    }
  ],
  "CAR": [
    {
      "name": "Steve Smith Sr.",
      "years": "2001-2013",
      "note": "the fiery receiver who was the franchise's first superstar."
    },
    {
      "name": "Julius Peppers",
      "years": "2002-2018",
      "note": "the pass rusher who terrorized the league for years."
    },
    {
      "name": "Luke Kuechly",
      "years": "2012-2019",
      "note": "the linebacker who diagnosed plays before they happened."
    },
    {
      "name": "Cam Newton",
      "years": "2011-2019",
      "note": "the quarterback and MVP who carried the team to the big game."
    },
    {
      "name": "Sam Mills",
      "years": "1995-1997, then coach",
      "note": "the heart whose words became the team's creed."
    }
  ],
  "JAX": [
    {
      "name": "Fred Taylor",
      "years": "1998-2008",
      "note": "the back who quietly piled up yards for a decade."
    },
    {
      "name": "Tony Boselli",
      "years": "1995-2001",
      "note": "the left tackle and the franchise's first draft pick and Hall of Famer."
    },
    {
      "name": "Jimmy Smith",
      "years": "1995-2005",
      "note": "the receiver who was a model of consistency."
    },
    {
      "name": "Mark Brunell",
      "years": "1995-2003",
      "note": "the quarterback of the early playoff runs."
    },
    {
      "name": "Maurice Jones-Drew",
      "years": "2006-2013",
      "note": "the compact, powerful back who carried the offense."
    }
  ]
};

const vitalStats = {
  "BUF": {
    "nickname": "Bills Mafia",
    "founded": "1960 (AFL)",
    "stadium": "Highmark Stadium",
    "city": "Orchard Park, NY",
    "capacity": "67,000",
    "colors": "Royal blue, red",
    "titles": "2 (AFL, 1964-65)",
    "lastTitle": "1965 (AFL), no Super Bowl"
  },
  "NE": {
    "nickname": "The Pats",
    "founded": "1960 (AFL)",
    "stadium": "Gillette Stadium",
    "city": "Foxborough, MA",
    "capacity": "66,829",
    "colors": "Navy, red, silver",
    "titles": "6 Super Bowls",
    "lastTitle": "2018 (Super Bowl LIII); lost Super Bowl LX in 2025"
  },
  "GB": {
    "nickname": "The Pack",
    "founded": "1919",
    "stadium": "Lambeau Field",
    "city": "Green Bay, WI",
    "capacity": "81,441",
    "colors": "Dark green, gold",
    "titles": "13 (most in NFL), 4 Super Bowls",
    "lastTitle": "2010 (Super Bowl XLV)"
  },
  "DAL": {
    "nickname": "America's Team",
    "founded": "1960",
    "stadium": "AT&T Stadium",
    "city": "Arlington, TX",
    "capacity": "80,000",
    "colors": "Navy, silver, white",
    "titles": "5 Super Bowls",
    "lastTitle": "1995 (Super Bowl XXX)"
  },
  "PIT": {
    "nickname": "The Steel Curtain",
    "founded": "1933",
    "stadium": "Acrisure Stadium",
    "city": "Pittsburgh, PA",
    "capacity": "68,400",
    "colors": "Black, gold",
    "titles": "6 Super Bowls (most-tied)",
    "lastTitle": "2008 (Super Bowl XLIII)"
  },
  "LV": {
    "nickname": "The Black Hole",
    "founded": "1960 (AFL)",
    "stadium": "Allegiant Stadium",
    "city": "Paradise, NV",
    "capacity": "65,000",
    "colors": "Silver, black",
    "titles": "3 Super Bowls",
    "lastTitle": "1983 (Super Bowl XVIII)"
  },
  "NO": {
    "nickname": "Who Dat Nation",
    "founded": "1967",
    "stadium": "Caesars Superdome",
    "city": "New Orleans, LA",
    "capacity": "73,208",
    "colors": "Black, gold",
    "titles": "1 Super Bowl",
    "lastTitle": "2009 (Super Bowl XLIV)"
  },
  "DET": {
    "nickname": "The Pride",
    "founded": "1930",
    "stadium": "Ford Field",
    "city": "Detroit, MI",
    "capacity": "65,000",
    "colors": "Honolulu blue, silver",
    "titles": "4 NFL (pre-Super Bowl)",
    "lastTitle": "1957, no Super Bowl"
  },
  "KC": {
    "nickname": "Chiefs Kingdom",
    "founded": "1960 (AFL)",
    "stadium": "Arrowhead Stadium",
    "city": "Kansas City, MO",
    "capacity": "76,416",
    "colors": "Red, gold",
    "titles": "4 Super Bowls",
    "lastTitle": "2023 (Super Bowl LVIII)"
  },
  "SF": {
    "nickname": "The Faithful",
    "founded": "1946",
    "stadium": "Levi's Stadium",
    "city": "Santa Clara, CA",
    "capacity": "68,500",
    "colors": "Red, gold",
    "titles": "5 Super Bowls",
    "lastTitle": "1994 (Super Bowl XXIX)"
  },
  "PHI": {
    "nickname": "Bird Gang",
    "founded": "1933",
    "stadium": "Lincoln Financial Field",
    "city": "Philadelphia, PA",
    "capacity": "69,596",
    "colors": "Midnight green, silver, black",
    "titles": "2 Super Bowls",
    "lastTitle": "2024 (Super Bowl LIX)"
  },
  "SEA": {
    "nickname": "The 12s",
    "founded": "1976",
    "stadium": "Lumen Field",
    "city": "Seattle, WA",
    "capacity": "69,000",
    "colors": "Navy, action green, gray",
    "titles": "2 Super Bowls",
    "lastTitle": "2025 (Super Bowl LX), reigning champions"
  },
  "MIA": {
    "nickname": "The Fins",
    "founded": "1966 (AFL)",
    "stadium": "Hard Rock Stadium",
    "city": "Miami Gardens, FL",
    "capacity": "65,326",
    "colors": "Aqua, orange",
    "titles": "2 Super Bowls",
    "lastTitle": "1973 (Super Bowl VIII)"
  },
  "LAC": {
    "nickname": "Bolt Up",
    "founded": "1960 (AFL)",
    "stadium": "SoFi Stadium",
    "city": "Inglewood, CA",
    "capacity": "70,000",
    "colors": "Powder blue, gold",
    "titles": "1 AFL (1963)",
    "lastTitle": "1963 (AFL), no Super Bowl"
  },
  "BAL": {
    "nickname": "The Flock",
    "founded": "1996",
    "stadium": "M&T Bank Stadium",
    "city": "Baltimore, MD",
    "capacity": "71,008",
    "colors": "Purple, black, gold",
    "titles": "2 Super Bowls",
    "lastTitle": "2012 (Super Bowl XLVII)"
  },
  "CLE": {
    "nickname": "The Dawg Pound",
    "founded": "1946",
    "stadium": "Huntington Bank Field",
    "city": "Cleveland, OH",
    "capacity": "67,895",
    "colors": "Brown, orange",
    "titles": "4 NFL (pre-Super Bowl)",
    "lastTitle": "1964, no Super Bowl"
  },
  "NYG": {
    "nickname": "Big Blue",
    "founded": "1925",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, NJ",
    "capacity": "82,500",
    "colors": "Blue, red",
    "titles": "4 Super Bowls (plus pre-merger titles)",
    "lastTitle": "2011 (Super Bowl XLVI)"
  },
  "TB": {
    "nickname": "The Krewe",
    "founded": "1976",
    "stadium": "Raymond James Stadium",
    "city": "Tampa, FL",
    "capacity": "65,890",
    "colors": "Red, pewter",
    "titles": "2 Super Bowls",
    "lastTitle": "2020 (Super Bowl LV)"
  },
  "MIN": {
    "nickname": "SKOL",
    "founded": "1961",
    "stadium": "U.S. Bank Stadium",
    "city": "Minneapolis, MN",
    "capacity": "66,860",
    "colors": "Purple, gold",
    "titles": "1 NFL (1969, pre-merger)",
    "lastTitle": "1969, no Super Bowl"
  },
  "CHI": {
    "nickname": "Da Bears",
    "founded": "1920",
    "stadium": "Soldier Field",
    "city": "Chicago, IL",
    "capacity": "61,500",
    "colors": "Navy, orange",
    "titles": "9 (incl. 1 Super Bowl)",
    "lastTitle": "1985 (Super Bowl XX)"
  },
  "IND": {
    "nickname": "The Horseshoe",
    "founded": "1953 (Indianapolis since 1984)",
    "stadium": "Lucas Oil Stadium",
    "city": "Indianapolis, IN",
    "capacity": "67,000",
    "colors": "Blue, white",
    "titles": "2 Super Bowls",
    "lastTitle": "2006 (Super Bowl XLI)"
  },
  "DEN": {
    "nickname": "Broncos Country",
    "founded": "1960 (AFL)",
    "stadium": "Empower Field at Mile High",
    "city": "Denver, CO",
    "capacity": "76,125",
    "colors": "Orange, navy",
    "titles": "3 Super Bowls",
    "lastTitle": "2015 (Super Bowl 50)"
  },
  "LAR": {
    "nickname": "The Horns",
    "founded": "1936",
    "stadium": "SoFi Stadium",
    "city": "Inglewood, CA",
    "capacity": "70,000",
    "colors": "Royal blue, gold",
    "titles": "2 Super Bowls (plus pre-merger)",
    "lastTitle": "2021 (Super Bowl LVI)"
  },
  "CIN": {
    "nickname": "Who Dey",
    "founded": "1968",
    "stadium": "Paycor Stadium",
    "city": "Cincinnati, OH",
    "capacity": "65,515",
    "colors": "Black, orange",
    "titles": "0 (3 Super Bowl losses)",
    "lastTitle": "none"
  },
  "ATL": {
    "nickname": "The Dirty Birds",
    "founded": "1966",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, GA",
    "capacity": "71,000",
    "colors": "Red, black, silver",
    "titles": "0 (2 Super Bowl losses)",
    "lastTitle": "none"
  },
  "ARI": {
    "nickname": "Big Red",
    "founded": "1898 (NFL charter 1920)",
    "stadium": "State Farm Stadium",
    "city": "Glendale, AZ",
    "capacity": "63,400",
    "colors": "Cardinal red, black",
    "titles": "2 NFL (pre-Super Bowl)",
    "lastTitle": "1947, no Super Bowl"
  },
  "WAS": {
    "nickname": "The Burgundy and Gold",
    "founded": "1932",
    "stadium": "Northwest Stadium",
    "city": "Landover, MD",
    "capacity": "64,000",
    "colors": "Burgundy, gold",
    "titles": "3 Super Bowls (plus pre-merger)",
    "lastTitle": "1991 (Super Bowl XXVI)"
  },
  "NYJ": {
    "nickname": "Gang Green",
    "founded": "1960 (AFL)",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, NJ",
    "capacity": "82,500",
    "colors": "Gotham green, white",
    "titles": "1 Super Bowl",
    "lastTitle": "1968 (Super Bowl III)"
  },
  "TEN": {
    "nickname": "Two-Tone Blue",
    "founded": "1960 (as the Houston Oilers)",
    "stadium": "Nissan Stadium",
    "city": "Nashville, TN",
    "capacity": "69,143 (domed successor opens 2027)",
    "colors": "Navy, Titans blue, red",
    "titles": "2 (AFL, Oilers era)",
    "lastTitle": "1961 (AFL), no Super Bowl"
  },
  "HOU": {
    "nickname": "H-Town",
    "founded": "2002",
    "stadium": "NRG Stadium",
    "city": "Houston, TX",
    "capacity": "72,220",
    "colors": "Deep steel blue, battle red",
    "titles": "0",
    "lastTitle": "none"
  },
  "CAR": {
    "nickname": "Keep Pounding",
    "founded": "1995",
    "stadium": "Bank of America Stadium",
    "city": "Charlotte, NC",
    "capacity": "75,037",
    "colors": "Black, blue, silver",
    "titles": "0 (2 Super Bowl losses)",
    "lastTitle": "none"
  },
  "JAX": {
    "nickname": "DUUUVAL",
    "founded": "1995",
    "stadium": "EverBank Stadium",
    "city": "Jacksonville, FL",
    "capacity": "69,132",
    "colors": "Teal, black, gold",
    "titles": "0",
    "lastTitle": "none"
  }
};

const nearlyGot = {
  "BUF": {
    "NO":"Like NO, you took deep wounds and answered with more devotion, not less. New Orleans had a flood and a city told to give up, and replied by winning it all. Buffalo had four finals slip away and replied by getting louder. One got the trophy that redeemed it. The other never needed one.",
    "MIN":"Start with the overlap. You reached the edge of the title and were turned away more than once, in cruel ways. What separates you is what the heartbreak did to each of you. Buffalo stayed hopeful and warm. Minnesota learned to brace for the knife.",
    "CLE":"You and CLE are loud, loyal, and long-suffering. Cleveland's wound was external, a team taken in the night, while Buffalo's was self-inflicted heartbreak on the field. Both kept showing up, Cleveland by barking and Buffalo by smashing tables.",
    "PHI":"You and PHI alike are maximum-volume fanbases that treat the crowd as part of the team. Philadelphia weaponizes being doubted; Buffalo weaponizes being heartbroken. If the chip on the shoulder is what you felt more than the heartbreak, that is Philadelphia."
  },
  "NE": {
    "LAR":"The two of you are unsentimental and built to win, high on ambition and low on roots. The Rams chase the brightest lights across cities, while New England stayed put and chased the system. The same cold competence, nomadic and flashy for one, rooted and grim for the other.",
    "IND":"There's real kinship here: you win the clean, controlled way rather than the ugly way. Indianapolis pinned it on one brilliant passer at a time. New England pinned it on the machine around the passer. One trusted the genius, the other trusted the system.",
    "SF":"The resemblance is real. You expect excellence as a baseline. San Francisco's is elegant and offense-first. New England's is ruthless and total. One wants it beautiful. The other only wants it to work.",
    "KC":"Here's the common ground: you became the team everyone wants to beat. Kansas City still half-cannot believe its luck and carries it warm; New England never apologized and carried it cold. If you wear the target with a chip and no joy, that is the Patriots."
  },
  "GB": {
    "PIT":"Same instinct at work. You run on deep roots and blue-collar pride handed down like a surname. Pittsburgh forges its identity in a steel town and judges everything by whether it holds. Green Bay's is stranger, a team the town literally owns. The same working pride, one belonging to a place and the other owned by it.",
    "CHI":"CHI and you are among the oldest, most rooted fanbases in the sport, there when the league was invented. Chicago built its on ferocious defense and doing the hard things the hard way, while Green Bay built its on belonging to everyone in town. Two of the oldest roots in the game, grown from opposite soil.",
    "DEN":"You and DEN are rooted to a whole region, not just a city. Denver draws on the mountains and the mile-high air. Green Bay draws on the cold and an ownership nobody can ever buy out. One grip is geographic, the other a matter of possession.",
    "DET":"The near-miss makes sense: you carry unconditional Midwest loyalty that never asks for a receipt. Detroit's was tested by decades of losing. Green Bay's was tested by the danger of being too small to survive at all. Same refusal, facing a different threat."
  },
  "DAL": {
    "ATL":"You've got genuine overlap. You carry real flair and a taste for the spotlight, the kind that never waits for permission. Atlanta's confidence is haunted by a collapse it cannot shake. Dallas's is haunted by nothing at all. One swagger is bruised, the other bulletproof.",
    "TB":"Cut to what's shared: you play the game with theater and a bit of show. Tampa earned its swagger by climbing out of being the worst, while Dallas simply assumed its from the start. One flash was earned, the other born with.",
    "LAR":"It's a close call for a reason. You chase the brightest lights and love the spectacle more than the postcode. The Rams will move cities to find the show. Dallas plants its flag and demands the show come to it. The same hunger for the stage, one that travels and one that holds court.",
    "SF":"You share the core of it. You expect to be the main characters of the league. San Francisco backs it with elegant, sustained excellence; Dallas backs it with sheer self-belief through a long drought. If the swagger has to be earned on the field to feel real, that is San Francisco."
  },
  "PIT": {
    "DEN": "The tightest match in your whole corner of the league, both built on rooted pride and steady expectation. Denver's pride comes from the altitude and the region, while Pittsburgh's comes from the steel and the work. One standard is drawn from the mountains, the other from the mills.",
    "BAL":"You and BAL alike define yourselves by a feared, suffocating defense and a hard regional identity. Baltimore built its on a wound, a team stolen and replaced with menace. Pittsburgh built its on continuity, the same standard for generations. One toughness was born of grievance, the other of inheritance.",
    "GB":"Set you beside GB and the likeness shows: you run on deep roots and blue-collar pride. Pittsburgh judges everything by whether it holds, forged in a steel town. Green Bay's twist is ownership, a team the town literally holds. One soul belongs to a place, the other is owned by it.",
    "NYG":"You'd recognize yourself in NYG. You carry old, sustained pedigree without much noise. The Giants do it with the calm of old money, while Pittsburgh does it with the grit of a mill town. The same quiet authority, one inherited and one earned shift by shift."
  },
  "LV": {
    "LAC":"There's shared DNA here. You carry chaos and heartbreak and hold place loosely. The Chargers wear it as wounded loyalty to a team that keeps leaving. The Raiders wear it as defiant loyalty to colors over any city. One is heartbroken about the rootlessness, the other proud of it.",
    "TB":"The overlap runs deep: you have a theatrical, chaos-tolerant streak. Tampa dresses as pirates and fires a cannon, while the Raiders dress as the most feared section in football. One costume is a party, the other a threat.",
    "NYJ":"First, the kinship. You run hot, chaotic, and a little doomed. The Jets are comic about it and keep believing. The Raiders are menacing about it and ask nobody's permission. The same disorder, a punchline on one side and a warning on the other.",
    "CIN":"You'd get on with CIN. You carry a chip and a chaotic edge against the establishment. Cincinnati's is the small-market afterthought finally getting respect; the Raiders' is the outlaw who never wanted respect in the first place. If you crave the acknowledgement, that is Cincinnati."
  },
  "NO": {
    "BUF":"The kinship is obvious: you turned deep wounds into bigger devotion. New Orleans answered a flood by winning it all, while Buffalo answered four lost finals by getting louder. Same defiant warmth, crowned for one and never needing the crown for the other.",
    "MIN":"Close call, and it shows: you feel everything at full volume and have suffered cruelly, twice from each other. New Orleans came out the other side with a title and kept the faith. Minnesota made peace with the doom. One passion was redeemed, the other resigned.",
    "CLE":"The two of you are loud, loyal, place-rooted, and well acquainted with heartbreak. Cleveland's loyalty is detached from any payoff. New Orleans's was rewarded once, gloriously, and it changed everything. One is still waiting; one got its moment.",
    "PHI":"PHI and you are maximum-emotion, community-first fanbases. Philadelphia's energy is defiant grievance; New Orleans's is communal faith and joy. If the feeling is anger more than togetherness, that is Philadelphia."
  },
  "DET": {
    "CHI":"You and CHI are old, deeply rooted Midwest fanbases that have loved through long stretches of frustration. Chicago's frustration is the missing quarterback. Detroit's is the missing trophy, full stop. One waits on a position, the other on the prize.",
    "GB":"The near-miss fits: you carry unconditional Midwest loyalty. Green Bay's was rewarded with titles and is built on ownership, while Detroit's was rewarded with almost nothing and is built on pure stubbornness. One refusal was answered with everything, the other with almost nothing.",
    "CLE":"Strip it back and you treat loyalty as unrelated to results, just like CLE. Cleveland's wound is a team taken away. Detroit's is simply the decades of losing. The same patient love, external for one and internal for the other.",
    "JAX":"You and JAX alike are overlooked fanbases that stay anyway. Jacksonville got loud and defiantly local about it. Detroit just kept quietly showing up every Thanksgiving. One roars, the other endures."
  },
  "KC": {
    "SF": "The closest match to you, both capable and used to the big stage. San Francisco expects excellence as old habit. Kansas City still half-cannot believe its arrival. One is entitled to the level, the other grateful for it.",
    "BAL":"There's an easy overlap with BAL. You pair high ambition with a real edge. Baltimore wants to be feared, while Kansas City wants to be loved and loud. The same contender energy, menacing on one side and joyful on the other.",
    "DEN":"It comes from the same place: you expect to win and carry a region behind you. Denver's expectation is steady and inherited. Kansas City's is new and a little giddy. One is settled, the other still pinching itself.",
    "PIT":"At heart, you have sustained identities and loud crowds, same as PIT. Pittsburgh's pride is forged in old industrial continuity; Kansas City's is forged in a recent, hard-won rise. If the pride feels generations deep rather than freshly minted, that is Pittsburgh."
  },
  "SF": {
    "KC": "The closest match in your corner, both built for January. San Francisco's excellence is elegant and expected, while Kansas City's is loud and still a little disbelieving. One feels entitled to it, the other grateful.",
    "IND":"Like IND, you win the clean, precise way behind quality at the top. Indianapolis leans on a single brilliant passer. San Francisco leans on a complete, beautiful system. The same craft, pinned on genius for one and on design for the other.",
    "NYG":"Start with the overlap. You carry pedigree and the memory of titles. The Giants do it with unbothered calm. San Francisco does it with the ache of a standard not lately met. One is at peace, the other impatient.",
    "TEN":"The two of you are defined partly by coming up just short on the biggest stage. The Titans are defined by the one yard; San Francisco by the gold standard everything since has missed. If it is the grind for inches more than the lost luster, that is Tennessee."
  },
  "PHI": {
    "BUF":"BUF and you are maximum-volume crowds that treat the stands as part of the team. Buffalo's energy comes from heartbreak, while Philadelphia's comes from grievance and being doubted. One loudness is heartbroken, the other spoiling for a fight.",
    "MIN":"There's real kinship here: you feel everything loudly and chant through the pain. Minnesota's mood is fatalist. Philadelphia's is defiant. One is braced for the worst, the other daring it.",
    "SEA":"You and SEA are deafening, community-first home crowds. Seattle's noise is a clean, collective weapon, while Philadelphia's is laced with edge and contempt. The same decibels, pure energy on one side and a snarl on the other.",
    "NO":"You and NO alike are loud, rooted, community fanbases that feel it together. New Orleans's feeling is communal faith; Philadelphia's is communal defiance. If togetherness is the note more than anger, that is New Orleans."
  },
  "SEA": {
    "MIN":"The two of you are thunderous, communal home crowds in cold-weather cities. Minnesota's noise carries a fatalist ache. Seattle's carries pure participation and force. One is braced for heartbreak, the other daring you to hear it.",
    "BAL":"The resemblance is real. You back a hard, proud identity with a loud house. Baltimore leans on menace and a wound, while Seattle leans on collective noise and belonging. One intensity is feared, the other heard.",
    "DEN":"Here's the common ground: you give your team a real home-field weapon. Denver's is the thin air. Seattle's is the sheer sound. The same edge, altitude for one and volume for the other.",
    "PHI":"PHI and you are deafening, all-in crowds. Philadelphia's noise has a snarl of grievance; Seattle's is clean collective energy. If the loudness comes with a chip, that is Philadelphia."
  },
  "MIA": {
    "TEN":"You and TEN are defined by a single thing more than a trophy haul. Miami guards a perfect season and needs others to fall short of it. Tennessee guards the opposite, the one that got away by a yard. One protects the peak, the other replays the miss.",
    "ARI":"You and ARI alike are flat-shaped, identity-over-glory fanbases. Arizona's identity is endurance over more than a century, while Miami's is a single perfect year preserved in amber. The same modest profile, defined by lasting on one side and by a peak on the other.",
    "IND":"The two of you are clean, controlled, expectation-driven. Indianapolis pins it on brilliant passing it knows will leave. Miami pins it on a perfection it will not let go of. One braces for loss, the other guards a memory.",
    "CAR":"CAR and you are moderate, story-shaped fanbases. Carolina's story is a creed of never quitting; Miami's is a record nobody can take. If it is the fight more than the keepsake, that is Carolina."
  },
  "LAC": {
    "TB":"Same instinct at work. You carry chaos and a sense of being the league's hard-luck case. Tampa turned it into a costume party once the wins came. The Chargers are still waiting on the wins. One celebrates now; one braces.",
    "ATL":"The near-miss makes sense: you live with chaos and heartbreak. Atlanta's is one specific collapse it cannot unsee, while the Chargers' is a steady drip of losing the games they should win. One dread is a single scar, the other a pattern.",
    "LV":"You've got genuine overlap. You hold place loosely and run chaotic. The Raiders made rootlessness a proud identity. The Chargers experience it as loss and keep loving anyway. The same restlessness, defiant on one side and heartbroken on the other.",
    "CAR":"Cut to what's shared: you keep showing up through pain. Carolina frames it as a creed, keep pounding no matter the score; the Chargers frame it as bracing for the next twist. If it is stubborn belief more than dread, that is Carolina."
  },
  "BAL": {
    "PIT":"You and PIT define yourselves by a hard, feared defense and a tough regional identity. Pittsburgh's is generations of steel-town continuity. Baltimore's is grievance, born from a team that was stolen. One menace is inherited, the other avenged.",
    "DEN":"It's a close call for a reason. You pair a feared identity with sustained expectation. Denver leans on altitude and region, while Baltimore leans on defense and a long memory. One standard is geographic, the other vengeful.",
    "NYG":"You share the core of it. You carry quiet authority and a defensive backbone. The Giants' calm is old money. Baltimore's is the stillness of something that will not forget. The same composure, serene on one side and watchful on the other.",
    "KC":"You and KC alike are real contenders with an edge. Kansas City wears it warm and loud; Baltimore wears it cold and feared. If you want to be loved more than feared, that is Kansas City."
  },
  "CLE": {
    "BUF":"The two of you are loud, loyal, long-suffering crowds. Buffalo's wound is heartbreak on the field, while Cleveland's is a team taken from the city itself. Both kept showing up, Buffalo by smashing tables and Cleveland by barking.",
    "NYJ":"NYJ and you are chaotic, devoted, and short on payoff. The Jets keep believing it turns around. Cleveland stopped expecting and stayed anyway. One is hopeful, the other unconditional.",
    "NO":"You and NO are loud, rooted, well-acquainted with heartbreak. New Orleans got its redemption once. Cleveland is still waiting and loves regardless. One was rewarded; one is patient.",
    "MIN":"Set you beside MIN and the likeness shows: you have suffered and kept the faith. Minnesota's faith is fatalist; Cleveland's is detached from reward entirely, yours because it is yours. If you still expect a payoff someday, that is closer to Minnesota."
  },
  "NYG": {
    "WAS":"You and WAS alike are old, rooted fanbases whose loyalty outlasts the standings. Washington's was tested by a long, messy fall and a vanished name. The Giants' just stays quietly steady. One endurance is battered, the other unbothered.",
    "BAL":"You'd recognize yourself in BAL. You carry quiet authority and a defensive soul. Baltimore's calm is watchful menace, while the Giants' is the serenity of old success. One is feared, the other secure.",
    "CHI":"The two of you are charter-era, deeply rooted, defense-proud fanbases. Chicago wears it loud and tough, while the Giants wear it understated. One heritage shouts, the other murmurs.",
    "DEN":"There's shared DNA here. You expect to be good and carry a broad following. Denver's pull is regional and altitude-fueled; the Giants' is metropolitan and old-money calm. If the identity is a whole region behind you, that is Denver."
  },
  "TB": {
    "ATL":"The overlap runs deep: you carry chaos and a theatrical streak in the same region. Atlanta's mood is haunted by a collapse. Tampa's is a party fueled by remembering the bad years. The same flair, bruised on one side and giddy on the other.",
    "LAC":"First, the kinship. You ride chaos and hard luck. Tampa came out the other side and threw a party, while the Chargers are still waiting on the breakthrough. One celebrates; one braces.",
    "CAR":"CAR and you are moderate, story-shaped fanbases in the Southeast. Carolina's story is a creed of refusing to quit. Tampa's is the underdog who finally robbed the league. One is defiant, the other delighted.",
    "TEN":"You and TEN are flat-profile teams defined by a turn of events. Tennessee's is the heartbreak of a yard; Tampa's is the joy of an unlikely heist. If the defining feeling is loss rather than relief, that is Tennessee."
  },
  "MIN": {
    "BUF":"You'd get on with BUF. You reached the edge of the title repeatedly and were turned away, twice from each other. Buffalo stayed warm and hopeful. Minnesota braced for the knife. The same wound, at opposite temperatures.",
    "NO":"The kinship is obvious: you feel everything at full volume and have hurt cruelly, twice from each other. New Orleans got its redemption, while Minnesota made peace with the doom. One passion is redeemed, one resigned.",
    "PHI":"You and PHI alike are loud and chant through the pain. Philadelphia's is defiant. Minnesota's is fatalist. One dares fate; one expects it.",
    "SEA":"The two of you are thunderous cold-weather crowds. Seattle's noise is pure participation; Minnesota's carries an ache of what keeps not happening. If the loudness is joy more than dread, that is Seattle."
  },
  "CHI": {
    "WAS":"WAS and you are old, rooted, defense-proud fanbases that loved through a long fall. Washington's loyalty outlasted a vanished name. Chicago's outlasts the endless quarterback hunt. One absence is a name, the other a position.",
    "DEN":"You and DEN are deeply rooted and built on toughness. Denver pairs it with sustained expectation and altitude, while Chicago pairs it with a century of grinding and one trophy. One is expectant, the other still waiting.",
    "NYG":"You and NYG alike are charter-era, defense-first, deeply rooted. The Giants are understated about it, while Chicago is loud and accented about it. The same heritage, at a different volume.",
    "DET":"The two of you are old Midwest fanbases loving through frustration. Detroit waits on the trophy itself; Chicago waits on the one position it can never seem to draft. If the wait is for any payoff at all, that is Detroit."
  },
  "IND": {
    "MIA":"MIA and you are clean, controlled, expectation-driven. Indianapolis braces for brilliance leaving. Miami guards a perfection that already happened. One anticipates loss, the other preserves a peak.",
    "SF":"Close call, and it shows: you win on craft and quality at the top. San Francisco trusts a complete system, while Indianapolis trusts the one brilliant arm. One wins by design, the other by genius.",
    "TEN":"You and TEN are flat-shaped and once division mates by geography. Tennessee grinds for every yard. Indianapolis wins behind clean brilliance instead. One earns the yard, the other never needs to.",
    "HOU":"You and HOU alike are newer Southern-adjacent franchises without deep mythology. Houston's identity is restoration after loss; Indianapolis's is precision after a midnight arrival. If it is the fresh-start chip, that is Houston."
  },
  "DEN": {
    "PIT": "The tightest match in the whole league, both built on rooted pride and steady expectation. Pittsburgh's comes from steel and the work. Denver's comes from altitude and the region. The same standard, from the mills on one side and the mountains on the other.",
    "BAL":"The near-miss fits: you pair a proud identity with sustained expectation. Baltimore leans on a feared defense and a wound, while Denver leans on the region and the air. One level is vengeful, the other geographic.",
    "CHI":"The two of you are deeply rooted and tough. Chicago has a century of grinding and one trophy. Denver has three and expects more. One is waiting, the other expectant.",
    "GB":"Strip it back and you carry a whole region and a cold-weather edge, just like GB. Green Bay's twist is fan ownership nobody can buy; Denver's is the mile-high air. If it is the team-the-town-owns angle, that is Green Bay."
  },
  "LAR": {
    "IND":"There's an easy overlap with IND. You win on offense and sharp process. Indianapolis stays put and trusts one passer. The Rams chase the show across cities. The same craft, rooted on one side and nomadic on the other.",
    "DAL":"It comes from the same place: you love the spotlight and the spectacle. Dallas plants a flag and demands the show come to it, while the Rams move to wherever the lights are brightest. One holds court, the other travels.",
    "SF":"At heart, you chase elegant, ambitious football in California, same as SF. San Francisco is rooted and faithful. The Rams are mobile and unsentimental. One is devoted to place, the other to the show.",
    "NE":"NE and you are cold and built to win. New England trusts the system; the Rams trust the spectacle and the swing. If winning beautifully matters more than winning at all costs, that is the Rams over the Patriots."
  },
  "CIN": {
    "NYJ":"Like NYJ, you carry chaos and a long wait for respect. The Jets keep it comic and hopeful. Cincinnati keeps it as a chip waiting to be repaid. One laughs; the other settles scores.",
    "WAS":"You and WAS are loyal through institutional frustration. Washington's loyalty is to colors over a name, while Cincinnati's is to a small-market team that earned its swagger late. One waits on a tradition, the other on a slight.",
    "JAX":"You and JAX alike are overlooked, small-ish markets with a defiant streak. Jacksonville got loud and local. Cincinnati got striped and chip-shouldered. The same underdog energy, at a different outlet.",
    "CAR":"The two of you are moderate, story-shaped fanbases. Carolina's story is a never-quit creed; Cincinnati's is the afterthought finally getting feared. If it is the creed more than the chip, that is Carolina."
  },
  "ATL": {
    "TB":"Start with the overlap. You carry chaos and flair in the same region. Tampa's mood is a party built on remembering the bad days. Atlanta's is haunted by one specific collapse. One is giddy, the other bruised.",
    "LAC":"There's real kinship here: you live with heartbreak and chaos. The Chargers' is a steady pattern of losing winnable games, while Atlanta's is a single unforgettable lead that vanished. One dread is chronic, the other acute.",
    "CAR":"CAR and you are Southeastern, story-shaped fanbases. Carolina's story is refusing to quit. Atlanta's is a fall it cannot stop replaying. The same region, with opposite lessons.",
    "CIN":"The resemblance is real. You carry chaos and a wound to your reputation. Cincinnati's is being overlooked; Atlanta's is being remembered for a collapse. If the chip is about respect rather than a specific scar, that is Cincinnati."
  },
  "ARI": {
    "TEN":"Here's the common ground: you build identity from endurance more than glory. Arizona's is measured across more than a century. Tennessee's is measured in inches. Same stubbornness, on a very different clock.",
    "MIA":"You and MIA are flat-shaped, identity-over-trophies fanbases. Miami preserves one perfect year, while Arizona simply refuses to disappear over a century. One is a peak, the other a long endurance.",
    "JAX":"You and JAX alike are overlooked and persistent. Jacksonville answers it by getting loud and local. Arizona answers it by simply lasting. One is defiant about the neglect, the other simply durable.",
    "HOU":"The two of you are quieter identities by reputation. Houston's is a fresh build after loss; Arizona's is ancient endurance. If it is the brand-new chip rather than the long haul, that is Houston."
  },
  "WAS": {
    "CHI":"CHI and you are old, rooted, defense-proud fanbases that loved through a long decline. Chicago waits on a quarterback, while Washington waited through a vanished name. The same endurance, around a different absence.",
    "NYG":"You and NYG are old-guard, deeply rooted franchises. The Giants' loyalty stays unbothered and steady. Washington's was tested by chaos and held to the colors. One heritage is serene, the other battered.",
    "DEN":"Same instinct at work. You pair real pedigree with regional loyalty. Denver's expectation is steady and altitude-backed. Washington's is rebuilding from a long fall. One is expectant, the other recovering.",
    "JAX":"The near-miss makes sense: you have loved through being overlooked or diminished. Jacksonville got loud about it; Washington stayed quietly true to the colors. If the answer is defiant volume, that is Jacksonville."
  },
  "NYJ": {
    "CIN":"You've got genuine overlap. You carry chaos and a long wait. The Jets keep it comic and hopeful. Cincinnati keeps it as a chip to repay. One laughs through it; the other settles up.",
    "CLE":"You and CLE alike are chaotic and devoted with little payoff. Cleveland stopped expecting and loves anyway, while the Jets keep believing it turns around. One is unconditional, the other hopeful.",
    "MIN":"Cut to what's shared: you suffer loudly and keep showing up. Minnesota braces for the doom. The Jets expect the breakthrough every single year. The same heartbreak, fatalist on one side and comic on the other.",
    "BUF":"The two of you are loyal, emotional, snakebitten. Buffalo turned the heartbreak into a roaring family; the Jets turned it into stubborn comic faith. If the energy is communal warmth rather than punchline hope, that is Buffalo."
  },
  "TEN": {
    "CAR": "The closest match in the whole league, the grit identical. Carolina made refusing to quit a creed. Tennessee made it a single yard it came up short of. One faces forward, the other faces the miss.",
    "HOU":"It's a close call for a reason. You carry the chip of a city and a team pulled apart. Your franchise left Houston, the city built the Texans to replace it, and now you meet twice a year. They got the clean slate; you kept the scars. If the fresh-start feeling is yours, that is Houston.",
    "ARI":"You share the core of it. You build identity from endurance more than glory. Arizona's is a century of waiting, while Tennessee's is the inches. One clock runs in years, the other in feet.",
    "MIA":"MIA and you are defined by one thing you cannot put down. Miami guards a perfect season; Tennessee guards the one that got away. One protects perfection, the other replays the miss."
  },
  "HOU": {
    "TEN": "The two halves of one split, now division rivals. Your franchise left and became the Titans; you are Houston's answer, built from scratch. They kept the history and the scars, you kept the fresh start and the chip.",
    "CAR":"You and CAR are younger, moderate, story-shaped fanbases. Carolina's story is a never-quit creed. Houston's is rebuilding after a city's loss. One is a creed, the other a comeback.",
    "JAX":"You and JAX alike are 1990s-or-later expansion cities proving you belong. Jacksonville does it by getting loud and local, while Houston does it by building a proud new identity. The same upstart energy, by different proof.",
    "ARI":"The two of you are quieter identities by reputation. Arizona's is a century of endurance; Houston's is a brand-new build with a chip. If it is the long haul rather than the fresh start, that is Arizona."
  },
  "CAR": {
    "TEN": "The closest match in the whole league, the grit identical. Carolina made refusing to quit a creed. Tennessee made it a single lost yard. The same engine, facing forward on one side and facing the miss on the other.",
    "JAX":"JAX and you are 90s expansion franchises in overlooked markets. Jacksonville answers it by getting loud and local. Carolina answers it with a creed and a region behind it. One rallies on volume, the other on belief.",
    "HOU":"You and HOU are younger, story-shaped fanbases. Houston's is restoration after loss, while Carolina's is a never-quit creed. One is a comeback, the other a code.",
    "TB":"You and TB alike are moderate Southeastern fanbases. Tampa's story is the underdog who finally robbed the league; Carolina's is refusing to quit without the payoff yet. If it is delight over defiance, that is Tampa."
  },
  "JAX": {
    "CAR":"The two of you are 90s expansion franchises in overlooked markets. Carolina rallies around a creed and a region. Jacksonville rallies by getting loud and defiantly local. The same upstart spirit, with a different rallying point.",
    "TEN":"TEN and you are flat-profile, story-shaped fanbases. Tennessee's story is the lost yard, while Jacksonville's is being overlooked and roaring back. One is a near-miss, the other a dare.",
    "WAS":"Set you beside WAS and the likeness shows: you have loved through being diminished. Washington stayed quietly true to its colors through a vanished name. Jacksonville got loud about being doubted. One defiance is quiet, the other roaring.",
    "CIN":"You and CIN are overlooked markets with a chip. Cincinnati carries it as a score to settle; Jacksonville carries it as local pride turned up loud. If it is resentment more than hometown roar, that is Cincinnati."
  }
};

const scoring = {
  "nfl_q13": {
    "A": {
      "CHI": 2,
      "GB": 2,
      "NYG": 2,
      "PIT": 2,
      "WAS": 2,
      "DAL": 2,
      "SF": 2,
      "DET": 2,
      "NE": 2,
      "KC": 2,
      "DEN": 2,
      "LV": 2,
      "MIA": 2,
      "BUF": 2,
      "IND": 2,
      "TEN": 2,
      "ARI": 2,
      "LAR": 2,
      "NYJ": 2,
      "BAL": 2
    },
    "B": {
      "CAR": 2,
      "JAX": 2,
      "HOU": 2,
      "SEA": 2,
      "TB": 2,
      "ATL": 2,
      "CIN": 2,
      "MIN": 2,
      "NO": 2,
      "CLE": 2,
      "PHI": 2,
      "LAC": 2
    }
  },
  "nfl_q14": {
    "A": {
      "DAL": 2,
      "NYG": 2,
      "CHI": 2,
      "SF": 2,
      "PHI": 2,
      "KC": 2,
      "GB": 2,
      "PIT": 2,
      "LAR": 2,
      "LV": 2,
      "NE": 2,
      "SEA": 2,
      "MIA": 2,
      "DEN": 2,
      "NO": 2
    },
    "B": {
      "JAX": 2,
      "CIN": 2,
      "TEN": 2,
      "IND": 2,
      "BUF": 2,
      "HOU": 2,
      "CLE": 2,
      "WAS": 2,
      "MIN": 2,
      "ATL": 2,
      "TB": 2,
      "ARI": 2,
      "DET": 2,
      "NYJ": 2,
      "LAC": 2,
      "BAL": 2,
      "CAR": 2
    }
  },
  "nfl_q15": {
    "A": {
      "PIT": 2,
      "CLE": 2,
      "BUF": 2,
      "CHI": 2,
      "GB": 2,
      "BAL": 2,
      "TEN": 2,
      "HOU": 2,
      "NE": 2,
      "DET": 2,
      "CIN": 2,
      "NYJ": 2,
      "IND": 2,
      "JAX": 2,
      "MIN": 2,
      "WAS": 2,
      "KC": 2,
      "NYG": 2
    },
    "B": {
      "DAL": 2,
      "LAR": 2,
      "MIA": 2,
      "LV": 2,
      "SF": 2,
      "PHI": 2,
      "SEA": 2,
      "DEN": 2,
      "TB": 2,
      "ATL": 2,
      "NO": 2,
      "ARI": 2,
      "LAC": 2,
      "CAR": 2
    }
  },
  "nfl_q1": {
    "A": {
      "CHI": 3,
      "WAS": 3,
      "MIA": 2,
      "ARI": 2
    },
    "B": {
      "KC": 2,
      "CIN": 2,
      "DEN": 2,
      "TB": 2
    },
    "C": {
      "DET": 2,
      "JAX": 2,
      "NYJ": 2
    },
    "D": {
      "PIT": 3,
      "SF": 2,
      "BAL": 2,
      "NE": 2
    }
  },
  "nfl_q2": {
    "A": {
      "NO": 2,
      "CAR": 4,
      "BUF": 2
    },
    "B": {
      "MIN": 2,
      "LAC": 3,
      "ATL": 2
    },
    "C": {
      "NYJ": 3,
      "CIN": 3
    },
    "D": {
      "CLE": 2,
      "DET": 2,
      "GB": 2
    },
    "E": {
      "KC": 3,
      "SF": 3,
      "NE": 2
    }
  },
  "nfl_q3": {
    "A": {
      "PIT": 2,
      "CHI": 2,
      "NO": 2,
      "HOU": 2
    },
    "B": {
      "DEN": 2,
      "SF": 2,
      "GB": 2
    },
    "C": {
      "MIA": 3
    },
    "D": {
      "ARI": 3,
      "DET": 3
    },
    "E": {
      "LAR": 3,
      "DAL": 3,
      "LV": 2
    }
  },
  "nfl_q4": {
    "A": {
      "GB": 2,
      "PIT": 2,
      "WAS": 2,
      "CHI": 2,
      "DEN": 3
    },
    "B": {
      "LV": 2,
      "LAR": 2,
      "LAC": 2,
      "DAL": 2
    },
    "C": {
      "HOU": 3,
      "JAX": 2,
      "BAL": 2
    },
    "D": {
      "BUF": 2,
      "SEA": 3,
      "PHI": 2
    }
  },
  "nfl_q5": {
    "A": {
      "NE": 2,
      "DAL": 2,
      "KC": 2
    },
    "B": {
      "PHI": 3,
      "CIN": 2
    },
    "C": {
      "JAX": 3
    },
    "D": {
      "NYG": 3,
      "GB": 3
    },
    "E": {
      "NYJ": 2,
      "TB": 2,
      "ARI": 2,
      "ATL": 2
    }
  },
  "nfl_q6": {
    "1": {
      "CHI": 3,
      "PIT": 3,
      "TEN": 3,
      "NYG": 3,
      "SEA": 3,
      "BUF": 3
    },
    "2": {
      "CHI": 2,
      "PIT": 2,
      "BAL": 2,
      "TEN": 2,
      "NYG": 2,
      "BUF": 2
    },
    "3": {
      "BAL": 2,
      "PIT": 2,
      "KC": 2,
      "LAR": 2
    },
    "4": {
      "LAR": 2,
      "DAL": 2,
      "LV": 2,
      "KC": 2,
      "TB": 2
    },
    "5": {
      "LAR": 3,
      "DAL": 3,
      "LV": 3,
      "KC": 3
    }
  },
  "nfl_q7": {
    "A": {
      "TEN": 3
    },
    "B": {
      "ATL": 3
    },
    "C": {
      "MIN": 3,
      "BUF": 3
    },
    "D": {
      "BUF": 2,
      "NO": 2,
      "CLE": 2
    },
    "E": {
      "NYJ": 2,
      "DET": 2,
      "CIN": 2
    }
  },
  "nfl_q8": {
    "A": {
      "HOU": 4
    },
    "B": {
      "CLE": 3
    },
    "C": {
      "BAL": 3
    },
    "D": {
      "NO": 2,
      "PHI": 2,
      "TB": 3
    },
    "E": {
      "GB": 2,
      "NYG": 3,
      "ARI": 2
    }
  },
  "nfl_q9": {
    "1": {
      "MIA": 3
    },
    "2": {
      "MIA": 2
    },
    "3": {
      "ARI": 2
    },
    "4": {
      "ARI": 2,
      "DET": 2
    },
    "5": {
      "ARI": 3,
      "DET": 3
    }
  },
  "nfl_q10": {
    "A": {
      "CAR": 5
    },
    "B": {
      "NO": 3,
      "BUF": 2
    },
    "C": {
      "LV": 3,
      "NE": 3
    },
    "D": {
      "BAL": 2,
      "PHI": 2
    },
    "E": {
      "LAC": 2,
      "MIN": 2,
      "NYJ": 2,
      "ATL": 2
    }
  },
  "nfl_q11": {
    "1": {
      "NYG": 3,
      "IND": 4,
      "MIA": 3,
      "NE": 3
    },
    "2": {
      "NYG": 2,
      "IND": 2,
      "MIA": 2,
      "LAR": 2,
      "NE": 2,
      "SF": 2
    },
    "3": {
      "MIA": 2,
      "JAX": 2
    },
    "4": {
      "SEA": 2,
      "CLE": 2,
      "PHI": 2,
      "JAX": 2,
      "NYJ": 2
    },
    "5": {
      "SEA": 3,
      "CLE": 3,
      "PHI": 3,
      "JAX": 3,
      "NYJ": 3
    }
  },
  "nfl_q12": {
    "A": {
      "IND": 3,
      "DEN": 5,
      "SF": 3
    },
    "B": {
      "BAL": 3,
      "IND": 3,
      "GB": 3,
      "TEN": 3,
      "PIT": 3,
      "NE": 3
    },
    "C": {
      "CAR": 4,
      "LAC": 3
    },
    "D": {
      "SEA": 3,
      "NO": 3,
      "MIN": 3,
      "WAS": 3,
      "BUF": 2
    },
    "E": {
      "DAL": 3,
      "LV": 3,
      "KC": 3
    }
  }
};

const teamDims = {
  "BUF": {
    "loyalty": 10,
    "emotion": 9,
    "ambition": 7,
    "process": 4,
    "community": 9,
    "chaos": 7,
    "rootedness": 9
  },
  "NE": {
    "loyalty": 4,
    "emotion": 3,
    "ambition": 9,
    "process": 10,
    "community": 3,
    "chaos": 2,
    "rootedness": 5
  },
  "GB": {
    "loyalty": 10,
    "emotion": 7,
    "ambition": 7,
    "process": 5,
    "community": 10,
    "chaos": 3,
    "rootedness": 10
  },
  "DAL": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 10,
    "process": 4,
    "community": 4,
    "chaos": 6,
    "rootedness": 5
  },
  "PIT": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 8,
    "process": 6,
    "community": 8,
    "chaos": 3,
    "rootedness": 9
  },
  "LV": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 7,
    "process": 3,
    "community": 7,
    "chaos": 9,
    "rootedness": 3
  },
  "NO": {
    "loyalty": 9,
    "emotion": 10,
    "ambition": 6,
    "process": 4,
    "community": 9,
    "chaos": 6,
    "rootedness": 9
  },
  "DET": {
    "loyalty": 10,
    "emotion": 7,
    "ambition": 5,
    "process": 3,
    "community": 8,
    "chaos": 4,
    "rootedness": 9
  },
  "KC": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 9,
    "process": 7,
    "community": 7,
    "chaos": 5,
    "rootedness": 7
  },
  "SF": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 9,
    "process": 8,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "PHI": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 8,
    "process": 6,
    "community": 9,
    "chaos": 8,
    "rootedness": 10
  },
  "SEA": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 7,
    "process": 6,
    "community": 10,
    "chaos": 6,
    "rootedness": 7
  },
  "MIA": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 6,
    "process": 5,
    "community": 4,
    "chaos": 4,
    "rootedness": 6
  },
  "LAC": {
    "loyalty": 6,
    "emotion": 8,
    "ambition": 6,
    "process": 5,
    "community": 5,
    "chaos": 8,
    "rootedness": 4
  },
  "BAL": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 7,
    "process": 7,
    "community": 8,
    "chaos": 4,
    "rootedness": 8
  },
  "CLE": {
    "loyalty": 10,
    "emotion": 9,
    "ambition": 5,
    "process": 3,
    "community": 9,
    "chaos": 8,
    "rootedness": 9
  },
  "NYG": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 7,
    "process": 6,
    "community": 7,
    "chaos": 4,
    "rootedness": 8
  },
  "TB": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 6,
    "process": 5,
    "community": 6,
    "chaos": 7,
    "rootedness": 5
  },
  "MIN": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 7,
    "process": 5,
    "community": 8,
    "chaos": 7,
    "rootedness": 8
  },
  "CHI": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 5,
    "community": 8,
    "chaos": 5,
    "rootedness": 9
  },
  "IND": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 7,
    "process": 7,
    "community": 5,
    "chaos": 4,
    "rootedness": 5
  },
  "DEN": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 8,
    "process": 5,
    "community": 8,
    "chaos": 4,
    "rootedness": 8
  },
  "LAR": {
    "loyalty": 4,
    "emotion": 5,
    "ambition": 9,
    "process": 7,
    "community": 4,
    "chaos": 5,
    "rootedness": 3
  },
  "CIN": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 6,
    "process": 3,
    "community": 7,
    "chaos": 7,
    "rootedness": 8
  },
  "ATL": {
    "loyalty": 5,
    "emotion": 7,
    "ambition": 6,
    "process": 4,
    "community": 5,
    "chaos": 7,
    "rootedness": 6
  },
  "ARI": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 4,
    "community": 5,
    "chaos": 4,
    "rootedness": 6
  },
  "WAS": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 4,
    "community": 7,
    "chaos": 5,
    "rootedness": 8
  },
  "NYJ": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 6,
    "process": 3,
    "community": 7,
    "chaos": 8,
    "rootedness": 8
  },
  "TEN": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 6,
    "process": 5,
    "community": 6,
    "chaos": 4,
    "rootedness": 6
  },
  "HOU": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 6,
    "process": 5,
    "community": 6,
    "chaos": 4,
    "rootedness": 7
  },
  "CAR": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 6,
    "process": 5,
    "community": 7,
    "chaos": 5,
    "rootedness": 6
  },
  "JAX": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 5,
    "process": 4,
    "community": 7,
    "chaos": 5,
    "rootedness": 7
  }
};

const CARD_BADGES = {
  "BUF": "🦬",
  "NE": "🇺🇸",
  "GB": "🧀",
  "DAL": "⭐",
  "PIT": "⚒️",
  "LV": "☠️",
  "NO": "⚜️",
  "DET": "🦁",
  "KC": "🏹",
  "SF": "⛏️",
  "PHI": "🦅",
  "SEA": "🔊",
  "MIA": "🐬",
  "LAC": "⚡",
  "BAL": "🐦‍⬛",
  "CLE": "🐶",
  "NYG": "🗽",
  "TB": "🏴‍☠️",
  "MIN": "⚔️",
  "CHI": "🐻",
  "IND": "🐎",
  "DEN": "🏔️",
  "LAR": "🐏",
  "CIN": "🐯",
  "ATL": "🪶",
  "ARI": "🐦",
  "WAS": "🏛️",
  "NYJ": "✈️",
  "TEN": "🗡️",
  "HOU": "🐂",
  "CAR": "🐈‍⬛",
  "JAX": "🐆"
};


const squadUrls = {};  // no per-team roster links yet; the View squad CTA stays hidden (data-gated)

const milestones = {
  "BUF": ["Two AFL championships back to back, 1964 and 1965, the only titles the franchise has ever held.", "Four straight Super Bowl trips, 1990 through 1993, the only team ever to reach four in a row.", "The comeback against Houston in the 1992 playoffs, thirty-two points down and back to win, the greatest in NFL history.", "Wide Right, Super Bowl XXV, the kick that missed and the wound Buffalo still carries.", "The seventeen-year playoff drought finally broken in 2017, Bills Mafia's long wait rewarded."],
  "NE": ["Six Super Bowl titles between 2001 and 2018, the heart of the Brady and Belichick dynasty.", "The Tuck Rule game and the first ring in 2001, the beginning of two decades of dominance.", "The 2007 team that went sixteen and zero in the regular season before falling in the Super Bowl.", "The twenty-eight to three comeback against Atlanta in Super Bowl LI, the largest in Super Bowl history.", "A return to Super Bowl LX in 2026 behind Drake Maye, first team ever to go nine and zero on the road, before falling to Seattle."],
  "GB": ["Thirteen championships, more than any franchise in NFL history, from Lambeau to Lombardi to today.", "The first two Super Bowls, won under Vince Lombardi, whose name is now on the trophy itself.", "The Ice Bowl, 1967, minus forty-six wind chill and Bart Starr's sneak in the final seconds.", "Community-owned since 1923, the only publicly owned team in American major sports.", "Super Bowl XLV, won behind Aaron Rodgers, the most recent Lombardi to come home to Titletown."],
  "DAL": ["Five Super Bowl titles, the shine that made them America's Team.", "Three championships in four years in the 1990s, the Aikman, Smith and Irvin core at its peak.", "Emmitt Smith's climb to the all-time rushing crown, a record that still stands.", "Tom Landry on the sideline for twenty-nine seasons, the hat and the stare that built the brand.", "No title since Super Bowl XXX in 1995, the longest drought for a franchise with this much history."],
  "PIT": ["Six Super Bowls, tied for the most in NFL history, won on a blue-collar city's back.", "Four titles in six years in the 1970s, the Steel Curtain defense at its meanest.", "The Immaculate Reception, 1972, the most famous play in league history.", "The Terrible Towel, waved by a city that treats football like faith.", "Super Bowl XLIII, won on a last-minute Santonio Holmes toe-tap in the corner."],
  "LV": ["Three Super Bowl titles across two eras, the silver and black at its most feared.", "Al Davis and Just Win Baby, the outlaw identity that defined a franchise.", "The Holy Roller and the Sea of Hands, the wild finishes that became Raiders lore.", "The move from Oakland to Los Angeles to Oakland to Las Vegas, football's most nomadic pride.", "Super Bowl XVIII, a rout of Washington, the last time the Raiders held the trophy."],
  "NO": ["Super Bowl XLIV, the only title, the whole city of New Orleans lifted with it.", "The return to the Superdome after Katrina, a home game that meant more than football.", "Drew Brees rewriting the passing record book across fifteen seasons in black and gold.", "The onside kick to open the second half of the Super Bowl, Sean Payton's nerve rewarded.", "Forty-three years of the Aints and the paper bags before the breakthrough finally came."],
  "DET": ["Four NFL championships, all before the Super Bowl era, the last in 1957.", "Barry Sanders, ten seasons of impossible cuts, retired at the top with the record in reach.", "The zero and sixteen season in 2008, the first winless sixteen-game season in league history.", "The long climb back under Dan Campbell, deep playoff runs and a city daring to believe again.", "A franchise that dates to 1930, still chasing its first Super Bowl."],
  "KC": ["Four Super Bowl titles, three of them in the Mahomes and Reid dynasty.", "Super Bowl IV in 1969, the franchise's first, out of the old AFL.", "Back-to-back championships in the 2022 and 2023 seasons, the modern powerhouse.", "Patrick Mahomes and the no-look throws that rewrote what a quarterback could do.", "The three-peat bid in Super Bowl LIX, denied by Philadelphia in 2025."],
  "SF": ["Five Super Bowl titles, the West Coast Offense dynasty of the 1980s and 90s.", "Joe Montana and Jerry Rice, the quarterback and receiver many call the best ever at each spot.", "The Catch, 1981, Dwight Clark reaching high in the back of the end zone.", "Bill Walsh's genius on the sideline, the blueprint half the league still copies.", "Two Super Bowl trips in five years without the ring, the near-miss modern era."],
  "PHI": ["Super Bowl LII in 2018, the first Lombardi ever, the Philly Special and a backup quarterback.", "Super Bowl LIX in 2025, a forty to twenty-two rout of Kansas City that denied the three-peat.", "Three NFL championships in the pre-Super Bowl era, the last in 1960.", "The Nick Foles miracle run, a city that waited fifty-seven years finally rewarded.", "The Brotherly Shove and a roster built in the trenches, Philadelphia football distilled."],
  "SEA": ["Super Bowl XLVIII, a forty-three to eight demolition of Denver, the franchise's first title.", "Super Bowl LX in 2026, a twenty-nine to thirteen win over New England, the second Lombardi and the current crown.", "The Legion of Boom, the loudest, hardest-hitting secondary of its generation.", "The 12th Man, a crowd so loud it once registered as an earthquake.", "The goal-line interception in Super Bowl XLIX, the heartbreak that Super Bowl LX finally answered."],
  "MIA": ["The Perfect Season, 1972, seventeen wins and no losses, still the only one in NFL history.", "Back-to-back Super Bowls after the 1972 and 1973 seasons, the Don Shula peak.", "Dan Marino and the fastest release the game had seen, records without the ring.", "Don Shula, the winningest coach in NFL history, three decades on the Miami sideline.", "No title since Super Bowl VIII, a long wait beneath that perfect banner."],
  "LAC": ["The 1963 AFL championship, the franchise's only title, from its San Diego beginnings.", "Air Coryell, the vertical passing offense that changed how the game was thrown.", "LaDainian Tomlinson's record twenty-eight rushing touchdowns in 2006, a season no back has matched.", "Dan Fouts and Philip Rivers, Hall of Fame caliber arms that never reached the Super Bowl.", "The move from San Diego to Los Angeles in 2017, a fanbase split in the leaving."],
  "BAL": ["Super Bowl XXXV, won in only the franchise's fifth season behind a historic defense.", "Super Bowl XLVII in 2012, Ray Lewis's final ride ending with a ring.", "Ray Lewis and the meanest defenses of an era, the identity of the franchise.", "Lamar Jackson, two MVPs and a running quarterback who rewrote the position.", "Born in 1996 when Cleveland's roster moved east, a new city's team from the start."],
  "CLE": ["Eight championships between 1946 and 1964, four in the old AAFC and four in the NFL, all before the Super Bowl existed.", "Jim Brown, nine seasons, many call him the greatest back ever, and never once on a losing team.", "The Drive and The Fumble, the 1980s AFC Championship heartbreaks Cleveland never forgets.", "The franchise deactivated in 1996 and reborn in 1999, the name and colors kept by the fans.", "One of the longest active title droughts in the NFL, faith tested and never broken."],
  "NYG": ["Four Super Bowl titles, plus championships dating back to the league's founding years.", "Super Bowl XLII, the helmet catch and the upset that ended New England's perfect season.", "Super Bowl XLVI, a second Eli Manning ambush of the Patriots four years later.", "Lawrence Taylor, the linebacker who forced the whole league to change its blocking.", "One of the NFL's charter powers, founded in 1925, champions across nine decades."],
  "TB": ["Super Bowl XXXVII after the 2002 season, a swarming defense's finest hour.", "Super Bowl LV, won at home behind Tom Brady in his first year away from New England.", "The worst start in NFL history, twenty-six straight losses as a young expansion team.", "The creamsicle years and the remake into pewter and red, an identity rebuilt.", "Derrick Brooks, Warren Sapp and John Lynch, the defense that carried the first title."],
  "MIN": ["The 1969 NFL championship, the franchise's only title, before the merger.", "Four Super Bowl trips in the 1970s, four losses, the near-dynasty that never sealed it.", "The Purple People Eaters, the defensive front that terrorized a decade.", "The Minneapolis Miracle, 2017, Stefon Diggs walking off into the end zone as time expired.", "Decades of playoff heartbreak, one of the great title droughts still open."],
  "CHI": ["Nine championships, one of the NFL's founding franchises and its winningest of the early era.", "Super Bowl XX after the 1985 season, the 46 defense and one of the greatest teams ever assembled.", "The Monsters of the Midway, the punishing identity that goes back to George Halas himself.", "Walter Payton, Sweetness, the all-time great who carried the franchise for thirteen seasons.", "Dick Butkus and Mike Singletary, the middle linebackers who defined Chicago toughness."],
  "IND": ["Two Super Bowl titles, one in Baltimore and one in Indianapolis.", "The 1958 championship, the Greatest Game Ever Played, sudden death against the Giants.", "Johnny Unitas in Baltimore, then Peyton Manning in Indianapolis, two eras of great quarterbacks.", "Super Bowl XLI after the 2006 season, Manning's ring in the rain in Miami.", "The midnight move from Baltimore to Indianapolis in 1984, a city's team gone in Mayflower trucks."],
  "DEN": ["Three Super Bowl titles, the Mile High franchise at its peaks.", "Back-to-back rings after the 1997 and 1998 seasons, John Elway riding out on top.", "Super Bowl 50 after the 2015 season, Peyton Manning's farewell behind a historic defense.", "The Drive, 1986, Elway's ninety-eight yards to break Cleveland's heart.", "The Orange Crush defense and a stadium a mile above sea level, the altitude edge."],
  "LAR": ["Super Bowl XXXIV after the 1999 season, the Greatest Show on Turf at full speed.", "Super Bowl LVI, won at home in Los Angeles after the 2021 season.", "The 1951 NFL championship, a title from the franchise's early Los Angeles years.", "Kurt Warner's rise from grocery-store shelves to league MVP and a ring.", "The moves through Cleveland, Los Angeles, St. Louis and back, football's great wanderers."],
  "CIN": ["Three Super Bowl trips, three losses, still chasing the first title.", "Two heartbreaks against the 49ers in the 1980s, both by a single score.", "Founded by Paul Brown himself in 1968, a coaching legend's second franchise.", "The Super Bowl LVI run behind Joe Burrow, the closest the drought has come to ending.", "Ken Anderson and Boomer Esiason, MVP quarterbacks who came up just short."],
  "ATL": ["Two Super Bowl trips, two losses, the title still out of reach.", "Super Bowl LI, twenty-eight to three, the largest lead ever surrendered in a Super Bowl.", "The Dirty Bird and the 1998 run to Super Bowl XXXIII, the first trip.", "Matt Ryan's MVP season in 2016, an offense that could not be stopped until it was.", "Michael Vick, the most electric runner the quarterback position had ever seen."],
  "ARI": ["The oldest continuously run franchise in American pro football, tracing back to 1898.", "Two NFL championships in the pre-Super Bowl era, the last in 1947 in Chicago.", "Super Bowl XLIII after the 2008 season, Larry Fitzgerald's playoff run falling just short.", "The moves from Chicago to St. Louis to Arizona, a franchise that kept searching for a home.", "Larry Fitzgerald, seventeen seasons of sure hands, the face of the desert years."],
  "WAS": ["Three Super Bowl titles, all under Joe Gibbs between the 1982 and 1991 seasons.", "Three different starting quarterbacks winning those three rings, the system above any one star.", "The Hogs, the offensive line that became more famous than the backs behind it.", "Two NFL championships before the Super Bowl era, a franchise that dates to 1932.", "The rebuild and the change to the Commanders, a new identity taking shape."],
  "NYJ": ["Super Bowl III, the guarantee, Joe Namath backing his words in the game that legitimized the AFL.", "The only title, and one of the most important upsets in football history.", "The longest active playoff drought in the NFL.", "Curtis Martin and Darrelle Revis, greats who could not lift the franchise back to the top.", "Broadway Joe, the swagger that still defines the Jets more than fifty years on."],
  "TEN": ["Two AFL championships in the Houston Oilers era, the franchise's only titles.", "The Music City Miracle, 2000, the lateral kick return that stunned Buffalo.", "One Yard Short, Super Bowl XXXIV, Kevin Dyson stopped at the goal line as time ran out.", "The move from Houston to Tennessee in 1997 and the rebirth as the Titans.", "Earl Campbell and Warren Moon in the Oilers years, then Steve McNair's MVP run."],
  "HOU": ["The NFL's newest franchise, born in 2002 after Houston lost the Oilers.", "Several AFC South titles, but never yet past the divisional round.", "J.J. Watt, three Defensive Player of the Year awards, the face of the early Texans.", "C.J. Stroud's rookie surge, a franchise quarterback and a new era of hope.", "Still chasing a first conference title, the youngest history in the league."],
  "CAR": ["Two Super Bowl trips, two losses, the first title still ahead.", "Super Bowl XXXVIII after the 2003 season, a shootout lost on a late Patriots kick.", "The fifteen and one season in 2015 and Cam Newton's MVP, a run that ended in Super Bowl 50.", "Keep Pounding, the rallying cry born from a coach's fight with cancer.", "An expansion team that reached a Super Bowl in only its ninth season."],
  "JAX": ["An expansion team that reached the AFC Championship in only its second season.", "Two trips to the conference title game, 1996 and 2017, both falling one win short.", "The improbable 1996 run, a young franchise winning at Denver in the playoffs.", "Trevor Lawrence, the number one pick meant to carry the next era.", "Still chasing a first Super Bowl, the title drought unbroken since 1995."],
};

export { moduleQuestions, teams, archetypes, teamTextColors, greats, vitalStats, milestones, nearlyGot, scoring, teamDims, CARD_BADGES, squadUrls };
