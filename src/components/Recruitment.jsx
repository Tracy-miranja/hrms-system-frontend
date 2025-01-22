import React from 'react'
import { motion } from 'framer-motion';
import employeBenefits from "../assets/Group26.png"
import Clients from './clients';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const keyfeatures = [
  {
    title: "Applicant Tracking System",
    content:
      "Track applicants efficiently with our comprehensive Applicant Tracking System. Monitor applications, progress, and candidate details in one place.",
  },
  {
    title: "Job Management",
    content:
      "Easily manage job postings, categorize openings, and ensure roles are filled quickly with minimal effort.",
  },
  {
    title: "Talent Pool",
    content:
      "Build and maintain a rich database of talented candidates for future recruitment needs.",
  },
  {
    title: "Collaborative Recruitment",
    content:
      "Enhance team collaboration during recruitment with shared notes, feedback, and decision-making tools.",
  },
  {
    title: "Internal Recruitment",
    content:
      "Streamline internal hiring processes to discover and promote talent within your organization.",
  },
  {
    title: "Online Testing",
    content:
      "Conduct online skill assessments and testing to ensure candidates meet role requirements effectively.",
  },
];

const features = [
  "AI-powered candidate screening",
  "Seamless interview scheduling",
  "Real-time collaboration tools",
  "Detailed analytics for hiring efficiency",
];
function Recruitment() {
  const [visibleFeatureIndex, setVisibleFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleFeatureIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex(index === openIndex ? null : index);
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
              Revolutionize Your Hiring Process with <span className="text-yellow-300">Smart Recruitment Software</span>
            </h1>

            <div className="text-xl text-gray-600 mt-4 mb-4">
              <p className='text-white'>
                Features include{" "}
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className={`${index === visibleFeatureIndex
                        ? "text-yellow-500 font-bold"
                        : "text-gray-700"
                      } transition-all duration-500`}
                  >
                    {feature}
                    {index < features.length - 1 && ", "}
                  </span>
                ))}
                 and  detailed analytics for hiring efficiency, with our all-in-one ATS & recruitment management software.

                Schedule a Demo
                Whether you're a small
                business or a global enterprise, our solution adapts to meet your
                recruitment needs.
              </p>
            </div>
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
      <motion.div
            className=" mt-8 lg:mt-6 lg:mb-10  flex flex-col items-center justify-center bg-green-50 p-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           <h1 className='text-3xl font-bold'>Stay Ahead of the Curve with AmsolRecruit</h1>
           <p className='text-center lg:w-[50%] pt-4 text-xl pb-4'>With SmartRecruit, you’re equipped to stay ahead in the competitive world of hiring. Our advanced features, like AI-driven screening, collaborative tools, and real-time analytics, ensure your recruitment process is seamless, efficient, and tailored to your needs. Whether you're building a team for tomorrow or scaling for success, AmsolRecruit keeps you one step ahead.</p>
          </motion.div>
      <section className='flex justify-center p-5'>
      <div className='container flex justify-between gap-3'>
      <div className="flex flex-col justify-between max-w-3xl mx-auto p-6 w-[45%]">
      {keyfeatures.map((feature, index) => (
        <div key={index} className="flex flex-col justify-between mb-4 border-b border-gray-300 pb-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleFeature(index)}
          >
            <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            </div>
            <span
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-90" : "rotate-0"
              }`}
            >
              ▶
            </span>
          </div>
          {openIndex === index && (
            <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700 text-xl">{feature.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    <div className='w-[50%] bg-white'>
      <img src={employeBenefits} alt='recruitment'/>
    </div>
    </div>
    </section>
    </>
  )
}

export default Recruitment