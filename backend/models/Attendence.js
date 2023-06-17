const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userSchema",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendence", attendenceSchema);
