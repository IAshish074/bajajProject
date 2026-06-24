import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50/30 text-slate-800 antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Premium Header */}
        <header className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full text-indigo-700 font-medium text-xs tracking-wider uppercase shadow-sm">
            <span>Chitkara Full Stack Challenge</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-850 tracking-tight">
            Hierarchical Graph Analyzer
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-medium">
            Analyze node relations, detect cycles, calculate depths, and visualize structured trees automatically.
          </p>
        </header>

        <main>
          <InputForm />
        </main>
      </div>
    </div>
  );
}

export default App;