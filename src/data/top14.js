// FanDNA - TOP14 data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in top14-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "TLS": "La Vierge Rouge",
  "RCT": "Pilou Pilou",
  "UBB": "Le Chaudron Magique",
  "LAR": "Les Maritimes",
  "ASM": "Le Peuple Jaune",
  "SFP": "Les Dieux du Stade",
  "R92": "Ciel et Blanc",
  "ABR": "Peña Baiona",
  "PAU": "Honhada",
  "USP": "Sang et Or",
  "CAS": "Le Modèle Castrais",
  "MHR": "Les Cistes",
  "LOU": "Les Loups",
  "USM": "L'Esprit Sapiac"
};

const moduleQuestions = [
  {
    "id": "top14_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "When you put a group together, who do you want in it?",
    "options": [
      {
        "label": "The people I came up with. I'd back someone I've known from the start over a ready-made name from outside.",
        "value": "A"
      },
      {
        "label": "The most capable there are. If I want the best, I go and find them.",
        "value": "B"
      },
      {
        "label": "The hungriest. Give me heart and drive over a polished record.",
        "value": "C"
      },
      {
        "label": "Whoever I rate, in or out of fashion. I trust my own eye over the consensus.",
        "value": "D"
      }
    ]
  },
  {
    "id": "top14_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "There's always noise and drama around anything people care about. Where are you in it?",
    "options": [
      {
        "label": "Stirring it up. A bit of provocation keeps the whole thing alive.",
        "value": "A"
      },
      {
        "label": "Cutting through it. I'd lose the circus and let the real thing speak.",
        "value": "B"
      },
      {
        "label": "Loving it. The bigger and louder the show, the better.",
        "value": "C"
      },
      {
        "label": "Tuning it out. I just quietly show up, no need for the theatre.",
        "value": "D"
      }
    ]
  },
  {
    "id": "top14_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "What kind of thing would you most want to be part of?",
    "options": [
      {
        "label": "Something people are wild about. Full of passion, noise and colour.",
        "value": "A"
      },
      {
        "label": "Something honest and unpretentious. No fuss, no airs, just real.",
        "value": "B"
      },
      {
        "label": "Somewhere with a bit of glamour. Money, style, a modern sheen.",
        "value": "C"
      },
      {
        "label": "A big, established name. Something with real weight and history behind it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "top14_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "Deep down, what does the thing you love most feel like to you?",
    "options": [
      {
        "label": "A calling. Something almost sacred, that I treat with real reverence.",
        "value": "A"
      },
      {
        "label": "A celebration. A joyful, colourful thing I throw myself into.",
        "value": "B"
      },
      {
        "label": "A cause. Something I burn for, all or nothing, no half measures.",
        "value": "C"
      },
      {
        "label": "A project. Something modern and ambitious I'm helping to build.",
        "value": "D"
      }
    ]
  }
];

const scoring = {
  "top14_q1": {
    "A": {
      "CAS": 3,
      "LAR": 3,
      "TLS": 3,
      "MHR": 1,
      "PAU": 1
    },
    "B": {
      "MHR": 3,
      "R92": 3,
      "RCT": 3
    },
    "C": {
      "ABR": 3,
      "UBB": 3,
      "USP": 3,
      "LAR": 1
    },
    "D": {
      "LOU": 3,
      "PAU": 3,
      "USM": 3
    }
  },
  "top14_q2": {
    "A": {
      "R92": 3,
      "SFP": 3,
      "USP": 3
    },
    "B": {
      "CAS": 3,
      "MHR": 3,
      "TLS": 3
    },
    "C": {
      "LOU": 3,
      "RCT": 3,
      "UBB": 3,
      "R92": 1
    },
    "D": {
      "ABR": 3,
      "ASM": 3,
      "LAR": 3,
      "USM": 3
    }
  },
  "top14_q3": {
    "A": {
      "ABR": 3,
      "UBB": 3,
      "USP": 3,
      "RCT": 1
    },
    "B": {
      "CAS": 3,
      "PAU": 3,
      "USM": 3
    },
    "C": {
      "MHR": 3,
      "R92": 3,
      "SFP": 3
    },
    "D": {
      "LOU": 3,
      "RCT": 3,
      "TLS": 3
    }
  },
  "top14_q4": {
    "A": {
      "ASM": 3,
      "CAS": 3,
      "LAR": 3,
      "PAU": 3,
      "TLS": 3,
      "USM": 1
    },
    "B": {
      "ABR": 3,
      "LOU": 3,
      "UBB": 3,
      "USM": 3
    },
    "C": {
      "RCT": 3,
      "SFP": 3,
      "USP": 3
    },
    "D": {
      "MHR": 3,
      "R92": 3
    }
  }
};

const teamDims = {
  "TLS": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 10,
    "process": 10,
    "community": 7,
    "chaos": 2,
    "rootedness": 9
  },
  "RCT": {
    "loyalty": 6,
    "emotion": 8,
    "ambition": 9,
    "process": 3,
    "community": 6,
    "chaos": 9,
    "rootedness": 5
  },
  "UBB": {
    "loyalty": 7,
    "emotion": 9,
    "ambition": 9,
    "process": 6,
    "community": 9,
    "chaos": 7,
    "rootedness": 4
  },
  "LAR": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 7,
    "process": 8,
    "community": 9,
    "chaos": 4,
    "rootedness": 8
  },
  "ASM": {
    "loyalty": 10,
    "emotion": 9,
    "ambition": 6,
    "process": 5,
    "community": 8,
    "chaos": 4,
    "rootedness": 9
  },
  "SFP": {
    "loyalty": 5,
    "emotion": 8,
    "ambition": 7,
    "process": 5,
    "community": 4,
    "chaos": 10,
    "rootedness": 3
  },
  "R92": {
    "loyalty": 4,
    "emotion": 6,
    "ambition": 9,
    "process": 6,
    "community": 3,
    "chaos": 8,
    "rootedness": 3
  },
  "ABR": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 6,
    "process": 5,
    "community": 9,
    "chaos": 6,
    "rootedness": 9
  },
  "PAU": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 6,
    "community": 8,
    "chaos": 3,
    "rootedness": 9
  },
  "USP": {
    "loyalty": 9,
    "emotion": 10,
    "ambition": 5,
    "process": 4,
    "community": 8,
    "chaos": 8,
    "rootedness": 9
  },
  "CAS": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 5,
    "process": 9,
    "community": 9,
    "chaos": 2,
    "rootedness": 9
  },
  "MHR": {
    "loyalty": 4,
    "emotion": 4,
    "ambition": 8,
    "process": 8,
    "community": 3,
    "chaos": 5,
    "rootedness": 3
  },
  "LOU": {
    "loyalty": 5,
    "emotion": 7,
    "ambition": 7,
    "process": 5,
    "community": 5,
    "chaos": 6,
    "rootedness": 4
  },
  "USM": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 3,
    "process": 4,
    "community": 9,
    "chaos": 4,
    "rootedness": 9
  }
};

const teamTextColors = {
  "TLS": "#F08A8E",
  "RCT": "#E87F8E",
  "UBB": "#C79AA6",
  "LAR": "#FFE066",
  "ASM": "#FFE066",
  "SFP": "#F27AB8",
  "R92": "#A8DDF0",
  "ABR": "#7FCBEE",
  "PAU": "#6FC08D",
  "USP": "#DE8285",
  "CAS": "#8598D6",
  "MHR": "#7FA5D2",
  "LOU": "#F0838A",
  "USM": "#6FAE90"
};

const teams = {
  "TLS": {
    "name": "Stade Toulousain",
    "emoji": "⭐",
    "color": "#E01A22",
    "code3": "TLS",
    "kitType": "duo",
    "secondaryColor": "#111111"
  },
  "RCT": {
    "name": "RC Toulon",
    "emoji": "⚓",
    "color": "#D2001F",
    "code3": "RCT",
    "kitType": "duo",
    "secondaryColor": "#111111"
  },
  "UBB": {
    "name": "Union Bordeaux Bègles",
    "emoji": "🍷",
    "color": "#6E2639",
    "code3": "UBB",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "LAR": {
    "name": "Stade Rochelais",
    "emoji": "🌊",
    "color": "#FFD200",
    "code3": "LAR",
    "kitType": "duo",
    "secondaryColor": "#111111"
  },
  "ASM": {
    "name": "ASM Clermont Auvergne",
    "emoji": "💛",
    "color": "#FFD100",
    "code3": "ASM",
    "kitType": "duo",
    "secondaryColor": "#0A2C6E"
  },
  "SFP": {
    "name": "Stade Français Paris",
    "emoji": "🌸",
    "color": "#E6007E",
    "code3": "SFP",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "R92": {
    "name": "Racing 92",
    "emoji": "💎",
    "color": "#5BC2E7",
    "code3": "R92",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "ABR": {
    "name": "Aviron Bayonnais",
    "emoji": "🎉",
    "color": "#009EE0",
    "code3": "ABR",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "PAU": {
    "name": "Section Paloise",
    "emoji": "⛰️",
    "color": "#009639",
    "code3": "PAU",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "USP": {
    "name": "USA Perpignan",
    "emoji": "🔥",
    "color": "#B01116",
    "code3": "USP",
    "kitType": "duo",
    "secondaryColor": "#F2A900"
  },
  "CAS": {
    "name": "Castres Olympique",
    "emoji": "⚙️",
    "color": "#0033A0",
    "code3": "CAS",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "MHR": {
    "name": "Montpellier Hérault Rugby",
    "emoji": "🌿",
    "color": "#0055A4",
    "code3": "MHR",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "LOU": {
    "name": "Lyon OU",
    "emoji": "🐺",
    "color": "#E30613",
    "code3": "LOU",
    "kitType": "duo",
    "secondaryColor": "#111111"
  },
  "USM": {
    "name": "US Montauban",
    "emoji": "🌾",
    "color": "#006C3B",
    "code3": "USM",
    "kitType": "duo",
    "secondaryColor": "#111111"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
