import React from 'react'
import { motion } from 'framer-motion';
import employeBenefits from "../assets/Group26.png"
import Clients from './clients';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight  } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FlipWords } from './ui/flip-words';
import  HeroParallaxDemo  from './HeroParallaxDemo';
import recruitment from "../assets/recruitment.webp";

const keyfeatures = [
  {
    title: "Payroll Integration",
    content:
      "Seamlessly integrate payroll systems to ensure accurate and timely payment processing. Easily synchronize payroll data with employee records, reducing administrative overhead and minimizing errors",
  },
  {
    title: "Report & Analytics",
    content:
      "Gain actionable insights with comprehensive reporting and analytics tools. Track key performance metrics, assess recruitment trends, and make data-driven decisions to optimize your hiring processes",
  },
  {
    title: "Employee Self-service",
    content:
      "Empower employees with a self-service portal to manage personal information, view payslips, request time off, and access essential HR documents, streamlining administrative tasks and enhancing the employee experience.",
  },
  
  {
    title: "Geo-location and Geo-fencing",
    content:
      "Utilize geo-location technology to track employees and candidates in real-time. Implement geo-fencing for location-based services, ensuring efficient management of work schedules, attendance, and more",
  },
  {
    title: "Work Schedules",
    content:
      "Easily manage employee work schedules with a dynamic scheduling tool. Track shift allocations, adjust schedules as needed, and ensure optimal staffing levels while offering flexibility for employees.",
  },
];

function Timemanagement() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
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
      Effortlessly track time and{" "}
      <span className="text-yellow-300">
        <FlipWords words={["boost productivity", "optimize performance", "enhance efficiency"]} className="text-yellow-300"/>
      </span>
    </h1>
            <p className="text-xl mb-6 ">
            Track employee hours, simplify payroll, and enhance efficiency with our powerful time management software.
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
      <HeroParallaxDemo />
      <div className=' shadow-sm bg-gray-50 h-[20vh]'>
        <h1 className='text-center p-10 text-4xl font-bold text-gray-800'>Optimize time and drive results.</h1>
      </div>
      <section className='flex justify-center p-5 mb-10'>
            <div className='container flex justify-between gap-3'>
            <div className="flex flex-col justify-between max-w-3xl mx-auto p-6 w-[45%]">
            {keyfeatures.map((feature, index) => (
              <div key={index} className="flex flex-col justify-between mb-4 border-b border-gray-300 pb-4">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFeature(index)}
                >
                  <div>
                  <h3 className="text-2xl font-semibold text-gray-500 hover:text-blue-400">
                    {feature.title}
                  </h3>
                  </div>
                  <span
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  >
                  <FontAwesomeIcon
  icon={faAngleRight}
  className="text-xl ml-2"
/>
                  </span>
                </div>
                {openIndex === index && (
                  <div className="mt-4 bg-gradient-to-l from-blue-100 p-4 rounded-lg shadow">
                    <p className="text-gray-500 text-xl">{feature.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='w-[50%] bg-blue-200 rounded-xl'>
            <img src={recruitment} alt='recruitment'/>
          </div>
          </div>
          
          </section>
     </>
  )
}

export default Timemanagement