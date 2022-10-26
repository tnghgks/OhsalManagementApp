const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const model = mongoose.model("User", userSchema);

module.exports = model;
