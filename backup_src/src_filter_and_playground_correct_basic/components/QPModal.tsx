import { useState } from "react";
import type { QuestionConfig } from "../types";

interface Props {
  onClose: () => void;
  onStart: (config: QuestionConfig) => void;
}

const TYPE_SUBJECT_MAP: Record<string, string[]> = {
  JEE: ["Physics", "Chemistry", "Mathematics"],
  NEET: ["Physics", "Chemistry", "Biology"],
  BOARDS: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
};

export default function QPModal({ onClose, onStart }: Props) {
  const [type, setType] = useState("JEE");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const subjects = TYPE_SUBJECT_MAP[type];

  const toggleSubject = (sub: string) => {
    setSelectedSubjects(prev =>
      prev.includes(sub)
        ? prev.filter(s => s !== sub)
        : [...prev, sub]
    );
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.4)" }}
    >
      <div
        className="w-full max-w-md rounded-2xl"
        style={{
          background: "var(--white)",
          boxShadow: "var(--shadow-md)",
          padding: "24px",
        }}
      >
        {/* Header */}
        <div className="flex justify-between mb-4">
          <h2 className="font-bold">Generate Paper</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* TYPE */}
        <label className="block mb-1">Type</label>
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setSelectedSubjects([]);
          }}
          className="w-full mb-4 border rounded p-2"
        >
          <option value="JEE">JEE</option>
          <option value="NEET">NEET</option>
          <option value="BOARDS">Boards</option>
        </select>

        {/* SUBJECTS */}
        <label className="block mb-2">Subjects</label>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {subjects.map((sub) => (
            <div
              key={sub}
              onClick={() => toggleSubject(sub)}
              className="border rounded p-2 cursor-pointer flex gap-2"
              style={{
                background: selectedSubjects.includes(sub)
                  ? "var(--indigo-light)"
                  : "",
              }}
            >
              <input
                type="checkbox"
                checked={selectedSubjects.includes(sub)}
                readOnly
              />
              {sub}
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button
          disabled={selectedSubjects.length === 0}
          onClick={() =>
            onStart({
              type,
              subjects: selectedSubjects,
            })
          }
          className="w-full bg-indigo-600 text-white p-2 rounded"
        >
          Generate
        </button>
      </div>
    </div>
  );
}