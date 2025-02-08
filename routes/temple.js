const routes = require("express").Router();
const temples = require("../controllers/temple.js");

/**
 * @swagger
 * /temples:
 *   get:
 *     summary: Get a list of temples
 *     description: Retrieve a list of temples from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of temples.
 */
routes.get("/", temples.findAll);

/**
 * @swagger
 * /temples/{temple_id}:
 *   get:
 *     summary: Get a temple by the temple_id
 *     parameters:
 *       - in: path
 *         name: temple_id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Successful response with a temple.
 */

routes.get("/:temple_id", temples.findOne);

routes.post("/", temples.create);

module.exports = routes;
