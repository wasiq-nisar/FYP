const Pay = require('../models/Pay');

const getAllPay = async(req, res) =>{
    try {
        const pay = await Pay.find({});
        res.json(200).json(pay);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const getPayByUserID = async (req, res) =>{
    const {id: payID} = req.params;
    try {
        const pay = await Pay.find({userid: payID});
        if(!pay){
            res.status(404).json({msg: `No pay with ID: ${payID}`})
        }
        res.status(200).json(pay);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const addPay = async(req, res) =>{
    try {
        const pay = await Pay.create(req.body);
        res.status(200).json(pay);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const deletePayByPayID = async(req, res) => {
    const {id: payID} = req.params;
    try {
        const pay = await Pay.findOneAndDelete({_id: payID});
        if(!pay){
            res.status(404).json({msg: `No pay with ID: ${payID}`})
        }
        res.status(200).json(pay);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const updatePayByUserID = async(req, res) => {
    const {id: payID} = req.params;
    try {
        const pay = await Pay.findOneAndUpdate({userid: payID}, req.body, {
            new: true,
            runValidators: true
        })
        if(!pay){
            res.status(404).json({msg: `No pay with ID: ${payID}`})
        }
        res.status(200).json(pay);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

module.exports = {
    getAllPay,
    getPayByUserID,
    deletePayByPayID,
    addPay,
    updatePayByUserID,
}