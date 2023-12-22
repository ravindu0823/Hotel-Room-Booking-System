import Food from "../models/food.js";
import { connectToDB } from "../db/conn.js";
import express from "express";

const foodsRouter = express.Router();

foodsRouter.post("/new", async (req, res) => {
  const { foodName, foodCategory, foodType, price, persons, spicinessLevel } =
    req.body;

  if (
    !foodName ||
    !foodCategory ||
    !foodType ||
    !price ||
    !persons ||
    !spicinessLevel
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await connectToDB();

    const savedFood = new Food({
      foodName,
      foodCategory,
      foodType,
      price,
      persons,
      spicinessLevel,
    });

    await savedFood.save();

    console.log(savedFood);
    res.status(201).json(savedFood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

foodsRouter.get("/read", async (req, res) => {
  try {
    await connectToDB();
    const allFoods = await Food.find();
    res.json(allFoods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

foodsRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await connectToDB();
    const food = await Food.findById(id);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json(food);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

foodsRouter.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await connectToDB();
    const updatedFood = await Food.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json(updatedFood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

foodsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await connectToDB();
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json({ message: "Food deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default foodsRouter;
