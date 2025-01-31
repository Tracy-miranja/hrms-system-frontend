import React from "react";
import { Link } from "react-router-dom";

function Survey() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Banner Section */}
      <div className="flex flex-col justify-center items-center bg-blue-600 text-white py-16 text-center animate-fade-in-down">
        <h1 className="text-4xl font-bold">Compensation and Salary Survey Services</h1>
        <p className="mt-4 text-xl text-center max-w-6xl">
        Africa Management Solutions Ltd (AMSOL) is one of the leading compensation and salary survey companies in Kenya. We design and conduct tailored compensation surveys for clients. In addition, we have a database of published compensation survey data from which we can draw competitive pay information to assist clients in updating their pay practices.
        </p>
         <Link to="/demo">
                                <button className=" mt-4 rounded-full text-black text-md p-3 bg-orange-200 hover:bg-white">
                                    Get started
                                </button>
                            </Link>
      </div>

      {/* Introduction Section */}
      <div className="flex justify-center">
      <div className="container py-12 px-6  animate-slide-in-left gap-4">
       
        <p className="text-xl leading-relaxed">
        AMSOL has designed and conducted salary compensation surveys for clients on a broad range of topics. Normally, these surveys are conducted to help clients ensure that their compensation practices are, or remain, competitive. They generally focus on cash compensation practices – i.e., base salaries, incentive compensation, bonus arrangements, etc. – but can also include benefit and perquisite practices.
        </p>
        <p className="text-xl leading-relaxed">
        When rapid response is a priority, or the situation does not require the precision that a tailored survey provides, our extensive database of published salary surveys by industry is available to assist clients price one or two jobs or an array of positions. The turnaround time in drawing from our databank and helping clients price their jobs is normally minimal. This can be quite useful in saving clients time and money.
       </p>
        <p className="text-xl leading-relaxed">The compensation surveys and related pay comparisons we perform for clients can be conducted either as standalone projects, or as part of a broader compensation study where our firm is engaged to develop a formal compensation program for the client and job pricing is an important part of the engagement.</p>
      </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-blue-600 text-white text-center animate-scale-up">
        <h2 className="text-3xl font-bold mb-4">Compensation and Salary Survey Services</h2>
        <p className="text-xl mb-6">
          Contact Africa Management Solutions Ltd today for seamless Hr solutions tailored to
          your needs.
        </p>
        <Link to="/Demo"><button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
}


export default Survey