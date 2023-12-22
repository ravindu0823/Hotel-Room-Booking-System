import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import { Input } from "@material-tailwind/react";

class Addroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomType: '',
      facilities: '',
      persons: '',
      price: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validateFields = () => {
    const { roomType, facilities, persons, price } = this.state;

    if (!roomType || !facilities || !persons || !price) {
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

    const { roomType, facilities, persons, price } = this.state;

    try {
      const response = await axios.post('http://localhost:3000/rooms/new', {
        roomType,
        availability: true,
        facilities,
        persons: parseInt(persons, 10), // Specify radix for parseInt
        price: parseFloat(price),
      });

      console.log(response.data);

      // Clear the form after successful submission
      this.setState({
        roomType: '',
        facilities: '',
        persons: '',
        price: '',
      });

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Room created successfully!',
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
                <label htmlFor="roomTypeInput" className="block text-sm font-medium text-gray-600">Room Type</label>
                <select
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="roomTypeInput"
                  name="roomType"
                  value={this.state.roomType}
                  onChange={this.handleInputChange}
                >
                  <option value="">Select Room Type</option>
                  <option value="Luxury Single">Luxury Single</option>
                  <option value="Normal Single">Normal Single</option>
                  <option value="Luxury Double">Luxury Double</option>
                  <option value="Normal Double">Normal Double</option>
                </select>
              </div>
              {/* Other form elements */}
              <div className="mb-4">
                <label htmlFor="facilitiesInput" className="block text-sm font-medium text-gray-600">Facilities (comma-separated)</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="facilitiesInput"
                  name="facilities"
                  value={this.state.facilities}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="personsInput" className="block text-sm font-medium text-gray-600 ">Number of Persons</label>
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
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md w-full" onClick={this.onSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Addroom;
