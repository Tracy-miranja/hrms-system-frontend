import React from 'react';

const PAYECalculatorSummary = ({
  calculateFinalSalary,
  calculateDeductions,
  salary,
  salaryType,
  deductNSSF,
  deductNHIF,
  deductHousingLevy,
}) => {
  const deductions = calculateDeductions();
  const finalSalary = calculateFinalSalary();

  return (
    <div className="flex flex-col max-w-lg w-full p-6 bg-white">
      <div className="bg-gray-500 p-6 rounded-lg text-center mb-4">
        <h1 className="text-white">
          Net Pay:
          <p className="text-xl font-bold text-blue-500">
            KES {isNaN(finalSalary) ? '0.00' : finalSalary.toFixed(2)}
          </p>
        </h1>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {[
          { label: 'Gross Pay', value: salary || '0.00' },
          { label: 'NSSF Contribution', value: deductNSSF ? (0.06 * salary).toFixed(2) : '0.00' },
          { label: 'Taxable Income', value: salaryType === 'Gross' ? salary - deductions : salary },
          { label: 'Tax Before Relief', value: deductions || '0.00' },
          { label: 'Housing Levy', value: deductHousingLevy ? (0.01 * salary).toFixed(2) : '0.00' },
          { label: 'NHIF Contribution', value: deductNHIF ? (salary <= 100000 ? 0.02 * salary : 2000).toFixed(2) : '0.00' },
          { label: 'Net Pay', value: finalSalary.toFixed(2) },
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
  );
};

export default PAYECalculatorSummary;
