const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()

// Serve static files from the "public" directory
app.use(express.static('.'))

// Create an HTTPS server with self-signed certificates
const options = {
  key: fs.readFileSync('./ssl/server.key'),
  cert: fs.readFileSync('./ssl/server.cert')
}

const server = https.createServer(options, app)

server.listen(3000, () => {
  console.log('Server listening on port 3000 (HTTPS)')
})
