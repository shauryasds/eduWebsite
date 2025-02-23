import React from 'react';
import { FaUser  } from 'react-icons/fa'; 
import WhatsAppButton from './WhatsAppButton';

function ClassSelection() {
  return (
    <div className="py-16 relative bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-extrabold text-center mb-2">
          Learn with 1-on-1 personalized online tuition classes
        </h2>
        <p className="text-center font-thin text-gray-600 mb-12">(Classes 6 to 12)</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[6, 7, 8, 9, 10, 11].map((grade) => (
            <div key={grade} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <FaUser  className="w-10 h-10 text-pink-500" />
              </div>
              <h3 className="font-semibold mb-2">Online Math Tuition for Class {grade}</h3>
              <button className="text-blue-500 hover:underline">Join Classes</button>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute bottom-0 right-0'>
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default ClassSelection;