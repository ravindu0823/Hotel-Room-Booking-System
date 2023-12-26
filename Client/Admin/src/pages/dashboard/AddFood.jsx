import React, { Component } from 'react';
import axios, { CREATE_NEW_FOOD_URL } from '@/api/axios';
import Swal from 'sweetalert2';

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      foodCategory: 'Vegi', // Default value
      foodType: 'Breakfast', // Default value
      price: '',
      persons: '',
      spicinessLevel: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  

  validateFields = () => {
    const { foodName, foodCategory, foodType, price, persons, spicinessLevel } = this.state;

    if (!foodName || !foodCategory || !foodType || !price || !persons || !spicinessLevel) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
      });
      return false;
    }

    return true;
  };

  onSubmit = async (e) => {
    e.preventDefault();

    if (!this.validateFields()) {
      return; // Prevent submission if fields are not valid
    }

    try {
      const { foodName, foodCategory, foodType, price, persons, spicinessLevel } = this.state;
      const response = await axios.post(CREATE_NEW_FOOD_URL, {
        foodName,
        foodCategory,
        foodType,
        price: parseFloat(price),
        persons: parseInt(persons),
        spicinessLevel,
      });

      console.log(response.data);

      // Clear the form after successful submission
      this.setState({
        foodName: '',
        foodCategory: 'Vegi', // Reset to default
        foodType: 'Breakfast', // Reset to default
        price: '',
        persons: '',
        spicinessLevel: '',
      });

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Food item added successfully!',
      });
    } catch (error) {
      console.error('Error:', error);
      // Display error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  render() {
    const { foodName, foodCategory, foodType, price, persons, spicinessLevel } = this.state;

    return (
      <div>
        
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75">
            <div className="flex h-full items-center justify-center">
              <p className="text-4xl font-bold text-white">Add new Room</p>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-12 flex flex-col gap-12">
          <div className="container mx-auto p-4">
           
            <form className="max-w-md mx-auto border border-gray-500 rounded-md p-4">
              <div className="mb-4 ">
                <label htmlFor="foodType" className="block text-sm font-medium text-gray-600">foodType</label>
                <select
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="foodType"
                  name="foodType"
                  value={this.state.foodType}
                  onChange={this.handleInputChange}
                >
                  <option value="">Select Food Category</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="Non-vegetarian">Non-vegetarian</option>

                </select>
              </div>
              <div className="mb-4 ">
                <label htmlFor="foodCategory" className="block text-sm font-medium text-gray-600">Food Category</label>
                <select
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="foodCategory"
                  name="foodCategory"
                  value={this.state.foodCategory}
                  onChange={this.handleInputChange}
                >
                  <option value="">Select Food Type</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>

                </select>
              </div>
              {/* Other form elements */}
              <div className="mb-4">
                <label htmlFor="foodNameInput" className="block text-sm font-medium text-gray-600">Name of New Food</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="foodNameInput"
                  name="foodName"
                  value={this.state.foodName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="personsInput" className="block text-sm font-medium text-gray-600 ">Potion</label>
                <input
                  type="number"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="personsInput"
                  name="persons"
                  value={this.state.persons}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="priceInput" className="block text-sm font-medium text-gray-600">Price</label>
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="priceInput"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="spicinessLevel" className="block text-sm font-medium text-gray-600">Size of Meal</label>
                <select
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="fspicinessLevel"
                  name="spicinessLevel"
                  value={this.state.spicinessLevel}
                  onChange={this.handleInputChange}
                >
                  <option value="">Select Food Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="">Larger</option>

                </select>
              </div>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md w-full" onClick={this.onSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddFood;
