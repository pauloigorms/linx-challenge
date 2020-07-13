var express = require('express')
const axios = require('axios')
var router = express.Router()

const CONSTS = require('./../bin/consts')

const app = express()

router.get("/", function(req, res) {
    axios.get(`${CONSTS.API_CATALOG}${CONSTS.ROUTER_CATALOG.showcase}maxProducts=${req.query.max_products}&sizeReturn=${req.query.size_result}&listRecom=${req.query.algorithm}`)
        .then(function (response) {
            res.render('index', 
                    { 
                        title: response.data.title, 
                        data: response.data.result,
                        max_products: req.query.max_products,
                        algorithm: req.query.algorithm
                    })
        })
        .catch(function (error) {
            res.render('index', 
                    { 
                        title: 'No data', 
                        data: [],
                        max_products: 10
                    })
        })
})

module.exports = router