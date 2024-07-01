import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Scrolltext from "@/components/Scrolltext";
import Rooms from "@/components/Rooms";
import Events from "@/components/Events";
import Restaurant from "@/components/Restaurant";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Scrolltext />
      <Rooms />
      <hr className="pt-5" />
      <Events />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default page;
