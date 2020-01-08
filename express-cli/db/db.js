const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';//连接网址
const dbName = 'react';//数据库名称

// 连接
const connect = () => {
    return new Promise((resolve, reject) => {
        //使用connect方法连接到服务器
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            err ? reject(err) : resolve(client);
            console.log("Connected successfully to server");
        });
    });
}

// table是表名，condition是条件，y改的条件

// 查
const find = (table, condition) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(table);
        collection.find(condition ? condition : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}

// 增
const insertMany = (table, condition) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(table);
        collection.insertMany(condition, function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    });
}

//改   
const updateOne = (table, condition, y) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(table);
        collection.updateOne(condition, y, function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();

    });
}

//删
const deleteOne = (table, condition) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(table);
        collection.deleteOne(condition, function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    });
}

//导出
module.exports = {
    find,
    insertMany,
    updateOne,
    deleteOne
}