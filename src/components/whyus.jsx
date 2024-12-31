import React from 'react';
import { FaShieldAlt, FaRocket, FaHandsHelping, FaThumbsUp } from 'react-icons/fa'; // Icons for reasons

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt size={50} className="text-blue-500" />,
      title: "Reliable & Secure",
      description: "We prioritize your security and provide reliable services you can trust.",
    },
    {
      icon: <FaRocket size={50} className="text-blue-500" />,
      title: "Smart AI-Powered Automation",
      description: "Experience unmatched speed and efficiency in all our solutions with our AI tools.",
    },
    {
      icon: <FaHandsHelping size={50} className="text-blue-500" />,
      title: "Exceptional Support",
      description: "Our team is always ready to help you achieve your goals.",
    },
    {
      icon: <FaThumbsUp size={50} className="text-blue-500" />,
      title: "Customer Satisfaction",
      description: "We strive to exceed customer expectations in every project.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Why Choose Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Discover what sets us apart and why we're the best choice for your needs.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="flex mb-4 justify-center items-center">{feature.icon}</div>
              <h3 className="font-bold text-xl text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join countless others who have chosen us for their business needs.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
