import React, { useState, useEffect } from 'react';
import axios, { DELETE_OFFER_URL, OFFER_URL } from '@/api/axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  Button,
} from "@material-tailwind/react";
const Offers = () => {
  const [Offers, setOffers] = useState([]);

  useEffect(() => {
    // Fetch room data from the backend
    const fetchOffers = async () => {
      try {
        const response = await axios.get(OFFER_URL);
        setOffers(response.data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchOffers();
  }, []);

  const handleDelete = async (offerId) => {
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
          // Make a delete request to your backend endpoint to remove the room
          await axios.delete(`${DELETE_OFFER_URL}/${offerId}`);
          // Filter out the deleted room from the current state
          setOffers(Offers.filter((Offer) => Offer._id !== offerId));
          
          // Show success message with SweetAlert upon successful deletion
          Swal.fire({
            title: 'Deleted!',
            text: 'Your offer has been deleted.',
            icon: 'success'
          });
        } catch (error) {
          console.error('Error deleting offer:', error);
          // Show error message with SweetAlert if deletion fails
          Swal.fire({
            title: 'Error!',
            text: 'Failed to delete the room.',
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
          <p className="text-4xl font-bold text-white">Manage Special Offer</p>
        </div>
      </div>
    </div>
    <div className="mb-8 flex flex-col gap-12">
    <div className="container mx-auto px-4 py-8">
        <Link to={`/dashboard/offers/add-new`} className="block md:inline-block mt-4 md:mt-6">
          <Button className="mb-3 md:mb-0 md:mr-3" color='green' >
            Add Offers
          </Button>
        </Link>
        <div className="-mx-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Offer Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Offers.map((Offer) => (
                <tr key={Offer._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{Offer.OfferName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{Offer.Price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{Offer.Description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Button onClick={() => handleDelete(Offer._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded md:mr-2" color='red'>
                      
                      Delete
                    </Button>
                    <Link to={`/dashboard/offers/update/${Offer._id}`}>
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

export default Offers;
