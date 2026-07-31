// FanDNA CFB data (fingerprint path). Same export shape as mlb.js and the soccer files.
// Plain literal scoring objects, NO cell() helper.
// US English, ASCII in user-facing copy (emoji only in emoji fields). code3 keys.

const moduleQuestions = [
  {
    "id": "cfb_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "The thing you've been part of the longest, what's really kept you in it?",
    "options": [
      {
        "label": "It's home. I was never going anywhere, win or lose.",
        "value": "A"
      },
      {
        "label": "The standard. I'm here because we don't accept losing.",
        "value": "B"
      },
      {
        "label": "The people. I'd have walked from the thing, but never from them.",
        "value": "C"
      },
      {
        "label": "The climb. I want to build it into something that finally matters.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "When a lot is expected of you, that pressure feels like:",
    "options": [
      {
        "label": "A machine I trust, do the work, the result takes care of itself.",
        "value": "A"
      },
      {
        "label": "A birthright. Of course we come through; that's just who we are.",
        "value": "B"
      },
      {
        "label": "A weight I've finally earned the right to carry.",
        "value": "C"
      },
      {
        "label": "Not really my world, I'm just out to prove I belong at all.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "Which is more you:",
    "left": "Give me the wild, roll-the-dice moment, that's when I feel most alive",
    "right": "Give me the plan run cleanly, I trust the process over the thrill"
  },
  {
    "id": "cfb_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "You finally get the thing you've chased for years. What makes it matter most:",
    "options": [
      {
        "label": "It's undeniable, nobody can ever say we didn't.",
        "value": "A"
      },
      {
        "label": "The tradition holds, you carried what was handed to you.",
        "value": "B"
      },
      {
        "label": "You did it your own unmistakable way.",
        "value": "C"
      },
      {
        "label": "You did it the hard way, when quitting was right there.",
        "value": "D"
      },
      {
        "label": "You shared it with the exact people you started with.",
        "value": "E"
      }
    ]
  },
  {
    "id": "cfb_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "Something you cared about slips away at the cruelest possible moment. You:",
    "options": [
      {
        "label": "Feel every bit of it, out loud, no hiding how much it hurt.",
        "value": "A"
      },
      {
        "label": "Go quiet and carry it alone for a while.",
        "value": "B"
      },
      {
        "label": "Laugh it off, of course it happened to us; it always does.",
        "value": "C"
      },
      {
        "label": "Let it harden into fuel, and remember exactly who did it to you.",
        "value": "D"
      },
      {
        "label": "You're already onto the next thing, dwelling isn't you.",
        "value": "E"
      }
    ]
  },
  {
    "id": "cfb_q6",
    "type": "slider",
    "phase": "The fine print",
    "question": "Which is more you:",
    "left": "Some things should stay exactly as they've always been",
    "right": "I'd rather tear it up and build something new that's unmistakably mine"
  },
  {
    "id": "cfb_q7",
    "type": "choice",
    "phase": "The fine print",
    "question": "The kind of respect you actually want:",
    "options": [
      {
        "label": "The blue-collar kind, earned by outworking everyone, no flash.",
        "value": "A"
      },
      {
        "label": "The kind that turns heads, I want it to look as good as it is.",
        "value": "B"
      },
      {
        "label": "The quiet kind, from the people who actually know the work.",
        "value": "C"
      },
      {
        "label": "The kind that finally says we belong with the big names.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q8",
    "type": "choice",
    "phase": "The fine print",
    "question": "How much does one single rival define you?",
    "options": [
      {
        "label": "Completely. Beat them and the year's a win, whatever else happens.",
        "value": "A"
      },
      {
        "label": "They matter, but I measure myself against the whole field.",
        "value": "B"
      },
      {
        "label": "My real rival is my own past, being better than we were.",
        "value": "C"
      },
      {
        "label": "I don't need an enemy; I'm in it for us, not against them.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q9",
    "type": "slider",
    "phase": "The fine print",
    "question": "Which is more you:",
    "left": "It's the whole of us, the crowd, the place, all of it together",
    "right": "I'm drawn to the standout, the one who carries the moment"
  },
  {
    "id": "cfb_q10",
    "type": "choice",
    "phase": "The fine print",
    "question": "On the biggest day, the energy you bring is:",
    "options": [
      {
        "label": "Deafening, all heart, all volume, nothing held back.",
        "value": "A"
      },
      {
        "label": "Ice-cold and composed, let everyone else lose their heads.",
        "value": "B"
      },
      {
        "label": "Pure joy, a party that happens to have a game inside it.",
        "value": "C"
      },
      {
        "label": "Chip-on-the-shoulder, something to prove, and everyone will hear about it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q11",
    "type": "choice",
    "phase": "The fine print",
    "question": "Where you're from and what you're part of:",
    "options": [
      {
        "label": "They're the same thing. This place made me; I'll never leave it.",
        "value": "A"
      },
      {
        "label": "I carry it everywhere, but my world got bigger than one town.",
        "value": "B"
      },
      {
        "label": "I chose this, it wasn't handed to me, and that means more.",
        "value": "C"
      },
      {
        "label": "It's a launchpad, I love it, but I'm built to go further.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q12",
    "type": "choice",
    "phase": "The fine print",
    "question": "Through a long stretch where nothing went right, you were the one who:",
    "options": [
      {
        "label": "Never wavered, showed up exactly the same, every single time.",
        "value": "A"
      },
      {
        "label": "Kept the faith but demanded better, this isn't who we are.",
        "value": "B"
      },
      {
        "label": "Found the joy anyway, the losing never once killed the love.",
        "value": "C"
      },
      {
        "label": "Used it, quietly stacking the work for when it finally turned.",
        "value": "D"
      },
      {
        "label": "Honestly? Drifted when it got bad, came back when it got good.",
        "value": "E"
      }
    ]
  }
];

const teams = {
  "IND": {
    "name": "Indiana",
    "emoji": "\u26a1",
    "color": "#990000",
    "code3": "IND",
    "kitType": "solid",
    "tagline": "You won it all without losing a game, and your all time record is still under .500.",
    "desc": "You are the impossible one. For more than a century Indiana football was the punchline of a basketball school, a program with far more losses than wins and almost nothing to show for the trying. Then a coach nobody outside Bloomington could name arrived, said out loud that he would simply win, and did exactly that. Sixteen games, sixteen wins, a Big Ten title and the first national championship in the program's life. Your quarterback took the Heisman. Your stadium, which had rarely sold out in its life, started filling four times a year once the winning started. You are the proof that it can happen to anyone, including you.",
    "why": [
      "Your ambition and your process run at the very top of the scale together. You believe the right method, repeated without drama, eventually beats history itself.",
      "Your rootedness sits low, and that is the point. You had no tradition to protect, so you built the thing you wanted out of nothing.",
      "You carry a chip you earned rather than inherited. Being doubted for a very long time did not make you bitter, it made you patient."
    ]
  },
  "ALA": {
    "name": "Alabama",
    "emoji": "🐘",
    "color": "#9E1B32",
    "code3": "ALA",
    "kitType": "solid",
    "tagline": "Eighteen titles deep, and you still count anything short of the next one as failure.",
    "desc": "Winning is not your goal. It is your floor. You come from the most decorated program in the modern history of the sport, a place where two separate dynasties a generation apart each stacked six national titles, and where a good year that ends without a trophy gets quietly filed as a disappointment. You do not apologize for the standard and you do not lower it. Roll Tide is not a cheer to you. It is a promise that the bar stays exactly where it is.",
    "why": [
      "Your ambition sits at the ceiling. You were not built to enjoy the ride, you were built to win the whole thing, and you judge every season by that one line.",
      "Your trust in the system is total. Titles at your place are not luck or a hot streak, they are the output of a machine built to produce them, year after year.",
      "Your loyalty runs deep and quiet. You do not need chaos or drama to prove you care. The standard itself is the love."
    ]
  },
  "UGA": {
    "name": "Georgia",
    "emoji": "🐶",
    "color": "#BA0C2F",
    "code3": "UGA",
    "kitType": "solid",
    "tagline": "You waited forty-one years for one, then won two in a row and never looked back.",
    "desc": "For forty-one years you were the program that could not win the big one, close so often it started to feel like a curse, always a step behind the bluebloods you were supposed to sit with. Then it broke. You won it all, and instead of exhaling you did it again the very next year, the first team of the modern playoff era to repeat. Now the standard is simply this: reload, recruit, and expect to be there at the end. Between the hedges you turned decades of heartbreak into the most feared machine in the sport, and you are not planning to give it back.",
    "why": [
      "Your ambition is maxed out. After waiting decades for a title, you refuse to settle for one, and you now measure every season against the very top.",
      "You pair that hunger with real warmth. This is a family as much as a program, a whole state that pours into the Dawg Walk and roars between the hedges.",
      "You trust the build. Your dominance is not a lucky run, it is recruiting, development, and discipline stacked year over year into something that reloads instead of rebuilding."
    ]
  },
  "OSU": {
    "name": "Ohio State",
    "emoji": "🌰",
    "color": "#BB0000",
    "code3": "OSU",
    "kitType": "solid",
    "tagline": "For a whole state, autumn is your Saturdays, and anything short of a title is a failure.",
    "desc": "You are the beating heart of a football-mad state, where the biggest program for hundreds of miles carries the pride of a whole region every Saturday. Winning is not a hope here, it is the expected return on all that devotion, and a great season that ends without a title still stings. Your standard is nine national championships deep and your rivalry with the team up north defines your calendar. In 2024 you lost that rivalry game at home and won the national championship anyway, which is the most Ohio State thing imaginable: the expectation never moved, and neither did you.",
    "why": [
      "Your ambition runs to the ceiling. A conference title is nice, but only a national championship registers as the season doing its job.",
      "Your rootedness is enormous. You are the pride of an entire state that treats your Saturdays as the center of the fall.",
      "You trust the machine over any single hero. Titles here come from a program built to reload, not from waiting on lightning to strike."
    ]
  },
  "OKL": {
    "name": "Oklahoma",
    "emoji": "🐴",
    "color": "#841617",
    "code3": "OKL",
    "kitType": "solid",
    "tagline": "No program has ever won more games in a row than you did, and the standard never came down.",
    "desc": "You are the pride of a state with no pro team to share the spotlight, which means on Saturdays the whole place is yours. Your history is a mountain: seven national championships, seven Heisman winners, and the longest winning streak the sport has ever seen, forty-seven straight, a record no one has come close to touching. The wagon still circles the field, Boomer Sooner still rings out, and the expectation that comes with all that crimson has never eased. You do not think of yourself as a good program that has some trophies. You think of yourself as royalty, because the record book agrees.",
    "why": [
      "Your ambition is total. With seven titles behind you, nothing less than contending for another feels like enough.",
      "You are your whole state's team. With no pro franchise to split attention, the loyalty and rootedness here run as deep as it gets.",
      "You trust a tradition of winning. Your standard is not aspiration, it is history: the streaks, the titles, the Heismans, all of it expecting a sequel."
    ]
  },
  "MIC": {
    "name": "Michigan",
    "emoji": "〽️",
    "color": "#00274C",
    "code3": "MIC",
    "kitType": "solid",
    "tagline": "No one has won more games in the history of the sport than you, and you wear it without apology.",
    "desc": "You are the winningest program in the history of college football, the first to reach a thousand victories, and you have never once been shy about it. You fill the largest stadium in the country, more than a hundred thousand strong, and send them home humming the most famous fight song in the sport. Your pride is not loud or chaotic, it is old, certain, and a little superior, the pride of the leaders and best. Your calendar bends around one game against the team down south, and after years of losing it you seized it back and rode that run all the way to a national title. You do not chase relevance. You are the standard other programs measure themselves against.",
    "why": [
      "You have won more than anyone, ever. That deep, settled confidence is the foundation of how you see yourself and the sport.",
      "Your rootedness and tradition run to the top. The winged helmet, the fight song, the Big House: this is heritage worn as identity.",
      "You keep your emotion measured. The pride here is stately rather than frenzied, certainty rather than desperation."
    ]
  },
  "TEX": {
    "name": "Texas",
    "emoji": "🤘",
    "color": "#BF5700",
    "code3": "TEX",
    "kitType": "solid",
    "tagline": "Everything is bigger where you are from, and you have never doubted the biggest stage belongs to you.",
    "desc": "You come from a place that considers itself a nation unto itself, and your program wears that same certainty. You are the biggest brand in the sport, the richest athletic department, a burnt-orange empire that expects the spotlight as a birthright. Your crowning moment is one of the greatest games ever played, a national title delivered on the last drive of the Rose Bowl by a quarterback who simply refused to lose. There have been lean stretches when the swagger ran ahead of the results, but the belief never wavered. You are Texas, the Eyes are upon you, and you have always assumed the biggest stage in the sport was built with your name on it.",
    "why": [
      "Your ambition is maxed. You do not think in terms of good seasons, you think in terms of the biggest prize and the biggest stage.",
      "You carry a real streak of swagger and flash. The confidence here can outrun the results, and it never seems to shrink either way.",
      "You are the flagship of a proud, enormous state, and your loyalty and reach are sized to match it."
    ]
  },
  "NDM": {
    "name": "Notre Dame",
    "emoji": "☘️",
    "color": "#0C2340",
    "code3": "NDM",
    "kitType": "solid",
    "tagline": "You answer to no conference and belong to no one city, only to a tradition half the country roots against.",
    "desc": "You belong to no conference and no single city. Your faithful are scattered across the whole country, drawn less by geography than by a tradition that feels almost like a religion: the Golden Dome, the mural of Touchdown Jesus rising over the stadium, a fight song even people who hate you can hum. You claim eleven national championships and more of the sport's greatest players than anyone, and every fall the country splits neatly into those who love you and those who cannot wait to see you lose. The last title was a long time ago now, and the wait gnaws. But the loyalty does not waver, because being Notre Dame was never really about the standings. It is about the echoes, and you are always waiting to wake them again.",
    "why": [
      "Your loyalty is off the charts. This is a faith more than a fandom, a devotion that does not depend on the standings to justify it.",
      "Your following is national, not local. You draw the country's Catholics and romantics rather than one region's neighbors, which makes you unlike any other blueblood.",
      "Your ambition is high and your history immense, and the weight of all that tradition is both the gift and the pressure you carry every season."
    ]
  },
  "USC": {
    "name": "USC",
    "emoji": "⚔️",
    "color": "#990000",
    "code3": "USC",
    "kitType": "solid",
    "tagline": "No school has minted more stars than you, and you have always carried the sport like it belongs in your city.",
    "desc": "You are Hollywood's team, the glamour program of college football, a star factory set down in the middle of Los Angeles. No school has produced more Heisman winners than you, and the run of tailbacks is so long they call you Running Back U. Your Saturdays come with a white horse, a marching band pouring out of Heritage Hall, and a swagger that assumes the spotlight is yours by right. It has been two decades now since the last title, and the wait chafes at a program built for glory. But you do not do humble. You do cardinal and gold, sunshine and star power, and the certainty that greatness is simply what happens here.",
    "why": [
      "Your ambition is sky-high and your sense of self even higher. You expect stars, spotlight, and championships as a matter of course.",
      "You lean on individual brilliance more than grind. Your history is a parade of singular talents, the most decorated collection of stars in the sport.",
      "You carry a glamour and a flash the blue-collar programs do not. This is Hollywood football, and it looks the part."
    ]
  },
  "FLA": {
    "name": "Florida",
    "emoji": "🐊",
    "color": "#0021A5",
    "code3": "FLA",
    "kitType": "solid",
    "tagline": "You play hot, loud, and a little cocky, and for one stretch you owned the whole sport.",
    "desc": "You are heat and noise and attitude, a program that plays with its chin up and its mouth open. A brash coach with a quick offense and a quicker wit turned you into a national power and gave your stadium its name: the Swamp, where only Gators get out alive. Then came a run for the ages, three national titles in thirteen years and a quarterback who felt more like a folk hero than a college kid. It has been quiet since, the way it goes for a program that lives and dies on swagger. But when the Swamp is full and the sun is brutal and the Chomp is rolling, you remember exactly who you are, and so does everyone across the field.",
    "why": [
      "Your ambition and your emotion both run high. You want the whole thing, and you are never shy about saying so.",
      "You carry real flash and edge. Your best teams dazzle and talk, and the swagger is part of the point.",
      "You are a proud, loud program in a hostile home, the kind of place opponents dread walking into."
    ]
  },
  "FSU": {
    "name": "Florida State",
    "emoji": "🔥",
    "color": "#782F40",
    "code3": "FSU",
    "kitType": "solid",
    "tagline": "You did everything right, went undefeated, and got left out anyway, and you have never once let it go.",
    "desc": "You play with a flaming spear, a war chant, and a chip on your shoulder the size of the panhandle. In your golden years you were untouchable, fourteen straight seasons finishing in the nation's top five, a garnet-and-gold machine full of swagger and Prime Time flash. But your defining modern moment is a wound: an undefeated season, a conference title, and then a snub, the first perfect Power conference champion ever left out of the playoff. You did not forget. You do not intend to. Every fall Osceola plants that burning spear at midfield and the message is the same one your motto has always carried. Unconquered. Come and try.",
    "why": [
      "Your emotion runs hot and your edge runs deep. You play with a grievance, and it fuels you.",
      "You carry flash and swagger in your bones, the spear and the chant and the garnet-and-gold attitude that announced you decades ago.",
      "Your ambition is real and your pride enormous. Your best was a dynasty, and you measure yourself against that ceiling."
    ]
  },
  "PSU": {
    "name": "Penn State",
    "emoji": "🦁",
    "color": "#041E42",
    "code3": "PSU",
    "kitType": "solid",
    "tagline": "You put no names on the jerseys and let the team speak, and a hundred thousand answer back as one.",
    "desc": "You are the plainest uniform in the sport and the loudest fan base behind it, a contradiction that makes perfect sense in Happy Valley. No names on the backs, because the team comes before any one of you. You won two national titles in the 1980s under the coach whose name is stitched into everything here, and you have chased a third with the patience of a program that measures itself in seasons, not headlines. When the whole stadium goes white and roars We Are, it is not flash, it is faith, blue-collar and unshakable. You do not need the newest thing. You need the standard held, the work put in, and the whole valley behind you.",
    "why": [
      "Your trust in the process is total. You believe in discipline, development, and doing it the honest way, no shortcuts.",
      "Your loyalty and community are enormous. A fan base hundreds of thousands strong treats this program as a shared identity.",
      "You keep the flash turned all the way down. No names, no gimmicks, just the team and the work and a title still worth chasing."
    ]
  },
  "CLM": {
    "name": "Clemson",
    "emoji": "🐾",
    "color": "#F56600",
    "code3": "CLM",
    "kitType": "solid",
    "tagline": "You were never supposed to sit at this table, so you built a machine, beat the king twice, and pulled up a chair.",
    "desc": "You were not born a blueblood. You were a small town in the upstate of South Carolina with a rock, a hill, and a coach who talks about faith and family more than schemes. And out of that you built a dynasty, the one program that could look Alabama in the eye and win, twice, in the biggest game there is. Your whole identity is culture: total buy-in, a locker room that calls itself a family, everybody all in. Death Valley roars, the Tigers pour down the hill and touch Howard's Rock, and a program the giants once overlooked plays like it has always belonged. Because now it does, and it earned every inch.",
    "why": [
      "Your sense of community is the whole thing. This is a family and a culture first, and the buy-in is total.",
      "You trust the build completely. Your rise was not luck, it was recruiting, development, and belief stacked into a machine.",
      "Your ambition matches anyone's. You proved an outsider could beat the very best, and you have no interest in going back to being overlooked."
    ]
  },
  "ORE": {
    "name": "Oregon",
    "emoji": "🦆",
    "color": "#154733",
    "code3": "ORE",
    "kitType": "solid",
    "tagline": "No one in the sport looks like you or plays as fast, and you are still chasing the one thing you have never held.",
    "desc": "You are the flash of college football, the program that turns up every week in a uniform no one has ever seen, backed by the swoosh and the billions of the alum who built Nike in this town. Speed, style, innovation, the newest of everything: that is the brand, and it is genuinely yours, not borrowed from anyone. You have crashed the national stage, played for it all, and dazzled the whole country doing it. What you have not done, not once, is win it. That missing trophy is the only thing your gleaming facilities and highlight offenses cannot manufacture. So you keep pushing the tempo and the look and the ceiling, chasing the one prize that would finally make the flash mean everything.",
    "why": [
      "Your ambition is enormous and your appetite for the new even bigger. You want to look, move, and win like no one else.",
      "You carry a real streak of chaos and flash. The uniforms, the speed, the constant reinvention: unpredictability is the brand.",
      "You are a modern national brand more than a deeply rooted local one, pulled together by style and Nike as much as by place."
    ]
  },
  "LSU": {
    "name": "LSU",
    "emoji": "🐯",
    "color": "#461D7C",
    "code3": "LSU",
    "kitType": "solid",
    "tagline": "You turn a Saturday night into an earthquake, and the whole country can hear it.",
    "desc": "You are the loudest night in college football, a purple-and-gold roar rising out of the Louisiana dark. Death Valley after sundown is less a stadium than a weather event: a crowd so violent a last-second touchdown once shook a seismograph, an atmosphere Bear Bryant compared to standing inside a drum. Your fandom is Cajun and unfiltered, part festival and part endurance test for anyone unlucky enough to visit. You have won it all four times, most recently with a team so good it is spoken of as one of the greatest ever. Mike the Tiger prowls his enclosure, the band strikes up, and for one night the swamp belongs to you and everyone knows it.",
    "why": [
      "Your emotion is off the charts, the highest there is. You do not do football quietly, you do it at full volume and full heart.",
      "You carry real chaos and passion. Your best nights feel less like games than eruptions, wild and loud and a little dangerous.",
      "Your roots run deep into Louisiana. This is the state's team, its Saturday religion, and the loyalty is bone-deep."
    ]
  },
  "TEN": {
    "name": "Tennessee",
    "emoji": "🍊",
    "color": "#FF8200",
    "code3": "TEN",
    "kitType": "solid",
    "tagline": "You sing the same song a hundred thousand strong until the whole SEC has learned to hate it.",
    "desc": "You are a sea of orange and a song that will not quit. Neyland Stadium has hosted more football wins than any building in the sport, and on a fall Saturday it fills with a crowd that sails in by boat, docks the Vol Navy along the river, and files into the checkerboard end zones to sing 'Rocky Top' at a volume opponents describe as a form of torture. Your last national title was a while ago now, and the wait gnaws, because you remember exactly how good it felt and you have never stopped wanting it back. But the devotion never wavers. Through every lean year the Big Orange shows up, loud and hopeful, running through the T and believing this is the year the glory returns.",
    "why": [
      "Your loyalty and emotion run deep. The Big Orange faithful show up in a sea of color no matter what the record says.",
      "You are steeped in tradition, from the checkerboards to the Vol Navy to a song the whole conference dreads. Heritage is the heartbeat here.",
      "You carry a real yearning. You have tasted the top and you ache to get back, and that hunger colors every season."
    ]
  },
  "AUB": {
    "name": "Auburn",
    "emoji": "🦅",
    "color": "#0C2340",
    "code3": "AUB",
    "kitType": "solid",
    "tagline": "You live in the giant's shadow next door, so you learned to win the games nobody could believe.",
    "desc": "You share a state with a dynasty, and that has made you tougher, hungrier, and a little bit haunted. Everything at Auburn is measured against the giant up the road, which is why your greatest moments are the improbable ones: a missed field goal returned the length of the field as time expired, a prayer answered in the end zone, a perfect season and a national title snatched out of the Tide's shadow. Before kickoff an eagle circles Jordan-Hare and the whole stadium roars War Eagle. After a win you flood downtown and bury Toomer's Corner in toilet paper like a snowstorm. You are the underdog with the miracle streak, and you would not trade that identity for anyone's.",
    "why": [
      "You carry a real chip and a real fire. Living next to a giant taught you to play with an edge that never fully cools.",
      "Your emotion and chaos run high. Your defining games are the wild, impossible ones, and you feed on that lightning.",
      "Your loyalty is fierce and communal. War Eagle is a greeting, a battle cry, and a bond, all at once."
    ]
  },
  "OLE": {
    "name": "Ole Miss",
    "emoji": "🦈",
    "color": "#14213D",
    "code3": "OLE",
    "kitType": "solid",
    "tagline": "You throw the best party in the sport under the oaks, and you would not trade the Grove for a trophy.",
    "desc": "You are Southern charm and controlled chaos, a program where the tailgate is as famous as the team. On a fall Friday the Grove fills with tents, chandeliers, and silver platters, ten acres of oaks that outsiders call the finest tailgate in all of college sports, and then everyone spills toward Vaught-Hemingway shouting Hotty Toddy. Your golden age was decades ago, your national titles claimed and disputed, but lately Oxford has come roaring back, all the way to your first playoff. The Mannings still run through this place; the campus speed limit honors Archie's jersey number. You love hard and you live well, and win or lose, nobody has more fun being who they are.",
    "why": [
      "Your emotion and your flair run high. Game day here is an event, gorgeous and a little wild, and you pour yourself into it.",
      "You carry a real streak of chaos and charm at once. This is Southern gentility with a party underneath it.",
      "Your community is the whole point. The Grove, the Walk of Champions, the chant: this is a shared experience as much as a football team."
    ]
  },
  "SCA": {
    "name": "South Carolina",
    "emoji": "🐓",
    "color": "#73000A",
    "code3": "SCA",
    "kitType": "solid",
    "tagline": "You have never won the big one, and you still fill the place to the rafters every single Saturday.",
    "desc": "You are loyalty in its purest, most stubborn form. No national title. No conference crown. A history of near-misses and heartbreak that has earned you the nickname of college football's Cubs, curse and all. And still, every Saturday, eighty thousand of you pack Williams-Brice, more people than all but a handful of cities in the whole state. You take the field to the theme from a space odyssey and 'Sandstorm' shakes the press box, and for a few hours belief runs wild. You do not show up because you expect to win it all. You show up because this is yours, garnet and black, through every lean year, and one of these days the breakthrough is going to feel that much sweeter for the wait.",
    "why": [
      "Your loyalty is the whole story, and it runs as deep as anyone's. You pour everything into a program that has given you almost no trophies in return, and you never waver.",
      "Your emotion and energy run high. The entrance, the towels, the roar: game day here is electric no matter the standings.",
      "You are driven by devotion more than expectation. You are not here for the certainty of winning; you are here because this is home."
    ]
  },
  "IOW": {
    "name": "Iowa",
    "emoji": "🦅",
    "color": "#000000",
    "code3": "IOW",
    "kitType": "solid",
    "tagline": "You wave to a hospital full of kids after the first quarter, then win the boring, beautiful way.",
    "desc": "You are process incarnate, the most disciplined and least flashy fanbase in the sport, and proud of every bit of it. You win with defense, special teams, and a punt game other people mock right up until it beats them. Your stadium is named for the only Heisman winner it ever produced, a man who died in the war, and after the first quarter of every home game the entire place, players and visitors included, turns to wave at the children watching from the hospital next door. That is who you are: hard-nosed and decent in the same breath. You do not chase highlights. You chase fundamentals, and you trust that doing the little things right, over and over, is its own kind of glory.",
    "why": [
      "Your process orientation is maxed out, the highest there is. You believe in fundamentals, discipline, and doing the small things right.",
      "You value decency as loudly as toughness. The Wave to the children's hospital is the truest expression of who you are.",
      "You are loyal and rooted without needing the spotlight. You take quiet pride in the grind, not the flash."
    ]
  },
  "KSU": {
    "name": "Kansas State",
    "emoji": "🐾",
    "color": "#512888",
    "code3": "KSU",
    "kitType": "solid",
    "tagline": "You cheered for the worst program in America until a coach turned it into the greatest turnaround ever.",
    "desc": "You are the underdog's underdog, a purple faithful that stuck around through the darkest years in the sport's history and got rewarded for it. Before Bill Snyder, Kansas State was the worst program in the country, a punchline in a rural town that had almost nothing to cheer. He built a winner out of walk-ons, junior-college transfers, and a wall of discipline, and turned Manhattan into a place giants dreaded visiting. Your program's slogan is Family, stitched right onto the helmet, and it means it. You do not have the talent, the titles, or the name. What you have is toughness, structure, and the deep loyalty of people who never left. You are proof that the right culture can build something out of nothing.",
    "why": [
      "You are the ultimate overachiever, winning through process, structure, and culture rather than raw talent.",
      "Your loyalty runs bone-deep. You are the faithful who stayed through futility, which makes the turnaround yours as much as anyone's.",
      "You believe in family and the honest build. Walk-ons, discipline, and togetherness are the whole identity, not a marketing line."
    ]
  },
  "WIS": {
    "name": "Wisconsin",
    "emoji": "🦡",
    "color": "#C5050C",
    "code3": "WIS",
    "kitType": "solid",
    "tagline": "You run the ball, jump around, and bury teams under three hundred pounds of Midwestern offensive line.",
    "desc": "You are a bruiser, the blue-collar heart of the Big Ten, and you win the same honest way every single time: you run the ball down people's throats. Wisconsin is an offensive-line and running-back factory, a place that turns big, tough Midwestern kids into a ground game nobody can stop, and it has produced two Heisman-winning backs to prove it. Camp Randall is one of the oldest stadiums in the sport, and between the third and fourth quarters the whole place bounces to Jump Around, seventy-five thousand people losing their minds in unison. You do not need trick plays or hype. You need a lead blocker and a cold November afternoon. That is your kind of football: physical, disciplined, and proud of the grind.",
    "why": [
      "You are physical and process-driven to the core. Your identity is running the ball and winning in the trenches.",
      "You take pride in the blue-collar build. Great linemen and great backs, developed and hardened, are the whole point.",
      "You love the shared ritual. Jump Around and the Fifth Quarter turn a football game into a full-throated community party."
    ]
  },
  "NEB": {
    "name": "Nebraska",
    "emoji": "🌽",
    "color": "#E41C38",
    "code3": "NEB",
    "kitType": "solid",
    "tagline": "You have sold out every game since 1962 and cheered the other team off the field, win or lose.",
    "desc": "You are the most loyal fanbase in America and one of the most decent. Memorial Stadium has sold out every single game since 1962, the longest such streak in the history of American sports, and on game day it becomes the third-largest city in the state. You built five national titles on in-state walk-ons and a defense so proud it earned its own name, the Blackshirts. And when the game ends, win or lose, the Sea of Red applauds the visiting team as it walks off, because that is who you are. The glory years are a while back now, and the wait has been long and hard. But the faith never breaks. Nobody leaves. Nobody ever has.",
    "why": [
      "Your loyalty, community, and roots are all maxed out. This is an entire state's team, and the devotion is total and unconditional.",
      "You value decency as much as winning. Applauding the opponent off the field is a point of pride, not a gimmick.",
      "You believe in the honest build. Walk-ons, a hard-nosed defense, methodical dominance: that is how the glory was won and how you want it back."
    ]
  },
  "TAM": {
    "name": "Texas A&M",
    "emoji": "👍",
    "color": "#500000",
    "code3": "TAM",
    "kitType": "solid",
    "tagline": "Every soul in the building stands the whole game, ready to play, because that is what the 12th Man means.",
    "desc": "You are the tightest-knit fanbase in the sport, a maroon congregation that treats loyalty like a sacred duty. Your whole identity is the 12th Man: the entire student body stands from kickoff to final whistle, ready to step onto the field if called, honoring a walk-on who did exactly that a century ago. Kyle Field is the biggest stadium in the SEC, and the night before every game tens of thousands pack it for Midnight Yell, a ritual no other school can explain to outsiders. The Corps of Cadets, the War Hymn, the Aggie Ring: this is tradition as identity, unity as a way of life. You do not just cheer for the team. You consider yourself part of it.",
    "why": [
      "Your loyalty and sense of community are as high as they come, maxed out. This is a family bound by tradition and a shared code.",
      "You believe deeply in the collective over the individual. The 12th Man means the whole stands together, ready, as one.",
      "You honor ritual and discipline. From the Corps to Midnight Yell, your traditions are the point, not a sideshow."
    ]
  },
  "MAR": {
    "name": "Marshall",
    "emoji": "🦬",
    "color": "#00B140",
    "code3": "MAR",
    "kitType": "solid",
    "tagline": "From the ashes of the worst night imaginable, you rebuilt a program and a promise: We Are Marshall.",
    "desc": "You are heart and resilience, the most emotionally rooted community in the sport. In 1970 a plane crash took nearly your entire team, its coaches, and dozens of local supporters in a single night, the worst tragedy any American sports program has ever known. Marshall could have folded. Instead a young team of survivors and newcomers rebuilt from nothing, and the town of Huntington rebuilt with it, and out of that grief came a phrase that means everything here: We Are Marshall. A fountain on campus honors the lost, its water shut off each November and turned back on every spring. Decades later the Herd rose again, sending stars like Randy Moss to the world. You do not measure yourself in trophies. You measure yourself in the bond that refused to break.",
    "why": [
      "Your emotion, loyalty, community, and roots are all maxed out. Few programs anywhere feel their team this deeply.",
      "Your identity is resilience. You are defined not by what was lost, but by the choice to rebuild and endure together.",
      "You belong to a place. Marshall and Huntington are one, bound by memory, pride, and a phrase that says it all."
    ]
  },
  "HAW": {
    "name": "Hawai'i",
    "emoji": "🌈",
    "color": "#024731",
    "code3": "HAW",
    "kitType": "solid",
    "tagline": "You are the only team for two thousand miles, so the whole island becomes your ohana on Saturday.",
    "desc": "You are the most isolated program in the sport and one of the most beloved, the only major team for thousands of miles of open ocean. That distance makes everything harder: brutal travel, late-night mainland kickoffs, a schedule nobody else would want. It also makes the bond unbreakable. Hawaii football is ohana, family, the whole island's team, and game day carries the culture with it, a warrior chant before kickoff, ti leaves waving in the stands, rainbows over the stadium. You made your name throwing the ball all over the yard in the run-and-shoot, and in 2007 you rode it to an undefeated regular season and a Sugar Bowl. You do not have the resources or the geography. What you have is aloha, and a fanbase that treats every Saturday like a homecoming.",
    "why": [
      "Your community and roots are maxed out. You are the whole island's team, and that belonging runs as deep as it gets.",
      "You embrace a wide-open, high-energy style. The run-and-shoot and the island atmosphere give you a genuine streak of chaos.",
      "You carry your culture onto the field. The warrior chant, the ti leaves, and the spirit of ohana are the identity itself."
    ]
  },
  "ARM": {
    "name": "Army",
    "emoji": "⚔️",
    "color": "#1C1C1C",
    "code3": "ARM",
    "kitType": "solid",
    "tagline": "You stand with the whole Corps for four quarters, because the Long Gray Line never sits down.",
    "desc": "You are duty, honor, and country made into a football team. At West Point the entire Corps of Cadets stands for all four quarters, drops for push-ups after every score, and marches onto the field in formation before kickoff, because for you the game is one more expression of service, not a spectacle. You win with the triple option, an offense built on precision, unselfishness, and everyone doing their job without the ball. Your glory years came in the 1940s, when Mr. Inside and Mr. Outside ran the country's best team, and that pride has never faded. Above all there is Beat Navy, the game that means more than any ranking. You are the Long Gray Line: tradition carried forward by people about to serve something far bigger than a scoreboard.",
    "why": [
      "Your loyalty and sense of community are absolute, both maxed out. This is the collective over the individual, taken as a sacred code.",
      "You honor tradition and duty above all. The Corps, the Long Gray Line, and the option are about service, not stats.",
      "You value precision and unselfishness. The triple option is a team ethos disguised as an offense: everyone does their part."
    ]
  },
  "NAV": {
    "name": "Navy",
    "emoji": "⚓",
    "color": "#00205B",
    "code3": "NAV",
    "kitType": "solid",
    "tagline": "In the rivalry that defines you, you have won more than they have, and you have never let them forget it.",
    "desc": "You belong to something bigger and older than a football team: a service, a fleet, a brigade that marches into the stadium in formation. The wins matter, and you have plenty of them, more in the rivalry that means everything than the other side has ever managed, a fact you carry with quiet certainty. But the thing you were really built on is not any one Saturday. It is the discipline underneath it, the sense that you are one part of a machine that works because every part does its job. You do not chase chaos or flash. You out-execute, you out-last, and when it is over you stand at attention for the other academy's song before you sing your own. Beat Army is not trash talk to you. It is a settled matter you renew every December.",
    "why": [
      "Your sense of the collective is total. You do not think of yourself as an individual with a team, you think of yourself as one part of a brigade, and that is the whole identity.",
      "You trust the system and the discipline over any single moment of flash. You win by executing your assignment better than the other side executes theirs.",
      "When it counts most, you have the receipts. In the rivalry that defines you, the record is on your side, and you carry it as quiet, proven fact rather than noise."
    ]
  },
  "AIR": {
    "name": "Air Force",
    "emoji": "✈️",
    "color": "#003087",
    "code3": "AIR",
    "kitType": "solid",
    "tagline": "You run the option like a drill and deliver the game ball by parachute from the sky.",
    "desc": "You are precision made visible, a program where discipline is not a value but the entire point. Air Force runs the triple option with a machinist's exactness, willing smaller, faster teams past bigger ones through timing, technique, and sheer execution. Game day in the Rockies is a spectacle of the sky: the cadets march on in formation, the Wings of Blue parachute team drops the game ball onto the field, fighter jets scream over the mountains, and live falcons soar at halftime. You have won more Commander-in-Chief's Trophies than Army or Navy, and you measure yourself against your own standard, not anyone else's. This is football as a mission: clean, exact, and executed by people who will spend their lives doing exactly that.",
    "why": [
      "Your process orientation is maxed out. You win through precision, technique, and flawless execution, not brute force.",
      "You measure yourself against your own standard. Your pride is in doing the mission right, not in chasing anyone else.",
      "You value discipline and service. The option, the flyovers, and the parachutes are all one thing: exactness with a purpose."
    ]
  },
  "BYU": {
    "name": "BYU",
    "emoji": "⛰️",
    "color": "#002E5D",
    "code3": "BYU",
    "kitType": "solid",
    "tagline": "You will not play on Sunday, you send your team on missions, and you still won it all.",
    "desc": "You are a program built on faith and structure, a community bound by shared values as much as a shared team. BYU will not play on Sunday, holds its players to an honor code, and sends many of them on two-year missions, so your roster is older, more grounded, and more disciplined than anyone else's. None of that stopped you from winning the whole thing in 1984, the last team from outside the sport's power conferences ever to do it. You are Quarterback U, the place a passing revolution was born, home to a lineage of great arms and a Heisman winner. Your fans are loyal, principled, and everywhere, a nation unto themselves. You prove you can hold to your standards, do it your own way, and still stand at the top.",
    "why": [
      "Your loyalty and community are maxed out. This is a values-based fanbase that functions like an extended family and a faith at once.",
      "You carry real ambition. A national title, a Heisman, and a move to the Big 12 say you expect to compete, not just belong.",
      "You do it your own way. The honor code, the missions, and the no-Sunday rule are non-negotiable, and you win anyway."
    ]
  },
  "WVU": {
    "name": "West Virginia",
    "emoji": "⛏️",
    "color": "#002855",
    "code3": "WVU",
    "kitType": "solid",
    "tagline": "No one has won more without ever winning it all, and still you would not be anywhere else.",
    "desc": "You are the entire state's team, because there is no other. No pro franchise, no rival Power program, nothing but you and the mountains and a stadium in Morgantown that sings John Denver back to itself after a win. You have been undefeated, ranked number one, one game from playing for it all, and you have watched that chance slip away in the cruelest way a rival could hand it to you. You have never won the whole thing. You have won more games than anyone else who never did. And every fall you pour it all back in, gold and blue and unreasonable hope, because loving this team was never a choice you got to make. It is where you are from.",
    "why": [
      "Your loyalty and your roots both sit at the very top of the scale. This is not a team you picked, it is the place you are from, the only one the whole state has.",
      "Your emotion runs as high as it goes. You have been a game away from playing for everything and had it taken away, and you came back the next fall louder than before.",
      "You carry a real streak of chaos. The joy here is a little wild and a little unreasonable, and it does not wait for permission or for the results to justify it."
    ]
  },
  "ARK": {
    "name": "Arkansas",
    "emoji": "🐗",
    "color": "#9D2235",
    "code3": "ARK",
    "kitType": "solid",
    "tagline": "You are the only game the whole state has, so a hundred thousand voices call the Hogs as one.",
    "desc": "You belong to an entire state, top to bottom, the only major team Arkansas has ever had. No pro franchise, no rival program, just the Razorbacks and a whole population that lives and dies with them. That is why the hog call carries the way it does: 'Wooo, Pig, Sooie' rolling through the stadium in a wave, a hundred thousand people who feel like family calling the Hogs together. Your lone national title is from 1964 and you have chased another ever since, through good years and lean ones, never once wavering. You are loud, emotional, and rooted all the way down. This is not just your team. In Arkansas, it is the team, and it always will be.",
    "why": [
      "Your roots go as deep as any program's, all the way to the bottom. You are the whole state's team, and that bond is unbreakable.",
      "Your loyalty and emotion run high. You pour everything into the Hogs, in the best years and the worst ones alike.",
      "You are driven by devotion more than title hunger. You show up for the call, the community, and the pride of being Arkansas."
    ]
  },
  "ECU": {
    "name": "East Carolina",
    "emoji": "🏴‍☠️",
    "color": "#592A8A",
    "code3": "ECU",
    "kitType": "solid",
    "tagline": "You raise the No Quarter flag in the fourth quarter and give visiting giants no mercy.",
    "desc": "You are rowdy to the bone, a purple-and-gold pirate crew that treats every home game like a boarding party. Dowdy-Ficklen is called Rowdy at Dowdy for a reason: the team enters through purple smoke, a cannon booms after every score, and when the fourth quarter starts the black pirate flag comes down and the red No Quarter flag goes up, the whole stadium crossing their arms and vowing no mercy. You are a scrappy underdog with a giant-killer streak, the kind of team that knocks off a ranked Virginia Tech and West Virginia in the same season just to prove it can. You do not have the budget, the recruits, or the history of the big boys. You have Greenville, a skull-and-crossbones, and a fanbase that shows up loud and stays loud. That is more than enough.",
    "why": [
      "Your emotion and chaos run high. You are unpredictable, rowdy, and dangerous, exactly the kind of team nobody wants to visit.",
      "Your loyalty and roots are deep. Pirate Nation is Greenville's team, and the devotion never wavers with the standings.",
      "You live for the upset. Being the underdog with a giant-killer streak is the whole identity, and you wear it proudly."
    ]
  },
  "WAZ": {
    "name": "Washington State",
    "emoji": "🌾",
    "color": "#981E32",
    "code3": "WAZ",
    "kitType": "solid",
    "tagline": "Your flag has flown on every College GameDay for twenty years, from the loneliest campus in the country.",
    "desc": "You are the most loyal lost cause in college football, a crimson-and-gray faithful stranded on the beautiful, remote Palouse and proud of every isolated inch of it. Your defining symbol is Ol' Crimson, a WSU flag that has appeared on the set of ESPN's College GameDay every single week since 2003, shipped around the country by Cougs who refuse to let the world forget they exist. You gave the sport the wide-open Air Raid and a folk hero or two, and you gave yourselves a rueful verb, to Coug it, for all the heartbreak. When the conference collapsed and everyone else fled, you were one of the last two standing, abandoned but unbowed. You do not win a lot. You never, ever leave. Go Cougs.",
    "why": [
      "Your loyalty and roots run deep. From the most isolated campus in major football, the Cougs never stop showing up.",
      "You have a genuine streak of chaos and heart. The Air Raid and the wide-open style match a fanbase that feels everything.",
      "You wear the underdog's self-aware humor like a badge. Coug'd it is a punchline you own, because the loyalty outlasts the heartbreak."
    ]
  },
  "APP": {
    "name": "Appalachian State",
    "emoji": "🏔️",
    "color": "#000000",
    "code3": "APP",
    "kitType": "solid",
    "tagline": "You are the little mountain school that walked into the Big House and beat number five Michigan.",
    "desc": "You are the giant-killer, a small mountain school from Boone with the biggest upset in the sport's history to your name. On September 1, 2007, a two-time defending FCS champion walked into Michigan Stadium in front of 109,000 people and beat the fifth-ranked Wolverines, the first time a team from the lower division ever knocked off a ranked one, still called the greatest upset college football has ever seen. You won three straight FCS national titles, moved up to the big leagues, and just kept slaying, stunning a top-ten Texas A&M as a three-touchdown underdog. Your home is Kidd Brewer Stadium, The Rock, perched a mile up in the Appalachians and nearly impossible to win in. You are proof that nobody is too big to fall, and that the mountain always has one more upset in it.",
    "why": [
      "You live for the upset. Being the giant-killer, the team nobody sees coming, is your entire identity and your proudest tradition.",
      "Your community and roots run deep in the mountains. Boone is a tight, loyal, high-elevation fortress that travels well and shows up loud.",
      "You carry a champion's edge under the underdog label. Three FCS titles say the giant-killing is skill, not luck."
    ]
  },
  "VAT": {
    "name": "Virginia Tech",
    "emoji": "🦃",
    "color": "#630031",
    "code3": "VAT",
    "kitType": "solid",
    "tagline": "When Enter Sandman drops and the whole stadium jumps, Lane registers as an earthquake.",
    "desc": "You are the most electric entrance in college football and one of its most passionate, blue-collar fanbases. When the lights dim and Metallica's Enter Sandman hits, Lane Stadium erupts and the whole crowd starts jumping in unison, so hard the ground movement registers on the university's seismographs as a small earthquake. That energy is the soul of Hokie Nation: loud, loyal, and a little bit menacing, tucked away in the mountains of southwest Virginia where fans drive hours to get there. Your golden era was built on Beamer Ball, winning with defense and special teams and a battered lunch pail, and lit up by Michael Vick's magic on an undefeated run to the title game. You will gobble like a turkey and jump until the stands shake. That is Virginia Tech.",
    "why": [
      "Your emotion and loyalty run high. Hokie Nation feels every snap, and the Enter Sandman entrance is that passion made physical.",
      "You value toughness and identity over flash. Beamer Ball, the Lunch Pail defense, and special teams are the blue-collar heart of it.",
      "You are rooted and devoted. Fans drive hours through the mountains to Blacksburg and turn Lane Stadium into one of the sport's scariest places."
    ]
  },
  "MST": {
    "name": "Mississippi State",
    "emoji": "🔔",
    "color": "#660000",
    "code3": "MST",
    "kitType": "solid",
    "tagline": "You hand out cowbells instead of pom-poms and grind out wins one clang at a time.",
    "desc": "You are blue-collar to the bone, a maroon underdog that scraps for everything it gets. Your fans do not wave pom-poms; they ring cowbells, thousands of them, a clanging wall of noise so distinctive the conference spent 36 years trying to ban it before finally giving up. You play in the second-oldest stadium in the sport, out in Starkville, where the grind is the identity: defense, toughness, and Hail State pride, no shortcuts and no apologies. You have never won it all, and you know the giants of the SEC by heart, but you show up every fall ready to make somebody's day miserable. When the cowbells are going and the Bulldogs are digging in, you are exactly the kind of hard-nosed, deafening problem nobody wants to visit.",
    "why": [
      "You are blue-collar and proud of it. Your identity is grit, defense, and grinding out a hard-earned win, not flash.",
      "Your loyalty, community, and roots run deep. This is a tight, rooted Bulldog faithful that never stops ringing.",
      "You do not measure yourself by titles. You measure yourself by toughness, noise, and the willingness to scrap with anyone."
    ]
  },
  "COL": {
    "name": "Colorado",
    "emoji": "🐃",
    "color": "#000000",
    "code3": "COL",
    "kitType": "solid",
    "tagline": "You watched Ralphie thunder onto the field through the lean years and never stopped believing.",
    "desc": "You are loyalty tested by two long decades and never broken. Colorado won it all in 1990, a national title capped by Kordell Stewart's Miracle at Michigan and a live buffalo named Ralphie thundering onto the field before every half, one of the great traditions in sports. Then came the lean years, a slow slide into irrelevance that stretched on and on. Most fanbases would have drifted away. You did not. You kept filling mile-high Folsom Field, kept running Ralphie, kept believing, and lately the faith has been rewarded with a genuine resurgence and a 2024 Heisman winner. Yours is not front-running love. It is the deep, stubborn, black-and-gold kind that waits through the worst and shows up anyway. That is the Buffs.",
    "why": [
      "Your loyalty is the real story. You held on through twenty thankless years without ever walking away, and that devotion defines you.",
      "Your emotion runs deep. This is a passionate, all-in fanbase that feels the highs and the long lows just as intensely.",
      "You carry a proud history and a stubborn hope. A 1990 title, Ralphie, and mile-high Folsom are worth believing in, no matter the record."
    ]
  },
  "BOI": {
    "name": "Boise State",
    "emoji": "🐴",
    "color": "#0033A0",
    "code3": "BOI",
    "kitType": "solid",
    "tagline": "You play on a field the color of the sky and once beat Oklahoma with a Statue of Liberty.",
    "desc": "You are the mid-major that refused to stay in its place, the little program that crashed the party and never left. Your home field is The Blue, the famous blue turf installed in 1986, the first non-green field in the sport and still the most recognizable, so distinctive you hold a trademark on it. Your legend was born on January 1, 2007, when you beat mighty Oklahoma in the Fiesta Bowl on a string of trick plays capped by a Statue of Liberty two-point conversion, still one of the greatest games ever played. That was not a fluke. You turned it into decades of winning, the winningest quarterback in the sport, and a 2024 College Football Playoff berth behind a Heisman-runner-up back. You do not accept that big programs get to win. You just keep beating them.",
    "why": [
      "You carry real ambition and belief. You never accepted mid-major limits, and you have the wins and the playoff berth to prove it.",
      "You are disciplined and well-built. The trick-play magic runs on top of a tough, smart, consistently excellent program.",
      "You own the sport's most distinctive home. The Blue is your identity, your edge, and your statement that you belong."
    ]
  },
  "MIA": {
    "name": "Miami",
    "emoji": "🌀",
    "color": "#F47321",
    "code3": "MIA",
    "kitType": "solid",
    "tagline": "This is The U: five titles, a turnover chain, and more swagger than the rest of the sport combined.",
    "desc": "You are swagger made into a football team, the brashest, flashiest program the sport has ever produced. In the 1980s and 90s, The U won five national titles and did it with a strut, a chip, and an us-against-everybody attitude that rewrote what a college team could look like. You are a factory for NFL stars, with more Pro Football Hall of Famers than almost anyone, and a modern signature to match: the turnover chain, a giant gold rope draped on any defender who takes the ball away. You do not do humble, and you never have. You do flash, confidence, big plays, and big personalities, all of it soaked in South Florida heat. Love it or hate it, everyone knows exactly who you are. This is The U.",
    "why": [
      "Your emotion, ambition, and chaos are all maxed out. You are the definition of swagger, big plays, and big-stage confidence.",
      "You carry a championship pedigree with attitude. Five titles and a strut to match are the whole point.",
      "You are a star machine. The turnover chain, the NFL pipeline, and the bravado are all one thing: The U demands the spotlight."
    ]
  },
  "UCF": {
    "name": "UCF",
    "emoji": "🚀",
    "color": "#000000",
    "code3": "UCF",
    "kitType": "solid",
    "tagline": "Everyone said you could not be champions, so you crowned yourselves and threw a parade at Disney World.",
    "desc": "You are the boldest upstart in college football, a program that refuses to accept its assigned place in the pecking order. In 2017 you went 13-0, beat a ranked Auburn team that had beaten both national title contenders, got snubbed by the playoff anyway, and did the most audacious thing imaginable: you declared yourselves national champions, hung a banner, handed out rings, and paraded through Walt Disney World. Two years earlier you had gone winless. That is the UCF way, doing what everyone says can't be done. Your stadium literally bounces when the crowd jumps, your fifty-yard line points at a NASA launch pad, and your whole identity is a chip on the shoulder the size of Orlando. You are new, you are brash, and you are not waiting for permission. Charge On.",
    "why": [
      "Your ambition and audacity define you. You refuse to accept limits, and crowning yourselves champions is the purest proof.",
      "You carry a chip on your shoulder with joy. The doubters fuel you, and proving them wrong is the whole mission.",
      "You are the meteoric riser. From winless to undefeated to the Big 12, you move fast and dare anyone to keep up."
    ]
  },
  "SMU": {
    "name": "SMU",
    "emoji": "🐎",
    "color": "#C8102E",
    "code3": "SMU",
    "kitType": "solid",
    "tagline": "You are the only program the NCAA ever shut down, and you clawed all the way back to the playoff.",
    "desc": "You are the ultimate resurrection story, a program that was buried and rose anyway. In the early 1980s the Pony Express of Eric Dickerson and Craig James made SMU the hottest team in the country, winning at a rate nobody could match. Then, in 1987, the NCAA dropped the death penalty, the harshest punishment in college sports history and the only one ever handed down: your football program was shut down entirely. Two decades of wandering the wilderness followed. But Dallas money and Dallas ambition never quit, and you clawed all the way back, into the ACC and into the 2024 College Football Playoff, a seat at the sport's biggest table for the first time in a generation. You know exactly what it means to lose everything and build it again. Pony Up.",
    "why": [
      "Your ambition never died, even when the program did. Clawing back from the death penalty to the playoff is your defining trait.",
      "You carry resilience and Dallas swagger together. The fall was total, and the climb back was all guts and hustle.",
      "You have a taste for the big stage. The Pony Express and the ACC leap say you always aimed to run with the best."
    ]
  },
  "STA": {
    "name": "Stanford",
    "emoji": "🌲",
    "color": "#8C1515",
    "code3": "STA",
    "kitType": "solid",
    "tagline": "You pair the world's best classrooms with a punishing running game, and a dancing Tree for a mascot.",
    "desc": "You are brains and brawn in the same uniform, one of the finest universities on earth that also happens to hit like a freight train. Stanford wins with what its coaches once called intellectual brutality: smart, disciplined, physical football, a bruising run game and an offensive line that overpowers people who were supposed to be more athletic. Your quarterback pipeline is absurd, Plunkett and Elway and Luck, and Christian McCaffrey rewrote the record book out of your backfield. Yet you never take yourself too seriously: your mascot is an unofficial, googly-eyed Tree, and your marching band is a gloriously chaotic, satirical mess that half the sport loves to hate. You do not lead with passion or noise. You lead with precision, intelligence, and just enough irreverence to keep everyone guessing.",
    "why": [
      "Your process orientation is your strength. You win with intelligence, discipline, and physical, well-drilled football.",
      "You value substance over spectacle. The academics are elite, the run game is punishing, and the hype is optional.",
      "You carry a streak of irreverence. The goofy Tree and the anarchic band say you can be serious and self-aware at once."
    ]
  },
  "GAT": {
    "name": "Georgia Tech",
    "emoji": "🐝",
    "color": "#B3A369",
    "code3": "GAT",
    "kitType": "solid",
    "tagline": "You lead your team out with a 1930 Ford and sing a fight song about a whiskey-making engineer.",
    "desc": "You are the engineer's team, a brainy, tradition-rich program that does everything a little differently and likes it that way. A restored 1930 Ford Model A, the Ramblin' Wreck, leads your team onto the oldest on-campus stadium in the sport, right in the heart of Atlanta. Your fight song, one of the most famous ever written, is about a hell-raising engineer building a still, and it is belted out from Georgia Tech to the surface of the moon. Your coaching tree gave the sport John Heisman, the man the trophy is named for. You won a national title in 1990, you spent a decade flummoxing modern defenses with a throwback option attack, and every November you renew Clean, Old-Fashioned Hate with Georgia. You are precise, technical, stubborn, and proud, the smart, gritty misfit of the South.",
    "why": [
      "Your process orientation runs deep. You win with scheme, discipline, and engineering-minded precision over raw talent.",
      "You treasure tradition and quirk. The Ramblin' Wreck, the fight song, and the whistle are the soul of the program.",
      "You are the proud misfit. A tech school that does football its own contrarian way, from the option offense to Clean, Old-Fashioned Hate."
    ]
  },
  "VAN": {
    "name": "Vanderbilt",
    "emoji": "⚓",
    "color": "#000000",
    "code3": "VAN",
    "kitType": "solid",
    "tagline": "You are the smartest team in the room, and lately you have been throwing the giants' goalposts in the river.",
    "desc": "You are the brain of the SEC, one of the finest universities in the country stuck in a league of football factories, and for a long time that meant being everyone's favorite easy win. Not anymore. In 2024 you beat the number-one team in the nation for the first time in program history, ending forty years of futility against Alabama, and your fans tore down the goalposts and carried them two miles through Nashville to throw them in the Cumberland River. Then you did it again, climbing into the top ten for the first time since 1947 and winning ten games for the first time ever. You win with brains, patience, and a methodical style that wears giants down. The doormat became the giant-slayer, and the whole sport had to look twice.",
    "why": [
      "You lead with your mind. You are an academic powerhouse that competes through preparation, patience, and smarts rather than raw talent.",
      "You carry the underdog's chip and the underdog's joy. Nobody expects you, which makes toppling a giant that much sweeter.",
      "You value the methodical build over flash. Your best wins come from control, discipline, and wearing bigger teams down."
    ]
  },
  "WAS": {
    "name": "Washington",
    "emoji": "🐺",
    "color": "#4B2E83",
    "code3": "WAS",
    "kitType": "solid",
    "tagline": "Your stadium sits on a lake, boats dock for the game, and your Dawgs bow down to nobody.",
    "desc": "You are the pride of the Pacific Northwest, a program with championship pedigree and the most beautiful home in the sport. Husky Stadium hugs the shore of Lake Washington, where fans arrive by boat, seaplanes drift overhead, and it is routinely called the greatest setting in college football. On the field, you are Quarterback U, a pipeline of passers from Warren Moon to Michael Penix Jr., and your 1991 team went undefeated as one of the finest ever assembled. You proved you still belong in 2023, running the table and marching all the way to the national title game. You are the Dawgs: loud, loyal, ambitious, and unmistakably yours. Bow Down to Washington.",
    "why": [
      "Your loyalty and ambition run deep. You carry championship pedigree and expect to compete for the biggest prizes.",
      "You take pride in your setting and your standard. The lake, the noise, and the QB tradition are all part of the identity.",
      "You are the Pacific Northwest's flagship. The Dawgs represent a region, and you wear that purple with real weight."
    ]
  },
  "TCU": {
    "name": "TCU",
    "emoji": "🐸",
    "color": "#4D1979",
    "code3": "TCU",
    "kitType": "solid",
    "tagline": "You root for a horned lizard, and twice you crashed the sport's biggest stage as the team nobody invited.",
    "desc": "You are the little program that keeps gatecrashing the big party, and you do it rooting for a horned lizard. TCU spent decades as a mid-major nobody took seriously, then Gary Patterson built a defensive machine in Fort Worth that went undefeated and won the 2010 Rose Bowl, proof the establishment could not keep you out. You did it again in 2022, running the table and charging all the way to the national championship game as the team no one saw coming. You are purple through and through, loyal and balanced and quietly relentless, with the Riff Ram cheer echoing through Amon Carter Stadium. You do not have the bluebloods' resources or their respect. You just keep showing up where you are not supposed to be. Go Frogs.",
    "why": [
      "You blend loyalty, ambition, and balance. No single trait dominates, which is exactly how you sneak up on bigger programs.",
      "You carry an underdog's edge. Crashing the sport's biggest stage twice as an outsider is the core of who you are.",
      "You are proudly your own. A horned frog mascot and a Fort Worth address say you were never trying to look like anybody else."
    ]
  },
  "OKS": {
    "name": "Oklahoma State",
    "emoji": "🤠",
    "color": "#FF7300",
    "code3": "OKS",
    "kitType": "solid",
    "tagline": "You gave the sport Barry Sanders and the greatest season ever, and you cheer in the brightest orange around.",
    "desc": "You are Cowboy football, loyal to Stillwater and proud of it, a program that gave the world the single greatest season the sport has ever seen. In 1988, Barry Sanders ran for numbers so absurd they still stand, and did it with a humility that defined you: no dancing, no preening, just a flip of the ball to the official and back to the huddle. You play in Boone Pickens Stadium, a house that oil money built, in the brightest orange in college football, behind a mustachioed Pistol Pete. For generations you were cast as the little brother in your own state, and you wore that chip with pride, scrapping and clawing and refusing to be dismissed. This is a hard-working, deeply rooted, orange-blooded fan base. Go Pokes.",
    "why": [
      "Your rootedness is your anchor. Loyalty to Stillwater and to the orange runs as deep as it gets.",
      "You carry a little brother's chip with pride. Being underestimated has always fueled you, never diminished you.",
      "You value substance over show. Barry Sanders flipping the ball to the ref is the whole Cowboy ethos in one image."
    ]
  },
  "MSU": {
    "name": "Michigan State",
    "emoji": "🛡️",
    "color": "#18453B",
    "code3": "MSU",
    "kitType": "solid",
    "tagline": "They called you little brother, so you went and won it against the bluebloods who doubted you.",
    "desc": "You are blue-collar football with a chip on your shoulder, and you earned every bit of it. For years the program across the state waved you off as its little brother, and you turned that insult into a mission. Under Mark Dantonio, the Spartans answered with Big Ten titles, a Rose Bowl, and a College Football Playoff berth, proving that toughness and belief could beat pedigree and privilege. You win with defense, discipline, and a green-and-white faith that never wavered through the lean years. Spartan Stadium sits in the heart of East Lansing, and in a state split down the middle, you are the ones who chose grit over glamour. Nobody handed you legitimacy. You went and took it. Go Green.",
    "why": [
      "Your loyalty and emotion run hottest against doubt. The chip on your shoulder is the engine of the whole program.",
      "You proved yourself the hard way. Big Ten titles and a playoff run against the bluebloods are legitimacy you earned, not inherited.",
      "You are blue-collar to the core. Defense, toughness, and a faithful green following that stuck it out define you."
    ]
  },
  "TTU": {
    "name": "Texas Tech",
    "emoji": "🐎",
    "color": "#CC0000",
    "code3": "TTU",
    "kitType": "solid",
    "tagline": "You throw tortillas onto the field, sling the ball all over West Texas, and charge out behind a masked rider.",
    "desc": "You are the wildest show in West Texas, a program that does everything loud, fast, and a little bit crazy. Texas Tech is where the Air Raid was born, an offense built to sling the ball forty times a night and light up scoreboards until the numbers stop making sense. Your fans throw tortillas onto the field, your team charges out of the tunnel behind a Masked Rider on a black horse, and Lubbock on a Saturday night feels like nowhere else in the sport. You gave the world Patrick Mahomes and a pile of record-setting quarterbacks. You are passionate, quirky, chaotic, and fiercely loyal to a corner of Texas everyone else forgets. Wreck 'Em. Guns Up.",
    "why": [
      "Your chaos and emotion are maxed. You play fast, score in bunches, and thrive on the beautiful mess of it all.",
      "You do things your own way. Tortillas, the Air Raid, and a masked rider on a horse are pure, unfiltered Texas Tech.",
      "You are fiercely loyal to your patch of West Texas. Lubbock is far from everything, and you wear that isolation as pride."
    ]
  },
  "TUL": {
    "name": "Tulane",
    "emoji": "🌊",
    "color": "#006747",
    "code3": "TUL",
    "kitType": "solid",
    "tagline": "You cheer under the live oaks of New Orleans, where your Green Wave keeps rising no matter what.",
    "desc": "You are New Orleans football, brainy and resilient and soaked in the rhythm of the greatest city in the country. Tulane is an elite university that plays real football, tailgating under the live oaks of an uptown campus, chanting Roll Wave in a stadium that finally came home after decades away. Your history has ups and downs, but the theme never changes: you get back up. The 1998 Green Wave went undefeated and got snubbed anyway. The 2022 team completed the greatest turnaround in the sport's history and beat USC in the Cotton Bowl from a 0.2 percent chance to win. When your city has been knocked down, so has your program, and both keep rising every time. That is the Green Wave. Roll Wave.",
    "why": [
      "Your community and rootedness run deep. Tulane and New Orleans are bound together, and you carry the city's spirit.",
      "You embody resilience. Getting back up after being knocked down is the truest thread in your whole history.",
      "You pair brains with heart. An elite academic school that still plays with passion is a rare and proud combination."
    ]
  },
  "CST": {
    "name": "Coastal Carolina",
    "emoji": "🐓",
    "color": "#007377",
    "code3": "CST",
    "kitType": "solid",
    "tagline": "You play on teal turf, grew mullets for the cameras, and crashed the rankings as football's feel-good team.",
    "desc": "You are the most fun story in college football, a program that turned quirk into an identity and rode it all the way onto the national stage. You root for a Chanticleer, a proud, fierce rooster lifted straight out of Chaucer, and you play on bright teal turf near the beach in Conway, South Carolina. Your football program is barely two decades old, but in 2020 the Chants went undefeated, grew mullets and mustaches, hosted College GameDay for the Mormons versus Mullets showdown with BYU, and became the feel-good team of a hard year. You are not chasing anybody's pedigree. You are a young, loud, joyful upstart having the time of your life and inviting everyone along. Chants Up.",
    "why": [
      "Your chaos and joy are maxed out. You play loose, have fun, and turn every home game into a party.",
      "You embrace being different. Teal turf, a literary rooster, and a wall of mullets are the whole delightful point.",
      "You are a close-knit young upstart. Pedigree means nothing to you; showing the sport a good time means everything."
    ]
  }
};

const archetypes = {
      "IND": "Our Indiana",
  "ALA": "Roll Tide",
  "UGA": "Dawg Nation",
  "OSU": "Buckeye Nation",
  "OKL": "Sooner Nation",
  "MIC": "Go Blue",
  "TEX": "Hook 'Em",
  "NDM": "The Subway Alumni",
  "USC": "Fight On",
  "FLA": "The Gator Nation",
  "FSU": "Unconquered",
  "PSU": "We Are",
  "CLM": "All In",
  "ORE": "Win the Day",
  "LSU": "Geaux Tigers",
  "TEN": "Rocky Top",
  "AUB": "War Eagle",
  "OLE": "Hotty Toddy",
  "SCA": "Spurs Up",
  "IOW": "Hawkeye Nation",
  "KSU": "EMAW",
  "WIS": "Badger Nation",
  "NEB": "Go Big Red",
  "TAM": "Gig 'Em",
  "MAR": "We Are Marshall",
  "HAW": "Ohana",
  "ARM": "The Long Gray Line",
  "NAV": "Go Navy",
  "AIR": "Fly, Fight, Win",
  "BYU": "Rise and Shout",
  "WVU": "Country Roads",
  "ARK": "Woo Pig Sooie",
  "ECU": "Pirate Nation",
  "WAZ": "Go Cougs",
  "APP": "The Rock",
  "VAT": "Enter Sandman",
  "MST": "Hail State",
  "COL": "Go Buffs",
  "BOI": "The Blue",
  "MIA": "The U",
  "UCF": "Charge On",
  "SMU": "Pony Up",
  "STA": "The Tree",
  "GAT": "The Ramblin' Wreck",
  "VAN": "Anchor Down",
  "WAS": "Bow Down",
  "TCU": "Go Frogs",
  "OKS": "Go Pokes",
  "MSU": "Go Green",
  "TTU": "Guns Up",
  "TUL": "Roll Wave",
  "CST": "Chants Up"
};

const teamTextColors = {
      "IND": "#FFFFFF",
  "ALA": "#F2D4D9",
  "UGA": "#FFFFFF",
  "OSU": "#C7C7C7",
  "OKL": "#FDF9D8",
  "MIC": "#FFCB05",
  "TEX": "#FFFFFF",
  "NDM": "#C99700",
  "USC": "#FFCC00",
  "FLA": "#FA4616",
  "FSU": "#CEB888",
  "PSU": "#FFFFFF",
  "CLM": "#522D80",
  "ORE": "#FEE123",
  "LSU": "#FDD023",
  "TEN": "#FFFFFF",
  "AUB": "#E87722",
  "OLE": "#CE1126",
  "SCA": "#FFFFFF",
  "IOW": "#FFCD00",
  "KSU": "#FFFFFF",
  "WIS": "#FFFFFF",
  "NEB": "#FDF6E3",
  "TAM": "#FFFFFF",
  "MAR": "#FFFFFF",
  "HAW": "#FFFFFF",
  "ARM": "#D4BF91",
  "NAV": "#C5B358",
  "AIR": "#C1C6C8",
  "BYU": "#FFFFFF",
  "WVU": "#EAAA00",
  "ARK": "#FFFFFF",
  "ECU": "#FDC82F",
  "WAZ": "#5E6A71",
  "APP": "#FFCC00",
  "VAT": "#CF4420",
  "MST": "#FFFFFF",
  "COL": "#CFB87C",
  "BOI": "#D64309",
  "MIA": "#005030",
  "UCF": "#FFC904",
  "SMU": "#FFFFFF",
  "STA": "#FFFFFF",
  "GAT": "#003057",
  "VAN": "#CFAE70",
  "WAS": "#E8E3D3",
  "TCU": "#FFFFFF",
  "OKS": "#000000",
  "MSU": "#FFFFFF",
  "TTU": "#000000",
  "TUL": "#FFFFFF",
  "CST": "#A27752"
};

const archetypeDesc = {
  "ALA": "Winning is not your goal. It is your floor. You come from the most decorated program in the modern history of the sport, a place where two separate dynasties a generation apart each stacked six national titles, and where a good year that ends without a trophy gets quietly filed as a disappointment. You do not apologize for the standard and you do not lower it. Roll Tide is not a cheer to you. It is a promise that the bar stays exactly where it is.",
  "UGA": "For forty-one years you were the program that could not win the big one, close so often it started to feel like a curse, always a step behind the bluebloods you were supposed to sit with. Then it broke. You won it all, and instead of exhaling you did it again the very next year, the first team of the modern playoff era to repeat. Now the standard is simply this: reload, recruit, and expect to be there at the end. Between the hedges you turned decades of heartbreak into the most feared machine in the sport, and you are not planning to give it back.",
  "OSU": "You are the beating heart of a football-mad state, where the biggest program for hundreds of miles carries the pride of a whole region every Saturday. Winning is not a hope here, it is the expected return on all that devotion, and a great season that ends without a title still stings. Your standard is nine national championships deep and your rivalry with the team up north defines your calendar. In 2024 you lost that rivalry game at home and won the national championship anyway, which is the most Ohio State thing imaginable: the expectation never moved, and neither did you.",
  "OKL": "You are the pride of a state with no pro team to share the spotlight, which means on Saturdays the whole place is yours. Your history is a mountain: seven national championships, seven Heisman winners, and the longest winning streak the sport has ever seen, forty-seven straight, a record no one has come close to touching. The wagon still circles the field, Boomer Sooner still rings out, and the expectation that comes with all that crimson has never eased. You do not think of yourself as a good program that has some trophies. You think of yourself as royalty, because the record book agrees.",
  "MIC": "You are the winningest program in the history of college football, the first to reach a thousand victories, and you have never once been shy about it. You fill the largest stadium in the country, more than a hundred thousand strong, and send them home humming the most famous fight song in the sport. Your pride is not loud or chaotic, it is old, certain, and a little superior, the pride of the leaders and best. Your calendar bends around one game against the team down south, and after years of losing it you seized it back and rode that run all the way to a national title. You do not chase relevance. You are the standard other programs measure themselves against.",
  "TEX": "You come from a place that considers itself a nation unto itself, and your program wears that same certainty. You are the biggest brand in the sport, the richest athletic department, a burnt-orange empire that expects the spotlight as a birthright. Your crowning moment is one of the greatest games ever played, a national title delivered on the last drive of the Rose Bowl by a quarterback who simply refused to lose. There have been lean stretches when the swagger ran ahead of the results, but the belief never wavered. You are Texas, the Eyes are upon you, and you have always assumed the biggest stage in the sport was built with your name on it.",
  "NDM": "You belong to no conference and no single city. Your faithful are scattered across the whole country, drawn less by geography than by a tradition that feels almost like a religion: the Golden Dome, the mural of Touchdown Jesus rising over the stadium, a fight song even people who hate you can hum. You claim eleven national championships and more of the sport's greatest players than anyone, and every fall the country splits neatly into those who love you and those who cannot wait to see you lose. The last title was a long time ago now, and the wait gnaws. But the loyalty does not waver, because being Notre Dame was never really about the standings. It is about the echoes, and you are always waiting to wake them again.",
  "USC": "You are Hollywood's team, the glamour program of college football, a star factory set down in the middle of Los Angeles. No school has produced more Heisman winners than you, and the run of tailbacks is so long they call you Running Back U. Your Saturdays come with a white horse, a marching band pouring out of Heritage Hall, and a swagger that assumes the spotlight is yours by right. It has been two decades now since the last title, and the wait chafes at a program built for glory. But you do not do humble. You do cardinal and gold, sunshine and star power, and the certainty that greatness is simply what happens here.",
  "FLA": "You are heat and noise and attitude, a program that plays with its chin up and its mouth open. A brash coach with a quick offense and a quicker wit turned you into a national power and gave your stadium its name: the Swamp, where only Gators get out alive. Then came a run for the ages, three national titles in thirteen years and a quarterback who felt more like a folk hero than a college kid. It has been quiet since, the way it goes for a program that lives and dies on swagger. But when the Swamp is full and the sun is brutal and the Chomp is rolling, you remember exactly who you are, and so does everyone across the field.",
  "FSU": "You play with a flaming spear, a war chant, and a chip on your shoulder the size of the panhandle. In your golden years you were untouchable, fourteen straight seasons finishing in the nation's top five, a garnet-and-gold machine full of swagger and Prime Time flash. But your defining modern moment is a wound: an undefeated season, a conference title, and then a snub, the first perfect Power conference champion ever left out of the playoff. You did not forget. You do not intend to. Every fall Osceola plants that burning spear at midfield and the message is the same one your motto has always carried. Unconquered. Come and try.",
  "PSU": "You are the plainest uniform in the sport and the loudest fan base behind it, a contradiction that makes perfect sense in Happy Valley. No names on the backs, because the team comes before any one of you. You won two national titles in the 1980s under the coach whose name is stitched into everything here, and you have chased a third with the patience of a program that measures itself in seasons, not headlines. When the whole stadium goes white and roars We Are, it is not flash, it is faith, blue-collar and unshakable. You do not need the newest thing. You need the standard held, the work put in, and the whole valley behind you.",
  "CLM": "You were not born a blueblood. You were a small town in the upstate of South Carolina with a rock, a hill, and a coach who talks about faith and family more than schemes. And out of that you built a dynasty, the one program that could look Alabama in the eye and win, twice, in the biggest game there is. Your whole identity is culture: total buy-in, a locker room that calls itself a family, everybody all in. Death Valley roars, the Tigers pour down the hill and touch Howard's Rock, and a program the giants once overlooked plays like it has always belonged. Because now it does, and it earned every inch.",
  "ORE": "You are the flash of college football, the program that turns up every week in a uniform no one has ever seen, backed by the swoosh and the billions of the alum who built Nike in this town. Speed, style, innovation, the newest of everything: that is the brand, and it is genuinely yours, not borrowed from anyone. You have crashed the national stage, played for it all, and dazzled the whole country doing it. What you have not done, not once, is win it. That missing trophy is the only thing your gleaming facilities and highlight offenses cannot manufacture. So you keep pushing the tempo and the look and the ceiling, chasing the one prize that would finally make the flash mean everything.",
  "LSU": "You are the loudest night in college football, a purple-and-gold roar rising out of the Louisiana dark. Death Valley after sundown is less a stadium than a weather event: a crowd so violent a last-second touchdown once shook a seismograph, an atmosphere Bear Bryant compared to standing inside a drum. Your fandom is Cajun and unfiltered, part festival and part endurance test for anyone unlucky enough to visit. You have won it all four times, most recently with a team so good it is spoken of as one of the greatest ever. Mike the Tiger prowls his enclosure, the band strikes up, and for one night the swamp belongs to you and everyone knows it.",
  "TEN": "You are a sea of orange and a song that will not quit. Neyland Stadium has hosted more football wins than any building in the sport, and on a fall Saturday it fills with a crowd that sails in by boat, docks the Vol Navy along the river, and files into the checkerboard end zones to sing 'Rocky Top' at a volume opponents describe as a form of torture. Your last national title was a while ago now, and the wait gnaws, because you remember exactly how good it felt and you have never stopped wanting it back. But the devotion never wavers. Through every lean year the Big Orange shows up, loud and hopeful, running through the T and believing this is the year the glory returns.",
  "AUB": "You share a state with a dynasty, and that has made you tougher, hungrier, and a little bit haunted. Everything at Auburn is measured against the giant up the road, which is why your greatest moments are the improbable ones: a missed field goal returned the length of the field as time expired, a prayer answered in the end zone, a perfect season and a national title snatched out of the Tide's shadow. Before kickoff an eagle circles Jordan-Hare and the whole stadium roars War Eagle. After a win you flood downtown and bury Toomer's Corner in toilet paper like a snowstorm. You are the underdog with the miracle streak, and you would not trade that identity for anyone's.",
  "OLE": "You are Southern charm and controlled chaos, a program where the tailgate is as famous as the team. On a fall Friday the Grove fills with tents, chandeliers, and silver platters, ten acres of oaks that outsiders call the finest tailgate in all of college sports, and then everyone spills toward Vaught-Hemingway shouting Hotty Toddy. Your golden age was decades ago, your national titles claimed and disputed, but lately Oxford has come roaring back, all the way to your first playoff. The Mannings still run through this place; the campus speed limit honors Archie's jersey number. You love hard and you live well, and win or lose, nobody has more fun being who they are.",
  "SCA": "You are loyalty in its purest, most stubborn form. No national title. No conference crown. A history of near-misses and heartbreak that has earned you the nickname of college football's Cubs, curse and all. And still, every Saturday, eighty thousand of you pack Williams-Brice, more people than all but a handful of cities in the whole state. You take the field to the theme from a space odyssey and 'Sandstorm' shakes the press box, and for a few hours belief runs wild. You do not show up because you expect to win it all. You show up because this is yours, garnet and black, through every lean year, and one of these days the breakthrough is going to feel that much sweeter for the wait.",
  "IOW": "You are process incarnate, the most disciplined and least flashy fanbase in the sport, and proud of every bit of it. You win with defense, special teams, and a punt game other people mock right up until it beats them. Your stadium is named for the only Heisman winner it ever produced, a man who died in the war, and after the first quarter of every home game the entire place, players and visitors included, turns to wave at the children watching from the hospital next door. That is who you are: hard-nosed and decent in the same breath. You do not chase highlights. You chase fundamentals, and you trust that doing the little things right, over and over, is its own kind of glory.",
  "KSU": "You are the underdog's underdog, a purple faithful that stuck around through the darkest years in the sport's history and got rewarded for it. Before Bill Snyder, Kansas State was the worst program in the country, a punchline in a rural town that had almost nothing to cheer. He built a winner out of walk-ons, junior-college transfers, and a wall of discipline, and turned Manhattan into a place giants dreaded visiting. Your program's slogan is Family, stitched right onto the helmet, and it means it. You do not have the talent, the titles, or the name. What you have is toughness, structure, and the deep loyalty of people who never left. You are proof that the right culture can build something out of nothing.",
  "WIS": "You are a bruiser, the blue-collar heart of the Big Ten, and you win the same honest way every single time: you run the ball down people's throats. Wisconsin is an offensive-line and running-back factory, a place that turns big, tough Midwestern kids into a ground game nobody can stop, and it has produced two Heisman-winning backs to prove it. Camp Randall is one of the oldest stadiums in the sport, and between the third and fourth quarters the whole place bounces to Jump Around, seventy-five thousand people losing their minds in unison. You do not need trick plays or hype. You need a lead blocker and a cold November afternoon. That is your kind of football: physical, disciplined, and proud of the grind.",
  "NEB": "You are the most loyal fanbase in America and one of the most decent. Memorial Stadium has sold out every single game since 1962, the longest such streak in the history of American sports, and on game day it becomes the third-largest city in the state. You built five national titles on in-state walk-ons and a defense so proud it earned its own name, the Blackshirts. And when the game ends, win or lose, the Sea of Red applauds the visiting team as it walks off, because that is who you are. The glory years are a while back now, and the wait has been long and hard. But the faith never breaks. Nobody leaves. Nobody ever has.",
  "TAM": "You are the tightest-knit fanbase in the sport, a maroon congregation that treats loyalty like a sacred duty. Your whole identity is the 12th Man: the entire student body stands from kickoff to final whistle, ready to step onto the field if called, honoring a walk-on who did exactly that a century ago. Kyle Field is the biggest stadium in the SEC, and the night before every game tens of thousands pack it for Midnight Yell, a ritual no other school can explain to outsiders. The Corps of Cadets, the War Hymn, the Aggie Ring: this is tradition as identity, unity as a way of life. You do not just cheer for the team. You consider yourself part of it.",
  "MAR": "You are heart and resilience, the most emotionally rooted community in the sport. In 1970 a plane crash took nearly your entire team, its coaches, and dozens of local supporters in a single night, the worst tragedy any American sports program has ever known. Marshall could have folded. Instead a young team of survivors and newcomers rebuilt from nothing, and the town of Huntington rebuilt with it, and out of that grief came a phrase that means everything here: We Are Marshall. A fountain on campus honors the lost, its water shut off each November and turned back on every spring. Decades later the Herd rose again, sending stars like Randy Moss to the world. You do not measure yourself in trophies. You measure yourself in the bond that refused to break.",
  "HAW": "You are the most isolated program in the sport and one of the most beloved, the only major team for thousands of miles of open ocean. That distance makes everything harder: brutal travel, late-night mainland kickoffs, a schedule nobody else would want. It also makes the bond unbreakable. Hawaii football is ohana, family, the whole island's team, and game day carries the culture with it, a warrior chant before kickoff, ti leaves waving in the stands, rainbows over the stadium. You made your name throwing the ball all over the yard in the run-and-shoot, and in 2007 you rode it to an undefeated regular season and a Sugar Bowl. You do not have the resources or the geography. What you have is aloha, and a fanbase that treats every Saturday like a homecoming.",
  "ARM": "You are duty, honor, and country made into a football team. At West Point the entire Corps of Cadets stands for all four quarters, drops for push-ups after every score, and marches onto the field in formation before kickoff, because for you the game is one more expression of service, not a spectacle. You win with the triple option, an offense built on precision, unselfishness, and everyone doing their job without the ball. Your glory years came in the 1940s, when Mr. Inside and Mr. Outside ran the country's best team, and that pride has never faded. Above all there is Beat Navy, the game that means more than any ranking. You are the Long Gray Line: tradition carried forward by people about to serve something far bigger than a scoreboard.",
  "NAV": "You belong to something bigger and older than a football team: a service, a fleet, a brigade that marches into the stadium in formation. The wins matter, and you have plenty of them, more in the rivalry that means everything than the other side has ever managed, a fact you carry with quiet certainty. But the thing you were really built on is not any one Saturday. It is the discipline underneath it, the sense that you are one part of a machine that works because every part does its job. You do not chase chaos or flash. You out-execute, you out-last, and when it is over you stand at attention for the other academy's song before you sing your own. Beat Army is not trash talk to you. It is a settled matter you renew every December.",
  "AIR": "You are precision made visible, a program where discipline is not a value but the entire point. Air Force runs the triple option with a machinist's exactness, willing smaller, faster teams past bigger ones through timing, technique, and sheer execution. Game day in the Rockies is a spectacle of the sky: the cadets march on in formation, the Wings of Blue parachute team drops the game ball onto the field, fighter jets scream over the mountains, and live falcons soar at halftime. You have won more Commander-in-Chief's Trophies than Army or Navy, and you measure yourself against your own standard, not anyone else's. This is football as a mission: clean, exact, and executed by people who will spend their lives doing exactly that.",
  "BYU": "You are a program built on faith and structure, a community bound by shared values as much as a shared team. BYU will not play on Sunday, holds its players to an honor code, and sends many of them on two-year missions, so your roster is older, more grounded, and more disciplined than anyone else's. None of that stopped you from winning the whole thing in 1984, the last team from outside the sport's power conferences ever to do it. You are Quarterback U, the place a passing revolution was born, home to a lineage of great arms and a Heisman winner. Your fans are loyal, principled, and everywhere, a nation unto themselves. You prove you can hold to your standards, do it your own way, and still stand at the top.",
  "WVU": "You are the entire state's team, because there is no other. No pro franchise, no rival Power program, nothing but you and the mountains and a stadium in Morgantown that sings John Denver back to itself after a win. You have been undefeated, ranked number one, one game from playing for it all, and you have watched that chance slip away in the cruelest way a rival could hand it to you. You have never won the whole thing. You have won more games than anyone else who never did. And every fall you pour it all back in, gold and blue and unreasonable hope, because loving this team was never a choice you got to make. It is where you are from.",
  "ARK": "You belong to an entire state, top to bottom, the only major team Arkansas has ever had. No pro franchise, no rival program, just the Razorbacks and a whole population that lives and dies with them. That is why the hog call carries the way it does: 'Wooo, Pig, Sooie' rolling through the stadium in a wave, a hundred thousand people who feel like family calling the Hogs together. Your lone national title is from 1964 and you have chased another ever since, through good years and lean ones, never once wavering. You are loud, emotional, and rooted all the way down. This is not just your team. In Arkansas, it is the team, and it always will be.",
  "ECU": "You are rowdy to the bone, a purple-and-gold pirate crew that treats every home game like a boarding party. Dowdy-Ficklen is called Rowdy at Dowdy for a reason: the team enters through purple smoke, a cannon booms after every score, and when the fourth quarter starts the black pirate flag comes down and the red No Quarter flag goes up, the whole stadium crossing their arms and vowing no mercy. You are a scrappy underdog with a giant-killer streak, the kind of team that knocks off a ranked Virginia Tech and West Virginia in the same season just to prove it can. You do not have the budget, the recruits, or the history of the big boys. You have Greenville, a skull-and-crossbones, and a fanbase that shows up loud and stays loud. That is more than enough.",
  "WAZ": "You are the most loyal lost cause in college football, a crimson-and-gray faithful stranded on the beautiful, remote Palouse and proud of every isolated inch of it. Your defining symbol is Ol' Crimson, a WSU flag that has appeared on the set of ESPN's College GameDay every single week since 2003, shipped around the country by Cougs who refuse to let the world forget they exist. You gave the sport the wide-open Air Raid and a folk hero or two, and you gave yourselves a rueful verb, to Coug it, for all the heartbreak. When the conference collapsed and everyone else fled, you were one of the last two standing, abandoned but unbowed. You do not win a lot. You never, ever leave. Go Cougs.",
  "APP": "You are the giant-killer, a small mountain school from Boone with the biggest upset in the sport's history to your name. On September 1, 2007, a two-time defending FCS champion walked into Michigan Stadium in front of 109,000 people and beat the fifth-ranked Wolverines, the first time a team from the lower division ever knocked off a ranked one, still called the greatest upset college football has ever seen. You won three straight FCS national titles, moved up to the big leagues, and just kept slaying, stunning a top-ten Texas A&M as a three-touchdown underdog. Your home is Kidd Brewer Stadium, The Rock, perched a mile up in the Appalachians and nearly impossible to win in. You are proof that nobody is too big to fall, and that the mountain always has one more upset in it.",
  "VAT": "You are the most electric entrance in college football and one of its most passionate, blue-collar fanbases. When the lights dim and Metallica's Enter Sandman hits, Lane Stadium erupts and the whole crowd starts jumping in unison, so hard the ground movement registers on the university's seismographs as a small earthquake. That energy is the soul of Hokie Nation: loud, loyal, and a little bit menacing, tucked away in the mountains of southwest Virginia where fans drive hours to get there. Your golden era was built on Beamer Ball, winning with defense and special teams and a battered lunch pail, and lit up by Michael Vick's magic on an undefeated run to the title game. You will gobble like a turkey and jump until the stands shake. That is Virginia Tech.",
  "MST": "You are blue-collar to the bone, a maroon underdog that scraps for everything it gets. Your fans do not wave pom-poms; they ring cowbells, thousands of them, a clanging wall of noise so distinctive the conference spent 36 years trying to ban it before finally giving up. You play in the second-oldest stadium in the sport, out in Starkville, where the grind is the identity: defense, toughness, and Hail State pride, no shortcuts and no apologies. You have never won it all, and you know the giants of the SEC by heart, but you show up every fall ready to make somebody's day miserable. When the cowbells are going and the Bulldogs are digging in, you are exactly the kind of hard-nosed, deafening problem nobody wants to visit.",
  "COL": "You are loyalty tested by two long decades and never broken. Colorado won it all in 1990, a national title capped by Kordell Stewart's Miracle at Michigan and a live buffalo named Ralphie thundering onto the field before every half, one of the great traditions in sports. Then came the lean years, a slow slide into irrelevance that stretched on and on. Most fanbases would have drifted away. You did not. You kept filling mile-high Folsom Field, kept running Ralphie, kept believing, and lately the faith has been rewarded with a genuine resurgence and a 2024 Heisman winner. Yours is not front-running love. It is the deep, stubborn, black-and-gold kind that waits through the worst and shows up anyway. That is the Buffs.",
  "BOI": "You are the mid-major that refused to stay in its place, the little program that crashed the party and never left. Your home field is The Blue, the famous blue turf installed in 1986, the first non-green field in the sport and still the most recognizable, so distinctive you hold a trademark on it. Your legend was born on January 1, 2007, when you beat mighty Oklahoma in the Fiesta Bowl on a string of trick plays capped by a Statue of Liberty two-point conversion, still one of the greatest games ever played. That was not a fluke. You turned it into decades of winning, the winningest quarterback in the sport, and a 2024 College Football Playoff berth behind a Heisman-runner-up back. You do not accept that big programs get to win. You just keep beating them.",
  "MIA": "You are swagger made into a football team, the brashest, flashiest program the sport has ever produced. In the 1980s and 90s, The U won five national titles and did it with a strut, a chip, and an us-against-everybody attitude that rewrote what a college team could look like. You are a factory for NFL stars, with more Pro Football Hall of Famers than almost anyone, and a modern signature to match: the turnover chain, a giant gold rope draped on any defender who takes the ball away. You do not do humble, and you never have. You do flash, confidence, big plays, and big personalities, all of it soaked in South Florida heat. Love it or hate it, everyone knows exactly who you are. This is The U.",
  "UCF": "You are the boldest upstart in college football, a program that refuses to accept its assigned place in the pecking order. In 2017 you went 13-0, beat a ranked Auburn team that had beaten both national title contenders, got snubbed by the playoff anyway, and did the most audacious thing imaginable: you declared yourselves national champions, hung a banner, handed out rings, and paraded through Walt Disney World. Two years earlier you had gone winless. That is the UCF way, doing what everyone says can't be done. Your stadium literally bounces when the crowd jumps, your fifty-yard line points at a NASA launch pad, and your whole identity is a chip on the shoulder the size of Orlando. You are new, you are brash, and you are not waiting for permission. Charge On.",
  "SMU": "You are the ultimate resurrection story, a program that was buried and rose anyway. In the early 1980s the Pony Express of Eric Dickerson and Craig James made SMU the hottest team in the country, winning at a rate nobody could match. Then, in 1987, the NCAA dropped the death penalty, the harshest punishment in college sports history and the only one ever handed down: your football program was shut down entirely. Two decades of wandering the wilderness followed. But Dallas money and Dallas ambition never quit, and you clawed all the way back, into the ACC and into the 2024 College Football Playoff, a seat at the sport's biggest table for the first time in a generation. You know exactly what it means to lose everything and build it again. Pony Up.",
  "STA": "You are brains and brawn in the same uniform, one of the finest universities on earth that also happens to hit like a freight train. Stanford wins with what its coaches once called intellectual brutality: smart, disciplined, physical football, a bruising run game and an offensive line that overpowers people who were supposed to be more athletic. Your quarterback pipeline is absurd, Plunkett and Elway and Luck, and Christian McCaffrey rewrote the record book out of your backfield. Yet you never take yourself too seriously: your mascot is an unofficial, googly-eyed Tree, and your marching band is a gloriously chaotic, satirical mess that half the sport loves to hate. You do not lead with passion or noise. You lead with precision, intelligence, and just enough irreverence to keep everyone guessing.",
  "GAT": "You are the engineer's team, a brainy, tradition-rich program that does everything a little differently and likes it that way. A restored 1930 Ford Model A, the Ramblin' Wreck, leads your team onto the oldest on-campus stadium in the sport, right in the heart of Atlanta. Your fight song, one of the most famous ever written, is about a hell-raising engineer building a still, and it is belted out from Georgia Tech to the surface of the moon. Your coaching tree gave the sport John Heisman, the man the trophy is named for. You won a national title in 1990, you spent a decade flummoxing modern defenses with a throwback option attack, and every November you renew Clean, Old-Fashioned Hate with Georgia. You are precise, technical, stubborn, and proud, the smart, gritty misfit of the South.",
  "VAN": "You are the brain of the SEC, one of the finest universities in the country stuck in a league of football factories, and for a long time that meant being everyone's favorite easy win. Not anymore. In 2024 you beat the number-one team in the nation for the first time in program history, ending forty years of futility against Alabama, and your fans tore down the goalposts and carried them two miles through Nashville to throw them in the Cumberland River. Then you did it again, climbing into the top ten for the first time since 1947 and winning ten games for the first time ever. You win with brains, patience, and a methodical style that wears giants down. The doormat became the giant-slayer, and the whole sport had to look twice.",
  "WAS": "You are the pride of the Pacific Northwest, a program with championship pedigree and the most beautiful home in the sport. Husky Stadium hugs the shore of Lake Washington, where fans arrive by boat, seaplanes drift overhead, and it is routinely called the greatest setting in college football. On the field, you are Quarterback U, a pipeline of passers from Warren Moon to Michael Penix Jr., and your 1991 team went undefeated as one of the finest ever assembled. You proved you still belong in 2023, running the table and marching all the way to the national title game. You are the Dawgs: loud, loyal, ambitious, and unmistakably yours. Bow Down to Washington.",
  "TCU": "You are the little program that keeps gatecrashing the big party, and you do it rooting for a horned lizard. TCU spent decades as a mid-major nobody took seriously, then Gary Patterson built a defensive machine in Fort Worth that went undefeated and won the 2010 Rose Bowl, proof the establishment could not keep you out. You did it again in 2022, running the table and charging all the way to the national championship game as the team no one saw coming. You are purple through and through, loyal and balanced and quietly relentless, with the Riff Ram cheer echoing through Amon Carter Stadium. You do not have the bluebloods' resources or their respect. You just keep showing up where you are not supposed to be. Go Frogs.",
  "OKS": "You are Cowboy football, loyal to Stillwater and proud of it, a program that gave the world the single greatest season the sport has ever seen. In 1988, Barry Sanders ran for numbers so absurd they still stand, and did it with a humility that defined you: no dancing, no preening, just a flip of the ball to the official and back to the huddle. You play in Boone Pickens Stadium, a house that oil money built, in the brightest orange in college football, behind a mustachioed Pistol Pete. For generations you were cast as the little brother in your own state, and you wore that chip with pride, scrapping and clawing and refusing to be dismissed. This is a hard-working, deeply rooted, orange-blooded fan base. Go Pokes.",
  "MSU": "You are blue-collar football with a chip on your shoulder, and you earned every bit of it. For years the program across the state waved you off as its little brother, and you turned that insult into a mission. Under Mark Dantonio, the Spartans answered with Big Ten titles, a Rose Bowl, and a College Football Playoff berth, proving that toughness and belief could beat pedigree and privilege. You win with defense, discipline, and a green-and-white faith that never wavered through the lean years. Spartan Stadium sits in the heart of East Lansing, and in a state split down the middle, you are the ones who chose grit over glamour. Nobody handed you legitimacy. You went and took it. Go Green.",
  "TTU": "You are the wildest show in West Texas, a program that does everything loud, fast, and a little bit crazy. Texas Tech is where the Air Raid was born, an offense built to sling the ball forty times a night and light up scoreboards until the numbers stop making sense. Your fans throw tortillas onto the field, your team charges out of the tunnel behind a Masked Rider on a black horse, and Lubbock on a Saturday night feels like nowhere else in the sport. You gave the world Patrick Mahomes and a pile of record-setting quarterbacks. You are passionate, quirky, chaotic, and fiercely loyal to a corner of Texas everyone else forgets. Wreck 'Em. Guns Up.",
  "TUL": "You are New Orleans football, brainy and resilient and soaked in the rhythm of the greatest city in the country. Tulane is an elite university that plays real football, tailgating under the live oaks of an uptown campus, chanting Roll Wave in a stadium that finally came home after decades away. Your history has ups and downs, but the theme never changes: you get back up. The 1998 Green Wave went undefeated and got snubbed anyway. The 2022 team completed the greatest turnaround in the sport's history and beat USC in the Cotton Bowl from a 0.2 percent chance to win. When your city has been knocked down, so has your program, and both keep rising every time. That is the Green Wave. Roll Wave.",
  "CST": "You are the most fun story in college football, a program that turned quirk into an identity and rode it all the way onto the national stage. You root for a Chanticleer, a proud, fierce rooster lifted straight out of Chaucer, and you play on bright teal turf near the beach in Conway, South Carolina. Your football program is barely two decades old, but in 2020 the Chants went undefeated, grew mullets and mustaches, hosted College GameDay for the Mormons versus Mullets showdown with BYU, and became the feel-good team of a hard year. You are not chasing anybody's pedigree. You are a young, loud, joyful upstart having the time of your life and inviting everyone along. Chants Up."
};

const greats = {
  "IND": [
    { "name": "Fernando Mendoza", "years": "2025", "note": "the Heisman quarterback of the perfect season" },
    { "name": "Anthony Thompson", "years": "1986-1989", "note": "the tailback who finished second for the Heisman in 1989" },
    { "name": "Antwaan Randle El", "years": "1998-2001", "note": "did everything at quarterback, then threw a Super Bowl touchdown" },
    { "name": "George Taliaferro", "years": "1945-1948", "note": "the first Black player ever drafted by an NFL team" },
    { "name": "Curt Cignetti", "years": "2024-", "note": "said he would win, then went sixteen and zero" }
  ],
  "ALA": [
    {
      "name": "Bear Bryant",
      "years": "1958-1982",
      "note": "built the first dynasty, six national titles, the stadium carries his name"
    },
    {
      "name": "Nick Saban",
      "years": "2007-2023",
      "note": "architect of the modern dynasty, six more titles and sixteen straight ten-win seasons"
    },
    {
      "name": "Derrick Henry",
      "years": "2012-2015",
      "note": "the bulldozing back who won the 2015 Heisman"
    },
    {
      "name": "Julio Jones",
      "years": "2008-2010",
      "note": "set the standard at receiver"
    },
    {
      "name": "DeVonta Smith",
      "years": "2017-2020",
      "note": "the slight, brilliant wideout who won the 2020 Heisman"
    }
  ],
  "UGA": [
    {
      "name": "Herschel Walker",
      "years": "1980-1982",
      "note": "the 1982 Heisman winner who powered the 1980 title"
    },
    {
      "name": "Frank Sinkwich",
      "years": "1940-1942",
      "note": "the 1942 Heisman winner and first title-era star"
    },
    {
      "name": "Fran Tarkenton",
      "years": "1958-1960",
      "note": "the quarterback who became a Hall of Fame pro"
    },
    {
      "name": "Champ Bailey",
      "years": "1996-1998",
      "note": "the two-way star and Hall of Fame cornerback"
    },
    {
      "name": "Stetson Bennett",
      "years": "2020-2022",
      "note": "the walk-on who quarterbacked both title teams"
    }
  ],
  "OSU": [
    {
      "name": "Archie Griffin",
      "years": "1972-1975",
      "note": "the only two-time Heisman winner in history"
    },
    {
      "name": "Eddie George",
      "years": "1992-1995",
      "note": "the 1995 Heisman winner and bruising back"
    },
    {
      "name": "Orlando Pace",
      "years": "1994-1996",
      "note": "the dominant left tackle who defined the position"
    },
    {
      "name": "Troy Smith",
      "years": "2003-2006",
      "note": "the 2006 Heisman winner who led an unbeaten run"
    },
    {
      "name": "Chase Young",
      "years": "2017-2019",
      "note": "the record-setting pass rusher of the modern era"
    }
  ],
  "OKL": [
    {
      "name": "Bud Wilkinson",
      "years": "coach, 1947-1963",
      "note": "built the dynasty behind the record 47-game streak"
    },
    {
      "name": "Lee Roy Selmon",
      "years": "1972-1975",
      "note": "the dominant lineman his coach called the best he ever coached"
    },
    {
      "name": "Billy Sims",
      "years": "1975-1979",
      "note": "the 1978 Heisman winner and record-setting back"
    },
    {
      "name": "Adrian Peterson",
      "years": "2004-2006",
      "note": "the explosive runner who rewrote the freshman record book"
    },
    {
      "name": "Baker Mayfield",
      "years": "2015-2017",
      "note": "the 2017 Heisman winner and swaggering modern quarterback"
    }
  ],
  "MIC": [
    {
      "name": "Tom Harmon",
      "years": "1938-1940",
      "note": "the 1940 Heisman winner and early Michigan icon"
    },
    {
      "name": "Bo Schembechler",
      "years": "coach, 1969-1989",
      "note": "defined the modern program and the Ohio State rivalry"
    },
    {
      "name": "Desmond Howard",
      "years": "1989-1991",
      "note": "the 1991 Heisman winner and electric returner"
    },
    {
      "name": "Charles Woodson",
      "years": "1995-1997",
      "note": "the 1997 Heisman winner, the last primarily defensive player to win it"
    },
    {
      "name": "Blake Corum",
      "years": "2020-2023",
      "note": "the workhorse back who carried the 2023 title team"
    }
  ],
  "TEX": [
    {
      "name": "Darrell K Royal",
      "years": "coach, 1957-1976",
      "note": "won three national titles and gave the stadium its name"
    },
    {
      "name": "Earl Campbell",
      "years": "1974-1977",
      "note": "the 1977 Heisman winner known as the Tyler Rose"
    },
    {
      "name": "Tommy Nobis",
      "years": "1963-1965",
      "note": "the fearsome two-way lineman and linebacker"
    },
    {
      "name": "Ricky Williams",
      "years": "1995-1998",
      "note": "the 1998 Heisman winner who broke the career rushing record"
    },
    {
      "name": "Vince Young",
      "years": "2003-2005",
      "note": "won the 2005 title on the last drive of the Rose Bowl"
    }
  ],
  "NDM": [
    {
      "name": "Knute Rockne",
      "years": "coach, 1918-1930",
      "note": "the legendary coach who built the program's mystique"
    },
    {
      "name": "Johnny Lujack",
      "years": "1943-1947",
      "note": "the 1947 Heisman winner and postwar star"
    },
    {
      "name": "Paul Hornung",
      "years": "1954-1956",
      "note": "the 1956 Heisman winner, the only one ever from a losing team"
    },
    {
      "name": "Joe Montana",
      "years": "1975-1978",
      "note": "the comeback quarterback who won the 1977 title"
    },
    {
      "name": "Tim Brown",
      "years": "1984-1987",
      "note": "the 1987 Heisman winner and the program's most recent"
    }
  ],
  "USC": [
    {
      "name": "Marcus Allen",
      "years": "1978-1981",
      "note": "the 1981 Heisman winner and Hall of Fame back"
    },
    {
      "name": "Ronnie Lott",
      "years": "1977-1980",
      "note": "the ferocious Hall of Fame defensive back"
    },
    {
      "name": "Carson Palmer",
      "years": "1998-2002",
      "note": "the 2002 Heisman winner and top overall pick"
    },
    {
      "name": "Matt Leinart",
      "years": "2003-2005",
      "note": "the 2004 Heisman winner who led the last title team"
    },
    {
      "name": "Reggie Bush",
      "years": "2003-2005",
      "note": "the electric 2005 Heisman winner, reinstated in 2024"
    }
  ],
  "FLA": [
    {
      "name": "Steve Spurrier",
      "years": "1964-1966, 1990-2001",
      "note": "the 1966 Heisman winner who returned to coach the 1996 title"
    },
    {
      "name": "Emmitt Smith",
      "years": "1987-1989",
      "note": "the record-setting back and Hall of Fame pro"
    },
    {
      "name": "Danny Wuerffel",
      "years": "1993-1996",
      "note": "the 1996 Heisman winner and title quarterback"
    },
    {
      "name": "Tim Tebow",
      "years": "2006-2009",
      "note": "the 2007 Heisman winner and two-time champion"
    },
    {
      "name": "Jack Youngblood",
      "years": "1968-1970",
      "note": "the Hall of Fame defensive end"
    }
  ],
  "FSU": [
    {
      "name": "Bobby Bowden",
      "years": "coach, 1976-2009",
      "note": "built the dynasty and two national titles"
    },
    {
      "name": "Deion Sanders",
      "years": "1985-1988",
      "note": "\"Prime Time,\" the flashy Hall of Fame cornerback"
    },
    {
      "name": "Charlie Ward",
      "years": "1989-1993",
      "note": "the 1993 Heisman winner and first title quarterback"
    },
    {
      "name": "Derrick Brooks",
      "years": "1991-1994",
      "note": "the Hall of Fame linebacker"
    },
    {
      "name": "Jameis Winston",
      "years": "2012-2014",
      "note": "the 2013 Heisman winner who led the third title"
    }
  ],
  "PSU": [
    {
      "name": "Joe Paterno",
      "years": "coach, 1966-2011",
      "note": "the winningest coach in major college football, two national titles"
    },
    {
      "name": "Franco Harris",
      "years": "1968-1971",
      "note": "the Hall of Fame back"
    },
    {
      "name": "John Cappelletti",
      "years": "1971-1973",
      "note": "the 1973 Heisman winner"
    },
    {
      "name": "Jack Ham",
      "years": "1968-1970",
      "note": "the Hall of Fame linebacker"
    },
    {
      "name": "Saquon Barkley",
      "years": "2015-2017",
      "note": "the electric modern superstar back"
    }
  ],
  "CLM": [
    {
      "name": "Dabo Swinney",
      "years": "coach, 2008-present",
      "note": "built the modern dynasty and two national titles"
    },
    {
      "name": "Trevor Lawrence",
      "years": "2018-2020",
      "note": "the generational quarterback who led the 2018 title as a freshman"
    },
    {
      "name": "C.J. Spiller",
      "years": "2006-2009",
      "note": "the electric all-purpose back and Hall of Famer"
    },
    {
      "name": "William Perry",
      "years": "1981-1984",
      "note": "the massive lineman of the 1981 title team, \"The Refrigerator.\""
    },
    {
      "name": "Brian Dawkins",
      "years": "1992-1995",
      "note": "the Hall of Fame safety"
    }
  ],
  "ORE": [
    {
      "name": "Dan Fouts",
      "years": "1970-1972",
      "note": "the Hall of Fame quarterback from the pre-Nike era"
    },
    {
      "name": "Haloti Ngata",
      "years": "2002-2005",
      "note": "the dominant defensive tackle"
    },
    {
      "name": "LaMichael James",
      "years": "2009-2011",
      "note": "the record-setting back of the fast-break era"
    },
    {
      "name": "Marcus Mariota",
      "years": "2012-2014",
      "note": "the 2014 Heisman winner, the program's first"
    },
    {
      "name": "Justin Herbert",
      "years": "2016-2019",
      "note": "the star modern quarterback and top pick"
    }
  ],
  "LSU": [
    {
      "name": "Billy Cannon",
      "years": "1957-1959",
      "note": "the 1959 Heisman winner and Halloween-run legend"
    },
    {
      "name": "Joe Burrow",
      "years": "2018-2019",
      "note": "the 2019 Heisman winner who led a perfect season"
    },
    {
      "name": "Jayden Daniels",
      "years": "2022-2023",
      "note": "the 2023 Heisman winner and dynamic dual threat"
    },
    {
      "name": "Ja'Marr Chase",
      "years": "2018-2020",
      "note": "the record-setting receiver of the 2019 team"
    },
    {
      "name": "Glenn Dorsey",
      "years": "2004-2007",
      "note": "the dominant defensive tackle of the 2007 title team"
    }
  ],
  "TEN": [
    {
      "name": "Robert Neyland",
      "years": "coach, 1926-1952",
      "note": "the general who won four national titles and gave the stadium its name"
    },
    {
      "name": "Peyton Manning",
      "years": "1994-1997",
      "note": "the legendary quarterback and program icon"
    },
    {
      "name": "Reggie White",
      "years": "1980-1983",
      "note": "the Hall of Fame defensive end, the Minister of Defense"
    },
    {
      "name": "Doug Atkins",
      "years": "1950-1952",
      "note": "the Hall of Fame defensive end"
    },
    {
      "name": "Eric Berry",
      "years": "2007-2009",
      "note": "the ball-hawking All-American safety"
    }
  ],
  "AUB": [
    {
      "name": "Shug Jordan",
      "years": "coach, 1951-1975",
      "note": "won the first national title and gave the stadium its name"
    },
    {
      "name": "Pat Sullivan",
      "years": "1969-1971",
      "note": "the 1971 Heisman winner"
    },
    {
      "name": "Bo Jackson",
      "years": "1982-1985",
      "note": "the 1985 Heisman winner and two-sport legend"
    },
    {
      "name": "Tracy Rocker",
      "years": "1985-1988",
      "note": "the Hall of Fame defensive tackle"
    },
    {
      "name": "Cam Newton",
      "years": "2010",
      "note": "the 2010 Heisman winner who led the perfect title season"
    }
  ],
  "OLE": [
    {
      "name": "Johnny Vaught",
      "years": "coach, 1947-1970",
      "note": "won three national titles and gave the stadium its name"
    },
    {
      "name": "Archie Manning",
      "years": "1968-1970",
      "note": "the beloved quarterback and program patriarch"
    },
    {
      "name": "Eli Manning",
      "years": "2000-2003",
      "note": "the Super Bowl MVP and record-setting quarterback"
    },
    {
      "name": "Patrick Willis",
      "years": "2003-2006",
      "note": "the Hall of Fame linebacker"
    },
    {
      "name": "Charlie Conerly",
      "years": "1942-1947",
      "note": "the All-American back and NFL champion"
    }
  ],
  "SCA": [
    {
      "name": "George Rogers",
      "years": "1977-1980",
      "note": "the 1980 Heisman winner and the program's only one"
    },
    {
      "name": "Steve Spurrier",
      "years": "coach, 2005-2015",
      "note": "the winningest coach in program history"
    },
    {
      "name": "Jadeveon Clowney",
      "years": "2011-2013",
      "note": "the dominant defensive end and top overall pick"
    },
    {
      "name": "Sterling Sharpe",
      "years": "1983-1987",
      "note": "the record-setting receiver"
    },
    {
      "name": "Marcus Lattimore",
      "years": "2010-2012",
      "note": "the beloved back whose toughness defined an era"
    }
  ],
  "IOW": [
    {
      "name": "Nile Kinnick",
      "years": "1937-1939",
      "note": "the 1939 Heisman winner the stadium is named for"
    },
    {
      "name": "Alex Karras",
      "years": "1954-1957",
      "note": "the Outland Trophy-winning lineman"
    },
    {
      "name": "Dallas Clark",
      "years": "2000-2002",
      "note": "the star tight end"
    },
    {
      "name": "Bob Sanders",
      "years": "2000-2003",
      "note": "the ferocious safety"
    },
    {
      "name": "George Kittle",
      "years": "2013-2016",
      "note": "the modern tight end great"
    }
  ],
  "KSU": [
    {
      "name": "Bill Snyder",
      "years": "coach, 1989-2005, 2009-2018",
      "note": "engineered the greatest turnaround in the sport's history"
    },
    {
      "name": "Darren Sproles",
      "years": "2001-2004",
      "note": "the record-setting running back"
    },
    {
      "name": "Michael Bishop",
      "years": "1997-1998",
      "note": "the 1998 Heisman runner-up"
    },
    {
      "name": "Tyler Lockett",
      "years": "2011-2014",
      "note": "the record-setting receiver"
    },
    {
      "name": "Collin Klein",
      "years": "2009-2012",
      "note": "the 2012 Heisman finalist"
    }
  ],
  "WIS": [
    {
      "name": "Ron Dayne",
      "years": "1996-1999",
      "note": "the 1999 Heisman winner and record-setting rusher"
    },
    {
      "name": "Alan Ameche",
      "years": "1951-1954",
      "note": "the 1954 Heisman winner"
    },
    {
      "name": "Jonathan Taylor",
      "years": "2017-2019",
      "note": "the record-breaking modern back"
    },
    {
      "name": "J.J. Watt",
      "years": "2009-2010",
      "note": "the dominant defensive end and NFL star"
    },
    {
      "name": "Joe Thomas",
      "years": "2003-2006",
      "note": "the Hall of Fame offensive tackle"
    }
  ],
  "NEB": [
    {
      "name": "Tom Osborne",
      "years": "coach, 1973-1997",
      "note": "built the 1990s dynasty and three national titles"
    },
    {
      "name": "Johnny Rodgers",
      "years": "1970-1972",
      "note": "the 1972 Heisman winner"
    },
    {
      "name": "Mike Rozier",
      "years": "1981-1983",
      "note": "the 1983 Heisman winner"
    },
    {
      "name": "Ndamukong Suh",
      "years": "2005-2009",
      "note": "the dominant modern defensive tackle"
    },
    {
      "name": "Grant Wistrom",
      "years": "1994-1997",
      "note": "the two-time champion and Blackshirts anchor"
    }
  ],
  "TAM": [
    {
      "name": "John David Crow",
      "years": "1955-1957",
      "note": "the 1957 Heisman winner"
    },
    {
      "name": "Johnny Manziel",
      "years": "2012-2013",
      "note": "the 2012 Heisman winner, the first freshman ever to win it"
    },
    {
      "name": "Dat Nguyen",
      "years": "1995-1998",
      "note": "the All-American linebacker of the Wrecking Crew"
    },
    {
      "name": "Von Miller",
      "years": "2007-2010",
      "note": "the star pass rusher and NFL great"
    },
    {
      "name": "Myles Garrett",
      "years": "2014-2016",
      "note": "the dominant defensive end and top overall pick"
    }
  ],
  "MAR": [
    {
      "name": "Randy Moss",
      "years": "1996-1997",
      "note": "the Hall of Fame receiver"
    },
    {
      "name": "Chad Pennington",
      "years": "1995-1999",
      "note": "the record-setting quarterback"
    },
    {
      "name": "Byron Leftwich",
      "years": "1998-2002",
      "note": "the quarterback of the program's comeback era"
    },
    {
      "name": "Troy Brown",
      "years": "1990-1992",
      "note": "the receiver and Patriots great"
    },
    {
      "name": "Bob Pruett",
      "years": "coach, 1996-2004",
      "note": "led the dominant 1990s Herd"
    }
  ],
  "HAW": [
    {
      "name": "Colt Brennan",
      "years": "2005-2007",
      "note": "the record-setting quarterback of the undefeated 2007 team"
    },
    {
      "name": "Timmy Chang",
      "years": "2000-2004",
      "note": "once college football's all-time passing yards leader"
    },
    {
      "name": "Ashley Lelie",
      "years": "1999-2001",
      "note": "the star receiver and first-round pick"
    },
    {
      "name": "Davone Bess",
      "years": "2005-2007",
      "note": "the prolific slot receiver"
    },
    {
      "name": "Al Noga",
      "years": "1984-1987",
      "note": "the All-American defensive lineman"
    }
  ],
  "ARM": [
    {
      "name": "Earl Blaik",
      "years": "coach, 1941-1958",
      "note": "won three national titles in the 1940s"
    },
    {
      "name": "Doc Blanchard",
      "years": "1944-1946",
      "note": "the 1945 Heisman winner, \"Mr. Inside.\""
    },
    {
      "name": "Glenn Davis",
      "years": "1943-1946",
      "note": "the 1946 Heisman winner, \"Mr. Outside.\""
    },
    {
      "name": "Pete Dawkins",
      "years": "1955-1958",
      "note": "the 1958 Heisman winner and Rhodes Scholar"
    }
  ],
  "NAV": [
    {
      "name": "Roger Staubach",
      "years": "1961-1964",
      "note": "the 1963 Heisman winner and the last academy player ever to win it, later a Hall of Fame pro"
    },
    {
      "name": "Joe Bellino",
      "years": "1958-1960",
      "note": "the 1960 Heisman winner, one of the academy's most beloved players"
    },
    {
      "name": "Napoleon McCallum",
      "years": "1981-1985",
      "note": "the record-setting back who starred while carrying his service"
    },
    {
      "name": "Keenan Reynolds",
      "years": "2012-2015",
      "note": "the option quarterback who rewrote the record book in the modern era"
    }
  ],
  "AIR": [
    {
      "name": "Fisher DeBerry",
      "years": "coach, 1984-2006",
      "note": "the winningest coach in program history"
    },
    {
      "name": "Chad Hennings",
      "years": "1984-1987",
      "note": "the Outland Trophy winner and future fighter pilot"
    },
    {
      "name": "Dee Dowis",
      "years": "1986-1989",
      "note": "the record-setting option quarterback"
    },
    {
      "name": "Steve Russ",
      "years": "1991-1994",
      "note": "the All-American linebacker"
    }
  ],
  "BYU": [
    {
      "name": "LaVell Edwards",
      "years": "coach, 1972-2000",
      "note": "the passing-offense pioneer who won the 1984 title"
    },
    {
      "name": "Steve Young",
      "years": "1981-1983",
      "note": "the Hall of Fame quarterback"
    },
    {
      "name": "Jim McMahon",
      "years": "1977-1981",
      "note": "the record-setting, Super Bowl-winning quarterback"
    },
    {
      "name": "Ty Detmer",
      "years": "1988-1991",
      "note": "the 1990 Heisman winner"
    },
    {
      "name": "Robbie Bosco",
      "years": "1983-1985",
      "note": "the quarterback who led the 1984 national title"
    }
  ],
  "WVU": [
    {
      "name": "Sam Huff",
      "years": "1952-1955",
      "note": "the lineman and linebacker who became a Hall of Fame pro and a face of the program"
    },
    {
      "name": "Major Harris",
      "years": "1987-1989",
      "note": "the electric quarterback of the 1988 unbeaten regular season"
    },
    {
      "name": "Pat White",
      "years": "2005-2008",
      "note": "ran the spread option to three straight bowl wins"
    },
    {
      "name": "Steve Slaton",
      "years": "2005-2007",
      "note": "the explosive back of the mid-2000s peak"
    },
    {
      "name": "Tavon Austin",
      "years": "2009-2012",
      "note": "the all-purpose weapon who could score from anywhere"
    }
  ],
  "ARK": [
    {
      "name": "Frank Broyles",
      "years": "coach, 1957-1976",
      "note": "won the 1964 national title and became a legendary athletic director"
    },
    {
      "name": "Lance Alworth",
      "years": "1959-1961",
      "note": "the Hall of Fame receiver"
    },
    {
      "name": "Dan Hampton",
      "years": "1975-1978",
      "note": "the Hall of Fame defensive lineman"
    },
    {
      "name": "Billy Ray Smith Jr.",
      "years": "1979-1982",
      "note": "the All-American linebacker"
    },
    {
      "name": "Darren McFadden",
      "years": "2005-2007",
      "note": "the most decorated Razorback and two-time Heisman runner-up"
    }
  ],
  "ECU": [
    {
      "name": "Chris Johnson",
      "years": "2004-2007",
      "note": "the explosive back and future NFL star"
    },
    {
      "name": "David Garrard",
      "years": "1998-2001",
      "note": "the record-setting quarterback and NFL starter"
    },
    {
      "name": "Jeff Blake",
      "years": "1988-1991",
      "note": "the quarterback and long-time pro"
    },
    {
      "name": "Robert Jones",
      "years": "1988-1991",
      "note": "the linebacker and Super Bowl champion"
    }
  ],
  "WAZ": [
    {
      "name": "Drew Bledsoe",
      "years": "1990-1992",
      "note": "the number-one overall pick at quarterback"
    },
    {
      "name": "Ryan Leaf",
      "years": "1995-1997",
      "note": "the quarterback who led the 1997 Rose Bowl run"
    },
    {
      "name": "Gardner Minshew",
      "years": "2018",
      "note": "the mustachioed folk-hero quarterback"
    },
    {
      "name": "Marcus Trufant",
      "years": "1999-2002",
      "note": "the standout cornerback"
    },
    {
      "name": "Rueben Mayes",
      "years": "1982-1985",
      "note": "the record-setting running back"
    }
  ],
  "APP": [
    {
      "name": "Jerry Moore",
      "years": "coach, 1989-2012",
      "note": "won three straight FCS titles and beat Michigan"
    },
    {
      "name": "Armanti Edwards",
      "years": "2006-2009",
      "note": "the two-time Walter Payton Award-winning quarterback"
    },
    {
      "name": "Corey Lynch",
      "years": "2004-2007",
      "note": "the safety who blocked Michigan's final kick"
    },
    {
      "name": "Kevin Richardson",
      "years": "2004-2007",
      "note": "the all-time leading rusher"
    },
    {
      "name": "Dexter Jackson",
      "years": "2004-2007",
      "note": "the big-play receiver of the dynasty"
    }
  ],
  "VAT": [
    {
      "name": "Frank Beamer",
      "years": "coach, 1987-2015",
      "note": "the architect of Beamer Ball and 23 straight bowls"
    },
    {
      "name": "Michael Vick",
      "years": "1999-2000",
      "note": "the electric quarterback and Heisman runner-up"
    },
    {
      "name": "Bruce Smith",
      "years": "1981-1984",
      "note": "the Outland Trophy winner and Hall of Famer"
    },
    {
      "name": "Corey Moore",
      "years": "1997-1999",
      "note": "the Lombardi and Nagurski Award-winning defensive end"
    },
    {
      "name": "Kam Chancellor",
      "years": "2006-2009",
      "note": "the hard-hitting safety and NFL star"
    }
  ],
  "MST": [
    {
      "name": "Dak Prescott",
      "years": "2011-2015",
      "note": "the most decorated player in school history"
    },
    {
      "name": "Fletcher Cox",
      "years": "2009-2011",
      "note": "the dominant defensive tackle and NFL star"
    },
    {
      "name": "Jeffery Simmons",
      "years": "2016-2018",
      "note": "the disruptive defensive tackle"
    },
    {
      "name": "Eric Moulds",
      "years": "1993-1995",
      "note": "the record-setting receiver"
    },
    {
      "name": "Johnie Cooks",
      "years": "1978-1981",
      "note": "the All-American linebacker"
    }
  ],
  "COL": [
    {
      "name": "Bill McCartney",
      "years": "coach, 1982-1994",
      "note": "led the Buffs to the 1990 national title"
    },
    {
      "name": "Rashaan Salaam",
      "years": "1992-1994",
      "note": "the 1994 Heisman winner and 2,000-yard rusher"
    },
    {
      "name": "Kordell Stewart",
      "years": "1991-1994",
      "note": "the quarterback of the Miracle at Michigan"
    },
    {
      "name": "Alfred Williams",
      "years": "1987-1990",
      "note": "the Butkus Award-winning linebacker"
    },
    {
      "name": "Travis Hunter",
      "years": "2022-2024",
      "note": "the 2024 Heisman winner and two-way star"
    }
  ],
  "BOI": [
    {
      "name": "Chris Petersen",
      "years": "coach, 2006-2013",
      "note": "led the Fiesta Bowl era and back-to-back BCS busters"
    },
    {
      "name": "Kellen Moore",
      "years": "2008-2011",
      "note": "the winningest quarterback in FBS history"
    },
    {
      "name": "Ian Johnson",
      "years": "2005-2008",
      "note": "the running back of the 2007 Statue of Liberty"
    },
    {
      "name": "Ryan Clady",
      "years": "2005-2007",
      "note": "the All-American tackle and NFL star"
    },
    {
      "name": "Ashton Jeanty",
      "years": "2022-2024",
      "note": "the 2024 Heisman runner-up and record-setting rusher"
    }
  ],
  "MIA": [
    {
      "name": "Vinny Testaverde",
      "years": "1983-1986",
      "note": "the 1986 Heisman-winning quarterback"
    },
    {
      "name": "Michael Irvin",
      "years": "1985-1987",
      "note": "the Hall of Fame receiver"
    },
    {
      "name": "Warren Sapp",
      "years": "1991-1994",
      "note": "the Hall of Fame defensive tackle"
    },
    {
      "name": "Ray Lewis",
      "years": "1993-1995",
      "note": "the Hall of Fame linebacker"
    },
    {
      "name": "Ed Reed",
      "years": "1998-2001",
      "note": "the Hall of Fame safety and 2001 champion"
    }
  ],
  "UCF": [
    {
      "name": "Daunte Culpepper",
      "years": "1995-1998",
      "note": "the star quarterback and NFL Pro Bowler"
    },
    {
      "name": "Blake Bortles",
      "years": "2011-2013",
      "note": "the third overall NFL draft pick"
    },
    {
      "name": "McKenzie Milton",
      "years": "2016-2018",
      "note": "the quarterback of the undefeated 2017 team"
    },
    {
      "name": "Kevin Smith",
      "years": "2005-2007",
      "note": "the record-setting running back"
    },
    {
      "name": "Shaquem Griffin",
      "years": "2013-2017",
      "note": "the one-handed All-American linebacker"
    }
  ],
  "SMU": [
    {
      "name": "Doak Walker",
      "years": "1945-1949",
      "note": "the 1948 Heisman winner the running-back award is named for"
    },
    {
      "name": "Eric Dickerson",
      "years": "1979-1982",
      "note": "the Hall of Fame Pony Express back"
    },
    {
      "name": "Craig James",
      "years": "1979-1982",
      "note": "the other half of the Pony Express"
    },
    {
      "name": "Forrest Gregg",
      "years": "1953-1955",
      "note": "the Hall of Fame offensive lineman"
    },
    {
      "name": "Raymond Berry",
      "years": "1952-1954",
      "note": "the Hall of Fame receiver"
    }
  ],
  "STA": [
    {
      "name": "Jim Plunkett",
      "years": "1968-1970",
      "note": "the 1970 Heisman winner"
    },
    {
      "name": "John Elway",
      "years": "1979-1982",
      "note": "the Hall of Fame quarterback"
    },
    {
      "name": "Andrew Luck",
      "years": "2009-2011",
      "note": "the two-time Heisman runner-up and number-one pick"
    },
    {
      "name": "Christian McCaffrey",
      "years": "2013-2016",
      "note": "the record-setting all-purpose back"
    },
    {
      "name": "John Lynch",
      "years": "1989-1992",
      "note": "the Hall of Fame safety"
    }
  ],
  "GAT": [
    {
      "name": "John Heisman",
      "years": "coach, 1904-1919",
      "note": "the 1917 national title and the trophy's namesake"
    },
    {
      "name": "Calvin Johnson",
      "years": "2004-2006",
      "note": "the record-setting Hall of Fame receiver"
    },
    {
      "name": "Joe Hamilton",
      "years": "1996-1999",
      "note": "the 1999 Heisman runner-up quarterback"
    },
    {
      "name": "Keith Brooking",
      "years": "1994-1997",
      "note": "the All-American linebacker and long-time NFL star"
    },
    {
      "name": "Pat Swilling",
      "years": "1982-1985",
      "note": "the dominant edge rusher"
    }
  ],
  "VAN": [
    {
      "name": "Jay Cutler",
      "years": "2002-2005",
      "note": "the star quarterback and NFL Pro Bowler"
    },
    {
      "name": "Zach Cunningham",
      "years": "2014-2016",
      "note": "the program's first unanimous All-American"
    },
    {
      "name": "Jordan Matthews",
      "years": "2010-2013",
      "note": "the record-setting receiver"
    },
    {
      "name": "Will Wolford",
      "years": "1982-1985",
      "note": "the All-American offensive lineman"
    },
    {
      "name": "Diego Pavia",
      "years": "2024-2025",
      "note": "the quarterback who led the program's historic rise"
    }
  ],
  "WAS": [
    {
      "name": "Don James",
      "years": "coach, 1975-1992",
      "note": "the Dawgfather and 1991 national title"
    },
    {
      "name": "Warren Moon",
      "years": "1975-1977",
      "note": "the Hall of Fame quarterback"
    },
    {
      "name": "Steve Emtman",
      "years": "1989-1991",
      "note": "the dominant defensive tackle and number-one pick"
    },
    {
      "name": "Hugh McElhenny",
      "years": "1949-1951",
      "note": "the Hall of Fame running back"
    },
    {
      "name": "Michael Penix Jr.",
      "years": "2022-2023",
      "note": "the quarterback of the 2023 title-game run"
    }
  ],
  "TCU": [
    {
      "name": "Sammy Baugh",
      "years": "1934-1936",
      "note": "the Pro Football Hall of Fame quarterback"
    },
    {
      "name": "Davey O'Brien",
      "years": "1936-1938",
      "note": "the 1938 Heisman winner and namesake of the quarterback award"
    },
    {
      "name": "Bob Lilly",
      "years": "1958-1960",
      "note": "the Hall of Fame defensive tackle"
    },
    {
      "name": "LaDainian Tomlinson",
      "years": "1997-2000",
      "note": "the Hall of Fame running back and NFL MVP"
    },
    {
      "name": "Andy Dalton",
      "years": "2007-2010",
      "note": "the quarterback of the undefeated 2010 team"
    }
  ],
  "OKS": [
    {
      "name": "Barry Sanders",
      "years": "1986-1988",
      "note": "the 1988 Heisman winner and greatest season in the sport's history"
    },
    {
      "name": "Thurman Thomas",
      "years": "1984-1987",
      "note": "the Hall of Fame running back"
    },
    {
      "name": "Bob Fenimore",
      "years": "1943-1946",
      "note": "the Blond Bomber and early Cowboy star"
    },
    {
      "name": "Leslie O'Neal",
      "years": "1982-1985",
      "note": "the All-American defensive end"
    },
    {
      "name": "Terry Miller",
      "years": "1974-1977",
      "note": "the two-time All-American and 1977 Heisman runner-up"
    }
  ],
  "MSU": [
    {
      "name": "Bubba Smith",
      "years": "1964-1966",
      "note": "the dominant defensive end of the 1960s title teams"
    },
    {
      "name": "George Webster",
      "years": "1964-1966",
      "note": "the two-time All-American rover"
    },
    {
      "name": "Lorenzo White",
      "years": "1984-1987",
      "note": "the record-setting running back and Heisman finalist"
    },
    {
      "name": "Kirk Cousins",
      "years": "2008-2011",
      "note": "the record-setting quarterback"
    },
    {
      "name": "Le'Veon Bell",
      "years": "2010-2012",
      "note": "the star running back"
    }
  ],
  "TTU": [
    {
      "name": "Patrick Mahomes",
      "years": "2014-2016",
      "note": "the record-setting quarterback and NFL MVP"
    },
    {
      "name": "Michael Crabtree",
      "years": "2007-2008",
      "note": "the two-time All-American receiver"
    },
    {
      "name": "Wes Welker",
      "years": "2000-2003",
      "note": "the do-everything slot receiver and returner"
    },
    {
      "name": "Zach Thomas",
      "years": "1992-1995",
      "note": "the All-American linebacker and longtime NFL star"
    },
    {
      "name": "Donny Anderson",
      "years": "1963-1965",
      "note": "the College Football Hall of Fame running back"
    }
  ],
  "TUL": [
    {
      "name": "Shaun King",
      "years": "1995-1998",
      "note": "the quarterback of the undefeated 1998 team"
    },
    {
      "name": "Matt Forte",
      "years": "2004-2007",
      "note": "the star NFL running back"
    },
    {
      "name": "Patrick Ramsey",
      "years": "1998-2001",
      "note": "the record-setting quarterback"
    },
    {
      "name": "Michael Pratt",
      "years": "2020-2023",
      "note": "the quarterback of the 2022 Cotton Bowl comeback"
    },
    {
      "name": "Jerry Dalrymple",
      "years": "1929-1931",
      "note": "the unanimous All-American and College Football Hall of Famer"
    }
  ],
  "CST": [
    {
      "name": "Josh Norman",
      "years": "2008-2011",
      "note": "the NFL All-Pro cornerback"
    },
    {
      "name": "Grayson McCall",
      "years": "2019-2022",
      "note": "the record-setting quarterback and 2020 star"
    },
    {
      "name": "Jamey Chadwell",
      "years": "coach, 2017-2022",
      "note": "the architect of the 2020 Cinderella run"
    },
    {
      "name": "CJ Marable",
      "years": "2018-2021",
      "note": "the dynamic running back"
    }
  ]
};

const vitalStats = {
  "IND": {
    "nickname": "Hoosiers",
    "founded": "1887",
    "stadium": "Memorial Stadium",
    "city": "Bloomington, IN",
    "capacity": "53,524",
    "colors": "Crimson, cream",
    "conference": "Big Ten"
  },
  "ALA": {
    "nickname": "Crimson Tide",
    "founded": "1892",
    "stadium": "Bryant-Denny Stadium (Saban Field)",
    "city": "Tuscaloosa, AL",
    "capacity": "100,077",
    "colors": "Crimson, white",
    "conference": "SEC"
  },
  "UGA": {
    "nickname": "Bulldogs",
    "founded": "1892",
    "stadium": "Dooley Field at Sanford Stadium (Between the Hedges)",
    "city": "Athens, GA",
    "capacity": "93,033",
    "colors": "Red, black",
    "conference": "SEC"
  },
  "OSU": {
    "nickname": "Buckeyes",
    "founded": "1890",
    "stadium": "Ohio Stadium (The Horseshoe)",
    "city": "Columbus, OH",
    "capacity": "102,780",
    "colors": "Scarlet, gray",
    "conference": "Big Ten"
  },
  "OKL": {
    "nickname": "Sooners",
    "founded": "1895",
    "stadium": "Gaylord Family Oklahoma Memorial Stadium (The Palace on the Prairie)",
    "city": "Norman, OK",
    "capacity": "80,126",
    "colors": "Crimson, cream",
    "conference": "SEC"
  },
  "MIC": {
    "nickname": "Wolverines",
    "founded": "1879",
    "stadium": "Michigan Stadium (The Big House)",
    "city": "Ann Arbor, MI",
    "capacity": "107,601",
    "colors": "Maize, blue",
    "conference": "Big Ten"
  },
  "TEX": {
    "nickname": "Longhorns",
    "founded": "1893",
    "stadium": "Darrell K Royal-Texas Memorial Stadium",
    "city": "Austin, TX",
    "capacity": "100,119",
    "colors": "Burnt orange, white",
    "conference": "SEC"
  },
  "NDM": {
    "nickname": "Fighting Irish",
    "founded": "1887",
    "stadium": "Notre Dame Stadium (The House that Rockne Built)",
    "city": "Notre Dame, IN",
    "capacity": "77,622",
    "colors": "Navy, gold",
    "conference": "Independent"
  },
  "USC": {
    "nickname": "Trojans",
    "founded": "1888",
    "stadium": "Los Angeles Memorial Coliseum",
    "city": "Los Angeles, CA",
    "capacity": "77,500",
    "colors": "Cardinal, gold",
    "conference": "Big Ten"
  },
  "FLA": {
    "nickname": "Gators",
    "founded": "1906",
    "stadium": "Steve Spurrier-Florida Field at Ben Hill Griffin Stadium (The Swamp)",
    "city": "Gainesville, FL",
    "capacity": "88,548",
    "colors": "Orange, blue",
    "conference": "SEC"
  },
  "FSU": {
    "nickname": "Seminoles",
    "founded": "1947",
    "stadium": "Bobby Bowden Field at Doak Campbell Stadium",
    "city": "Tallahassee, FL",
    "capacity": "67,277",
    "colors": "Garnet, gold",
    "conference": "ACC"
  },
  "PSU": {
    "nickname": "Nittany Lions",
    "founded": "1887",
    "stadium": "Beaver Stadium",
    "city": "University Park, PA",
    "capacity": "106,572",
    "colors": "Navy, white",
    "conference": "Big Ten"
  },
  "CLM": {
    "nickname": "Tigers",
    "founded": "1896",
    "stadium": "Memorial Stadium (Death Valley)",
    "city": "Clemson, SC",
    "capacity": "81,500",
    "colors": "Orange, regalia",
    "conference": "ACC"
  },
  "ORE": {
    "nickname": "Ducks",
    "founded": "1894",
    "stadium": "Autzen Stadium",
    "city": "Eugene, OR",
    "capacity": "54,000",
    "colors": "Green, yellow",
    "conference": "Big Ten"
  },
  "LSU": {
    "nickname": "Tigers",
    "founded": "1893",
    "stadium": "Tiger Stadium (Death Valley)",
    "city": "Baton Rouge, LA",
    "capacity": "102,321",
    "colors": "Purple, gold",
    "conference": "SEC"
  },
  "TEN": {
    "nickname": "Volunteers",
    "founded": "1891",
    "stadium": "Neyland Stadium",
    "city": "Knoxville, TN",
    "capacity": "101,915",
    "colors": "Orange, white",
    "conference": "SEC"
  },
  "AUB": {
    "nickname": "Tigers",
    "founded": "1892",
    "stadium": "Jordan-Hare Stadium (Pat Dye Field)",
    "city": "Auburn, AL",
    "capacity": "88,043",
    "colors": "Burnt orange, navy",
    "conference": "SEC"
  },
  "OLE": {
    "nickname": "Rebels",
    "founded": "1893",
    "stadium": "Vaught-Hemingway Stadium",
    "city": "Oxford, MS",
    "capacity": "64,038",
    "colors": "Navy, red",
    "conference": "SEC"
  },
  "SCA": {
    "nickname": "Gamecocks",
    "founded": "1892",
    "stadium": "Williams-Brice Stadium (The Cockpit)",
    "city": "Columbia, SC",
    "capacity": "77,559",
    "colors": "Garnet, black",
    "conference": "SEC"
  },
  "IOW": {
    "nickname": "Hawkeyes",
    "founded": "1847",
    "stadium": "Kinnick Stadium",
    "city": "Iowa City, IA",
    "capacity": "69,250",
    "colors": "Black, gold",
    "conference": "Big Ten"
  },
  "KSU": {
    "nickname": "Wildcats",
    "founded": "1863",
    "stadium": "Bill Snyder Family Stadium",
    "city": "Manhattan, KS",
    "capacity": "50,000",
    "colors": "Purple, white",
    "conference": "Big 12"
  },
  "WIS": {
    "nickname": "Badgers",
    "founded": "1848",
    "stadium": "Camp Randall Stadium",
    "city": "Madison, WI",
    "capacity": "75,822",
    "colors": "Cardinal, white",
    "conference": "Big Ten"
  },
  "NEB": {
    "nickname": "Cornhuskers",
    "founded": "1869",
    "stadium": "Memorial Stadium (The Sea of Red)",
    "city": "Lincoln, NE",
    "capacity": "85,458",
    "colors": "Scarlet, cream",
    "conference": "Big Ten"
  },
  "TAM": {
    "nickname": "Aggies",
    "founded": "1876",
    "stadium": "Kyle Field",
    "city": "College Station, TX",
    "capacity": "102,733",
    "colors": "Maroon, white",
    "conference": "SEC"
  },
  "MAR": {
    "nickname": "Thundering Herd",
    "founded": "1837",
    "stadium": "Joan C. Edwards Stadium",
    "city": "Huntington, WV",
    "capacity": "~38,000",
    "colors": "Kelly green, white",
    "conference": "Sun Belt"
  },
  "HAW": {
    "nickname": "Rainbow Warriors",
    "founded": "1907",
    "stadium": "Clarence T.C. Ching Athletics Complex",
    "city": "Honolulu, HI",
    "capacity": "15,194",
    "colors": "Green, white",
    "conference": "Mountain West"
  },
  "ARM": {
    "nickname": "Black Knights",
    "founded": "1802",
    "stadium": "Michie Stadium",
    "city": "West Point, NY",
    "capacity": "~38,000",
    "colors": "Black, gold, gray",
    "conference": "American"
  },
  "NAV": {
    "nickname": "Midshipmen",
    "founded": "1879",
    "stadium": "Navy-Marine Corps Memorial Stadium",
    "city": "Annapolis, MD",
    "capacity": "34,000",
    "colors": "Navy blue, gold",
    "conference": "American"
  },
  "AIR": {
    "nickname": "Falcons",
    "founded": "1954",
    "stadium": "Falcon Stadium",
    "city": "USAF Academy, CO",
    "capacity": "39,441",
    "colors": "Blue, silver",
    "conference": "Mountain West"
  },
  "BYU": {
    "nickname": "Cougars",
    "founded": "1875",
    "stadium": "LaVell Edwards Stadium",
    "city": "Provo, UT",
    "capacity": "63,470",
    "colors": "Navy, white",
    "conference": "Big 12"
  },
  "WVU": {
    "nickname": "Mountaineers",
    "founded": "1891",
    "stadium": "Milan Puskar Stadium (Mountaineer Field)",
    "city": "Morgantown, WV",
    "capacity": "60,000",
    "colors": "Old gold, blue",
    "conference": "Big 12",
    "titles": "0"
  },
  "ARK": {
    "nickname": "Razorbacks",
    "founded": "1871",
    "stadium": "Donald W. Reynolds Razorback Stadium",
    "city": "Fayetteville, AR",
    "capacity": "~76,000",
    "colors": "Cardinal, white",
    "conference": "SEC"
  },
  "ECU": {
    "nickname": "Pirates",
    "founded": "1907",
    "stadium": "Dowdy-Ficklen Stadium",
    "city": "Greenville, NC",
    "capacity": "50,000",
    "colors": "Purple, gold",
    "conference": "American"
  },
  "WAZ": {
    "nickname": "Cougars",
    "founded": "1890",
    "stadium": "Martin Stadium",
    "city": "Pullman, WA",
    "capacity": "32,952",
    "colors": "Crimson, gray",
    "conference": "Pac-12"
  },
  "APP": {
    "nickname": "Mountaineers",
    "founded": "1899",
    "stadium": "Kidd Brewer Stadium (The Rock)",
    "city": "Boone, NC",
    "capacity": "~30,000",
    "colors": "Black, gold",
    "conference": "Sun Belt"
  },
  "VAT": {
    "nickname": "Hokies",
    "founded": "1872",
    "stadium": "Lane Stadium",
    "city": "Blacksburg, VA",
    "capacity": "65,632",
    "colors": "Maroon, orange",
    "conference": "ACC"
  },
  "MST": {
    "nickname": "Bulldogs",
    "founded": "1878",
    "stadium": "Davis Wade Stadium at Scott Field",
    "city": "Starkville, MS",
    "capacity": "60,311",
    "colors": "Maroon, white",
    "conference": "SEC"
  },
  "COL": {
    "nickname": "Buffaloes",
    "founded": "1876",
    "stadium": "Folsom Field",
    "city": "Boulder, CO",
    "capacity": "50,183",
    "colors": "Black, gold",
    "conference": "Big 12"
  },
  "BOI": {
    "nickname": "Broncos",
    "founded": "1932",
    "stadium": "Albertsons Stadium (The Blue)",
    "city": "Boise, ID",
    "capacity": "~36,000",
    "colors": "Blue, orange",
    "conference": "Pac-12"
  },
  "MIA": {
    "nickname": "Hurricanes",
    "founded": "1925",
    "stadium": "Hard Rock Stadium",
    "city": "Miami Gardens, FL",
    "capacity": "64,767",
    "colors": "Orange, green, white",
    "conference": "ACC"
  },
  "UCF": {
    "nickname": "Knights",
    "founded": "1963",
    "stadium": "Acrisure Bounce House",
    "city": "Orlando, FL",
    "capacity": "45,301",
    "colors": "Black, gold",
    "conference": "Big 12"
  },
  "SMU": {
    "nickname": "Mustangs",
    "founded": "1911",
    "stadium": "Gerald J. Ford Stadium",
    "city": "Dallas, TX",
    "capacity": "~32,000",
    "colors": "Red, blue",
    "conference": "ACC"
  },
  "STA": {
    "nickname": "Cardinal",
    "founded": "1891",
    "stadium": "Stanford Stadium",
    "city": "Stanford, CA",
    "capacity": "50,424",
    "colors": "Cardinal, white",
    "conference": "ACC"
  },
  "GAT": {
    "nickname": "Yellow Jackets",
    "founded": "1885",
    "stadium": "Bobby Dodd Stadium",
    "city": "Atlanta, GA",
    "capacity": "55,000",
    "colors": "Old gold, white, navy",
    "conference": "ACC"
  },
  "VAN": {
    "nickname": "Commodores",
    "founded": "1873",
    "stadium": "FirstBank Stadium",
    "city": "Nashville, TN",
    "capacity": "35,000",
    "colors": "Black, gold",
    "conference": "SEC"
  },
  "WAS": {
    "nickname": "Huskies",
    "founded": "1889",
    "stadium": "Husky Stadium",
    "city": "Seattle, WA",
    "capacity": "~70,000",
    "colors": "Purple, gold",
    "conference": "Big Ten"
  },
  "TCU": {
    "nickname": "Horned Frogs",
    "founded": "1873",
    "stadium": "Amon G. Carter Stadium",
    "city": "Fort Worth, TX",
    "capacity": "46,000",
    "colors": "Purple, white",
    "conference": "Big 12"
  },
  "OKS": {
    "nickname": "Cowboys",
    "founded": "1890",
    "stadium": "Boone Pickens Stadium",
    "city": "Stillwater, OK",
    "capacity": "~55,000",
    "colors": "Orange, black",
    "conference": "Big 12"
  },
  "MSU": {
    "nickname": "Spartans",
    "founded": "1855",
    "stadium": "Spartan Stadium",
    "city": "East Lansing, MI",
    "capacity": "~75,000",
    "colors": "Green, white",
    "conference": "Big Ten"
  },
  "TTU": {
    "nickname": "Red Raiders",
    "founded": "1923",
    "stadium": "Jones AT&T Stadium",
    "city": "Lubbock, TX",
    "capacity": "~60,000",
    "colors": "Scarlet, black",
    "conference": "Big 12"
  },
  "TUL": {
    "nickname": "Green Wave",
    "founded": "1834",
    "stadium": "Yulman Stadium",
    "city": "New Orleans, LA",
    "capacity": "~30,000",
    "colors": "Green, blue",
    "conference": "American"
  },
  "CST": {
    "nickname": "Chanticleers",
    "founded": "1954",
    "stadium": "Brooks Stadium",
    "city": "Conway, SC",
    "capacity": "21,000",
    "colors": "Teal, bronze",
    "conference": "Sun Belt"
  }
};

const nearlyGot = {
  "IND": {
    "TCU": "Two seasons apart, both of you crashed a title game nobody had invited you to. TCU's ended in a rout and a return to normal. Yours ended with the trophy. Choose TCU if the thrill for you is the crashing rather than the winning.",
    "WAS": "Washington also climbed from ordinary to a national final in a hurry, and also did it in a league it had only just joined. But Washington had Don James and a trophy already in the cabinet to climb back toward. You had nothing behind you at all.",
    "KSU": "Bill Snyder took a program that could not win and made it win, which is the sentence people now write about Bloomington. Kansas State's version took decades of patient construction. Yours took two seasons and a coach who announced it in advance.",
    "BOI": "Blue turf, a trick play, a nation watching a school it could not place on a map. Boise State spent twenty years knocking and never quite got in. You knocked once and the door came off its hinges.",
  },
  "ALA": {
    "UGA": "The one program that caught you is Georgia, a dynasty built this century specifically to beat you at your own game. Yours is older, with more titles and more decades behind it. If your whole sense of the standard was set after 2020, you are describing Georgia, not Alabama.",
    "OSU": "Ohio State shares your refusal to call anything but a title a success, except where your version carries Southern gravity, theirs is a Midwestern industrial birthright, a whole region that treats winning as its due. The tell is the accent on the expectation. When it sounds like the Rust Belt rather than the Deep South, that is Ohio State.",
    "CLM": "Clemson took the machine you built and proved an outsider could run it too, crashing a party you had hosted for a decade. You are the blueprint; they are the proof it copies. If your rise ever felt like an upstart making a point rather than a blueblood defending a throne, Clemson fits you better.",
    "PSU": "Where you turn heavy process into trophies, Penn State turns the same discipline and loyalty into a standard it holds through the lean years, faith that outlasts the winning. That patience is what sets them apart. If you kept believing without the constant payoff, you belong with Penn State."
  },
  "UGA": {
    "ALA": "Alabama is the measuring stick you spent a generation chasing and finally caught, the older standard whose six-title dynasties set the bar you now clear. Theirs came first and runs deeper, yours is the fresher juggernaut. If your version of the standard predates this century, you are describing Alabama.",
    "OSU": "Ohio State shares your reload-and-contend expectation, only its dominance is a Midwestern industrial inheritance rather than a wait finally rewarded. You know what the drought felt like and they mostly do not. If your confidence never had to survive decades of near-misses, that is Ohio State.",
    "OKL": "Oklahoma matches your blueblood pedigree and your place as a proud program's whole identity, yet its glory years sit further back while yours are right now. Recency is the divider. If the trophy case is heavy but the last title is a while ago, lean Oklahoma.",
    "CLM": "Clemson, like you, built a modern machine on culture and total buy-in and crashed the bluebloods' party. The difference is address: Clemson did it from outside the traditional power base, you from deep inside the SEC. If your rise came as an outsider proving it belonged, that is Clemson."
  },
  "OSU": {
    "MIC": "Michigan is the team up north, the rival who has taken the last several meetings and gotten under your skin like no one else can. You answer with titles and they answer with wins in The Game. If the rivalry itself matters more to you than the trophy that followed, you may actually be Michigan.",
    "UGA": "Georgia carries the same reload-and-contend swagger, though its dominance is a recent SEC creation and yours a decades-old Midwestern birthright. Age of the empire is the tell. If your standard was forged in the last five years, that is Georgia.",
    "OKL": "Oklahoma matches your role as a football-obsessed state's one true team, but its championship glory sits deeper in the past than yours. Recency divides you. If the pride outruns the recent results, lean Oklahoma.",
    "ALA": "Alabama shares your refusal to count anything but a title as success, wrapped in Southern gravity rather than Rust Belt pride. Same standard, different accent. If the expectation speaks with a drawl, that is Alabama."
  },
  "OKL": {
    "TEX": "Texas is the enemy on the other end of the Red River, the rival you meet every October at a neutral field split down the middle in crimson and orange. You share blueblood pedigree and a giant home-state footprint, and the hatred is what makes you certain. If the swagger reads more brash than proud, that is Texas.",
    "OSU": "Ohio State mirrors your place as a football-mad state's one true team, only its recent title keeps its glory fresher than yours. Timing separates you. If the last championship came this decade, that is Ohio State.",
    "UGA": "Georgia matches your reload-and-contend pedigree, but its dynasty is a right-now machine while yours is a deep and decorated history. Recency is the divide. If the dominance is a current event, lean Georgia.",
    "ALA": "Alabama shares your identity as a decorated dynasty that treats winning as a birthright, with a title count and a modern run even you have to respect. Sustained recency is the tell. If the machine has hummed without pause into the present, that is Alabama."
  },
  "MIC": {
    "OSU": "Ohio State is the team down south, the rival whose games decide your whole season and whose success you measure yourself against most. You trade blows with them like no one else, and they own more recent titles. If the trophy count matters more to you than the rivalry win, you might be Ohio State.",
    "PSU": "Penn State shares your Big Ten gravity, your stadium-shaking tradition, and your stoic, blue-collar pride. Where yours is backed by the sport's deepest record, theirs still hunts the crown that would validate it. If the tradition is heavy but the title is unfinished business, that is Penn State.",
    "NDM": "Notre Dame carries the same old-money mystique and refusal to bend to anyone, a program that answers to no conference and trades on history. The split is geography: your pride is rooted in a place, theirs in a national faith. If your following is spread across the whole country rather than one state, lean Notre Dame.",
    "ALA": "Alabama matches your blueblood pedigree and your habit of setting the standard, though its identity leans on a modern dynasty while yours leans on a century of accumulated wins. Era is the divider. If the pride comes from a recent run of titles rather than the all-time ledger, that is Alabama."
  },
  "TEX": {
    "OKL": "Oklahoma is your Red River enemy, the rival you meet at a neutral stadium torn straight down the middle every October. You share blueblood status and a giant footprint, and their pride leans on a deeper trophy case than yours. If the certainty comes from history rather than sheer scale, that is Oklahoma.",
    "FLA": "Florida matches your flagship-state swagger and high-flying flavor, a program that can dazzle one year and coast the next just like you. The divide is whose golden era ran more recently. If the peak feels more Gainesville than Austin, lean Florida.",
    "USC": "USC shares your glamour, your brand power, and your sense that the sport should revolve around you. Theirs is Hollywood, yours is the biggest state in the lower forty-eight. If the spotlight is Californian rather than Texan, that is USC.",
    "UGA": "Georgia carries the same enormous expectations, but it has converted them into a right-now dynasty while yours has more often been potential and promise. Delivery is the tell. If the titles are recent and stacked, you are describing Georgia."
  },
  "NDM": {
    "USC": "USC is your oldest and grandest rival, a program that shares your glamour, your Heisman-stuffed history, and your independent streak of self-regard. Yours is a national faith, theirs is Hollywood cool. If the mystique wears sunglasses, that is USC.",
    "MIC": "Michigan shares your century of tradition and your refusal to bow to anyone, a fellow keeper of the sport's oldest flames. The split is roots: Michigan's pride is planted in a state, yours in a scattered national following. If your devotion has a home address, lean Michigan.",
    "ALA": "Alabama matches your loyalty and your mountain of history, but its faithful are a region's people while yours are the whole country's. Geography is the tell. If the passion is Deep South rather than coast-to-coast, that is Alabama.",
    "PSU": "Penn State, like you, is tradition-first and independent-minded, carrying the same ache of a crown that has not come in a while. The difference is the shape of the following: theirs a devoted regional army, yours a national congregation. If the faithful fill one valley rather than the whole country, you are describing Penn State."
  },
  "USC": {
    "NDM": "Notre Dame is your oldest intersectional rival, the other program built on glamour, Heismans, and an unshakable sense of destiny. Yours is Hollywood; theirs is a national faith with a Golden Dome. If the mystique feels churchlike rather than sunlit, that is Notre Dame.",
    "TEX": "Texas matches your brand power and your assumption that the sport should orbit you, only its swagger is fueled by state pride and sheer scale rather than star wattage. Origin of the ego is the tell. If the bigness is about Texas being Texas, that is the Longhorns.",
    "ORE": "Oregon took your flash and modernized it, all uniforms and speed and Nike shine, but without the mountain of trophies and Heismans you have banked. History is what separates you. If the style is dazzling and the trophy case still light, lean Oregon.",
    "FSU": "Florida State shares your appetite for flash and star power and playing the villain in prime time. Theirs comes with a garnet chip on the shoulder; yours with West Coast cool. If the swagger carries a grievance, that is Florida State."
  },
  "FLA": {
    "FSU": "Florida State is your bitter in-state enemy, the garnet half of a rivalry that splits families down the middle. You share flash and pride; they carry a grievance where you carry swagger. If the edge is a chip on the shoulder rather than a strut, that is Florida State.",
    "TEX": "Texas shares your loud, flashy, big-brand personality, but its size and certainty flow from state and wealth while yours were forged in the SEC's weekly gauntlet. Where the swagger comes from is the divide. If it is scale rather than survival, lean Texas.",
    "UGA": "Georgia is the rival you meet every fall in Jacksonville for a game with its own cocktail-party legend. You dazzle in bursts; they grind you down with a machine that reloads. If the identity is relentless rather than electric, that is Georgia.",
    "USC": "USC matches your flash and your appetite for the spotlight, trading the Swamp's brutal heat for California cool. Climate of the glamour is the tell. If the shine is sunny rather than sweaty, you are describing USC."
  },
  "FSU": {
    "FLA": "Florida is your in-state tormentor, the orange-and-blue half of a rivalry with no love in it. They play with swagger; you play with a grudge. If the mood is a strut rather than a score to settle, that is Florida.",
    "MIA": "Miami is your oldest partner in prime-time chaos, the flash-and-attitude rival from the era when your two programs owned the sport. Theirs is Miami swagger; yours is a garnet chip. If the flash comes with beachfront cool rather than a grievance, lean Miami.",
    "CLM": "Clemson took the culture-and-recruiting road to an ACC dynasty the way you once did, only its machine hummed while yours cratered and clawed back. Stability is the divide. If the build stayed steady and never broke, that is Clemson.",
    "USC": "USC shares your love of flash, stars, and playing the villain under the lights. Theirs is West Coast glamour; yours is a program that feels perpetually wronged. If the swagger lacks the grievance, you are describing USC."
  },
  "PSU": {
    "OSU": "Ohio State is the Big Ten measuring stick you circle every year, the blueblood you have to get past to matter nationally. They collect titles; you hold a standard and keep grinding toward one. If the trophies have actually arrived, that is Ohio State.",
    "MIC": "Michigan shares your Big Ten weight, your stoic pride, and your tradition-first soul, only its identity rests on the sport's deepest pile of wins. Where yours is honor and process, theirs is the all-time ledger. If the pride comes from history's record book, lean Michigan.",
    "CLM": "Clemson built the same kind of family-and-culture program you believe in, buy-in over flash, but converted it into recent titles you are still chasing. Payoff is the divide. If the culture already cashed in trophies, that is Clemson.",
    "NDM": "Notre Dame carries the same tradition-first devotion and the same long title ache, except its faithful are scattered nationwide while yours pack one valley. Address of the faith is the tell. If the following is a coast-to-coast congregation rather than a Happy Valley army, you are describing Notre Dame."
  },
  "CLM": {
    "ALA": "Alabama is the empire you dethroned, the standard-setter you beat twice on the sport's biggest stage. Theirs is the blueprint and the deeper dynasty; yours is the program that proved the blueprint could be beaten. If the identity is the king rather than the challenger, that is Alabama.",
    "UGA": "Georgia built its own culture-and-recruiting juggernaut, only it did so as an SEC insider while you crashed the party from the ACC. Address of the rise is the divide. If the dominance came from inside the establishment, lean Georgia.",
    "PSU": "Penn State shares your family-first, buy-in-over-flash soul, but its title is still unfinished business while yours are banked and recent. Payoff is the tell. If the culture is deep and the crown still missing, that is Penn State.",
    "OSU": "Ohio State runs the kind of reload-and-contend machine you built, backed by a century of blueblood pedigree you had to manufacture from scratch. Length of the lineage separates you. If the greatness was inherited rather than constructed, you are describing Ohio State."
  },
  "ORE": {
    "USC": "USC is the older, glossier version of your glamour, the West Coast brand that actually banked the Heismans and titles you are still chasing. Trophies are the divide. If the flash comes with a full case behind it, that is USC.",
    "MIA": "Miami shares your flash, your speed, and your swagger, trading your Nike-lab futurism for South Beach cool and a chip earned in the 1980s. Flavor of the flash is the tell. If the style is beachfront rather than laboratory, lean Miami.",
    "TEX": "Texas matches your ambition and your love of a spectacle, but its bigness is rooted in state and money while yours is rooted in style and reinvention. Source of the scale separates you. If the swagger is Texan pride rather than Nike shine, that is Texas.",
    "FLA": "Florida brings the same brash, high-tempo flash you love, forged in the SEC heat rather than a design studio. Where the edge was tempered is the divide. If the swagger came up through the Swamp, you are describing Florida."
  },
  "LSU": {
    "AUB": "Auburn shares your SEC fervor and your gift for a delirious home crowd, only it lives in the shadow of a bigger in-state rival while you answer to no one in Louisiana. Freedom from a giant next door is the tell. If the passion carries a chip, that is Auburn.",
    "TEN": "Tennessee brings the same sea of color and the same wall of noise, wrapped in nostalgia and a beloved song rather than raw Saturday-night menace. Where yours is a night-game eruption, theirs is a tradition sung. If the roar comes with 'Rocky Top' attached, lean Tennessee.",
    "ALA": "Alabama is the measuring stick you circle every November, the dynasty whose standard your best teams were built to topple. Theirs is cold machine efficiency; yours is heat and chaos. If the identity is the empire rather than the ambush, that is Alabama.",
    "WVU": "West Virginia loves as loudly and emotionally as you do, an entire state's team pouring everything into every fall. The difference is the trophy case: yours is full, theirs still waits. If the passion has never once been rewarded with a title, you are describing West Virginia."
  },
  "TEN": {
    "AUB": "Auburn matches your color-drenched crowds and your knack for a wild Saturday, but its whole identity bends around beating one in-state giant while yours is a broader Big Orange nostalgia. Focus of the passion is the tell. If it all comes back to one rival, that is Auburn.",
    "LSU": "LSU brings the same wall of noise, only its version is a raw night-game eruption where yours is a tradition sung across generations. Flavor of the roar separates you. If the loudest moment is menace rather than melody, lean LSU.",
    "UGA": "Georgia is the rival that finally turned its passion into trophies while yours still chases the next one. Recent hardware is the divide. If the yearning has actually been rewarded lately, that is Georgia.",
    "ARK": "Arkansas shares your loyal, loud, whole-region devotion and the same ache of watching the SEC's giants collect the prizes. The tell is the anthem: Arkansas calls the Hogs while you sing Rocky Top. If the sound is a pig call, you are describing Arkansas."
  },
  "AUB": {
    "ALA": "Alabama is the giant you were built against, the in-state dynasty whose shadow shaped your entire identity. Theirs is the crown; yours is the chip and the ambush. If you would rather be the empire than the underdog who topples it, that is Alabama.",
    "LSU": "LSU brings the same delirious SEC atmosphere, only it rules its state unchallenged while you fight for yours. Absence of a bigger rival is the tell. If the passion has no giant to define itself against, lean LSU.",
    "OLE": "Ole Miss shares your emotion and your love of a wild upset, but its Saturdays revolve around a charmed party under the oaks while yours revolve around a grudge. Mood is the divide. If the vibe is a celebration rather than a score to settle, that is Ole Miss.",
    "TEN": "Tennessee matches your color and your loyalty, wrapped in a nostalgic tradition rather than a next-door grievance. Source of the fire separates you. If the passion is a song and a memory rather than a chip, you are describing Tennessee."
  },
  "OLE": {
    "LSU": "LSU shares your Deep South passion and your appetite for a wild Saturday, only its Death Valley is raw menace where your Grove is a garden party. Setting of the chaos is the tell. If the wildness is a night-game roar rather than a tailgate, that is LSU.",
    "SCA": "South Carolina matches your love of the whole experience over the trophy count, pouring devotion into a program light on hardware. Yours has charm and a recent surge; theirs is pure stubborn loyalty. If the faith has almost nothing to show for it and shows up anyway, lean South Carolina.",
    "AUB": "Auburn brings the same emotion and the same taste for an upset, but it plays with a grudge against a giant while you play for the joy of it. Mood is the divide. If the edge is a chip rather than a celebration, that is Auburn.",
    "MST": "Mississippi State is your in-state enemy in the Egg Bowl, the cowbell-clanging blue-collar counterweight to your Oxford polish. Class of the setting separates you. If the identity is a grind in the pasture rather than a party in the Grove, you are describing Mississippi State."
  },
  "SCA": {
    "CLM": "Clemson is your in-state rival in the Palmetto Bowl, the orange half of a grudge that splits the whole state. They built a title machine; you built undying loyalty without the hardware. If the identity comes with trophies rather than yearning, that is Clemson.",
    "OLE": "Ole Miss shares your devotion to the whole experience over the win-loss column, pouring in passion regardless of the trophy case. The difference is momentum: Oxford has surged lately while your breakthrough still waits. If the faith has recently been rewarded, lean Ole Miss.",
    "TEN": "Tennessee matches your loud, loyal, show-up-anyway devotion, only it is chasing its way back to a glory it has actually tasted while you chase a first taste. History of the hunger is the tell. If the yearning is nostalgia for a title once held, that is Tennessee.",
    "COL": "Colorado knows your kind of long, thankless loyalty, decades of scraping for relevance while the faithful kept showing up. What sets them apart is that Colorado once stood on top of the sport, guarding a former glory rather than still awaiting a first. If the faith is protecting an old title, you are describing Colorado."
  },
  "IOW": {
    "KSU": "Kansas State is your process twin on the plains, another program that wins with discipline and grit over talent. Theirs is a from-nothing turnaround story; yours is quiet Midwestern consistency. If the identity is the underdog overachiever rather than the steady standard-bearer, that is Kansas State.",
    "WIS": "Wisconsin shares your Big Ten, fundamentals-first, no-nonsense soul, only it grinds you down by running the ball instead of playing complementary defense. Method is the tell. If the toughness shows up as a bruising ground game, lean Wisconsin.",
    "NEB": "Nebraska matches your Midwestern decency and your loyal, rooted following, wrapped around a fallen dynasty yours never was. History is the divide. If the faith is nursing five old national titles, you are describing Nebraska.",
    "AIR": "Air Force runs the same maxed-out precision and discipline you live by, aimed at a military mission rather than a Saturday grind. The difference is the register: theirs is service-academy pageantry, yours is heartland fundamentals. If the precision comes with flyovers, that is Air Force."
  },
  "KSU": {
    "IOW": "Iowa is your process kin, another program that beats better talent with discipline and structure. Theirs is polished, decades-deep consistency; yours is the scrappy climb out of nothing. If the fundamentals come without the underdog chip, that is Iowa.",
    "WIS": "Wisconsin shares your belief in the honest, physical, well-drilled build, only on a bigger stage with more hardware. Scale of the success separates you. If the toughness comes with Rose Bowls and a national brand, lean Wisconsin.",
    "IND": "Snyder's rebuild took seventeen years of recruiting players nobody wanted and coaching them up. Indiana's took two, a transfer portal, and a coach who told everyone in advance exactly what would happen. Same miracle, opposite method. Indiana is the version where the waiting was short.",
    "TCU": "TCU matches your identity as the overachiever who was never supposed to make it, clawing from mid-major roots into the big time. Flavor is the tell. If the rise is Texas swagger rather than purple family, that is TCU."
  },
  "WIS": {
    "IOW": "Iowa is your Big Ten neighbor in toughness and discipline, only it leans on complementary defense where you lean on the run. Method separates you. If the grind is fundamentals and field position rather than a pounding ground game, that is Iowa.",
    "KSU": "Kansas State shares your belief in the physical, well-coached, no-shortcuts build, without your national brand or bowl pedigree. Stage is the tell. If the toughness is a purple underdog climb rather than a proven bruiser, lean Kansas State.",
    "IND": "Wisconsin built its identity slowly, out of offensive lines and cold Novembers, a program that earned every inch of it. Indiana skipped the whole process, arrived from nowhere and took the trophy in a single perfect season. Same conference, opposite route.",
    "PSU": "Penn State runs the same disciplined, physical, tradition-rich program you do, with a bigger name and a louder national profile. If the blue-collar identity comes with a Northeastern blueblood's shine, that is Penn State."
  },
  "NEB": {
    "TAM": "Texas A&M matches your bottomless fan loyalty and your sense of the team as a community's shared possession. Theirs is the standing 12th Man and the Corps; yours is the Sea of Red and a sellout streak nobody can touch. If the tradition is military pageantry rather than heartland faith, that is Texas A&M.",
    "PSU": "Penn State shares your massive, devoted following and your belief in the disciplined, honest build. Where yours is prairie decency, theirs is Happy Valley blue-collar. If the huge fanbase packs a Northeastern valley rather than a plains capital, lean Penn State.",
    "WIS": "Wisconsin runs the same kind of workmanlike, ground-it-out, no-nonsense program you love, on a slightly smaller stage. Scale of the tradition is the divide. If the identity is solid and steady without the five banners, that is Wisconsin.",
    "IOW": "Iowa knows your brand of loyal, patient, defense-first football and Midwestern decency. The difference is the ceiling: your history holds titles theirs does not. If the faith has never quite reached the mountaintop, you are describing Iowa."
  },
  "TAM": {
    "NEB": "Nebraska is your mirror in fan loyalty, another program where the whole community treats the team as its own. Yours is a standing, military-tradition 12th Man; theirs is a Sea of Red and a record sellout streak. If the devotion runs through the heartland rather than the Corps, that is Nebraska.",
    "TEX": "Texas is your renewed in-state rival, the Longhorn giant to your maroon. They lead with swagger and star power; you lead with unity and tradition. If the identity is bravado rather than brotherhood, lean Texas.",
    "PSU": "Penn State shares your belief in the collective over the individual, the plain-jersey ethos to your standing 12th Man. Flavor of the tradition is the tell. If the discipline reads Northeastern blue-collar rather than Texas military, that is Penn State.",
    "UGA": "Georgia runs the same kind of deep-community, process-driven program you admire, only it converted that culture into recent national titles. Trophies are the divide. If the loyalty comes with a stack of rings, you are describing Georgia."
  },
  "MAR": {
    "WVU": "West Virginia is your kin in the mountains, another emotional, rooted, whole-state program that pours its heart into the team. Theirs runs wild and rowdy; yours runs deep and resilient. If the passion is a party rather than a promise, that is West Virginia.",
    "HAW": "Hawaii shares your maxed-out community and roots, a beloved local team that means everything to the place it represents. Setting is the tell. If the devotion belongs to an island rather than a river valley, lean Hawaii.",
    "ECU": "East Carolina knows your kind of underdog love, an emotional, tight-knit fanbase that shows up regardless of the standings. The difference is the story: yours is forged by tragedy and rebuilding, theirs by pure grassroots loyalty. If the heart comes without the history, you are describing East Carolina.",
    "APP": "Appalachian State matches your small-school passion and your rooted, mountain-town identity, with a giant-slaying streak instead of a resurrection tale. If the underdog pride is about upsets rather than endurance, that is Appalachian State."
  },
  "HAW": {
    "MAR": "Marshall shares your maxed-out community and roots, a beloved local team woven completely into the place it plays. Yours is island isolation and aloha; theirs is a river-valley resurrection. If the devotion belongs to Appalachia rather than the Pacific, that is Marshall.",
    "ARK": "Arkansas knows what it means to be the only game around, a whole region's emotional, rooted team. Terrain is the tell. If the only-team-for-miles pride belongs to a state calling the Hogs rather than an island, lean Arkansas.",
    "WVU": "West Virginia matches your isolated, fiercely loyal, emotional fanbase that pours everything into its team. The difference is the flavor: yours is warm and wide-open, theirs is rowdy and hard-edged. If the passion runs mountain-wild, you are describing West Virginia.",
    "BOI": "Boise State shares your mid-major magic, the outsider that shocked the sport with a dream season and a wide-open style. If the underdog run happened on blue turf in the high desert rather than an island, that is Boise State."
  },
  "ARM": {
    "NAV": "Navy is your other half, the academy rival you measure your whole year against. You carry the tradition of the Long Gray Line; they carry the swagger of a proven winner. If the identity leans on being undeniable rather than being faithful to the line, that is Navy.",
    "AIR": "Air Force completes the service-academy trio, sharing your discipline, your option offense, and your code of duty. Branch is the tell. If the precision comes with flyovers and parachutes rather than the Hudson and the Corps, lean Air Force.",
    "BYU": "BYU matches your values-first, disciplined, deeply communal identity, only its code is faith rather than the uniform. Source of the discipline separates you. If the honor comes from a church rather than an oath of service, you are describing BYU.",
    "TAM": "Texas A&M shares your Corps of Cadets, your military tradition, and your standing-all-game devotion, on a far bigger stage. If the discipline is Texas pageantry rather than West Point duty, that is Texas A&M."
  },
  "NAV": {
    "ARM": "Army is the mirror across the field: the same iron discipline, the same brotherhood, an entire service behind eleven players. What separates the two of you is the scoreboard between you, and there you hold the edge and never let it rest. If your pride lives in the Long Gray Line and the tradition carried forward more than in the record, you are Army.",
    "AIR": "Air Force runs on the same precision and service and the same ruthless option, but it is the youngest of the three academies, still a step outside the oldest rivalry you sit dead center of. Age and place are the tell. When the discipline flies instead of sails, that is Air Force.",
    "BYU": "BYU shares your faith, your community, and a code that comes before any game, except the belief underneath it is a religious mission carried nationwide rather than a military one. Church, not fleet. If the shared creed gathers in a chapel instead of a wardroom, you belong with BYU.",
    "KSU": "Kansas State wins the way you do, out-executing rather than out-recruiting and trusting the system over the stars, only its identity grew from the family and grind of the plains instead of the brigade and the fleet. If the discipline is agricultural rather than martial, Kansas State is your match."
  },
  "AIR": {
    "NAV": "Navy is a fellow service academy that runs your option and shares your code, only it leans on a proven-winner swagger where you lean on precision. Attitude is the tell. If the identity is undeniable rather than exact, that is Navy.",
    "ARM": "Army completes the academy trio, matching your discipline, duty, and option offense from the banks of the Hudson. Branch separates you. If the tradition is the Corps and the Long Gray Line rather than the sky, lean Army.",
    "IOW": "Iowa shares your maxed-out precision and your win-with-execution soul, aimed at a Saturday grind instead of a military mission. The difference is the setting: yours has flyovers, theirs has cornfields. If the discipline is heartland fundamentals, you are describing Iowa.",
    "GAT": "Georgia Tech runs the same exacting, engineering-minded, scheme-over-talent style you pride yourself on. If the precision is academic rather than military, that is Georgia Tech."
  },
  "BYU": {
    "NDM": "Notre Dame is your closest cousin in spirit, a faith-rooted program with a national following, a proud history, and real championship ambition. Yours is a Latter-day Saint community in the mountains; theirs is Catholic and independent. If the faith and the fame skew Fighting Irish, that is Notre Dame.",
    "TAM": "Texas A&M shares your maxed-out loyalty and community and your love of tradition and ambition. Source of the bond is the tell. If the togetherness comes from the Corps and Texas rather than faith and Provo, lean Texas A&M.",
    "NAV": "Navy matches your values-first discipline and your tight, principled community, only its code is service rather than religion. If the standard is an oath and a uniform instead of an honor code, you are describing Navy.",
    "NEB": "Nebraska knows your kind of huge, devoted, wholesome fanbase and your belief in the honest build. The difference is the anchor: yours is faith, theirs is the heartland. If the loyalty is a Sea of Red rather than a Cougar nation, that is Nebraska."
  },
  "WVU": {
    "ARK": "Arkansas is the other whole-state team with no pro rival for its heart, just as loud and loyal and a little wild as you are. They call the Hogs; you sing the crowd home. If the passion beats through the SEC instead of the mountains, that is Arkansas.",
    "ECU": "Like you, East Carolina loves hardest from the outside, defiant and proud of a place the bluebloods keep overlooking. They wear the underdog as a purple badge; you carry an entire state on your back. If you are mostly proving the little guy belongs, lean East Carolina.",
    "TTU": "Texas Tech matches your chaos and your volume and apologizes for neither, guns up into the West Texas night while you light up the hills. Same wildness, different country. When the noise rolls across the plains rather than down a holler, you are describing Texas Tech.",
    "COL": "Colorado has loved through the same kind of long, thankless drought you know, decades of scrapping for relevance without quitting. What sets you apart is that you never had a second option, the whole state only ever had you. If that stubborn faith was forged out West, it is Colorado."
  },
  "ARK": {
    "WVU": "West Virginia is your kindred spirit, another whole-state program pouring emotion into a team that is the only game around. They carry a wilder, rowdier edge and no national title; you have the 1964 crown and the hog call. If the devotion runs a little more untamed, that is West Virginia.",
    "MST": "Mississippi State shares your loyal, rooted, scrappy SEC-underdog soul, trading your hog call for a wall of cowbells. Sound of the faith is the tell. If the noise clangs rather than squeals, lean Mississippi State.",
    "TEN": "Tennessee brings the same loud, loyal, whole-region passion, only its identity leans on nostalgia for old national glory while yours leans on simply being all of Arkansas. Source of the pride separates you. If the yearning is for a bygone dynasty, that is Tennessee.",
    "LSU": "LSU matches your Deep South emotion and your packed, deafening Saturdays, but it rules its state as a title-winning power while you rally as the loyal underdog. Standing is the divide. If the passion comes with recent trophies, you are describing LSU."
  },
  "ECU": {
    "WAZ": "Washington State is your spiritual match on the other coast, another rowdy, emotional underdog that pours everything into a wide-open, unpredictable brand of football. Yours is pirate swagger; theirs is high-desert isolation and self-deprecating humor. If the passion comes from the middle of nowhere, that is Washington State.",
    "WVU": "West Virginia knows your rowdy, chaotic, whole-region devotion, only cranked up a notch wilder. Intensity is the tell. If the celebration involves burning couches rather than raising flags, lean West Virginia.",
    "APP": "Appalachian State is your neighbor up in the mountains, a plucky North Carolina underdog with the same giant-killer instinct. The difference is the resume: theirs is built on the biggest upset ever, yours on rowdy nights in Greenville. If the identity leans mountain fortress, that is Appalachian State.",
    "ARK": "Arkansas shares your loud, loyal, emotional soul and your love of being the whole area's team. If the rowdiness trades a pirate flag for a hog call and a bigger stage, you are describing Arkansas."
  },
  "WAZ": {
    "ECU": "East Carolina is your kindred rowdy underdog across the country, all emotion and wide-open, unpredictable football. Theirs is a pirate crew in the Carolina flatlands; yours is a crimson faithful on the Palouse. If the passion wears a skull-and-crossbones, that is East Carolina.",
    "HAW": "Hawaii shares your defining trait of glorious isolation, a beloved team a long way from everyone that its fans follow to the ends of the earth. Setting is the tell. If the remoteness is an island paradise rather than a wheat field, lean Hawaii.",
    "WVU": "West Virginia matches your emotional, loyal, whole-region devotion, with a rowdier and more intense edge. If the heartbreak runs hotter and the fans run wilder, you are describing West Virginia.",
    "ARK": "Arkansas knows your kind of loyal, emotional, we-are-all-there-is fandom, only on a bigger SEC stage with a title in the trophy case. If the devotion comes with a hog call and more history, that is Arkansas."
  },
  "APP": {
    "BOI": "Boise State is your fellow Cinderella, the mid-major everyone remembers for one impossible upset. Theirs came on blue turf against Oklahoma; yours came in the Big House against Michigan. If the giant-killing grew into a genuine national power, that is Boise State.",
    "MAR": "Marshall shares your identity as a beloved mountain school with a fierce, tight-knit following and a habit of punching up. The difference is the story: theirs is forged by tragedy and rebuilding, yours by upsets and titles. If the heart runs to resilience over giant-killing, lean Marshall.",
    "ECU": "East Carolina is your rowdy neighbor down the mountain, another North Carolina underdog that loves knocking off the big names. If the fortress trades elevation for a pirate flag, you are describing East Carolina.",
    "WVU": "West Virginia knows your mountain-town loyalty and your emotional, rooted fanbase, on a bigger stage with a wilder streak. If the identity is Appalachia at full, rowdy volume, that is West Virginia."
  },
  "VAT": {
    "WVU": "West Virginia is your old border rival, another emotional, loyal, mountain fanbase that lives and dies with its team. Theirs runs rowdier and wilder; yours channels the passion into an earthquake entrance and a lunch-pail defense. If the intensity tips into chaos, that is West Virginia.",
    "COL": "Colorado shares your emotional, ambitious, loyal-through-the-lean-years soul and a fanbase that never gave up on faded glory. Backdrop is the tell. If the mountains are the Rockies and the tradition is a live buffalo, lean Colorado.",
    "APP": "Appalachian State knows your kind of loud, rooted, mountain-fortress home-field devotion, on a smaller scale with a giant-killer streak. If the identity is the plucky upstart rather than the established power, you are describing Appalachian State.",
    "BOI": "Boise State matches your ambition and your knack for tough, well-coached, us-against-the-big-boys football. If the chip on the shoulder comes on blue turf instead of maroon and orange, that is Boise State."
  },
  "MST": {
    "OLE": "Ole Miss is your in-state enemy in the Egg Bowl, the Oxford polish to your Starkville grit. They throw the sport's fanciest party; you ring cowbells and grind. If the identity is silver platters rather than a wall of clanging noise, that is Ole Miss.",
    "ARK": "Arkansas shares your rooted, loyal, scrappy SEC-underdog heart, only its rallying sound is a hog call and its history holds a national title. Trophy case is the tell. If the faith comes with a 1964 crown and a squeal, lean Arkansas.",
    "WVU": "West Virginia knows your blue-collar toughness and your loyal, rooted fanbase, wrapped in a rowdier, more emotional edge. Temperature of the passion separates you. If the grit runs hotter and wilder, that is West Virginia.",
    "KSU": "Kansas State runs the same kind of unglamorous, hard-nosed, grind-it-out program you respect, built on toughness over talent. The difference is the register: theirs is quiet Plains discipline, yours is a deafening cowbell roar. If the grind is silent rather than clanging, you are describing Kansas State."
  },
  "COL": {
    "NEB": "Nebraska is your old Big Eight blood rival and your mirror in faded glory, a proud program whose faithful never left through a long fall from the top. Theirs is a Sea of Red and five titles; yours is Ralphie and one. If the fallen-giant devotion runs heartland rather than mile-high, that is Nebraska.",
    "VAT": "Virginia Tech shares your emotional, ambitious, loyal-through-the-lean-years spirit and a passionate, all-in fanbase. Setting is the tell. If the mountains are Appalachian and the entrance is Enter Sandman, lean Virginia Tech.",
    "WVU": "West Virginia knows your kind of stubborn, emotional loyalty to a team through thick and thin, with a rowdier, wilder streak. If the passion runs hotter and the wins matter more than the history, you are describing West Virginia.",
    "ARK": "Arkansas matches your loyal, emotional devotion and the long wait between big moments, poured into being a whole region's team. If the faithful call the Hogs instead of running a buffalo, that is Arkansas."
  },
  "BOI": {
    "APP": "Appalachian State is your fellow giant-killer, the mid-major everyone knows for one legendary upset. Theirs stunned Michigan in the Big House; yours stunned Oklahoma on blue turf. If the Cinderella story stayed a mountain underdog rather than a national power, that is Appalachian State.",
    "TCU": "TCU shares your arc exactly, the outsider that clawed from mid-major roots all the way to the big time and a playoff. Region is the tell. If the rise is Texas rather than the blue turf of Idaho, lean TCU.",
    "IND": "You spent two decades as the outsider who kept nearly breaking through and never quite did. Indiana was not even outside the door, it was in a different building, and then it walked in and won the whole thing. Indiana is what happens when the knocking finally works.",
    "KSU": "Kansas State matches your disciplined, well-coached, overachieving build, the program that wins by out-preparing bigger names. If the smart underdog plays on purple in the plains instead of blue in the mountains, that is Kansas State."
  },
  "MIA": {
    "FSU": "Florida State is your archrival and your equal in swagger, the other Florida power built on speed, flash, and championship attitude. Yours is the turnover chain and The U; theirs is the tomahawk chop and the spear. If the bravado wears garnet and gold, that is Florida State.",
    "UCF": "UCF is the brash upstart down the road that wants exactly what you have, crowning itself and daring the sport to argue. Pedigree is the tell. If the confidence comes without the five rings to back it, lean UCF.",
    "FLA": "Florida shares your emotional, star-studded, Sunshine State ambition, only with a broader, more mainstream fan empire. If the flash is Gainesville orange and blue rather than Miami orange and green, you are describing Florida.",
    "SMU": "SMU matches your ambition, flash, and love of the big stage, wrapped in Dallas money instead of South Florida heat. If the swagger is a redemption story rather than a dynasty, that is SMU."
  },
  "UCF": {
    "SMU": "SMU is your fellow ambitious upstart, a brash program that clawed its way into the big time and dares the bluebloods to notice. Theirs is a redemption story from the death penalty; yours is a self-made crown. If the audacity comes with Dallas money, that is SMU.",
    "MIA": "Miami is the in-state swagger you are chasing, the flashy program with the pedigree and the rings you crowned yourself without. The difference is the resume. If the confidence is backed by five actual titles, lean Miami.",
    "BOI": "Boise State knows your kind of mid-major defiance, the outsider that beat the big boys and refused to stay in its lane. If the breakthrough happened on blue turf rather than at a Disney parade, you are describing Boise State.",
    "TTU": "Texas Tech shares your wide-open, high-scoring, chip-on-the-shoulder energy on a bigger conference stage. If the brashness is West Texas rather than Orlando, that is Texas Tech."
  },
  "SMU": {
    "UCF": "UCF is your kindred upstart, another ambitious program elbowing its way to the big table and daring the establishment to stop it. Theirs is a self-declared crown; yours is a comeback from the dead. If the audacity is Orlando new money rather than Dallas old money, that is UCF.",
    "TCU": "TCU is your Dallas-Fort Worth rival and your parallel, the metroplex program that broke through to the big time first. Timing is the tell. If the mid-major rise wears purple and got there ahead of you, lean TCU.",
    "MIA": "Miami shares your flash, ambition, and love of the spotlight, backed by a dynasty you are still chasing. If the swagger comes with five rings instead of a resurrection, you are describing Miami.",
    "BOI": "Boise State matches your climb from the outside into genuine national relevance, the program that refused to stay small. If the rise is blue turf and mountain grit rather than a booster-fueled Dallas comeback, that is Boise State."
  },
  "STA": {
    "GAT": "Georgia Tech is your East Coast counterpart, the elite engineering school that wins with brains, scheme, and discipline over raw recruiting. Region and flavor are the tell. If the smarts come with a Ramblin' Wreck and an option offense, that is Georgia Tech.",
    "VAN": "Vanderbilt shares your identity as the academic outlier that competes with preparation over talent, only as a scrappy SEC underdog. If the brains play David to the sport's Goliaths rather than a physical power, lean Vanderbilt.",
    "IOW": "Iowa matches your disciplined, physical, run-it-and-win-the-trenches approach, minus the elite-university branding. If the process is heartland fundamentals rather than West Coast intellect, you are describing Iowa.",
    "WIS": "Wisconsin knows your love of a punishing ground game and a well-built offensive line, on a louder, more traditional stage. If the physicality comes without the academic edge and the goofy Tree, that is Wisconsin."
  },
  "GAT": {
    "STA": "Stanford is your West Coast twin, the elite tech-and-brains school that wins football with scheme and discipline. Setting is the tell. If the intellect comes with a goofy Tree and a bruising West Coast run game, that is Stanford.",
    "VAN": "Vanderbilt shares your academic pride and your identity as the smart underdog in a league of giants. If the brains play in the SEC without the option offense and the Ramblin' Wreck, lean Vanderbilt.",
    "NAV": "Navy matches your disciplined, precise, option-running, tradition-bound soul, only its code is military rather than engineering. If the precision comes with a service academy instead of a slide rule, you are describing Navy.",
    "IOW": "Iowa knows your kind of process-first, scheme-over-talent, fundamentally-sound football. If the discipline is heartland grind rather than Atlanta engineering, that is Iowa."
  },
  "VAN": {
    "STA": "Stanford is your West Coast twin, the other elite academic school playing big-time football with brains over brawn. Yours is a Southern giant-slayer story; theirs is a Silicon Valley one. If the campus trades Nashville for Palo Alto, that is Stanford.",
    "GAT": "Georgia Tech shares your identity as the engineer in a league of athletes, winning with scheme and smarts more than raw recruiting. Location of the brains is the tell. If the academic pride is built on engineering in Atlanta, lean Georgia Tech.",
    "IOW": "Iowa matches your patient, disciplined, wear-them-down style, the workmanlike approach that punches above its talent. The difference is the flavor: theirs is Midwestern grind, yours is academic underdog. If the method is blue-collar rather than brainy, that is Iowa.",
    "TEN": "Tennessee is your in-state giant, the orange behemoth you stunned on its own field in 2025. Everything about scale separates you: they are passion and tradition at full volume, you are the clever David. If the identity is the big brother rather than the upstart, you are describing Tennessee."
  },
  "WAS": {
    "TCU": "TCU is your balanced-riser counterpart, the loyal, all-around program that punched its way to the national title game as an underdog. Pedigree separates you. If the run to the final came without the championship history, lean TCU.",
    "ORE": "Oregon is your old Northwest rival, sharing your ambition and stage with a flashier, faster, more modern edge. If the identity leans neon and speed rather than tradition and a lakeside stadium, that is Oregon.",
    "OKS": "Oklahoma State matches your loyalty and steady ambition, rooted in a smaller town with a fierce local pride. If the devotion is Stillwater orange rather than Seattle purple, you are describing Oklahoma State.",
    "MSU": "Michigan State shares your Big Ten toughness and loyal, blue-collar following. If the pride comes with a chip against a blueblood next door rather than a scenic championship pedigree, that is Michigan State."
  },
  "TCU": {
    "WAS": "Washington is your balanced counterpart out west, the loyal all-around program that also ran to a national title game. History is the tell. If the run came with championship pedigree and a lakeside stadium, lean Washington.",
    "SMU": "SMU is your Dallas-Fort Worth rival, the metroplex program on a parallel climb back to the big time. Yours is a horned-frog gatecrash; theirs is a resurrection from the death penalty. If the rise is booster-fueled and red-and-blue, that is SMU.",
    "OKS": "Oklahoma State shares your loyal, balanced, Big 12 identity, only rooted more deeply in one proud small town. If the devotion is Stillwater orange rather than a purple gatecrash, you are describing Oklahoma State.",
    "BOI": "Boise State knows your mid-major defiance, the outsider that beat the big boys and refused to accept its assigned place. If the breakthrough happened on blue turf rather than in a horned-frog Rose Bowl, that is Boise State."
  },
  "OKS": {
    "TCU": "TCU is your Big 12 counterpart, the loyal, balanced program that keeps punching above its weight. If the pride comes with a horned-frog gatecrash of the national stage rather than Stillwater roots, lean TCU.",
    "OKL": "Oklahoma is the blueblood big brother you have measured yourself against for a century, sharing your state but not your underdog's chip. If the identity is crimson entitlement rather than orange defiance, that is Oklahoma.",
    "NEB": "Nebraska matches your loyal, rooted, heartland devotion, only on a bigger and more nostalgic scale. If the faith is red and tied to a bygone dynasty rather than orange and Barry Sanders, you are describing Nebraska.",
    "TTU": "Texas Tech shares your Big 12 identity and loyal regional passion with a wilder, higher-scoring streak. If the fun runs to tortillas and the Air Raid rather than quiet Cowboy pride, that is Texas Tech."
  },
  "MSU": {
    "IND": "Down the road in Bloomington they did the thing you have chased for years, and they did it having earned none of it first. You have Rose Bowls and a tradition to defend. Indiana had a losing record and nothing at all to lose.",
    "NEB": "Nebraska shares your loyal, blue-collar, Big Ten heartland faith through lean years. If the devotion is tied to a proud red past rather than a chip against the school next door, that is Nebraska.",
    "IOW": "Iowa matches your defense-first, disciplined, unglamorous Big Ten identity. If the toughness is heartland process without the little-brother edge, you are describing Iowa.",
    "WIS": "Wisconsin shares your physical, blue-collar Big Ten soul on a bigger, more established stage. If the grit comes without the underdog's grudge, that is Wisconsin."
  },
  "TTU": {
    "CST": "Coastal Carolina matches your quirky, chaotic, fun-first spirit, a program that revels in doing football differently. Scale is the tell. If the wildness is teal turf and mullets rather than tortillas and the Air Raid, lean Coastal Carolina.",
    "WVU": "West Virginia knows your loud, emotional, love-my-isolated-corner passion. If the chaos pours out of Appalachia rather than West Texas, you are describing West Virginia.",
    "OLE": "Ole Miss shares your fun-loving, high-scoring, big-personality streak, wrapped in Southern tradition. If the party is the Grove rather than Lubbock on a Saturday night, that is Ole Miss.",
    "OKS": "Oklahoma State shares your Big 12 roots and loyal regional pride, only calmer and more grounded. If the devotion is quiet Cowboy orange rather than raucous scarlet, that is Oklahoma State."
  },
  "TUL": {
    "VAN": "Vanderbilt is your academic kin, the elite private university that competes with brains and heart against bigger programs. If the classroom prestige plays in the SEC rather than New Orleans, lean Vanderbilt.",
    "STA": "Stanford shares your rare mix of top-tier academics and real football. If the brains come with a bruising West Coast run game rather than Gulf Coast resilience, you are describing Stanford.",
    "ECU": "East Carolina matches your tight-knit, community-first, regional devotion. If the loyalty is small-town Greenville rather than the rhythm of New Orleans, that is East Carolina.",
    "MAR": "Marshall knows your identity built on resilience, a program that has risen from being knocked down. If the comeback story is Appalachian rather than tied to a great American city, that is Marshall."
  },
  "CST": {
    "BOI": "Boise State is your colored-turf twin, the mid-major that beat the big boys on a field the whole sport recognizes. If the magic happens on blue turf with a longer track record, lean Boise State.",
    "APP": "Appalachian State shares your Sun Belt giant-killer spirit, the upstart that loves knocking off the establishment. If the fun is mountain grit rather than teal turf and mullets, you are describing Appalachian State.",
    "TTU": "Texas Tech matches your quirky, chaotic, do-it-our-own-way joy on a bigger conference stage. If the wildness is tortillas and the Air Raid rather than a teal Cinderella run, that is Texas Tech.",
    "ECU": "East Carolina knows your fun-loving, close-knit, underdog Group of Five heart. If the loyalty is Greenville purple rather than Conway teal, that is East Carolina."
  }
};

const scoring = {
  "cfb_q1": {
    "B": {
      "ALA": 2,
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "MIC": 2,
      "TEX": 2,
      "NDM": 2,
      "USC": 2,
      "FLA": 2,
      "FSU": 2,
      "PSU": 2,
      "MIA": 2,
      "WAS": 2
    },
    "C": {
      "CLM": 2,
      "WIS": 2,
      "TAM": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "STA": 2,
      "GAT": 2,
      "VAN": 2
    },
    "D": { "IND": 2,
      "ORE": 2,
      "KSU": 2,
      "APP": 2,
      "BOI": 2,
      "UCF": 2,
      "SMU": 2,
      "TCU": 2,
      "CST": 2
    },
    "A": {
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "OLE": 2,
      "SCA": 2,
      "IOW": 2,
      "NEB": 2,
      "MAR": 2,
      "HAW": 2,
      "BYU": 2,
      "WVU": 2,
      "ARK": 2,
      "ECU": 2,
      "WAZ": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "OKS": 2,
      "MSU": 2,
      "TTU": 2,
      "TUL": 2
    }
  },
  "cfb_q2": {
    "A": {
      "ALA": 2,
      "PSU": 2,
      "CLM": 2,
      "IOW": 2,
      "WIS": 2,
      "NEB": 2,
      "NAV": 2,
      "AIR": 2,
      "STA": 2,
      "GAT": 2
    },
    "C": { "IND": 2,
      "UGA": 2,
      "FSU": 2,
      "TEN": 2,
      "AUB": 2,
      "ARK": 2,
      "VAT": 2,
      "WAS": 2,
      "TCU": 2,
      "TUL": 2
    },
    "B": {
      "OSU": 2,
      "OKL": 2,
      "MIC": 2,
      "TEX": 2,
      "NDM": 2,
      "USC": 2,
      "FLA": 2,
      "LSU": 2,
      "BYU": 2,
      "MIA": 2
    },
    "D": {
      "ORE": 2,
      "OLE": 2,
      "SCA": 2,
      "KSU": 2,
      "TAM": 2,
      "MAR": 2,
      "HAW": 2,
      "ARM": 2,
      "WVU": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "MST": 2,
      "COL": 2,
      "BOI": 2,
      "UCF": 2,
      "SMU": 2,
      "VAN": 2,
      "OKS": 2,
      "MSU": 2,
      "TTU": 2,
      "CST": 2
    }
  },
  "cfb_q4": {
    "A": {
      "ALA": 2,
      "UGA": 2,
      "OSU": 2,
      "LSU": 2,
      "NAV": 2,
      "MSU": 2
    },
    "B": {
      "OKL": 2,
      "MIC": 2,
      "NDM": 2,
      "PSU": 2,
      "TEN": 2,
      "ARM": 2
    },
    "C": {
      "TEX": 2,
      "USC": 2,
      "FLA": 2,
      "FSU": 2,
      "ORE": 2,
      "OLE": 2,
      "MIA": 2,
      "UCF": 2,
      "STA": 2,
      "GAT": 2,
      "TTU": 2,
      "CST": 2
    },
    "E": {
      "CLM": 2,
      "NEB": 2,
      "TAM": 2,
      "HAW": 2,
      "BYU": 2,
      "ARK": 2
    },
    "D": { "IND": 2,
      "AUB": 2,
      "SCA": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "MAR": 2,
      "AIR": 2,
      "WVU": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "BOI": 2,
      "SMU": 2,
      "VAN": 2,
      "WAS": 2,
      "TCU": 2,
      "OKS": 2,
      "TUL": 2
    }
  },
  "cfb_q5": {
    "E": {
      "ALA": 2,
      "USC": 2,
      "ORE": 2
    },
    "A": {
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "TEX": 2,
      "FLA": 2,
      "FSU": 2,
      "LSU": 2,
      "TEN": 2,
      "TAM": 2,
      "MAR": 2,
      "WVU": 2,
      "ARK": 2,
      "VAT": 2,
      "TCU": 2,
      "TTU": 2
    },
    "B": {
      "MIC": 2,
      "NDM": 2,
      "PSU": 2,
      "CLM": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "STA": 2,
      "GAT": 2,
      "WAS": 2
    },
    "D": {
      "AUB": 2,
      "ECU": 2,
      "APP": 2,
      "BOI": 2,
      "MIA": 2,
      "UCF": 2,
      "SMU": 2,
      "OKS": 2,
      "MSU": 2
    },
    "C": { "IND": 2,
      "OLE": 2,
      "SCA": 2,
      "NEB": 2,
      "HAW": 2,
      "WAZ": 2,
      "MST": 2,
      "COL": 2,
      "VAN": 2,
      "TUL": 2,
      "CST": 2
    }
  },
  "cfb_q7": {
    "C": {
      "ALA": 2,
      "MIC": 2,
      "NDM": 2,
      "CLM": 2,
      "TAM": 2,
      "HAW": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "BOI": 2,
      "STA": 2,
      "GAT": 2,
      "VAN": 2,
      "TUL": 2
    },
    "A": {
      "UGA": 2,
      "OKL": 2,
      "PSU": 2,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "SCA": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "NEB": 2,
      "MAR": 2,
      "WVU": 2,
      "ARK": 2,
      "WAZ": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "WAS": 2,
      "MSU": 2
    },
    "B": {
      "OSU": 2,
      "TEX": 2,
      "USC": 2,
      "FLA": 2,
      "FSU": 2,
      "ORE": 2,
      "OLE": 2,
      "MIA": 2,
      "SMU": 2,
      "OKS": 2,
      "TTU": 2
    },
    "D": { "IND": 2,
      "ECU": 2,
      "APP": 2,
      "UCF": 2,
      "TCU": 2,
      "CST": 2
    }
  },
  "cfb_q8": {
    "B": {
      "ALA": 2,
      "UGA": 2,
      "OKL": 2,
      "TEX": 2,
      "NDM": 2,
      "USC": 2,
      "FLA": 2,
      "FSU": 2,
      "PSU": 2,
      "LSU": 2,
      "TEN": 2,
      "OLE": 2,
      "MIA": 2
    },
    "A": {
      "OSU": 2,
      "MIC": 2,
      "AUB": 2,
      "SCA": 2,
      "ARM": 2,
      "NAV": 2,
      "MST": 2,
      "GAT": 2,
      "WAS": 2,
      "OKS": 2,
      "MSU": 2
    },
    "C": { "IND": 2,
      "CLM": 2,
      "ORE": 2,
      "KSU": 2,
      "MAR": 2,
      "AIR": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "VAT": 2,
      "COL": 2,
      "BOI": 2,
      "UCF": 2,
      "SMU": 2,
      "TCU": 2,
      "TTU": 2,
      "TUL": 2,
      "CST": 2
    },
    "D": {
      "IOW": 2,
      "WIS": 2,
      "NEB": 2,
      "TAM": 2,
      "HAW": 2,
      "BYU": 2,
      "WVU": 2,
      "ARK": 2,
      "STA": 2,
      "VAN": 2
    }
  },
  "cfb_q10": {
    "B": {
      "ALA": 2,
      "MIC": 2,
      "NDM": 2,
      "IOW": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "STA": 2,
      "GAT": 2
    },
    "A": {
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "TEX": 2,
      "FLA": 2,
      "PSU": 2,
      "LSU": 2,
      "TEN": 2,
      "SCA": 2,
      "NEB": 2,
      "TAM": 2,
      "MAR": 2,
      "WVU": 2,
      "ARK": 2,
      "VAT": 2,
      "MST": 2,
      "WAS": 2,
      "TTU": 2
    },
    "C": {
      "USC": 2,
      "CLM": 2,
      "ORE": 2,
      "OLE": 2,
      "WIS": 2,
      "HAW": 2,
      "WAZ": 2,
      "VAN": 2,
      "TUL": 2,
      "CST": 2
    },
    "D": { "IND": 2,
      "FSU": 2,
      "AUB": 2,
      "KSU": 2,
      "ECU": 2,
      "APP": 2,
      "COL": 2,
      "BOI": 2,
      "MIA": 2,
      "UCF": 2,
      "SMU": 2,
      "TCU": 2,
      "OKS": 2,
      "MSU": 2
    }
  },
  "cfb_q11": {
    "B": {
      "ALA": 2,
      "OSU": 2,
      "MIC": 2,
      "NDM": 2,
      "USC": 2
    },
    "A": { "IND": 2,
      "UGA": 2,
      "OKL": 2,
      "TEX": 2,
      "FLA": 2,
      "FSU": 2,
      "PSU": 2,
      "CLM": 2,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "OLE": 2,
      "SCA": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "NEB": 2,
      "TAM": 2,
      "MAR": 2,
      "HAW": 2,
      "WVU": 2,
      "ARK": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "BOI": 2,
      "GAT": 2,
      "WAS": 2,
      "TCU": 2,
      "OKS": 2,
      "MSU": 2,
      "TTU": 2,
      "TUL": 2
    },
    "D": {
      "ORE": 2,
      "MIA": 2,
      "UCF": 2,
      "SMU": 2,
      "CST": 2
    },
    "C": {
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "STA": 2,
      "VAN": 2
    }
  },
  "cfb_q12": {
    "B": {
      "ALA": 2,
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "MIC": 2,
      "TEX": 2,
      "FLA": 2,
      "FSU": 2,
      "WAS": 2
    },
    "A": {
      "NDM": 2,
      "PSU": 2,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "SCA": 2,
      "IOW": 2,
      "NEB": 2,
      "TAM": 2,
      "ARM": 2,
      "BYU": 2,
      "WVU": 2,
      "ARK": 2,
      "VAT": 2,
      "COL": 2,
      "MSU": 2
    },
    "E": {
      "USC": 2,
      "MIA": 2
    },
    "D": { "IND": 2,
      "CLM": 2,
      "ORE": 2,
      "KSU": 2,
      "WIS": 2,
      "NAV": 2,
      "AIR": 2,
      "ECU": 2,
      "APP": 2,
      "BOI": 2,
      "UCF": 2,
      "SMU": 2,
      "STA": 2,
      "GAT": 2,
      "TCU": 2,
      "OKS": 2,
      "TUL": 2
    },
    "C": {
      "OLE": 2,
      "MAR": 2,
      "HAW": 2,
      "WAZ": 2,
      "MST": 2,
      "VAN": 2,
      "TTU": 2,
      "CST": 2
    }
  },
  "cfb_q3": {
      "3": { "BOI": 2, "VAT": 2, "OKS": 2, "TCU": 2, "MSU": 2, "TAM": 2, "WAS": 2, "MSS": 2, "NEB": 2, "ARK": 2, "FLA": 2, "TUL": 2, "MAR": 2 },
    "1": {
      "TEX": 3,
      "USC": 3,
      "FLA": 3,
      "FSU": 3,
      "ORE": 3,
      "LSU": 3,
      "TEN": 3,
      "AUB": 3,
      "OLE": 3,
      "SCA": 3,
      "MAR": 3,
      "HAW": 3,
      "WVU": 3,
      "ARK": 3,
      "ECU": 3,
      "WAZ": 3,
      "APP": 3,
      "VAT": 3,
      "COL": 3,
      "MIA": 3,
      "UCF": 3,
      "SMU": 3,
      "TCU": 3,
      "OKS": 3,
      "MSU": 3,
      "TTU": 3,
      "TUL": 3,
      "CST": 3
    },
    "2": {
      "TEX": 2,
      "USC": 2,
      "FLA": 2,
      "FSU": 2,
      "ORE": 2,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "OLE": 2,
      "SCA": 2,
      "MAR": 2,
      "HAW": 2,
      "WVU": 2,
      "ARK": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "VAT": 2,
      "COL": 2,
      "MIA": 2,
      "UCF": 2,
      "SMU": 2,
      "TCU": 2,
      "OKS": 2,
      "MSU": 2,
      "TTU": 2,
      "TUL": 2,
      "CST": 2
    },
    "4": { "IND": 2,
      "ALA": 2,
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "MIC": 2,
      "NDM": 2,
      "PSU": 2,
      "CLM": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "NEB": 2,
      "TAM": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "MST": 2,
      "BOI": 2,
      "STA": 2,
      "GAT": 2,
      "VAN": 2,
      "WAS": 2
    },
    "5": { "IND": 3,
      "ALA": 3,
      "UGA": 3,
      "OSU": 3,
      "OKL": 3,
      "MIC": 3,
      "NDM": 3,
      "PSU": 3,
      "CLM": 3,
      "IOW": 3,
      "KSU": 3,
      "WIS": 3,
      "NEB": 3,
      "TAM": 3,
      "ARM": 3,
      "NAV": 3,
      "AIR": 3,
      "BYU": 3,
      "MST": 3,
      "BOI": 3,
      "STA": 3,
      "GAT": 3,
      "VAN": 3,
      "WAS": 3
    }
  },
  "cfb_q6": {
      "3": { "OLE": 2, "TAM": 2, "CLM": 2, "TEN": 2, "WAS": 2, "FSU": 2, "OKS": 2, "TCU": 2, "MSU": 2, "BYU": 2, "ARK": 2, "BOI": 2, "SCA": 2, "MIA": 2 },
    "1": {
      "ALA": 3,
      "UGA": 3,
      "OSU": 3,
      "OKL": 3,
      "MIC": 3,
      "TEX": 3,
      "NDM": 3,
      "FSU": 3,
      "PSU": 3,
      "CLM": 3,
      "LSU": 3,
      "TEN": 3,
      "AUB": 3,
      "SCA": 3,
      "IOW": 3,
      "KSU": 3,
      "WIS": 3,
      "NEB": 3,
      "TAM": 3,
      "MAR": 3,
      "HAW": 3,
      "ARM": 3,
      "NAV": 3,
      "AIR": 3,
      "BYU": 3,
      "WVU": 3,
      "ARK": 3,
      "ECU": 3,
      "WAZ": 3,
      "VAT": 3,
      "MST": 3,
      "COL": 3,
      "GAT": 3,
      "WAS": 3,
      "TCU": 3,
      "MSU": 3
    },
    "2": {
      "ALA": 2,
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "MIC": 2,
      "TEX": 2,
      "NDM": 2,
      "FSU": 2,
      "PSU": 2,
      "CLM": 2,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "SCA": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "NEB": 2,
      "TAM": 2,
      "MAR": 2,
      "HAW": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "WVU": 2,
      "ARK": 2,
      "ECU": 2,
      "WAZ": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "GAT": 2,
      "WAS": 2,
      "TCU": 2,
      "MSU": 2
    },
    "4": { "IND": 2,
      "USC": 2,
      "FLA": 2,
      "ORE": 2,
      "OLE": 2,
      "APP": 2,
      "BOI": 2,
      "MIA": 2,
      "UCF": 2,
      "SMU": 2,
      "STA": 2,
      "VAN": 2,
      "OKS": 2,
      "TTU": 2,
      "TUL": 2,
      "CST": 2
    },
    "5": { "IND": 3,
      "USC": 3,
      "FLA": 3,
      "ORE": 3,
      "OLE": 3,
      "APP": 3,
      "BOI": 3,
      "MIA": 3,
      "UCF": 3,
      "SMU": 3,
      "STA": 3,
      "VAN": 3,
      "OKS": 3,
      "TTU": 3,
      "TUL": 3,
      "CST": 3
    }
  },
  "cfb_q9": {
      "3": { "LSU": 2, "OSU": 2, "OKL": 2, "MIC": 2, "TEN": 2, "AUB": 2, "UGA": 2, "OLE": 2, "NDM": 2, "FLA": 2, "SCA": 2, "TTU": 2, "FSU": 2, "CLM": 2, "IND": 2 },
    "1": { "IND": 3,
      "UGA": 3,
      "OSU": 3,
      "OKL": 3,
      "MIC": 3,
      "NDM": 3,
      "FLA": 3,
      "PSU": 3,
      "CLM": 3,
      "LSU": 3,
      "TEN": 3,
      "AUB": 3,
      "OLE": 3,
      "SCA": 3,
      "IOW": 3,
      "KSU": 3,
      "WIS": 3,
      "NEB": 3,
      "TAM": 3,
      "MAR": 3,
      "HAW": 3,
      "ARM": 3,
      "NAV": 3,
      "AIR": 3,
      "BYU": 3,
      "WVU": 3,
      "ARK": 3,
      "ECU": 3,
      "WAZ": 3,
      "APP": 3,
      "VAT": 3,
      "MST": 3,
      "COL": 3,
      "BOI": 3,
      "GAT": 3,
      "WAS": 3,
      "TCU": 3,
      "OKS": 3,
      "MSU": 3,
      "TTU": 3,
      "TUL": 3
    },
    "2": { "IND": 2,
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "MIC": 2,
      "NDM": 2,
      "FLA": 2,
      "PSU": 2,
      "CLM": 2,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "OLE": 2,
      "SCA": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "NEB": 2,
      "TAM": 2,
      "MAR": 2,
      "HAW": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "WVU": 2,
      "ARK": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "BOI": 2,
      "GAT": 2,
      "WAS": 2,
      "TCU": 2,
      "OKS": 2,
      "MSU": 2,
      "TTU": 2,
      "TUL": 2
    },
    "4": {
      "ALA": 2,
      "TEX": 2,
      "USC": 2,
      "FSU": 2,
      "ORE": 2,
      "MIA": 2,
      "UCF": 2,
      "SMU": 2,
      "STA": 2,
      "VAN": 2,
      "CST": 2
    },
    "5": {
      "ALA": 3,
      "TEX": 3,
      "USC": 3,
      "FSU": 3,
      "ORE": 3,
      "MIA": 3,
      "UCF": 3,
      "SMU": 3,
      "STA": 3,
      "VAN": 3,
      "CST": 3
    }
  }
};

const teamDims = {
  "IND": { "loyalty": 6, "emotion": 8, "ambition": 9, "process": 9, "community": 7, "chaos": 2, "rootedness": 3 },
  "ALA": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 10,
    "process": 10,
    "community": 7,
    "chaos": 2,
    "rootedness": 8
  },
  "UGA": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 10,
    "process": 8,
    "community": 8,
    "chaos": 4,
    "rootedness": 8
  },
  "OSU": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 10,
    "process": 8,
    "community": 8,
    "chaos": 4,
    "rootedness": 9
  },
  "OKL": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 10,
    "process": 8,
    "community": 8,
    "chaos": 4,
    "rootedness": 9
  },
  "MIC": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 9,
    "process": 7,
    "community": 7,
    "chaos": 3,
    "rootedness": 9
  },
  "TEX": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 10,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 8
  },
  "NDM": {
    "loyalty": 10,
    "emotion": 7,
    "ambition": 9,
    "process": 7,
    "community": 6,
    "chaos": 4,
    "rootedness": 6
  },
  "USC": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 9,
    "process": 6,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "FLA": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 9,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 7
  },
  "FSU": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 9,
    "process": 6,
    "community": 6,
    "chaos": 6,
    "rootedness": 6
  },
  "PSU": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 8,
    "process": 9,
    "community": 8,
    "chaos": 3,
    "rootedness": 8
  },
  "CLM": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 9,
    "process": 9,
    "community": 9,
    "chaos": 3,
    "rootedness": 8
  },
  "ORE": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 9,
    "process": 6,
    "community": 5,
    "chaos": 7,
    "rootedness": 4
  },
  "LSU": {
    "loyalty": 9,
    "emotion": 10,
    "ambition": 9,
    "process": 5,
    "community": 8,
    "chaos": 8,
    "rootedness": 9
  },
  "TEN": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 8,
    "process": 5,
    "community": 8,
    "chaos": 7,
    "rootedness": 8
  },
  "AUB": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 8,
    "process": 5,
    "community": 8,
    "chaos": 8,
    "rootedness": 8
  },
  "OLE": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 7,
    "process": 4,
    "community": 8,
    "chaos": 8,
    "rootedness": 8
  },
  "SCA": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 4,
    "community": 8,
    "chaos": 8,
    "rootedness": 8
  },
  "IOW": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 5,
    "process": 10,
    "community": 9,
    "chaos": 2,
    "rootedness": 9
  },
  "KSU": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 5,
    "process": 9,
    "community": 9,
    "chaos": 3,
    "rootedness": 9
  },
  "WIS": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 9,
    "community": 9,
    "chaos": 2,
    "rootedness": 8
  },
  "NEB": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 7,
    "process": 8,
    "community": 10,
    "chaos": 3,
    "rootedness": 10
  },
  "TAM": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 8,
    "process": 7,
    "community": 10,
    "chaos": 4,
    "rootedness": 9
  },
  "MAR": {
    "loyalty": 10,
    "emotion": 10,
    "ambition": 4,
    "process": 5,
    "community": 10,
    "chaos": 5,
    "rootedness": 10
  },
  "HAW": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 4,
    "process": 4,
    "community": 10,
    "chaos": 7,
    "rootedness": 10
  },
  "ARM": {
    "loyalty": 10,
    "emotion": 6,
    "ambition": 4,
    "process": 9,
    "community": 10,
    "chaos": 2,
    "rootedness": 8
  },
  "NAV": {
    "loyalty": 10,
    "emotion": 6,
    "ambition": 6,
    "process": 9,
    "community": 10,
    "chaos": 2,
    "rootedness": 8
  },
  "AIR": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 5,
    "process": 10,
    "community": 9,
    "chaos": 2,
    "rootedness": 7
  },
  "BYU": {
    "loyalty": 10,
    "emotion": 6,
    "ambition": 7,
    "process": 9,
    "community": 10,
    "chaos": 3,
    "rootedness": 8
  },
  "WVU": {
    "loyalty": 10,
    "emotion": 10,
    "ambition": 6,
    "process": 4,
    "community": 9,
    "chaos": 9,
    "rootedness": 10
  },
  "ARK": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 5,
    "community": 9,
    "chaos": 7,
    "rootedness": 10
  },
  "ECU": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 5,
    "process": 4,
    "community": 9,
    "chaos": 8,
    "rootedness": 9
  },
  "WAZ": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 4,
    "process": 4,
    "community": 9,
    "chaos": 8,
    "rootedness": 9
  },
  "APP": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 5,
    "process": 6,
    "community": 9,
    "chaos": 7,
    "rootedness": 9
  },
  "VAT": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 6,
    "community": 8,
    "chaos": 6,
    "rootedness": 8
  },
  "MST": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 5,
    "process": 5,
    "community": 9,
    "chaos": 6,
    "rootedness": 9
  },
  "COL": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 4,
    "community": 8,
    "chaos": 6,
    "rootedness": 8
  },
  "BOI": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 7,
    "process": 8,
    "community": 8,
    "chaos": 5,
    "rootedness": 9
  },
  "MIA": {
    "loyalty": 7,
    "emotion": 9,
    "ambition": 9,
    "process": 4,
    "community": 6,
    "chaos": 9,
    "rootedness": 6
  },
  "UCF": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 7,
    "rootedness": 5
  },
  "SMU": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 7,
    "rootedness": 6
  },
  "STA": {
    "loyalty": 6,
    "emotion": 5,
    "ambition": 6,
    "process": 8,
    "community": 5,
    "chaos": 3,
    "rootedness": 5
  },
  "GAT": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 6,
    "process": 8,
    "community": 6,
    "chaos": 4,
    "rootedness": 6
  },
  "VAN": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 4,
    "process": 7,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "WAS": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 8,
    "process": 7,
    "community": 7,
    "chaos": 5,
    "rootedness": 7
  },
  "TCU": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 7,
    "community": 7,
    "chaos": 6,
    "rootedness": 7
  },
  "OKS": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 8
  },
  "MSU": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 6,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 7
  },
  "TTU": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 6,
    "process": 3,
    "community": 8,
    "chaos": 9,
    "rootedness": 8
  },
  "TUL": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 6,
    "process": 7,
    "community": 8,
    "chaos": 6,
    "rootedness": 8
  },
  "CST": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 5,
    "process": 5,
    "community": 8,
    "chaos": 9,
    "rootedness": 7
  }
};

const CARD_BADGES = {
      "IND": "\u26a1",
  "ALA": "🐘",
  "UGA": "🐶",
  "OSU": "🌰",
  "OKL": "🐴",
  "MIC": "〽️",
  "TEX": "🤘",
  "NDM": "☘️",
  "USC": "⚔️",
  "FLA": "🐊",
  "FSU": "🔥",
  "PSU": "🦁",
  "CLM": "🐾",
  "ORE": "🦆",
  "LSU": "🐯",
  "TEN": "🍊",
  "AUB": "🦅",
  "OLE": "🦈",
  "SCA": "🐓",
  "IOW": "🦅",
  "KSU": "🐾",
  "WIS": "🦡",
  "NEB": "🌽",
  "TAM": "👍",
  "MAR": "🦬",
  "HAW": "🌈",
  "ARM": "⚔️",
  "NAV": "⚓",
  "AIR": "✈️",
  "BYU": "⛰️",
  "WVU": "⛏️",
  "ARK": "🐗",
  "ECU": "🏴‍☠️",
  "WAZ": "🌾",
  "APP": "🏔️",
  "VAT": "🦃",
  "MST": "🔔",
  "COL": "🐃",
  "BOI": "🐴",
  "MIA": "🌀",
  "UCF": "🚀",
  "SMU": "🐎",
  "STA": "🌲",
  "GAT": "🐝",
  "VAN": "⚓",
  "WAS": "🐺",
  "TCU": "🐸",
  "OKS": "🤠",
  "MSU": "🛡️",
  "TTU": "🐎",
  "TUL": "🌊",
  "CST": "🐓"
};

const badgeUrls = {};

const squadUrls = {};  // no per-team roster links yet; the View squad CTA stays hidden (data-gated)

const milestones = {
  "ALA": [
    "Claims 18 national championships, including 13 in the AP and Coaches' poll era.",
    "Two dynasties a generation apart: Bear Bryant won six national titles from 1961 to 1979, and Nick Saban won six more from 2009 to 2020.",
    "Set an NCAA record with sixteen straight seasons of at least ten wins, from 2008 to 2023.",
    "Four Heisman Trophy winners: Mark Ingram, Derrick Henry, DeVonta Smith, and Bryce Young."
  ],
  "UGA": [
    "Won back-to-back national championships in 2021 and 2022, the first program ever to repeat in the College Football Playoff era.",
    "Ended a 41-year national title drought in 2021, the longest wait a blueblood carried into the playoff era.",
    "Buried TCU 65 to 7 for the 2022 title, the largest margin of victory in the history of bowl games.",
    "Owns the nation's longest active bowl streak at 28 straight appearances."
  ],
  "OSU": [
    "Claims nine national championships, including the 2024 title as the first champion of the 12-team College Football Playoff.",
    "Won the 2024 championship with two losses on the season, the lowest-seeded team ever to win it all.",
    "Home to Archie Griffin, the only player in history to win the Heisman Trophy twice.",
    "Runs Script Ohio before home games, the marching-band tradition capped by a senior dotting the i."
  ],
  "OKL": [
    "Holds the longest winning streak in the history of major college football, 47 straight from 1953 to 1957.",
    "Claims seven national championships, won across three separate coaching dynasties.",
    "Home to seven Heisman Trophy winners, among the most of any program in the sport.",
    "The pride of a state with no pro football team, which makes the Sooners the whole state's own."
  ],
  "MIC": [
    "The winningest program in the history of college football, and the first ever to reach 1,000 victories.",
    "Plays in Michigan Stadium, the Big House, the largest stadium in the United States at over 107,000 seats.",
    "Won the 2023 national championship with a perfect 15 and 0 season, its first title since 1997.",
    "Holds more conference championships than any other program in college football."
  ],
  "TEX": [
    "Claims four national championships, the most recent won on the final drive of the 2006 Rose Bowl.",
    "Consistently ranked as the biggest brand and richest athletic program in college sports.",
    "Home to two Heisman Trophy winners, Earl Campbell and Ricky Williams, both backs with the field now named for them.",
    "Sings 'The Eyes of Texas' and throws the Hook 'Em Horns, among the most recognized traditions in the sport."
  ],
  "NDM": [
    "Claims eleven national championships and is credited with the most consensus titles of any program of the modern era.",
    "Has produced more consensus All-Americans than any other program in college football.",
    "Plays as one of the sport's last major independents, with every home game televised nationally since 1991.",
    "Reached the national championship game for the 2024 season behind the most wins in a single year in program history."
  ],
  "USC": [
    "Has produced more Heisman Trophy winners than any program in the sport, with eight.",
    "Claims eleven national championships and is known as Running Back U for its lineage of star tailbacks.",
    "Home to more Pro Football Hall of Famers than any other school.",
    "Enters the Coliseum behind the Spirit of Troy band and the white horse Traveler, one of the sport's grand entrances."
  ],
  "FLA": [
    "Won three national championships between 1996 and 2008, under Steve Spurrier and Urban Meyer.",
    "Home to three Heisman Trophy winners: Steve Spurrier, Danny Wuerffel, and Tim Tebow.",
    "Steve Spurrier's Fun and Gun offense and his nickname for the Swamp reshaped how the SEC played and talked.",
    "Plays in the Swamp, where the crowd promises that only Gators get out alive."
  ],
  "FSU": [
    "Won three national championships in 1993, 1999, and 2013.",
    "Finished in the top five of the final AP poll for 14 straight years, from 1987 to 2000, under Bobby Bowden.",
    "Home to three Heisman-winning quarterbacks: Charlie Ward, Chris Weinke, and Jameis Winston.",
    "Went 13-0 in 2023 and won the ACC, then became the first undefeated Power conference champion ever left out of the playoff.",
    "Begins every home game as Osceola plants a flaming spear at midfield."
  ],
  "PSU": [
    "Won national championships in 1982 and 1986 under Joe Paterno, the winningest coach in major college football history.",
    "Plays in Beaver Stadium, the second-largest stadium in the country, home of the White Out.",
    "Wears plain uniforms with no names on the back, a statement that the team comes before any individual.",
    "Carries one of the sport's longest runs of winning seasons and a fan base hundreds of thousands strong."
  ],
  "CLM": [
    "Won three national championships, in 1981 and then in 2016 and 2018 under Dabo Swinney.",
    "Beat Alabama on a last-second touchdown for the 2016 title, then beat Alabama again for the 2018 title.",
    "Went 15-0 in 2018, the first team to finish a season a perfect fifteen wins since 1897.",
    "Runs down the Hill and touches Howard's Rock before kickoff, called the most exciting 25 seconds in college football."
  ],
  "ORE": [
    "Changes its uniform combination nearly every game, the style leader of college football and Nike's flagship program.",
    "Powered by Nike co-founder and Oregon alum Phil Knight, whose support built some of the sport's finest facilities.",
    "Marcus Mariota won the 2014 Heisman Trophy, the program's first, with the second-highest vote share in the award's history.",
    "Reached the national title game after the 2010 and 2014 seasons but has never won it all."
  ],
  "LSU": [
    "Claims four national championships, in 1958, 2003, 2007, and 2019.",
    "The 2019 team went 15-0 behind Joe Burrow, remembered as one of the greatest in the sport's history.",
    "Plays in Death Valley, ranked the loudest stadium in college football, where a last-second touchdown once registered on a seismograph.",
    "Home to three Heisman winners, Billy Cannon, Joe Burrow, and Jayden Daniels, and a live tiger named Mike."
  ],
  "TEN": [
    "Claims six national championships, the most recent in 1998, winning the first-ever BCS title game.",
    "Neyland Stadium has hosted more football victories than any other stadium in the sport.",
    "The Vol Navy sails a fleet of boats up the Tennessee River and docks them at the stadium on game days.",
    "The sea of orange sings 'Rocky Top' until every opponent in the SEC has learned to hate it."
  ],
  "AUB": [
    "Claims national championships in 1957 and 2010, the latter a perfect 14-0 season led by Cam Newton.",
    "Home to three Heisman winners: Pat Sullivan, Bo Jackson, and Cam Newton.",
    "Beat Alabama on the Kick Six in 2013, returning a missed field goal the length of the field as time expired, one of the sport's greatest finishes.",
    "Releases a live eagle to soar over Jordan-Hare before kickoff as the crowd roars War Eagle.",
    "Rolls the oaks at Toomer's Corner with toilet paper after every win, a celebration that turns downtown into a snowstorm."
  ],
  "OLE": [
    "Claims three national championships from the Johnny Vaught era of 1959, 1960, and 1962.",
    "Made its first-ever College Football Playoff appearance after the 2025 season.",
    "The Grove, a ten-acre stand of oaks, hosts what is often called the finest tailgate in all of college sports.",
    "The Manning family runs through Oxford, where the campus speed limit is set at 18 to honor Archie's jersey number."
  ],
  "SCA": [
    "One of the most loyal fan bases in the sport, packing 80,000 into Williams-Brice for a program that has never won it all.",
    "George Rogers won the 1980 Heisman Trophy, the only one in program history.",
    "Takes the field to the theme from '2001: A Space Odyssey,' called the most exciting entrance in college football.",
    "Plays 'Sandstorm' until the towels wave and the press box shakes."
  ],
  "IOW": [
    "Plays in Kinnick Stadium, the only college football stadium named for a Heisman Trophy winner.",
    "After the first quarter of every home game, the entire stadium waves to children watching from the hospital next door.",
    "Known as Tight End U for the long line of great tight ends it has sent to the NFL.",
    "Built its identity on defense, special teams, and a disciplined, fundamentals-first style under a long-tenured coaching staff."
  ],
  "KSU": [
    "Went from the worst program in college football history to a national contender under Bill Snyder, the greatest turnaround the sport has seen.",
    "Plays in Bill Snyder Family Stadium, named for the coach who built the program while he was still coaching it.",
    "Built its winners on walk-ons, junior-college transfers, and discipline rather than blue-chip recruiting.",
    "Carries the word Family on its helmet, the slogan at the heart of everything it does."
  ],
  "WIS": [
    "An offensive-line and running-back factory that has produced two Heisman-winning backs, Alan Ameche and Ron Dayne.",
    "Between the third and fourth quarters, the entire stadium bounces to Jump Around, one of the sport's most famous traditions.",
    "Plays in Camp Randall Stadium, the fourth-oldest stadium in college football, built on a former Civil War training ground.",
    "Built a lasting identity as the Big Ten's blue-collar bruiser: run the ball, win the trenches, wear teams down."
  ],
  "NEB": [
    "Won five national championships between 1970 and 1997, with the 1971 and 1995 teams rated among the greatest ever.",
    "Has sold out every home game since 1962, the longest sellout streak in the history of American sports.",
    "Home to three Heisman winners: Johnny Rodgers, Mike Rozier, and Eric Crouch.",
    "Known for the Blackshirts defense, a dynasty built on in-state walk-ons, and fans who applaud the opposing team as it leaves the field."
  ],
  "TAM": [
    "Home of the 12th Man, where the entire student body stands the whole game, ready to play if called upon.",
    "Plays in Kyle Field, the largest stadium in the SEC, holding over 102,000.",
    "Home to two Heisman winners: John David Crow in 1957 and Johnny Manziel, the first freshman ever to win it, in 2012.",
    "Gathers at Midnight Yell the night before every home game, a tradition unlike anything else in the sport."
  ],
  "MAR": [
    "Rebuilt from a 1970 plane crash that took nearly the entire team, the story told in the film We Are Marshall.",
    "A campus fountain honors the lost each year, its water turned off every November and turned back on each spring.",
    "The 1990s Thundering Herd was among the winningest programs in the country, launching stars like Randy Moss.",
    "Won two national titles at the level below the top division, in 1992 and 1996, on the way back to prominence."
  ],
  "HAW": [
    "The only major college football program in the state, thousands of miles of ocean from any other team.",
    "Went undefeated in the 2007 regular season behind Colt Brennan and the run-and-shoot, earning a Sugar Bowl berth.",
    "Warriors perform a haka-style warrior chant before games, with fans waving ti leaves in the stands.",
    "Frequent mist off the mountains sends rainbows over the stadium, a fitting sight for the Rainbow Warriors."
  ],
  "ARM": [
    "Won three straight national championships in 1944, 1945, and 1946, the golden age of Army football.",
    "Home to the legendary backfield of Mr. Inside and Mr. Outside, two Heisman winners in the same era.",
    "The Corps of Cadets stands for all four quarters and does push-ups after every Army score.",
    "Plays Navy every December in one of the oldest and most meaningful rivalries in all of sports."
  ],
  "NAV": [
    "Leads the all-time series against Army 64 to 55 with 7 ties, the game both academies build their season around.",
    "Won 14 straight in the Army-Navy game from 2002 to 2015, the longest streak by either side in the modern series.",
    "Home to two Heisman Trophy winners, Joe Bellino in 1960 and Roger Staubach in 1963, the last academy player to win it.",
    "Marches the entire Brigade of Midshipmen onto the field in formation before every home game."
  ],
  "AIR": [
    "Has won the Commander-in-Chief's Trophy more times than Army or Navy, a record among the service academies.",
    "Plays in Falcon Stadium at over 6,600 feet, the second-highest stadium in major college football.",
    "The Wings of Blue parachute team delivers the game ball from the sky before home games, followed by military flyovers.",
    "Runs the triple option with a precision that lets smaller, faster teams outexecute bigger ones."
  ],
  "BYU": [
    "Won the national championship in 1984, the last team from outside the power conferences ever to do it.",
    "Known as Quarterback U, home to Steve Young, Jim McMahon, and 1990 Heisman winner Ty Detmer.",
    "Will not play games on Sunday and fields a roster of older players who serve two-year missions before or during college.",
    "Joined the Big 12 in 2023, carrying a national fanbase built around shared faith and values."
  ],
  "WVU": [
    "Leads the nation in all-time wins by a program that has never won a national championship.",
    "Went undefeated in the 1988 regular season and reached the Fiesta Bowl with the national title on the line.",
    "Sat at number two in the country in 2007, one win from the national title game, before a stunning home loss to rival Pittsburgh.",
    "Sings 'Take Me Home, Country Roads' with the crowd after every home win, the program's unofficial anthem."
  ],
  "ARK": [
    "Won the national championship in 1964, going undefeated as the only unbeaten team in the country.",
    "The only major program in the entire state, making the Razorbacks the team of all Arkansas.",
    "Calling the Hogs, the 'Woo Pig Sooie' hog call, is one of the most recognizable cheers in college sports.",
    "Darren McFadden, the most decorated Razorback ever, finished as Heisman runner-up in back-to-back years."
  ],
  "ECU": [
    "Raises the red No Quarter flag at the start of every fourth quarter, a pirate vow to show the opponent no mercy.",
    "Known as Rowdy at Dowdy, one of the loudest and most passionate home atmospheres in its conference.",
    "In 2008, upset both ranked Virginia Tech and ranked West Virginia in the same season on the way to a conference title.",
    "The team enters through purple smoke and fires a cannon after every score, leaning all the way into the pirate theme."
  ],
  "WAZ": [
    "Ol' Crimson, a WSU flag, has appeared on the set of ESPN's College GameDay every week since 2003, one of the sport's great loyalty streaks.",
    "Plays on the remote Palouse in Pullman, one of the most isolated campuses in major college football.",
    "Made its name with the wide-open Air Raid offense and a string of prolific, fun-to-watch quarterbacks.",
    "When the Pac-12 collapsed, Washington State was one of only two schools left standing, and refused to fold."
  ],
  "APP": [
    "Beat No. 5 Michigan 34-32 in 2007, the first lower-division team ever to defeat a ranked opponent and the biggest upset in the sport's history.",
    "Won three consecutive FCS national championships in 2005, 2006, and 2007, the only NCAA football titles by any North Carolina school.",
    "Moved up to the top division and kept slaying, upsetting a top-ten Texas A&M in 2022 as a heavy underdog.",
    "Plays at Kidd Brewer Stadium, The Rock, a mile-high mountain fortress with one of the best home records in the country."
  ],
  "VAT": [
    "The Enter Sandman entrance sends the whole stadium jumping in unison, registering as a small earthquake on the university's seismographs.",
    "Built its golden era on Beamer Ball, winning with defense and special teams under coach Frank Beamer.",
    "Rode Michael Vick to an undefeated regular season and the 1999 national championship game.",
    "Rallied its no-name defense around a battered metal lunch pail, one of the sport's most beloved team symbols."
  ],
  "MST": [
    "Plays in Davis Wade Stadium, the second-oldest stadium in major college football, opened in 1914.",
    "Famous for its cowbells, thousands of clanging noisemakers that turn Davis Wade into a wall of sound.",
    "Meets Ole Miss every year in the Egg Bowl, one of the oldest rivalries in the sport.",
    "Dak Prescott, the most decorated player in school history, led the 2014 team to five weeks at number one."
  ],
  "COL": [
    "Won the 1990 national championship under Bill McCartney, capped by a 10-9 Orange Bowl win over Notre Dame.",
    "Ralphie, a live buffalo, thunders onto the field before both halves, one of the most iconic traditions in college sports.",
    "The 1994 Miracle at Michigan, a 64-yard Kordell Stewart Hail Mary, remains one of the most famous plays ever.",
    "Home to two Heisman winners, Rashaan Salaam in 1994 and two-way star Travis Hunter in 2024."
  ],
  "BOI": [
    "Plays on The Blue, the famous blue turf installed in 1986, the first non-green field in the sport and a trademarked icon.",
    "Beat No. 7 Oklahoma 43-42 in the 2007 Fiesta Bowl on a Statue of Liberty two-point conversion, one of the greatest games ever.",
    "Made the first expanded College Football Playoff in 2024 as a No. 3 seed, behind Heisman runner-up Ashton Jeanty.",
    "Holds the longest active streak of winning seasons in the sport, the mid-major that became a genuine power."
  ],
  "MIA": [
    "Won five national championships between 1983 and 2001, tied for the fourth-most AP titles in the sport.",
    "The turnover chain, a giant gold rope worn by any defender who forces a takeaway, became the sport's most copied tradition.",
    "Has produced eleven Pro Football Hall of Famers, among the most of any college program.",
    "Ran off 34 straight wins from 2000 to 2003, one of the longest streaks in modern college football."
  ],
  "UCF": [
    "Went undefeated in 2017, declared itself national champion, hung a banner, handed out rings, and paraded at Walt Disney World.",
    "Became the first team ever to go from a winless season to an undefeated one in just two years.",
    "Plays in the Bounce House, a stadium that physically shakes when the crowd jumps in unison.",
    "Nicknamed Space U, with its stadium's fifty-yard line aligned to a Kennedy Space Center launch pad."
  ],
  "SMU": [
    "The Pony Express backfield of Eric Dickerson and Craig James made SMU the winningest program in the country in the early 1980s.",
    "Received the NCAA death penalty in 1987, the only program ever shut down entirely, and did not fully recover for two decades.",
    "Clawed all the way back to join the ACC and reach the College Football Playoff in 2024.",
    "Home to Doak Walker, the 1948 Heisman winner for whom the nation's top running-back award is named."
  ],
  "STA": [
    "Its quarterback pipeline includes Heisman winner Jim Plunkett plus John Elway and Andrew Luck, all number-one NFL picks.",
    "Christian McCaffrey broke Barry Sanders' NCAA record for all-purpose yards in a season in 2015.",
    "Won three Rose Bowls in the 2010s playing smart, physical, run-first football.",
    "Fields the sport's most irreverent traditions, the googly-eyed Stanford Tree and a famously chaotic marching band."
  ],
  "GAT": [
    "The Ramblin' Wreck, a 1930 Ford Model A, has led the team onto the field before every home game since 1961.",
    "Plays at Bobby Dodd Stadium, the oldest on-campus stadium in major college football, in the heart of Atlanta.",
    "Won the 1990 national championship under Bobby Ross, and once won all four major bowls before any other team.",
    "Its fight song, about a whiskey-making engineer, is among the most famous in sports and has been sung in outer space."
  ],
  "VAN": [
    "One of the nation's top academic universities, long the SEC's underdog, now a rising giant-slayer.",
    "Beat number-one Alabama in 2024, its first win over the Tide in 40 years and first ever over a top-ranked team.",
    "Fans carried the goalposts two miles through Nashville and threw them into the Cumberland River.",
    "Reached the top ten in 2025 for the first time since 1947 and won ten games for the first time ever."
  ],
  "WAS": [
    "Plays at Husky Stadium on the shore of Lake Washington, where fans sailgate in by boat, widely called the sport's most beautiful setting.",
    "The 1991 team went undefeated and is considered one of the greatest in college football history.",
    "Ran the table in 2023 and reached the national championship game.",
    "Known as Quarterback U, with an NFL pipeline running from Warren Moon to Michael Penix Jr."
  ],
  "TCU": [
    "Went undefeated in 2010 and beat Wisconsin in the Rose Bowl, crashing the BCS as a mid-major.",
    "Ran the table in 2022, beat Michigan in the semifinal, and reached the national championship game.",
    "Roots for the horned frog, a horned lizard and the only mascot of its kind in major college football.",
    "Gary Patterson built the program into a national power with his signature 4-2-5 defense."
  ],
  "OKS": [
    "Barry Sanders' 1988 Heisman season, with records for rushing yards and touchdowns that still stand, is called the greatest ever.",
    "Plays in Boone Pickens Stadium, funded by one of the largest athletic donations in college sports history.",
    "Wears the brightest orange in the sport, led by the mustachioed mascot Pistol Pete.",
    "Built a loyal, deeply rooted following in Stillwater with a proud little-brother chip in the Bedlam rivalry."
  ],
  "MSU": [
    "Answered the little-brother label by winning Big Ten titles and beating the bluebloods who doubted the program.",
    "Won the 2013 Rose Bowl and earned a College Football Playoff berth in 2015 under Mark Dantonio.",
    "Won six national championships in the Biggie Munn and Duffy Daugherty golden era of the 1950s and 60s.",
    "Battles Michigan every year for the Paul Bunyan Trophy in one of the sport's most bitter in-state rivalries."
  ],
  "TTU": [
    "Helped birth the Air Raid offense under Mike Leach, one of the most influential passing systems in football.",
    "Fans throw tortillas onto the field, and the Masked Rider charges out on a black horse ahead of the team.",
    "Produced NFL MVP Patrick Mahomes along with a long line of record-setting quarterbacks.",
    "Michael Crabtree's last-second touchdown to beat number-one Texas in 2008 is one of the sport's iconic plays."
  ],
  "TUL": [
    "Beat USC in the 2023 Cotton Bowl from a 0.2 percent win probability, one of the great comebacks in bowl history.",
    "The 2022 team's ten-win turnaround from the year before is the best single-season improvement in NCAA history.",
    "Went undefeated in 1998 behind Shaun King, only to be snubbed from a major bowl.",
    "Plays under the live oaks at Yulman Stadium, back on its uptown New Orleans campus after decades in the Superdome."
  ],
  "CST": [
    "Went undefeated in the 2020 regular season and climbed into the top fifteen in just its fourth year as an FBS program.",
    "Hosted College GameDay for the viral Mormons versus Mullets win over BYU, becoming the feel-good team of the year.",
    "Plays on bright teal turf, one of the most distinctive home fields in all of college football.",
    "Roots for the Chanticleer, a proud rooster taken from Chaucer's Canterbury Tales."
  ]
};

export { moduleQuestions, teams, archetypes, teamTextColors, archetypeDesc, greats, vitalStats, milestones, nearlyGot, scoring, teamDims, CARD_BADGES, badgeUrls, squadUrls };
