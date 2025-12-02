const CategoryRepository = require('../repository/CategoryRepository');

class CategoryServices {
    async getAllCategories() {
        try {
            return await CategoryRepository.getCategoryByID();
        } catch (error) {
            throw error;
        }
    }
}
module.exports = new CategoryServices();