export const detectCycle = (graph, start) => {
  const visited = new Set();
  const recursionStack = new Set();

  const dfs = (node) => {
    visited.add(node);
    recursionStack.add(node);

    for (const child of graph[node] || []) {
      if (!visited.has(child)) {
        if (dfs(child)) return true;
      } else if (recursionStack.has(child)) {
        return true;
      }
    }

    recursionStack.delete(node);
    return false;
  };

  return dfs(start);
};