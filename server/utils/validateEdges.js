export const validateEdges = (data) => {
  const validEdges = [];
  const invalidEntries = [];

  const regex = /^[A-Z]->[A-Z]$/;

  for (const item of data) {
    if (typeof item !== "string") {
      invalidEntries.push(String(item));
      continue;
    }

    const trimmed = item.trim();

    if (!regex.test(trimmed)) {
      invalidEntries.push(item);
      continue;
    }

    const [parent, child] = trimmed.split("->");

    if (parent === child) {
      invalidEntries.push(item);
      continue;
    }

    validEdges.push(trimmed);
  }

  return {
    validEdges,
    invalidEntries,
  };
};