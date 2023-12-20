import React from "react";
import Comrades from "../components/Comrades.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Knowledge from "../components/Knowledge.jsx";
import Midheading from "../components/Midheading.jsx";
import Navbar from "../components/Navbar.jsx";
import Toil from "../components/Toil.jsx";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Midheading />
      <Knowledge />
      <Comrades />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
