import React, { useState, useEffect, useRef } from 'react';

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
          AMSOL HR
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-10 font-bold">
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
                <a href="#product1" className="block text-black py-2 hover:text-blue-300">Product 1</a>
                <a href="#product2" className="block text-black py-2 hover:text-blue-300">Product 2</a>
                <a href="#product3" className="block text-black py-2 hover:text-blue-300">Product 3</a>
              </div>
            )}
          </div>

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
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[50vw]">
                <a href="#about1" className="block text-black py-2 hover:text-blue-300">About Us</a>
                <a href="#team" className="block text-black py-2 hover:text-blue-300">Our Team</a>
              </div>
            )}
          </div>
          <a href="#contact" className="hover:text-blue-300">
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
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-2 rounded-md w-[10vw]">
                <a href="#global1" className="block text-black py-2 hover:text-blue-300">Kenya</a>
                <a href="#global2" className="block text-black py-2 hover:text-blue-300">Uganda</a>
                <a href="#global2" className="block text-black py-2 hover:text-blue-300">Tanzania</a>
                <a href="#global2" className="block text-black py-2 hover:text-blue-300">Rwanda</a>
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
          <a
            href="#home"
            className="block text-white hover:text-blue-300 py-2"
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-white hover:text-blue-300 py-2"
          >
            Services
          </a>
          <a
            href="#about"
            className="block text-white hover:text-blue-300 py-2"
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-blue-300 py-2"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
