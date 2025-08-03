import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContainer: {
    backgroundColor: colors.orangeStrongHover,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 48,
    marginBottom: 30,
  },
  text: {
    color: colors.white,
    fontSize: 26,
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.orangePrimary,
    marginBottom: 16,
    height: 80,
    overflow: "hidden",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray,
  },
  cardImage: {
    width: 100,
    height: "100%",
  },
});
