import React from "react";
import { View, Text, TextInput } from "react-native";
import { COLORS, SIZES } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { CustomText } from "./CustomText";

export function Input({ text }) {
  return (
    <View>
      <CustomText
        color={COLORS.gray}
        margin={10}
        marginBottom={0}
        paddingBottom={0}
      >
        {text}
      </CustomText>
      <TextInput
        placeholder={`Enter ${text}`}
        style={{
          height: 40,
          margin: 12,
          marginTop: SIZES.small,
          borderWidth: 1,
          padding: 10,
          borderColor: COLORS.white,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.small,
          marginRight: 20,
        }}
      ></TextInput>
    </View>
  );
}
