var express = require('express')
const axios = require('axios')
var router = express.Router()

const CONSTS = require('./../bin/consts')

router.get("/", function(req, res) {
    axios.get(`${CONSTS.API_CATALOG}${CONSTS.ROUTER_CATALOG.showcase}maxProducts=${req.query.max_products}&sizeReturn=${req.query.size_result}&listRecom=${req.query.algorithm}`)
        .then(function (response) {            
            res.render('index', { title: response.data.title, data: response.data.data })
        })
        .catch(function (error) {
            res.render('index', { title: 'Server Error 401', data: [] })
        })
})

module.exports = router