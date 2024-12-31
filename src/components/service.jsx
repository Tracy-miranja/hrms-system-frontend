"use client";
import React, { useState } from "react";
import { PinContainer } from "../components/ui/3d-pin";

// Sample data for services
const servicesData = {
  HRMS: {
    title: "Streamlined HR Management",
    description: "Easily manage employee data, automate processes, and gain insights with ease.",
    image: "https://via.placeholder.com/300?text=HRMS",
  },
  ATS: {
    title: "Applicant Tracking Simplified",
    description: "Track, evaluate, and hire top talent seamlessly.",
    image: "https://via.placeholder.com/300?text=ATS",
  },
  Payroll: {
    title: "Fast and Accurate Payroll",
    description: "Ensure compliant and timely payroll management for all employees.",
    image: "https://via.placeholder.com/300?text=Payroll",
  },
  Recruitment: {
    title: "Effective Recruitment Solutions",
    description: "Find and onboard the best talent with our recruitment tools.",
    image: "https://via.placeholder.com/300?text=Recruitment",
  },
  "Time Management": {
    title: "Efficient Time Management",
    description: "Track work hours, manage schedules, and improve productivity.",
    image: "https://via.placeholder.com/300?text=Time+Management",
  },
  "Employee Benefits": {
    title: "Enhanced Employee Benefits",
    description: "Offer attractive benefits to boost employee satisfaction and retention.",
    image: "https://via.placeholder.com/300?text=Employee+Benefits",
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
            <p className="text-lg text-gray-600 mt-2">
              Explore our offerings designed to simplify and enhance your workflow.
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
