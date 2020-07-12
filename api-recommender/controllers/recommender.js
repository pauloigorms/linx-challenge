const express = require('express')
const router = express.Router()
const services = require('services/recommender')

// routes
router.get('/showcase', __get__data)

function __get__data(req, res, next) {
    services.__get__data()
        .then(data => res.json(data))
        .catch(err => next(err))
}

module.exports = router