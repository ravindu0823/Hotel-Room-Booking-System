import React, { useState } from 'react';
import axios from '@/api/axios';
import Swal from 'sweetalert2';
import { CREATE_NEW_ROOM_URL } from '@/api/axios';
import { useNavigate } from 'react-router-dom';

  const AddRoom = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
      roomType: '',
      facilities: '',
      persons: '',
      price: '',
    });
    const [image, setImage] = useState('');
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const convertToBase64 = (e) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
  
      reader.onload = function () {
        setImage(reader.result);
      };
  
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    };
  
    const validateFields = () => {
      const { roomType, facilities, persons, price } = state;
  
      if (!roomType || !facilities || !persons || !price) {
        // Validation message using Swal
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill in all fields!',
        });
        return false;
      }
  
      return true;
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      if (!validateFields()) {
        return; // Prevent submission if fields are not valid
      }
  
      const { roomType, facilities, persons, price } = state;
  
      try {
        // Axios call to the API
        const response = await axios.post(CREATE_NEW_ROOM_URL, {
          roomType,
          availability: true,
          facilities,
          persons: parseInt(persons, 10),
          price: parseFloat(price),
          image, // Sending the image data
        });
  
        console.log(response.data);
  
        // Clear the form after successful submission
        setState({
          roomType: '',
          facilities: '',
          persons: '',
          price: '',
        });
  
        // Reset image state to clear the preview
        setImage('');
  
        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Room created successfully!',
        }).then((result) => {
          navigate("/room");
          }
      );
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
  
    const [image2, setImage2] = useState("");
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
              <label htmlFor="roomTypeInput" className="block text-sm font-medium text-gray-600">
                Room Type
              </label>
              <select
                className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                id="roomTypeInput"
                name="roomType"
                value={state.roomType}
                onChange={handleInputChange}
              >
                <option value="">Select Room Type</option>
                <option value="Luxury Single">Luxury Single</option>
                <option value="Normal Single">Normal Single</option>
                <option value="Luxury Double">Luxury Double</option>
                <option value="Normal Double">Normal Double</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="facilitiesInput" className="block text-sm font-medium text-gray-600">
                Facilities (comma-separated)
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                id="facilitiesInput"
                name="facilities"
                value={state.facilities}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="personsInput" className="block text-sm font-medium text-gray-600 ">
                Number of Persons
              </label>
              <input
                type="number"
                className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                id="personsInput"
                name="persons"
                value={state.persons}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="priceInput" className="block text-sm font-medium text-gray-600">
                Price
              </label>
              <input
                type="number"
                step="0.01"
                className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                id="priceInput"
                name="price"
                value={state.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 pt-4">
              <label className="block text-sm font-medium text-gray-600 ">
                Upload Room image
              </label>
              <div className="mb-8">
                <input type="file" name="file" id="file" className="sr-only"onChange={convertToBase64} />
                  {image === "" || image == null ? (
                    ""
                  ) : (
                    <img width={100} height={100} src={image} alt="" />
                  )
                  }
                <label
                  htmlFor="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-gray-600 p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-gray-600">Drop files here</span>
                    <span className="mb-2 block text-base font-medium text-gray-600">Or</span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-gray-600">
                      Browse
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md w-full" onClick={onSubmit}>
        Submit
      </button>

          </form>
        </div>
        
      </div>
      
    </div>
  );
};

export default AddRoom;
