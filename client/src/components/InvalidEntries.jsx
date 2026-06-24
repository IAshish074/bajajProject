function InvalidEntries({ entries }) {
  return (
    <div className="bg-rose-50/50 border border-rose-200/80 rounded-2xl p-6 shadow-sm flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-rose-800">
          Invalid Entries
        </h2>
        <span className="bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          Rejected
        </span>
      </div>

      {entries.length === 0 ? (
        <p className="text-sm text-slate-500 font-medium italic">No invalid entries detected.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {entries.map((entry, index) => (
            <span
              key={index}
              className="bg-rose-100/80 border border-rose-250 text-rose-800 px-3 py-1 rounded-xl text-xs font-mono font-bold shadow-sm"
            >
              {entry}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default InvalidEntries;