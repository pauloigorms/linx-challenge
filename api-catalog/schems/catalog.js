const mongoose = require('mongoose')
const Schema = mongoose.Schema

    const catalog = new Schema({      
        
    })

catalog.set('toJSON', { virtuals: true })
module.exports = mongoose.model('catalog', catalog)