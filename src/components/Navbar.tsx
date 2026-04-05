import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="flex items-center justify-between bg-white sticky top-0 z-50"
      style={{
        padding: "0 clamp(16px, 4vw, 40px)",
        height: "64px",
        borderBottom: "1.5px solid var(--border)",
      }}
    >
      <div
        className="text-xl font-black cursor-pointer select-none"
        style={{ color: "var(--indigo)", letterSpacing: "-0.5px" }}
        onClick={() => navigate("/")}
      >
        Pariksha<span style={{ color: "var(--navy)" }}>Sathi</span>
      </div>

      <div className="flex gap-2 items-center">
        <button
          onClick={() => navigate("/signin")}
          className="font-semibold text-sm transition-all duration-200 cursor-pointer rounded-lg"
          style={{
            padding: "8px clamp(10px, 2vw, 18px)",
            background: "transparent",
            color: "var(--text-mid)",
            border: "1.5px solid var(--border)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(12px, 1.5vw, 14px)",
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
          className="font-semibold text-sm text-white transition-all duration-200 cursor-pointer border-none rounded-lg"
          style={{
            padding: "8px clamp(10px, 2vw, 18px)",
            background: "var(--indigo)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(12px, 1.5vw, 14px)",
          }}
          onMouseEnter={e =>
            ((e.currentTarget as HTMLButtonElement).style.background = "var(--indigo-dark)")
          }
          onMouseLeave={e =>
            ((e.currentTarget as HTMLButtonElement).style.background = "var(--indigo)")
          }
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
