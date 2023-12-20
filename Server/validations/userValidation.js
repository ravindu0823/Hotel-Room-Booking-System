export const validateUserAdd = (req, res, next) => {
  const { fullName, userName, password, contactNumber, address, nic } =
    req.body;

  if (!userName && !password && !fullName && contactNumber && address && nic) {
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

  next();
};

export const validateUserLogin = (req, res, next) => {
  const { userName, password } = req.body;

  if (!userName && !password) {
    return res.status(400).json({ error: "Please enter all fields" });
  }

  if (!userName) {
    return res.status(400).json({ error: "Please enter your userName" });
  }

  if (!password) {
    return res.status(400).json({ error: "Please enter your password" });
  }

  next();
};
