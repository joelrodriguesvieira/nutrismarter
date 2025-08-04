import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
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
  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  mealTitle: {
    fontWeight: "bold",
    color: colors.grayStrong,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.orangePrimary,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonSelected: {
    backgroundColor: colors.orangePrimary,
  },
  buttonText: {
    color: colors.orangePrimary,
    fontSize: 16,
    fontWeight: "600",
  },
  buttonTextSelected: {
    color: "#fff",
  },
  continueButton: {
    backgroundColor: "#00B37E",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
