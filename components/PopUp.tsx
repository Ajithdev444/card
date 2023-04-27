import React, { useState } from "react";

const PopUp = () => {
  const [close, setClose] = useState(true);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        {close && (
          <div className="bg-white p-2 rounded-md">
            <div className="p-6 flex relative">
              <div className="">Form</div>
              <div
                className="absolute text-xl right-4 top-4 cursor-pointer"
                onClick={() => {
                  setClose(false);
                }}
              >
                X
              </div>
            </div>
            <input placeholder="Name" className="px-6 py-2" />
            <input placeholder="Paragraph" className="px-6 py-2" />
            <input placeholder="Date" className="px-6 py-2" />
            <button className="px-6 py-2">Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUp;
