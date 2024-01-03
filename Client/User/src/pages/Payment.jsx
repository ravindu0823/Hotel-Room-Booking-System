import { CLIENT_ID } from "../utils/PaypalConfig";
import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
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
      alert("Payment successful!!");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);

  return (
    <div className="bg-gray-100 h-screen py-8">
      <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
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
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://via.placeholder.com/150"
                            alt="Product image"
                          />
                          <span className="font-semibold">Product name</span>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            -
                          </button>
                          <span className="text-center w-8">1</span>
                          <button className="border rounded-md py-2 px-4 ml-2">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">$19.99</td>
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
                  <span>$19.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">$21.98</span>
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
