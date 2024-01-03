import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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

function FoodDetails() {
  const [food, setFoods] = useState(null);
  const { id } = useParams();
  const [backgroundImages, setBackgroundImages] = useState([
    "https://img.freepik.com/premium-vector/restaurant-mural-wallpaper_23-2148685950.jpg?w=1380", // Add your image URLs here
    "https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148703851.jpg?w=1060&t=st=1704154021~exp=1704154621~hmac=d12dd462625f7f7bc5ca199e9cb49cab3db9d7e2156bd0bcfef6d0d8401857f6",
    "https://wallpaperaccess.com/full/6169319.jpg",
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/foods/${id}`);
        setFoods(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching food:", error);
      }
    };

    fetchFood();
  }, [id]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 3 seconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [backgroundImages]);
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      {backgroundImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-${index} transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${imageUrl}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}
      <div className="flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 py-10 flex relative mt-10 mb-20 bg-white bg-opacity-60 rounded-lg border border-gray-900 hover:scale-105">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <h1 className="ont-bebas-neue uppercase text-4xl sm:text-7xl font-black flex flex-col leading-none dark:text-dark text-gray-800">
              Order My
              <span className="text-4xl sm:text-6xl"> </span>
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
                        d="M2,14 L22,14 L22,14 C22,18.9705627 17.9705627,23 13,23 L11,23 C6.02943725,23 2,18.9705627 2,14 Z"
                        clipRule="evenodd"
                      />
                      <path d="M16.7233675,1.41763641 C17.1846056,1.68393238 17.3426375,2.27371529 17.0763415,2.73495343 C17.070507,2.74505905 17.0644896,2.75505793 17.0582922,2.76494514 L10.5379559,13.1673758 C10.3897629,13.4038004 10.08104,13.4805452 9.83939289,13.3410302 C9.59774579,13.2015152 9.50984729,12.8957809 9.64050046,12.6492297 L15.3891015,1.80123745 C15.6384827,1.33063867 16.2221417,1.15130634 16.6927405,1.40068748 C16.7030512,1.40615136 16.7132619,1.41180193 16.7233675,1.41763641 Z M21.8768598,4.21665558 C22.2332333,4.61244851 22.2012776,5.22219993 21.8054847,5.57857348 C21.796813,5.58638154 21.7880002,5.59403156 21.7790508,5.60151976 L12.3633147,13.4799245 C12.1493155,13.6589835 11.8319871,13.6365715 11.6452796,13.4292118 C11.458572,13.221852 11.4694527,12.9039193 11.6698998,12.7098092 L20.4893582,4.16917098 C20.8719568,3.79866796 21.4824663,3.80847334 21.8529693,4.19107192 C21.8610869,4.19945456 21.8690517,4.20798385 21.8768598,4.21665558 Z" />
                    </svg>
                  </span>
                </Tooltip>
              </div>
            </CardBody>
          </div>
        </div>
        FoodDetails
      </div>
    </div>
  );
}

export default FoodDetails;
