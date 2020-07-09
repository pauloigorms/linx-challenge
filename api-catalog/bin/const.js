const MONGODB_USER = {
    "authSource": "atlasAdmin@admin",
    "user": "us-linx", 
    "pass":"#L1nx@2020",
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const MONGODB_CONNECT = {
    "URL": "mongodb+srv://us-linx:#L1nX2020@catalog.j1eua.mongodb.net/mdb?retryWrites=true&w=majority",
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