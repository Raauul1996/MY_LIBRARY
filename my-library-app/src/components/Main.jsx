import React from "react";
import Constants from 'expo-constants'
import { Text, View, StyleSheet } from "react-native";
import BooksList from "./BooksList";

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight, 
        flexGrow: 1, 
        marginStart:10
    }
})

export default function Main () {
    return (
        <View style={styles.container}>
            <BooksList/>
        </View>
    )
}