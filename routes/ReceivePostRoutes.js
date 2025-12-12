var express = require('express');
var router = express.Router();
const ReceivePostController=require('../controller/ReceivePostController');
/* GET home page. */
router.post('/send/:id', ReceivePostController.SendReceivePost);
// danh sách các user muốn nhận sản phẩm - id sản phẩm
router.get('/list/:id', ReceivePostController.getAllReceivePost);
// duyệt sản phẩm - id là id của bai viết + query userid
router.put('/accept/:postID/:receiveID', ReceivePostController.AcceptReceivePost);
// danh sách được nhận sản phẩm của họ cho - userid
router.get('/list-user/:id', ReceivePostController.getAllReceivePostByUserId);
// đánh giá bài viết
router.post('/comment/:id', ReceivePostController.CommentPost);
// lịch sử bài nhận
router.get('/history/:id', ReceivePostController.getHistoryReceivePost);
module.exports = router;