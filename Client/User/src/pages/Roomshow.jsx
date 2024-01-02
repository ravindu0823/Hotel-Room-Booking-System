import Rooms from "./rooms";

import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Midheading from "../components/Midheading.jsx";
import Navbar from "../components/Navbar.jsx";



const Roomshow = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Midheading />
      <Rooms/>
      <Contact />    
     <Footer />
    </div>
  );
};

export default Roomshow;
