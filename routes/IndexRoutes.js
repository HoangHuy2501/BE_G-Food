var express = require('express');
var router = express.Router();
const CountController= require("../controller/CountController")
/* GET home page. */
router.get('/count-post', CountController.getCountPost);
module.exports = router;
