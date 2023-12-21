import React, { useEffect, useState } from "react";
import {
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";
import { DELETE_OFFER_URL, OFFER_URL } from "@/api/axios";
import axios from "@/api/axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const Offers = () => {
  
  const offer ={
    _id: String,
    OfferName: String,
    Price: Number,
    Description: String,

  

  };
 
  const cookieValue = Cookies.get('cookieName');


  const navigate = useNavigate();
  const [offerData, setOfferData] = useState([offer]);

  const tableHeaders = [
    "Offer Name",
    "Price",
    "Description",
    "Action",
  ];

 

  useEffect(() => {
    const getOfferData = async () => {
      try {
        const res = await axios.get(OFFER_URL, {
          headers: {
            headers: { "Content-Type": "application/json" },
          },
        });

        if (!res.statusText) throw new Error("Not Authorized");

        // console.log(res.data)
        setOfferData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getOfferData();
  }, [0]);

  

  const handleDelete = (e) => {
    Swal.fire({
      title: "Hotel Room Booking System",
      text: "Are you want to Delete this Record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const id = e.target.value;

        const deleteOffer = async () => {
          try {
            const res = await axios.delete(`${DELETE_OFFER_URL}/${id}`, {
              headers: {
                headers: { "Content-Type": "application/json" },
              },
            });

            if (!res.statusText) throw new Error("Not Authorized");

            // console.log(res.data)
            setOfferData(res.data);
            Swal.fire({
              title: "Hotel Room Booking System",
              text: "Done!",
              icon: "success",
            }).then(() => {
              navigate(0);
            });
          } catch (error) {
            console.error(error);
          }
        };

        deleteOffer();
      }
    });
  };

  return (
    <div>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">
              Manage Special Offers
            </p>
          </div>
        </div>
      </div>

      <CardBody className="mx-10 mt-5 overflow-x-scroll px-0 pb-2 pt-0">
        <Link to="/dashboard/offers/add-new">
          <Button color="green" className="justify-end">
            Add Offer
          </Button>
        </Link>
        
        <table className="mt-5 w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {tableHeaders.map((el) => (
                <th
                  key={el}
                  className="border-b border-blue-gray-50 px-5 py-3 text-left"
                >
                  <Typography
                    variant="small"
                    className="text-[11px] font-bold uppercase text-blue-gray-400"
                  >
                    {el}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {offerData.map(
              (
                {
                  _id,
                  OfferName,
                  Price,
                  Description,

              
                },
                key,
              ) => {
                const className = `py-3 px-5 ${
                  key === offerData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={_id}>
              
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {OfferName}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {Price}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {Description}
                      </Typography>
                    </td>
                   
                    <td className={className}>
                      <div className={"flex gap-3"}>
                        <Link to={`/dashboard/offers/update/${_id}`}>
                          <Button color="blue">Edit</Button>
                        </Link>

                        <Button color="red" onClick={handleDelete} value={_id}>
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
    </div>
  );
};

export default Offers;
