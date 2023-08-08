const mongoose = require("mongoose");
const Question = require("./Question");

const { Schema } = mongoose;

const subjectSchema = new Schema({
  subjectName: { type: String },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

module.exports = mongoose.model("Subject", subjectSchema);
