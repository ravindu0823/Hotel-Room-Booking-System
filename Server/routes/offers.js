import Offer from "../models/offer.js";
import { connectToDB } from "../db/conn.js";
import express from "express";

const offersRouter = express.Router();

offersRouter.post("/new", async (req, res) => {
  const { OfferName, Price, Description } = await req.body;


  try {
    await connectToDB();

    const savedOffer = new Offer({
      OfferName,
      Price,
      Description,

    });

    await savedOffer.save();

    console.log(savedOffer);
    res.send(savedOffer).status(201);
  } catch (error) {
    console.log(error);
  }
});


//delete offer
offersRouter.delete("/:offerId", async (req, res)=> {
  const offerId = req.params.offerId;

  try {
    await connectToDB();

    const deletedOffer = await Offer.findByIdAndDelete(offerId);

    if (!deletedOffer) {
      return res.status(404).json({ error: "Offer not found"});
    }

    res.status(200).json(deletedOffer);
}
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error"});
  }
});


// View offer
offersRouter.get("/read", async (req, res) => {

  try {
    await connectToDB();

    const allOffers = await Offer.find();
    res.status(200).json(allOffers);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error"});

  }
});

//get one offer
offersRouter.get("/:offerId", async (req, res)=> {
  const offerId = req.params.offerId;

  try {
    await connectToDB();

    const OneOffer = await Offer.findByIdAndDelete(offerId);

    if (!OneOffer) {
      return res.status(404).json({ error: "Offer not found"});
    }

    res.status(200).json(OneOffer);
}
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error"});
  }
});


//update offers
offersRouter.put("/:offerId", async (req, res)=> {
  const offerId = req.params.offerId;
  const { OfferName, Price, Description } = req.body;

  try {
    await connectToDB();

    const updatedOffer = await Offer.findByIdAndUpdate(
      offerId,
      {
        OfferName,
        Price,
        Description,
    
      },
      { new: true}
    );

    if (!updatedOffer) {
      return res.status(404).json({ error: "Offer not found"});
    }

    res.status(200).json(updatedOffer);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error"});
  }
});

export default offersRouter;
