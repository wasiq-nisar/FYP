const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  manufacturername: {
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  manufacturingdate: {
    type: Date,
  },
  expirationdate: {
    type: Date,
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
  },
  category:{
    type: String,
    required: true,
  },
  subcategory: {
    type: String
  },
  quantity:{
    type: Number,
    required: true,
    min: 1
  },
  manufacturingLocation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  }
});
// todo first one is the table name and secondOne is the schema
module.exports = mongoose.model("Product", productSchema);
