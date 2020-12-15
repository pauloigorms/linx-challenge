const express = require('express')
const router = express.Router()
const services = require('services/recommender')

// routes
router.get('/items', __render_itens)

function __render_itens(req, res, next) {
    services.__render_itens(req.query.max, req.query.alg, req.query.scope)
        .then(data => res.json(data))
        .catch(err => next(err))
}

module.exports = router