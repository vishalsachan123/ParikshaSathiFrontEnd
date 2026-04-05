import type { Question, SearchResult, Paper } from "../types";

export const QUESTIONS: Question[] = [
  { text: "A body thrown vertically upward with velocity u reaches maximum height:", options: ["u/g", "u²/2g", "u²/g", "2u/g"], correct: 1 },
  { text: "Work done in moving charge Q through potential difference V is:", options: ["Q/V", "V/Q", "QV", "Q²V"], correct: 2 },
  { text: "Which of the following is NOT a scalar quantity?", options: ["Mass", "Temperature", "Velocity", "Energy"], correct: 2 },
  { text: "The SI unit of electric charge is:", options: ["Ampere", "Coulomb", "Volt", "Watt"], correct: 1 },
  { text: "Newton's second law: force equals:", options: ["Mass×Distance", "Mass×Velocity", "Mass×Acceleration", "Mass×Speed"], correct: 2 },
];

export const SEARCH_DATA: SearchResult[] = [
  { id: 1, name: "Physics – Mechanics & Motion",  meta: "Class 11 · 45 Questions", icon: "⚛️" },
  { id: 2, name: "Chemistry – Organic Reactions", meta: "Class 12 · 38 Questions", icon: "🧪" },
  { id: 3, name: "Mathematics – Calculus",        meta: "Class 12 · 52 Questions", icon: "📐" },
  { id: 4, name: "Biology – Cell Structure",      meta: "Class 11 · 30 Questions", icon: "🔬" },
  { id: 5, name: "Physics – Electrostatics",      meta: "Class 12 · 40 Questions", icon: "⚡" },
];

export const SUBJECTS = ["Physics", "Chemistry", "Mathematics", "Biology"];
export const TOPICS   = ["Mechanics", "Thermodynamics", "Electrostatics", "Optics", "Modern Physics"];
export const CHIPS    = ["Physics", "Chemistry", "Maths", "Biology", "All Subjects"];

export const PAPERS: Paper[] = [
  { id: 1, title: "Physics Class 12 — Board 2024",  icon: "⚛️", tags: ["Board", "12th"] },
  { id: 2, title: "JEE Mains Jan 2025 — Paper 1",  icon: "📐", tags: ["JEE", "Mains"]  },
  { id: 3, title: "NEET 2024 — Biology Section",    icon: "🔬", tags: ["NEET", "Bio"]   },
  { id: 4, title: "Chemistry Class 11 — Midterm",  icon: "🧪", tags: ["School", "11th"] },
];

export const STATS = [
  { ico: "🔴", val: "Daily Live",   sub: "Interactive classes" },
  { ico: "📝", val: "10 Million +", sub: "Tests, sample papers & notes" },
  { ico: "🧠", val: "24 × 7",       sub: "Doubt solving sessions" },
  { ico: "🏆", val: "100 +",        sub: "Offline centres" },
];
