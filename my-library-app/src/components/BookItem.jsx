import React from 'react';
import { View, Image } from 'react-native';
import { globalStyles } from '../styles';
import StyledText from './StyledText';

const BookItem = ({ book }) => {
  return (
    <View style={globalStyles.bookContainer}>
      <View style={globalStyles.imageContainer}>
        <Image source={{ uri: book.photo }} style={globalStyles.bookImage} />
      </View>
      <View style={globalStyles.infoContainer}>
        <StyledText style={globalStyles.title}>{book.title}</StyledText>
        <StyledText style={globalStyles.text}>{book.author}</StyledText>
      </View>
    </View>
  );
};

export default BookItem;