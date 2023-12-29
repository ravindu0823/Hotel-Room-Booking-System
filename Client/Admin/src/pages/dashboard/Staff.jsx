import React, { useState, useEffect } from 'react';
import axios, { DELETE_STAFF_BY_ID_URL, GET_ALL_STAFF_URL } from '@/api/axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
} from "@material-tailwind/react";
const Staff = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    // Fetch staff data from the backend
    const fetchStaff = async () => {
      try {
        const response = await axios.get(GET_ALL_STAFF_URL);
        setStaff(response.data);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchStaff();
  }, []);

  const handleDelete = async (staffId) => {
    // Show confirmation dialog with SweetAlert before deleting
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Make a delete request to your backend endpoint to remove the staff
          await axios.delete(`${DELETE_STAFF_BY_ID_URL}/${staffId}`);
          // Filter out the deleted staff from the current state
          setStaff(staff.filter((staff) => staff._id !== staffId));
          
          // Show success message with SweetAlert upon successful deletion
          Swal.fire({
            title: 'Deleted!',
            text: 'Staff Member has been deleted.',
            icon: 'success'
          });
        } catch (error) {
          console.error('Error deleting staff:', error);
          // Show error message with SweetAlert if deletion fails
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete the staff member.',
            icon: 'error'
          });
        }
      }
    });
  };

  return (
    <>
    <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
      <div className="absolute inset-0 h-full w-full bg-gray-900/75">
        <div className="flex h-full items-center justify-center">
          <p className="text-4xl font-bold text-white">Staff Management</p>
        </div>
      </div>
    </div>
    <div className="mb-8 mt-12 flex flex-col gap-12">
    <div className="container mx-auto px-4 py-8 mt-2">
        <Link to={`/dashboard/staff/add-new`} className="block md:inline-block mt-4 md:mt-6">
          <Button className="mb-3 md:mb-0 md:mr-3" color='green' >
            Add New Staff Member
          </Button>
        </Link>
        <div className="-mx-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Staff Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Contact Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">NIC</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {staff.map((staff) => (
                <tr key={staff._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{staff.staffName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{staff.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{staff.contactNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{staff.emailAddress}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{staff.NIC}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button onClick={() => handleDelete(staff._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded md:mr-2" color='red'>
                      
                      Delete
                    </Button>
                    <Link to={`/dashboard/staff/update/${staff._id}`}>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0" color='blue'>
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

export default Staff;
