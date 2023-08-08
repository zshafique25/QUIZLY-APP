import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import {
  CircleButton,
  CustomText,
  RectButton,
  Input,
  SubmitButton,
  ScoreDisplay,
  QuizDisplay,
  QuestionPageImage,
  QuizOption,
} from "../components";
import { Background } from "../boilerplate";
import { assets, COLORS, SIZES } from "../constants";
import { addQuestion } from "../redux/qustion-slice/QuestionSlice";
import { useNavigation } from "@react-navigation/native";
import { VedioRecord } from "./VedioRecord";

export function QuestionPage({ question, index, onNextHandler }) {
  const navigation = useNavigation();
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();
  const [correctOption, setCorrectOption] = useState("");
  const [ref, setRef] = useState(useRef());
  // const aOptionRef = useRef();
  // const bOptionRef = useRef();
  // const cOptionRef = useRef();
  // const dOptionRef = useRef();

  // aOptionRef.current == "A";
  // bOptionRef.current == "B";
  // cOptionRef.current == "C";
  // dOptionRef.current == "D";

  const recievedOptionHandler = (option) => {
    setCorrectOption(option);
  };

  const saveHandler = () => {};

  var containOptions = false;
  const onPressHandler = () => {
    if (index < 9) {
      // navigation.navigate("QuestionPage");
      onNextHandler();
    } else if (index == 9) {
      console.log(score);
      navigation.navigate("Result", { score: score });
    }
  };

  if (question.options != null) {
    containOptions = true;
  }
  // let buttonRef;
  // if (correctOption == "A") {
  //   buttonRef = aOptionRef;
  // } else if (correctOption == "B") {
  //   buttonRef = bOptionRef;
  // } else if (correctOption == "C") {
  //   buttonRef = cOptionRef;
  // } else {
  //   buttonRef = dOptionRef;
  // }

  console.log("The correct option is " + correctOption);

  let counter = 1;

  return (
    <Background>
      {/* <CircleButton imgUrl={assets.heart} right={10} top={10}></CircleButton> */}
      {/* <View style={{ backgroundColor: "white" }}>
        <VedioRecord></VedioRecord>
      </View> */}
      <VedioRecord
        optionHandler={recievedOptionHandler}
        question={question}
      ></VedioRecord>
      <CircleButton imgUrl={assets.hum} left={10} top={10}></CircleButton>
      <CustomText
        color={COLORS.gray}
        fontSize={SIZES.medium}
        // textAlign={"center"}
        marginTop={0}
        marginBottom={0}
        paddingBottom={0}
        paddingTop={30}
        marginLeft={15}
      >
        {question.question}
      </CustomText>

      <QuestionPageImage></QuestionPageImage>
      {containOptions
        ? question.options.map((option, index) => (
            <QuizOption
              score={score}
              option={option}
              correctOption={question.correctOption}
              key={index}
              optionStr={correctOption}
              index={index}
            ></QuizOption>
          ))
        : null}
      <SubmitButton
        onPressHandler={onPressHandler}
        text={"Continue"}
      ></SubmitButton>
    </Background>
  );
}
