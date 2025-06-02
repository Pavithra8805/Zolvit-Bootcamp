const express = require('express');
const morgan = require('morgan'); 
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const errorHandler = require('./middleware/errorHandler')

const app = express();

// Middleware
app.use(morgan('dev')); 
app.use(express.json());

// Connect to MongoDB
connectDB();

// Home route (HTML response)
app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to Zolvit Bootcamp!</h1>
    <p>This server returns HTML on '/' and JSON on '/data'</p>`);
});

// JSON route
app.get('/data', (req, res) => {
    const data = {
        bootcamp: "Zolvit Bootcamp",
        day: 3,
        task: "Build simple server returning HTML on '/' and JSON on '/data'",
        completed: true
    };
    res.json(data);
});

// route to trigger an error
app.get('/error', (req, res, next) => {
    const err = new Error("Something went wrong!");
    err.statusCode = 400;
    next(err);  
});

// User Routes
app.use('/users', userRoutes);

// Error Handler Middleware
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Express server running at http://localhost:${PORT}`);
});
