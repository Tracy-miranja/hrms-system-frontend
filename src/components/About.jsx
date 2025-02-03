import React from "react";
import { motion } from "framer-motion"; // For animations
import { FaUser } from "react-icons/fa";
import amsolhr from "../assets/amsolteam2.jpg"


const About = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Sticky Background Section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      ></div>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About AmsolHR
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Empowering businesses worldwide with innovative HR solutions.
          </motion.p>
        </div>
      </header>
      {/* core values */}
      
      {/* Content Sections */}
      <section className="container mx-auto px-2 py-12 md:py-20 gap-4">
        <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={amsolhr}
              alt="About AmsolHR"
              className="rounded-lg shadow-lg w-[100%] h-[100%]"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">Our focus is on maximizing efficiency and boosting productivity in the workplace.</h2>
            <p className="text-gray-600">
            A few years ago, while leading our software company, our founders uncovered a transformative opportunity in the people space—a chance to empower businesses across Africa to streamline hiring, managing, and paying their teams seamlessly. Imagine having the power to handle HR, payroll, and compliance for multiple countries, all from one intuitive platform.

Yes, one platform! And it’s not just any platform—it’s designed to work smarter, so your business can grow without limits. No more getting bogged down in repetitive, time-consuming HR tasks. Instead, you can focus on what truly matters: building a thriving team and driving your people strategy forward.
            </p>
            <p className="text-gray-600">
            We embraced this vision and have been passionately crafting solutions that empower fast-growing companies to take charge of their operations with ease and efficiency. With us, you can ditch the complexities and focus on accelerating your success—because your people deserve a system as forward-thinking as your goals.
            </p>
            <a
              href="#cta"
              className="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md shadow hover:bg-indigo-600 transition duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mb-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Mission
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
          To provide timely, quality, and superior services with the aim of being the management solutions service provider of choice in Africa.
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
          {[
            {
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
            },
          ].map((feature, index) => (
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
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-16"
      >
        <div className="container mx-auto px-6 text-center space-y-6">
          <motion.h3
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your HR Processes?
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join thousands of businesses already experiencing the AmsolHR
            difference.
          </motion.p>
          <motion.a
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-indigo-500 font-bold rounded-md shadow hover:bg-gray-100 transition duration-300"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            Get Started Now
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default About;
