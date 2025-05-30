const express = require('express');
const connectDB = require('./config/db');
// const User = require('./userModel');
const userRoutes = require('./routes/user');

const app = express();
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

// POST /users route to add a user
// app.post('/users', async (req, res) => {
//     try {
//         const user = new User(req.body);
//         const result = await user.save();
//         res.status(201).json(result);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Express server running at http://localhost:${PORT}`);
});
