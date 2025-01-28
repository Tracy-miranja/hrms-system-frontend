import React from "react";
import logo from "../assets/amsol-hr-outsourcing.png";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo2 from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 gap-4">
        {/* Flex Container for Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left">
          {/* AMSOL Logo */}
          <div className="flex-1 mb-6 md:mb-0">
            <img
              src={logo2}
              alt="AMSOL Logo"
              className="mx-auto md:mx-0 w-32 h-auto"
            />
            <p className="mt-4 text-sm">
              AMSOL has a highly skilled, knowledgeable, experienced, diversified, and solid team of competent
              and experienced HR consulting professionals.
            </p>
          </div>

          {/* Company Info */}
          <div className="flex flex-col justify-center flex-1 mb-6 md:mb-0 items-center">
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:underline">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

           {/* services */}
           <div className="flex flex-col flex-1 mb-6 sm:items-center md:mb-0 justify-center items-center">
            <h4 className="flex font-bold text-lg mb-4 justify-start">Our Services</h4>
            <ul className="flex items-center flex-col">
              <li className="mb-2">
                <a href="/features" className="hover:underline">Payroll Management Services</a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="hover:underline">HR Outsourcing</a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="hover:underline">Recruitment & Selection</a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="hover:underline">Employees & Corporate Training</a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="hover:underline">Job Evaluation</a>
              </li>
              <li className="mb-2">
                <a href="/resources" className="hover:underline">HR Consultancy</a>
              </li>
              <li className="mb-2">
                <a href="/resources" className="hover:underline">HR Audit</a>
              </li>
              <li className="mb-2">
                <a href="/resources" className="hover:underline">Salary Surveys</a>
              </li>
              <li className="mb-2">
                <a href="/resources" className="hover:underline">Performance Management</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col flex-1 mb-6 sm:items-center md:mb-0 justify-center items-center">
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul>
              <li className="mb-2">
                <a href="/features" className="hover:underline">Features</a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="hover:underline">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="/resources" className="hover:underline">Resources</a>
              </li>
            </ul>
          </div>

          {/* Legal and Socials */}
          <div className="flex flex-col flex-1 mb-6 md:mb-0 justify-center items-center">
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul>
              <li className="mb-2">
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <h4 className="font-bold text-lg mb-2">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-4 items-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 flex items-center space-x-2"
                >
                  <FaFacebook className="text-xl" />
                  <span className="hidden sm:block">Facebook</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <FaTwitter className="text-xl" />
                  <span className="hidden sm:block">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 flex items-center space-x-2"
                >
                  <FaLinkedin className="text-xl" />
                  <span className="hidden sm:block">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-100 mt-8 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AMSOL. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
