"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const menuSections = [
  {
    title: "Special Fufu",
    items: ["Fufu and Grasscutter soup", "Fufu and Groundnut soup"],
  },
  {
    title: "Charming Rice",
    items: [
      "Jollof rice and Grilled chicken",
      "Steamed rice and Grilled groper",
      "Vegetable rice and Grilled Chicken",
    ],
  },
  {
    title: "Special Banku",
    items: ["Banku and Grilled Tilapia", "Banku and Fresh okro soup"],
  },
  {
    title: "Hot Akle",
    items: ["Akple and Fresh Tilapia soup"],
  },
  {
    title: "Extras",
    items: ["Ampesi and palava sauce"],
  },
  {
    title: "Sandwich",
    items: ["Beef burger and chips", "Fried yam and chicken wigs", "Pizza"],
  },
  {
    title: "Dessert",
    items: ["Ice cream", "Fruit salad", "Pancake"],
  },
];

const Restaurant = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-screen">
        <Image
          src="/food.jpg"
          layout="fill"
          objectFit="cover"
          alt="edemhotel"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center font-hero mb-4"
          >
            Edem Hotel Restaurant
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-yellow-500 px-6 py-2 rounded-full"
          >
            <h2 className="text-2xl font-bold font-hero">Our Menu</h2>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
