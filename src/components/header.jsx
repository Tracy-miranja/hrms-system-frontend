import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/amsol-hr-outsourcing.png"
import { FaTools, FaUsers, FaCalculator, FaBriefcase, FaGlobe, FaCode } from "react-icons/fa";
import maprwanda from "../assets/hr-outsourcing-rwanda.webp"
import mapTanzania from "../assets/hr-outsourcing-tz.png"
import mapUganda from "../assets/hr-outsourcing-uganda.webp"
import mapKenya from "../assets/hr-outsourcing-kenya.svg"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGlobalOpen, setIsGlobalOpen] = useState(false);

  const productDropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const globalDropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (
      productDropdownRef.current && !productDropdownRef.current.contains(event.target) &&
      aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target) &&
      globalDropdownRef.current && !globalDropdownRef.current.contains(event.target)
    ) {
      setIsProductOpen(false);
      setIsAboutOpen(false);
      setIsGlobalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-around p-3">
        {/* Logo Section */}
        <div className="text-xl font-bold">
         <img src={logo} className='h-[5vh]'/>
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
        <div className="grid grid-cols-3 gap-4 justify-center absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[50vw]">
          <div>
  <a href="#product1" className="flex items-center text-black py-2 hover:text-blue-300 gap-2">
   <span className='bg-blue-100 p-2 rounded-full'><FaTools className="mr-2" /></span> 
   <div>
    <h2 className='text-blue-300'>HRMS</h2>
   <p className="text-sm text-gray-600">Easily calculate employee salaries and deductions</p>
    </div> 
  </a>
  <a href="#product2" className="flex items-center text-black py-2 hover:text-blue-300 gap-2">
  <span className='bg-blue-100 p-2 rounded-full'><FaGlobe className="mr-2" /></span> 
  <div>
    <h2 className='text-blue-300'>CMS</h2>
    <p className="text-sm text-gray-600">Easily calculate employee salaries and deductions</p>
    </div>
  </a>
  <a href="#product3" className="flex items-center text-black py-2 hover:text-blue-300 gap-2">
  <span className='bg-blue-100 p-2 rounded-full'><FaCode className="mr-2" /></span>
  <div>
    <h2 className='text-blue-300'>ATS</h2>
    <p className="text-sm text-gray-600">salaries and deductions</p>
    </div> 
  </a>
</div>
<div>
<a href="#product3" className="flex items-center text-black py-2 hover:text-blue-300 gap-2">
  <span className="bg-blue-100 p-2 rounded-full">
    <FaCalculator className="text-lg" />
  </span>
  <div>
    <h2 className="font-bold text-blue-300">Payroll Calculator</h2>
    <p className="text-sm text-gray-600">Easily calculate employee salaries and deductions.</p>
  </div>
</a>

  <a href="#product3" className="flex items-center text-black py-2 hover:text-blue-300 gap-2">
  <span className='bg-blue-100 p-2 rounded-full'><FaBriefcase className="mr-2" /></span>
  <div>
    <h2 className="font-bold text-blue-300">Employee Benefits </h2>
    <p className="text-sm text-gray-600">calculate employee salaries and deductions</p>
    </div> 
  </a>
  <a href="#product3" className="flex items-center text-black py-2 hover:text-blue-300 gap-2">
  <span className='flex bg-blue-100 p-2 rounded-full justify-center'><FaUsers className="mr-2" /></span> 
  <div>
    <h2 className="font-bold text-blue-300">Recruitment</h2>
    <p className="text-sm text-gray-600">salaries and deductions</p>
  </div>
  </a>
</div>
          <div
  className="h-64 w-full bg-[url('https://via.placeholder.com/800')] bg-cover bg-center flex items-center justify-center"
>
  <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
    Request a Demo
  </button>
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
              <div className="grid grid-cols-3 gap-4 absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[50vw]">
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
          <a href="#contact" className="hover:text-blue-300 h-[5vh] flex items-center p-1 hover:bg-gray-500">
            Contact
          </a>
          <div className="relative h-[5vh] flex items-center p-1 hover:bg-gray-500"
          onMouseEnter={() => setIsGlobalOpen(true)} 
          onMouseLeave={() => setIsGlobalOpen(false)} 
           ref={globalDropdownRef}>
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
             <div className="absolute top-8 left-1/4 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[15vw]">
             <a href="#global1" className="flex items-center gap-3 text-black py-2 hover:text-blue-300">
               <img
                 src={mapKenya}
                 alt="Kenya Flag"
                 className="w-8 h-8 object-cover rounded-full"
               />
               Kenya
             </a>
             <a href="#global2" className="flex items-center gap-3 text-black py-2 hover:text-blue-300">
               <img
                 src={mapUganda}
                 alt="Uganda Flag"
                 className="w-8 h-8 object-cover rounded-full"
               />
               Uganda
             </a>
             <a href="#global3" className="flex items-center gap-3 text-black py-2 hover:text-blue-300">
               <img
                 src={mapTanzania}
                 alt="Tanzania Flag"
                 className="w-8 h-8 object-cover rounded-full"
               />
               Tanzania
             </a>
             <a href="#global4" className="flex items-center gap-3 text-black py-2 hover:text-blue-300">
               <img
                 src={maprwanda}
                 alt="Rwanda Flag"
                 className="w-8 h-8 object-cover rounded-full"
               />
               Rwanda
             </a>
           </div>
           
            )}
          </div>
        </nav>
        <div className="flex text-md font-bold gap-4 text-center items-center">
          <button className="bg-green-400 p-1 pl-2 pr-2 hover:text-blue-300 hover:bg-white border border-blue-400 rounded-full">
            Login
          </button>
          <button className="bg-green-400 p-1 pl-2 pr-2  hover:text-blue-300 hover:bg-white border border-blue-400 rounded-full">
            Request Demo
          </button> 
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
