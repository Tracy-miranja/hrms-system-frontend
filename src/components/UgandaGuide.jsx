import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const UgandaGuide = () => {
  const [selectedSection, setSelectedSection] = useState("Payroll & Statutory");

  const sections = [
    {
      title: "Payroll & Statutory",
      content: (
        <div>
        <section className="p-4 bg-gray-100">
    <h2 className="text-xl font-bold mb-2">Minimum Wage</h2>
    <p className="text-xl text-gray-700">
      In Uganda, the minimum wage stands at <strong>6,000 Ugandan shillings per month</strong> for all employees, a figure that has not been revised since <strong>January 1, 1984</strong>. The year 2015 saw the introduction of a fresh minimum wage in parliament, sparking debate and discussion.
    </p>
  </section>
   <section className="p-4 bg-white">
   <h2 className="text-xl font-bold mb-2">Payroll Cycle</h2>
   <p className="text-xl text-gray-700">
     Salaries are paid <strong>monthly</strong>, which is the most prevalent payroll plan in Uganda. However, some companies pay their staff <strong>weekly</strong>, <strong>bi-monthly</strong>, or <strong>semi-monthly</strong>. This flexibility caters to diverse preferences and can be beneficial for both employers and employees.
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
        <th className="border border-gray-300 px-4 py-2">Annual Taxable Income Exceeding (UGX)</th>
        <th className="border border-gray-300 px-4 py-2">Annual Taxable Income Not Exceeding (UGX)</th>
        <th className="border border-gray-300 px-4 py-2">Tax on Lower Amount (UGX)</th>
        <th className="border border-gray-300 px-4 py-2">Rate on Excess (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">0</td>
        <td className="border border-gray-300 px-4 py-2">2,820,000</td>
        <td className="border border-gray-300 px-4 py-2">0</td>
        <td className="border border-gray-300 px-4 py-2">0</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">2,820,000</td>
        <td className="border border-gray-300 px-4 py-2">4,020,000</td>
        <td className="border border-gray-300 px-4 py-2">0</td>
        <td className="border border-gray-300 px-4 py-2">10</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">4,020,000</td>
        <td className="border border-gray-300 px-4 py-2">4,920,000</td>
        <td className="border border-gray-300 px-4 py-2">120,000</td>
        <td className="border border-gray-300 px-4 py-2">20</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">4,920,000</td>
        <td className="border border-gray-300 px-4 py-2">120,000,000</td>
        <td className="border border-gray-300 px-4 py-2">300,000</td>
        <td className="border border-gray-300 px-4 py-2">30</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">120,000,000</td>
        <td className="border border-gray-300 px-4 py-2">-</td>
        <td className="border border-gray-300 px-4 py-2">34,824,000</td>
        <td className="border border-gray-300 px-4 py-2">40</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="overflow-x-auto">
  <h3 className="text-xl font-semibold mt-4 mb-2">Non-Resident Individual Tax Rates</h3>
  <table className="text-xl table-auto w-full text-left border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="text-xl border border-gray-300 px-4 py-2">Annual Taxable Income Exceeding (UGX)</th>
        <th className="text-xl border border-gray-300 px-4 py-2">Annual Taxable Income Not Exceeding (UGX)</th>
        <th className="text-xl border border-gray-300 px-4 py-2">Tax on Lower Amount (UGX)</th>
        <th className="text-xl border border-gray-300 px-4 py-2">Rate on Excess (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="text-xl border border-gray-300 px-4 py-2">0</td>
        <td className="text-xl border border-gray-300 px-4 py-2">4,020,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">4,020,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">0</td>
        <td className="text-xl border border-gray-300 px-4 py-2">10</td>
      </tr>
      <tr>
        <td className="text-xl border border-gray-300 px-4 py-2">4,020,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">4,920,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">402,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">20</td>
      </tr>
      <tr>
        <td className="text-xl border border-gray-300 px-4 py-2">4,920,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">120,000,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">582,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">30</td>
      </tr>
      <tr>
        <td className="text-xl border border-gray-300 px-4 py-2">120,000,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">-</td>
        <td className="text-xl border border-gray-300 px-4 py-2">35,106,000</td>
        <td className="text-xl border border-gray-300 px-4 py-2">40</td>
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
            Employees in Uganda are entitled to various leaves, including annual, maternity, paternity, and sick leave, as per the labor laws.
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
                  "An employee in Uganda who has completed at least one month of service is entitled to two months of sick leave, with the first month fully paid and the second month unpaid. However, it is crucial to note that employers may then have the right to terminate the employment contract after two months, based on the terms outlined in the existing contract.",
              },
              {
                title: "Maternity Leave",
                description:
                  "In Uganda, female employees with a valid contract are eligible for up to 60 days of fully paid maternity leave. The law does not specify a minimum service requirement for this benefit. Additionally, employees experiencing miscarriage are entitled to at least 4 weeks of paid leave.",
              },
              {
                title: "Paternity Leave",
                description:
                  "In Uganda, male employees are eligible for up to four days of fully paid paternity leave, but only when the birth involves their official spouse.",
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
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Uganda recognizes several public holidays throughout the year, and employers are required to observe these days.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { date: "January 1, 2025", name: "New Year's Day" },
              { date: "January 26, 2025", name: "NRM Liberation Day" },
              { date: "February 16, 2025", name: "Archbishop Janani Luwum Day" },
              { date: "March 8, 2025", name: "International Women's Day" },
              { date: "March 31, 2025", name: "Eid-Ul-Fitr (End of Ramadan)" },
              { date: "April 18, 2025", name: "Good Friday" },
              { date: "April 21, 2025", name: "Easter Monday" },
              { date: "May 1, 2025", name: "Labour Day" },
              { date: "June 3, 2025", name: "Martyrs' Day" },
              { date: "June 7, 2025", name: "Eid al-Adha (Feast of Sacrifice)" },
              { date: "June 9, 2025", name: "National Heroes' Day" },
              { date: "October 9, 2025", name: "Independence Day" },
              { date: "December 25, 2025", name: "Christmas Day" },
              { date: "December 26, 2025", name: "Boxing Day" },
            ].map((holiday, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-200 border border-gray-200"
              >
                <div className="text-xl font-semibold text-gray-800">{holiday.name}</div>
                <div className="text-xl text-gray-600">{holiday.date}</div>
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
            The length of the notice period depends on the employee’s length of service:
          </p>
          <ul className="text-xl list-disc ml-6 mt-2 text-gray-600">
            <li>6 months to 1 year: Two weeks’ notice required.</li>
            <li>1 year to 5 years: At least a month’s notice required.</li>
            <li>5 years to 10 years: Three months’ notice required.</li>
            <li>Over 10 years: Three months’ notice required.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Severance Pay</h3>
          <p className="text-xl text-gray-600 leading-relaxed mt-2">
            Upon termination, including wrongful dismissal, employees with at least six months of service are entitled to severance pay in Uganda. The law mandates negotiation between the employer and employee to determine the amount. If no agreement is reached, a labor officer may intervene and make a binding decision regarding the severance pay.
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
      Workforce Guide in Uganda
    </motion.h1>
    <motion.p
      className="text-sm sm:text-base lg:text-lg mt-4"
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
          <h3 className=" font-semibold text-gray-800 text-xl">Get answers to all your questions!</h3>
          <ul className="mt-4 space-y-4">
            {sections.map((section, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded-md transition-colors ${
                  selectedSection === section.title
                    ? "text-xl bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-gray-100 text-xl"
                }`}
                onClick={() => setSelectedSection(section.title)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 bg-white rounded-2xl shadow-md p-6 text-xl">
          {sections.find((section) => section.title === selectedSection)?.content}
        </main>
      </div>
      </div>
     
    </div>
  );
};


export default UgandaGuide