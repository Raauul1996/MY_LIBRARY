import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { globalStyles } from '../styles/styles';
import StyledText from './StyledText';

const BookItem = ({ book }) => {
  const navigation = useNavigation()
  
  const handleNavigateToBook = () => {
    navigation.navigate('Book', { book })
  }

  return (
    <TouchableOpacity onPress={handleNavigateToBook}>
      <View style={globalStyles.bookContainer}>
        <View style={globalStyles.imageContainer}>
          <Image source={{ uri: book.photo }} style={globalStyles.bookImage} />
        </View>
        <View style={globalStyles.infoContainer}>
          <StyledText style={globalStyles.title}>{book.title}</StyledText>
          <StyledText style={globalStyles.secondaryText}>{book.author}</StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;