const express = require('express');
let {
    formatdata
} = require('../utils/formatdata');

const Router = express.Router();

// var ObjectID=require('mongodb').ObjectID;

let {
    mongo
} = require('../db/index');

let {
    create
} = require('../utils/token');

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

Router.get('/', async (req, res) => { //查找所有用户
    let result = await mongo.find('user', req.query);
    if (result.length) {
        res.send(formatdata({
            data: result
        }));
    } else {
        res.send(formatdata({
            code: 0
        }));
    }
});


//添加用户，用户注册
Router.post('/reg', async (req, res) => {
    // console.log('yuan0')
    // console.log(req.body)
    /* post 请求，要用req.body
       get  请求，用req.param
    */
    let result = await mongo.create('user', [req.body]);
    // window.console.log(req.query)
    // window.console.log(result);

    if (result.insertedCount) {
        res.send(formatdata({}));
    } else {
        res.send(formatdata({
            code: 0
        }));
    }
});

Router.post('/changeuserinfo', async (req, res) => {
    let result = await mongo.update('user', query)
})

//查找用户是否存在
Router.get('/check', async (req, res) => { //查找用户是否存在
    let result = await mongo.find('user', req.query);
    // console.log('---------------')
    console.log(result)
    if (result.length) {
        res.send(formatdata({
            data: result
        }));
    } else {
        res.send(formatdata({
            code: 0
        }));
    }
})

/* 登录   查*/
Router.post('/login', async (req, res) => {
    let {
        // name,
        password,
        keep,
        // master,
        phone
    } = req.body; /* get请求 用query接收     post 请求用req.body接收*/
    // console.log(phone, password, keep);
    console.log(req.body);
    /* 接收到字符串
     */
    let colname = "user";

    let result = await mongo.find(colname, {
        phone: phone,
        /* 使用手机号码登录 */
        // name,
        password: password
    });

    // console.log(result, '788')

    if (result.length) {
        let token = '';
        // console.log(keep, 5555555555555555555555)
        // console.log(typeof keep)
        /*Boolean(keep) 将字符串转换为布尔值，永远为 true  */
        // console.log(Boolean(keep));
        /* { phone: '13245678900', password: '123456', keep: 'false' } */
        /*-------------------- 接收到的keep被转换为了string 类型（字符串类型---------） */
        if (keep == 'true') {
            // console.log(keep);
            // console.log(666);
            token = create(phone);
        }

        res.send(formatdata({
            authorization: token
        }));


    } else {
        res.send(formatdata({
            code: 0
        }));
    }
})

/* 删除  删 */
Router.post('/del', async (req, res) => {
    let {
        /* 删除 */
        name
    } = req.query;
    console.log(name);
    let result = await mongo.remove('user', {
        name
    });
    if (result.deletedCount) {
        res.send(formatdata({}));
    } else {
        res.send(formatdata({
            code: 0
        }));
    }
})

/* 改 */
Router.post('/updata', async (req, res) => {
    let {
        phone,
        password
    } = req.body;
    console.log(phone);
    let result = await mongo.update('user', {
        phone: phone
    }, {
        $set: {
            password: password
        }
    });
    if (result.modifiedCount) {
        res.send(formatdata({}));
    } else {
        res.send(formatdata({
            code: 0
        }));
    }

})

module.exports = Router;