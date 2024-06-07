import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        {/* hero image */}
        <Image
          src="/edemhotel.jpeg"
          width={1000}
          height={1000}
          alt="edemhotel"
          className="object-cover w-full h-[700px]"
        />
        {/* black background on hero image */}
        <div className="inset-0 bg-black opacity-50 top-0 right-0 bottom-0 left-0 h-[700px] absolute"></div>
        {/* text on hero image */}
        <div className="absolute top-[45%] right-0 bottom-0 left-0 px-5">
          <h1 className="text-center lg:text-6xl text-3xl font-bold text-white font-hero">
            Welcome to Edem Hotel
          </h1>
          <p className="text-center text-white pt-5 lg:text-3xl text-xl">
            A Haven of <span className="text-yellow-500 font-bold">Peace</span>{" "}
            in the <span className="text-yellow-500 font-bold">Heart</span> of
            Ghana
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
