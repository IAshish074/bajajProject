import TreeNode from "./TreeNode";

function HierarchyCard({ hierarchy }) {
  if (hierarchy.has_cycle) {
    return (
      <div className="bg-white border-2 border-dashed border-rose-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-bl-xl">
          Cycle Detected
        </div>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 font-extrabold text-lg border border-rose-100 shadow-sm">
            {hierarchy.root}
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Root Node: <span className="font-mono text-rose-600">{hierarchy.root}</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">Contains cyclic dependencies</p>
          </div>
        </div>

        <div className="bg-rose-50 border border-rose-100 text-rose-800 p-4 rounded-xl flex items-center text-sm">
          <svg className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.2" />
          </svg>
          <span className="font-medium">Infinite traversal loop detected within this component.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-650 font-extrabold text-lg border border-indigo-100 shadow-sm">
              {hierarchy.root}
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Root Node: <span className="font-mono text-indigo-600">{hierarchy.root}</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">Acyclic Hierarchy Tree</p>
            </div>
          </div>

          <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            Depth: {hierarchy.depth}
          </span>
        </div>

        <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-xl overflow-x-auto">
          <TreeNode node={hierarchy.tree} />
        </div>
      </div>
    </div>
  );
}

export default HierarchyCard;