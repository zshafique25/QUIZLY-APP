import React from "react";
import { Image, Dimensions } from "react-native";
import { assets } from "../constants";

export function QuestionPageImage() {
  return (
    <Image
      source={assets.cricket}
      resizeMode="contain"
      style={{
        // backgroundColor: "black",
        width: Dimensions.get("window").width - 30,
        height: Dimensions.get("window").height / 3 - 30,
        margin: 15,
      }}
    ></Image>
  );
}

// export default QuestionPageImage
