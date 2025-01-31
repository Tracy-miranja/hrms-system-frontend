import React from "react";
import { Link } from "react-router-dom";

function Performance() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Banner Section */}
      <div className="flex flex-col justify-center items-center bg-blue-600 text-white py-16 text-center animate-fade-in-down">
        <h1 className="text-4xl font-bold">Performance Management Services</h1>
        <p className="mt-4 text-xl text-center max-w-6xl">
        A solid performance management system is a valuable process that should provide a framework for meeting or exceeding organizational goals. A performance management system must be aligned to the strategic goals, cascading across your organization and linked to actual job content and job specifications to maximize your return on investment (ROI). Without these elements built into your system, it is likely that you are not satisfied with your existing performance management system. Top management commitment is the key ingredient to successful implementation along with training and on-going evaluation of the system
        </p>
         <Link to="/demo">
                                <button className=" mt-4 rounded-full text-black text-md p-3 bg-orange-200 hover:bg-white">
                                    Get started
                                </button>
                            </Link>
      </div>

      {/* Introduction Section */}
      <div className="flex justify-center">
      <div className="container py-12 px-6  animate-slide-in-left gap-4">
       
        <p className="text-xl leading-relaxed">
        A solid performance management system is a valuable process that should provide a framework for meeting or exceeding organizational goals. A performance management system must be aligned to the strategic goals, cascading across your organization and linked to actual job content and job specifications to maximize your return on investment (ROI). Without these elements built into your system, it is likely that you are not satisfied with your existing performance management system. Top management commitment is the key ingredient to successful implementation along with training and on-going evaluation of the system.

Africa Management Solutions Ltd will assist your organization in designing a streamlined, straightforward and tailored performance management system that considers your strategic goals, and includes linkages to job analysis findings and integration from a systems perspective.
        </p>
        <p className="text-xl leading-relaxed mt-4">
        We will facilitate the development of core organizational competencies, influence SMART goal setting, and clearly articulate expectations in order to have a measurable results-oriented tool for effective implementation. Our performance management process is designed to be future-focused, support pay for performance programs, monitor milestones of goal achievement, and systematically improve the measured results of your employees and organization. Our process includes training for all levels of management and staff.
       </p>
    
      </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-blue-600 text-white text-center animate-scale-up">
        <h2 className="text-3xl font-bold mb-4">Ready to Simplify Performance Management Services?</h2>
        <p className="text-xl mb-6">
          Contact Africa Management Solutions Ltd today for seamless Hr solutions tailored to
          your needs.
        </p>
        <Link to="/Demo"><button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
}


export default Performance