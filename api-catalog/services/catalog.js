const c__sh = require('helpers/connect/catalog')
const Catalog = c__sh.Catalog

async function __create__item(__item) {
  try {
    const item = new Catalog(__item)
    await item.save()
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
  __create__item,
  __get__item,
  __get__catalog
}