// FanDNA - F1 data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in f1-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "FER": "Forza Ferrari",
  "MER": "Silver Arrows",
  "MCL": "Papaya",
  "RBR": "Gives You Wings",
  "WIL": "Grove",
  "AST": "Silverstone",
  "ALP": "Enstone",
  "HAA": "Kannapolis",
  "RB": "Faenza",
  "AUD": "The Four Rings",
  "CAD": "The Crest"
};

const moduleQuestions = [
  {
    "id": "f1_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "One name takes the trophy and the fame, but hundreds behind the scenes made it happen. When you think about what really wins, you land on:",
    "options": [
      {
        "label": "The one out front. A single talent good enough pulls everyone up to them.",
        "value": "A"
      },
      {
        "label": "The whole operation, in step. Hundreds of people, nobody bigger than the effort.",
        "value": "B"
      },
      {
        "label": "The method. Get every step right and winning takes care of itself.",
        "value": "C"
      },
      {
        "label": "Raw ability. Some simply have more of it than the rest, and it shows.",
        "value": "D"
      }
    ]
  },
  {
    "id": "f1_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "You pour years into something. The part that actually keeps you coming back:",
    "options": [
      {
        "label": "Winning, plainly. I'm not here to come second.",
        "value": "A"
      },
      {
        "label": "Getting every tiny detail exactly right. The precision is the whole thrill.",
        "value": "B"
      },
      {
        "label": "The highs and the heartbreaks. I feel every one and pay the price gladly.",
        "value": "C"
      },
      {
        "label": "The long climb up from the back. I want the whole grind, not just the top.",
        "value": "D"
      }
    ]
  },
  {
    "id": "f1_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "The title, or the pursuit of it?",
    "left": "The title is everything. I'm here to win it, and nothing else counts.",
    "right": "The pursuit is the point. A win handed over too easily is hollow."
  },
  {
    "id": "f1_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "You're handed something far off the pace and told to make it a winner. Your instinct:",
    "options": [
      {
        "label": "Tear it down and start clean. I'd rather build right than patch.",
        "value": "A"
      },
      {
        "label": "Patiently, piece by piece. I trust a slow build to hold.",
        "value": "B"
      },
      {
        "label": "Everything at once, right now. Waiting isn't in me.",
        "value": "C"
      },
      {
        "label": "Bring in proven names. If they win, I'll pay whatever it takes.",
        "value": "D"
      }
    ]
  },
  {
    "id": "f1_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "What you've committed to keeps falling behind, and a faster one is yours if you want it. You:",
    "options": [
      {
        "label": "Stay. The ones who backed me have my loyalty, win or lose.",
        "value": "A"
      },
      {
        "label": "Move on to the faster thing. Loyalty shouldn't cost me the win.",
        "value": "B"
      },
      {
        "label": "Refuse to accept it. I push until they give me something that wins.",
        "value": "C"
      },
      {
        "label": "Follow the people I trust. Who I'm with matters more than where.",
        "value": "D"
      }
    ]
  },
  {
    "id": "f1_q6",
    "type": "slider",
    "phase": "The fine print",
    "question": "Plan every step, or trust the moment?",
    "left": "I want every step mapped out beforehand, and I trust the plan when the moment comes.",
    "right": "I'd rather read the moment live and go with my gut than be locked to a plan."
  },
  {
    "id": "f1_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The win is there for the taking. The way you actually go and get it:",
    "options": [
      {
        "label": "Execute cleanly, to the letter. No heroics, no mistakes.",
        "value": "A"
      },
      {
        "label": "One bold move, all in. I'd gamble for the win over playing safe.",
        "value": "B"
      },
      {
        "label": "Wring everything out of less than the others have, and finish ahead anyway.",
        "value": "C"
      },
      {
        "label": "Put the best people in place and stay out of their way.",
        "value": "D"
      }
    ]
  },
  {
    "id": "f1_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The situation that actually brings out your best:",
    "options": [
      {
        "label": "Written off, everything to prove, nobody expecting much of me.",
        "value": "A"
      },
      {
        "label": "The biggest stage there is, all eyes on me.",
        "value": "B"
      },
      {
        "label": "Out of the spotlight, heads down on the real work.",
        "value": "C"
      },
      {
        "label": "Somewhere brand new nobody's shaped yet, so I can build it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "f1_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "One place for good, or always onto the next?",
    "left": "One badge, for life. I'd stay through the lean years and never look elsewhere.",
    "right": "On to the next thing, always. Staying put too long feels like standing still."
  },
  {
    "id": "f1_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "You did everything right and still lost, because what you were handed just wasn't good enough on the day. That leaves you:",
    "options": [
      {
        "label": "Cold and unmoved. Nothing shows on me.",
        "value": "A"
      },
      {
        "label": "All of it comes out, and everyone around me feels it.",
        "value": "B"
      },
      {
        "label": "I dig in and take it out on the next one.",
        "value": "C"
      },
      {
        "label": "I shake it off and reset before it lands.",
        "value": "D"
      }
    ]
  },
  {
    "id": "f1_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When it's all over and they sum you up, the line you'd want:",
    "options": [
      {
        "label": "That I set the standard, and everyone else spent years chasing it.",
        "value": "A"
      },
      {
        "label": "That I had real soul, whatever the result on the day.",
        "value": "B"
      },
      {
        "label": "That I broke the mould and dragged everyone forward.",
        "value": "C"
      },
      {
        "label": "That I earned every inch, and nothing was ever handed to me.",
        "value": "D"
      }
    ]
  },
  {
    "id": "f1_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "At your best, the edge you've got that the rest don't:",
    "options": [
      {
        "label": "Raw, natural talent. When I go all out, I've simply got more than the rest.",
        "value": "A"
      },
      {
        "label": "I almost never put a foot wrong. Done right, every single time.",
        "value": "B"
      },
      {
        "label": "Nothing to lose, so I'll take the risk they won't.",
        "value": "C"
      },
      {
        "label": "I do more with less than anyone. Give me scraps and watch.",
        "value": "D"
      }
    ]
  }
];

const scoring = {
  "f1_q1": {
    "A": {
      "RBR": 2,
      "AST": 2
    },
    "B": {
      "FER": 2,
      "WIL": 2,
      "ALP": 2
    },
    "C": {
      "MER": 2,
      "MCL": 2,
      "AUD": 2,
      "HAA": 2
    },
    "D": {
      "RB": 2,
      "CAD": 2
    }
  },
  "f1_q2": {
    "A": {
      "RBR": 2,
      "MER": 2,
      "AST": 2
    },
    "B": {
      "MCL": 2,
      "AUD": 2
    },
    "C": {
      "FER": 2,
      "ALP": 2,
      "CAD": 2
    },
    "D": {
      "WIL": 2,
      "HAA": 2,
      "RB": 2
    }
  },
  "f1_q3": {
    "1": {
      "RBR": 3,
      "MCL": 2,
      "AST": 2,
      "FER": 2,
      "MER": 2,
      "CAD": 2,
      "AUD": 1,
      "ALP": 1
    },
    "2": {
      "RBR": 2,
      "MCL": 3,
      "AST": 3,
      "FER": 3,
      "MER": 3,
      "CAD": 3,
      "AUD": 2,
      "ALP": 2,
      "WIL": 1,
      "RB": 1
    },
    "3": {
      "RBR": 1,
      "MCL": 2,
      "AST": 2,
      "FER": 2,
      "MER": 2,
      "CAD": 2,
      "AUD": 3,
      "ALP": 3,
      "WIL": 2,
      "RB": 2,
      "HAA": 1
    },
    "4": {
      "MCL": 1,
      "AST": 1,
      "FER": 1,
      "MER": 1,
      "CAD": 1,
      "AUD": 2,
      "ALP": 2,
      "WIL": 3,
      "RB": 3,
      "HAA": 2
    },
    "5": {
      "AUD": 1,
      "ALP": 1,
      "WIL": 2,
      "RB": 2,
      "HAA": 3
    }
  },
  "f1_q4": {
    "A": {
      "CAD": 2,
      "AUD": 2
    },
    "B": {
      "WIL": 2,
      "HAA": 2,
      "RB": 2
    },
    "C": {
      "RBR": 2,
      "FER": 2,
      "ALP": 2
    },
    "D": {
      "AST": 2,
      "MER": 2,
      "MCL": 2
    }
  },
  "f1_q5": {
    "A": {
      "WIL": 2,
      "MCL": 2,
      "HAA": 2
    },
    "B": {
      "RBR": 2,
      "RB": 2,
      "CAD": 2
    },
    "C": {
      "FER": 2,
      "AST": 2,
      "MER": 2
    },
    "D": {
      "ALP": 2,
      "AUD": 2
    }
  },
  "f1_q6": {
    "1": {
      "MER": 3,
      "MCL": 3,
      "AUD": 3,
      "AST": 2,
      "RBR": 2,
      "WIL": 1
    },
    "2": {
      "MER": 2,
      "MCL": 2,
      "AUD": 2,
      "AST": 3,
      "RBR": 3,
      "WIL": 2,
      "RB": 1,
      "CAD": 1,
      "FER": 1,
      "HAA": 1
    },
    "3": {
      "MER": 1,
      "MCL": 1,
      "AUD": 1,
      "AST": 2,
      "RBR": 2,
      "WIL": 3,
      "RB": 2,
      "CAD": 2,
      "FER": 2,
      "HAA": 2,
      "ALP": 1
    },
    "4": {
      "AST": 1,
      "RBR": 1,
      "WIL": 2,
      "RB": 3,
      "CAD": 3,
      "FER": 3,
      "HAA": 3,
      "ALP": 2
    },
    "5": {
      "WIL": 1,
      "RB": 2,
      "CAD": 2,
      "FER": 2,
      "HAA": 2,
      "ALP": 3
    }
  },
  "f1_q7": {
    "A": {
      "MER": 2,
      "AUD": 2
    },
    "B": {
      "RBR": 2,
      "CAD": 2,
      "AST": 2
    },
    "C": {
      "HAA": 2,
      "WIL": 2,
      "RB": 2
    },
    "D": {
      "FER": 2,
      "MCL": 2,
      "ALP": 2
    }
  },
  "f1_q8": {
    "A": {
      "HAA": 2,
      "RB": 2,
      "WIL": 2
    },
    "B": {
      "FER": 2,
      "MER": 2,
      "MCL": 2,
      "RBR": 2
    },
    "C": {
      "AUD": 2,
      "ALP": 2
    },
    "D": {
      "CAD": 2,
      "AST": 2
    }
  },
  "f1_q9": {
    "1": {
      "FER": 3,
      "WIL": 2,
      "MCL": 2,
      "MER": 1,
      "ALP": 1,
      "AUD": 1,
      "RB": 1
    },
    "2": {
      "FER": 2,
      "WIL": 3,
      "MCL": 3,
      "MER": 2,
      "ALP": 2,
      "AUD": 2,
      "RB": 2,
      "AST": 1,
      "HAA": 1
    },
    "3": {
      "FER": 1,
      "WIL": 2,
      "MCL": 2,
      "MER": 3,
      "ALP": 3,
      "AUD": 3,
      "RB": 3,
      "AST": 2,
      "HAA": 2,
      "RBR": 1,
      "CAD": 1
    },
    "4": {
      "WIL": 1,
      "MCL": 1,
      "MER": 2,
      "ALP": 2,
      "AUD": 2,
      "RB": 2,
      "AST": 3,
      "HAA": 3,
      "RBR": 2,
      "CAD": 2
    },
    "5": {
      "MER": 1,
      "ALP": 1,
      "AUD": 1,
      "RB": 1,
      "AST": 2,
      "HAA": 2,
      "RBR": 3,
      "CAD": 3
    }
  },
  "f1_q10": {
    "A": {
      "MER": 2,
      "AUD": 2,
      "MCL": 2,
      "AST": 2
    },
    "B": {
      "FER": 2,
      "ALP": 2
    },
    "C": {
      "WIL": 2,
      "HAA": 2
    },
    "D": {
      "RBR": 2,
      "RB": 2,
      "CAD": 2
    }
  },
  "f1_q11": {
    "A": {
      "MER": 2,
      "MCL": 2
    },
    "B": {
      "FER": 2,
      "WIL": 2,
      "ALP": 2
    },
    "C": {
      "RBR": 2,
      "CAD": 2
    },
    "D": {
      "HAA": 2,
      "AUD": 2,
      "RB": 2,
      "AST": 2
    }
  },
  "f1_q12": {
    "A": {
      "FER": 2,
      "MER": 2,
      "AST": 2
    },
    "B": {
      "MCL": 2,
      "AUD": 2
    },
    "C": {
      "CAD": 2,
      "RBR": 2,
      "RB": 2
    },
    "D": {
      "HAA": 2,
      "WIL": 2,
      "ALP": 2
    }
  }
};

const teamDims = {
  "FER": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 8,
    "process": 4,
    "community": 8,
    "chaos": 7,
    "rootedness": 9
  },
  "MER": {
    "loyalty": 6,
    "emotion": 3,
    "ambition": 8,
    "process": 9,
    "community": 3,
    "chaos": 2,
    "rootedness": 6
  },
  "MCL": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 9,
    "process": 9,
    "community": 4,
    "chaos": 3,
    "rootedness": 7
  },
  "RBR": {
    "loyalty": 3,
    "emotion": 5,
    "ambition": 10,
    "process": 7,
    "community": 2,
    "chaos": 5,
    "rootedness": 2
  },
  "WIL": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 5,
    "process": 6,
    "community": 4,
    "chaos": 3,
    "rootedness": 8
  },
  "AST": {
    "loyalty": 4,
    "emotion": 5,
    "ambition": 9,
    "process": 8,
    "community": 4,
    "chaos": 3,
    "rootedness": 4
  },
  "ALP": {
    "loyalty": 4,
    "emotion": 8,
    "ambition": 6,
    "process": 3,
    "community": 6,
    "chaos": 8,
    "rootedness": 6
  },
  "HAA": {
    "loyalty": 5,
    "emotion": 4,
    "ambition": 3,
    "process": 4,
    "community": 3,
    "chaos": 5,
    "rootedness": 3
  },
  "RB": {
    "loyalty": 3,
    "emotion": 6,
    "ambition": 4,
    "process": 5,
    "community": 3,
    "chaos": 6,
    "rootedness": 5
  },
  "AUD": {
    "loyalty": 6,
    "emotion": 4,
    "ambition": 7,
    "process": 9,
    "community": 4,
    "chaos": 3,
    "rootedness": 6
  },
  "CAD": {
    "loyalty": 2,
    "emotion": 7,
    "ambition": 8,
    "process": 5,
    "community": 4,
    "chaos": 6,
    "rootedness": 2
  }
};

const teamTextColors = {
  "FER": "#EB8C8C",
  "MER": "#8CEDDE",
  "MCL": "#FFC58C",
  "RBR": "#9397AC",
  "WIL": "#8CCEE9",
  "AST": "#8CB4AF",
  "ALP": "#91B8DB",
  "HAA": "#DF98A0",
  "RB": "#9FAFD4",
  "AUD": "#E8737B",
  "CAD": "#919CAB"
};

const teams = {
  "FER": {
    "name": "Ferrari",
    "emoji": "🐎",
    "color": "#D40000",
    "code3": "FER",
    "kitType": "duo",
    "secondaryColor": "#FFEB00"
  },
  "MER": {
    "name": "Mercedes",
    "emoji": "⭐",
    "color": "#00D7B6",
    "code3": "MER",
    "kitType": "duo",
    "secondaryColor": "#101010"
  },
  "MCL": {
    "name": "McLaren",
    "emoji": "🧡",
    "color": "#FF8000",
    "code3": "MCL",
    "kitType": "duo",
    "secondaryColor": "#101820"
  },
  "RBR": {
    "name": "Red Bull",
    "emoji": "🐂",
    "color": "#0F1A48",
    "code3": "RBR",
    "kitType": "duo",
    "secondaryColor": "#E4002B"
  },
  "WIL": {
    "name": "Williams",
    "emoji": "🔵",
    "color": "#0093D0",
    "code3": "WIL",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "AST": {
    "name": "Aston Martin",
    "emoji": "💚",
    "color": "#00594F",
    "code3": "AST",
    "kitType": "solid",
    "secondaryColor": "#00594F"
  },
  "ALP": {
    "name": "Alpine",
    "emoji": "🏔️",
    "color": "#0C63B0",
    "code3": "ALP",
    "kitType": "duo",
    "secondaryColor": "#FF4FA3"
  },
  "HAA": {
    "name": "Haas",
    "emoji": "🔧",
    "color": "#B91C2E",
    "code3": "HAA",
    "kitType": "duo",
    "secondaryColor": "#E8E8E8"
  },
  "RB": {
    "name": "Racing Bulls",
    "emoji": "🐃",
    "color": "#2B4FA0",
    "code3": "RB",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "AUD": {
    "name": "Audi",
    "emoji": "⚙️",
    "color": "#E1000A",
    "code3": "AUD",
    "kitType": "duo",
    "secondaryColor": "#1A1A1A"
  },
  "CAD": {
    "name": "Cadillac",
    "emoji": "🏵️",
    "color": "#0B2545",
    "code3": "CAD",
    "kitType": "duo",
    "secondaryColor": "#C9A227"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
