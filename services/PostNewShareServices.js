const PostNewShareRepository = require('../repository/PostNewShareRepository');
const sequelize = require('../config/connectData');
const {missingFieldImage,missingFieldCheckUserId} = require('../utils/checkCloudinary');
const ApiErorr= require('../utils/ApiError');
class PostNewShareServices {
    //Tạo bài viết mới
    async createPostNewShare(req,id) {
        let t= await sequelize.transaction();
        try {
            await missingFieldImage(req.file);
            if(!id){
                throw ApiErorr.ValidationError('user_id is required');
            }
            // await missingFieldCheckUserId(id);
            const data = req.body;
            data.userid=id;
            data.status="active";
            const postNewShare = await PostNewShareRepository.createPostNewShare(data,{transaction: t});
            const dataImage={
                postshareid:postNewShare.dataValues.id,
                image:req.file.cloudinaryUrl,
                publicid:req.file.publicId
            }
            await PostNewShareRepository.createPostImages(dataImage,{transaction: t});
            await t.commit();
            return postNewShare;
        } catch (error) {
            await t.rollback();
            throw error;
        }
    }
}
module.exports = new PostNewShareServices();