import { StyleSheet } from 'react-native';
import { theme } from './theme';
import Constants from 'expo-constants';

export const globalStyles = StyleSheet.create({
  
  generalContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor:theme.colors.background,
    marginTop: Constants.statusBarHeight,
  },

  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  scrollContainer: {
    flex:0,
    backgroundColor:theme.colors.background,
    minHeight:'100%',
    minWidth:'100%'
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50,
    height:'auto',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  bookContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  infoContainer: {
    flex: 2,
  },
  bookImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 3 / 4,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle:'italic',
    marginBottom: 10,
  },
  specificBookTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  homeTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 5,
  },
  secondaryText: {
    fontSize: 20,
    color: theme.colors.accent,
    marginBottom: 20,
    fontStyle:'italic',
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: theme.colors.primary,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButton: {
    backgroundColor: theme.colors.placeholder,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  specificBookImage: {
    width: '50%',
    height: undefined,
    aspectRatio: 2 / 4,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  input: {
    width: '100%',
    height: 'auto',
    backgroundColor: theme.background,
    borderBottomColor: theme.border,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    color: theme.text,
  }
});