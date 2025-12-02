const {PostNewsShareModel,PostImageModel}   = require('../models/index');

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
}
module.exports = new PostNewShareRepository();