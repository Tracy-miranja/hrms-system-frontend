import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function  HrAudit() {
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
          <h1 className="text-5xl font-extrabold text-white leading-tight shadow-md">HR Audit Services</h1>
          <p className="text-xl text-white mt-3 px-4 max-w-5xl">HR is a system within a system and actions or non-actions of your HR Department affect the entire organization. The HR audit is the primary means of analyzing HR effectiveness and efficiency and objectively reporting findings to include developmental recommendations from a best practice perspective. The HR compliance audit also improves compliance, if indicated, and develops further infrastructure to support and grow the potential of the company's Human Capital. An audit targets areas relative to organizational development and human resource management practices.</p>
          <Link to="/demo"><button className="mt-5 bg-white rounded-full p-4 hover:bg-orange-100">Get started</button></Link>
        </motion.div>
      </div>

      {/* Service Section */}
      <h1 className="mt-8 text-center font-bold text-xl text-white">The human resources audit checklist should include the following:</h1>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {["Staffing and Hiring", "Benefits Administration", "Employment Practices","Education and Training","Time Off and Leaves","Health and Safety","Performance Management","Compensation","Terminations"].map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform border-l-4 border-blue-600"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="text-xl font-semibold text-blue-600">{service}</h2>
           
          </motion.div>
        ))}
        
      </motion.div>
       <p className="text-white mt-2 text-center text-xl">Africa Management Solutions Ltd (AMSOL) is one of the few human resource consulting firms that offer hr audit services in Kenya. AMSOL will prepare a comprehensive report of the audit findings with recommendations that are prioritized to assist your organization with development of an actionable work plan. Your effective implementation of the work plan is the key ingredient to improve the performance, efficiency, and effectiveness of the HR function and to realize the ROI of Human Capital Management.</p>

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






export default HrAudit