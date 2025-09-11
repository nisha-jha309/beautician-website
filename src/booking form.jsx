import React, { useState } from "react";
import "./booking form.css"

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: ""
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Form Submitted:", formData);

    // 👉 ab yaha tum backend ko send kar sakte ho
    // fetch("/api/book", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <div id="booking-form-container">
              <h2>Book Appointment</h2>

    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nisha Jha"
          required
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 1234567890"
          required
        />
      </div>

      <div className="form-group">
        <label>Select Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Choose Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Service --</option>
          <option value="bridal">Bridal Glow Package</option>
          <option value="relax">Relax & Refresh</option>
          <option value="beauty">Everyday Beauty Essentials</option>
          <option value="skin">Skin Brightening</option>
          <option value="party">Party Ready Package</option>
        </select>
      </div>

      <button type="submit" id="confirm-booking-btn">
        Confirm Booking
      </button>
    </form>
    </div>
  );
}

export default BookingForm;
