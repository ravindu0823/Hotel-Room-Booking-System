import pkg from "mongoose";
const { Schema, model, models } = pkg;

const StaffSchema = new Schema({
  staffName: {
    type: String,
    required: [true, "Please add the name of the staff member."],
  },

  Address: {
    type: String,
    required: [true, "Please add the address."],
  },

  contactNumber: {
    type: Number,
    required: [true, "Please add the contact number."],
  },

  emailAddress: {
    type: String,
    required: [true, "Please add the Email address."],
  },

  NIC: {
    type: String,
    required: [true, "Please add the NIC Number."],
  },
});

const Staff = models.Staff || model("Staff", StaffSchema);

export default Staff;
