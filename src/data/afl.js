// FanDNA - AFL data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in afl-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "CAR": "The Old Dark Navys",
  "COL": "Side By Side",
  "ESS": "The Red Sash",
  "GEE": "The Cattery",
  "HAW": "The Hard Way",
  "MEL": "The Founders",
  "NTH": "Shinboners",
  "RIC": "Eat 'Em Alive",
  "STK": "Moorabbin",
  "WBD": "Sons of the West",
  "ADE": "Pride of SA",
  "PTA": "Prison Bars",
  "WCE": "Perth's Own",
  "FRE": "Freo",
  "SYD": "The Bloods",
  "GWS": "Big Sky",
  "BRL": "The Pride",
  "GCS": "Gold Coast Sky"
};

const moduleQuestions = [
  {
    "id": "afl_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "Old institutions all have a pecking order everyone silently knows. Yours put you:",
    "options": [
      {
        "label": "Near the top, an old name held to a standard.",
        "value": "A"
      },
      {
        "label": "In the thick of the masses, loud and ordinary.",
        "value": "B"
      },
      {
        "label": "Off to the side and rising, results over the old order.",
        "value": "C"
      },
      {
        "label": "At the very bottom, handed nothing, carrying a chip.",
        "value": "D"
      }
    ]
  },
  {
    "id": "afl_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "Champion team, or a team of champions?",
    "options": [
      {
        "label": "A team of champions. Gather the standouts and let them win.",
        "value": "A"
      },
      {
        "label": "A champion team. No egos, the whole beats the parts.",
        "value": "B"
      },
      {
        "label": "Neither. It comes down to hunger, the side that wants it most.",
        "value": "C"
      },
      {
        "label": "Neither. It comes down to heart, a side that plays for each other.",
        "value": "D"
      }
    ]
  },
  {
    "id": "afl_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "The ultimate prize, or the love of the thing itself?",
    "left": "The prize. I am here to win it all, nothing less.",
    "right": "The love. I would follow it to the bottom and back."
  },
  {
    "id": "afl_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "It has fallen apart again, the way it always seems to. When it hurts, who sees it?",
    "options": [
      {
        "label": "No one. I go quiet and keep it to myself.",
        "value": "A"
      },
      {
        "label": "Everyone. I feel it all and it pours out.",
        "value": "B"
      },
      {
        "label": "Only my own. We carry it together, in close.",
        "value": "C"
      },
      {
        "label": "No one, because it hardens me. I go cold.",
        "value": "D"
      }
    ]
  },
  {
    "id": "afl_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "The thing you have given years to makes a call that feels like a betrayal. You:",
    "options": [
      {
        "label": "Stay, no question. That was never up for negotiation.",
        "value": "A"
      },
      {
        "label": "Move on. I am loyal, but not at any price.",
        "value": "B"
      },
      {
        "label": "Fight to fix it from the inside.",
        "value": "C"
      },
      {
        "label": "Follow the people I trust, wherever they go.",
        "value": "D"
      }
    ]
  },
  {
    "id": "afl_q6",
    "type": "slider",
    "phase": "The fine print",
    "question": "When it is all on the line, does the feeling pour out of you, or vanish?",
    "left": "It pours out. Everyone around me feels it too.",
    "right": "Ice cold. Nothing shows on me at all."
  },
  {
    "id": "afl_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "A whole crowd of strangers have decided they cannot stand you, sight unseen. That lands how?",
    "options": [
      {
        "label": "I love it. Their hating me only proves I matter.",
        "value": "A"
      },
      {
        "label": "It bounces off. I genuinely do not care.",
        "value": "B"
      },
      {
        "label": "It stings, and I use it as fuel.",
        "value": "C"
      },
      {
        "label": "I would hate it. I would far rather be liked.",
        "value": "D"
      }
    ]
  },
  {
    "id": "afl_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The kind of group you'd actually want to belong to:",
    "options": [
      {
        "label": "Big, where I'm one of many.",
        "value": "A"
      },
      {
        "label": "Tight, small enough to be known by name.",
        "value": "B"
      },
      {
        "label": "Sharp, and clearly going somewhere.",
        "value": "C"
      },
      {
        "label": "Brand new, so I get to help build it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "afl_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "Sunk into one patch of ground for good, or at home wherever you turn up?",
    "left": "One patch, generations deep. I belong to it.",
    "right": "Wherever I land next. Home is not a postcode."
  },
  {
    "id": "afl_q13",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The thing you love has gone slick and corporate, run by money now. That leaves you:",
    "options": [
      {
        "label": "Gutted. It was ours, and now it is not.",
        "value": "A"
      },
      {
        "label": "Fine by me. Run it like a business and win.",
        "value": "B"
      },
      {
        "label": "Reluctantly on board, as long as the club still belongs to its people.",
        "value": "E"
      },
      {
        "label": "Untouched. My club runs deeper than whoever owns it.",
        "value": "C"
      },
      {
        "label": "Unbothered. I never had an old soul to lose, I am the new model.",
        "value": "D"
      }
    ]
  },
  {
    "id": "afl_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When it truly counts, the way you actually get it done:",
    "options": [
      {
        "label": "By the system, to the letter.",
        "value": "A"
      },
      {
        "label": "A plan, but with room to read the moment.",
        "value": "B"
      },
      {
        "label": "On pure feel, whatever the moment tells me.",
        "value": "C"
      },
      {
        "label": "However I can. I make it up as I go.",
        "value": "D"
      }
    ]
  },
  {
    "id": "afl_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The rung on the ladder where you are most at home:",
    "options": [
      {
        "label": "Out in front, and hunted for it.",
        "value": "A"
      },
      {
        "label": "Right in the mix of it.",
        "value": "B"
      },
      {
        "label": "The outsider, written off.",
        "value": "C"
      },
      {
        "label": "Just glad to be in it at all.",
        "value": "D"
      }
    ]
  }
];

const scoring = {
  "afl_q1": {
    "A": {
      "CAR": 2,
      "MEL": 2,
      "ESS": 2,
      "GEE": 2
    },
    "B": {
      "COL": 2,
      "RIC": 2,
      "PTA": 2,
      "FRE": 2
    },
    "C": {
      "HAW": 2,
      "WCE": 2,
      "SYD": 2,
      "ADE": 2,
      "BRL": 2
    },
    "D": {
      "NTH": 2,
      "STK": 2,
      "WBD": 2,
      "GWS": 2,
      "GCS": 2
    }
  },
  "afl_q2": {
    "A": {
      "RIC": 2,
      "GCS": 2,
      "ADE": 2,
      "CAR": 2
    },
    "B": {
      "SYD": 2,
      "GEE": 2,
      "WBD": 2,
      "NTH": 2
    },
    "C": {
      "HAW": 2,
      "BRL": 2,
      "GWS": 2,
      "MEL": 2
    },
    "D": {
      "COL": 2,
      "ESS": 2,
      "WCE": 2,
      "STK": 2,
      "FRE": 2,
      "PTA": 2
    }
  },
  "afl_q4": {
    "A": {
      "NTH": 2,
      "GEE": 2,
      "SYD": 2,
      "WCE": 2
    },
    "B": {
      "STK": 2,
      "ESS": 2,
      "FRE": 2,
      "MEL": 2
    },
    "C": {
      "WBD": 2,
      "GCS": 2,
      "ADE": 2,
      "BRL": 2
    },
    "D": {
      "PTA": 2,
      "RIC": 2,
      "COL": 2,
      "CAR": 2,
      "HAW": 2,
      "GWS": 2
    }
  },
  "afl_q5": {
    "A": {
      "COL": 2,
      "ESS": 2,
      "NTH": 2,
      "MEL": 2,
      "PTA": 2,
      "CAR": 2
    },
    "B": {
      "GWS": 2,
      "GCS": 2,
      "ADE": 2,
      "WCE": 2
    },
    "C": {
      "WBD": 2,
      "FRE": 2,
      "STK": 2,
      "GEE": 2
    },
    "D": {
      "HAW": 2,
      "SYD": 2,
      "BRL": 2,
      "RIC": 2
    }
  },
  "afl_q7": {
    "A": {
      "PTA": 2,
      "COL": 2,
      "ESS": 2,
      "GWS": 2
    },
    "B": {
      "HAW": 2,
      "GEE": 2,
      "SYD": 2,
      "WCE": 2,
      "MEL": 2,
      "CAR": 2
    },
    "C": {
      "RIC": 2,
      "STK": 2,
      "FRE": 2,
      "NTH": 2
    },
    "D": {
      "BRL": 2,
      "ADE": 2,
      "WBD": 2,
      "GCS": 2
    }
  },
  "afl_q8": {
    "A": {
      "COL": 2,
      "RIC": 2,
      "ESS": 2,
      "FRE": 2
    },
    "B": {
      "CAR": 2,
      "MEL": 2,
      "GEE": 2,
      "WBD": 2,
      "PTA": 2,
      "STK": 2,
      "NTH": 2
    },
    "C": {
      "WCE": 2,
      "ADE": 2,
      "SYD": 2,
      "HAW": 2,
      "BRL": 2
    },
    "D": {
      "GWS": 2,
      "GCS": 2
    }
  },
  "afl_q13": {
    "A": {
      "COL": 2,
      "ESS": 2,
      "RIC": 2,
      "STK": 2,
      "FRE": 2,
      "PTA": 2
    },
    "B": {
      "HAW": 2,
      "WCE": 2,
      "ADE": 2,
      "SYD": 2,
      "BRL": 2
    },
    "C": {
      "CAR": 2,
      "MEL": 2,
      "GEE": 2
    },
    "D": {
      "GWS": 2,
      "GCS": 2
    },
    "E": {
      "WBD": 2,
      "NTH": 2
    }
  },
  "afl_q11": {
    "A": {
      "HAW": 2,
      "BRL": 2,
      "GWS": 2,
      "MEL": 2,
      "ADE": 2,
      "ESS": 2,
      "WCE": 2
    },
    "B": {
      "SYD": 2,
      "GEE": 2,
      "WBD": 2,
      "NTH": 2,
      "FRE": 2
    },
    "C": {
      "RIC": 2,
      "GCS": 2,
      "CAR": 2,
      "STK": 2
    },
    "D": {
      "PTA": 2,
      "COL": 2
    }
  },
  "afl_q12": {
    "A": {
      "COL": 2,
      "HAW": 2,
      "GEE": 2,
      "CAR": 2
    },
    "B": {
      "RIC": 2,
      "PTA": 2,
      "SYD": 2,
      "BRL": 2,
      "ESS": 2,
      "WCE": 2,
      "ADE": 2
    },
    "C": {
      "STK": 2,
      "NTH": 2,
      "WBD": 2,
      "FRE": 2,
      "MEL": 2
    },
    "D": {
      "GWS": 2,
      "GCS": 2
    }
  },
  "afl_q3": {
    "1": {
      "CAR": 3,
      "COL": 3,
      "HAW": 3,
      "WCE": 3,
      "GEE": 2,
      "ADE": 2,
      "SYD": 2,
      "GWS": 2,
      "BRL": 2,
      "ESS": 2,
      "RIC": 2,
      "PTA": 2
    },
    "2": {
      "CAR": 2,
      "COL": 2,
      "HAW": 2,
      "WCE": 2,
      "GEE": 3,
      "ADE": 3,
      "SYD": 3,
      "GWS": 3,
      "BRL": 3,
      "ESS": 3,
      "RIC": 3,
      "PTA": 3,
      "MEL": 1,
      "WBD": 1,
      "FRE": 1,
      "GCS": 1
    },
    "3": {
      "CAR": 1,
      "COL": 1,
      "HAW": 1,
      "WCE": 1,
      "GEE": 2,
      "ADE": 2,
      "SYD": 2,
      "GWS": 2,
      "BRL": 2,
      "ESS": 2,
      "RIC": 2,
      "PTA": 2,
      "MEL": 2,
      "WBD": 2,
      "FRE": 2,
      "GCS": 2,
      "NTH": 1,
      "STK": 1
    },
    "4": {
      "GEE": 1,
      "ADE": 1,
      "SYD": 1,
      "GWS": 1,
      "BRL": 1,
      "ESS": 1,
      "RIC": 1,
      "PTA": 1,
      "MEL": 3,
      "WBD": 3,
      "FRE": 3,
      "GCS": 3,
      "NTH": 2,
      "STK": 2
    },
    "5": {
      "MEL": 2,
      "WBD": 2,
      "FRE": 2,
      "GCS": 2,
      "NTH": 3,
      "STK": 3
    }
  },
  "afl_q6": {
    "1": {
      "RIC": 3,
      "STK": 3,
      "PTA": 2,
      "FRE": 2,
      "COL": 1,
      "ESS": 1,
      "ADE": 1,
      "BRL": 1
    },
    "2": {
      "RIC": 2,
      "STK": 2,
      "PTA": 3,
      "FRE": 3,
      "COL": 2,
      "ESS": 2,
      "ADE": 2,
      "BRL": 2,
      "GEE": 1,
      "MEL": 1,
      "NTH": 1,
      "WBD": 1,
      "GCS": 1
    },
    "3": {
      "RIC": 1,
      "STK": 1,
      "PTA": 2,
      "FRE": 2,
      "COL": 3,
      "ESS": 3,
      "ADE": 3,
      "BRL": 3,
      "GEE": 2,
      "MEL": 2,
      "NTH": 2,
      "WBD": 2,
      "GCS": 2,
      "CAR": 1,
      "HAW": 1,
      "WCE": 1,
      "SYD": 1,
      "GWS": 1
    },
    "4": {
      "PTA": 1,
      "FRE": 1,
      "COL": 2,
      "ESS": 2,
      "ADE": 2,
      "BRL": 2,
      "GEE": 3,
      "MEL": 3,
      "NTH": 3,
      "WBD": 3,
      "GCS": 3,
      "CAR": 2,
      "HAW": 2,
      "WCE": 2,
      "SYD": 2,
      "GWS": 2
    },
    "5": {
      "COL": 1,
      "ESS": 1,
      "ADE": 1,
      "BRL": 1,
      "GEE": 2,
      "MEL": 2,
      "NTH": 2,
      "WBD": 2,
      "GCS": 2,
      "CAR": 3,
      "HAW": 3,
      "WCE": 3,
      "SYD": 3,
      "GWS": 3
    }
  },
  "afl_q9": {
    "1": {
      "GEE": 3,
      "MEL": 3,
      "CAR": 2,
      "COL": 2,
      "ESS": 2,
      "PTA": 2,
      "RIC": 2,
      "NTH": 1,
      "STK": 1,
      "WBD": 1,
      "ADE": 1,
      "WCE": 1,
      "FRE": 1
    },
    "2": {
      "GEE": 2,
      "MEL": 2,
      "CAR": 3,
      "COL": 3,
      "ESS": 3,
      "PTA": 3,
      "RIC": 3,
      "NTH": 2,
      "STK": 2,
      "WBD": 2,
      "ADE": 2,
      "WCE": 2,
      "FRE": 2,
      "HAW": 1,
      "BRL": 1
    },
    "3": {
      "GEE": 1,
      "MEL": 1,
      "CAR": 2,
      "COL": 2,
      "ESS": 2,
      "PTA": 2,
      "RIC": 2,
      "NTH": 3,
      "STK": 3,
      "WBD": 3,
      "ADE": 3,
      "WCE": 3,
      "FRE": 3,
      "HAW": 2,
      "BRL": 2,
      "SYD": 1,
      "GWS": 1,
      "GCS": 1
    },
    "4": {
      "CAR": 1,
      "COL": 1,
      "ESS": 1,
      "PTA": 1,
      "RIC": 1,
      "NTH": 2,
      "STK": 2,
      "WBD": 2,
      "ADE": 2,
      "WCE": 2,
      "FRE": 2,
      "HAW": 3,
      "BRL": 3,
      "SYD": 2,
      "GWS": 2,
      "GCS": 2
    },
    "5": {
      "NTH": 1,
      "STK": 1,
      "WBD": 1,
      "ADE": 1,
      "WCE": 1,
      "FRE": 1,
      "HAW": 2,
      "BRL": 2,
      "SYD": 3,
      "GWS": 3,
      "GCS": 3
    }
  }
};

const teamDims = {
  "CAR": {
    "loyalty": 8,
    "emotion": 4,
    "ambition": 9,
    "process": 6,
    "community": 6,
    "chaos": 3,
    "rootedness": 8
  },
  "COL": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 9,
    "process": 6,
    "community": 10,
    "chaos": 4,
    "rootedness": 8
  },
  "ESS": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 7,
    "process": 5,
    "community": 6,
    "chaos": 4,
    "rootedness": 8
  },
  "GEE": {
    "loyalty": 8,
    "emotion": 5,
    "ambition": 8,
    "process": 9,
    "community": 8,
    "chaos": 2,
    "rootedness": 9
  },
  "HAW": {
    "loyalty": 7,
    "emotion": 4,
    "ambition": 9,
    "process": 9,
    "community": 5,
    "chaos": 3,
    "rootedness": 6
  },
  "MEL": {
    "loyalty": 8,
    "emotion": 5,
    "ambition": 5,
    "process": 6,
    "community": 5,
    "chaos": 4,
    "rootedness": 10
  },
  "NTH": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 4,
    "process": 4,
    "community": 6,
    "chaos": 6,
    "rootedness": 6
  },
  "RIC": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 7,
    "process": 5,
    "community": 9,
    "chaos": 8,
    "rootedness": 7
  },
  "STK": {
    "loyalty": 7,
    "emotion": 9,
    "ambition": 4,
    "process": 4,
    "community": 6,
    "chaos": 6,
    "rootedness": 6
  },
  "WBD": {
    "loyalty": 8,
    "emotion": 5,
    "ambition": 5,
    "process": 5,
    "community": 9,
    "chaos": 5,
    "rootedness": 6
  },
  "ADE": {
    "loyalty": 5,
    "emotion": 6,
    "ambition": 8,
    "process": 6,
    "community": 7,
    "chaos": 4,
    "rootedness": 6
  },
  "PTA": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 7,
    "process": 6,
    "community": 8,
    "chaos": 4,
    "rootedness": 8
  },
  "WCE": {
    "loyalty": 6,
    "emotion": 4,
    "ambition": 9,
    "process": 7,
    "community": 6,
    "chaos": 3,
    "rootedness": 6
  },
  "FRE": {
    "loyalty": 6,
    "emotion": 8,
    "ambition": 5,
    "process": 5,
    "community": 8,
    "chaos": 6,
    "rootedness": 6
  },
  "SYD": {
    "loyalty": 6,
    "emotion": 4,
    "ambition": 8,
    "process": 9,
    "community": 5,
    "chaos": 2,
    "rootedness": 3
  },
  "GWS": {
    "loyalty": 3,
    "emotion": 4,
    "ambition": 8,
    "process": 8,
    "community": 3,
    "chaos": 5,
    "rootedness": 2
  },
  "BRL": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 8,
    "process": 8,
    "community": 6,
    "chaos": 5,
    "rootedness": 5
  },
  "GCS": {
    "loyalty": 3,
    "emotion": 5,
    "ambition": 5,
    "process": 6,
    "community": 3,
    "chaos": 6,
    "rootedness": 2
  }
};

const teamTextColors = {
  "CAR": "#7FA8D9",
  "COL": "#C7C7C7",
  "ESS": "#F08C8C",
  "GEE": "#7FA8D9",
  "HAW": "#D9A94E",
  "MEL": "#E0899A",
  "NTH": "#6E9BE0",
  "RIC": "#FFD200",
  "STK": "#F28A94",
  "WBD": "#6E9BE0",
  "ADE": "#FFC94D",
  "PTA": "#4FC3DE",
  "WCE": "#6E8CC0",
  "FRE": "#A883CC",
  "SYD": "#F28A8E",
  "GWS": "#F79A5B",
  "BRL": "#E0A0B0",
  "GCS": "#F58A96"
};

const teams = {
  "CAR": {
    "name": "Carlton",
    "emoji": "🔷",
    "color": "#002A5C",
    "code3": "CAR",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "COL": {
    "name": "Collingwood",
    "emoji": "🐦‍⬛",
    "color": "#000000",
    "code3": "COL",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "ESS": {
    "name": "Essendon",
    "emoji": "✴️",
    "color": "#CC0000",
    "code3": "ESS",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "GEE": {
    "name": "Geelong",
    "emoji": "🐱",
    "color": "#002A5C",
    "code3": "GEE",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "HAW": {
    "name": "Hawthorn",
    "emoji": "🟫",
    "color": "#4D2004",
    "code3": "HAW",
    "kitType": "duo",
    "secondaryColor": "#FBBF15"
  },
  "MEL": {
    "name": "Melbourne",
    "emoji": "😈",
    "color": "#0F1131",
    "code3": "MEL",
    "kitType": "duo",
    "secondaryColor": "#CC2233"
  },
  "NTH": {
    "name": "North Melbourne",
    "emoji": "🦘",
    "color": "#013A94",
    "code3": "NTH",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "RIC": {
    "name": "Richmond",
    "emoji": "🐯",
    "color": "#FFD200",
    "code3": "RIC",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "STK": {
    "name": "St Kilda",
    "emoji": "😇",
    "color": "#ED1B2F",
    "code3": "STK",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "WBD": {
    "name": "Western Bulldogs",
    "emoji": "🐶",
    "color": "#014896",
    "code3": "WBD",
    "kitType": "duo",
    "secondaryColor": "#E1251B"
  },
  "ADE": {
    "name": "Adelaide",
    "emoji": "🐦",
    "color": "#002B5C",
    "code3": "ADE",
    "kitType": "duo",
    "secondaryColor": "#FFB81C"
  },
  "PTA": {
    "name": "Port Adelaide",
    "emoji": "⚡",
    "color": "#008AAB",
    "code3": "PTA",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "WCE": {
    "name": "West Coast",
    "emoji": "🦅",
    "color": "#062A78",
    "code3": "WCE",
    "kitType": "duo",
    "secondaryColor": "#F2A900"
  },
  "FRE": {
    "name": "Fremantle",
    "emoji": "🟣",
    "color": "#582C83",
    "code3": "FRE",
    "kitType": "solo",
    "secondaryColor": "#582C83"
  },
  "SYD": {
    "name": "Sydney",
    "emoji": "🦢",
    "color": "#ED171F",
    "code3": "SYD",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "GWS": {
    "name": "GWS",
    "emoji": "🟠",
    "color": "#F47920",
    "code3": "GWS",
    "kitType": "duo",
    "secondaryColor": "#33383B"
  },
  "BRL": {
    "name": "Brisbane",
    "emoji": "🦁",
    "color": "#7A0026",
    "code3": "BRL",
    "kitType": "duo",
    "secondaryColor": "#FDB927"
  },
  "GCS": {
    "name": "Gold Coast",
    "emoji": "☀️",
    "color": "#D6001C",
    "code3": "GCS",
    "kitType": "duo",
    "secondaryColor": "#FFC72C"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
