import { useState } from "react";
import { Link } from "react-router-dom";
import RoomCard from "./roomcard";

const Midheading = () => {
  const [showRoom, setShowRoom] = useState(false); // State to manage visibility

  // Function to toggle RoomCard visibility
  const toggleRoom = () => {
    setShowRoom(!showRoom);
  };

  return (
    <div className="max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between">
      {/* <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
        Reservation
      </p> */}
      <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
      <Link to="/rooms">Our Room Facilty</Link>
      </p>
      <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
      <Link to="/foodshow">Our Food Items</Link>
      </p>
     
      <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
        <a href="#comrades">Special Offers</a>
      </p>
      {/* <p className="text-lg font-medium hover:underline underline-offset-4 decoration-2 decoration-[dimgray]">
        Staff

      </p> */}
      {showRoom && <RoomCard />} {/* Conditionally render RoomCard based on state */}

    </div>
  );
};

export default Midheading;
