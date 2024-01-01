import React, { useEffect, useState } from 'react';
import RoomCard from '../components/roomcard';
import axios from 'axios'; // Import axios for making HTTP requests

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    // Fetch room data from the backend
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/rooms/read'); // Replace with your actual API endpoint
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };fetchRooms();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
