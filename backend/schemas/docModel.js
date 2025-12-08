const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    fullName: {
      type: String,
      required: [true, "full Name is required"],
      set: function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    address: {
      type: String,
      required: [true, "address required"],
    },
    specialization: {
      type: String,
      required: [true, "specialization is required"],
    },
    experience: {
      type: Number,
      required: [true, "experience is required"],
    },
    fees: {
      type: Number,
      required: [true, "fees is required"],
    },
    timings: {
      type: [String],
      required: [true, "work time required"],
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const docSchema = mongoose.model("doctor", doctorSchema);

module.exports = docSchema;
