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
    <>
      <div>
        {room ? (
          <div className=" mx-8 mt-16 border border-gray-300 rounded-lg overflow-hidden bg-blue-100">
            <section className="text-gray-700 body-font overflow-hidden bg-white">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/4 mx-auto ml-auto flex flex-wrap">
                  <img
                    className="w-180 h-80 object-cover rounded-xl border border-gray-200"
                    src={room.imageSrc}
                    alt={room.name}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      Select Your Room Today
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {room.name}
                    </h1>
                    <div className="flex mb-4">{/* SVG Icons */}</div>
                    <p className="text-sm title-font text-gray-500 tracking-widest">
                      {room.description}
                    </p>{" "}
                    {/*Room Discription Bind Here */}
                    <p className="leading-relaxed">
                      facilities: {room.facilities}
                    </p>{" "}
                    {/*Room Facilities Bind Here */}
                    <p className="leading-relaxed">
                      persons: {room.persons}
                    </p>{" "}
                    {/*Room persons Bind Here */}
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                    <div className="flex flex-col items-center">
                      <span className="title-font font-medium text-2xl text-gray-900 mb-4 text-left">
                        Price Per Night: {room.price}
                      </span>
                      <div className="flex justify-center">
                        <Link to="/" className="mx-2">
                          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                            Back to Home
                          </button>
                        </Link>
                        <Link to="/room" className="mx-2">
                          <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                            Book Reservation Now!
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div>Room not found</div>
        )}
      </div>
    </>
  );
};

export default RoomDetails;

