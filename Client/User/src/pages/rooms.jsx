import React, { useEffect, useState } from 'react';
import RoomCard from '../components/roomcard';
import axios from 'axios'; // Import axios for making HTTP requests

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
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
