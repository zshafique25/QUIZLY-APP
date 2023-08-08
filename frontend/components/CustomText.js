import React from "react";
import { Text } from "react-native";
import { COLORS } from "../constants";

export function CustomText({ children, ...props }) {
  // console.log(styles);
  // console.log(children);
  return <Text style={{ ...props }}>{children}</Text>;
}
