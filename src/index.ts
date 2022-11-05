import http from 'http'

const server = http.createServer((request, response) => {
    response.end('<h1>Online academy</h1>')
})


const PORT = process.env.PORT || 8080

server.listen(PORT, () => console.log(`Server started at port: ${PORT}`))
