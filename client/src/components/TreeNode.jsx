function TreeNode({ node }) {
  const key = Object.keys(node)[0];

  if (!key) return null;

  return (
    <ul className="pl-4 ml-2 border-l-2 border-slate-200/80 last:border-l-0">
      <li className="relative my-2">
        {/* Horizontal connector line */}
        <div className="absolute top-3 -left-4 w-4 h-0.5 bg-slate-200" />
        
        <div className="bg-indigo-50 border border-indigo-100 hover:bg-indigo-100/70 transition-colors duration-150 inline-flex items-center px-3 py-1 rounded-lg text-sm font-mono font-bold text-indigo-700 shadow-sm cursor-default">
          {key}
        </div>

        {Object.keys(node[key] || {}).map((child) => (
          <TreeNode
            key={child}
            node={{
              [child]: node[key][child],
            }}
          />
        ))}
      </li>
    </ul>
  );
}

export default TreeNode;