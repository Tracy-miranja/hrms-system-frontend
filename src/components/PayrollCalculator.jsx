import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf"; // Import jsPDF for PDF generation

const PayrollCalculator = () => {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    currency: "",
    grossSalary: "",
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

  // Generate PDF for payslip
  const generatePayslip = () => {
    const doc = new jsPDF();
    doc.text("Payslip", 20, 10);
    doc.text(`Country: ${formData.country}`, 20, 20);
    doc.text(`Gross Salary: ${formData.currency} ${formData.grossSalary}`, 20, 30);
    doc.text(`PAYE: ${formData.currency} ${deductions.PAYE.toFixed(2)}`, 20, 40);
    doc.text(`SHIF: ${formData.currency} ${deductions.SHIF.toFixed(2)}`, 20, 50);
    doc.text(`NSSF: ${formData.currency} ${deductions.NSSF.toFixed(2)}`, 20, 60);
    doc.text(`House Levy: ${formData.currency} ${deductions.houseLevy.toFixed(2)}`, 20, 70);
    doc.text(`Total Deductions: ${formData.currency} ${deductions.totalDeductions.toFixed(2)}`, 20, 80);
    doc.text(`Net Salary: ${formData.currency} ${deductions.netSalary.toFixed(2)}`, 20, 90);

    // Download the generated PDF
    doc.save("payslip.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Payroll Calculator</h1>
        <div className="grid grid-cols-2 gap-4">
          {/* Country Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
          <div className="mt-6 bg-gray-100 p-4 rounded-md shadow">
            <h2 className="text-xl font-bold">Payslip</h2>
            <div className="mt-4 space-y-2">
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
    </div>
  );
};

export default PayrollCalculator;
