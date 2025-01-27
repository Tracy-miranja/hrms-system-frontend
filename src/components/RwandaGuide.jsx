import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { CalendarCheck } from "lucide-react";

const RwandaGuide = () => {
  const [selectedSection, setSelectedSection] = useState("Payroll & Statutory");

  const sections = [
    {
      title: "Payroll & Statutory",
      content: (
        <div>
        <section className="p-4 bg-gray-100">
    <h2 className="text-xl font-bold mb-2">Minimum Wage</h2>
    <p className="text-xl text-gray-700">
    Rwanda’s Ministry of Public Service and Labour sets the minimum wage, currently at 130,000 RwF per month as of 2023. This applies to all workers including those in the private sector.
    </p>
  </section>
   <section className="p-4 bg-white">
   <h2 className="text-xl font-bold mb-2">Payroll Cycle</h2>
   <p className="text-xl text-gray-700">
   In Rwanda, payment is flexible and is determined by the individual employee and employer agreement. Depending on the mutual agreement between the two parties, payment can be daily for hourly workers, weekly and monthly.

However, wages must be paid within seven days of the designated pay period, with the sole exception of the daily workers who receive their pay daily. The employers are obligated to deposit the salaries into bank or financial institution accounts designated by the employee in writing.
   </p>
 </section>
 <section className="p-4 bg-gray-100">
    <h2 className="text-xl font-bold mb-2">Taxation</h2>
    <p className="text-xl text-gray-700 mb-4">
      The resident individual tax rates are outlined in the following table. These rates apply to employment income and taxable business income.
    </p>
    <div className="overflow-x-auto">
  <h3 className="text-xl font-semibold mt-4 mb-2">Resident Individual Tax Rates</h3>
  <table className="text-xl table-auto w-full text-left border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Monthly Taxable Income Exceeding (RWF)</th>
        <th className="border border-gray-300 px-4 py-2">Monthly Taxable Income Not Exceeding (RWF)</th>
        <th className="border border-gray-300 px-4 py-2">Rate on Excess %</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">0</td>
        <td className="border border-gray-300 px-4 py-2">360,000</td>
        <td className="border border-gray-300 px-4 py-2">0</td>
       
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">360,000</td>
        <td className="border border-gray-300 px-4 py-2">1,200,000</td>
        <td className="border border-gray-300 px-4 py-2">20</td>
       
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">1,200,000</td>
        <td className="border border-gray-300 px-4 py-2">-</td>
        <td className="border border-gray-300 px-4 py-2">30</td>
       
      </tr>
      
      
    </tbody>
  </table>
</div>


  </section>
 </div>
      ),
    },
    {
      title: "Leaves",
      content: (
        <div>
          <p className="text-xl text-gray-600 leading-relaxed">
          Under the Rwandan labor code, all employees who complete one year of service are eligible for yearly leave. Here is a breakdown:
          </p>
          <div className="mt-4 space-y-6">
            {[
              {
                title: "Annual Leave",
                description:
                  "Each worker in Uganda is entitled to 21 days of annual leave per year, with full pay. The employee, subject to agreement with the employer, can choose the timing of this leave. It’s important to note that the 21 days only include work days, so if an employee doesn’t normally work on Saturdays and Sundays, those days should not be counted as their annual leave.",
              },
              {
                title: "Sick Leave",
                description:
                  "Employees can generally access up to six months of sick leave with medical documentation as proof of illness. The first three months are paid, while the following three months are unpaid.",
              },
              {
                title: "Maternity Leave",
                description:
                  "Rwandan law grants employees 12 weeks of paid leave for maternity purposes. This allows them to take up to two weeks of leave before giving birth. During this entire period, their full salary is covered, with Social Security handling the payment for the last six weeks.",
              },
              {
                title: "Paternity Leave",
                description:
                  "While not legally mandated in Rwanda, employers commonly grant partners of mothers three business days of leave following childbirth. This reflects a customary practice rather than a legal practice.",
              },
              {
                title: "Parental Leave",
                description:
                  "This is not permitted in Rwanda. Maternity leave is offered and regulated by the law in Rwanda as the sole form of parental leave, this means that fathers or any other parental figures are not entitled to any legally mandated leave upon the birth of a child.",
              },
            ].map((policy, index) => (
              <div
                key={index}
                className="flex items-start bg-white shadow-lg rounded-lg p-4 border border-gray-200"
              >
                <div className="flex-shrink-0 text-blue-500">
                  <Calendar size={32} />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {policy.title}
                  </h2>
                  <p className="text-xl text-gray-600 mt-2">{policy.description}</p>
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
  { date: "January 2, 2025", name: "Day After New Year's Day" },
  { date: "February 1, 2025", name: "National Heroes' Day" },
  { date: "March 29, 2025", name: "Good Friday" },
  { date: "April 1, 2025", name: "Easter Monday" },
  { date: "April 7, 2025", name: "Tutsi Genocide Memorial Day" },
  { date: "April 8, 2025", name: "Tutsi Genocide Memorial Day" },
  { date: "August 2, 2025", name: "Umuganura Day" },
  { date: "April 10, 2025", name: "Eid al-Fitr" },
  { date: "August 16, 2025", name: "Assumption of Mary" },
  { date: "May 1, 2025", name: "Labor Day" },
  { date: "December 25, 2025", name: "Christmas Day" },
  { date: "June 17, 2025", name: "Eid al-Adha" },
  { date: "December 26, 2025", name: "Boxing Day" },
  { date: "July 1, 2025", name: "Independence Day" },
  { date: "July 4, 2025", name: "Liberation Day" }
]
.map((holiday, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200 border border-gray-200"
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
          <h3 className="text-xl font-semibold">Notice Period</h3>
          <p className="text-xl text-gray-600 leading-relaxed mt-2">
          Either party can terminate a contract with notice or penalty in; lieu of notice. Employers can only terminate an employee's contract for valid reasons. Notice period: This varies for different types of contracts i.e. Fixed-term contracts expire at their designated end date or can be canceled by either party for specific reasons, like voluntary termination or gross negligence, and the canceling party must notify the other within 48 hours. Indefinite-term contracts have notice periods that vary based on employee service’s duration e.g.
          </p>
          <ul className="text-xl list-disc ml-6 mt-2 text-gray-600">
            <li>Less than 1 year:15 days’ notice</li>
            <li>More than 1 year:1 months’ notice</li>
           
          </ul>
          <h3 className="text-xl font-semibold mt-4">Severance Pay</h3>
          <p className="text-xl text-gray-600 leading-relaxed mt-2">
          Employees with at least one year of continuous service are eligible for severance pay under the labor code.
          The amount of severance pay is based on the employee’s length of service:
          </p>
          <ul className="text-xl list-disc ml-6 mt-2 text-gray-600">
            <li> Less than 5 years: One month’s salary</li>
            <li> 5-10 years: Two months’ salary</li>
            <li>10-15 years: Three months’ salary</li>
            <li>15-2- years: Four months’ salary</li>
            <li>20-25 years: Five months’ salary</li>
            <li> Over 25 years: Six months’ salary</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Probation period</h3>
          <p className="text-xl text-gray-600 leading-relaxed mt-2">
          The Rwandan labor law limits probation periods to a maximum of six months. Both the initial probation period and any extensions must be documented in writing.
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
      Workforce Guide in Rwanda
    </motion.h1>
    <motion.p
      className="text-sm sm:text-base lg:text-lg mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Expand your reach and discover top talent in Rwanda with Amsol. Our expertise in navigating local regulations, tax systems, and international payroll allows you to focus on building your business. We cover everything in matters of employee acquisition in 50+ countries.
    </motion.p>
  </header>
</div>

      {/* Key Information Section */}
      <div className="flex justify-center">
      <section className="text-xl container my-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-2xl">
        {[
          { label: "Capital City", value: "Kigali" },
          { label: "Currency", value: "Rwandan franc (FRw, RF, R₣)" },
          { label: "Language Spoken", value: "Kinyarwanda, French, English" },
          { label: "Payroll Frequency", value: "Daily, weekly and monthly" },
          { label: "Employer Taxes", value: "2%-5%" },
          { label: "VAT - Standard Rate", value: "18%" },
          { label: "Cost of Living Index", value: "443,538RF" },
          { label: "GDP - Real Growth Rate", value: "-3.4%" },
          { label: "Employee Protection", value: "Moderate" },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center text-2xl">
            <h3 className="text-xl font-semibold text-gray-800">{item.label}</h3>
            <p className="text-xl text-gray-600 mt-2">{item.value}</p>
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
                    ? "bg-blue-600 text-white text-xl"
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