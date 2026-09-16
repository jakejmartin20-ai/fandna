// FanDNA - PL data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in pl-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const DIM_CODES = {
  "loyalty": "LOY",
  "emotion": "EMO",
  "ambition": "AMB",
  "process": "PRO",
  "community": "COM",
  "chaos": "CHA",
  "rootedness": "ROO"
};

const DIM_COLORS = {
  "loyalty": "#d4a44e",
  "emotion": "#d6685c",
  "ambition": "#c46c96",
  "process": "#688eb0",
  "community": "#68b096",
  "chaos": "#dc8e46",
  "rootedness": "#9280c6"
};

const DIM_LABELS = {
  "loyalty": "Loyalty",
  "emotion": "Emotional intensity",
  "ambition": "Ambition",
  "process": "Process thinking",
  "community": "Community drive",
  "chaos": "Chaos tolerance",
  "rootedness": "Rootedness"
};

const DIM_ORDER = [
  "loyalty",
  "emotion",
  "ambition",
  "process",
  "community",
  "chaos",
  "rootedness"
];

const GENERIC_EMOJI = {};

const archetypes = {
  "LI": "The Kopite",
  "MC": "The Blue Moon",
  "AR": "The Gooner",
  "EV": "The Toffee",
  "NC": "The Geordie",
  "WH": "The Iron",
  "CP": "The Holmesdale",
  "MU": "The Red Army",
  "SP": "The Spur",
  "LE": "The Fox",
  "NF": "The Garibaldi",
  "BR": "The Bee",
  "BH": "The Seagull",
  "WO": "The Wanderer",
  "FU": "The Cottager",
  "BO": "The Cherry",
  "AV": "The Villan",
  "SU": "The Mackem",
  "LU": "The Peacock",
  "CH": "The Shed Ender",
  "IT": "The Tractor Boy",
  "CV": "The Sky Blue",
  "HU": "The Diehard"
};

const moduleQuestions = [
  {
    "id": "pl_q1",
    "type": "binary",
    "phase": "The fine print",
    "question": "Which lands closer:",
    "left": "The story of how it happened matters as much as that it happened",
    "right": "Nobody remembers how. They remember the result"
  },
  {
    "id": "pl_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "Your relationship with being right:",
    "options": [
      {
        "label": "I need the world to eventually acknowledge it.",
        "value": "A"
      },
      {
        "label": "Knowing I was right is enough.",
        "value": "B"
      },
      {
        "label": "Being right without winning is cold comfort.",
        "value": "C"
      },
      {
        "label": "I'm more interested in being accurate than right.",
        "value": "D"
      },
      {
        "label": "I'm wrong often enough that I hold it loosely.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "Contentment:",
    "left": "I'm genuinely okay with what I have, peace is underrated",
    "right": "Contentment is just ambition that gave up"
  },
  {
    "id": "pl_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "Which stings most?",
    "options": [
      {
        "label": "Being second when I should have won.",
        "value": "A"
      },
      {
        "label": "Not being taken seriously.",
        "value": "B"
      },
      {
        "label": "Getting close over and over and never quite making it.",
        "value": "C"
      },
      {
        "label": "Being let down by someone I trusted completely.",
        "value": "D"
      },
      {
        "label": "Watching someone else succeed with my approach.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q5",
    "type": "binary",
    "phase": "The fine print",
    "question": "Deep down:",
    "left": "I want one perfect, improbable, unforgettable moment",
    "right": "I want sustained, proven, undeniable excellence"
  },
  {
    "id": "pl_q6",
    "type": "choice",
    "phase": "The fine print",
    "question": "Which sentence actually fits:",
    "options": [
      {
        "label": "\"We've been here before. We know what to do.\"",
        "value": "A"
      },
      {
        "label": "\"This time genuinely feels different.\"",
        "value": "B"
      },
      {
        "label": "\"Just once. I just want it to happen once.\"",
        "value": "C"
      },
      {
        "label": "\"The process is right. Results follow.\"",
        "value": "D"
      },
      {
        "label": "\"They never saw us coming.\"",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q7",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "When you've been wronged:",
    "left": "I let it go. Holding on only weighs me down",
    "right": "I hold onto it. Some things don't get forgiven"
  },
  {
    "id": "pl_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "An institution you love makes a decision that feels like a betrayal. You:",
    "options": [
      {
        "label": "Leave. That decision tells you everything.",
        "value": "A"
      },
      {
        "label": "Stay, but carry the anger alongside the love. Both are real.",
        "value": "B"
      },
      {
        "label": "Understand it even if I hate it. Institutions aren't simple.",
        "value": "C"
      },
      {
        "label": "Try to change it from the inside.",
        "value": "D"
      },
      {
        "label": "Separate the institution from the thing I actually love.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q9",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Belonging feels most real when:",
    "left": "It's tight and local, the same streets, the same faces",
    "right": "It's vast, thousands of people feeling the same thing simultaneously"
  },
  {
    "id": "pl_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The absence of burning ambition is:",
    "options": [
      {
        "label": "Peace. Not everything needs to be a project.",
        "value": "A"
      },
      {
        "label": "Concerning. Contentment is ambition that gave up.",
        "value": "B"
      },
      {
        "label": "Complicated. Depends what I've been through to get there.",
        "value": "C"
      },
      {
        "label": "Fine for now. The ambition comes back eventually.",
        "value": "D"
      },
      {
        "label": "Sometimes wisdom, sometimes fear. Hard to tell from inside.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q11",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Something you love:",
    "left": "Doesn't need to mean more than it is, the thing itself is enough",
    "right": "Needs to feel like it matters, like it's part of a bigger story"
  },
  {
    "id": "pl_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Your relationship with the improbable:",
    "options": [
      {
        "label": "I've seen it happen. That changed how I see what's possible.",
        "value": "A"
      },
      {
        "label": "I believe in it. I have no proof but I can't stop.",
        "value": "B"
      },
      {
        "label": "I'm drawn to it in stories even if I'm careful in real life.",
        "value": "C"
      },
      {
        "label": "I find it useful as a concept. Possibility matters.",
        "value": "D"
      },
      {
        "label": "I don't think in those terms. What happens, happens.",
        "value": "E"
      }
    ]
  },
  {
    "id": "pl_q13",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "What pulls at you more:",
    "left": "How it used to be. The past is where the meaning lives",
    "right": "What's still ahead. The best of it hasn't happened yet"
  },
  {
    "id": "pl_q14",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Holding genuine belief alongside full awareness of how unlikely it is:",
    "options": [
      {
        "label": "That's just called hope. Everyone does this.",
        "value": "A"
      },
      {
        "label": "It's a specific skill I've developed over years of practice.",
        "value": "B"
      },
      {
        "label": "I find it exhausting honestly.",
        "value": "C"
      },
      {
        "label": "I believe when I need to and protect myself when I don't.",
        "value": "D"
      },
      {
        "label": "I've stopped trying to reconcile the two. They both exist.",
        "value": "E"
      }
    ]
  }
];

const scoring = {
  "q1": {
    "A": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 3,
      "MU": 1,
      "SU": 2,
      "LU": 3,
      "HU": 2
    },
    "B": {
      "MC": 3,
      "WO": 2,
      "BR": 2,
      "EV": 1,
      "IT": 2
    },
    "C": {
      "WH": 3,
      "NF": 2,
      "CP": 2,
      "BO": 1,
      "SP": 1,
      "LU": 1,
      "CV": 1
    },
    "D": {
      "MC": 2,
      "BR": 3,
      "BH": 2,
      "WO": 1
    },
    "E": {
      "BO": 3,
      "FU": 2,
      "BH": 1,
      "LE": 1,
      "AV": 1,
      "CH": 2,
      "IT": 1,
      "CV": 2
    }
  },
  "q2": {
    "left": {
      "MC": 3,
      "LI": 2,
      "MU": 3,
      "AR": 2,
      "NC": 2,
      "AV": 2,
      "LU": 2,
      "SU": 1
    },
    "right": {
      "EV": 3,
      "SP": 3,
      "NF": 2,
      "FU": 2,
      "BO": 3,
      "LE": 2,
      "CV": 2,
      "IT": 1,
      "CH": 1
    }
  },
  "q3": {
    "A": {
      "MC": 2,
      "WO": 4,
      "BR": 2,
      "BH": 1
    },
    "B": {
      "AR": 3,
      "BH": 2,
      "FU": 4,
      "BR": 1,
      "IT": 2,
      "HU": 2
    },
    "C": {
      "EV": 2,
      "SP": 3,
      "MU": 2,
      "NF": 1
    },
    "D": {
      "MC": 2,
      "BO": 3,
      "LE": 2,
      "CP": 1,
      "AV": 2,
      "CH": 2,
      "BH": 2
    },
    "E": {
      "LI": 2,
      "EV": 3,
      "NC": 2,
      "WH": 1,
      "LU": 2,
      "SU": 2
    }
  },
  "q4": {
    "1": {
      "MC": 3,
      "AR": 2,
      "WO": 2,
      "BR": 1
    },
    "2": {
      "MC": 2,
      "AR": 2,
      "BH": 2,
      "WO": 1
    },
    "3": {
      "AV": 3,
      "FU": 2,
      "BO": 3,
      "BH": 1,
      "CP": 1
    },
    "4": {
      "LI": 2,
      "NC": 2,
      "WH": 2,
      "NF": 1,
      "AV": 2,
      "SP": 1,
      "CV": 1
    },
    "5": {
      "NF": 3,
      "WH": 2,
      "LE": 3,
      "CP": 2,
      "LU": 2,
      "CH": 2,
      "CV": 1
    }
  },
  "q5": {
    "A": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 4,
      "SU": 2,
      "LU": 2
    },
    "B": {
      "EV": 2,
      "NF": 2,
      "WO": 2,
      "FU": 1,
      "SP": 1,
      "IT": 2,
      "CV": 2,
      "HU": 2
    },
    "C": {
      "BR": 3,
      "WO": 3,
      "MC": 1
    },
    "D": {
      "MC": 3,
      "BR": 2,
      "AR": 1,
      "AV": 1
    },
    "E": {
      "BO": 3,
      "BH": 2,
      "FU": 2,
      "LE": 2,
      "AV": 1,
      "CH": 2
    }
  },
  "q6": {
    "A": {
      "LI": 3,
      "NC": 3,
      "MU": 2,
      "WH": 2,
      "CP": 2,
      "SP": 1,
      "AV": 2,
      "SU": 2,
      "LU": 2,
      "CV": 1
    },
    "B": {
      "LI": 3,
      "NC": 3,
      "MU": 2,
      "WH": 2,
      "CP": 2,
      "SP": 1,
      "AV": 2,
      "SU": 2,
      "LU": 2,
      "CV": 1
    },
    "C": {},
    "D": {
      "MC": 2,
      "BR": 3,
      "AR": 2,
      "BH": 2,
      "WO": 1,
      "CH": 2
    },
    "E": {
      "MC": 2,
      "BR": 3,
      "AR": 2,
      "BH": 2,
      "WO": 1,
      "CH": 2
    }
  },
  "q7": {
    "A": {
      "MC": 2,
      "LI": 2,
      "MU": 2,
      "NC": 1,
      "CP": 2,
      "SP": 1,
      "AV": 2
    },
    "B": {
      "EV": 3,
      "NF": 3,
      "LI": 2,
      "WH": 1,
      "BO": 1,
      "SU": 2,
      "HU": 3
    },
    "C": {
      "NF": 2,
      "WO": 2,
      "EV": 2,
      "FU": 1,
      "AV": 2,
      "LE": 1,
      "IT": 2
    },
    "D": {
      "BR": 3,
      "BH": 4,
      "MC": 2,
      "AR": 1
    },
    "E": {
      "CH": 2
    }
  },
  "q8": {
    "1": {
      "MU": 2,
      "MC": 2,
      "BR": 1,
      "BH": 1
    },
    "2": {
      "AR": 2,
      "BH": 2,
      "BO": 2,
      "CH": 3
    },
    "3": {
      "FU": 2,
      "AV": 3,
      "LE": 1,
      "CP": 1,
      "SP": 1,
      "IT": 1
    },
    "4": {
      "WH": 2,
      "EV": 2,
      "NF": 2,
      "NC": 1,
      "CV": 2,
      "IT": 2,
      "WO": 2
    },
    "5": {
      "NC": 3,
      "CP": 3,
      "LI": 2,
      "WH": 2,
      "SU": 3,
      "LU": 3,
      "HU": 3
    }
  },
  "q9": {
    "A": {
      "EV": 2,
      "LI": 3,
      "NC": 2,
      "CP": 3,
      "FU": 1,
      "SU": 3,
      "LU": 2,
      "IT": 2,
      "CV": 3,
      "HU": 3
    },
    "B": {
      "EV": 2,
      "MU": 2,
      "SP": 2,
      "NF": 1,
      "WH": 2,
      "AV": 2,
      "CH": 1
    },
    "C": {
      "AR": 2,
      "BH": 2,
      "AV": 3,
      "BR": 1,
      "CH": 2
    },
    "D": {
      "MC": 2,
      "SP": 2,
      "BO": 2,
      "LE": 1
    },
    "E": {
      "LI": 2,
      "NF": 2,
      "BO": 2,
      "LE": 1
    }
  },
  "q10": {
    "A": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 3,
      "MU": 2,
      "EV": 1,
      "AV": 1,
      "BO": 1,
      "HU": 1
    },
    "B": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 3,
      "MU": 2,
      "EV": 1,
      "AV": 1,
      "BO": 1,
      "HU": 1
    },
    "C": {},
    "D": {
      "MC": 2,
      "BR": 3,
      "WO": 3,
      "AR": 2,
      "BH": 1
    },
    "E": {
      "MC": 2,
      "BR": 3,
      "WO": 3,
      "AR": 2,
      "BH": 1
    }
  },
  "q11": {
    "A": {
      "LI": 3,
      "MU": 2,
      "NF": 2,
      "EV": 1,
      "WH": 2,
      "SU": 2,
      "IT": 2,
      "CV": 2,
      "HU": 2
    },
    "B": {
      "EV": 3,
      "MU": 3,
      "SP": 2,
      "NF": 1,
      "CH": 2
    },
    "C": {
      "MU": 3,
      "EV": 2,
      "LI": 2,
      "NF": 2,
      "CP": 2
    },
    "D": {
      "AR": 2,
      "BH": 2,
      "BR": 2,
      "AV": 1,
      "FU": 2,
      "WO": 1
    },
    "E": {
      "MC": 2,
      "NC": 2,
      "AV": 3,
      "BH": 2,
      "BO": 2,
      "LE": 1
    }
  },
  "q12": {
    "1": {
      "BR": 2,
      "WO": 3,
      "MC": 2,
      "BH": 1
    },
    "2": {
      "AR": 2,
      "WO": 2,
      "FU": 3,
      "IT": 2
    },
    "3": {
      "FU": 2,
      "BH": 2,
      "BO": 2,
      "LE": 1,
      "AV": 2,
      "CH": 2
    },
    "4": {
      "NC": 2,
      "EV": 2,
      "SP": 2,
      "LI": 1,
      "HU": 2
    },
    "5": {
      "LI": 2,
      "NC": 3,
      "WH": 3,
      "CP": 3,
      "SU": 3,
      "LU": 3
    }
  },
  "q13": {
    "A": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "CH": 2
    },
    "B": {
      "AR": 4,
      "BH": 2,
      "AV": 3,
      "FU": 1,
      "IT": 2
    },
    "C": {
      "EV": 3,
      "SP": 3,
      "NF": 2,
      "WH": 2,
      "LE": 2,
      "NC": 2,
      "SU": 2,
      "LU": 2,
      "CV": 2,
      "HU": 2,
      "BO": 2
    },
    "D": {
      "BR": 3,
      "MC": 2,
      "BH": 2,
      "AV": 1
    },
    "E": {
      "MC": 2,
      "LI": 3,
      "MU": 2,
      "CP": 1,
      "AV": 2,
      "CH": 1
    }
  },
  "q14": {
    "left": {
      "NF": 3,
      "BR": 2,
      "LE": 3,
      "BO": 3,
      "FU": 2,
      "BH": 1,
      "SU": 2,
      "LU": 2,
      "IT": 2,
      "CV": 3,
      "HU": 2,
      "SP": 3
    },
    "right": {
      "MC": 2,
      "LI": 2,
      "MU": 3,
      "AR": 1,
      "AV": 2,
      "CH": 2,
      "WH": 1,
      "NC": 1
    }
  },
  "q15": {
    "A": {
      "MC": 3,
      "WO": 2,
      "BR": 2,
      "AR": 1
    },
    "B": {
      "AR": 2,
      "BH": 2,
      "WO": 2,
      "FU": 3,
      "IT": 2
    },
    "C": {
      "AV": 3,
      "NC": 2,
      "FU": 2,
      "BO": 1,
      "SP": 1,
      "LE": 1,
      "SU": 2,
      "CV": 1,
      "HU": 2
    },
    "D": {
      "BR": 3,
      "AR": 2,
      "NF": 2,
      "BH": 1
    },
    "E": {
      "NF": 3,
      "WH": 3,
      "LE": 3,
      "CP": 2,
      "LU": 2,
      "CH": 2
    }
  },
  "q16": {
    "1": {
      "MC": 2,
      "MU": 3,
      "LI": 2,
      "CH": 2
    },
    "2": {
      "LI": 2,
      "AR": 2,
      "MU": 2,
      "EV": 1,
      "CP": 1,
      "AV": 2
    },
    "3": {
      "SP": 3,
      "NC": 2,
      "WH": 2,
      "AV": 1,
      "SU": 2,
      "LU": 2
    },
    "4": {
      "NF": 2,
      "LE": 2,
      "BO": 3,
      "WH": 1,
      "IT": 2,
      "CV": 2,
      "HU": 2
    },
    "5": {
      "BR": 2,
      "WO": 4,
      "BH": 2,
      "LE": 2
    }
  },
  "q17": {
    "A": {
      "NC": 3,
      "CP": 3,
      "EV": 2,
      "MU": 2,
      "SP": 2,
      "LU": 2,
      "CV": 2,
      "SU": 2,
      "AV": 2
    },
    "B": {
      "AR": 3,
      "BR": 3,
      "BH": 2,
      "FU": 1,
      "WO": 2
    },
    "C": {
      "LI": 3,
      "WH": 2,
      "NC": 2,
      "BO": 3,
      "SU": 2,
      "IT": 1,
      "LU": 1,
      "HU": 1
    },
    "D": {
      "LI": 2,
      "MU": 3,
      "EV": 2,
      "NF": 2,
      "SP": 1,
      "AV": 2
    },
    "E": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "CH": 3
    }
  },
  "q18": {
    "left": {
      "AR": 3,
      "NF": 3,
      "FU": 3,
      "BO": 3,
      "BH": 2,
      "SP": 2,
      "AV": 1,
      "SU": 2,
      "LU": 2,
      "IT": 2,
      "CV": 3,
      "HU": 2
    },
    "right": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "EV": 2,
      "CP": 1,
      "AV": 2,
      "NC": 1,
      "CH": 2
    }
  },
  "q19": {
    "A": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 3,
      "SU": 2,
      "LU": 2
    },
    "B": {
      "EV": 2,
      "NF": 2,
      "FU": 3,
      "WO": 1,
      "IT": 1,
      "CV": 2,
      "HU": 2,
      "BO": 2
    },
    "C": {
      "BR": 2,
      "WO": 2,
      "AR": 2,
      "BH": 1
    },
    "D": {
      "MC": 2,
      "AR": 2,
      "BH": 2,
      "AV": 2,
      "CH": 1
    },
    "E": {
      "SP": 3,
      "EV": 3,
      "MU": 2,
      "NF": 1,
      "LE": 1
    }
  },
  "q20": {
    "1": {
      "EV": 3,
      "CP": 3,
      "WH": 2,
      "MU": 1,
      "CV": 2,
      "HU": 2
    },
    "2": {
      "WH": 2,
      "LI": 2,
      "NC": 2
    },
    "3": {
      "AR": 2,
      "AV": 3,
      "BH": 2,
      "FU": 1,
      "IT": 2
    },
    "4": {
      "BR": 2,
      "MC": 2,
      "WO": 2,
      "AR": 1
    },
    "5": {
      "MC": 2,
      "BR": 3,
      "BH": 2,
      "WO": 1,
      "CH": 2
    }
  },
  "q21": {
    "A": {
      "LI": 3,
      "NC": 3,
      "WH": 2,
      "CP": 3,
      "SU": 2,
      "LU": 2
    },
    "B": {
      "EV": 3,
      "NF": 3,
      "MU": 2,
      "SU": 1,
      "CV": 2
    },
    "C": {
      "SP": 3,
      "MU": 3,
      "EV": 2,
      "HU": 2
    },
    "D": {
      "LE": 3,
      "AV": 3,
      "BH": 2,
      "BO": 2,
      "CH": 1
    },
    "E": {
      "MC": 2,
      "BR": 2,
      "WO": 2,
      "IT": 1
    }
  },
  "q22": {
    "A": {
      "SP": 3,
      "WH": 3,
      "NF": 2,
      "LI": 1,
      "CP": 2,
      "BO": 1,
      "LE": 1,
      "AV": 1,
      "SU": 4,
      "LU": 3,
      "CV": 2,
      "HU": 1
    },
    "B": {
      "SP": 3,
      "WH": 3,
      "NF": 2,
      "LI": 1,
      "CP": 2,
      "BO": 1,
      "LE": 1,
      "AV": 1,
      "SU": 4,
      "LU": 3,
      "CV": 2,
      "HU": 1
    },
    "C": {},
    "D": {
      "EV": 3,
      "WO": 4,
      "BR": 2,
      "AR": 2,
      "FU": 1,
      "IT": 2,
      "CH": 2
    },
    "E": {
      "EV": 3,
      "WO": 4,
      "BR": 2,
      "AR": 2,
      "FU": 1,
      "IT": 2,
      "CH": 2
    }
  },
  "q23": {
    "A": {
      "BR": 3,
      "AR": 2,
      "MC": 2,
      "BH": 1,
      "WO": 2
    },
    "B": {
      "SP": 3,
      "EV": 3,
      "NF": 2
    },
    "C": {
      "LI": 3,
      "NC": 2,
      "WH": 2,
      "BO": 2,
      "SU": 2,
      "HU": 1
    },
    "D": {
      "MC": 2,
      "MU": 2,
      "AR": 1
    },
    "E": {
      "LE": 3,
      "NF": 2,
      "AV": 3,
      "SP": 2,
      "FU": 1
    }
  },
  "q24": {
    "1": {
      "BR": 3,
      "MC": 2,
      "BH": 2,
      "WO": 1
    },
    "2": {
      "AR": 2,
      "BH": 2,
      "FU": 2,
      "CH": 2
    },
    "3": {
      "AV": 3,
      "BO": 3,
      "BH": 1,
      "LE": 2,
      "IT": 1,
      "CH": 1
    },
    "4": {
      "SP": 2,
      "LE": 2,
      "NC": 2,
      "LI": 1,
      "SU": 2,
      "LU": 2,
      "CV": 2,
      "HU": 1
    },
    "5": {
      "SP": 3,
      "EV": 3,
      "NF": 2,
      "LI": 2,
      "CV": 1
    }
  },
  "pl_q1": {
    "left": {
      "NF": 3,
      "AR": 3,
      "LI": 2,
      "LE": 2,
      "FU": 2,
      "BO": 1,
      "AV": 2,
      "SU": 2,
      "LU": 2,
      "IT": 2,
      "CV": 2,
      "HU": 2
    },
    "right": {
      "MC": 2,
      "MU": 3,
      "CP": 2,
      "EV": 2,
      "BR": 1,
      "SP": 2,
      "WH": 1,
      "CH": 2
    }
  },
  "pl_q2": {
    "A": {
      "NC": 2,
      "MU": 2,
      "WH": 2,
      "CP": 2,
      "AV": 2,
      "SU": 2,
      "LU": 2,
      "CV": 2,
      "HU": 2
    },
    "B": {
      "WO": 3,
      "BR": 3,
      "BH": 2,
      "FU": 1,
      "IT": 2
    },
    "C": {
      "MC": 2,
      "EV": 2,
      "CP": 2,
      "LI": 1,
      "MU": 2,
      "CH": 2
    },
    "D": {
      "BR": 3,
      "BH": 3,
      "AR": 2,
      "MC": 1
    },
    "E": {
      "BO": 3,
      "FU": 3,
      "BH": 2,
      "LE": 1
    }
  },
  "pl_q3": {
    "1": {
      "FU": 3,
      "BO": 3,
      "BH": 2
    },
    "2": {
      "FU": 2,
      "BO": 2,
      "BH": 1,
      "IT": 1
    },
    "3": {
      "AV": 2,
      "NC": 2,
      "WH": 2,
      "SU": 2,
      "CV": 2,
      "LU": 1,
      "HU": 1
    },
    "4": {
      "LI": 2,
      "MU": 2,
      "EV": 2,
      "SP": 2,
      "AV": 2,
      "LU": 2,
      "CH": 2
    },
    "5": {
      "MC": 3,
      "LI": 2,
      "MU": 3,
      "AR": 1,
      "WO": 2,
      "CH": 2
    }
  },
  "pl_q4": {
    "A": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "AR": 1,
      "AV": 2,
      "CH": 2
    },
    "B": {
      "NC": 3,
      "CP": 4,
      "WH": 2,
      "MU": 2,
      "LE": 1,
      "LU": 2,
      "HU": 2
    },
    "C": {
      "SP": 3,
      "AR": 3,
      "EV": 2,
      "NF": 1,
      "LE": 2,
      "FU": 2,
      "CV": 1
    },
    "D": {
      "LI": 2,
      "EV": 3,
      "NC": 2,
      "WH": 2,
      "SU": 2,
      "CV": 3
    },
    "E": {
      "BR": 3,
      "BH": 3,
      "AR": 2,
      "WO": 1,
      "IT": 2
    }
  },
  "pl_q5": {
    "left": {
      "LE": 5,
      "NF": 3,
      "SP": 3,
      "WH": 2,
      "BO": 3,
      "CP": 1,
      "SU": 2,
      "LU": 2,
      "IT": 1,
      "CV": 2,
      "HU": 2
    },
    "right": {
      "MC": 3,
      "LI": 2,
      "MU": 2,
      "AR": 2,
      "NC": 2,
      "AV": 2,
      "CH": 2
    }
  },
  "pl_q6": {
    "A": {
      "LI": 3,
      "EV": 2,
      "MU": 2,
      "NF": 1,
      "FU": 2,
      "SU": 2,
      "CH": 2,
      "LU": 1,
      "HU": 1
    },
    "B": {
      "AV": 3,
      "NC": 3,
      "BH": 2,
      "AR": 1,
      "LE": 3,
      "SU": 1
    },
    "C": {
      "SP": 3,
      "EV": 3,
      "NF": 2,
      "WH": 1,
      "CV": 2
    },
    "D": {
      "MC": 3,
      "BR": 3,
      "AR": 1,
      "CH": 1,
      "IT": 1
    },
    "E": {
      "BR": 2,
      "WO": 3,
      "BH": 2,
      "LE": 2,
      "IT": 2
    }
  },
  "pl_q7": {
    "left": {
      "BO": 3,
      "FU": 3,
      "BH": 3,
      "HU": 3,
      "CV": 3,
      "BR": 2,
      "IT": 2,
      "AV": 2
    },
    "right": {
      "HU": 5,
      "CP": 3,
      "WH": 3,
      "SU": 3,
      "LU": 3,
      "MU": 2,
      "NC": 2,
      "WO": 2
    }
  },
  "pl_q8": {
    "A": {
      "CH": 3,
      "MC": 1
    },
    "B": {
      "CP": 2,
      "WH": 3,
      "CV": 3,
      "SU": 3,
      "LU": 2,
      "NC": 1,
      "HU": 3
    },
    "C": {
      "FU": 2,
      "AR": 2,
      "BH": 2,
      "AV": 1
    },
    "D": {
      "AV": 3,
      "BH": 2,
      "BR": 2,
      "IT": 1
    },
    "E": {
      "NF": 2,
      "LE": 3,
      "LI": 2,
      "EV": 2,
      "SP": 1
    }
  },
  "pl_q9": {
    "left": {
      "EV": 2,
      "CP": 3,
      "WH": 3,
      "CV": 3,
      "IT": 3,
      "FU": 3,
      "WO": 2,
      "BR": 2,
      "BO": 2,
      "HU": 3
    },
    "right": {
      "LI": 2,
      "NC": 3,
      "SU": 2,
      "LU": 2,
      "MU": 2,
      "CH": 2
    }
  },
  "pl_q10": {
    "A": {
      "FU": 3,
      "BO": 3,
      "IT": 2,
      "BH": 2
    },
    "B": {
      "MC": 3,
      "MU": 2,
      "LU": 2,
      "CH": 2,
      "AR": 1
    },
    "C": {
      "CP": 2,
      "EV": 2,
      "CV": 4,
      "WH": 2,
      "SU": 2,
      "NF": 1,
      "HU": 3
    },
    "D": {
      "AV": 2,
      "NC": 2,
      "BR": 2,
      "BH": 2
    },
    "E": {
      "AR": 2,
      "SP": 2,
      "LE": 3
    }
  },
  "pl_q11": {
    "left": {
      "BO": 3,
      "FU": 3,
      "CP": 2,
      "IT": 3,
      "WO": 2,
      "BR": 2,
      "BH": 2,
      "HU": 3
    },
    "right": {
      "LI": 3,
      "NF": 3,
      "MU": 2,
      "SU": 2,
      "LU": 2,
      "EV": 2,
      "AR": 1,
      "CV": 1,
      "SP": 2,
      "WH": 2
    }
  },
  "pl_q12": {
    "A": {
      "CP": 2,
      "LE": 3,
      "SU": 3,
      "CV": 2,
      "LU": 2,
      "HU": 2
    },
    "B": {
      "SP": 3,
      "EV": 3,
      "NF": 2,
      "CV": 2,
      "WH": 2
    },
    "C": {
      "NF": 3,
      "AR": 2,
      "LU": 2,
      "IT": 1
    },
    "D": {
      "AV": 2,
      "BH": 2,
      "BR": 2,
      "AR": 1
    },
    "E": {
      "MC": 3,
      "WO": 3,
      "FU": 2,
      "IT": 1,
      "BO": 2
    }
  },
  "pl_q13": {
    "left": {
      "SU": 3,
      "NF": 3,
      "EV": 3,
      "LU": 3,
      "IT": 3,
      "AV": 2,
      "WH": 2,
      "MU": 2,
      "NC": 2,
      "FU": 2,
      "CV": 2
    },
    "right": {
      "MC": 3,
      "BR": 3,
      "BH": 3,
      "BO": 2,
      "CH": 2,
      "HU": 2
    }
  },
  "pl_q14": {
    "A": {
      "BO": 2,
      "FU": 3,
      "IT": 1,
      "NC": 1
    },
    "B": {
      "CP": 2,
      "SP": 3,
      "SU": 3,
      "CV": 3,
      "EV": 2,
      "WH": 1,
      "HU": 1
    },
    "C": {
      "MC": 2,
      "WO": 2,
      "BR": 2,
      "BH": 1
    },
    "D": {
      "MU": 1,
      "AV": 3,
      "CH": 3,
      "AR": 2,
      "BR": 1
    },
    "E": {
      "NF": 3,
      "LE": 3,
      "LU": 3,
      "SP": 2
    }
  }
};

const teamDims = {
  "LI": {
    "loyalty": 10,
    "emotion": 10,
    "ambition": 9,
    "process": 4,
    "community": 9,
    "chaos": 4,
    "rootedness": 8
  },
  "MC": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 10,
    "process": 9,
    "community": 7,
    "chaos": 2,
    "rootedness": 7
  },
  "AR": {
    "loyalty": 5,
    "emotion": 8,
    "ambition": 7,
    "process": 7,
    "community": 5,
    "chaos": 4,
    "rootedness": 6
  },
  "EV": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 5,
    "process": 3,
    "community": 7,
    "chaos": 4,
    "rootedness": 8
  },
  "NC": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 7,
    "process": 4,
    "community": 10,
    "chaos": 4,
    "rootedness": 9
  },
  "WH": {
    "loyalty": 6,
    "emotion": 8,
    "ambition": 5,
    "process": 3,
    "community": 8,
    "chaos": 6,
    "rootedness": 9
  },
  "CP": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 5,
    "process": 4,
    "community": 8,
    "chaos": 5,
    "rootedness": 10
  },
  "MU": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 9,
    "process": 5,
    "community": 5,
    "chaos": 4,
    "rootedness": 4
  },
  "SP": {
    "loyalty": 7,
    "emotion": 9,
    "ambition": 7,
    "process": 3,
    "community": 6,
    "chaos": 6,
    "rootedness": 5
  },
  "LE": {
    "loyalty": 6,
    "emotion": 8,
    "ambition": 5,
    "process": 4,
    "community": 6,
    "chaos": 7,
    "rootedness": 6
  },
  "NF": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 5,
    "process": 3,
    "community": 7,
    "chaos": 4,
    "rootedness": 9
  },
  "BR": {
    "loyalty": 4,
    "emotion": 3,
    "ambition": 7,
    "process": 9,
    "community": 5,
    "chaos": 4,
    "rootedness": 5
  },
  "BH": {
    "loyalty": 5,
    "emotion": 6,
    "ambition": 6,
    "process": 8,
    "community": 6,
    "chaos": 4,
    "rootedness": 6
  },
  "WO": {
    "loyalty": 6,
    "emotion": 5,
    "ambition": 6,
    "process": 5,
    "community": 7,
    "chaos": 3,
    "rootedness": 8
  },
  "FU": {
    "loyalty": 5,
    "emotion": 4,
    "ambition": 4,
    "process": 6,
    "community": 5,
    "chaos": 3,
    "rootedness": 7
  },
  "BO": {
    "loyalty": 5,
    "emotion": 6,
    "ambition": 4,
    "process": 4,
    "community": 7,
    "chaos": 5,
    "rootedness": 5
  },
  "AV": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 9,
    "process": 6,
    "community": 6,
    "chaos": 4,
    "rootedness": 7
  },
  "SU": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 4,
    "community": 9,
    "chaos": 5,
    "rootedness": 8
  },
  "LU": {
    "loyalty": 8,
    "emotion": 10,
    "ambition": 7,
    "process": 3,
    "community": 7,
    "chaos": 8,
    "rootedness": 9
  },
  "CH": {
    "loyalty": 5,
    "emotion": 6,
    "ambition": 8,
    "process": 5,
    "community": 3,
    "chaos": 7,
    "rootedness": 5
  },
  "IT": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 5,
    "community": 8,
    "chaos": 4,
    "rootedness": 9
  },
  "CV": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 5,
    "process": 4,
    "community": 7,
    "chaos": 5,
    "rootedness": 8
  },
  "HU": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 4,
    "process": 3,
    "community": 8,
    "chaos": 6,
    "rootedness": 10
  }
};

const teamTextColors = {
  "LI": "#ff4444",
  "MC": "#6CABDD",
  "AR": "#ff5555",
  "EV": "#6688dd",
  "NC": "#cccccc",
  "WH": "#cc6677",
  "CP": "#6688cc",
  "MU": "#ff5555",
  "SP": "#7799dd",
  "LE": "#6699ee",
  "NF": "#ff5555",
  "BR": "#ff5555",
  "BH": "#4499ee",
  "WO": "#FDB913",
  "FU": "#ff5555",
  "BO": "#ff5566",
  "AV": "#dd55aa",
  "SU": "#ff5555",
  "LU": "#6688cc",
  "CH": "#5588dd",
  "IT": "#6688dd",
  "CV": "#59CBEE",
  "HU": "#F6A623"
};

const teams = {
  "LI": {
    "code3": "LIV",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Liverpool",
    "emoji": "🔴",
    "color": "#C8102E"
  },
  "MC": {
    "code3": "MCI",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Manchester City",
    "emoji": "🔵",
    "color": "#6CABDD"
  },
  "AR": {
    "code3": "ARS",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Arsenal",
    "emoji": "🔴",
    "color": "#EF0107"
  },
  "EV": {
    "code3": "EVE",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Everton",
    "emoji": "🔵",
    "color": "#003399"
  },
  "NC": {
    "code3": "NEW",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Newcastle United",
    "emoji": "⚫",
    "color": "#241F20"
  },
  "WH": {
    "code3": "WHU",
    "kitType": "sash",
    "secondaryColor": "#1BB1E7",
    "name": "West Ham",
    "emoji": "⚒️",
    "color": "#7A263A"
  },
  "CP": {
    "code3": "CRY",
    "kitType": "stripes",
    "secondaryColor": "#C41E3A",
    "name": "Crystal Palace",
    "emoji": "🦅",
    "color": "#1B458F"
  },
  "MU": {
    "code3": "MUN",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Manchester United",
    "emoji": "🔴",
    "color": "#DA291C"
  },
  "SP": {
    "code3": "TOT",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Tottenham Hotspur",
    "emoji": "⚪",
    "color": "#132257"
  },
  "LE": {
    "code3": "LEI",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Leicester City",
    "emoji": "🦊",
    "color": "#003090"
  },
  "NF": {
    "code3": "NFO",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Nottingham Forest",
    "emoji": "🌲",
    "color": "#DD0000"
  },
  "BR": {
    "code3": "BRE",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Brentford",
    "emoji": "🐝",
    "color": "#D20000"
  },
  "BH": {
    "code3": "BHA",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Brighton",
    "emoji": "🐦",
    "color": "#0057B8"
  },
  "WO": {
    "code3": "WOL",
    "kitType": "duo",
    "secondaryColor": "#231F20",
    "name": "Wolves",
    "emoji": "🐺",
    "color": "#FDB913"
  },
  "FU": {
    "code3": "FUL",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Fulham",
    "emoji": "⚫",
    "color": "#CC0000"
  },
  "BO": {
    "code3": "BOU",
    "kitType": "stripes",
    "secondaryColor": "#111111",
    "name": "Bournemouth",
    "emoji": "🍒",
    "color": "#DA291C"
  },
  "AV": {
    "code3": "AVL",
    "kitType": "sash",
    "secondaryColor": "#95BFE5",
    "name": "Aston Villa",
    "emoji": "🦁",
    "color": "#670E36"
  },
  "SU": {
    "code3": "SUN",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Sunderland",
    "emoji": "🐱",
    "color": "#EB172B"
  },
  "LU": {
    "code3": "LEE",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Leeds United",
    "emoji": "⚪",
    "color": "#1D428A"
  },
  "CH": {
    "code3": "CHE",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Chelsea",
    "emoji": "🔵",
    "color": "#034694"
  },
  "IT": {
    "code3": "IPS",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Ipswich Town",
    "emoji": "🔵",
    "color": "#0044A9"
  },
  "CV": {
    "code3": "COV",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Coventry City",
    "emoji": "🩵",
    "color": "#59CBEE"
  },
  "HU": {
    "code3": "HUL",
    "kitType": "stripes",
    "secondaryColor": "#111111",
    "name": "Hull City",
    "emoji": "🐯",
    "color": "#F18A00"
  }
};

export { DIM_CODES, DIM_COLORS, DIM_LABELS, DIM_ORDER, GENERIC_EMOJI, archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
