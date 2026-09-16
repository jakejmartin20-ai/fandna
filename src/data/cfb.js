// FanDNA - CFB data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in cfb-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "IND": "Our Indiana",
  "ALA": "Roll Tide",
  "UGA": "Dawg Nation",
  "OSU": "Buckeye Nation",
  "OKL": "Sooner Nation",
  "MIC": "Go Blue",
  "TEX": "Hook 'Em",
  "NDM": "The Subway Alumni",
  "USC": "Fight On",
  "FLA": "The Gator Nation",
  "FSU": "Unconquered",
  "PSU": "We Are",
  "CLM": "All In",
  "ORE": "Win the Day",
  "LSU": "Geaux Tigers",
  "TEN": "Rocky Top",
  "AUB": "War Eagle",
  "OLE": "Hotty Toddy",
  "SCA": "Spurs Up",
  "IOW": "Hawkeye Nation",
  "KSU": "EMAW",
  "WIS": "Badger Nation",
  "NEB": "Go Big Red",
  "TAM": "Gig 'Em",
  "MAR": "We Are Marshall",
  "HAW": "Ohana",
  "ARM": "The Long Gray Line",
  "NAV": "Go Navy",
  "AIR": "Fly, Fight, Win",
  "BYU": "Rise and Shout",
  "WVU": "Country Roads",
  "ARK": "Woo Pig Sooie",
  "ECU": "Pirate Nation",
  "WAZ": "Go Cougs",
  "APP": "The Rock",
  "VAT": "Enter Sandman",
  "MST": "Hail State",
  "COL": "Go Buffs",
  "BOI": "The Blue",
  "MIA": "The U",
  "UCF": "Charge On",
  "SMU": "Pony Up",
  "STA": "The Tree",
  "GAT": "The Ramblin' Wreck",
  "VAN": "Anchor Down",
  "WAS": "Bow Down",
  "TCU": "Go Frogs",
  "OKS": "Go Pokes",
  "MSU": "Go Green",
  "TTU": "Guns Up",
  "TUL": "Roll Wave",
  "CST": "Chants Up"
};

const moduleQuestions = [
  {
    "id": "cfb_q1",
    "type": "choice",
    "phase": "The fine print",
    "question": "The thing you've been part of the longest, what's really kept you in it?",
    "options": [
      {
        "label": "It's home. I was never going anywhere, win or lose.",
        "value": "A"
      },
      {
        "label": "The standard. I'm here because we don't accept losing.",
        "value": "B"
      },
      {
        "label": "The people. I'd have walked from the thing, but never from them.",
        "value": "C"
      },
      {
        "label": "The climb. I want to build it into something that finally matters.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q2",
    "type": "choice",
    "phase": "The fine print",
    "question": "When a lot is expected of you, you:",
    "options": [
      {
        "label": "Trust the routine. Do the work, and the result takes care of itself.",
        "value": "A"
      },
      {
        "label": "Barely feel it. I've always come through, and I expect to again.",
        "value": "B"
      },
      {
        "label": "Feel the weight, and I've earned the right to carry it.",
        "value": "C"
      },
      {
        "label": "Feel like an outsider, still out to prove I belong at all.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q3",
    "type": "slider",
    "phase": "The fine print",
    "question": "The wild gamble, or the clean plan?",
    "left": "Give me the wild, roll-the-dice moment. That's when I feel most alive.",
    "right": "Give me the plan, run cleanly. I trust the process over the thrill."
  },
  {
    "id": "cfb_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "After years of everyone waiting, you finally get there. What makes it matter most:",
    "options": [
      {
        "label": "It's undeniable. Nobody can ever say we didn't.",
        "value": "A"
      },
      {
        "label": "The tradition holds. I carried what was handed to me.",
        "value": "B"
      },
      {
        "label": "I did it my own unmistakable way.",
        "value": "C"
      },
      {
        "label": "I did it the hard way, when quitting was right there.",
        "value": "D"
      },
      {
        "label": "I shared it with the exact people I started with.",
        "value": "E"
      }
    ]
  },
  {
    "id": "cfb_q5",
    "type": "choice",
    "phase": "The fine print",
    "question": "It slips away at the cruelest possible moment. What surfaces:",
    "options": [
      {
        "label": "I feel every bit of it, out loud, no hiding how much it hurt.",
        "value": "A"
      },
      {
        "label": "I go quiet and carry it alone for a while.",
        "value": "B"
      },
      {
        "label": "I laugh it off. Of course it happened, it always does to us.",
        "value": "C"
      },
      {
        "label": "I let it harden into fuel, and I remember exactly who did it.",
        "value": "D"
      },
      {
        "label": "I'm already onto the next thing. Dwelling isn't me.",
        "value": "E"
      }
    ]
  },
  {
    "id": "cfb_q6",
    "type": "slider",
    "phase": "The fine print",
    "question": "Keep it exactly as it's always been, or tear it up and rebuild it new?",
    "left": "Some things should stay exactly as they've always been.",
    "right": "I'd rather tear it up and build something new that's unmistakably mine."
  },
  {
    "id": "cfb_q7",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "The kind of respect you actually want:",
    "options": [
      {
        "label": "The blue-collar kind, earned by outworking everyone, no flash.",
        "value": "A"
      },
      {
        "label": "The kind that turns heads, I want it to look as good as it is.",
        "value": "B"
      },
      {
        "label": "The quiet kind, from the people who actually know the work.",
        "value": "C"
      },
      {
        "label": "The kind that finally says we belong with the big names.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q8",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "How much does one single rival define you?",
    "options": [
      {
        "label": "Completely. Beat them and the year's a win, whatever else happens.",
        "value": "A"
      },
      {
        "label": "They matter, but I measure myself against the whole field.",
        "value": "B"
      },
      {
        "label": "My real rival is my own past, being better than we were.",
        "value": "C"
      },
      {
        "label": "I don't need an enemy; I'm in it for us, not against them.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q9",
    "type": "slider",
    "phase": "What it comes down to",
    "question": "The whole of us together, or the standout who carries it?",
    "left": "It's the whole of us. The people, the place, all of it together.",
    "right": "I'm drawn to the standout, the one who carries the moment."
  },
  {
    "id": "cfb_q10",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "On the biggest day, the energy you bring:",
    "options": [
      {
        "label": "Deafening. All heart, all volume, nothing held back.",
        "value": "A"
      },
      {
        "label": "Cool and composed. I let everyone else lose their heads.",
        "value": "B"
      },
      {
        "label": "Pure joy. A party that happens to have a game inside it.",
        "value": "C"
      },
      {
        "label": "A chip on the shoulder, something to prove, and everyone will hear about it.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q11",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Where you're from and what you're part of:",
    "options": [
      {
        "label": "They're the same thing. This place made me; I'll never leave it.",
        "value": "A"
      },
      {
        "label": "I carry it everywhere, but my world got bigger than one town.",
        "value": "B"
      },
      {
        "label": "I chose this, it wasn't handed to me, and that means more.",
        "value": "C"
      },
      {
        "label": "It's a launchpad, I love it, but I'm built to go further.",
        "value": "D"
      }
    ]
  },
  {
    "id": "cfb_q12",
    "type": "choice",
    "phase": "What it comes down to",
    "question": "Through a long stretch where nothing went right, you were the one who:",
    "options": [
      {
        "label": "Never wavered, showed up exactly the same, every single time.",
        "value": "A"
      },
      {
        "label": "Kept the faith but demanded better, this isn't who we are.",
        "value": "B"
      },
      {
        "label": "Found the joy anyway, the losing never once killed the love.",
        "value": "C"
      },
      {
        "label": "Used it, quietly stacking the work for when it finally turned.",
        "value": "D"
      },
      {
        "label": "Honestly? Drifted when it got bad, came back when it got good.",
        "value": "E"
      }
    ]
  }
];

const scoring = {
  "cfb_q1": {
    "B": {
      "ALA": 2,
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "MIC": 2,
      "TEX": 2,
      "NDM": 2,
      "USC": 2,
      "FLA": 2,
      "FSU": 2,
      "PSU": 2,
      "MIA": 2,
      "WAS": 2
    },
    "C": {
      "CLM": 2,
      "WIS": 2,
      "TAM": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "STA": 2,
      "GAT": 2,
      "VAN": 2
    },
    "D": {
      "IND": 2,
      "ORE": 2,
      "KSU": 2,
      "APP": 2,
      "BOI": 2,
      "UCF": 2,
      "SMU": 2,
      "TCU": 2,
      "CST": 2
    },
    "A": {
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "OLE": 2,
      "SCA": 2,
      "IOW": 2,
      "NEB": 2,
      "MAR": 2,
      "HAW": 2,
      "BYU": 2,
      "WVU": 2,
      "ARK": 2,
      "ECU": 2,
      "WAZ": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "OKS": 2,
      "MSU": 2,
      "TTU": 2,
      "TUL": 2
    }
  },
  "cfb_q2": {
    "A": {
      "ALA": 2,
      "PSU": 2,
      "CLM": 2,
      "IOW": 2,
      "WIS": 2,
      "NEB": 2,
      "NAV": 2,
      "AIR": 2,
      "STA": 2,
      "GAT": 2
    },
    "C": {
      "IND": 2,
      "UGA": 2,
      "FSU": 2,
      "TEN": 2,
      "AUB": 2,
      "ARK": 2,
      "VAT": 2,
      "WAS": 2,
      "TCU": 2,
      "TUL": 2
    },
    "B": {
      "OSU": 2,
      "OKL": 2,
      "MIC": 2,
      "TEX": 2,
      "NDM": 2,
      "USC": 2,
      "FLA": 2,
      "LSU": 2,
      "BYU": 2,
      "MIA": 2
    },
    "D": {
      "ORE": 2,
      "OLE": 2,
      "SCA": 2,
      "KSU": 2,
      "TAM": 2,
      "MAR": 2,
      "HAW": 2,
      "ARM": 2,
      "WVU": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "MST": 2,
      "COL": 2,
      "BOI": 2,
      "UCF": 2,
      "SMU": 2,
      "VAN": 2,
      "OKS": 2,
      "MSU": 2,
      "TTU": 2,
      "CST": 2
    }
  },
  "cfb_q4": {
    "A": {
      "ALA": 2,
      "UGA": 2,
      "OSU": 2,
      "LSU": 2,
      "NAV": 2,
      "MSU": 2
    },
    "B": {
      "OKL": 2,
      "MIC": 2,
      "NDM": 2,
      "PSU": 2,
      "TEN": 2,
      "ARM": 2
    },
    "C": {
      "TEX": 2,
      "USC": 2,
      "FLA": 2,
      "FSU": 2,
      "ORE": 2,
      "OLE": 2,
      "MIA": 2,
      "UCF": 2,
      "STA": 2,
      "GAT": 2,
      "TTU": 2,
      "CST": 2
    },
    "E": {
      "CLM": 2,
      "NEB": 2,
      "TAM": 2,
      "HAW": 2,
      "BYU": 2,
      "ARK": 2
    },
    "D": {
      "IND": 2,
      "AUB": 2,
      "SCA": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "MAR": 2,
      "AIR": 2,
      "WVU": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "BOI": 2,
      "SMU": 2,
      "VAN": 2,
      "WAS": 2,
      "TCU": 2,
      "OKS": 2,
      "TUL": 2
    }
  },
  "cfb_q5": {
    "E": {
      "ALA": 2,
      "USC": 2,
      "ORE": 2
    },
    "A": {
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "TEX": 2,
      "FLA": 2,
      "FSU": 2,
      "LSU": 2,
      "TEN": 2,
      "TAM": 2,
      "MAR": 2,
      "WVU": 2,
      "ARK": 2,
      "VAT": 2,
      "TCU": 2,
      "TTU": 2
    },
    "B": {
      "MIC": 2,
      "NDM": 2,
      "PSU": 2,
      "CLM": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "STA": 2,
      "GAT": 2,
      "WAS": 2
    },
    "D": {
      "AUB": 2,
      "ECU": 2,
      "APP": 2,
      "BOI": 2,
      "MIA": 2,
      "UCF": 2,
      "SMU": 2,
      "OKS": 2,
      "MSU": 2
    },
    "C": {
      "IND": 2,
      "OLE": 2,
      "SCA": 2,
      "NEB": 2,
      "HAW": 2,
      "WAZ": 2,
      "MST": 2,
      "COL": 2,
      "VAN": 2,
      "TUL": 2,
      "CST": 2
    }
  },
  "cfb_q7": {
    "C": {
      "ALA": 2,
      "MIC": 2,
      "NDM": 2,
      "CLM": 2,
      "TAM": 2,
      "HAW": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "BOI": 2,
      "STA": 2,
      "GAT": 2,
      "VAN": 2,
      "TUL": 2
    },
    "A": {
      "UGA": 2,
      "OKL": 2,
      "PSU": 2,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "SCA": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "NEB": 2,
      "MAR": 2,
      "WVU": 2,
      "ARK": 2,
      "WAZ": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "WAS": 2,
      "MSU": 2
    },
    "B": {
      "OSU": 2,
      "TEX": 2,
      "USC": 2,
      "FLA": 2,
      "FSU": 2,
      "ORE": 2,
      "OLE": 2,
      "MIA": 2,
      "SMU": 2,
      "OKS": 2,
      "TTU": 2
    },
    "D": {
      "IND": 2,
      "ECU": 2,
      "APP": 2,
      "UCF": 2,
      "TCU": 2,
      "CST": 2
    }
  },
  "cfb_q8": {
    "B": {
      "ALA": 2,
      "UGA": 2,
      "OKL": 2,
      "TEX": 2,
      "NDM": 2,
      "USC": 2,
      "FLA": 2,
      "FSU": 2,
      "PSU": 2,
      "LSU": 2,
      "TEN": 2,
      "OLE": 2,
      "MIA": 2
    },
    "A": {
      "OSU": 2,
      "MIC": 2,
      "AUB": 2,
      "SCA": 2,
      "ARM": 2,
      "NAV": 2,
      "MST": 2,
      "GAT": 2,
      "WAS": 2,
      "OKS": 2,
      "MSU": 2
    },
    "C": {
      "IND": 2,
      "CLM": 2,
      "ORE": 2,
      "KSU": 2,
      "MAR": 2,
      "AIR": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "VAT": 2,
      "COL": 2,
      "BOI": 2,
      "UCF": 2,
      "SMU": 2,
      "TCU": 2,
      "TTU": 2,
      "TUL": 2,
      "CST": 2
    },
    "D": {
      "IOW": 2,
      "WIS": 2,
      "NEB": 2,
      "TAM": 2,
      "HAW": 2,
      "BYU": 2,
      "WVU": 2,
      "ARK": 2,
      "STA": 2,
      "VAN": 2
    }
  },
  "cfb_q10": {
    "B": {
      "ALA": 2,
      "MIC": 2,
      "NDM": 2,
      "IOW": 2,
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "STA": 2,
      "GAT": 2
    },
    "A": {
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "TEX": 2,
      "FLA": 2,
      "PSU": 2,
      "LSU": 2,
      "TEN": 2,
      "SCA": 2,
      "NEB": 2,
      "TAM": 2,
      "MAR": 2,
      "WVU": 2,
      "ARK": 2,
      "VAT": 2,
      "MST": 2,
      "WAS": 2,
      "TTU": 2
    },
    "C": {
      "USC": 2,
      "CLM": 2,
      "ORE": 2,
      "OLE": 2,
      "WIS": 2,
      "HAW": 2,
      "WAZ": 2,
      "VAN": 2,
      "TUL": 2,
      "CST": 2
    },
    "D": {
      "IND": 2,
      "FSU": 2,
      "AUB": 2,
      "KSU": 2,
      "ECU": 2,
      "APP": 2,
      "COL": 2,
      "BOI": 2,
      "MIA": 2,
      "UCF": 2,
      "SMU": 2,
      "TCU": 2,
      "OKS": 2,
      "MSU": 2
    }
  },
  "cfb_q11": {
    "B": {
      "ALA": 2,
      "OSU": 2,
      "MIC": 2,
      "NDM": 2,
      "USC": 2
    },
    "A": {
      "IND": 2,
      "UGA": 2,
      "OKL": 2,
      "TEX": 2,
      "FLA": 2,
      "FSU": 2,
      "PSU": 2,
      "CLM": 2,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "OLE": 2,
      "SCA": 2,
      "IOW": 2,
      "KSU": 2,
      "WIS": 2,
      "NEB": 2,
      "TAM": 2,
      "MAR": 2,
      "HAW": 2,
      "WVU": 2,
      "ARK": 2,
      "ECU": 2,
      "WAZ": 2,
      "APP": 2,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "BOI": 2,
      "GAT": 2,
      "WAS": 2,
      "TCU": 2,
      "OKS": 2,
      "MSU": 2,
      "TTU": 2,
      "TUL": 2
    },
    "D": {
      "ORE": 2,
      "MIA": 2,
      "UCF": 2,
      "SMU": 2,
      "CST": 2
    },
    "C": {
      "ARM": 2,
      "NAV": 2,
      "AIR": 2,
      "BYU": 2,
      "STA": 2,
      "VAN": 2
    }
  },
  "cfb_q12": {
    "B": {
      "ALA": 2,
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "MIC": 2,
      "TEX": 2,
      "FLA": 2,
      "FSU": 2,
      "WAS": 2
    },
    "A": {
      "NDM": 2,
      "PSU": 2,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "SCA": 2,
      "IOW": 2,
      "NEB": 2,
      "TAM": 2,
      "ARM": 2,
      "BYU": 2,
      "WVU": 2,
      "ARK": 2,
      "VAT": 2,
      "COL": 2,
      "MSU": 2
    },
    "E": {
      "USC": 2,
      "MIA": 2
    },
    "D": {
      "IND": 2,
      "CLM": 2,
      "ORE": 2,
      "KSU": 2,
      "WIS": 2,
      "NAV": 2,
      "AIR": 2,
      "ECU": 2,
      "APP": 2,
      "BOI": 2,
      "UCF": 2,
      "SMU": 2,
      "STA": 2,
      "GAT": 2,
      "TCU": 2,
      "OKS": 2,
      "TUL": 2
    },
    "C": {
      "OLE": 2,
      "MAR": 2,
      "HAW": 2,
      "WAZ": 2,
      "MST": 2,
      "VAN": 2,
      "TTU": 2,
      "CST": 2
    }
  },
  "cfb_q3": {
    "1": {
      "ORE": 1,
      "LSU": 2,
      "TEN": 1,
      "AUB": 2,
      "OLE": 2,
      "SCA": 2,
      "HAW": 1,
      "WVU": 3,
      "ARK": 1,
      "ECU": 2,
      "WAZ": 2,
      "APP": 1,
      "MIA": 3,
      "UCF": 1,
      "SMU": 1,
      "TTU": 3,
      "CST": 3
    },
    "2": {
      "TEX": 2,
      "FLA": 2,
      "FSU": 2,
      "ORE": 3,
      "LSU": 3,
      "TEN": 3,
      "AUB": 3,
      "OLE": 3,
      "SCA": 3,
      "HAW": 3,
      "WVU": 1,
      "ARK": 3,
      "ECU": 3,
      "WAZ": 3,
      "APP": 3,
      "VAT": 2,
      "MST": 2,
      "COL": 2,
      "MIA": 1,
      "UCF": 3,
      "SMU": 3,
      "TCU": 2,
      "OKS": 2,
      "MSU": 2,
      "TTU": 1,
      "TUL": 2,
      "CST": 1
    },
    "3": {
      "UGA": 1,
      "OSU": 1,
      "OKL": 1,
      "TEX": 3,
      "NDM": 1,
      "USC": 3,
      "FLA": 3,
      "FSU": 3,
      "ORE": 1,
      "TEN": 1,
      "TAM": 1,
      "MAR": 3,
      "HAW": 1,
      "ARK": 1,
      "APP": 1,
      "VAT": 3,
      "MST": 3,
      "COL": 3,
      "BOI": 3,
      "UCF": 1,
      "SMU": 1,
      "GAT": 1,
      "VAN": 3,
      "WAS": 3,
      "TCU": 3,
      "OKS": 3,
      "MSU": 3,
      "TUL": 3
    },
    "4": {
      "IND": 1,
      "ALA": 1,
      "UGA": 3,
      "OSU": 3,
      "OKL": 3,
      "MIC": 3,
      "NDM": 3,
      "USC": 2,
      "PSU": 3,
      "CLM": 3,
      "IOW": 1,
      "KSU": 3,
      "WIS": 1,
      "NEB": 3,
      "TAM": 3,
      "MAR": 2,
      "ARM": 1,
      "NAV": 1,
      "AIR": 1,
      "BYU": 3,
      "BOI": 2,
      "STA": 3,
      "GAT": 3,
      "VAN": 2,
      "WAS": 2
    },
    "5": {
      "IND": 3,
      "ALA": 3,
      "UGA": 1,
      "OSU": 1,
      "OKL": 1,
      "MIC": 2,
      "NDM": 1,
      "PSU": 2,
      "CLM": 2,
      "IOW": 3,
      "KSU": 2,
      "WIS": 3,
      "NEB": 2,
      "TAM": 1,
      "ARM": 3,
      "NAV": 3,
      "AIR": 3,
      "BYU": 2,
      "STA": 2,
      "GAT": 1
    }
  },
  "cfb_q6": {
    "1": {
      "ALA": 1,
      "UGA": 1,
      "OSU": 1,
      "OKL": 1,
      "MIC": 1,
      "NDM": 3,
      "PSU": 1,
      "CLM": 1,
      "LSU": 1,
      "TEN": 1,
      "AUB": 1,
      "SCA": 1,
      "IOW": 1,
      "KSU": 1,
      "WIS": 1,
      "NEB": 3,
      "TAM": 3,
      "MAR": 3,
      "HAW": 1,
      "ARM": 3,
      "NAV": 3,
      "AIR": 1,
      "BYU": 3,
      "WVU": 3,
      "ARK": 1,
      "ECU": 1,
      "WAZ": 1,
      "APP": 1,
      "VAT": 1,
      "MST": 1,
      "COL": 1,
      "BOI": 1
    },
    "2": {
      "ALA": 3,
      "UGA": 3,
      "OSU": 3,
      "OKL": 3,
      "MIC": 3,
      "TEX": 1,
      "NDM": 1,
      "FLA": 1,
      "FSU": 1,
      "PSU": 3,
      "CLM": 3,
      "LSU": 3,
      "TEN": 3,
      "AUB": 3,
      "OLE": 1,
      "SCA": 3,
      "IOW": 3,
      "KSU": 3,
      "WIS": 3,
      "NEB": 1,
      "TAM": 1,
      "MAR": 1,
      "HAW": 3,
      "ARM": 1,
      "NAV": 1,
      "AIR": 3,
      "BYU": 1,
      "WVU": 1,
      "ARK": 3,
      "ECU": 3,
      "WAZ": 3,
      "APP": 3,
      "VAT": 3,
      "MST": 3,
      "COL": 3,
      "BOI": 3,
      "WAS": 1,
      "TCU": 1,
      "OKS": 1,
      "MSU": 1,
      "TTU": 1
    },
    "3": {
      "ALA": 1,
      "UGA": 1,
      "OSU": 1,
      "OKL": 1,
      "MIC": 1,
      "TEX": 3,
      "USC": 1,
      "FLA": 3,
      "FSU": 3,
      "PSU": 1,
      "CLM": 1,
      "LSU": 1,
      "TEN": 1,
      "AUB": 1,
      "OLE": 3,
      "SCA": 1,
      "IOW": 1,
      "KSU": 1,
      "WIS": 1,
      "HAW": 1,
      "AIR": 1,
      "ARK": 1,
      "ECU": 1,
      "WAZ": 1,
      "APP": 1,
      "VAT": 1,
      "MST": 1,
      "COL": 1,
      "BOI": 1,
      "MIA": 1,
      "UCF": 1,
      "SMU": 1,
      "GAT": 1,
      "VAN": 1,
      "WAS": 3,
      "TCU": 3,
      "OKS": 3,
      "MSU": 3,
      "TTU": 3,
      "TUL": 1,
      "CST": 1
    },
    "4": {
      "IND": 1,
      "TEX": 1,
      "USC": 3,
      "FLA": 1,
      "FSU": 1,
      "ORE": 1,
      "OLE": 1,
      "MIA": 3,
      "UCF": 3,
      "SMU": 3,
      "STA": 1,
      "GAT": 3,
      "VAN": 3,
      "WAS": 1,
      "TCU": 1,
      "OKS": 1,
      "MSU": 1,
      "TTU": 1,
      "TUL": 3,
      "CST": 3
    },
    "5": {
      "IND": 3,
      "USC": 1,
      "ORE": 3,
      "MIA": 1,
      "UCF": 1,
      "SMU": 1,
      "STA": 3,
      "GAT": 1,
      "VAN": 1,
      "TUL": 1,
      "CST": 1
    }
  },
  "cfb_q9": {
    "1": {
      "CLM": 1,
      "IOW": 1,
      "KSU": 1,
      "WIS": 1,
      "NEB": 3,
      "TAM": 3,
      "MAR": 3,
      "HAW": 3,
      "ARM": 3,
      "NAV": 3,
      "AIR": 1,
      "BYU": 3,
      "WVU": 1,
      "ARK": 1,
      "ECU": 1,
      "WAZ": 1,
      "APP": 1,
      "MST": 1
    },
    "2": {
      "UGA": 2,
      "OSU": 2,
      "OKL": 2,
      "PSU": 2,
      "CLM": 3,
      "LSU": 2,
      "TEN": 2,
      "AUB": 2,
      "OLE": 2,
      "SCA": 2,
      "IOW": 3,
      "KSU": 3,
      "WIS": 3,
      "NEB": 1,
      "TAM": 1,
      "MAR": 1,
      "HAW": 1,
      "ARM": 1,
      "NAV": 1,
      "AIR": 3,
      "BYU": 1,
      "WVU": 3,
      "ARK": 3,
      "ECU": 3,
      "WAZ": 3,
      "APP": 3,
      "VAT": 2,
      "MST": 3,
      "COL": 2,
      "BOI": 2,
      "TTU": 2,
      "TUL": 2,
      "CST": 2
    },
    "3": {
      "IND": 3,
      "ALA": 3,
      "UGA": 3,
      "OSU": 3,
      "OKL": 3,
      "MIC": 3,
      "TEX": 3,
      "NDM": 1,
      "USC": 1,
      "FLA": 3,
      "FSU": 1,
      "PSU": 3,
      "CLM": 1,
      "LSU": 3,
      "TEN": 3,
      "AUB": 3,
      "OLE": 3,
      "SCA": 3,
      "IOW": 1,
      "KSU": 1,
      "WIS": 1,
      "AIR": 1,
      "WVU": 1,
      "ARK": 1,
      "ECU": 1,
      "WAZ": 1,
      "APP": 1,
      "VAT": 3,
      "MST": 1,
      "COL": 3,
      "BOI": 3,
      "MIA": 1,
      "UCF": 1,
      "SMU": 1,
      "GAT": 1,
      "VAN": 1,
      "WAS": 3,
      "TCU": 3,
      "OKS": 3,
      "MSU": 3,
      "TTU": 3,
      "TUL": 3,
      "CST": 3
    },
    "4": {
      "IND": 2,
      "ALA": 2,
      "MIC": 2,
      "TEX": 2,
      "NDM": 3,
      "USC": 3,
      "FLA": 2,
      "FSU": 3,
      "ORE": 1,
      "MIA": 3,
      "UCF": 3,
      "SMU": 3,
      "STA": 1,
      "GAT": 3,
      "VAN": 3,
      "WAS": 2,
      "TCU": 2,
      "OKS": 2,
      "MSU": 2
    },
    "5": {
      "NDM": 1,
      "USC": 1,
      "FSU": 1,
      "ORE": 3,
      "MIA": 1,
      "UCF": 1,
      "SMU": 1,
      "STA": 3,
      "GAT": 1,
      "VAN": 1
    }
  }
};

const teamDims = {
  "IND": {
    "loyalty": 6,
    "emotion": 8,
    "ambition": 9,
    "process": 9,
    "community": 7,
    "chaos": 2,
    "rootedness": 3
  },
  "ALA": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 10,
    "process": 10,
    "community": 7,
    "chaos": 2,
    "rootedness": 8
  },
  "UGA": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 10,
    "process": 8,
    "community": 8,
    "chaos": 4,
    "rootedness": 8
  },
  "OSU": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 10,
    "process": 8,
    "community": 8,
    "chaos": 4,
    "rootedness": 9
  },
  "OKL": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 10,
    "process": 8,
    "community": 8,
    "chaos": 4,
    "rootedness": 9
  },
  "MIC": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 9,
    "process": 7,
    "community": 7,
    "chaos": 3,
    "rootedness": 9
  },
  "TEX": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 10,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 8
  },
  "NDM": {
    "loyalty": 10,
    "emotion": 7,
    "ambition": 9,
    "process": 7,
    "community": 6,
    "chaos": 4,
    "rootedness": 6
  },
  "USC": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 9,
    "process": 6,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "FLA": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 8,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 7
  },
  "FSU": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 9,
    "process": 6,
    "community": 6,
    "chaos": 6,
    "rootedness": 6
  },
  "PSU": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 8,
    "process": 9,
    "community": 8,
    "chaos": 3,
    "rootedness": 8
  },
  "CLM": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 9,
    "process": 9,
    "community": 9,
    "chaos": 3,
    "rootedness": 8
  },
  "ORE": {
    "loyalty": 6,
    "emotion": 7,
    "ambition": 9,
    "process": 6,
    "community": 5,
    "chaos": 7,
    "rootedness": 4
  },
  "LSU": {
    "loyalty": 9,
    "emotion": 10,
    "ambition": 9,
    "process": 5,
    "community": 8,
    "chaos": 8,
    "rootedness": 9
  },
  "TEN": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 8,
    "process": 5,
    "community": 8,
    "chaos": 7,
    "rootedness": 8
  },
  "AUB": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 8,
    "process": 5,
    "community": 8,
    "chaos": 8,
    "rootedness": 8
  },
  "OLE": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 7,
    "process": 4,
    "community": 8,
    "chaos": 8,
    "rootedness": 8
  },
  "SCA": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 4,
    "community": 8,
    "chaos": 8,
    "rootedness": 8
  },
  "IOW": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 5,
    "process": 10,
    "community": 9,
    "chaos": 2,
    "rootedness": 9
  },
  "KSU": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 5,
    "process": 9,
    "community": 9,
    "chaos": 3,
    "rootedness": 9
  },
  "WIS": {
    "loyalty": 9,
    "emotion": 7,
    "ambition": 6,
    "process": 9,
    "community": 9,
    "chaos": 2,
    "rootedness": 8
  },
  "NEB": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 7,
    "process": 8,
    "community": 10,
    "chaos": 3,
    "rootedness": 10
  },
  "TAM": {
    "loyalty": 10,
    "emotion": 8,
    "ambition": 8,
    "process": 7,
    "community": 10,
    "chaos": 4,
    "rootedness": 9
  },
  "MAR": {
    "loyalty": 10,
    "emotion": 10,
    "ambition": 4,
    "process": 5,
    "community": 10,
    "chaos": 5,
    "rootedness": 10
  },
  "HAW": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 4,
    "process": 4,
    "community": 10,
    "chaos": 7,
    "rootedness": 10
  },
  "ARM": {
    "loyalty": 10,
    "emotion": 6,
    "ambition": 4,
    "process": 9,
    "community": 10,
    "chaos": 2,
    "rootedness": 8
  },
  "NAV": {
    "loyalty": 10,
    "emotion": 6,
    "ambition": 6,
    "process": 9,
    "community": 10,
    "chaos": 2,
    "rootedness": 8
  },
  "AIR": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 5,
    "process": 10,
    "community": 9,
    "chaos": 2,
    "rootedness": 7
  },
  "BYU": {
    "loyalty": 10,
    "emotion": 6,
    "ambition": 7,
    "process": 9,
    "community": 10,
    "chaos": 3,
    "rootedness": 8
  },
  "WVU": {
    "loyalty": 10,
    "emotion": 10,
    "ambition": 6,
    "process": 4,
    "community": 9,
    "chaos": 9,
    "rootedness": 10
  },
  "ARK": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 5,
    "community": 9,
    "chaos": 7,
    "rootedness": 10
  },
  "ECU": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 5,
    "process": 4,
    "community": 9,
    "chaos": 8,
    "rootedness": 9
  },
  "WAZ": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 4,
    "process": 4,
    "community": 9,
    "chaos": 8,
    "rootedness": 9
  },
  "APP": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 5,
    "process": 6,
    "community": 9,
    "chaos": 7,
    "rootedness": 9
  },
  "VAT": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 6,
    "community": 8,
    "chaos": 6,
    "rootedness": 8
  },
  "MST": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 5,
    "process": 5,
    "community": 9,
    "chaos": 6,
    "rootedness": 9
  },
  "COL": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 6,
    "process": 4,
    "community": 8,
    "chaos": 6,
    "rootedness": 8
  },
  "BOI": {
    "loyalty": 9,
    "emotion": 8,
    "ambition": 7,
    "process": 8,
    "community": 8,
    "chaos": 5,
    "rootedness": 9
  },
  "MIA": {
    "loyalty": 7,
    "emotion": 9,
    "ambition": 9,
    "process": 4,
    "community": 6,
    "chaos": 9,
    "rootedness": 6
  },
  "UCF": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 7,
    "rootedness": 5
  },
  "SMU": {
    "loyalty": 7,
    "emotion": 7,
    "ambition": 8,
    "process": 5,
    "community": 6,
    "chaos": 7,
    "rootedness": 6
  },
  "STA": {
    "loyalty": 6,
    "emotion": 5,
    "ambition": 6,
    "process": 8,
    "community": 5,
    "chaos": 3,
    "rootedness": 5
  },
  "GAT": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 6,
    "process": 8,
    "community": 6,
    "chaos": 4,
    "rootedness": 6
  },
  "VAN": {
    "loyalty": 7,
    "emotion": 6,
    "ambition": 4,
    "process": 7,
    "community": 6,
    "chaos": 5,
    "rootedness": 6
  },
  "WAS": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 8,
    "process": 7,
    "community": 7,
    "chaos": 5,
    "rootedness": 7
  },
  "TCU": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 7,
    "community": 7,
    "chaos": 6,
    "rootedness": 7
  },
  "OKS": {
    "loyalty": 8,
    "emotion": 7,
    "ambition": 7,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 8
  },
  "MSU": {
    "loyalty": 8,
    "emotion": 8,
    "ambition": 6,
    "process": 6,
    "community": 7,
    "chaos": 6,
    "rootedness": 7
  },
  "TTU": {
    "loyalty": 8,
    "emotion": 9,
    "ambition": 6,
    "process": 3,
    "community": 8,
    "chaos": 9,
    "rootedness": 8
  },
  "TUL": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 6,
    "process": 7,
    "community": 8,
    "chaos": 6,
    "rootedness": 8
  },
  "CST": {
    "loyalty": 7,
    "emotion": 8,
    "ambition": 5,
    "process": 5,
    "community": 8,
    "chaos": 9,
    "rootedness": 7
  }
};

const teamTextColors = {
  "IND": "#FFFFFF",
  "ALA": "#F2D4D9",
  "UGA": "#FFFFFF",
  "OSU": "#C7C7C7",
  "OKL": "#FDF9D8",
  "MIC": "#FFCB05",
  "TEX": "#FFFFFF",
  "NDM": "#C99700",
  "USC": "#FFCC00",
  "FLA": "#FA4616",
  "FSU": "#CEB888",
  "PSU": "#FFFFFF",
  "CLM": "#522D80",
  "ORE": "#FEE123",
  "LSU": "#FDD023",
  "TEN": "#FFFFFF",
  "AUB": "#E87722",
  "OLE": "#CE1126",
  "SCA": "#FFFFFF",
  "IOW": "#FFCD00",
  "KSU": "#FFFFFF",
  "WIS": "#FFFFFF",
  "NEB": "#FDF6E3",
  "TAM": "#FFFFFF",
  "MAR": "#FFFFFF",
  "HAW": "#FFFFFF",
  "ARM": "#D4BF91",
  "NAV": "#C5B358",
  "AIR": "#C1C6C8",
  "BYU": "#FFFFFF",
  "WVU": "#EAAA00",
  "ARK": "#FFFFFF",
  "ECU": "#FDC82F",
  "WAZ": "#5E6A71",
  "APP": "#FFCC00",
  "VAT": "#CF4420",
  "MST": "#FFFFFF",
  "COL": "#CFB87C",
  "BOI": "#D64309",
  "MIA": "#005030",
  "UCF": "#FFC904",
  "SMU": "#FFFFFF",
  "STA": "#FFFFFF",
  "GAT": "#003057",
  "VAN": "#CFAE70",
  "WAS": "#E8E3D3",
  "TCU": "#FFFFFF",
  "OKS": "#000000",
  "MSU": "#FFFFFF",
  "TTU": "#000000",
  "TUL": "#FFFFFF",
  "CST": "#A27752"
};

const teams = {
  "IND": {
    "name": "Indiana",
    "emoji": "⚡",
    "color": "#990000",
    "code3": "IND",
    "kitType": "solid"
  },
  "ALA": {
    "name": "Alabama",
    "emoji": "🐘",
    "color": "#9E1B32",
    "code3": "ALA",
    "kitType": "solid"
  },
  "UGA": {
    "name": "Georgia",
    "emoji": "🐶",
    "color": "#BA0C2F",
    "code3": "UGA",
    "kitType": "solid"
  },
  "OSU": {
    "name": "Ohio State",
    "emoji": "🌰",
    "color": "#BB0000",
    "code3": "OSU",
    "kitType": "solid"
  },
  "OKL": {
    "name": "Oklahoma",
    "emoji": "🐴",
    "color": "#841617",
    "code3": "OKL",
    "kitType": "solid"
  },
  "MIC": {
    "name": "Michigan",
    "emoji": "〽️",
    "color": "#00274C",
    "code3": "MIC",
    "kitType": "solid"
  },
  "TEX": {
    "name": "Texas",
    "emoji": "🤘",
    "color": "#BF5700",
    "code3": "TEX",
    "kitType": "solid"
  },
  "NDM": {
    "name": "Notre Dame",
    "emoji": "☘️",
    "color": "#0C2340",
    "code3": "NDM",
    "kitType": "solid"
  },
  "USC": {
    "name": "USC",
    "emoji": "⚔️",
    "color": "#990000",
    "code3": "USC",
    "kitType": "solid"
  },
  "FLA": {
    "name": "Florida",
    "emoji": "🐊",
    "color": "#0021A5",
    "code3": "FLA",
    "kitType": "solid"
  },
  "FSU": {
    "name": "Florida State",
    "emoji": "🔥",
    "color": "#782F40",
    "code3": "FSU",
    "kitType": "solid"
  },
  "PSU": {
    "name": "Penn State",
    "emoji": "🦁",
    "color": "#041E42",
    "code3": "PSU",
    "kitType": "solid"
  },
  "CLM": {
    "name": "Clemson",
    "emoji": "🐾",
    "color": "#F56600",
    "code3": "CLM",
    "kitType": "solid"
  },
  "ORE": {
    "name": "Oregon",
    "emoji": "🦆",
    "color": "#154733",
    "code3": "ORE",
    "kitType": "solid"
  },
  "LSU": {
    "name": "LSU",
    "emoji": "🐯",
    "color": "#461D7C",
    "code3": "LSU",
    "kitType": "solid"
  },
  "TEN": {
    "name": "Tennessee",
    "emoji": "🍊",
    "color": "#FF8200",
    "code3": "TEN",
    "kitType": "solid"
  },
  "AUB": {
    "name": "Auburn",
    "emoji": "🦅",
    "color": "#0C2340",
    "code3": "AUB",
    "kitType": "solid"
  },
  "OLE": {
    "name": "Ole Miss",
    "emoji": "🦈",
    "color": "#14213D",
    "code3": "OLE",
    "kitType": "solid"
  },
  "SCA": {
    "name": "South Carolina",
    "emoji": "🐓",
    "color": "#73000A",
    "code3": "SCA",
    "kitType": "solid"
  },
  "IOW": {
    "name": "Iowa",
    "emoji": "🦅",
    "color": "#000000",
    "code3": "IOW",
    "kitType": "solid"
  },
  "KSU": {
    "name": "Kansas State",
    "emoji": "🐾",
    "color": "#512888",
    "code3": "KSU",
    "kitType": "solid"
  },
  "WIS": {
    "name": "Wisconsin",
    "emoji": "🦡",
    "color": "#C5050C",
    "code3": "WIS",
    "kitType": "solid"
  },
  "NEB": {
    "name": "Nebraska",
    "emoji": "🌽",
    "color": "#E41C38",
    "code3": "NEB",
    "kitType": "solid"
  },
  "TAM": {
    "name": "Texas A&M",
    "emoji": "👍",
    "color": "#500000",
    "code3": "TAM",
    "kitType": "solid"
  },
  "MAR": {
    "name": "Marshall",
    "emoji": "🦬",
    "color": "#00B140",
    "code3": "MAR",
    "kitType": "solid"
  },
  "HAW": {
    "name": "Hawai'i",
    "emoji": "🌈",
    "color": "#024731",
    "code3": "HAW",
    "kitType": "solid"
  },
  "ARM": {
    "name": "Army",
    "emoji": "⚔️",
    "color": "#1C1C1C",
    "code3": "ARM",
    "kitType": "solid"
  },
  "NAV": {
    "name": "Navy",
    "emoji": "⚓",
    "color": "#00205B",
    "code3": "NAV",
    "kitType": "solid"
  },
  "AIR": {
    "name": "Air Force",
    "emoji": "✈️",
    "color": "#003087",
    "code3": "AIR",
    "kitType": "solid"
  },
  "BYU": {
    "name": "BYU",
    "emoji": "⛰️",
    "color": "#002E5D",
    "code3": "BYU",
    "kitType": "solid"
  },
  "WVU": {
    "name": "West Virginia",
    "emoji": "⛏️",
    "color": "#002855",
    "code3": "WVU",
    "kitType": "solid"
  },
  "ARK": {
    "name": "Arkansas",
    "emoji": "🐗",
    "color": "#9D2235",
    "code3": "ARK",
    "kitType": "solid"
  },
  "ECU": {
    "name": "East Carolina",
    "emoji": "🏴‍☠️",
    "color": "#592A8A",
    "code3": "ECU",
    "kitType": "solid"
  },
  "WAZ": {
    "name": "Washington State",
    "emoji": "🌾",
    "color": "#981E32",
    "code3": "WAZ",
    "kitType": "solid"
  },
  "APP": {
    "name": "Appalachian State",
    "emoji": "🏔️",
    "color": "#000000",
    "code3": "APP",
    "kitType": "solid"
  },
  "VAT": {
    "name": "Virginia Tech",
    "emoji": "🦃",
    "color": "#630031",
    "code3": "VAT",
    "kitType": "solid"
  },
  "MST": {
    "name": "Mississippi State",
    "emoji": "🔔",
    "color": "#660000",
    "code3": "MST",
    "kitType": "solid"
  },
  "COL": {
    "name": "Colorado",
    "emoji": "🐃",
    "color": "#000000",
    "code3": "COL",
    "kitType": "solid"
  },
  "BOI": {
    "name": "Boise State",
    "emoji": "🐴",
    "color": "#0033A0",
    "code3": "BOI",
    "kitType": "solid"
  },
  "MIA": {
    "name": "Miami",
    "emoji": "🌀",
    "color": "#F47321",
    "code3": "MIA",
    "kitType": "solid"
  },
  "UCF": {
    "name": "UCF",
    "emoji": "🚀",
    "color": "#000000",
    "code3": "UCF",
    "kitType": "solid"
  },
  "SMU": {
    "name": "SMU",
    "emoji": "🐎",
    "color": "#C8102E",
    "code3": "SMU",
    "kitType": "solid"
  },
  "STA": {
    "name": "Stanford",
    "emoji": "🌲",
    "color": "#8C1515",
    "code3": "STA",
    "kitType": "solid"
  },
  "GAT": {
    "name": "Georgia Tech",
    "emoji": "🐝",
    "color": "#B3A369",
    "code3": "GAT",
    "kitType": "solid"
  },
  "VAN": {
    "name": "Vanderbilt",
    "emoji": "⚓",
    "color": "#000000",
    "code3": "VAN",
    "kitType": "solid"
  },
  "WAS": {
    "name": "Washington",
    "emoji": "🐺",
    "color": "#4B2E83",
    "code3": "WAS",
    "kitType": "solid"
  },
  "TCU": {
    "name": "TCU",
    "emoji": "🐸",
    "color": "#4D1979",
    "code3": "TCU",
    "kitType": "solid"
  },
  "OKS": {
    "name": "Oklahoma State",
    "emoji": "🤠",
    "color": "#FF7300",
    "code3": "OKS",
    "kitType": "solid"
  },
  "MSU": {
    "name": "Michigan State",
    "emoji": "🛡️",
    "color": "#18453B",
    "code3": "MSU",
    "kitType": "solid"
  },
  "TTU": {
    "name": "Texas Tech",
    "emoji": "🐎",
    "color": "#CC0000",
    "code3": "TTU",
    "kitType": "solid"
  },
  "TUL": {
    "name": "Tulane",
    "emoji": "🌊",
    "color": "#006747",
    "code3": "TUL",
    "kitType": "solid"
  },
  "CST": {
    "name": "Coastal Carolina",
    "emoji": "🐓",
    "color": "#007377",
    "code3": "CST",
    "kitType": "solid"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
