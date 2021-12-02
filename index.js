require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())
server.use(express.static(
    path.join(__dirname, 'client/build')
))

server.get('/api/users', (req, res) => {
    res.json([
        {id: 1, username: "foo"},
        {id: 2, username: 'bar'},
        {id: 3, username: 'foobar'},
    ])
})

server.get(`*`, (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})