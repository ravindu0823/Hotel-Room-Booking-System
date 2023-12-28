import React, { Component } from 'react';
import axios from '@/api/axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import { Input } from "@material-tailwind/react";
import { CREATE_OFFER_URL } from '@/api/axios';

class Addoffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OfferName: '',
      Price: '',
      Description: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validateFields = () => {
    const { OfferName, Price, Description } = this.state;

    if (!OfferName || !Price || !Description ) {
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

    const { OfferName, Price, Description } = this.state;

    try {
      const response = await axios.post(CREATE_OFFER_URL, {
        OfferName, 
        Price: parseFloat(Price),
        Description,
      });

      console.log(response.data);

      // Clear the form after successful submission
      this.setState({
        OfferName: '',
        Price: '',
        Description: '',
      });

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Offer created successfully!',
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
              <p className="text-4xl font-bold text-white">Add Offer</p>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-12 flex flex-col gap-12">
          <div className="container mx-auto p-4">
           
            <form className="max-w-md mx-auto border border-gray-500 rounded-md p-4">
              <div className="mb-4 ">
                <label htmlFor="OfferNameInput" className="block text-sm font-medium text-gray-600">Offer Name</label>
                <select
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="OfferNameInput"
                  name="OfferName"
                  value={this.state.OfferName}
                  onChange={this.handleInputChange}
                >
                  <option value="">Select Offer </option>
                  <option value="Food Offer">Food Offer</option>
                  <option value="Member Offer">Member Offer</option>
                  <option value="Luxury Suite Room Offer">Luxury Suite Room Offer</option>
                </select>
              </div>
              {/* Other form elements */}
              <div className="mb-4">
                <label htmlFor="PriceInput" className="block text-sm font-medium text-gray-600">Price</label>
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="PriceInput"
                  name="Price"
                  value={this.state.Price}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="DescriptionInput" className="block text-sm font-medium text-gray-600">Description</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="DescriptionInput"
                  name="Description"
                  value={this.state.Description}
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

export default Addoffer;
