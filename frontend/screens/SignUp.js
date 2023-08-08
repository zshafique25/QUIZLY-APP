import React from "react";
import { Text, Dimensions, View } from "react-native";
import {
  CircleButton,
  CustomText,
  RectButton,
  Input,
  SubmitButton,
} from "../components";
import { Background } from "../boilerplate";
import { assets, COLORS, SIZES } from "../constants";

export function SignUp() {
  //   const windowWidth = Dimensions.get("window");
  return (
    <Background>
      <CircleButton imgUrl={assets.heart} right={10} top={10}></CircleButton>
      <CircleButton imgUrl={assets.heart} left={10} top={10}></CircleButton>
      <CustomText
        color={COLORS.white}
        fontSize={SIZES.extraLarge}
        textAlign={"center"}
      >
        SignUp
      </CustomText>
      <CustomText
        color={COLORS.gray}
        fontSize={SIZES.small}
        // textAlign={"center"}
        margin={10}
        paddingTop={30}
      >
        SignUp with one of the following options.
      </CustomText>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <RectButton margin={10} imgUrl={assets.badge}></RectButton>
        <RectButton margin={10} imgUrl={assets.badge}></RectButton>
        <RectButton margin={10} imgUrl={assets.badge}></RectButton>
      </View>
      <Input text={"Name"}></Input>
      <Input text={"Email"}></Input>
      <Input text={"Password"}></Input>
      <SubmitButton text={"Sign Up"} imgUrl={assets.heart}></SubmitButton>
    </Background>
  );
}
