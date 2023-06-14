const express = require('express');
const { getAllPay, addPay, updatePayByUserID, getPayByUserID, deletePayByPayID } = require('../controllers/pay');
const router = express.Router();

router.route('/').get(getAllPay).post(addPay);
router.route('/:id').patch(updatePayByUserID).get(getPayByUserID).delete(deletePayByPayID);

module.exports = router;