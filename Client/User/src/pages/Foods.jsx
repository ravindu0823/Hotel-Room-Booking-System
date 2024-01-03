import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard'; 
import axios from 'axios';

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch food data from the backend
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:3000/foods/read'); // Replace with your actual API endpoint for food
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoods();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
