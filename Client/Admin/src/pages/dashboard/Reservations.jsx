import React, { useEffect, useState } from "react";
import {
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";
import { DELETE_RESERVATION_URL, RESERVAION_URL } from "@/api/axios";
import axios from "@/api/axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const Reservations = () => {
  const userId = {
    _id: String,
    fullName: String,
    contactNumber: String,
    userName: String,
  };
  const reservation = {
    _id: String,
    arrivalDate: Date,
    arrivalTime: String,
    departureDate: Date,
    departureTime: String,
    roomType: String,
    noOfRooms: Number,
    foodType: String,
    noOfAdults: Number,
    noOfChildren: Number,
    specialRequirements: String,
    userId,
  };

  const navigate = useNavigate();
  const [reservationData, setResevationData] = useState([reservation]);

  const tableHeaders = [
    "Name / Contact Number",
    "Arrival Date",
    "Arrival Time",
    "Departure Date",
    "Departure Time",
    "Room Type",
    "No of Rooms",
    "Food Type",
    "Adults",
    "Childrens",
    "Comments",
    "Action",
  ];

  const convertDate = (date) => {
    return new Date(date).toDateString();
  };

  useEffect(() => {
    const getReservationData = async () => {
      try {
        const res = await axios.get(RESERVAION_URL, {
          headers: {
            headers: { "Content-Type": "application/json" },
          },
        });

        if (!res.statusText) throw new Error("Not Authorized");

        // console.log(res.data)
        setResevationData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getReservationData();
  }, [0]);

  reservationData.map(({ noOfChildren }) => {
    console.log(noOfChildren);
  });

  const handleDelete = (e) => {
    Swal.fire({
      title: "Hotel Room Booking System",
      text: "Are you sure want to Delete this Record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const id = e.target.value;

        const deleteReservation = async () => {
          try {
            const res = await axios.delete(`${DELETE_RESERVATION_URL}/${id}`, {
              headers: {
                headers: { "Content-Type": "application/json" },
              },
            });

            if (!res.statusText) throw new Error("Not Authorized");

            // console.log(res.data)
            setResevationData(res.data);
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

        deleteReservation();
      }
    });
  };

  return (
    <div>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">
              Reservation Management
            </p>
          </div>
        </div>
      </div>

      <CardBody className="mx-10 mt-5 overflow-x-scroll px-0 pb-2 pt-0">
        <Link to="/dashboard/reservation/add-new">
          <Button color="green" className="justify-end">
            Add a Reservation (New User)
          </Button>
        </Link>
        <Link to="/dashboard/reservation/add-existing" className="ms-5">
          <Button color="green" className="justify-end">
            Add a Reservation (Existing User)
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
            {reservationData.map(
              (
                {
                  _id,
                  userId,
                  arrivalDate,
                  arrivalTime,
                  departureDate,
                  departureTime,
                  roomType,
                  noOfRooms,
                  foodType,
                  noOfAdults,
                  noOfChildren,
                  specialRequirements,
                },
                key,
              ) => {
                const className = `py-3 px-5 ${
                  key === reservationData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={_id}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {userId.fullName}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {userId.contactNumber}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {convertDate(arrivalDate)}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {arrivalTime}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {convertDate(departureDate)}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {departureTime}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {roomType}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {noOfRooms}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {foodType}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {noOfAdults}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {noOfChildren}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {specialRequirements}
                      </Typography>
                    </td>
                    <td className={className}>
                      <div className={"flex gap-3"}>
                        <Link to={`/dashboard/reservation/update/${_id}`}>
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

export default Reservations;
