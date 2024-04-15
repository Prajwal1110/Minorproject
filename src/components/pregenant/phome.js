import React, { useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Outlet, useNavigate } from "react-router-dom";
// import useOtherUsers from '../hooks/useOtherUsers';
// import { useSelector } from "react-redux";
// import useGetMyTweets from '../hooks/useGetMyTweets';
// import "../assets/4124024-uhd_4096_2160_25fps.mp4"

const PHome = () => {

  const navigate=useNavigate();

  const handleprofile=()=>{
    navigate("/pregenant/profile")
  }

  return (
    <div className="flex justify-between w-[80%] mx-auto">
  <LeftSidebar />
  <div className="relative bg-white rounded-lg p-4 shadow-lg w-[60%]">
    <div className="relative bg-white rounded-lg p-4 ">
      {/* User Profile Section */}
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-300 h-16 w-16">
          <img on onClick={handleprofile}src="https://cdn0.iconfinder.com/data/icons/stages-of-life-1/496/Pregnant-expecting-baby-maternity-woman-512.png" alt="mother" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Dummy Data</h2>
          <p>Pregnancy Week 37</p>
        </div>
      </div>

      {/* Banner Section */}
      <div className="mt-4 bg-gray-100 p-3 rounded-lg w-[40%] bg-green-300">
        <p className="text-center text-sm">Womb Care Basic Program Not Active</p>
      </div>

      {/* Diet Plan Card */}
      <div className="flex items-center justify-between mt-4 bg-blue-100 p-4 rounded-lg">
        <h3 className="font-bold text-2xl">Unlock This Week’s Free Diet Plan</h3>
        <p className="text-sm">Help Us Customize It</p>
        <img className=" h-16 w-16"src='https://cdn4.iconfinder.com/data/icons/reproductive-health-1/496/pregnant-motherhood-maternity-expecting-woman-512.png'></img>
      </div>

      {/* Activities Section */}
      <div className="mt-4">
        <h3 className="font-semibold text-4xl">Today's Garbha Sanskar Activities</h3>
        <p className="mt-7 text-2xl">Day 264 - 0/4 activities completed</p>
        {/* Activity Cards */}
        <div className="mt-2">
          {/* Placeholder for activity 1 */}
          <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg">
            <img className="rounded-full bg-gray-300 h-20 w-20"src='https://cdn0.iconfinder.com/data/icons/high-school-10/340/music_guitar_instrument_sound_band-512.png'></img>
            {/* <div className="rounded-full bg-gray-300 h-20 w-20"></div> */}
            <div>
              <h4 className="text-2xl font-bold">1. Tara and the cuckoo clock</h4>
              <p className="text-lg f">Stories - 11 min</p>
            </div>
          </div>
          {/* Placeholder for activity 2 */}
          <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg mt-2">
          <img className="rounded-full bg-gray-300 h-20 w-20"src='https://cdn0.iconfinder.com/data/icons/mother-s-day-bzzricon-filled-lines/512/09_Pregnant-256.png'></img>
            <div>
              <h4 className="text-2xl font-bold">2. Talk to baby III - 37 Weeks</h4>
              <p className="text-lg">Talk to baby - 3:02 min</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg mt-2">
          <img className="rounded-full bg-gray-300 h-20 w-20"src='https://cdn4.iconfinder.com/data/icons/self-love-1/512/yoga-meditation-relaxing-exercise-pilates-512.png'></img>
            <div>
              <h4 className="text-2xl font-bold">3.Yoga for trimester 3</h4>
              <p className="text-lg">Yoga - 15 min</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-2 bg-gray-100 rounded-lg mt-2">
          <img className="rounded-full bg-gray-300 h-20 w-20"src='https://cdn1.iconfinder.com/data/icons/teen-problems-highlight/128/fear-nervous-teen-fright-512.png'></img>
            <div>
              <h4 className="text-2xl font-bold">4. Managing Fear and Uncertainity</h4>
              <p className="text-lg">Meditation - 11:30 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <RightSidebar />
</div>
)
}

export default PHome



