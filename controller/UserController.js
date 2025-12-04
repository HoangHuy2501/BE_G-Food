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

exports.updateUser=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const result=await UserServices.updateUser(req,id);
        return res.json(ApiSuccess.updated("User"));
    } catch (error) {
        return next(error);
    }
}

exports.LockUser=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const result=await UserServices.LockUser(id);
        return res.json(ApiSuccess.updated("Lock User"));
    } catch (error) {
        return next(error);
    }
}
exports.UnLockUser=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const result=await UserServices.UnLockUser(id);
        return res.json(ApiSuccess.updated("UnLock User"));
    } catch (error) {
        return next(error);
    }
}