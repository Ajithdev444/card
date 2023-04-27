import React, { useState } from "react";

const PopUp = ({}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        {/* <div className="text-white text-xl place-self-end cursor-pointer">
          X
        </div> */}
        <div className="bg-white p-2 rounded-md">
          <div className="text-white">Form</div>
          <input placeholder="Name" className="px-6 py-2" />
          <input placeholder="Paragraph" className="px-6 py-2" />
          <input placeholder="Date" className="px-6 py-2" />
          <button className="px-6 py-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
