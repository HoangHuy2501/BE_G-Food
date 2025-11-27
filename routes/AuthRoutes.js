var express = require('express');
var router = express.Router();
const AuthController= require("../controller/AuthController")
const validator= require("../middleware/validator/validate_auth")
router.post('/login',AuthController.login)
router.post('/register',validator, AuthController.register)

module.exports = router;
