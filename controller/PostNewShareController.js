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
exports.getAllPostNewShares = async (req, res, next) => {
  try {
    const result = await PostNewShareService.getAllPostNewShares();
    return res.json(ApiSuccess.getSelect("PostNewShare", result));
  } catch (error) {
    return next(error);
  }
};
exports.getPostNewShareById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await PostNewShareService.getPostNewShareById(id);
    return res.json(ApiSuccess.getSelect("PostNewShare detail", result));
  } catch (error) {
    return next(error);
  }
};

exports.getPostNewShareByAdmin = async (req, res, next) => {
  try {
    const search = req.query.search;
    const result = await PostNewShareService.getAllPostNewSharesAdmin(search);
    return res.json(ApiSuccess.getSelect("PostNewShare detail", result));
  } catch (error) {
    return next(error);
  }
};

exports.getPostNewShareDetailByIDAdmin=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const result=await PostNewShareService.getPostNewShareByIdAdmin(id);
        return res.json(ApiSuccess.getSelect("PostNewShare detail", result));
    } catch (error) {
        return next(error);
    }
}