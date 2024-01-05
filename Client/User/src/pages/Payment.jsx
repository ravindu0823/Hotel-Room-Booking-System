import { CLIENT_ID } from "../utils/PaypalConfig";
import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate, useParams } from "react-router-dom";
import axios, {
  CREATE_PAYMENT_URL,
  GET_RESERVATION_BY_ID_URL,
} from "../api/axios";
import Swal from "sweetalert2";

const Payment = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [reservation, setReservation] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState({
    transactionId: "",
    reservationId: "",
    userId: "",
  });
  const { id } = useParams();

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: reservation.roomId.roomType,
            amount: {
              currency_code: "USD",
              value: 2000,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        setPayment({
          ...payment,
          transactionId: orderID,
          reservationId: reservation._id,
          userId: reservation.userId._id,
        });
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      // alert("Payment successful!!");
      console.log("Order successful . Your order id is--", orderID);

      let amount = (subTotal * 118) / 100;

      // console.log(payment, amount);
      console.log(amount);
      console.log(payment);

      const addPayment = async () => {
        try {
          const response = await axios.post(CREATE_PAYMENT_URL, {
            payment: {
              transactionId: payment.transactionId,
              reservationId: payment.reservationId,
              userId: payment.userId,
              amount: amount,
            },
          });
          console.log(response.data);

          if (!response.statusText) {
            alert("Payment failed!!");
          }

          Swal.fire({
            icon: "success",
            title: "Hotel Room Booking System",
            text: "Your payment was successful",
          }).then(() => {
            navigate("/");
          });
        } catch (error) {
          console.error("Error adding payment data:", error);
        }
      };

      addPayment();
    }
  }, [success]);

  useEffect(() => {
    const getReservationDetails = async () => {
      try {
        const response = await axios.get(`${GET_RESERVATION_BY_ID_URL}/${id}`);
        setReservation(response.data);

        let roomPrice = response.data.roomId.price;
        let noOfRooms = response.data.noOfRooms;
        setSubTotal(roomPrice * noOfRooms);

        setTotal((subTotal * 118) / 100);
      } catch (error) {
        console.error("Error fetching reservation data:", error);
      }
    };

    getReservationDetails();
  }, []);

  return (
<div className="bg-gray-100 h-screen py-8 flex  justify-center bg-cover" style={{ backgroundImage: 'url("https://page.mysoftinn.com/hs-fs/hubfs/Images%20used%20for%20blog%20(1)-1.png?width=1920&name=Images%20used%20for%20blog%20(1)-1.png")' }}>
      <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full border-collapse border border-gray-300 ml-2">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {reservation.roomId && (
                        <>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img
                                className="h-16 w-16 mr-4"
                                src={reservation.roomId.image}
                                alt="Product image"
                              />

                              <span className="font-semibold">
                                {reservation.roomId.roomType}
                              </span>
                            </div>
                          </td>
                          <td className="py-4">${reservation.roomId.price}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <span className="text-center w-8">
                                {reservation.noOfRooms}
                              </span>
                            </div>
                          </td>
                          <td className="py-4">${subTotal}</td>
                        </>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subTotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>${(subTotal * 18) / 100}</span>
                </div>

                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    ${(subTotal * 118) / 100}
                  </span>
                </div>
                {show ? (
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    className="w-20 ms-9 mt-10"
                  />
                ) : (
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                    onClick={() => setShow(true)}
                  >
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </PayPalScriptProvider>
    </div>
  );
};

export default Payment;
