import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function RecruitmentSelection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 overflow-hidden">
      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?recruitment")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center p-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight shadow-md">Recruitment & Selection Services</h1>
          <p className="text-lg text-white mt-3 px-4 max-w-lg">Looking for the best recruitment consultants? We connect Kenyan professionals with top employers across various industries.</p>
          <Link to="/demo"><button className="mt-5 bg-white rounded-full p-4 hover:bg-orange-100">Get started</button></Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center p-10 mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-yellow-400">Why you should choose us</h1>
        <p className="text-white text-lg mt-3 max-w-2xl px-4">
          We provide tailored recruitment solutions, a vast database of CVs, and a quick, efficient process. Trust us to find the best candidates for your needs.
        </p>
      </motion.div>

      {/* Why Us Section */}
      <div className="flex justify-center">
        <motion.div
          className="container flex flex-col justify-center items-center p-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white text-center">Why you should look no further</h1>
          <ul className="list-disc pl-6 text-lg text-white space-y-3 mt-5 max-w-4xl text-center">
            <li>Tailored services for businesses of all sizes</li>
            <li>Comprehensive recruitment from entry to senior levels</li>
            <li>Fast response and replacement service at no extra cost</li>
            <li>Trusted by both local and international companies</li>
          </ul>
        </motion.div>
      </div>

      {/* Service Section */}
      <h1 className="mt-8 text-center font-bold text-4xl text-white">Our Recruitment Process</h1>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {["Job advertisement", "Interviews & screening", "Interview scheduling", "Reference checks"].map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform border-l-4 border-blue-600"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="text-xl font-semibold text-blue-600">{service}</h2>
            <p className="text-gray-600 mt-2">Comprehensive and efficient recruitment services.</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Section */}
      <div className="bg-blue-600 text-center py-8 mt-16">
        <p className="text-white text-lg">Your trusted recruitment partner in Kenya. Get in touch today!</p>
        <button className="bg-teal-500 text-white py-2 px-6 rounded-full mt-4 transition-all hover:bg-teal-700">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default RecruitmentSelection;
