import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,
    paddingTop: 50,
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
  text: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 5,
  },
  secondaryText: {
    color: theme.colors.accent,
  },
});