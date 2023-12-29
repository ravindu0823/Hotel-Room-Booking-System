import React, { Component } from 'react';
import axios from '@/api/axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import { Input } from "@material-tailwind/react";
import { CREATE_NEW_STAFF_URL } from '@/api/axios';

class Addstaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffName: '',
      address: '',
      contactNumber: '',
      emailAddress: '',
      NIC : '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validateFields = () => {
    const { staffName, address, contactNumber, emailAddress , NIC } = this.state;

    if (!staffName || !address || !contactNumber || !emailAddress || !NIC) {
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

    const { staffName, address, contactNumber, emailAddress , NIC } = this.state;

    try {
      const response = await axios.post(CREATE_NEW_STAFF_URL, {
        staffName,
        address,
        contactNumber,
        emailAddress, 
        NIC,
      });

      console.log(response.data);

      // Clear the form after successful submission
      this.setState({
        staffName: '',
        address: '',
        contactNumber: '',
        emailAddress: '',
        NIC : '',
      });

      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Staff Member Added successfully!',
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
              <p className="text-4xl font-bold text-white">Add new staff member</p>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-12 flex flex-col gap-12">
          <div className="container mx-auto p-4">
           
            <form className="max-w-md mx-auto border border-gray-500 rounded-md p-4">
              <div className="mb-4 ">
                <label htmlFor="staffTypeInput" className="block text-sm font-medium text-gray-600">Staff Name</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="staffName"
                  name="StaffName"
                  value={this.state.staffName}
                  onChange={this.handleInputChange}
                />
              </div>
              {/* Other form elements */}
              <div className="mb-4">
                <label htmlFor="facilitiesInput" className="block text-sm font-medium text-gray-600">Address</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="personsInput" className="block text-sm font-medium text-gray-600 ">Contact Number</label>
                <input
                  type="number"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="contactNumber"
                  name="contactNumber"
                  value={this.state.contactNumber}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="priceInput" className="block text-sm font-medium text-gray-600">Email address</label>
                <input
                  type="text"
                  step="0.01"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="email"
                  name="email"
                  value={this.state.emailAddress}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="priceInput" className="block text-sm font-medium text-gray-600">NIC Number (National identification number)</label>
                <input
                  type="text"
                  step="0.01"
                  className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                  id="nic"
                  name="nic"
                  value={this.state.NIC}
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md w-full" onClick={this.onSubmit}>Add new Staff Member</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Addstaff;
