const express = require("express");
const app = express();
// const Question = require("../Models/Question");
const Subject = require("../Models/Subject");
// var ObjectId = require("mongodb").ObjectID;
const mongoose = require("mongoose");
const Question = require("../Models/Question");

const router = express.Router();

// router.get("/", async (req, res) => {});

router.get("/", async (req, res) => {
  const subjects = await Subject.find({});
  console.log(subjects);
  res.send(subjects);
});

router.get("/:subjectId", async (req, res) => {
  const { questionId, subjectId } = req.params;
  const subject = await Subject.findById(subjectId).populate("questions");
  // const question = await Question.findById(questionId);
  // console.log(questionId);
  // console.log("I am hit");
  // console.log();
  res.send(subject);
});

// router.get("/:questionId", async (req, res) => {
//   const { questionId } = req.params;
//   const question = await Question.findById(questionId);
//   console.log(questionId);
//   // console.log("I am hit");
//   // console.log();
//   res.send(question.question);
// });

router.post("/", async (req, res) => {
  const subject = new Subject(req.body);
  subject.questions = ["645575b924acd84b02d37ba9"];
  console.log(subject.questions);
  await subject.save();
  // console.log(req.body);
  res.send("Post route hit");
});

module.exports = router;
