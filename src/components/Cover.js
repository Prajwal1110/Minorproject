




import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";



const Cover = () => {
   const navigate=useNavigate();


   const handlelogin=()=>
   {
        navigate("/login")
   }
    return (
        <div class="flex justify-center items-center h-screen">
            <div class="max-w-md p-6 bg-white shadow-md rounded-md">
                {/* <!-- Company logo and text --> */}
                <div class="flex items-center justify-center mb-4">
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/charity-and-donation-12/66/27_human_welfare_social_welfare_temporal_welfare_social_care_social_protection_welfare-256.png"
                        alt="Company Logo"
                        class="h-16 mr-2"
                    />
                    <h1 class="text-4xl font-bold">We Care</h1>
                </div>
                {/* <!-- Pregnancy and Motherhood sections --> */}
                <div class="flex justify-between">
                    {/* <!-- Pregnancy section --> */}
                    <div class="flex flex-col items-center w-1/2 bg-orange-300 py-4 rounded-md ml-4">
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/raising-children-outline/512/0_Pregnant-256.png"
                            alt="Pregnancy Image"
                            class="w-full mb-2 mx-4"
                        />

                        <p class="text-2xl font-bold">I'm pregnant</p>
                        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full" 
                       onClick={handlelogin} >
                            Next
                        </button>
                    </div>

                    {/* <!-- Motherhood section --> */}
                    <div class="flex flex-col items-center w-1/2  bg-cyan-200 py-4 rounded-md ml-4">
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/baby-care-4/64/Icon_baby_care_mother_love_hug-512.png"
                            alt="Motherhood Image"
                            class="w-full mb-2 mx-4"
                        />
                        <p class="text-2xl font-bold">I'm Mother</p>
                        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full " onClick={handlelogin}    >
                            Next    
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
