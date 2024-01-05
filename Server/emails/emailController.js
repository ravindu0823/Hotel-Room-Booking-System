import nodemailer from "nodemailer";
import generateEmail from "./emailTemplate.js";

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

const sendEmail = async ({ name, email }) => {
  const options = {
    from: "Cinnamon Red <assshka@gmail.com>",
    to: email,
    subject: "Cinnamon Red Hotel Room Booking System",
    html: generateEmail({ name }),
  };

  const res = await transporter.sendMail(options);
  return res;
};

export default sendEmail;
