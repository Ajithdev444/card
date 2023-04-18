import Image from "next/image";
import React from "react";
import { NextPage } from "next";

interface Props {
  heading2: string;
  para1: string;
  src: any;
}

const MindComponent: NextPage<Props> = (props) => {
  const { heading2, para1, src } = props;
  return (
    <div>
      <div
        className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-white p-5 md:p-10 rounded-md 
      hover:scale-105 duration-300 hover:shadow-xl cursor-pointer"
      >
        <div className="bg-gray-100 rounded-full p-2 shrink-0">
          <Image src={src} alt="img" className="w-12 h-12 rounded-full" />
        </div>
        <div>
          <span className="inline-flex items-center">
            <span className="text-lg font-bold mb-2">{heading2}</span>
          </span>

          <p className="text-sm font-medium text-[#8b8b8f]">{para1}</p>
        </div>
      </div>
    </div>
  );
};

export default MindComponent;
