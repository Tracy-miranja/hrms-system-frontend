import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <motion.div
        className="flex flex-col relative bg-gradient-to-r from-blue-700 to-blue-500 h-80 flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          About Us
        </h1>
        <p className=" bottom-4 text-lg md:text-xl text-gray-200 text-center px-4">
          Discover how our HRMS system empowers businesses and HR teams to 
          achieve excellence in employee management and recruitment.
        </p>
      </motion.div>

      {/* Main Content Section */}
      <div className="py-12 px-6 md:px-20">
        {/* Intro Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Vision
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our HRMS system aims to simplify, streamline, and optimize all 
            aspects of human resource management for businesses of all sizes.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.3, staggerChildren: 0.2 },
            },
          }}
        >
          {[{
            title: "Employee Profiles",
            description:
              "Maintain detailed employee profiles with roles, responsibilities, and contact information.",
            icon: "👥",
          },
          {
            title: "Recruitment Portal",
            description:
              "Simplify hiring processes with integrated job postings and candidate tracking.",
            icon: "📋",
          },
          {
            title: "Analytics Dashboard",
            description:
              "Gain insights into team performance, attendance, and productivity trends.",
            icon: "📊",
          }].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transform transition-all duration-300"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="main-container" style={{ display: "flex" }}>
      {/* Content Div */}
      <div className="content-div" style={{ flex: 1, padding: "20px" }}>
        <h2>Content Goes Here</h2>
        <p>This is where your main content would go.</p>
      </div>

      {/* Pentagon Div with Icons */}
      <div className="pentagons-div" style={{ display: "flex", gap: "20px" }}>
        {/* Pentagon 1 */}
        <div
          className="pentagon"
          style={{
            width: "100px",
            height: "100px",
            background: "orange",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <FaHome size={30} />
          <p>Home</p>
        </div>

        {/* Pentagon 2 */}
        <div
          className="pentagon"
          style={{
            width: "100px",
            height: "100px",
            background: "blue",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <FaUser size={30} />
          <p>User</p>
        </div>

        {/* Pentagon 3 */}
        <div
          className="pentagon"
          style={{
            width: "100px",
            height: "100px",
            background: "green",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <FaCog size={30} />
          <p>Settings</p>
        </div>
      </div>
    </div>

        {/* Our Mission */}
        <motion.div
          className="text-center max-w-3xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            To create innovative, reliable, and user-friendly HR solutions that
            simplify workforce management and drive business growth.
          </p>
        </motion.div>

        {/* Our Journey */}
        <motion.div
          className="text-center max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Journey
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Since our inception, we have dedicated ourselves to transforming HR
            management. Starting as a small startup, we have grown into a
            trusted partner for businesses worldwide, delivering innovative
            solutions tailored to their needs.
          </p>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
