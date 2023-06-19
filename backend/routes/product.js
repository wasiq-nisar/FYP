const express = require('express');
const {getAllProducts, addProduct, deleteProduct, updateProduct, uploadProductImage} = require('../controllers/product');
const router = express.Router();

router.route('/').get(getAllProducts).post(addProduct);
router.route('/:id').delete(deleteProduct).patch(updateProduct);
router.route('/uploads').post(uploadProductImage);

module.exports = router;

