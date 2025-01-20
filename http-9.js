const http = require("http")

const server = http.createServer( (req, res) => {
    if (req.url === "/") {
        res.end("Welcome to Homepage")
        return
        
    }
    if (req.url === "/about") {
        res.end("This is our History")
        return
        
    }
    res.end(`
        <h1>Some error has Occured</h1>
    `)
})

server.listen(4000)