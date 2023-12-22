import React, { useEffect } from "react";
import Comrades from "../components/Comrades.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Knowledge from "../components/Knowledge.jsx";
import Midheading from "../components/Midheading.jsx";
import Navbar from "../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios, { USER_PROTECTED_URL } from "../api/axios.js";

const Landing = () => {
  /* const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      navigate("/sign-in");
      return;
    }

    const validateToken = async () => {
      try {
        const res = await axios.get(USER_PROTECTED_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.statusText) throw new Error("Not Authorized");
      } catch (error) {
        console.error(error);
        navigate("/sign-in");
      }
    };

    validateToken();
  }, [navigate]); */
  
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
