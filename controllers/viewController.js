const Product =require('./../models/productModel');
const catchAsync = require('./../utils/catchAsync');
exports.getProduct =catchAsync(async(req,res)=>{
    const products = await Product.find();

    res.status(200).render('overview' ,{
        title :'All Product ',
        products
    })

}) 