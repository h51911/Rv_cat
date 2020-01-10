var express = require('express');
var router = express.Router();
const { find, insertMany, updateOne, deleteOne } = require('../db/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  res.render('index', { title: 'Express' });
});

router.get('/home', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('home');
  res.json(data);
});

module.exports = router;
