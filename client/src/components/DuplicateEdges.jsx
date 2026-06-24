function DuplicateEdges({ edges }) {
  return (
    <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-6 shadow-sm flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-amber-800">
          Duplicate Edges
        </h2>
        <span className="bg-amber-100 text-amber-850 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          Skipped
        </span>
      </div>

      {edges.length === 0 ? (
        <p className="text-sm text-slate-500 font-medium italic">No duplicate edges found.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {edges.map((edge, index) => (
            <span
              key={index}
              className="bg-amber-105/85 border border-amber-250 text-amber-800 px-3 py-1 rounded-xl text-xs font-mono font-bold shadow-sm"
            >
              {edge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default DuplicateEdges;