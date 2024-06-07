import React from "react";
import Image from "next/image";
import { HiBars2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-10">
      <section className="max-w-7xl mx-auto flex justify-between py-5 px-5 items-center">
        <div>
          <Image
            src="/edemhotel.png"
            width={50}
            height={50}
            alt="Edemhotel logo"
          />
        </div>
        <div className="lg:flex space-x-5 hidden">
          <h2 className="cursor-pointer hover:text-yellow-500 hover:-mt-[0.5px] duration-75">
            Home
          </h2>
          <h2 className="cursor-pointer hover:text-yellow-500  hover:-mt-[0.5px] duration-75">
            About us
          </h2>
          <h2 className="cursor-pointer hover:text-yellow-500  hover:-mt-[0.5px] duration-75">
            Services
          </h2>
          <h2 className="cursor-pointer hover:text-yellow-500  hover:-mt-[0.5px] duration-75">
            Gallery
          </h2>
        </div>
        <div className="bg-yellow-500 py-3 lg:block hidden px-6 hover:bg-black hover:text-white duration-100 cursor-pointer rounded-3xl">
          Contact us
        </div>
        {/* mobile section */}
        <div className="lg:hidden block">
          <HiBars2 className="text-3xl" />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
