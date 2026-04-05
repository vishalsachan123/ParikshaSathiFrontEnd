import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QUESTIONS } from "../data";
import type { QuestionConfig } from "../types";

interface QuestionPlaygroundProps {
  config: QuestionConfig;
}

export default function QuestionPlayground({ config }: QuestionPlaygroundProps) {
  const navigate = useNavigate();
  const [cur,  setCur]  = useState(0);
  const [ans,  setAns]  = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);
  const [secs, setSecs] = useState(0);

  // Timer
  useState(() => {
    const id = setInterval(() => setSecs(s => s + 1), 1000);
    return () => clearInterval(id);
  });

  const q     = QUESTIONS[cur];
  const total = QUESTIONS.length;
  const filled = Object.keys(ans).length;
  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  const score = QUESTIONS.filter((q, i) => ans[i] === q.correct).length;

  function optClass(i: number) {
    if (!done) return ans[cur] === i ? "sel" : "";
    if (i === q.correct) return "ok";
    if (ans[cur] === i) return "no";
    return "";
  }

  const optStyles: Record<string, React.CSSProperties> = {
    "":    { background: "#f9fafb", border: "1.5px solid var(--border)", color: "var(--navy)" },
    sel:   { background: "var(--indigo-light)", border: "1.5px solid var(--indigo)", color: "var(--indigo)", fontWeight: 700 },
    ok:    { background: "#d1fae5", border: "1.5px solid #10b981", color: "#065f46", fontWeight: 700 },
    no:    { background: "#fee2e2", border: "1.5px solid #ef4444", color: "#991b1b", fontWeight: 700 },
  };

  const optLblStyles: Record<string, React.CSSProperties> = {
    "":    { background: "#e5e7eb", color: "var(--navy)" },
    sel:   { background: "var(--indigo)", color: "#fff" },
    ok:    { background: "#10b981", color: "#fff" },
    no:    { background: "#ef4444", color: "#fff" },
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Top bar */}
      <div
        className="bg-white px-8 py-3.5 flex items-center justify-between gap-3.5"
        style={{ borderBottom: "1.5px solid var(--border)" }}
      >
        <BackBtn label="← Exit Test" onClick={() => navigate("/")} />
        <div className="text-[13px]" style={{ color: "var(--text-mid)" }}>
          <strong style={{ color: "var(--navy)" }}>{config.subject}</strong> · {config.type} · {total} Qs
        </div>
        <div
          className="font-extrabold text-[15px] px-4 py-1.5 rounded-lg font-mono"
          style={{ background: "#fff7ed", border: "1.5px solid #fed7aa", color: "#ea580c" }}
        >
          ⏱ {m}:{s}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 max-w-[1060px] mx-auto px-6 py-7"
        style={{ gridTemplateColumns: "1fr 270px" }}>

        {/* Question card */}
        <div
          className="bg-white rounded-2xl p-[30px]"
          style={{ border: "1.5px solid var(--border)", boxShadow: "var(--shadow)" }}
        >
          {done ? (
            /* Score screen */
            <div className="text-center py-6">
              <div
                className="w-[110px] h-[110px] rounded-full flex flex-col items-center justify-center mx-auto mb-[18px]"
                style={{ border: "6px solid var(--indigo)", background: "var(--indigo-light)" }}
              >
                <div className="text-[34px] font-black leading-none" style={{ color: "var(--indigo)" }}>{score}</div>
                <div className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>/ {total}</div>
              </div>
              <div className="font-extrabold text-base mb-1.5" style={{ color: "var(--navy)" }}>
                {score >= 4 ? "🎉 Excellent!" : score >= 2 ? "👍 Good effort!" : "📚 Keep practising!"}
              </div>
              <div className="text-[13px]" style={{ color: "var(--text-muted)" }}>
                {score * 4} / {total * 4} marks
              </div>
              <button
                className="mt-6 w-full py-3 rounded-xl text-white font-bold text-sm border-none cursor-pointer transition-all duration-200"
                style={{ background: "var(--indigo)", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--indigo-dark)")}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--indigo)")}
                onClick={() => navigate("/")}
              >
                ← Back to Home
              </button>
            </div>
          ) : (
            <>
              <div
                className="text-[11px] font-extrabold uppercase tracking-[1px] mb-3.5"
                style={{ color: "var(--indigo)" }}
              >
                Question {cur + 1} of {total}
              </div>
              <div
                className="text-base leading-[1.7] mb-[26px] font-semibold"
                style={{ color: "var(--navy)" }}
              >
                {q.text}
              </div>

              {config.type === "MCQ" ? (
                <div className="flex flex-col gap-2.5">
                  {q.options.map((opt, i) => {
                    const cls = optClass(i);
                    return (
                      <button
                        key={i}
                        className="opt w-full px-[18px] py-[13px] rounded-[10px] text-sm font-medium text-left flex items-center gap-3 cursor-pointer transition-all duration-200"
                        style={{ ...optStyles[cls], fontFamily: "'Inter', sans-serif" }}
                        onClick={() => !done && setAns(p => ({ ...p, [cur]: i }))}
                      >
                        <span
                          className="w-7 h-7 rounded-[7px] flex items-center justify-center text-xs font-extrabold flex-shrink-0"
                          style={optLblStyles[cls]}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <textarea
                  placeholder="Write your answer here..."
                  className="w-full min-h-[140px] p-3.5 rounded-[10px] text-sm outline-none resize-y leading-[1.6]"
                  style={{
                    background: "#f9fafb",
                    border: "1.5px solid var(--border)",
                    fontFamily: "'Inter', sans-serif",
                    color: "var(--navy)",
                  }}
                />
              )}

              <div className="flex justify-between gap-2.5 mt-6">
                <NavBtn disabled={cur === 0} onClick={() => setCur(c => c - 1)}>← Prev</NavBtn>
                <div className="flex gap-2">
                  {cur < total - 1 && (
                    <NavBtn onClick={() => setCur(c => c + 1)}>Next →</NavBtn>
                  )}
                  {(cur === total - 1 || filled === total) && (
                    <button
                      className="px-6 py-2.5 rounded-[9px] text-white font-bold text-[13px] border-none cursor-pointer transition-all duration-150"
                      style={{ background: "var(--indigo)", fontFamily: "'Inter', sans-serif" }}
                      onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--indigo-dark)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--indigo)")}
                      onClick={() => setDone(true)}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div>
          {/* Palette */}
          <div
            className="bg-white rounded-[14px] p-5 mb-4"
            style={{ border: "1.5px solid var(--border)", boxShadow: "var(--shadow)" }}
          >
            <div
              className="text-[11px] font-extrabold uppercase tracking-[1px] mb-3.5"
              style={{ color: "var(--text-muted)" }}
            >
              Question Palette
            </div>
            <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-150"
                  style={{
                    border: i === cur
                      ? "1.5px solid var(--indigo)"
                      : ans[i] !== undefined
                      ? "1.5px solid #10b981"
                      : "1.5px solid var(--border)",
                    background: i === cur
                      ? "var(--indigo-light)"
                      : ans[i] !== undefined
                      ? "#10b981"
                      : "#f9fafb",
                    color: i === cur
                      ? "var(--indigo)"
                      : ans[i] !== undefined
                      ? "#fff"
                      : "var(--text-mid)",
                  }}
                  onClick={() => setCur(i)}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="mt-3.5 h-1.5 rounded-[10px] overflow-hidden" style={{ background: "#e5e7eb" }}>
              <div
                className="h-full rounded-[10px] prog-fill"
                style={{ width: `${(filled / total) * 100}%`, background: "var(--indigo)" }}
              />
            </div>
            <div className="mt-2 text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
              {filled}/{total} answered
            </div>
          </div>

          {/* Test info */}
          <div
            className="bg-white rounded-[14px] p-5"
            style={{ border: "1.5px solid var(--border)", boxShadow: "var(--shadow)" }}
          >
            <div
              className="text-[11px] font-extrabold uppercase tracking-[1px] mb-3.5"
              style={{ color: "var(--text-muted)" }}
            >
              Test Info
            </div>
            {[
              ["Subject", config.subject],
              ["Type",    config.type],
              ["Marks",   String(total * 4)],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between text-[13px] py-1.5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span style={{ color: "var(--text-muted)" }}>{k}</span>
                <span className="font-bold" style={{ color: "var(--navy)" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Helpers ── */
function BackBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-semibold cursor-pointer whitespace-nowrap transition-all duration-150"
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
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function NavBtn({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      disabled={disabled}
      className="px-5 py-2.5 rounded-[9px] text-[13px] font-semibold cursor-pointer transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
      style={{
        background: "#f3f4f6",
        border: "1.5px solid var(--border)",
        color: "var(--text-mid)",
        fontFamily: "'Inter', sans-serif",
      }}
      onMouseEnter={e => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--indigo)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--indigo)";
          (e.currentTarget as HTMLButtonElement).style.background = "var(--indigo-light)";
        }
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text-mid)";
        (e.currentTarget as HTMLButtonElement).style.background = "#f3f4f6";
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
