import React from "react";
import Image from "next/image";

const Events = () => {
  return (
    <div className="mt-10 max-w-7xl lg:flex items-center justify-between mx-auto px-5">
      <div className="shadow-xl flex lg:w-[50%] w-[100%] h-full">
        {/* ground floor card */}
        <div className="lg:w-[50%] w-[100%] ">
          <Image
            src="/ground.jpeg"
            width={1000}
            height={1000}
            alt="Edem hotel ground floor"
            className="h-[350px] rounded-l-sm object-cover"
          />
        </div>
        <div className="lg:w-[50%] w-[100%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-hero">Ground Floor</h1>
          <p>Available for events</p>
        </div>
      </div>
      {/* <div className="shadow-xl flex lg:w-[50%] mt-10 lg:mt-0 w-[100%] h-full">
        <div className="w-[50%] ">
          <Image
            src="/bar.jpg"
            width={1000}
            height={1000}
            alt="Edem hotel ground floor"
            className="h-[350px] rounded-l-sm object-cover"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-hero">Executive bar</h1>
          <p>Available</p>
        </div>
      </div> */}
    </div>
  );
};

export default Events;
