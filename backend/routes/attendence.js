const express = require('express');
const { getAllAttendence, addAttendce, deleteAllAttendenceByUserID, getAttendenceByUserID } = require('../controllers/attendence');
const router = express.Router();

router.route('/').get(getAllAttendence).post(addAttendce);
router.route('/:id').delete(deleteAllAttendenceByUserID).get(getAttendenceByUserID);

module.exports = router;