const axios = require('axios')
const CONSTS = require('bin/consts')

async function __render_itens(max, alg, scope, size=set__paramn(max), env=CONSTS.set__environment(alg)) {
  try {
    const recommends = await axios.get(`${CONSTS.API_LINX}${env.algorithm}`).then(res => { return res.data })
    if(recommends) {  
      data_full = await axios.get(`${CONSTS.API_CATALOG}${CONSTS.ROUTES.GET_INFO}id=${getIds(recommends)}&status=AVAILABLE&format=${scope}`).then(res => { return res.data })
      return {
        title: env.title,
        data: data_full.slice(0, size++)
      }
    }
  } catch (e) {
    throw e.message
  }  
}

const set__paramn = value => { return value <= 10 ? 10 : value }

const getIds = (arr__) => {
  let ids = []
  arr__.forEach(element => { ids.push(element.recommendedProduct.id) })
  return ids
}

module.exports = {
  __render_itens
}