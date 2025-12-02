const {CategoryModel} = require('../models/index');

class CategoryRepository {
    async getCategoryByID() {
        return await CategoryModel.findAll();
    }
}
module.exports = new CategoryRepository();