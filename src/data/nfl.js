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
        "label": "Something handed down. A legacy I inherited and carry on.",
        "value": "A"
      },
      {
        "label": "Something I built myself. Made from nothing, owing no one.",
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
        "label": "On the biggest stage there is, with everyone watching.",
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
        "label": "The grind. The unglamorous work that never gets a thank-you.",
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
      },
      {
        "label": "So close I could taste it, more than once. I'll get there.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "When something you're all in on lets you down, what happens inside?",
    "options": [
      {
        "label": "I show up louder. Every heartbreak pulls me in deeper, not out.",
        "value": "A"
      },
      {
        "label": "I saw it coming. Made my peace, and I stay anyway.",
        "value": "B"
      },
      {
        "label": "I laugh and believe again. Wrong every time, certain anyway.",
        "value": "C"
      },
      {
        "label": "I stopped keeping score of what it owes me. It's just mine.",
        "value": "D"
      },
      {
        "label": "I don't have that problem. I expect things to break my way, and mostly they do.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "What are you proudest of?",
    "options": [
      {
        "label": "Where I'm from. The place made me, and I judge everything by it.",
        "value": "A"
      },
      {
        "label": "The standard I keep. I never slow down to make it comfortable.",
        "value": "B"
      },
      {
        "label": "One singular thing I did that nobody has touched since.",
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
    "question": "Take the winning out of it. What are you actually loyal to?",
    "options": [
      {
        "label": "The city. Through it all, always the city.",
        "value": "A"
      },
      {
        "label": "The attitude, not the address. It comes with me wherever I land.",
        "value": "B"
      },
      {
        "label": "What I'm building. I lost something once and built my own.",
        "value": "C"
      },
      {
        "label": "The people I'm in it with. The rest is decoration.",
        "value": "D"
      },
      {
        "label": "The ride itself. The highs, the gut punches, the whole story.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "How does the world see you?",
    "options": [
      {
        "label": "They resent how often I come out on top, and I don't apologize for it.",
        "value": "A"
      },
      {
        "label": "They wrote me off, so I stopped wanting to be liked.",
        "value": "B"
      },
      {
        "label": "Overlooked. So I dug into where I'm from till I couldn't be ignored.",
        "value": "C"
      },
      {
        "label": "They barely think of me. I have the calm of someone with nothing left to prove.",
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
    "question": "The grind, or the glory?",
    "left": "The grind is the glory. The unglamorous work nobody claps for is the whole point.",
    "right": "The show is half of it. If nobody's watching, why even bother?"
  },
  {
    "id": "nfl_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "There's one you nearly had. How do you carry it?",
    "options": [
      {
        "label": "Got so close I could feel it, then it slipped away.",
        "value": "A"
      },
      {
        "label": "I had it in hand and watched it slip. I don't trust being ahead anymore.",
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
        "label": "I don't dwell. There's always the next shot, and I mean it.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When something you counted on gets taken away, what do you do?",
    "options": [
      {
        "label": "I let it go and built something new. No regrets.",
        "value": "A"
      },
      {
        "label": "Held on to what made it mine. They can take a lot from me, but not that.",
        "value": "B"
      },
      {
        "label": "I came back harder than before, and made sure it couldn't happen again.",
        "value": "C"
      },
      {
        "label": "Hit the bottom, then turned it into the best thing I've done.",
        "value": "D"
      },
      {
        "label": "It's never happened to me, and I intend to keep it that way.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nfl_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "When the intensity rises, which way do you go?",
    "left": "I clamp down and keep control. The higher it climbs, the steadier I get.",
    "right": "I let it loose, emotion all the way up, and everyone around me feels it."
  },
  {
    "id": "nfl_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The principle you run on, deep down?",
    "options": [
      {
        "label": "It's never over till it's over. I fight long after others fold.",
        "value": "A"
      },
      {
        "label": "Count me out and I just get more certain, not less.",
        "value": "B"
      },
      {
        "label": "I don't care how it looks or who it upsets. Results settle it.",
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
    "question": "Let the results speak, or make some noise?",
    "left": "Let the work speak. I don't need noise, I just deliver.",
    "right": "Make noise, loud enough to be felt. If I made a mark, I want to hear it."
  },
  {
    "id": "nfl_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When it all comes down to it, what do you trust?",
    "options": [
      {
        "label": "Brilliance. One mind that's a step ahead of everyone else.",
        "value": "A"
      },
      {
        "label": "Toughness and preparation. Doing the hard things right.",
        "value": "B"
      },
      {
        "label": "Heart. Flat refusal to quit, even when the math says quit.",
        "value": "C"
      },
      {
        "label": "The people around me. I'm never at the edge of it, I'm right in the thick of it.",
        "value": "D"
      },
      {
        "label": "Swagger. I carry myself like the main act, and back it up.",
        "value": "E"
      }
    ]
  }
];

const teams = {
  "BUF": {
    "code3": "BUF",
    "kitType": "duo",
    "secondaryColor": "#C60C30",
    "name": "Buffalo Bills",
    "emoji": "🦬",
    "color": "#00338D"
  },
  "NE": {
    "code3": "NWE",
    "kitType": "duo",
    "secondaryColor": "#C60C30",
    "name": "New England Patriots",
    "emoji": "🇺🇸",
    "color": "#002244"
  },
  "GB": {
    "code3": "GNB",
    "kitType": "duo",
    "secondaryColor": "#FFB612",
    "name": "Green Bay Packers",
    "emoji": "🧀",
    "color": "#203731"
  },
  "DAL": {
    "code3": "DAL",
    "kitType": "duo",
    "secondaryColor": "#869397",
    "name": "Dallas Cowboys",
    "emoji": "⭐",
    "color": "#003594"
  },
  "PIT": {
    "code3": "PIT",
    "kitType": "duo",
    "secondaryColor": "#101820",
    "name": "Pittsburgh Steelers",
    "emoji": "⚒️",
    "color": "#FFB612"
  },
  "LV": {
    "code3": "LVR",
    "kitType": "duo",
    "secondaryColor": "#A5ACAF",
    "name": "Las Vegas Raiders",
    "emoji": "☠️",
    "color": "#000000"
  },
  "NO": {
    "code3": "NOR",
    "kitType": "duo",
    "secondaryColor": "#101820",
    "name": "New Orleans Saints",
    "emoji": "⚜️",
    "color": "#D3BC8D"
  },
  "DET": {
    "code3": "DET",
    "kitType": "duo",
    "secondaryColor": "#B0B7BC",
    "name": "Detroit Lions",
    "emoji": "🦁",
    "color": "#0076B6"
  },
  "KC": {
    "code3": "KAN",
    "kitType": "duo",
    "secondaryColor": "#FFB81C",
    "name": "Kansas City Chiefs",
    "emoji": "🏹",
    "color": "#E31837"
  },
  "SF": {
    "code3": "SFO",
    "kitType": "duo",
    "secondaryColor": "#B3995D",
    "name": "San Francisco 49ers",
    "emoji": "⛏️",
    "color": "#AA0000"
  },
  "PHI": {
    "code3": "PHI",
    "kitType": "duo",
    "secondaryColor": "#A5ACAF",
    "name": "Philadelphia Eagles",
    "emoji": "🦅",
    "color": "#004C54"
  },
  "SEA": {
    "code3": "SEA",
    "kitType": "duo",
    "secondaryColor": "#69BE28",
    "name": "Seattle Seahawks",
    "emoji": "🔊",
    "color": "#002244"
  },
  "MIA": {
    "code3": "MIA",
    "kitType": "duo",
    "secondaryColor": "#FC4C02",
    "name": "Miami Dolphins",
    "emoji": "🐬",
    "color": "#008E97"
  },
  "LAC": {
    "code3": "LAC",
    "kitType": "duo",
    "secondaryColor": "#FFC20E",
    "name": "Los Angeles Chargers",
    "emoji": "⚡",
    "color": "#0080C6"
  },
  "BAL": {
    "code3": "BAL",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Baltimore Ravens",
    "emoji": "🐦‍⬛",
    "color": "#241773"
  },
  "CLE": {
    "code3": "CLE",
    "kitType": "duo",
    "secondaryColor": "#311D00",
    "name": "Cleveland Browns",
    "emoji": "🐶",
    "color": "#FF3C00"
  },
  "NYG": {
    "code3": "NYG",
    "kitType": "duo",
    "secondaryColor": "#A71930",
    "name": "New York Giants",
    "emoji": "🗽",
    "color": "#0B2265"
  },
  "TB": {
    "code3": "TBB",
    "kitType": "duo",
    "secondaryColor": "#34302B",
    "name": "Tampa Bay Buccaneers",
    "emoji": "🏴‍☠️",
    "color": "#D50A0A"
  },
  "MIN": {
    "code3": "MIN",
    "kitType": "duo",
    "secondaryColor": "#FFC62F",
    "name": "Minnesota Vikings",
    "emoji": "⚔️",
    "color": "#4F2683"
  },
  "CHI": {
    "code3": "CHI",
    "kitType": "duo",
    "secondaryColor": "#C83803",
    "name": "Chicago Bears",
    "emoji": "🐻",
    "color": "#0B162A"
  },
  "IND": {
    "code3": "IND",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Indianapolis Colts",
    "emoji": "🐎",
    "color": "#002C5F"
  },
  "DEN": {
    "code3": "DEN",
    "kitType": "duo",
    "secondaryColor": "#002244",
    "name": "Denver Broncos",
    "emoji": "🏔️",
    "color": "#FB4F14"
  },
  "LAR": {
    "code3": "LAR",
    "kitType": "duo",
    "secondaryColor": "#FFA300",
    "name": "Los Angeles Rams",
    "emoji": "🐏",
    "color": "#003594"
  },
  "CIN": {
    "code3": "CIN",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Cincinnati Bengals",
    "emoji": "🐯",
    "color": "#FB4F14"
  },
  "ATL": {
    "code3": "ATL",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Atlanta Falcons",
    "emoji": "🪶",
    "color": "#A71930"
  },
  "ARI": {
    "code3": "ARI",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Arizona Cardinals",
    "emoji": "🐦",
    "color": "#97233F"
  },
  "WAS": {
    "code3": "WAS",
    "kitType": "duo",
    "secondaryColor": "#FFB612",
    "name": "Washington Commanders",
    "emoji": "🏛️",
    "color": "#5A1414"
  },
  "NYJ": {
    "code3": "NYJ",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "New York Jets",
    "emoji": "✈️",
    "color": "#125740"
  },
  "TEN": {
    "code3": "TEN",
    "kitType": "duo",
    "secondaryColor": "#002244",
    "name": "Tennessee Titans",
    "emoji": "🗡️",
    "color": "#4B92DB"
  },
  "HOU": {
    "code3": "HOU",
    "kitType": "duo",
    "secondaryColor": "#C41230",
    "name": "Houston Texans",
    "emoji": "🐂",
    "color": "#03202F"
  },
  "CAR": {
    "code3": "CAR",
    "kitType": "duo",
    "secondaryColor": "#101820",
    "name": "Carolina Panthers",
    "emoji": "🐈‍⬛",
    "color": "#0085CA"
  },
  "JAX": {
    "code3": "JAX",
    "kitType": "duo",
    "secondaryColor": "#101820",
    "name": "Jacksonville Jaguars",
    "emoji": "🐆",
    "color": "#006778"
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
  "WAS": "The Hogs",
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
      "MIA": 2,
      "BUF": 2,
      "IND": 2,
      "ARI": 2,
      "NYJ": 2,
      "CLE": 2,
      "MIN": 2,
      "PHI": 2
    },
    "B": {
      "CAR": 2,
      "JAX": 2,
      "HOU": 2,
      "SEA": 2,
      "TB": 2,
      "ATL": 2,
      "CIN": 2,
      "NO": 2,
      "LAC": 2,
      "BAL": 2,
      "TEN": 2,
      "LV": 2,
      "LAR": 2
    }
  },
  "nfl_q14": {
    "A": {
      "DAL": 2,
      "NYG": 2,
      "SF": 2,
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
      "CAR": 2,
      "PHI": 2,
      "CHI": 2
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
      "NYG": 2,
      "CAR": 2,
      "ARI": 2,
      "KC": 2
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
      "LAC": 2
    }
  },
  "nfl_q1": {
    "A": {
      "CHI": 3,
      "WAS": 3,
      "MIA": 2,
      "ARI": 2,
      "DEN": 2
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
    },
    "E": {
      "MIN": 2,
      "ATL": 2
    }
  },
  "nfl_q2": {
    "A": {
      "NO": 2,
      "CAR": 3,
      "BUF": 2,
      "CLE": 3
    },
    "B": {
      "MIN": 2,
      "LAC": 3,
      "ATL": 2,
      "WAS": 2
    },
    "C": {
      "NYJ": 3,
      "CIN": 3
    },
    "D": {
      "CLE": 2,
      "DET": 3,
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
      "GB": 2,
      "NE": 3
    },
    "C": {
      "MIA": 3,
      "CHI": 2
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
      "DEN": 3,
      "CLE": 2
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
      "PHI": 2,
      "GB": 3
    },
    "E": {
      "ATL": 2,
      "MIN": 2
    }
  },
  "nfl_q5": {
    "A": {
      "NE": 3,
      "DAL": 2,
      "KC": 2
    },
    "B": {
      "PHI": 3,
      "CIN": 2
    },
    "C": {
      "JAX": 3,
      "CAR": 2,
      "TEN": 2
    },
    "D": {
      "NYG": 3,
      "GB": 3
    },
    "E": {
      "NYJ": 2,
      "TB": 2,
      "ARI": 2,
      "ATL": 2,
      "DET": 3,
      "CLE": 2
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
      "TEN": 3,
      "ATL": 2,
      "CIN": 2
    },
    "B": {
      "ATL": 3,
      "SEA": 2,
      "BUF": 1
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
      "HOU": 3,
      "IND": 2,
      "LAR": 2
    },
    "B": {
      "CLE": 3,
      "GB": 2,
      "DET": 2
    },
    "C": {
      "BAL": 3,
      "NE": 2,
      "PIT": 2
    },
    "D": {
      "NO": 2,
      "PHI": 2,
      "TB": 3
    },
    "E": {
      "GB": 2,
      "NYG": 2,
      "ARI": 2
    }
  },
  "nfl_q9": {
    "1": {
      "NE": 3,
      "GB": 2,
      "PIT": 2,
      "DET": 1,
      "MIA": 1,
      "BAL": 1,
      "NYG": 1,
      "IND": 1,
      "DEN": 1,
      "ARI": 1,
      "TEN": 1,
      "HOU": 1
    },
    "2": {
      "NE": 1,
      "GB": 3,
      "PIT": 3,
      "DET": 3,
      "MIA": 3,
      "BAL": 3,
      "NYG": 3,
      "IND": 3,
      "DEN": 3,
      "ARI": 3,
      "TEN": 3,
      "HOU": 3,
      "KC": 2,
      "SF": 2,
      "CHI": 2,
      "LAR": 2,
      "WAS": 2,
      "CAR": 2,
      "JAX": 2
    },
    "3": {
      "DET": 1,
      "MIA": 1,
      "BAL": 1,
      "NYG": 1,
      "IND": 1,
      "DEN": 1,
      "ARI": 1,
      "TEN": 1,
      "HOU": 1,
      "KC": 3,
      "SF": 3,
      "CHI": 3,
      "LAR": 3,
      "WAS": 3,
      "CAR": 3,
      "JAX": 3,
      "DAL": 3,
      "NO": 3,
      "SEA": 3,
      "BUF": 1,
      "TB": 1,
      "MIN": 1,
      "CIN": 1,
      "ATL": 1
    },
    "4": {
      "DAL": 2,
      "NO": 2,
      "SEA": 2,
      "BUF": 3,
      "TB": 3,
      "MIN": 3,
      "CIN": 3,
      "ATL": 3,
      "PHI": 3,
      "LAC": 3,
      "CLE": 3,
      "NYJ": 3,
      "LV": 1
    },
    "5": {
      "BUF": 1,
      "TB": 1,
      "MIN": 1,
      "CIN": 1,
      "ATL": 1,
      "PHI": 2,
      "LAC": 2,
      "CLE": 2,
      "NYJ": 2,
      "LV": 3
    }
  },
  "nfl_q10": {
    "A": {
      "CAR": 3,
      "TEN": 2,
      "CIN": 2,
      "CLE": 2
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
      "IND": 3,
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
      "NYJ": 3,
      "WAS": 3
    }
  },
  "nfl_q12": {
    "A": {
      "IND": 3,
      "DEN": 3,
      "SF": 3,
      "NE": 3
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
      "CAR": 3,
      "LAC": 3
    },
    "D": {
      "SEA": 3,
      "NO": 3,
      "MIN": 3,
      "WAS": 3,
      "BUF": 2,
      "GB": 2
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

export { moduleQuestions, teams, archetypes, teamTextColors, scoring, teamDims };
