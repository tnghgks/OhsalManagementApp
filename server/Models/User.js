const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  admin: {
    type: Boolean,
  },
});

const model = mongoose.model("User", userSchema);

module.exports = model;
