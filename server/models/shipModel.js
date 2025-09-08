// models/shipModel.js
const mongoose = require("mongoose");

const shipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Ship name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Collection will be named "ships" automatically
module.exports = mongoose.model("Ship", shipSchema);
