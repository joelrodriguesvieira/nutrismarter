import LogoNutriSmarter from "@/components/Logo";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "./constants/colors";

export default function InitialScreen() {
  const router = useRouter();

  function handlePress() {
    router.push("/register");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("@/assets/public/initial_image.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Alimentação saudável e acessível, sem segredos.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>COMECE JÁ!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <LogoNutriSmarter />
        <Text style={styles.footerText}>Todos os direitos reservados.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
