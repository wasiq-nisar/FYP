const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  companyname: {
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
  category: [
    {
      type: String,
      required: true,
    },
  ],
  colorQuantity: [
    {
      // todo this is for the color
      type: String,
      required: true,
    },
    {
      //todo this is for the quantity
      type: Number,
      required: true,
    },
    {
      // todo this is for the totalQuantity
      // * aaj tak kitny unit aay apny pass
      type: Number,
      required: true,
    },
  ],
  manufacturingLoc: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
// todo first one is the table name and secondOne is the schema
module.exports = mongoose.model("Product", productSchema);

