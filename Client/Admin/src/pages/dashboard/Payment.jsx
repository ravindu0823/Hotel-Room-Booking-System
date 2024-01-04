import axios, { GET_PAYMENTS } from "@/api/axios";
import { PaymentModel } from "@/models/payment"
import { Button, CardBody, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react"
import Swal from "sweetalert2";


const Payment = () => {

    const [paymentData,  setPaymentData] = useState([PaymentModel])

    const tableHeaders = [
        "Full Name / Contact Number",
        "Address",
        "NIC",
        "Room Type",
        "No of Rooms",
        "Food Type",
        "Adults",
        "Childrens",
        "Amount",
        "Transaction ID",
        "Action",
    ];

    useEffect(() => {
        const getPaymentData = async () => {
            const res = await axios.get(GET_PAYMENTS);
            
            if (!res.statusText) {
                console.log("Error while fetching payment data");
            }

            setPaymentData(res.data);
        }

        getPaymentData()
    }, [])

    console.log(paymentData);

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
                const res = await axios.delete(`${GET_PAYMENTS}/${id}`, {
                  headers: {
                    headers: { "Content-Type": "application/json" },
                  },
                });
    
                if (!res.statusText) throw new Error("Not Authorized");
    
                console.log(res.data)
                Swal.fire({
                  title: "Hotel Room Booking System",
                  text: "Done!",
                  icon: "success",
                }).then(() => {
                  setPaymentData(paymentData.filter((el) => el._id !== id));
                });
              } catch (error) {
                console.error(error);
              }
            };
    
            deleteReservation();
          }
        });
      };


  return (
    <div>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">
              Payment Management
            </p>
          </div>
        </div>
      </div>

      <CardBody className="mx-24 mt-10 overflow-x-scroll px-0 pb-2 pt-0">
      <thead>
            <tr>
              {tableHeaders.map((el) => (
                <th
                  key={el}
                  className="border-b border-blue-gray-50 px-5 py-3 text-left"
                >
                  <Typography
                    variant="small"
                    className="text-[11px] font-bold uppercase text-blue-gray-400"
                  >
                    {el}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>


          <tbody>
            {paymentData[0]._id.length === 1 ? (
              <tr>
                <td colSpan={tableHeaders.length} className="text-center py-8">
                  <Typography color="blue-gray" variant="h5">
                    Loading ... No Payment Data Found
                  </Typography>
                </td>
              </tr>
            ): ( <>
            {paymentData.map(
              (
                {
                    _id,
                    transactionId,
                    reservationId,
                    userId,
                    amount
                },
                key,
              ) => {
                const className = `py-3 px-5 ${
                  key === paymentData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={_id}>
                    <td className={className}>
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {userId.fullName}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {userId.contactNumber}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {userId.address}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {userId.nic}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {reservationId.roomId.roomType}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                      {reservationId.noOfRooms}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                      {reservationId.foodType}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                      {reservationId.noOfAdults}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                      {reservationId.noOfChildren}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        ${amount}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {transactionId}
                      </Typography>
                    </td>
                    <td className={className}>
                      <div className={"flex gap-3"}>
                        <Button color="red" onClick={handleDelete} value={_id}>
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              },
            )}
            
            </>)}
            
          </tbody>
          
      </CardBody>


    </div>
  )
}

export default Payment