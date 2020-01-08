var express = require('express');
var router = express.Router();
const { find, insertMany, updateOne, deleteOne } = require('../db/db');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  res.json(0);
});
router.get('/', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  res.json(0);
});

module.exports = router;
