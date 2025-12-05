const {UserModel} = require('../models/index');

class UserRepository {
    async getUserByID(id) {
        return await UserModel.findByPk(id,{
            attributes: ['id', 'username', 'email','sex', 'phone', 'location', 'createat']
        });
    };
    async updateUser(id,data) {
        return await UserModel.update(data,{where:{id:id}});
    };
    // khóa tài khoản
    async lockUser(id) {
        return await UserModel.update({status:false},{where:{id:id}});
    };

    // mở tài khoản 
    async unlockUser(id) {
        return await UserModel.update({status:true},{where:{id:id}});
    };

    async getAllUsers() {
        return await UserModel.findAll({
            attributes: ['id', 'username', 'email','sex', 'phone', 'location','status', 'createat'],
            order:[['createat','DESC']]
        });
    };
}
module.exports = new UserRepository();