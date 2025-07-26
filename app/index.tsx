// src/screens/InitialScreen.tsx
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function InitialScreen() {
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>COMECE JÁ!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.brand}>
          Nutri
          <Text style={styles.brandSmarter}>Smarter</Text>
        </Text>
        <Text style={styles.footerText}>Todos os direitos reservados.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'InterLigth',
    flex: 1,
    backgroundColor: "#fff",
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
    color: "#767676",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    textAlign: "center",
    backgroundColor: "#FF6B00",
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  brand: {
    fontSize: 16,
    color: "#222",
  },
  brandSmarter: {
    color: "#FF6B00",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
});
