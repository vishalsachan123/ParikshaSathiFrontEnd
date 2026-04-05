import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="flex items-center justify-between px-10 h-16 bg-white sticky top-0 z-50 gap-3"
      style={{ borderBottom: "1.5px solid var(--border)" }}
    >
      <div
        className="text-xl font-black tracking-tight"
        style={{ color: "var(--indigo)" }}
      >
        Pariksha<span style={{ color: "var(--navy)" }}>Sathi</span>
      </div>

      <div className="flex gap-2.5 items-center">
        <button
          onClick={() => navigate("/signin")}
          className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 bg-transparent cursor-pointer"
          style={{
            color: "var(--text-mid)",
            border: "1.5px solid var(--border)",
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--indigo)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--indigo)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLButtonElement).style.color = "var(--text-mid)";
          }}
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 cursor-pointer border-none"
          style={{ background: "var(--indigo)", fontFamily: "'Inter', sans-serif" }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--indigo-dark)")}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--indigo)")}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
