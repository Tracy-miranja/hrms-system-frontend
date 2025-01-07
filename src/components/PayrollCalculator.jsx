import React, { useState, useEffect } from 'react';

const PayrollCalculator = () => {
  const [country, setCountry] = useState('Kenya');
  const [salaryType, setSalaryType] = useState('Net');
  const [salary, setSalary] = useState('');
  const [isNonResident, setIsNonResident] = useState(false);
  const [isSecondaryEmployee, setIsSecondaryEmployee] = useState(false);
  const [mortgageInterest, setMortgageInterest] = useState('');
  const [housingLevyRelief, setHousingLevyRelief] = useState(false);
  const [deductNSSF, setDeductNSSF] = useState(false);
  const [deductPAYE, setDeductPAYE] = useState(false);
  const [deductHousingLevy, setDeductHousingLevy] = useState(false);
  const [deductNHIF, setDeductNHIF] = useState(false);

  const [countryTaxRules, setCountryTaxRules] = useState({});
  const [receipt, setReceipt] = useState(null);

  const [countries, setCountries] = useState([]); // Store all countries
  const [selectedCountry, setSelectedCountry] = useState(''); // Store selected country
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const formattedCountries = data.map((country) => ({
          name: country.name.common,
          currency: country.currencies ? Object.keys(country.currencies)[0] : "USD",
        }));
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
  
    fetchCountries();
  }, []);
  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  
  const calculateDeductions = () => {
    let deductions = 0;

    if (deductNSSF) deductions += 0.06 * salary;
    if (deductPAYE) deductions += 0.1 * salary;
    if (deductHousingLevy) deductions += 0.01 * salary;
    if (deductNHIF) deductions += 0.02 * salary;

    return deductions;
  };

  const calculateFinalSalary = () => {
    const deductions = calculateDeductions();
    let finalSalary = 0;
  
    if (salaryType === 'Gross') {
      finalSalary = salary - deductions;
    } else {
      finalSalary = salary + deductions;
    }
  
    return isNaN(finalSalary) ? 0 : finalSalary;  // Ensure it's a valid number
  };
  
  const calculatePayrollCost = () => {
    const finalSalary = calculateFinalSalary();
    const employerCost = finalSalary + calculateDeductions();
    return isNaN(employerCost) ? 0 : employerCost;  // Ensure it's a valid number
  };

  // Generate the receipt
  const generateReceipt = () => {
    const finalSalary = calculateFinalSalary();
    const deductions = calculateDeductions();
    const receiptData = {
      country,
      salaryType,
      salary,
      finalSalary,
      deductions,
      taxRules: countryTaxRules
    };
    setReceipt(receiptData);
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Payroll Cost Calculator
        </h1>

        {/* Country Selector */}
        <div className="mb-4">
  <label htmlFor="country" className="block text-gray-600 font-medium mb-2">
    Choose Desired Country
  </label>
  <select
    id="country"
    value={selectedCountry}
    onChange={handleCountryChange}
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

        {/* Salary Type Toggle */}
        <div className="mb-4 flex justify-between items-center">
          <label className="block text-gray-600 font-medium">Salary Type</label>
          <div className="flex items-center">
            <label className="mr-2">Net</label>
            <input
              type="radio"
              name="salaryType"
              value="Net"
              checked={salaryType === 'Net'}
              onChange={() => setSalaryType('Net')}
              className="mr-4"
            />
            <label className="mr-2">Gross</label>
            <input
              type="radio"
              name="salaryType"
              value="Gross"
              checked={salaryType === 'Gross'}
              onChange={() => setSalaryType('Gross')}
            />
          </div>
        </div>

        {/* Salary Input */}
        <div className="mb-4">
          <label htmlFor="salary" className="block text-gray-600 font-medium mb-2">
            Enter Salary
          </label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(parseFloat(e.target.value))}
            placeholder={`Enter ${salaryType} salary`}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Deduction Toggles */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <label className="text-gray-600 font-medium">Deduct NSSF</label>
            <input
              type="checkbox"
              checked={deductNSSF}
              onChange={() => setDeductNSSF(!deductNSSF)}
              className="text-blue-500"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <label className="text-gray-600 font-medium">Deduct PAYE</label>
            <input
              type="checkbox"
              checked={deductPAYE}
              onChange={() => setDeductPAYE(!deductPAYE)}
              className="text-blue-500"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <label className="text-gray-600 font-medium">Deduct Housing Levy</label>
            <input
              type="checkbox"
              checked={deductHousingLevy}
              onChange={() => setDeductHousingLevy(!deductHousingLevy)}
              className="text-blue-500"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <label className="text-gray-600 font-medium">Deduct NHIF/SHIF</label>
            <input
              type="checkbox"
              checked={deductNHIF}
              onChange={() => setDeductNHIF(!deductNHIF)}
              className="text-blue-500"
            />
          </div>
        </div>

        {/* Mortgage Interest */}
        <div className="mb-4">
          <label htmlFor="mortgageInterest" className="block text-gray-600 font-medium mb-2">
            Interest on Mortgage
          </label>
          <input
            type="number"
            id="mortgageInterest"
            value={mortgageInterest}
            onChange={(e) => setMortgageInterest(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Housing Levy Relief */}
        <div className="mb-4 flex items-center">
          <label htmlFor="housingLevyRelief" className="text-gray-600 font-medium mr-2">
            Enable Housing Levy Relief
          </label>
          <input
            type="checkbox"
            checked={housingLevyRelief}
            onChange={() => setHousingLevyRelief(!housingLevyRelief)}
            className="text-blue-500"
          />
        </div>

        {/* Final Calculations */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">Final Salary (after deductions):</p>
          <p className="text-xl font-bold text-blue-500">
            KES {isNaN(calculateFinalSalary()) ? '0.00' : calculateFinalSalary()}
          </p>
        </div>

        {/* Generate Receipt Button */}
        <div className="mt-6 text-center">
          <button
            onClick={generateReceipt}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Generate Receipt
          </button>
        </div>

        {/* Receipt */}
        {receipt && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Receipt</h3>
            <div className="mt-4 text-sm text-gray-600">
              <p>Country: {receipt.country}</p>
              <p>Salary Type: {receipt.salaryType}</p>
              <p>Salary: {receipt.salary}</p>
              <p>Final Salary: {receipt.finalSalary}</p>
              <p>Deductions: {receipt.deductions}</p>
              {/* <p>Tax Rules: {JSON.stringify(receipt.taxRules)}</p> */}
            </div>
          </div>
        )}
      </div>
      
    </div>
    <section>
        <h1>hello</h1>
      </section>
    </>
  );
};

export default PayrollCalculator;
