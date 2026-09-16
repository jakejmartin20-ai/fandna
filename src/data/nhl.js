// FanDNA - NHL data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in nhl-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

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

const moduleQuestions = [
  {
    "id": "nhl_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "The people you’d want around you when it counts:",
    "options": [
      {
        "label": "A small group who built something together and never walked away.",
        "value": "A"
      },
      {
        "label": "A whole community around me, all pulling the same way.",
        "value": "B"
      },
      {
        "label": "The most capable people I can find, wherever they come from.",
        "value": "C"
      },
      {
        "label": "My own few, outnumbered wherever we go, and prouder for it.",
        "value": "D"
      },
      {
        "label": "The more of us the better. There’s real strength in numbers.",
        "value": "E"
      }
    ]
  },
  {
    "id": "nhl_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "When you’re doing something that matters, how much you want the eyes on you:",
    "options": [
      {
        "label": "All the way. The biggest stage, the brightest lights, the pressure that comes with them.",
        "value": "A"
      },
      {
        "label": "A real stage is good, but it doesn’t have to be the brightest in the room.",
        "value": "B"
      },
      {
        "label": "Doesn’t move me. The work is the same whether anyone’s watching or not.",
        "value": "C"
      }
    ]
  },
  {
    "id": "nhl_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "Up against something genuinely hard, the way you get through it:",
    "options": [
      {
        "label": "I wear it down. Outlast it, outwork it, refuse to break first.",
        "value": "A"
      },
      {
        "label": "I find the angle. Skill and a little cleverness get me around it.",
        "value": "B"
      },
      {
        "label": "I throw everything at it at once and trust it gives.",
        "value": "C"
      }
    ]
  },
  {
    "id": "nhl_q4",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "You’ve finally pulled off the biggest thing you ever set out to do. What happens in you next:",
    "options": [
      {
        "label": "Do it again. And again. One is never enough for me.",
        "value": "A"
      },
      {
        "label": "Savour it. That was the mountain, and I climbed it.",
        "value": "B"
      },
      {
        "label": "Proud, but the chase always meant more to me than the prize.",
        "value": "C"
      }
    ]
  },
  {
    "id": "nhl_q5",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "What you’d rather be part of:",
    "options": [
      {
        "label": "Something with a century behind it. The history is the point, even when it weighs on you.",
        "value": "A"
      },
      {
        "label": "Something I helped build into what it is.",
        "value": "B"
      },
      {
        "label": "Something brand new. No history to live up to, just a clean page I get to write.",
        "value": "C"
      }
    ]
  },
  {
    "id": "nhl_q6",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The way you hold the things that matter to you:",
    "options": [
      {
        "label": "With reverence. I feel the weight of everyone who came before, and I carry it.",
        "value": "A"
      },
      {
        "label": "As a celebration. I throw myself in, here and now, and make it a party.",
        "value": "B"
      },
      {
        "label": "I respect what came before, but I’m here for what it is now.",
        "value": "C"
      }
    ]
  }
];

const scoring = {
  "nhl_q1": {
    "A": {
      "DAL": 3,
      "STL": 3,
      "CAR": 3,
      "NJD": 3,
      "TBL": 1,
      "WPG": 1,
      "NYI": 1
    },
    "B": {
      "MTL": 3,
      "TOR": 3,
      "DET": 3,
      "EDM": 3,
      "VAN": 3,
      "OTT": 3,
      "MIN": 3,
      "CBJ": 3,
      "COL": 3,
      "SEA": 3,
      "UTA": 3,
      "BOS": 1,
      "CHI": 1,
      "NSH": 1
    },
    "C": {
      "NYR": 3,
      "PIT": 3,
      "WSH": 3,
      "LAK": 3,
      "TBL": 3,
      "VGK": 3,
      "ANA": 3,
      "SJS": 3,
      "SEA": 1
    },
    "D": {
      "WPG": 3,
      "NYI": 3,
      "NJD": 2
    },
    "E": {
      "BOS": 3,
      "CHI": 3,
      "CGY": 3,
      "PHI": 3,
      "BUF": 3,
      "NSH": 3,
      "FLA": 3
    }
  },
  "nhl_q2": {
    "A": {
      "MTL": 3,
      "TOR": 3,
      "CHI": 3,
      "NYR": 3,
      "PIT": 3,
      "LAK": 3,
      "VGK": 3,
      "WSH": 1
    },
    "B": {
      "BOS": 3,
      "DET": 3,
      "EDM": 3,
      "VAN": 3,
      "PHI": 3,
      "NYI": 3,
      "WSH": 3,
      "TBL": 3,
      "FLA": 3,
      "SEA": 3,
      "PIT": 1,
      "DAL": 1,
      "NSH": 1,
      "CAR": 1
    },
    "C": {
      "CGY": 3,
      "WPG": 3,
      "OTT": 3,
      "BUF": 3,
      "STL": 3,
      "MIN": 3,
      "NSH": 3,
      "CBJ": 3,
      "NJD": 3,
      "CAR": 3,
      "DAL": 3,
      "COL": 3,
      "UTA": 3,
      "ANA": 3,
      "SJS": 3
    }
  },
  "nhl_q3": {
    "A": {
      "TOR": 3,
      "BOS": 3,
      "CGY": 3,
      "WPG": 3,
      "PHI": 3,
      "BUF": 3,
      "STL": 3,
      "NYI": 3,
      "NSH": 3,
      "CBJ": 3,
      "NJD": 3,
      "DAL": 3,
      "WSH": 3,
      "LAK": 3,
      "VGK": 3,
      "FLA": 3,
      "ANA": 3,
      "CAR": 1
    },
    "B": {
      "MTL": 3,
      "DET": 3,
      "NYR": 3,
      "EDM": 3,
      "MIN": 3,
      "CAR": 3,
      "PIT": 3,
      "COL": 3,
      "TBL": 3,
      "SEA": 3,
      "UTA": 3,
      "SJS": 3
    },
    "C": {
      "CHI": 3,
      "VAN": 3,
      "OTT": 3,
      "FLA": 1,
      "PHI": 1
    }
  },
  "nhl_q4": {
    "A": {
      "MTL": 3,
      "BOS": 3,
      "DET": 3,
      "CHI": 3,
      "NYR": 3,
      "EDM": 3,
      "PHI": 3,
      "NYI": 3,
      "PIT": 3,
      "COL": 3,
      "TBL": 3,
      "VGK": 3,
      "FLA": 3,
      "WSH": 1,
      "TOR": 1,
      "SJS": 1
    },
    "B": {
      "CGY": 3,
      "STL": 3,
      "NJD": 3,
      "CAR": 3,
      "DAL": 3,
      "WSH": 3,
      "LAK": 3,
      "ANA": 3
    },
    "C": {
      "TOR": 3,
      "VAN": 3,
      "WPG": 3,
      "OTT": 3,
      "BUF": 3,
      "MIN": 3,
      "NSH": 3,
      "CBJ": 3,
      "SEA": 3,
      "UTA": 3,
      "SJS": 3
    }
  },
  "nhl_q5": {
    "A": {
      "MTL": 3,
      "TOR": 3,
      "BOS": 3,
      "DET": 3,
      "CHI": 3,
      "NYR": 3,
      "WPG": 1,
      "SEA": 2
    },
    "B": {
      "EDM": 3,
      "CGY": 3,
      "VAN": 3,
      "WPG": 3,
      "PHI": 3,
      "BUF": 3,
      "STL": 3,
      "NYI": 3,
      "NJD": 3,
      "DAL": 3,
      "PIT": 3,
      "WSH": 3,
      "COL": 3,
      "LAK": 3,
      "TBL": 1,
      "VGK": 1
    },
    "C": {
      "OTT": 3,
      "MIN": 3,
      "NSH": 3,
      "CBJ": 3,
      "CAR": 3,
      "TBL": 3,
      "VGK": 3,
      "FLA": 3,
      "SEA": 3,
      "UTA": 3,
      "ANA": 3,
      "SJS": 3
    }
  },
  "nhl_q6": {
    "A": {
      "MTL": 3,
      "TOR": 3,
      "DET": 3,
      "BOS": 3,
      "EDM": 3,
      "WPG": 3,
      "MIN": 3,
      "OTT": 3,
      "CHI": 3,
      "NYR": 3,
      "PHI": 3,
      "BUF": 3,
      "NYI": 3,
      "CGY": 3,
      "VAN": 3,
      "ANA": 1,
      "STL": 1,
      "NJD": 1,
      "SJS": 1
    },
    "B": {
      "VGK": 3,
      "DAL": 3,
      "NSH": 3,
      "FLA": 3,
      "TBL": 3,
      "CAR": 3,
      "LAK": 3,
      "SEA": 3,
      "ANA": 3,
      "CHI": 1,
      "NYR": 1,
      "PIT": 1,
      "WSH": 1
    },
    "C": {
      "STL": 3,
      "CBJ": 3,
      "NJD": 3,
      "PIT": 3,
      "WSH": 3,
      "COL": 3,
      "UTA": 3,
      "SJS": 3,
      "SEA": 2,
      "LAK": 1
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
    "emotion": 9,
    "ambition": 8,
    "process": 5,
    "community": 7,
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
    "emotion": 7,
    "ambition": 5,
    "process": 6,
    "community": 8,
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

const teams = {
  "MTL": {
    "name": "Montreal Canadiens",
    "emoji": "⚜️",
    "color": "#AF1E2D",
    "code3": "MTL",
    "kitType": "duo",
    "secondaryColor": "#192168"
  },
  "TOR": {
    "name": "Toronto Maple Leafs",
    "emoji": "🍁",
    "color": "#00205B",
    "code3": "TOR",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "BOS": {
    "name": "Boston Bruins",
    "emoji": "🐻",
    "color": "#000000",
    "code3": "BOS",
    "kitType": "duo",
    "secondaryColor": "#FFB81C"
  },
  "DET": {
    "name": "Detroit Red Wings",
    "emoji": "🐙",
    "color": "#CE1126",
    "code3": "DET",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "CHI": {
    "name": "Chicago Blackhawks",
    "emoji": "🪶",
    "color": "#CF0A2C",
    "code3": "CHI",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "NYR": {
    "name": "New York Rangers",
    "emoji": "🗽",
    "color": "#0038A8",
    "code3": "NYR",
    "kitType": "duo",
    "secondaryColor": "#CE1126"
  },
  "EDM": {
    "name": "Edmonton Oilers",
    "emoji": "🛢️",
    "color": "#FF4C00",
    "code3": "EDM",
    "kitType": "duo",
    "secondaryColor": "#041E42"
  },
  "CGY": {
    "name": "Calgary Flames",
    "emoji": "🔥",
    "color": "#C8102E",
    "code3": "CGY",
    "kitType": "duo",
    "secondaryColor": "#F1BE48"
  },
  "VAN": {
    "name": "Vancouver Canucks",
    "emoji": "🐋",
    "color": "#00205B",
    "code3": "VAN",
    "kitType": "duo",
    "secondaryColor": "#00843D"
  },
  "WPG": {
    "name": "Winnipeg Jets",
    "emoji": "✈️",
    "color": "#041E42",
    "code3": "WPG",
    "kitType": "duo",
    "secondaryColor": "#004C97"
  },
  "OTT": {
    "name": "Ottawa Senators",
    "emoji": "🏛️",
    "color": "#C52032",
    "code3": "OTT",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "PHI": {
    "name": "Philadelphia Flyers",
    "emoji": "🛣️",
    "color": "#F74902",
    "code3": "PHI",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "BUF": {
    "name": "Buffalo Sabres",
    "emoji": "⚔️",
    "color": "#003087",
    "code3": "BUF",
    "kitType": "duo",
    "secondaryColor": "#FFB81C"
  },
  "STL": {
    "name": "St. Louis Blues",
    "emoji": "🎷",
    "color": "#002F87",
    "code3": "STL",
    "kitType": "duo",
    "secondaryColor": "#FCB514"
  },
  "NYI": {
    "name": "New York Islanders",
    "emoji": "🏝️",
    "color": "#00539B",
    "code3": "NYI",
    "kitType": "duo",
    "secondaryColor": "#F47D30"
  },
  "MIN": {
    "name": "Minnesota Wild",
    "emoji": "🌲",
    "color": "#154734",
    "code3": "MIN",
    "kitType": "duo",
    "secondaryColor": "#A6192E"
  },
  "NSH": {
    "name": "Nashville Predators",
    "emoji": "🎸",
    "color": "#FFB81C",
    "code3": "NSH",
    "kitType": "duo",
    "secondaryColor": "#041E42"
  },
  "CBJ": {
    "name": "Columbus Blue Jackets",
    "emoji": "💣",
    "color": "#002654",
    "code3": "CBJ",
    "kitType": "duo",
    "secondaryColor": "#CE1126"
  },
  "NJD": {
    "name": "New Jersey Devils",
    "emoji": "😈",
    "color": "#CE1126",
    "code3": "NJD",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "CAR": {
    "name": "Carolina Hurricanes",
    "emoji": "🌀",
    "color": "#CC0000",
    "code3": "CAR",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "DAL": {
    "name": "Dallas Stars",
    "emoji": "⭐",
    "color": "#006847",
    "code3": "DAL",
    "kitType": "duo",
    "secondaryColor": "#8F8F8C"
  },
  "PIT": {
    "name": "Pittsburgh Penguins",
    "emoji": "🐧",
    "color": "#000000",
    "code3": "PIT",
    "kitType": "duo",
    "secondaryColor": "#FCB514"
  },
  "WSH": {
    "name": "Washington Capitals",
    "emoji": "🦅",
    "color": "#C8102E",
    "code3": "WSH",
    "kitType": "duo",
    "secondaryColor": "#041E42"
  },
  "COL": {
    "name": "Colorado Avalanche",
    "emoji": "🏔️",
    "color": "#6F263D",
    "code3": "COL",
    "kitType": "duo",
    "secondaryColor": "#236192"
  },
  "LAK": {
    "name": "Los Angeles Kings",
    "emoji": "👑",
    "color": "#111111",
    "code3": "LAK",
    "kitType": "duo",
    "secondaryColor": "#A2AAAD"
  },
  "TBL": {
    "name": "Tampa Bay Lightning",
    "emoji": "⚡",
    "color": "#002868",
    "code3": "TBL",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "VGK": {
    "name": "Vegas Golden Knights",
    "emoji": "🎰",
    "color": "#B4975A",
    "code3": "VGK",
    "kitType": "duo",
    "secondaryColor": "#333F42"
  },
  "FLA": {
    "name": "Florida Panthers",
    "emoji": "🐀",
    "color": "#C8102E",
    "code3": "FLA",
    "kitType": "duo",
    "secondaryColor": "#041E42"
  },
  "SEA": {
    "name": "Seattle Kraken",
    "emoji": "🦑",
    "color": "#001628",
    "code3": "SEA",
    "kitType": "duo",
    "secondaryColor": "#99D9D9"
  },
  "UTA": {
    "name": "Utah Mammoth",
    "emoji": "🦣",
    "color": "#71AFE5",
    "code3": "UTA",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "ANA": {
    "name": "Anaheim Ducks",
    "emoji": "🦆",
    "color": "#F47A38",
    "code3": "ANA",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "SJS": {
    "name": "San Jose Sharks",
    "emoji": "🦈",
    "color": "#006D75",
    "code3": "SJS",
    "kitType": "duo",
    "secondaryColor": "#000000"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
