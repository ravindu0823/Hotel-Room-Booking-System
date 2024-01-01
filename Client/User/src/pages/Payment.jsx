import { useState } from "react";
import PayPal from "../components/PayPal";
import { Button } from "@material-tailwind/react";

const Payment = () => {
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      {checkout ? (
        <PayPal />
      ) : (
        <div>
          <Button
            color="blue"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={() => setCheckout(true)}
          >
            Checkout
          </Button>
        </div>
      )}
    </>
  );
};

export default Payment;
