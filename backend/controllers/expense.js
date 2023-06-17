const Expense = require("../models/Expense");

const addExpense = async (req, res) => {
  try {
    const { ename, userid, edetail } = req.body;
    console.log(req.body);
    const expense = await Expense.create({ ename, userid, edetail });
    console.log("hello:" + expense);
    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  addExpense,
};
