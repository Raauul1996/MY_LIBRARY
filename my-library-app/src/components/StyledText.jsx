import React from "react";
import { Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/styles";

export default function StyledText ({ children, style, type }) {
  let textStyle;

  switch (type) {
    case 'homeTitle':
      textStyle = globalStyles.homeTitle;
      break;
    case 'title':
      textStyle = globalStyles.title;
      break;
    case 'secondary':
      textStyle = [globalStyles.text, globalStyles.secondaryText];
      break;
    default:
      textStyle = globalStyles.text;
      break;
  }

  return <Text style={[textStyle, style]}>{children}</Text>;
};