export const buildTree = (graph, root) => {
  const dfs = (node) => {
    const obj = {};

    for (const child of graph[node] || []) {
      obj[child] = dfs(child);
    }

    return obj;
  };

  return {
    [root]: dfs(root),
  };
};