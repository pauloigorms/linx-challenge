const express = require('express')
const router = express.Router()
const services = require('../services/catalog')

// routes
router.get('/import-data', __import__data)
router.get('/get-by-id', __get__byId)
router.get('/get-full', __get__full)

function __import__data(req, res, next) {
    services.__import__data()
        .then(() => res.json({"status_code" : 202 }))
        .catch(err => next(err))
}

function __get__byId(req, res, next) {
    services.__get__byId(req.query.id, req.query.format)
        .then(catalog => res.json(catalog))
        .catch(err => next(err))
}


// get full documents
function __get__full(req, res, next) {
    services.__get__full()
        .then(catalog => res.json(catalog))
        .catch(err => next(err))
}

module.exports = router