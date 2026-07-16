// FanDNA - CORE (sport-agnostic personality layer). Phase 2 - v2 GENOME (one-trait key).
// The SHARED layer: 24 personality questions and the 7 dimensions, identical for every sport.
//
// coreQuestions  : the 24 personality questions.
// coreDimScoring : each ANSWER carries a single value (0-10) on the ONE trait its question
//                  measures. scoreCore averages each trait over only its own questions, so a
//                  question can no longer smear across dimensions it does not ask about.
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
        "label": "A few familiar faces, low-key and undemanding.",
        "value": "D"
      },
      {
        "label": "Solo. That's when I recharge.",
        "value": "E"
      }
    ]
  },
  {
    "id": "q6",
    "type": "binary",
    "phase": "Who are you?",
    "question": "A day with no plan, everything changing around you:",
    "left": "Drains me. I need structure to function.",
    "right": "Energises me. I'm at my best improvising."
  },
  {
    "id": "q7",
    "type": "choice",
    "phase": "Where do you belong?",
    "question": "When you commit to something, how easily do you walk away?",
    "options": [
      {
        "label": "Almost never. I stay long past when I should.",
        "value": "A"
      },
      {
        "label": "Leaving feels like failing someone.",
        "value": "B"
      },
      {
        "label": "I'll stay through a lot, but I have a line.",
        "value": "C"
      },
      {
        "label": "If it stops working, I move on cleanly.",
        "value": "D"
      },
      {
        "label": "Easily. I don't get attached to things.",
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
    "A": { "emotion": 9 },
    "B": { "emotion": 4 },
    "C": { "emotion": 8 },
    "D": { "emotion": 1 },
    "E": { "emotion": 5 }
  },
  "q2": {
    "left": { "ambition": 9 },
    "right": { "ambition": 2 }
  },
  "q3": {
    "A": { "emotion": 3 },
    "B": { "emotion": 4 },
    "C": { "emotion": 8 },
    "D": { "emotion": 1 },
    "E": { "emotion": 9 }
  },
  "q4": {
    "1": { "chaos": 1 },
    "2": { "chaos": 3 },
    "3": { "chaos": 5 },
    "4": { "chaos": 7 },
    "5": { "chaos": 10 }
  },
  "q5": {
    "A": { "community": 10 },
    "B": { "community": 7 },
    "C": { "community": 2 },
    "D": { "community": 4 },
    "E": { "community": 1 }
  },
  "q6": {
    "left": { "chaos": 1 },
    "right": { "chaos": 10 }
  },
  "q7": {
    "A": { "loyalty": 10 },
    "B": { "loyalty": 8 },
    "C": { "loyalty": 6 },
    "D": { "loyalty": 3 },
    "E": { "loyalty": 1 }
  },
  "q8": {
    "1": { "rootedness": 1 },
    "2": { "rootedness": 3 },
    "3": { "rootedness": 5 },
    "4": { "rootedness": 8 },
    "5": { "rootedness": 10 }
  },
  "q9": {
    "A": { "loyalty": 10 },
    "B": { "loyalty": 8 },
    "C": { "loyalty": 6 },
    "D": { "loyalty": 2 },
    "E": { "loyalty": 7 }
  },
  "q10": {
    "left": { "community": 9 },
    "right": { "community": 2 }
  },
  "q11": {
    "A": { "rootedness": 8 },
    "B": { "rootedness": 9 },
    "C": { "rootedness": 7 },
    "D": { "rootedness": 3 },
    "E": { "rootedness": 2 }
  },
  "q12": {
    "1": { "emotion": 1 },
    "2": { "emotion": 3 },
    "3": { "emotion": 5 },
    "4": { "emotion": 8 },
    "5": { "emotion": 10 }
  },
  "q13": {
    "A": { "ambition": 10 },
    "B": { "ambition": 6 },
    "C": { "ambition": 7 },
    "D": { "ambition": 7 },
    "E": { "ambition": 8 }
  },
  "q14": {
    "left": { "rootedness": 9 },
    "right": { "rootedness": 3 }
  },
  "q15": {
    "A": { "chaos": 0 },
    "B": { "chaos": 2 },
    "C": { "chaos": 5 },
    "D": { "chaos": 8 },
    "E": { "chaos": 10 }
  },
  "q16": {
    "1": { "ambition": 10 },
    "2": { "ambition": 8 },
    "3": { "ambition": 5 },
    "4": { "ambition": 3 },
    "5": { "ambition": 1 }
  },
  "q17": {
    "A": { "process": 3 },
    "B": { "process": 10 },
    "C": { "process": 2 },
    "D": { "process": 5 },
    "E": { "process": 2 }
  },
  "q18": {
    "left": { "process": 9 },
    "right": { "process": 2 }
  },
  "q19": {
    "A": { "emotion": 9 },
    "B": { "emotion": 6 },
    "C": { "emotion": 3 },
    "D": { "emotion": 4 },
    "E": { "emotion": 4 }
  },
  "q20": {
    "1": { "process": 1 },
    "2": { "process": 3 },
    "3": { "process": 5 },
    "4": { "process": 8 },
    "5": { "process": 10 }
  },
  "q21": {
    "A": { "emotion": 9 },
    "B": { "emotion": 10 },
    "C": { "emotion": 7 },
    "D": { "emotion": 4 },
    "E": { "emotion": 2 }
  },
  "q22": {
    "left": { "community": 2 },
    "right": { "community": 9 }
  },
  "q23": {
    "A": { "ambition": 9 },
    "B": { "ambition": 5 },
    "C": { "ambition": 4 },
    "D": { "ambition": 10 },
    "E": { "ambition": 4 }
  },
  "q24": {
    "1": { "loyalty": 1 },
    "2": { "loyalty": 3 },
    "3": { "loyalty": 5 },
    "4": { "loyalty": 8 },
    "5": { "loyalty": 10 }
  }
};

export { coreQuestions, coreDimScoring, DIM_ORDER, DIM_LABELS, DIM_COLORS, DIM_CODES };
