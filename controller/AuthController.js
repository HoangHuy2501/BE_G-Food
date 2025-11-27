const ApiSuccess = require("../utils/ApiSuccess");
const AuthServices= require("../services/AuthServices")

exports.login =async (req, res, next) => {
  try {
    const result = await AuthServices.loginUser(req);
    return res.json(ApiSuccess.getSelect("User", result));
  } catch (error) {
    return next(error);
  }
}
exports.register =async (req, res, next) => {
  try {
    const result = await AuthServices.registerUser(req);
    return res.json(ApiSuccess.created("register"));
  } catch (error) {
    return next(error);
  }
}