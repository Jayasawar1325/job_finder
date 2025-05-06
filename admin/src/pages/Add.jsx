import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';

const categories = [
  "UI/UX Designer", "Graphics Designer", "Frontend Developer", "Backend Developer",
  "Full Stack Developer", "Java Developer", "Junior QA", "React Developer",
  "Product Manager", "Data Analyst", "Digital Marketing Specialist"
];

const types = [
  "Full Time", "Part Time", "Internship", "Freelance", "Remote",
  "Contract", "Temporary", "Volunteer", "Hybrid"
];
const hardcodedToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTc0NjQ1ODE2NywiZXhwIjoxNzQ3MDYyOTY3fQ.6NJ03Bvnb0BQnJ33czN9XwxPV0fpmNwpYeZ7P1Jy-eE'
const Add = ({ token }) => {
  const [formData, setFormData] = useState({
    category: '',
    companyName: '',
    location: '',
    daysLeft: '',
    jobType: '',
  });

  const [logoFile, setLogoFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setLogoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('category', formData.category);
      data.append('companyName', formData.companyName);
      data.append('location', formData.location);
      data.append('daysLeft', formData.daysLeft);
      data.append('jobType', formData.jobType);
      if (logoFile) data.append('companyLogo', logoFile);

      const res = await axios.post(`${backendUrl}/api/v1/jobs/add`, data, {
        headers: {
          'Authorization': `Bearer ${hardcodedToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data)

      toast.success('Job added successfully!');
      setFormData({
        category: '',
        companyName: '',
        location: '',
        daysLeft: '',
        jobType: '',
      });
      setLogoFile(null);
    } catch (err) {
      console.error(err);
      toast.error('Failed to add job');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Add New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-600">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Company Logo</label>
          <input
            type="file"
            name="companyLogo"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-600">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Days Left</label>
          <input
            type="number"
            name="daysLeft"
            value={formData.daysLeft}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Job Type</option>
            {types.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default Add;
