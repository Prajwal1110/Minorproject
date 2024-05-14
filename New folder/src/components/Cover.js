import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const Cover = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20  min-h-screen flex flex-col justify-between">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get The Best Pregnancy Care</h1>
          <h2 className="text-2xl text-gray-800 mb-8">with iMumz</h2>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-600">
            Explore Now
          </button>
        </div>

        <footer className="bg-orange-400 py-8">
          <div className="container mx-auto flex flex-wrap justify-between">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h3 className="text-gray-800 font-semibold text-lg mb-4">Our Workshops</h3>
              <p className="text-gray-800">iMumz Premium Programs</p>
            </div>
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h3 className="text-gray-800 font-semibold text-lg mb-4">iMumz Premium Programs</h3>
              <p className="text-gray-800">iMumz Premium Programs</p>
            </div>
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h3 className="text-gray-800 font-semibold text-lg mb-4">iMumz in Shark Tank</h3>
              <p className="text-gray-800">iMumz in Shark Tank</p>
            </div>
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <h3 className="text-gray-800 font-semibold text-lg mb-4">iMumz Community</h3>
              <p className="text-gray-800">iMumz Community</p>
            </div>
          </div>

          <div className="container mx-auto mt-4">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-800 font-semibold">Average rating</p>
                <p className="text-gray-800">4.8</p>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Happy Mothers (on IOS & Google Play)</p>
                <p className="text-gray-800">1.1M+</p>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Minutes of Garbh Sanskar activities recorded</p>
                <p className="text-gray-800">30M+</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Footer/>
    </>
  );
}

export default Cover;
