import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center bg-blue-600 text-white px-8 py-4 shadow-md">
      <h1 className="text-xl font-bold">Job Management System</h1>
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 font-medium px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
