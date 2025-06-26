const Meeting = require("../models/Meeting");

const bookMeeting = async (req, res) => {
  try {
    const { name, email, date, time } = req.body;

    if (!name || !email || !date || !time) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const meeting = new Meeting({ name, email, date, time });
    await meeting.save();

    res.status(201).json({ message: "Meeting scheduled successfully!" });
  } catch (error) {
    console.error("Error booking meeting:", error);
    res.status(500).json({ error: "Server error while booking meeting." });
  }
};

module.exports = { bookMeeting };
