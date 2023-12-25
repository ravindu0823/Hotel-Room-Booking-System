// // UpdateRoom.js

// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const UpdateRoom = () => {
//   const { id } = useParams(); // Get the room ID from the URL

//   useEffect(() => {
//     // Fetch room details based on the ID (you can perform an API call here)
//     // For example:
//     // fetchRoomDetails(id);
//     console.log('Room ID:', id); // Log the ID to the console
//   }, [id]);

//   return (
//     <div>
//       <h2>Update Room</h2>
//       {/* Your update room form or details display can go here */}
//     </div>
//   );
// };

// export default UpdateRoom;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios, { GET_ROOM_BY_ID_URL, UPDATE_ROOM_BY_ID_URL } from '@/api/axios';
import Swal from 'sweetalert2';


const UpdateRoom= () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [roomType, setRoomType] = useState('');
    const [availability, setAvailability] = useState(0);
    const [facilities, setFacilities] = useState([]);
    const [persons, setPersons] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const response = await axios.get(`${GET_ROOM_BY_ID_URL}/${id}`);
                setRoom(response.data);
                setRoomType(response.data.roomType);
                setAvailability(response.data.availability);
                setFacilities(response.data.facilities);
                setPersons(response.data.persons);
                setPrice(response.data.price);
            } catch (error) {
                setError('Failed to fetch room data.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoom();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`${UPDATE_ROOM_BY_ID_URL}/${id}`, {
                roomType: roomType,
                availability: availability,
                facilities: facilities,
                persons: persons,
                price: price,
            });
            // Display success message
            Swal.fire('Success', 'Room updated successfully!', 'success');
        } catch (error) {
            setError('Failed to update the room.');
            console.error(error);
            // Display error message
            Swal.fire('Error', 'Failed to update the room.', 'error');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!room) {
        return <div>Room not found</div>;
    }

    return (
      
      <div className="min-h-screen bg-blue-gray-50/50">
  
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75">
            <div className="flex h-full items-center justify-center">
              <p className="text-4xl font-bold text-white">
                Update Rooms
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-xl shadow-md">
        

{/* Room Type Dropdown */}
<div className="mb-4">
  <label htmlFor="roomType" className="block text-sm font-medium text-gray-600">
    New Room Type:
  </label>
  <select
    id="roomType"
    value={roomType}
    onChange={(e) => setRoomType(e.target.value)}
    className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  >
    <option value="luxury_single">Luxury Single</option>
    <option value="luxury_double">Luxury Double</option>
    <option value="normal_single">Normal Single</option>
    <option value="normal_double">Normal Double</option>
  </select>
</div>

{/* Availability Dropdown */}
<div className="mb-4">
  <label htmlFor="availability" className="block text-sm font-medium text-gray-600">
    New Availability:
  </label>
  <select
    id="availability"
    value={availability}
    onChange={(e) => setAvailability(e.target.value)}
    className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  >
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>
</div>

        <div className="mb-4">
          <label htmlFor="facilities" className="block text-sm font-medium text-gray-600">
            facilities:
          </label>
          <input
            type="text"
            id="facilities"
            value={facilities}
            onChange={(e) => setFacilities(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="persons" className="block text-sm font-medium text-gray-600">
            persons:
          </label>
          <input
            type="numbers"
            id="persons"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600">
            price:
          </label>
          <input
            type="numbers"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>


        <button
          className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleUpdate}
        >
          Update Room Details
        </button>
      </div>
    </div>
      </div>
    

    );
};

export default UpdateRoom;
