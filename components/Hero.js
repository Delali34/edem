"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Hero image */}
      <Image
        src="/edemhotel.jpeg"
        layout="fill"
        objectFit="cover"
        alt="Edem Hotel"
        quality={100}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-hero tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to Edem Hotel
          </motion.h1>
          <motion.p
            className="mt-6 text-xl sm:text-2xl md:text-3xl text-white font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A Haven of{" "}
            <span className="text-yellow-400 font-semibold">Peace</span> in the{" "}
            <span className="text-yellow-400 font-semibold">Heart</span> of
            Ghana
          </motion.p>
        </motion.div>

        <motion.button
          className="mt-8 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/ContactUs"></Link>
          Book Now
        </motion.button>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-yellow-400 opacity-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-yellow-400 opacity-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      ></motion.div>
    </div>
  );
};

export default Hero;
