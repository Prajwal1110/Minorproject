import React from 'react';
import { Link } from 'react-router-dom';
const NutritionScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">What you eat today, defines my future health</h1>
        <p className="text-lg mt-2">Are you eating well, mumma?</p>
        {/* Placeholder for fetus illustration */}
        <div className="my-4">
          <svg
            className="mx-auto h-32 w-32 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Replace with actual SVG or image */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c2.28 0 4-1.79 4-4s-1.72-4-4-4-4 1.79-4 4 1.72 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <Link to="/pregenant/question4" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            YES I AM
          </Link>
          <Link to="/pregenant/question4" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            I'M NOT SURE
          </Link>
        </div>
        <div className="bg-orange-500 p-4 rounded-lg">
          <p className="text-lg">
            Don't worry Mumma, iMumz gives you weekly meal plans for my good growth.
          </p>
          <Link to="/pregenant/question4" className="bg-white text-orange-500 font-bold py-2 px-4 rounded-full mt-4">
            CONTINUE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NutritionScreen;
