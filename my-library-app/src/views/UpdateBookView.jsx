import React from "react";
import { Text } from "react-native";

export default function UpdateBookView ({route}) {
    const {book} = route.params
    return(
      <Text>
        updateBookView
      </Text>
    )
}