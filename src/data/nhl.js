// FanDNA NHL data (sport five, fingerprint path). Same export shape as nfl.js / mlb.js / nba.js.
// Plain literal scoring objects, NO cell() helper.

const moduleQuestions = [
  {
    "id": "nhl_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "When it comes to the people you're loyal to, you:",
    "options": [
      {
        "label": "I'm there the moment they need me. No hesitation.",
        "value": "A"
      },
      {
        "label": "I'm in it for good. I don't leave when it gets hard.",
        "value": "B"
      },
      {
        "label": "I remember who was there for me, and I return it.",
        "value": "C"
      },
      {
        "label": "I'm quiet about it, but it runs deep and never moves.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nhl_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "When a group you're part of is under real pressure, you:",
    "options": [
      {
        "label": "I step up first, before anyone asks. Every time.",
        "value": "A"
      },
      {
        "label": "I show up for the people who'd show up for me.",
        "value": "B"
      },
      {
        "label": "I lead by example more than by taking the fall.",
        "value": "C"
      },
      {
        "label": "I look after myself first, and I'm honest about it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nhl_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "Which is more you:",
    "left": "When it's coming fast with no time to think, that's when I'm at my best",
    "right": "Give me a moment to size it up and plan. I'm better prepared than on the fly"
  },
  {
    "id": "nhl_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "Say you finally pull off the thing you've always wanted. What matters most about it:",
    "options": [
      {
        "label": "It lasts. People know my name long after I'm gone.",
        "value": "A"
      },
      {
        "label": "Nobody can ever take it back or say I didn't do it.",
        "value": "B"
      },
      {
        "label": "I did it a way that was unmistakably mine.",
        "value": "C"
      },
      {
        "label": "I shared it with the exact people I started with.",
        "value": "D"
      },
      {
        "label": "I got there the hard way, when quitting would've been easier.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nhl_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "When something you cared about slips away at the worst possible moment, you:",
    "options": [
      {
        "label": "Feel every bit of it, loudly, and don't hide it.",
        "value": "A"
      },
      {
        "label": "Go quiet and carry it alone for a while.",
        "value": "B"
      },
      {
        "label": "Pour it straight into the next thing, fast.",
        "value": "C"
      },
      {
        "label": "Shrug it off. That's just how it goes sometimes.",
        "value": "D"
      },
      {
        "label": "Let it harden into fuel for later.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nhl_q6",
    "type": "slider",
    "phase": "The fine print",
    "question": "Which is more you:",
    "left": "Some things should stay true to where they came from",
    "right": "Anything can belong anywhere if it's built right, earn it fresh"
  },
  {
    "id": "nhl_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Every job has a glamorous half and a grinding, invisible half. You:",
    "options": [
      {
        "label": "I do both halves without being asked. That's the standard.",
        "value": "A"
      },
      {
        "label": "I honestly prefer the grinding, invisible half.",
        "value": "B"
      },
      {
        "label": "I show up biggest for the glamorous half.",
        "value": "C"
      },
      {
        "label": "I cover whatever the group needs covered.",
        "value": "D"
      },
      {
        "label": "I do it my own way, glamorous or not.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nhl_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Picture the people you'd want around you when it counts. It's:",
    "options": [
      {
        "label": "A tight, loyal few who've been through everything with me.",
        "value": "A"
      },
      {
        "label": "A whole community, thousands strong, all-in together.",
        "value": "B"
      },
      {
        "label": "The best people I can find, wherever they come from.",
        "value": "C"
      },
      {
        "label": "My people, however few of us there are.",
        "value": "D"
      },
      {
        "label": "The more of us and the louder, the better. The numbers are the point.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nhl_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "Which is more you:",
    "left": "When it matters, put it on me. I want the responsibility",
    "right": "I do my part, no fuss, and let someone else take the spotlight"
  },
  {
    "id": "nhl_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When it comes to starting over somewhere brand new, you:",
    "options": [
      {
        "label": "Wouldn't. I'm loyal to where I'm rooted, full stop.",
        "value": "A"
      },
      {
        "label": "Would, but I'd carry the old place with me forever.",
        "value": "B"
      },
      {
        "label": "Love a blank page. No history to live up to.",
        "value": "C"
      },
      {
        "label": "Already did it, and it's the best thing I ever chose.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nhl_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When the stakes climb, you:",
    "options": [
      {
        "label": "I run hot. I feel everything and I let it show.",
        "value": "A"
      },
      {
        "label": "I go ice cold. The bigger it gets, the calmer I am.",
        "value": "B"
      },
      {
        "label": "I sharpen up. I get more locked-in and precise.",
        "value": "C"
      },
      {
        "label": "I loosen up. I actually get freer when it's big.",
        "value": "D"
      },
      {
        "label": "I stay level. Same me, big moment or small.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nhl_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The situations where you do your best work are:",
    "options": [
      {
        "label": "Structured and controlled. I like knowing the plan.",
        "value": "A"
      },
      {
        "label": "Loose and fast. Give me a little mayhem.",
        "value": "B"
      },
      {
        "label": "Tight and high-stakes. I rise when it's on the line.",
        "value": "C"
      },
      {
        "label": "Steady and familiar. I go where the ground is solid.",
        "value": "D"
      },
      {
        "label": "Wide open and new. No rules yet, so I'll write them.",
        "value": "E"
      }
    ]
  }
];
const teams = {
  "MTL": {
    "name": "Montreal Canadiens",
    "emoji": "⚜️",
    "color": "#AF1E2D",
    "code3": "MTL",
    "kitType": "duo",
    "secondaryColor": "#192168",
    "tagline": "More Cups than anyone, twenty-four of them, and a whole province that treats you like faith.",
    "desc": "You are the most decorated franchise in the sport, twenty-four championships, more than anyone who has ever played the game. In Montreal hockey is not a pastime, it is close to religion, the red, white and blue passed from parent to child like a family name. You carry ghosts in the rafters and a standard no one else can touch, and you measure every season against a glory that stretches back a century. The last Cup came in 1993, long enough ago to ache, and the wait only sharpens what it all means. Winning is not a hope for you. It is a birthright you mean to reclaim.",
    "why": [
      "Your loyalty is inherited and total, handed down like a family name. The crest outranks any player who has ever worn it, and it always will.",
      "Your standard is set by a century of winning, not by one season. Nothing short of a championship has ever really counted here.",
      "You feel the weight of the history and the length of the wait together. Caring this much is heavy, and you would not lighten it if you could."
    ]
  },
  "TOR": {
    "name": "Toronto Maple Leafs",
    "emoji": "🍁",
    "color": "#00205B",
    "code3": "TOR",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF",
    "tagline": "Thirteen Cups, none since 1967, the longest wait in hockey, and still you show up.",
    "desc": "You were born into the biggest, loudest hockey market on earth, and into its longest ache. Thirteen championships sit in your history, more than everyone but Montreal, and not one has come since 1967, the longest drought the sport has ever known. A whole country watches, judges, and waits with you, and every spring the hope rises again no matter how many springs have ended the same way. You do not root because it pays off. You root because it is who you are, handed down, non-negotiable, blue and white to the bone.",
    "why": [
      "Your loyalty was never a choice; it was inherited, the way a name is. Leaving is not on the table and never has been.",
      "You feel the wait fully every year, the ache and the hope together. That is the price of caring this much, and you pay it gladly.",
      "Your standard comes from a glorious past, not this season. One title would not just be a win. It would end the longest wait in the game."
    ]
  },
  "BOS": {
    "name": "Boston Bruins",
    "emoji": "🐻",
    "color": "#000000",
    "code3": "BOS",
    "kitType": "duo",
    "secondaryColor": "#FFB81C",
    "tagline": "Six Cups and a black-and-gold reputation, the toughest team in the toughest hockey town.",
    "desc": "You are hockey the hard way, black and gold, built on muscle and spite in a city that respects nothing softer. Six championships sit in your history, and the last came in 2011, but the identity runs deeper than any trophy. You are the Big Bad Bruins, the team other clubs dreaded coming to play, where Bobby Orr flew through the air and a working city saw itself in every hit. You do not want pretty. You want honest, physical, earned, the kind of winning that leaves a mark. Respect, for you, is something you take, never something you ask for.",
    "why": [
      "Your loyalty runs to a blue-collar city and an identity older than anyone alive. You root the way Boston works, hard and without apology.",
      "You have real appetite for the rough edges of the game. You would rather win ugly and honest than pretty and soft.",
      "Six banners set your bar, and you measure a season by whether it added to them. The standard is winning, the Boston way."
    ]
  },
  "DET": {
    "name": "Detroit Red Wings",
    "emoji": "🐙",
    "color": "#CE1126",
    "code3": "DET",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF",
    "tagline": "Eleven Cups in the city that named itself Hockeytown, winning built like a production line.",
    "desc": "You come from Hockeytown, and you take the name literally. Eleven championships, more than anyone but Montreal and Toronto, built by a franchise that treats winning like a production line, quiet and relentless and beautifully made. Your golden run spanned the nineties and two-thousands, Steve Yzerman and Nicklas Lidstrom turning skill and structure into a decade of contention. You value craft over noise, the smart pass over the big hit, and an octopus on the ice for luck. You do not chase the spotlight. You just keep building winners, the way the city builds everything, with patience and pride.",
    "why": [
      "You trust craft and structure over flash. The smart, patient, well-built way of winning is the only way you respect.",
      "Your loyalty runs to a hockey-mad city and a name it earned. Hockeytown is not a slogan to you, it is an inheritance.",
      "Eleven banners set your standard, and you measure yourself against the whole history of the sport, not one season."
    ]
  },
  "CHI": {
    "name": "Chicago Blackhawks",
    "emoji": "🪶",
    "color": "#CF0A2C",
    "code3": "CHI",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "tagline": "Six Cups and a modern dynasty, then a teardown, glory and collapse in a single lifetime.",
    "desc": "You know both halves of the story. Six championships, an Original Six charter, and a modern dynasty that won three Cups in six years and made the whole league jealous, the Madhouse on Madison roaring and Chelsea Dagger blaring after every goal. Then it came apart, torn down to the studs, and you learned that even the best runs end. You carry the memory of being on top and the sting of watching it dismantled, and you measure everything against a peak you actually lived. The glory was real. So was the fall. You would not trade either one.",
    "why": [
      "Your loyalty is anchored to a golden run you lived through. You stay devoted to the standard that dynasty set.",
      "You have felt the whole arc, the top of the world and the teardown, and you feel both vividly. The memory is part of how you root.",
      "You judge every season against a championship peak, because you watched your team actually reach it."
    ]
  },
  "NYR": {
    "name": "New York Rangers",
    "emoji": "🗽",
    "color": "#0038A8",
    "code3": "NYR",
    "kitType": "duo",
    "secondaryColor": "#CE1126",
    "tagline": "Original Six on Broadway, and 1994 finally ended fifty-four years of waiting.",
    "desc": "You are the big-market Original Six, hockey under the bright lights of Broadway and the world's most famous arena. For fifty-four years you waited, an eternity of near-misses in a city that demands everything, until 1994, when Mark Messier willed it home and the Garden finally exploded. That release defines you, the glamour and the pressure of New York, the long ache, and the roar when it finally broke. You want the show and you want the win, and you carry both the weight of history and the thrill of the spotlight. Nowhere else feels this big.",
    "why": [
      "Your loyalty runs to a charter franchise on the sport's brightest stage. You feel the size of New York in everything you root for.",
      "You know what it is to wait, and what it is when the wait finally breaks. That release is stitched into how you love this team.",
      "You want the win and the show at once. A title under the Broadway lights is the only version that fully counts."
    ]
  },
  "EDM": {
    "name": "Edmonton Oilers",
    "emoji": "🛢️",
    "color": "#FF4C00",
    "code3": "EDM",
    "kitType": "duo",
    "secondaryColor": "#041E42",
    "tagline": "Five Cups in the eighties, then the trade that broke a country's heart, now the McDavid era.",
    "desc": "You are boom and bust in oil country, the highest highs and the cruelest turns. In the eighties you had the greatest offensive team ever assembled, five Cups in seven years, Wayne Gretzky rewriting the record book. Then came the trade, 1988, when he was sold south and a whole nation grieved, and the lean years after felt like penance. Now Connor McDavid has made you must-watch again, close enough to taste it, twice to the Final and twice turned away. You know glory and heartbreak intimately, and you believe, because you have to, that the next great run is already here.",
    "why": [
      "You have lived the extremes, dynasty and heartbreak, and you feel both fully. Loving this team has never been calm and never will be.",
      "You have seen the very top and you want back there. Anything less than a championship feels like unfinished business.",
      "Your loyalty runs to a hockey-first city that lives and dies with the team. In oil country the Oilers are the whole conversation."
    ]
  },
  "CGY": {
    "name": "Calgary Flames",
    "emoji": "🔥",
    "color": "#C8102E",
    "code3": "CGY",
    "kitType": "duo",
    "secondaryColor": "#F1BE48",
    "tagline": "The C of Red, the 1989 Cup, and a whole city that turns crimson every spring.",
    "desc": "You are a sea of red, the loudest, most loyal building in the game when the playoffs come and the whole city pulls on the same jersey. One Stanley Cup sits in your history, 1989, won in the middle of the Battle of Alberta against your bitter provincial rivals, and it has never stopped mattering. You are blue-collar and proud, a Canadian hockey town that shows up no matter the standings, that treats a playoff run like a civic holiday. You do not have a dynasty to point to. You have something steadier, a devotion that turns the streets red and never once cools off.",
    "why": [
      "Your loyalty is a whole-city affair, the C of Red pulling the same direction. Belonging to that crowd is the point.",
      "You show up regardless of the standings, year after year. Devotion, for you, was never conditional on winning.",
      "Your roots are deep and Canadian and proud. This is a hockey town to its core, and you would not trade it."
    ]
  },
  "VAN": {
    "name": "Vancouver Canucks",
    "emoji": "🐋",
    "color": "#00205B",
    "code3": "VAN",
    "kitType": "duo",
    "secondaryColor": "#00843D",
    "tagline": "Never won a Cup, two Game 7 Finals lost, and a passion that runs hot and sometimes over.",
    "desc": "You love this team with an intensity that runs right to the edge, and sometimes past it. You have never won a Stanley Cup, but you have come agonizingly close, twice losing Game 7 of the Final, in 1994 and again in 2011 at home, the second time so painful the city itself boiled over. That heartbreak is woven into who you are, along with towel power and a fan base that lives and dies with every shift. You are volatile and devoted in equal measure, a beautiful west-coast obsession that has given everything, gotten so close, and kept coming back for more.",
    "why": [
      "You feel this team at full volume, joy and heartbreak both turned all the way up. There is no lukewarm way for you to love it.",
      "You have been hurt as badly as any fan base can be, and you keep coming back. That is devotion tested and proven.",
      "Your passion is a shared, west-coast, whole-city thing. When the team runs, the entire region rises with it."
    ]
  },
  "WPG": {
    "name": "Winnipeg Jets",
    "emoji": "✈️",
    "color": "#041E42",
    "code3": "WPG",
    "kitType": "duo",
    "secondaryColor": "#004C97",
    "tagline": "The team that left for Phoenix and came home, and a whiteout that swallows the whole arena.",
    "desc": "You know what it is to lose your team and get it back. The original Jets flew to Phoenix in 1996 and broke the city's heart, and for fifteen years there was nothing, until 2011 brought hockey home again and the whole province exhaled. Now the Whiteout swallows the arena every spring, a sea of white so loud and grateful it feels like a thank-you note to the sport. You have never won a Cup, but that is not really the point. The point is the team is here, that it came back, and that you will never again take a single home game for granted.",
    "why": [
      "Your loyalty was forged by loss and return. Having the team at all is a gift you refuse to take for granted.",
      "The Whiteout is a whole-city ritual, a sea of white pulling as one. Belonging to that crowd is most of the joy.",
      "Your roots are small-market and proud and hard-won. This is a hockey town that had to fight to stay one."
    ]
  },
  "OTT": {
    "name": "Ottawa Senators",
    "emoji": "🏛️",
    "color": "#C52032",
    "code3": "OTT",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "tagline": "A lone Cup Final in 2007, a club that nearly went under, and a capital that refused to let go.",
    "desc": "You are the capital's team, and you have never had it easy. One magical spring in 2007 carried you to the Stanley Cup Final, and you have not been back since. Off the ice it was harder still: bankruptcy, an owner the fans turned on, a sale that dragged on for the better part of a year, a long fight just to get a rink downtown where you belong. Through all of it, you stayed. Loud, loyal, a little battered, sure the almost was worth it and the best is still ahead. Yours is devotion that never needed a trophy to justify itself.",
    "why": [
      "Your loyalty was tested the way few fans ever face it, bankruptcy and turmoil and near-misses, and it held every time. Staying is the point.",
      "You are a capital city's team, grassroots and all-in, where the whole town shows up rather than a handful of front-row stars.",
      "Your roots are real but hard-won, never handed to you. You fought to keep your team and fought to bring it home."
    ]
  },
  "PHI": {
    "name": "Philadelphia Flyers",
    "emoji": "🛣️",
    "color": "#F74902",
    "code3": "PHI",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "tagline": "The Broad Street Bullies, back-to-back Cups in the seventies, feared everywhere you went.",
    "desc": "You are the meanest team hockey ever produced, and you have never once apologized for it. In the mid-seventies you won back-to-back Cups as the Broad Street Bullies, a snarling, brawling, terrifying group that other teams genuinely dreaded facing, and that identity never left. You are blue-collar Philadelphia, loud and combative and fiercely loyal, a fan base that respects effort and spite above all else and will boo anything soft. You have not won since 1975, and the wait grinds at you, but the attitude is untouched. You play hard, you hit harder, and you make every visitor earn every inch.",
    "why": [
      "You love the game at its most physical and combative. Softness is the one thing you cannot forgive, in a team or in yourself.",
      "Your loyalty is blue-collar Philadelphia, loud and demanding and fierce. You give everything and expect everything back.",
      "You feel it all at full intensity, and the long wait since 1975 sits heavy. Caring this hard is who you are."
    ]
  },
  "BUF": {
    "name": "Buffalo Sabres",
    "emoji": "⚔️",
    "color": "#003087",
    "code3": "BUF",
    "kitType": "duo",
    "secondaryColor": "#FFB81C",
    "tagline": "Never lifted the Cup, the league's longest playoff wait, and a goal you swear never counted.",
    "desc": "You are rust-belt loyalty in its purest form, a fan base that keeps the faith through decades of nothing. You have never won a Stanley Cup, and you have the scars to prove how close it came: the 1999 Final lost on a goal scored with a skate in the crease, a goal your city still insists never counted, and years later the longest playoff drought in the entire league. And still you fill the building, still you believe, still you love this team with a blue-and-gold stubbornness that outlasts every disappointment. You root not because it is easy or rewarded, but because it is yours, and giving up was never an option.",
    "why": [
      "Your loyalty was tested by decades of losing and never broke. Faith without payoff is the truest kind, and it is yours.",
      "You are rust-belt and all-in, a whole city that shows up regardless. Belonging to that faithful crowd is the point.",
      "You carry a specific heartbreak, a Cup lost on a goal you never accepted, and you feel it still. That ache is part of the bond."
    ]
  },
  "STL": {
    "name": "St. Louis Blues",
    "emoji": "🎷",
    "color": "#002F87",
    "code3": "STL",
    "kitType": "duo",
    "secondaryColor": "#FCB514",
    "tagline": "Last place in January, champions in June, 2019, after fifty-two years of waiting.",
    "desc": "You are the long wait finally rewarded, the sweetest championship story the sport has told in years. For fifty-two years you chased a Cup and came up empty, and in January of 2019 you sat dead last in the entire league, going nowhere. Then everything turned, a rookie goaltender caught fire, a Laura Branigan song became a battle cry, and you won it all, last to first, Play Gloria echoing through the city. You are blue-collar Midwestern loyalty, patient and stubborn and finally vindicated. You waited longer than almost anyone, you never quit, and when it came, it came in the most improbable way possible.",
    "why": [
      "Your loyalty was patient past all reason, fifty-two years of faith before the payoff. Waiting that long and staying is who you are.",
      "You believe a turnaround is always possible, because you lived the ultimate one. Last place in January means nothing if you keep working.",
      "You are Midwestern and blue-collar and all-in, a whole city singing the same song. That shared release is the heart of it."
    ]
  },
  "NYI": {
    "name": "New York Islanders",
    "emoji": "🏝️",
    "color": "#00539B",
    "code3": "NYI",
    "kitType": "duo",
    "secondaryColor": "#F47D30",
    "tagline": "Four straight Cups from 1980 to 1983, then decades in the suburban wilderness.",
    "desc": "You know a level of dominance almost no one else has reached, and then the long fall after it. From 1980 to 1983 you won four straight Stanley Cups, a dynasty that beat everyone, the Nassau Coliseum earning the name Fort Neverlose. Then it faded, and the decades since have mostly been spent as Long Island's overlooked, blue-collar team, playing in the big-city cousins' shadow. You carry the memory of true greatness and the grit of a fan base that never got the spotlight it earned. You are working-class, unglamorous, and proud of it, still measuring everything against four straight, still certain your kind of team knows how to win.",
    "why": [
      "Your loyalty is anchored to a four-Cup dynasty you or your family lived through. That standard still defines how you root.",
      "You are blue-collar Long Island, unglamorous and proud, the working cousins to the big-city team. Belonging there is the point.",
      "You carry both the memory of greatness and the sting of the wilderness after. Both live in how you love this team."
    ]
  },
  "MIN": {
    "name": "Minnesota Wild",
    "emoji": "🌲",
    "color": "#154734",
    "code3": "MIN",
    "kitType": "duo",
    "secondaryColor": "#A6192E",
    "tagline": "The State of Hockey, grassroots to the core, still chasing a first Cup as the Wild.",
    "desc": "You are the deepest hockey roots in America, the State of Hockey, where the game is played on every frozen pond and the high school tournament fills an NHL arena. As the Wild you have never won a Stanley Cup, and there is an old wound underneath, the North Stars who left for Dallas in 1993 and won a title there instead. But your identity was never really about the trophy. It is about the game itself, grown from the grassroots up, a whole state that lives and breathes it. You show up loyal and knowledgeable and all-in, certain no one loves the sport more purely than you do.",
    "why": [
      "Your loyalty is grassroots and statewide, hockey woven into everyday life. Belonging to that whole community is the heart of it.",
      "Your roots in the game run as deep as anywhere in the country. This is who you are, not just what you watch.",
      "You carry an old wound, a team that left and won elsewhere, and you love the current one anyway. That devotion is unconditional."
    ]
  },
  "NSH": {
    "name": "Nashville Predators",
    "emoji": "🎸",
    "color": "#FFB81C",
    "code3": "NSH",
    "kitType": "duo",
    "secondaryColor": "#041E42",
    "tagline": "Smashville, the catfish on the ice, the loudest barn in the league, one Final in 2017.",
    "desc": "You turned a city nobody expected to care about hockey into Smashville, the loudest, most joyful building in the league. You have never won a Cup, but you reached the Final in 2017 and turned the whole run into a party, catfish thrown on the ice, country stars on the anthem, a downtown that shakes. You are the great Southern hockey surprise, proof the game can take root anywhere and be more fun than anyone imagined. You do not carry a century of tradition. You carry noise, personality, and a chip about being underestimated, and you would put your barn and your party up against anyone's.",
    "why": [
      "Your loyalty is loud, joyful, and unmistakable, a whole downtown turned into a party. Belonging to that noise is the point.",
      "You bring color and personality and a little mayhem to everything. The fun is not a side effect, it is the identity.",
      "You carry a chip about being doubted, hockey where it supposedly could not work. Proving them wrong is part of the joy."
    ]
  },
  "CBJ": {
    "name": "Columbus Blue Jackets",
    "emoji": "💣",
    "color": "#002654",
    "code3": "CBJ",
    "kitType": "duo",
    "secondaryColor": "#CE1126",
    "tagline": "Small-market Ohio, the cannon after every goal, still chasing a first playoff breakthrough.",
    "desc": "You are the earnest underdog, small-market Ohio hockey with a cannon that fires after every goal and a fan base that calls itself the 5th Line. You have never won a Stanley Cup, and playoff success has been rare and hard-won, but you show up loyal and hopeful anyway, building a hockey culture in a football state one season at a time. You do not have tradition or trophies to lean on. You have grit, patience, and a genuine, unpretentious love of the game, the kind of fan base that celebrates every small step. You are still waiting for the breakthrough, and you have not lost faith that it is coming.",
    "why": [
      "Your loyalty is small-market, earnest, and all-in, the 5th Line showing up regardless. Belonging to that hopeful crowd is the point.",
      "You keep the faith with little to show for it, building something from the ground up. Patience without payoff is your kind of devotion.",
      "Your hockey roots are young but real, grown in a football state. You are creating a tradition rather than inheriting one."
    ]
  },
  "NJD": {
    "name": "New Jersey Devils",
    "emoji": "😈",
    "color": "#CE1126",
    "code3": "NJD",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "tagline": "Three Cups won on a suffocating system, the smart, patient, unglamorous way to win.",
    "desc": "You win with your head, not your highlight reel. Three Stanley Cups sit in your history, all built on a suffocating defensive system that strangled opponents and frustrated purists, hockey engineered rather than improvised. You do not need to be loved or watched. You need to be effective, and for years you were the most effective team in the sport, Martin Brodeur in goal and a trap that turned games into vises. You are Jersey's team, unpretentious and proud of the substance over the flash. Let others chase style points. You will take the quiet, brilliant, buttoned-up win, and the three banners that prove it works.",
    "why": [
      "You trust the system above all, the disciplined, engineered way of winning. Style points mean nothing next to being effective.",
      "You measure yourself in results, not highlights. Three Cups won your way is the only argument you need.",
      "Your loyalty is to a no-nonsense, substance-over-flash identity. You are Jersey's team, and you like it unglamorous."
    ]
  },
  "CAR": {
    "name": "Carolina Hurricanes",
    "emoji": "🌀",
    "color": "#CC0000",
    "code3": "CAR",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "tagline": "The old Hartford Whalers made new, and a 2026 Cup won on structure with a grinder as MVP.",
    "desc": "You are proof that the smart, structured way wins, and you have the fresh trophy to show it. Once the Hartford Whalers, you moved south and built something better, a relentless, system-first team that just won the 2026 Stanley Cup on suffocating defense, with a thirty-seven-year-old grinder named playoff MVP over any superstar. Your fans are the Caniacs, loud and devoted in a market that had to be taught the game and learned to love it hard. You do not win with the flashiest roster. You win with structure, work, and buy-in, everyone rowing the same direction, and in 2026 you showed the whole league the boring, brilliant way beats the pretty one.",
    "why": [
      "You trust structure and buy-in over star power. The everyone-rows-together way of winning is your faith, and it just won it all.",
      "Your fans are the Caniacs, a taught-and-devoted market that learned the game and loves it loudly. Belonging to that crowd is the point.",
      "You just proved the system beats the spectacle. A Cup won your unglamorous way is the sweetest kind of vindication."
    ]
  },
  "DAL": {
    "name": "Dallas Stars",
    "emoji": "⭐",
    "color": "#006847",
    "code3": "DAL",
    "kitType": "duo",
    "secondaryColor": "#8F8F8C",
    "tagline": "The old Minnesota North Stars, a 1999 Cup in Texas, hockey where nobody expected it.",
    "desc": "You are hockey where it was never supposed to work. Once the Minnesota North Stars, you moved to Texas in 1993 and, six years later, won the Stanley Cup in the heat, victory green against all the doubters. You are structured and defensively stubborn, a team that grinds out wins rather than dazzling, and you built a real hockey culture in football country from nothing. There is an old tension in your history, a fan base in Minnesota that never forgave the move, but you took the game somewhere new and proved it could thrive. You do the unglamorous things well, and you have a Cup in Texas to show for it.",
    "why": [
      "You win by grinding, structure and defensive discipline over flash. The patient, hard-nosed way is the way you respect.",
      "You built hockey where it supposedly could not exist and made it thrive. Proving the doubters wrong is part of your identity.",
      "You have a Cup in the most unlikely place, and you want more. You measure yourself by results, not by where you play."
    ]
  },
  "PIT": {
    "name": "Pittsburgh Penguins",
    "emoji": "🐧",
    "color": "#000000",
    "code3": "PIT",
    "kitType": "duo",
    "secondaryColor": "#FCB514",
    "tagline": "Five Cups, Lemieux then Crosby, star power that saved the franchise and won everything.",
    "desc": "You are star power incarnate, the team that has always been carried by the best player in the world. Five Stanley Cups, two eras of greatness: Mario Lemieux, who won two Cups and then literally bought the team to save it from ruin, and Sidney Crosby, who won three more and became the face of the sport. You are pedigree and superstar shine, a franchise twice pulled back from the edge of relocation and twice turned into a champion. You expect to contend because your history is stacked with legends who made it so. You do not do small. You do stars, banners, and the certainty that greatness is your birthright.",
    "why": [
      "You expect to contend, always, because your history is built by the best players alive. Anything short of a Cup run feels wrong.",
      "Your loyalty survived two brushes with losing the team entirely. That devotion, tested by near-collapse, runs deep.",
      "Your identity is star power and pedigree, Lemieux to Crosby. You root for a franchise that expects greatness."
    ]
  },
  "WSH": {
    "name": "Washington Capitals",
    "emoji": "🦅",
    "color": "#C8102E",
    "code3": "WSH",
    "kitType": "duo",
    "secondaryColor": "#041E42",
    "tagline": "Ovechkin, the greatest goal-scorer ever, and the 2018 Cup that ended decades of heartbreak.",
    "desc": "You belong to the greatest goal-scorer who ever lived. Alex Ovechkin spent his entire career in your sweater and passed Wayne Gretzky for the most goals in NHL history, a record almost no one thought could fall. For years the individual brilliance came without the trophy, playoff heartbreak stacking up season after season, until 2018, when it all finally broke and you won your first Stanley Cup. You are star power and long-awaited payoff, Rock the Red, a fan base that suffered through the near-misses and got the release it earned. You waited a long time for the win, and you had the best show in hockey the whole way.",
    "why": [
      "Your identity is tied to the greatest goal-scorer ever, one man, one sweater, one city. That loyalty runs both ways.",
      "You endured years of playoff heartbreak chasing the Cup, and 2018 finally delivered it. The wait made the win everything.",
      "You rooted for individual greatness and hoped for the team payoff. Feeling both, the brilliance and the ache, is your story."
    ]
  },
  "COL": {
    "name": "Colorado Avalanche",
    "emoji": "🏔️",
    "color": "#6F263D",
    "code3": "COL",
    "kitType": "duo",
    "secondaryColor": "#236192",
    "tagline": "The old Quebec Nordiques reborn, three Cups, and star-driven greatness at altitude.",
    "desc": "You arrived already great and never really stopped. Once the Quebec Nordiques, you moved to Denver in 1995 and won the Stanley Cup in your very first season, then won again in 2001 and a third time in 2022, three titles built on elite, high-flying talent. You are star power at altitude, fast and skilled and expected to contend, a franchise that has always had one of the best players in the world on its roster. You do not grind out ugly wins. You overwhelm, with speed and skill and swagger. Greatness, for you, has been less a goal than a habit, and you fully intend to keep it that way.",
    "why": [
      "You expect to contend on the strength of elite talent. Anything less than a deep run feels beneath the standard you set.",
      "You win with speed, skill, and swagger, hockey played fast and loud. The flair is the point, not a bonus.",
      "Your identity is star-driven greatness, one elite roster after another. You root for a team that expects to be the best."
    ]
  },
  "LAK": {
    "name": "Los Angeles Kings",
    "emoji": "👑",
    "color": "#111111",
    "code3": "LAK",
    "kitType": "duo",
    "secondaryColor": "#A2AAAD",
    "tagline": "Gretzky put hockey on the LA map, and two Cups in 2012 and 2014 made it stick.",
    "desc": "You are hockey in the city of stars, and it took a star to make it matter. When Wayne Gretzky was traded to Los Angeles in 1988 he turned a hockey afterthought into an event, and though the Cup did not come then, the foundation did. Two decades later you won it twice, 2012 and 2014, gritty, star-anchored teams that finally delivered. You are Hollywood and hockey at once, glamour and a hard-earned toughness underneath, a franchise that had to build its own tradition in a place that had none. You do not have a century of banners. You have Gretzky, two Cups, and a city you taught to love the game.",
    "why": [
      "You measure yourself by the two Cups you earned and want more. Contending, in a city of stars, is the standard.",
      "You built a hockey tradition where none existed, starting with Gretzky. Creating that identity is part of your pride.",
      "Your loyalty is glamour and grit at once, Hollywood on top, toughness underneath. You root for both halves."
    ]
  },
  "TBL": {
    "name": "Tampa Bay Lightning",
    "emoji": "⚡",
    "color": "#002868",
    "code3": "TBL",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF",
    "tagline": "Three Cups since 2004, back-to-back in 2020 and 2021, a modern Sun Belt dynasty.",
    "desc": "You are the modern Sun Belt dynasty, proof that hockey in the Florida heat can be a machine. Three Stanley Cups sit in your history, the first in 2004 and then back-to-back titles in 2020 and 2021, built on a core of stars who stayed together and dominated. You are skilled, deep, and relentless, a team that turned a nontraditional market into a genuine power and made contending look routine. You do not have decades of tradition, and you do not need them. You have a recent dynasty, elite talent, and the swagger of a franchise that spent years as the best team in the sport.",
    "why": [
      "You expect to win because you recently, repeatedly did. A deep run is the baseline, not the dream.",
      "Your loyalty is to a modern power you watched become dominant. That shared recent glory is the bond.",
      "You built a hockey dynasty where the game barely existed, and made it look routine. That is your kind of pride."
    ]
  },
  "VGK": {
    "name": "Vegas Golden Knights",
    "emoji": "🎰",
    "color": "#B4975A",
    "code3": "VGK",
    "kitType": "duo",
    "secondaryColor": "#333F42",
    "tagline": "An expansion team in the Final in year one, a Cup by year six, built to win from day one.",
    "desc": "You are the machine, the team assembled to win now. You entered the league in 2017 and did the impossible, reaching the Stanley Cup Final in your very first season, then won it all in 2023, faster than any expansion team ever. You have no roots to speak of, and that is exactly the point, near-zero history is your flex, a win-now operation that treats contending as the only acceptable state. Vegas Born, glittering and ruthless, a franchise that arrived fully formed and expects a championship every single year. You did not wait your turn or pay any dues. You just showed up and started winning.",
    "why": [
      "You expect to win now, every year, no exceptions. Contending is not a goal for you, it is the baseline you were built on.",
      "Your near-total lack of history is your flex, not your shame. You arrived fully formed and answer to no tradition.",
      "Your identity is glitter and ruthlessness at once, Vegas through and through. You root for a show that also happens to win."
    ]
  },
  "FLA": {
    "name": "Florida Panthers",
    "emoji": "🐀",
    "color": "#C8102E",
    "code3": "FLA",
    "kitType": "duo",
    "secondaryColor": "#041E42",
    "tagline": "Thirty years nobody watched, then back-to-back Cups, and you never forgot being nothing.",
    "desc": "For thirty years you were the team nobody watched, hockey grafted onto a beach where it was never supposed to take. Then, all at once, you became the best team in the sport, winning the Stanley Cup in 2024 and again in 2025, back to back over the same opponent both times. You play like villains and love it, loud and fearless and happy to be hated. But the chip never leaves. You remember the decades of nothing, and every win answers everyone who ignored you. You were nobody. Now you are champions, and you will let no one forget either half.",
    "why": [
      "You have no long tradition to lean on, and you made that your fuel. Being underestimated for decades is what makes the winning taste right.",
      "You are happy to be the villain, loud and fearless and a little hated, and you would not trade the swagger for respectability.",
      "You aim as high as it goes and you got there, twice. The hunger was built in the lean years and never switched off."
    ]
  },
  "SEA": {
    "name": "Seattle Kraken",
    "emoji": "🦑",
    "color": "#001628",
    "code3": "SEA",
    "kitType": "duo",
    "secondaryColor": "#99D9D9",
    "tagline": "The league's newest big-market expansion, a brand built from scratch and still taking shape.",
    "desc": "You are the blank slate by design, the league's freshest expansion, an identity still being written in real time. You arrived in 2021 with a brilliant brand, the Kraken, a sea monster and a beautiful sweater and a gleaming arena, but almost no history yet, no dynasty, no wound, no decades of anything. And that is the appeal. You get to decide who you become, a modern hockey market in a great sports city, building your traditions from the first puck drop. You do not carry the past because you do not have one. You have a clean start, a loud new fan base, and a whole future to define however you choose.",
    "why": [
      "You have almost no history, and you treat that as freedom. You get to build your identity rather than inherit it.",
      "Your fan base is new, loud, and forming its own rituals. Belonging at the start of something is the appeal.",
      "You are not weighed down by old heartbreak or expectation. You root with the optimism of a clean slate."
    ]
  },
  "UTA": {
    "name": "Utah Mammoth",
    "emoji": "🦣",
    "color": "#71AFE5",
    "code3": "UTA",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "tagline": "The league's newest team, born from Arizona's ashes, a fresh start in Salt Lake City.",
    "desc": "You are the newest team in the entire league, a franchise barely getting started. You arrived suddenly, when the players and assets of a failed Arizona team were moved to Salt Lake City and rebranded, and in 2024 hockey had a brand-new home in the mountains. You became the Mammoth, and a fan base formed almost overnight, thrilled just to have a team of their own at last. You have no banners, no history, no old wounds, only a clean beginning. You are the ground floor of something, and being here this early, before any of it is written, is the entire appeal.",
    "why": [
      "You have no history at all, and you love that. Being at the very beginning, before anything is written, is the point.",
      "Your fan base formed overnight, grateful and all-in. Belonging at the ground floor of a team is the whole thrill.",
      "You carry no old heartbreak, only a fresh start. You root with the pure excitement of something just begun."
    ]
  },
  "ANA": {
    "name": "Anaheim Ducks",
    "emoji": "🦆",
    "color": "#F47A38",
    "code3": "ANA",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "tagline": "Born a Disney movie team, a real 2007 Cup, the improbable Mighty Ducks made legit.",
    "desc": "You started as a joke and turned into a champion. You were literally created by Disney in 1993, named for a movie, the Mighty Ducks, and nobody took you seriously, until you got good and, in 2007, won the Stanley Cup, the first California team ever to do it, built on a bruising, unglamorous, powerhouse blue line. You are Southern California hockey with a chip and a sense of humor, an identity that began as pure novelty and earned genuine respect the hard way. You do not mind the punchline origin. You have a Cup that shut everyone up, and you like the underdog-made-good story just fine.",
    "why": [
      "You began as a novelty and made yourself legitimate. Turning the joke into a champion is the heart of your pride.",
      "You carry a sense of humor and a chip at once, the cartoon team that got real. You root with that mix of fun and defiance.",
      "You have a Cup that silenced the doubters, and it still means everything. You measure yourself by that hard-won respect."
    ]
  },
  "SJS": {
    "name": "San Jose Sharks",
    "emoji": "🦈",
    "color": "#006D75",
    "code3": "SJS",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "tagline": "Silicon Valley teal, a long strong window, a 2016 Final, and still no Cup to show for it.",
    "desc": "You are the team that was good for a long time and never got the prize. From Silicon Valley in your unmistakable teal, you spent years as a strong, respected contender, piling up regular-season success and playoff appearances, reaching the Stanley Cup Final in 2016, and never quite lifting it. You have never won, and your wound is a specific one: not decades of losing, but decades of almost, very good when it counted and never quite enough. You are West Coast, modern, and loyal through the near-misses, still proud of the run even without the ring. You know how close is close, and you are still waiting to finally cross the line.",
    "why": [
      "You stayed loyal through years of coming close and falling short. Devotion tested by almost, not by losing, is your kind.",
      "You carry the specific ache of the near-miss, good enough to contend, never enough to win. You feel every one of those inches.",
      "You are Silicon Valley hockey in teal, a modern West Coast fan base. Belonging to that loyal crowd is the point."
    ]
  }
};
const archetypes = {
  "MTL": "The Habs",
  "TOR": "Leafs Nation",
  "BOS": "The Big Bad Bruins",
  "DET": "Hockeytown",
  "CHI": "Chelsea Dagger",
  "NYR": "The Broadway Blueshirts",
  "EDM": "Oil Country",
  "CGY": "The C of Red",
  "VAN": "Towel Power",
  "WPG": "The Whiteout",
  "OTT": "The Sens Army",
  "PHI": "The Broad Street Bullies",
  "BUF": "The Sabre Faithful",
  "STL": "Play Gloria",
  "NYI": "Fort Neverlose",
  "MIN": "The State of Hockey",
  "NSH": "Smashville",
  "CBJ": "The 5th Line",
  "NJD": "Devils Army",
  "CAR": "Caniacs",
  "DAL": "Victory Green",
  "PIT": "Let's Go Pens",
  "WSH": "Rock the Red",
  "COL": "Avalanche Country",
  "LAK": "Kings Country",
  "TBL": "The Bolts",
  "VGK": "Vegas Born",
  "FLA": "The Rat Pack",
  "SEA": "Release the Kraken",
  "UTA": "The Herd",
  "ANA": "Quack Attack",
  "SJS": "Sharks Territory"
};
const teamTextColors = {
  "MTL": "#FFFFFF",
  "TOR": "#FFFFFF",
  "BOS": "#FFB81C",
  "DET": "#FFFFFF",
  "CHI": "#FFFFFF",
  "NYR": "#FFFFFF",
  "EDM": "#FFFFFF",
  "CGY": "#FFFFFF",
  "VAN": "#FFFFFF",
  "WPG": "#FFFFFF",
  "OTT": "#FFFFFF",
  "PHI": "#FFFFFF",
  "BUF": "#FFFFFF",
  "STL": "#FFFFFF",
  "NYI": "#FFFFFF",
  "MIN": "#FFFFFF",
  "NSH": "#041E42",
  "CBJ": "#FFFFFF",
  "NJD": "#FFFFFF",
  "CAR": "#FFFFFF",
  "DAL": "#FFFFFF",
  "PIT": "#FCB514",
  "WSH": "#FFFFFF",
  "COL": "#FFFFFF",
  "LAK": "#FFFFFF",
  "TBL": "#FFFFFF",
  "VGK": "#FFFFFF",
  "FLA": "#FFFFFF",
  "SEA": "#FFFFFF",
  "UTA": "#FFFFFF",
  "ANA": "#FFFFFF",
  "SJS": "#FFFFFF"
};
const greats = {
  "MTL": [
    {
      "name": "Maurice Richard",
      "years": "1942-1960",
      "note": "the Rocket, first to score fifty goals in fifty games"
    },
    {
      "name": "Jean Beliveau",
      "years": "1950-1971",
      "note": "the elegant captain who won ten Cups"
    },
    {
      "name": "Guy Lafleur",
      "years": "1971-1985",
      "note": "the flying winger of the seventies four-peat"
    },
    {
      "name": "Patrick Roy",
      "years": "1984-1995",
      "note": "won two Cups here before he turned twenty-five"
    }
  ],
  "TOR": [
    {
      "name": "Dave Keon",
      "years": "1960-1975",
      "note": "the 1967 Conn Smythe winner and heart of the last Cup team"
    },
    {
      "name": "Borje Salming",
      "years": "1973-1989",
      "note": "the pioneering Swede who proved Europeans belonged in the NHL"
    },
    {
      "name": "Mats Sundin",
      "years": "1994-2008",
      "note": "the beloved captain and longtime franchise scoring leader"
    },
    {
      "name": "Auston Matthews",
      "years": "2016-present",
      "note": "the franchise's all-time leading goal-scorer"
    }
  ],
  "BOS": [
    {
      "name": "Bobby Orr",
      "years": "1966-1976",
      "note": "reinvented defense; the airborne 1970 Cup goal"
    },
    {
      "name": "Ray Bourque",
      "years": "1979-2000",
      "note": "a beloved twenty-one-year captain and Hall of Fame defenseman"
    },
    {
      "name": "Phil Esposito",
      "years": "1967-1975",
      "note": "the scoring machine of the Big Bad era"
    },
    {
      "name": "Patrice Bergeron",
      "years": "2003-2023",
      "note": "the perfect two-way captain, a record six Selkes"
    }
  ],
  "DET": [
    {
      "name": "Gordie Howe",
      "years": "1946-1971",
      "note": "Mr. Hockey, a scoring great across four decades"
    },
    {
      "name": "Steve Yzerman",
      "years": "1983-2006",
      "note": "the captain who led three Cup teams"
    },
    {
      "name": "Nicklas Lidstrom",
      "years": "1991-2012",
      "note": "the flawless seven-time Norris-winning defenseman"
    },
    {
      "name": "Terry Sawchuk",
      "years": "1949-1955, 1957-1964",
      "note": "the goaltender behind the fifties Cup teams"
    }
  ],
  "CHI": [
    {
      "name": "Bobby Hull",
      "years": "1957-1972",
      "note": "the Golden Jet, the most electric scorer of his day"
    },
    {
      "name": "Stan Mikita",
      "years": "1958-1980",
      "note": "a one-club legend and four-time scoring champion"
    },
    {
      "name": "Jonathan Toews",
      "years": "2007-2023",
      "note": "the captain of three modern Cups"
    },
    {
      "name": "Patrick Kane",
      "years": "2007-2023",
      "note": "the dynasty's dazzling finisher and 2010 Cup hero"
    }
  ],
  "NYR": [
    {
      "name": "Mark Messier",
      "years": "1991-1997, 2000-2004",
      "note": "guaranteed and delivered the 1994 Cup"
    },
    {
      "name": "Brian Leetch",
      "years": "1988-2004",
      "note": "the great American defenseman, 1994 Conn Smythe"
    },
    {
      "name": "Rod Gilbert",
      "years": "1960-1978",
      "note": "Mr. Ranger, a one-club Hall of Famer"
    },
    {
      "name": "Henrik Lundqvist",
      "years": "2005-2020",
      "note": "King Henrik, the franchise's greatest goaltender"
    }
  ],
  "EDM": [
    {
      "name": "Wayne Gretzky",
      "years": "1979-1988",
      "note": "the Great One, the greatest to ever play"
    },
    {
      "name": "Mark Messier",
      "years": "1979-1991",
      "note": "the Moose, the fierce heart of the dynasty"
    },
    {
      "name": "Jari Kurri",
      "years": "1980-1990",
      "note": "Gretzky's finisher and a fifty-goal winger"
    },
    {
      "name": "Connor McDavid",
      "years": "2015-present",
      "note": "the best player of his generation"
    }
  ],
  "CGY": [
    {
      "name": "Jarome Iginla",
      "years": "1996-2013",
      "note": "the beloved captain and franchise scoring leader"
    },
    {
      "name": "Al MacInnis",
      "years": "1981-1994",
      "note": "the hardest shot in the game, 1989 Conn Smythe"
    },
    {
      "name": "Lanny McDonald",
      "years": "1981-1989",
      "note": "the mustache and a 1989 Cup goal"
    },
    {
      "name": "Miikka Kiprusoff",
      "years": "2003-2013",
      "note": "the goaltender behind the 2004 Final run"
    }
  ],
  "VAN": [
    {
      "name": "Pavel Bure",
      "years": "1991-1998",
      "note": "the Russian Rocket, the most thrilling Canuck ever"
    },
    {
      "name": "Trevor Linden",
      "years": "1988-1998, 2001-2008",
      "note": "Captain Canuck, heart of the 1994 run"
    },
    {
      "name": "Henrik Sedin",
      "years": "2000-2018",
      "note": "the playmaking twin, a scoring champion and captain"
    },
    {
      "name": "Daniel Sedin",
      "years": "2000-2018",
      "note": "the finishing twin, the all-time franchise scorer"
    }
  ],
  "WPG": [
    {
      "name": "Dale Hawerchuk",
      "years": "original Jets",
      "note": "the franchise center, his number retired by the club"
    },
    {
      "name": "Teemu Selanne",
      "years": "original Jets",
      "note": "the Finnish Flash, a record 76-goal rookie season"
    },
    {
      "name": "Dustin Byfuglien",
      "years": "2011-2020",
      "note": "the mountainous, unforgettable defenseman of the return era"
    },
    {
      "name": "Connor Hellebuyck",
      "years": "2015-present",
      "note": "the Vezina-winning goaltender, among the world's best"
    }
  ],
  "OTT": [
    {
      "name": "Daniel Alfredsson",
      "years": "1995-2013",
      "note": "the greatest Senator and all-time scoring leader, and the 2007 overtime hero"
    },
    {
      "name": "Jason Spezza",
      "years": "2002-2014",
      "note": "the silky playmaker at the heart of the Pizza Line"
    },
    {
      "name": "Erik Karlsson",
      "years": "2009-2018",
      "note": "a two-time Norris winner and the most electric defenseman of his era"
    },
    {
      "name": "Chris Phillips",
      "years": "1997-2015",
      "note": "Big Rig, a one-club man and the games-played leader"
    }
  ],
  "PHI": [
    {
      "name": "Bobby Clarke",
      "years": "1969-1984",
      "note": "the snarling captain of the Broad Street Bullies"
    },
    {
      "name": "Bernie Parent",
      "years": "1971-1979",
      "note": "two straight Cups and two Conn Smythes in net"
    },
    {
      "name": "Eric Lindros",
      "years": "1992-2000",
      "note": "the dominant power forward of the nineties"
    },
    {
      "name": "Claude Giroux",
      "years": "2007-2022",
      "note": "the beloved longtime captain of the modern era"
    }
  ],
  "BUF": [
    {
      "name": "Gilbert Perreault",
      "years": "1970-1987",
      "note": "the French Connection center, the franchise's first star"
    },
    {
      "name": "Dominik Hasek",
      "years": "1992-2001",
      "note": "the Dominator, back-to-back MVP in goal"
    },
    {
      "name": "Pat LaFontaine",
      "years": "1991-1997",
      "note": "the electric playmaking center of the nineties"
    },
    {
      "name": "Ryan Miller",
      "years": "2002-2014",
      "note": "the beloved goaltender of the mid-2000s runs"
    }
  ],
  "STL": [
    {
      "name": "Brett Hull",
      "years": "1988-1998",
      "note": "the Golden Brett, a run of prolific goal-scoring seasons"
    },
    {
      "name": "Bernie Federko",
      "years": "1976-1989",
      "note": "the longtime franchise center and Hall of Famer"
    },
    {
      "name": "Chris Pronger",
      "years": "1995-2004",
      "note": "the towering Norris and Hart-winning defenseman"
    },
    {
      "name": "Ryan O'Reilly",
      "years": "2018-2023",
      "note": "the 2019 Conn Smythe winner"
    }
  ],
  "NYI": [
    {
      "name": "Mike Bossy",
      "years": "1977-1987",
      "note": "the pure sniper, nine straight fifty-goal seasons"
    },
    {
      "name": "Denis Potvin",
      "years": "1973-1988",
      "note": "the great defenseman and captain of four Cups"
    },
    {
      "name": "Bryan Trottier",
      "years": "1975-1990",
      "note": "the complete two-way center of the dynasty"
    },
    {
      "name": "Billy Smith",
      "years": "1972-1989",
      "note": "the combative goaltender behind four straight Cups"
    }
  ],
  "MIN": [
    {
      "name": "Marian Gaborik",
      "years": "2000-2009",
      "note": "the electric scorer and the expansion team's first star"
    },
    {
      "name": "Mikko Koivu",
      "years": "2005-2020",
      "note": "the longtime captain and franchise games leader"
    },
    {
      "name": "Zach Parise",
      "years": "2012-2021",
      "note": "the Minnesota-raised star who came home"
    },
    {
      "name": "Kirill Kaprizov",
      "years": "2020-present",
      "note": "the dazzling modern face of the franchise"
    }
  ],
  "NSH": [
    {
      "name": "Pekka Rinne",
      "years": "2005-2021",
      "note": "the franchise goaltender and 2018 Vezina winner"
    },
    {
      "name": "Shea Weber",
      "years": "2005-2016",
      "note": "the thunderous captain with a legendary slap shot"
    },
    {
      "name": "Roman Josi",
      "years": "2011-present",
      "note": "the Norris-winning defenseman and current captain"
    },
    {
      "name": "David Legwand",
      "years": "1998-2014",
      "note": "the franchise's first-ever draft pick and longtime center"
    }
  ],
  "CBJ": [
    {
      "name": "Rick Nash",
      "years": "2002-2012",
      "note": "the first franchise star and a shared Rocket Richard winner"
    },
    {
      "name": "Sergei Bobrovsky",
      "years": "2012-2019",
      "note": "the two-time Vezina goaltender in Columbus"
    },
    {
      "name": "Cam Atkinson",
      "years": "2011-2021",
      "note": "the undersized sniper and a franchise scoring leader"
    },
    {
      "name": "Zach Werenski",
      "years": "2016-present",
      "note": "the dynamic modern defenseman and cornerstone"
    }
  ],
  "NJD": [
    {
      "name": "Martin Brodeur",
      "years": "1991-2014",
      "note": "the winningest goaltender in NHL history, three Cups"
    },
    {
      "name": "Scott Stevens",
      "years": "1991-2004",
      "note": "the punishing captain and one of the great open-ice hitters"
    },
    {
      "name": "Scott Niedermayer",
      "years": "1991-2004",
      "note": "the smooth, elegant Cup-winning defenseman"
    },
    {
      "name": "Patrik Elias",
      "years": "1996-2016",
      "note": "the franchise's all-time leading scorer"
    }
  ],
  "CAR": [
    {
      "name": "Rod Brind'Amour",
      "years": "2000-2010",
      "note": "the 2006 Cup captain, now coach of the 2026 champions"
    },
    {
      "name": "Ron Francis",
      "years": "Whalers and Carolina",
      "note": "the franchise great and a superb playmaker"
    },
    {
      "name": "Eric Staal",
      "years": "2003-2016",
      "note": "the 2006 Cup star and a franchise scoring leader"
    },
    {
      "name": "Cam Ward",
      "years": "2005-2018",
      "note": "the rookie goaltender who won the 2006 Conn Smythe"
    }
  ],
  "DAL": [
    {
      "name": "Mike Modano",
      "years": "1989-2010",
      "note": "the greatest American-born goal-scorer, the face of the move"
    },
    {
      "name": "Ed Belfour",
      "years": "1997-2002",
      "note": "the 1999 Cup-winning goaltender, the Eagle"
    },
    {
      "name": "Sergei Zubov",
      "years": "1996-2009",
      "note": "the elegant, underrated puck-moving defenseman"
    },
    {
      "name": "Jamie Benn",
      "years": "2009-present",
      "note": "the longtime captain and a scoring champion"
    }
  ],
  "PIT": [
    {
      "name": "Mario Lemieux",
      "years": "1984-2006",
      "note": "one of the greatest ever, two Cups, then the owner who saved the team"
    },
    {
      "name": "Sidney Crosby",
      "years": "2005-present",
      "note": "the face of the sport and captain of three Cups"
    },
    {
      "name": "Jaromir Jagr",
      "years": "1990-2001",
      "note": "the dazzling winger of the early-nineties Cups"
    },
    {
      "name": "Evgeni Malkin",
      "years": "2006-present",
      "note": "the dynamic co-star of three championships"
    }
  ],
  "WSH": [
    {
      "name": "Alex Ovechkin",
      "years": "2005-present",
      "note": "the NHL's all-time leading goal-scorer, all in Washington"
    },
    {
      "name": "Nicklas Backstrom",
      "years": "2007-2024",
      "note": "the elite playmaker who set up so many of them"
    },
    {
      "name": "Braden Holtby",
      "years": "2010-2020",
      "note": "the goaltender behind the 2018 championship"
    },
    {
      "name": "Peter Bondra",
      "years": "1990-2004",
      "note": "the electric sniper of the pre-Ovechkin era"
    }
  ],
  "COL": [
    {
      "name": "Joe Sakic",
      "years": "1988-2009",
      "note": "the franchise captain who lifted two Cups"
    },
    {
      "name": "Patrick Roy",
      "years": "1995-2003",
      "note": "the legendary goaltender behind the 1996 and 2001 titles"
    },
    {
      "name": "Peter Forsberg",
      "years": "1994-2011",
      "note": "the brilliant, punishing Swedish center"
    },
    {
      "name": "Nathan MacKinnon",
      "years": "2013-present",
      "note": "the dynamic engine of the 2022 championship"
    }
  ],
  "LAK": [
    {
      "name": "Wayne Gretzky",
      "years": "1988-1996",
      "note": "put Los Angeles hockey on the map after the 1988 trade"
    },
    {
      "name": "Luc Robitaille",
      "years": "1986-1994, 1997-2001, 2003-2006",
      "note": "the highest-scoring left wing in NHL history"
    },
    {
      "name": "Anze Kopitar",
      "years": "2006-2026",
      "note": "the two-time Cup-winning captain and franchise center"
    },
    {
      "name": "Jonathan Quick",
      "years": "2007-2023",
      "note": "the goaltender who backstopped both championships"
    }
  ],
  "TBL": [
    {
      "name": "Steven Stamkos",
      "years": "2008-2024",
      "note": "the franchise's greatest scorer and two-Cup captain"
    },
    {
      "name": "Nikita Kucherov",
      "years": "2013-present",
      "note": "the dazzling playmaker and a league MVP"
    },
    {
      "name": "Andrei Vasilevskiy",
      "years": "2014-present",
      "note": "the elite goaltender behind back-to-back Cups"
    },
    {
      "name": "Victor Hedman",
      "years": "2009-present",
      "note": "the towering Norris-winning defenseman"
    }
  ],
  "VGK": [
    {
      "name": "Mark Stone",
      "years": "2019-present",
      "note": "the captain who lifted the 2023 Cup"
    },
    {
      "name": "William Karlsson",
      "years": "2017-present",
      "note": "the inaugural Golden Misfit and 43-goal breakout"
    },
    {
      "name": "Jonathan Marchessault",
      "years": "2017-2024",
      "note": "the 2023 Conn Smythe winner"
    },
    {
      "name": "Jack Eichel",
      "years": "2021-present",
      "note": "the star center and engine of the win-now core"
    }
  ],
  "FLA": [
    {
      "name": "Roberto Luongo",
      "years": "2000-2006, 2014-2019",
      "note": "the greatest goaltender in team history, the first number they retired"
    },
    {
      "name": "Pavel Bure",
      "years": "1999-2002",
      "note": "the Russian Rocket, near sixty goals a year in the lean times"
    },
    {
      "name": "Aleksander Barkov",
      "years": "2013-present",
      "note": "the two-time Selke-winning captain who lifted both Cups"
    },
    {
      "name": "Matthew Tkachuk",
      "years": "2022-present",
      "note": "the fearless agitator whose arrival turned them into champions"
    }
  ],
  "SEA": [
    {
      "name": "Matty Beniers",
      "years": "2021-present",
      "note": "the 2023 Calder Trophy winner and young cornerstone"
    },
    {
      "name": "Jordan Eberle",
      "years": "2021-present",
      "note": "the veteran leader and the franchise's first captain"
    },
    {
      "name": "Vince Dunn",
      "years": "2021-present",
      "note": "the breakout offensive defenseman of the early teams"
    },
    {
      "name": "Joey Daccord",
      "years": "2022-present",
      "note": "the emerging franchise goaltender"
    }
  ],
  "UTA": [
    {
      "name": "Clayton Keller",
      "years": "2024-present",
      "note": "the star forward and the franchise's leading scorer"
    },
    {
      "name": "Logan Cooley",
      "years": "2024-present",
      "note": "the ascending young center of the new core"
    },
    {
      "name": "Dylan Guenther",
      "years": "2024-present",
      "note": "the emerging young scorer and building block"
    },
    {
      "name": "Mikhail Sergachev",
      "years": "2024-present",
      "note": "the veteran top defenseman anchoring the blue line"
    }
  ],
  "ANA": [
    {
      "name": "Teemu Selanne",
      "years": "1996-2001, 2005-2014",
      "note": "the beloved Finnish Flash and 2007 Cup hero"
    },
    {
      "name": "Paul Kariya",
      "years": "1994-2003",
      "note": "the electric star of the early Mighty Ducks"
    },
    {
      "name": "Scott Niedermayer",
      "years": "2005-2010",
      "note": "the 2007 Cup captain and Conn Smythe winner"
    },
    {
      "name": "Ryan Getzlaf",
      "years": "2005-2022",
      "note": "the longtime captain and franchise scoring leader"
    }
  ],
  "SJS": [
    {
      "name": "Joe Thornton",
      "years": "2005-2020",
      "note": "the great playmaking center and longtime face"
    },
    {
      "name": "Patrick Marleau",
      "years": "1997-2020",
      "note": "the franchise leader and the NHL games-played record holder"
    },
    {
      "name": "Owen Nolan",
      "years": "1995-2003",
      "note": "the fierce early-era captain and scorer"
    },
    {
      "name": "Evgeni Nabokov",
      "years": "1999-2010",
      "note": "the franchise's greatest goaltender"
    }
  ]
};
const vitalStats = {
  "MTL": {
    "nickname": "The Habs",
    "founded": "1909",
    "stadium": "Bell Centre",
    "city": "Montreal, QC",
    "capacity": "21,105",
    "colors": "Red, white & blue",
    "titles": "24 Stanley Cups (most all-time)",
    "lastTitle": "1993, the last Canadian team to win the Cup"
  },
  "TOR": {
    "nickname": "The Leafs",
    "founded": "1917",
    "stadium": "Scotiabank Arena",
    "city": "Toronto, ON",
    "capacity": "18,819",
    "colors": "Blue & white",
    "titles": "13 Stanley Cups (second-most all-time)",
    "lastTitle": "1967, the longest drought in the NHL"
  },
  "BOS": {
    "nickname": "The Bruins",
    "founded": "1924",
    "stadium": "TD Garden",
    "city": "Boston, MA",
    "capacity": "17,850",
    "colors": "Black & gold",
    "titles": "6 Stanley Cups",
    "lastTitle": "2011, over Vancouver in seven games"
  },
  "DET": {
    "nickname": "The Red Wings",
    "founded": "1926",
    "stadium": "Little Caesars Arena",
    "city": "Detroit, MI",
    "capacity": "19,515",
    "colors": "Red & white",
    "titles": "11 Stanley Cups (most of any US team)",
    "lastTitle": "2008, over Pittsburgh"
  },
  "CHI": {
    "nickname": "The Blackhawks",
    "founded": "1926",
    "stadium": "United Center",
    "city": "Chicago, IL",
    "capacity": "19,717",
    "colors": "Red & black",
    "titles": "6 Stanley Cups",
    "lastTitle": "2015, the third in six seasons"
  },
  "NYR": {
    "nickname": "The Rangers",
    "founded": "1926",
    "stadium": "Madison Square Garden",
    "city": "New York, NY",
    "capacity": "18,006",
    "colors": "Blue, red & white",
    "titles": "4 Stanley Cups",
    "lastTitle": "1994, ending a fifty-four-year drought"
  },
  "EDM": {
    "nickname": "The Oilers",
    "founded": "1979",
    "stadium": "Rogers Place",
    "city": "Edmonton, AB",
    "capacity": "18,347",
    "colors": "Orange & navy",
    "titles": "5 Stanley Cups",
    "lastTitle": "1990, the last of five in seven years"
  },
  "CGY": {
    "nickname": "The Flames",
    "founded": "1980 (Atlanta to Calgary)",
    "stadium": "Scotiabank Saddledome",
    "city": "Calgary, AB",
    "capacity": "19,289",
    "colors": "Red, gold & black",
    "titles": "1 Stanley Cup",
    "lastTitle": "1989, over Montreal"
  },
  "VAN": {
    "nickname": "The Canucks",
    "founded": "1970",
    "stadium": "Rogers Arena",
    "city": "Vancouver, BC",
    "capacity": "18,910",
    "colors": "Blue, green & white",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never; lost Game 7 of the Final in 1994 and 2011"
  },
  "WPG": {
    "nickname": "The Jets",
    "founded": "1999 (Atlanta to Winnipeg 2011)",
    "stadium": "Canada Life Centre",
    "city": "Winnipeg, MB",
    "capacity": "15,321",
    "colors": "Navy, blue & silver",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never reached the Final in the current era"
  },
  "OTT": {
    "nickname": "The Sens",
    "founded": "1992",
    "stadium": "Canadian Tire Centre",
    "city": "Ottawa, ON",
    "capacity": "18,652",
    "colors": "Red, black & gold",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never; lost the 2007 Final to Anaheim, the only Final in franchise history"
  },
  "PHI": {
    "nickname": "The Flyers",
    "founded": "1967",
    "stadium": "Wells Fargo Center",
    "city": "Philadelphia, PA",
    "capacity": "19,543",
    "colors": "Orange, black & white",
    "titles": "2 Stanley Cups",
    "lastTitle": "1975, back-to-back with 1974"
  },
  "BUF": {
    "nickname": "The Sabres",
    "founded": "1970",
    "stadium": "KeyBank Center",
    "city": "Buffalo, NY",
    "capacity": "19,070",
    "colors": "Navy, gold & white",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never; lost the 1999 Final on the disputed No Goal"
  },
  "STL": {
    "nickname": "The Blues",
    "founded": "1967",
    "stadium": "Enterprise Center",
    "city": "St. Louis, MO",
    "capacity": "18,096",
    "colors": "Blue, gold & navy",
    "titles": "1 Stanley Cup",
    "lastTitle": "2019, the franchise's first in its fifty-second season"
  },
  "NYI": {
    "nickname": "The Islanders",
    "founded": "1972",
    "stadium": "UBS Arena",
    "city": "Elmont, NY",
    "capacity": "17,255",
    "colors": "Blue, orange & white",
    "titles": "4 Stanley Cups",
    "lastTitle": "1983, the fourth in a row"
  },
  "MIN": {
    "nickname": "The Wild",
    "founded": "2000",
    "stadium": "Xcel Energy Center",
    "city": "St. Paul, MN",
    "capacity": "17,954",
    "colors": "Forest green, red & wheat",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never; the North Stars departed for Dallas in 1993"
  },
  "NSH": {
    "nickname": "The Predators",
    "founded": "1998",
    "stadium": "Bridgestone Arena",
    "city": "Nashville, TN",
    "capacity": "17,159",
    "colors": "Gold & navy",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never; reached the Final in 2017"
  },
  "CBJ": {
    "nickname": "The Blue Jackets",
    "founded": "2000",
    "stadium": "Nationwide Arena",
    "city": "Columbus, OH",
    "capacity": "18,500",
    "colors": "Navy, red & silver",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never; still seeking a deep playoff run"
  },
  "NJD": {
    "nickname": "The Devils",
    "founded": "1982 (Colorado Rockies to New Jersey)",
    "stadium": "Prudential Center",
    "city": "Newark, NJ",
    "capacity": "16,514",
    "colors": "Red, black & white",
    "titles": "3 Stanley Cups",
    "lastTitle": "2003"
  },
  "CAR": {
    "nickname": "The Hurricanes",
    "founded": "1979 (Hartford Whalers to Carolina 1997)",
    "stadium": "Lenovo Center",
    "city": "Raleigh, NC",
    "capacity": "18,700",
    "colors": "Red, black & white",
    "titles": "2 Stanley Cups",
    "lastTitle": "2026, over Vegas"
  },
  "DAL": {
    "nickname": "The Stars",
    "founded": "1967 (Minnesota North Stars to Dallas 1993)",
    "stadium": "American Airlines Center",
    "city": "Dallas, TX",
    "capacity": "18,532",
    "colors": "Victory green, silver & black",
    "titles": "1 Stanley Cup",
    "lastTitle": "1999"
  },
  "PIT": {
    "nickname": "The Penguins",
    "founded": "1967",
    "stadium": "PPG Paints Arena",
    "city": "Pittsburgh, PA",
    "capacity": "18,387",
    "colors": "Black & gold",
    "titles": "5 Stanley Cups",
    "lastTitle": "2017, back-to-back with 2016"
  },
  "WSH": {
    "nickname": "The Capitals",
    "founded": "1974",
    "stadium": "Capital One Arena",
    "city": "Washington, DC",
    "capacity": "18,573",
    "colors": "Red, white & navy",
    "titles": "1 Stanley Cup",
    "lastTitle": "2018, the franchise's first"
  },
  "COL": {
    "nickname": "The Avalanche",
    "founded": "1972 (Quebec Nordiques to Colorado 1995)",
    "stadium": "Ball Arena",
    "city": "Denver, CO",
    "capacity": "18,086",
    "colors": "Burgundy, blue & silver",
    "titles": "3 Stanley Cups",
    "lastTitle": "2022"
  },
  "LAK": {
    "nickname": "The Kings",
    "founded": "1967",
    "stadium": "Crypto.com Arena",
    "city": "Los Angeles, CA",
    "capacity": "18,230",
    "colors": "Black & silver",
    "titles": "2 Stanley Cups",
    "lastTitle": "2014"
  },
  "TBL": {
    "nickname": "The Lightning",
    "founded": "1992",
    "stadium": "Amalie Arena",
    "city": "Tampa, FL",
    "capacity": "19,092",
    "colors": "Blue & white",
    "titles": "3 Stanley Cups",
    "lastTitle": "2021, back-to-back with 2020"
  },
  "VGK": {
    "nickname": "The Golden Knights",
    "founded": "2017",
    "stadium": "T-Mobile Arena",
    "city": "Las Vegas, NV",
    "capacity": "17,500",
    "colors": "Steel gray, gold & red",
    "titles": "1 Stanley Cup",
    "lastTitle": "2023"
  },
  "FLA": {
    "nickname": "The Panthers",
    "founded": "1993",
    "stadium": "Amerant Bank Arena",
    "city": "Sunrise, FL",
    "capacity": "19,250",
    "colors": "Red, navy & gold",
    "titles": "2 Stanley Cups",
    "lastTitle": "2025, back-to-back with 2024"
  },
  "SEA": {
    "nickname": "The Kraken",
    "founded": "2021",
    "stadium": "Climate Pledge Arena",
    "city": "Seattle, WA",
    "capacity": "17,100",
    "colors": "Deep sea blue, ice blue & red",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never; entered the league in 2021"
  },
  "UTA": {
    "nickname": "The Mammoth",
    "founded": "2024 (from the former Arizona Coyotes)",
    "stadium": "Delta Center",
    "city": "Salt Lake City, UT",
    "capacity": "12,478",
    "colors": "Mountain blue, salt white & rock black",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never; the league's newest franchise"
  },
  "ANA": {
    "nickname": "The Ducks",
    "founded": "1993 (as the Mighty Ducks of Anaheim)",
    "stadium": "Honda Center",
    "city": "Anaheim, CA",
    "capacity": "17,174",
    "colors": "Orange, black & gold",
    "titles": "1 Stanley Cup",
    "lastTitle": "2007"
  },
  "SJS": {
    "nickname": "The Sharks",
    "founded": "1991",
    "stadium": "SAP Center",
    "city": "San Jose, CA",
    "capacity": "17,562",
    "colors": "Teal, black & orange",
    "titles": "0 Stanley Cups",
    "lastTitle": "Never; lost the 2016 Final to Pittsburgh"
  }
};
const nearlyGot = {
  "MTL": {
    "TOR": "Toronto is your ancient twin, an Original Six giant with a whole nation raised on the crest, a rivalry older than almost anything in the sport. The tense is the difference. You remember winning, banner after banner, twenty-four times over, while Toronto counts thirteen and counts the years since 1967 even louder. One franchise wears its history as a crown, the other as a wait."
  },
  "TOR": {
    "MTL": "Montreal shares your birthright, an Original Six giant with more Cups than anyone and a whole province raised on the crest. The difference is the tense. Montreal remembers winning them, banner after banner, while you count thirteen and count the years since the last one even louder. One franchise wears its history as a crown, the other as a wait."
  },
  "BOS": {
    "CHI": "Chicago shares your Original Six pedigree and your taste for a loud, mean building, two of the sport's charter giants. The shape of the glory splits you. Chicago lived one modern dynasty and then tore it down, while yours is a century of black-and-gold toughness that never really fades. One had a golden decade, the other has a permanent identity.",
    "NYR": "You and New York are both Original Six institutions in demanding cities that expect to win. What the city wants is the difference. Boston wants blood and effort, hockey earned the hard way, while New York wants the show, Broadway and the bright lights. Same heritage, one built on muscle and one on spectacle."
  },
  "DET": {
    "NJD": "New Jersey shares your faith in structure and craft, winning the smart, unglamorous way rather than the loud one. Pedigree is the difference. You carry a century of tradition and eleven Cups won by beautiful hockey, while New Jersey built its titles on a suffocating system with no history behind it. One inherited the standard, the other engineered it from nothing."
  },
  "CHI": {
    "NYI": "The Islanders know your exact story, a run of dominance the whole league envied, then long years in its shadow. The scale is the difference. New York won four straight Cups and then vanished into the suburbs for decades, while you won three in six years and were dismantled almost overnight. Same shape, glory then dark, on different clocks.",
    "BOS": "Boston is the other charter giant with a loud, mean barn and a mountain of history. Where you part is permanence. Yours is one unforgettable modern dynasty, lived and then lost, while Boston's black-and-gold toughness simply never fades. One is a golden decade, the other a standing identity."
  },
  "NYR": {
    "BOS": "Boston is the other Original Six institution in a hard northeastern city. The appetite is the difference. Boston wants the game won with muscle and spite, while you want it won under the lights, with all of New York watching. Same old pedigree, one built on toughness and one on spectacle.",
    "NYI": "The Islanders share your city and your league vintage, the two New York franchises. The identities could not be less alike. You are Broadway and the big market and the bright lights, while the Islanders are blue-collar Long Island, the working cousins who won while you waited. One is the show, the other the grind."
  },
  "EDM": {
    "CGY": "Calgary is your blood rival, the other end of the Battle of Alberta, a province split down the middle. Trajectory is the difference. You had a sprawling dynasty and a Great One and the grief of losing him, while Calgary had one shining Cup and a red sea that never cooled. One is boom and bust, the other steady devotion.",
    "VAN": "Vancouver is the other volatile western Canadian team, passion that runs hot. Fortune is the difference. You have five Cups and a dynasty banked, while Vancouver has come heartbreakingly close and never won, twice falling in a Game 7 Final. One remembers glory, the other still aches for a first."
  },
  "CGY": {
    "EDM": "Edmonton is your provincial enemy, the other half of the Battle of Alberta. History is the difference. Edmonton had a dynasty and a Great One and the grief of losing him, while you had one perfect Cup and a red sea that never cooled. One remembers many springs, the other treasures the one it got."
  },
  "VAN": {
    "EDM": "Edmonton is the other volatile western Canadian team, passion that runs hot. Fortune is the difference. Edmonton has five Cups and a dynasty banked, while you have come heartbreakingly close and never won, twice falling in a Game 7 Final. One remembers glory, the other still aches for a first.",
    "BUF": "Buffalo shares your particular pain, a loyal fan base that has given everything and never once lifted the Cup. The wound is shaped differently. You lost two Game 7 Finals, the last at home, while Buffalo lost on a goal it still swears never counted. Same emptiness, one from a lost Game 7 and one from a foot in the crease."
  },
  "WPG": {
    "OTT": "Ottawa knows your kind of loyalty, a smaller Canadian market bruised by the business side of the sport. The threat took different shapes. You lost your team entirely and got another one back, gratitude earned through absence, while Ottawa never left and fought bankruptcy and turmoil just to stay. One faith rewarded with a homecoming, the other with the fight to hold on."
  },
  "OTT": {
    "WPG": "Winnipeg knows your loyalty, a smaller Canadian market that loves hockey plainly and has been bruised by the business side of it. The split is the threat. Winnipeg lost its team and got another one back, gratitude earned through absence, while you never left, fighting bankruptcy and bad ownership just to hold your ground. One faith rewarded with a homecoming, the other with the fight to stay."
  },
  "PHI": {
    "BOS": "Boston is the other team that built its name on toughness and fear, black and gold against orange and black. The era is the difference. Boston's Big Bad identity spans a century and six Cups, while yours is one snarling mid-seventies peak you have chased ever since. Both play mean, one still winning, one still waiting.",
    "BUF": "Buffalo shares your rust-belt loyalty, a hard, honest fan base that shows up through everything. The wound is the split. You had two Cups and a feared identity and then a long drought, while Buffalo has never won at all. One is chasing a peak, the other a first."
  },
  "BUF": {
    "VAN": "Vancouver shares your emptiness, a devoted fan base that has given all and never won. The heartbreak is shaped differently. Vancouver lost two Game 7 Finals, the last at home, while you lost on a goal scored with a foot in the crease that your city never accepted. Same missing Cup, two different unforgettable ways it slipped away.",
    "STL": "St. Louis knows your long, faithful wait, a loyal Midwestern fan base that kept showing up through lean decades. The ending is the difference. St. Louis finally broke through in 2019, last place in January to champions in June, while your wait is still going. One drought ended in glory, the other is still carried."
  },
  "STL": {
    "BUF": "Buffalo shares your long, faithful, blue-collar wait, a fan base that kept the faith through empty decades. The ending is the difference. You finally broke through in 2019, last place to champions, while Buffalo is still waiting. One drought ended in the most improbable glory, the other is still carried."
  },
  "NYI": {
    "CHI": "Chicago knows your arc, a dynasty the league envied and then long years in its shadow. The clock is the difference. You won four straight and vanished into the suburbs for decades, while Chicago won three in six years and was torn down almost overnight. Same story, glory then dark, on different timelines.",
    "NYR": "The Rangers share your city and your era, the two New York franchises. The identities could not differ more. They are Broadway and the big market and the bright lights, while you are blue-collar Long Island, the working cousins who won four straight while they waited. One is the show, the other the grind."
  },
  "MIN": {
    "CBJ": "Columbus shares your small-market, earnest, community-first devotion, a fan base that loves the game without a trophy to show for it. Depth is the difference. Your roots go back generations, the State of Hockey itself, while Columbus is building its hockey culture from scratch. One inherited the love of the game, the other is growing it.",
    "DAL": "Dallas holds a piece of your history you never wanted to give up, the North Stars who left in 1993. The feeling is the difference. Dallas took your old team and won a Cup with it, building hockey in Texas, while you kept the State of Hockey and started over with the Wild. One carries off the trophy, the other kept the roots."
  },
  "NSH": {
    "CBJ": "Columbus is the other newer, non-traditional market building a hockey identity from scratch. Personality is the difference. You became Smashville, loud and Southern and impossible to ignore, while Columbus is still earnest and searching for its signature. One found its voice, the other is still finding it."
  },
  "CBJ": {
    "MIN": "Minnesota shares your small-market, community-first, earnest devotion to the game. Depth is the difference. Minnesota's roots are generations deep, the State of Hockey itself, while you are building your hockey culture from the ground up in a football town. One inherited the love, the other is growing it.",
    "SJS": "San Jose knows your ache, an expansion-era team that has never won and rarely broken through. Age is the difference. San Jose had its long window and a Final and let it slip, while you are younger and still waiting for a first deep run. Same missing trophy, one that let its chance pass and one still hoping for its chance."
  },
  "NJD": {
    "CAR": "Carolina is your fellow architect, a team that wins on structure and defense rather than star power. History is the difference. You built a dynasty on the trap across three Cups in the nineties and two-thousands, while Carolina just proved the same idea again in 2026 with a grinder as its MVP. Two system teams, one that pioneered it and one that renewed it.",
    "DAL": "Dallas is another team that grinds out wins on structure and defensive discipline rather than flash. Setting is the difference. You are Jersey's unglamorous, substance-first identity in the shadow of New York, while Dallas built the same hard-nosed hockey in the Texas heat. Same commitment to the system, two very different places doing it."
  },
  "CAR": {
    "NJD": "New Jersey is your fellow system team, winning on structure and defense instead of stars. Vintage is the difference. New Jersey pioneered the smothering, trap-based blueprint across three Cups a generation ago, while you just renewed it in 2026 with a grinder as your MVP. Two architects of the same idea, one that wrote it and one that proved it still works.",
    "DAL": "Dallas is the other structured, defensively disciplined winner that grinds teams down. Result is the difference. You just lifted the Cup in 2026 on exactly that blueprint, while Dallas has knocked on the door for years without breaking through again. Same patient, system-first identity, one that closed the deal and one still trying."
  },
  "DAL": {
    "MIN": "Minnesota is the home you left behind, the North Stars fan base that never forgave the move. The trophy is the difference. You carried the old team to Texas and won a Cup with it in 1999, building the game in football country, while Minnesota kept the roots and started fresh. One took the title, the other kept the State of Hockey.",
    "NJD": "New Jersey is your fellow grinder, a team that wins on structure and defense over spectacle. Setting is the difference. New Jersey built its unglamorous identity in the shadow of New York, while you built the same hard-nosed hockey in the Texas heat where the game barely existed. Same system-first soul, two very different climates."
  },
  "PIT": {
    "WSH": "Washington is your era's great foil, Crosby against Ovechkin, the rivalry that defined a generation. Timing is the difference. You won early and often, five Cups and two dynasties, while Washington waited through years of playoff heartbreak, much of it against you, before its one title in 2018. Two star-driven giants, one that kept winning and one that finally broke through.",
    "COL": "Colorado shares your star-driven, win-now pedigree, a team stacked with elite talent and expected to contend. Continuity is the difference. You had two distinct dynasties across five Cups and thirty years, while Colorado's greatness came in concentrated bursts around its stars. Both built on brilliance, one sustained across eras and one in golden windows."
  },
  "WSH": {
    "PIT": "Pittsburgh is the rival that defined your era, Ovechkin against Crosby, over and over. Fortune is the difference. Pittsburgh won early and often, five Cups, and beat you in the playoffs again and again, while you carried the game's greatest scorer through years of heartbreak to one title in 2018. Two star-driven giants, one that kept winning and one that finally broke through."
  },
  "COL": {
    "LAK": "Los Angeles shares your star-driven, high-ambition profile, a team stacked to contend. Steadiness is the difference. You arrived great and won across three different eras, while Los Angeles had one concentrated championship window built around its stars. Both built on elite talent, one that keeps reloading and one that seized its moment.",
    "TBL": "Tampa Bay is another skilled, star-heavy modern power that expects to win. History is the difference. Your greatness stretches back to a first-season Cup in 1996 and spans three decades, while Tampa's came all at once in a dazzling recent dynasty. Two star-driven contenders, one with deep pedigree and one with a fresh one."
  },
  "LAK": {
    "COL": "Colorado shares your star-driven ambition, a roster built to contend. Continuity is the difference. Colorado arrived great and won across three separate eras, while you had one concentrated window and made it count for two Cups. Both built on elite talent, one that keeps reloading and one that seized its moment."
  },
  "TBL": {
    "FLA": "Florida is your in-state rival, the other Sun Belt team that turned Florida heat into a champion. Story is the difference. You built a steady, star-core dynasty across three Cups over two decades, while Florida spent thirty years as nobody before its sudden back-to-back rise. Two Florida winners, one a machine and one an improbable riser.",
    "VGK": "Vegas is the other manufactured modern power that expects to win now. Track record is the difference. You have three Cups and a proven dynasty, while Vegas built an instant contender and won one, with two Final losses around it. Both win-now machines in warm-weather markets, one with the banners and one still chasing more."
  },
  "VGK": {
    "FLA": "Florida is the other warm-weather team that turned improbable hockey into a champion. Origin is the difference. You were assembled to win from day one, an instant machine with roots as an afterthought, while Florida spent thirty years as nobody before clawing to the top. One was built to win, the other earned it out of nothing.",
    "TBL": "Tampa Bay is the other modern Sun Belt power that expects to contend. Proof is the difference. Tampa built a lasting dynasty across three Cups, while you built an instant winner and lifted one, with two Final losses framing it. Both win-now machines in the heat, one with the deeper trophy case."
  },
  "FLA": {
    "VGK": "Vegas is the other warm-weather team that turned hockey where it doesn't belong into a champion, ambitious and built to win now. But your paths are opposite. Vegas arrived fully formed, a machine assembled to contend from day one, roots optional. You spent thirty years as nothing before becoming everything, and never dropped the chip. One was built to win, the other clawed up from being ignored.",
    "TBL": "Tampa Bay is your in-state rival, the other Florida team to turn the heat into a winner. The climb is the difference. Tampa was a steady machine, three Cups built on a star core, while you were nobody for thirty years and then, all at once, back-to-back champions. Same state, one that never fell and one that rose from nothing."
  },
  "SEA": {
    "UTA": "Utah is the other true blank slate, an even newer team with no history to carry. The path is the difference. You entered as a polished expansion brand, choosing your identity from scratch, while Utah arrived suddenly by relocation, inheriting another market's players and starting over in a new city. Two clean starts, one built and one transplanted."
  },
  "UTA": {
    "SEA": "Seattle is the other clean slate, a young team with no history yet. Arrival is the difference. Seattle was a polished expansion brand that chose its identity deliberately, while you appeared almost overnight by relocation, inheriting a failed team's players and starting over in the mountains. Two blank pages, one designed and one transplanted.",
    "WPG": "Winnipeg knows relocation from the other side, a city that gained a team when one moved. The emotion is the difference. Winnipeg waited fifteen years and got hockey back as a homecoming, while you received another market's failed franchise as a brand-new beginning. One a grateful return, the other a fresh transplant with no past at all."
  },
  "ANA": {
    "SJS": "San Jose is your California neighbor, the other West Coast team that grew the game in the sun. Outcome is the difference. You turned a novelty beginning into a real Cup in 2007, while San Jose had a long, strong window and a Final but never lifted it. Two California teams, one that broke through and one that never quite did.",
    "FLA": "Florida shares your improbable arc, a warm-weather team that was easy to dismiss and won anyway. Scale is the difference. You turned a Disney novelty into one Cup, respect earned once, while Florida went from thirty forgotten years to back-to-back champions. Both underdog stories made good, one a single vindication and one a full rise."
  },
  "SJS": {
    "ANA": "Anaheim is your California neighbor, the other West Coast team building the game in the sun. Outcome is the difference. Anaheim turned a novelty start into a real Cup in 2007, while you had the longer, stronger window and a Final and never lifted it. Two California teams, one that broke through and one still waiting.",
    "CBJ": "Columbus shares your missing trophy, an expansion-era team still chasing a first breakthrough. Age is the difference. You had a long, strong contending window and a Final that slipped away, while Columbus is younger and still hoping for its chance. Same empty case, one that let its window pass and one still opening its own."
  }
};
const scoring = {
  "nhl_q1": {
    "A": {
      "BOS": 2,
      "CHI": 2,
      "EDM": 2,
      "CGY": 2,
      "VAN": 2,
      "PHI": 2,
      "FLA": 2
    },
    "B": {
      "NJD": 2,
      "CAR": 2,
      "DAL": 2,
      "VGK": 2,
      "ANA": 2
    },
    "C": {
      "MTL": 2,
      "TOR": 2,
      "DET": 2,
      "NYR": 2,
      "PIT": 2,
      "WSH": 2,
      "COL": 2,
      "LAK": 2,
      "TBL": 2
    },
    "D": {
      "WPG": 2,
      "OTT": 2,
      "BUF": 2,
      "STL": 2,
      "NYI": 2,
      "MIN": 2,
      "NSH": 2,
      "CBJ": 2,
      "SEA": 2,
      "UTA": 2,
      "SJS": 2
    }
  },
  "nhl_q2": {
    "A": {
      "BOS": 2,
      "PHI": 2,
      "CAR": 2,
      "FLA": 2
    },
    "B": {
      "TOR": 2,
      "CHI": 2,
      "EDM": 2,
      "CGY": 2,
      "VAN": 2,
      "WPG": 2,
      "OTT": 2,
      "BUF": 2,
      "STL": 2,
      "NYI": 2,
      "MIN": 2,
      "NSH": 2,
      "CBJ": 2,
      "SEA": 2,
      "UTA": 2,
      "ANA": 2,
      "SJS": 2
    },
    "C": {
      "MTL": 2,
      "DET": 2,
      "NYR": 2,
      "DAL": 2,
      "PIT": 2,
      "WSH": 2,
      "COL": 2,
      "LAK": 2,
      "TBL": 2,
      "VGK": 2
    },
    "D": {
      "NJD": 2
    }
  },
  "nhl_q3": {
    "1": {
      "EDM": 2,
      "VAN": 2,
      "PHI": 3,
      "VGK": 2,
      "FLA": 2
    },
    "2": {
      "BOS": 3,
      "CHI": 3,
      "NYR": 3,
      "EDM": 3,
      "VAN": 3,
      "PHI": 1,
      "NSH": 3,
      "PIT": 3,
      "WSH": 3,
      "VGK": 3,
      "FLA": 3,
      "OTT": 2,
      "CAR": 2
    },
    "3": {
      "BOS": 2,
      "CHI": 2,
      "NYR": 2,
      "NSH": 2,
      "PIT": 2,
      "WSH": 2,
      "TOR": 3,
      "CGY": 3,
      "OTT": 3,
      "BUF": 3,
      "STL": 3,
      "CBJ": 3,
      "CAR": 3,
      "COL": 3,
      "LAK": 3,
      "TBL": 3,
      "UTA": 2,
      "ANA": 2,
      "SJS": 2
    },
    "4": {
      "TOR": 2,
      "CGY": 2,
      "BUF": 2,
      "STL": 2,
      "CBJ": 2,
      "COL": 2,
      "LAK": 2,
      "TBL": 2,
      "MTL": 3,
      "DET": 1,
      "WPG": 3,
      "NYI": 3,
      "MIN": 1,
      "NJD": 1,
      "DAL": 3,
      "SEA": 3,
      "UTA": 3,
      "ANA": 3,
      "SJS": 3
    },
    "5": {
      "MTL": 2,
      "DET": 3,
      "WPG": 2,
      "NYI": 2,
      "MIN": 3,
      "NJD": 3,
      "DAL": 2,
      "SEA": 2
    }
  },
  "nhl_q4": {
    "A": {
      "MTL": 2,
      "BOS": 2,
      "NYR": 2,
      "EDM": 2,
      "NYI": 2,
      "PIT": 2,
      "COL": 2,
      "TBL": 2
    },
    "B": {
      "VAN": 2,
      "NJD": 2,
      "WSH": 2,
      "VGK": 2,
      "SJS": 2
    },
    "C": {
      "DET": 2,
      "CHI": 2,
      "NSH": 2,
      "LAK": 2,
      "SEA": 2
    },
    "D": {
      "CGY": 2,
      "WPG": 2,
      "MIN": 2,
      "UTA": 2
    },
    "E": {
      "TOR": 2,
      "OTT": 2,
      "PHI": 2,
      "BUF": 2,
      "STL": 2,
      "CBJ": 2,
      "CAR": 2,
      "DAL": 2,
      "FLA": 2,
      "ANA": 2
    }
  },
  "nhl_q5": {
    "A": {
      "MTL": 2,
      "TOR": 2,
      "CHI": 2,
      "NYR": 2,
      "CGY": 2,
      "VAN": 2,
      "PHI": 2,
      "BUF": 2,
      "NSH": 2,
      "PIT": 2,
      "WSH": 2,
      "SJS": 2
    },
    "B": {
      "DET": 2,
      "WPG": 2,
      "OTT": 2,
      "NYI": 2,
      "MIN": 2,
      "CBJ": 2,
      "DAL": 2,
      "COL": 2,
      "LAK": 2
    },
    "C": {
      "STL": 2,
      "CAR": 2,
      "TBL": 2,
      "VGK": 2
    },
    "D": {
      "NJD": 2,
      "SEA": 2,
      "UTA": 2
    },
    "E": {
      "BOS": 2,
      "EDM": 2,
      "FLA": 2,
      "ANA": 2
    }
  },
  "nhl_q6": {
    "1": {
      "MTL": 3,
      "TOR": 3,
      "BOS": 2,
      "DET": 2,
      "CHI": 1,
      "NYR": 2,
      "EDM": 1,
      "CGY": 1,
      "PHI": 1
    },
    "2": {
      "MTL": 1,
      "TOR": 1,
      "BOS": 3,
      "DET": 3,
      "CHI": 3,
      "NYR": 3,
      "EDM": 3,
      "CGY": 3,
      "VAN": 3,
      "PHI": 3,
      "BUF": 3,
      "STL": 2,
      "NYI": 2,
      "MIN": 2,
      "PIT": 2
    },
    "3": {
      "CHI": 1,
      "EDM": 1,
      "CGY": 1,
      "VAN": 2,
      "PHI": 1,
      "BUF": 2,
      "WPG": 3,
      "STL": 3,
      "NYI": 3,
      "MIN": 3,
      "NJD": 3,
      "DAL": 3,
      "PIT": 3,
      "WSH": 3,
      "COL": 3,
      "LAK": 3,
      "OTT": 2,
      "NSH": 2,
      "CBJ": 2,
      "CAR": 2,
      "TBL": 2,
      "FLA": 1,
      "ANA": 1,
      "SJS": 2
    },
    "4": {
      "WPG": 2,
      "NJD": 2,
      "DAL": 2,
      "WSH": 2,
      "COL": 2,
      "LAK": 2,
      "OTT": 3,
      "NSH": 3,
      "CBJ": 3,
      "CAR": 3,
      "TBL": 3,
      "VGK": 3,
      "FLA": 3,
      "SEA": 3,
      "UTA": 1,
      "ANA": 3,
      "SJS": 3
    },
    "5": {
      "VGK": 2,
      "FLA": 1,
      "SEA": 2,
      "UTA": 3,
      "ANA": 1
    }
  },
  "nhl_q7": {
    "A": {
      "MTL": 2,
      "TOR": 2,
      "BOS": 2,
      "DET": 2,
      "NYI": 2,
      "LAK": 2,
      "TBL": 2,
      "SJS": 2
    },
    "B": {
      "CGY": 2,
      "PHI": 2,
      "BUF": 2,
      "STL": 2,
      "NJD": 2,
      "CAR": 2,
      "DAL": 2
    },
    "C": {
      "CHI": 2,
      "NYR": 2,
      "EDM": 2,
      "VAN": 2,
      "NSH": 2,
      "PIT": 2,
      "WSH": 2,
      "COL": 2,
      "VGK": 2
    },
    "D": {
      "WPG": 2,
      "OTT": 2,
      "MIN": 2,
      "CBJ": 2,
      "SEA": 2,
      "UTA": 2
    },
    "E": {
      "FLA": 2,
      "ANA": 2
    }
  },
  "nhl_q8": {
    "A": {
      "DAL": 2
    },
    "B": {
      "MTL": 2,
      "TOR": 2,
      "DET": 2,
      "EDM": 2,
      "CGY": 2,
      "VAN": 2,
      "WPG": 2,
      "OTT": 2,
      "BUF": 2,
      "STL": 2,
      "MIN": 2,
      "CBJ": 2,
      "CAR": 2,
      "WSH": 2,
      "SEA": 2,
      "UTA": 2,
      "SJS": 2
    },
    "C": {
      "NYR": 2,
      "NJD": 2,
      "PIT": 2,
      "COL": 2,
      "LAK": 2,
      "TBL": 2,
      "VGK": 2,
      "ANA": 2
    },
    "D": {
      "NYI": 2
    },
    "E": {
      "BOS": 2,
      "CHI": 2,
      "PHI": 2,
      "NSH": 2,
      "FLA": 2
    }
  },
  "nhl_q9": {
    "1": {
      "MTL": 3,
      "TOR": 2,
      "BOS": 2,
      "CHI": 2,
      "NYR": 2,
      "EDM": 3,
      "PIT": 3,
      "WSH": 2,
      "COL": 3,
      "TBL": 3,
      "VGK": 3
    },
    "2": {
      "MTL": 1,
      "TOR": 3,
      "BOS": 3,
      "CHI": 3,
      "NYR": 3,
      "EDM": 1,
      "PIT": 1,
      "WSH": 3,
      "COL": 1,
      "TBL": 1,
      "VGK": 1,
      "DET": 2,
      "LAK": 2,
      "FLA": 2
    },
    "3": {
      "DET": 3,
      "CGY": 3,
      "VAN": 3,
      "PHI": 3,
      "STL": 3,
      "NYI": 3,
      "NJD": 3,
      "LAK": 3,
      "FLA": 3,
      "SJS": 3,
      "CAR": 2,
      "DAL": 2
    },
    "4": {
      "CGY": 2,
      "VAN": 2,
      "PHI": 2,
      "STL": 2,
      "NYI": 2,
      "NJD": 2,
      "SJS": 2,
      "WPG": 3,
      "OTT": 1,
      "BUF": 3,
      "MIN": 3,
      "NSH": 3,
      "CBJ": 1,
      "CAR": 3,
      "DAL": 3,
      "SEA": 1,
      "UTA": 1,
      "ANA": 3
    },
    "5": {
      "WPG": 2,
      "OTT": 3,
      "BUF": 2,
      "MIN": 2,
      "NSH": 2,
      "CBJ": 3,
      "SEA": 3,
      "UTA": 3,
      "ANA": 2
    }
  },
  "nhl_q10": {
    "A": {
      "MTL": 2,
      "TOR": 2,
      "BOS": 2,
      "DET": 2,
      "CHI": 2,
      "CGY": 2,
      "VAN": 2,
      "OTT": 2,
      "PHI": 2,
      "BUF": 2,
      "STL": 2,
      "NYI": 2,
      "MIN": 2,
      "PIT": 2,
      "WSH": 2,
      "SJS": 2
    },
    "B": {
      "NYR": 2,
      "EDM": 2,
      "WPG": 2,
      "LAK": 2
    },
    "C": {
      "NSH": 2,
      "CBJ": 2,
      "TBL": 2,
      "VGK": 2,
      "FLA": 2,
      "SEA": 2,
      "ANA": 2
    },
    "D": {
      "NJD": 2,
      "CAR": 2,
      "DAL": 2,
      "COL": 2,
      "UTA": 2
    }
  },
  "nhl_q11": {
    "A": {
      "TOR": 2,
      "BOS": 2,
      "CHI": 2,
      "NYR": 2,
      "EDM": 2,
      "CGY": 2,
      "VAN": 2,
      "PHI": 2,
      "BUF": 2,
      "WSH": 2,
      "FLA": 2,
      "SJS": 2
    },
    "B": {
      "DET": 2,
      "NJD": 2,
      "LAK": 2,
      "VGK": 2
    },
    "C": {
      "MTL": 2,
      "STL": 2,
      "NYI": 2,
      "CAR": 2,
      "DAL": 2,
      "PIT": 2,
      "COL": 2,
      "TBL": 2
    },
    "D": {
      "NSH": 2,
      "ANA": 2
    },
    "E": {
      "WPG": 2,
      "OTT": 2,
      "MIN": 2,
      "CBJ": 2,
      "SEA": 2,
      "UTA": 2
    }
  },
  "nhl_q12": {
    "A": {
      "DET": 3,
      "NYI": 3,
      "NJD": 3,
      "CAR": 3,
      "DAL": 3
    },
    "B": {
      "BOS": 3,
      "CHI": 3,
      "EDM": 3,
      "VAN": 3,
      "PHI": 3,
      "NSH": 3,
      "COL": 3,
      "FLA": 3,
      "ANA": 3
    },
    "C": {
      "NYR": 3,
      "PIT": 3,
      "WSH": 3,
      "LAK": 3,
      "TBL": 3,
      "SJS": 3
    },
    "D": {
      "MTL": 3,
      "TOR": 3,
      "CGY": 3,
      "WPG": 3,
      "OTT": 3,
      "BUF": 3,
      "STL": 3,
      "MIN": 3,
      "CBJ": 3
    },
    "E": {
      "VGK": 3,
      "SEA": 3,
      "UTA": 3
    }
  }
};
const teamDims = {
  "MTL": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 9,
    "process": 5,
    "community": 7,
    "chaos": 4,
    "rootedness": 10
  },
  "TOR": {
    "loyalty": 10,
    "emotion": 9,
    "ambition": 8,
    "process": 4,
    "community": 7,
    "chaos": 5,
    "rootedness": 10
  },
  "BOS": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 8,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 9
  },
  "DET": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 8,
    "process": 8,
    "community": 7,
    "chaos": 3,
    "rootedness": 9
  },
  "CHI": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 6,
    "rootedness": 8
  },
  "NYR": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 8,
    "process": 5,
    "community": 5,
    "chaos": 6,
    "rootedness": 9
  },
  "EDM": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 9,
    "process": 4,
    "community": 7,
    "chaos": 7,
    "rootedness": 8
  },
  "CGY": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 7,
    "process": 5,
    "community": 8,
    "chaos": 5,
    "rootedness": 8
  },
  "VAN": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 7,
    "process": 4,
    "community": 7,
    "chaos": 7,
    "rootedness": 7
  },
  "WPG": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 6,
    "community": 9,
    "chaos": 4,
    "rootedness": 6
  },
  "OTT": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 5,
    "process": 5,
    "community": 8,
    "chaos": 6,
    "rootedness": 5
  },
  "PHI": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 7,
    "process": 5,
    "community": 7,
    "chaos": 8,
    "rootedness": 8
  },
  "BUF": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 6,
    "process": 5,
    "community": 8,
    "chaos": 5,
    "rootedness": 7
  },
  "STL": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 8,
    "chaos": 5,
    "rootedness": 7
  },
  "NYI": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 7,
    "process": 7,
    "community": 7,
    "chaos": 4,
    "rootedness": 7
  },
  "MIN": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 6,
    "process": 6,
    "community": 9,
    "chaos": 3,
    "rootedness": 7
  },
  "NSH": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 6,
    "process": 6,
    "community": 9,
    "chaos": 6,
    "rootedness": 5
  },
  "CBJ": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 5,
    "process": 6,
    "community": 7,
    "chaos": 5,
    "rootedness": 5
  },
  "NJD": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 7,
    "process": 10,
    "community": 5,
    "chaos": 3,
    "rootedness": 6
  },
  "CAR": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 7,
    "process": 9,
    "community": 6,
    "chaos": 6,
    "rootedness": 5
  },
  "DAL": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 7,
    "process": 8,
    "community": 6,
    "chaos": 4,
    "rootedness": 6
  },
  "PIT": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 9,
    "process": 6,
    "community": 5,
    "chaos": 6,
    "rootedness": 7
  },
  "WSH": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 6,
    "rootedness": 6
  },
  "COL": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 9,
    "process": 7,
    "community": 5,
    "chaos": 5,
    "rootedness": 6
  },
  "LAK": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 8,
    "process": 7,
    "community": 5,
    "chaos": 5,
    "rootedness": 6
  },
  "TBL": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 9,
    "process": 7,
    "community": 6,
    "chaos": 5,
    "rootedness": 5
  },
  "VGK": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 9,
    "process": 6,
    "community": 6,
    "chaos": 7,
    "rootedness": 3
  },
  "FLA": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 8,
    "process": 7,
    "community": 5,
    "chaos": 7,
    "rootedness": 4
  },
  "SEA": {
    "loyalty": 6,
    "emotion": 5,
    "ambition": 5,
    "process": 6,
    "community": 6,
    "chaos": 4,
    "rootedness": 3
  },
  "UTA": {
    "loyalty": 6,
    "emotion": 5,
    "ambition": 5,
    "process": 6,
    "community": 6,
    "chaos": 5,
    "rootedness": 2
  },
  "ANA": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 6,
    "process": 6,
    "community": 5,
    "chaos": 5,
    "rootedness": 4
  },
  "SJS": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 6,
    "chaos": 5,
    "rootedness": 5
  }
};
const CARD_BADGES = {
  "MTL": "⚜️",
  "TOR": "🍁",
  "BOS": "🐻",
  "DET": "🐙",
  "CHI": "🪶",
  "NYR": "🗽",
  "EDM": "🛢️",
  "CGY": "🔥",
  "VAN": "🐋",
  "WPG": "✈️",
  "OTT": "🏛️",
  "PHI": "🛣️",
  "BUF": "⚔️",
  "STL": "🎷",
  "NYI": "🏝️",
  "MIN": "🌲",
  "NSH": "🎸",
  "CBJ": "💣",
  "NJD": "😈",
  "CAR": "🌀",
  "DAL": "⭐",
  "PIT": "🐧",
  "WSH": "🦅",
  "COL": "🏔️",
  "LAK": "👑",
  "TBL": "⚡",
  "VGK": "🎰",
  "FLA": "🐀",
  "SEA": "🦑",
  "UTA": "🦣",
  "ANA": "🦆",
  "SJS": "🦈"
};
const badgeUrls = {
  "MTL": "https://a.espncdn.com/i/teamlogos/nhl/500/mtl.png",
  "TOR": "https://a.espncdn.com/i/teamlogos/nhl/500/tor.png",
  "BOS": "https://a.espncdn.com/i/teamlogos/nhl/500/bos.png",
  "DET": "https://a.espncdn.com/i/teamlogos/nhl/500/det.png",
  "CHI": "https://a.espncdn.com/i/teamlogos/nhl/500/chi.png",
  "NYR": "https://a.espncdn.com/i/teamlogos/nhl/500/nyr.png",
  "EDM": "https://a.espncdn.com/i/teamlogos/nhl/500/edm.png",
  "CGY": "https://a.espncdn.com/i/teamlogos/nhl/500/cgy.png",
  "VAN": "https://a.espncdn.com/i/teamlogos/nhl/500/van.png",
  "WPG": "https://a.espncdn.com/i/teamlogos/nhl/500/wpg.png",
  "OTT": "https://a.espncdn.com/i/teamlogos/nhl/500/ott.png",
  "PHI": "https://a.espncdn.com/i/teamlogos/nhl/500/phi.png",
  "BUF": "https://a.espncdn.com/i/teamlogos/nhl/500/buf.png",
  "STL": "https://a.espncdn.com/i/teamlogos/nhl/500/stl.png",
  "NYI": "https://a.espncdn.com/i/teamlogos/nhl/500/nyi.png",
  "MIN": "https://a.espncdn.com/i/teamlogos/nhl/500/min.png",
  "NSH": "https://a.espncdn.com/i/teamlogos/nhl/500/nsh.png",
  "CBJ": "https://a.espncdn.com/i/teamlogos/nhl/500/cbj.png",
  "NJD": "https://a.espncdn.com/i/teamlogos/nhl/500/nj.png",
  "CAR": "https://a.espncdn.com/i/teamlogos/nhl/500/car.png",
  "DAL": "https://a.espncdn.com/i/teamlogos/nhl/500/dal.png",
  "PIT": "https://a.espncdn.com/i/teamlogos/nhl/500/pit.png",
  "WSH": "https://a.espncdn.com/i/teamlogos/nhl/500/wsh.png",
  "COL": "https://a.espncdn.com/i/teamlogos/nhl/500/col.png",
  "LAK": "https://a.espncdn.com/i/teamlogos/nhl/500/la.png",
  "TBL": "https://a.espncdn.com/i/teamlogos/nhl/500/tb.png",
  "VGK": "https://a.espncdn.com/i/teamlogos/nhl/500/vgk.png",
  "FLA": "https://a.espncdn.com/i/teamlogos/nhl/500/fla.png",
  "SEA": "https://a.espncdn.com/i/teamlogos/nhl/500/sea.png",
  "UTA": "https://a.espncdn.com/i/teamlogos/nhl/500/utah.png",
  "ANA": "https://a.espncdn.com/i/teamlogos/nhl/500/ana.png",
  "SJS": "https://a.espncdn.com/i/teamlogos/nhl/500/sj.png"
};
const squadUrls = {};  // no per-team roster links yet; the View squad CTA stays hidden (data-gated)
const milestones = {
  "MTL": [
    "Twenty-four Stanley Cups, the most of any franchise in NHL history.",
    "Five straight championships from 1956 to 1960, the longest Cup streak ever.",
    "A four-peat from 1976 to 1979 behind Guy Lafleur and a golden roster.",
    "The 1993 title, still the last Stanley Cup won by a Canadian team.",
    "The Rocket Richard Trophy, named for the first man to score fifty goals in fifty games."
  ],
  "TOR": [
    "Thirteen Stanley Cups, second only to Montreal, an Original Six team since 1917.",
    "The last title in 1967, now the longest championship drought in NHL history.",
    "Four Cups in six years in the 1960s, the franchise's last dynasty.",
    "Darryl Sittler's ten-point game in 1976, still the most in a single NHL game.",
    "Auston Matthews' 69 goals in 2023-24, the most by any NHL player since the 1990s."
  ],
  "BOS": [
    "Six Stanley Cups, an Original Six franchise dating to 1924.",
    "Bobby Orr's airborne overtime goal to win the 1970 Cup, hockey's most famous image.",
    "The 2011 championship, a Game 7 win over Vancouver on the road.",
    "The Big Bad Bruins of the early 1970s, Cups in 1970 and 1972.",
    "Patrice Bergeron's six Selke Trophies, the most ever for a defensive forward."
  ],
  "DET": [
    "Eleven Stanley Cups, the most of any American franchise.",
    "A dynasty across the late 1990s and 2000s, four Cups behind Yzerman and Lidstrom.",
    "A twenty-five-year playoff streak from 1991 to 2016, the longest of its era.",
    "Gordie Howe's twenty-five seasons in Detroit, a scoring force into his forties.",
    "The octopus tossed to the ice since 1952, one arm for each win a Cup once took."
  ],
  "CHI": [
    "Six Stanley Cups, an Original Six team since 1926.",
    "Three Cups in six years, in 2010, 2013, and 2015, a modern dynasty.",
    "The 2010 title, the franchise's first in forty-nine years.",
    "Bobby Hull and Stan Mikita, the stars who ended a long drought in 1961.",
    "The roar of the Madhouse on Madison during the anthem, a league signature."
  ],
  "NYR": [
    "Four Stanley Cups, an Original Six franchise since 1926.",
    "The 1994 championship, ending a fifty-four-year drought, one of the sport's great releases.",
    "Mark Messier's guarantee before Game 6 of the 1994 conference final, then a hat trick.",
    "The original 1928 Cup, won in only the franchise's second season.",
    "Henrik Lundqvist's fifteen seasons in goal, the most wins in franchise history."
  ],
  "EDM": [
    "Five Stanley Cups in seven years, from 1984 to 1990, the last great dynasty.",
    "Wayne Gretzky's 1980s, rewriting nearly every scoring record in the sport.",
    "The 1988 trade of Gretzky to Los Angeles, mourned across a nation.",
    "Connor McDavid's arrival in 2015, the most gifted player of his era.",
    "Back-to-back Final runs in 2024 and 2025, both lost to Florida."
  ],
  "CGY": [
    "The 1989 Stanley Cup, won in Montreal, the franchise's only title.",
    "The Battle of Alberta, the fierce rivalry with Edmonton that defined the 1980s.",
    "The 2004 run to Game 7 of the Final, a heartbreaking loss to Tampa Bay.",
    "Jarome Iginla's seventeen seasons, the face of the franchise for a generation.",
    "The C of Red, the playoff tradition that turns the whole city crimson."
  ],
  "VAN": [
    "Three trips to the Stanley Cup Final, in 1982, 1994, and 2011, all lost.",
    "The 1994 Game 7 Final loss to the Rangers, a series that went the distance.",
    "The 2011 Presidents' Trophy season, ended by a Game 7 Final loss at home.",
    "Pavel Bure's electric early nineties, the Russian Rocket in full flight.",
    "The Sedin twins, two decades of elite playmaking and a pair of scoring titles."
  ],
  "WPG": [
    "The original Jets' move to Phoenix in 1996, a fifteen-year absence for the city.",
    "NHL hockey returned in 2011, the relocated Atlanta franchise taking the old name.",
    "Teemu Selanne's 76 goals as a rookie in 1992-93, still an NHL record.",
    "The Whiteout, the playoff tradition that turns the arena into a sea of white.",
    "A run to the 2018 conference final, the deepest of the current era."
  ],
  "OTT": [
    "The 2007 run to the Stanley Cup Final, the only Final in the modern franchise's history, ended by Anaheim.",
    "Daniel Alfredsson's overtime winner over Buffalo that clinched the 2007 conference title.",
    "The 2002-03 Presidents' Trophy, the league's best regular-season record that year.",
    "A surprise run to the 2017 conference final, a Game 7 double-overtime loss to Pittsburgh.",
    "Rescued from bankruptcy in 2003 and sold in 2023 for a then-record price for an NHL club."
  ],
  "PHI": [
    "Back-to-back Stanley Cups in 1974 and 1975, the Broad Street Bullies era.",
    "The first expansion team to win the Cup, beating the Original Six in 1974.",
    "Bernie Parent's back-to-back Conn Smythe Trophies in goal, 1974 and 1975.",
    "A thirty-five-game unbeaten streak in 1979-80, still an NHL record.",
    "The most penalized, most feared team of the seventies, dreaded league-wide."
  ],
  "BUF": [
    "Two trips to the Stanley Cup Final, in 1975 and 1999, both lost.",
    "The 1999 Final ended by Brett Hull's disputed goal, forever the No Goal.",
    "Dominik Hasek's back-to-back Hart Trophies, a goaltender named league MVP.",
    "The French Connection line of the seventies, the franchise's first golden era.",
    "The longest playoff drought in the NHL, more than a decade without a berth."
  ],
  "STL": [
    "The 2019 Stanley Cup, the franchise's first in its fifty-second season.",
    "Dead last in the NHL in January 2019, then champions by June.",
    "Play Gloria, the Laura Branigan anthem that became the 2019 rallying cry.",
    "Three straight Cup Final losses to open the 1968-70 expansion era.",
    "Brett Hull's early nineties, among the greatest goal-scoring stretches ever."
  ],
  "NYI": [
    "Four straight Stanley Cups from 1980 to 1983, a dynasty that beat everyone.",
    "Nineteen consecutive playoff series wins across the dynasty, a pro sports record.",
    "Mike Bossy's nine straight fifty-goal seasons, a run of pure scoring.",
    "Fort Neverlose, the Nassau Coliseum's fearsome name during the dynasty.",
    "Decades of blue-collar loyalty on Long Island since the dynasty faded."
  ],
  "MIN": [
    "The State of Hockey, the deepest amateur hockey roots in the United States.",
    "The North Stars' departure for Dallas in 1993, where they won a Cup in 1999.",
    "The Wild's arrival in 2000, hockey's return to a hockey-mad state.",
    "A run to the 2003 conference final in only the franchise's third season.",
    "The Minnesota state high school tournament, filling an NHL arena every winter."
  ],
  "NSH": [
    "The 2017 run to the Stanley Cup Final, the franchise's first, lost to Pittsburgh.",
    "Smashville, the raucous downtown fan culture built from nothing.",
    "The catfish thrown onto the ice, Nashville's answer to the octopus.",
    "Pekka Rinne's Vezina Trophy in 2018, the face of the franchise in goal.",
    "A Southern city turned into one of the league's loudest hockey markets."
  ],
  "CBJ": [
    "The franchise's arrival in 2000, hockey in a football-first state.",
    "The 2019 upset sweep of the Presidents' Trophy-winning Lightning, a stunner.",
    "Sergei Bobrovsky's two Vezina Trophies won in Columbus.",
    "The cannon that fires after every home goal, the building's signature.",
    "Rick Nash, the first homegrown star and a shared Rocket Richard Trophy."
  ],
  "NJD": [
    "Three Stanley Cups, in 1995, 2000, and 2003, all won on defense.",
    "The neutral-zone trap that smothered the league in the 1990s and 2000s.",
    "Martin Brodeur, the winningest goaltender in NHL history.",
    "Relocated from Colorado in 1982 with no history, then built a winner.",
    "Scott Stevens' open-ice hits, the defining image of the Cup teams."
  ],
  "CAR": [
    "The 2026 Stanley Cup, won over Vegas on suffocating defense, the second in franchise history.",
    "The 2006 Cup, the franchise's first, five years after moving from Hartford.",
    "Jordan Staal, the oldest Conn Smythe winner ever, MVP of the 2026 run.",
    "Once the Hartford Whalers, relocated to North Carolina in 1997.",
    "Rod Brind'Amour, the 2006 captain who coached the 2026 champions."
  ],
  "DAL": [
    "The 1999 Stanley Cup, won in Buffalo on Brett Hull's disputed goal.",
    "Once the Minnesota North Stars, relocated to Texas in 1993.",
    "Mike Modano, the greatest American-born goal-scorer in NHL history.",
    "Back-to-back Final trips in 1999 and 2000, a title and a near-miss.",
    "Hockey built into a football state, a Cup won in the Texas heat."
  ],
  "PIT": [
    "Five Stanley Cups, two in the early nineties and three since 2009.",
    "Mario Lemieux won two Cups, then bought the team to save it from bankruptcy.",
    "Sidney Crosby's three Cups, including back-to-back titles in 2016 and 2017.",
    "Twice nearly relocated, twice rescued and turned into a champion.",
    "Back-to-back Conn Smythes for Sidney Crosby in 2016 and 2017."
  ],
  "WSH": [
    "Alex Ovechkin passed Gretzky in 2025 for the most goals in NHL history.",
    "The 2018 Stanley Cup, the franchise's first, after decades of playoff heartbreak.",
    "Ovechkin's two decades in Washington, every goal of the record scored in a Capitals sweater.",
    "Nine Rocket Richard Trophies for Ovechkin, the most in league history.",
    "The 2018 Conn Smythe for Ovechkin, finally a champion after years of near-misses."
  ],
  "COL": [
    "Three Stanley Cups, in 1996, 2001, and 2022, all on elite talent.",
    "The 1996 Cup, won in the very first season after moving from Quebec.",
    "Once the Quebec Nordiques, relocated to Denver in 1995.",
    "Nathan MacKinnon's 2022 run, the fast, dominant engine of a champion.",
    "Joe Sakic and Patrick Roy, the spine of the two late-nineties Cups."
  ],
  "LAK": [
    "Two Stanley Cups, in 2012 and 2014, both star-anchored and hard-earned.",
    "The 1988 trade for Wayne Gretzky, which put LA hockey on the map.",
    "The 2012 Cup, won as the first eighth seed to go all the way.",
    "Jonathan Quick and Anze Kopitar, the spine of both championships.",
    "Hockey built into the city of stars, from afterthought to two-time champion."
  ],
  "TBL": [
    "Three Stanley Cups, in 2004, 2020, and 2021, a modern power.",
    "Back-to-back titles in 2020 and 2021, a rare repeat champion.",
    "The 2004 Cup, the franchise's first, in only its twelfth season.",
    "Nikita Kucherov and Andrei Vasilevskiy, the core of the recent dynasty.",
    "Hockey turned into a Sun Belt power in the Tampa heat."
  ],
  "VGK": [
    "The Stanley Cup Final in 2018, the franchise's very first season.",
    "The 2023 Stanley Cup, the fastest an expansion team ever won it all.",
    "An expansion draft in 2017 that built an instant contender, the Golden Misfits.",
    "Three Cup Finals in nine seasons, more than most franchises reach in decades.",
    "Jonathan Marchessault, the 2023 Conn Smythe winner from the original roster."
  ],
  "FLA": [
    "Back-to-back Stanley Cups in 2024 and 2025, both over the Edmonton Oilers.",
    "The 2024 title, the first in franchise history, in a Game 7 at home.",
    "The longest playoff series-win drought in NHL history, twenty-four years, before the rise.",
    "The 1996 Cinderella run to the Final, when fans first threw rats on the ice.",
    "Sam Bennett's 2025 Conn Smythe, leading all playoff scorers in goals."
  ],
  "SEA": [
    "The franchise's arrival in 2021, the league's thirty-second team.",
    "A run to the second round in 2023, the deepest of the young era.",
    "Matty Beniers, the 2023 Calder Trophy winner as top rookie.",
    "The Kraken brand and Climate Pledge Arena, a modern identity from day one.",
    "A clean-slate expansion in a passionate new hockey market."
  ],
  "UTA": [
    "The league's newest franchise, launched in Salt Lake City in 2024.",
    "Formed from the players and assets of the former Arizona Coyotes.",
    "A first playoff berth in 2026, a fast start for a new team.",
    "Renamed the Mammoth, a fresh mountain-state identity from scratch.",
    "A brand-new fan base, thrilled to finally have a team of its own."
  ],
  "ANA": [
    "The 2007 Stanley Cup, the first ever won by a California team.",
    "Created by Disney in 1993 and named the Mighty Ducks after a movie.",
    "The 2007 blue line of Niedermayer and Pronger, a bruising powerhouse.",
    "Teemu Selanne, the beloved Finnish Flash and face of the franchise.",
    "A novelty expansion team turned into a genuine, respected champion."
  ],
  "SJS": [
    "The 2016 Stanley Cup Final, the franchise's first and only, lost to Pittsburgh.",
    "The 2009 Presidents' Trophy, the best regular-season record in the league.",
    "Years as a strong contender that ended just short of the Cup.",
    "Patrick Marleau, the NHL's all-time leader in games played.",
    "Joe Thornton, the elite playmaker who defined the contender era."
  ]
};

export { moduleQuestions, teams, archetypes, teamTextColors, greats, vitalStats, milestones, nearlyGot, scoring, teamDims, CARD_BADGES, badgeUrls, squadUrls };
