const Attendence = require('../models/Attendence');

const getAllAttendence = async (req, res) =>{
    try {
        const attendence = await Attendence.find({});
        res.status(200).json(attendence);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }    
}

const getAttendenceByUserID = async(req, res) =>{
    const {id: userID} = req.params;
    try {
        const attendence = await Attendence.find({userid: userID});
        if(!attendence){
            res.status(404).json({msg: `No Attendence of user with ID: ${userID}`})
        }
        res.status(200).json(attendence);
    } catch (error) {
        res.status(400).json({msg: error.message});
    } 
}

const addAttendce = async(req, res) =>{
    try {
        const attendence = await Attendence.create(req.body);
        res.status(200).json(attendence);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

const deleteAllAttendenceByUserID = async(req, res) =>{
    const{id: userID} = req.params;
    try {
        const attendence = await Attendence.deleteMany({userid: userID});
        if(!attendence){
            res.status(404).json({msg: `No Attendence of user with ID: ${userID}`})
        }
        res.status(200).json(attendence);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}



module.exports = {
    getAllAttendence,
    getAttendenceByUserID,
    deleteAllAttendenceByUserID,
    addAttendce
}