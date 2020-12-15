const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catalog = new Schema({      
    imagesSsl: {},
    skus: [{
        sku: { type: String },
        specs: { },
        properties: {
            name: { type: String },
            installment: { },
            images:{ },
            price: { type: Number },
            eanCode: { type: String },
            url: { type: String },
            details: { },
            status: { type: String },
            oldPrice: { type: Number },
        },
        customBusiness: { }
    }],
    apiKey: { type: String },
    description: { type: String },
    type: { type: String },
    auditInfo: { },
    specs: { 
        Cor: [{ }],
        Tamanho: [{ }]
    },
    eanCode: { type: String },
    price: { type: Number },
    details: { },
    remoteUrl: { type: String },
    categories: [{ }],
    id: { type: String },
    stock: { type: String },
    brand: { type: String },
    customBusiness: { },
    basePrice: { type: String },
    images: { },
    kitProducts: [],
    created: { type: Date },
    oldPrice: { type: Number },
    published: { type: String },
    version: { type: String },
    url: { type: String },
    tags: [],
    unit: { type: String },
    installment: { },
    name: { type: String },
    clientLastUpdated: { type: Date },
    extraInfo: { },
    status: { type: String },
    ungroupedId: { type: String }
})

catalog.set('toJSON', { virtuals: true })
module.exports = mongoose.model('catalog', catalog)