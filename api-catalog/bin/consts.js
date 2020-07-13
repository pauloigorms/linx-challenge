const MONGODB_USER = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const MONGODB_CONNECT = {
    "URL": "mongodb://localhost:27017/mdb"
}

function set__size(type) {
    const size = {
        compact:  { name: 1, price: 1, status: 1, categories: 1 },
        complete:  { }
    }
    return size[type]
}

const HTTP_STATUS_NOTFOUND = 404
const HTTP_STATUS_NOTMATCH = 202
const HTTP_STATUS_SUCCESS = 200

module.exports = { 
    MONGODB_USER, 
    MONGODB_CONNECT,
    HTTP_STATUS_NOTMATCH,
    HTTP_STATUS_NOTFOUND,
    HTTP_STATUS_SUCCESS,
    set__size
}