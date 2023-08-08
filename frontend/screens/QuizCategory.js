import React from "react";
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

export function QuizCategory() {
  //   const windowWidth = Dimensions.get("window");
  return (
    <Background>
      <CircleButton imgUrl={assets.heart} right={10} top={10}></CircleButton>
      <CircleButton imgUrl={assets.heart} left={10} top={10}></CircleButton>
      <CustomText
        color={COLORS.gray}
        fontSize={15}
        // textAlign={"center"}
        margin={15}
        paddingBottom={0}
        marginBottom={5}
        paddingTop={0}
        paddingLeft={5}
      >
        Choose A Subject
      </CustomText>
      {/* <CustomText
        color={COLORS.white}
        fontSize={30}
        margin={15}
        marginTop={0}
        paddingTop={0}
      >
        Lets Play
      </CustomText> */}
      {/* <ScoreDisplay></ScoreDisplay> */}
      {/* <Text
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
      </Text> */}
      {/* <Text
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
      </Text> */}
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}>
        <QuizDisplay></QuizDisplay>
        <QuizDisplay></QuizDisplay>
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}>
        <QuizDisplay></QuizDisplay>
        <QuizDisplay></QuizDisplay>
      </View>
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}>
        <QuizDisplay></QuizDisplay>
        <QuizDisplay></QuizDisplay>
      </View>
      {/* <SubmitButton text={"Continue"} marginTop={20}></SubmitButton> */}
    </Background>
  );
}
