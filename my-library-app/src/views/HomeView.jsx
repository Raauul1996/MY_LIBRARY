import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import StyledText from '../components/StyledText';
import StyledButton from '../components/StyledButton';
import { globalStyles } from '../styles/styles';

const HomeView = ({ navigation }) => {

  const introduction = `¡Bienvenido a BookScope, tu plataforma literaria definitiva! 
  Aquí, puedes encontrar tu próxima lectura favorita. Con BookScope, tienes la libertad de consultar, crear, modificar y eliminar libros según tus preferencias. 
  Sea cual sea tu gusto, BookScope lo tiene cubierto. Además, puedes  modificar detalles de los libros existentes y eliminarlos. 
  Sumérgete en el mundo de la literatura con BookScope.`;

  const navigateToBooksList = () => {
    navigation.navigate('BooksList');
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
