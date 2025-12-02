const {UserModel} = require('../models/index');

class UserRepository {
    async getUserByID(id) {
        return await UserModel.findByPk(id,{
            attributes: ['id', 'username', 'email','sex', 'phone', 'location', 'createat']
        });
    }
}
module.exports = new UserRepository();