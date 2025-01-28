import React from 'react';
import { motion } from 'framer-motion';
import Clients from './clients';
import employeBenefits from "../assets/Group26.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank, faHeartbeat, faFileInvoice, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Employee = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Enhance Employee Well-Being with{' '}
              <span className="text-yellow-300">Tailored Benefits</span>
            </h1>
            <p className="text-lg mb-6">
              Investing in employee benefits is more than a workplace perk—it's a strategic move to foster loyalty, boost morale, and drive productivity. 
              Our software provides seamless access to financial wellness programs, health coverage, retirement plans, and more.
            </p>
            <button className="bg-yellow-300 text-blue-900 px-6 py-3 font-semibold rounded-full hover:bg-yellow-400 transition duration-300">
              Book a Demo
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
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
            Comprehensive Employee Benefits
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Simplify your benefits management with our all-in-one platform.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FontAwesomeIcon
                icon={faPiggyBank}
                className="text-blue-600 text-4xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Retirement Plans</h3>
              <p className="mt-2 text-sm text-gray-600">
                Secure your employees' future with customizable savings options.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FontAwesomeIcon
                icon={faHeartbeat}
                className="text-red-600 text-4xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Wellness Programs</h3>
              <p className="mt-2 text-sm text-gray-600">
                Support your team's health with fitness memberships and counseling.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FontAwesomeIcon
                icon={faFileInvoice}
                className="text-green-600 text-4xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Corporate Compliance</h3>
              <p className="mt-2 text-sm text-gray-600">
                Simplify regulatory compliance and risk management.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-purple-600 text-4xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Customizable Packages</h3>
              <p className="mt-2 text-sm text-gray-600">
                Tailor benefits to fit the unique needs of your diverse workforce.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Employee;
