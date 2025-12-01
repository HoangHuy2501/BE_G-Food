var express = require('express');
var router = express.Router();
const AIController=require("../controller/AIController")
/* GET home page. */
router.post('/AI', AIController.ChatAI);

module.exports = router;