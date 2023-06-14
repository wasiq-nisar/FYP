const express = require('express');
const { getAllUsers, addUser, deleteUser, updateUser, loginUser } = require('../controllers/user');
const router = express.Router();

router.route('/').get(getAllUsers).post(addUser);
router.route('/login').post(loginUser)
router.route('/:id').delete(deleteUser).patch(updateUser);

module.exports = router;