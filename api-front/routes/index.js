var express = require('express')
const axios = require('axios')
var router = express.Router()
const CONSTS = require('./../bin/consts')

router.get("/", function(req, res) {
    axios.get(`${CONSTS.API_RECOMMENDER}${CONSTS.ROUTER.showcase}max=${req.query.max_products}&alg=${req.query.algorithm}&scope=${req.query.scopee}`)
        .then(function (response) {
            res.render('index', 
                { 
                    title: response.data.title, 
                    data: response.data.data,
                    max_products: req.query.max_products || 10,
                    scopee: req.query.scopee,
                    algorithm: req.query.algorithm
                })
        })
        .catch(function (error) {
            res.render('index', 
                { 
                    title: 'Sem dados', 
                    data: [],
                    max_products: req.query.max_products || 10,
                    scopee: req.query.scopee,
                    algorithm: req.query.algorithm
                })
        })
})

module.exports = router