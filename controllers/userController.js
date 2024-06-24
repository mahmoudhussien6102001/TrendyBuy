const User = require('./../models/userModel');
const catchAsync =require('./../utils/catchAsync');
const Factory =require('./../controllers/handleController');
/*
exports.allUser= catchAsync(async (req,res) =>{
    const users = await  User.find();
    if(users.length === 0){
        return res.status(404).json({
            status: 'fail',
            message: 'no users'
        });
    }
        res.status(200).json({
            status:'success',
            results :users.length,
            data: {
                users: users
            }
        });
   
    
});
exports.getUser = catchAsync(async (req, res) => {
    const id =req.params.id;
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({
            status: 'fail',
            message: 'User not found'
        });
    }
    res.status(200).json({
        status: 'sucess',
        data :{
            user : user
        }

    });
    

    });
    exports.createUsers=(req,res)=>{
        res.status(500).json({
            status:'error',
            message :"this router is not defined ! please use /signUp instead" 
        })
        }
//}
exports.updateUser=catchAsync (async (req,res )=>{
  
    const id =req.params.id;
    const user = await User.findByIdAndUpdate(id ,req.body ,{
        new :true,
        runValidators :true
    })
    res.status(200).json({
        status:'success',
        data: {
            user
        }
    });
})


//}
exports.deleteUser=catchAsync(async (req ,res)=>{
  
    const id =req.params.id;
     await User.findByIdAndDelete(id);
    res.status(200).json({
        status:'success',
        data: {
           user : null
        }
    });

});
*/

exports.updateUser=Factory.updateOne(User);
exports.deleteUser=Factory.deleteOne(User);
exports.getUser=Factory.getOne(User);
exports.allUser=Factory.getAll(User);
exports.createUser=(req,res)=>{
    res.status(500).json({
        status:'error',
        message :"this router is not defined ! please use /signUp instead" 
    })
    }