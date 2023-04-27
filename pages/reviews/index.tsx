import React, { useState } from "react";
import search from "../../public/search1.svg";
import share from "../../public/share1.png";
import Image from "next/image";
import PopUp from "@/components/PopUp";

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
          <div className="bg-[#2E2C41] rounded-md relative px-5 py-8 mt-20">
            <div className="flex">
              <div className="w-10 h-10 bg-[#D46D68] text-[#E1E0E2] flex justify-center items-center rounded-full">
                J
              </div>
              <div className="text-[#E1E0E2] ml-4 flex justify-center items-center">
                Jesse Hopkins
              </div>

              <div className="flex absolute top-8 right-4">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <p className="text-[#E1E0E2] text-xs pt-4 pb-6 tracking-wide">
              Gorgeous design! Even more responsive than
              <br />
              the previous version. A pleasure to use!
            </p>
            <div className="flex relative rounded-md">
              <div className="text-[#6b696d] text-xs">Feb 13,2021</div>
              <div className="absolute right-0 flex gap-2 outline outline-[#1D1C2C] outline-1 hover:outline-[#8783f4] p-1 cursor-pointer">
                <Image src={share} alt="upload" className="w-4 h-4" />
                <button className="text-[#6b696d] text-xs">Share</button>
              </div>
            </div>
          </div>
          <div className="bg-[#2E2C41] rounded-md relative px-5 py-8 mt-2">
            <div className="flex">
              <div className="w-10 h-10 bg-[#D3AB66] text-[#E1E0E2] flex justify-center items-center rounded-full">
                A
              </div>
              <div className="text-[#E1E0E2] ml-4 flex justify-center items-center">
                Alice Banks
              </div>

              <div className="flex absolute top-8 right-4">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <p className="text-[#E1E0E2] text-xs pt-4 pb-6 tracking-wide">
              The device has a clean design, and the metal
              <br />
              housing feels study in my hands.Soft rounded
              <br />
              corners make it a pleasure yo look at.
            </p>
            <div className="flex relative rounded-md">
              <div className="text-[#6b696d] text-xs">Feb 13,2021</div>
              <div className="absolute right-0 flex gap-2 outline outline-[#1D1C2C] outline-1 hover:outline-[#8783f4] p-1 cursor-pointer">
                <Image src={share} alt="upload" className="w-4 h-4" />
                <button className="text-[#6b696d] text-xs ">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup ? <PopUp /> : null}
    </div>
  );
};

export default index;
