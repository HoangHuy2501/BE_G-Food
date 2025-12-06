const CategoryRepository = require('../repository/CategoryRepository');
const ApiErorr = require('../utils/ApiError');
class CategoryServices {
    async getAllCategories() {
        try {
            return await CategoryRepository.getCategoryByID();
        } catch (error) {
            throw error;
        }
    }

    async AddCategory(data) {
        try {
            return await CategoryRepository.AddCategory(data);
        } catch (error) {
            throw error;
        }
    }
    async UpdateCategory(id, data) {
        try {
            if (!id) {
                throw ApiErorr.ValidationError("category_id is required");
            }
            await this.CheckID(id);
            return await CategoryRepository.UpdateCategory(id, data);
        } catch (error) {
            throw error;
        }
    }
    async DeleteCategory(id) {
        try {
            if (!id) {
                throw ApiErorr.ValidationError("category_id is required");
            }
            await this.CheckID(id);
            return await CategoryRepository.DeleteCategory(id);
        } catch (error) {
            throw error;
        }
    }
    async CheckID(id){
        try {
            if(!id){
                throw ApiErorr.ValidationError('ID is required');
            }
            const check= await CategoryRepository.CheckID(id);
            if(!check){
                throw ApiErorr.NotFound('CategoryID not found');
            }
            return check
        } catch (error) {
            throw error;
        }
    }
}
module.exports = new CategoryServices();