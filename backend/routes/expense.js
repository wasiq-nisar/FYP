const express = require("express");
const { addExpense } = require("../controllers/expense");
const router = express.Router();

router.route("/").post(addExpense);

module.exports = router;
