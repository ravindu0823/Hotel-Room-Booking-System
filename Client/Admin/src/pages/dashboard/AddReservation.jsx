import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Select,
  Option,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import UserInput from "@/widgets/forms/UserInput.jsx";
import DynamicDropdown from "@/widgets/forms/DynamicDropdown.jsx";
import DynamicCheckbox from "@/widgets/forms/DynamicCheckBox.jsx";
import DynamicRadioButton from "@/widgets/forms/DynamicRadioButton.jsx";
import Swal from "sweetalert2";
import axios, {
  CREATE_RESERVATION_URL,
  RESERVATION_UPDATE_URL,
} from "@/api/axios.js";
import { useNavigate } from "react-router-dom";

const AddReservation = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [nic, setNIC] = useState("");
  const [address, setAddress] = useState("");

  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [arrivalTime, setArrivalTime] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [departureTime, setDepartureTime] = useState(new Date());
  const [NoofAdults, setNoofAdults] = useState("");
  const [NoofChildrens, setNoofChildrens] = useState("");
  const [roomType, setRoomType] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [roomsNo, setRoomsNo] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");

  const [roomTypeOptions, setRoomTypeOptions] = useState([
    { label: "Single", value: "1" },
    { label: "Double", value: "2" },
    { label: "Suite", value: "3" },
  ]);

  const [roomsNoOptions, setRoomsNoOptions] = useState([
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three", value: "3" },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !userName ||
      !password ||
      !contactNumber ||
      !nic ||
      !arrivalDate ||
      !arrivalTime ||
      !departureDate ||
      !departureTime ||
      !roomType ||
      !roomsNo ||
      !NoofAdults ||
      !NoofChildrens
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

    if (!password.match(passwordRegex)) {
      return Swal.fire({
        icon: "error",
        title: "Password Validation Failed",
        text: "Password must be at least 8 characters and include at least one digit, one lowercase letter, one uppercase letter, and one special character.",
      });
    }

    console.log("Form submitted:", {
      fullName,
      userName,
      password,
      contactNumber,
      nic,
      arrivalDate,
      arrivalTime,
      departureDate,
      departureTime,
      roomType,
      roomsNo,
      selectedOptions,
      NoofAdults,
      NoofChildrens,
    });

    try {
      const res = await axios.post(
        CREATE_RESERVATION_URL,
        {
          reservation: {
            arrivalDate,
            arrivalTime,
            departureDate,
            departureTime,
            roomType,
            noOfRooms: roomsNo,
            foodType: selectedOptions,
            noOfAdults: NoofAdults,
            noOfChildren: NoofChildrens,
            specialRequirements: specialRequirements,
          },
          user: {
            fullName,
            userName,
            password,
            contactNumber,
            address,
            nic,
          },
        },
        {
          headers: {
            headers: { "Content-Type": "application/json" },
          },
        },
      );

      if (!res.statusText) throw new Error("Creation Failed");

      Swal.fire({
        title: "Hotel Room Booking System",
        text: `Reservation Created!`,
        icon: "success",
      }).then(() => {
        navigate("/dashboard/reservation");
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRadioButton = (e) => {
    const { value } = e.target;
    setSelectedOptions(value);
  };

  const handleClearForm = () => {
    setFullName("");
    setUserName("");
    setPassword("");
    setContactNumber("");
    setNIC("");
    setArrivalDate(new Date());
    setArrivalTime(new Date());
    setDepartureDate(new Date());
    setDepartureTime(new Date());
    setNoofAdults("");
    setNoofChildrens("");
    setRoomType("");
    setRoomsNo("");
    setSelectedOptions([]);
  };

  return (
    <div>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">Create Reservations (New User)</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-20 ms-8 mt-5 max-w-xl">
        <div className="flex justify-start">
          <div className="mx-3 mb-3 mt-3 w-full min-w-full rounded-md border border-solid border-gray-500 p-6">
            <h2 className="mb-4 text-2xl font-bold">User Details</h2>

            <UserInput
              inputType="text"
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
            />

            <UserInput
              inputType="text"
              label="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
            />

            <UserInput
              inputType="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
            />

            <UserInput
              inputType="text"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your Address"
            />

            <UserInput
              inputType="text"
              label="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter your contact number"
            />

            <UserInput
              inputType="text"
              label="NIC"
              value={nic}
              onChange={(e) => setNIC(e.target.value)}
              placeholder="Enter your NIC number"
            />
          </div>

          <div className="mx-3 mb-3 mt-3 w-full min-w-full rounded-md border border-solid border-gray-500 p-6">
            <h2 className="mb-4 text-2xl font-bold">Reservation Details</h2>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="mx-2 mb-4">
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                        Arrival Date
                      </label>
                      <Input
                        type="date"
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                        name="arrivalDate"
                        id="arrivalDate"
                        autoComplete="arrivalDate"
                        className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="mx-20 mb-4">
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                        Departure Date
                      </label>
                      <Input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        name="departureDate"
                        id="departureDate"
                        autoComplete="departureDate"
                        className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="mx-2 mb-4">
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                        Arrival Time
                      </label>
                      <Input
                        type="time"
                        value={arrivalTime}
                        onChange={(e) => setArrivalTime(e.target.value)}
                        name="arrivalTime"
                        id="arrivalTime"
                        autoComplete="arrivalTime"
                        className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="mx-20 mb-4">
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                        Departure Time
                      </label>
                      <Input
                        type="time"
                        value={departureTime}
                        onChange={(e) => setDepartureTime(e.target.value)}
                        name="departureTime"
                        id="departureTime"
                        autoComplete="departureTime"
                        className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <DynamicDropdown
              label="Type of Room"
              value={roomType}
              onChange={(e) => setRoomType(e)}
              options={roomTypeOptions}
            />
            <DynamicDropdown
              label="Number of Rooms"
              value={roomsNo}
              onChange={(e) => setRoomsNo(e)}
              options={roomsNoOptions}
            />
            {/*<DynamicCheckbox
              label="Food Type"
              selectedOptions={selectedOptions}
              onChange={handleCheckboxChange}
              options={[
                { label: "Breakfast", value: "Breakfast" },
                { label: "Lunch", value: "Lunch" },
                { label: "Dinner", value: "Dinner" },
              ]}
            />*/}
            <DynamicRadioButton
              label={"Food Type"}
              selectedOption={selectedOptions}
              onChange={handleRadioButton}
              options={[
                { label: "Breakfast", value: "Breakfast" },
                { label: "Lunch", value: "Lunch" },
                { label: "Dinner", value: "Dinner" },
              ]}
            />

            <UserInput
              inputType="number"
              label="Number of Adults"
              value={NoofAdults}
              onChange={(e) => setNoofAdults(e.target.value)}
              placeholder="Enter the Number of Adults"
              inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
            />

            <UserInput
              inputType="number"
              label="Number of Children"
              value={NoofChildrens}
              onChange={(e) => setNoofChildrens(e.target.value)}
              placeholder="Enter The Number of Children"
              inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
            />

            <Textarea
              color="lightBlue"
              size="regular"
              value={specialRequirements}
              onChange={(e) => setSpecialRequirements(e.target.value)}
              outline={true}
              placeholder="Special Requirements"
              className="mb-4 w-full rounded border-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />

            <div className="mt-5 flex justify-between">
              <Button
                type="submit"
                className="rounded border border-blue-500 bg-blue-500 px-4 py-2 text-white hover:border-blue-600 hover:bg-blue-600"
              >
                Submit
              </Button>
              <Button
                type="button"
                onClick={handleClearForm}
                className="rounded border border-gray-300 bg-gray-300 px-4 py-2 text-gray-700 hover:border-gray-400 hover:bg-gray-400"
              >
                Clear Form
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReservation;
