const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const catchAsync=require('./../utils/catchAsync')

const signToken = id => {
    return jwt.sign({ id }, 'my_ultra_secure_and_awad_long_secret', {
        expiresIn: '50d'
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    // send jwt cookie
    cookieOptions= {
        expires: new Date(Date.now() + 90* 24 * 60 * 60 * 1000),
        httpOnly: true
        
    };
    if (process.env.NODE_ENV ==='production') cookieOptions.secure = true;
    res.cookie("jwt",token,cookieOptions);
    user.password=undefined;

    res.status(statusCode).json({
        status: "success",
        token,
        data:{
            user
        }
    });
};

exports.signUp =catchAsync( async (req, res, next) => {
    
        const newUser = await User.create(req.body);
        createSendToken(newUser ,200 ,res);
        /*
        const token = signToken(newUser._id);
        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        });
    */
});


exports.login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.correctPassword(password, user.password))) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }
        
        const token = signToken(user._id);
        res.status(200).json({
            status: "success",
            token
        });
   
});

exports.logout =(req,res)=>{
    res.cookie("jwt" ,"loggedout" ,{
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true

    })
    res.status(200).json({
        status: "success" 

    })
} 