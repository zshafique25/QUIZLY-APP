import React from "react";
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
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
import { useSelector, useDispatch } from "react-redux";
import { addSubject } from "../redux/subject-slice/SubjectSlice";
import { useEffect } from "react";

// import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const subjects = useSelector((state) => state.subject.value);
  const dispatch = useDispatch();

  // http://172.23.0.1:3000/subjects
  // https://quizly-386119.as.r.appspot.com

  const fetchSubjects = async () => {
    await fetch("https://quizly-386119.as.r.appspot.com/subjects")
      .then((response) => response.json())
      .then((subjects) =>
        subjects.map((subject) => dispatch(addSubject(subject)))
      )
      .catch((err) => console.log("There has been an error" + err.message));
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  console.log(typeof subjects);

  const onPressHandler = () => {
    // console.log("Clicked");
  };

  return (
    <Background>
      <CircleButton imgUrl={assets.profile} right={10} top={10}></CircleButton>
      <CircleButton imgUrl={assets.hum} left={10} top={10}></CircleButton>
      <CustomText
        color={COLORS.white}
        fontSize={SIZES.medium}
        // textAlign={"center"}
        margin={15}
        marginBottom={0}
        paddingBottom={0}
        paddingTop={30}
      >
        Hi Abdullah.
      </CustomText>
      <CustomText
        color={COLORS.white}
        fontSize={30}
        margin={15}
        marginTop={0}
        paddingTop={0}
      >
        Lets Play
      </CustomText>
      <ScoreDisplay></ScoreDisplay>
      <Text
        style={{
          backgroundColor: COLORS.white,
          color: COLORS.lightPurple,
          width: 60,
          marginLeft: 15,
          marginTop: 10,
          borderRadius: SIZES.medium,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        Level 3
      </Text>
      <Text
        style={{
          // backgroundColor: COLORS.white,
          color: COLORS.white,
          fontSize: 30,
          // width: 60
          marginLeft: 15,
          marginTop: 20,
          borderRadius: SIZES.medium,
          justifyContent: "center",
          marginBottom: 10,
          // alignItems: "center",
          // textAlign: "center",
        }}
      >
        Recent Quiz
      </Text>
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        {subjects.map((subject) => (
          <QuizDisplay
            imgUrl={assets.heart}
            key={Math.random()}
            subject={subject}
          >
            {subject.subjectName}
          </QuizDisplay>
        ))}
        {/* <QuizDisplay imgUrl={assets.heart}>Sport</QuizDisplay> */}
      </View>
      <SubmitButton
        text={"Continue"}
        onPressHandler={onPressHandler}
        marginTop={20}
      ></SubmitButton>
    </Background>
    // </SafeAreaView>
  );
}
