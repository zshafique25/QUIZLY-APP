const mongoose = require("mongoose");

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  options: [String],
  correctOption: String,
});

module.exports = mongoose.model("Question", questionSchema);
