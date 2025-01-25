import React from 'react'
import { motion } from 'framer-motion';
import employeBenefits from "../assets/Group26.png"
import Clients from './clients';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight  } from "@fortawesome/free-solid-svg-icons";
import { faTimeline, faFileInvoiceDollar, faStickyNote, faEnvelope, faSms, faCalendarAlt, faMailBulk, faUserEdit, faExchangeAlt, faFileUpload, faUsersCog, faTasks, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faTimeline,
    title: "Clients Timeline",
    description: "A graphic design showing a long bar labeled with dates with events related to a client."
  },
  {
    icon: faFileInvoiceDollar,
    title: "Client Statement",
    description: "Track a client’s balance and manage collection actions for unpaid balances."
  },
  {
    icon: faStickyNote,
    title: "Notes",
    description: "Enable salespeople to write notes about calls or important client information."
  },
  {
    icon: faEnvelope,
    title: "Follow-up and Tracking",
    description: "Automated email reminders for payment requests and other actions."
  },
  {
    icon: faSms,
    title: "SMS",
    description: "Send automated SMS for inquiries, events, or product information."
  },
  {
    icon: faCalendarAlt,
    title: "Appointments",
    description: "Schedule appointments with alerts for activities or due payments."
  },
  {
    icon: faMailBulk,
    title: "Email Templates",
    description: "Create customized email templates with various visual designs."
  },
  {
    icon: faUserEdit,
    title: "Custom Fields",
    description: "Add new customized entries in a module to manage operations accurately."
  },
  {
    icon: faExchangeAlt,
    title: "Import & Export",
    description: "Easily import and export clients, products, and invoices in bulk."
  },
  {
    icon: faFileUpload,
    title: "Attachments and Resources",
    description: "Attach files or refer to resources relevant to a client’s request."
  },
  {
    icon: faUsersCog,
    title: "Assign to Staff Members",
    description: "Assign contacts or tasks to relevant staff members efficiently."
  },
  {
    icon: faTasks,
    title: "Activity Log",
    description: "Track client activities to deliver content based on their needs."
  },
  {
    icon: faMapMarkerAlt,
    title: "Clients Geolocation",
    description: "Check a customer's geographic location on Google Maps."
  }
];

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

    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">CRM Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FontAwesomeIcon icon={feature.icon} className="text-blue-500 text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
   </>
  )
}

export default CMS