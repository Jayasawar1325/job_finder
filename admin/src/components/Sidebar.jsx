import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
    }`;

  return (
    <aside className="w-[240px] bg-white shadow-md h-screen p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <NavLink to="/add" className={linkClasses}>
          ➕ Add Job
        </NavLink>
        <NavLink to="/list" className={linkClasses}>
          📋 Job List
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
