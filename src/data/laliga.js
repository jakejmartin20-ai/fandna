// FanDNA - LALIGA data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in laliga-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "RMA": "Los Blancos",
  "BAR": "Més que un club",
  "ATM": "Cholismo",
  "ATH": "Los Leones",
  "RSO": "La Real",
  "SEV": "Nunca se rinde",
  "BET": "Manque pierda",
  "VAL": "Los Che",
  "DEP": "Super Depor",
  "RAC": "El Sardinero",
  "MAL": "Los Boquerones",
  "VIL": "El Submarino Amarillo",
  "ALA": "Babazorros",
  "GET": "Azulones",
  "OSA": "El Sadar",
  "RAY": "Vallecas",
  "ESP": "Pericos",
  "CEL": "Os Celestes",
  "LEV": "Granota",
  "ELC": "Franjiverde"
};

const moduleQuestions = [
  {
    "id": "ll_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "Some people's sense of who they are is handed down by where they're from. Yours is:",
    "options": [
      {
        "label": "Exactly that. My roots, my people. Decided before I was born, and I wear it proudly.",
        "value": "A"
      },
      {
        "label": "A foundation I built on. The roots matter, but I chose plenty too.",
        "value": "B"
      },
      {
        "label": "Mine to define. Where I'm from is an accident, who I am isn't.",
        "value": "C"
      },
      {
        "label": "Bigger than any one place. I belong to something with no borders.",
        "value": "D"
      }
    ]
  },
  {
    "id": "ll_q2",
    "type": "binary",
    "phase": "The fine print",
    "question": "When it comes to what you build or back, which sounds more like you?",
    "left": "I'd rather have something that's truly ours, that we earned ourselves, even if it isn't the best out there.",
    "right": "I want the best, full stop. Where it came from is sentiment, and sentiment doesn't win."
  },
  {
    "id": "ll_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "Plenty assume the big names always win and the rest don't matter. Hearing that, you:",
    "options": [
      {
        "label": "Take it as fuel. Doubt me and watch.",
        "value": "A"
      },
      {
        "label": "Smile and let it go. Their opinion isn't my business.",
        "value": "B"
      },
      {
        "label": "Quietly agree, and find my joy in the smaller things.",
        "value": "C"
      },
      {
        "label": "Believe, deep down, they're wrong about me.",
        "value": "D"
      },
      {
        "label": "Get loud. I'll argue my corner all day.",
        "value": "E"
      }
    ]
  },
  {
    "id": "ll_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "Be honest about the people on the other side. Your rival is:",
    "options": [
      {
        "label": "Half of who I am. I'm defined as much by what I'm against as what I'm for.",
        "value": "A"
      },
      {
        "label": "A measuring stick. Beating them is how I know I've arrived.",
        "value": "B"
      },
      {
        "label": "Background noise. I'm too busy with my own thing to care about theirs.",
        "value": "C"
      },
      {
        "label": "Worth a grudging respect. Great enemies make you better.",
        "value": "D"
      }
    ]
  },
  {
    "id": "ll_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "The feuds, the gossip, the noise around a thing you love, that whole circus is:",
    "options": [
      {
        "label": "The best part. I'm here for the chaos as much as the thing itself.",
        "value": "A"
      },
      {
        "label": "Exhausting. I just want the main event and none of the soap opera.",
        "value": "B"
      },
      {
        "label": "Something I pretend to hate and secretly devour.",
        "value": "C"
      },
      {
        "label": "Fuel. The drama is how you know it actually matters.",
        "value": "D"
      }
    ]
  },
  {
    "id": "ll_q6",
    "type": "choice",
    "phase": "The fine print",
    "question": "The things you love most, deep down, should belong to:",
    "options": [
      {
        "label": "The people who love them. It should answer to us, not to owners.",
        "value": "A"
      },
      {
        "label": "Whoever runs it best. I care about results, not who holds the keys.",
        "value": "B"
      },
      {
        "label": "Whoever actually shows up for it, paperwork aside.",
        "value": "C"
      },
      {
        "label": "Me, in my own way. My bond with it was never about boardrooms.",
        "value": "D"
      }
    ]
  },
  {
    "id": "ll_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "If it all collapsed and you had to start over from the very bottom, you'd be:",
    "options": [
      {
        "label": "First in line. Rebuilding something that's mine, from nothing, is the whole point.",
        "value": "A"
      },
      {
        "label": "Heartbroken but there. Leaving was never an option.",
        "value": "B"
      },
      {
        "label": "Skeptical. They'd have to earn me back.",
        "value": "C"
      },
      {
        "label": "Energized. The clean break is the thrill, no past to carry.",
        "value": "D"
      },
      {
        "label": "Gone, honestly. I follow it for the heights.",
        "value": "E"
      }
    ]
  },
  {
    "id": "ll_q8",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "When something you've chased finally arrives, which is you?",
    "left": "I hold onto it. These moments are rare, and I won't rush past them.",
    "right": "I enjoy it for a second, then I want the next one. Standing still is going backwards."
  },
  {
    "id": "ll_q9",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "How much room does the thing you love most get in your life?",
    "left": "It runs my whole week. A loss ruins my Monday, a win carries me for days. I feel it in my body.",
    "right": "I love it, but I keep it in its place. A passion, not something that runs my life."
  },
  {
    "id": "ll_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Be honest about what actually pulls you in:",
    "options": [
      {
        "label": "The glamour. The big names, the big nights, the spotlight. No shame in it.",
        "value": "A"
      },
      {
        "label": "The opposite. The unfashionable, the honest, the club nobody else rates.",
        "value": "B"
      },
      {
        "label": "A bit of both. Stardust on top of something real.",
        "value": "C"
      },
      {
        "label": "Neither, really. It's mine whether it's fashionable or not.",
        "value": "D"
      }
    ]
  },
  {
    "id": "ll_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "How much does the thing you love actually cost you, and how do you feel about that:",
    "options": [
      {
        "label": "Everything I'll give it. Time, money, the calendar bends around it, and I wouldn't have it any other way.",
        "value": "A"
      },
      {
        "label": "A real chunk of my life, kept in some kind of balance.",
        "value": "B"
      },
      {
        "label": "More in my heart than my diary. I feel it deeply, I just don't organize my life around it.",
        "value": "C"
      },
      {
        "label": "I keep it cheap on purpose. Loving something shouldn't run your life.",
        "value": "D"
      }
    ]
  },
  {
    "id": "ll_q12",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Win or lose, where do you land?",
    "left": "Win or lose, I'm all in. The love was never a transaction. I stay through the lean years and the bad days.",
    "right": "I'm not built for noble defeat. I love it to win, and a loss is a loss, however pretty."
  }
];

const scoring = {
  "ll_q1": {
    "A": {
      "ATH": 3,
      "ATM": 3,
      "BAR": 3,
      "BET": 3,
      "CEL": 3,
      "ESP": 3,
      "OSA": 3,
      "RAC": 3,
      "RAY": 3,
      "RMA": 1,
      "RSO": 1
    },
    "B": {
      "ALA": 3,
      "DEP": 3,
      "MAL": 3,
      "RSO": 3,
      "SEV": 3,
      "VAL": 3
    },
    "C": {
      "ELC": 3,
      "GET": 3,
      "LEV": 3,
      "VIL": 3
    },
    "D": {
      "RMA": 3,
      "BAR": 2
    }
  },
  "ll_q2": {
    "left": {
      "ATH": 3,
      "ATM": 3,
      "BAR": 3,
      "CEL": 3,
      "OSA": 3,
      "RAY": 3,
      "RSO": 3,
      "VIL": 3,
      "BET": 2,
      "DEP": 1,
      "SEV": 1
    },
    "right": {
      "ALA": 3,
      "BET": 3,
      "DEP": 3,
      "ELC": 3,
      "ESP": 3,
      "GET": 3,
      "LEV": 3,
      "MAL": 3,
      "RAC": 3,
      "RMA": 3,
      "SEV": 3,
      "VAL": 3
    }
  },
  "ll_q3": {
    "A": {
      "ATM": 3,
      "BAR": 3,
      "MAL": 3,
      "SEV": 3
    },
    "B": {
      "GET": 3,
      "RMA": 3
    },
    "C": {
      "ALA": 3,
      "BET": 3,
      "CEL": 3,
      "DEP": 3,
      "ELC": 3,
      "LEV": 3,
      "OSA": 3,
      "RAC": 3,
      "RSO": 3,
      "VIL": 3
    },
    "D": {
      "ATH": 3,
      "ESP": 3
    },
    "E": {
      "RAY": 3,
      "VAL": 3,
      "ATH": 1,
      "ESP": 1
    }
  },
  "ll_q4": {
    "A": {
      "BAR": 3,
      "BET": 3,
      "ESP": 3,
      "RAY": 3,
      "ATM": 1
    },
    "B": {
      "ATM": 3,
      "RMA": 3,
      "SEV": 3,
      "VAL": 3
    },
    "C": {
      "ATH": 3,
      "CEL": 3,
      "ELC": 3,
      "GET": 3,
      "LEV": 3,
      "MAL": 3,
      "OSA": 3,
      "RAC": 3,
      "VIL": 3,
      "RMA": 1
    },
    "D": {
      "ALA": 3,
      "DEP": 3,
      "RSO": 3,
      "ATH": 1
    }
  },
  "ll_q5": {
    "A": {
      "ATM": 3,
      "BET": 3,
      "LEV": 3,
      "MAL": 3,
      "RAY": 3,
      "GET": 1,
      "VAL": 1
    },
    "B": {
      "ATH": 3,
      "ELC": 3,
      "RAC": 3,
      "RMA": 3,
      "RSO": 3,
      "VIL": 3
    },
    "C": {
      "ALA": 3,
      "CEL": 3,
      "DEP": 3,
      "ESP": 3,
      "GET": 3,
      "SEV": 3
    },
    "D": {
      "BAR": 3,
      "OSA": 3,
      "VAL": 3
    }
  },
  "ll_q6": {
    "A": {
      "ATH": 3,
      "BAR": 3,
      "OSA": 3,
      "RAY": 3,
      "VAL": 3
    },
    "B": {
      "GET": 3,
      "RMA": 3,
      "SEV": 3,
      "VIL": 3
    },
    "C": {
      "ALA": 3,
      "ATM": 3,
      "BET": 3,
      "CEL": 3,
      "DEP": 3,
      "ESP": 3,
      "LEV": 3,
      "RAC": 3,
      "RSO": 3
    },
    "D": {
      "ELC": 3,
      "MAL": 3
    }
  },
  "ll_q7": {
    "A": {
      "ATH": 3,
      "DEP": 3,
      "MAL": 3,
      "RAC": 3
    },
    "B": {
      "ALA": 3,
      "ATM": 3,
      "BAR": 3,
      "BET": 3,
      "ESP": 3,
      "OSA": 3,
      "RAY": 3,
      "DEP": 1,
      "MAL": 1,
      "RAC": 1
    },
    "C": {
      "CEL": 3,
      "ELC": 3,
      "RSO": 3,
      "SEV": 3,
      "VAL": 3
    },
    "D": {
      "GET": 3,
      "LEV": 3,
      "VIL": 3
    },
    "E": {
      "RMA": 3,
      "BAR": 1
    }
  },
  "ll_q8": {
    "left": {
      "ALA": 3,
      "ATH": 3,
      "ATM": 3,
      "BAR": 3,
      "BET": 3,
      "CEL": 3,
      "DEP": 3,
      "ESP": 3,
      "RAC": 3,
      "SEV": 3,
      "VAL": 3
    },
    "right": {
      "ELC": 3,
      "GET": 3,
      "LEV": 3,
      "MAL": 3,
      "OSA": 3,
      "RAY": 3,
      "RMA": 3,
      "RSO": 3,
      "VIL": 3,
      "BAR": 1
    }
  },
  "ll_q9": {
    "left": {
      "ALA": 3,
      "ATH": 3,
      "ATM": 3,
      "BAR": 3,
      "BET": 3,
      "DEP": 3,
      "MAL": 3,
      "RAY": 3,
      "SEV": 3,
      "VAL": 3,
      "ESP": 1
    },
    "right": {
      "CEL": 3,
      "ELC": 3,
      "ESP": 3,
      "GET": 3,
      "LEV": 3,
      "OSA": 3,
      "RAC": 3,
      "RMA": 3,
      "RSO": 3,
      "VIL": 3
    }
  },
  "ll_q10": {
    "A": {
      "RMA": 3,
      "SEV": 3,
      "BAR": 1
    },
    "B": {
      "ALA": 3,
      "ATH": 3,
      "ATM": 3,
      "BET": 3,
      "CEL": 3,
      "DEP": 3,
      "LEV": 3,
      "OSA": 3,
      "RAY": 3,
      "VIL": 3
    },
    "C": {
      "BAR": 3,
      "MAL": 3,
      "RSO": 3,
      "VAL": 3,
      "SEV": 1
    },
    "D": {
      "ELC": 3,
      "ESP": 3,
      "GET": 3,
      "RAC": 3
    }
  },
  "ll_q11": {
    "A": {
      "ATH": 3,
      "ATM": 3,
      "BAR": 3,
      "BET": 3,
      "DEP": 3,
      "RAY": 3,
      "MAL": 1
    },
    "B": {
      "ESP": 3,
      "MAL": 3,
      "OSA": 3,
      "RMA": 3,
      "RSO": 3,
      "SEV": 3,
      "VAL": 3,
      "VIL": 3
    },
    "C": {
      "ALA": 3,
      "CEL": 3,
      "LEV": 3,
      "RAC": 3
    },
    "D": {
      "ELC": 3,
      "GET": 3
    }
  },
  "ll_q12": {
    "left": {
      "ALA": 3,
      "ATH": 3,
      "ATM": 3,
      "BAR": 3,
      "BET": 3,
      "CEL": 3,
      "DEP": 3,
      "ESP": 3,
      "LEV": 3,
      "MAL": 3,
      "OSA": 3,
      "RAC": 3,
      "RAY": 3,
      "VAL": 1
    },
    "right": {
      "ELC": 3,
      "GET": 3,
      "RMA": 3,
      "RSO": 3,
      "SEV": 3,
      "VAL": 3,
      "VIL": 3
    }
  }
};

const teamDims = {
  "RMA": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 10,
    "process": 7,
    "community": 4,
    "chaos": 4,
    "rootedness": 10
  },
  "BAR": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 9,
    "process": 9,
    "community": 8,
    "chaos": 6,
    "rootedness": 10
  },
  "ATM": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 8,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 9
  },
  "ATH": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 7,
    "process": 10,
    "community": 9,
    "chaos": 4,
    "rootedness": 10
  },
  "RSO": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 7,
    "process": 9,
    "community": 8,
    "chaos": 3,
    "rootedness": 9
  },
  "SEV": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 7,
    "community": 5,
    "chaos": 6,
    "rootedness": 8
  },
  "BET": {
    "loyalty": 10,
    "emotion": 10,
    "ambition": 6,
    "process": 5,
    "community": 8,
    "chaos": 7,
    "rootedness": 9
  },
  "VAL": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 7,
    "process": 4,
    "community": 7,
    "chaos": 9,
    "rootedness": 9
  },
  "DEP": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 6,
    "process": 5,
    "community": 7,
    "chaos": 6,
    "rootedness": 9
  },
  "RAC": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 5,
    "process": 5,
    "community": 7,
    "chaos": 5,
    "rootedness": 10
  },
  "MAL": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 6,
    "process": 4,
    "community": 6,
    "chaos": 8,
    "rootedness": 7
  },
  "VIL": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 7,
    "process": 9,
    "community": 6,
    "chaos": 3,
    "rootedness": 7
  },
  "ALA": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 5,
    "process": 5,
    "community": 6,
    "chaos": 5,
    "rootedness": 8
  },
  "GET": {
    "loyalty": 6,
    "emotion": 5,
    "ambition": 4,
    "process": 6,
    "community": 5,
    "chaos": 7,
    "rootedness": 5
  },
  "OSA": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 4,
    "process": 5,
    "community": 9,
    "chaos": 5,
    "rootedness": 9
  },
  "RAY": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 4,
    "process": 4,
    "community": 10,
    "chaos": 7,
    "rootedness": 9
  },
  "ESP": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 4,
    "process": 5,
    "community": 6,
    "chaos": 6,
    "rootedness": 8
  },
  "CEL": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 4,
    "process": 6,
    "community": 7,
    "chaos": 5,
    "rootedness": 9
  },
  "LEV": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 3,
    "process": 4,
    "community": 6,
    "chaos": 7,
    "rootedness": 7
  },
  "ELC": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 3,
    "process": 4,
    "community": 5,
    "chaos": 5,
    "rootedness": 6
  }
};

const teamTextColors = {
  "RMA": "#D8D8D8",
  "BAR": "#6F9BD6",
  "ATM": "#F0686A",
  "ATH": "#F0686A",
  "RSO": "#6F9BD6",
  "SEV": "#D8D8D8",
  "BET": "#5FC58C",
  "VAL": "#CFCFCF",
  "DEP": "#6F9BD6",
  "RAC": "#5FC58C",
  "MAL": "#6F9BD6",
  "VIL": "#F4D93C",
  "ALA": "#6F9BD6",
  "GET": "#6F9BD6",
  "OSA": "#F0686A",
  "RAY": "#D8D8D8",
  "ESP": "#6F9BD6",
  "CEL": "#8FC7EE",
  "LEV": "#6F9BD6",
  "ELC": "#D8D8D8"
};

const teams = {
  "RMA": {
    "code3": "RMA",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Real Madrid",
    "emoji": "👑",
    "color": "#FFFFFF"
  },
  "BAR": {
    "code3": "BAR",
    "kitType": "stripes",
    "secondaryColor": "#A50044",
    "name": "Barcelona",
    "emoji": "🔵",
    "color": "#004D98"
  },
  "ATM": {
    "code3": "ATM",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Atlético Madrid",
    "emoji": "🔴",
    "color": "#CB3524"
  },
  "ATH": {
    "code3": "ATH",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Athletic Bilbao",
    "emoji": "🦁",
    "color": "#EE2523"
  },
  "RSO": {
    "code3": "RSO",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Real Sociedad",
    "emoji": "🔷",
    "color": "#0067B1"
  },
  "SEV": {
    "code3": "SEV",
    "kitType": "duo",
    "secondaryColor": "#D90429",
    "name": "Sevilla",
    "emoji": "⚪",
    "color": "#FFFFFF"
  },
  "BET": {
    "code3": "BET",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Real Betis",
    "emoji": "🟢",
    "color": "#00954C"
  },
  "VAL": {
    "code3": "VAL",
    "kitType": "duo",
    "secondaryColor": "#111111",
    "name": "Valencia",
    "emoji": "🦇",
    "color": "#FFFFFF"
  },
  "DEP": {
    "code3": "DEP",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Deportivo La Coruña",
    "emoji": "🔷",
    "color": "#0070C0"
  },
  "RAC": {
    "code3": "RAC",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Racing Santander",
    "emoji": "🟢",
    "color": "#009639"
  },
  "MAL": {
    "code3": "MAL",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Málaga",
    "emoji": "🐟",
    "color": "#006DB6"
  },
  "VIL": {
    "code3": "VIL",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Villarreal",
    "emoji": "🟡",
    "color": "#FFE000"
  },
  "ALA": {
    "code3": "ALA",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Alavés",
    "emoji": "🔵",
    "color": "#0761AF"
  },
  "GET": {
    "code3": "GET",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Getafe",
    "emoji": "🔵",
    "color": "#005999"
  },
  "OSA": {
    "code3": "OSA",
    "kitType": "duo",
    "secondaryColor": "#0A2342",
    "name": "Osasuna",
    "emoji": "🔴",
    "color": "#D81E05"
  },
  "RAY": {
    "code3": "RAY",
    "kitType": "sash",
    "secondaryColor": "#E53027",
    "name": "Rayo Vallecano",
    "emoji": "⚡",
    "color": "#FFFFFF"
  },
  "ESP": {
    "code3": "ESP",
    "kitType": "stripes",
    "secondaryColor": "#FFFFFF",
    "name": "Espanyol",
    "emoji": "🔵",
    "color": "#0078D0"
  },
  "CEL": {
    "code3": "CEL",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Celta Vigo",
    "emoji": "🔵",
    "color": "#8AC3EE"
  },
  "LEV": {
    "code3": "LEV",
    "kitType": "stripes",
    "secondaryColor": "#9E1B32",
    "name": "Levante",
    "emoji": "🐸",
    "color": "#004B9B"
  },
  "ELC": {
    "code3": "ELC",
    "kitType": "sash",
    "secondaryColor": "#00863C",
    "name": "Elche",
    "emoji": "🟢",
    "color": "#FFFFFF"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
