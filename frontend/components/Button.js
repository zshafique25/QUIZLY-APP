import React from "react";
import { Image, Text, TouchableOpacity, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

export function CircleButton({ imgUrl, handlePress, ...props }) {
  return (
    <TouchableOpacity
      style={{
        width: 24,
        height: 24,
        position: "absolute",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
          borderRadius: 10,
          resizeMode: "contain",
        }}
      ></Image>
    </TouchableOpacity>
  );
}

export function RectButton({ imgUrl, handlePress, ...props }) {
  return (
    <TouchableOpacity
      style={{
        width: Dimensions.get("window").width / 4 + 10,
        height: Dimensions.get("window").width / 5 - 20,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small,
        // display: "flex",
        // flexDirection: "row",
        marginTop: 5,
        // textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={
          {
            // width: 24,
            // height: 24,
            // display: "flex",
            // margin: "auto",
            // justifyContent: "center",
            // alignItems: "center",
          }
        }
      ></Image>
    </TouchableOpacity>
  );
}

export function SubmitButton({ imgUrl, text, onPressHandler, ...props }) {
  return (
    <TouchableOpacity
      onPress={() => onPressHandler()}
      style={{
        margin: 15,
        marginTop: 40,
        width: Dimensions.get("window").width - 35,
        height: Dimensions.get("window").width / 6 - 20,
        backgroundColor: COLORS.darkPurple,
        // backgroundColor: "white",
        borderRadius: SIZES.small,
        marginTop: 5,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        ...props,
      }}
    >
      <Text
        source={imgUrl}
        resizeMode="contain"
        style={{
          // height: 24,
          fontSize: 20,
          color: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
