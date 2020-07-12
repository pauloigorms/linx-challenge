const express = require('express')
const router = express.Router()
const services = require('../services/catalog')

// routes
router.get('/get-token', __build__token)
router.get('/import-data', __create__catalog)
router.get('/get-full', __get__full)
router.get('/get-infos-item', __get__infos__item)

function __build__token(req, res, next) {
    services.__build__token()
    .then(token => res.json(token))
    .catch(err => next(err))
}

function __create__catalog(req, res, next) {
    services.__create__catalog()
        .then(() => res.json({"status_code" : 200, "message": "data imported success"}))
        .catch(err => next(err))
}

function __get__full(req, res, next) {
    services.__get__full()
        .then(catalog => res.json(catalog))
        .catch(err => next(err))
}

function __get__infos__item(req, res, next) {
    services.__get__infos__item(req.query.size, req.query.ids)
        .then(catalog => res.json(catalog))
        .catch(err => next(err))
}

module.exports = router