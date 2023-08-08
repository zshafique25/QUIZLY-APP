import React from "react";
import { Score } from "./Score";
import { Text, View, Dimensions } from "react-native";
import { COLORS, assets } from "../constants";
import { SIZES } from "../constants";

export function ScoreDisplay() {
  return (
    <View
      style={{
        margin: 10,
        borderRadius: SIZES.small,
        backgroundColor: "white",
        width: Dimensions.get("window").width - 20,
        height: Dimensions.get("window").height / 8,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View>
        <Score
          imgUrl={assets.crown}
          category={"Rank"}
          score={"116/600"}
          width={10}
        ></Score>
      </View>

      <View
        style={{
          height: "50%",
          width: 1,
          backgroundColor: COLORS.gray,
          marginTop: 25,
          //   marginBottom: 5,
        }}
      ></View>
      <Score imgUrl={assets.coin} category={"Score"} score={"116/600"}></Score>
      {/* <Score imgUrl={assets.heart} category={"Rank"} score={"116/600"}></Score> */}
    </View>
  );
}
