// FanDNA - NBA data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in nba-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "LAL": "The Lake Show",
  "BOS": "Celtic Pride",
  "GSW": "Dub Nation",
  "CHI": "The Madhouse on Madison",
  "SAS": "Go Spurs Go",
  "OKC": "Thunder Up",
  "PHI": "Trust the Process",
  "DEN": "The Skyline",
  "MIL": "Bucks in Six",
  "IND": "Hoosier Hysteria",
  "MIN": "Bring Ya Ass",
  "DET": "Motor City",
  "MEM": "Grit and Grind",
  "UTA": "The Note",
  "POR": "Rip City",
  "NYK": "The Mecca",
  "CLE": "The Land",
  "SAC": "Light the Beam",
  "ATL": "The Highlight Factory",
  "WAS": "The DMV",
  "BKN": "Brooklyn's Own",
  "LAC": "Lob City",
  "PHX": "The Valley",
  "MIA": "Heat Culture",
  "DAL": "MFFL",
  "HOU": "Clutch City",
  "TOR": "We the North",
  "ORL": "Pure Magic",
  "NOP": "NOLA",
  "CHA": "Buzz City"
};

const moduleQuestions = [
  {
    "id": "nba_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "The place you feel most like yourself:",
    "options": [
      {
        "label": "The one I've always known. I never had to go looking.",
        "value": "A"
      },
      {
        "label": "One I chose for myself and made mine.",
        "value": "B"
      },
      {
        "label": "Wherever the action is. The best of everything pulls me in.",
        "value": "C"
      },
      {
        "label": "Somewhere still being built, where I get to shape it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "A team you were part of won big. Looking back, what really carried it:",
    "options": [
      {
        "label": "One talent good enough to lift everyone else.",
        "value": "A"
      },
      {
        "label": "Chemistry. A group that just fit, nobody bigger than it.",
        "value": "B"
      },
      {
        "label": "The culture. A way of doing things everyone bought into.",
        "value": "C"
      },
      {
        "label": "Sheer talent, gathered in one place.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "The win, or the come-up?",
    "left": "The win is all that matters. Nobody remembers the climb, only who won.",
    "right": "The come-up is the best part. The grind to get there means more than the win itself."
  },
  {
    "id": "nba_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "The way you'd take something to the top, if it were up to you:",
    "options": [
      {
        "label": "Tear it all down and start clean. Bottom out, then rise the right way.",
        "value": "A"
      },
      {
        "label": "Slowly, piece by piece. Grow it up from raw talent and let it come good.",
        "value": "B"
      },
      {
        "label": "Everything now. Go all in this year and worry about the bill later.",
        "value": "C"
      },
      {
        "label": "Bring in proven names. If they win, I'll pay for it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "Where you are has stopped giving you a real shot. You:",
    "options": [
      {
        "label": "Stay and build it here. I don't go chasing it, I make it where I am.",
        "value": "A"
      },
      {
        "label": "Move to where I can win now. Loyalty doesn't win titles.",
        "value": "B"
      },
      {
        "label": "Refuse to accept it. Push them to build something better around me, now.",
        "value": "C"
      },
      {
        "label": "Follow my people. The right group matters more than the place.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q6",
    "type": "slider",
    "phase": "The fine print",
    "question": "Under the highest pressure, what happens to you?",
    "left": "The bigger the moment, the calmer I get.",
    "right": "It's all nerves and feeling. I feel every bit of it, and it shows."
  },
  {
    "id": "nba_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The way you actually succeed:",
    "options": [
      {
        "label": "Grind it out. Disciplined, controlled, no drama.",
        "value": "A"
      },
      {
        "label": "Lean on one standout who can carry it, and let them.",
        "value": "B"
      },
      {
        "label": "Scrappy and overachieving, figuring it out and getting there.",
        "value": "C"
      },
      {
        "label": "Round up the best people I can and turn them loose.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "You're at your best as:",
    "options": [
      {
        "label": "Part of a deep, well-built group where everyone has a job.",
        "value": "A"
      },
      {
        "label": "The marquee name, biggest market, all eyes on me.",
        "value": "B"
      },
      {
        "label": "The blue-collar one, heads down, no spotlight.",
        "value": "C"
      },
      {
        "label": "The young cornerstone of something still being built.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "The place that made you, or the next chapter?",
    "left": "The place that made me. Deep roots, and I'd stay for good.",
    "right": "Wherever the next chapter is. A jersey's a jersey, I go where I'm headed."
  },
  {
    "id": "nba_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "You're not there yet. What keeps you in it:",
    "options": [
      {
        "label": "Faith it's coming. I believe it, same as I always have.",
        "value": "A"
      },
      {
        "label": "A chip on my shoulder. Being doubted is the best fuel there is.",
        "value": "B"
      },
      {
        "label": "The sense one break fixes everything. I'm a moment away.",
        "value": "C"
      },
      {
        "label": "The joy of it in the meantime. The wait never kills the love.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "When it's on the line, what do you count on to pull through:",
    "options": [
      {
        "label": "One exceptional person, a level above everyone.",
        "value": "A"
      },
      {
        "label": "A tight group all pulling the same way.",
        "value": "B"
      },
      {
        "label": "A brilliant plan, and the discipline to run it.",
        "value": "C"
      },
      {
        "label": "Relentless effort. I outwork it, plain and simple.",
        "value": "D"
      }
    ]
  },
  {
    "id": "nba_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Going in, the position that suits you:",
    "options": [
      {
        "label": "Out front, the one everyone's chasing.",
        "value": "A"
      },
      {
        "label": "On the hunt, closing the gap.",
        "value": "B"
      },
      {
        "label": "Counted out, and quietly sure they're wrong.",
        "value": "C"
      },
      {
        "label": "Just glad to be in the mix at all.",
        "value": "D"
      }
    ]
  }
];

const scoring = {
  "nba_q1": {
    "A": {
      "BOS": 2,
      "NYK": 2,
      "CHI": 2,
      "LAL": 2,
      "DET": 2,
      "IND": 2,
      "POR": 2,
      "DAL": 2,
      "WAS": 2
    },
    "B": {
      "MEM": 2,
      "CHA": 2,
      "MIL": 2,
      "GSW": 2,
      "UTA": 2,
      "CLE": 2,
      "SAS": 2
    },
    "C": {
      "MIA": 2,
      "LAC": 2,
      "PHX": 2,
      "BKN": 2,
      "HOU": 2,
      "ATL": 2
    },
    "D": {
      "TOR": 2,
      "ORL": 2,
      "NOP": 2,
      "OKC": 2,
      "PHI": 2,
      "MIN": 2,
      "DEN": 2,
      "SAC": 2
    }
  },
  "nba_q2": {
    "A": {
      "CLE": 2,
      "DAL": 2,
      "NOP": 2,
      "ORL": 2,
      "TOR": 2,
      "NYK": 2,
      "WAS": 2
    },
    "B": {
      "GSW": 2,
      "IND": 2,
      "DEN": 2,
      "SAS": 2,
      "UTA": 2,
      "POR": 2,
      "MIN": 2
    },
    "C": {
      "OKC": 2,
      "PHI": 2,
      "MIA": 2,
      "DET": 2,
      "BOS": 2,
      "MIL": 2,
      "MEM": 2,
      "SAC": 2
    },
    "D": {
      "LAL": 2,
      "CHI": 2,
      "BKN": 2,
      "LAC": 2,
      "PHX": 2,
      "HOU": 2,
      "CHA": 2,
      "ATL": 2
    }
  },
  "nba_q3": {
    "1": {
      "LAL": 2,
      "CHI": 1,
      "ATL": 1,
      "BKN": 3,
      "LAC": 2,
      "PHX": 2,
      "DAL": 1
    },
    "2": {
      "LAL": 3,
      "BOS": 1,
      "CHI": 3,
      "DET": 1,
      "NYK": 3,
      "CLE": 1,
      "SAC": 1,
      "ATL": 3,
      "WAS": 3,
      "BKN": 1,
      "LAC": 3,
      "PHX": 3,
      "DAL": 3,
      "HOU": 3,
      "TOR": 1,
      "NOP": 1,
      "CHA": 3
    },
    "3": {
      "BOS": 3,
      "GSW": 2,
      "CHI": 1,
      "MIL": 2,
      "IND": 2,
      "MIN": 2,
      "DET": 3,
      "MEM": 2,
      "UTA": 1,
      "POR": 2,
      "NYK": 2,
      "CLE": 3,
      "SAC": 3,
      "ATL": 1,
      "WAS": 2,
      "MIA": 2,
      "DAL": 1,
      "HOU": 2,
      "TOR": 3,
      "ORL": 2,
      "NOP": 3,
      "CHA": 2
    },
    "4": {
      "BOS": 1,
      "GSW": 3,
      "SAS": 1,
      "OKC": 1,
      "PHI": 3,
      "DEN": 3,
      "MIL": 3,
      "IND": 3,
      "MIN": 3,
      "DET": 1,
      "MEM": 3,
      "UTA": 3,
      "POR": 3,
      "CLE": 1,
      "SAC": 1,
      "MIA": 3,
      "TOR": 1,
      "ORL": 3,
      "NOP": 1
    },
    "5": {
      "SAS": 3,
      "OKC": 3,
      "PHI": 2,
      "DEN": 2,
      "UTA": 1
    }
  },
  "nba_q4": {
    "A": {
      "PHI": 2,
      "OKC": 2,
      "HOU": 2,
      "ORL": 2,
      "SAC": 2,
      "CHA": 2,
      "NOP": 2,
      "WAS": 2
    },
    "B": {
      "SAS": 2,
      "DEN": 2,
      "MIL": 2,
      "GSW": 2,
      "IND": 2,
      "MEM": 2,
      "UTA": 2,
      "POR": 2,
      "DET": 2,
      "MIN": 2
    },
    "C": {
      "LAL": 2,
      "BKN": 2,
      "LAC": 2,
      "PHX": 2,
      "MIA": 2,
      "NYK": 2,
      "DAL": 2
    },
    "D": {
      "BOS": 2,
      "CHI": 2,
      "ATL": 2,
      "CLE": 2,
      "TOR": 2
    }
  },
  "nba_q5": {
    "A": {
      "NYK": 2,
      "BOS": 2,
      "SAS": 2,
      "IND": 2,
      "UTA": 2,
      "DET": 2,
      "POR": 2,
      "SAC": 2,
      "MIN": 2,
      "DAL": 2
    },
    "B": {
      "BKN": 2,
      "LAC": 2,
      "PHX": 2,
      "HOU": 2,
      "LAL": 2,
      "MIA": 2
    },
    "C": {
      "PHI": 2,
      "OKC": 2,
      "GSW": 2,
      "DEN": 2,
      "MIL": 2
    },
    "D": {
      "MEM": 2,
      "TOR": 2,
      "NOP": 2,
      "ORL": 2,
      "ATL": 2,
      "CHA": 2,
      "CLE": 2,
      "WAS": 2,
      "CHI": 2
    }
  },
  "nba_q6": {
    "1": {
      "SAS": 3,
      "DEN": 1,
      "UTA": 1
    },
    "2": {
      "GSW": 2,
      "SAS": 1,
      "OKC": 2,
      "DEN": 3,
      "MIL": 2,
      "MIN": 2,
      "UTA": 3,
      "WAS": 2,
      "BKN": 2,
      "LAC": 2,
      "HOU": 2,
      "ORL": 2,
      "NOP": 2
    },
    "3": {
      "LAL": 3,
      "BOS": 3,
      "GSW": 3,
      "CHI": 3,
      "OKC": 3,
      "PHI": 1,
      "DEN": 1,
      "MIL": 3,
      "IND": 3,
      "MIN": 3,
      "DET": 3,
      "MEM": 3,
      "UTA": 1,
      "POR": 3,
      "CLE": 1,
      "SAC": 1,
      "ATL": 3,
      "WAS": 3,
      "BKN": 3,
      "LAC": 3,
      "PHX": 3,
      "MIA": 3,
      "DAL": 1,
      "HOU": 3,
      "TOR": 3,
      "ORL": 3,
      "NOP": 3,
      "CHA": 3
    },
    "4": {
      "LAL": 2,
      "BOS": 2,
      "CHI": 2,
      "PHI": 3,
      "IND": 2,
      "DET": 2,
      "MEM": 2,
      "POR": 2,
      "NYK": 1,
      "CLE": 3,
      "SAC": 3,
      "ATL": 2,
      "PHX": 2,
      "MIA": 2,
      "DAL": 3,
      "TOR": 2,
      "CHA": 2
    },
    "5": {
      "PHI": 1,
      "NYK": 3,
      "CLE": 1,
      "SAC": 1,
      "DAL": 1
    }
  },
  "nba_q7": {
    "A": {
      "SAS": 2,
      "UTA": 2,
      "OKC": 2,
      "DEN": 2,
      "IND": 2,
      "MIL": 2,
      "GSW": 2,
      "BOS": 2,
      "POR": 2,
      "PHI": 2,
      "MIA": 2
    },
    "B": {
      "BKN": 2,
      "DAL": 2,
      "LAC": 2,
      "PHX": 2,
      "HOU": 2
    },
    "C": {
      "MEM": 2,
      "DET": 2,
      "SAC": 2,
      "CHA": 2,
      "NOP": 2,
      "ORL": 2,
      "CLE": 2,
      "WAS": 2,
      "TOR": 2,
      "MIN": 2
    },
    "D": {
      "LAL": 2,
      "NYK": 2,
      "CHI": 2,
      "ATL": 2
    }
  },
  "nba_q8": {
    "A": {
      "MIL": 2,
      "IND": 2,
      "MEM": 2,
      "UTA": 2,
      "MIN": 2,
      "OKC": 2,
      "SAC": 2,
      "DEN": 2,
      "SAS": 2,
      "GSW": 2
    },
    "B": {
      "LAL": 2,
      "NYK": 2,
      "MIA": 2,
      "BKN": 2,
      "LAC": 2,
      "CHI": 2,
      "BOS": 2
    },
    "C": {
      "DET": 2,
      "CLE": 2,
      "PHI": 2,
      "POR": 2,
      "HOU": 2
    },
    "D": {
      "TOR": 2,
      "ORL": 2,
      "NOP": 2,
      "CHA": 2,
      "ATL": 2,
      "PHX": 2
    }
  },
  "nba_q9": {
    "1": {
      "LAL": 2,
      "BOS": 3,
      "CHI": 1,
      "SAS": 1,
      "PHI": 1,
      "IND": 1,
      "DET": 1,
      "NYK": 2
    },
    "2": {
      "LAL": 3,
      "BOS": 1,
      "GSW": 2,
      "CHI": 3,
      "SAS": 3,
      "PHI": 3,
      "IND": 3,
      "DET": 3,
      "UTA": 2,
      "POR": 2,
      "NYK": 3,
      "HOU": 2
    },
    "3": {
      "GSW": 3,
      "CHI": 1,
      "SAS": 1,
      "OKC": 1,
      "PHI": 1,
      "DEN": 3,
      "MIL": 3,
      "IND": 1,
      "DET": 1,
      "UTA": 3,
      "POR": 3,
      "CLE": 3,
      "SAC": 3,
      "WAS": 3,
      "PHX": 3,
      "MIA": 3,
      "DAL": 3,
      "HOU": 3
    },
    "4": {
      "OKC": 3,
      "DEN": 2,
      "MIL": 2,
      "MIN": 3,
      "MEM": 3,
      "CLE": 2,
      "SAC": 2,
      "ATL": 1,
      "WAS": 2,
      "BKN": 3,
      "LAC": 3,
      "PHX": 2,
      "MIA": 2,
      "DAL": 2,
      "TOR": 3,
      "ORL": 3,
      "NOP": 1,
      "CHA": 3
    },
    "5": {
      "OKC": 1,
      "MIN": 2,
      "MEM": 2,
      "ATL": 3,
      "BKN": 2,
      "LAC": 2,
      "TOR": 2,
      "ORL": 2,
      "NOP": 3,
      "CHA": 2
    }
  },
  "nba_q10": {
    "A": {
      "SAC": 2,
      "MIN": 2,
      "WAS": 2,
      "ORL": 2,
      "NOP": 2,
      "CHA": 2,
      "CLE": 2,
      "UTA": 2,
      "PHI": 2,
      "NYK": 2
    },
    "B": {
      "TOR": 2,
      "ATL": 2,
      "DET": 2,
      "MIL": 2,
      "OKC": 2,
      "MEM": 2,
      "BKN": 2,
      "DAL": 2,
      "HOU": 2,
      "MIA": 2
    },
    "C": {
      "LAC": 2,
      "PHX": 2,
      "MIN": 2,
      "IND": 2,
      "ORL": 2
    },
    "D": {
      "IND": 2,
      "POR": 2,
      "GSW": 2,
      "SAS": 2,
      "LAL": 2,
      "BOS": 2,
      "CHI": 2,
      "DEN": 2
    }
  },
  "nba_q11": {
    "A": {
      "LAL": 2,
      "CLE": 2,
      "DAL": 2,
      "NOP": 2,
      "ORL": 2,
      "ATL": 2,
      "TOR": 2,
      "NYK": 2,
      "PHX": 2,
      "CHI": 2
    },
    "B": {
      "GSW": 2,
      "IND": 2,
      "SAS": 2,
      "UTA": 2,
      "POR": 2,
      "BOS": 2,
      "MIN": 2
    },
    "C": {
      "OKC": 2,
      "PHI": 2,
      "DEN": 2,
      "HOU": 2,
      "BKN": 2,
      "LAC": 2
    },
    "D": {
      "DET": 2,
      "MIA": 2,
      "MEM": 2,
      "SAC": 2,
      "MIL": 2,
      "WAS": 2,
      "CHA": 2
    }
  },
  "nba_q12": {
    "A": {
      "LAL": 3,
      "BOS": 3,
      "GSW": 3,
      "CHI": 3,
      "OKC": 3,
      "MIA": 3,
      "NYK": 3,
      "DEN": 3,
      "BKN": 3
    },
    "B": {
      "PHI": 3,
      "MIL": 3,
      "DAL": 3,
      "HOU": 3,
      "PHX": 3,
      "LAC": 3,
      "CLE": 3,
      "SAS": 3
    },
    "C": {
      "TOR": 3,
      "IND": 3,
      "MEM": 3,
      "SAC": 3,
      "DET": 3,
      "NOP": 2
    },
    "D": {
      "ORL": 3,
      "CHA": 3,
      "WAS": 3,
      "MIN": 3,
      "UTA": 3,
      "POR": 3,
      "ATL": 3
    }
  }
};

const teamDims = {
  "LAL": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 10,
    "process": 3,
    "community": 3,
    "chaos": 6,
    "rootedness": 9
  },
  "BOS": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 10,
    "process": 6,
    "community": 6,
    "chaos": 4,
    "rootedness": 10
  },
  "GSW": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 9,
    "process": 7,
    "community": 7,
    "chaos": 4,
    "rootedness": 7
  },
  "CHI": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 8,
    "process": 4,
    "community": 4,
    "chaos": 5,
    "rootedness": 8
  },
  "SAS": {
    "loyalty": 9,
    "emotion": 4,
    "ambition": 8,
    "process": 10,
    "community": 9,
    "chaos": 2,
    "rootedness": 8
  },
  "OKC": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 8,
    "process": 10,
    "community": 8,
    "chaos": 3,
    "rootedness": 5
  },
  "PHI": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 8,
    "process": 9,
    "community": 6,
    "chaos": 6,
    "rootedness": 8
  },
  "DEN": {
    "loyalty": 7,
    "emotion": 5,
    "ambition": 8,
    "process": 9,
    "community": 8,
    "chaos": 3,
    "rootedness": 6
  },
  "MIL": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 8,
    "process": 7,
    "community": 8,
    "chaos": 4,
    "rootedness": 6
  },
  "IND": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 7,
    "community": 9,
    "chaos": 3,
    "rootedness": 8
  },
  "MIN": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 6,
    "process": 7,
    "community": 7,
    "chaos": 4,
    "rootedness": 4
  },
  "DET": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 8,
    "chaos": 5,
    "rootedness": 8
  },
  "MEM": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 6,
    "process": 7,
    "community": 8,
    "chaos": 5,
    "rootedness": 6
  },
  "UTA": {
    "loyalty": 9,
    "emotion": 5,
    "ambition": 6,
    "process": 8,
    "community": 8,
    "chaos": 2,
    "rootedness": 7
  },
  "POR": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 7,
    "community": 8,
    "chaos": 4,
    "rootedness": 7
  },
  "NYK": {
    "loyalty": 10,
    "emotion": 9,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 6,
    "rootedness": 9
  },
  "CLE": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 7,
    "process": 6,
    "community": 6,
    "chaos": 6,
    "rootedness": 6
  },
  "SAC": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 6,
    "process": 6,
    "community": 7,
    "chaos": 5,
    "rootedness": 6
  },
  "ATL": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 6,
    "process": 4,
    "community": 5,
    "chaos": 7,
    "rootedness": 3
  },
  "WAS": {
    "loyalty": 8,
    "emotion": 6,
    "ambition": 4,
    "process": 5,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "BKN": {
    "loyalty": 4,
    "emotion": 6,
    "ambition": 8,
    "process": 2,
    "community": 3,
    "chaos": 9,
    "rootedness": 4
  },
  "LAC": {
    "loyalty": 5,
    "emotion": 6,
    "ambition": 8,
    "process": 3,
    "community": 4,
    "chaos": 7,
    "rootedness": 4
  },
  "PHX": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 8,
    "process": 3,
    "community": 4,
    "chaos": 7,
    "rootedness": 6
  },
  "MIA": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 9,
    "process": 8,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "DAL": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 8,
    "process": 4,
    "community": 5,
    "chaos": 6,
    "rootedness": 6
  },
  "HOU": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 8,
    "process": 5,
    "community": 5,
    "chaos": 7,
    "rootedness": 7
  },
  "TOR": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 7,
    "chaos": 4,
    "rootedness": 6
  },
  "ORL": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 6,
    "process": 7,
    "community": 6,
    "chaos": 5,
    "rootedness": 4
  },
  "NOP": {
    "loyalty": 6,
    "emotion": 6,
    "ambition": 6,
    "process": 6,
    "community": 5,
    "chaos": 6,
    "rootedness": 3
  },
  "CHA": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 5,
    "process": 5,
    "community": 6,
    "chaos": 6,
    "rootedness": 4
  }
};

const teamTextColors = {
  "LAL": "#C7A4E6",
  "BOS": "#6FBF8E",
  "GSW": "#7FA0D9",
  "CHI": "#E8889A",
  "SAS": "#E2E8EC",
  "OKC": "#6FB4E0",
  "PHI": "#6FA8D6",
  "DEN": "#6B89B0",
  "MIL": "#6FA886",
  "IND": "#6B86B0",
  "MIN": "#6E86A8",
  "DET": "#E8889A",
  "MEM": "#9DB0CF",
  "UTA": "#6E8BB0",
  "POR": "#F0888A",
  "NYK": "#F8A86B",
  "CLE": "#C76B86",
  "SAC": "#A98BCE",
  "ATL": "#F0888A",
  "WAS": "#6E8BB0",
  "BKN": "#FFFFFF",
  "LAC": "#E8889A",
  "PHX": "#F0936B",
  "MIA": "#C76B86",
  "DAL": "#6F9DC9",
  "HOU": "#E8889A",
  "TOR": "#E8889A",
  "ORL": "#6FB0DE",
  "NOP": "#6E86A8",
  "CHA": "#5FB0BE"
};

const teams = {
  "LAL": {
    "name": "Los Angeles Lakers",
    "emoji": "💜",
    "color": "#552583",
    "code3": "LAL",
    "kitType": "duo",
    "secondaryColor": "#FDB927"
  },
  "BOS": {
    "name": "Boston Celtics",
    "emoji": "🍀",
    "color": "#007A33",
    "code3": "BOS",
    "kitType": "duo",
    "secondaryColor": "#BA9653"
  },
  "GSW": {
    "name": "Golden State Warriors",
    "emoji": "🌉",
    "color": "#1D428A",
    "code3": "GSW",
    "kitType": "duo",
    "secondaryColor": "#FFC72C"
  },
  "CHI": {
    "name": "Chicago Bulls",
    "emoji": "🐂",
    "color": "#CE1141",
    "code3": "CHI",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "SAS": {
    "name": "San Antonio Spurs",
    "emoji": "⚫",
    "color": "#C4CED4",
    "code3": "SAS",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "OKC": {
    "name": "Oklahoma City Thunder",
    "emoji": "⚡",
    "color": "#007AC1",
    "code3": "OKC",
    "kitType": "duo",
    "secondaryColor": "#EF3B24"
  },
  "PHI": {
    "name": "Philadelphia 76ers",
    "emoji": "🔔",
    "color": "#006BB6",
    "code3": "PHI",
    "kitType": "duo",
    "secondaryColor": "#ED174C"
  },
  "DEN": {
    "name": "Denver Nuggets",
    "emoji": "⛏️",
    "color": "#0E2240",
    "code3": "DEN",
    "kitType": "duo",
    "secondaryColor": "#FEC524"
  },
  "MIL": {
    "name": "Milwaukee Bucks",
    "emoji": "🦌",
    "color": "#00471B",
    "code3": "MIL",
    "kitType": "duo",
    "secondaryColor": "#0077C0"
  },
  "IND": {
    "name": "Indiana Pacers",
    "emoji": "🏁",
    "color": "#002D62",
    "code3": "IND",
    "kitType": "duo",
    "secondaryColor": "#FDBB30"
  },
  "MIN": {
    "name": "Minnesota Timberwolves",
    "emoji": "🐺",
    "color": "#0C2340",
    "code3": "MIN",
    "kitType": "duo",
    "secondaryColor": "#78BE20"
  },
  "DET": {
    "name": "Detroit Pistons",
    "emoji": "⚙️",
    "color": "#C8102E",
    "code3": "DET",
    "kitType": "duo",
    "secondaryColor": "#1D42BA"
  },
  "MEM": {
    "name": "Memphis Grizzlies",
    "emoji": "🐻",
    "color": "#5D76A9",
    "code3": "MEM",
    "kitType": "duo",
    "secondaryColor": "#12173F"
  },
  "UTA": {
    "name": "Utah Jazz",
    "emoji": "🎵",
    "color": "#002B5C",
    "code3": "UTA",
    "kitType": "duo",
    "secondaryColor": "#F9A01B"
  },
  "POR": {
    "name": "Portland Trail Blazers",
    "emoji": "🌲",
    "color": "#E03A3E",
    "code3": "POR",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "NYK": {
    "name": "New York Knicks",
    "emoji": "🗽",
    "color": "#F58426",
    "code3": "NYK",
    "kitType": "duo",
    "secondaryColor": "#006BB6"
  },
  "CLE": {
    "name": "Cleveland Cavaliers",
    "emoji": "⚔️",
    "color": "#860038",
    "code3": "CLE",
    "kitType": "duo",
    "secondaryColor": "#FDBB30"
  },
  "SAC": {
    "name": "Sacramento Kings",
    "emoji": "👑",
    "color": "#5A2D81",
    "code3": "SAC",
    "kitType": "duo",
    "secondaryColor": "#63727A"
  },
  "ATL": {
    "name": "Atlanta Hawks",
    "emoji": "🦅",
    "color": "#E03A3E",
    "code3": "ATL",
    "kitType": "duo",
    "secondaryColor": "#26282A"
  },
  "WAS": {
    "name": "Washington Wizards",
    "emoji": "🧙",
    "color": "#002B5C",
    "code3": "WAS",
    "kitType": "duo",
    "secondaryColor": "#E31837"
  },
  "BKN": {
    "name": "Brooklyn Nets",
    "emoji": "🌃",
    "color": "#000000",
    "code3": "BKN",
    "kitType": "duo",
    "secondaryColor": "#FFFFFF"
  },
  "LAC": {
    "name": "Los Angeles Clippers",
    "emoji": "⛵",
    "color": "#C8102E",
    "code3": "LAC",
    "kitType": "duo",
    "secondaryColor": "#1D428A"
  },
  "PHX": {
    "name": "Phoenix Suns",
    "emoji": "☀️",
    "color": "#E56020",
    "code3": "PHX",
    "kitType": "duo",
    "secondaryColor": "#1D1160"
  },
  "MIA": {
    "name": "Miami Heat",
    "emoji": "🔥",
    "color": "#98002E",
    "code3": "MIA",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "DAL": {
    "name": "Dallas Mavericks",
    "emoji": "🐎",
    "color": "#00538C",
    "code3": "DAL",
    "kitType": "duo",
    "secondaryColor": "#B8C4CA"
  },
  "HOU": {
    "name": "Houston Rockets",
    "emoji": "🚀",
    "color": "#CE1141",
    "code3": "HOU",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "TOR": {
    "name": "Toronto Raptors",
    "emoji": "🦖",
    "color": "#CE1141",
    "code3": "TOR",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "ORL": {
    "name": "Orlando Magic",
    "emoji": "✨",
    "color": "#0077C0",
    "code3": "ORL",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "NOP": {
    "name": "New Orleans Pelicans",
    "emoji": "🐦",
    "color": "#0C2340",
    "code3": "NOP",
    "kitType": "duo",
    "secondaryColor": "#B4975A"
  },
  "CHA": {
    "name": "Charlotte Hornets",
    "emoji": "🐝",
    "color": "#00788C",
    "code3": "CHA",
    "kitType": "duo",
    "secondaryColor": "#1D1160"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
