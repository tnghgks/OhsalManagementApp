import mongoose from "mongoose";

const BattleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userCount: {
    type: Number,
    default: 0,
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

const model = mongoose.model("Battle", BattleSchema);

export default model;
