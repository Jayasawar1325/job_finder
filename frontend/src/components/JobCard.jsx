import React from 'react';
import { MapPin, Clock, Briefcase } from 'lucide-react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <img src={job.companyLogo} alt={`${job.companyName} logo`} className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{job.category}</h3>
          <p className="text-sm text-gray-600">{job.companyName}</p>
          
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{job.location}</span>
            </div>
            
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              <span>{job.daysLeft} days left</span>
            </div>
            
            <div className="flex items-center text-xs text-gray-500">
              <Briefcase className="w-3 h-3 mr-1" />
              <span>{job.jobType}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="bg-orange-600 text-white text-sm px-4 py-1 rounded hover:bg-orange-700 transition">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobCard;