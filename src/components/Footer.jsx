import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import WhatsAppButton from './WhatsAppButton';

const Footer = () => {
  return (
    <footer className="bg-green-100 p-6">
      <div className="container relative mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">

          {/* Left Column */}
          <div className="text-gray-700 mb-4 md:mb-0">
            <h2 className="text-xl font-extrabold">Company Name</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-700 hover:text-white hover:border hover:border-green-700 rounded p-1 transition">
                <FaFacebook className="inline h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-white hover:border hover:border-green-700 rounded p-1 transition">
                <FaInstagram className="inline h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-white hover:border hover:border-green-700 rounded p-1 transition">
                <FaLinkedin className="inline h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-white hover:border hover:border-green-700 rounded p-1 transition">
                <FaTwitter className="inline h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-white hover:border hover:border-green-700 rounded p-1 transition">
                <FaYoutube className="inline h-5 w-5" />
              </a>
              <a href="#" className="text-gray-700 hover:text-white hover:border hover:border-green-700 rounded p-1 transition">
                <FaWhatsapp className="inline h-5 w-5" />
              </a>
            </div>
            <div className="pl-4 mt-4">
      <div className="flex flex-col md:flex-row  justify-center mt-2">
        <a href="mailto:xyz@xyz.com" className="text-gray-700 font-extrabold hover:bg-green-600 hover:text-white flex items-center">
          <FaEnvelope className="mr-2" /> 
          xyz@xyz.com
        <span className="mx-4">|</span>
        </a>
        <a href="tel:+911234567890" className="text-gray-700 font-extrabold hover:bg-green-600 hover:text-white flex items-center">
          <FaPhoneAlt className="mr-2" />
          +91 1234567890
        </a>
      </div>
    </div>
          </div>
        </div>

        {/* Additional Service Information Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-gray-700">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Book Free Demo Class</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Become a Teacher</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Terms of Use</a></li>
            </ul>
          </div>
          <div className="text-gray-700">
            <h3 className="text-lg font-semibold">Online Tuition Classes</h3>
            <ul>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Math Tuition For Class 6</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Math Tuition For Class 7</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Math Tuition For Class 8</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Math Tuition For Class 9</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Math Tuition For Class 10</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Physics Tuition For Class 11</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Math Tuition For Class 11</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Chemistry Tuition For Class 11</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Physics Tuition For Class 12</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Math Tuition For Class 12</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Chemistry Tuition For Class 12</a></li>
            </ul>
          </div>

          <div className="text-gray-700">
            <h3 className="text-lg font-semibold">Online Coding Courses For Kids</h3>
            <ul>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Scratch Programming Course</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Web Development Course</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Python Programming Course</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">India Learning Code</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Online Chess Classes for Kids</a></li>
            </ul>
          </div>

          <div className="text-gray-700">
            <h3 className="text-lg font-semibold">Free Skill Workshops</h3>
            <ul>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">How to start learning code, Coding Path</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">How to start learning designing, Design Path</a></li>
              <li><a href="#" className="hover:bg-green-600 hover:text-white">Mental Math</a></li>
            </ul>
          </div>
        </div>
        
        <div className='absolute bottom-0 right-0'>
          <WhatsAppButton />
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="text-center text-gray-700">
        <p>All rights reserved © Tuitionpad</p>
      </div>
    </footer>
  );
};

export default Footer;
