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

const Offers = models.Offers || model("Offers", OfferSchema);

export default Offers;
