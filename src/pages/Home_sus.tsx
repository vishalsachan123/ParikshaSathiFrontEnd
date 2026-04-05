import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-indigo-400">ParikshaSathi</h1>

        <div className="space-x-6">
          <Link to="/signin" className="hover:text-indigo-400">
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Smart Exam Checking
          <span className="text-indigo-400"> Powered by AI</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          ParikshaSathi helps teachers and institutions evaluate exams faster
          with AI powered grading, automated analysis, and performance insights.
        </p>

        <div className="mt-10 space-x-4">
          <Link
            to="/signup"
            className="bg-indigo-500 px-6 py-3 rounded-lg text-lg hover:bg-indigo-600"
          >
            Start Evaluating
          </Link>

          <Link
            to="/signin"
            className="border border-gray-700 px-6 py-3 rounded-lg text-lg hover:bg-gray-900"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-10 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose ParikshaSathi?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-950 p-8 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-indigo-400">
              AI Evaluation
            </h3>
            <p className="mt-4 text-gray-400">
              Automatically evaluate descriptive answers using AI models.
            </p>
          </div>

          <div className="bg-gray-950 p-8 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-indigo-400">
              Instant Results
            </h3>
            <p className="mt-4 text-gray-400">
              Generate results instantly and reduce manual checking workload.
            </p>
          </div>

          <div className="bg-gray-950 p-8 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-indigo-400">
              Performance Analytics
            </h3>
            <p className="mt-4 text-gray-400">
              Analyze student performance with visual insights and reports.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-10">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-indigo-400">1</div>
            <h3 className="text-xl mt-4">Upload Exam Papers</h3>
            <p className="text-gray-400 mt-2">
              Upload answer sheets or digital responses.
            </p>
          </div>

          <div>
            <div className="text-4xl font-bold text-indigo-400">2</div>
            <h3 className="text-xl mt-4">AI Evaluation</h3>
            <p className="text-gray-400 mt-2">
              AI automatically evaluates answers and assigns marks.
            </p>
          </div>

          <div>
            <div className="text-4xl font-bold text-indigo-400">3</div>
            <h3 className="text-xl mt-4">Get Insights</h3>
            <p className="text-gray-400 mt-2">
              View performance reports and student analytics.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-center">
        <h2 className="text-3xl font-bold">Start Evaluating Exams Smarter</h2>

        <p className="mt-4 text-indigo-100">
          Join educators using AI to save time and improve grading accuracy.
        </p>

        <Link
          to="/signup"
          className="inline-block mt-8 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold"
        >
          Create Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-400">
        © 2026 ParikshaSathi. All rights reserved.
      </footer>
    </div>
  );
}
