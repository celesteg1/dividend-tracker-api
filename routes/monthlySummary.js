const express = require('express');
const router = express.Router();


/**
 * @swagger
 * /monthly-summary:
 *   post:
 *     summary: Calculate total dividends received per month.
 *     description: >
 *       Accepts a list of dividend payments and returns the total dividend income grouped by month and year.
 *       Each payment should include the ticker symbol, payment date (formatted as YYYY-MM-DD), and amount received.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               required:
 *                 - ticker
 *                 - paymentDate
 *                 - amount
 *               properties:
 *                 ticker:
 *                   type: string
 *                   description: The stock ticker symbol (e.g., AAPL, MSFT).
 *                   example: AAPL
 *                 paymentDate:
 *                   type: string
 *                   format: date
 *                   description: Date the dividend was paid. Use the format YYYY-MM-DD.
 *                   example: "2024-01-15"
 *                 amount:
 *                   type: number
 *                   format: float
 *                   description: Amount of dividend received, in the account currency.
 *                   example: 1.50
 *     responses:
 *       200:
 *         description: Returns a summary of monthly dividend totals.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               patternProperties:
 *                 "^[0-9]{4}-(0[1-9]|1[0-2])$":
 *                   type: number
 *             example:
 *               "2024-01": 3.5
 *               "2024-05": 0.27
 *       400:
 *          $ref: '#/components/responses/BadRequest'
 *       415:
 *          $ref: '#/components/responses/UnsupportedMediaType'
 */

router.post('/monthly-summary', (req, res) => {
    const data = req.body; // Expecting array of { ticker, paymentDate, amount }
    
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            error: 'Expected application/json with an array of dividend entries.',
        });
    }

    const summary = {};

    data.forEach( reqEntry => {
        const date = new Date(reqEntry.paymentDate);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`; //extract the year and month e.g. 2025-04 and use it as the key
        summary[key] = (summary[key] || 0) + reqEntry.amount; //add up the amount for each month 
    });

    res.json(summary); // return the json object of summed-up amounts per month

}); // /monthly-summary Endpoint


module.exports = router;
