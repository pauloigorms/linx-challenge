const http = require("http")
const path = require('path')
const express = require("express")
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 80

app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

const index = require('./routes/index')
app.use('/', index)

http.createServer(app).listen(port, () => console.log(`api-front-started-on-port[:::${port}:::]`))