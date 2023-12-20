import React from "react";

const Midheading = () => {
  return (
    <div className="max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between">
      <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
        Reservation
      </p>
      <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
        Rooms
      </p>
      <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
        Food Menu
      </p>
      <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
       <a href="#comrades">Special Offers</a> 
      </p>
      <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
        Staff
      </p>
    </div>
  );
};

export default Midheading;
