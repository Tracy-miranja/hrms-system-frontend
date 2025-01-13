import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight  } from "@fortawesome/free-solid-svg-icons";
import payroll from "../assets/payroll.png"
import { FaDollarSign, FaRegClock } from "react-icons/fa";
import Clients from './clients';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
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

const Payroll = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2 p-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Run and Finance <span className="text-yellow-300">Payroll Effortlessly</span>
          </h1>
          <p className="text-xl mb-6">
            Streamline your payroll processes with our efficient, user-friendly, and accurate solutions tailored for your business.<div className="flex flex-row  mt-3 w-full">
      <AnimatedTooltip items={people} />
    </div>
          </p>
          <button className='bg-yellow-300 text-blue-900 px-6 py-3 font-semibold rounded-full hover:bg-yellow-400 transition duration-300'>
                  Request a demo
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    className='text-xl border border-white rounded-full ml-2'
                  />
                </button>
          {/* <button className="bg-yellow-300 text-blue-900 px-6 py-3 font-semibold rounded-lg hover:bg-yellow-400 transition duration-300">
            Get Started
          </button> */}
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
          src={payroll}
            alt="Payroll illustration"
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
      
    </div>
    <Clients />
    <div className='p-10 flex text-center items-center justify-center'>
      <h1 className='text-center text-[36px] font-semibold'>Simplified and Accelerated Payroll Solutions</h1>
    </div>
    <div className=' flex justify-center items-center p-10'>
    <div className="container flex flex-col md:flex-row items-center justify-between shadow-xl gap-8 px-4 py-8 bg-gray-200 rounded-xl">
      {/* First Div */}
      <div className=" grid grid-cols-2 gap-4 md:w-1/2">
        {/* Row 1 */}
        <div className="flex flex-col  gap-4 p-4 bg-white rounded-lg shadow-lg">
          <div className="p-3 bg-emerald-100 rounded-full text-emerald-600 w-12">
            <FaDollarSign size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold pb-2">Efficient Payroll</h3>
            <p className="text-lg text-gray-600 ">
            Error-free Payroll Computation.Accurately compute allowances and deductions, bonuses, prorated payments, raises and more with ease.
            </p>
          </div>
          
        </div>
        {/* Row 2 */}
        <div className="flex flex-col  gap-4 p-4 bg-white rounded-lg shadow-lg">
          <div className="p-3 bg-sky-100 rounded-full text-sky-600  w-12">
            <FaRegClock size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold pb-2 ">Execute Payroll Runs Flexibly</h3>
            <p className="text-lg text-gray-600">
            Easily manage multiple payroll cycles to accommodate various entities and employment statuses.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg">
          <div className="p-3 bg-emerald-100 rounded-full text-emerald-600 w-12">
            <FaDollarSign size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 ">Tax Computation</h3>
            <p className="text-lg text-gray-600">
            Automatically calculate tax in compliance with local laws and protect your organisation from regulatory risks.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg">
          <div className="p-3 bg-emerald-100 rounded-full text-emerald-600 w-12">
            <FaDollarSign size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold ">Direct Payments</h3>
            <p className="text-lg text-gray-600">
            Directly disburse payments to employee accounts, without manually instructing your partner bank.
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:w-1/2 justify-center">
  <iframe
    className="w-full rounded-lg shadow-lg"
    width="260"
    height="500"
    src="https://www.youtube.com/embed/EoL5R_0h9xk?autoplay=1&loop=1&playlist=EoL5R_0h9xk"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


    </div>
    </div>
    </>
  );
};




export default Payroll