import React, { useState, useEffect } from "react";
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
    <div className="flex flex-wrap gap-6">
      <Card className="w-full max-w-full max-w-[26rem] shadow-lg mb-6 m-4">
        <CardHeader floated={false} color="blue-gray">
          <Link to={`/foods/${food._id}`}>
            <img
              className="rounded-t-lg"
              src={food.image}
              alt={food.foodName}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </Link>
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between"></div>
        </CardBody>
        Hello foods
      </Card>
    </div>
  );
};

export default FoodCard;
