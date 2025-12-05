var express = require('express');
var router = express.Router();
const UserController=require('../controller/UserController');
/* GET users listing. */
router.get('/:id', UserController.getUserByID);
router.get('/', UserController.getAllUser);
router.put('/:id', UserController.updateUser);
router.put('/lock/:id', UserController.LockUser);
router.put('/unlock/:id', UserController.UnLockUser);
module.exports = router;
