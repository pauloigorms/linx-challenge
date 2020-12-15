const API_CATALOG = "http://localhost:5001/catalog/"
const ROUTES = {
    IMPORTA_DATA: "import-data",
    GET_INFO: "get-by-id/?"
}
const API_LINX = "https://wishlist.neemu.com/onsite/impulse-core/ranking/"

function set__environment(type) {
    const Environment = {
        1: {
            title: 'Mais vendidos',
            algorithm: 'mostpopular.json'
        },
        2: {
            title: 'Produtos em oferta',
            algorithm: 'pricereduction.json'
        }
    }
    return Environment[type]
}

const STATUS_AVAILABLE = "AVAILABLE"

module.exports = {
    API_CATALOG,
    ROUTES,
    API_LINX,
    set__environment,
    STATUS_AVAILABLE
}