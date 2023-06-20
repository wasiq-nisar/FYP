const mongoose = require("mongoose");

const OrderDetailsSchema = new mongoose.Schema({
  products: [
    {
      productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductSchema",
      },
      qty: {
        type: Number,
        required: true,
        validate: {
          validator: function (value) {
            return value >= 0;
          },
          message: "Total price must be greater than 0.",
        },
      },
      price:{
        type: Number,
        required: true,
        validate: {
          validator: function (value) {
            return value >= 0;
          },
          message: "Total price must be greater than 0.",
        },
      }
    },
  ],
  totalPrice:{
    type:Number,
    required:true,
    validate: {
      validator: function (value) {
        return value >= 0;
      },
      message: "Total price must be greater than 0.",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// todo first one is the table name and secondOne is the schema
const OrderDetails = mongoose.model("OrderDetails", OrderDetailsSchema);

module.exports = OrderDetails;
