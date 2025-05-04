const express = require('express');
const app = express();

app.use(express.json());

// Error-handling middleware for unsupported content types
app.use((req, res, next) => {
    if (req.headers['content-type'] && !req.headers['content-type'].includes('application/json')) {
        return res.status(415).json({
            error: 'Expected application/json. Please check your request content type.',
        });
    }
    next(); // Continue if content type is JSON
});

// Error-handling middleware for JSON parse errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            error: 'Invalid JSON. Please check your request body format.',
        });
    }
    next(err);  // Pass unhandled errors to any other middleware (if present)
});

// Simple health check or root route
app.get('/', (req, res) => {
    res.send('Hello API!');
});
  
app.post('/monthly-summary', (req, res) => {
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


// Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Dividend Tracker API is running at http://localhost:${PORT}`);
});







