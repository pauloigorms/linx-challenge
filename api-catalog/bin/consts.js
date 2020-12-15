const MONGODB_USER = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const MONGODB_CONNECT = {
    "URL": "mongodb+srv://usrlinx:bjnO873JNMrzRihm@catalog.j1eua.mongodb.net/mdb?retryWrites=true&w=majority"
}

function scope(type) {
    const scope = {
        complete:  { },
        compact:  { name: 1, price: 1, status: 1, categories: 1 }
    }
    return scope[type]
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
    scope
}