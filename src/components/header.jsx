import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/amsol-hr-outsourcing-company.png"
import { FaTools, FaUsers, FaCalculator, FaBriefcase, FaGlobe, FaCode } from "react-icons/fa";
import maprwanda from "../assets/hr-outsourcing-rwanda.webp"
import mapTanzania from "../assets/hr-outsourcing-tz.png"
import mapUganda from "../assets/hr-outsourcing-uganda.webp"
import mapKenya from "../assets/hr-outsourcing-kenya.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import about from "../assets/Frame(2).png"
import { Link } from 'react-router-dom';
import logo2 from "../assets/logo.png"
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGlobalOpen, setIsGlobalOpen] = useState(false);
  const [IsResourceOpen, setIsResourceOpen] = useState(false)
  const [isOurserviceOpen, setIsOurserviceOpen] = useState(false)

  const productDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const globalDropdownRef = useRef(null);
  const ourserviceOpenRef = useRef(null)

  const handleOutsideClick = (event) => {
    if (
      productDropdownRef.current && !productDropdownRef.current.contains(event.target) &&
      aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target) &&
      globalDropdownRef.current && !globalDropdownRef.current.contains(event.target) &&
      ourserviceOpenRef.current && !ourserviceOpenRef.current.contains(event.target)
    ) {
      setIsProductOpen(false);
      setIsAboutOpen(false);
      setIsGlobalOpen(false);
      setIsOurserviceOpen(false)
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md ">
      <div className="container mx-auto flex items-center justify-between p-3">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          <Link to="/"><img src={logo2} className='h-[5vh]' /></Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-10 font-bold">
          <div className="relative h-[5vh] flex items-center p-1 hover:bg-gray-500"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => setIsProductOpen(false)}
            ref={productDropdownRef}>
            <button
              onClick={() => setIsProductOpen(!isProductOpen)}
              className="flex items-center space-x-2 hover:text-blue-300"
            >
              <Link to="/product"><span>Product</span></Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProductOpen && (
              <div className="grid grid-cols-3 gap-4 z-10 justify-center absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[50vw] pl-10 z-10">
                <div>
                  <Link to="/hr-management-software" className="flex items-center text-black py-2 hover:text-blue-300 gap-2 hover:bg-green-100 p-3">
                    <span className='bg-blue-100 p-2 rounded-full'><FaTools className="mr-2" /></span>
                    <div >
                      <h2 className='text-blue-300'><Link to="">HRM</Link></h2>
                      <p className="text-sm text-gray-600">Management System to Streamline All Processes</p>
                    </div>
                  </Link>
                  <Link to="/CMS-software" className="flex items-center text-black py-2 hover:text-blue-300 gap-2 hover:bg-green-100 p-3">
                    <span className='bg-blue-100 p-2 rounded-full'><FaGlobe className="mr-2" /></span>
                    <div>
                      <h2 className='text-blue-300'>CRM</h2>
                      <p className="text-sm text-gray-600"> managing interactions with customers to improve relationships, streamline processes, and drive growth</p>
                    </div>
                  </Link>
                  <Link to="/Time management" className="flex items-center text-black py-2 hover:text-blue-300 gap-2 hover:bg-green-100 p-3">
                    <span className='bg-blue-100 p-2 rounded-full'><FaCode className="mr-2" /></span>
                    <div>
                      <h2 className='text-blue-300'>Time management</h2>
                      <p className="text-sm text-gray-600">Ensure workforce accountability with ease</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/payroll-software" className="flex items-center text-black py-2 hover:text-blue-300 gap-2 hover:bg-green-100 p-3">
                    <span className="bg-blue-100 p-2 rounded-full">
                      <FaCalculator className="text-lg" />
                    </span>
                    <div>
                      <h2 className="font-bold text-blue-300">Payroll</h2>
                      <p className="text-sm text-gray-600">Easily calculate employee salaries and deductions.</p>
                    </div>
                  </Link>

                  <Link to="/employee-benefits" className="flex items-center text-black py-2 hover:text-blue-300 gap-2 hover:bg-green-100 p-3">
                    <span className='bg-blue-100 p-2 rounded-full'><FaBriefcase className="mr-2" /></span>
                    <div>
                      <h2 className="font-bold text-blue-300">Employee Benefits </h2>
                      <p className="text-sm text-gray-600"> enhance the way organizations manage employee benefits</p>
                    </div>
                  </Link>
                  <Link to="/ATS & Recruitment-management-software" className="flex items-center text-black py-2 hover:text-blue-300 gap-2 hover:bg-green-100 p-3">
                    <span className='flex bg-blue-100 p-2 rounded-full justify-center'><FaUsers className="mr-2" /></span>
                    <div>
                      <h2 className="font-bold text-blue-300">ATS & Recruitment</h2>
                      <p className="text-sm text-gray-600">Streamline hiring and ensure accountability with ATS and recruitment tools</p>
                    </div>
                  </Link>
                </div>
                <div className="about1 relative h-64 w-full bg-[url('../assets/Frame(2).png')] bg-cover bg-center rounded-xl">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-20 rounded-xl"></div>

                  {/* Content */}
                  <div className="hrs relative flex items-center justify-center h-full">
                    <button className="text-black bg-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Request a Demo
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative h-[5vh] flex items-center p-1 hover:bg-gray-500"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
            ref={aboutDropdownRef}>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center space-x-2 hover:text-blue-300"
            >
              <Link to='/about'>About</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isAboutOpen && (
              <div className="grid grid-cols-2 gap-4 absolute z-10 top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[50vw]">
                <div>
                  <div className='hover:bg-green-100'>
                    <Link to="/about" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Our Story</span>
                      <div className='text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>Learn how our passion for human productivity drives our mission and values</p></div>
                    </Link>
                  </div>
                  <div className='hover:bg-green-100'>
                    <a href="#about1" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Career</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>Learn how our passion for human productivity drives our mission and values</p></div>
                    </a>
                  </div>
                  <div className='hover:bg-green-100'>
                    <a href="#about1" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Webinar</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>Learn how our passion for human productivity drives our mission and values</p></div>
                    </a>
                  </div>
                </div>
                <div
                  className="drop h-full w-full bg-[url('https://via.placeholder.com/800')] bg-cover bg-center flex items-center justify-center rounded-xl bg-blue-400"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-20 rounded-xl"></div> */}
                  <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
                    Request a Demo
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative h-[6vh] flex items-center p-1 hover:bg-gray-500"
            onMouseEnter={() => setIsResourceOpen(true)}
            onMouseLeave={() => setIsResourceOpen(false)}
            ref={aboutDropdownRef}>
            <button
              onClick={() => setIsResourceOpen(!setIsResourceOpen)}
              className="flex items-center space-x-2 hover:text-blue-300"
            >
              <span>Resources</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {IsResourceOpen && (
              <div className="grid grid-cols-2 gap-4 absolute z-10 top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[50vw]">
                <div>
                  <div className='hover:bg-green-100'>
                    <Link to="/payrollCalculator" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>PAYE Calculator</span>
                      <div className=' text-black p-2'><p className='text-gray-800 font-small hover:text-blue-300'>accurate and Easy to use, calculate employee salaries and deductions in your country</p></div>
                    </Link>
                  </div>
                  <div className='hover:bg-green-100'>
                    <Link to="/Blog" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Blog</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>Learn how our passion for human productivity drives our mission and values</p></div>
                    </Link>
                  </div>
                  <div className='hover:bg-green-100'>
                    <a href="#about1" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Event</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>Learn how our passion for human productivity drives our mission and values</p></div>
                    </a>
                  </div>

                </div>
                <div
                  className=" drop h-full w-full flex items-center justify-center rounded-xl bg-blue-400"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-20 rounded-xl"></div> */}
                  <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
                    Request a Demo
                  </button>
                </div>
              </div>
            )}
          </div>
          <Link to="/pricing" className="hover:text-blue-300 h-[5vh] flex items-center p-1 hover:bg-gray-500">
            Pricing
          </Link>
          <div className="relative h-[6vh] flex items-center p-1 hover:bg-gray-500"
            onMouseEnter={() => setIsOurserviceOpen(true)}
            onMouseLeave={() => setIsOurserviceOpen(false)}
            ref={ourserviceOpenRef}>
            <button
              onClick={() => setIsOurserviceOpen(!setIsOurserviceOpen)}
              className="flex items-center space-x-2 hover:text-blue-300"
            >
              <span>Our Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOurserviceOpen && (
              <div className="grid grid-cols-4 gap-4 absolute z-10 top-9 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[85vw]">
                <div>
                  <div className='flex items-center hover:bg-green-100'>
                  {/* <div className="flex items-center justify-center w-18 h-18 border-2 border-gray-400 rounded-full">
      <FontAwesomeIcon icon={faMoneyCheck} className="text-gray-600 text-xl" />
    </div> */}
                    <Link to="/payroll-management" className="block hover:text-blue-300 text-blue-300"><span className='p-2'>Payroll Management Services</span>
                      <div className=' text-black p-2'><p className='text-gray-500 font-small hover:text-blue-300'>We provide flexible corporate payroll services that improve the quality of payroll management for employers of all sizes. We handle the time consuming tasks of payroll processing.</p></div>
                    </Link>
                  </div>
                  <div className='hover:bg-green-100'>
                    <Link to="hr-outsourcing" className="block hover:text-blue-300 text-blue-300"><span className='p-2'>HR Outsourcing</span>
                      <div className=' text-black p-2'><p className='text-gray-500 font-small hover:text-blue-300'>We are one of the leading staff outsourcing and labour management companies in Kenya, and beyond. AMSOL will partner with you, taking up the HR department of your organization.</p></div>
                    </Link>
                  </div>
                  <div className='hover:bg-green-100'>
                    <Link to="/recruitment-and-selection">
                    <a href="#about1" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Recruitment & Selection</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>Are you searching for the most reliable recruitment consultants in Nairobi, Kenya? We constitute the best of all the recruitment companies in Kenya, and the region at large.</p></div>
                    </a>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className='hover:bg-green-100'>
                    <Link to="employees-corporate-training-services" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Employees & Corporate Training</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>We believe that training is one of the most important criteria to build up a long term relationship with your staff. We also understand the impact of effective employee training.</p></div>
                    </Link>
                  </div>
                  <div className='hover:bg-green-100'>
                    <Link to="/job-evaluation" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Job Evaluation</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>We offer result-oriented job evaluation consulting services. In fact, we’ve been offering solutions to various clients for over 5 years. Similar to other specialist techniques.</p></div>
                    </Link>
                  </div>
                  <div className='hover:bg-green-100'>
                    <a href="/hr-consultancy" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>HR Consultancy</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>We have a diversified team of competent and experienced hr management consultants who provide a hassle-free solution to complex, time consuming and sometimes-political issues.</p></div>
                    </a>
                  </div>
                </div>

                <div>
                  <div className='hover:bg-green-100'>
                    <Link to="/hr-audits" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>HR Audit</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>accurate and Easy to use, calculate employee salaries and deductions in your country</p></div>
                    </Link>
                  </div>
                  <div className='hover:bg-green-100'>
                    <Link to="/compensation-and-salary-surveys" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Salary Surveys</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>We constitute one of the leading compensation and salary survey companies in Kenya. We design and conduct tailored compensation surveys for clients.</p></div>
                    </Link>
                  </div>
                  <div className='hover:bg-green-100'>
                    <a href="/performance-management-tools" className="block text-black hover:text-blue-300 text-blue-300"><span className='p-2'>Performance Management</span>
                      <div className=' text-black p-2'><p className='text-gray-600 font-small hover:text-blue-300'>We will assist your organization in designing a streamlined, straightforward and tailored performance management system that considers your strategic goals..</p></div>
                    </a>
                  </div>
                </div>
                <div
                  className=" drop h-full w-full flex items-center justify-center rounded-xl bg-blue-400"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-20 rounded-xl"></div> */}
                  <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
                    Request a Demo
                  </button>
                </div>
              </div>
            )}
          </div>
          <Link to="/contact-us" className="hover:text-blue-300 h-[5vh] flex items-center p-1 hover:bg-gray-500">
            Contact
          </Link>

        </nav>
        <div className="flex text-md font-bold gap-4 text-center items-center">
          {/* <button className="bg-white text-black p-1 pl-2 pr-2 hover:text-blue-300 hover:bg-white border border-blue-400 rounded-full">
            Login
          </button> */}
          <Link to="/Demo">
            <button className="flex bg-white text-black p-1 pl-4 pr-4  hover:text-blue-300 hover:bg-white border border-blue-400 rounded-full">

              Request Demo
              <FontAwesomeIcon
                icon={faCircleRight}
                className='flex items-center text-xl border border-white rounded-full ml-2'
              />

            </button>
          </Link>
          <div className="relative h-[5vh] flex items-center p-1 hover:bg-gray-500"
            onMouseEnter={() => setIsGlobalOpen(true)}
            onMouseLeave={() => setIsGlobalOpen(false)}
            ref={globalDropdownRef}>
            <button
              onClick={() => setIsGlobalOpen(!isGlobalOpen)}
              className="flex items-center space-x-2 hover:text-blue-300"
            >

              <FontAwesomeIcon icon={faGlobe} className="text-white text-lg" />
              <span>Global</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isGlobalOpen && (
              <div className="absolute top-9  transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[12vw]">
                <Link to="/kenya-country-guide" className="flex items-center gap-3 text-black py-2 hover:text-blue-300">
                  <img
                    src={mapKenya}
                    alt="Kenya Flag"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  Kenya
                </Link>
                <Link to="/uganda-country-guide" className="flex items-center gap-3 text-black py-2 hover:text-blue-300">
                  <img
                    src={mapUganda}
                    alt="Uganda Flag"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  Uganda
                </Link>
                <Link to="/tanzania-country-guide" className="flex items-center gap-3 text-black py-2 hover:text-blue-300">
                  <img
                    src={mapTanzania}
                    alt="Tanzania Flag"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  Tanzania
                </Link>
                <Link to="/rwanda-country-guide" className="flex items-center gap-3 text-black py-2 hover:text-blue-300">
                  <img
                    src={maprwanda}
                    alt="Rwanda Flag"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  Rwanda
                </Link>
              </div>

            )}
          </div>
        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 p-4 h-screen">
          <div className="relative" ref={productDropdownRef}>
            <button
              onClick={() => setIsProductOpen(!isProductOpen)}
              className="flex items-center space-x-2 hover:text-blue-300"
            >
              <span>Product</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isProductOpen && (
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[50vw]">
                <a href="#product1" className="block text-black py-2 hover:text-blue-300">HRMS</a>
                <a href="#product2" className="block text-black py-2 hover:text-blue-300">CMS</a>
                <a href="#product3" className="block text-black py-2 hover:text-blue-300">ATS</a>
              </div>
            )}
          </div>
          <a
            href="#services"
            className="block text-white hover:text-blue-300 py-2"
          >
            Services
          </a>
          <div className="relative" ref={aboutDropdownRef}>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="flex items-center space-x-2 hover:text-blue-300"
            >
              <span>About</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isAboutOpen && (
              <div className="grid absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[50vw]">
                <div>
                  <div className='h-[10vh] text-black'>hello</div>
                  <a href="#about1" className="block text-black py-2 hover:text-blue-300">About Us</a>
                </div>
                <div>
                  <div className='h-[10vh] text-black'>hello</div>
                  <a href="#team" className="block text-black py-2 hover:text-blue-300">Our Team</a>
                </div>
                <div>
                  <div className='h-[10vh] text-black'>hello</div>
                  <a href="#team" className="block text-black py-2 hover:text-blue-300">Our Team</a>
                </div>
              </div>
            )}
          </div>
          <a
            href="#contact"
            className="block text-white hover:text-blue-300 py-2"
          >
            Contact
          </a>
          <div className="relative" ref={globalDropdownRef}>
            <button
              onClick={() => setIsGlobalOpen(!isGlobalOpen)}
              className="flex items-center space-x-2 hover:text-blue-300"
            >
              <span>Global</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isGlobalOpen && (
              <div className="absolute top-8 left-1/4 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[10vw]">
                <a href="#global1" className="block text-black py-2 hover:text-blue-300">Kenya</a>
                <a href="#global2" className="block text-black py-2 hover:text-blue-300">Uganda</a>
                <a href="#global2" className="block text-black py-2 hover:text-blue-300">Tanzania</a>
                <a href="#global2" className="block text-black py-2 hover:text-blue-300">Rwanda</a>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
