const User = require("../models/User");
const jwt = require('jsonwebtoken');

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
    const {name, email, phone, password, pay, type} = req.body;
    console.log(req.body)
    try {
        const user = await User.createManager(name, email, phone, password, pay, type);
        res.status(200).json(user);
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

module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser,
    loginUser
}