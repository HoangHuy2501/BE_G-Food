const {UserModel,RoleModel,UserRoleModel} = require('../models/index');

class AuthRepository{
    // đăng ký tài khoản
    async CreateUser(data){
        try {
            const user=await UserModel.create(data);
            const roleid='e49fefa5-8dd6-4827-9fbe-48ae556d241d'; // role user
            await UserRoleModel.create({userid:user.id,roleid:roleid});
            return user;
        } catch (error) {
            throw error;
        }
    }
    // kiểm tra email đã tồn tại chưa
    async checkEmail(email){
        return await UserModel.findOne({
            attributes: ['id','password'],
            where:{email:email}});
    }
    // kiểm tra email và mật khẩu
    async getUserID(id){
        return await UserModel.findOne({
            attributes: ['id','email','username'],
            where:{id:id},
            include: [{
                    model: RoleModel,
                    attributes: ['rolename'],
                    through: { attributes: [] }  // bỏ cột junction (UserRoleModel)
            }]           
        });
    }
}
module.exports = new AuthRepository();