import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Added 'Link' import
import axios from "axios";
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
const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/rooms/${id}`);
        setRoom(response.data);

        // Print room data to the console
        console.log("Room Data:", response.data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRoomData();
  }, [id]);
  // Simulating four smaller images

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };``

  // Your room data in Database
  


  return (
   <></>
  );
};

export default RoomDetails;

