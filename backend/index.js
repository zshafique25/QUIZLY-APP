const express = require("express");
const Subject = require("./Models/Subject");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const CircularJson = require("circular-json");
const subjectRouter = require("./Routers/subject");
const questionRouter = require("./Routers/question");

const app = express();

app.use(bodyParser.json());
app.use("/subjects", subjectRouter);
app.use("/questions", questionRouter);
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose
  .connect(
    "mongodb+srv://hamdanahmed:hamdanahmed@quizly6.uhbmjrs.mongodb.net/whysoserious"
  )
  .then((msg) => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
