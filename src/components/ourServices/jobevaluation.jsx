import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function JobEvaluation() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 overflow-hidden">
      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?recruitment")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center p-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight shadow-md">Job Evaluation Services</h1>
          <p className="text-xl text-white mt-3 px-4 max-w-5xl">Job Evaluation is a systematic determination of the relative worth of jobs within the organization and is concerned with the value of a job to the organization. The job evaluations process determines the worth of each job, relative to other jobs, by establishing a hierarchy of positions within an organization. The entire process is based on the job description, i.e. job evaluations are typically completed after the job analysis and job descriptions are complete.</p>
          <Link to="/demo"><button className="mt-5 bg-white rounded-full p-4 hover:bg-orange-100">Get started</button></Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center text-center p-10 mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1 className="text-3xl font-bold text-yellow-400">What it Entails</h1>
          <p className="text-white text-xl mt-3  px-4">
            Job evaluation methods can be either non-quantitative, e.g. job classification, or quantitative, e.g. job point-factor process. The latter utilizes compensable factors to include skill, responsibility, effort, working conditions and supervision of others to determine internal worth. The HR Job analysis and evaluations are a key step towards developing an internally consistent compensation system as a strategic tool for your organization.
          </p>
        </div>
        <ul className="list-disc  text-xl text-white space-y-3 mt-5 max-w-4xl ">
          <li>To help with determining the redundant positions and job responsibilities for purposes of downsizing, layoffs, retrenchment, transfers, dismissals, taking on additional responsibilities, and other actions taken in relation to redundant positions.</li>
          <li>Very useful in developing job descriptions and specifications, competency and performance appraisals, standard operation procedures (SOPs), and performance standards.</li>
          <li>To help with resolving pay and compensation issues that become apparent due to promotions, assignments, and lateral moves.</li>
          <li>To assist in determining on the appropriate salary/pay grades for particular positions and job responsibilities.</li>
          <li>To back up the recruitment process as job evaluation is critical to the development of job adverts, assessment of the applicants, and negotiation of the appropriate pay and compensation.</li>
          <li>Very helpful in employee development in terms of career pathing and planning, which assists the employer in succession planning.</li>
        </ul>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center text-center p-10 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1 className="text-3xl font-bold text-yellow-400">When is it Appropriate to Perform Job Evaluations?</h1>
          <p className="text-white text-xl mt-3  px-4">
          It’s common to us that most job evaluation requests come through as a result of an employee taking on additional responsibilities and hence more work. In such a case, the employee expects an equitable change in the scope of work, level of responsibility, authority, or range. Otherwise, the move would’ve been so disappointing and hence demoralize the employee.
          </p>
          <p className="text-white text-xl mt-3  px-4">
          Job evaluations had recently been viewed as something for the ‘BIG BOYS’, i.e. large organizations. That kind of view is briskly becoming obsolete! Small organizations are moving in with new technology, new procedures and programs, downsizing, layoffs, etc. just like their ‘BIG BOYS’ counterparts. Such dynamic issues can introduce a significant change to the job classification of certain employees. This is a high time to call for a job classification evaluation.
          Last but not least, job evaluations play a big role whenever a new job position is created. In such a scenario, the evaluation is done hand-in-hand with a job analysis.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center text-center p-10 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1 className="text-3xl font-bold text-yellow-400">Where to find Job Evaluation Services?</h1>
          
          <p className="text-white text-xl mt-3  px-4">
          At Africa Management Solutions Ltd (AMSOL), we offer result-oriented job evaluation consulting services. In fact, we’ve been offering solutions to various clients for over 5 years. Similar to other specialist techniques, the job evaluation process requires support from experienced hr consultants, who know the problems and how to get the best results. Without this advice, the organization could develop a pay structure which not only fails to support the organizational strategic objectives, but also create a biased and discriminatory reward structure.
          </p>
        </div>
      </motion.div>

      {/* Service Section */}
      <h1 className="mt-8 text-center font-bold text-4xl text-white">The Typical Components of our Job Evaluation Exercise</h1>
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {["Job Analysis– Job classifications, descriptions and specifications;", "Actual job values/worth;", "Salary Structure/Remuneration Scheme;", "Salary Survey Report containing recommendations on remuneration and benefits structure","Schemes of Service","Staff Maintenance and Retention","Performance Management and Appraisal System","A frame work for harmonization of remuneration and benefits that would guide existing and future remuneration and benefits."].map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform border-l-4 border-blue-600"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="text-xl font-semibold text-blue-600">{service}</h2>
           
          </motion.div>
        ))}
        
      </motion.div>
       <p className="text-white mt-2 text-center text-xl">So, make an effort and consult us today! We shall immediately assign a highly experienced team of our job evaluation consultants, who will serve you till satisfaction.</p>

      {/* Footer Section */}
      <div className="bg-blue-600 text-center py-8 mt-16">
        <p className="text-white text-lg">Your trusted recruitment partner in Kenya. Get in touch today!</p>
        <button className="bg-teal-500 text-white py-2 px-6 rounded-full mt-4 transition-all hover:bg-teal-700">
          Contact Us
        </button>
      </div>
    </div>
  );
}




export default JobEvaluation