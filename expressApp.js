import express from 'express';
const app = express();
const PORT = 3000;

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Route 1 - Home
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the Home Page!<h1>`);
});

// Route 2 - About
app.get('/about', (req, res) => {
    res.send(`<h1>Welcome to the About Page.<h1>`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
