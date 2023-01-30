import mongoose from "mongoose";

const Message = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  text: {
    type: String,
  },
  contacted: {
    type: String,
    default: "لا",
  },
  comment: {
    type: String,
  },
  adminName: {
    type: String,
  },
});

const MessageModel = mongoose.model("MessageModel", Message);

export default MessageModel;
