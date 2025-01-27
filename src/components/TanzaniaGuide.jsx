import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { CalendarCheck } from "lucide-react";

const TanzaniaGuide = () => {
  const [selectedSection, setSelectedSection] = useState("Payroll & Statutory");

  const sections = [
    {
      title: "Payroll & Statutory",
      content: (
        <div>
        <section className="p-4 bg-gray-100">
    <h2 className="text-xl font-bold mb-2">Minimum Wage</h2>
    <p className="text-xl text-gray-700">
    Tanzanians' minimum wage varies by sector, with domestic workers earning a minimum of Tsh60,000 per month as of 2023, while those in financial services, international companies, and telecommunication can expect a minimum of Tsh400,000
    </p>
  </section>
   <section className="p-4 bg-white">
   <h2 className="text-xl font-bold mb-2">Payroll Cycle</h2>
   <p className="text-xl text-gray-700">
   Employers in Tanzania offer employees flexible pay cycles, allowing them to receive payments daily, weekly, bi-weekly, bi-monthly or monthly.
   </p>
 </section>
 <section className="p-4 bg-gray-100">
    <h2 className="text-xl font-bold mb-2">Taxation</h2>
    <div className="overflow-x-auto">
    <h3 className="text-xl font-semibold mt-4 mb-2">Resident Individual Tax Rates - Tanzania (2025)</h3>
  <table className="text-xl table-auto w-full text-left border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Annual Taxable Income Exceeding (TZS)</th>
        <th className="border border-gray-300 px-4 py-2">Annual Taxable Income Not Exceeding (TZS)</th>
        <th className="border border-gray-300 px-4 py-2">Tax on Lower Amount (TZS)</th>
        <th className="border border-gray-300 px-4 py-2">Rate on Excess (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">0</td>
        <td className="border border-gray-300 px-4 py-2">3,240,000</td>
        <td className="border border-gray-300 px-4 py-2">0</td>
        <td className="border border-gray-300 px-4 py-2">0</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">3,240,000</td>
        <td className="border border-gray-300 px-4 py-2">6,240,000</td>
        <td className="border border-gray-300 px-4 py-2">0</td>
        <td className="border border-gray-300 px-4 py-2">9</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">6,240,000</td>
        <td className="border border-gray-300 px-4 py-2">12,240,000</td>
        <td className="border border-gray-300 px-4 py-2">270,000</td>
        <td className="border border-gray-300 px-4 py-2">20</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">12,240,000</td>
        <td className="border border-gray-300 px-4 py-2">32,240,000</td>
        <td className="border border-gray-300 px-4 py-2">1,470,000</td>
        <td className="border border-gray-300 px-4 py-2">25</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">32,240,000</td>
        <td className="border border-gray-300 px-4 py-2">-</td>
        <td className="border border-gray-300 px-4 py-2">6,470,000</td>
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
         
          <div className="mt-4 space-y-6">
            {[
              {
                title: "Annual Leave",
                description:
                  "Tanzanian employees become eligible for paid annual leave after completing 12 months of service, though the leave accrues after the initial six months. The leave includes weekly rest days and any public holidays that fall within that period. The leave includes 28 consecutive days per year.",
              },
              {
                title: "Sick Leave",
                description:
                  "Tanzania labor laws grant employees up to 126 days of paid sick leave within 36 months, contingent upon providing a medical certificate. However, the pay structure is divided into two brackets where the employee is entitled to full salary for the first 63 days and then half salary for the remaining 63 days. If the employee's illness persists beyond 126 days and they remain unfit to work, the employer may initiate termination based on medical grounds.",
              },
              {
                title: "Maternity Leave",
                description:
                  "Maternity leave in Tanzania allows for female workers up to 12 weeks (84 days) of fully paid leave within a 36-month cycle. In the case of multiple births, mothers are entitled to 100 consecutive days. Additionally, if an employee sadly experiences the loss of a newborn within their first year, they are eligible for an additional 84 days of paid leave within the same leave cycle.",
              },
              {
                title: "Paternity Leave",
                description:
                  "Tanzanian fathers are entitled to a maximum of three days of parental leave within a 36-month cycle, regardless of the number of births that occur during the cycle",
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
  { date: "January 12, 2025", name: "Zanzibar Revolution Day" },
  { date: "March 1, 2025", name: "Ramadan Start (Tentative Date)" },
  { date: "March 31, 2025", name: "Eid el Fitri (Tentative Date)" },
  { date: "April 1, 2025", name: "Eid el Fitri Holiday (Tentative Date)" },
  { date: "April 7, 2025", name: "Karume Day" },
  { date: "April 18, 2025", name: "Good Friday" },
  { date: "April 20, 2025", name: "Easter Sunday" },
  { date: "April 21, 2025", name: "Easter Monday" },
  { date: "April 26, 2025", name: "Union Day" },
  { date: "May 1, 2025", name: "Labour Day" },
  { date: "June 6, 2025", name: "Eid al-Adha (Tentative Date)" },
  { date: "July 7, 2025", name: "Saba Saba Day" },
  { date: "August 8, 2025", name: "Nane Nane Day" },
  { date: "September 4, 2025", name: "Maulid Day (Tentative Date)" },
  { date: "October 14, 2025", name: "Nyerere Day" },
  { date: "December 9, 2025", name: "Independence Day" },
  { date: "December 25, 2025", name: "Christmas Day" },
  { date: "December 26, 2025", name: "Boxing Day" }
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
          Once a written notice is laid out the termination process begins, and it should specify the reason and effective date of termination.:
          </p>
          <ul className="text-xl list-disc ml-6 mt-2 text-gray-600">
            <li>First month of employment: 7 days’ notice.</li>
            <li>Weekly or daily employees: 4 days’ notice.</li>
            <li>Monthly employees: 28 days’ notice.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Severance Pay</h3>
          <p className="text-xl text-gray-600 leading-relaxed mt-2">
          To qualify for severance, pay in Tanzania, employees must have completed 12 months of continuous service in an organization. Severance pay is calculated at a rate of seven days compensation for each year of employ payment, with a maximum calculation based on 10 years of service.
          </p>
          <h3 className="text-xl font-semibold mt-4">Probation period</h3>
          <p className="text-xl text-gray-600 leading-relaxed mt-2">
          The Tanzanian labor law does not mandate a specific probation period, however, the law protects the employee from unfair dismissal claims if dismissed within the first six months of employment. Once a written note specifying the reason and date of termination, is given, the termination process commences..
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
      Workforce Guide in Tanzania
    </motion.h1>
    <motion.p
      className="text-sm sm:text-base lg:text-lg mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Expand your reach and discover top talent in Tanzania with Amsol. Our expertise in navigating local regulations, tax systems, and international payroll allows you to focus on building your business. We cover everything in matters of employee acquisition in 50+ countries.
    </motion.p>
  </header>
</div>


      {/* Key Information Section */}
      <div className="flex justify-center">
      <section className=" text-xl container my-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-2xl">
        {[
          { label: "Capital City", value: "Dodoma" },
          { label: "Currency", value: "Tanzanian shilling (TZS)" },
          { label: "Language Spoken", value: "Swahili (Kiswahili)" },
          { label: "Payroll Frequency", value: "Daily, weekly, bi-monthly or monthly" },
          { label: "Employer Taxes", value: "5%" },
          { label: "VAT - Standard Rate", value: "18%" },
          { label: "Cost of Living Index", value: "53.58% lower than US" },
          { label: "GDP - Real Growth Rate", value: "2.0% (2020)" },
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
}

export default TanzaniaGuide