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
        <div className="flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 py-10 flex relative mt-10 mb-20 bg-white bg-opacity-60 rounded-lg border border-gray-900 hover:scale-105">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 ">
            <h1 className="font-bebas-neue uppercase text-4xl sm:text-7xl font-black flex flex-col leading-none dark:text-dark text-gray-800 ">
                Be on
                <span className="text-4xl sm:text-6xl">Time Book Room</span>
              </h1>
              <CardBody>
                
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
