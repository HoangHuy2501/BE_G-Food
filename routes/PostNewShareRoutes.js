var express = require('express');
var router = express.Router();
const PostNewShareController=require('../controller/PostNewShareController');
const uploadFile=require('../middleware/uploadImage');
const validatePostNewShare=require('../middleware/validator/validate_postnewshare');
/* GET home page. */
router.get('/admin', PostNewShareController.getPostNewShareByAdmin);
router.get('/admin-detail/:id', PostNewShareController.getPostNewShareDetailByIDAdmin);
router.put('/lock/:id', PostNewShareController.lockPostShare);
router.get('/list-user/:id', PostNewShareController.getPostNewShareByUserId);
router.post('/:id', uploadFile('image'), validatePostNewShare, PostNewShareController.createPostNewShare);
router.get('/', PostNewShareController.getAllPostNewShares);
router.get('/:id', PostNewShareController.getPostNewShareById);

module.exports = router;