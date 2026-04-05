import { useState } from "react";
import { SUBJECTS, TOPICS } from "../data";
import type { QuestionConfig } from "../types";

interface QPModalProps {
  onClose: () => void;
  onStart: (config: QuestionConfig) => void;
}

export default function QPModal({ onClose, onStart }: QPModalProps) {
  const [subject, setSubject] = useState("Physics");
  const [topic,   setTopic]   = useState("Mechanics");
  const [type,    setType]    = useState("MCQ");
  const [count,   setCount]   = useState("5");

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[300] p-5 animate-fade-in"
      style={{ background: "rgba(15,15,30,0.55)", backdropFilter: "blur(5px)" }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[480px] p-8 relative animate-slide-up"
        style={{ border: "1.5px solid var(--border)", boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-sm cursor-pointer transition-all duration-150"
          style={{
            background: "#f3f4f6",
            border: "1px solid var(--border)",
            color: "var(--text-mid)",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#e5e7eb";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--navy)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#f3f4f6";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--text-mid)";
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-7">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
            style={{ background: "var(--indigo-light)" }}
          >
            📄
          </div>
          <div>
            <div className="text-xl font-black" style={{ color: "var(--navy)" }}>
              Generate Question Paper
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              Configure your test parameters
            </div>
          </div>
        </div>

        {/* Subject */}
        <FormGroup label="Subject">
          <Select value={subject} onChange={setSubject} options={SUBJECTS} />
        </FormGroup>

        {/* Topic */}
        <FormGroup label="Topic">
          <Select value={topic} onChange={setTopic} options={TOPICS} />
        </FormGroup>

        {/* Type */}
        <FormGroup label="Question Type">
          <div className="flex gap-2.5">
            {["MCQ", "Subjective"].map(t => (
              <button
                key={t}
                className="flex-1 py-2.5 rounded-lg font-bold text-sm cursor-pointer transition-all duration-200"
                style={{
                  border: `1.5px solid ${type === t ? "var(--indigo)" : "var(--border)"}`,
                  background: type === t ? "var(--indigo-light)" : "#f9fafb",
                  color: type === t ? "var(--indigo)" : "var(--text-mid)",
                  fontFamily: "'Inter', sans-serif",
                }}
                onClick={() => setType(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </FormGroup>

        {/* Count */}
        <FormGroup label="Number of Questions">
          <Select value={count} onChange={setCount} options={[5, 10, 15, 20, 25, 30].map(String)} />
        </FormGroup>

        {/* Actions */}
        <div className="flex gap-2.5 mt-7">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-200"
            style={{
              background: "#f3f4f6",
              border: "1.5px solid var(--border)",
              color: "var(--text-mid)",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#e5e7eb";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--navy)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "#f3f4f6";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-mid)";
            }}
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 rounded-xl text-white font-bold text-sm cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 border-none"
            style={{ background: "var(--indigo)", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--indigo-dark)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--indigo)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
            onClick={() => onStart({ subject, topic, type, count })}
          >
            🚀 Start Test
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Helpers ── */
function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-[18px]">
      <label
        className="block text-xs font-bold uppercase tracking-wide mb-1.5"
        style={{ color: "var(--text-mid)", letterSpacing: "0.6px" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full px-3.5 py-[11px] rounded-[9px] text-sm outline-none appearance-none transition-colors duration-200"
      style={{
        background: "#f9fafb",
        border: "1.5px solid var(--border)",
        color: "var(--navy)",
        fontFamily: "'Inter', sans-serif",
      }}
      onFocus={e => {
        e.currentTarget.style.borderColor = "var(--indigo)";
        e.currentTarget.style.background = "#fff";
      }}
      onBlur={e => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "#f9fafb";
      }}
    >
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  );
}
