const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    const filePath = path.join(__dirname, "../frontend/dist", req.url === '/' ? "index.html" : req.url)
    console.log(filePath)

})
server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000")
})