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
  return( <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
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
    FoodDetails
    </div>
    );
}

export default FoodDetails;
