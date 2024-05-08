import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, FlatList, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import StyledText from '../components/StyledText.jsx';
import BookItem from '../components/BookItem.jsx';
import { BooksDataContext } from '../context/context.js';
import { globalStyles } from "../styles/styles.js";
import StyledButton from "../components/StyledButton.jsx";

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 20,
  },
});

export default function BooksListView() {
  const { booksData } = useContext(BooksDataContext);
  const navigation = useNavigation();
  const [booksList, setBooksList] = useState(booksData);

  useEffect(()=>{
    setBooksList(booksData)
  }, [booksData])

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };
  const handleNavigateToCreateBook = () => {
    navigation.navigate('CreateBook')
  }



  return (
    <View style={{ flex: 1 }}>
      <View style={globalStyles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleNavigateToHome}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={globalStyles.headerTitle}>BookScope</Text>
      </View>
      <FlatList
        data={booksList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: book, index }) => (
          <BookItem book={book}>
            <StyledText type="photo">{book.photo}</StyledText>
            <StyledText type="title">{book.title}</StyledText>
            <StyledText type="secondary">{book.author}</StyledText>
            {index === booksList.length - 1 && <View style={{ height: 100 }} />}
          </BookItem>
        )}
        
      />
           <StyledButton title="Crea un nuevo Libro" onPress={handleNavigateToCreateBook} />
    </View>
  );
}
