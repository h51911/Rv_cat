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

<<<<<<< HEAD
// router.get('/ss', async (req, res, next) => {
//   res.append('Access-Control-Allow-Origin', '*');
//   let { mun } = req.query;
//   console.log(mun);
//   let data = await find('allflower', { classification: mun })
//   res.json(data)
// });

// 管理员账户

router.get('/admin', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let { username, password } = req.query;
  // console.log(user,psw)
  let result = await find('admin', { username, password })
  // console.log(result)
  if (result.length > 0) {
    res.send(formatData())
  } else {
    res.send(formatData({ code: 0 }))
  }

})
=======
router.get('/ss', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let { mun } = req.query;
  console.log(mun);
  let data = await find('allflower', { classification: mun })
  res.json(data)
});
>>>>>>> parent of 23933b61... 第一次修改仓库

// 查询注册用户表
router.get('/login', async (req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find("user");

  res.json(data)
  
});

module.exports = router;
