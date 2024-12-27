import React from 'react';

function Clients() {
  const clients = [
    '/assets/client1-logo.png',
    '/assets/client2-logo.png',
    '/assets/client3-logo.png',
    '/assets/client4-logo.png',
    '/assets/client5-logo.png',
    '/assets/client6-logo.png',
    '/assets/client7-logo.png',
  ]; // Replace with actual client logo paths

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
