export const calculateDepth = (tree) => {
  const root = Object.keys(tree)[0];

  const dfs = (node) => {
    const children = Object.keys(node);

    if (children.length === 0) return 1;

    let maxDepth = 0;

    for (const child of children) {
      maxDepth = Math.max(
        maxDepth,
        dfs(node[child])
      );
    }

    return maxDepth + 1;
  };

  return dfs(tree[root]);
};