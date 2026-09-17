const http = require('http');
const fs = require('fs');
const path = require('path');
const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".pdf": "application/pdf"
};


const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "../frontend/dist", req.url === "/" ? "index.html" : req.url);
    console.log(filePath)


})
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});