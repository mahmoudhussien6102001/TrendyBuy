const express = require('express');
const Router = express.Router();
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

Router.get('/', userController.allUser);
Router.post('/', userController.createUser);

Router.post('/signup' ,authController.signUp );
Router.post('/login' ,authController.login );
Router.post('/logout' ,authController.logout );


Router.get('/:id', userController.getUser);
Router.patch('/:id', userController.updateUser);
Router.delete('/:id', userController.deleteUser);
module.exports = Router;