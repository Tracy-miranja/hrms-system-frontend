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
    <div className="min-h-screen flex flex-col bg-gray-100 flex items-center justify-center">
      
        <h2 className="text-2xl font-bold  text-center">
          Book Your Demo
        </h2>
        <div className="w-full h-screen">
      <iframe
        src="https://cal.com/africa-management-solutions-ltd-i0b6ph"
        className="w-full h-full border-0"
        title="Schedule Appointment"
      ></iframe>
      </div>
    </div>
    
  );
};

export default BookingPage;
