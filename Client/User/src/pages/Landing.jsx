import { useContext, useEffect } from "react";
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
import { SignInContext } from "../contexts/SignInContext.js";

const Landing = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(SignInContext);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      setLoggedIn(false);
    }

    const validateToken = async () => {
      try {
        const res = await axios.get(USER_PROTECTED_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.statusText) {
          setLoggedIn(false);
          // throw new Error("Not Authorized");
        }

        setLoggedIn(true);
      } catch (error) {
        console.error(error);
        setLoggedIn(false);
      }
    };

    validateToken();
  }, [navigate, setLoggedIn]);

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
