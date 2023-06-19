const express = require('express');
const { getAssets, addAssest, deleteAsset, updateAsset } = require('../controllers/asset');
const router = express.Router();

router.route('/').get(getAssets).post(addAssest)
router.route('/:id').delete(deleteAsset).patch(updateAsset);

module.exports = router;