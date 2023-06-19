const Asset = require('../models/Asset');

const getAssets = async (req, res) =>{
    try {
        const assets = await Asset.find({});
        res.status(200).json(assets);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

const addAssest = async(req, res) =>{
    try {
        const {name, description, price, dateofpurchase} = req.body;
        if(!name || !description || !price || !dateofpurchase){
            throw Error('All Fields must be filled');
        }
        const asset = await Asset.create({name, description, price, dateofpurchase});
        res.status(200).json(asset);
    } catch (error) {
        res.status(400).json({ msg: error.message });   
    }
} 

const updateAsset = async(req, res) =>{
    const {id: assetID} = req.params;
    try {
        const asset = await Asset.findOneAndUpdate({_id: assetID}, req.body, {
            new: true,
            runValidators: true
        });
        if (!asset) {
            res.status(404).json({ msg: `No asset with ID: ${assetID}` });
        }
        res.status(200).json(asset);
    } catch (error) {
        res.status(400).json({ msg: error.message });   
    }
}

const deleteAsset = async(req, res) =>{
    const {id: assetID} = req.params;
    try {
        const asset = await Asset.findOneAndDelete({_id: assetID});
        if (!asset) {
            res.status(404).json({ msg: `No asset with ID: ${assetID}` });
        }
        res.status(200).json(asset);
    } catch (error) {
        res.status(400).json({ msg: error.message });   
    }
}

module.exports = {
    addAssest,
    getAssets,
    updateAsset,
    deleteAsset
}