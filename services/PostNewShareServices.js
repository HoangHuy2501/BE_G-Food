const PostNewShareRepository = require("../repository/PostNewShareRepository");
const sequelize = require("../config/connectData");
const {
  missingFieldImage,
  missingFieldCheckUserId,
} = require("../utils/checkCloudinary");
const ApiErorr = require("../utils/ApiError");
class PostNewShareServices {
  //Tạo bài viết mới
  async createPostNewShare(req, id) {
    let t = await sequelize.transaction();
    try {
      await missingFieldImage(req.file);
      if (!id) {
        throw ApiErorr.ValidationError("user_id is required");
      }
      // await missingFieldCheckUserId(id);
      const data = req.body;
      data.userid = id;
      data.status = "active";
      const postNewShare = await PostNewShareRepository.createPostNewShare(
        data,
        { transaction: t }
      );
      const dataImage = {
        postshareid: postNewShare.dataValues.id,
        image: req.file.cloudinaryUrl,
        publicid: req.file.publicId,
      };
      await PostNewShareRepository.createPostImages(dataImage, {
        transaction: t,
      });
      await t.commit();
      return postNewShare;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
  // Lấy tất cả bài viết mới chia sẻ
  async getAllPostNewShares() {
    try {
      const postNewShares = await PostNewShareRepository.getAllPostNewShares();
      return postNewShares;
    } catch (error) {
      throw error;
    }
  }
  // Lấy tất cả bài viết cho admin quản lý
  async getAllPostNewSharesAdmin(search) {
    try {
      const sreach = search ? search : "";
      console.log('data',sreach);
      
      const postNewShares = await PostNewShareRepository.getAllPostNewSharesAdmin(sreach);
      return postNewShares;
    } catch (error) {
      throw error;
    }
  }

  // Lấy bài chi tiết cho admin
  async getPostNewShareByIdAdmin(id) {
    try {
      const postNewShare = await PostNewShareRepository.getPostNewShareByIdAdmin(id);
      return postNewShare;
    } catch (error) {
      throw error;
    }
  }
  // Lấy bài viết chi tiết
  async getPostNewShareById(id) {
    try {
      if (!id) {
        throw ApiErorr.ValidationError("postnewshare_id is required");
      }
      const postNewShare = await PostNewShareRepository.getPostNewShareById(id);
      return postNewShare;
    } catch (error) {
      throw error;
    }
  }

  // lock bài viết
  async lockPostNewShare(id) {
    try {
      if (!id) {
        throw ApiErorr.ValidationError("postnewshare_id is required");
      }
      const postNewShare = await PostNewShareRepository.lockPostNewShare(id);
      return postNewShare;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new PostNewShareServices();
