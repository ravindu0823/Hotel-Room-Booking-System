import React from "react";

const Hero = () => {
  return (
    <div id="#" className="w-full h-screen">
      <img
        className="w-full h-screen top-0 left-0 bottom-0 right-0 object-cover"
        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero pic"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
  <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
    <p className="text-lg text-slate-200">Welcome to Your Next Getaway&nbsp;.</p>
    <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl hover:text-[gold] ease-in duration-200">
      Discover Your Perfect Stay&nbsp;.
    </h1>
    <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl font-inter">
      Explore our exquisite selection of rooms and suites designed to make your stay unforgettable. Whether it's a luxurious suite or a cozy room with a view, find your ideal accommodation with us.
    </p>
    <button className="bg-white text-black hover:bg-transparent hover:text-white hover:scale-105 ease-in duration-300">
      Book Your Stay&nbsp;.
    </button>
  </div>
</div>

    </div>
  );
};

export default Hero;
