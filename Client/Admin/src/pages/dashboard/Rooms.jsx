import React, { useState, useEffect } from 'react';
import axios, { DELETE_ROOM_BY_ID_URL, GET_ALL_ROOMS_URL } from '@/api/axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  Button,
} from "@material-tailwind/react";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch room data from the backend
    const fetchRooms = async () => {
      try {
        const response = await axios.get(GET_ALL_ROOMS_URL);
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleDelete = async (roomId) => {
    // Show confirmation dialog with SweetAlert before deleting
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Make a delete request to your backend endpoint to remove the room
          await axios.delete(`${DELETE_ROOM_BY_ID_URL}/${roomId}`);
          // Filter out the deleted room from the current state
          setRooms(rooms.filter((room) => room._id !== roomId));
          
          // Show success message with SweetAlert upon successful deletion
          Swal.fire({
            title: 'Deleted!',
            text: 'Your room has been deleted.',
            icon: 'success'
          });
        } catch (error) {
          console.error('Error deleting room:', error);
          // Show error message with SweetAlert if deletion fails
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete the room.',
            icon: 'error'
          });
        }
      }
    });
  };

  return (
    <>
    <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
      <div className="absolute inset-0 h-full w-full bg-gray-900/75">
        <div className="flex h-full items-center justify-center">
          <p className="text-4xl font-bold text-white">Room Management</p>
        </div>
      </div>
    </div>
    <div className="mb-8 flex flex-col gap-12">
    <div className="container mx-auto px-4  mt-2">
        <Link to={`/dashboard/rooms/add-new`} className="block md:inline-block mt-4 md:mt-6">
          <Button className="mb-3 md:mb-0 md:mr-3" color='green' >
            Add New Room
          </Button>
        </Link>
        <div className="-mx-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Room Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Availability</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Facilities</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Persons</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rooms.map((room) => (
                <tr key={room._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <img className="rounded-full w-20 h-20" src={room.image} alt="image description" />
                        <div className="ml-4">{room.roomType}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{room.availability ? 'Available' : 'Not Available'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{room.facilities}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{room.persons}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{room.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button onClick={() => handleDelete(room._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded md:mr-2" color='red'>
                      
                      Delete
                    </Button>
                    <Link to={`/dashboard/rooms/update/${room._id}`}>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0" color='blue'>
                        Edit
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </>
  );
};

export default Rooms;
