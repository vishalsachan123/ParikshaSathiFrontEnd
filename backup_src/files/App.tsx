import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./src/styles/globals.css";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import Home               from "./src/pages/Home";
import SearchPage         from "./src/pages/SearchPage";
import MAPPage            from "./src/pages/MAPPage";
import PaperCheckerPage   from "./src/pages/PaperCheckerPage";
import QuestionPlayground from "./src/pages/QuestionPlayground";
import QPModal            from "./src/components/QPModal";

import type { QuestionConfig } from "./src/types";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [config,    setConfig]    = useState<QuestionConfig | null>(null);

  function handleStart(cfg: QuestionConfig) {
    setConfig(cfg);
    setShowModal(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home onQP={() => setShowModal(true)} />
              {showModal && (
                <QPModal onClose={() => setShowModal(false)} onStart={handleStart} />
              )}
            </>
          }
        />
        <Route path="/search"    element={<SearchPage />} />
        <Route path="/map"       element={<MAPPage />} />
        <Route path="/checker"   element={<PaperCheckerPage />} />
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
    </BrowserRouter>
  );
}
