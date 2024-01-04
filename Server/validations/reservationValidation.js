export const validateReservationForNewUsers = (req, res, next) => {
  const {
    arrivalDate,
    arrivalTime,
    departureDate,
    departureTime,
    roomId,
    noOfRooms,
    foodType,
    noOfAdults,
    noOfChildren,
    specialRequirements,
  } = req.body.reservation;

  const { fullName, userName, password, contactNumber, address, nic } =
    req.body.user;

  if (
    !fullName &&
    !userName &&
    !password &&
    !contactNumber &&
    !address &&
    !nic &&
    !arrivalDate &&
    !arrivalTime &&
    !departureDate &&
    !departureTime &&
    !roomId &&
    !noOfRooms &&
    !foodType &&
    !noOfAdults &&
    !noOfChildren &&
    !specialRequirements
  ) {
    return res.status(400).json({ error: "Please enter all fields" });
  }

  if (!fullName) {
    return res.status(400).json({ error: "Please enter your fullName" });
  }

  if (!userName) {
    return res.status(400).json({ error: "Please enter your userName" });
  }

  if (!password) {
    return res.status(400).json({ error: "Please enter your password" });
  }

  if (!contactNumber) {
    return res.status(400).json({ error: "Please enter your contactNumber" });
  }

  if (!address) {
    return res.status(400).json({ error: "Please enter your address" });
  }

  if (!nic) {
    return res.status(400).json({ error: "Please enter your nic" });
  }

  if (!arrivalDate) {
    return res.status(400).json({ error: "Please enter your arrivalDate" });
  }

  if (!arrivalTime) {
    return res.status(400).json({ error: "Please enter your arrivalTime" });
  }

  if (!departureDate) {
    return res.status(400).json({ error: "Please enter your departureDate" });
  }

  if (!departureTime) {
    return res.status(400).json({ error: "Please enter your departureTime" });
  }

  if (!roomId) {
    return res.status(400).json({ error: "Please enter your roomId" });
  }

  if (!noOfRooms) {
    return res.status(400).json({ error: "Please enter your noOfRooms" });
  }

  if (!foodType) {
    return res.status(400).json({ error: "Please enter your foodType" });
  }

  if (!noOfAdults) {
    return res.status(400).json({ error: "Please enter your noOfAdults" });
  }

  if (!noOfChildren) {
    return res.status(400).json({ error: "Please enter your noOfChildren" });
  }

  if (!specialRequirements) {
    return res
      .status(400)
      .json({ error: "Please enter your specialRequirements" });
  }

  next();
};

export const validateReservationForExistingUsers = (req, res, next) => {
  const {
    userId,
    arrivalDate,
    arrivalTime,
    departureDate,
    departureTime,
    roomId,
    noOfRooms,
    foodType,
    noOfAdults,
    noOfChildren,
    specialRequirements,
  } = req.body.reservation;

  if (
    !userId &&
    !arrivalDate &&
    !arrivalTime &&
    !departureDate &&
    !departureTime &&
    !roomId &&
    !noOfRooms &&
    !foodType &&
    !noOfAdults &&
    !noOfChildren &&
    !specialRequirements
  ) {
    return res.status(400).json({ error: "Please enter all fields" });
  }

  if (!arrivalDate) {
    return res.status(400).json({ error: "Please enter your arrivalDate" });
  }

  if (!arrivalTime) {
    return res.status(400).json({ error: "Please enter your arrivalTime" });
  }

  if (!departureDate) {
    return res.status(400).json({ error: "Please enter your departureDate" });
  }

  if (!departureTime) {
    return res.status(400).json({ error: "Please enter your departureTime" });
  }

  if (!roomId) {
    return res.status(400).json({ error: "Please enter your roomId" });
  }

  if (!noOfRooms) {
    return res.status(400).json({ error: "Please enter your noOfRooms" });
  }

  if (!foodType) {
    return res.status(400).json({ error: "Please enter your foodType" });
  }

  if (!noOfAdults) {
    return res.status(400).json({ error: "Please enter your noOfAdults" });
  }

  if (!noOfChildren) {
    return res.status(400).json({ error: "Please enter your noOfChildren" });
  }

  if (!specialRequirements) {
    return res
      .status(400)
      .json({ error: "Please enter your specialRequirements" });
  }

  next();
};

export const validateReservationId = (req, res, next) => {
  const { reservationId } = req.params;

  if (!reservationId) {
    return res.status(400).json({ error: "Please enter a reservationId" });
  }

  next();
};
