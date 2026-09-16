// FanDNA - SERIEA data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in seriea-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "INT": "La Beneamata",
  "JUV": "La Vecchia Signora",
  "MIL": "Il Diavolo",
  "NAP": "I Partenopei",
  "ROM": "La Magica",
  "LAZ": "Le Aquile",
  "ATA": "La Dea",
  "FIO": "La Viola",
  "BOL": "I Felsinei",
  "TOR": "Il Toro",
  "GEN": "Il Grifone",
  "UDI": "I Friulani",
  "COM": "I Lariani",
  "CAG": "Gli Isolani",
  "LEC": "I Salentini",
  "PAR": "I Crociati",
  "SAS": "I Neroverdi",
  "MON": "I Brianzoli",
  "FRO": "I Ciociari",
  "VEN": "I Lagunari"
};

const moduleQuestions = [
  {
    "id": "sa_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "When you set out to win something, your instinct is to:",
    "options": [
      {
        "label": "Lock it down. Give nothing away, take my one chance.",
        "value": "A"
      },
      {
        "label": "Go for the throat. I'd rather lose big than win ugly.",
        "value": "B"
      },
      {
        "label": "Adapt to the moment. No fixed creed.",
        "value": "C"
      },
      {
        "label": "Out-work everyone. Sleeves up, sort it out.",
        "value": "D"
      }
    ]
  },
  {
    "id": "sa_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "On winning by your wits, the sly foul, the bit of gamesmanship, you:",
    "options": [
      {
        "label": "Admire it. The clever operator who knows the dark arts is doing the job right.",
        "value": "A"
      },
      {
        "label": "Can't stand it. Win clean or don't win at all.",
        "value": "B"
      },
      {
        "label": "Use it when I have to, but it isn't who I am.",
        "value": "C"
      },
      {
        "label": "Live by it out of necessity. With less than everyone else, cunning is survival.",
        "value": "D"
      }
    ]
  },
  {
    "id": "sa_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "When bigger, richer places look down on where you're from, you:",
    "options": [
      {
        "label": "Bristle, and belong harder. My patch against their money, any day.",
        "value": "A"
      },
      {
        "label": "Feel it quietly. I know what my place is worth without shouting.",
        "value": "B"
      },
      {
        "label": "Don't take sides. It's the people, not the postcode.",
        "value": "C"
      },
      {
        "label": "Shrug. I'm not really of one place anyway.",
        "value": "D"
      }
    ]
  },
  {
    "id": "sa_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "When it comes to one strong guiding hand running the show, you:",
    "options": [
      {
        "label": "Trust it completely. A clear authority with a plan builds good things.",
        "value": "A"
      },
      {
        "label": "Want a say. I'll follow a leader, but I won't be a passenger.",
        "value": "B"
      },
      {
        "label": "Prefer heart over any system. People and passion win, not a master plan.",
        "value": "C"
      },
      {
        "label": "Distrust anyone with too much control. Power in one place tends to curdle.",
        "value": "D"
      }
    ]
  },
  {
    "id": "sa_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "If something you loved got caught up in something shameful, your first instinct is to:",
    "options": [
      {
        "label": "Defend it and stand closer. The world piling on only binds me tighter.",
        "value": "A"
      },
      {
        "label": "Sit with the disappointment, but stay. I don't walk over one disgrace.",
        "value": "B"
      },
      {
        "label": "Demand it put things right before I forgive. Trust is earned back.",
        "value": "C"
      },
      {
        "label": "Cool right off. If it cut corners, it was never quite what I thought.",
        "value": "D"
      }
    ]
  },
  {
    "id": "sa_q6",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "When it comes to winning the top prize:",
    "left": "Chasing the very top, or nothing. Anything less is just existing.",
    "right": "The badge already on my chest is enough. Belonging beats winning."
  },
  {
    "id": "sa_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "How much you crave being part of a big, buzzing collective:",
    "options": [
      {
        "label": "Completely. Right in the thick of it, one of many, and loving it.",
        "value": "A"
      },
      {
        "label": "Strong, from a step back. I love the togetherness without needing the front row.",
        "value": "B"
      },
      {
        "label": "Mild. I'm there for the thing itself more than the group around it.",
        "value": "C"
      },
      {
        "label": "Faint. I don't need a crowd to feel something. I'd be just as happy alone.",
        "value": "D"
      }
    ]
  },
  {
    "id": "sa_q8",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Some places run on constant drama; others stay calm. Which would you take?",
    "left": "The drama. Upheaval at least means I'm alive.",
    "right": "The steady hand. Give me boring stability and a plan that lasts."
  },
  {
    "id": "sa_q9",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Win ugly or win beautifully, which would you take?",
    "left": "Win with style or it barely counts. How it's done is the whole point.",
    "right": "Win however. A scrappy 1-0 spends the same as a glorious 4-0."
  },
  {
    "id": "sa_q10",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Faced with a better offer somewhere else, you'd:",
    "left": "Stay. Loyalty isn't loyalty if you only keep it when it's easy.",
    "right": "Take the better thing. Sentiment is nice, but I owe it to myself."
  },
  {
    "id": "sa_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When a big decision goes against you, you:",
    "options": [
      {
        "label": "See the hand of something bigger. The big clubs get the calls, let's not pretend otherwise.",
        "value": "A"
      },
      {
        "label": "Rage in the moment, then let it go. Furious, but I don't make a religion of it.",
        "value": "B"
      },
      {
        "label": "Stay coldly above it. Complaining is for people who lose.",
        "value": "C"
      },
      {
        "label": "Half-suspect I'd get the calls if I were bigger. I'd take the favor gladly.",
        "value": "D"
      }
    ]
  },
  {
    "id": "sa_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When something you love wins or loses, you:",
    "options": [
      {
        "label": "Live it completely. Tears, roars, arms to the sky. No apology for any of it.",
        "value": "A"
      },
      {
        "label": "Feel it hard but hold the surface. The storm is inside, not on show.",
        "value": "B"
      },
      {
        "label": "Stay measured. I enjoy the highs without losing my head.",
        "value": "C"
      },
      {
        "label": "Keep a wry distance. I love it, but I won't weep over a ball game.",
        "value": "D"
      }
    ]
  }
];

const scoring = {
  "sa_q1": {
    "A": {
      "JUV": 2,
      "INT": 2,
      "ATA": 2,
      "UDI": 2,
      "BOL": 2
    },
    "B": {
      "NAP": 2,
      "ROM": 2,
      "FIO": 2,
      "MIL": 2,
      "LAZ": 2
    },
    "C": {
      "COM": 2,
      "MON": 2,
      "VEN": 2,
      "SAS": 2,
      "LEC": 2
    },
    "D": {
      "TOR": 2,
      "GEN": 2,
      "CAG": 2,
      "FRO": 2,
      "PAR": 2
    }
  },
  "sa_q2": {
    "A": {
      "JUV": 2,
      "INT": 2,
      "ATA": 2,
      "UDI": 2
    },
    "B": {
      "TOR": 2,
      "GEN": 2,
      "FIO": 2,
      "FRO": 2,
      "CAG": 2,
      "BOL": 2
    },
    "C": {
      "ROM": 2,
      "LAZ": 2,
      "NAP": 2,
      "MIL": 2,
      "COM": 2,
      "MON": 2
    },
    "D": {
      "LEC": 2,
      "SAS": 2,
      "VEN": 2,
      "PAR": 2
    }
  },
  "sa_q3": {
    "A": {
      "GEN": 2,
      "CAG": 2,
      "FIO": 2,
      "TOR": 2,
      "FRO": 2,
      "LEC": 2
    },
    "B": {
      "BOL": 2,
      "VEN": 2,
      "PAR": 2,
      "NAP": 2
    },
    "C": {
      "ATA": 2,
      "LAZ": 2,
      "ROM": 2
    },
    "D": {
      "JUV": 2,
      "INT": 2,
      "MIL": 2,
      "COM": 2,
      "UDI": 2,
      "SAS": 2,
      "MON": 2
    }
  },
  "sa_q4": {
    "A": {
      "JUV": 2,
      "UDI": 2,
      "ATA": 2,
      "BOL": 2,
      "SAS": 2,
      "COM": 2
    },
    "B": {
      "MIL": 2,
      "INT": 2,
      "LAZ": 2,
      "MON": 2
    },
    "C": {
      "NAP": 2,
      "ROM": 2,
      "TOR": 2,
      "FIO": 2,
      "CAG": 2,
      "LEC": 2
    },
    "D": {
      "GEN": 3,
      "PAR": 2,
      "FRO": 2,
      "VEN": 2
    }
  },
  "sa_q5": {
    "A": {
      "TOR": 2,
      "NAP": 2,
      "ROM": 2,
      "CAG": 2,
      "LEC": 2,
      "FIO": 2,
      "GEN": 2,
      "PAR": 2
    },
    "B": {
      "BOL": 2,
      "LAZ": 2,
      "FRO": 2,
      "VEN": 2,
      "MON": 2,
      "ATA": 2
    },
    "C": {
      "MIL": 2,
      "INT": 2
    },
    "D": {
      "JUV": 2,
      "UDI": 2,
      "COM": 2,
      "SAS": 2
    }
  },
  "sa_q6": {
    "left": {
      "JUV": 2,
      "INT": 2,
      "MIL": 2,
      "NAP": 2,
      "ATA": 2,
      "ROM": 2,
      "COM": 2,
      "LAZ": 2,
      "BOL": 2
    },
    "right": {
      "TOR": 2,
      "GEN": 2,
      "CAG": 2,
      "LEC": 2,
      "FRO": 2,
      "VEN": 2,
      "FIO": 2,
      "SAS": 2,
      "UDI": 2,
      "MON": 2,
      "PAR": 2
    }
  },
  "sa_q7": {
    "A": {
      "NAP": 2,
      "ROM": 2,
      "LAZ": 2,
      "TOR": 2,
      "ATA": 2,
      "CAG": 2,
      "GEN": 2
    },
    "B": {
      "FIO": 2,
      "LEC": 2,
      "FRO": 2,
      "BOL": 2,
      "PAR": 2,
      "VEN": 2
    },
    "C": {
      "INT": 2,
      "MIL": 2,
      "MON": 2,
      "COM": 2
    },
    "D": {
      "JUV": 2,
      "UDI": 2,
      "SAS": 2
    }
  },
  "sa_q8": {
    "left": {
      "NAP": 2,
      "ROM": 2,
      "TOR": 2,
      "PAR": 2,
      "LAZ": 2,
      "GEN": 2,
      "MIL": 2,
      "VEN": 2
    },
    "right": {
      "UDI": 2,
      "ATA": 2,
      "BOL": 2,
      "FRO": 2,
      "SAS": 2,
      "COM": 2,
      "JUV": 2,
      "INT": 2,
      "MON": 2,
      "FIO": 2,
      "CAG": 2,
      "LEC": 2
    }
  },
  "sa_q9": {
    "left": {
      "NAP": 2,
      "ROM": 2,
      "FIO": 2,
      "MIL": 2,
      "ATA": 2,
      "VEN": 2,
      "LAZ": 2
    },
    "right": {
      "JUV": 2,
      "INT": 2,
      "UDI": 2,
      "TOR": 2,
      "GEN": 2,
      "CAG": 2,
      "LEC": 2,
      "FRO": 2,
      "SAS": 2,
      "MON": 2,
      "BOL": 2,
      "COM": 2,
      "PAR": 2
    }
  },
  "sa_q10": {
    "left": {
      "TOR": 2,
      "ROM": 2,
      "NAP": 2,
      "GEN": 2,
      "CAG": 2,
      "LEC": 2,
      "FIO": 2,
      "PAR": 2
    },
    "right": {
      "JUV": 2,
      "INT": 2,
      "MIL": 2,
      "COM": 2,
      "UDI": 2,
      "SAS": 2,
      "ATA": 2,
      "BOL": 2,
      "LAZ": 2,
      "MON": 2,
      "FRO": 2,
      "VEN": 2
    }
  },
  "sa_q11": {
    "A": {
      "NAP": 2,
      "ROM": 2,
      "TOR": 2,
      "GEN": 2,
      "CAG": 2,
      "LAZ": 2
    },
    "B": {
      "FIO": 2,
      "LEC": 2,
      "PAR": 2,
      "FRO": 2,
      "MIL": 2
    },
    "C": {
      "JUV": 2,
      "INT": 2,
      "UDI": 2,
      "ATA": 2,
      "SAS": 2,
      "COM": 2
    },
    "D": {
      "BOL": 2,
      "MON": 2,
      "VEN": 2
    }
  },
  "sa_q12": {
    "A": {
      "NAP": 2,
      "ROM": 2,
      "TOR": 2,
      "FIO": 2,
      "CAG": 2,
      "LAZ": 2,
      "GEN": 2
    },
    "B": {
      "INT": 2,
      "MIL": 2,
      "BOL": 2,
      "PAR": 2,
      "LEC": 2
    },
    "C": {
      "JUV": 2,
      "UDI": 2,
      "ATA": 2,
      "SAS": 2,
      "COM": 2
    },
    "D": {
      "MON": 2,
      "FRO": 2,
      "VEN": 2
    }
  }
};

const teamDims = {
  "INT": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 9,
    "process": 8,
    "community": 5,
    "chaos": 5,
    "rootedness": 5
  },
  "JUV": {
    "loyalty": 5,
    "emotion": 5,
    "ambition": 10,
    "process": 9,
    "community": 3,
    "chaos": 6,
    "rootedness": 6
  },
  "MIL": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 9,
    "process": 6,
    "community": 5,
    "chaos": 6,
    "rootedness": 6
  },
  "NAP": {
    "loyalty": 9,
    "emotion": 10,
    "ambition": 8,
    "process": 4,
    "community": 9,
    "chaos": 9,
    "rootedness": 9
  },
  "ROM": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 7,
    "process": 4,
    "community": 8,
    "chaos": 7,
    "rootedness": 8
  },
  "LAZ": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 6,
    "process": 5,
    "community": 6,
    "chaos": 7,
    "rootedness": 6
  },
  "ATA": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 8,
    "process": 9,
    "community": 8,
    "chaos": 4,
    "rootedness": 8
  },
  "FIO": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 6,
    "process": 5,
    "community": 8,
    "chaos": 6,
    "rootedness": 9
  },
  "BOL": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 6,
    "process": 8,
    "community": 6,
    "chaos": 4,
    "rootedness": 7
  },
  "TOR": {
    "loyalty": 10,
    "emotion": 9,
    "ambition": 5,
    "process": 5,
    "community": 8,
    "chaos": 7,
    "rootedness": 9
  },
  "GEN": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 5,
    "process": 5,
    "community": 7,
    "chaos": 6,
    "rootedness": 10
  },
  "UDI": {
    "loyalty": 5,
    "emotion": 4,
    "ambition": 5,
    "process": 9,
    "community": 5,
    "chaos": 3,
    "rootedness": 6
  },
  "COM": {
    "loyalty": 4,
    "emotion": 5,
    "ambition": 8,
    "process": 8,
    "community": 4,
    "chaos": 5,
    "rootedness": 4
  },
  "CAG": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 4,
    "process": 5,
    "community": 9,
    "chaos": 4,
    "rootedness": 9
  },
  "LEC": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 4,
    "process": 5,
    "community": 7,
    "chaos": 6,
    "rootedness": 8
  },
  "PAR": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 6,
    "process": 6,
    "community": 6,
    "chaos": 8,
    "rootedness": 7
  },
  "SAS": {
    "loyalty": 5,
    "emotion": 4,
    "ambition": 5,
    "process": 8,
    "community": 4,
    "chaos": 5,
    "rootedness": 4
  },
  "MON": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 7,
    "process": 7,
    "community": 5,
    "chaos": 5,
    "rootedness": 5
  },
  "FRO": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 5,
    "process": 5,
    "community": 7,
    "chaos": 4,
    "rootedness": 7
  },
  "VEN": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 4,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 8
  }
};

const teamTextColors = {
  "INT": "#7F95C8",
  "JUV": "#BFBFBF",
  "MIL": "#F0686A",
  "NAP": "#6FB8E8",
  "ROM": "#D88A4A",
  "LAZ": "#9FD8EC",
  "ATA": "#6F9BD6",
  "FIO": "#A98FD0",
  "BOL": "#F0686A",
  "TOR": "#E07A82",
  "GEN": "#F0686A",
  "UDI": "#BFBFBF",
  "COM": "#7F95C8",
  "CAG": "#F0686A",
  "LEC": "#F0D040",
  "PAR": "#F0D040",
  "SAS": "#3FC47F",
  "MON": "#F0686A",
  "FRO": "#F0D040",
  "VEN": "#F0A050"
};

const teams = {
  "INT": {
    "code3": "INT",
    "kitType": "stripes",
    "secondaryColor": "#000000",
    "name": "Inter",
    "emoji": "⚫",
    "color": "#0B1F8C"
  },
  "JUV": {
    "code3": "JUV",
    "kitType": "stripes",
    "secondaryColor": "#000000",
    "name": "Juventus",
    "emoji": "🦓",
    "color": "#FFFFFF"
  },
  "MIL": {
    "code3": "MIL",
    "kitType": "stripes",
    "secondaryColor": "#000000",
    "name": "AC Milan",
    "emoji": "🔴",
    "color": "#FB090B"
  },
  "NAP": {
    "code3": "NAP",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Napoli",
    "emoji": "🌋",
    "color": "#0A86D8"
  },
  "ROM": {
    "code3": "ROM",
    "kitType": "solid",
    "secondaryColor": "#F0BC42",
    "name": "Roma",
    "emoji": "🐺",
    "color": "#8E1F2F"
  },
  "LAZ": {
    "code3": "LAZ",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Lazio",
    "emoji": "🦅",
    "color": "#87D8F0"
  },
  "ATA": {
    "code3": "ATA",
    "kitType": "stripes",
    "secondaryColor": "#000000",
    "name": "Atalanta",
    "emoji": "⛰️",
    "color": "#1B61A8"
  },
  "FIO": {
    "code3": "FIO",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Fiorentina",
    "emoji": "🪻",
    "color": "#5E2E86"
  },
  "BOL": {
    "code3": "BOL",
    "kitType": "stripes",
    "secondaryColor": "#0A2156",
    "name": "Bologna",
    "emoji": "🗼",
    "color": "#A91E22"
  },
  "TOR": {
    "code3": "TOR",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Torino",
    "emoji": "🐂",
    "color": "#7A1420"
  },
  "GEN": {
    "code3": "GEN",
    "kitType": "stripes",
    "secondaryColor": "#0A2156",
    "name": "Genoa",
    "emoji": "🦅",
    "color": "#A4172B"
  },
  "UDI": {
    "code3": "UDI",
    "kitType": "stripes",
    "secondaryColor": "#000000",
    "name": "Udinese",
    "emoji": "🦓",
    "color": "#1A1A1A"
  },
  "COM": {
    "code3": "COM",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Como",
    "emoji": "⛵",
    "color": "#1F4FA8"
  },
  "CAG": {
    "code3": "CAG",
    "kitType": "stripes",
    "secondaryColor": "#0A2156",
    "name": "Cagliari",
    "emoji": "🏝️",
    "color": "#A4172B"
  },
  "LEC": {
    "code3": "LEC",
    "kitType": "solid",
    "secondaryColor": "#A4172B",
    "name": "Lecce",
    "emoji": "🐺",
    "color": "#F0C81E"
  },
  "PAR": {
    "code3": "PAR",
    "kitType": "solid",
    "secondaryColor": "#0A2156",
    "name": "Parma",
    "emoji": "✝️",
    "color": "#F0D000"
  },
  "SAS": {
    "code3": "SAS",
    "kitType": "stripes",
    "secondaryColor": "#000000",
    "name": "Sassuolo",
    "emoji": "🟢",
    "color": "#00A752"
  },
  "MON": {
    "code3": "MON",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Monza",
    "emoji": "🏎️",
    "color": "#C8102E"
  },
  "FRO": {
    "code3": "FRO",
    "kitType": "solid",
    "secondaryColor": "#0A2156",
    "name": "Frosinone",
    "emoji": "🐤",
    "color": "#F0C81E"
  },
  "VEN": {
    "code3": "VEN",
    "kitType": "solid",
    "secondaryColor": "#00A752",
    "name": "Venezia",
    "emoji": "🚤",
    "color": "#F08000"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
