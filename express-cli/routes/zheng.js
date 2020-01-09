var express = require("express");
var router = express.Router();
const { find, insertMany, updateOne, deleteOne } = require("../db/db");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  res.render("index", { title: "Express" });
});

/* brand */
router.get("/brand", async function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  let data = await find("brand");
  res.send(data);
});

router.get("/brand/:id", async function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  let data = await find("brand");
  res.send(data);
});

/* condition */
router.get("/condition", async function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  let data = await find("condition");
  res.send(data);
});

router.get("/car", async function(req, res, next) {
  res.append("Access-Control-Allow-Origin", "*");
  let data = await find("car");
  res.send(data);
});

module.exports = router;
