import Staff from "../models/staff.js";
import { connectToDB } from "../db/conn.js";
import express from "express";
import { validateStaff } from "../validations/staffValidation.js";

const staffRouter = express.Router();

// add new member (start code)
staffRouter.post("/new", validateStaff, async (req, res) => {
  const { staffName, Address, contactNumber, emailAddress, NIC, image } =
    await req.body;

  try {
    await connectToDB();
    const savedStaff = new Staff({
      staffName,
      Address,
      contactNumber,
      emailAddress,
      NIC,
      image,
    });

    await savedStaff.save();

    console.log(savedStaff);
    res.status(201).json(savedStaff);
  } catch (error) {
    console.log(error);
  }
});
// end code

//delete staff(start code)
staffRouter.delete("/:staffId", async (req, res) => {
  const staffId = req.params.staffId;

  try {
    await connectToDB();

    const deletedStaff = await Staff.findByIdAndDelete(staffId);

    if (!deletedStaff) {
      return res.status(404).json({ error: "Staff not found" });
    }

    res.status(200).json(deletedStaff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// end code

// View Staff(start code)
staffRouter.get("/read", async (req, res) => {
  try {
    await connectToDB();

    const allStaff = await Staff.find();
    res.status(200).json(allStaff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// end code

// update staff(start code)
staffRouter.put("/:staffId", async (req, res) => {
  const staffId = req.params.staffId;
  const { staffName, Address, contactNumber, emailAddress, NIC } = req.body;

  try {
    await connectToDB();

    const updatedStaff = await Staff.findByIdAndUpdate(
      staffId,
      {
        staffName,
        Address,
        contactNumber,
        emailAddress,
        NIC,
      },
      { new: true }
    );

    if (!updatedStaff) {
      return res.status(404).json({ error: "Staff not found" });
    }

    res.status(200).json(updatedStaff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
// end code
staffRouter.get("/:staffId", async (req, res) => {
  const { staffId } = req.params;

  try {
    await connectToDB();
    const staff = await Staff.findById(staffId);

    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }

    res.json(staff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
export default staffRouter;
