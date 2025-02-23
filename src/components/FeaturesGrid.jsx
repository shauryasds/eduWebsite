import React from 'react';
import { FaBook, FaVideo, FaClock, FaUsers, FaFlask, FaComments, FaGraduationCap } from 'react-icons/fa';
import FeatureCard from './FeatureCard'; // Adjust the import path as necessary

function FeaturesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto px-4 max-w-[80vw]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
          <FeatureCard icon={<FaBook className="w-8 h-8" />} title="Mapped to Grade-wise Syllabus" bgColor="bg-blue-50" />
          <FeatureCard icon={<FaVideo className="w-8 h-8" />} title="Live Interactive Sessions" bgColor="bg-blue-50" />
          <FeatureCard icon={<FaClock className="w-8 h-8" />} title="Flexible Batch Timings" bgColor="bg-blue-50" />
          <FeatureCard icon={<FaUsers className="w-8 h-8" />} title="Doubt Resolution & Support" bgColor="bg-blue-50" />
          <FeatureCard icon={<FaFlask className="w-8 h-8" />} title="Regular Practice, Tests & Assessments" bgColor="bg-blue-50" />
          <FeatureCard icon={<FaComments className="w-8 h-8" />} title="Parent-Teacher Meetings" bgColor="bg-blue-50" />
          <FeatureCard icon={<FaGraduationCap className="w-8 h-8" />} title="Year-Long Support" bgColor="bg-blue-50" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;