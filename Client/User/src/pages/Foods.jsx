import React, { useEffect } from "react";
import FoodCard from "../components/FoodCard";
import axios from "axios";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:3000/foods/read"); // Replace with your actual API endpoint for food
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };
    fetchFoods();
  }, []);
  return (
    <div>
        <div className="flex flex-wrap justify-center">
            
        </div>
    </div>
  );
};

export default Foods;
