require('rootpath')()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const errorHandler = require('error/error-handler')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,OPTIONS,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type, Origin, Authorization")
    next()
})
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// api routes
app.use('/recommender', require('../controllers/recommender'))

// global error handler
app.use(errorHandler)

// start server
const port = process.env.PORT || 6001
const www = app.listen(port, function () {
    console.log(`api-recommender-started-on-port[::: ${port} :::]`)
})