const express = require('express');
const {getAllProducts, addProduct, deleteProduct, updateProduct} = require('../controllers/product');
const router = express.Router();

router.route('/').get(getAllProducts).post(addProduct);
router.route('/:id').delete(deleteProduct).patch(updateProduct);

module.exports = router;

