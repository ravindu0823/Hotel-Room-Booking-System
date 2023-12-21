import pkg from "mongoose";
const { Schema, model, models } = pkg;

const OfferSchema = new Schema({
  OfferName: {
    type: String,
    required: [true, "Please add a OfferName"],
  },

  Price: {
    type: Number,
    required: [true, "Please add price"],
  },

  Description: {
    type: String,
    required: [true, "Please add description"],
  },
 
  

});

const Offer = models.Offer || model("Offer", OfferSchema);

export default Offer;
