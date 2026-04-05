import { useState, useEffect } from "react";
import { QUESTION_BANK } from "../data";
import DoubtChat from "../components/DoubtChat";

export default function QuestionPlayground({ config }: any) {

  const QUESTIONS = config.subjects.flatMap(
    (s: string) => QUESTION_BANK[config.type]?.[s] || []
  );

  const [cur, setCur] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [ans, setAns] = useState<Record<number, number>>({});
  const [locked, setLocked] = useState<Record<number, boolean>>({});
  const [showChat, setShowChat] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(window.innerWidth > 768);

  const total = QUESTIONS.length;
  const answered = Object.keys(ans).length;
  const unanswered = total - answered;

  const q = QUESTIONS[cur];
  const isCorrect = ans[cur] === q.correct;

  useEffect(() => {
    setSelected(ans[cur] ?? null);
  }, [cur]);

  useEffect(() => {
    if (window.innerWidth < 768) setOpenSidebar(false);
  }, []);

  function submitAnswer() {
    setAns((p) => ({ ...p, [cur]: selected! }));
    setLocked((p) => ({ ...p, [cur]: true }));
  }

  function handleFinalSubmit() {
    let score = 0;
    QUESTIONS.forEach((q: any, i: number) => {
      if (ans[i] === q.correct) score++;
    });

    alert(`Score: ${score}/${total}`);
  }

  return (
    <div className="flex h-screen bg-[#0b0f17] text-white">

      {/* SIDEBAR */}
      <div className={`${openSidebar ? "w-[260px]" : "w-0"} transition-all bg-[#111827] overflow-hidden`}>
        <div className="p-4 space-y-5 h-full flex flex-col">

          <h2 className="font-bold text-lg">
            Questions ({total})
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-5 gap-2">
            {QUESTIONS.map((_: any, i: number) => (
              <div
                key={i}
                onClick={() => setCur(i)}
                className={`h-10 flex items-center justify-center rounded cursor-pointer text-sm transition
                ${ans[i] !== undefined ? "bg-green-600" : "bg-gray-700 hover:bg-gray-600"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="p-3 bg-[#1f2937] rounded text-sm space-y-2">
            <div className="flex justify-between">
              <span>Answered</span>
              <span className="text-green-400">{answered}</span>
            </div>
            <div className="flex justify-between">
              <span>Unanswered</span>
              <span className="text-red-400">{unanswered}</span>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            onClick={handleFinalSubmit}
            className="mt-auto bg-indigo-600 py-3 rounded font-bold hover:bg-indigo-700 transition"
          >
            Submit Test
          </button>
        </div>
      </div>

      {/* TOGGLE */}
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className={`absolute top-24 z-50 bg-green-600 w-10 h-10 rounded-full shadow-lg
        ${openSidebar ? "left-[250px]" : "left-2"}`}
      >
        {openSidebar ? "←" : "→"}
      </button>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="px-6 py-4 border-b border-gray-700 flex justify-between">
          <h2 className="font-semibold text-lg">
            Question {cur + 1} / {total}
          </h2>
          <span className="text-gray-400">5 Marks</span>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-auto px-6 py-8 md:px-12 md:py-10">

          <div className="max-w-[1100px] mx-auto space-y-6">

            {/* QUESTION */}
            <div className="bg-[#111827] p-6 md:p-8 rounded-lg text-lg shadow-sm">
              {q.text}
            </div>

            {/* OPTIONS */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {q.options.map((opt: string, i: number) => {
                const label = ["A", "B", "C", "D"][i];

                let style = "bg-[#1f2937] hover:bg-[#374151]";

                if (locked[cur]) {
                  if (i === q.correct) style = "bg-green-600";
                  else if (i === ans[cur]) style = "bg-red-600";
                } else if (selected === i) {
                  style = "bg-indigo-600";
                }

                return (
                  <div
                    key={i}
                    onClick={() => !locked[cur] && setSelected(i)}
                    className={`p-4 md:p-5 rounded-lg flex items-center gap-3 cursor-pointer transition ${style}`}
                  >
                    <input type="radio" checked={selected === i} readOnly />
                    <span className="font-semibold">{label}.</span>
                    {opt}
                  </div>
                );
              })}
            </div>

            {/* EXPLANATION */}
            {locked[cur] && (
              <div className="p-5 md:p-6 bg-[#111827] border border-gray-700 rounded-lg space-y-2 leading-relaxed">
                <div className="font-bold text-lg">
                  {isCorrect ? "✅ Correct" : "❌ Wrong"}
                </div>
                <div className="text-gray-300">
                  {q.explanation}
                </div>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="mt-8 pt-6 border-t border-gray-700 flex items-center justify-between">

              <button
                onClick={() => setCur((c) => c - 1)}
                disabled={cur === 0}
                className="px-6 py-2.5 rounded-md border border-gray-600 hover:bg-gray-700 transition disabled:opacity-40"
              >
                Previous
              </button>

              <div className="flex gap-4">

                <button
                  disabled={selected === null || locked[cur]}
                  onClick={submitAnswer}
                  className="px-6 py-2.5 rounded-md bg-green-600 hover:bg-green-700 transition disabled:opacity-40"
                >
                  {locked[cur] ? "Submitted" : "Submit"}
                </button>

                <button
                  onClick={() => setCur((c) => c + 1)}
                  disabled={cur === total - 1}
                  className="px-6 py-2.5 rounded-md border border-gray-600 hover:bg-gray-700 transition disabled:opacity-40"
                >
                  Next →
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CHAT BUTTON */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed right-6 bottom-6 bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700"
      >
        💬
      </button>

      {/* CHAT PANEL */}
      {showChat && (
        <DoubtChat
          question={q.text}
          options={q.options}   // ✅ MUST ADD THIS
          selected={selected !== null ? q.options[selected] : null}
          correct={q.options[q.correct]}
          onClose={() => setShowChat(false)}
        />
      )}
    </div>
  );
}