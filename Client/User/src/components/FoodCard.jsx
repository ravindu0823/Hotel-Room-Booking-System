import React from 'react'
import axios, { GET_ALL_FOOD_URL } from "../api/axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
const FoodCard = ({ food }) => {
  const [image2, setFoods] = useState([]);
  useEffect(() => {
    const fetchFoodImage = async () => {
      try {
        // Assuming you have an endpoint for fetching food images
        const response = await axios.get(GET_ALL_FOOD_URL);
        setFoods(response.data.imageURL);
      } catch (error) {
        console.error("Error fetching food image:", error);
      }
    };

    fetchFoodImage();
  }, [food._id]);
  return (
    <div>FoodCard</div>
  )
}

export default FoodCard