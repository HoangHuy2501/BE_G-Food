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
}
module.exports = new UserRepository();