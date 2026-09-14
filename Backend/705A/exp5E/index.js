const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end('<h1>HomePage</h1>')
    }
    if (req.url === '/student') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify({
            name: "john",
            age: 20,
        }))
    }
})

server.listen(3002, () => {
    console.log('Server is running on http://localhost:3002')
})