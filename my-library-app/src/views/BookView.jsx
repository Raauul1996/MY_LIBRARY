import React, { useState, useEffect, useContext } from "react";
import { Text, View, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { globalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import getOneBook from "../utils/getOneBook";
import StyledText from "../components/StyledText";
import deleteBook from "../utils/deleteBook";
import { BooksDataContext } from "../context/context";

export default function BookView ({ route }) {
    const { bookId } = route.params;
    const navigation = useNavigation();
    const { booksData, getBooksData } = useContext(BooksDataContext);
    const [book, setBook] = useState(null);

    const getOneBookData = async (id) => {
        const data = await getOneBook(id);
        setBook(data);
    }
    
    useEffect(() => {
        getOneBookData(bookId);
    }, [booksData]);


    const handleDeleteBook = async () => {
        try {
            const success = await deleteBook(bookId);
            if (success) {
                Alert.alert('Book deleted successfully');
                getBooksData();
                navigation.goBack();
            } else {
                Alert.alert('Book deletion failed');
            }
        } catch (error) {
            console.error('Book deletion failed', error);
        }
    }

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
            <View style={globalStyles.container}>
                {book && (
                    <>
                        <Image source={{ uri: book.photo }} style={globalStyles.specificBookImage} />
                        <StyledText style={globalStyles.specificBookTitle}>
                            {book.title}
                        </StyledText>
                        <StyledText type='secondary'>
                            {book.author}
                        </StyledText>
                        <Text>
                            {book.description}
                        </Text>
                        <View style={globalStyles.headerContainer}>
                            <TouchableOpacity
                                style={globalStyles.deleteButton}
                                onPress={handleDeleteBook}
                            >
                                <AntDesign name="delete" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={globalStyles.updateButton}
                                onPress={() => navigation.navigate('UpdateBook', { book })}
                            >
                                <AntDesign name='edit' size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
        </ScrollView>
    );
}
