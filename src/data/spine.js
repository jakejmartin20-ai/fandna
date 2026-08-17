// FanDNA — the shared cross-sport SPINE (Option B).
//
// The 7 canonical archetype questions, asked ONCE and answered ONCE (stored as spineAnswers
// S1..S7), then scored per-league via each league's spineScoring table. Copy is LOCKED
// (fandna-shared-spine-craft.md, s40): register (de-sported, first person), grip, universal
// voice, no proper nouns / years / team-tells, no generic "you" in options, no object-you stems.
//
// Shape mirrors a league's moduleQuestions so the same ChoiceQ / SliderQ render it with no new
// UI. Ids S1..S7 are collision-free with core ids, PL's q*, and every <sport>_q*.
// The `phase` here groups the spine as one chapter ("Instincts") in the quiz progress bar; it
// is folded into the genome ("Your core") colouring in App.jsx. The SCORING phase each spine slot
// occupies per league (for the final-phase tie-break) is separate, set by each league's spinePhase.

export const spineQuestions = [
  {
    id: "S1", type: "choice", phase: "Instincts",
    question: "Something you've given years to lets you down, in a way that feels like a betrayal. You:",
    options: [
      { value: "A", label: "Stay. What I'm loyal to was never up for negotiation." },
      { value: "B", label: "Move on. I'm loyal, but not at any cost." },
      { value: "C", label: "Refuse to accept it. I push until it's put right." },
      { value: "D", label: "Follow the people I trust, wherever they go." },
    ],
  },
  {
    id: "S2", type: "choice", phase: "Instincts",
    question: "It all comes down to one moment. Inside, what happens:",
    options: [
      { value: "A", label: "It all pours out. Everyone around me feels it." },
      { value: "B", label: "I go cold and still. Nothing shows." },
      { value: "C", label: "I sharpen up and lock in, precise and clear." },
      { value: "D", label: "I loosen up and get freer the bigger it gets." },
    ],
  },
  {
    id: "S3", type: "slider", phase: "Instincts",
    question: "How much does winning it all actually matter to you:",
    left: "Everything. Nothing short of the very top will do.",
    right: "It was never about trophies. The love of it is enough.",
  },
  {
    id: "S4", type: "slider", phase: "Instincts",
    question: "Where you feel most like yourself:",
    left: "The place that made me. Deep roots, and I never went looking.",
    right: "Wherever it's happening next. Home is where I decide it is.",
  },
  {
    id: "S5", type: "choice", phase: "Instincts",
    question: "When something wins big, what really carried it:",
    options: [
      { value: "A", label: "One standout, good enough to lift everyone." },
      { value: "B", label: "The whole group in step, nobody bigger than it." },
      { value: "C", label: "The method. Get every step right and winning follows." },
      { value: "D", label: "Raw ability. Some simply have more of it." },
    ],
  },
  {
    id: "S6", type: "choice", phase: "Instincts",
    question: "If it were up to you, the way to the top:",
    options: [
      { value: "A", label: "Tear it down and build new. No half measures." },
      { value: "B", label: "A patient plan, built to last." },
      { value: "C", label: "Everything, now. Win while the window is open." },
      { value: "D", label: "Proven names and a steady hand. Trust what has worked." },
    ],
  },
  {
    id: "S7", type: "choice", phase: "Instincts",
    question: "Going in, the position that suits you:",
    options: [
      { value: "A", label: "The favourite, expected to win, everything to lose." },
      { value: "B", label: "The underdog with something to prove." },
      { value: "C", label: "Just glad to be in it, with my people around me." },
      { value: "D", label: "Somewhere new and unwritten, where I get to shape it." },
    ],
  },
];

// Canonical order + types, for engines/migration to read without parsing the array.
export const SPINE_IDS = ["S1","S2","S3","S4","S5","S6","S7"];
export const SPINE_TYPE = { S1:"choice", S2:"choice", S3:"slider", S4:"slider", S5:"choice", S6:"choice", S7:"choice" };
