import React from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import StyledText from "../components/StyledText";
import StyledButton from "../components/StyledButton"
import deleteBook from "../utils/deleteBook";

export default function BookView ({route}) {
    const {book} = route.params;
    const navigation = useNavigation();

    const handleDeleteBook = async () => {
        try {
          const success = await deleteBook(book.id);
          if (success) {
            Alert.alert('Book deleted successfully');
            navigation.goBack();
          } else {
            Alert.alert('Book deletion failed');
          }
        } catch (error) {
          console.error('Book deletion failed', error);
        }
      }

    return(
        <View style={globalStyles.container}>

            <Image source={{ uri: book.photo }} style={globalStyles.specificBookImage} />
            
            <StyledText style={globalStyles.specificBookTitle}>
                {book.title}
            </StyledText>
            <StyledText type='secondary'>
                {book.author}
            </StyledText>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ab fugit doloremque tempore recusandae, a, aliquam quidem enim, aspernatur autem in quibusdam voluptatibus. Voluptatem aspernatur, dignissimos fugiat dolores saepe officiis!
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
        </View>
    );
}