import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/collections");
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center text-white w-full"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", // replace with your image path
      }}
    >
      <div className="bg-transparent bg-opacity-60 p-8 rounded-xl text-center w-full mx-auto">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Get your <span className="text-green-400">Dream Jobs</span> Instantly
          <br />
          Start Working for <span className="text-green-400">Yourself!</span>
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Work with the best job platform from around the world on our secure,
          flexible and cost-effective platform
        </p>

        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="What skills are you searching for?"
            disabled
            className="px-4 py-3 w-full max-w-md rounded-l-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none disabled:opacity-50"
          />
          <button
            onClick={handleSearchClick}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-r-lg"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
