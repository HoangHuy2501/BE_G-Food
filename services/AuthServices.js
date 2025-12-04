const AuthRepository = require("../repository/AuthRepository");
const ApiError = require("../utils/ApiError");
const {hashPassword,checkHashPass}=require("../utils/hashPassword")
class AuthServices{
    async loginUser(req){
       try {
        const data=req.body;
        if(!data.email || !data.password){
            throw ApiError.ValidationError("Email and password are required")
        }
        const check=await AuthRepository.checkEmail(data.email)
        if(check){
            const isPass=await checkHashPass(data.password,check.password)
            if(isPass){
                return await AuthRepository.getUserID(check.id)
            }else{
                throw ApiError.Unauthorized("Username or password is incorrect")
            }
        }else{
            throw ApiError.Unauthorized("Username or password is incorrect")
        }
       } catch (error) {
        throw error
       }
    }
    async registerUser(req){
        try {
            const data=req.body;
            data.status=true;
            if(!data.sex){
                throw ApiError.ValidationError("Sex is required")
            } else if(data.sex==='true'){
                data.sex=true
            }else if(data.sex==='false'){
                data.sex=false
            }
            const checkMail=await AuthRepository.checkEmail(data.email)
            if(checkMail){
                throw ApiError.ValidationError("Email already exists")
            }
            data.password=await hashPassword(data.password)
            return await AuthRepository.CreateUser(data)
        } catch (error) {
            throw error
        }
    }
}
module.exports = new AuthServices()