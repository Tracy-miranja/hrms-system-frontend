import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-lg">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center"
        data-aos="fade-in"
      >
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4">
          Reach out to us for inquiries, collaborations, or support.
        </p>
      </section>

      {/* Contact Details and Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-gray-600">
            We’re here to help. Contact us via phone, email, or by filling out
            the form.
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600 mt-2">
              Vision Plaza, 3rd Floor, Rm 12A, Mombasa Road, Nairobi, Kenya <br/>P.O.Box 11145 – 00100, Nairobi, Kenya
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600 mt-2">+254 111 888 000, +254 738 038378, <br />+254 782 016043, +254 750000028</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600 mt-2">info@amsol.africa

</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Hours</h3>
              <p className="text-gray-600 mt-2">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="bg-blue-900 shadow-lg rounded-lg p-8 "
          data-aos="zoom-in-up"
        >
          <h2 className="text-2xl font-bold text-white">Contact Form</h2>
          <p className="text-white mt-2">
            Fill out the form below, and we’ll get back to you as soon as
            possible.
          </p>
          <form 
  className="space-y-6 mt-6"
  action="https://formspree.io/f/xzzdeebj" 
  method="POST"
>
  <div className="flex gap-3 w-full">
    <div>
      <label className="block text-white font-medium">
        First Name
      </label>
      <input
        type="text"
        name="first_name"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
        required
      />
    </div>
    <div>
      <label className="block text-white font-medium">
        Last Name
      </label>
      <input
        type="text"
        name="last_name"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
        required
      />
    </div>
  </div>

  <div>
    <label className="block text-white font-medium">Email</label>
    <input
    
     type="hidden" name="_replyto"
      
      className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
      required
    />
  </div>
  <div>
    <label className="block text-white font-medium">Phone</label>
    <input
      type="tel"
      name="phone"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
      required
    />
  </div>
  <div>
    <label className="block text-white font-medium">
      Company Name
    </label>
    <input
      type="text"
      name="company_name"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
    />
  </div>
  <div>
    <select
      name="country"
      className="w-full border border-gray-300 rounded-lg px-4 py-2"
      required
    >
      <option value="" disabled selected>
        Select Country
      </option>
      <option value="Nigeria">Nigeria</option>
      <option value="Kenya">Kenya</option>
      <option value="South Africa">South Africa</option>
      <option value="United States">United States</option>
      <option value="United Kingdom">United Kingdom</option>
    </select>
  </div>
  <div>
    <select
      name="inquiry_type"
      className="w-full border border-gray-300 rounded-lg px-4 py-2"
      required
    >
      <option value="" disabled selected>
        Select Type of Inquiry
      </option>
      <option value="General">General Inquiry</option>
      <option value="Support">Customer Support</option>
      <option value="Sales">Sales Inquiry</option>
      <option value="Partnership">Partnership Request</option>
    </select>
  </div>
  <div>
    <label className="block text-white font-medium">Message</label>
    <textarea
      name="message"
      rows="4"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1"
      required
    ></textarea>
  </div>
  <input type="hidden" name="_replyto" value="{email}" />

  <button
    type="submit"
    className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-gray-800"
    data-aos="fade-left"
  >
    Submit
  </button>
</form>

        </div>
      </section>

      {/* Map Section */}
      <section
        className="h-96 w-full bg-gray-200"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.52846789754!2d-122.4194164846813!3d37.77492977975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e093ff85%3A0x1f8605e963392f82!2s123%20Business%20Lane!5e0!3m2!1sen!2sus!4v1698147230590!5m2!1sen!2sus"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
