import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  createBy: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("Event", EventSchema);

export default model;
