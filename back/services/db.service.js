const MongoClient = require('mongodb').MongoClient;
const ex = require('./pass');
const uri = 'mongodb+srv://dbHealth:' + ex.db_pass + '@cluster0.f5et0.mongodb.net/h-db?retryWrites=true&w=majority';

const config = require('../config')

module.exports = {
    getCollection
}

// Database Name
const dbName = 'h-db';

var dbConn = null;

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}

