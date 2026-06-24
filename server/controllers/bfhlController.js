import { validateEdges } from "../utils/validateEdges.js";
import { removeDuplicates } from "../utils/removeDuplicates.js";
import { processHierarchy } from "../utils/processHierarchy.js";
import { USER_DETAILS } from "../config/constants.js";

export const processData = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        message: "data must be an array",
      });
    }

    const { validEdges, invalidEntries } =
      validateEdges(data);

    const {
      uniqueEdges,
      duplicateEdges,
    } = removeDuplicates(validEdges);

    const result = processHierarchy(uniqueEdges);

    res.status(200).json({
      user_id: USER_DETAILS.user_id,
      email_id: USER_DETAILS.email_id,
      college_roll_number: USER_DETAILS.college_roll_number,

      hierarchies: result.hierarchies,

      invalid_entries: invalidEntries,

      duplicate_edges: duplicateEdges,

      summary: result.summary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};