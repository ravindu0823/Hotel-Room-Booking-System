import pkg from "mongoose";
const { Schema, model, models, Types } = pkg;

const MessageSchema = new Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = models.Messages || model("Messages", MessageSchema);

export default Message;
