const express = require("express");
const router = express.Router();
const { bookMeeting } = require("../controllers/meetingController");

router.post("/", bookMeeting);

module.exports = router;
