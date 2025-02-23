


import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const ProgramGlimpses = () => {
  return (
    <div className="bg-yellow-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Programmes <span className="text-red-500">Glimpses</span>
          <div className='border-b-4 border-black w-[20%] mx-auto mt-4'></div>
        </h2>
      <Zoom  scale={1.4}>
        <div className='flex justify-center space-x-4'>
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
            alt="Program 1"
            className="w-[30%] h-48 rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Program 2"
            className="w-[30%] h-48 rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
            alt="Program 3"
            className="w-[30%] h-48 rounded-lg object-cover"
          />
        </div>
        <div className='flex justify-center space-x-4'>
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
            alt="Program 4"
            className="w-[30%] h-48 rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Program 5"
            className="w-[30%] h-48 rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
            alt="Program 6"
            className="w-[30%] h-48 rounded-lg object-cover"
          />
        </div>
        <div className='flex justify-center space-x-4'>
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
            alt="Program 7"
            className="w-[30%] h-48 rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Program 8"
            className="w-[30%] h-48 rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Program 9"
            className="w-[30%] h-48 rounded-lg object-cover"
          />
        </div>
      </Zoom>
    </div>
    </div>
  );
};

export default ProgramGlimpses;