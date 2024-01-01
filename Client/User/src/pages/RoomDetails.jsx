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
                  <Tooltip content="Free wifi">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                    </span>
                  </Tooltip>
                  <Tooltip content="HDTV">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M19.5 6h-15v9h15V6z" />
                        <path
                          fillRule="evenodd"
                          d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                  <Tooltip content="Fire alert">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Tooltip>
                  <Tooltip content="And +20 more">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      +20
                    </span>
                  </Tooltip>
              </div>
              </CardBody>
              <div className="">
                {room && (
                  <>
                    <p className="dark:text-dark text-gray-800 mb-4 text-xl font-bebas-neue font-bold">
                      {room.description}
                    </p>
                    <p className="dark:text-dark text-gray-800 mb-2 text-xl font-bebas-neue font-bold">
                      Facilities: {room.facilities}
                    </p>
                    <p className="dark:text-dark text-gray-800 text-xl mb-2 font-bebas-neue font-bold">
                      Persons: {room.persons}
                    </p>
                    <p className="dark:text-dark text-gray-800 text-xl mb-2 font-bebas-neue font-bold">
                      Price: {room.price} $ Per One Night
                    </p>
                    <p className="dark:text-dark text-gray-800 text-xl mb-2 font-bebas-neue font-bold">
                      Availability of Room: {room.availability} Avalible
                    </p>
                  </>
                )}
              </div>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-4 border-black text-black dark:text-dark text-bold hover:bg-black hover:text-white text-md"
                >
                  Book My Room
                </a>
              </div>
            </div>

            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative mx-10">
              {room && room.image && (
                <img
                  src={room.image}
                  style={{ width: "100%", height: "auto" }}
                  className="m-auto rounded-lg shadow-lg mt-10 hover:scale-15"
                  alt="Room visual representation"
                />
              )}
            </div>
            <div>
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              ></Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </Typography>
            </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default RoomDetails;
