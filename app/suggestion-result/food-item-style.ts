import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
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
  containerSelected: {
    borderColor: colors.orangePrimary,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  imagePlaceholder: {
    backgroundColor: "#eee",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
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
    paddingHorizontal: 10,
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
