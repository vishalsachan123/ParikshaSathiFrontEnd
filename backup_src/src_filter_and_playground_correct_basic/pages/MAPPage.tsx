import { useNavigate } from "react-router-dom";
import { PAPERS } from "../data";

export default function MAPPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Page top bar */}
      <div
        className="bg-white px-8 h-[60px] flex items-center justify-between sticky top-0 z-[100]"
        style={{ borderBottom: "1.5px solid var(--border)" }}
      >
        <BackBtn onClick={() => navigate("/")} />
        <div className="text-[17px] font-extrabold" style={{ color: "var(--navy)" }}>
          Model Answer Papers
        </div>
        <div />
      </div>

      {/* Body */}
      <div className="max-w-[780px] mx-auto px-8 py-9">
        <p className="text-sm mb-6" style={{ color: "var(--text-mid)" }}>
          Select a paper to view model answers with step-by-step explanations.
        </p>
        <div className="flex flex-col gap-3">
          {PAPERS.map(p => (
            <div
              key={p.id}
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
                {p.icon}
              </div>
              <div>
                <div className="font-bold text-sm mb-0.5" style={{ color: "var(--navy)" }}>
                  {p.title}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {p.tags.join(" · ")}
                </div>
              </div>
              <button
                className="ml-auto text-[13px] font-bold px-[18px] py-[9px] rounded-lg border-none text-white cursor-pointer whitespace-nowrap transition-all duration-200"
                style={{ background: "#f59e0b", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#d97706")}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "#f59e0b")}
              >
                View →
              </button>
            </div>
          ))}
        </div>
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
