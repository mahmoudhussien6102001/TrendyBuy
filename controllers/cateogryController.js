const Category = require('./../models/cateogryModel');
const catchAsync =require('./../utils/catchAsync');
const Factory =require('./../controllers/handleController');
/*
exports.allCategories = catchAsync(async (req, res) => {
   
        const categories = await Category.find();
        if (categories.length === 0) {
            return res.status(404).json({
                status: 'fail',
                message: 'No categories found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                categories: categories
            }
        });
   
});

exports.getCategory = catchAsync (async (req, res) => {
   
        const id = req.params.id;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                category: category
            }
        });
   
});

exports.createCategory =catchAsync( async (req, res) => {
   
        const category = await Category.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                category: category
            }
        });
   
});

exports.updateCategory =catchAsync( async (req, res) => {
    
        const id = req.params.id;
        const category = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                category: category
            }
        });
    

});

exports.deleteCategory = catchAsync(async (req, res) => {
    
        const id = req.params.id;
        await Category.findByIdAndDelete(id);
        res.status(204).json({
            status: 'success',
            data: null
        });
   
});
*/
exports.allCategories=Factory.getAll(Category);
exports.getCategory=Factory.getOne(Category);
exports.createCategory =Factory.createOne(Category);
exports.updateCategory=Factory.updateOne(Category);
exports.deleteCategory=Factory.deleteOne(Category);
