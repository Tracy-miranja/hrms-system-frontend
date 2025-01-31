import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

function Sev() {
  const features = [
    {
      title: "AI-Powered Automation",
      description: "Simplify repetitive tasks to save time and reduce errors.",
    },
    {
      title: "Data-Driven Insights",
      description: "Harness analytics to make smarter workforce decisions.",
    },
    {
      title: "Customizable Solutions",
      description: "Tailor the platform to suit your unique business needs.",
    },
    {
      title: "Employee Self-Service",
      description:
        "Empower your team with tools for seamless collaboration and communication.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-[80vh] mt-6 px-6 md:px-10">
      <div className="unique"></div>
      <div className="w-full lg:w-[50%]">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-8 text-center lg:text-left">
          What Makes Us Unique
        </h1>
        {features.map((feature, index) => (
          <div key={index} className="mb-6 md:mb-8">
            <h2 className="text-blue-500 font-bold text-xl md:text-2xl">
              {index + 1}. {feature.title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg">{feature.description}</p>
          </div>
        ))}
        <div className="flex justify-center lg:justify-start">
          <button className="flex text-black bg-blue-500 p-3 rounded-full w-fit items-center text-white hover:bg-white border hover:text-black hover:border-blue-400">
            Request a demo  
            <FontAwesomeIcon
              icon={faCircleRight}
              className="text-xl border border-white rounded-full ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sev;
