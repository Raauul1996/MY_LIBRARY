import React, { useState, useContext } from "react";
import { View, ScrollView, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/styles";
import StyledText from "../components/StyledText";
import StyledInput from "../components/StyledInput"; 
import StyledButton from "../components/StyledButton";
import updateBook from "../utils/updateBook";
import { BooksDataContext } from "../context/context";

const UpdateBookView = ({ route }) => {
  const { book } = route.params;
  const navigation = useNavigation();
  const { getBooksData } = useContext(BooksDataContext);

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
  const [photo, setPhoto] = useState(book.photo);

  const handleUpdateBook = async () => {
    const updatedBook = {
      title: title,
      author: author,
      description: description,
      photo: photo,
    };
    try {
      const success = await updateBook(book.id, updatedBook);
      if (success) {
        await getBooksData();
        Alert.alert("¡El libro se ha actualizado correctamente!");
        navigation.goBack();
      } else {
        Alert.alert("¡Error al actualizar el libro!");
      }
    } catch (error) {
      console.error("Error updating the book", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <StyledText style={globalStyles.specificBookTitle}>
          Actualizar Libro
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
        <StyledButton title="Guardar Cambios" onPress={handleUpdateBook} />
      </View>
    </ScrollView>
  );
};

export default UpdateBookView;