var express = require("express");
var router = express.Router();
const apiController = require("../api/ApiController");
router.get("/home", apiController.HomePage);
module.exports = router;
