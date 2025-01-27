import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { CalendarCheck } from "lucide-react";

const  Kenyaguide = () => {
  const [selectedSection, setSelectedSection] = useState("Payroll & Statutory");

  const sections = [
    {
      title: "Payroll & Statutory",
      content: (
        <div>
        <section className="p-4 bg-gray-100">
    <h2 className="text-xl font-bold mb-2">Minimum Wage</h2>
    <p className="text-xl text-gray-700">
    Several variables define minimum wage in Kenya, including geographical location, skill level, the industry one is engaged in, and age. Usually, the minimum wage ranges from <strong>13,572.90 ksh per month</strong>to as high as <strong>30,627.45 KES</strong>.
    </p>
  </section>
   <section className="p-4 bg-white">
   <h2 className="text-xl font-bold mb-2">Payroll Cycle</h2>
   <p className="text-gray-700 text-xl">
   Employee payments in Kenya are made in monthly installments on or before the last day of the month. 

Casual Employees are paid either at the end of the workday or weekly.
   </p>
 </section>
 <section className="p-4 bg-gray-100">
    <h2 className="text-xl font-bold mb-2">Taxation</h2>
    <p className="text-xl pb-3">In Kenya, non-residential individual tax rates generally follow the same brackets as resident rates, but non-residents may be subject to additional withholding taxes depending on the income source. This table reflects the standard brackets. For more precise tax implications for non-residents, specific guidelines like treaties and exemptions might apply.</p>
<table className="text-lg table-auto w-full text-left border-collapse border border-gray-300">
  <thead>
    <tr>
      <th className="border border-gray-300 px-4 py-2">Taxable Revenue (KES)</th>
      <th className="border border-gray-300 px-4 py-2">Rate of Tax (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-gray-300 px-4 py-2">First 288,000</td>
      <td className="border border-gray-300 px-4 py-2">10</td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Next 100,000</td>
      <td className="border border-gray-300 px-4 py-2">25</td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Next 5,612,000</td>
      <td className="border border-gray-300 px-4 py-2">30</td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Next 3,600,000</td>
      <td className="border border-gray-300 px-4 py-2">32.5</td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">Above 9,600,000</td>
      <td className="border border-gray-300 px-4 py-2">35</td>
    </tr>
  </tbody>
</table>

  </section>
 </div>
      ),
    },
    {
      title: "Leaves",
      content: (
        <div>
          
          <div className="mt-4 space-y-6">
            {[
              {
                title: "Annual Leave",
                description:
                  "Employees are entitled to 21 consecutive days of paid time off after working with an employer for 12 months.",
              },
              {
                title: "Sick Leave",
                description:
                  "After two months of employment, an employee is eligible for 14 days of paid leave. 7 days are paid in full, while the other half is paid half the salary. The 14 days are renewed annually, and a medical certificate is required during the sick leave application.",
              },
              {
                title: "Maternity Leave",
                description:
                  "Women are entitled to 91 days of maternity leave. The employer fully pays the employee during these days. To qualify for maternity leave, the employee must give a written seven days notice. Additionally, the employee must provide a medical certificate during the leave application.",
              },
              {
                title: "Paternity Leave",
                description:
                  "Fathers can take a 14 days paternity leave with full pay to take care of their postpartum partner.",
              },
              {
                title: "Adoption Leave",
                description:
                  "If an employee decides to adopt a child, the same law of the birth parents applies. But, the employee gives a 14 days' notice instead of 7 days. Relevant adoption documentation must be provided during the leave application.",
              },
            ].map((policy, index) => (
              <div
                key={index}
                className="text-xl flex items-start bg-white shadow-lg rounded-lg p-4 border border-gray-200"
              >
                <div className="flex-shrink-0 text-blue-500">
                  <Calendar size={32} />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {policy.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{policy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Public Holidays",
      content: (
        <div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
  { date: "January 1, 2025", name: "New Year's Day" },
  { date: "March 29, 2025", name: "Good Friday" },
  { date: "March 31, 2025", name: "Easter Sunday" },
  { date: "April 1, 2025", name: "Easter Monday" },
  { date: "May 1, 2025", name: "Labour Day" },
  { date: "June 1, 2025", name: "Madaraka Day" },
  { date: "June 17, 2025", name: "Eid al-Adha (Tentative)" },
  { date: "October 20, 2025", name: "Mashujaa Day (Heroes' Day)" },
  { date: "December 12, 2025", name: "Jamhuri Day (Independence Day)" },
  { date: "December 25, 2025", name: "Christmas Day" },
  { date: "December 26, 2025", name: "Boxing Day" }
]
.map((holiday, index) => (
              <div
                key={index}
                className="flex items-center p-4 gap-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200 border border-gray-200"
              >
                 <div className="relative w-19 h-19 p-3 rounded-full border-4 border-blue-600 flex items-center justify-center shadow-lg">
        <CalendarCheck size={32} className="text-blue-600" />
      </div>
                <div>
                <div className="text-lg font-semibold text-gray-800">{holiday.name}</div>
                <div className="text-sm text-gray-600">{holiday.date}</div>
                </div>
                
               
              </div>
            ))}
          </div>
        </div>
      ),
    },
    
    {
      title: "Termination Process",
      content: (
        <div>
          <p className="text-xl text-gray-600">Termination of employment in Kenya can either be from the employee or the employer. However, a lawful termination can only occur if a just cause has been established. Some of the reasons for contract termination by the employer may include business, worker's misconduct, and personal reasons. The employer should give an employee a warning in case of misconduct, while the employee must explain their actions.

Terms to observe in employment termination include notice period, severance pay, and probation.</p>
          <h3 className="text-xl pb-2 pt-2 font-semibold">Notice Period</h3>
          <p className="text-xl text-gray-600 leading-relaxed mt-2">
          An employer must provide at least a 28 days written notice before the contract termination. However, at least seven days' notice of termination is required for employees on probation.
          </p>
          
          <h3 className="text-xl font-semibold mt-4">Probation Periods</h3>
          <p className="text-xl text-gray-600 leading-relaxed mt-2">
          A probation period can go up to 6 months. During this period, the employer can terminate an employee provided they give a seven days' notice.
          </p>

          <h3 className="text-xl font-semibold mt-4">Severance Pay</h3>
          <p className="text-xl text-gray-600 leading-relaxed mt-2">
          It only applies in cases where the employee's termination was due to redundancy. In such a case, the employee is entitled to 15 days' pay for every year of employment.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Header Section */}
      <div className="ug h-[60vh] flex items-center justify-center bg-green-500 p-6 sm:p-10 bg-cover bg-center bg-no-repeat">
  <header className="bg-blue-600 text-white py-6 px-4 sm:py-10 sm:px-8 text-center rounded-2xl w-full sm:w-[75%] md:w-[60%] lg:w-[50%]">
    <motion.h1
      className="text-2xl sm:text-3xl lg:text-4xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Workforce Guide in Kenya
    </motion.h1>
    <motion.p
      className="text-sm sm:text-base lg:text-lg mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Expand your reach and discover top talent in Kenya with Amsol. Our expertise in navigating local regulations, tax systems, and international payroll allows you to focus on building your business. We cover everything in matters of employee acquisition in 50+ countries.
    </motion.p>
  </header>
</div>


      {/* Key Information Section */}
      <div className="flex justify-center">
      <section className=" container my-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-xl">
        {[
          { label: "Capital City", value: "Nairobi" },
          { label: "Currency", value: "Kenya Shilling (KES)" },
          { label: "Language Spoken", value: "English, Swahili" },
          { label: "Payroll Frequency", value: "Monthly" },
          { label: "Employer Taxes", value: "10% - 30%" },
          { label: "VAT - Standard Rate", value: "16%" },
          { label: "Cost of Living Index", value: "41.12" },
          { label: "GDP - Real Growth Rate", value: "6.05%" },
          { label: "Employee Protection", value: "Moderate" },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center text-xl">
            <h3 className="text-xl font-semibold text-gray-800">{item.label}</h3>
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




export default Kenyaguide