
const mongoose =require('mongoose');
const fs =require('fs');
const Product = require('./../../models/productModel');
mongoose.connect('mongodb://127.0.0.1:27017/trendybuy').then((con) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const products = JSON.parse(fs.readFileSync(`${__dirname}/ProductsData.json` ,'utf-8'));
const importData = async () =>{
    try {
    await Product.create(products);
    console.log(" the data successfully loaded ! ");

} catch(err){
    console.log(err);
}
     process.exit();


};


const deleteData =async () => {
    try{
    await Product.deleteMany();
    console.log("the delete successfully");

    }
    catch(err){
        console.log(err);
    }
      process.exit();

    
};
if(process.argv[2] ==='--import'){
    importData();
}else if(process.argv[2] ==='--delete'){
    deleteData();
}
