async function __get__data(max__products) {
  try {
    console.log(`parametro: ${max__products}`)
  } catch (e) {
    throw e.message
  }  
}

module.exports = {
  __get__data
}