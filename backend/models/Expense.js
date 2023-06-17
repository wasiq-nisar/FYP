const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    ename: {
      type: String,
      required: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userSchema",
    },
    edetail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
