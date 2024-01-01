
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
    <>
    <div className="flex flex-wrap gap-6">
    <Card className="w-full max-w-[26rem] shadow-lg mb-6 m-4 ">
    <CardHeader floated={false} color="blue-gray"></CardHeader>
      </Card>
    </div>
    </>
  );
};

export default RoomCard;
