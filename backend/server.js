const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url === '/api/health') {
        res.writeHead(200);
        res.end(JSON.stringify({ status: "UP", message: "Backend Microservice is running successfully!" }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not Found" }));
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Backend microservice listening on port ${PORT}`);
});