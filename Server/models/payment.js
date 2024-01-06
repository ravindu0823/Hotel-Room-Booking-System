import pkg from "mongoose";
const { Schema, model, models, Types } = pkg;

const PaymentSchema = new Schema({
  transactionId: {
    type: String,
    required: [true, "Please add a transactionId"],
  },

  reservationId: {
    type: Types.ObjectId,
    ref: "Reservation",
    required: [true, "Please add reservationId"],
  },

  userId: {
    type: Types.ObjectId,
    ref: "User",
    required: [true, "Please add userId"],
  },

  email: {
    type: String,
    required: [true, "Please add email"],
  },

  amount: {
    type: Number,
    required: [true, "Please add amount"],
  },
});

const Payment = models.Payment || model("Payment", PaymentSchema);

export default Payment;
