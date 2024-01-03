import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Midheading from "../components/Midheading";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Foodshow = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Midheading />
      {/* <Foodshow /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Foodshow;
