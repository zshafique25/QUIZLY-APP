import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user-slice.js/UserSlice";
import SubjectReducer from "./subject-slice/SubjectSlice";
import QuestionReducer from "./qustion-slice/QuestionSlice";
import ScoreReducer from "./score-slice/ScoreSlice";

export default configureStore({
  reducer: {
    user: UserReducer,
    subject: SubjectReducer,
    question: QuestionReducer,
    score: ScoreReducer,
  },
});
