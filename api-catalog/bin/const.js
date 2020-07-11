const MONGODB_USER = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const MONGODB_CONNECT = {
    "URL": "mongodb://localhost:27017/mdb",
    // "URL": `mongodb+srv://us-linx:L1nx2020@catalog.j1eua.mongodb.net/mdb?retryWrites=true`,
    "SECRET": "linx-challenge"
}

const HTTP_STATUS_NOTFOUND = 404
const HTTP_STATUS_NOTMATCH = 202
const HTTP_STATUS_SUCCESS = 200

module.exports = { 
    MONGODB_USER, 
    MONGODB_CONNECT,
    HTTP_STATUS_NOTMATCH,
    HTTP_STATUS_NOTFOUND,
    HTTP_STATUS_SUCCESS
}