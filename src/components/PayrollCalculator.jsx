import { useState, useEffect } from 'react';

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
  const [deductSHIF, setDeductSHIF] = useState(false);
  const [finalSalary, setFinalSalary] = useState(0);
  const [countryTaxRules, setCountryTaxRules] = useState({});
  const [receipt, setReceipt] = useState(null);

  const [countries, setCountries] = useState([]); // Store all countries
  const [selectedCountry, setSelectedCountry] = useState(''); // Store selected country
  const [deductions, setDeductions] = useState({});

useEffect(() => {
  const calcDeductions = calculateDeductions(salary, salaryType, deductNSSF, deductPAYE, deductHousingLevy, deductSHIF);
  setDeductions(calcDeductions);
}, [salary, salaryType, deductNSSF, deductPAYE, deductHousingLevy, deductSHIF]);

  // Fetch countries data
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const targetCountries = ["Kenya", "Uganda", "Tanzania", "Rwanda"];
        const filteredCountries = data.filter((country) =>
          targetCountries.includes(country.name.common)
        );
        const formattedCountries = filteredCountries.map((country) => ({
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

  // Handle country change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  // Calculate deductions based on inputs
  const calculateDeductions = (salary, salaryType, deductNSSF, deductPAYE, deductHousingLevy, deductSHIF) => {
    let deductions = 0;
    let grossSalary = salaryType === "Gross" ? salary : salary / 0.9; // Approximation for taxable salary

    let nssf = 0;
    if (deductNSSF) {
      nssf = Math.min(0.06 * grossSalary, 2160);
      deductions += nssf;
    }

    let housingLevy = 0;
    if (deductHousingLevy) {
      housingLevy = 0.015 * grossSalary;
      deductions += housingLevy;
    }

    let shif = 0;
    if (deductSHIF) {
      shif = 0.0275 * grossSalary;
      deductions += shif;
    }

    let paye = 0;
    if (deductPAYE) {
      let taxableSalary = grossSalary - deductions;

      if (taxableSalary <= 24000) {
        paye += taxableSalary * 0.10;
      } else {
        paye += 24000 * 0.10;
        if (taxableSalary <= 32333) {
          paye += (taxableSalary - 24000) * 0.25;
        } else {
          paye += 8333 * 0.25;
          if (taxableSalary <= 500000) {
            paye += (taxableSalary - 32333) * 0.30;
          } else {
            paye += (500000 - 32333) * 0.30;
            if (taxableSalary <= 800000) {
              paye += (taxableSalary - 500000) * 0.325;
            } else {
              paye += (800000 - 500000) * 0.325;
              paye += (taxableSalary - 800000) * 0.35;
            }
          }
        }
      }

      paye -= 2400; // Apply personal relief
      paye = Math.max(paye, 0); // Ensure PAYE is non-negative
    }

    deductions += paye;

    return {
      totalDeductions: deductions,
      nssf,
      housingLevy,
      shif,
      paye,
    };
  };

  // Calculate final salary after deductions
  const calculateFinalSalary = () => {
    const deductions = calculateDeductions(salary, salaryType, deductNSSF, deductPAYE, deductHousingLevy, deductSHIF);
    let finalSalary = 0;

    if (salaryType === "Gross") {
      finalSalary = salary - deductions.totalDeductions;
    } else {
      finalSalary = salary + deductions.totalDeductions;
    }

    return isNaN(finalSalary) ? 0 : finalSalary;
  };

  useEffect(() => {
    setFinalSalary(calculateFinalSalary());
  }, [salary, salaryType, deductNSSF, deductPAYE, deductHousingLevy, deductSHIF]);

  // Generate the receipt with deductions
  const generateReceipt = () => {
    const deductions = calculateDeductions(salary, salaryType, deductNSSF, deductPAYE, deductHousingLevy, deductSHIF);
    const finalSalary = calculateFinalSalary();

    const receiptData = {
      country,
      salaryType,
      salary,
      finalSalary,
      deductions,
      breakdown: {
        nssf: deductNSSF ? Math.min(0.06 * salary, 2160) : 0,
        housingLevy: deductHousingLevy ? 0.015 * salary : 0,
        shif: deductSHIF ? 0.0275 * salary : 0,
        paye: deductPAYE ? deductions.totalDeductions - (deductNSSF ? Math.min(0.06 * salary, 2160) : 0) : 0,
      },
    };

    setReceipt(receiptData);
  };

  return (
    <>

      <div className='bg-gray-300 pt-6'>
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6 ">
          Payroll Cost Calculator

        </h1>
        <div className=" min-h-screen  flex  justify-center gap-10 text-lg bg-gray-300 p-6">

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">

              Salary Details
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
                  checked={deductSHIF}
                  onChange={() => setDeductSHIF(!deductSHIF)}
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
              <p className="text-gray-600 font-bold">Net Salary (after deductions):</p>
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
                Generate Payslip
              </button>
            </div>

            {/* Receipt */}
            {receipt && (
              <div className="mt-8 bg-gray-100 rounded-lg shadow-lg">
                <div className="bg-green-500 text-center py-2 rounded-t-lg">
                  <h3 className="text-xl font-semibold text-white">PaySlip</h3>
                </div>
                <table className="w-full mt-4 text-sm text-gray-600 px-6 border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-2 font-bold text-left">Country:</td>
                      <td className="px-4 py-2 text-right">{receipt.country}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2 font-bold text-left">Salary Type:</td>
                      <td className="px-4 py-2 text-right">{receipt.salaryType}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2 font-bold text-left">Gross Salary:</td>
                      <td className="px-4 py-2 text-right">{receipt.salary}</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2 font-bold text-left">NSSF:</td>
                      <td className="px-4 py-2 text-right">{receipt.breakdown.nssf}</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2 font-bold text-left">Housing Levy:</td>
                      <td className="px-4 py-2 text-right">{receipt.breakdown.housingLevy}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-bold text-left">SHIF:</td>
                      <td className="px-4 py-2 text-right">{receipt.breakdown.shif}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2 font-bold text-left">PAYE:</td>
                      <td className="px-4 py-2 text-right">{receipt.breakdown.paye}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2 font-bold text-left">Personal Relief:</td>
                      <td className="px-4 py-2 text-right">2400</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-2 font-bold text-left">Total Deductions:</td>
                      <td className="px-4 py-2 text-right">{receipt.deductions}</td>
                    </tr>

                    <tr className="border-b bg-blue-400 p-3">
                      <td className="px-4 py-2 font-bold text-left text-white">Net Salary:</td>
                      <td className="px-4 py-2 text-right text-white">{receipt.finalSalary}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            )}
          </div>
          <div className="flex flex-col max-w-lg w-full p-6 bg-white h-fit rounded-lg">
          <div className="bg-orange-400 p-6 rounded-lg text-center mb-4">
  <h1 className="text-white font-bold text-[32px]">
    Net Pay:
    <p className="text-xl font-bold text-white mt-3">
      KES {isNaN(finalSalary) ? '0.00' : finalSalary}
    </p>
  </h1>
</div>
<div className="bg-white p-4 rounded-lg shadow-md">
  {[
    { label: 'Gross Pay', value: salary || '0.00' },
    { 
      label: 'NSSF Contribution', 
      value: deductNSSF ? Math.min(0.06 * salary, 2160).toFixed(2) : '0.00' 
    }, 
    { 
      label: 'Housing Levy', 
      value: deductHousingLevy ? (0.015 * salary).toFixed(2) : '0.00' 
    },
    { 
      label: 'SHIF Contribution', 
      value: deductSHIF ? (0.0275 * salary).toFixed(2) : '0.00' 
    },
    
    { 
      label: 'Taxable Income', 
      value: (salary - ((deductSHIF ? (0.0275 * salary) : 0) + 
                       (deductNSSF ? Math.min(0.06 * salary, 2160) : 0) + 
                       (deductHousingLevy ? (0.015 * salary) : 0) 
                     )).toFixed(2) 
    },
    {
      label: "Personal Relief",
      value: (deductions?.paye || 0) <= 2400 ? "0.00" : "-2400",
    },
    
    
    { label: 'PAYE', value: deductions?.paye?.toFixed(2) || '0.00' },
    
    
    { label: 'Net Pay', value: (salary - (deductions?.totalDeductions || 0)).toFixed(2) },
  ].map((item, index) => (
    <div
      key={index}
      className="flex justify-between border-b border-gray-200 py-2"
    >
      <span className="text-gray-700">{item.label}</span>
      <span className="font-bold text-gray-900">KES {item.value}</span>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
      <section>
        <h1>hello</h1>
      </section>

    </>
  );
};

export default PayrollCalculator;
