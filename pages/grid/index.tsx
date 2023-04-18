import React from "react";
import Image from "next/image";
import deepscan from "../../public/deepscan.png";
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import movie from "../../public/movie.jpg";
import uber from "../../public/uber.jpg";

const index = () => {
  return (
    <div className="min-h-screen p-10 mx-auto justify-center flex items-center bg-[#C1C0BC]">
      <div className="gap-4 grid-cols-1 grid md:grid-cols-8 bg-white md:grid-rows-5 grid-flow-row-dense p-4 max-h-screen max-w-6xl">
        <Image
          src={img1}
          alt="img1"
          className="col-span-1 row-span-1 h-full w-full object-cover"
        />
        <Image
          src={movie}
          alt="movie"
          className="col-span-1 h-full object-cover"
        />
        <Image
          src={img2}
          alt="img2"
          className="col-span-1 h-full object-cover"
        />
        <Image
          src={deepscan}
          alt="deepscan"
          className="col-span-1 row-span-2 h-full object-cover"
        />
        <Image
          src={img1}
          alt="img1"
          className="col-span-1 h-full object-cover"
        />
        <Image
          src={img2}
          alt="img2"
          className="col-span-2 h-full object-cover "
        />
        <Image
          src={movie}
          alt="movie"
          className="col-span-1 row-span-2 h-full object-cover"
        />

        <Image
          src={img1}
          alt="img1"
          className="col-span-2 h-full object-cover"
        />
        <Image
          src={img2}
          alt="img2"
          className="col-span-1 row-span-2 h-full object-cover"
        />
        <Image
          src={movie}
          alt="movie"
          className="col-span-2 row-span-2 h-full object-cover"
        />
        <Image
          src={deepscan}
          alt="deepscan"
          className="col-span-1 h-full object-cover"
        />
        <Image
          src={img1}
          alt="img1"
          className="col-span-2 row-span-2 h-full object-cover"
        />
        <Image
          src={img2}
          alt="img2"
          className="col-span-2 row-span-4 h-full object-cover "
        />

        <Image
          src={img1}
          alt="img1"
          className="col-span-1 h-full object-cover"
        />
        <Image
          src={img2}
          alt="img2"
          className="col-span-2 row-span-2 h-full object-cover"
        />
        <Image
          src={uber}
          alt="uber"
          className="col-span-1 row-span-2 h-full object-cover"
        />
        <Image
          src={movie}
          alt="movie"
          className="col-span-1 h-full object-cover"
        />
        <Image
          src={img2}
          alt="img2"
          className="col-span-1 h-full object-cover"
        />
        <Image
          src={img1}
          alt="img1"
          className="col-span-1 h-full object-cover"
        />
        <Image
          src={deepscan}
          alt="deepscan"
          className="col-span-1 h-full object-cover"
        />
      </div>
    </div>
  );
};

export default index;
