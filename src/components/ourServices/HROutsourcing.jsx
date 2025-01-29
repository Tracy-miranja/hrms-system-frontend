import React from "react";
import { Link } from "react-router-dom";

function HROutsourcing() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Banner Section */}
      <div className="bg-blue-600 text-white py-16 text-center animate-fade-in-down">
        <h1 className="text-4xl font-bold">HR Outsourcing Services</h1>
        <p className="mt-4 text-xl">
          Streamline your hr processes with our professional services.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="flex justify-center">
      <div className="container py-12 px-6  animate-slide-in-left">
        <h2 className="text-3xl font-semibold mb-4 mt-2">Why Hr Outsourcing Services?</h2>
       
        <p className="text-xl leading-relaxed">
        The focus of every organization today is to increase efficiency and productivity with reduced costs. The main strategy to achieve this is to optimize on utilizing the available resources. Human resource constitute part of these valuable resources and hence there is need to optimize on their utilization. Outsourcing all or part of the Human Resource Department’s functions is the most trending answer to the need above. Outsourced Labour Management Services relieve organizations of the pressure of dealing with the complexities of expanding payrolls, staff benefits, industrial relations and government regulations.

HR Outsourcing is rapidly becoming an accepted management tool for redefining and re-energizing organizations in our mean economies. The most common reasons to consider outsourcing are to improve the quality and offerings of HR service delivery, increase productivity, save money and, of course, to reduce the risk for your organization.
        </p>
        
      </div>
      </div>

      {/* Benefits Section */}
      <div className="flex justify-center">
      <div className="container py-12 px-6 bg-gray-100  animate-fade-in">
        <h2 className="text-3xl font-semibold mb-4">Benefits of Payroll Outsourcing</h2>
        <p className="text-xl pt-3">We are among the leading staff outsourcing and labour management companies in Kenya. AMSOL will partner with you, taking up the HR department of your organization, either in full or some elements, and manage functions such as the administrative, operational and/or strategic HR capacity. Our outsourcing services will improve the effectiveness and efficiency of your HR Department or create a new HR Service Department to assist with your organizational growth plans.

We are aware that dealing with staff issues is time consuming especially adhering to the labour requirements. By employing our outsourcing services, executives have more time and spare energy to devote to the essential, profitable business strategies and objectives.</p>
<h2 className="text-3xl font-semibold mb-4">What AMSOL does:</h2>
        <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2 text-xl">
          <li>We take care of all day-to-day labour and tax matters</li>
          <li>We supply competent staff managed by us and from our payroll at your request. We give priority to those recommended by the client.</li>
          <li>
          We have a Group Personal Accident cover for the workers supplied by AMSOL among other benefits. The client has the authority to recommend a range of benefits where applicable.
          </li>
          <li>We offer a complete start-to-end HR administration and management
          </li>
          <li>You would only deal with AMSOL, not with the outsourced staff separately.</li>
          <li>We remove the headcount cost from the employer’s balance sheet</li>
          <li>Labour matters are left to our experts to deal with staff related internal matters, allowing for professional and comprehensive, objective and quick action
          </li>
          <li>We ensure compliance with Employment/Labour Laws
          </li>
          
        </ul>
        <p className="text-xl mt-3">We have an in-house capacity development plan for outsourced staff so as to ensure consistent skills set as required by clients. To us they remain as core staff.</p>
      </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-blue-600 text-white text-center animate-scale-up">
        <h2 className="text-3xl font-bold mb-4">Ready to Simplify Hr Management services?</h2>
        <p className="text-lg mb-6">
          Contact Africa Management Solutions Ltd today for seamless Hr solutions tailored to
          your needs.
        </p>
        <Link to="/Demo"><button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
}


export default HROutsourcing