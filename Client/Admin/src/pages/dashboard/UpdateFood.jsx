import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [foodName, setFoodName] = useState('');
  const [foodCategory, setFoodCategory] = useState('');
  const [foodType, setFoodType] = useState('');
  const [price, setPrice] = useState(0);
  const [persons, setPersons] = useState(0);
  const [spicinessLevel, setSpicinessLevel] = useState('');

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/foods/${id}`);
        setFood(response.data);
        setFoodName(response.data.foodName);
        setFoodCategory(response.data.foodCategory);
        setFoodType(response.data.foodType);
        setPrice(response.data.price);
        setPersons(response.data.persons);
        setSpicinessLevel(response.data.spicinessLevel);
      } catch (error) {
        setError('Failed to fetch food data.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/foods/${id}`, {
        foodName: foodName,
        foodCategory: foodCategory,
        foodType: foodType,
        price: price,
        persons: persons,
        spicinessLevel: spicinessLevel,
      });
      // Display success message
      Swal.fire('Success', 'Food item updated successfully!', 'success');
    } catch (error) {
      setError('Failed to update the food item.');
      console.error(error);
      // Display error message
      Swal.fire('Error', 'Failed to update the food item.', 'error');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!food) {
    return <div>Food item not found</div>;
  }

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">Update Food</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-xl shadow-md">
        <div className="mb-4">
                <label htmlFor="foodNameInput" className="block text-sm font-medium text-gray-600">Food Name</label>
                <input
        type="text"
        className="mt-1 p-2 block w-full border rounded-md border-gray-500"
        id="foodNameInput"
        name="foodName"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
      />
      </div>
          <div className="flex flex-col">
            <label htmlFor="foodCategory" className="flex flex-col">
              Food Category
            </label>
            <select
              id="foodCategory"
              value={foodCategory}
              onChange={(e) => setFoodCategory(e.target.value)}
              className="mt-1 p-2 border border-gray-700 rounded-md focus:outline-none"
            >
              <option value="Vegi">Vegi</option>
              <option value="NON-Vegi">NON-vegi</option>
              {/* Add other options as needed */}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="foodType" className="text-gray-600">
              Food Type
            </label>
            <select
              id="foodType"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              className="mt-1 p-2 border border-gray-700 rounded-md focus:outline-none"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              {/* Add other options as needed */}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-600">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 border border-gray-700 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="persons" className="text-gray-600">
              Persons
            </label>
            <input
              type="number"
              id="persons"
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              className="mt-1 p-2 border border-gray-700 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="spicinessLevel" className="text-gray-600">
              Spiciness Level
            </label>
            <input
              type="text"
              id="spicinessLevel"
              value={spicinessLevel}
              onChange={(e) => setSpicinessLevel(e.target.value)}
              className="mt-1 p-2 border border-gray-700 rounded-md focus:outline-none"
            />
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none w-full"
            onClick={handleUpdate}
          >
            Update Food Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
