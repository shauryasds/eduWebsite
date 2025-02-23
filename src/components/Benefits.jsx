import React from 'react';
import { FaUsers, FaTrophy, FaDollarSign, FaClock, FaGlobeAmericas } from 'react-icons/fa';

function Benefits() {
  return (
    <div className="mt-12 bg-gray-100 px-4 md:px-8 pt-0 py-8">
      <h2 className="mt-0 p-0 text-lg md:text-xl text-center mb-4">
        Benefits of choosing Digi Tutorial for online tuition for class 1
      </h2>
      <div className="border-b border-gray-400 mb-4 w-1/2 mx-auto" />
      
      <div className="text-lg text-center font-thin mb-4">
        Call us@123456789
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <BenefitCard icon={<FaUsers className="w-8 h-8 mx-auto text-black" />} title="One-on-One Class" description="Teacher to student ratio 1:1" />
        <BenefitCard icon={<FaUsers className="w-8 h-8 mx-auto text-black" />} title="Make Your Choice" description="Choose your class teacher" />
        <BenefitCard icon={<FaTrophy className="w-8 h-8 mx-auto text-black" />} title="Best Teachers" description="Connect with top teachers" />
        <BenefitCard icon={<FaDollarSign className="w-8 h-8 mx-auto text-black" />} title="Affordable Fee" description="Reasonable fee & payable" />
        <BenefitCard icon={<FaClock className="w-8 h-8 mx-auto text-black" />} title="Flexibility of Time" description="Make class timetable as per your convenience" />
        <BenefitCard icon={<FaGlobeAmericas className="w-8 h-8 mx-auto text-black" />} title="Popular Online Platform" description="Learn from anywhere" />
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white p-4 shadow-md flex flex-col items-center text-center">
      <div className='flex flex-row gap-3 p-4'>
        <div className="mb-2">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-black text-base md:text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;