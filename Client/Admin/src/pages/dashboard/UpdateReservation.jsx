import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios, {
  RESERVATION_BY_ID_URL,
  RESERVATION_UPDATE_URL,
} from "@/api/axios";
import { format } from "date-fns/fp";
import Swal from "sweetalert2";

const UpdateReservation = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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

  console.log(id);

  const [reservationData, setResevationData] = useState(reservation);

  /*const convertDate = (date) => {
    return (date.split("T")[0]);
    
  }*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(reservationData);

    try {
      const res = await axios.put(
        RESERVATION_UPDATE_URL + id,
        reservationData,
        {
          headers: {
            headers: { "Content-Type": "application/json" },
          },
        },
      );

      if (!res.statusText) throw new Error("Update Failed");

      Swal.fire({
        title: "Hotel Room Booking System",
        text: `Reservation Updated!`,
        icon: "success",
      }).then(() => {
        navigate("/reservation");
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getReservationData = async () => {
      try {
        const res = await axios.get(RESERVATION_BY_ID_URL + id, {
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
  }, []);

  // console.log(reservationData.arrivalDate)

  return (
    <div>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">Update Reservations</p>
          </div>
        </div>
      </div>
      <form
        className="mx-auto mt-5 max-w-5xl overflow-x-scroll px-0 pb-2 pt-0"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-1 sm:col-span-1">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-blue-gray-700"
            >
              User Name
            </label>
            <Input
              type="text"
              name="username"
              value={reservationData.userId.fullName}
              onChange={(e) => {
                setResevationData({
                  ...reservationData,
                  userId: {
                    ...reservationData.userId,
                    fullName: e.target.value,
                  },
                });
              }}
              id="username"
              disabled={true}
              autoComplete="username"
              className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex gap-10">
            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="arrivalDate"
                className="block text-sm font-medium text-blue-gray-700"
              >
                Arrival Date
              </label>
              <Input
                type="date"
                value={reservationData.arrivalDate}
                onChange={(e) => {
                  setResevationData({
                    ...reservationData,
                    arrivalDate: e.target.value,
                  });
                }}
                name="arrivalDate"
                id="arrivalDate"
                autoComplete="arrivalDate"
                className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="arrivalTime"
                className="block text-sm font-medium text-blue-gray-700"
              >
                Arrival Time
              </label>
              <Input
                type="time"
                value={reservationData.arrivalTime}
                onChange={(e) => {
                  setResevationData({
                    ...reservationData,
                    arrivalTime: e.target.value,
                  });
                }}
                name="arrivalTime"
                id="arrivalTime"
                autoComplete="arrivalTime"
                className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="departureDate"
                className="block text-sm font-medium text-blue-gray-700"
              >
                Departure Date
              </label>
              <Input
                type="date"
                value={reservationData.departureDate}
                onChange={(e) => {
                  setResevationData({
                    ...reservationData,
                    departureDate: e.target.value,
                  });
                }}
                name="departureDate"
                id="departureDate"
                autoComplete="departureDate"
                className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="departureTime"
                className="block text-sm font-medium text-blue-gray-700"
              >
                Departure Time
              </label>
              <Input
                type="time"
                value={reservationData.departureTime}
                onChange={(e) => {
                  setResevationData({
                    ...reservationData,
                    departureTime: e.target.value,
                  });
                }}
                name="departureTime"
                id="departureTime"
                autoComplete="departureTime"
                className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="col-span-1 sm:col-span-1">
            <label
              htmlFor="roomType"
              className="block text-sm font-medium text-blue-gray-700"
            >
              Room Type
            </label>
            <Select
              id="roomType"
              selected={reservationData.roomType}
              value={reservationData.roomType}
              onChange={(e) => {
                setResevationData({
                  ...reservationData,
                  roomType: e,
                });
              }}
              name="roomType"
              autoComplete="roomType"
              defaultValue={"Single Room"}
              className="mt-1 block w-full rounded-md border border-blue-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <Option value={"Single Room"}>Single Room</Option>
              <Option value={"Double Room"}>Double Room</Option>
              <Option value={"Family Room"}>Family Room</Option>
              <Option value={"Presidential Room"}>Presidential Room</Option>
            </Select>
          </div>
          <div className="col-span-1 sm:col-span-1">
            <label
              htmlFor="noOfRooms"
              className="block text-sm font-medium text-blue-gray-700"
            >
              Number of Rooms
            </label>
            <Input
              type="number"
              value={reservationData.noOfRooms}
              onChange={(e) => {
                setResevationData({
                  ...reservationData,
                  noOfRooms: e.target.value,
                });
              }}
              name="noOfRooms"
              id="noOfRooms"
              autoComplete="noOfRooms"
              className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="col-span-1 sm:col-span-1">
            <label
              htmlFor="foodType"
              className="block text-sm font-medium text-blue-gray-700"
            >
              Food Type
            </label>
            <Select
              id="foodType"
              value={reservationData.foodType}
              onChange={(e) => {
                setResevationData({
                  ...reservationData,
                  foodType: e,
                });
              }}
              defaultValue={"No Food"}
              name="foodType"
              autoComplete="foodType"
              className="mt-1 block w-full rounded-md border border-blue-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <Option value={"Full Board"}>Full Board</Option>
              <Option value={"Half Board"}>Half Board</Option>
              <Option value={"Breakfast Only"}>Breakfast Only</Option>
              <Option value={"No Food"}>No Food</Option>
            </Select>
          </div>

          <div className="col-span-1 sm:col-span-1">
            <label
              htmlFor="noOfAdults"
              className="block text-sm font-medium text-blue-gray-700"
            >
              Number of Adults
            </label>
            <Input
              type="number"
              value={reservationData.noOfAdults}
              onChange={(e) => {
                setResevationData({
                  ...reservationData,
                  noOfAdults: e.target.value,
                });
              }}
              name="noOfAdults"
              id="noOfAdults"
              autoComplete="noOfAdults"
              className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="col-span-1 sm:col-span-1">
            <label
              htmlFor="noOfChildren"
              className="block text-sm font-medium text-blue-gray-700"
            >
              Number of Children
            </label>
            <Input
              type="number"
              value={reservationData.noOfChildren}
              onChange={(e) => {
                setResevationData({
                  ...reservationData,
                  noOfChildren: e.target.value,
                });
              }}
              name="noOfChildren"
              id="noOfChildren"
              autoComplete="noOfChildren"
              className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="col-span-1 sm:col-span-1">
            <label
              htmlFor="specialRequirements"
              className="block text-sm font-medium text-blue-gray-700"
            >
              Special Requirements
            </label>
            <Textarea
              id="specialRequirements"
              value={reservationData.specialRequirements}
              name="specialRequirements"
              onChange={(e) => {
                setResevationData({
                  ...reservationData,
                  specialRequirements: e.target.value,
                });
              }}
              rows={3}
              className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="mt-5 flex justify-start">
          <Button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-400 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReservation;
