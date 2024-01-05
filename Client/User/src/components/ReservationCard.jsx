import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

const ReservationCard = ({
  arrivalDate = "arrivalDate",
  arrivalTime = "arrivalTime",
  departureDate = "departureDate",
  departureTime = "departureTime",
  roomType = "roomType",
  noOfRooms = "noOfRooms",
  foodType = "foodType",
  noOfAdults = "noOfAdults",
  noOfChildren = "noOfChildren",
  specialRequirements = "specialRequirements",
  onClick,
  reservationId,
}) => {
  const convertDate = (date) => {
    return new Date(date).toDateString();
  };

  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 px-4 mb-8 ">
      <div className="block max-w-xl p-6 bg-gray-900 lg:flex-1 border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
          RESERVATION DETAILS
        </h5>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">ARRIVAL DATE</p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left">
                    {convertDate(arrivalDate)}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">ARRIVAL TIME</p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left">{arrivalTime}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">DEPARTURE DATE</p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left">
                    {convertDate(departureDate)}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">DEPARTURE TIME</p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left">{departureTime}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">ROOM TYPE</p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left ">{roomType}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">NUMBER OF ROOMS</p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left mx-2">{noOfRooms}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">NUMBER OF CHILDERN</p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left mx-2">{noOfChildren}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">NUMBER OF ADULTS</p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left mx-2">{noOfAdults}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">FOOD TYPE</p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left mx-2">{foodType}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="text-gray-500 text-left">
                    SPECIAL REQUIREMENTS
                  </p>
                </td>
                <td className="mx-2 mb-2">
                  <p className="text-gray-500 text-left mx-2">
                    {specialRequirements}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-4">
          {/* <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-center"
          >
            Edit Reservation
          </a> */}
          <Button
            className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded-md ml-2 text-center"
            onClick={onClick}
            value={reservationId}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

ReservationCard.propTypes = {
  arrivalDate: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  departureDate: PropTypes.string.isRequired,
  departureTime: PropTypes.string.isRequired,
  roomType: PropTypes.string.isRequired,
  noOfRooms: PropTypes.string.isRequired,
  foodType: PropTypes.string.isRequired,
  noOfAdults: PropTypes.string.isRequired,
  noOfChildren: PropTypes.string.isRequired,
  specialRequirements: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  reservationId: PropTypes.string.isRequired,
};

export default ReservationCard;
