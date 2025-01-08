import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight  } from "@fortawesome/free-solid-svg-icons";
import hroutsourcingcompany from '/src/assets/hroutsourcingcompany.svg';
import { FaCheckCircle } from "react-icons/fa";


function HumanResource() {
  const features = [
    {
      title: "Recruitment",
      description: "Simplify your hiring process with ease.",
      icon: "🎯",
      bullets: [
        "Post jobs easily",
        "Screen candidates efficiently",
        "Schedule interviews quickly",
        "Streamline hiring workflows",
        "Enhance employer branding",
      ],
    },
    {
      title: "Payroll",
      description: "Automate salary disbursements securely.",
      icon: "💰",
      bullets: [
        "Automate payment processes",
        "Track tax compliance",
        "Generate payslips",
        "Manage bonuses and benefits",
        "Ensure secure transactions",
      ],
    },
    {
      title: "Performance",
      description: "Track and improve employee performance.",
      icon: "📈",
      bullets: [
        "Set measurable goals",
        "Provide real-time feedback",
        "Generate performance reports",
        "Recognize top performers",
        "Enhance productivity tracking",
      ],
    },
    {
      title: "Attendance & Time Tracking",
      description: "Monitor work hours effortlessly.",
      icon: "⏰",
      bullets: [
        "Automate attendance tracking",
        "Integrate with biometric systems",
        "Generate detailed reports",
        "Track overtime hours",
        "Monitor absenteeism trends",
      ],
    },
  ];
  
  return (
    <div>
        <section className="bg-[#F3F9F1] py-1 gap-4">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Empower Your Workforce <br/>
with Amsol HRMS
          </h1>
          <p className="text-gray-700 mb-6">
          Automate manual tasks, eliminate errors, and securely manage employee information –  all in a single database: an HR management system.
          Streamline your HR operations,
 enhance productivity, and elevate 
employee experience
          </p>
          <div className='flex gap-3'>
          <button className='flex text-black bg-gray-500 p-2 rounded-full w-fit items-center text-white hover:bg-white border hover:text-black hover:border-blue-400'>
                  Get started
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    className='text-xl border border-white rounded-full ml-2'
                  />
                </button>
                <button className='flex text-black bg-blue-500 p-2 rounded-full w-fit items-center text-white hover:bg-white border hover:text-black hover:border-blue-400'>
                  Request a demo
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    className='text-xl border border-white rounded-full ml-2'
                  />
                </button>
                </div>
        </div>
        <div className="lg:w-1/2">
          <img src={hroutsourcingcompany} alt="HR Software" className="rounded-lg w-full h-full " />
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
        <p className="text-md font-semibold text-center mb-20">Everything You Need in One Powerful Platform</p>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
            key={index}
            className="flex flex-col bg-white shadow-md rounded-lg text-center relative"
          >
            {/* Icon and Title Container */}
            <div className="relative w-full h-[15vh] bg-black rounded-xl flex flex-col items-center justify-center">
              {/* Icon */}
              <div
                className="absolute -top-[50px] bg-white rounded-full flex items-center justify-center shadow-2xl z-10"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              >
                <div className="text-4xl text-black">{feature.icon}</div>
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-white mt-[60px]">{feature.title}</h3>
            </div>
           {/* Description with Bullets */}
          <div className="px-4 mt-8">
            <p className="text-gray-700 font-medium mb-4">{feature.description}</p>
            <ul className="list-none space-y-2 text-left">
              {feature.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          </div>
          
          
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default HumanResource