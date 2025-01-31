"use client";
import React, { useState } from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { Link } from "react-router-dom";

// Sample data for services
const servicesData = {
  "Payroll Services": {
    title: "Fast and Accurate Payroll",
    description: "Ensure compliant and timely payroll management for all employees.",
    image: "https://via.placeholder.com/300?text=Payroll",
  },
  "Salary survey": {
    title: "Effective Recruitment Solutions",
    description: "Find and onboard the best talent with our recruitment tools.",
    image: "https://via.placeholder.com/300?text=Recruitment",
  },
  "HR Outsourcing": {
    title: "Streamlined HR Management",
    description: "Easily manage employee data, automate processes, and gain insights with ease.",
    image: "https://via.placeholder.com/300?text=HRMS",
  },
 
  "Recruitment & Selection": {
    title: "Effective Recruitment Solutions",
    description: "Find and onboard the best talent with our recruitment tools.Track, evaluate, and hire top talent seamlessly.",
    image: "https://via.placeholder.com/300?text=ATS",
  },

  "Cycometric tests": {
    title: "Enhanced Employee Benefits",
    description: "Find and onboard the best talent with our recruitment tools.",
    image: "https://via.placeholder.com/300?text=Recruitment",
  },
  "Training Modules": {
    title: "Efficient Time Management",
    description: "Track work hours, manage schedules, and improve productivity.",
    image: "https://via.placeholder.com/300?text=Time+Management",
  },
  
};

function Service() {
  const [selectedService, setSelectedService] = useState("HRMS");

  return (
    <div className="flex justify-center">
      <div className="flex bg-[#F3F9F1] min-h-screen py-10 w-[90%] rounded-2xl shadow-lg">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-blue-600">Our Services</h1>
            <p className="text-xl text-gray-600 mt-2">
            AMSOL has a highly skilled, knowledgeable, experienced, diversified, and solid team of competent and experienced hr consulting professionals.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(servicesData).map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-6 py-2 font-medium rounded-full transition-all ${
                  selectedService === service
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-300 hover:text-blue-800"
                }`}
              >
                {service}
              </button>
            ))}
           <Link to=""><button className="text-lg rounded-full bg-yellow-300 p-2 font-semibold hover:bg-blue-200">More Services</button></Link>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(servicesData).map((service) => (
              <PinContainer
                key={service}
                title={servicesData[service].title}
                href="#"
                className={`p-10 rounded-lg shadow-xl transition-all transform-gpu gap-4 ${
                  selectedService === service
                    ? "bg-blue-200"
                    : "bg-white hover:bg-blue-100 hover:scale-105"
                }`}
                containerClassName="hover:shadow-2xl"
              >
                <h2 className="text-2xl font-semibold">{service}</h2>
                <p className="mt-2 text-sm">{servicesData[service].description}</p>
              </PinContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
