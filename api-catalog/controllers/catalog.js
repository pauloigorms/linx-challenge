const express = require('express')
const router = express.Router()
const services = require('../services/catalog')

// routes
router.get('/import-data', __import__data)
router.get('/get-infos-item', __get__infos__byId)
router.get('/get-full', __get__full)

function __import__data(req, res, next) {
    services.__import__data()
        .then(() => res.json({"status_code" : 202 }))
        .catch(err => next(err))
}

function __get__full(req, res, next) {
    services.__get__full()
        .then(catalog => res.json(catalog))
        .catch(err => next(err))
}

function __get__infos__byId(req, res, next) {
    services.__get__infos__byId(req.query.size, req.query.ids)
        .then(catalog => res.json(catalog))
        .catch(err => next(err))
}

module.exports = router