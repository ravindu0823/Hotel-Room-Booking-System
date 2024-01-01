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
              <div className="mb-3 flex items-left mt-10 justify-between">
              <Tooltip content="And +20 more">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                          clipRule="evenodd"
                        />
                        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                      </svg>
                    </span>
                  </Tooltip>
              </div>
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
