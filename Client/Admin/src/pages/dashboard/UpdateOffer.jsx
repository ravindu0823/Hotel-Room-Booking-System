import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios, {
  OFFER_BY_ID_URL,
  OFFER_UPDATE_URL,
} from "@/api/axios";
import Swal from "sweetalert2";

const UpdateOffer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

 
  const offer = {
    _id: String,
    OfferName: String,
    Price: Number,
    Description: String,

  };

  console.log(id);

  const [offerData, setOfferData] = useState(offer);


  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(offerData);

    try {
      const res = await axios.put(
        OFFER_UPDATE_URL + id,
        offerData,
        {
          headers: {
            headers: { "Content-Type": "application/json" },
          },
        },
      );

      if (!res.statusText) throw new Error("Update Failed");

      Swal.fire({
        title: "Hotel Room Booking System",
        text: `Offer Updated!`,
        icon: "success",
      }).then(() => {
        navigate("/offer");
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getOfferData = async () => {
      try {
        const res = await axios.get(OFFER_BY_ID_URL + id, {
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
  }, []);


  return (
    <div>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">Update Offer</p>
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
              htmlFor="OfferName"
              className="block text-sm font-medium text-blue-gray-700"
            >
              Offer Name
            </label>
            <Select
              id="OfferName"
              selected={offerData.OfferName}
              value={offerData.OfferName}
              onChange={(e) => {
                setOfferData({
                  ...offerData,
                  OfferName: e,
                });
              }}
              name="OfferName"
              autoComplete="OfferName"
              defaultValue={"Food Offer"}
              className="mt-1 block w-full rounded-md border border-blue-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <Option value={"Food Offer"}>Food Offer</Option>
              <Option value={"Luxury Suite Room Offer"}>Luxury Suite Room Offer</Option>
              <Option value={"Member Offer"}>Member Offer</Option>
             </Select> 
          </div>

        
          <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="Price"
                className="block text-sm font-medium text-blue-gray-700"
              >
                Price
              </label>
              <Input
                type="number"
                value={offerData.Price}
                onChange={(e) => {
                  setOfferData({
                    ...offerData,
                    Price: e.target.value,
                  });
                }}
                name="Price"
                id="Price"
                autoComplete="Price"
                className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-1 sm:col-span-1">
              <label
                htmlFor="Description"
                className="block text-sm font-medium text-blue-gray-700"
              >
                Description
              </label>
              <Input
                type="text"
                value={offerData.Description}
                onChange={(e) => {
                  setOfferData({
                    ...offerData,
                    Description: e.target.value,
                  });
                }}
                name="Description"
                id="Description"
                autoComplete="Description"
                className="mt-1 block w-full rounded-md border-blue-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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

export default UpdateOffer;
