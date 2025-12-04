
const UserRepository=require('../repository/UserRepository');
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
            return await UserRepository.updateUser(id,req.body);
        } catch (error) {
            throw error;
        }
    }
}

module.exports=new UserServices();