import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,

  Button,
  Typography,
} from "@material-tailwind/react";
import UserInput from "@/widgets/forms/UserInput.jsx";
import DynamicDropdown from "@/widgets/forms/DynamicDropdown.jsx";
import Swal from "sweetalert2";
import axios, {
  CREATE_OFFER_URL,
  OFFER_UPDATE_URL,
} from "@/api/axios.js";
import { useNavigate } from "react-router-dom";

const AddOffer = () => {
  const navigate = useNavigate();
  const [OfferName, setOfferName] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const [OfferNameOptions, setOfferNameOptions] = useState([
    { label: "Food Offer", value: "1" },
    { label: "Member Offer", value: "2" },
    { label: "Luxury Suite Room Offer", value: "3" },
  ]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !OfferName ||
      !Price ||
      !Description
      
      
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }

    console.log("Form submitted:", {
      OfferName,
      Price,
      Description,
      
    });

    try {
      const res = await axios.post(
        CREATE_OFFER_URL,
        {
          offer: {
            OfferName:selectedOptions,
            Price,
            Description,
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
        text: `Offer Added!`,
        icon: "success",
      }).then(() => {
        navigate("/offer");
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
    setOfferName("");
    setPrice("");
    setDescription("");
    setSelectedOptions([]);
  };

  return (
    <div>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">Add Offer</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-20 ms-8 mt-5 max-w-xl">
        <div className="flex justify-start">
          
        <div className="mx-3 mb-3 mt-3 w-full min-w-full rounded-md border border-solid border-gray-500 p-6">
            <h2 className="mb-4 text-2xl font-bold">Offer Details</h2>
            

            <DynamicDropdown
              label="Name of Offer"
              value={OfferName}
              onChange={(e) => setOfferName(e)}
              options={OfferNameOptions}
            />
            
            

            <UserInput
              inputType="number"
              label="Price"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
              inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
            />

            <UserInput
              inputType="text"
              label="Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter The Description"
              inputClassName="border-2 border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:border-blue-500"
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

export default AddOffer;
