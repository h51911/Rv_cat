const express = require('express');
let { formatdata } = require('../utils/formatdata');

const Router = express.Router();

let { mongo } = require('../db/index');

let { create } = require('../utils/token');

// Router.use('/', (req, res) => {
//     console.log('进入了users子路由');
//     res.send('进入了users子路由');
// })

Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }
})

Router.get('/', async (req, res) => {//查找所有用户
    let result = await mongo.find('user', req.query);
    if (result.length) {
        res.send(formatdata({ data: result }));
    } else {
        res.send(formatdata({ code: 0 }));
    }
});

Router.post('/reg', async (req, res) => {//添加用户，用户注册
    console.log(1)
    let result = await mongo.create('user', [req.query]);

    if (result.insertedCount) {
        res.send(formatdata({}));
    } else {
        res.send(formatdata({ code: 0 }));
    }
});

Router.post('/changeuserinfo', async (req, res) => {
    let result = await mongo.update('user', query)
})

Router.get('/check', async (req, res) => {//查找用户是否存在
    let result = await mongo.find('user', req.query);
    if (result.length) {
        res.send(formatdata({ data: result }));
    } else {
        res.send(formatdata({ code: 0 }));
    }
})

Router.post('/login', async (req, res) => {
    let { name, password, keep, master } = req.query;
    let colname = 'user';
    if (master) {
        colname = 'master';
    }
    let result = await mongo.find(colname, { name, password });
    if (result.length) {
        let token = '';
        if (keep) {
            token = create(name);
        }
        res.send(formatdata({ authorization: token }));
    } else {
        res.send(formatdata({ code: 0 }));
    }
})

Router.post('/del', async (req, res) => {
    let { name } = req.query;
    console.log(name);
    let result = await mongo.remove('user', { name });
    if (result.deletedCount) {
        res.send(formatdata({}));
    } else {
        res.send(formatdata({ code: 0 }));
    }
})

module.exports = Router;