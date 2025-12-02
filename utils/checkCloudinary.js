const ApiError = require("./ApiError");
const ErrorMessageBase = require("./ErrorMessageBase");
const UserRepository= require('../repository/UserRepository')
async function missingFieldImage(image) {
  if (!image) {
    throw ApiError.ValidationError(
      ErrorMessageBase.format(ErrorMessageBase.NotEmpity, {
        PropertyName: "image",
      })
    );
  }
  return true
}

async function missingFieldCheckUserId(id) {
    if(!id) throw ApiError.ValidationError( ErrorMessageBase.format(ErrorMessageBase.NotEmpity, { PropertyName: "user_id"}))
    const check=await UserRepository.getUserByID(id)
    if(!check) throw ApiError.NotFound(ErrorMessageBase.format(ErrorMessageBase.NotFound,`user_${id}`))
    return true
}

module.exports={missingFieldImage,missingFieldCheckUserId}