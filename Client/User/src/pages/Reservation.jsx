import { useNavigate } from "react-router-dom";
import DynamicDropdown from "../components/forms/DynamicDropdown";
import { useEffect, useState } from "react";
import UserInput from "../components/forms/UserInput";
import { Button, Input, Textarea } from "@material-tailwind/react";
import DynamicRadioButton from "../components/forms/DynamicRadioButton";
import SecondNavbar from "../components/SecondNavbar";
import Footer from "../components/Footer";
import axios, {
  CREATE_RESERVATION_URL,
  GET_USER_BY_ID_URL,
  USER_PROTECTED_URL,
} from "../api/axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const Reservation = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    _id: "",
    fullName: "",
    userName: "",
    contactNumber: null,
    address: "",
    nic: "",
  });

  const [reservationData, setReservationData] = useState({
    arrivalDate: new Date(),
    arrivalTime: new Date(),
    departureDate: new Date(),
    departureTime: new Date(),
    NoofAdults: "",
    NoofChildrens: "",
    roomType: "",
    selectedOptions: "",
    roomsNo: "",
    specialRequirements: "",
  });

  const roomTypeOptions = [
    { label: "Single", value: "1" },
    { label: "Double", value: "2" },
    { label: "Suite", value: "3" },
  ];

  const roomsNoOptions = [
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three", value: "3" },
  ];

  useEffect(() => {
    const getUserData = async () => {
      const token = Cookies.get("token");

      if (!token) {
        return Swal.fire({
          title: "Hotel Room Booking System",
          text: `Not Authorized`,
          icon: "error",
        }).then(() => {
          navigate("/sign-in");
        });
      }

      const res = await axios.get(USER_PROTECTED_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.statusText) {
        return Swal.fire({
          title: "Hotel Room Booking System",
          text: `Not Authorized, Please Sign In`,
          icon: "error",
        }).then(() => {
          navigate("/sign-in");
        });
        // throw new Error("Not Authorized");
      }

      const decodedToken = jwtDecode(token);

      try {
        const res = await axios.get(
          `${GET_USER_BY_ID_URL}/${decodedToken.userId}`,
          {
            headers: {
              headers: { "Content-Type": "application/json" },
            },
          }
        );

        if (!res.statusText) throw new Error("Not Authorized");

        // console.log(res.data)
        setUserData(res.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, [navigate]);

  const handleRadioButton = (e) => {
    const { value } = e.target;
    setReservationData({ ...reservationData, selectedOptions: value });
  };

  const handleClearForm = () => {
    setReservationData({
      arrivalDate: new Date(),
      arrivalTime: new Date(),
      departureDate: new Date(),
      departureTime: new Date(),
      NoofAdults: "",
      NoofChildrens: "",
      roomType: "",
      selectedOptions: "",
      roomsNo: "",
      specialRequirements: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        CREATE_RESERVATION_URL,
        {
          reservation: {
            userId: userData._id,
            arrivalDate: reservationData.arrivalDate,
            arrivalTime: reservationData.arrivalTime,
            departureDate: reservationData.departureDate,
            departureTime: reservationData.departureTime,
            roomType: reservationData.roomType,
            noOfRooms: reservationData.roomsNo,
            foodType: reservationData.selectedOptions,
            noOfAdults: reservationData.NoofAdults,
            noOfChildren: reservationData.NoofChildrens,
            specialRequirements: reservationData.specialRequirements,
          },
        },
        {
          headers: {
            headers: { "Content-Type": "application/json" },
          },
        }
      );

      if (!res.statusText) throw new Error("Reservation Creation Failed");

      Swal.fire({
        title: "Hotel Room Booking System",
        text: `Reservation Created. Thank You!`,
        icon: "success",
      }).then(() => {
        navigate("/");
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mb-8">
        <SecondNavbar />
      </div>
      <div className="bg-reservation-page bg-cover">
        <div className="text-center mt-2">
          <h2 className="ont-bebas-neue uppercase text-1xl sm:text-5xl font-black flex flex-col leading-none dark:text-dark text-white ml-10">
            Create&nbsp;&nbsp;&nbsp;&nbsp;Reservations
          </h2>
        </div>

        <form
          className="mb-20 ms-8 mt-5 max-w-xl ml-40 "
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-start">
            <div className="mx-3 mb-3 mt-3 w-full min-w-full rounded-md border border-solid border-white p-6 bg-white/[.54] ">
              <h2 className="mb-4 text-2xl font-bold ont-bebas-neue uppercase text-left">User Details</h2>

              <UserInput
                inputType="text"
                label="Full Name"
                value={userData.fullName}
                disabled={true}
                inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
              />

              <UserInput
                inputType="text"
                label="Username"
                value={userData.userName}
                disabled={true}
                inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
              />

              <UserInput
                inputType="text"
                label="Address"
                value={userData.address}
                disabled={true}
                inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
              />

              <UserInput
                inputType="text"
                label="Contact Number"
                value={userData.contactNumber}
                disabled={true}
                inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
              />

              <UserInput
                inputType="text"
                label="NIC"
                value={userData.nic}
                disabled={true}
                inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mx-3 mb-3 mt-3 w-full min-w-full rounded-md border border-solid border-white p-6 bg-white/[.75]">
              <h2 className="mb-4 text-2xl font-bold nt-bebas-neue uppercase text-left">Reservation Details</h2>
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
                          value={reservationData.arrivalDate}
                          onChange={(e) =>
                            setReservationData({
                              ...reservationData,
                              arrivalDate: e.target.value,
                            })
                          }
                          name="arrivalDate"
                          id="arrivalDate"
                          autoComplete="arrivalDate"
                          className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white"
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
                          value={reservationData.departureDate}
                          onChange={(e) =>
                            setReservationData({
                              ...reservationData,
                              departureDate: e.target.value,
                            })
                          }
                          name="departureDate"
                          id="departureDate"
                          autoComplete="departureDate"
                          className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white"
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
                          value={reservationData.arrivalTime}
                          onChange={(e) =>
                            setReservationData({
                              ...reservationData,
                              arrivalTime: e.target.value,
                            })
                          }
                          name="arrivalTime"
                          id="arrivalTime"
                          autoComplete="arrivalTime"
                          className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white"
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
                          value={reservationData.departureTime}
                          onChange={(e) =>
                            setReservationData({
                              ...reservationData,
                              departureTime: e.target.value,
                            })
                          }
                          name="departureTime"
                          id="departureTime"
                          autoComplete="departureTime"
                          className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <DynamicDropdown
                label="Type of Room"
                value={reservationData.roomType}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    roomType: e,
                  })
                }
                options={roomTypeOptions}
              />
              <DynamicDropdown
                label="Number of Rooms"
                value={reservationData.roomsNo}
                onChange={(e) =>
                  setReservationData({ ...reservationData, roomsNo: e })
                }
                options={roomsNoOptions}
              />

              <DynamicRadioButton
                label={"Food Type"}
                selectedOption={reservationData.selectedOptions}
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
                value={reservationData.NoofAdults}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    NoofAdults: e.target.value,
                  })
                }
                placeholder="Enter the Number of Adults"
              />

              <UserInput
                inputType="number"
                label="Number of Children"
                value={reservationData.NoofChildrens}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    NoofChildrens: e.target.value,
                  })
                }
                placeholder="Enter The Number of Children"
                inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
              />
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Special Requirements
              </label>
              <Textarea
                color="lightBlue"
                size="regular"
                value={reservationData.specialRequirements}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    specialRequirements: e.target.value,
                  })
                }
                outline={true}
                placeholder="Special Requirements"
                className="mb-4 w-full rounded border-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none bg-white"
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
        <Footer />
      </div>
      
    </>
  );
};

export default Reservation;
