var express = require("express");
var router = express.Router();
const { find, insertMany, updateOne, deleteOne } = require("../db/db");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  res.render("index", { title: "Express" });
});

/* brand */
/* 渲染 按品牌  */
router.get("/brand", async function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  let data = await find("brand");
  res.send(data);
});

/*列表页 -车型 */
router.get("/list", async function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  console.log(req.query);

  let data = await find("list",req.query);
  res.send(data);
});

/* condition */
/* 渲染  按条件 */
router.get("/condition", async function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  let data = await find("condition");
  res.send(data);
});

/* car  热门车 */
router.get("/car", async function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  let data = await find("car");
  res.send(data);
});

module.exports = router;
