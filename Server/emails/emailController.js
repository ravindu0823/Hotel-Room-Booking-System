import nodemailer from "nodemailer";
import generateEmail from "./emailTemplate.js";
import generatePaymentConfiremedEmail from "./paymentConfirmedTemplate.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.net",
  port: 465,
  secure: true,
  auth: {
    user: "assshka@gmail.com",
    pass: "chqjuqffvfsccsmt",
  },
});

export const sendEmail = async ({ name, email }) => {
  const options = {
    from: "Cinnamon Red <assshka@gmail.com>",
    to: email,
    subject: "Cinnamon Red Hotel Room Booking System",
    html: generateEmail({ name }),
  };

  const res = await transporter.sendMail(options);
  return res;
};

export const sendPaymentConfirmationEmail = async ({
  email,
  transactionId,
  roomType,
  noOfRooms,
  reservationId,
  checksIn,
  checksOut,
  amount,
  image,
}) => {
  const options = {
    from: "Cinnamon Red <assshka@gmail.com>",
    to: email,
    subject: "Cinnamon Red Hotel Room Booking System",
    html: generatePaymentConfiremedEmail({
      transactionId,
      roomType,
      noOfRooms,
      reservationId,
      checksIn,
      checksOut,
      amount,
      image
    }),
  };

  const res = await transporter.sendMail(options);
  return res;
};
