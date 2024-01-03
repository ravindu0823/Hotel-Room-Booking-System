import React, { useEffect, useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import axios, { GET_STAFF_BY_ID_URL, UPDATE_STAFF_BY_ID_URL } from '@/api/axios';
import Swal from 'sweetalert2';


const UpdateStaff= () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [staff, setStaff] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [staffName, setStaffName] = useState('');
    const [Address, setAddress] = useState(0);
    const [contactNumber, setContactNumber] = useState([]);
    const [emailAddress, setEmailAddress] = useState(0);
    const [NIC, setNIC] = useState(0);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get(`${GET_STAFF_BY_ID_URL}/${id}`);
                setStaff(response.data);
                setStaffName(response.data.staffName);
                setAddress(response.data.Address);
                setContactNumber(response.data.contactNumber);
                setEmailAddress(response.data.emailAddress);
                setNIC(response.data.NIC);
                
            } catch (error) {
                setError('Failed to fetch staff data.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStaff();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`${UPDATE_STAFF_BY_ID_URL}/${id}`, {
                staffName: staffName,
                address : Address,
                contactNumber : contactNumber,
                emailAddress : emailAddress,
                NIC : NIC,

            });
            // Display success message
            Swal.fire('Success', 'Staff Member updated successfully!', 'success').then((result) => {
              navigate("/staff");
              }
          );
        } catch (error) {
            setError('Failed to update the staff member.');
            console.error(error);
            // Display error message
            Swal.fire('Error', 'Failed to update the staff member.', 'error');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!staff) {
        return <div>Staff not found</div>;
    }

    return (
      
      <div className="min-h-screen bg-blue-gray-50/50">
  
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75">
            <div className="flex h-full items-center justify-center">
              <p className="text-4xl font-bold text-white">
                Update Staff Member
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-xl shadow-md">
        

        <div className="mb-4">
          <label htmlFor="staffName" className="block text-sm font-medium text-gray-600">
            Staff Member:
          </label>
          <input
            type="text"
            id="staffName"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            address:
          </label>
          <input
            type="text"
            id="address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-600">
            Contact Number:
          </label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Address:
          </label>
          <input
            type="text"
            id="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Nic" className="block text-sm font-medium text-gray-600">
            NIC Number:
          </label>
          <input
            type="text"
            id="nic"
            value={NIC}
            onChange={(e) => setNIC(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>


        <button
          className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleUpdate}
        >
          Update Staff Member Details
        </button>
      </div>
    </div>
      </div>
    

    );
};

export default UpdateStaff;
