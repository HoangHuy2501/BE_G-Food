const ReceivePostServices=require('../services/ReceivePostServices');
const ApiSuccess = require('../utils/ApiSuccess');

// gửi yêu cầu nhận sản phẩm
exports.SendReceivePost=async(req,res,next)=>{
    try {
        const userID=req.query.userid;
        const postshareID=req.params.id;
        const data=await ReceivePostServices.SendReceivePost(userID,postshareID);
        return res.status(200).json(ApiSuccess.created("ReceivePost"));
    } catch (error) {
        return next (error);
    }
}
// danh sách các user muốn nhận sản phẩm - id sản phẩm
exports.getAllReceivePost=async(req,res,next)=>{
    try {
        const postshareID=req.params.id;
        const data=await ReceivePostServices.getAllReceivePost(postshareID);
        return res.status(200).json(ApiSuccess.getSelect("getAllReceivePost",data));
    } catch (error) {
        return next (error);
    }
}
// duyệt sản phẩm - id là id của bai viết + query userid
exports.AcceptReceivePost=async(req,res,next)=>{
    try {
        const postID=req.params.postID;
        const receiveID=req.params.receiveID;
        const data=await ReceivePostServices.AcceptReceivePost(postID,receiveID);
        return res.status(200).json(ApiSuccess.updated("AcceptReceivePost"));
    } catch (error) {
        return next (error);
}
}
// danh sách được nhận sản phẩm của họ cho - userid
exports.getAllReceivePostByUserId=async(req,res,next)=>{
    try {
        const userId=req.params.id;
        const data=await ReceivePostServices.getAllReceivePostByUserId(userId);
        return res.status(200).json(ApiSuccess.getSelect("getAllReceivePostByUserId",data));
    } catch (error) {
        return next (error);
    }
}

// đánh giá bài viết bởi userid người nhận
exports.CommentPost=async(req,res,next)=>{
    try {
        const userID=req.query.userid;
        const data=req.body;
        const postshareID=req.params.id;
        const result=await ReceivePostServices.CommentPost(userID,data,postshareID);
        return res.status(200).json(ApiSuccess.created("CommentPost"));
    } catch (error) {
        return next (error);
    }
}