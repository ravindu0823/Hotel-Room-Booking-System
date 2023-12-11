import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const FoodSchema = new Schema({
  // Name of the food
  foodName: {
    type: String,
    required: [true, "Please Enter the Food name"],
  },

  // (Veg, Non-Veg, Vegan, etc)
  foodCategory: {
    type: String,
    required: [true, "Please Enter the Food Category"],
  },

  // (lunch, dinner, breakfast, etc)
  foodType: {
    type: String,
    required: [true, "Please Select a Food type"],
  },

  // Price
  price: {
    type: Number,
    required: [true, "Please add the price"],
  },

  // Persons
  persons: {
    type: Number,
    required: [true, "Please add the number of persons needed"],
  },

  // Spiciness Level
  spicinessLevel: {
    type: String,
    required: [true, "Please add the spiciness level"],
  },
});

const Food = models.Food || model("Food", FoodSchema);

export default Food;
