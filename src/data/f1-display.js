// FanDNA - F1 display half (lazy-loaded, s83 code-split A'). Heavy result-stage prose
// split from f1.js; merged onto SPORT_DATA via loadSportDisplay(). The engine never reads these.

const teamsCopy = {
  "FER": {
    "tagline": "The only name never to miss a season since 1950, and every year without a title only makes you burn hotter.",
    "desc": "You are not a team so much as a religion. You come from Maranello, the only marque to have entered every season since the championship began in 1950, and you carry a following that fills grandstands in red wherever the race is held. The passion is the point, and so is the pain: you have gone since 2008 without a constructors' crown, and every near miss lands like a national wound. Precision has never been your first language. Drama is. When you win it is operatic, and when a strategy call goes wrong the whole of Italy hears about it. You would not trade a drop of that feeling for a colder, tidier way of winning. Forza Ferrari is not a slogan. It is a faith kept through every barren year."
  },
  "MER": {
    "tagline": "Eight constructors' titles in a row, the longest streak the sport has ever seen, and you made dominance look like routine.",
    "desc": "You are the machine everyone else measures themselves against. Between 2014 and 2021 you won eight constructors' titles without a break, the longest run of dominance in the sport's history, and you did it not with drama but with a standard so high it looked routine. You do not run on passion. You run on precision, on getting every small thing right and letting the results follow. Winning, to you, is an engineering problem solved better than anyone else solves it. Cold is not an insult here. Cold is the point. When you set the benchmark, the whole grid spends years trying to reach it, and quietly, that is exactly how you like it."
  },
  "MCL": {
    "tagline": "Second only to the oldest name in the sport across its whole history, you ended a 26-year wait and won it all over again.",
    "desc": "You are one of the true giants, second only to the oldest name in the sport across the whole of its history. You come from Woking, from a culture of quiet engineering excellence, and for a long time your greatness lived mostly in the past, a 26-year wait between constructors' crowns that became the longest drought any champion had carried. Then you ended it, and rather than exhale you did it again the very next year, back-to-back for the first time since 1991. You win the way you always have, with cool precision and total buy-in rather than noise and drama. The papaya is not loud for the sake of it. It is the colour of a team that does the work and lets the results speak."
  },
  "RBR": {
    "tagline": "You showed up as an energy drink that bought a struggling team, then out-won names a century older than you.",
    "desc": "You are the outsider who was never supposed to belong and won anyway. You arrived in 2005, an energy-drink brand that bought a fading team, and inside a decade you were beating marques that had raced since the sport began. You owe nothing to heritage or place. You are a brand, not a town, and you treat the establishment as something to beat, not join. When you are on top you are ruthless, a machine tuned to win and keep winning long after everyone else has folded. Right now the crown has slipped. The designer who built your dominance has gone, the long-time boss with him, you are learning a new engine, and your talisman's future is the paddock's favourite question. None of that changes what you are. You are built to claw back to the front, and you intend to."
  },
  "WIL": {
    "tagline": "Nine titles won as a proud independent, and a family name that held the line through twenty lean years.",
    "desc": "You are the great independent, the family team that did it its own way. Founded in a workshop in 1977, you rose to win nine constructors' titles across the 1980s and 1990s, beating giants with far deeper pockets purely on engineering and grit. Then came the fall, twenty years in the wilderness where the wins dried up and the money got tight, and through all of it you refused to stop being Williams. The loyalty is bone-deep, to the name, to the craft, to a way of racing that owes nothing to anyone. Now you are climbing back, patient and stubborn, rebuilding brick by brick. You were never the richest or the loudest. You were the one that endured."
  },
  "AST": {
    "tagline": "You bought a midfield team, poured a fortune into it, and hired the sport's greatest designer to finally make it win.",
    "desc": "You are the great project, the team money is building into a giant. Not long ago you were a modest midfield outfit, until an ambitious owner poured a fortune in, built a gleaming new factory, secured a works engine deal, and hired the most successful designer the sport has ever known to run the whole thing. You have no long line of titles behind you, and you are impatient about that. Everything you do points at the front, and you would rather spend big and swing for greatness than settle for a comfortable midfield. You are still assembling the pieces, and the results have not caught the ambition yet. But make no mistake about the goal. You are not here to make up the numbers. You are here to win."
  },
  "ALP": {
    "tagline": "France's works team, born from a factory that won world titles under other names, and drama has followed you the whole way.",
    "desc": "You are the heart-on-sleeve French team, all passion and turbulence. Your factory has a proud past, a place that won world championships under other banners before the blue arrived, but calm has never been your natural state. Management comes and goes, the plans change, the drama plays out in public, and through it all you feel every high and low at full volume. You lost your own engine along the way and had to lean on a rival's, another twist in a story that never runs smooth. When it clicks you are thrilling. When it does not you are chaos in motion. What never changes is the emotion. You would rather burn bright and unpredictable than tick along quietly in the midfield."
  },
  "HAA": {
    "tagline": "The grid's leanest team, running on a shoestring and a smart shortcut, and you have always punched above your weight.",
    "desc": "You are the grid's great pragmatist, the small American team that does more with less. You run on the leanest budget out there and you are not shy about the smart shortcut, buying whatever the rules allow and building only what you must. You are not chasing championships, and you are honest about that. Your win is a strong points day against teams spending many times what you do, a midfield scrap taken on cleverness and grit rather than money. No glamour, no drama, no pretending to be something you are not. You show up, do the unglamorous work, and let a good result speak for a team that was never supposed to keep up in the first place."
  },
  "RB": {
    "tagline": "The junior team, the proving ground where tomorrow's champions cut their teeth before moving up.",
    "desc": "You are the proving ground, the team where careers begin. From a small Italian town you have spent decades doing one job better than anyone: taking young, hungry talent and giving it a real seat, a real chance to show what it can do. Some of the sport's biggest names raced for you first before graduating to bigger things, and you take pride in that even when they leave. You are the younger sibling in a family of two teams, restless and full of energy, never quite the finished article because being finished was never the point. You are where the future gets tested. Win or lose, there is always another prospect coming, another shot to hand someone, another story just starting."
  },
  "AUD": {
    "tagline": "A German giant with a five-year plan and its own engine, patient enough to build a champion from the ground up.",
    "desc": "You are the patient giant, an engineering colossus that does nothing by halves. You arrived by taking over one of the sport's longest-serving privateers, a proud independent that gave countless drivers their start, and you brought the full weight of a German manufacturer with you. You built your own engine from the ground up, set out a five-year plan to reach the front, and you mean to follow it step by step. You are not here for a quick thrill or a lucky podium. You are here to engineer your way to a championship, methodically, the way you do everything. It will take time and you know it. Patience and precision are not weaknesses to you. They are the whole strategy."
  },
  "CAD": {
    "tagline": "The eleventh team, an American giant arriving with a blank page and everything to prove.",
    "desc": "You are the new arrival, a blank page with a giant's ambition. You are the eleventh team on the grid and the first all-new name in years, an American manufacturer that muscled its way into a closed world and intends to belong. You have no history yet, no trophies, no legend, and that does not faze you at all. It excites you. Everything is ahead of you and unwritten, and you get to decide what your story becomes. You arrived with big backing and experienced hands rather than starting from nothing, but the identity is still yours to build. You are bold, fresh, and unafraid to be the outsider, because being underestimated is exactly the position you plan to prove everyone wrong from."
  }
};

const greats = {
  "FER": [
    {
      "name": "Enzo Ferrari",
      "years": "founder",
      "note": "the founder whose name and prancing horse the team still carries"
    },
    {
      "name": "Michael Schumacher",
      "years": "1996-2006",
      "note": "five straight drivers' titles from 2000 to 2004, the heart of the greatest era"
    },
    {
      "name": "Niki Lauda",
      "years": "1974-1977",
      "note": "two titles and the 1976 comeback that became legend"
    },
    {
      "name": "Alberto Ascari",
      "years": "1950-1953",
      "note": "the first Ferrari world champion, back-to-back in 1952 and 1953"
    },
    {
      "name": "Gilles Villeneuve",
      "years": "1977-1982",
      "note": "the fearless favourite of the tifosi, adored more than many champions"
    },
    {
      "name": "Kimi Raikkonen",
      "years": "2007-2009",
      "note": "delivered the team's most recent drivers' title in 2007"
    }
  ],
  "MER": [
    {
      "name": "Lewis Hamilton",
      "years": "2013-2024",
      "note": "six drivers' titles in the silver car and the driving force of the dominant era"
    },
    {
      "name": "Juan Manuel Fangio",
      "years": "1954-1955",
      "note": "won two of his five titles in the original Silver Arrows"
    },
    {
      "name": "Nico Rosberg",
      "years": "2010-2016",
      "note": "took the 2016 title, then walked away at the top"
    },
    {
      "name": "Toto Wolff",
      "years": "2013-present",
      "note": "the principal who built the most dominant team in the sport's history"
    },
    {
      "name": "Kimi Antonelli",
      "years": "2025-present",
      "note": "the teenage sensation now leading the title race"
    }
  ],
  "MCL": [
    {
      "name": "Ayrton Senna",
      "years": "1988-1993",
      "note": "three of his titles came in papaya, the peak of the team's greatest era"
    },
    {
      "name": "Alain Prost",
      "years": "1980, 1984-1989",
      "note": "four-time champion, three of them with the team, the great professor"
    },
    {
      "name": "Bruce McLaren",
      "years": "1966-1970",
      "note": "the founder and driver who started it all, lost too young in 1970"
    },
    {
      "name": "Mika Hakkinen",
      "years": "1993-2001",
      "note": "back-to-back titles in 1998 and 1999"
    },
    {
      "name": "Lando Norris",
      "years": "2019-present",
      "note": "ended the long wait and won the 2025 drivers' crown"
    }
  ],
  "RBR": [
    {
      "name": "Sebastian Vettel",
      "years": "2009-2014",
      "note": "four straight drivers' titles from 2010 to 2013, the first golden age"
    },
    {
      "name": "Max Verstappen",
      "years": "2016-present",
      "note": "four titles of his own and the team's most relentless winner"
    },
    {
      "name": "Adrian Newey",
      "years": "2006-2025",
      "note": "the designer whose cars won every one of the team's titles"
    },
    {
      "name": "Christian Horner",
      "years": "2005-2025",
      "note": "the principal for two decades and every title until his exit"
    },
    {
      "name": "Daniel Ricciardo",
      "years": "2014-2018",
      "note": "the grinning racer whose wins lit up the mid-2010s"
    }
  ],
  "WIL": [
    {
      "name": "Nigel Mansell",
      "years": "1985-1992",
      "note": "the fan favourite whose 1992 season was one of the most dominant ever"
    },
    {
      "name": "Alan Jones",
      "years": "1978-1981",
      "note": "won the team's first drivers' title in 1980"
    },
    {
      "name": "Nelson Piquet",
      "years": "1986-1987",
      "note": "took the 1987 title in a golden run"
    },
    {
      "name": "Damon Hill",
      "years": "1993-1996",
      "note": "the 1996 champion, beloved by British fans"
    },
    {
      "name": "Jacques Villeneuve",
      "years": "1996-1998",
      "note": "won the 1997 title, the last the team has taken"
    },
    {
      "name": "Frank Williams",
      "years": "founder",
      "note": "the founder whose refusal to quit defined the team's whole character"
    }
  ]
};

const vitalStats = {
  "FER": {
    "base": "Maranello, Italy",
    "founded": "1929 (every F1 season since 1950)",
    "powerUnit": "Ferrari",
    "drivers": "Charles Leclerc & Lewis Hamilton",
    "titles": "16 constructors', 15 drivers'",
    "colours": "Rosso corsa",
    "principal": "Fred Vasseur"
  },
  "MER": {
    "base": "Brackley, England",
    "founded": "1954 (works team since 2010)",
    "powerUnit": "Mercedes",
    "drivers": "George Russell & Kimi Antonelli",
    "titles": "8 constructors', 9 drivers'",
    "colours": "Silver and black",
    "principal": "Toto Wolff"
  },
  "MCL": {
    "base": "Woking, England",
    "founded": "1963 (racing since 1966)",
    "powerUnit": "Mercedes",
    "drivers": "Lando Norris & Oscar Piastri",
    "titles": "10 constructors', 13 drivers'",
    "colours": "Papaya orange",
    "principal": "Andrea Stella"
  },
  "RBR": {
    "base": "Milton Keynes, England",
    "founded": "2005",
    "powerUnit": "Red Bull Ford",
    "drivers": "Max Verstappen & Isack Hadjar",
    "titles": "6 constructors', 8 drivers'",
    "colours": "Navy, red and yellow",
    "principal": "Laurent Mekies"
  },
  "WIL": {
    "base": "Grove, England",
    "founded": "1977",
    "powerUnit": "Mercedes",
    "drivers": "Alex Albon & Carlos Sainz",
    "titles": "9 constructors', 7 drivers'",
    "colours": "Williams blue",
    "principal": "James Vowles"
  },
  "AST": {
    "base": "Silverstone, England",
    "founded": "1991 as Jordan (Aston Martin since 2021)",
    "powerUnit": "Honda",
    "drivers": "Fernando Alonso & Lance Stroll",
    "titles": "Best finish: 5th (2023)",
    "colours": "British racing green",
    "principal": "Adrian Newey"
  },
  "ALP": {
    "base": "Enstone, England",
    "founded": "1981 as Toleman (Alpine since 2021)",
    "powerUnit": "Mercedes",
    "drivers": "Pierre Gasly & Franco Colapinto",
    "titles": "3 constructors', 4 drivers' (as Benetton and Renault)",
    "colours": "Alpine blue",
    "principal": "Flavio Briatore (executive advisor)"
  },
  "HAA": {
    "base": "Kannapolis, USA",
    "founded": "2016",
    "powerUnit": "Ferrari",
    "drivers": "Esteban Ocon & Oliver Bearman",
    "titles": "Best finish: 5th (2018)",
    "colours": "White, red and black",
    "principal": "Ayao Komatsu"
  },
  "RB": {
    "base": "Faenza, Italy",
    "founded": "1985 as Minardi (Racing Bulls since 2025)",
    "powerUnit": "Red Bull Ford",
    "drivers": "Liam Lawson & Arvid Lindblad",
    "titles": "Best finish: 6th (2008, as Toro Rosso)",
    "colours": "Blue, white and red",
    "principal": "Alan Permane"
  },
  "AUD": {
    "base": "Hinwil, Switzerland",
    "founded": "1993 as Sauber (Audi works from 2026)",
    "powerUnit": "Audi",
    "drivers": "Nico Hülkenberg & Gabriel Bortoleto",
    "titles": "Best finish: 2nd (2007, as BMW Sauber)",
    "colours": "Red, black and titanium",
    "principal": "Jonathan Wheatley"
  },
  "CAD": {
    "base": "Fishers, USA, and Silverstone, England",
    "founded": "2026",
    "powerUnit": "Ferrari",
    "drivers": "Sergio Pérez & Valtteri Bottas",
    "titles": "None yet (debut season 2026)",
    "colours": "Navy and gold",
    "principal": "Graeme Lowdon"
  }
};

const milestones = {
  "AST": [
    "Grew from the Jordan team of 1991, through Force India and Racing Point, into Aston Martin from 2021.",
    "Bought by Lawrence Stroll's group in 2018, who turned a cash-strapped midfield team into a fully funded works project.",
    "Opened a state-of-the-art factory and wind tunnel at Silverstone and secured a works Honda engine deal for 2026.",
    "Hired Adrian Newey, the most successful designer in the sport's history, to lead the team into its new era."
  ],
  "ALP": [
    "Traces back to Toleman in 1981, becoming Benetton, then Renault, then Lotus, then Renault again, and Alpine from 2021.",
    "The Enstone factory won drivers' titles with Michael Schumacher in 1994 and 1995 and with Fernando Alonso in 2005 and 2006.",
    "Renault ended its own engine program after 2025, so the French works team now runs a customer Mercedes power unit.",
    "Alpine's own era has been marked by frequent leadership changes and a single race win, at the 2021 Hungarian Grand Prix."
  ],
  "HAA": [
    "The first American team to enter Formula 1 in three decades, racing from its base in North Carolina since 2016.",
    "Built on a lean model, buying as many parts as the rules allow from a works team rather than making everything itself.",
    "Finished a best of fifth in the constructors' championship in 2018, punching well above its modest budget.",
    "Took a surprise pole position at the 2022 Brazilian Grand Prix, a rare headline for the grid's smallest team."
  ],
  "RB": [
    "Traces back to Minardi in 1985, becoming Toro Rosso, then AlphaTauri, then RB, and Racing Bulls from 2025.",
    "Serves as the junior team, developing young drivers for its senior sister team at the front of the grid.",
    "Sebastian Vettel took his and the team's first win at the 2008 Italian Grand Prix, then the youngest race winner ever.",
    "Won again at the 2020 Italian Grand Prix, a rare and emotional victory for the small Faenza outfit."
  ],
  "AUD": [
    "Built on the Sauber team, a Swiss independent that first raced in 1993 and gave many future stars their F1 debut.",
    "Raced as BMW Sauber in the late 2000s, taking the lineage's only win at the 2008 Canadian Grand Prix.",
    "Audi took full control for 2026, becoming a works team with a power unit built from scratch in Germany.",
    "Set out a multi-year plan to climb from midfield debutant to championship contender by the end of the decade."
  ],
  "CAD": [
    "Joined the grid in 2026 as Formula 1's eleventh team, the first all-new constructor to arrive in years.",
    "Backed by General Motors through its Cadillac brand, one of the largest names ever to enter the sport.",
    "Set up across bases in the United States and England, blending American ambition with British racing know-how.",
    "Debuted with an experienced pairing of race-winning drivers rather than starting from the very bottom."
  ]
};

const CARD_BADGES = {
  "FER": "🐎",
  "MER": "⭐",
  "MCL": "🧡",
  "RBR": "🐂",
  "WIL": "🔵",
  "AST": "💚",
  "ALP": "🏔️",
  "HAA": "🔧",
  "RB": "🐃",
  "AUD": "⚙️",
  "CAD": "🏵️"
};

const badgeUrls = {};

export { teamsCopy, greats, vitalStats, milestones, CARD_BADGES, badgeUrls };
