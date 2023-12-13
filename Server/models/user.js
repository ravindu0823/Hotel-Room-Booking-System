import pkg from "mongoose";
const { Schema, model, models } = pkg;
import bcrypt from "bcrypt";

//(Full Name, username, password, Contact Number, Address, NIC)

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please enter Full Name"],
  },

  userName: {
    type: String,
    required: [true, "Please enter userName"],
  },

  password: {
    type: String,
    required: [true, "Please enter password"],
  },

  contactNumber: {
    type: Number,
    required: [true, "Please enter contactNumber"],
  },

  address: {
    type: String,
    required: [true, "Please enter address"],
  },

  nic: {
    type: String,
    required: [true, "Please enter nic"],
  },
});

//  Hash the password
UserSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Validate the password
UserSchema.methods.validPassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

const User = models.User || model("User", UserSchema);

export default User;
