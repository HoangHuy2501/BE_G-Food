const CategoryServices = require('../services/CategoryServices');
const ApiSuccess = require('../utils/ApiSuccess');
exports.getAllCategories = async (req, res, next) => {
    try {
        const result = await CategoryServices.getAllCategories();
        return res.json(ApiSuccess.getSelect('Categories', result));
    } catch (error) {
        return next(error);
    }
}