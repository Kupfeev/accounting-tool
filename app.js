const express = require('express');
const bodyParser = require('body-parser');
const middleware = express();

const accountingRoutes = require('./api/routes/accounting');

// Using bodyParser middleware to access body in requests
middleware.use(bodyParser.urlencoded({ extended: false }));
middleware.use(bodyParser.json());

// Manual CORS configuration
middleware.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Handled routes
middleware.use('/accounting', accountingRoutes);

// Catch requests to not handled routes
middleware.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

middleware.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = middleware;