const mongoose = require("mongoose");

const paySchema = new mongoose.Schema({
  Paydate: {
    type: Date,
    required: true,
  },
  bonus: {
    type: Number,
    required: true,
    default: 0,
  },
  fine: {
    type: Number,
    required: true,
    default: 0,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
});

module.exports = mongoose.model("Pay", paySchema);


