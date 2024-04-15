import React, { useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Outlet, useNavigate } from "react-router-dom";
// import useOtherUsers from '../hooks/useOtherUsers';
// import { useSelector } from "react-redux";
// import useGetMyTweets from '../hooks/useGetMyTweets';
// import "../assets/4124024-uhd_4096_2160_25fps.mp4"

const PHome = () => {
  //   const { user, otherUsers } = useSelector(store => store.user);
  //   const navigate = useNavigate();

  //   useEffect(()=>{
  //     if (!user) {
  //       navigate("/login");
  //     }
  //   },[]);
  // custom Hook
  //   useOtherUsers(user?._id);
  //   useGetMyTweets(user?._id);

  return (

    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar />
      <div className="flex flex-col items-center justify-center min-h-screen w-[80%] bg-gray-200 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {/* User Profile Section */}
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-gray-300 h-16 w-16"></div>
          <div>
            <h2 className="text-xl font-semibold">Prajwal Mutnal</h2>
            <p>Pregnancy Week 37</p>
          </div>
        </div>

        {/* Banner Section */}
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <p className="text-center text-sm">Womb Care Basic Program Not Active</p>
        </div>

        {/* Diet Plan Card */}
        <div className="mt-4 bg-blue-100 p-4 rounded-lg">
          <h3 className="font-semibold">Unlock This Week’s Free Diet Plan</h3>
          <p className="text-sm">Help Us Customize It</p>
        </div>

        {/* Activities Section */}
        <div className="mt-4">
          <h3 className="font-semibold">Today's Garbha Sanskar Activities</h3>
          <p className="text-sm">Day 264 - 0/4 activities completed</p>
          {/* Activity Cards */}
          <div className="mt-2">
            {/* Placeholder for activity 1 */}
            <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg">
              <div className="rounded-full bg-gray-300 h-10 w-10"></div>
              <div>
                <h4 className="font-semibold">Tara and the cuckoo clock</h4>
                <p className="text-xs">Stories - 11 min</p>
              </div>
            </div>
            {/* Placeholder for activity 2 */}
            <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg mt-2">
              <div className="rounded-full bg-gray-300 h-10 w-10"></div>
              <div>
                <h4 className="font-semibold">Talk to baby III - 37 Weeks</h4>
                <p className="text-xs">Talk to baby - 3:02 min</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex justify-around items-center mt-4">
          <span className="text-gray-600">Home</span>
          <span className="text-gray-600">Health</span>
          <span className="text-gray-600">Program</span>
          <span className="text-gray-600">Ask Doctor</span>
        </div>
      </div>
    </div>

      <RightSidebar />
    </div>
  )
}

export default PHome



