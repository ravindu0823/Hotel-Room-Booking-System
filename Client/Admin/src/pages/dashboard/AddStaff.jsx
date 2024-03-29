import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '@/api/axios';
import Swal from 'sweetalert2';
import { CREATE_NEW_STAFF_URL } from '@/api/axios';

  const AddStaff = () => {
    const navigate = useNavigate();
    
    const [state, setState] = useState({
      staffName: '',
      Address: '',
      contactNumber: '',
      emailAddress: '',
      NIC: '',
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
      const { staffName, Address, contactNumber, emailAddress , NIC } = state;
  
      if (!staffName || !Address || !contactNumber || !emailAddress || !NIC) {
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
  
      const { staffName, Address, contactNumber, emailAddress , NIC } = state;
  
      try {
        // Axios call to the API
        const response = await axios.post(CREATE_NEW_STAFF_URL, {
          staffName,
          Address,
          contactNumber,
          emailAddress,
          NIC,
          image, // Sending the image data
        });
  
        console.log(response.data);
  
        // Clear the form after successful submission
        setState({
          staffName: '',
          Address: '',
          contactNumber: '',
          emailAddress: '',
          NIC: '',
        });
  
        
        console.log(response.data);
  
        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Staff Member Added successfully!',
        }).then((result) => {
          navigate("/dashboard/staff");
          }
      );
        console.log(response.data);
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
            <div className="mb-4">
              <label htmlFor="staffNameInput" className="block text-sm font-medium text-gray-600">
                Member Name 
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                id="staffNameInput"
                name="staffName"
                value={state.staffName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="AddressInput" className="block text-sm font-medium text-gray-600 ">
                Address
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                id="AddressInput"
                name="Address"
                value={state.Address}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contactNumberInput" className="block text-sm font-medium text-gray-600">
                Contact Number 
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                id="contactNumberInput"
                name="contactNumber"
                value={state.contactNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="emailAddressInput" className="block text-sm font-medium text-gray-600">
                Email Address 
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                id="emailAddressInput"
                name="emailAddress"
                value={state.emailAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="NICInput" className="block text-sm font-medium text-gray-600">
                NIC Number 
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md border-gray-500"
                id="NICInput"
                name="NIC"
                value={state.NIC}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6 pt-4">
              <label className="block text-sm font-medium text-gray-600 ">
                Upload member image
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

export default AddStaff;