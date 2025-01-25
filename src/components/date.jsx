import React, { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your backend API endpoint
    fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Booking successfully submitted!");
        } else {
          alert("Error submitting booking. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting booking. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Book Your Demo
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            type="tel"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-gray-600 mb-2">Select Date:</label>
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <label className="block text-gray-600 mb-2">Select Time:</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          >
            <option value="" disabled>
              Select Time
            </option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
