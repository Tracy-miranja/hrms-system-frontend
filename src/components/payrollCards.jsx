import React from "react";
import { FaDollarSign, FaRegClock } from "react-icons/fa";

const PayrollIllustration = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-8 bg-gray-50">
      {/* First Div */}
      <div className="flex flex-col gap-4 md:w-1/2">
        {/* Row 1 */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
          <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
            <FaDollarSign size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Efficient Payroll</h3>
            <p className="text-sm text-gray-600">
              Automate payroll processes to save time and ensure accuracy.
            </p>
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg">
          <div className="p-3 bg-sky-100 rounded-full text-sky-600">
            <FaRegClock size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Time Tracking</h3>
            <p className="text-sm text-gray-600">
              Monitor employee hours seamlessly with integrated tools.
            </p>
          </div>
        </div>
      </div>

      {/* Second Div */}
      <div className="md:w-1/2">
        <video
          className="w-full rounded-lg shadow-lg"
          controls
          src="/path/to/payroll-video.mp4"
          poster="/path/to/video-poster.jpg"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default PayrollIllustration;
