import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import hroutsourcingcompany from '/src/assets/hroutsourcingcompany.svg';
import { FaCheckCircle,FaWalking, FaBell,FaRobot,FaChartLine, FaBolt,FaLock } from "react-icons/fa";
import { useState } from 'react';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";


function HumanResource() {

  const [showSafeSecure, setShowSafeSecure] = useState(false);
  const [showPayAsYouGo, setShowPayAsYouGo] = useState(false);
  const [showEmailAlerts, setShowEmailAlerts] = useState(false);
  const [showImproveEfficiency, setShowImproveEfficiency] = useState(false);
  const [showGrowBusiness, setShowGrowBusiness] = useState(false);
  const [showAiAutomation, setShowAiAutomation] = useState(false);

  const safeSecureText = "Your data and transactions are protected with advanced encryption (AES-256), HTTPS (SSL/TLS) for secure communication, and multi-factor authentication (MFA) for access control. We comply with industry standards such as GDPR, ISO/IEC 27001, and PCI DSS. Real-time fraud detection and regular security audits help prevent suspicious activity, while firewalls and secure APIs strengthen network security. Data integrity is ensured through regular checks, and routine backups with disaster recovery plans keep your data safe and accessible.";
  const payAsYouGoText = "Pay as You Go offers a flexible pricing model designed to fit your specific business needs. Instead of paying for fixed, predefined packages, you only pay for the services and features you actually use, allowing for better budget control and cost efficiency. This model adapts to your organization’s scale, so whether you're a startup with fluctuating demands or a large enterprise with consistent usage, you can customize your payments based on actual usage metrics. With this approach, you can easily scale your services up or down as needed, without committing to long-term contracts or paying for unused resources. It provides transparency, flexibility, and financial predictability, ensuring that your costs remain aligned with your business needs.";
  const emailAlertsText = "Email and SMS Alerts keep you informed with timely notifications, ensuring that you never miss important updates or events. Whether it's a new employee onboarding, a payroll issue, or a time-sensitive HR task, these alerts provide real-time communication to help you stay on top of your operations. Customizable settings allow you to choose which notifications you want to receive, so you can prioritize what matters most. Automated reminders help reduce administrative workload by notifying HR teams and employees about deadlines, appointments, approvals, or policy changes. With email and SMS alerts, you can streamline communication, enhance productivity, and ensure that all stakeholders are promptly informed, reducing the risk of missed actions and improving overall efficiency.";
  const improveEfficiencyText = "Improve Efficiency focuses on optimizing and streamlining your operations to save time, reduce errors, and enhance productivity. By automating repetitive tasks such as payroll processing, attendance tracking, and employee performance evaluations, you can free up valuable resources for more strategic activities. This reduces manual data entry, minimizes human error, and speeds up decision-making processes. Additionally, integrated tools and workflows provide a seamless experience, allowing HR teams to quickly access, manage, and update employee information in real-time. With a more organized approach to task management, businesses can accelerate project timelines, improve collaboration across departments, and foster a more productive work environment.";
  const growBusinessText = "Grow Your Business by leveraging advanced HR tools designed to enhance your organization's performance and support scalable growth. With features like talent acquisition, employee development, and performance management, you can build a skilled and motivated workforce that drives your business forward. Automation of administrative tasks, such as payroll, benefits management, and scheduling, frees up your HR team to focus on strategic initiatives that contribute to long-term success. Advanced analytics and reporting tools allow you to track key metrics, identify trends, and make data-driven decisions that align with your business goals. Additionally, seamless integration with other business systems ensures that your HR processes work in harmony with your overall business strategy.";
  const aiAutomationText = "Smart AI-Powered Automation revolutionizes how businesses manage their HR processes by using artificial intelligence to streamline and optimize operations. AI-driven tools automate routine tasks such as resume screening, interview scheduling, and employee data management, allowing HR teams to focus on more strategic activities. Machine learning algorithms continuously improve their efficiency by learning from past data, making predictions, and offering insights that help businesses make informed decisions faster. AI can also enhance employee engagement by personalizing communications, predicting training needs, and identifying potential performance issues before they become problems.";
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
      <section className="bg-gray-800 py-12 gap-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center py-[30px]">
          <div className="lg:w-1/2 ">
            <h1 className="text-4xl font-bold text-blue-600 mb-8 z-40">
              Empower Your Workforce <br />
              with Amsol HRM
            </h1>
            <p className="text-white text-[22px] mb-8 z-40">
              Automate manual tasks, eliminate errors, and securely manage employee information –  all in a single database: an HR management system.
              Streamline your HR operations,
              enhance productivity, and elevate
              employee experience
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[22px] pb-8 text-white ">
      <div className="flex items-center ">
        <FaCheckCircle className=" text-blue-500 w-9 h-9 mr-2" />
        <span className='text-white'>Streamlined & paperless</span>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-blue-500 w-9 h-9  mr-2" />
        <span>Onboarding tracker</span>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-blue-500 w-9 h-9  mr-2" />
        <span>Fully customizable workflows</span>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-blue-500 w-9 h-9  mr-2" />
        <span>Secure database</span>
      </div>
    </div>
            <div className='flex gap-3 text-[18px] mb-10'>
              <button className='flex text-black z-40 bg-blue-500 p-2 rounded-full w-fit items-center text-white hover:bg-white border hover:text-black hover:border-blue-400'>
                See our Pricing
                <FontAwesomeIcon
                  icon={faCircleRight}
                  className='text-xl border border-white rounded-full ml-2'
                />
              </button>
              <button className='flex text-white p-2 z-40 rounded-full w-fit items-center border-blue-400 text-black hover:bg-white border hover:text-black hover:border-blue-400'>
                Request a demo
                <FontAwesomeIcon
                  icon={faCircleRight}
                  className='text-xl border border-white rounded-full ml-2'
                />
              </button>
            </div>
            
          </div>
          <div className="relative lg:w-[50%] z-40 ">
            <img src={hroutsourcingcompany} alt="HR Software" className=" -mt-[50px] rounded-lg w-[100%] h-full " />
          </div>
          <BackgroundBeams className="h-screen"/>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-4">Features</h2>
          <p className="text-md font-semibold text-center mb-20">Everything You Need in One Powerful Platform</p>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <CardSpotlight
                key={index}
                className="flex flex-col bg-black text-white shadow-md rounded-2xl  relative "
              >
                {/* Icon and Title Container */}
                <div className="relative w-full h-[15vh] bg-blue-400 rounded-xl flex flex-col items-center justify-center hover:bg-white hover:text-black">
                  {/* Icon */}
                  <div
                    className="absolute -top-[30px] bg-white rounded-full flex items-center justify-center shadow-2xl z-10"
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <div className="text-4xl text-black">{feature.icon}</div>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mt-[60px] hover:text-black">{feature.title}</h3>
                </div>
                {/* Description with Bullets */}
                <div className="px-4 mt-8 mb-4">
                  <p className="text-white font-medium mb-3 hover:text-white">{feature.description}</p>
                  <ul className="list-none space-y-2 text-left">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center text-white">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-gray-200 mt-3 py-20 items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center font-bold text-2xl mb-6">
          <h1>Benefits</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-1">
          {/* Safe and Secure */}
          <div className="flex flex-col items-center space-x-4 shadow-lg p-4">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
              <FaLock className="text-blue-500 text-4xl" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg p-3">Safe and Secure</h1>
              <p className="text-gray-600">
                {showSafeSecure ? safeSecureText : `${safeSecureText.slice(0, 200)}...`}
                <button
                  onClick={() => setShowSafeSecure(!showSafeSecure)}
                  className="text-blue-500 ml-2"
                >
                  {showSafeSecure ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>

          {/* Pay as You Go */}
          <div className="flex flex-col items-center space-x-4 shadow-lg p-4">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
              <FaWalking className="text-blue-500 text-5xl" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg p-3">Pay as You Go</h1>
              <p className="text-gray-600">
                {showPayAsYouGo ? payAsYouGoText : `${payAsYouGoText.slice(0, 200)}...`}
                <button
                  onClick={() => setShowPayAsYouGo(!showPayAsYouGo)}
                  className="text-blue-500 ml-2"
                >
                  {showPayAsYouGo ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>

          {/* Email and SMS Alerts */}
          <div className="flex flex-col items-center space-x-4 shadow-lg p-4">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
              <FaBell className="text-blue-500 text-4xl" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg p-3">Email and SMS Alerts</h1>
              <p className="text-gray-600">
                {showEmailAlerts ? emailAlertsText : `${emailAlertsText.slice(0, 200)}...`}
                <button
                  onClick={() => setShowEmailAlerts(!showEmailAlerts)}
                  className="text-blue-500 ml-2"
                >
                  {showEmailAlerts ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>

          {/* Improve Efficiency */}
          <div className="flex flex-col items-center space-x-4 shadow-lg p-4">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
              <FaBolt className="text-blue-500 text-4xl" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg p-3">Improve Efficiency</h1>
              <p className="text-gray-600">
                {showImproveEfficiency ? improveEfficiencyText : `${improveEfficiencyText.slice(0, 200)}...`}
                <button
                  onClick={() => setShowImproveEfficiency(!showImproveEfficiency)}
                  className="text-blue-500 ml-2"
                >
                  {showImproveEfficiency ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>

          {/* Grow Your Business */}
          <div className="flex flex-col items-center space-x-4 shadow-lg p-4">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
              <FaChartLine className="text-blue-500 text-4xl" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg p-3">Grow Your Business</h1>
              <p className="text-gray-600">
                {showGrowBusiness ? growBusinessText : `${growBusinessText.slice(0, 200)}...`}
                <button
                  onClick={() => setShowGrowBusiness(!showGrowBusiness)}
                  className="text-blue-500 ml-2"
                >
                  {showGrowBusiness ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>

          {/* Smart AI-Powered Automation */}
          <div className="flex flex-col items-center space-x-4 shadow-lg p-4">
            <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center shadow-md">
              <FaRobot className="text-blue-500 text-5xl" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg p-3">Smart AI-Powered Automation</h1>
              <p className="text-gray-600">
                {showAiAutomation ? aiAutomationText : `${aiAutomationText.slice(0, 200)}...`}
                <button
                  onClick={() => setShowAiAutomation(!showAiAutomation)}
                  className="text-blue-500 ml-2"
                >
                  {showAiAutomation ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HumanResource