const express = require('express');
const { getAllOrders,addOrder,getOrderByOrderID,deleteOrderByOrderID,updateOrderByOrderID} = require('../controllers/order');
const router = express.Router();

router.route('/').get(getAllOrders).post(addOrder);
router.route('/:id').get(getOrderByOrderID).delete(deleteOrderByOrderID).patch(updateOrderByOrderID)
module.exports = router;