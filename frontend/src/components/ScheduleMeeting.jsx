import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';

import './ScheduleMeeting.css';
import meetingImg from '../assets/meeting.jpg';
import successImg from '../assets/succesfull.jpg';

export default function ScheduleMeeting() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [form, setForm] = useState({ name: '', email: '' });

const handleBooking = async () => {
  if (!form.name || !form.email || !date || !time) {
    alert('Please complete all fields');
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/meeting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        date,
        time
      }),
    });

    if (response.ok) {
      alert("Appointment booked successfully!");
      setForm({ name: '', email: '' });
      setDate(null);
      setTime('');
    } else {
      throw new Error("Booking failed");
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred while booking");
  }
};


  return (
    <div className="schedule-container">
      <div className="left-section">
        <h1>#1 Appointment Scheduling Software</h1>
        <p>Create your free appointment page, set hours to accept online booking in less than 30 seconds</p>

        <div className="highlight-box">
          <strong>🇮🇳 Exclusively for Indian Businesses</strong>
          <ul>
            <li><span>🔗</span> Payment Integration: UPI by Razorpay, Cashfree</li>
            <li><span>💬</span> Free WhatsApp & SMS reminders</li>
          </ul>
          <p className="note">These features are exclusively available on DaySchedule</p>
        </div>

        <div className="booking-card">
  <h2 className="form-title">Book a Free Appointment</h2>

  <Flatpickr
    className="input-field"
    placeholder="Select a date"
    value={date}
    options={{ minDate: "today" }}
    onChange={([selectedDate]) => setDate(selectedDate.toLocaleDateString())}
  />

  <select className="input-field" value={time} onChange={e => setTime(e.target.value)}>
    <option value="">Select a time slot</option>
    <option>10:00 AM</option>
    <option>11:00 AM</option>
    <option>2:00 PM</option>
    <option>4:00 PM</option>
  </select>

  <input
    className="input-field"
    type="text"
    placeholder="Your Full Name"
    value={form.name}
    onChange={e => setForm({ ...form, name: e.target.value })}
  />

  <input
    className="input-field"
    type="email"
    placeholder="Your Email"
    value={form.email}
    onChange={e => setForm({ ...form, email: e.target.value })}
  />

  <button className="booking-button" onClick={handleBooking}>📅 Book Appointment</button>
</div>

      </div>

      <div className="right-section">
        <img src={meetingImg} alt="Meeting Scheduler" className="meeting-img" />
        <img src={successImg} alt="Success Message" className="success-img" />
      </div>
    </div>
  );
}
