import React from 'react'

function HumanResource() {
    const features = [
        { title: "Recruitment", description: "Simplify your hiring process with ease.", icon: "🎯" },
        { title: "Payroll", description: "Automate salary disbursements securely.", icon: "💰" },
        { title: "Performance", description: "Track and improve employee performance.", icon: "📈" },
      ];
  return (
    <div>
        <section className="bg-blue-100 py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
          The Complete HR Management System.
          </h1>
          <p className="text-gray-700 mb-6">
          Automate manual tasks, eliminate errors, and securely manage employee information –  all in a single database: an HR management system
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2">
          <img src="https://via.placeholder.com/500" alt="HR Software" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default HumanResource