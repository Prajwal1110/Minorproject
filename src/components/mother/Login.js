import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const MotherLogin = () => {
  // const {user,loginWithRedirect}=useAuth0();

  // console.log("Current User",user);

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Perform login
      const user = {
        email,
        password,
      };
      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successful");
      // You can perform additional login logic here, like sending a request to your backend
    } else {
      // Perform registration
      const newUser = {
        name,
        username,
        email,
        password,
      };
      navigate("/mother/home")
      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(newUser));
      setIsLogin(true);
      toast.success("Registration successful");
      // You can perform additional registration logic here, like sending a request to your backend
    }
  };

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);

  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[50%]">
        <div>
          <h2 className="text-3xl font-bold mt-4">One last thing!</h2>
          <p className="text-md mt-2">This is it. Nothing more!</p>
          <img
            className="ml-5"
            width={"250px"}
            src="https://cdn3.iconfinder.com/data/icons/baby-care-4/64/Icon_baby_care_mother_love_hug-512.png"
            alt="twitter-logo"
          />
        </div>
        <div>
          {/* <div className='my-5'>
            <h1 className='font-bold text-6xl'>Happening now.</h1>
          </div> */}
          <h1 className="mt-4 mb-2 text-2xl font-bold">
            {isLogin ? "Login" : "Singup"}
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col w-[100%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                />
                <input
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  id="babyName"
                  type="text"
                  placeholder="Baby's Name"
                />
                <input
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  id="babyDob"
                  type="date"
                  placeholder="Baby's Date of Birth"
                />
              </>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full md:w-75 outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
            />
            <button className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white">
              {isLogin ? "Login" : "Create Account"}
            </button>
            <h1>
              {isLogin ? "Do not have an account?" : "Already have an account?"}{" "}
              <span
                onClick={loginSignupHandler}
                className="font-bold text-blue-600 cursor-pointer"
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MotherLogin;
