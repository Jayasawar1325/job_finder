import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/v1/jobs/list`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(res.data.jobs);
      console.log(res.data)
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch jobs');
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [token]);

  const handleDelete = async (jobId) => {
    try {
        const response = await axios.post(`${backendUrl}/api/v1/jobs/remove`, { _id: jobId }, { headers: { Authorization: `Bearer ${token}` } })
  
        if (response.data.success) {
          toast.success(response.data.message)
          await fetchJobs()
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error.message)
      }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Job Listings</h2>
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs added yet.</p>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="flex items-center justify-between border p-4 rounded-md shadow-sm bg-gray-50 hover:shadow-md transition"
            >
              <div className="flex items-center">
                {job.companyLogo && (
                  <img
                    src={job.companyLogo}
                    alt="logo"
                    className="h-16 w-16 object-contain rounded mr-4 border"
                  />
                )}
                <div>
                  <h3 className="text-lg font-bold text-gray-700">{job.companyName}</h3>
                  <p className="text-sm text-gray-500">{job.category} | {job.jobType}</p>
                  <p className="text-sm text-gray-500">{job.location} — {job.daysLeft} days left</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(job._id)}
                className="text-red-600 border border-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
