import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Midheading from "../components/Midheading";
import Foods from "./Foods.jsx";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Foodshow = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Midheading />
      <Foods />
      <Contact />
      <Footer />
    </div>
  );
};

export default Foodshow;
