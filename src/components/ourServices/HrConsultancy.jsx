import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HrConsultancy() {
    return (
        <div className=" min-h-screen">
            {/* Banner Section */}
            <div className="flex flex-col relative bg-gradient-to-r from-blue-500 to-teal-500 w-full h-fit flex items-center justify-center p-4">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content (Text & Button) */}
                <motion.div
                    className="relative flex flex-col justify-center items-center text-white "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-bold">HR Consultancy Services</h1>
                    <motion.p className="p-4 text-2xl max-w-7xl text-center">We have a diversified team of competent and experienced hr management consultants who provide a hassle-free solution to complex, time consuming and sometimes-political issues. We are well known among the hr management consultants in Kenya.
                    Today's emerging Human Resource challenges are more complex than ever and HR technical assistance provides your organization with practical, non-legal advice for your day to day HR issues. The service is quick and easy to access with solutions that keep you informed,minimize your risks, and control costs in the areas of employee management.
                    </motion.p>
                    <Link to="/demo">
                        <button className=" mt-4 rounded-full text-black text-md p-3 bg-orange-200 hover:bg-white">
                            Get started
                        </button>
                    </Link>
                </motion.div>

            </div>

            {/* Content Section */}
            <div className="flex">
                <div className="container mx-auto p-6 mt-6 rounded-lg text-white">
                    <h2 className="text-2xl font-semibold text-gray-800"></h2>
                    <h2 className="font-bold text-2xl text-gray-600 mt-2">Typical Human Resource Support Topics include:</h2>
                    <ul className="list-disc list-inside text-gray-600 mt-3 text-2xl">
                        <li>Human Resource Best Practices</li>
                        <li>Interviewing Do’s and Don’ts</li>
                        <li>Workplace Policies and Procedures</li>
                        <li>Recordkeeping Requirements</li>
                        

                    </ul>
                    <p className="text-gray-600 mt-3 text-2xl"> Africa Management Solutions Ltd offers technical assistance for the purpose of assisting your organization make informed decisions and obtain best practice recommendations regarding day-to-day human resource issues. This annual subscription provides convenient phone or email access with a guaranteed response time of 24 hours or less during regular business hours.</p>
                </div>
            </div>
        </div>
    );
}

export default HrConsultancy