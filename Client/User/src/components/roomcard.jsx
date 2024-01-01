
import RoomDetails from '../pages/RoomDetails';
import axios, {GET_ALL_ROOMS_URL } from '../api/axios';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
const RoomCard = ({ room }) => {
  const [rooms, setRooms] = useState([]); // State to store fetched rooms
  useEffect(() => {
    // Fetch room data from the backend
    const fetchRooms = async () => {
      try {
        const response = await axios.get(GET_ALL_ROOMS_URL);
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };
    fetchRooms(); // Call the function to fetch rooms when component mounts
  }, []); // Empty dependency array to execute the effect only once
  const [image2, setImage2] = useState("");
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
      <Link to={`/room/${room.id}`}>
        <img className="rounded-t-lg" src={room.imageSrc} alt={room.name} />
      </Link>
      <div className="p-5">
        <Link to={`/rooms/${room.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {room.name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{room.description}</p>
        <Link
          to={`/rooms/${room.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rpotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
