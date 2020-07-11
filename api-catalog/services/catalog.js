const c__sh = require('helpers/connect/catalog')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const private__key = fs.readFileSync('private.key')
const Catalog = c__sh.Catalog

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

async function __create__item(__item) {
  try {
    console.log(__item)
    // const item = new Catalog(__item)
    // await item.save()
  } catch (e) {
    throw e.message
  }
}

async function __get__item(__item_id) {
  try {
    return await Catalog.findById(__item_id)
  } catch (e) {
    throw e.message
  }  
}

async function __get__catalog() {
  try {
    return await Catalog.find()
  } catch (e) {
    throw e.message
  }  
}

module.exports = {
  __build__token,
  __create__item,
  __get__item,
  __get__catalog
}