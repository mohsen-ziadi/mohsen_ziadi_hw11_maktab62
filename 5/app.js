const express = require('express')
const pageRouter = require('./routes/pages')
const app = express()
const port = 5000

// root route
app.get('/', (req, res) => {
    res.send('Hello World.')
})

// page routes
app.use('/pages', pageRouter)

// 404
app.use((req, res) => {
    res.send('404, not found')
})

// run server
app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})