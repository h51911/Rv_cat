var express = require('express');
var router = express.Router();
const { find, insertMany, updateOne, deleteOne } = require('../db/db');
/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   res.json(0);
// });

router.get('/second', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let { mun } = req.query;
  // console.log(num);
  let data = await find('allCart', { mun: mun - 0 })
  res.json(data)
});

router.get('/all', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let { mun } = req.query;
  console.log(mun);
  let data = await find('classify', { mun: mun })
  res.json(data)
});

router.get('/ss', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let { mun } = req.query;
  console.log(mun);
  let data = await find('allflower', { classification: mun })
  res.json(data)
});



module.exports = router;
