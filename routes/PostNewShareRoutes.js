var express = require('express');
var router = express.Router();
const PostNewShareController=require('../controller/PostNewShareController');
const uploadFile=require('../middleware/uploadImage');
const validatePostNewShare=require('../middleware/validator/validate_postnewshare');
/* GET home page. */
router.post('/:id', uploadFile('image'), validatePostNewShare, PostNewShareController.createPostNewShare);
module.exports = router;