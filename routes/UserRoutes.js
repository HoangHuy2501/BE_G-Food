var express = require('express');
var router = express.Router();
const UserController=require('../controller/UserController');
/* GET users listing. */
router.get('/:id', UserController.getUserByID);
router.put('/:id', UserController.updateUser);
module.exports = router;
