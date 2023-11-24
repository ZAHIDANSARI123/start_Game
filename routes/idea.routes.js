const ideaController = require("../controllers/idea.controllers")

/**
 * Define route for the calls like
 * 
 * GET 127.0.0.1:3030/ideaApp/v1/ideas
 */

module.exports = (aap) => {
              app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdeas);
}