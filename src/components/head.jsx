import React, { useState } from "react";
import logo from "../assets/amsol-hr-outsourcing.png";

function Header() {
  const [visibleDropdown, setVisibleDropdown] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown) => {
    if (!mobileMenuOpen) {
      setVisibleDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (!mobileMenuOpen) {
      setVisibleDropdown("");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setVisibleDropdown("");
    }
  };

  const toggleDropdown = (dropdown) => {
    if (mobileMenuOpen) {
      setVisibleDropdown(visibleDropdown === dropdown ? "" : dropdown);
    }
  };

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-3">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          <img src={logo} className="h-[5vh]" alt="Logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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

        {/* Navigation Links */}
        <nav
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 font-bold`}
        >
          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("product")}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown("product")}
          >
            <button className="flex items-center space-x-2 hover:text-blue-300">
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
            <div
              className={`absolute md:top-8 left-0 bg-white shadow-md p-2 rounded-md w-full md:w-[50vw] transition-transform duration-300 ${
                visibleDropdown === "product" ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <a href="#product1" className="block text-black py-2 hover:text-blue-300">
                HRMS
              </a>
              <a href="#product2" className="block text-black py-2 hover:text-blue-300">
                CMS
              </a>
              <a href="#product3" className="block text-black py-2 hover:text-blue-300">
                ATS
              </a>
            </div>
          </div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown("about")}
          >
            <button className="flex items-center space-x-2 hover:text-blue-300">
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
            <div
              className={`absolute md:top-8 left-0 bg-white shadow-md p-2 rounded-md w-full md:w-[50vw] transition-transform duration-300 ${
                visibleDropdown === "about" ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <a href="#about1" className="block text-black py-2 hover:text-blue-300">
                About Us
              </a>
              <a href="#team" className="block text-black py-2 hover:text-blue-300">
                Our Team
              </a>
              <a href="#careers" className="block text-black py-2 hover:text-blue-300">
                Careers
              </a>
            </div>
          </div>

          {/* Contact Link */}
          <a href="#contact" className="hover:text-blue-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
