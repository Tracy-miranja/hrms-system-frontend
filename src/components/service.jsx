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
    <div className="flex  bg-[#F3F9F1] min-h-screen py-10 w-[90%] rounded-2xl shadow-lg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-600">Our Services</h1>
          <p className="text-lg text-gray-600 mt-2">
            Explore our offerings designed to simplify and enhance your workflow.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(servicesData).map((service) => (
            <PinContainer
              key={service}
              title={servicesData[service].title}
              href="#"
              className={`p-10 bg-blue-800 rounded-lg shadow-xl transition-all transform-gpu ${
                selectedService === service
                  ? "bg-white"
                  : "bg-white hover:bg-blue-200 hover:scale-105"
              }`}
              containerClassName="hover:shadow-2xl"
              onClick={() => setSelectedService(service)}
            >
              <h2 className="text-2xl font-semibold">{service}</h2>
              <p className="mt-2 text-sm">{servicesData[service].description}</p>
            </PinContainer>
          ))}
        </div>

        {/* Highlight Section */}
        {/* <div className="mt-12 bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-600">
              {servicesData[selectedService].title}
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              {servicesData[selectedService].description}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={servicesData[selectedService].image}
              alt={selectedService}
              className="w-3/4 rounded-lg shadow-lg"
            />
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default Service;
