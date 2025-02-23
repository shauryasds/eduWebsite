import React, { useState } from 'react';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'; // Example icons from react-icons
import WhatsAppButton from './WhatsAppButton';

function DemoForm() {
  const totalSlots = 4; // Total fields available
  const [filledSlots, setFilledSlots] = useState(0); // Number of filled fields
  const [formData, setFormData] = useState({
    studentName: '',
    subject: '',
    mobileNumber: '',
    email: '',
  });

  // Calculate the width of the progress bar
  const progressBarWidth = (filledSlots / totalSlots) * 100;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Count non-empty fields
    const filledCount = Object.values({ ...formData, [name]: value }).filter(Boolean).length;
    setFilledSlots(filledCount);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const form = e.target;

    // Check if all required fields are filled
    if (form.checkValidity()) {
      // Reset form data and filled slots
      setFormData({
        studentName: '',
        subject: '',
        mobileNumber: '',
        email: '',
      });
      setFilledSlots(0); // Reset filled slots
    }
  };

  return (
    <div className="relative py-16" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 text-center">Few Slots Left for Demo Classes!</h3>
            <div className="bg-gray-200 h-2 rounded-full mb-6">
              <div className="bg-blue-500 h-full" style={{ width: `${progressBarWidth}%` }} />
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2">Student Name *</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Student Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">What you want to learn? *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select</option>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Parent's Mobile Number (WhatsApp) *</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Parent's Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Email Address"
                  required
                />
              </div>
              <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
            </form>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center mb-6 h-[40%] w-[40%]">
              <FaUserGraduate className="text-4xl h-full w-full text-blue-500" />
            </div>
            <h3 className="text-3xl text-blue-900 font-bold text-center mb-6">All you need to know for Online Class</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mt-1" />
                <p>Make sure you have all the necessary devices required for live classes - 
                  <strong>Laptop/PC</strong> (with good quality <strong>Webcam and Headphone</strong>), 
                  Hi-speed <strong>Internet connection (Broadband/JioFi WiFi</strong> is recommended).</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mt-1" />
                <p>If you are using <strong>Mobile/Tab</strong> to attend the class, keep enabled 
                  <strong>Screen Rotation</strong> and watch in <strong>Landscape Mode</strong>.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mt-1" />
                <p>Sit relax and choose a place where no one disturbs or no disturbance from surroundings during class.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 right-0'>
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default DemoForm;