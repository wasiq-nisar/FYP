const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    dateofpurchase:{
        type: Date,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('Asset', assetSchema);