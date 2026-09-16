// FanDNA - EUROLEAGUE data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in euroleague-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "RMA": "The Sovereign",
  "BAR": "The Standard-Bearer",
  "BAS": "The Craftsman",
  "VAL": "The Homegrown",
  "OLY": "The Reigning Red",
  "PAN": "The Old Green",
  "FEN": "The Ascendant",
  "EFS": "The Machine",
  "BES": "The Outsider",
  "PTZ": "The People's Black-and-White",
  "RED": "The Establishment Red",
  "MIL": "The Financier",
  "VIR": "Basket City's Soul",
  "BAY": "The Corporation",
  "ASV": "The Vision Project",
  "PRS": "The Disruptor",
  "HAP": "The Red Cause",
  "MAC": "The Yellow Institution",
  "ZAL": "The Nation in Green",
  "DUB": "The Experiment"
};

const moduleQuestions = [
  {
    "id": "el_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "When something you built finally comes good, the part that means the most to you is...",
    "options": [
      {
        "label": "You grew it yourself, from rough beginnings nobody believed in, and watched it become what it was meant to be.",
        "value": "A"
      },
      {
        "label": "You saw exactly what was missing and went and got it. Give me the finished article over a promising maybe.",
        "value": "B"
      },
      {
        "label": "You didn't grow it or buy it. It was always there, handed down, and you kept it alive.",
        "value": "C"
      },
      {
        "label": "There was nothing there before you. No past to lean on, so you built the whole thing from the ground up.",
        "value": "D"
      }
    ]
  },
  {
    "id": "el_q2",
    "type": "binary",
    "phase": "The fine print",
    "question": "When the work is going well, you would rather...",
    "left": "Be seen doing it, out loud, in the middle of the noise.",
    "right": "Keep your head down and let the result do the talking."
  },
  {
    "id": "el_q3",
    "type": "binary",
    "phase": "The fine print",
    "question": "The places where you do your best work are the ones where...",
    "left": "One person with a clear vision drives the whole thing.",
    "right": "No single person is ever bigger than the thing itself."
  },
  {
    "id": "el_q4",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Somewhere in you, you have always felt more like...",
    "options": [
      {
        "label": "One of the establishment, and settled being there.",
        "value": "A"
      },
      {
        "label": "Part of something big, but never quite at peace inside it.",
        "value": "B"
      },
      {
        "label": "An outsider who still has something to prove.",
        "value": "C"
      }
    ]
  }
];

const scoring = {
  "el_q1": {
    "A": {
      "RMA": 3,
      "BAS": 3,
      "VAL": 3,
      "BES": 3,
      "PTZ": 3,
      "ASV": 3,
      "ZAL": 3,
      "EFS": 2,
      "BAR": 1
    },
    "B": {
      "FEN": 3,
      "EFS": 3,
      "MIL": 3,
      "BAY": 3,
      "MAC": 3,
      "RMA": 2,
      "OLY": 2,
      "HAP": 2
    },
    "C": {
      "BAR": 3,
      "OLY": 3,
      "PAN": 3,
      "RED": 3,
      "VIR": 3,
      "HAP": 3,
      "ZAL": 2
    },
    "D": {
      "PRS": 3,
      "DUB": 3
    }
  },
  "el_q2": {
    "left": {
      "BAR": 3,
      "OLY": 3,
      "PAN": 3,
      "FEN": 3,
      "BES": 3,
      "PTZ": 3,
      "RED": 3,
      "PRS": 3,
      "HAP": 3,
      "DUB": 3,
      "MAC": 2
    },
    "right": {
      "RMA": 3,
      "BAS": 3,
      "VAL": 3,
      "EFS": 3,
      "MIL": 3,
      "VIR": 3,
      "BAY": 3,
      "ASV": 3,
      "MAC": 3,
      "ZAL": 3,
      "FEN": 2,
      "OLY": 2
    }
  },
  "el_q3": {
    "left": {
      "BAS": 3,
      "VAL": 3,
      "OLY": 3,
      "PAN": 3,
      "EFS": 3,
      "MIL": 3,
      "VIR": 3,
      "ASV": 3,
      "PRS": 3,
      "DUB": 3,
      "RMA": 2
    },
    "right": {
      "RMA": 3,
      "BAR": 3,
      "FEN": 3,
      "BES": 3,
      "PTZ": 3,
      "RED": 3,
      "BAY": 3,
      "HAP": 3,
      "MAC": 3,
      "ZAL": 3,
      "DUB": 2
    }
  },
  "el_q4": {
    "A": {
      "RMA": 3,
      "MAC": 3,
      "EFS": 3,
      "BAY": 3,
      "MIL": 3
    },
    "B": {
      "PAN": 3,
      "RED": 3,
      "FEN": 3,
      "BAR": 3,
      "VIR": 3,
      "OLY": 3,
      "ASV": 2
    },
    "C": {
      "BAS": 3,
      "VAL": 3,
      "BES": 3,
      "PTZ": 3,
      "PRS": 3,
      "HAP": 3,
      "ZAL": 3,
      "ASV": 3,
      "DUB": 3,
      "OLY": 2
    }
  }
};

const teamDims = {
  "RMA": {
    "loyalty": 8,
    "emotion": 5,
    "ambition": 10,
    "process": 7,
    "community": 4,
    "chaos": 2,
    "rootedness": 9
  },
  "BAR": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 5,
    "community": 10,
    "chaos": 4,
    "rootedness": 8
  },
  "BAS": {
    "loyalty": 6,
    "emotion": 4,
    "ambition": 5,
    "process": 10,
    "community": 5,
    "chaos": 3,
    "rootedness": 8
  },
  "VAL": {
    "loyalty": 6,
    "emotion": 4,
    "ambition": 6,
    "process": 8,
    "community": 8,
    "chaos": 2,
    "rootedness": 5
  },
  "OLY": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 9,
    "process": 8,
    "community": 9,
    "chaos": 5,
    "rootedness": 7
  },
  "PAN": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 9,
    "process": 3,
    "community": 5,
    "chaos": 8,
    "rootedness": 9
  },
  "FEN": {
    "loyalty": 6,
    "emotion": 8,
    "ambition": 9,
    "process": 8,
    "community": 5,
    "chaos": 4,
    "rootedness": 5
  },
  "EFS": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 9,
    "process": 9,
    "community": 5,
    "chaos": 3,
    "rootedness": 8
  },
  "BES": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 4,
    "process": 3,
    "community": 8,
    "chaos": 8,
    "rootedness": 5
  },
  "PTZ": {
    "loyalty": 7,
    "emotion": 9,
    "ambition": 5,
    "process": 6,
    "community": 8,
    "chaos": 9,
    "rootedness": 8
  },
  "RED": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 8,
    "process": 5,
    "community": 7,
    "chaos": 6,
    "rootedness": 8
  },
  "MIL": {
    "loyalty": 4,
    "emotion": 4,
    "ambition": 9,
    "process": 9,
    "community": 3,
    "chaos": 2,
    "rootedness": 8
  },
  "VIR": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 5,
    "process": 5,
    "community": 7,
    "chaos": 4,
    "rootedness": 10
  },
  "BAY": {
    "loyalty": 4,
    "emotion": 3,
    "ambition": 8,
    "process": 8,
    "community": 4,
    "chaos": 2,
    "rootedness": 4
  },
  "ASV": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 8,
    "process": 7,
    "community": 5,
    "chaos": 6,
    "rootedness": 7
  },
  "PRS": {
    "loyalty": 3,
    "emotion": 6,
    "ambition": 9,
    "process": 7,
    "community": 4,
    "chaos": 8,
    "rootedness": 2
  },
  "HAP": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 5,
    "process": 4,
    "community": 10,
    "chaos": 7,
    "rootedness": 7
  },
  "MAC": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 9,
    "process": 8,
    "community": 7,
    "chaos": 3,
    "rootedness": 9
  },
  "ZAL": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 5,
    "process": 5,
    "community": 9,
    "chaos": 5,
    "rootedness": 10
  },
  "DUB": {
    "loyalty": 2,
    "emotion": 4,
    "ambition": 10,
    "process": 8,
    "community": 2,
    "chaos": 5,
    "rootedness": 1
  }
};

const teamTextColors = {
  "RMA": "#9AA6D2",
  "BAR": "#D96A93",
  "BAS": "#6E7FB8",
  "VAL": "#F4A94D",
  "OLY": "#E86B7C",
  "PAN": "#4DA97D",
  "FEN": "#FFF37A",
  "EFS": "#6E8AC0",
  "BES": "#B8BCC2",
  "PTZ": "#B8BCC2",
  "RED": "#E56575",
  "MIL": "#EF6474",
  "VIR": "#B8BCC2",
  "BAY": "#E9657C",
  "ASV": "#C9A24B",
  "PRS": "#6273A8",
  "HAP": "#EF6478",
  "MAC": "#FFE566",
  "ZAL": "#4DA877",
  "DUB": "#A47C55"
};

const teams = {
  "RMA": {
    "name": "Real Madrid",
    "emoji": "👑",
    "color": "#5B6DAD",
    "code3": "RMA",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "BAR": {
    "name": "FC Barcelona",
    "emoji": "🔵",
    "color": "#A50044",
    "code3": "BAR",
    "kitType": "duo",
    "secondaryColor": "#004D98"
  },
  "BAS": {
    "name": "Baskonia",
    "emoji": "🛡️",
    "color": "#001E62",
    "code3": "BAS",
    "kitType": "duo",
    "secondaryColor": "#D81E05"
  },
  "VAL": {
    "name": "Valencia Basket",
    "emoji": "🟠",
    "color": "#EE7F00",
    "code3": "VAL",
    "kitType": "duo",
    "secondaryColor": "#111111"
  },
  "OLY": {
    "name": "Olympiacos",
    "emoji": "🔴",
    "color": "#DA1A32",
    "code3": "OLY",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "PAN": {
    "name": "Panathinaikos",
    "emoji": "🟢",
    "color": "#007A3D",
    "code3": "PAN",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "FEN": {
    "name": "Fenerbahçe",
    "emoji": "💛",
    "color": "#FFED00",
    "code3": "FEN",
    "kitType": "duo",
    "secondaryColor": "#0A1E3C"
  },
  "EFS": {
    "name": "Anadolu Efes",
    "emoji": "🔷",
    "color": "#0A2C5C",
    "code3": "EFS",
    "kitType": "duo",
    "secondaryColor": "#E30613"
  },
  "BES": {
    "name": "Beşiktaş",
    "emoji": "🦅",
    "color": "#111111",
    "code3": "BES",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "PTZ": {
    "name": "Partizan",
    "emoji": "⚫",
    "color": "#151515",
    "code3": "PTZ",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "RED": {
    "name": "Crvena zvezda",
    "emoji": "⭐",
    "color": "#CE1126",
    "code3": "RED",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "MIL": {
    "name": "Olimpia Milano",
    "emoji": "🔴",
    "color": "#E2001A",
    "code3": "MIL",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "VIR": {
    "name": "Virtus Bologna",
    "emoji": "⚫",
    "color": "#1A1A1A",
    "code3": "VIR",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "BAY": {
    "name": "Bayern Munich",
    "emoji": "🔺",
    "color": "#DC052D",
    "code3": "BAY",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "ASV": {
    "name": "LDLC ASVEL",
    "emoji": "🦁",
    "color": "#111111",
    "code3": "ASV",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "PRS": {
    "name": "Paris Basketball",
    "emoji": "🗼",
    "color": "#1A2A5E",
    "code3": "PRS",
    "kitType": "duo",
    "secondaryColor": "#E30613"
  },
  "HAP": {
    "name": "Hapoel Tel Aviv",
    "emoji": "🔴",
    "color": "#E4002B",
    "code3": "HAP",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "MAC": {
    "name": "Maccabi Tel Aviv",
    "emoji": "💛",
    "color": "#FFD700",
    "code3": "MAC",
    "kitType": "duo",
    "secondaryColor": "#004B87"
  },
  "ZAL": {
    "name": "Žalgiris",
    "emoji": "💚",
    "color": "#007A33",
    "code3": "ZAL",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "DUB": {
    "name": "Dubai Basketball",
    "emoji": "🟤",
    "color": "#6B4423",
    "code3": "DUB",
    "kitType": "duo",
    "secondaryColor": "#111111"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
