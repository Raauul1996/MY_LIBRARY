import React, { useState, useContext } from "react";
import { View, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/styles";
import StyledText from "../components/StyledText";
import StyledInput from "../components/StyledInput"; 
import StyledButton from "../components/StyledButton";
import createBook from "../utils/createBook";
import { BooksDataContext } from "../context/context";

const CreateBookView = ({ route }) => {
  const navigation = useNavigation();
  const { getBooksData } = useContext(BooksDataContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');

  const handleCreateBook = async () => {
    const createdBook = {
      title: title,
      author: author,
      description: description,
      photo: photo,
    };
    try {
      const success = await createBook(createdBook);
      if (success) {
        await getBooksData();
        Alert.alert("¡El libro se ha creado correctamente!");
        navigation.goBack();
      } else {
        Alert.alert("¡Error al crear el libro!");
      }
    } catch (error) {
      console.error("Error creating the book", error);
    }
  };

  return (
    <View style={globalStyles.generalContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <View style={globalStyles.container}>
          <StyledText style={globalStyles.specificBookTitle}>
            Crea tu Libro
          </StyledText>
          <StyledText style={globalStyles.secondaryText}>Título</StyledText>
          <StyledInput
            value={title}
            onChangeText={setTitle}
            required
          />
          <StyledText style={globalStyles.secondaryText}>Autor</StyledText>
          <StyledInput
            value={author}
            onChangeText={setAuthor}
            required
          />
          <StyledText style={globalStyles.secondaryText}>Descripción</StyledText>
          <StyledInput
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            required
          />
          <StyledText style={globalStyles.secondaryText}>URL Imagen Portada</StyledText>
          <StyledInput
            value={photo}
            onChangeText={setPhoto}
            required
          />
          <StyledButton title="Guardar Libro" onPress={handleCreateBook} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateBookView;
