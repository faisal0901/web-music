var express = require("express");
var router = express.Router();
const apiController = require("../api/ApiController");
router.get("/home", apiController.HomePage);
router.get("/detail/:id", apiController.DetailPage);
module.exports = router;
