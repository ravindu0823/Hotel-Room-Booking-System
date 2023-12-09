import pkg from "mongoose";
const { Schema, model, models } = pkg;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Please add a userName"],
  },

  age: {
    type: Number,
    required: [true, "Please add an age"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
