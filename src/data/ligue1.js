// FanDNA - LIGUE1 data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in ligue1-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "PSG": "Ici c'est Paris",
  "MAR": "À jamais les premiers",
  "MON": "Le Rocher",
  "LIL": "Les Dogues",
  "LYO": "Les Gones",
  "LEN": "Sang et Or",
  "BRE": "Ti-Zef",
  "REN": "Le Roazhon",
  "STR": "La Meinau",
  "TOU": "Les Violets",
  "NIC": "Le Gym",
  "AJA": "Les Bourguignons",
  "HAC": "Le Doyen",
  "ANG": "Les Angevins",
  "LOR": "Les Merlus",
  "PFC": "L'autre Paris",
  "TRO": "Les Champenois",
  "LEM": "Les Manceaux"
};

const moduleQuestions = [
  {
    "id": "l1_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "There's always someone with all the money, soaking up the best of everything. You:",
    "options": [
      {
        "label": "Want to drag them down a peg. Beating the giant is the sweetest win there is.",
        "value": "A"
      },
      {
        "label": "Wish I were them. If the money showed up, I'd take it.",
        "value": "B"
      },
      {
        "label": "Barely think about them. Too busy with my own thing.",
        "value": "C"
      },
      {
        "label": "Want to beat them on merit, with less. The only win that counts.",
        "value": "D"
      }
    ]
  },
  {
    "id": "l1_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "When something you love turns into a big, noisy scene, where are you in it?",
    "options": [
      {
        "label": "Right in it. I help make the noise. It's half the reason I come.",
        "value": "A"
      },
      {
        "label": "Swept up in it. I get carried along and feel part of something.",
        "value": "B"
      },
      {
        "label": "Feeling it quietly. It moves me, I just don't show it big.",
        "value": "C"
      },
      {
        "label": "Kept at arm's length. I came for the thing itself, not the spectacle.",
        "value": "D"
      }
    ]
  },
  {
    "id": "l1_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "Sitting with the memory of a greatness that's slipped into the past, you feel it:",
    "options": [
      {
        "label": "As a weight. The best days are behind, and the gap aches.",
        "value": "A"
      },
      {
        "label": "As pride and fuel. That history is proof of what I am.",
        "value": "B"
      },
      {
        "label": "With peace. It was wonderful, it's over, that's alright.",
        "value": "C"
      },
      {
        "label": "Not at all. There was never a golden age to lose, and that's freedom.",
        "value": "D"
      }
    ]
  },
  {
    "id": "l1_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "On getting where you want to be, you:",
    "options": [
      {
        "label": "Love the slow build. Brick by brick is the whole pleasure.",
        "value": "A"
      },
      {
        "label": "Want it now. Patience is fine in theory, but I'm impatient.",
        "value": "B"
      },
      {
        "label": "Believe in building slowly, but it aches. I make myself wait.",
        "value": "C"
      },
      {
        "label": "Distrust anything quick. A shortcut to the top falls down fast.",
        "value": "D"
      }
    ]
  },
  {
    "id": "l1_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "Making something good out of less than others get, you feel:",
    "options": [
      {
        "label": "Proud. Doing a lot with a little is what I'm best at.",
        "value": "A"
      },
      {
        "label": "Frustrated for the means. Give me the resources and watch.",
        "value": "B"
      },
      {
        "label": "Unbothered. I make do, I don't dwell on it.",
        "value": "C"
      },
      {
        "label": "Resentful. I've had more before, and scraping by grates.",
        "value": "D"
      }
    ]
  },
  {
    "id": "l1_q6",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "When something great comes together, what moves you more?",
    "left": "One dazzling individual, the genius who lifts everyone.",
    "right": "A band of equals, no stars, more than the sum of its parts."
  },
  {
    "id": "l1_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "New owners arrive wanting to change everything, rebrand, remake the place. Your gut:",
    "options": [
      {
        "label": "I'm in. Reinvention is how you stay alive. Burn the old furniture.",
        "value": "A"
      },
      {
        "label": "Carefully. Change what you must, but the soul isn't for sale.",
        "value": "B"
      },
      {
        "label": "Cautiously open. Show me it's better and I'll come around.",
        "value": "C"
      },
      {
        "label": "No. I don't let outsiders rewrite what was never theirs.",
        "value": "D"
      }
    ]
  },
  {
    "id": "l1_q8",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Faced with a real chance to win big or play it safe:",
    "left": "Roll the dice. Go for glory and risk the fall.",
    "right": "Take the steady road. Slow and solid beats spectacular and broke."
  },
  {
    "id": "l1_q9",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Think about a win that truly satisfied you. It counted because:",
    "left": "It cost me something. A win you didn't suffer for barely feels like one.",
    "right": "It was a win. Three points are three points, no suffering required."
  },
  {
    "id": "l1_q10",
    "type": "binary",
    "phase": "What it comes down to",
    "question": "Which would you trade the other for?",
    "left": "One unforgettable night a generation talks about forever.",
    "right": "The weekly ritual of turning up, win or lose, season after season."
  },
  {
    "id": "l1_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When the attention lands on someone else and you're left out of the conversation, you:",
    "options": [
      {
        "label": "Let it sharpen me. Being counted out is the best motivation there is.",
        "value": "A"
      },
      {
        "label": "Feel nothing. The spotlight was never what I came for.",
        "value": "B"
      },
      {
        "label": "Wish it would swing my way. Being overlooked stings, and I won't deny it.",
        "value": "C"
      },
      {
        "label": "Shrug and accept it. I'm not the main event, and I've made peace with it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "l1_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "On what all the money pouring in has done to the game, you:",
    "options": [
      {
        "label": "Mourn it. Something honest was lost, and I feel it.",
        "value": "A"
      },
      {
        "label": "Embrace it. Money is just how you compete now.",
        "value": "B"
      },
      {
        "label": "Stay defiant. They can buy a lot, but not what made me me.",
        "value": "C"
      },
      {
        "label": "Shrug. It is what it is. I didn't come for the economics.",
        "value": "D"
      }
    ]
  }
];

const scoring = {
  "l1_q1": {
    "A": {
      "LEN": 3,
      "MAR": 3
    },
    "B": {
      "PFC": 3,
      "PSG": 3
    },
    "C": {
      "AJA": 3,
      "ANG": 3,
      "BRE": 3,
      "HAC": 3,
      "LEM": 3,
      "LOR": 3,
      "MON": 3,
      "STR": 3,
      "TOU": 3,
      "TRO": 3
    },
    "D": {
      "LIL": 3,
      "LYO": 3,
      "NIC": 3,
      "REN": 3,
      "AJA": 1,
      "LEN": 1
    }
  },
  "l1_q2": {
    "A": {
      "LEN": 3,
      "MAR": 3,
      "STR": 3
    },
    "B": {
      "LEM": 3,
      "LYO": 3,
      "PSG": 3,
      "REN": 3
    },
    "C": {
      "ANG": 3,
      "LIL": 3,
      "LOR": 3,
      "MON": 3,
      "NIC": 3,
      "PFC": 3,
      "TOU": 3,
      "TRO": 3
    },
    "D": {
      "AJA": 3,
      "BRE": 3,
      "HAC": 3,
      "MON": 1
    }
  },
  "l1_q3": {
    "A": {
      "AJA": 3,
      "LEM": 3,
      "LYO": 3,
      "NIC": 3
    },
    "B": {
      "LEN": 3,
      "MAR": 3,
      "HAC": 1,
      "LYO": 1
    },
    "C": {
      "HAC": 3,
      "LIL": 3,
      "MON": 3,
      "STR": 3,
      "AJA": 1
    },
    "D": {
      "ANG": 3,
      "BRE": 3,
      "LOR": 3,
      "PFC": 3,
      "PSG": 3,
      "REN": 3,
      "TOU": 3,
      "TRO": 3,
      "MON": 1
    }
  },
  "l1_q4": {
    "A": {
      "ANG": 3,
      "BRE": 3,
      "LIL": 3,
      "LOR": 3,
      "MON": 3,
      "STR": 3,
      "TOU": 3,
      "AJA": 1
    },
    "B": {
      "MAR": 3,
      "PFC": 3,
      "PSG": 3,
      "TRO": 3
    },
    "C": {
      "LEM": 3,
      "LYO": 3,
      "NIC": 3,
      "REN": 3
    },
    "D": {
      "AJA": 3,
      "HAC": 3,
      "LEN": 3,
      "MON": 1
    }
  },
  "l1_q5": {
    "A": {
      "AJA": 3,
      "BRE": 3,
      "LEM": 3,
      "LEN": 3,
      "LIL": 3,
      "STR": 3,
      "TOU": 3
    },
    "B": {
      "MON": 3,
      "NIC": 3,
      "PFC": 3,
      "PSG": 3,
      "REN": 3,
      "MAR": 1
    },
    "C": {
      "ANG": 3,
      "HAC": 3,
      "LOR": 3,
      "TRO": 3
    },
    "D": {
      "LYO": 3,
      "MAR": 3
    }
  },
  "l1_q6": {
    "left": {
      "LYO": 3,
      "MON": 3,
      "NIC": 3,
      "PFC": 3,
      "PSG": 3,
      "REN": 3,
      "MAR": 1
    },
    "right": {
      "AJA": 3,
      "ANG": 3,
      "BRE": 3,
      "HAC": 3,
      "LEM": 3,
      "LEN": 3,
      "LIL": 3,
      "LOR": 3,
      "MAR": 3,
      "STR": 3,
      "TOU": 3,
      "TRO": 3
    }
  },
  "l1_q7": {
    "A": {
      "PFC": 3,
      "PSG": 3,
      "TRO": 3
    },
    "B": {
      "HAC": 3,
      "LEM": 3,
      "AJA": 1,
      "LEN": 1
    },
    "C": {
      "ANG": 3,
      "BRE": 3,
      "LIL": 3,
      "LOR": 3,
      "LYO": 3,
      "MON": 3,
      "NIC": 3,
      "REN": 3,
      "STR": 3,
      "TOU": 3
    },
    "D": {
      "AJA": 3,
      "LEN": 3,
      "MAR": 3,
      "HAC": 1
    }
  },
  "l1_q8": {
    "left": {
      "LEM": 3,
      "LEN": 3,
      "LYO": 3,
      "MAR": 3,
      "PSG": 3,
      "TRO": 3
    },
    "right": {
      "AJA": 3,
      "ANG": 3,
      "BRE": 3,
      "HAC": 3,
      "LIL": 3,
      "LOR": 3,
      "MON": 3,
      "NIC": 3,
      "PFC": 3,
      "REN": 3,
      "STR": 3,
      "TOU": 3,
      "LEN": 1
    }
  },
  "l1_q9": {
    "left": {
      "AJA": 3,
      "ANG": 3,
      "LEM": 3,
      "LEN": 3,
      "MAR": 3,
      "STR": 3
    },
    "right": {
      "BRE": 3,
      "HAC": 3,
      "LIL": 3,
      "LOR": 3,
      "LYO": 3,
      "MON": 3,
      "NIC": 3,
      "PFC": 3,
      "PSG": 3,
      "REN": 3,
      "TOU": 3,
      "TRO": 3
    }
  },
  "l1_q10": {
    "left": {
      "LYO": 3,
      "PSG": 3,
      "REN": 3,
      "MAR": 1
    },
    "right": {
      "AJA": 3,
      "ANG": 3,
      "BRE": 3,
      "HAC": 3,
      "LEM": 3,
      "LEN": 3,
      "LIL": 3,
      "LOR": 3,
      "MAR": 3,
      "MON": 3,
      "NIC": 3,
      "PFC": 3,
      "STR": 3,
      "TOU": 3,
      "TRO": 3
    }
  },
  "l1_q11": {
    "A": {
      "LEN": 3,
      "MAR": 3
    },
    "B": {
      "AJA": 3,
      "BRE": 3,
      "HAC": 3,
      "LIL": 3,
      "MON": 3,
      "STR": 3,
      "TOU": 3
    },
    "C": {
      "LYO": 3,
      "NIC": 3,
      "PFC": 3,
      "PSG": 3,
      "REN": 3
    },
    "D": {
      "ANG": 3,
      "LEM": 3,
      "LOR": 3,
      "TRO": 3
    }
  },
  "l1_q12": {
    "A": {
      "AJA": 3,
      "HAC": 3,
      "LEN": 3,
      "LYO": 3,
      "MAR": 3
    },
    "B": {
      "MON": 3,
      "NIC": 3,
      "PFC": 3,
      "PSG": 3,
      "REN": 3,
      "TRO": 3
    },
    "C": {
      "LEM": 3,
      "STR": 3,
      "LEN": 1,
      "MAR": 1
    },
    "D": {
      "ANG": 3,
      "BRE": 3,
      "LIL": 3,
      "LOR": 3,
      "TOU": 3
    }
  }
};

const teamDims = {
  "PSG": {
    "loyalty": 5,
    "emotion": 8,
    "ambition": 10,
    "process": 6,
    "community": 4,
    "chaos": 6,
    "rootedness": 4
  },
  "MAR": {
    "loyalty": 9,
    "emotion": 10,
    "ambition": 8,
    "process": 2,
    "community": 8,
    "chaos": 10,
    "rootedness": 9
  },
  "MON": {
    "loyalty": 3,
    "emotion": 4,
    "ambition": 7,
    "process": 9,
    "community": 2,
    "chaos": 4,
    "rootedness": 4
  },
  "LIL": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 7,
    "process": 8,
    "community": 5,
    "chaos": 3,
    "rootedness": 7
  },
  "LYO": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 8,
    "process": 5,
    "community": 5,
    "chaos": 8,
    "rootedness": 6
  },
  "LEN": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 5,
    "community": 9,
    "chaos": 5,
    "rootedness": 9
  },
  "BRE": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 6,
    "process": 6,
    "community": 7,
    "chaos": 3,
    "rootedness": 7
  },
  "REN": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 8,
    "process": 8,
    "community": 5,
    "chaos": 4,
    "rootedness": 7
  },
  "STR": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 7,
    "community": 8,
    "chaos": 4,
    "rootedness": 8
  },
  "TOU": {
    "loyalty": 5,
    "emotion": 5,
    "ambition": 5,
    "process": 8,
    "community": 5,
    "chaos": 3,
    "rootedness": 6
  },
  "NIC": {
    "loyalty": 5,
    "emotion": 6,
    "ambition": 6,
    "process": 5,
    "community": 4,
    "chaos": 6,
    "rootedness": 5
  },
  "AJA": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 9,
    "community": 8,
    "chaos": 3,
    "rootedness": 9
  },
  "HAC": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 4,
    "process": 6,
    "community": 7,
    "chaos": 4,
    "rootedness": 9
  },
  "ANG": {
    "loyalty": 6,
    "emotion": 5,
    "ambition": 4,
    "process": 5,
    "community": 5,
    "chaos": 6,
    "rootedness": 5
  },
  "LOR": {
    "loyalty": 6,
    "emotion": 5,
    "ambition": 4,
    "process": 6,
    "community": 7,
    "chaos": 5,
    "rootedness": 7
  },
  "PFC": {
    "loyalty": 4,
    "emotion": 4,
    "ambition": 8,
    "process": 8,
    "community": 4,
    "chaos": 6,
    "rootedness": 4
  },
  "TRO": {
    "loyalty": 5,
    "emotion": 5,
    "ambition": 5,
    "process": 7,
    "community": 5,
    "chaos": 7,
    "rootedness": 4
  },
  "LEM": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 5,
    "process": 5,
    "community": 7,
    "chaos": 7,
    "rootedness": 7
  }
};

const teamTextColors = {
  "PSG": "#A9C0E8",
  "MAR": "#5B8FBF",
  "MON": "#F0686A",
  "LIL": "#F0686A",
  "LYO": "#5566A8",
  "LEN": "#F4D93C",
  "BRE": "#F0686A",
  "REN": "#F0686A",
  "STR": "#7FC4EA",
  "TOU": "#B79BD8",
  "NIC": "#F0686A",
  "AJA": "#6F9BD6",
  "HAC": "#8FC2E8",
  "ANG": "#BFBFBF",
  "LOR": "#FBC38E",
  "PFC": "#7F95C8",
  "TRO": "#6F9BD6",
  "LEM": "#C9AE3E"
};

const teams = {
  "PSG": {
    "code3": "PSG",
    "kitType": "duo",
    "secondaryColor": "#DA291C",
    "name": "Paris Saint-Germain",
    "emoji": "🗼",
    "color": "#0B1F44"
  },
  "MAR": {
    "code3": "MAR",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Marseille",
    "emoji": "🌊",
    "color": "#FFFFFF"
  },
  "MON": {
    "code3": "MON",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Monaco",
    "emoji": "💎",
    "color": "#E51B22"
  },
  "LIL": {
    "code3": "LIL",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Lille",
    "emoji": "🐕",
    "color": "#E01E24"
  },
  "LYO": {
    "code3": "LYO",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Lyon",
    "emoji": "🦁",
    "color": "#FFFFFF"
  },
  "LEN": {
    "code3": "LEN",
    "kitType": "stripes",
    "secondaryColor": "#FFD200",
    "name": "Lens",
    "emoji": "⛏️",
    "color": "#E8112D"
  },
  "BRE": {
    "code3": "BRE",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Brest",
    "emoji": "🏴‍☠️",
    "color": "#E30613"
  },
  "REN": {
    "code3": "REN",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Rennes",
    "emoji": "⚫",
    "color": "#E2001A"
  },
  "STR": {
    "code3": "STR",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Strasbourg",
    "emoji": "🥨",
    "color": "#0090D4"
  },
  "TOU": {
    "code3": "TOU",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Toulouse",
    "emoji": "🟣",
    "color": "#5F259F"
  },
  "NIC": {
    "code3": "NIC",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Nice",
    "emoji": "🦅",
    "color": "#C8102E"
  },
  "AJA": {
    "code3": "AJA",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Auxerre",
    "emoji": "🍷",
    "color": "#0055A4"
  },
  "HAC": {
    "code3": "HAC",
    "kitType": "duo",
    "secondaryColor": "#6CACE4",
    "name": "Le Havre",
    "emoji": "⚓",
    "color": "#0A1F3C"
  },
  "ANG": {
    "code3": "ANG",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Angers",
    "emoji": "🏰",
    "color": "#1A1A1A"
  },
  "LOR": {
    "code3": "LOR",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Lorient",
    "emoji": "🐟",
    "color": "#F57E20"
  },
  "PFC": {
    "code3": "PFC",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Paris FC",
    "emoji": "🌃",
    "color": "#001B4E"
  },
  "TRO": {
    "code3": "TRO",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Troyes",
    "emoji": "🥂",
    "color": "#0E4B9C"
  },
  "LEM": {
    "code3": "LEM",
    "kitType": "duo",
    "secondaryColor": "#E30613",
    "name": "Le Mans",
    "emoji": "🏎️",
    "color": "#FFD200"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
