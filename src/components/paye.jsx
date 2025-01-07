import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf"; // Import jsPDF for PDF generation
import salary from "../assets/salary-calculation.png"

const PayrollCalculator = () => {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    currency: "",
    grossSalary: "",
    employeeName: "",
    designation: "",
    dateOfPayment: "",
    payPeriod: "",
  });
  const [deductions, setDeductions] = useState(null);

  // Fetch country and currency data
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const formattedCountries = data.map((country) => ({
          name: country.name.common,
          currency: country.currencies
            ? Object.keys(country.currencies)[0]
            : "USD",
        }));
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculatePayroll = () => {
    const gross = parseFloat(formData.grossSalary) || 0;

    // Simulate tax calculation
    const PAYE = gross * 0.1; // 10% PAYE
    const SHIF = gross * 0.0275; // 2.75% SHIF
    const NSSF = gross * 0.05; // 5% NSSF
    const houseLevy = gross * 0.01; // 1% house levy (example)
    const totalDeductions = PAYE + SHIF + NSSF + houseLevy;
    const netSalary = gross - totalDeductions;

    setDeductions({
      PAYE,
      SHIF,
      NSSF,
      houseLevy,
      totalDeductions,
      netSalary,
    });
  };

  const generatePayslip = () => {
    const doc = new jsPDF();
  
    // Add a title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Payslip", 105, 20, { align: "center" });
  
    // Draw a border
    doc.setLineWidth(0.5);
    doc.rect(10, 10, 190, 277);
  
    // Employee Details Section
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Employee Details", 20, 40);
    doc.setFont("helvetica", "normal");
    doc.text(`Employee Name: ${formData.employeeName}`, 20, 50);
    doc.text(`Designation: ${formData.designation}`, 20, 60);
    doc.text(`Date of Payment: ${formData.dateOfPayment}`, 20, 70);
    doc.text(`Pay Period: ${formData.payPeriod}`, 20, 80);
    doc.text(`Country: ${formData.country}`, 20, 90);
  
    // Salary Section
    doc.setFont("helvetica", "bold");
    doc.text("Salary Details", 20, 110);
    doc.setFont("helvetica", "normal");
    doc.text(`Gross Salary: ${formData.currency} ${formData.grossSalary}`, 20, 120);
  
    // Deductions Section
    doc.setFont("helvetica", "bold");
    doc.text("Deductions", 20, 140);
    doc.setFont("helvetica", "normal");
    doc.text(`PAYE: ${formData.currency} ${deductions.PAYE.toFixed(2)}`, 20, 150);
    doc.text(`SHIF: ${formData.currency} ${deductions.SHIF.toFixed(2)}`, 20, 160);
    doc.text(`NSSF: ${formData.currency} ${deductions.NSSF.toFixed(2)}`, 20, 170);
    doc.text(`House Levy: ${formData.currency} ${deductions.houseLevy.toFixed(2)}`, 20, 180);
    doc.text(
      `Total Deductions: ${formData.currency} ${deductions.totalDeductions.toFixed(2)}`,
      20,
      190
    );
  
    // Net Salary Section
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 128, 0); // Green color for emphasis
    doc.text(`Net Salary: ${formData.currency} ${deductions.netSalary.toFixed(2)}`, 20, 210);
  
    // Footer
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128); // Gray text
    doc.text("Generated using Payroll Calculator", 105, 290, { align: "center" });
  
    // Save the PDF
    doc.save("payslip.pdf");
  };
  
  return (
    <>
    <div className="flex min-h-screen bg-gray-50 p-10 mx-auto ">
      <div className="max-w-4xl mx-auto bg-green-200 shadow-md rounded-lg p-6 w-[40%]">
        <div >
        <h1 className="text-2xl font-bold text-center mb-6">Payroll Calculator</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Employee Name */}
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Employee Name
            </label>
            <input
              type="text"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleInputChange}
              placeholder="Enter employee name"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              placeholder="Enter designation"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
            />
          </div>

          {/* Date of Payment */}
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Date of Payment
            </label>
            <input
              type="date"
              name="dateOfPayment"
              value={formData.dateOfPayment}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
            />
          </div>

          {/* Pay Period */}
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Pay Period
            </label>
            <input
              type="text"
              name="payPeriod"
              value={formData.payPeriod}
              onChange={handleInputChange}
              placeholder="Enter pay period"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
            />
          </div>

          {/* Country Selection */}
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Select Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Gross Salary Input */}
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Gross Salary
            </label>
            <input
              type="number"
              name="grossSalary"
              value={formData.grossSalary}
              onChange={handleInputChange}
              placeholder="Enter gross salary"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
            />
          </div>

          {/* Currency Display */}
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-2">
              Currency
            </label>
            <input
              type="text"
              name="currency"
              value={
                formData.country
                  ? countries.find(
                      (country) => country.name === formData.country
                    )?.currency || "USD"
                  : ""
              }
              readOnly
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2 bg-gray-100"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculatePayroll}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
        >
          Calculate Payroll
        </button>

        {/* Deductions Display */}
        {deductions && (
          <div className="mt-6 bg-gray-100  rounded-md shadow">
            <div className="flex bg-green-300 p-3 justify-center items-center">
            <h2 className="text-xl font-bold">Payslip</h2>
            </div>
            
            <div className="mt-4 space-y-2 p-3">
              <p>
                <span className="font-semibold">Employee Name:</span>{" "}
                {formData.employeeName}
              </p>
              <p>
                <span className="font-semibold">Designation:</span>{" "}
                {formData.designation}
              </p>
              <p>
                <span className="font-semibold">Date of Payment:</span>{" "}
                {formData.dateOfPayment}
              </p>
              <p>
                <span className="font-semibold">Pay Period:</span>{" "}
                {formData.payPeriod}
              </p>
              <p>
                <span className="font-semibold">Country:</span> {formData.country}
              </p>
              <p>
                <span className="font-semibold">Gross Salary:</span> {formData.currency}{" "}
                {formData.grossSalary}
              </p>
              <p>
                <span className="font-semibold">PAYE:</span> {formData.currency}{" "}
                {deductions.PAYE.toFixed(2)}
              </p>
              <p>
                <span className="font-semibold">SHIF:</span> {formData.currency}{" "}
                {deductions.SHIF.toFixed(2)}
              </p>
              <p>
                <span className="font-semibold">NSSF:</span> {formData.currency}{" "}
                {deductions.NSSF.toFixed(2)}
              </p>
              <p>
                <span className="font-semibold">House Levy:</span> {formData.currency}{" "}
                {deductions.houseLevy.toFixed(2)}
              </p>
              <p>
                <span className="font-semibold">Total Deductions:</span> {formData.currency}{" "}
                {deductions.totalDeductions.toFixed(2)}
              </p>
              <p className="text-lg font-bold">
                <span className="font-semibold">Net Salary:</span> {formData.currency}{" "}
                {deductions.netSalary.toFixed(2)}
              </p>
            </div>

            {/* Download Payslip Button */}
            <button
              onClick={generatePayslip}
              className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600"
            >
              Download Payslip as PDF
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col w-[40%] items-center gap-4">
        <h1 className="text-[28px] font-bold">Best PAYE Calculator: Accurate and Fast.</h1>
        <p className="text-[18px] ">How to calculate PAYE? Pay As You Earn (PAYE) is a mandatory tax deduction done on any earnings. Not sure about earnings subject to PAYE? These are wages, casual wages, salary, leave pay, sick pay, payment in lieu of leave, commission, bonus, gratuity, or subsistence, traveling, entertainment, or other allowance received during employment. Use Workpay's PAYE calculator</p>
        <div className="flex mt-10 w-[100%] items-center justify-center">
            <img src={salary} />
        </div>
      </div>
    </div>
    <section>
        <h2>hello</h2>
    </section>
    </>
  );
};

export default PayrollCalculator;
