import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import allBooks from '../data/allBooks';  // Asegúrate de que la importación del archivo de datos sea correcta
import StyledText from "./StyledText.jsx";
import BookItem from "./BookItem.jsx";

const styles = StyleSheet.create({
    strong: {
        color: '#E5BE01',
        fontWeight: 'bold',
    }
});

export default function BooksList() {
    return (
        <FlatList
            data={allBooks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: book }) => (
                <BookItem book={book}>
                    <StyledText style={styles.strong}>
                        {book.id}
                    </StyledText>
                    <StyledText type="photo">
                        {book.photo}
                    </StyledText>
                    <StyledText type="title">
                        {book.title}
                    </StyledText>
                    <StyledText type="secondary">
                        {book.author}
                    </StyledText>
                </BookItem>
            )}
        />
    );
}