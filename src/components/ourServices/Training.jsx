import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Training() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-64 bg-blue-600 flex items-center justify-center">
        <motion.h1 
          className="flex flex-col justify-center items-center text-white text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Employees & Corporate Training Services
          <Link to="/demo"><button className="bg-white mt-4 rounded-full text-black text-sm p-3 hover:bg-orange-200">Get started</button></Link>
        </motion.h1>
      </div>
      
      {/* Content Section */}
      <div className="flex">
      <div className="container mx-auto p-6 mt-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Want to always stay ahead of your competitors?</h2>
        <p className="text-gray-600 mt-4 text-xl">
          Your workforce could be the key factor holding back your organization's growth. Training employees effectively ensures they deliver strategies efficiently.
        </p>
        <p className="text-gray-600 mt-4 text-xl">You can have well-defined business issues and the best strategies but still perform relatively poor. Your workforce could be the factor holding back the growth of your organization. As it is said, the people are the company. This does refer to not only your customers but also your employees. Alongside the strategies, it’s absolutely necessary to prep your employees so that they can deliver on the strategies effectively. It’s a fact that most companies lack effective employee training schemes. To address this, organizations need to embrace a culture of learning.</p>
        <h3 className="text-xl font-semibold mt-6">The High Payback Employee Training</h3>
        <p className="text-gray-600 mt-4 text-xl">Customer service training is one of the interesting employee training areas. It deserves special attention because the value of the training is enormous. Most successful organizations have customer service as their focal point and hence have made customer service skills training an essential to all their employees.

Communication skills’ training and Team building constitute another interesting course of employee training and development. Mostly, this enhances the connectivity of the people within an organization, as well as those without. Good communication and teamwork increase efficiency and save on time since there are less, or no, conflicts.

Executive and Leadership development training is yet another interesting area that doesn’t disappoint in terms of returns on investment. The bottom line is a company’s leadership constitutes a great proportion of the operational backbone.

The last area of employee training and development is compliance training. It’s the least interesting and effective in many organizations. The lessons are often boring and met with a lot of resistance. Despite the take, compliance to the federal/state laws is vital because non-compliance will attract avoidable fines and penalties. Such trainings should be well designed so as to make the audience more receptive and interested.</p>
        <h3 className="text-xl font-semibold mt-6">Our Training Programs</h3>
        <p className="text-gray-600 mt-3 text-xl">Poor skills training and development is cited as one of the principal reasons for employees to deliberately leave their positions after barely one year of employment. Once a member of the staff leaves, the organization’s productivity slips. The cost (time and money) of finding and settling on a nice-fit replacement is enormous.

Still not convinced enough to invest in training your staff? Below are some of the reasons why you should take the initiative and train your employees:</p>
        <ul className="list-disc list-inside text-gray-600 mt-3 text-xl">
          <li className="pt-2">Training equips employees with the skills required to run the business better. For instance, they’ll be able to serve customers better.</li>
          <li className="pt-2">Through training, workers become more loyal and committed to your organization. If your company is a learning and development ground, employees will have no reason to move on because they’ll always be looking forward to the next challenge and development.</li>
          <li className="pt-2">Training and development attracts young and energetic workers. Most young people are seeking employment that offers opportunities to grow their skills. If you offer such opportunities, chances are you’ll attract and keep good, loyal and committed employees.</li>
          <li className="pt-2">Nurturing your employees through training promotes their job satisfaction. This makes them more engaged and involved in contributing to the success of the company.</li>
          <li className="pt-2">Training improves competency, flexibility and efficiency of your employees. For instance, you can make all-round employees by cross-training them in all the aspects of training, i.e. customer service, communication skills, leadership, compliance.</li>
          <li className="pt-2">Employee training is a knowledge transfer tool. In an organization, you’ll find different people, knowledgeable and equipped with varied special skills. It’d be wise to diversify their skills through sharing their knowledge among themselves. This is well achievable through training.</li>
          
        </ul>
        <p className="text-gray-600 mt-3 text-xl">Africa Management Solutions Ltd (AMSOL) is one of the Directorate Industrial Training (DIT) Approved training institutions in Kenya.

Fully Accredited and registered with National Industrial Training Authority (NITA) – Ref No: DIT/TRN/879

We (AMSOL) believe that training is one of the most important criteria to build up a long term relationship with your staff. We also understand the impact of effective employee training and development on their performance. A core service of AMSOL is employee training in leadership, management, compliance, and soft-skills topics.

By providing your employees with training, it not only improves their performance, it also increases your bottom line. Every training module that we offer is developed to meet the needs of your company, while incorporating the company’s culture, vision, and philosophies into the presentation.

Our employee training and development programs and procedures are thorough and diversified. For instance, we can present the following types of training sessions for your organization:</p>
<ul className="list-disc list-inside text-gray-600 mt-3 text-xl">
          <li>Individual and group training</li>
          <li>Videotaped sessions</li>
          <li>Sessions designed for CD-ROM</li>
          
        </ul>
        <p className="text-gray-600 mt-3 text-xl">Regardless of the method chosen, we ask participants to rate their knowledge of the topics before and after the training session, so that we are able to measure our own success. We measure our success by assessing the perceived increase in knowledge of the learning objectives that occurred as a result of the training.

Our training topics are numerous. We support continuous improvement and provide a wide range of employee and supervisory training and development solutions. We employ interactive training methods which will ensure that the participants learn, develop and practice new skills in a professional learning environment.</p>
   <h2 className="font-bold text-2xl text-gray-600 mt-2">Some of the courses we offer are:</h2>
   <ul className="list-disc list-inside text-gray-600 mt-3 text-xl">
          <li>Change Management – 2 days</li>
          <li>Project Management – 2 days</li>
          <li>Team Building – 2 days</li>
          <li>Training of Trainers – 4 days</li>
          <li>Effective Report Writing – 2 days</li>
          <li>Supervisory Skills Development– 2 days</li>
          <li>Effective Management Skills – 3 days</li>
          <li>Fundamental of Human Resource Management – 3 days</li>
          <li>Customer Service for Managers – 2 days</li>
          <li>Time Management – 2 days</li>
          <li>Managing in a Diverse Environment – 2 days</li>
          <li>Planning for Retirement – 3 days</li>
          <li>Industrial Relations – 2 days</li>
          
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Training;
