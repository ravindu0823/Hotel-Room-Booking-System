export const ReservationModel = {
  _id: String,
  userId: {
    _id: String,
    fullName: String,
    userName: String,
    contactNumber: Number,
    address: String,
    nic: Number,
  },
  arrivalDate: String,
  arrivalTime: String,
  departureDate: String,
  departureTime: String,
  roomId: {
    _id: String,
    roomType: String,
    facilities: String,
    persons: Number,
    price: Number,
    image: String,
  },
  noOfRooms: Number,
  foodType: String,
  noOfAdults: Number,
  noOfChildren: Number,
  specialRequirements: String,
};

export const FeedbackModel = {
  name: String,
  email: String,
  feedback: String,
};
