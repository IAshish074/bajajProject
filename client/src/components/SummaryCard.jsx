function SummaryCard({ summary }) {
  return (
    <div className="grid sm:grid-cols-3 gap-5 mt-8">
      {/* Total Trees Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Total Trees
            </h3>
            <p className="text-4xl font-extrabold text-emerald-600 mt-2 select-none group-hover:scale-105 transition-transform duration-200 origin-left">
              {summary.total_trees}
            </p>
          </div>
          <span className="bg-emerald-50 text-emerald-700 p-2 rounded-xl text-xs font-semibold">
            Non-Cyclic
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-3 font-medium">Valid acyclic hierarchies processed.</p>
      </div>

      {/* Total Cycles Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500" />
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Total Cycles
            </h3>
            <p className="text-4xl font-extrabold text-rose-600 mt-2 select-none group-hover:scale-105 transition-transform duration-200 origin-left">
              {summary.total_cycles}
            </p>
          </div>
          <span className="bg-rose-50 text-rose-700 p-2 rounded-xl text-xs font-semibold">
            Cyclic
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-3 font-medium">Cyclic relationship loops detected.</p>
      </div>

      {/* Largest Tree Root Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500" />
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Largest Root
            </h3>
            <p className="text-4xl font-extrabold text-indigo-650 mt-2 select-none group-hover:scale-105 transition-transform duration-200 origin-left truncate max-w-[150px]">
              {summary.largest_tree_root || "—"}
            </p>
          </div>
          <span className="bg-indigo-50 text-indigo-700 p-2 rounded-xl text-xs font-semibold">
            Max Depth
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-3 font-medium">Root of the deepest valid hierarchy.</p>
      </div>
    </div>
  );
}

export default SummaryCard;