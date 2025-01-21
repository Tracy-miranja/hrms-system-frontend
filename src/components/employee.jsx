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
        <h2
          className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center animate-fade-in"
        >
          Employee Financial Solutions
        </h2>
        <p
          className="mt-4 text-lg text-gray-600 text-center animate-slide-in-down"
        >
          Empower your workforce with accessible financial solutions designed to
          enhance productivity and well-being.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {/* Employee Loans */}
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in">
            <img
              src="https://via.placeholder.com/600x400" // Replace with actual image URL
              alt="Employee Loans"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Employee Loans
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Provide employees with quick, hassle-free access to loans,
                helping them manage their financial needs effectively and stay
                focused at work.
              </p>
            </div>
          </div>

          {/* Earned Wage Access */}
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in">
            <img
              src="https://via.placeholder.com/600x400" // Replace with actual image URL
              alt="Earned Wage Access"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Earned Wage Access (EWA)
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Allow employees to access a portion of their earned wages before
                payday, reducing financial stress and increasing satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {/* Employee Loans */}
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in">
            <img
              src="https://via.placeholder.com/600x400" // Replace with actual image URL
              alt="Employee Loans"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Employee Loans
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Provide employees with quick, hassle-free access to loans,
                helping them manage their financial needs effectively and stay
                focused at work.
              </p>
            </div>
          </div>

          {/* Earned Wage Access */}
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-fade-in">
            <img
              src="https://via.placeholder.com/600x400" // Replace with actual image URL
              alt="Earned Wage Access"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Earned Wage Access (EWA)
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Allow employees to access a portion of their earned wages before
                payday, reducing financial stress and increasing satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};





export default Employee