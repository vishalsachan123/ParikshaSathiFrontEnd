import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CHIPS, SEARCH_DATA } from "../data";

export default function SearchPage() {
  const navigate = useNavigate();
  const [q,   setQ]   = useState("");
  const [act, setAct] = useState<string | null>(null);

  const filtered = SEARCH_DATA.filter(r =>
    r.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Header */}
      <div
        className="bg-white px-8 py-3.5 flex items-center gap-3.5 sticky top-0 z-[100]"
        style={{ borderBottom: "1.5px solid var(--border)" }}
      >
        <button
          onClick={() => navigate("/")}
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
        >
          ← Back
        </button>

        <input
          autoFocus
          className="flex-1 px-[18px] py-[11px] rounded-[9px] text-[15px] outline-none transition-colors duration-200"
          style={{
            background: "#f9fafb",
            border: "1.5px solid var(--border)",
            color: "var(--navy)",
            fontFamily: "'Inter', sans-serif",
          }}
          placeholder="Search subjects, topics, question papers..."
          value={q}
          onChange={e => setQ(e.target.value)}
          onFocus={ev => {
            ev.currentTarget.style.borderColor = "var(--indigo)";
            ev.currentTarget.style.background = "#fff";
          }}
          onBlur={ev => {
            ev.currentTarget.style.borderColor = "var(--border)";
            ev.currentTarget.style.background = "#f9fafb";
          }}
        />
      </div>

      {/* Body */}
      <div className="max-w-[780px] mx-auto px-8 py-7">
        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-[26px]">
          {CHIPS.map(c => (
            <div
              key={c}
              className="px-4 py-1.5 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-150"
              style={{
                border: `1.5px solid ${act === c ? "var(--indigo)" : "var(--border)"}`,
                background: act === c ? "var(--indigo-light)" : "var(--white)",
                color: act === c ? "var(--indigo)" : "var(--text-mid)",
              }}
              onClick={() => setAct(act === c ? null : c)}
            >
              {c}
            </div>
          ))}
        </div>

        {/* Results label */}
        <div
          className="text-xs font-bold uppercase tracking-[0.8px] mb-3.5"
          style={{ color: "var(--text-muted)" }}
        >
          {filtered.length} results found
        </div>

        {/* Result list */}
        <div className="flex flex-col gap-2.5">
          {filtered.map(r => (
            <div
              key={r.id}
              className="bg-white rounded-xl px-5 py-4 flex items-center gap-4 cursor-pointer transition-all duration-200"
              style={{ border: "1.5px solid var(--border)", boxShadow: "var(--shadow)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--indigo)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow)";
              }}
            >
              <div
                className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center text-[19px] flex-shrink-0"
                style={{ background: "var(--indigo-light)" }}
              >
                {r.icon}
              </div>
              <div>
                <div className="font-bold text-sm mb-0.5" style={{ color: "var(--navy)" }}>
                  {r.name}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {r.meta}
                </div>
              </div>
              <div className="ml-auto text-lg" style={{ color: "var(--indigo)" }}>→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
