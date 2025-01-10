import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex  justify-center p-6 gap-4 ">
      <div className='w-[40%] bg-gray-500 p-6'>
        <h1>Connect with our Team of Experts</h1>
        <p>Have questions or need a hand? Our team is here to assist and make sure you get the support you need!</p>
        <div className='flex'>
        <div><h3>Want to join our talented team? check our job board</h3></div>
        <div className='contact-hr'></div>
      </div>
      </div>
      
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-600 mb-6 text-center">
          We'd love to hear from you! Reach out to us using the form below or through our contact details.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your company name"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-600">Or reach us directly at:</p>
          <p className="text-gray-800 font-medium">Email: support@yourcompany.com</p>
          <p className="text-gray-800 font-medium">Phone: +254 111 888 000 <br/>
Call us anytime! 24/7

</p>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
