const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); 

// Middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(express.json());

// Error-handling middleware for unsupported content types
app.use((req, res, next) => {
    if (req.headers['content-type'] && !req.headers['content-type'].includes('application/json')) {
        return res.status(415).json({
            error: 'Expected content-type application/json.',
        });
    }
    next(); // Continue if content type is JSON
});

// Error-handling middleware for incorrect JSON format
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            error: 'Invalid JSON. Please check your request body format.',
        });
    }
    next(err);  // Pass unhandled errors to any other middleware (if present)
});

//Health check
const healthCheckRoutes = require('./routes/healthCheck');
app.use('/', healthCheckRoutes);


//Calculates monthly dividend totals
const monthlySummaryRoutes = require('./routes/monthlySummary');
app.use('/', monthlySummaryRoutes);


// Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Dividend Tracker API is running at http://localhost:${PORT}`);
});







