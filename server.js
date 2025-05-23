const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Send HTML response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Welcome to Zolvit Bootcamp!</h1>
            <p>This server returns HTML on '/' and JSON on '/data'</p>
        `);
    }
    else if (req.url === '/data') {
        // Send JSON response
        const data = {
            bootcamp: "Zolvit Bootcamp",
            day: 3,
            task: "Build simple server returning HTML on '/' and JSON on '/data'",
            completed: true
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
