const User = require("../models/User");
const jwt = require('jsonwebtoken');
const path = require('path');

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});
}

const getAllUsers = async(req, res) =>{
    try {
        const user = await User.find({});
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const addUser = async(req, res) =>{
    const {name, email, phone, cnic, address, username, password, pay, type, image} = req.body;
    console.log(req.body)
    //Get img name
    const newImage = image.split('//').at(-1);

    //Get img extension
    const ext = newImage.split('.').at(-1);

    
    try {
        const user = await User.createManager(name, email, phone, cnic, address, username, password, pay, type, image);
        const imagePath = `/public/uploads/${user._id}.${ext}`;
        const finalUser = await User.findOneAndUpdate({ _id: user._id}, {image: imagePath},{
            new:true,
            runValidators: true
        });
        res.status(200).json(finalUser);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const deleteUser = async(req, res) => {
    const {id: userID} = req.params;
    try {
        const user = await User.findOneAndDelete({_id: userID});
        if(!user){
            res.status(404).json({msg: `No user with ID: ${userID}`})
        }
        return res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const updateUser = async (req, res) =>{
    const {id: userID} = req.params;
    try {
        const user = await User.findOneAndUpdate({_id: userID}, req.body, {
            new: true,
            runValidators: true
        });

        if(!user){
            return res.status(404).json({msg: `No user with ID: ${userID}`});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password)
        console.log('asdf');

        // create a token
        const token = await createToken(user._id);
        const type =user.type;
    
        res.status(200).json({email, type, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const uploadUserImage = async(req, res) =>{
    //try {
        if(!req.files){
            throw Error('No File Uploaded');
        }
        console.log(req.files);
        const productImage = req.files.image;
        if(!productImage.mimetype.startsWith('image')){
            throw Error('Please Upload Image');
        }

        const maxSize = 1024 * 1024;
        if(productImage.size > maxSize){
            throw Error('Please Upload image smaller than 1 MB');
        }
        const imagePath = path.join(__dirname, '../public/uploads/'+`${productImage.name}`)
        await productImage.mv(imagePath); 

        res.status(200).json({image: `/uploads/${productImage.name}`} );
    // } catch (error) {
    //     res.status(400).json({error: error.message});
    // }
   
   
    
    

    
}

module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser,
    loginUser,
    uploadUserImage
}