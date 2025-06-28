const express = require('express');
const router = express.Router();


/**
 * @openapi
 * /:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns a simple message to confirm that the API is running.
 *     responses:
 *       200:
 *         description: API is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello API!
 */

router.get('/', (req, res) => {
    res.json({ message: 'Hello API!' });
});

module.exports = router;