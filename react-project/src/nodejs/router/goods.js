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