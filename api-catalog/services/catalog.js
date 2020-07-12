const c__sh = require('helpers/connect/catalog')
const CONSTS = require('bin/consts')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const private__key = fs.readFileSync('private.key')
const Catalog = c__sh.Catalog

const catalog = (fs.readFileSync('craw_data/catalog.json', 'utf-8')).split('\n')

async function __build__token() {
  try {
    const token = jwt.sign({ private__key }, process.env.SECRET, { expiresIn: '1h' })
    return {
      token
    }
  } catch (e) {
    throw e.message
  }
}

async function __create__catalog() {
  try {
    return catalog.forEach(element => {
      const item = new Catalog(JSON.parse(element))
      item.save()
    })
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

async function __get__infos__item(size, __ids) {
  try {
    return await Catalog.find({ id: { $in: __ids.split(',') } }, CONSTS.set__size(size))
  } catch (e) {
    throw e.message
  }  
}

module.exports = {
  __build__token,
  __create__catalog,
  __get__full,
  __get__infos__item
}