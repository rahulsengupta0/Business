const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true }, // Store as string (e.g., "6/25/2025")
  time: { type: String, required: true }, // Store as string (e.g., "10:00 AM")
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Meeting", meetingSchema);
