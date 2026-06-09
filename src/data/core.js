// FanDNA — CORE (sport-agnostic personality layer). Phase 2.
// This is the SHARED layer of the genome: the 24 personality questions and the
// 7 dimensions, identical for every sport. Each sport adds its own module on top.
//
// coreQuestions  : the 24 personality questions (phases 1-4), unchanged from v1.
// coreDimScoring : each core answer's pull across the 7 dimensions. Used to build
//                  the portable coreProfile (NOT a club). Derived from the live data.
// DIM_*          : the canonical 7-dimension vocabulary, shared by every sport's card.

const coreQuestions = [
  {
    "id": "q1",
    "type": "choice",
    "phase": "Who are you?",
    "question": "You're furious about something. What do people around you see?",
    "options": [
      {
        "label": "They know immediately. I don't hide it.",
        "value": "A"
      },
      {
        "label": "I get quieter. The colder the worse.",
        "value": "B"
      },
      {
        "label": "I vent loudly, then it's gone fast.",
        "value": "C"
      },
      {
        "label": "Nothing. I process alone and come back sorted.",
        "value": "D"
      },
      {
        "label": "Depends entirely on who caused it.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q2",
    "type": "binary",
    "phase": "Who are you?",
    "question": "Instinctively:",
    "left": "I set the bar high and feel it when we fall short",
    "right": "I manage expectations to protect myself from the fall"
  },
  {
    "id": "q3",
    "type": "choice",
    "phase": "Who are you?",
    "question": "Something you worked hard on gets overlooked. Your move:",
    "options": [
      {
        "label": "Say nothing. Let the next thing speak.",
        "value": "A"
      },
      {
        "label": "Bring it up, clearly, calmly, once.",
        "value": "B"
      },
      {
        "label": "Stew. For longer than I'd admit.",
        "value": "C"
      },
      {
        "label": "Move on fast. Dwelling is a waste.",
        "value": "D"
      },
      {
        "label": "Take it personally. It stays with me.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q4",
    "type": "slider",
    "phase": "Who are you?",
    "question": "When a plan falls apart:",
    "left": "I need a moment, then I rebuild methodically",
    "right": "I adapt in real time. Chaos doesn't slow me down"
  },
  {
    "id": "q5",
    "type": "choice",
    "phase": "Who are you?",
    "question": "Your ideal Saturday:",
    "options": [
      {
        "label": "Big group, loud, energy feeding energy.",
        "value": "A"
      },
      {
        "label": "Four or five people I actually trust.",
        "value": "B"
      },
      {
        "label": "One other person, or nobody.",
        "value": "C"
      },
      {
        "label": "Structured. I like having a plan.",
        "value": "D"
      },
      {
        "label": "Whatever feels right that morning.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q6",
    "type": "binary",
    "phase": "Who are you?",
    "question": "In a group:",
    "left": "I lead from the front, visibly",
    "right": "I shape things from behind the scenes"
  },
  {
    "id": "q7",
    "type": "choice",
    "phase": "Where do you belong?",
    "question": "What do people underestimate about you?",
    "options": [
      {
        "label": "How competitive I actually am.",
        "value": "A"
      },
      {
        "label": "How deeply I care.",
        "value": "B"
      },
      {
        "label": "How patiently I can wait.",
        "value": "C"
      },
      {
        "label": "How analytically I think.",
        "value": "D"
      },
      {
        "label": "How stubborn I become once I've decided.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q8",
    "type": "slider",
    "phase": "Where do you belong?",
    "question": "Your relationship with where you're from:",
    "left": "It's one part of me, I'm not defined by it",
    "right": "It's everything. Identity starts with place"
  },
  {
    "id": "q9",
    "type": "choice",
    "phase": "Where do you belong?",
    "question": "A long-standing group you love is struggling badly. You:",
    "options": [
      {
        "label": "Double down. Hard times are when loyalty counts.",
        "value": "A"
      },
      {
        "label": "Stay, but it costs you more than you show.",
        "value": "B"
      },
      {
        "label": "Try to fix it from the inside.",
        "value": "C"
      },
      {
        "label": "Give it a defined window, then reassess.",
        "value": "D"
      },
      {
        "label": "Accept the struggle as part of belonging.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q10",
    "type": "binary",
    "phase": "Where do you belong?",
    "question": "Honestly:",
    "left": "I need to be part of something bigger than myself",
    "right": "I find meaning in doing excellent work independently"
  },
  {
    "id": "q11",
    "type": "choice",
    "phase": "Where do you belong?",
    "question": "Your relationship with the past:",
    "options": [
      {
        "label": "It's fuel. I carry it forward.",
        "value": "A"
      },
      {
        "label": "It's an anchor, hard to fully shake.",
        "value": "B"
      },
      {
        "label": "I reference it often. Others find this annoying.",
        "value": "C"
      },
      {
        "label": "Useful context, not a destination.",
        "value": "D"
      },
      {
        "label": "I'm actively building something new. Past is fine.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q12",
    "type": "slider",
    "phase": "Where do you belong?",
    "question": "When you care about something:",
    "left": "My intensity is internal, I feel it but don't broadcast it",
    "right": "Everyone around me knows exactly how much I care"
  },
  {
    "id": "q13",
    "type": "choice",
    "phase": "How do you win?",
    "question": "What does winning actually mean to you?",
    "options": [
      {
        "label": "Everything. The only point of competing.",
        "value": "A"
      },
      {
        "label": "It matters, but how you win matters too.",
        "value": "B"
      },
      {
        "label": "It would mean everything after everything we've been through.",
        "value": "C"
      },
      {
        "label": "Proof that the model is right.",
        "value": "D"
      },
      {
        "label": "A step, not a destination, immediately onto the next.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q14",
    "type": "binary",
    "phase": "How do you win?",
    "question": "Pick one, no negotiating:",
    "left": "Romantic underdog",
    "right": "Ruthless favourite"
  },
  {
    "id": "q15",
    "type": "choice",
    "phase": "How do you win?",
    "question": "Your tolerance for chaos and disorder:",
    "options": [
      {
        "label": "Zero. Systems and process prevent chaos.",
        "value": "A"
      },
      {
        "label": "Low. I prefer order and can usually maintain it.",
        "value": "B"
      },
      {
        "label": "Medium, depends entirely on what's at stake.",
        "value": "C"
      },
      {
        "label": "High. I see pattern where others see chaos.",
        "value": "D"
      },
      {
        "label": "I generate it. Controlled chaos is my natural state.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q16",
    "type": "slider",
    "phase": "How do you win?",
    "question": "Being the underdog:",
    "left": "Insulting, I expect to compete, not scrape",
    "right": "Comfortable, low expectations are freeing"
  },
  {
    "id": "q17",
    "type": "choice",
    "phase": "How do you win?",
    "question": "What motivates you most?",
    "options": [
      {
        "label": "Proving people wrong.",
        "value": "A"
      },
      {
        "label": "The craft, doing it as well as it can be done.",
        "value": "B"
      },
      {
        "label": "The people I'm doing it with.",
        "value": "C"
      },
      {
        "label": "Legacy, what it means long after.",
        "value": "D"
      },
      {
        "label": "Winning. That's the whole thing.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q18",
    "type": "binary",
    "phase": "How do you win?",
    "question": "Be honest:",
    "left": "The journey genuinely matters more than the destination",
    "right": "Results are all that actually counts in the end"
  },
  {
    "id": "q19",
    "type": "choice",
    "phase": "How do you feel it?",
    "question": "You just got genuinely good news. You:",
    "options": [
      {
        "label": "Celebrate loudly and immediately.",
        "value": "A"
      },
      {
        "label": "Share it with one or two people close to you.",
        "value": "B"
      },
      {
        "label": "Sit with it quietly for a while first.",
        "value": "C"
      },
      {
        "label": "Feel it for ten minutes then think about what's next.",
        "value": "D"
      },
      {
        "label": "Wait for the catch, good news makes you nervous.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q20",
    "type": "slider",
    "phase": "How do you feel it?",
    "question": "When something goes wrong, your instinct is:",
    "left": "Find who's responsible",
    "right": "Fix the system so it doesn't happen again"
  },
  {
    "id": "q21",
    "type": "choice",
    "phase": "How do you feel it?",
    "question": "A long drought finally ends. First reaction:",
    "options": [
      {
        "label": "Pure, immediate, overwhelming joy.",
        "value": "A"
      },
      {
        "label": "Tears. The genuine kind.",
        "value": "B"
      },
      {
        "label": "Relief so deep it almost feels like grief.",
        "value": "C"
      },
      {
        "label": "Disbelief. Takes a while to land.",
        "value": "D"
      },
      {
        "label": "Quiet satisfaction. You always knew.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q22",
    "type": "binary",
    "phase": "How do you feel it?",
    "question": "Your suffering:",
    "left": "Is private, you feel it alone",
    "right": "Is shared, misery loves company and honesty"
  },
  {
    "id": "q23",
    "type": "choice",
    "phase": "How do you feel it?",
    "question": "Something you built from scratch finally pays off. You feel:",
    "options": [
      {
        "label": "Vindicated. You knew it all along.",
        "value": "A"
      },
      {
        "label": "Relieved, more than anything else.",
        "value": "B"
      },
      {
        "label": "Proud of everyone involved.",
        "value": "C"
      },
      {
        "label": "Already onto the next challenge.",
        "value": "D"
      },
      {
        "label": "Like it doesn't compute yet, need time to absorb.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q24",
    "type": "slider",
    "phase": "How do you feel it?",
    "question": "Hope, for you:",
    "left": "Is rational, based on genuine evidence",
    "right": "Persists regardless of evidence. You can't kill it"
  }
];

// The order the 7 dimensions are always read/drawn in.
const DIM_ORDER  = ["loyalty","emotion","ambition","process","community","chaos","rootedness"];
const DIM_LABELS = {
  loyalty:"Loyalty",emotion:"Emotional intensity",ambition:"Ambition",
  process:"Process thinking",community:"Community drive",chaos:"Chaos tolerance",rootedness:"Rootedness",
};
// Fixed dimension palette: colour = trait identity, independent of club colour.
const DIM_COLORS = {loyalty:"#d4a44e",emotion:"#d6685c",ambition:"#c46c96",process:"#688eb0",community:"#68b096",chaos:"#dc8e46",rootedness:"#9280c6"};
const DIM_CODES  = {loyalty:"LOY",emotion:"EMO",ambition:"AMB",process:"PRO",community:"COM",chaos:"CHA",rootedness:"ROO"};

// Each core answer's contribution to the 7 dims (0-10 space, same scale as teamDims).
const coreDimScoring = {
  "q1": {
    "A": {
      "loyalty": 8.1,
      "emotion": 8.3,
      "ambition": 6.5,
      "process": 3.7,
      "community": 8.3,
      "chaos": 5.3,
      "rootedness": 8.7
    },
    "B": {
      "loyalty": 5.3,
      "emotion": 4.3,
      "ambition": 7.1,
      "process": 7.7,
      "community": 5,
      "chaos": 3.2,
      "rootedness": 5.5
    },
    "C": {
      "loyalty": 6.8,
      "emotion": 7.6,
      "ambition": 5.3,
      "process": 3.4,
      "community": 7.2,
      "chaos": 6.4,
      "rootedness": 8
    },
    "D": {
      "loyalty": 4.1,
      "emotion": 3.9,
      "ambition": 7.4,
      "process": 8.9,
      "community": 4.6,
      "chaos": 3.4,
      "rootedness": 4.8
    },
    "E": {
      "loyalty": 6.1,
      "emotion": 6.1,
      "ambition": 5.5,
      "process": 5,
      "community": 5.9,
      "chaos": 4.9,
      "rootedness": 6.4
    }
  },
  "q2": {
    "left": {
      "loyalty": 6.8,
      "emotion": 7.3,
      "ambition": 8.1,
      "process": 5.6,
      "community": 6.3,
      "chaos": 4.2,
      "rootedness": 6.3
    },
    "right": {
      "loyalty": 7.2,
      "emotion": 7,
      "ambition": 5.3,
      "process": 3.9,
      "community": 6.3,
      "chaos": 5.4,
      "rootedness": 6.7
    }
  },
  "q3": {
    "A": {
      "loyalty": 4.3,
      "emotion": 3.8,
      "ambition": 7.3,
      "process": 8.8,
      "community": 4.3,
      "chaos": 3.1,
      "rootedness": 4.6
    },
    "B": {
      "loyalty": 6,
      "emotion": 5.5,
      "ambition": 5.4,
      "process": 6.2,
      "community": 6.1,
      "chaos": 4.1,
      "rootedness": 7
    },
    "C": {
      "loyalty": 7.5,
      "emotion": 8,
      "ambition": 6.8,
      "process": 3.5,
      "community": 6,
      "chaos": 5.4,
      "rootedness": 5.8
    },
    "D": {
      "loyalty": 5.3,
      "emotion": 6.1,
      "ambition": 6.8,
      "process": 5.5,
      "community": 5.4,
      "chaos": 5,
      "rootedness": 5.6
    },
    "E": {
      "loyalty": 8.8,
      "emotion": 8.8,
      "ambition": 6.5,
      "process": 3.5,
      "community": 8.3,
      "chaos": 5,
      "rootedness": 8.4
    }
  },
  "q4": {
    "1": {
      "loyalty": 4.1,
      "emotion": 4.3,
      "ambition": 7.9,
      "process": 8.6,
      "community": 4,
      "chaos": 3,
      "rootedness": 4.3
    },
    "2": {
      "loyalty": 4.4,
      "emotion": 5.1,
      "ambition": 7.4,
      "process": 8.3,
      "community": 4.6,
      "chaos": 3.3,
      "rootedness": 4.7
    },
    "3": {
      "loyalty": 5.8,
      "emotion": 6,
      "ambition": 5.8,
      "process": 5.4,
      "community": 6.3,
      "chaos": 4.2,
      "rootedness": 6.6
    },
    "4": {
      "loyalty": 7.7,
      "emotion": 8.1,
      "ambition": 7,
      "process": 4,
      "community": 7.7,
      "chaos": 5.1,
      "rootedness": 7.8
    },
    "5": {
      "loyalty": 6.7,
      "emotion": 7.6,
      "ambition": 5.7,
      "process": 3.7,
      "community": 6.3,
      "chaos": 7,
      "rootedness": 7.5
    }
  },
  "q5": {
    "A": {
      "loyalty": 8.1,
      "emotion": 8.6,
      "ambition": 6.6,
      "process": 3.7,
      "community": 8.6,
      "chaos": 5.1,
      "rootedness": 8.9
    },
    "B": {
      "loyalty": 7.5,
      "emotion": 6.4,
      "ambition": 5.3,
      "process": 4.6,
      "community": 6.3,
      "chaos": 4.9,
      "rootedness": 7.2
    },
    "C": {
      "loyalty": 4.3,
      "emotion": 3.4,
      "ambition": 7,
      "process": 8.7,
      "community": 4.3,
      "chaos": 3.3,
      "rootedness": 4.7
    },
    "D": {
      "loyalty": 4.1,
      "emotion": 4.1,
      "ambition": 8.6,
      "process": 8.7,
      "community": 4.3,
      "chaos": 3.1,
      "rootedness": 4.4
    },
    "E": {
      "loyalty": 5.3,
      "emotion": 6.1,
      "ambition": 5.6,
      "process": 5.3,
      "community": 5.6,
      "chaos": 5.1,
      "rootedness": 5.8
    }
  },
  "q6": {
    "left": {
      "loyalty": 7.8,
      "emotion": 8.3,
      "ambition": 7.1,
      "process": 4.1,
      "community": 7.8,
      "chaos": 5,
      "rootedness": 7.9
    },
    "right": {
      "loyalty": 4.9,
      "emotion": 4.9,
      "ambition": 7.1,
      "process": 7.5,
      "community": 4.9,
      "chaos": 4.1,
      "rootedness": 5.4
    }
  },
  "q7": {
    "A": {
      "loyalty": 6.6,
      "emotion": 7,
      "ambition": 8.2,
      "process": 5.4,
      "community": 6.2,
      "chaos": 4.2,
      "rootedness": 6.4
    },
    "B": {
      "loyalty": 8.3,
      "emotion": 8.1,
      "ambition": 5.8,
      "process": 3.4,
      "community": 7.5,
      "chaos": 5.7,
      "rootedness": 7.6
    },
    "C": {
      "loyalty": 7.1,
      "emotion": 6.3,
      "ambition": 5.8,
      "process": 5,
      "community": 6.1,
      "chaos": 4.8,
      "rootedness": 7.1
    },
    "D": {
      "loyalty": 4.2,
      "emotion": 4.4,
      "ambition": 7.3,
      "process": 8.7,
      "community": 4.9,
      "chaos": 3.6,
      "rootedness": 4.9
    },
    "E": {
      "loyalty": 7.9,
      "emotion": 7.1,
      "ambition": 5.9,
      "process": 4.1,
      "community": 6.4,
      "chaos": 5.1,
      "rootedness": 7.4
    }
  },
  "q8": {
    "1": {
      "loyalty": 4.7,
      "emotion": 4.6,
      "ambition": 7.7,
      "process": 7.9,
      "community": 4.3,
      "chaos": 3.2,
      "rootedness": 4.4
    },
    "2": {
      "loyalty": 5,
      "emotion": 6.2,
      "ambition": 6.4,
      "process": 5.9,
      "community": 5,
      "chaos": 5.2,
      "rootedness": 5.2
    },
    "3": {
      "loyalty": 6.6,
      "emotion": 6.6,
      "ambition": 6.3,
      "process": 5.1,
      "community": 6.2,
      "chaos": 4.4,
      "rootedness": 7.2
    },
    "4": {
      "loyalty": 8,
      "emotion": 7.3,
      "ambition": 5.2,
      "process": 3.6,
      "community": 7.5,
      "chaos": 5.5,
      "rootedness": 8.3
    },
    "5": {
      "loyalty": 8.2,
      "emotion": 8.2,
      "ambition": 6.1,
      "process": 3.6,
      "community": 8.4,
      "chaos": 5.5,
      "rootedness": 9.1
    }
  },
  "q9": {
    "A": {
      "loyalty": 8.5,
      "emotion": 7.7,
      "ambition": 5.8,
      "process": 3.9,
      "community": 8,
      "chaos": 4.9,
      "rootedness": 8.7
    },
    "B": {
      "loyalty": 7,
      "emotion": 7.6,
      "ambition": 6.9,
      "process": 4,
      "community": 6.1,
      "chaos": 5.3,
      "rootedness": 6.5
    },
    "C": {
      "loyalty": 5.5,
      "emotion": 6.2,
      "ambition": 7.6,
      "process": 6.7,
      "community": 5.1,
      "chaos": 4.6,
      "rootedness": 5.8
    },
    "D": {
      "loyalty": 5.1,
      "emotion": 6.3,
      "ambition": 6.7,
      "process": 5.4,
      "community": 5.4,
      "chaos": 4.7,
      "rootedness": 4.6
    },
    "E": {
      "loyalty": 7.1,
      "emotion": 7.7,
      "ambition": 5.9,
      "process": 3.7,
      "community": 7.1,
      "chaos": 6.1,
      "rootedness": 6.6
    }
  },
  "q10": {
    "left": {
      "loyalty": 7.6,
      "emotion": 7.8,
      "ambition": 6.6,
      "process": 4,
      "community": 7.9,
      "chaos": 4.6,
      "rootedness": 8.1
    },
    "right": {
      "loyalty": 4.4,
      "emotion": 4.3,
      "ambition": 7.2,
      "process": 8.5,
      "community": 4.5,
      "chaos": 3.4,
      "rootedness": 4.7
    }
  },
  "q11": {
    "A": {
      "loyalty": 8.2,
      "emotion": 7.7,
      "ambition": 6.1,
      "process": 3.8,
      "community": 7.6,
      "chaos": 5.2,
      "rootedness": 7.9
    },
    "B": {
      "loyalty": 7.7,
      "emotion": 7.8,
      "ambition": 6.8,
      "process": 3.7,
      "community": 6,
      "chaos": 5,
      "rootedness": 5.9
    },
    "C": {
      "loyalty": 7.8,
      "emotion": 7.7,
      "ambition": 6.8,
      "process": 3.9,
      "community": 6.8,
      "chaos": 5.1,
      "rootedness": 7.1
    },
    "D": {
      "loyalty": 5,
      "emotion": 5.1,
      "ambition": 6.3,
      "process": 7.4,
      "community": 5.2,
      "chaos": 3.7,
      "rootedness": 5.8
    },
    "E": {
      "loyalty": 5.8,
      "emotion": 6.3,
      "ambition": 7.2,
      "process": 6.2,
      "community": 6.3,
      "chaos": 4.1,
      "rootedness": 6.1
    }
  },
  "q12": {
    "1": {
      "loyalty": 4.3,
      "emotion": 3.8,
      "ambition": 7.3,
      "process": 8.8,
      "community": 4.3,
      "chaos": 3.1,
      "rootedness": 4.6
    },
    "2": {
      "loyalty": 5.7,
      "emotion": 5.1,
      "ambition": 5.3,
      "process": 6.4,
      "community": 5.4,
      "chaos": 3.4,
      "rootedness": 6.6
    },
    "3": {
      "loyalty": 5.5,
      "emotion": 6,
      "ambition": 6.1,
      "process": 5.6,
      "community": 5.5,
      "chaos": 4.8,
      "rootedness": 6
    },
    "4": {
      "loyalty": 8.7,
      "emotion": 8,
      "ambition": 6.1,
      "process": 3.3,
      "community": 7.9,
      "chaos": 4.9,
      "rootedness": 8
    },
    "5": {
      "loyalty": 7.9,
      "emotion": 8.6,
      "ambition": 6.4,
      "process": 3.6,
      "community": 8.5,
      "chaos": 5.4,
      "rootedness": 8.9
    }
  },
  "q13": {
    "A": {
      "loyalty": 5.7,
      "emotion": 6.1,
      "ambition": 9.1,
      "process": 6.4,
      "community": 4.8,
      "chaos": 4,
      "rootedness": 4.8
    },
    "B": {
      "loyalty": 6.1,
      "emotion": 6.4,
      "ambition": 6.7,
      "process": 6.5,
      "community": 6,
      "chaos": 3.9,
      "rootedness": 6.6
    },
    "C": {
      "loyalty": 8,
      "emotion": 8,
      "ambition": 5.6,
      "process": 3.4,
      "community": 7.3,
      "chaos": 5.9,
      "rootedness": 7.8
    },
    "D": {
      "loyalty": 4.4,
      "emotion": 4.3,
      "ambition": 7.8,
      "process": 8.6,
      "community": 4.9,
      "chaos": 3.5,
      "rootedness": 5
    },
    "E": {
      "loyalty": 6.7,
      "emotion": 7,
      "ambition": 8.7,
      "process": 5.7,
      "community": 6,
      "chaos": 4,
      "rootedness": 6.1
    }
  },
  "q14": {
    "left": {
      "loyalty": 7,
      "emotion": 6.7,
      "ambition": 5.2,
      "process": 4.5,
      "community": 6.7,
      "chaos": 5.7,
      "rootedness": 7.3
    },
    "right": {
      "loyalty": 6.5,
      "emotion": 6.9,
      "ambition": 8.2,
      "process": 5.5,
      "community": 5.8,
      "chaos": 4.3,
      "rootedness": 5.9
    }
  },
  "q15": {
    "A": {
      "loyalty": 4,
      "emotion": 3.8,
      "ambition": 7.9,
      "process": 8.9,
      "community": 4,
      "chaos": 3,
      "rootedness": 4.3
    },
    "B": {
      "loyalty": 5.6,
      "emotion": 5.4,
      "ambition": 5.6,
      "process": 6.8,
      "community": 5.6,
      "chaos": 3.6,
      "rootedness": 6.4
    },
    "C": {
      "loyalty": 7.3,
      "emotion": 7,
      "ambition": 6,
      "process": 4.5,
      "community": 7.2,
      "chaos": 4.7,
      "rootedness": 7.5
    },
    "D": {
      "loyalty": 5.1,
      "emotion": 5.4,
      "ambition": 6.4,
      "process": 6.9,
      "community": 5.4,
      "chaos": 5.3,
      "rootedness": 5.6
    },
    "E": {
      "loyalty": 6.5,
      "emotion": 7.7,
      "ambition": 5.7,
      "process": 3.6,
      "community": 6.4,
      "chaos": 7.1,
      "rootedness": 7.6
    }
  },
  "q16": {
    "1": {
      "loyalty": 6,
      "emotion": 6.6,
      "ambition": 9,
      "process": 5.9,
      "community": 5,
      "chaos": 4.2,
      "rootedness": 4.9
    },
    "2": {
      "loyalty": 7.3,
      "emotion": 7.7,
      "ambition": 7.8,
      "process": 5.1,
      "community": 6.5,
      "chaos": 4.1,
      "rootedness": 6.6
    },
    "3": {
      "loyalty": 7.5,
      "emotion": 8.7,
      "ambition": 6.7,
      "process": 3.6,
      "community": 7.7,
      "chaos": 5.7,
      "rootedness": 7.7
    },
    "4": {
      "loyalty": 7.2,
      "emotion": 6.8,
      "ambition": 4.7,
      "process": 3.8,
      "community": 7.1,
      "chaos": 6,
      "rootedness": 7.6
    },
    "5": {
      "loyalty": 5,
      "emotion": 5.1,
      "ambition": 6,
      "process": 7.3,
      "community": 5.1,
      "chaos": 4.3,
      "rootedness": 5.4
    }
  },
  "q17": {
    "A": {
      "loyalty": 7.9,
      "emotion": 8,
      "ambition": 6.6,
      "process": 4,
      "community": 7.4,
      "chaos": 5,
      "rootedness": 7.8
    },
    "B": {
      "loyalty": 4.7,
      "emotion": 4.9,
      "ambition": 6.4,
      "process": 7.8,
      "community": 5,
      "chaos": 3.7,
      "rootedness": 5.4
    },
    "C": {
      "loyalty": 7.9,
      "emotion": 8,
      "ambition": 6.1,
      "process": 3.9,
      "community": 8.4,
      "chaos": 4.9,
      "rootedness": 8.2
    },
    "D": {
      "loyalty": 7.9,
      "emotion": 7.9,
      "ambition": 7.4,
      "process": 4.1,
      "community": 6.5,
      "chaos": 5.1,
      "rootedness": 6.6
    },
    "E": {
      "loyalty": 5.8,
      "emotion": 6,
      "ambition": 9.5,
      "process": 7.2,
      "community": 5.3,
      "chaos": 3,
      "rootedness": 4.8
    }
  },
  "q18": {
    "left": {
      "loyalty": 6.9,
      "emotion": 6.9,
      "ambition": 5.7,
      "process": 4.7,
      "community": 6.5,
      "chaos": 5.3,
      "rootedness": 7.1
    },
    "right": {
      "loyalty": 6.7,
      "emotion": 6.7,
      "ambition": 8.1,
      "process": 5.6,
      "community": 5.8,
      "chaos": 4.1,
      "rootedness": 6.1
    }
  },
  "q19": {
    "A": {
      "loyalty": 8.1,
      "emotion": 8.6,
      "ambition": 6.6,
      "process": 3.7,
      "community": 8.6,
      "chaos": 5.1,
      "rootedness": 8.9
    },
    "B": {
      "loyalty": 7.6,
      "emotion": 6,
      "ambition": 4.7,
      "process": 4.4,
      "community": 6.5,
      "chaos": 4.9,
      "rootedness": 7.9
    },
    "C": {
      "loyalty": 4.7,
      "emotion": 4.9,
      "ambition": 6.6,
      "process": 8,
      "community": 4.9,
      "chaos": 3.7,
      "rootedness": 5.1
    },
    "D": {
      "loyalty": 5,
      "emotion": 5.8,
      "ambition": 8,
      "process": 7.4,
      "community": 4.8,
      "chaos": 3.9,
      "rootedness": 5.2
    },
    "E": {
      "loyalty": 7.6,
      "emotion": 8,
      "ambition": 6.4,
      "process": 3.5,
      "community": 6.1,
      "chaos": 5.4,
      "rootedness": 6
    }
  },
  "q20": {
    "1": {
      "loyalty": 8.1,
      "emotion": 7.2,
      "ambition": 5.2,
      "process": 3.5,
      "community": 7.4,
      "chaos": 5,
      "rootedness": 8.6
    },
    "2": {
      "loyalty": 8,
      "emotion": 8.7,
      "ambition": 7,
      "process": 3.7,
      "community": 9,
      "chaos": 4.7,
      "rootedness": 8.7
    },
    "3": {
      "loyalty": 6.2,
      "emotion": 6.3,
      "ambition": 6.7,
      "process": 6.4,
      "community": 6.1,
      "chaos": 3.9,
      "rootedness": 6.8
    },
    "4": {
      "loyalty": 4.1,
      "emotion": 3.9,
      "ambition": 7.6,
      "process": 8.7,
      "community": 4.1,
      "chaos": 3.1,
      "rootedness": 4.4
    },
    "5": {
      "loyalty": 4.3,
      "emotion": 4.3,
      "ambition": 7.5,
      "process": 8.1,
      "community": 4.3,
      "chaos": 4.1,
      "rootedness": 4.8
    }
  },
  "q21": {
    "A": {
      "loyalty": 8.1,
      "emotion": 8.6,
      "ambition": 6.6,
      "process": 3.7,
      "community": 8.6,
      "chaos": 5.1,
      "rootedness": 8.9
    },
    "B": {
      "loyalty": 8.2,
      "emotion": 7.5,
      "ambition": 5.8,
      "process": 3.6,
      "community": 6.5,
      "chaos": 5.6,
      "rootedness": 7
    },
    "C": {
      "loyalty": 7.7,
      "emotion": 7.6,
      "ambition": 6.6,
      "process": 3.6,
      "community": 6.3,
      "chaos": 5,
      "rootedness": 6.3
    },
    "D": {
      "loyalty": 5.8,
      "emotion": 6.8,
      "ambition": 6.4,
      "process": 5.4,
      "community": 5.9,
      "chaos": 5.3,
      "rootedness": 6
    },
    "E": {
      "loyalty": 4.6,
      "emotion": 3.7,
      "ambition": 7.3,
      "process": 8.4,
      "community": 4.6,
      "chaos": 3.1,
      "rootedness": 5
    }
  },
  "q22": {
    "left": {
      "loyalty": 6.3,
      "emotion": 5.6,
      "ambition": 6.1,
      "process": 6.1,
      "community": 5.3,
      "chaos": 4.1,
      "rootedness": 6.3
    },
    "right": {
      "loyalty": 7.5,
      "emotion": 8.1,
      "ambition": 5.9,
      "process": 3.6,
      "community": 7.3,
      "chaos": 6,
      "rootedness": 7.8
    }
  },
  "q23": {
    "A": {
      "loyalty": 4.3,
      "emotion": 4.3,
      "ambition": 7.3,
      "process": 8.5,
      "community": 4.5,
      "chaos": 3.4,
      "rootedness": 4.7
    },
    "B": {
      "loyalty": 8.1,
      "emotion": 8.1,
      "ambition": 5.8,
      "process": 3,
      "community": 6.4,
      "chaos": 6,
      "rootedness": 6.6
    },
    "C": {
      "loyalty": 7.9,
      "emotion": 8.2,
      "ambition": 6.3,
      "process": 3.8,
      "community": 8.6,
      "chaos": 4.8,
      "rootedness": 8
    },
    "D": {
      "loyalty": 4.6,
      "emotion": 5.4,
      "ambition": 9,
      "process": 7.4,
      "community": 4.2,
      "chaos": 3.2,
      "rootedness": 3.8
    },
    "E": {
      "loyalty": 6.5,
      "emotion": 7.4,
      "ambition": 6.4,
      "process": 4.4,
      "community": 5.9,
      "chaos": 6,
      "rootedness": 6.4
    }
  },
  "q24": {
    "1": {
      "loyalty": 4.1,
      "emotion": 3.9,
      "ambition": 7.4,
      "process": 8.9,
      "community": 4.6,
      "chaos": 3.4,
      "rootedness": 4.8
    },
    "2": {
      "loyalty": 5,
      "emotion": 5.8,
      "ambition": 6.3,
      "process": 6.5,
      "community": 4.8,
      "chaos": 4.5,
      "rootedness": 5.8
    },
    "3": {
      "loyalty": 6.3,
      "emotion": 6.6,
      "ambition": 6.3,
      "process": 5.2,
      "community": 6.3,
      "chaos": 5,
      "rootedness": 6.5
    },
    "4": {
      "loyalty": 8.1,
      "emotion": 8.4,
      "ambition": 6.2,
      "process": 3.6,
      "community": 7.6,
      "chaos": 5.7,
      "rootedness": 7.7
    },
    "5": {
      "loyalty": 8.5,
      "emotion": 8.4,
      "ambition": 6.3,
      "process": 3.3,
      "community": 6.9,
      "chaos": 5.5,
      "rootedness": 7
    }
  }
};

export { coreQuestions, coreDimScoring, DIM_ORDER, DIM_LABELS, DIM_COLORS, DIM_CODES };
