import { useState } from "react";
import HierarchyCard from "./HierarchyCard";
import SummaryCard from "./SummaryCard";
import InvalidEntries from "./InvalidEntries";
import DuplicateEdges from "./DuplicateEdges";

const API_URL = import.meta.env.VITE_API_URL || "https://bajajproject-vt87.onrender.com/bfhl";

function InputForm() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      // Support comma, space, or newline separated values, or split by newlines
      const arr = input
        .split(/[,\n]/)
        .map((item) => item.trim())
        .filter(Boolean);

      if (arr.length === 0) {
        throw new Error("Please enter at least one relationship (e.g., A->B)");
      }

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: arr }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `API Error: Server responded with status ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message || "Failed to connect to the backend server. Please make sure the server is running.");
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="mb-4">
          <label htmlFor="edges-input" className="font-semibold text-slate-800 text-lg block mb-1">
            Input Relationships
          </label>
          <span className="text-sm text-slate-500 block">
            Enter node connections in <strong>X-&gt;Y</strong> format, separated by commas or new lines (e.g., A-&gt;B).
          </span>
        </div>

        <textarea
          id="edges-input"
          rows={6}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-slate-300 mt-2 p-4 rounded-xl outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm bg-slate-50/50"
          placeholder="A->B&#10;A->C&#10;B->D"
        />

        <div className="flex flex-wrap gap-3 mt-4 items-center justify-between">
          <button
            id="submit-btn"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium px-8 py-3 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center min-w-[120px]"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : (
              "Analyze Relations"
            )}
          </button>

          {response && (
         
            <span className="text-xs text-slate-400 font-mono">
              Roll No: {response.college_roll_number}
            </span>
            
           
          )}
        </div>
      </div>

      {error && (
        <div id="error-banner" className="bg-rose-50 border-l-4 border-rose-500 text-rose-800 p-4 rounded-xl flex items-start shadow-md animate-fade-in">
          <svg className="w-6 h-6 text-rose-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <h3 className="font-semibold text-rose-900">Analysis Failed</h3>
            <p className="text-sm mt-1">{error}</p>
          </div>
        </div>
      )}

      {response && (
        <div className="space-y-6">
          <SummaryCard summary={response.summary} />

          <div className="grid md:grid-cols-2 gap-6">
            <InvalidEntries entries={response.invalid_entries} />
            <DuplicateEdges edges={response.duplicate_edges} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 px-1">Hierarchies & Cyclic Groupings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {response.hierarchies.map((item, index) => (
                <HierarchyCard key={index} hierarchy={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputForm;