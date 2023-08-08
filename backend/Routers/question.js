const express = require("express");
const app = express();
const Question = require("../Models/Question");

const router = express.Router();

router.get("/", async (req, res) => {
  const questions = await Question.find({});
  res.send(questions);
});

router.get("/:questionId", async (req, res) => {
  const { questionId } = req.params;
  const question = await Question.findById(questionId);
  console.log("question/questionId Route Hit");
  res.send(question);
});

// router.get("/:questionId", async(req, res)-)

router.post("/", async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.send("Post route hit");
});

module.exports = router;
