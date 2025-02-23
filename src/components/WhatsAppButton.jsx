import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
const WhatsAppButton = () => {
  return (
   <div className='h-20 w-52 opacity-90'>
     <a
      href="https://wa.me/1234567890"
       className="flex items-center bg-green-500 text-white py-2 px-4 rounded shadow-lg hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className='text-white font-thin'>WhatsApp us !!</span>
      <FaWhatsapp className="w-6 h-6 mr-2" />
    </a>
   </div>
  );
};

export default WhatsAppButton;