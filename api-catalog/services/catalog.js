const c__sh = require('helpers/connect/catalog')
const CONSTS = require('bin/consts')
const fs = require('fs')
const Catalog = c__sh.Catalog

async function __import__data() {
  try {
    const catalog = (fs.readFileSync('craw_data/catalog.json', 'utf-8').trim()).split('\n')
    return catalog.forEach(element => {
      const item = new Catalog(JSON.parse(element))
      item.save()
    })
  } catch (e) {
    throw e.message
  }
}

async function __get__byId(ids, status, format) {
  try {
    if(!ids)
      return {}
    return await Catalog.find({ id: { $in: ids.split(',') }, status: status }, CONSTS.scope(format))
  } catch (e) {
    throw e.message
  }  
}

async function __get__full() {
  try {
    return await Catalog.find()
  } catch (e) {
    throw e.message
  }  
}

module.exports = {
  __import__data,
  __get__full,
  __get__byId
}