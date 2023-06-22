const express = require("express");
const {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
  loginUser,
  uploadUserImage,
  getUser,
  logout,
} = require("../controllers/user");
const {authenticateUser, authorizePermissions} = require('../middleware/requireAuth');
const router = express.Router();

router.route("/").get(authenticateUser, authorizePermissions('admin'), getAllUsers).post(authenticateUser, authorizePermissions('admin'), addUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/:id").delete(authenticateUser, authorizePermissions('admin'), deleteUser).patch(authenticateUser, authorizePermissions('admin'), updateUser).get(authenticateUser, getUser);
router.route("/uploads").post(uploadUserImage);

module.exports = router;
