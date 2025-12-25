const ReceivePostRepository=require('../repository/ReceivePostRepository');
const PostNewShareRepository=require('../repository/PostNewShareRepository');
const ApiError=require('../utils/ApiError');
const sequelize=require('../config/connectData');
class ReceivePostServices{
    // gửi yêu cầu nhận sản phẩm
    async SendReceivePost(userID, postshareID) {
        try {
            const checkUserAndPost= await ReceivePostRepository.checkReceivePost(postshareID, userID);
            if(checkUserAndPost){
                throw ApiError.ValidationError('you have received this post');
            }
            const data={
                userid:userID,
                postshareid:postshareID,
                status: false
            }
            return await ReceivePostRepository.SendReceivePost(data);
        } catch (error) {
            throw error;
        }
    }
    // danh sách user muốn nhận sản phẩm - id sản phẩm
    async getAllReceivePost(postshareID) {
        try {
            const checkStatus= await ReceivePostRepository.checkPostNewShareForReceived(postshareID);
            if(checkStatus){
                throw ApiError.ValidationError('postnewshare_id is received');
            }
            return await ReceivePostRepository.getAllReceivePost(postshareID);
        } catch (error) {
            throw error;
        }
    }
    // duyệt sản phẩm - id là id của người được nhận
    async AcceptReceivePost(postID,receiveID) {
        const t= await sequelize.transaction();
        try {
            await PostNewShareRepository.updateStatus(postID, {transaction:t});
            await ReceivePostRepository.AcceptReceivePost(receiveID, {transaction:t});
            await t.commit();
            return true;
        } catch (error) {
            await t.rollback();
            throw error;

        }
    }
    // danh sách được nhận sản phẩm của họ cho - userid
    async getAllReceivePostByUserId(userId) {
        try {
            if(!userId){
                throw ApiError.ValidationError('user_id is required');
            }
            return await ReceivePostRepository.getAllReceivePostByUserId(userId);
        } catch (error) {
            throw error;
        }
    }
    // đánh giá bài viết bởi userid người nhận
    async CommentPost(userID,data,postshareID){ 
        try {
            if(!userID || !postshareID){
                throw ApiError.ValidationError('user_id and postshare_id is required');
            }
            if(!data.content){
                throw ApiError.ValidationError('content is required');
            }
            const checkUserStatus= await ReceivePostRepository.checkReceivePostStatus(postshareID, userID);
            if(!checkUserStatus){
                throw ApiError.ValidationError('you have not received this post');
            }
            const checkCommentPost= await ReceivePostRepository.checkCommentPost(postshareID);
            if(checkCommentPost){
                throw ApiError.ValidationError('you have commented this post');
            }
            data.userid=userID;
            data.postshareid=postshareID;
            return await ReceivePostRepository.CommentPost(data);
        } catch (error) {
            throw error;
        }
    }
    // lịch sử bài nhận
    async getHistoryReceivePost(userId) {
        try {
            if(!userId){
                throw ApiError.ValidationError('user_id is required');
            }
            return await ReceivePostRepository.getHistoryReceivePost(userId);
        } catch (error) {
            throw error;
        }
    }
    // liên hệ người cho để nhận sản phẩm
    async getContactReceivePost(PostID,userId) {
        try {
            if(!userId || !PostID){
                throw ApiError.ValidationError('user_id and post_id is required');
            }
            return await ReceivePostRepository.getContactReceivePost(PostID,userId);
        } catch (error) {
            throw error;
        }
    }
}
module.exports=new ReceivePostServices();