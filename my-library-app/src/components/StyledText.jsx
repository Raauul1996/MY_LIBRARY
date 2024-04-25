import React from "react";
import { Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

export default function StyledText ({ children, style, type }) {
    let textStyle = globalStyles.text;
  
    switch (type) {
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