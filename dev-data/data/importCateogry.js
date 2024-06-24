
const mongoose =require('mongoose');
const fs =require('fs');
const Cateogry = require('./../../models/cateogryModel');
mongoose.connect('mongodb://127.0.0.1:27017/trendybuy').then((con) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const cateogrys = JSON.parse(fs.readFileSync(`${__dirname}/CatoegryData.json` ,'utf-8'));
const importData = async () =>{
    try {
    await Cateogry.create(cateogrys);
    console.log(" the data successfully loaded ! ");

} catch(err){
    console.log(err);
}
     process.exit();


};


const deleteData =async () => {
    try{
    await Cateogry.deleteMany();
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
