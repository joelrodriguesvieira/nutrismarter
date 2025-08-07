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
  containerFood: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#eee",
    marginBottom: 10,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  imagePlaceholder: {
    backgroundColor: "#eee",
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#888",
  },
  caloriesContainer: {
    alignItems: "center",
  },
  caloriesNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.orangePrimary,
  },
  caloriesText: {
    fontSize: 12,
    color: "#333",
  },
  portionText: {
    fontSize: 10,
    color: "#aaa",
  },
});
