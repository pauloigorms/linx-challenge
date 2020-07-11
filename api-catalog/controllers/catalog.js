const express = require('express')
const router = express.Router()
const services = require('../services/catalog')

// routes
router.get('/get-token', __build__token)
router.post('/create-item', __create__item)

function __build__token(req, res, next) {
    services.__build__token()
    .then(token => token ? res.json(token) : res.status(400).json({ message: 'TOKEN EXPIRED' }))
    .catch(err => next(err))
}

function __create__item(req, res, next) {
    services.__create__item(req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}


module.exports = router