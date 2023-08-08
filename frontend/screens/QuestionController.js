import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion } from "../redux/qustion-slice/QuestionSlice";
import { QuestionPage } from "./QuestionPage";
import { useNavigation } from "@react-navigation/native";

export function QuestionController({ route }) {
  const navigation = useNavigation();

  const [score, setScore] = useState(0);
  const questions = useSelector((state) => state.question.value);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  // console.log(this.props.navigation.getParam("subjectData"));
  //   const windowWidth = Dimensions.get("window");
  const { subjectData } = route.params;
  // console.log(subjectData);
  var isLastElement = false;
  const [dataLoaded, setDataLoaded] = useState(false);
  // https://quizly-386119.as.r.appspot.com
  const fetchQuestion = async (questionId) => {
    await fetch(
      `https://quizly-386119.as.r.appspot.com/questions/${questionId}`
    )
      .then((response) => response.json())
      .then((question) => dispatch(addQuestion(question)))
      .catch((err) => console.log("There has been an error" + err.message));
  };

  // console.log(subjectData[0].questions);
  // const getAllQuestions = async () => {
  //   await subjectData.questions.forEach((element) => {
  //     // console.log("Before calling a function");
  //     fetchQuestion(element);
  //     // console.log("After calling a function");
  //   });
  // };

  useEffect(() => {
    const delay = 2000;
    const getAllQuestions = async () => {
      await subjectData.questions.forEach((element) => {
        // console.log("Before calling a function");
        fetchQuestion(element);
        // console.log("After calling a function");
      });
    };
    getAllQuestions();
    const timeoutId = setTimeout(() => {
      setDataLoaded(true);
    }, delay);
  }, []);
  // for (let i = 0; i < 5; i++) {
  //   text += "The number is " + i + "<br>";
  // }

  const renderNextElement = () => {
    // Check if the current index is within the array bounds
    if (index < questions.length - 1) {
      setIndex(index + 1);
    }
  };

  const scoreNavigator = () => {
    navigation.navigate("Result", { score: score });
  };

  console.log(questions);
  console.log("hello");
  return (
    <View>
      {dataLoaded && (
        <QuestionPage
          question={questions[index]}
          index={index}
          score={score}
          onNextHandler={renderNextElement}
        ></QuestionPage>
      )}
      {/* {questions != null ? (
        <QuestionPage
          question={questions[index]}
          index={index}
          score={score}
          onNextHandler={renderNextElement}
        ></QuestionPage>
      ) : (
        scoreNavigator()
      )} */}
      {/* {/* <QuestionPage questions= {questions} score = score></QuestionPage> */}
      {/* {questions === null ? <Text>{questions[index].question}</Text> : null} */}
    </View>
  );
}

// export default QuestionController
