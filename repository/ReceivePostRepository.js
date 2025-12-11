const {ReceivePostModel,UserModel,PostNewsShareModel,CommentModel}= require('../models/index');

class ReceivePostRepository {
    // gửi yêu cầu nhận sản phẩm
    async SendReceivePost(data){
        return await ReceivePostModel.create(data);
    }
    //check trạng thái bài viết đã nhận hay chưa - id bài viết
    async checkPostNewShareForReceived(id){
        return await ReceivePostModel.findOne({where:{postshareid:id, status:true}});
    }
    // check tài khoản này đã xác nhận chọn bài viết hay chưa
    async checkReceivePost(postID, userID){
        return await ReceivePostModel.findOne({where:{postshareid:postID, userid:userID}});
    }
    // hiển thị các user mà yêu cầu nhận của id bài viết
    async getAllReceivePost(postshareID){
        return await ReceivePostModel.findAll({
            attributes:['id'],
            where:{postshareid:postshareID},
            include: [{
                model: UserModel,
                attributes: ['id','username'],
            }]
        });
    }

    // duyệt sản phẩm - id là id của người được nhận
    async AcceptReceivePost(id, options={}){
        return await ReceivePostModel.update({status:true},{where:{id:id},...options});
    }

    // danh sách được nhận sản phẩm của họ cho - userid
    async getAllReceivePostByUserId(userId){
        return await ReceivePostModel.findAll({
            attributes:['id','postshareid'],
            where:{userid:userId, status:true},
            include: [{
                model: PostNewsShareModel,
                attributes: ['id','name','content','createat'],
                order:[['createat','DESC']]
            }]
        });
    }
    // đánh giá bài viết
    async CommentPost(data){
        return await CommentModel.create(data);
    }
}
module.exports = new ReceivePostRepository();