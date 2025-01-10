import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function Pricing() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative">
        <div className="pricing h-[80vh] bg-[#000000] relative">
          {/* Background with opacity */}
          <div className="absolute inset-0 bg-[#F3F9F1] opacity-90"></div>

          {/* Content */}
          <div className="flex items-center justify-center flex-col relative z-10 h-full">
            <div className="flex flex-col justify-center text-center items-center gap-8 w-[50%]">
              <h1 className="text-5xl font-bold pt-8">
                Flexible pricing for different stages in
                your growth journey
              </h1>
              <h4 className="text-2xl">
                AmsolHr is loved by more than 1000 organizations across Africa ranging from one employee to 10,000+ employees
              </h4>

              <div className='flex gap-3 text-[18px] mb-10'>
                <button className='flex text-black z-40 bg-blue-500 p-2 px-6 rounded-full w-fit items-center text-white hover:bg-white border hover:text-black hover:border-blue-400'>
                  See our Pricing
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    className='text-xl border border-white rounded-full ml-2'
                  />
                </button>
                <button className='flex text-black p-2 px-6 z-40 rounded-full w-fit items-center border-blue-400 text-black hover:bg-white border hover:text-black hover:border-blue-400'>
                  Request a demo
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    className='text-xl border border-white rounded-full ml-2'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="bg-[#Ffff] py-16 ">
        <p className="text-2xl font-bold text-center mb-12">Choose a plan</p>
        <div className=" mx-auto flex flex-wrap justify-center gap-8">
          {/* Lite Plan */}
          <CardSpotlight className="pricing-card bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-fit">
            <div className='flex-grow'>
              <h3 className="text-3xl font-bold mb-4">Lite Plan</h3>
              <p className="text-xl mb-4">$29/month</p>
              <ul className="text-lg mb-6">
                <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Automate your basic HR operations</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> HR Information System</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Employee Self-Service</li>
                <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Approval Workflows</li>
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
              <button className="flex text-black bg-blue-500 p-2 px-6 rounded-full w-full justify-center items-center text-white hover:bg-white border hover:text-black hover:border-blue-400">
                Choose Plan
                <FontAwesomeIcon
                  icon={faCircleRight}
                  className="text-xl border border-white rounded-full ml-2"
                />
              </button>
            </div>

          </CardSpotlight>

          {/* Core Plan */}
          <CardSpotlight className="pricing-card bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-fit">
            <h3 className="text-3xl font-bold mb-4">Core Plan</h3>
            <p className="text-xl mb-4">$59/month</p>
            <ul className="text-lg mb-6">
              <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Automate your basic HR operations</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> HR Information System</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Employee Self-Service</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Approval Workflows</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Advanced Reports & Analytics</li>
              <li className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" /> Mobile Apps (iOS & Android)</li>
            </ul>
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
              <button className="flex text-black bg-blue-500 p-2 px-6 justify-center rounded-full w-full items-center text-white hover:bg-white border hover:text-black hover:border-blue-400">
                Choose Plan
                <FontAwesomeIcon
                  icon={faCircleRight}
                  className="text-xl border border-white rounded-full ml-2"
                />
              </button>
            </div>
          </CardSpotlight>

          {/* Advantage Plan */}
          <CardSpotlight className="pricing-card bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-fit">
            <h3 className="text-3xl font-bold mb-4">Advantage Plan</h3>
            <p className="text-xl mb-4">$99/month</p>
            <ul className="text-lg mb-6">
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Automate your basic HR operations</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />HR Information System</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Employee Self-Service</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Approval Workflows</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Advanced Reports & Analytics</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Mobile Apps (iOS & Android)</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Organization Structure</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Redeployment</li>
            </ul>
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
              <button className="flex text-black bg-blue-500 p-2 px-6 rounded-full w-full justify-center items-center text-white hover:bg-white border hover:text-black hover:border-blue-400">
                Choose Plan
                <FontAwesomeIcon
                  icon={faCircleRight}
                  className='text-xl border border-white rounded-full ml-2'
                />
              </button>
            </div>
          </CardSpotlight>

          {/* Custom Plan */}
          <CardSpotlight className="pricing-card bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-[400px]">
            <h3 className="text-3xl font-bold mb-4">Custom Plan</h3>
            <p className="text-xl mb-4">Contact us for pricing</p>
            <ul className="text-lg mb-6">
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Automate your basic HR operations</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />HR Information System</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Employee Self-Service</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Approval Workflows</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Advanced Reports & Analytics</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Mobile Apps (iOS & Android)</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Organization Structure</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Redeployment</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Leave Management</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Payroll Management</li>
            </ul>
            <div className="flex justify-center justify-center z-40">
              <button className="flex text-black bg-blue-500 p-2 px-6 rounded-full w-full items-center text-white hover:bg-white border hover:text-black hover:border-blue-400 justify-center z-40">
                Contact Us
                <FontAwesomeIcon
                  icon={faCircleRight}
                  className='text-xl border border-white rounded-full ml-2'
                />
              </button>
            </div>
          </CardSpotlight>


        </div>
      </div>
    </div>
  );
}

export default Pricing;
