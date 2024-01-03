export const validateRoomAdd = (req, res, next) => {
  const { roomType, facilities, persons, price, image } = req.body;

  if (!roomType && !facilities && !persons && !price) {
    return res.status(400).json({ error: "Please enter all fields" });
  }

  if (!roomType) {
    return res.status(400).json({ error: "Please enter roomType" });
  }

  if (!facilities) {
    return res.status(400).json({ error: "Please enter facilities" });
  }

  if (!persons) {
    return res.status(400).json({ error: "Please enter persons" });
  }

  if (!price) {
    return res.status(400).json({ error: "Please enter price" });
  }

  if (!image) {
    return res.status(400).json({ error: "Please enter image" });
  }

  next();
};
