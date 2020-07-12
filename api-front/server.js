const http = require("http")
const path = require('path')
const express = require("express")
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

http.createServer(app).listen(port, () => console.log(`api-front-started-on-port[:::${port}:::]`))

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')


app.get("/", function(req, res) {
    res.render('index')
})