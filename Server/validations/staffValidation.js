export const validateStaff = (req, res, next) => {
  const { staffName, Address, contactNumber, emailAddress, NIC, image } =
    req.body;

  if (
    !staffName &&
    !Address &&
    !contactNumber &&
    !emailAddress &&
    !NIC &&
    !image
  ) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }

  if (!staffName) {
    return res
      .status(400)
      .json({ error: "Please add the name of the staffName." });
  }

  if (!Address) {
    return res.status(400).json({ error: "Please add the Address." });
  }

  if (!contactNumber) {
    return res.status(400).json({ error: "Please add the contactNumber." });
  }

  if (!emailAddress) {
    return res.status(400).json({ error: "Please add the emailAddress." });
  }

  if (!NIC) {
    return res.status(400).json({
      error: "Please add the NIC Number.",
    });
  }

  if (!image) {
    return res.status(400).json({ error: "Please add image" });
  }

  next();
};
