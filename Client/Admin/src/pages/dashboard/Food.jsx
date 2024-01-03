import React, { useState, useEffect } from 'react';
import axios, { DELETE_FOOD_BY_ID_URL, GET_ALL_FOOD_URL } from '@/api/axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(GET_ALL_FOOD_URL);
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoods();
  }, []);

  const handleDelete = async (foodId) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        await axios.delete(`${DELETE_FOOD_BY_ID_URL}/${foodId}`);
        setFoods(foods.filter((food) => food._id !== foodId));

        Swal.fire({
          title: 'Deleted!',
          text: 'Your food item has been deleted.',
          icon: 'success'
        });
      }
    } catch (error) {
      console.error('Error deleting food item:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to delete the food item.',
        icon: 'error'
      });
    }
  };

  const handleEdit = (foodId) => {
    // Implement edit functionality or navigation to the edit page
    // Example: history.push(`/dashboard/foods/update/${foodId}`);
  };

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">Food Management</p>
          </div>
        </div>
      </div>
      <div className="mb-8 flex flex-col gap-12">
      <div className="container mx-auto px-4 py-8">
      <Link to={`/dashboard/foods/add-new`} className="block md:inline-block mb-4">
          <Button className="mb-3 md:mb-0 md:mr-3" color='green' >
            Add New Food Item
          </Button>
        </Link>
        <div className="-mx-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Food Name / Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Persons</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Spiciness Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {foods.map((food) => (
                <tr key={food._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="rounded-full w-20 h-20" src={food.image} alt="image description" />
                        <div className="ml-4">{food.foodName}</div>
                      </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{food.foodCategory}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{food.foodType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{food.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{food.persons}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{food.spicinessLevel}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button onClick={() => handleDelete(food._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded md:mr-2" color='red'>
                      Delete
                    </Button>
                    <Link to={`/dashboard/foods/update/${food._id}`}>
                    <Button onClick={() => handleEdit(food._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0" color='blue'>
                      Edit
                    </Button>
                    </Link>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  );
};

export default Foods;
