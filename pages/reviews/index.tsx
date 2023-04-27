import React, { useState } from "react";
import search from "../../public/search1.svg";

import Image from "next/image";
import PopUp from "@/components/PopUp";
import { comments } from "../../data/comments.json";
import ReviewComponent from "@/components/ReviewComponent";

const index = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="bg-[#1D1C2C] flex justify-center items-center min-h-screen py-20">
      <div className="max-w-screen-xl mx-auto bg-[#221F32]">
        <div className="p-12 max-w-md relative">
          <div className="mb-10 flex relative">
            <h1 className="text-base font-bold text-[#E1E0E2]">Reviews</h1>
            <button
              className="text-base font-bold text-[#E1E0E2] absolute right-0 top-0 rounded-md outline outline-[#1D1C2C]
             outline-1 hover:outline-[#8783f4] px-2 py-1"
              onClick={() => {
                setShowPopup(true);
              }}
            >
              Add
            </button>
          </div>

          <div className="relative">
            <Image
              src={search}
              alt="search"
              className="absolute top-3 left-4"
            />
            <input
              type="text"
              placeholder="Search reviews"
              className="bg-[#252637] text-[#6b696d] outline outline-[#6b696d] hover:outline-[#8783f4] outline-offset-2 outline-1 px-14 py-4 text-sm w-full rounded-md"
            />
          </div>

          <div className="flex gap-2 mt-10 flex-wrap">
            <button className="text-[#6b696d] text-xs px-4 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Experience
            </button>
            <button className="text-[#6b696d] text-xs px-4 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Quality
            </button>
            <button className="text-[#6b696d] text-xs px-4 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Design
            </button>
            <button className="text-[#6b696d] text-xs px-4 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Size
            </button>
            <button className="text-[#6b696d] text-xs px-4 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Features
            </button>
            <button className="text-[#6b696d] text-xs px-4 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Value
            </button>
            <button className="text-[#6b696d] text-xs px-4 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Replacement
            </button>
          </div>

          <ReviewComponent
            names="Jesse Hopkins"
            reviews="Georges design! Even more responsive than the previous version.A pleasure to use"
          />
        </div>
      </div>
      {showPopup ? <PopUp /> : null}
    </div>
  );
};

export default index;
