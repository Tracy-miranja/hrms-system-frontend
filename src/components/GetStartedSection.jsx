import React from "react";
import LogosSection from "./LogosSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight  } from "@fortawesome/free-solid-svg-icons";

const GetStartedSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-blue-500 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-white">
          Get Started
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8 text-white">
          Our platform seamlessly integrates with your existing ERP platforms, 
          including Microsoft, Sage, SAP, and Oracle, eliminating payroll migration 
          and data synchronization issues.
        </p>
        <LogosSection />
        <div className="mt-6">
           <button className='bg-yellow-300 text-blue-900 px-6 py-3 font-semibold rounded-full hover:bg-yellow-400 transition duration-300'>
                            Request a demo
                            <FontAwesomeIcon
                              icon={faCircleRight}
                              className='text-xl border border-white rounded-full ml-2'
                            />
                          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
