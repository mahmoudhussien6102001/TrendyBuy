const express = require('express');
const Router = express.Router();
const productController = require('./../controllers/productController');
Router.get('/', productController.allProducts);
Router.post('/', productController.uploadProductImage,productController.createProduct);
Router.get('/:id', productController.getProduct);
Router.patch('/:id', productController.updateProduct);
Router.delete('/:id', productController.deleteProduct);
module.exports = Router;