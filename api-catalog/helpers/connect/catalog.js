const CONST = require('bin/const')
const mongoose = require('mongoose')

mongoose.connect(CONST.MONGODB_CONNECT.URL,  CONST.MONGODB_USER)
mongoose.Promise = global.Promise
module.exports = { Catalog: require('../../schems/catalog') }
