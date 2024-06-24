const mongoose = require('mongoose');
// validate the email 
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Please tell us your email!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },

    password: {
        type: String,
        required: [true, 'Please provide a password!'],
        minlength: [8, 'Password must be at least 8 characters long'],
        select: false,
        validate: [validator.isStrongPassword, 'Please provide a strong password ']

    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password!'],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: 'Passwords are not the same'
        }
    },
 

});
// pre document  function to hash password 
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};




const User = mongoose.model('User', userSchema);

module.exports = User;