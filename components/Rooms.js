"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EdemRooms = [
  {
    room: "/Room1.jpeg",
    name: "Royal Suite",
    price: 300,
    benefits:
      "AC, water heater, TV, fan, Queen bed size, Balcony, Breakfast for one",
  },
  {
    room: "/Room2.jpeg",
    name: "Executive Room",
    price: 250,
    benefits: "AC, water heater, TV, fan, Queen bed size, Breakfast for one",
  },
  {
    room: "/Room3.jpeg",
    name: "Deluxe Room",
    price: 200,
    benefits: "Water heater, TV, fan, Queen bed size, Breakfast for one",
  },
  {
    room: "/Room4.jpeg",
    name: "Standard Room",
    price: 150,
    benefits: "TV, fan, Double bed, Breakfast for one",
  },
];

const Rooms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-700 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-serif text-center mb-4 text-amber-100"
        >
          Exquisite Accommodations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-center mb-16 text-amber-200"
        >
          Indulge in unparalleled luxury and comfort
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EdemRooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl hover:shadow-amber-200/20 transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={room.room}
                  alt={room.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-amber-100">
                  {room.name}
                </h3>
                <p className="text-amber-200 mb-4 text-sm">{room.benefits}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-amber-100">
                    GHC {room.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
