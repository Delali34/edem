"use client";
import React from "react";
import Image from "next/image";

const Restaurant = () => {
  return (
    <div className="mt-20">
      <div className="parallax relative">
        {/* hero image */}
        <Image
          src="/food.jpg"
          layout="fill"
          objectFit="cover"
          alt="edemhotel"
          className="w-full h-[900px]"
        />

        {/* black background on hero image */}
        <div className="inset-0 bg-black opacity-70 top-0 right-0 bottom-0 left-0 h-[900px] absolute"></div>
        {/* text on hero image */}
        <div className="absolute top-[5%] right-0 bottom-0 left-0 px-5">
          <h1 className="text-center lg:text-4xl text-xl font-bold text-white font-hero">
            Edem Hotel Restaurant
          </h1>
          <div className=" text-center mt-5 flex items-center justify-center">
            <h1 className="bg-yellow-500 w-[100px] font-hero font-bold">
              Menu
            </h1>
          </div>
          <div>
            <h1 className="text-center pt-5  text-xl font-bold text-yellow-500">
              Special Fufu
            </h1>
            <p className="text-center text-white">Fufu and Grasscutter soup</p>
            <p className="text-center text-white">Fufu and Groundnut soup</p>
          </div>
          <div>
            <h1 className="text-center pt-5  text-xl font-bold text-yellow-500">
              Charming Rice
            </h1>
            <p className="text-center text-white">
              Jollof rice and Grilled chicken
            </p>
            <p className="text-center text-white">
              Steamed rice and Grilled groper
            </p>
            <p className="text-center text-white">
              Vegetable rice and Grilled Chicken
            </p>
          </div>
          <div>
            <h1 className="text-center pt-5  text-xl font-bold text-yellow-500">
              Special Banku
            </h1>
            <p className="text-center text-white">Banku and Grilled Tilapia</p>
            <p className="text-center text-white">Banku and Fresh okro soup</p>
          </div>
          <div>
            <h1 className="text-center pt-5  text-xl font-bold text-yellow-500">
              Hot Akle
            </h1>

            <p className="text-center text-white">
              Akple and Fresh Tilapia soup
            </p>
          </div>
          <div>
            <h1 className="text-center pt-5  text-xl font-bold text-yellow-500">
              Extras
            </h1>

            <p className="text-center text-white">Ampesi and palava sauce</p>
          </div>
          <div>
            <h1 className="text-center pt-5  text-xl font-bold text-yellow-500">
              Sandwich
            </h1>

            <p className="text-center text-white">Beef burger and chips</p>
            <p className="text-center text-white">Fried yam and chicken wigs</p>
            <p className="text-center text-white">Pizza</p>
          </div>
          <div>
            <h1 className="text-center pt-5  text-xl font-bold text-yellow-500">
              Dessert
            </h1>

            <p className="text-center text-white">Ice cream</p>
            <p className="text-center text-white">Fruit salad</p>
            <p className="text-center text-white">Pancake</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
