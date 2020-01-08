const express = require("express");

const Router = express.Router();
Router.use(express.urlencoded({}));//可以获取body

const usersRouter = require('./users');
// const goodsRouter = require('./goods');

Router.use('/users', usersRouter);
// Router.use('/goods', usersRouter);

module.exports = Router;