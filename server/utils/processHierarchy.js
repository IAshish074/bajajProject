import { buildGraph } from "./buildGraph.js";
import { detectCycle } from "./detectCycle.js";
import { buildTree } from "./buildTree.js";
import { calculateDepth } from "./calculateDepth.js";

export const processHierarchy = (edges) => {
  const { graph, indegree } = buildGraph(edges);

  const visited = new Set();

  const hierarchies = [];

  let totalTrees = 0;
  let totalCycles = 0;

  let largestTreeRoot = "";
  let largestDepth = -1;

  const getComponent = (start) => {
    const component = [];

    const stack = [start];

    while (stack.length) {
      const node = stack.pop();

      if (visited.has(node)) continue;

      visited.add(node);

      component.push(node);

      for (const child of graph[node] || []) {
        stack.push(child);
      }

      for (const parent in graph) {
        if (graph[parent].includes(node)) {
          stack.push(parent);
        }
      }
    }

    return component;
  };

  for (const node in graph) {
    if (visited.has(node)) continue;

    const component = getComponent(node);

    let root =
      component.find(
        (n) => (indegree[n] || 0) === 0
      ) || [...component].sort()[0];

    const cycle = detectCycle(graph, root);

    if (cycle) {
      hierarchies.push({
        root,
        tree: {},
        has_cycle: true,
      });

      totalCycles++;
      continue;
    }

    const tree = buildTree(graph, root);

    const depth = calculateDepth(tree);

    hierarchies.push({
      root,
      tree,
      depth,
    });

    totalTrees++;

    if (
      depth > largestDepth ||
      (depth === largestDepth &&
        root < largestTreeRoot)
    ) {
      largestDepth = depth;
      largestTreeRoot = root;
    }
  }

  return {
    hierarchies,
    summary: {
      total_trees: totalTrees,
      total_cycles: totalCycles,
      largest_tree_root:
        largestTreeRoot || "",
    },
  };
};