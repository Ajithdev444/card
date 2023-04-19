import Image from "next/image";
import React from "react";
import girl1 from "../../public/girl1.jpg";
import girl2 from "../../public/girl2.jpg";
import girl3 from "../../public/girl3.jpg";
import close from "../../public/icons8-close.svg";

const index = () => {
  return (
    <div className="bg-[#302D40] min-h-screen flex justify-center items-center">
      <div className="flex flex-col max-w-screen-xl mx-auto">
        <div className="flex bg-[#FF6A6B] p-4 rounded-tl-md rounded-tr-md text-white">
          <div className="rounded-full p-1 bg-gray-200 shrink-0 z-50">
            <Image src={girl1} alt="girl1" className="w-10 h-10 rounded-full" />
          </div>
          <div className="rounded-full p-1 bg-gray-200 shrink-0 z-40">
            <Image src={girl2} alt="girl1" className="w-10 h-10 rounded-full" />
          </div>
          <div className="rounded-full p-1 bg-gray-200 shrink-0 z-50">
            <Image src={girl3} alt="girl1" className="w-10 h-10 rounded-full" />
          </div>

          <div className="ml-2">
            <h1 className="text-sm font-semibold">Elnora, Leila, Lucinda</h1>
            <h2 className="text-xs">We typically reply in a few minutes </h2>
          </div>
        </div>
        <div className="flex bg-[#282739] p-10 gap-4 h-96">
          <div className="rounded-full p-1 bg-gray-200 shrink-0 h-fit">
            <Image src={girl2} alt="girl2" className="rounded-full w-10 h-10" />
          </div>

          <div className="text-white text-[10px] leading-4 p-4 bg-[#3A384D] rounded-md h-fit">
            Hi there!
            <br />
            Looking to get started? i can help
            <br /> answer to your questions!
          </div>
        </div>
        <div className="p-8 bg-[#3A384D] rounded-bl-md rounded-br-md">
          <p className="text-white">
            By using the chat, I confirm that I have read the{" "}
            <span className="underline text-[#FF6A6B] cursor-pointer">
              privacy
              <br /> policy
            </span>
            and do not object to the use of my personal data.
          </p>
          <button className="text-[#FF6A6B] border border-[#FF6A6B] px-8 py-3 rounded-full mt-4">
            I agree
          </button>
        </div>
        <div className="flex justify-end">
          <div className="rounded-full bg-[#FF6A6B]  w-fit p-4 mt-6">
            <Image src={close} alt="close" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
