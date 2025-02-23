import React from 'react';
import WhatsAppButton from './WhatsAppButton';

function WelcomeSection() {
  return (
    <div className="bg-purple-100 mt-8 text-blue-950  py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="max-w-xl">
            <h2 className="text-sm mb-2">Welcome to e-Tuitions</h2>
            <h1 className="text-3xl font-bold mb-6">
              Boost <span className="text-orange-500">your grades</span> with
              <br />expert teachers
            </h1>
            <ul className="space-y-3 font-semibold">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>98% of our students show improved confidence in academics</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>Over 5,000+ satisfied parents trust our education programs</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>20K+ students taking online tuitions everyday</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
              alt="Student with backpack"
              className="w-96 h-auto"
            />
          </div>
        </div>
      </div>
      <WhatsAppButton/>
    </div>
  );
}

export default WelcomeSection;