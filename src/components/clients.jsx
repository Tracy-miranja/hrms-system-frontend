import React from 'react';
import arbor from "../assets/Arbor-Networks-Logo.jpg"
import Surge from "../assets/Surge-Energy.jpg"
import Ata from "../assets/Ata-gss.png"
import Kiota from "../assets/Kiota-School.png"
import SHOFCO from "../assets/SHOFCO.png"
import Navitas from "../assets/Navitas.jpg"
import Nssf from "../assets/Nssf.png"
import Nutanix from "../assets/Nutanix_Logo.png"
import Flytxt from "../assets/Flytxt.jpg"
import Bosch from "../assets/Bosch-logo.png"
import Cwgc from "../assets/Cwgc.jpg"
import Auto from "../assets/Auto-industries-limited.jpg"
import Kohler from "../assets/Kohler.png"

function Clients() {
  const clients = [
    arbor,
    Surge,
    Ata,
    Kiota,
    SHOFCO,
    Navitas,
    Nssf,
    Nutanix,
    Flytxt,
    Bosch,
    Cwgc,
    Auto,
    Kohler,
    
  ]; 

  return (
    <div className="bg-gray-50 py-10">
      {/* Header */}
      <div className="flex justify-center mb-8 font-semibold text-2xl">
        <h2>Our Clients</h2>
      </div>

      {/* Scrolling Section */}
      <div className="overflow-hidden">
        <div className="flex items-center gap-8 animate-scroll">
          {/* Logos Loop */}
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white shadow-md rounded-md p-4 h-[80px] w-[150px] flex items-center justify-center"
            >
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
