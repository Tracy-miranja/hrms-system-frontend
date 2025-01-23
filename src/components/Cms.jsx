import React from 'react'
import { motion } from 'framer-motion';
import employeBenefits from "../assets/Group26.png"
import Clients from './clients';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight  } from "@fortawesome/free-solid-svg-icons";


function CMS() {
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
   </>
  )
}

export default CMS