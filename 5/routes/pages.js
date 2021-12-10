// modules
const express = require('express')
const path = require('path')

// create router
const router = express.Router()

// routes
router.get('/index1', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index1.html'))
})
router.get('/index2', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index2.html'))
})
router.get('/index3', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index3.html'))
})
router.get('/index4', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index4.html'))
})
router.get('/index5', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index5.html'))
})

// export router
module.exports = router