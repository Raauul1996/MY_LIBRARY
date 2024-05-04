import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';
import { BooksDataProvider } from './src/context/context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from './src/views/HomeView';
import BooksListView from './src/views/BooksListView';
import BookView from './src/views/BookView';
import UpdateBookView from './src/views/UpdateBookView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <BooksDataProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeView}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="BooksList"
              component={BooksListView}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="Book"
              component={BookView}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="UpdateBook"
              component={UpdateBookView}
              options={{ header: () => null }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </BooksDataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginStart: 10,
  },
});
