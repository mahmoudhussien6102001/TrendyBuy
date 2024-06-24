const express = require('express');
const Router = express.Router();
const categoryController =require('./../controllers/cateogryController')

Router.get('/', categoryController.allCategories); 
Router.post('/', categoryController.createCategory); 

Router.get('/:id', categoryController.getCategory); 
Router.patch('/:id', categoryController.updateCategory); 
Router.delete('/:id', categoryController.deleteCategory);

module.exports = Router;
