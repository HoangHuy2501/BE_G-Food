var express = require('express');
var router = express.Router();
const CategoryController=require('../controller/CategoryController');
/* GET home page. */
router.get('/', CategoryController.getAllCategories);

module.exports = router;
