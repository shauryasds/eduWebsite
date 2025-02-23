import React from 'react';

function FeatureCard({ icon, title, bgColor }) {
  return (
    <div className={`${bgColor} relative p-6 rounded-3xl w-full text-center`}>
      <div className="border-blue-400 border-2 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center p-3 rounded-full bg-white mb-4">
        {icon}
      </div>
      <h3 className="text-wrap text-sm font-semibold text-center py-6">{title}</h3>
    </div>
  );
}

export default FeatureCard;