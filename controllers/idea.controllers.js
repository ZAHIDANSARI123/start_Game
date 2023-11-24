

const ideas = require("../models/idea.model");

/**
 * Search all idea
 */

exports.fetchAllIdeas = (req, res) => {
              res.status(200).send(ideas)
 
}

/**
 * Create new idea
 */

/**
 * Update idea
 */

/**
 * Delete idea
 */