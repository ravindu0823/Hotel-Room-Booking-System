import { useEffect, useState } from "react";
import axios, { GET_ALL_OFFERS_URL } from "../api/axios";

const Comrades = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(GET_ALL_OFFERS_URL);
        setOffers(response.data);
      } catch (error) {
        setError("Failed to fetch offer data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      id="comrades"
      className="max-w-[1400px] h-[500px] bg-gray-900 mx-auto my-20 pt-8 lg:mb-[25%] md:mb-[40%] px-4 grid lg:grid-cols-3 gap-4 rounded-2xl"
    >
      <div
        className="lg:top-8 relative lg:col-span-1 col-span-2"
        style={{ fontFamily: "Times New Roman" }}
      >
        <h3 className="text-4xl font-bold text-white ont-bebas-neue " style={{ fontSize: "1.5rem" }}>
          Special Offers
        </h3>
        <p className="pt-2 mb-5 text-white text-2xl" style={{ fontSize: "1rem" }}>
          Indulge in our exclusive offers tailored just for you. Whether it{"'"}
          s a weekend getaway or an extended stay, we have something special in
          store.
        </p>
        {/* Display offer details */}
        <ul
          style={{
            marginBottom: "2rem",
            listStyle: "disc",
            paddingLeft: "1rem",
            fontSize: "1rem",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {offers.map((offer) => (
            <li
              key={offer.id}
              style={{ marginBottom: "1rem", fontFamily: "Arial, sans-serif", color: "white", fontSize: "1rem" }}
            >
              {offer.OfferName} - {offer.Description} - Price: {offer.Price}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full rounded-2xl mb-6"
          src="https://img.freepik.com/free-psd/realistic-modern-double-bedroom-with-furniture-frame_176382-423.jpg?w=1380&t=st=1702546531~exp=1702547131~hmac=b7022c325595b30f54b52ad1630f96292307f81ad0d0dcebf92ff3f7c8682af6"
          alt="comrade pic"
        />
        <img
          className="row-span-2 object-cover w-full h-full rounded-2xl mb-6"
          src="https://img.freepik.com/free-photo/umbrellas-hammocks-near-pool_1203-204.jpg?w=1060&t=st=1702549433~exp=1702550033~hmac=43d1fe84980da79a3702f9c15b1194f9144c58296fd656a794946e788f274f30"
          alt="comrade pic"
        />
        <img
          className="object-cover w-full h-full rounded-2xl mb-6"
          src="https://img.freepik.com/free-photo/rest-by-swimming-pool_1098-13916.jpg?w=1060&t=st=1702547285~exp=1702547885~hmac=850474cecc04a629d932f96272b3eb574323486c22d21cee486dd269e5edaf3a"
          alt="comrade pic"
        />
      </div>
    </div>
  );
};

export default Comrades;
