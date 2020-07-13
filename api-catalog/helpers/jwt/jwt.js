const expressJwt = require('express-jwt')
const CONST = require('bin/consts')

module.exports = jwt

function jwt() {
    const secret = process.env.SECRET
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            { url: '/catalog/get-token', methods: ['GET'] }
        ]
    })
}

async function isRevoked(req, payload, done) {
    if(process.env.SECRET === payload)
        return done(null, true)
    done()
}