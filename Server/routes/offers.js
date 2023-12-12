import Offer from "../models/offer.js";
import { connectToDB } from "../db/conn.js";
import express from "express";

const offersRouter = express.Router();

offersRouter.post("/new", async (req, res) => {
  const { OfferName, Price } = await req.body;


  try {
    await connectToDB();

    const savedOffer = new Offer({
      OfferName,
      Price,
    });

    await savedOffer.save();

    console.log(savedOffer);
    res.send(savedOffer).status(201);
  } catch (error) {
    console.log(error);
  }
});

export default offersRouter;
