
const UserRepository=require('../repository/UserRepository');
const AuthRepository = require("../repository/AuthRepository");
const ApiErorr= require('../utils/ApiError');
class UserServices{
    async getUserByID(id){
        try {
            if(!id){
                throw ApiErorr.ValidationError('ID is required');
            }
            return await UserRepository.getUserByID(id);
        } catch (error) {
            throw error;
        }
    }

    async updateUser(req, id){
        try {
            if(!id){
                throw ApiErorr.ValidationError('ID is required');
            }
            const emailUser=await UserRepository.getUserByID(id)
            // check nếu email body mà khác email trong db thi check xem email nay da ton tai chua, còn nếu email body === email trong db thi khong check
            if(req.body.email !== emailUser.dataValues.email){
                const checkMail=await AuthRepository.checkEmail(req.body.email)
                if(checkMail){
                    throw ApiErorr.ValidationError("Email already exists")
                }
            }
            return await UserRepository.updateUser(id,req.body);
        } catch (error) {
            throw error;
        }
    }
}

module.exports=new UserServices();