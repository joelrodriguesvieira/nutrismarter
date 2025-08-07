import { StyleSheet } from "react-native";
import colors from "../constants/colors"; 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 20,
  },
  mealName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.black,
  },
  totalKcal: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.orangeStrongHover,
    marginBottom: 20,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: colors.black,
  },
  ingredientItem: {
    fontSize: 16,
    marginBottom: 6,
    color: colors.black,
  },
});
