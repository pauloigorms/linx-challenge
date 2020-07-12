const API_CATALOG = "http://localhost:5001/catalog/"
const ROUTER_CATALOG = {
    get__token: "get-token",
    get__infos__item: "get-infos-item/?",
    import__data: "import-data"
}
const API_LINX = "https://wishlist.neemu.com/onsite/impulse-core/ranking/"

function set__environment(type) {
    const Environment = {
        mostpopular: {
            title: 'Mais vendidos',
            algorithm: 'mostpopular.json'
        },
        pricereduction: {
            title: 'Produtos que baixaram os preços',
            algorithm: 'pricereduction.json'
        }
    }
    return Environment[type]
}

const STATUS_AVAILABLE = "AVAILABLE"

module.exports = {
    API_CATALOG,
    ROUTER_CATALOG,
    API_LINX,
    set__environment,
    STATUS_AVAILABLE
}