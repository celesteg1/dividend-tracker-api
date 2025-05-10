const express = require('express');
const router = express.Router();


/**
 * @swagger
 * /:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns a simple message to confirm that the API is running.
 *     responses:
 *       200:
 *         description: API is running
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hello API!
 */

router.get('/', (req, res) => {
    res.type('text/plain').send('Hello API!');
});

module.exports = router;