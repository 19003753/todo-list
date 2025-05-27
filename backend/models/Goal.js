const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema(
  {
    goal: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", GoalSchema);
