const { body, validationResult } = require("express-validator");
const ApiError = require("../../utils/ApiError");
const cloudinary = require("../../config/connectCloudinary");
const ErrorMessageBase = require("../../utils/ErrorMessageBase");
const validateUser = [
  body("name").notEmpty().withMessage(ErrorMessageBase.format(ErrorMessageBase.NotEmpity, { PropertyName: "name"})),
  body("description").notEmpty().withMessage(ErrorMessageBase.format(ErrorMessageBase.NotEmpity, { PropertyName: "description"})).bail().isLength({ min: 5, max: 100 }).withMessage(ErrorMessageBase.format(ErrorMessageBase.Range, { PropertyName: "description", MinLength: 5, MaxLength: 100})),
  async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        if(req.file && req.file.publicId){
      await cloudinary.uploader.destroy(req.file.publicId)
    }
    const formattedErrors = errors.array().map(err => ({
      field: err.path,
      message: err.msg
    }));
    
      return next( ApiError.ValidationError(formattedErrors));
    }
    next();
  }
];

module.exports =  validateUser ;