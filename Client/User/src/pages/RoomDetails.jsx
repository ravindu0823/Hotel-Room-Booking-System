import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Added 'Link' import
import axios from "axios";
const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  // Your room data in Database
  const rooms = [
    {
      id: 1,
      name: "Luxury Double Room",
      description:
        "Cozy double bed accommodation with a private bathroom, equipped with TV and A/C for your comfort",
      price: "$52.99",
      facilities: "Double Bed, One Bathroom, TV, A/C",
      persons: "4",
      imageSrc:
        "https://img.freepik.com/free-photo/hotel-bedroom-with-double-bed-table-tv-set_1262-3034.jpg?w=1060&t=st=1702706008~exp=1702706608~hmac=539917e56f38969d633d60c86b00e33e8bd1605cb791216c61a68836b4033a3a",
    },
    {
      id: 2,
      name: "Luxury Double Room",
      description:
        "Cozy double bed accommodation with a private bathroom, equipped with TV and A/C for your comfort",
      price: "$52.99",
      facilities: "Double Bed, One Bathroom, TV, A/C",
      persons: "4",
      imageSrc:
        "https://w0.peakpx.com/wallpaper/261/106/HD-wallpaper-gorgeous-hotel-room-in-bora-bora-beach-hotel-room-trees.jpg",
    },
    // Add other rooms here...
  ];

  useEffect(() => {
    // Find the room that matches the ID from the URL params
    const selectedRoom = rooms.find((item) => item.id === parseInt(id));
    setRoom(selectedRoom);
  }, [id, rooms]);

  return (
    <>
      <div>
        {room ? (
          <div className=" mx-8 mt-16 border border-gray-300 rounded-lg overflow-hidden bg-blue-100">
            <section className="text-gray-700 body-font overflow-hidden bg-white">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/4 mx-auto ml-auto flex flex-wrap">
                  <img
                    className="w-180 h-80 object-cover rounded-xl border border-gray-200"
                    src={room.imageSrc}
                    alt={room.name}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      Select Your Room Today
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {room.name}
                    </h1>
                    <div className="flex mb-4">{/* SVG Icons */}</div>
                    <p className="text-sm title-font text-gray-500 tracking-widest">
                      {room.description}
                    </p>{" "}
                    {/*Room Discription Bind Here */}
                    <p className="leading-relaxed">
                      facilities: {room.facilities}
                    </p>{" "}
                    {/*Room Facilities Bind Here */}
                    <p className="leading-relaxed">
                      persons: {room.persons}
                    </p>{" "}
                    {/*Room persons Bind Here */}
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                    <div className="flex flex-col items-center">
                      <span className="title-font font-medium text-2xl text-gray-900 mb-4 text-left">
                        Price Per Night: {room.price}
                      </span>
                      <div className="flex justify-center">
                        <Link to="/" className="mx-2">
                          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                            Back to Home
                          </button>
                        </Link>
                        <Link to="/room" className="mx-2">
                          <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                            Book Reservation Now!
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div>Room not found</div>
        )}
      </div>
    </>
  );
};

export default RoomDetails;

