const {PostNewsShareModel,PostImageModel,CategoryModel,UserModel,ReceivePostModel}   = require('../models/index');
const { Op } = require("sequelize");
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

    // lấy tất cả bài viết có status=active
    async getAllPostNewShares() {
        try {
            const postNewShares = await PostNewsShareModel.findAll({
                attributes:['id','name','content','status','createat'],
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
    // lấy tất cả bài viết cho admin quản lý
    async getAllPostNewSharesAdmin(sreach) {
        try {
            return await PostNewsShareModel.findAll({
                attributes: ['id', 'name', 'content', 'status', 'createat'],
                include: [{
                    model: CategoryModel,
                    attributes: ['name']
                },{
                    model: UserModel,
                    attributes: ['location']
                }],
                where: sreach
                ? { name: { [Op.iLike]: `%${sreach}%` } }  // có search thì dùng LIKE
                : {},
                order: [['createat', 'DESC']]
            });
        } catch (error) {
            throw error;
        }
    }
    // lấy bài chi tiết cho admin
    async getPostNewShareByIdAdmin(id) {
        try {
            const postNewShare = await PostNewsShareModel.findOne({
                attributes: ['id', 'name', 'content', 'status', 'createat'],
                include: [{
                    model: PostImageModel,
                    attributes: ['image']
                },{
                    model: CategoryModel,
                    attributes: ['name']
                },{
                    model: UserModel,
                    attributes: ['location','username']
                }],
                where: { id: id }
            });
            const count = await ReceivePostModel.count({
            where: { postshareid: id }
        });

            return {
                ...postNewShare.get(),
                receiveCount: count
            };
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