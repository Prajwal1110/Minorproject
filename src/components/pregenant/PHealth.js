import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import pregnancyData from './pregnancyData'; // Assuming you have pregnancy data imported from a separate file

const PHealth = () => {
  const [currentWeek, setCurrentWeek] = useState(1);

  const handlePrevWeek = () => {
    if (currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  const handleNextWeek = () => {
    if (currentWeek < pregnancyData.length) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  const weekData = pregnancyData.find((week) => week.week === currentWeek);

  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <LeftSidebar />
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{weekData ? `Week ${weekData.week}` : 'Loading...'}</h2>
              <span>({weekData ? `${40 - weekData.week} weeks behind` : ''})</span>
            </div>
            <div className="bg-gray-200 p-4 rounded-full mb-4 flex justify-center items-center">
              {/* Placeholder for baby illustration */}
              {weekData ? (
                <img
                  src={weekData.images.baby}
                  alt={`Week ${weekData.week} Baby`}
                  className="w-32 h-32"
                />
              ) : (
                <span>Baby loading...</span>
              )}
            </div>
            <div className="text-center mb-4">
              <p>{weekData ? 'We\'ll happily wait for you' : 'Loading...'}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                KNOW MORE
              </button>
            </div>
          </div>
          <div className="bg-gray-200 p-4">
            <h3 className="font-semibold mb-2">Weekly Reads</h3>
            {weekData ? (
              <>
                <div className="mb-4">
                  <h4 className="font-semibold">{weekData.weeklyReads[0]}</h4>
                  <p className="text-sm">{weekData.weeklyReads[1]}</p>
                  <span className="text-xs text-gray-600">2 mins read</span>
                </div>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="flex justify-around bg-gray-300 p-2 text-sm">
            <button onClick={handlePrevWeek} className="cursor-pointer">Prev</button>
            <button onClick={handleNextWeek} className="cursor-pointer">Next</button>
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default PHealth;
