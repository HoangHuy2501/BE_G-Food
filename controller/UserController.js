const UserServices=require('../services/UserServices');
const ApiSuccess= require('../utils/ApiSuccess');
exports.getUserByID=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const result=await UserServices.getUserByID(id);
        return res.json(ApiSuccess.getSelect("User", result));
    } catch (error) {
        return next(error);
    }
}