import React from 'react';
import { Link } from 'react-router-dom';
const EmotionalDevelopmentScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-600 text-white p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Maa your emotions shape my personality</h1>
        <p className="text-lg mt-2">Do you want to give me more positive qualities?</p>
        {/* Placeholder for embryo illustration */}
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
        <div className="flex justify-center gap-4">
          <Link to="/pregenant/question3" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            YES
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            YES, OF COURSE!
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmotionalDevelopmentScreen;
