// FanDNA - MLB data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in mlb-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "NYY": "The Bronx Bomber",
  "LAD": "Blue Heaven",
  "STL": "The Redbird",
  "ATL": "Braves Country",
  "SF": "Orange and Black",
  "CIN": "The Redleg",
  "CHC": "The Bleacher Bum",
  "BOS": "Red Sox Nation",
  "CLE": "The Guardian",
  "SEA": "The Mariner",
  "PIT": "The Bucco",
  "SD": "The Friar",
  "COL": "Purple Row",
  "ATH": "Moneyball",
  "TB": "The Cowbell",
  "MIL": "The Brew Crew",
  "MIN": "Twins Territory",
  "KC": "The Fountains",
  "PHI": "The Phanatic",
  "DET": "Bless You Boys",
  "CWS": "The South Side",
  "BAL": "Birdland",
  "NYM": "The Amazins",
  "MIA": "The Fish",
  "TOR": "Canada's Team",
  "TEX": "The Ranger",
  "AZ": "The Snake",
  "WSH": "Stay in the Fight",
  "HOU": "The Stros",
  "LAA": "The Halo"
};

const moduleQuestions = [
  {
    "id": "mlb_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "When something's there every day, not just for the big moments, that constant presence is:",
    "options": [
      {
        "label": "A comfort. The ritual itself matters more than how any one day turns out.",
        "value": "A"
      },
      {
        "label": "A grind I wouldn't trade, even on the worst days.",
        "value": "B"
      },
      {
        "label": "A long, slow romance, the good days and the bad.",
        "value": "C"
      },
      {
        "label": "Background noise until the moment that actually counts, and then it's everything.",
        "value": "D"
      },
      {
        "label": "A faith I keep through every long lean stretch.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q2",
    "type": "slider",
    "phase": "The fine print",
    "question": "Believe to the very end, or read it early and make peace?",
    "left": "It's never truly over till the very last moment, and I believe right to the end.",
    "right": "Some things are simply decided, and pretending otherwise is denial. I read it early and make my peace."
  },
  {
    "id": "mlb_q3",
    "type": "choice",
    "phase": "The fine print",
    "question": "Over a long haul full of hot streaks and rough patches, the you that shows up is:",
    "options": [
      {
        "label": "Steady. One bad week doesn't move me, the whole body of work is what counts.",
        "value": "A"
      },
      {
        "label": "All in on the hot streak, riding the high like it'll never end.",
        "value": "B"
      },
      {
        "label": "Bracing through the slump, certain the turn is coming any day.",
        "value": "C"
      },
      {
        "label": "Loud either way. I feel every moment of it, and so does everyone near me.",
        "value": "D"
      },
      {
        "label": "Unbothered. I expect to be fine, and I usually am.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q4",
    "type": "slider",
    "phase": "The fine print",
    "question": "Keep the faith and the rituals, or trust only what's measured?",
    "left": "I keep little rituals I won't break, even knowing full well they do nothing. The faith is the whole point.",
    "right": "I trust what can actually be measured and let the rest go. Do the work right and the results come."
  },
  {
    "id": "mlb_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "What does wanting something for years do to you?",
    "options": [
      {
        "label": "I dig in. The loyalty becomes the point, not the prize.",
        "value": "A"
      },
      {
        "label": "I ache for it. I need it while I'm still here to feel it.",
        "value": "B"
      },
      {
        "label": "I laugh and believe again, same as every year.",
        "value": "C"
      },
      {
        "label": "I put my head down and keep showing up anyway.",
        "value": "D"
      },
      {
        "label": "Not much. I've never expected to go without for long.",
        "value": "E"
      },
      {
        "label": "I had it once, and losing it hurt worse than never having it.",
        "value": "F"
      }
    ]
  },
  {
    "id": "mlb_q6",
    "type": "choice",
    "phase": "The fine print",
    "question": "When you win, how do you carry it?",
    "options": [
      {
        "label": "Play it straight and humble. Act like you've been there before.",
        "value": "A"
      },
      {
        "label": "Let it all out and let them hear it. The joy is the point, no apology.",
        "value": "B"
      },
      {
        "label": "Win ugly, win tough, do the unglamorous things right.",
        "value": "C"
      },
      {
        "label": "Make it a show. The spectacle is half of why anyone watches.",
        "value": "D"
      },
      {
        "label": "However it comes. I'm just relieved it finally happened.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "How do you hold a hope bigger than your own life?",
    "options": [
      {
        "label": "As the most romantic thing there is. Holding it is the point.",
        "value": "A"
      },
      {
        "label": "Badly. I need it while I'm still here to feel it.",
        "value": "B"
      },
      {
        "label": "Lightly, but I'd treasure the one time it came.",
        "value": "C"
      },
      {
        "label": "As a debt I'm owed, and I've stopped expecting it paid.",
        "value": "D"
      },
      {
        "label": "I don't. I expect mine long before then.",
        "value": "E"
      },
      {
        "label": "I finally got it, then watched it slip, and I want it back more than ever.",
        "value": "F"
      }
    ]
  },
  {
    "id": "mlb_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When something you've given your loyalty to gets changed out from under you, you:",
    "options": [
      {
        "label": "Stay loyal to where it came from, whatever they turn it into.",
        "value": "A"
      },
      {
        "label": "Build my own thing from nothing, and dare anyone to enjoy taking it on.",
        "value": "B"
      },
      {
        "label": "Carry the anger right alongside the love. Both are real, forever.",
        "value": "C"
      },
      {
        "label": "Came back from the lowest point imaginable and made it my proudest chapter.",
        "value": "D"
      },
      {
        "label": "Never happened to me. What's mine has always been mine.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "Win on brains and grit, or pay for the best?",
    "left": "Give me nothing and watch me win anyway. Brains and grit beat a fat wallet.",
    "right": "If you want the best, you pay for the best. I spend whatever it takes and I won't apologize."
  },
  {
    "id": "mlb_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Some things drown in their own history, the records, the ghosts of everyone before. To you all that is:",
    "options": [
      {
        "label": "Everything. I measure today against a glorious past and mostly find today wanting.",
        "value": "A"
      },
      {
        "label": "A standard to live up to, proof of how it is supposed to be done.",
        "value": "B"
      },
      {
        "label": "A weight I'd love to finally escape by writing something new.",
        "value": "C"
      },
      {
        "label": "Someone else's. My story is still being written, fresh.",
        "value": "D"
      },
      {
        "label": "Background. I'm here for right now, not the museum.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "One against one, everyone watching, nowhere to hide. You'd rather be:",
    "options": [
      {
        "label": "The one expected to win, with everything to lose. Pressure is the price of being good.",
        "value": "A"
      },
      {
        "label": "The underdog nobody's betting on, with everything to gain.",
        "value": "B"
      },
      {
        "label": "The one who's been here a hundred times and feels nothing but calm.",
        "value": "C"
      },
      {
        "label": "The one running on pure heart, refusing to blink when the odds say blink.",
        "value": "D"
      },
      {
        "label": "The one putting on a show, daring the moment to go wrong.",
        "value": "E"
      }
    ]
  },
  {
    "id": "mlb_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Strip away winning. When you show up, what you're really there for is:",
    "options": [
      {
        "label": "The people beside me. It was always about who I share it with.",
        "value": "A"
      },
      {
        "label": "The place. This spot, this city, this is home.",
        "value": "B"
      },
      {
        "label": "The everyday escape. A few quiet hours that are just mine.",
        "value": "C"
      },
      {
        "label": "The chance, however small, to see something I'll tell my grandkids about.",
        "value": "D"
      },
      {
        "label": "The win. Don't romanticize it, I came to win.",
        "value": "E"
      }
    ]
  }
];

const scoring = {
  "mlb_q1": {
    "A": {
      "STL": 2,
      "CIN": 2,
      "MIL": 2,
      "BAL": 2,
      "KC": 2
    },
    "B": {
      "PHI": 2,
      "CWS": 2,
      "PIT": 2,
      "CLE": 2,
      "DET": 3,
      "ATH": 2,
      "TB": 2
    },
    "C": {
      "CHC": 2,
      "BOS": 2,
      "SF": 2,
      "TOR": 2,
      "SEA": 2
    },
    "D": {
      "NYY": 2,
      "LAD": 2,
      "HOU": 2,
      "ATL": 2,
      "NYM": 2,
      "TEX": 2
    },
    "E": {
      "SD": 2,
      "COL": 2,
      "WSH": 2,
      "MIA": 2,
      "AZ": 2,
      "LAA": 2,
      "MIN": 3
    }
  },
  "mlb_q2": {
    "1": {
      "CHC": 3,
      "BOS": 3,
      "KC": 3,
      "PHI": 3,
      "NYM": 3,
      "TOR": 3,
      "TEX": 3,
      "AZ": 3,
      "WSH": 3
    },
    "2": {
      "CHC": 2,
      "BOS": 2,
      "KC": 2,
      "PHI": 2,
      "NYM": 2,
      "TOR": 2,
      "TEX": 2,
      "AZ": 2,
      "WSH": 2,
      "NYY": 1,
      "LAD": 1,
      "STL": 1,
      "ATL": 1,
      "SF": 1,
      "CIN": 1,
      "SD": 1,
      "TB": 1,
      "MIL": 1,
      "DET": 1,
      "BAL": 1,
      "HOU": 1
    },
    "3": {
      "NYY": 3,
      "LAD": 3,
      "STL": 3,
      "ATL": 3,
      "SF": 3,
      "CIN": 3,
      "SD": 3,
      "TB": 3,
      "MIL": 3,
      "DET": 3,
      "BAL": 3,
      "HOU": 3
    },
    "4": {
      "CLE": 2,
      "SEA": 2,
      "PIT": 2,
      "COL": 2,
      "ATH": 2,
      "MIN": 2,
      "CWS": 2,
      "MIA": 2,
      "LAA": 2,
      "NYY": 1,
      "LAD": 1,
      "STL": 1,
      "ATL": 1,
      "SF": 1,
      "CIN": 1,
      "SD": 1,
      "TB": 1,
      "MIL": 1,
      "DET": 1,
      "BAL": 1,
      "HOU": 1
    },
    "5": {
      "CLE": 3,
      "SEA": 3,
      "PIT": 3,
      "COL": 3,
      "ATH": 3,
      "MIN": 3,
      "CWS": 3,
      "MIA": 3,
      "LAA": 3
    }
  },
  "mlb_q3": {
    "A": {
      "STL": 2,
      "ATL": 2,
      "BAL": 2,
      "TB": 2,
      "MIL": 2,
      "ATH": 2,
      "LAD": 2
    },
    "B": {
      "PHI": 2,
      "NYM": 2,
      "AZ": 2,
      "MIA": 2,
      "TEX": 2,
      "TOR": 2
    },
    "C": {
      "CHC": 2,
      "SEA": 3,
      "SD": 2,
      "COL": 2,
      "MIN": 2,
      "WSH": 2,
      "KC": 2,
      "CLE": 2
    },
    "D": {
      "CWS": 2,
      "PIT": 2,
      "DET": 2,
      "BOS": 2,
      "CIN": 2,
      "LAA": 2
    },
    "E": {
      "NYY": 2,
      "HOU": 2,
      "SF": 2
    }
  },
  "mlb_q4": {
    "1": {
      "CIN": 3,
      "CHC": 3,
      "BOS": 3,
      "PIT": 3,
      "KC": 1,
      "PHI": 3,
      "NYM": 3,
      "TOR": 2
    },
    "2": {
      "CIN": 1,
      "CHC": 1,
      "BOS": 2,
      "PIT": 1,
      "KC": 3,
      "PHI": 2,
      "NYM": 1,
      "TOR": 3,
      "SF": 1,
      "SEA": 1,
      "SD": 1,
      "COL": 1,
      "MIN": 1,
      "DET": 1,
      "CWS": 2,
      "MIA": 2,
      "TEX": 1,
      "AZ": 1,
      "WSH": 1,
      "LAA": 2
    },
    "3": {
      "KC": 1,
      "NYY": 3,
      "ATL": 3,
      "SF": 3,
      "SEA": 3,
      "SD": 3,
      "COL": 3,
      "MIN": 3,
      "DET": 3,
      "CWS": 3,
      "MIA": 3,
      "TEX": 3,
      "AZ": 3,
      "WSH": 3,
      "LAA": 3
    },
    "4": {
      "LAD": 1,
      "STL": 1,
      "CLE": 3,
      "ATH": 1,
      "TB": 1,
      "MIL": 2,
      "BAL": 2,
      "HOU": 1,
      "NYY": 2,
      "ATL": 2,
      "SF": 1,
      "SEA": 1,
      "SD": 1,
      "COL": 1,
      "MIN": 1,
      "DET": 1,
      "TEX": 1,
      "AZ": 1,
      "WSH": 1
    },
    "5": {
      "LAD": 3,
      "STL": 3,
      "CLE": 2,
      "ATH": 3,
      "TB": 3,
      "MIL": 3,
      "BAL": 3,
      "HOU": 3
    }
  },
  "mlb_q5": {
    "A": {
      "PIT": 2,
      "SEA": 2,
      "CLE": 2,
      "COL": 2
    },
    "B": {
      "NYM": 2,
      "PHI": 2,
      "SD": 2,
      "TOR": 2
    },
    "C": {
      "KC": 2,
      "AZ": 2,
      "MIA": 2,
      "TEX": 2
    },
    "D": {
      "BAL": 2,
      "DET": 2,
      "MIL": 2,
      "MIN": 2,
      "ATH": 2,
      "TB": 2
    },
    "E": {
      "NYY": 2,
      "LAD": 2,
      "STL": 2,
      "ATL": 2,
      "HOU": 2,
      "SF": 2,
      "CIN": 2,
      "BOS": 2
    },
    "F": {
      "CHC": 2,
      "CWS": 2,
      "WSH": 2,
      "LAA": 2
    }
  },
  "mlb_q6": {
    "A": {
      "STL": 2,
      "SF": 2,
      "ATL": 2,
      "BAL": 2,
      "CLE": 2,
      "MIN": 2,
      "MIL": 2
    },
    "B": {
      "TOR": 2,
      "SD": 2,
      "NYM": 2,
      "AZ": 2,
      "CWS": 2
    },
    "C": {
      "PIT": 2,
      "DET": 2,
      "ATH": 2,
      "TB": 2,
      "KC": 2,
      "PHI": 2
    },
    "D": {
      "NYY": 2,
      "LAD": 2,
      "HOU": 2,
      "LAA": 2,
      "CIN": 2,
      "TEX": 2
    },
    "E": {
      "CHC": 2,
      "BOS": 2,
      "SEA": 3,
      "COL": 2,
      "MIA": 2,
      "WSH": 2
    }
  },
  "mlb_q7": {
    "A": {
      "PIT": 2,
      "SEA": 2,
      "COL": 2,
      "CIN": 2
    },
    "B": {
      "NYM": 2,
      "PHI": 2,
      "SD": 2,
      "TOR": 2
    },
    "C": {
      "BOS": 2,
      "KC": 2,
      "TEX": 2,
      "AZ": 2,
      "STL": 2,
      "MIL": 2,
      "DET": 2
    },
    "D": {
      "CLE": 3,
      "ATH": 2,
      "MIA": 2,
      "MIN": 2,
      "BAL": 2,
      "TB": 2
    },
    "E": {
      "NYY": 2,
      "LAD": 2,
      "ATL": 2,
      "HOU": 2,
      "SF": 2
    },
    "F": {
      "CHC": 2,
      "CWS": 2,
      "WSH": 2,
      "LAA": 2
    }
  },
  "mlb_q8": {
    "A": {
      "PIT": 2,
      "DET": 2,
      "CLE": 2,
      "ATH": 2,
      "PHI": 2,
      "CWS": 2,
      "COL": 2
    },
    "B": {
      "TB": 2,
      "MIL": 2,
      "AZ": 2
    },
    "C": {
      "NYM": 2,
      "SEA": 2,
      "SD": 2,
      "TOR": 2,
      "LAA": 2,
      "MIA": 2,
      "ATH": 2,
      "CWS": 2
    },
    "D": {
      "WSH": 2,
      "KC": 2,
      "BOS": 2,
      "TEX": 2,
      "CHC": 2,
      "HOU": 2
    },
    "E": {
      "NYY": 2,
      "LAD": 2,
      "STL": 2,
      "ATL": 2,
      "SF": 2,
      "CIN": 2,
      "BAL": 2,
      "MIN": 2
    }
  },
  "mlb_q9": {
    "1": {
      "CLE": 3,
      "COL": 3,
      "ATH": 2,
      "MIL": 1,
      "KC": 2,
      "DET": 3,
      "BAL": 2,
      "MIA": 3,
      "WSH": 3
    },
    "2": {
      "CLE": 2,
      "COL": 1,
      "ATH": 3,
      "TB": 3,
      "MIL": 3,
      "KC": 3,
      "DET": 2,
      "BAL": 3,
      "MIA": 2,
      "WSH": 2,
      "SF": 1,
      "CIN": 1,
      "CHC": 1,
      "SEA": 1,
      "CWS": 2
    },
    "3": {
      "TB": 2,
      "MIL": 1,
      "PHI": 1,
      "TOR": 1,
      "LAA": 2,
      "STL": 3,
      "SF": 3,
      "CIN": 3,
      "CHC": 3,
      "BOS": 3,
      "SEA": 3,
      "CWS": 3,
      "AZ": 3
    },
    "4": {
      "NYY": 1,
      "LAD": 1,
      "ATL": 3,
      "SD": 3,
      "PHI": 3,
      "NYM": 3,
      "TOR": 3,
      "TEX": 3,
      "HOU": 2,
      "LAA": 3,
      "STL": 2,
      "SF": 1,
      "CIN": 1,
      "CHC": 1,
      "BOS": 2,
      "SEA": 1,
      "AZ": 2
    },
    "5": {
      "NYY": 3,
      "LAD": 3,
      "ATL": 2,
      "SD": 2,
      "PHI": 1,
      "NYM": 2,
      "TOR": 1,
      "TEX": 2,
      "HOU": 3
    }
  },
  "mlb_q10": {
    "A": {
      "CIN": 3,
      "NYY": 3,
      "SF": 2
    },
    "B": {
      "LAD": 2,
      "ATL": 2,
      "BAL": 2,
      "STL": 2,
      "SF": 2
    },
    "C": {
      "CHC": 2,
      "BOS": 2,
      "CLE": 2,
      "SEA": 2,
      "PIT": 2,
      "CWS": 2
    },
    "D": {
      "AZ": 2,
      "TB": 2,
      "MIA": 2,
      "WSH": 2,
      "COL": 2,
      "SD": 2,
      "TOR": 2,
      "TEX": 2,
      "HOU": 2
    },
    "E": {
      "NYM": 2,
      "LAA": 2,
      "DET": 2,
      "KC": 2,
      "MIL": 2,
      "MIN": 2,
      "ATH": 2,
      "PHI": 2
    }
  },
  "mlb_q11": {
    "A": {
      "NYY": 2,
      "LAD": 2,
      "ATL": 2,
      "HOU": 2
    },
    "B": {
      "TB": 2,
      "ATH": 2,
      "MIL": 2,
      "KC": 2,
      "AZ": 2,
      "MIA": 2,
      "COL": 2
    },
    "C": {
      "SF": 2,
      "STL": 2,
      "BAL": 2,
      "CLE": 2,
      "MIN": 2
    },
    "D": {
      "PHI": 2,
      "PIT": 2,
      "DET": 2,
      "CWS": 2,
      "NYM": 2,
      "TOR": 2,
      "WSH": 2,
      "BOS": 2,
      "CHC": 2
    },
    "E": {
      "SD": 2,
      "CIN": 2,
      "LAA": 2,
      "TEX": 2,
      "SEA": 2
    }
  },
  "mlb_q12": {
    "A": {
      "STL": 3,
      "MIL": 3,
      "KC": 3,
      "CIN": 3,
      "MIN": 3
    },
    "B": {
      "PIT": 2,
      "DET": 3,
      "PHI": 3,
      "CLE": 3,
      "WSH": 3,
      "ATH": 3,
      "CWS": 3
    },
    "C": {
      "SEA": 3,
      "COL": 3,
      "SD": 3,
      "BAL": 3,
      "TB": 3,
      "MIA": 3
    },
    "D": {
      "CHC": 3,
      "AZ": 3,
      "TOR": 3,
      "NYM": 3,
      "BOS": 3
    },
    "E": {
      "NYY": 3,
      "LAD": 2,
      "HOU": 3,
      "ATL": 3,
      "SF": 3,
      "TEX": 3,
      "LAA": 3
    }
  }
};

const teamDims = {
  "NYY": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 10,
    "process": 8,
    "community": 5,
    "chaos": 2,
    "rootedness": 9
  },
  "LAD": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 10,
    "process": 9,
    "community": 6,
    "chaos": 3,
    "rootedness": 6
  },
  "STL": {
    "loyalty": 8,
    "emotion": 5,
    "ambition": 7,
    "process": 9,
    "community": 8,
    "chaos": 1,
    "rootedness": 8
  },
  "ATL": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 8,
    "process": 8,
    "community": 7,
    "chaos": 3,
    "rootedness": 7
  },
  "SF": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 6,
    "process": 5,
    "community": 6,
    "chaos": 4,
    "rootedness": 7
  },
  "CIN": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 6,
    "process": 4,
    "community": 7,
    "chaos": 5,
    "rootedness": 9
  },
  "CHC": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 5,
    "process": 4,
    "community": 9,
    "chaos": 6,
    "rootedness": 9
  },
  "BOS": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 7,
    "process": 5,
    "community": 8,
    "chaos": 5,
    "rootedness": 9
  },
  "CLE": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 7,
    "community": 6,
    "chaos": 4,
    "rootedness": 8
  },
  "SEA": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 5,
    "community": 7,
    "chaos": 4,
    "rootedness": 8
  },
  "PIT": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 4,
    "process": 4,
    "community": 8,
    "chaos": 4,
    "rootedness": 9
  },
  "SD": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 8,
    "process": 4,
    "community": 7,
    "chaos": 7,
    "rootedness": 7
  },
  "COL": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 4,
    "process": 4,
    "community": 6,
    "chaos": 6,
    "rootedness": 8
  },
  "ATH": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 6,
    "process": 9,
    "community": 4,
    "chaos": 6,
    "rootedness": 5
  },
  "TB": {
    "loyalty": 5,
    "emotion": 4,
    "ambition": 8,
    "process": 9,
    "community": 4,
    "chaos": 5,
    "rootedness": 3
  },
  "MIL": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 8,
    "community": 8,
    "chaos": 5,
    "rootedness": 7
  },
  "MIN": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 4,
    "process": 5,
    "community": 7,
    "chaos": 3,
    "rootedness": 8
  },
  "KC": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 6,
    "process": 8,
    "community": 6,
    "chaos": 6,
    "rootedness": 7
  },
  "PHI": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 7,
    "process": 5,
    "community": 8,
    "chaos": 6,
    "rootedness": 7
  },
  "DET": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 6,
    "community": 7,
    "chaos": 4,
    "rootedness": 8
  },
  "CWS": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 4,
    "process": 3,
    "community": 6,
    "chaos": 7,
    "rootedness": 8
  },
  "BAL": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 6,
    "process": 8,
    "community": 7,
    "chaos": 3,
    "rootedness": 7
  },
  "NYM": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 8,
    "process": 4,
    "community": 7,
    "chaos": 8,
    "rootedness": 6
  },
  "MIA": {
    "loyalty": 4,
    "emotion": 5,
    "ambition": 5,
    "process": 3,
    "community": 4,
    "chaos": 8,
    "rootedness": 4
  },
  "TOR": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 9,
    "chaos": 4,
    "rootedness": 7
  },
  "TEX": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "AZ": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 7,
    "process": 7,
    "community": 5,
    "chaos": 6,
    "rootedness": 5
  },
  "WSH": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 5,
    "process": 5,
    "community": 5,
    "chaos": 7,
    "rootedness": 4
  },
  "HOU": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 9,
    "process": 9,
    "community": 5,
    "chaos": 5,
    "rootedness": 7
  },
  "LAA": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 5,
    "process": 3,
    "community": 5,
    "chaos": 5,
    "rootedness": 5
  }
};

const teamTextColors = {
  "NYY": "#8FA3C4",
  "LAD": "#7FB3D9",
  "STL": "#E0889A",
  "ATL": "#8295B8",
  "SF": "#F2A06B",
  "CIN": "#E58A8A",
  "CHC": "#7C97D6",
  "BOS": "#E58A8E",
  "CLE": "#F0909C",
  "SEA": "#6FBFBF",
  "PIT": "#FFE08A",
  "SD": "#C9A07E",
  "COL": "#A99BD6",
  "ATH": "#6FBE9E",
  "TB": "#7FA8D8",
  "MIL": "#FFD97A",
  "MIN": "#F08CA0",
  "KC": "#7FB0DE",
  "PHI": "#F58A93",
  "DET": "#8FA3C4",
  "CWS": "#D5DADD",
  "BAL": "#F5A06B",
  "NYM": "#6E8FD0",
  "MIA": "#6FCDEE",
  "TOR": "#7CA3DC",
  "TEX": "#F0808C",
  "AZ": "#8FE4EC",
  "WSH": "#8295C0",
  "HOU": "#F5A878",
  "LAA": "#EE8090"
};

const teams = {
  "NYY": {
    "code3": "NYY",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "New York Yankees",
    "emoji": "🎩",
    "color": "#0C2340"
  },
  "LAD": {
    "code3": "LAD",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Los Angeles Dodgers",
    "emoji": "💙",
    "color": "#005A9C"
  },
  "STL": {
    "code3": "STL",
    "kitType": "duo",
    "secondaryColor": "#0C2340",
    "name": "St. Louis Cardinals",
    "emoji": "🐦",
    "color": "#C41E3A"
  },
  "ATL": {
    "code3": "ATL",
    "kitType": "duo",
    "secondaryColor": "#CE1141",
    "name": "Atlanta Braves",
    "emoji": "🪓",
    "color": "#13274F"
  },
  "SF": {
    "code3": "SFG",
    "kitType": "duo",
    "secondaryColor": "#27251F",
    "name": "San Francisco Giants",
    "emoji": "🌉",
    "color": "#FD5A1E"
  },
  "CIN": {
    "code3": "CIN",
    "kitType": "solid",
    "secondaryColor": null,
    "name": "Cincinnati Reds",
    "emoji": "🔴",
    "color": "#C6011F"
  },
  "CHC": {
    "code3": "CHC",
    "kitType": "duo",
    "secondaryColor": "#CC3433",
    "name": "Chicago Cubs",
    "emoji": "🐻",
    "color": "#0E3386"
  },
  "BOS": {
    "code3": "BOS",
    "kitType": "duo",
    "secondaryColor": "#0C2340",
    "name": "Boston Red Sox",
    "emoji": "🧦",
    "color": "#BD3039"
  },
  "CLE": {
    "code3": "CLE",
    "kitType": "duo",
    "secondaryColor": "#0C2340",
    "name": "Cleveland Guardians",
    "emoji": "🛡️",
    "color": "#E31937"
  },
  "SEA": {
    "code3": "SEA",
    "kitType": "duo",
    "secondaryColor": "#C4CED4",
    "name": "Seattle Mariners",
    "emoji": "⚓",
    "color": "#005C5C"
  },
  "PIT": {
    "code3": "PIT",
    "kitType": "duo",
    "secondaryColor": "#27251F",
    "name": "Pittsburgh Pirates",
    "emoji": "🏴‍☠️",
    "color": "#FDB827"
  },
  "SD": {
    "code3": "SDP",
    "kitType": "duo",
    "secondaryColor": "#FFC425",
    "name": "San Diego Padres",
    "emoji": "⛪",
    "color": "#4E2A1E"
  },
  "COL": {
    "code3": "COL",
    "kitType": "duo",
    "secondaryColor": "#C4CED4",
    "name": "Colorado Rockies",
    "emoji": "🏔️",
    "color": "#4E4191"
  },
  "ATH": {
    "code3": "ATH",
    "kitType": "duo",
    "secondaryColor": "#EFB21E",
    "name": "Athletics",
    "emoji": "🐘",
    "color": "#006341"
  },
  "TB": {
    "code3": "TBR",
    "kitType": "duo",
    "secondaryColor": "#8FBCE6",
    "name": "Tampa Bay Rays",
    "emoji": "☀️",
    "color": "#092C5C"
  },
  "MIL": {
    "code3": "MIL",
    "kitType": "duo",
    "secondaryColor": "#12284B",
    "name": "Milwaukee Brewers",
    "emoji": "🍺",
    "color": "#FFC52F"
  },
  "MIN": {
    "code3": "MIN",
    "kitType": "duo",
    "secondaryColor": "#002B5C",
    "name": "Minnesota Twins",
    "emoji": "⭐",
    "color": "#D31145"
  },
  "KC": {
    "code3": "KCR",
    "kitType": "duo",
    "secondaryColor": "#BD9B60",
    "name": "Kansas City Royals",
    "emoji": "👑",
    "color": "#004687"
  },
  "PHI": {
    "code3": "PHI",
    "kitType": "duo",
    "secondaryColor": "#284898",
    "name": "Philadelphia Phillies",
    "emoji": "🔔",
    "color": "#E81828"
  },
  "DET": {
    "code3": "DET",
    "kitType": "duo",
    "secondaryColor": "#FA4616",
    "name": "Detroit Tigers",
    "emoji": "🐯",
    "color": "#0C2340"
  },
  "CWS": {
    "code3": "CWS",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Chicago White Sox",
    "emoji": "⚪",
    "color": "#A6AEB2"
  },
  "BAL": {
    "code3": "BAL",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Baltimore Orioles",
    "emoji": "🟠",
    "color": "#DF4601"
  },
  "NYM": {
    "code3": "NYM",
    "kitType": "duo",
    "secondaryColor": "#FF5910",
    "name": "New York Mets",
    "emoji": "🍎",
    "color": "#002D72"
  },
  "MIA": {
    "code3": "MIA",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Miami Marlins",
    "emoji": "🐟",
    "color": "#00A3E0"
  },
  "TOR": {
    "code3": "TOR",
    "kitType": "duo",
    "secondaryColor": "#E8291C",
    "name": "Toronto Blue Jays",
    "emoji": "🍁",
    "color": "#134A8E"
  },
  "TEX": {
    "code3": "TEX",
    "kitType": "duo",
    "secondaryColor": "#003278",
    "name": "Texas Rangers",
    "emoji": "🤠",
    "color": "#C0111F"
  },
  "AZ": {
    "code3": "AZ",
    "kitType": "duo",
    "secondaryColor": "#000000",
    "name": "Arizona Diamondbacks",
    "emoji": "🐍",
    "color": "#30CED8"
  },
  "WSH": {
    "code3": "WSH",
    "kitType": "duo",
    "secondaryColor": "#AB0003",
    "name": "Washington Nationals",
    "emoji": "🏛️",
    "color": "#14225A"
  },
  "HOU": {
    "code3": "HOU",
    "kitType": "duo",
    "secondaryColor": "#002D62",
    "name": "Houston Astros",
    "emoji": "🚀",
    "color": "#EB6E1F"
  },
  "LAA": {
    "code3": "LAA",
    "kitType": "duo",
    "secondaryColor": "#003263",
    "name": "Los Angeles Angels",
    "emoji": "😇",
    "color": "#BA0021"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
