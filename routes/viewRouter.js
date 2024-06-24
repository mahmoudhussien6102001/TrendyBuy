const express =require('express');
const router = express.Router();
const viewController =require('./../controllers/viewController');


router.get('/' ,viewController.getProduct);
module.exports=router