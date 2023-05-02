import Image from "next/image";
import React from "react";
import img1 from "../../public/girl2.jpg";
import SongsComponent from "@/components/SongsComponent";

const index = () => {
  return (
    <div>
      <div className="flex justify-center items-center max-w-screen-xl mx-auto min-h-screen bg-[#E36A7D]">
        <div>
          <div className="mb-12">
            <h1 className="text-white text-2xl font-bold">
              TOP 10 MOST LISTENED SONGS
            </h1>
            <h3 className="text-gray-300">in the past week</h3>
          </div>
          <SongsComponent />
        </div>
      </div>
    </div>
  );
};

export default index;
