import React from "react";
import { Text, StyleSheet, View, Platform, StatusBar } from "react-native";
import { COLORS } from "../constants";

export function Background({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 0,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
});
