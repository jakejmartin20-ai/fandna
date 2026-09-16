// FanDNA - IPL data (s83 code-split A': engine + light display half, eager).
// Heavy result-stage prose lives in ipl-display.js, lazy-loaded and merged via loadSportDisplay().
// Values are byte-for-byte the pre-split data (verified by the canonical replay).

const archetypes = {
  "CSK": "Whistle Podu",
  "MI": "One Family",
  "RCB": "Ee Sala Cup Namde",
  "KKR": "Korbo Lorbo Jeetbo",
  "DC": "Yeh Hai Nayi Dilli",
  "SRH": "Orange Army",
  "RR": "Halla Bol",
  "PBKS": "Saadda Punjab",
  "GT": "Aavaa De",
  "LSG": "Ab Apni Baari"
};

const moduleQuestions = [
  {
    "id": "ipl_q1",
    "type": "slider",
    "phase": "The fine print",
    "question": "When you take a chance on someone, which way do you lean?",
    "left": "The numbers. A record doesn't lie, and a hunch is just a story you tell yourself.",
    "right": "My gut. You can measure someone to the last detail and still miss what they're made of."
  },
  {
    "id": "ipl_q2",
    "type": "binary",
    "phase": "The fine print",
    "question": "How did the people you're proudest of get there?",
    "left": "They started rough and grew into it. Nothing beats watching someone become who they were meant to be.",
    "right": "They had it from the start. I'll take someone already proven over a promising maybe."
  },
  {
    "id": "ipl_q3",
    "type": "binary",
    "phase": "The fine print",
    "question": "Some people want to be seen. Others keep their head down. Which is you?",
    "left": "I like to be seen. If I've done something good, I'd rather it was out loud than hidden.",
    "right": "I keep my head down. I let the work speak and skip the noise."
  },
  {
    "id": "ipl_q4",
    "type": "choice",
    "phase": "The fine print",
    "question": "In the places you're part of, where does the energy come from?",
    "options": [
      {
        "label": "One strong person at the top. Their mood sets the tone, and I like it that way.",
        "value": "A"
      },
      {
        "label": "The way the whole thing is built. The good ones run themselves, no big personality needed.",
        "value": "B"
      },
      {
        "label": "The people in it. The crowd, the family around it, that's what carries the place.",
        "value": "C"
      }
    ]
  }
];

const scoring = {
  "ipl_q1": {
    "1": {
      "KKR": 3,
      "RR": 3,
      "GT": 2,
      "MI": 2
    },
    "2": {
      "KKR": 2,
      "RR": 2,
      "GT": 2,
      "MI": 2,
      "DC": 1
    },
    "3": {
      "DC": 1,
      "SRH": 1
    },
    "4": {
      "RCB": 2,
      "CSK": 2,
      "PBKS": 2,
      "LSG": 2,
      "SRH": 1
    },
    "5": {
      "RCB": 2,
      "CSK": 3,
      "PBKS": 2,
      "LSG": 2
    }
  },
  "ipl_q2": {
    "left": {
      "MI": 2,
      "RR": 2,
      "DC": 2,
      "GT": 2
    },
    "right": {
      "LSG": 2,
      "RCB": 2,
      "PBKS": 2
    }
  },
  "ipl_q3": {
    "left": {
      "RCB": 2,
      "KKR": 2,
      "PBKS": 2
    },
    "right": {
      "SRH": 2,
      "GT": 2,
      "RR": 2,
      "MI": 2
    }
  },
  "ipl_q4": {
    "A": {
      "LSG": 2,
      "PBKS": 2,
      "SRH": 2
    },
    "B": {
      "MI": 2,
      "GT": 2,
      "KKR": 2
    },
    "C": {
      "CSK": 2
    }
  }
};

const teamDims = {
  "CSK": {
    "loyalty": 9,
    "emotion": 6,
    "ambition": 7,
    "process": 7,
    "community": 9,
    "chaos": 2,
    "rootedness": 9
  },
  "MI": {
    "loyalty": 6,
    "emotion": 4,
    "ambition": 9,
    "process": 9,
    "community": 5,
    "chaos": 3,
    "rootedness": 7
  },
  "RCB": {
    "loyalty": 9,
    "emotion": 9,
    "ambition": 8,
    "process": 3,
    "community": 7,
    "chaos": 7,
    "rootedness": 7
  },
  "KKR": {
    "loyalty": 5,
    "emotion": 7,
    "ambition": 8,
    "process": 9,
    "community": 7,
    "chaos": 3,
    "rootedness": 6
  },
  "DC": {
    "loyalty": 5,
    "emotion": 5,
    "ambition": 7,
    "process": 6,
    "community": 4,
    "chaos": 6,
    "rootedness": 5
  },
  "SRH": {
    "loyalty": 5,
    "emotion": 8,
    "ambition": 6,
    "process": 7,
    "community": 5,
    "chaos": 4,
    "rootedness": 5
  },
  "RR": {
    "loyalty": 5,
    "emotion": 6,
    "ambition": 7,
    "process": 9,
    "community": 5,
    "chaos": 8,
    "rootedness": 5
  },
  "PBKS": {
    "loyalty": 3,
    "emotion": 8,
    "ambition": 7,
    "process": 2,
    "community": 5,
    "chaos": 9,
    "rootedness": 4
  },
  "GT": {
    "loyalty": 7,
    "emotion": 4,
    "ambition": 8,
    "process": 9,
    "community": 4,
    "chaos": 2,
    "rootedness": 4
  },
  "LSG": {
    "loyalty": 3,
    "emotion": 7,
    "ambition": 9,
    "process": 4,
    "community": 3,
    "chaos": 8,
    "rootedness": 2
  }
};

const teamTextColors = {
  "CSK": "#FDD87A",
  "MI": "#7FA8D8",
  "RCB": "#EB8C93",
  "KKR": "#B79AD6",
  "DC": "#7F9BD8",
  "SRH": "#F6A375",
  "RR": "#F27CBB",
  "PBKS": "#E88C90",
  "GT": "#9AA0B4",
  "LSG": "#6FCFD6"
};

const teams = {
  "CSK": {
    "name": "Chennai Super Kings",
    "emoji": "👑",
    "color": "#FDB913",
    "code3": "CSK",
    "kitType": "duo",
    "secondaryColor": "#1A3A8B"
  },
  "MI": {
    "name": "Mumbai Indians",
    "emoji": "💙",
    "color": "#004B8D",
    "code3": "MI",
    "kitType": "duo",
    "secondaryColor": "#D1AB3E"
  },
  "RCB": {
    "name": "Royal Challengers Bengaluru",
    "emoji": "🦁",
    "color": "#D5152C",
    "code3": "RCB",
    "kitType": "duo",
    "secondaryColor": "#C5A028"
  },
  "KKR": {
    "name": "Kolkata Knight Riders",
    "emoji": "💜",
    "color": "#3A225D",
    "code3": "KKR",
    "kitType": "duo",
    "secondaryColor": "#B3A123"
  },
  "DC": {
    "name": "Delhi Capitals",
    "emoji": "🔷",
    "color": "#17449B",
    "code3": "DC",
    "kitType": "duo",
    "secondaryColor": "#EF1B23"
  },
  "SRH": {
    "name": "Sunrisers Hyderabad",
    "emoji": "☀️",
    "color": "#F26522",
    "code3": "SRH",
    "kitType": "duo",
    "secondaryColor": "#000000"
  },
  "RR": {
    "name": "Rajasthan Royals",
    "emoji": "💗",
    "color": "#EA1A85",
    "code3": "RR",
    "kitType": "duo",
    "secondaryColor": "#21418A"
  },
  "PBKS": {
    "name": "Punjab Kings",
    "emoji": "❤️",
    "color": "#D71920",
    "code3": "PBKS",
    "kitType": "duo",
    "secondaryColor": "#A7A9AC"
  },
  "GT": {
    "name": "Gujarat Titans",
    "emoji": "⚡",
    "color": "#1B2133",
    "code3": "GT",
    "kitType": "duo",
    "secondaryColor": "#B4975A"
  },
  "LSG": {
    "name": "Lucknow Super Giants",
    "emoji": "💚",
    "color": "#0E9DA6",
    "code3": "LSG",
    "kitType": "duo",
    "secondaryColor": "#14213D"
  }
};

export { archetypes, moduleQuestions, scoring, teamDims, teamTextColors, teams };
