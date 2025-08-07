import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
  },
  topContainer: {
    backgroundColor: colors.orangeStrongHover,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
    marginBottom: 16,
  },
  headerText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.orangePrimary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  textContainer: {
    flex: 1,
  },
  mealTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.grayStrong,
  },
  kcalContainer: {
    alignItems: 'center',
  },
  kcalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.grayStrong,
  },
  kcalLabel: {
    fontSize: 12,
    color: colors.gray,
  },
  emptyText: {
    fontSize: 16,
    color: colors.gray,
    textAlign: 'center',
    marginTop: 40,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});


