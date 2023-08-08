import { useEffect } from "react";
import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import {
  CircleButton,
  CustomText,
  RectButton,
  Input,
  SubmitButton,
  ScoreDisplay,
  QuizDisplay,
} from "../components";
import { Background } from "../boilerplate";
import { assets, COLORS, SIZES } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { VedioRecord } from "./VedioRecord";
import { removeQuestion } from "../redux/qustion-slice/QuestionSlice";

export function Result() {
  const navigation = useNavigation();
  const questions = useSelector((state) => state.question.value);

  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();
  //   const windowWidth = Dimensions.get("window");

  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  const emptyQuestionArray = async (questionsArray) => {
    await questionsArray.forEach((question) => {
      dispatch(removeQuestion());
    });
  };

  useEffect(() => {
    return () => {
      emptyQuestionArray(questions);
    };
  }, []);
  console.log(questions);

  return (
    <Background>
      <CircleButton imgUrl={assets.profile} right={10} top={10}></CircleButton>
      <CircleButton imgUrl={assets.hum} left={10} top={10}></CircleButton>
      <CustomText
        color={COLORS.white}
        margin={15}
        marginBottom={0}
        paddingBottom={0}
        paddingTop={30}
        textAlign={"center"}
        fontSize={40}
      >
        Good Job
      </CustomText>
      <CustomText
        color={COLORS.white}
        margin={15}
        marginBottom={0}
        paddingBottom={0}
        paddingTop={30}
        fontSize={20}
      >
        You Got {score} correct answers
      </CustomText>
      <SubmitButton
        text={"Back To Home"}
        marginTop={40}
        onPressHandler={onPressHandler}
      ></SubmitButton>
    </Background>
  );
}
