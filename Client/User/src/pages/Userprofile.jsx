import { useContext, useEffect, useState } from "react";
import ReservationCard from "../components/ReservationCard";
import SecondNavbar from "../components/SecondNavbar";
import { ReservationModel } from "../utils/models";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios, {
  DELETE_RESERVATION_URL,
  GET_RESERVATION_BY_USER_ID_URL,
  USER_PROTECTED_URL,
} from "../api/axios";
import { jwtDecode } from "jwt-decode";
import { SignInContext } from "../contexts/SignInContext";
import { Button } from "@material-tailwind/react";

const Userprofile = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(SignInContext);
  const [reservationAndUserData, setReservationAndUserData] = useState([
    ReservationModel,
  ]);

  useEffect(() => {
    const getUserAndReservationData = async () => {
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

      await axios
        .get(USER_PROTECTED_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch(() => {
          Swal.fire({
            title: "Hotel Room Booking System",
            text: `Not Authorized, Please Sign In`,
            icon: "error",
          }).then(() => {
            navigate("/sign-in");
          });
        });

      const decodedToken = jwtDecode(token);

      try {
        const res = await axios.get(
          `${GET_RESERVATION_BY_USER_ID_URL}/${decodedToken.userId}`,
          {
            headers: {
              headers: { "Content-Type": "application/json" },
            },
          }
        );

        if (!res.statusText) {
          return Swal.fire({
            title: "Hotel Room Booking System",
            text: `Not Authorized, Please Sign In`,
            icon: "error",
          }).then(() => {
            navigate("/sign-in");
          });
        }

        // console.log(res.data)
        setReservationAndUserData(res.data);
      } catch (error) {
        console.error(error);
        return Swal.fire({
          title: "Hotel Room Booking System",
          text: `Not Authorized, Please Sign In`,
          icon: "error",
        }).then(() => {
          navigate("/sign-in");
        });
      }
    };

    getUserAndReservationData();
  }, [navigate]);

  const handleLogout = async () => {
    Swal.fire({
      title: "Hotel Room Booking System",
      text: "Are you sure want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("token");
        setLoggedIn(false);

        Swal.fire({
          title: "Hotel Room Booking System",
          text: "Logged Out!",
          icon: "success",
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

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

            console.log(res.data);
            Swal.fire({
              title: "Hotel Room Booking System",
              text: "Done!",
              icon: "success",
            }).then(() => {
              setReservationAndUserData(
                reservationAndUserData.filter((el) => el._id !== id)
              );
            });
          } catch (error) {
            console.error(error);
          }
        };

        deleteReservation();
      }
    });
  };

  console.log(reservationAndUserData);

  return (
    <div>
      <div>
        <SecondNavbar />
      </div>
      <div className="flex flex-col lg:flex-row bg-white">
        <div className=" lg:w-1/4">
          <div className="sm:flex justify-center sm:h-screen bg-gray-900 rounded-md">
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm mt-14 ml-4">
              <div className="bg-gradient-to-br from-gray-900 to-gray-100 rounded-t-lg h-32 overflow-hidden">
                <img
                  className="object-cover object-top w-full"
                  src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Mountain"
                />
              </div>
              <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center h-32"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt="Woman looking front"
                />
              </div>
              <div className="text-center mt-10">
                <h2 className="font-semibold text-white">
                  Full Name: {reservationAndUserData[0].userId.fullName}
                </h2>
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold text-white">
                  Username: {reservationAndUserData[0].userId.userName}
                </h2>
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold text-white">
                  Contact Number:{" "}
                  {reservationAndUserData[0].userId.contactNumber}
                </h2>
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold text-white">
                  Address: {reservationAndUserData[0].userId.address}
                </h2>
              </div>
              <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around"></ul>
              <div className="p-4 border-t mx-8 mt-2">
                <Button
                  className="w-1/2 block mx-auto  rounded-md bg-white hover:shadow-lg font-semibold text-black px-7 py-2"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 lg:flex-1">
          <div className="mx-10 mt-10 ">
            <div>
              <h1 className="text-4xl font-bold mt-14 ml-3">
                My Reservation Details
              </h1>
              <div>
                <div className="flex flex-wrap mt-8 ">
                  {reservationAndUserData.map((reservation) => (
                    <ReservationCard
                      key={reservation._id}
                      arrivalDate={reservation.arrivalDate}
                      arrivalTime={reservation.arrivalTime}
                      departureDate={reservation.departureDate}
                      departureTime={reservation.departureTime}
                      foodType={reservation.foodType}
                      noOfAdults={reservation.noOfAdults}
                      noOfChildren={reservation.noOfChildren}
                      noOfRooms={reservation.noOfRooms}
                      roomType={reservation.roomId.roomType}
                      specialRequirements={reservation.specialRequirements}
                      reservationId={reservation._id}
                      onClick={handleDelete}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
