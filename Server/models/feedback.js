import pkg from "mongoose";
const { Schema, model, models } = pkg;

const FeedbackSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },

  email: {
    type: String,
    required: [true, "Please add email"],
  },

  feedback: {
    type: String,
    required: [true, "Please add feedback"],
  },
});

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);

export default Feedback;
