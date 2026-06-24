export const buildGraph = (edges) => {
  const graph = {};
  const indegree = {};
  const childParent = {};

  for (const edge of edges) {
    const [parent, child] = edge.split("->");

    if (childParent[child]) continue;

    childParent[child] = parent;

    if (!graph[parent]) graph[parent] = [];
    if (!graph[child]) graph[child] = [];

    graph[parent].push(child);

    indegree[parent] = indegree[parent] || 0;
    indegree[child] = (indegree[child] || 0) + 1;
  }

  return {
    graph,
    indegree,
  };
};