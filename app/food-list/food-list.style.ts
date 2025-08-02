import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchContainer: {
    backgroundColor: colors.orangeStrongHover,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 48,
  },
  searchInput: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
  },
  clearText: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 10,
  },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.orangeStrongHover,
    borderRadius: 8,
    padding: 8,
    paddingRight: 15,
    marginBottom: 12,
    alignItems: "center",
    backgroundColor: colors.whiteBackground,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  foodName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  foodType: {
    color: colors.grayThin,
    fontSize: 14,
  },
  caloriesContainer: {
    alignItems: "center",
  },
  kcalSmall: {
    fontSize: 10,
  },
  kcalBig: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
