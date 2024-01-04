export const validatePaymentCreate = (req, res, next) => {
  const { transactionId, reservationId, userId, amount } = req.body.payment;

  if (!transactionId) {
    return res.status(400).json({ error: "Please enter your transactionId" });
  }

  if (!reservationId) {
    return res.status(400).json({ error: "Please enter your reservationId" });
  }

  if (!userId) {
    return res.status(400).json({ error: "Please enter your userId" });
  }
  
  if (!amount) {
    return res.status(400).json({ error: "Please enter your amount" });
  }

  next();
};
