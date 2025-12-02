const PostNewShareService = require("../services/PostNewShareServices");
const ApiSuccess = require("../utils/ApiSuccess");
const cloudinary = require("../config/connectCloudinary");
exports.createPostNewShare = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await PostNewShareService.createPostNewShare(req, id);
    return res.json(ApiSuccess.created("PostNewShare", result));
  } catch (error) {
     await cloudinary.uploader.destroy(req.file.publicId)
    return next(error);
  }
};