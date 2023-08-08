import React, { useState, useRef, useEffect } from "react";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { addOneToScore } from "../redux/score-slice/ScoreSlice";

export function QuizOption({ option, correctOption, optionStr, index }) {
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();
  const buttonRefs = useRef([]);

  const [recievedPrediction, setRecievedPrediction] = useState(optionStr);

  console.log(optionStr);

  const [optionSelected, setOptionSelected] = useState("");
  const onPressHandler = (optionSelected) => {
    setOptionSelected(optionSelected);
    if (optionSelected.option === correctOption) {
      console.log(score);
      dispatch(addOneToScore(score));
      // console.log(score);
      // console.log("i am hit");
    } else {
      console.log("Wrong Answer");
    }
  };

  const handleClickButtonWithKey = (key) => {
    if (buttonRefs.current[key]) {
      buttonRefs.current[key].click();
    }
  };

  if (optionStr == "C") {
    console.log(optionStr);
    // console.log(buttonRef.current);
  }

  // useEffect(() => {
  //   // if (optionStr != null && buttonRef != null && buttonRef.current) {
  //   //   // buttonRef.current.click();
  //   //   // console.log(buttonRef.current);
  //   // }
  //   // if (optionStr == "A") {
  //   //   if (buttonRefs.current[0]) {
  //   //     buttonRefs.current[0].click();
  //   //   }
  //   // } else if (optionStr == "B") {
  //   //   if (buttonRefs.current[1]) {
  //   //     buttonRefs.current[1].click();
  //   //   }
  //   // } else if (optionStr == "C") {
  //   //   if (buttonRefs.current[2]) {
  //   //     buttonRefs.current[2].click();
  //   //   }
  //   // } else if (optionStr == "D") {
  //   //   if (buttonRefs.current[3]) {
  //   //     buttonRefs.current[3].click();
  //   //   }
  //   // }
  //   setTimeout(() => {
  //     // console.log(buttonRefs.current[2].textContent);
  //     console.log(recievedPrediction);
  //   }, 5000);
  // }, [recievedPrediction]);

  // console.log(index);

  // setTimeout(() => {
  //   buttonRefs.current[2].click();
  // }, 2000);

  // buttonRef.current.click();

  // setTimeout(() => {
  //   console.log(buttonRefs.current[0].click());
  // }, 5000);

  return (
    <TouchableOpacity
      onPress={() => onPressHandler({ option })}
      style={{
        margin: 15,
        marginBottom: 5,
        width: Dimensions.get("window").width - 30,
        height: Dimensions.get("window").height / 18,
        justifyContent: "center",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
      }}
      key={index}
      ref={(ref) => (buttonRefs.current[index] = ref)}
    >
      <Text
        style={{
          // backgroundColor: "white",
          color: COLORS.black,
          textAlignVertical: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {option}
      </Text>
    </TouchableOpacity>
  );
}
