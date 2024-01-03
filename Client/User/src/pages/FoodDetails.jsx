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
  return (
    <div>FoodDetails</div>
  )
}

export default FoodDetails