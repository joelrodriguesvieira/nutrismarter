import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
    paddingVertical: 40,
    paddingHorizontal: 50,
    justifyContent: "space-evenly",
    gap: 20,
  },
  headerForm: {
    width: "100%",
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
    color: colors.grayThin,
  },
  mainForm: {
    marginBottom: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#e5e5e5",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginBottom: 12,
  },
  confirmButton: {
    backgroundColor: colors.orangeStrongHover,
    width: "100%",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 8,
  },
  confirmText: {
    color: colors.white,
    fontWeight: "600",
  },
  backButton: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderColor: colors.orangeStrongHover,
    borderWidth: 1,
    borderRadius: 4,
  },
  backText: {
    color: colors.orangeStrongHover,
    fontWeight: "600",
    fontSize: 12,
  },
  textError: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
});
