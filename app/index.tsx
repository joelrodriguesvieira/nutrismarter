import { styles } from "@/app/initial-screen.style";
import LogoNutriSmarter from "@/components/Logo";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function InitialScreen() {
  const router = useRouter();

  const handlePress = () => {
    router.push("/register");
  };

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
