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
  };

  // Your room data in Database
  


  return (
   <>
   <div
   className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
   style={{
     backgroundImage:
       'url("https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
   }}
 > 
 </div> 
 </>
  );
};

export default RoomDetails;

