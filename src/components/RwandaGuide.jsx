import React, { useState } from "react";
import { motion } from "framer-motion";
import ugandahr from "../assets/Kampala.jpg"

const RwandaGuide = () => {
  const [selectedSection, setSelectedSection] = useState("Payroll & Statutory");

  const sections = [
    {
      title: "Payroll & Statutory",
      content: (
        <div>
          <p className="text-gray-600 leading-relaxed">
            Employers in Uganda are required to adhere to statutory obligations, including taxes and payroll management. Proper compliance ensures smooth operations.
          </p>
        </div>
      ),
    },
    {
      title: "Leaves",
      content: (
        <div>
          <p className="text-gray-600 leading-relaxed">
            Employees in Uganda are entitled to various leaves, including annual, maternity, paternity, and sick leave, as per the labor laws.
          </p>
        </div>
      ),
    },
    {
      title: "Public Holidays",
      content: (
        <div>
          <p className="text-gray-600 leading-relaxed">
            Uganda recognizes several public holidays throughout the year, and employers are required to observe these days.
          </p>
        </div>
      ),
    },
    {
      title: "Termination Process",
      content: (
        <div>
          <h3 className="text-lg font-semibold">Notice Period</h3>
          <p className="text-gray-600 leading-relaxed mt-2">
            The length of the notice period depends on the employee’s length of service:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>6 months to 1 year: Two weeks’ notice required.</li>
            <li>1 year to 5 years: At least a month’s notice required.</li>
            <li>5 years to 10 years: Three months’ notice required.</li>
            <li>Over 10 years: Three months’ notice required.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4">Severance Pay</h3>
          <p className="text-gray-600 leading-relaxed mt-2">
            Upon termination, including wrongful dismissal, employees with at least six months of service are entitled to severance pay in Uganda. The law mandates negotiation between the employer and employee to determine the amount. If no agreement is reached, a labor officer may intervene and make a binding decision regarding the severance pay.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Header Section */}
      <div className="ug h-[60vh] flex items-center justify-center bg-green-500 p-10  bg-cover bg-center bg-no-repeat">
      <header className="bg-blue-600 text-white py-10 text-center rounded-2xl p-10 w-[50%]">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Workforce Guide in Uganda
        </motion.h1>
        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Expand your reach and discover top talent in Uganda with Amsol. Our expertise in navigating local regulations, tax systems, and international payroll allows you to focus on building your business. We cover everything in matters of employee acquisition in 50+ countries.
        </motion.p>
      </header>
      </div>

      {/* Key Information Section */}
      <div className="flex justify-center">
      <section className=" container my-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-2xl">
        {[
          { label: "Capital City", value: "Kampala" },
          { label: "Currency", value: "Ugandan shilling (UGX)" },
          { label: "Language Spoken", value: "Official language English" },
          { label: "Payroll Frequency", value: "Weekly, bimonthly, or semi-monthly" },
          { label: "Employer Taxes", value: "10%" },
          { label: "VAT - Standard Rate", value: "18%" },
          { label: "Cost of Living Index", value: "652200.00 UGX" },
          { label: "GDP - Real Growth Rate", value: "2.9% (2020)" },
          { label: "Employee Protection", value: "Moderate" },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center text-2xl">
            <h3 className="text-2xl font-semibold text-gray-800">{item.label}</h3>
            <p className="text-gray-600 mt-2">{item.value}</p>
          </div>
        ))}
      </section>
      </div>

      {/* Sidebar and Content Section */}
      <div className="flex justify-center">
      <div className="container flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-md p-6 w-full md:w-1/4">
          <h3 className=" font-semibold text-gray-800 text-2xl">Get answers to all your questions!</h3>
          <ul className="mt-4 space-y-4">
            {sections.map((section, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded-md transition-colors ${
                  selectedSection === section.title
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-gray-100 text-2xl"
                }`}
                onClick={() => setSelectedSection(section.title)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 bg-white rounded-2xl shadow-md p-6 text-2xl">
          {sections.find((section) => section.title === selectedSection)?.content}
        </main>
      </div>
      </div>
     
    </div>
  );
};

export default RwandaGuide