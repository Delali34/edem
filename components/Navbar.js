"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { title: "Home", delay: 0.1, href: "/" },

    { title: "Rooms", delay: 0.2, href: "/#Rooms" },
    { title: "Restaurant", delay: 0.3, href: "/#Restaurant" },
  ];

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.3, ease: "easeOut" },
    }),
  };

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
          {menuItems.map((item) => (
            <Link key={item.title} href={item.href}>
              <h2 className="cursor-pointer hover:text-yellow-500 hover:-mt-[0.5px] duration-75">
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
        <Link href="/ContactUs" className="lg:block hidden">
          <div className="bg-yellow-500 py-3 px-6 hover:bg-black hover:text-white duration-100 cursor-pointer rounded-3xl">
            Contact us
          </div>
        </Link>
        {/* mobile section */}
        <div className="lg:hidden block">
          <button onClick={toggleMobileMenu}>
            <HiBars2 className="text-3xl" />
          </button>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-yellow-50 to-white shadow-lg z-30"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-8 flex flex-col h-full">
              <button onClick={toggleMobileMenu} className="self-end mb-8">
                <IoMdClose className="text-3xl text-yellow-600 hover:text-yellow-800 transition-colors duration-300" />
              </button>
              <div className="flex flex-col space-y-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={toggleMobileMenu}
                  >
                    <motion.h2
                      custom={item.delay}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="cursor-pointer text-lg font-semibold text-yellow-800 hover:text-yellow-600 transition-colors duration-300"
                    >
                      {item.title}
                    </motion.h2>
                  </Link>
                ))}
              </div>
              <motion.div
                className="mt-auto"
                custom={0.5}
                variants={itemVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Link href="/ContactUs" onClick={toggleMobileMenu}>
                  <button className="w-full bg-yellow-500 py-3 px-6 hover:bg-yellow-600 text-white duration-300 cursor-pointer rounded-full text-center font-semibold shadow-md hover:shadow-lg transition-all">
                    Contact us
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
