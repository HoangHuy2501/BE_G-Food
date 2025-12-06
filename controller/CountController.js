const CountService=require("../services/CountServices")
const ApiSuccess = require("../utils/ApiSuccess");
exports.getCountPost=async(req,res,next)=>{
    try {
        const result=await CountService.CountPostNewShare();
        return res.json(ApiSuccess.getSelect("Count", result));
    } catch (error) {
        return next(error);
    }
}