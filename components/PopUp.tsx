import { NextPage } from "next";
import React, { useState } from "react";
import ReviewComponent from "./ReviewComponent";

interface Props {
  handleSubmit: (name: string, review: string) => void;
}

const PopUp = (props: Props) => {
  const { handleSubmit } = props;

  const [close, setClose] = useState(true);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

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
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              className="px-5 py-2"
            />
            <label>Review</label>
            <input
              id="review"
              type="text"
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
              }}
              placeholder="Review"
              className="px-5 py-2"
            />
            <button
              type="button"
              className="px-5 py-2"
              onClick={() => {
                handleSubmit(name, review);
                setClose(false);
              }}
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default PopUp;
