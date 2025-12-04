const {PostNewsShareModel,PostImageModel,CategoryModel,UserModel}   = require('../models/index');

class PostNewShareRepository{
    //Tạo bài viết mới
    async createPostNewShare(data, options={}) {
        try {
            const postNewShare = await PostNewsShareModel.create(data,{...options});
            return postNewShare;
        } catch (error) {
            throw error;
        }
    }
    //tạo hình ảnh cho bài viết
    async createPostImages(data, options={}) {
        try {
            const postImages = await PostImageModel.create(data,{...options});
            return postImages;
        } catch (error) {
            throw error;
        }
    }

    // lấy tất cả bài viết
    async getAllPostNewShares() {
        try {
            const postNewShares = await PostNewsShareModel.findAll({
                attributes:['id','name'],
                include:[{
                    model: PostImageModel,
                    attributes: ['image']
                },{
                    model: CategoryModel,
                    attributes: ['name']
                },{
                    model: UserModel,
                    attributes: ['location']
                }],
                order:[['createat','DESC']],
                where: { status: 'active' }
            });
            return postNewShares;
        } catch (error) {
            throw error;
        }
    }
    // lấy bài viết chi tiết
    async getPostNewShareById(id) {
        try {
            const postNewShare = await PostNewsShareModel.findOne({
                attributes: ['id', 'name', 'content', 'createat'],
                include: [{
                    model: PostImageModel,
                    attributes: ['image']
                }, {
                    model: CategoryModel,
                    attributes: ['name']
                }, {
                    model: UserModel,
                    attributes: ['username','phone','location']
                }],
                where: { id: id }
            });
            return postNewShare;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = new PostNewShareRepository();