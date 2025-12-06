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

exports.AddCategory = async (req, res, next) => {
    try {
        const data=req.body
        const result = await CategoryServices.AddCategory(data);
        return res.json(ApiSuccess.created('Category'));
    } catch (error) {
        return next(error);
    }
}

exports.updateCategory = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data=req.body
        const result = await CategoryServices.UpdateCategory(id, data);
        return res.json(ApiSuccess.updated('Category'));
    } catch (error) {
        return next(error);
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await CategoryServices.DeleteCategory(id);
        return res.json(ApiSuccess.deleted('Category'));
    } catch (error) {
        return next(error);
    }
}