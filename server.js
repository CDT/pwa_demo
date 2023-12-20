const express = require('express')

const app = express() // serve static files from the "static" directory

app.use(require('connect-history-api-fallback')())

app.use(express.static('.')) // listen on port 8080

app.listen(8080, () => { console.log('Server running on port 8080')})