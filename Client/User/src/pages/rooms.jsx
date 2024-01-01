// MainComponent.js
import React from 'react';
import RoomCard from '../components/roomcard';
import Navbar from '../components/Navbar'; // Import your Navbar component



 
 

const Rooms = () => {
  return (
    <div>     
      <div className="flex flex-wrap justify-center">
        {room.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
