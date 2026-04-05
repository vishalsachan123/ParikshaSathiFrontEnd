import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./styles/global.css";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import Home               from "./pages/Home";
import SearchPage         from "./pages/SearchPage";
import MAPPage            from "./pages/MAPPage";
import PaperCheckerPage   from "./pages/PaperCheckerPage";
import QuestionPlayground from "./pages/QuestionPlayground";
import QPModal            from "./components/QPModal";

import type { QuestionConfig } from "./types";

/* 👇 Wrapper needed for useNavigate */
function AppRoutes() {
  const [showModal, setShowModal] = useState(false);
  const [config, setConfig] = useState<QuestionConfig | null>(null);

  const navigate = useNavigate(); // ✅ ADD THIS

  function handleStart(cfg: QuestionConfig) {
    setConfig(cfg);
    setShowModal(false);

    navigate("/playground"); // ✅ THIS IS THE MAIN FIX
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home onQP={() => setShowModal(true)} />
              {showModal && (
                <QPModal
                  onClose={() => setShowModal(false)}
                  onStart={handleStart}
                />
              )}
            </>
          }
        />

        <Route path="/search" element={<SearchPage />} />
        <Route path="/map" element={<MAPPage />} />
        <Route path="/checker" element={<PaperCheckerPage />} />

        <Route
          path="/playground"
          element={
            config
              ? <QuestionPlayground config={config} />
              : <Home onQP={() => setShowModal(true)} />
          }
        />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

/* 👇 MAIN EXPORT */
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}