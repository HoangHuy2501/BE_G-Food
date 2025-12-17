var express = require('express');
var router = express.Router();
const aiLimiter = require("../middleware/aiLimiter");
const AIController=require("../controller/AIController")
/* GET home page. */
router.post('/AI',aiLimiter, AIController.ChatAI);

module.exports = router;