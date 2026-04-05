import { useState } from "react";
import { useNavigate } from "react-router-dom";

type UploadState = "idle" | "drag" | "done";

export default function PaperCheckerPage() {
  const navigate = useNavigate();
  const [st, setSt] = useState<UploadState>("idle");

  const zoneBorder =
    st === "drag" ? "var(--indigo)" :
    st === "done" ? "#10b981"       :
    "var(--border)";

  const zoneBg =
    st === "drag" ? "var(--indigo-light)" :
    st === "done" ? "#f0fdf4"              :
    "var(--white)";

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Top bar */}
      <div
        className="bg-white px-8 h-[60px] flex items-center justify-between sticky top-0 z-[100]"
        style={{ borderBottom: "1.5px solid var(--border)" }}
      >
        <BackBtn onClick={() => navigate("/")} />
        <div className="text-[17px] font-extrabold" style={{ color: "var(--navy)" }}>
          AI Paper Checker
        </div>
        <div />
      </div>

      {/* Body */}
      <div className="max-w-[780px] mx-auto px-8 py-9">
        {/* Drop zone */}
        <div
          className="rounded-[18px] py-[60px] px-8 text-center cursor-pointer transition-all duration-200"
          style={{
            border: `2px dashed ${zoneBorder}`,
            background: zoneBg,
            boxShadow: "var(--shadow)",
          }}
          onDragOver={e => { e.preventDefault(); setSt("drag"); }}
          onDragLeave={() => setSt("idle")}
          onDrop={e => { e.preventDefault(); setSt("done"); }}
          onClick={() => setSt("done")}
        >
          <div className="text-[44px] mb-3.5">{st === "done" ? "✅" : "📤"}</div>
          <div className="font-extrabold text-[17px] mb-1.5" style={{ color: "var(--navy)" }}>
            {st === "done" ? "Answer Sheet Uploaded!" : "Upload Answer Sheet"}
          </div>
          <div className="text-[13px]" style={{ color: "var(--text-muted)" }}>
            {st === "done"
              ? "Ready to evaluate"
              : "Drag & drop PDF / image, or click to browse"}
          </div>
        </div>

        {/* Evaluation panel */}
        {st === "done" && (
          <div
            className="mt-[22px] bg-white rounded-[14px] p-6"
            style={{ border: "1.5px solid var(--border)", boxShadow: "var(--shadow)" }}
          >
            <label
              className="block text-xs font-bold uppercase tracking-[0.6px] mb-2"
              style={{ color: "var(--text-mid)" }}
            >
              Select Answer Key
            </label>
            <select
              className="w-full px-3.5 py-[11px] rounded-[9px] text-sm outline-none appearance-none mb-4"
              style={{
                background: "#f9fafb",
                border: "1.5px solid var(--border)",
                color: "var(--navy)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <option>Physics Class 12 — Board 2024</option>
              <option>JEE Mains Jan 2025</option>
              <option>Custom Model Answer</option>
            </select>

            <button
              className="w-full py-3 rounded-xl text-white font-bold text-[15px] border-none cursor-pointer transition-all duration-200 flex items-center justify-center gap-2"
              style={{ background: "var(--indigo)", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--indigo-dark)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--indigo)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              🤖 Start AI Evaluation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
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
      ← Home
    </button>
  );
}
