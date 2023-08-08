import React from "react";
import { Image, TouchableOpacity, Dimensions, Text } from "react-native";
import { assets, COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

export function QuizDisplay({ children, imgUrl, subject, ...props }) {
  const navigation = useNavigation();
  if (subject.subjectName == "Science") {
    imgUrl = assets.science;
  } else {
    imgUrl = assets.sport;
  }

  // console.log(props.subject);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("QuestionController", {
          subjectData: subject,
        });
        // console.log(subject);
      }}
      style={{
        margin: 10,
        // marginTop: 40,
        width: Dimensions.get("window").width / 2 - 30,
        height: Dimensions.get("window").width / 2 - 20,
        backgroundColor: COLORS.white,
        // backgroundColor: "white",
        borderRadius: SIZES.small,
        marginTop: 5,
        marginRigth: 10,
        // width: "100%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        ...props,
      }}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 80, height: 80 }}
      ></Image>
      <Text style={{ fontSize: 20 }}>{subject.subjectName}</Text>
    </TouchableOpacity>
  );
}
