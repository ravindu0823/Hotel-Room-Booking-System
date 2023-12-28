import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios, { OFFER_BY_ID_URL, OFFER_UPDATE_URL } from '@/api/axios';
import Swal from 'sweetalert2';


const UpdateOffer= () => {
    const { id } = useParams();
    const [offers, setOffers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [OfferName, setOfferName] = useState('');
    const [Price, setPrice] = useState(0);
    const [Description, setDescription] = useState([]);
    

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const response = await axios.get(`${OFFER_BY_ID_URL}/${id}`);
                setOffers(response.data);
                setOfferName(response.data.OfferName);
                setPrice(response.data.Price);
                setDescription(response.data.Description);
                
            } catch (error) {
                setError('Failed to fetch offer data.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchOffer();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`${OFFER_UPDATE_URL}/${id}`, {
                OfferName: OfferName,
                Price: Price,
                Description: Description,
            });
            // Display success message
            Swal.fire('Success', 'Offer updated successfully!', 'success');
        } catch (error) {
            setError('Failed to update the offer.');
            console.error(error);
            // Display error message
            Swal.fire('Error', 'Failed to update the offer.', 'error');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!offers) {
        return <div>Offer not found</div>;
    }

    return (
      
      <div className="min-h-screen bg-blue-gray-50/50">
  
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75">
            <div className="flex h-full items-center justify-center">
              <p className="text-4xl font-bold text-white">
                Update Offers
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-xl shadow-md">
        
<div className="mb-4">
  <label htmlFor="OfferName" className="block text-sm font-medium text-gray-600">
    Offer Name:
  </label>
  <select
    id="OfferName"
    value={OfferName}
    onChange={(e) => setOfferName(e.target.value)}
    className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  >
    <option value="Food Offer">Food Offer</option>
    <option value="Member Offer">Member Offer</option>
    <option value="Luxury Suite Room Offer">Luxury Suite Room Offer</option>
  </select>
</div>
       
         <div className="mb-4">
          <label htmlFor="Price" className="block text-sm font-medium text-gray-600">
            Price:
          </label>
          <input
            type="numbers"
            id="Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Description" className="block text-sm font-medium text-gray-600">
          Description:
          </label>
          <input
            type="text"
            id="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      

        <button
          className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
      </div>
    

    );
};

export default UpdateOffer;
