import React from "react";
import sage from "../assets/sage.png"
import sap from "../assets/sap.png"
import microsoft from "../assets/microsoft.webp"
import oracle from "../assets/oracle.webp"

const LogosSection = () => {
  return (
    <section className="py-5 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <img
              className="w-full h-16 object-contain mx-auto"
              src={microsoft}
              alt="Microsoft Logo"
            />
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <img
              className="w-full h-16 object-contain mx-auto"
              src={sage}
              alt="Sage Logo"
            />
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <img
              className="w-full h-16 object-contain mx-auto"
              src={oracle} 
              alt="SAP Logo"
            />
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <img
              className="w-full h-16 object-contain mx-auto"
              src={sap}
              alt="Oracle Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
