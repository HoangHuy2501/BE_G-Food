const {CategoryModel} = require('../models/index');

class CategoryRepository {
    async getCategoryByID() {
        return await CategoryModel.findAll();
    }
    async AddCategory(data) {
        return await CategoryModel.create(data);
    }
    async UpdateCategory(id,data) {
        return await CategoryModel.update(data,{where:{id:id}})
    }
    async DeleteCategory(id) {
        return await CategoryModel.destroy({where:{id:id}});
    }
    async CheckID(id) {
        return await CategoryModel.findByPk(id);
    }
}
module.exports = new CategoryRepository();