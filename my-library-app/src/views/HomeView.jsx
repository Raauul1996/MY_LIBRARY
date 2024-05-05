import React, { useContext } from 'react';
import { View } from 'react-native';
import StyledText from '../components/StyledText';
import StyledButton from '../components/StyledButton';
import { globalStyles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { BooksDataContext } from '../context/context';

const HomeView = () => {
  const navigation = useNavigation();
  const { getBooksData } = useContext(BooksDataContext);

  const introduction = `¡Bienvenido a BookScope, tu plataforma literaria definitiva! 
  Aquí, puedes encontrar tu próxima lectura favorita. Con BookScope, tienes la libertad de consultar, crear, modificar y eliminar libros según tus preferencias. 
  Sea cual sea tu gusto, BookScope lo tiene cubierto. Además, puedes modificar detalles de los libros existentes y eliminarlos. 
  Sumérgete en el mundo de la literatura con BookScope.`;

  const navigateToBooksList = async () => {
    navigation.navigate('BooksList');
    await getBooksData();
  };

  return (
    <View style={globalStyles.homeContainer}>
      <StyledText type='homeTitle'>BookScope</StyledText>
      <StyledText>{introduction}</StyledText>
      <StyledButton title="Ver libros" onPress={navigateToBooksList} />
    </View>
  );
};

export default HomeView;