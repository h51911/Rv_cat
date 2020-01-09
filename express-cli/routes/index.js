var express = require('express');
var router = express.Router();
const { find, insertMany, updateOne, deleteOne } = require('../db/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  res.render('index', { title: 'Express' });
});
//首页
router.get('/home', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('home');
  res.json(data);
});
//视频列表
router.get('/video', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('videolist');
  res.json(data);
});
//视频详情
router.get('/videoxiang', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let { id } = req.query;
  let data = await find('videoxiang', { id: id * 1 });
  res.json(data);
});
module.exports = router;
