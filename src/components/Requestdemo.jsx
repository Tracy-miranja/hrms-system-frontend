import React, { useState, useEffect } from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Clients from "./clients";
import { Link } from "react-router-dom";
// import { ContainerScroll } from "@/components/container-scroll-animation";
// import Image from "next/image";

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];


const products = [
    "Payroll",
    "HRMS",
    "Performance",
    "Time Tracking",
    "Recruitment",
    "Payroll Financing",
    "Employee Loans",
    "Onboarding",
    "Earned Wage Access",
    "Leave Management",
    "Requisition & Expense",
    "Competency",
    "Exit & Off-boarding",
    "Disciplinary Management",
    "Survey",
];

const DemoPage = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([]);

    // Fetch countries from API
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                const sortedCountries = data
                    .map((country) => country.name.common)
                    .sort(); // Sort countries alphabetically
                setCountries(sortedCountries);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Regex to allow only professional domains
        const regex = /^[a-zA-Z0-9._%+-]+@(amsol\.africa|yourcompany\.com)$/;
        if (!regex.test(value)) {
            setEmailError("Please enter a valid professional email address.");
        } else {
            setEmailError("");
        }
    };

    const handleCheckboxChange = (product) => {
        setSelectedProducts((prevSelected) =>
            prevSelected.includes(product)
                ? prevSelected.filter((item) => item !== product)
                : [...prevSelected, product]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email,
            selectedCountry,
            selectedProducts,
            // Add other fields here
        };
        console.log("Form Data:", formData);
        // Add API call to submit form data
    };


    return (
        <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold">AmsolHR Demo Request</h1>
            <p className="mt-4 text-lg sm:text-xl">
              Discover how AmsolHR can transform your workforce management. Schedule a personalized demo today.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center mb-10 w-full mt-4">
            <AnimatedTooltip items={people} />
          </div>
        </section>
  
        {/* Form Section */}
        <div className="flex justify-center pt-4 text-xl mb-10 p-3">
          <section className="container flex flex-col lg:flex-row justify-center bg-gray-50">
            <div className="w-full lg:w-[50%] p-2 pr-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 pb-4 pt-4">Discover a Smooth HR Journey</h1>
              <p className="mt-2 text-gray-600 text-lg sm:text-xl">
                Learn why top organizations trust AmsolHR to streamline their HR operations and enhance employee experiences.
              </p>
              <div className="benefits bg-yellow-300 mt-4 rounded-lg h-[60vh]"></div>
              <h1 className="mt-5 font-semibold text-xl">Trusted by Thousands of Companies Across Africa</h1>
              <Clients />
            </div>
  
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-xl rounded-lg p-8 w-full lg:w-[50%]">
              <h2 className="text-2xl font-semibold text-gray-800 text-center">Request a Demo</h2>
              <p className="mt-2 text-gray-600 text-center">
                Fill in the form below, and we’ll get in touch to schedule your demo.
              </p>
              <form className="mt-8 space-y-6" action="https://formspree.io/f/xzzdeebj" 
  method="POST" >
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xl font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="First Name"
                      placeholder="Enter your first name"
                      className="placeholder:text-lg placeholder:text-gray-400 mt-1 block w-full border-gray-800 rounded-md p-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xl font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="Last Name"
                      placeholder="Enter your last name"
                      className="placeholder:text-lg placeholder:text-gray-400 mt-1 block w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
  
                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xl font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="Email Address"
                      value={email}
                    //   onChange={handleEmailChange}
                      placeholder="Enter your email"
                      className="placeholder:text-lg placeholder:text-gray-400 mt-1 block w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
                  </div>
                  <div>
                    <label className="block text-xl font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="Phone Number"
                      placeholder="Enter your phone number"
                      className="placeholder:text-lg placeholder:text-gray-400 mt-1 block w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
  
                {/* Company and Headcount */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xl font-medium text-gray-700">Company Name</label>
                    <input
                      type="text"
                      name="Company Name"
                      placeholder="Enter your company name"
                      className="placeholder:text-lg placeholder:text-gray-400 mt-1 block w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xl font-medium text-gray-700">Employee Headcount</label>
                    <select
                      className="text-lg mt-1 block w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      defaultValue=""
                    >
                      <option value="" disabled>Select the number of employees</option>
                      <option value="50-100">50-100</option>
                      <option value="101-500">101-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1001+">1001+</option>
                    </select>
                  </div>
                </div>
  
                {/* Country Selector */}
                <div>
                  <label className="block text-xl font-medium text-gray-700">Country</label>
                  <select
                    value={selectedCountry}
                    name="Country"
                    // onChange={handleCountryChange}
                    className="text-lg mt-1 block w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
  
                {/* <div className="mt-4">
  <label className="block text-xl font-medium text-gray-700">Select Date</label>
  <input
    name="date"
    type="date"
    className="w-full p-3 border border-gray-300 rounded-md"
    required
  />
</div> */}


                <h2 className="text-lg font-medium text-gray-700 mb-4">
                                Which of our products are you interested in?
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {products.map((product) => (
                                    <label key={product} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            value={product}
                                            name="product"
                                            checked={selectedProducts.includes(product)}
                                            onChange={() => handleCheckboxChange(product)}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700">{product}</span>
                                    </label>
                                ))}
                            </div>


  
                {/* Submit Button */}
                <div className="mt-6">
                  <Link to="/Booking"><button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Request Demo
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
};

export default DemoPage;
