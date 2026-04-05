import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { STATS } from "../data";

interface HomeProps {
  onQP: () => void;
}

export default function Home({ onQP }: HomeProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      <Navbar />

      {/* ── Hero ── */}
      <div
        className="text-center"
        style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 60%, #faf5ff 100%)",
          borderBottom: "1.5px solid var(--border)",
          padding: "clamp(32px, 6vw, 56px) clamp(16px, 5vw, 40px) clamp(36px, 5vw, 52px)",
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-1.5 text-white font-bold uppercase px-3.5 py-[5px] rounded-full mb-5"
          style={{
            background: "var(--indigo)",
            fontSize: "clamp(9px, 1.2vw, 11px)",
            letterSpacing: "1.2px",
          }}
        >
          ✨ AI-Powered Exam Platform
        </div>

        {/* Heading */}
        <h1
          className="font-black leading-[1.15] mb-3"
          style={{ fontSize: "clamp(24px, 5vw, 44px)", color: "var(--navy)" }}
        >
          Your Smart{" "}
          <span style={{ color: "var(--indigo)" }}>Exam Partner</span>
        </h1>

        {/* Sub */}
        <p
          className="mx-auto mb-8 leading-[1.65]"
          style={{
            color: "var(--text-mid)",
            fontSize: "clamp(13px, 1.8vw, 15px)",
            maxWidth: "520px",
          }}
        >
          Generate question papers, evaluate answers &amp; analyse student performance — all in one place.
        </p>

        {/* Search bar */}
        <div
          className="flex items-center mx-auto rounded-full gap-3 cursor-pointer transition-all duration-200 search-input"
          style={{
            background: "var(--white)",
            border: "2px solid var(--border)",
            boxShadow: "var(--shadow-md)",
            height: "52px",
            maxWidth: "min(580px, 90vw)",
            padding: "0 16px",
          }}
          onClick={() => navigate("/search")}
        >
          <span className="text-base flex-shrink-0" style={{ color: "var(--indigo)" }}>🔍</span>
          <span
            className="flex-1 text-left select-none truncate"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(12px, 1.8vw, 15px)",
            }}
          >
            Search subjects, topics, question papers...
          </span>
          <span
            className="text-[11px] font-semibold px-2 py-0.5 rounded-md flex-shrink-0 hidden sm:block"
            style={{
              background: "#f3f4f6",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
          >
            ⌘K
          </span>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div
        className="grid bg-white" data-stats-grid=""
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          borderBottom: "1.5px solid var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        {STATS.map((s, idx) => (
          <div
            key={s.val}
            className="flex flex-col items-center text-center"
            style={{
              padding: "clamp(14px, 3vw, 24px) clamp(8px, 2vw, 20px)",
              borderRight: idx < STATS.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <div style={{ fontSize: "clamp(20px, 3vw, 28px)", marginBottom: "4px" }}>{s.ico}</div>
            <div
              className="font-extrabold"
              style={{ fontSize: "clamp(13px, 2vw, 17px)", color: "var(--navy)" }}
            >
              {s.val}
            </div>
            <div
              className="font-medium"
              style={{ fontSize: "clamp(10px, 1.2vw, 12px)", color: "var(--text-muted)", marginTop: "2px" }}
            >
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* ── Tool Cards ── */}
      <div
        className="flex-1 mx-auto w-full"
        style={{ maxWidth: "1100px", padding: "clamp(28px, 5vw, 52px) clamp(16px, 5vw, 40px)" }}
      >
        <div className="text-center mb-8">
          <h2
            className="font-black mb-2"
            style={{ fontSize: "clamp(20px, 3.5vw, 28px)", color: "var(--navy)" }}
          >
            Choose Your Tool
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "clamp(12px, 1.5vw, 14px)" }}>
            Everything you need to create, evaluate, and analyse exams
          </p>
        </div>

        {/* Responsive grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))" }}
        >
          <ToolCard
            topBorder="var(--indigo)"
            hoverShadow="rgba(90,79,207,0.15)"
            hoverBorder="var(--indigo-light)"
            iconBg="#ede9fe"
            icon="📄"
            title="Question Paper"
            desc="Generate AI-powered question papers by subject, topic & type — MCQ or subjective."
            ctaBg="var(--indigo)"
            ctaHover="var(--indigo-dark)"
            ctaLabel="Generate Paper →"
            onClick={onQP}
          />
          <ToolCard
            topBorder="#f59e0b"
            hoverShadow="rgba(245,158,11,0.15)"
            hoverBorder="#fde68a"
            iconBg="#fef3c7"
            icon="📋"
            title="Model Answer Paper"
            desc="Access detailed model answer sheets with explanations for past question papers."
            ctaBg="#f59e0b"
            ctaHover="#d97706"
            ctaLabel="View Answers →"
            onClick={() => navigate("/map")}
          />
          <ToolCard
            topBorder="#10b981"
            hoverShadow="rgba(16,185,129,0.15)"
            hoverBorder="#a7f3d0"
            iconBg="#d1fae5"
            icon="✅"
            title="Paper Checker"
            desc="Upload answer sheets and let AI evaluate them instantly with detailed feedback."
            ctaBg="#10b981"
            ctaHover="#059669"
            ctaLabel="Check Paper →"
            onClick={() => navigate("/checker")}
          />
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        className="text-center bg-white"
        style={{
          borderTop: "1.5px solid var(--border)",
          color: "var(--text-muted)",
          fontSize: "clamp(11px, 1.5vw, 13px)",
          padding: "18px 16px",
        }}
      >
        © 2026 ParikshaSathi — Smart Exam Platform
      </footer>
    </div>
  );
}

/* ── ToolCard ── */
interface ToolCardProps {
  topBorder: string;
  hoverShadow: string;
  hoverBorder: string;
  iconBg: string;
  icon: string;
  title: string;
  desc: string;
  ctaBg: string;
  ctaHover: string;
  ctaLabel: string;
  onClick: () => void;
}

function ToolCard({
  topBorder, hoverShadow, hoverBorder,
  iconBg, icon, title, desc,
  ctaBg, ctaHover, ctaLabel, onClick,
}: ToolCardProps) {
  return (
    <div
      className="bg-white rounded-2xl cursor-pointer transition-all duration-[220ms] flex flex-col"
      style={{
        border: "1.5px solid var(--border)",
        borderTop: `4px solid ${topBorder}`,
        boxShadow: "var(--shadow)",
        padding: "clamp(20px, 3vw, 28px)",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = `0 8px 32px ${hoverShadow}`;
        el.style.borderColor = hoverBorder;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "var(--shadow)";
        el.style.borderColor = "var(--border)";
      }}
      onClick={onClick}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center rounded-[14px] mb-4 flex-shrink-0"
        style={{
          width: "clamp(44px, 5vw, 52px)",
          height: "clamp(44px, 5vw, 52px)",
          fontSize: "clamp(20px, 2.5vw, 24px)",
          background: iconBg,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <div
        className="font-extrabold mb-2"
        style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "var(--navy)" }}
      >
        {title}
      </div>

      {/* Desc */}
      <p
        className="leading-[1.65] mb-5 flex-1"
        style={{ fontSize: "clamp(12px, 1.4vw, 13px)", color: "var(--text-mid)" }}
      >
        {desc}
      </p>

      {/* CTA */}
      <button
        className="inline-flex items-center gap-1.5 font-bold rounded-lg border-none cursor-pointer text-white transition-all duration-200 self-start"
        style={{
          background: ctaBg,
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(12px, 1.4vw, 13px)",
          padding: "clamp(8px, 1vw, 10px) clamp(14px, 2vw, 18px)",
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = ctaHover)}
        onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = ctaBg)}
        onClick={e => { e.stopPropagation(); onClick(); }}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
