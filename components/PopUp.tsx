import React, { useState } from "react";
import { Form } from "reactstrap";
import { NextPage } from "next";

const PopUp = () => {
  const [close, setClose] = useState(true);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ name, review }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <form className="w-[600px] flex flex-col">
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
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="px-6 py-2"
            />
            <label>Review</label>
            <input
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Review"
              className="px-6 py-2"
            />
            <button type="submit" onClick={submitComment} className="px-6 py-2">
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default PopUp;
