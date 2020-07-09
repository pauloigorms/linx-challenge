const expressJwt = require('express-jwt')
const CONST = require('bin/const')

function jwt() {
    const secret = CONST.MONGODB_CONNECT.SECRET
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            '/catalog/create'
        ]
    })
}

async function isRevoked(req, payload, done) {
    done()
}

module.exports = jwt
