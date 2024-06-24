const Product = require('./../models/productModel');
const catchAsync=require('./../utils/catchAsync');
const factory =require('./../controllers/handleController');
const multer = require('multer');
/*
exports.allProducts = catchAsync (async (req, res) =>{
   
    const products = await  Product.find();
    if(products.length === 0){
        return res.status(404).json({
            status: 'fail',
            message: 'no products'
        });
    }
        res.status(200).json({
            status: 'success',
            data :{
                product : products
            }
        });

    });

exports.getProduct =catchAsync( async (req, res) =>{
   

        const id = req.params.id;
        const product = await  Product.findById(id);
        if(!product){
            return res.status(404).json({
                status: 'fail',
                message: 'no product'
            });
        }
        res.status(200).json({
            status:'success',
            data :{
                product : product
            }
        });

    
});

exports.createProduct = catchAsync (async (req, res) => {
    const filterObject = 
        const productnew = await Product.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                products: productnew
            }
        });
   
});
exports.updateProduct = catchAsync(async (req,res )=>{
    
        const id = req.params.id;
        const product = await  Product.findByIdAndUpdate(id,req.body,{
            new :true,
            runValidators :true
            });
        res.status(200).json({
            status:'success',
            data: {
                product
            }
        });
});
exports.deleteProduct =catchAsync(async (req ,res)=>{
    try{
   
        const id = req.params.id;
         await  Product.findByIdAndDelete(id);
        res.status(200).json({
            status:'success',
            data: {
                product : null
            }
        });

    }
    }

});
*/


// Multer configuration
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public'); // Save files to the 'public' folder
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      cb(null, `product-${Date.now()}.${ext}`); // Set filename as 'product-currentTimestamp.fileExtension'
    }
  });
  
  const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload only images.'), false);
    }
  };
  
  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
  });
  
exports.uploadProductImage = upload.single('image');
exports.allProducts =factory.getAll(Product);
exports.getProduct =factory.getOne(Product);
exports.createProduct =factory.createOne(Product);
exports.updateProduct =factory.updateOne(Product);
exports.deleteProduct =factory.deleteOne(Product);
