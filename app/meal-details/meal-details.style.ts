import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
  },
  image: {
    width: '100%',
    height: '33%',
  },
  contentContainer: {
    padding: 24,
    alignItems: 'center',
  },
  mealName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.grayStrong,
    marginBottom: 8,
  },
  totalKcal: {
    fontSize: 18,
    color: colors.gray,
    marginBottom: 16,
  },
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.grayStrong,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  ingredientItem: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
  },
  button: {
    backgroundColor: colors.orangePrimary,
    paddingVertical: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: 'transparent',
    borderColor: colors.orangePrimary,
    borderWidth: 1,
  },
  backButtonText: {
    color: colors.orangePrimary,
  },
});


