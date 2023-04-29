import ProgressComponent from "@/components/ProgressComponent";
import Image from "next/image";
import React from "react";
import uber1 from "../../public/uber.jpg";
import bosch from "../../public/Bosch1.png";
import addidas from "../../public/addidas.png";

const index = () => {
  return (
    <div className="bg-[#EBEBEB] flex justify-center items-center min-h-screen">
      <div className="max-w-screen-xl mx-auto bg-[#F2F2F2] border border-t-4 border-t-[#c357d7]">
        <div className=" p-4">
          <h1 className="text-[#444584] font-bold mb-2">In progress</h1>
          <ProgressComponent
            src={uber1}
            level="High"
            heading="Prepare structural documentation"
            button1="Development"
            button2="Architecture"
            people="3 people work on this"
            comment="17 comments"
          />
          <ProgressComponent
            src={bosch}
            level="Medium"
            heading="Update requirements list"
            button1="Development"
            button2="Management"
            people="2 people work on this"
            comment="8 comments"
          />
          <ProgressComponent
            src={uber1}
            level="Low"
            heading="New UI for dashboard"
            button1="Development"
            button2="Architecture"
            people="7 people work on this"
            comment="17 comments"
          />
          <ProgressComponent
            src={addidas}
            level="Low"
            heading="Initial landing page concepts"
            button1="Development"
            button2="Architecture"
            people="3 people work on this"
            comment="17 comments"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
