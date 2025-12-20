const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city:{
    type: String,
    required:true,
  },
  email:{
    type: String,
    required:true,
  },
  password:{
    type: Number,
    required:true,
  }
});

module.exports = mongoose.model("Data", userData);

