var express = require('express');
var router = express.Router();
const CategoryController=require('../controller/CategoryController');
const validator=require('../middleware/validator/validateCategory')
/* GET home page. */
router.get('/', CategoryController.getAllCategories);
router.post('/', validator, CategoryController.AddCategory);
router.put('/:id', validator, CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);
module.exports = router;
