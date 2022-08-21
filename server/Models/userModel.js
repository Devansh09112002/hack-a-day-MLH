const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  }
});

module.exports = mongoose.model("Users", userSchema);

// hKZ6yIqh6qX6_k0JzPT1dg_aAMkNBNr8to7YFuk8
