import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl tracking-wide font-oswald z-20 hover:text-[gold] hover:scale-105 ease-in duration-300">
        Ceylon Sea&nbsp;
      </h1>
      <HiMenuAlt3
        onClick={handleNav}
        className="icon z-20 cursor-pointer hover:opacity-60 hover:scale-110 ease-in duration-300"
        size={25}
        color="white"
      />
      <div
        className={
          nav
            ? "fixed ease-in duration-300 text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li
            onClick={() => setNav(false)}
            className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
          >
            <a href="/">Home</a>
          </li>
          <li
            onClick={() => setNav(false)}
            className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
          >
            <a href="#aboutus">About Us</a>
          </li>
          <li
            onClick={() => setNav(false)}
            className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
          >
            <a href="#seek">Contact us</a>
          </li>
          <li
            onClick={() => setNav(false)}
            className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
          >
            <a href="#food">Sign Up</a>
          </li>
          <li
            onClick={() => setNav(false)}
            className="font-bold text-3xl p-8 ease-in duration-300 delay-150"
          >
            <a href="#sign in">Sign in</a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
