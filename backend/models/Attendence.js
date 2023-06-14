const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
});

module.exports = mongoose.model("Attendence", attendenceSchema);
