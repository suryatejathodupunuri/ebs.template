import React from 'react';
import principlesData from '../principles/principlesdata.json';

const Principles = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Principles</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
        {principlesData.map((principle, index) => (
          <div key={index} className="bg-white rounded-lg  overflow-hidden">
            <div className="p-4">
              <img src={principle.image} alt={principle.principle} className="w-24 h-24 object-cover object-center mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-center">{principle.principle}</h2>
              <p className="text-gray-700 text-center">{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
