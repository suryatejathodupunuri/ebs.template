import React from 'react';
import featuresdata from '../features/featuresdata.json'

const Features = () => {
  return (
    
    <div className="container mx-auto py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Features</h1>
      </div>
      <div className="flex justify-center"> 
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            {featuresdata.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden mb-6 flex">
                <img src={feature.image} alt={feature.feature} className="w-1/2 object-cover object-center" />
                <div className="w-1/2 p-4">
                  <h2 className="text-xl font-semibold mb-2">{feature.feature}</h2>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Features;
