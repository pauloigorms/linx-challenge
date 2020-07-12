const axios = require('axios')
const CONSTS = require('bin/consts')

async function __get__data(p_value, p_size_catalog, p_environ, environ = CONSTS.set__environment(p_environ), max__products = set__paramn(p_value)) {
  try {
    var data = [],
        result_linx = [],
        token = (await axios.get(CONSTS.API_CATALOG + CONSTS.ROUTER_CATALOG.get__token)).data
    if(environ) result_linx = (await axios.get(CONSTS.API_LINX + environ.algorithm)).data
    if(result_linx.length > 0 && result_linx !== null) {
        data.push( (await axios.get(`${CONSTS.API_CATALOG}${CONSTS.ROUTER_CATALOG.get__infos__item}size=${p_size_catalog}&ids=${getIds(result_linx).slice(0, max__products++)}`, { headers: { 'Authorization': 'Bearer ' + token.token } })).data )
        data.filter(element => { return element.status !== CONSTS.STATUS_AVAILABLE})
    }
    return {
      title: environ.title,
      data: data
    }
  } catch (e) {
    throw e.message
  }  
}

const set__paramn = value => { return value < 10 ? 10 : value }

const getIds =arr__ => {
  let ids = []
  arr__.forEach(element => { ids.push(element.recommendedProduct.id) })
  return ids
}

module.exports = {
  __get__data
}