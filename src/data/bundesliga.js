// FanDNA - BUNDESLIGA data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in bundesliga-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "BAY": "Der Rekordmeister",
  "HSV": "Der Dino",
  "VFB": "Der Brustring",
  "BMG": "Die Fohlen",
  "SVW": "Die Grün-Weißen",
  "RBL": "Die Roten Bullen",
  "TSG": "Der Dorfklub",
  "B04": "Die Werkself",
  "S04": "Die Knappen",
  "BVB": "Die Gelbe Wand",
  "SCF": "Die Breisgauer",
  "FCA": "Die Fuggerstädter",
  "KOE": "Die Geißböcke",
  "M05": "Die Nullfünfer",
  "FCU": "Die Eisernen",
  "ELV": "Die Kaiserlinde",
  "SCP": "Die Ostwestfalen",
  "SGE": "Die Adler"
};

const moduleQuestions = [
  {
    "id": "bl_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "What makes you respect something - a business, a scene, anyone's success?",
    "options": [
      {
        "label": "It was built slowly, the hard way, over years",
        "value": "A"
      },
      {
        "label": "It's simply the best there is right now, however it got there",
        "value": "B"
      },
      {
        "label": "Ordinary people love it, trophies or not",
        "value": "C"
      }
    ]
  },
  {
    "id": "bl_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "At something you love being part of, what's your instinct?",
    "options": [
      {
        "label": "Get stuck in and help make the whole thing happen",
        "value": "A"
      },
      {
        "label": "Throw everything into the noise and the moment",
        "value": "B"
      },
      {
        "label": "Show up, take it in, let others run it",
        "value": "C"
      }
    ]
  },
  {
    "id": "bl_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "How do you want to be known for the way you work?",
    "options": [
      {
        "label": "Reliable, tireless, never above the dirty jobs",
        "value": "A"
      },
      {
        "label": "The one who lifts things to another level",
        "value": "B"
      },
      {
        "label": "Steady and quietly effective, no drama",
        "value": "C"
      }
    ]
  },
  {
    "id": "bl_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "When things go badly, what do you reach for?",
    "options": [
      {
        "label": "Humor - I laugh first, it's how I cope",
        "value": "A"
      },
      {
        "label": "Go quiet and feel it properly",
        "value": "B"
      },
      {
        "label": "Shrug it off and trust it'll come round",
        "value": "C"
      }
    ]
  },
  {
    "id": "bl_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "When you don't like how something's being run, what do you do?",
    "options": [
      {
        "label": "Push back loudly and try to change it",
        "value": "A"
      },
      {
        "label": "Quietly do my own thing around it",
        "value": "B"
      },
      {
        "label": "Accept it - that's how the world works",
        "value": "C"
      }
    ]
  },
  {
    "id": "bl_q6",
    "type": "choice",
    "phase": "The fine print",
    "question": "Thinking about your own life, what are you proudest of?",
    "options": [
      {
        "label": "What I've built with my own hands, no help",
        "value": "A"
      },
      {
        "label": "What I've done with good people and strong backing",
        "value": "B"
      },
      {
        "label": "Just keeping a good thing going, year after year",
        "value": "C"
      }
    ]
  },
  {
    "id": "bl_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Where does your sense of solid ground come from?",
    "options": [
      {
        "label": "A long unbroken record I'd hate to ever break",
        "value": "A"
      },
      {
        "label": "Knowing I could lose it all and build again",
        "value": "B"
      },
      {
        "label": "Never having had much to lose in the first place",
        "value": "C"
      }
    ]
  },
  {
    "id": "bl_q8",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Which would you rather be?",
    "left": "Dependable and consistent, week in week out",
    "right": "Thrilling and unpredictable, even if it costs me"
  },
  {
    "id": "bl_q9",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "With the things you love, are you...",
    "left": "All in no matter what, through every high and low",
    "right": "All in, as long as it's going somewhere"
  },
  {
    "id": "bl_q10",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Which feels more like you?",
    "left": "Quietly first-rate; I don't need it noticed",
    "right": "If I'm that good, I want it seen"
  },
  {
    "id": "bl_q11",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Which fires you up more?",
    "left": "Being doubted, and proving them wrong",
    "right": "Living up to a big name and high expectations"
  },
  {
    "id": "bl_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When something you care about is struggling, your move is...",
    "options": [
      {
        "label": "Back the people and hold the line",
        "value": "A"
      },
      {
        "label": "Shake it up - fresh ideas, new blood",
        "value": "B"
      },
      {
        "label": "Go back to what always worked",
        "value": "C"
      }
    ]
  }
];

const scoring = {
  "bl_q1": {
    "A": {
      "BAY": 3,
      "BMG": 3,
      "M05": 3,
      "SCF": 3,
      "SVW": 3,
      "VFB": 3,
      "FCU": 2,
      "B04": 1
    },
    "B": {
      "B04": 3,
      "RBL": 3,
      "TSG": 3,
      "BAY": 2,
      "VFB": 1
    },
    "C": {
      "BVB": 3,
      "ELV": 3,
      "FCA": 3,
      "FCU": 3,
      "HSV": 3,
      "KOE": 3,
      "S04": 3,
      "SCP": 3,
      "SGE": 3,
      "SCF": 2
    }
  },
  "bl_q2": {
    "A": {
      "FCA": 3,
      "FCU": 3,
      "S04": 3,
      "SCF": 3,
      "SCP": 3,
      "SVW": 3,
      "BVB": 1,
      "KOE": 1
    },
    "B": {
      "BVB": 3,
      "ELV": 3,
      "HSV": 3,
      "KOE": 3,
      "M05": 3,
      "SGE": 3,
      "S04": 1
    },
    "C": {
      "B04": 3,
      "BAY": 3,
      "BMG": 3,
      "RBL": 3,
      "TSG": 3,
      "VFB": 3
    }
  },
  "bl_q3": {
    "A": {
      "FCA": 3,
      "FCU": 3,
      "HSV": 3,
      "S04": 3,
      "SCP": 3,
      "SVW": 3
    },
    "B": {
      "B04": 3,
      "BAY": 3,
      "BVB": 3,
      "RBL": 3,
      "SGE": 3,
      "VFB": 3
    },
    "C": {
      "BMG": 3,
      "ELV": 3,
      "KOE": 3,
      "M05": 3,
      "SCF": 3,
      "TSG": 3,
      "B04": 1,
      "FCA": 1,
      "VFB": 1
    }
  },
  "bl_q4": {
    "A": {
      "ELV": 3,
      "KOE": 3,
      "M05": 3,
      "SGE": 3
    },
    "B": {
      "B04": 3,
      "BAY": 3,
      "BMG": 3,
      "BVB": 3,
      "FCU": 3,
      "HSV": 3,
      "S04": 3,
      "VFB": 3,
      "KOE": 1,
      "SGE": 1
    },
    "C": {
      "FCA": 3,
      "RBL": 3,
      "SCF": 3,
      "SCP": 3,
      "SVW": 3,
      "TSG": 3
    }
  },
  "bl_q5": {
    "A": {
      "BVB": 3,
      "KOE": 3,
      "S04": 3,
      "SGE": 3,
      "FCU": 2
    },
    "B": {
      "ELV": 3,
      "FCU": 3,
      "HSV": 3,
      "M05": 3,
      "SCF": 3
    },
    "C": {
      "B04": 3,
      "BAY": 3,
      "BMG": 3,
      "FCA": 3,
      "RBL": 3,
      "SCP": 3,
      "SVW": 3,
      "TSG": 3,
      "VFB": 3
    }
  },
  "bl_q6": {
    "A": {
      "ELV": 3,
      "FCU": 3,
      "KOE": 3,
      "S04": 3,
      "SCF": 3,
      "SCP": 3
    },
    "B": {
      "B04": 3,
      "RBL": 3,
      "TSG": 3,
      "BAY": 1
    },
    "C": {
      "BAY": 3,
      "BMG": 3,
      "BVB": 3,
      "FCA": 3,
      "HSV": 3,
      "M05": 3,
      "SGE": 3,
      "SVW": 3,
      "VFB": 3,
      "S04": 1,
      "SCF": 1
    }
  },
  "bl_q7": {
    "A": {
      "BAY": 3,
      "BMG": 3,
      "HSV": 3,
      "KOE": 3,
      "S04": 3,
      "SVW": 3
    },
    "B": {
      "B04": 3,
      "BVB": 3,
      "FCU": 3,
      "SGE": 3,
      "VFB": 3,
      "SCF": 2,
      "S04": 1
    },
    "C": {
      "ELV": 3,
      "FCA": 3,
      "M05": 3,
      "RBL": 3,
      "SCF": 3,
      "SCP": 3,
      "TSG": 3,
      "FCU": 2
    }
  },
  "bl_q8": {
    "left": {
      "B04": 3,
      "BAY": 3,
      "FCA": 3,
      "M05": 3,
      "RBL": 3,
      "SCF": 3,
      "SCP": 3,
      "SVW": 3,
      "TSG": 3,
      "VFB": 3,
      "HSV": 1
    },
    "right": {
      "BMG": 3,
      "BVB": 3,
      "ELV": 3,
      "FCU": 3,
      "HSV": 3,
      "KOE": 3,
      "S04": 3,
      "SGE": 3
    }
  },
  "bl_q9": {
    "left": {
      "BMG": 3,
      "BVB": 3,
      "ELV": 3,
      "FCA": 3,
      "FCU": 3,
      "HSV": 3,
      "KOE": 3,
      "M05": 3,
      "S04": 3,
      "SCF": 3,
      "SCP": 3,
      "SVW": 3,
      "SGE": 1
    },
    "right": {
      "B04": 3,
      "BAY": 3,
      "RBL": 3,
      "SGE": 3,
      "TSG": 3,
      "VFB": 3
    }
  },
  "bl_q10": {
    "left": {
      "B04": 3,
      "BMG": 3,
      "ELV": 3,
      "FCA": 3,
      "FCU": 3,
      "M05": 3,
      "SCF": 3,
      "SCP": 3,
      "SVW": 3,
      "TSG": 3,
      "VFB": 3
    },
    "right": {
      "BAY": 3,
      "BVB": 3,
      "HSV": 3,
      "KOE": 3,
      "RBL": 3,
      "S04": 3,
      "SGE": 3,
      "B04": 1
    }
  },
  "bl_q11": {
    "left": {
      "ELV": 2,
      "SCP": 2,
      "FCU": 2,
      "SCF": 2,
      "M05": 2,
      "TSG": 2,
      "FCA": 2,
      "VFB": 2,
      "RBL": 2
    },
    "right": {
      "BAY": 2,
      "BVB": 2,
      "S04": 2,
      "HSV": 2,
      "BMG": 2,
      "KOE": 2,
      "SVW": 2,
      "SGE": 2,
      "B04": 2
    }
  },
  "bl_q12": {
    "A": {
      "SCF": 2,
      "FCA": 2,
      "M05": 2,
      "FCU": 2,
      "SVW": 2,
      "ELV": 2
    },
    "B": {
      "RBL": 2,
      "B04": 2,
      "TSG": 2,
      "BAY": 2,
      "VFB": 2,
      "SGE": 2
    },
    "C": {
      "S04": 2,
      "KOE": 2,
      "HSV": 2,
      "BVB": 2,
      "BMG": 2,
      "SCP": 2
    }
  }
};

const teamDims = {
  "BAY": {
    "loyalty": 8,
    "emotion": 5,
    "ambition": 10,
    "process": 8,
    "community": 5,
    "chaos": 3,
    "rootedness": 9
  },
  "HSV": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 7,
    "process": 4,
    "community": 6,
    "chaos": 6,
    "rootedness": 10
  },
  "VFB": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 8,
    "process": 9,
    "community": 5,
    "chaos": 3,
    "rootedness": 8
  },
  "BMG": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 6,
    "process": 6,
    "community": 6,
    "chaos": 4,
    "rootedness": 9
  },
  "SVW": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 5,
    "process": 6,
    "community": 7,
    "chaos": 3,
    "rootedness": 9
  },
  "RBL": {
    "loyalty": 5,
    "emotion": 5,
    "ambition": 9,
    "process": 9,
    "community": 3,
    "chaos": 3,
    "rootedness": 3
  },
  "TSG": {
    "loyalty": 5,
    "emotion": 4,
    "ambition": 4,
    "process": 8,
    "community": 3,
    "chaos": 3,
    "rootedness": 4
  },
  "B04": {
    "loyalty": 6,
    "emotion": 5,
    "ambition": 8,
    "process": 9,
    "community": 3,
    "chaos": 3,
    "rootedness": 4
  },
  "S04": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 6,
    "process": 4,
    "community": 9,
    "chaos": 6,
    "rootedness": 10
  },
  "BVB": {
    "loyalty": 9,
    "emotion": 10,
    "ambition": 8,
    "process": 5,
    "community": 9,
    "chaos": 7,
    "rootedness": 9
  },
  "SCF": {
    "loyalty": 8,
    "emotion": 4,
    "ambition": 5,
    "process": 10,
    "community": 7,
    "chaos": 2,
    "rootedness": 8
  },
  "FCA": {
    "loyalty": 7,
    "emotion": 4,
    "ambition": 3,
    "process": 6,
    "community": 5,
    "chaos": 3,
    "rootedness": 7
  },
  "KOE": {
    "loyalty": 10,
    "emotion": 9,
    "ambition": 5,
    "process": 3,
    "community": 8,
    "chaos": 8,
    "rootedness": 9
  },
  "M05": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 5,
    "process": 7,
    "community": 6,
    "chaos": 5,
    "rootedness": 7
  },
  "FCU": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 4,
    "process": 4,
    "community": 10,
    "chaos": 4,
    "rootedness": 10
  },
  "ELV": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 5,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 6
  },
  "SCP": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 4,
    "process": 6,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "SGE": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 7,
    "process": 4,
    "community": 8,
    "chaos": 8,
    "rootedness": 7
  }
};

const teamTextColors = {
  "BAY": "#F2607A",
  "HSV": "#6F9BD6",
  "VFB": "#D8D8D8",
  "BMG": "#CFCFCF",
  "SVW": "#5FC58C",
  "RBL": "#F2657F",
  "TSG": "#6BA3E0",
  "B04": "#F0686A",
  "S04": "#5B9BD5",
  "BVB": "#F4D93C",
  "SCF": "#F2606E",
  "FCA": "#E66A78",
  "KOE": "#F2666C",
  "M05": "#E66A72",
  "FCU": "#F2666C",
  "ELV": "#BBBBBB",
  "SCP": "#5B8FD0",
  "SGE": "#F2606E"
};

const teams = {
  "BAY": {
    "code3": "BAY",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Bayern Munich",
    "emoji": "🔴",
    "color": "#DC052D"
  },
  "HSV": {
    "code3": "HSV",
    "kitType": "duo",
    "secondaryColor": "#003D7C",
    "name": "Hamburger SV",
    "emoji": "🦕",
    "color": "#FFFFFF"
  },
  "VFB": {
    "code3": "VFB",
    "kitType": "sash",
    "secondaryColor": "#E32219",
    "name": "VfB Stuttgart",
    "emoji": "⚙️",
    "color": "#FFFFFF"
  },
  "BMG": {
    "code3": "BMG",
    "kitType": "duo",
    "secondaryColor": "#1A1A1A",
    "name": "Borussia Mönchengladbach",
    "emoji": "🐎",
    "color": "#FFFFFF"
  },
  "SVW": {
    "code3": "SVW",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Werder Bremen",
    "emoji": "🟢",
    "color": "#1D9053"
  },
  "RBL": {
    "code3": "RBL",
    "kitType": "duo",
    "secondaryColor": "#DD0741",
    "name": "RB Leipzig",
    "emoji": "🐂",
    "color": "#FFFFFF"
  },
  "TSG": {
    "code3": "TSG",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "TSG Hoffenheim",
    "emoji": "🔵",
    "color": "#1C63B8"
  },
  "B04": {
    "code3": "B04",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Bayer Leverkusen",
    "emoji": "💊",
    "color": "#E32221"
  },
  "S04": {
    "code3": "S04",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Schalke 04",
    "emoji": "⛏️",
    "color": "#004B9B"
  },
  "BVB": {
    "code3": "BVB",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Borussia Dortmund",
    "emoji": "🟡",
    "color": "#FDE100"
  },
  "SCF": {
    "code3": "SCF",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "SC Freiburg",
    "emoji": "🌲",
    "color": "#E2001A"
  },
  "FCA": {
    "code3": "FCA",
    "kitType": "duo",
    "secondaryColor": "#00623A",
    "name": "FC Augsburg",
    "emoji": "🟢",
    "color": "#C8102E"
  },
  "KOE": {
    "code3": "KOE",
    "kitType": "duo",
    "secondaryColor": "#E2261F",
    "name": "1. FC Köln",
    "emoji": "🐐",
    "color": "#FFFFFF"
  },
  "M05": {
    "code3": "M05",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Mainz 05",
    "emoji": "🎭",
    "color": "#C3141E"
  },
  "FCU": {
    "code3": "FCU",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Union Berlin",
    "emoji": "⚒️",
    "color": "#EE1C25"
  },
  "ELV": {
    "code3": "ELV",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "SV Elversberg",
    "emoji": "🌳",
    "color": "#1A1A1A"
  },
  "SCP": {
    "code3": "SCP",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "SC Paderborn",
    "emoji": "🔵",
    "color": "#003F87"
  },
  "SGE": {
    "code3": "SGE",
    "kitType": "duo",
    "secondaryColor": "#E1000F",
    "name": "Eintracht Frankfurt",
    "emoji": "🦅",
    "color": "#1A1A1A"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
