import React from "react";

const index = () => {
  return (
    <div className="bg-[#1D1C2C] flex justify-center items-center min-h-screen">
      <div className="max-w-screen-xl mx-auto bg-[#221F32]">
        <div className="p-12 max-w-xl">
          <h1 className="text-xl font-bold text-[#E1E0E2] mb-14">Reviews</h1>
          <input
            type="text"
            placeholder="Search reviews"
            className="bg-[#252637] border px-16 py-6 text-lg w-full"
          />
          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="text-[#E1E0E2] text-sm px-6 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Experience
            </button>
            <button className="text-[#E1E0E2] text-sm px-6 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Quality
            </button>
            <button className="text-[#E1E0E2] text-sm px-6 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Design
            </button>
            <button className="text-[#E1E0E2] text-sm px-6 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Size
            </button>
            <button className="text-[#E1E0E2] text-sm px-6 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Features
            </button>
            <button className="text-[#E1E0E2] text-sm px-6 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Value
            </button>
            <button className="text-[#E1E0E2] text-sm px-6 py-3 rounded-md bg-[#1D1C2C] hover:bg-[#8783f4] hover:text-white">
              Replacement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
