import React from 'react';
import { motion } from 'framer-motion';
import employeBenefits from "../assets/Group26.png"
import Clients from './clients';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight  } from "@fortawesome/free-solid-svg-icons";

const Employee = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 leading-tight">
          
Enhance Employee Well-Being with <span className="text-yellow-300">Tailored Benefits  </span>
          </h1>
          <p className="text-lg mb-6 ">
          Investing in employee benefits is more than a workplace perk—it's a strategic move to foster loyalty, boost morale, and drive productivity. Our solutions provide seamless access to financial wellness programs, health coverage, retirement plans, and more, ensuring your team feels valued and supported.

Show your commitment to their success and watch your business thrive. Empower your workforce today with benefits that make a real difference.
          </p>
           <button className='bg-yellow-300 text-blue-900 px-6 py-3 font-semibold rounded-full hover:bg-yellow-400 transition duration-300'>
                            Book a demo
                            <FontAwesomeIcon
                              icon={faCircleRight}
                              className='text-xl border border-white rounded-full ml-2'
                            />
                          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={employeBenefits}
            alt="Payroll illustration"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
    <Clients />
    {/* <div className='p-10 flex flex-col text-center items-center justify-center'>
      <h1 className='text-center text-[36px] font-bold mb-3'>Benefits That Matter</h1>
      <p className='text-xl'>Flexible financial solutions for your workforce</p>
    </div> */}
    <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center animate-fade-in">
      Comprehensive Employee Benefits
    </h2>
    <p className="mt-4 text-lg text-gray-600 text-center animate-slide-in-down">
      Enhance your team's well-being and productivity with tailored employee benefits designed for modern workplaces.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
      {/* Retirement Plans */}
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in">
        <img
          src="https://via.placeholder.com/600x400" // Replace with an actual image URL
          alt="Retirement Plans"
          className="h-48 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">Retirement Plans</h3>
          <p className="mt-2 text-sm text-gray-600">
            Secure your employees' future with customizable retirement savings options that adapt to their individual needs.
          </p>
        </div>
      </div>

      {/* Wellness Programs */}
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in">
        <img
          src="https://via.placeholder.com/600x400" // Replace with an actual image URL
          alt="Wellness Programs"
          className="h-48 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">Wellness Programs</h3>
          <p className="mt-2 text-sm text-gray-600">
            Support your team's mental and physical health through wellness initiatives like fitness memberships and counseling.
          </p>
        </div>
      </div>

      {/* Corporate Compliance */}
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in">
        <img
          src="https://via.placeholder.com/600x400" // Replace with an actual image URL
          alt="Corporate Compliance"
          className="h-48 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">Corporate Compliance</h3>
          <p className="mt-2 text-sm text-gray-600">
            Ensure your business adheres to regulations with expert compliance consulting and risk management services.
          </p>
        </div>
      </div>

      {/* Customizable Packages */}
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in">
        <img
          src="https://via.placeholder.com/600x400" // Replace with an actual image URL
          alt="Customizable Packages"
          className="h-48 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">Customizable Packages</h3>
          <p className="mt-2 text-sm text-gray-600">
            Offer flexible benefits packages that cater to the unique needs of your diverse workforce.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Additional Creative Section */}
<section className="bg-gradient-to-r from-blue-500 to-teal-500 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center animate-bounce">
      Why Choose Us?
    </h2>
    <p className="mt-4 text-lg text-white text-center animate-fade-in">
      Discover the difference we bring to employee benefits management with a holistic approach.
    </p>

    <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:rotate-1 transition duration-300 animate-zoom-in">
        <div className="text-blue-500 mb-4">
          <i className="fas fa-heart fa-3x"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Employee-Centric</h3>
        <p className="mt-2 text-sm text-gray-600">
          Designed with your employees' satisfaction and productivity in mind.
        </p>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:rotate-1 transition duration-300 animate-zoom-in">
        <div className="text-teal-500 mb-4">
          <i className="fas fa-chart-line fa-3x"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Scalable Solutions</h3>
        <p className="mt-2 text-sm text-gray-600">
          Our packages grow with your business to support expanding needs.
        </p>
      </div>

      <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:rotate-1 transition duration-300 animate-zoom-in">
        <div className="text-purple-500 mb-4">
          <i className="fas fa-lock fa-3x"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Data Security</h3>
        <p className="mt-2 text-sm text-gray-600">
          Robust measures to keep sensitive employee data secure and confidential.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};





export default Employee