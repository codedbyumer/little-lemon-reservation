import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    contact: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Move to end screen
    console.log('Form Submitted:', form);
  };

  return (
    <div className="App">
      {step === 1 && (
        <div className="start-level">
          <h1>Welcome to Little Lemon</h1>
          <p>Book your table easily and quickly</p>
          <button onClick={() => setStep(2)}>Start Booking</button>
        </div>
      )}

      {step === 2 && (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Reserve Your Table</h2>
          <input name="name" placeholder="Your Name" onChange={handleChange} required />
          <input type="date" name="date" onChange={handleChange} required />
          <input type="time" name="time" onChange={handleChange} required />
          <input type="number" name="guests" placeholder="Number of Guests" onChange={handleChange} required />
          <input name="contact" placeholder="Contact Number" onChange={handleChange} required />
          <button type="submit">Confirm Booking</button>
        </form>
      )}

      {step === 3 && (
        <div className="end-level">
          <h2>Thank You, {form.name}!</h2>
          <p>Your table for {form.guests} guest(s) has been booked on {form.date} at {form.time}.</p>
          <p>We will contact you at: {form.contact}</p>
          <button onClick={() => setStep(1)}>Book Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
