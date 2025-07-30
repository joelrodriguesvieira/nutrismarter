import { StyleSheet } from "react-native";
import colors from "./constants/colors";

export const styles = StyleSheet.create({
  container: {
    fontFamily: "InterLigth",
    flex: 1,
    backgroundColor: colors.whiteBackground,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  content: {
    paddingVertical: 35,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    width: "60%",
    fontSize: 18,
    color: colors.gray,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    textAlign: "center",
    backgroundColor: colors.orangePrimary,
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 2,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: colors.grayFooter,
    marginTop: 4,
  },
});
