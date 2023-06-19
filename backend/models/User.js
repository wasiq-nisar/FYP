const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    cnic: {
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    pay: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
}, {timestamps: true});

userSchema.statics.createManager = async function(name, email, phone, cnic, address, username, password, pay, type, image){
    console.log('asdasd');
    console.log(name, email, phone, cnic, address, username, password, pay, type, image);
    //Validation
    if(!email || !password || !phone || !cnic  || !name || !address || !username || !pay || !type || !image){
        throw Error('All Fields must be filled');
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not Valid');
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not Strong enough');
    }

    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    console.log('start');
    const user = await this.create({name, email, phone, cnic, address, username, password: hash, pay, type, image})
    console.log('end');

    return user
}

//staitc login method
userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
  
      console.log('HGJK')
      throw Error('Incorrect password')
    }
  
    return user
  }
  

module.exports = mongoose.model('User', userSchema);