import React from 'react';

function Poster() {
  return (
    <div className="w-full p-8 bg-blue-200 h-auto flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg">
      <div className="flex flex-col justify-center mb-4 md:mb-0">
        <h2 className="text-xl md:text-2xl text-black font-extrabold mb-2">IHS Tutoring</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Grade 1 to 5</h3>
        <h3 className="text-lg text-blue-600 flex flex-wrap">
          <span className="text-black pr-2 py-1 mr-2 border-r-4 border-orange-600 rounded">Science</span>
          <span className="text-black px-2 py-1 mr-2 border-r-4 border-orange-600 rounded">Math</span>
          <span className="text-black px-2 py-1">English</span>
        </h3>
        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Enroll Now
        </button>
      </div>
      <div className="flex-shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
          alt="Student with backpack"
          className="w-full md:w-[200px] h-auto md:h-[200px] object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default Poster;