const AuthRepository = require("../repository/AuthRepository");
const ApiError = require("../utils/ApiError");
class AuthServices{
    async loginUser(req){
       try {
        const data=req.body;
        const check=await AuthRepository.checkEmailAndPass(data.email,data.password)
        if(check){
            return check
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
            const checkMail=await AuthRepository.checkEmail(data.email)
            if(checkMail){
                throw ApiError.ValidationError("Email already exists")
            }
            return await AuthRepository.register(data)
        } catch (error) {
            throw error
        }
    }
}
module.exports = new AuthServices()