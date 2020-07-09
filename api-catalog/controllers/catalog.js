const express = require('express')
const router = express.Router()
const connect__sh = require('../services/catalog')

// routes
router.post('/create', __create__item)

function __create__item(req, res, next) {
    connect__sh.__create__item(req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}


module.exports = router