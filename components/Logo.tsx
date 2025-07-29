import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const LogoNutriSmarter = () => {
  return (
    <View>
      <Text style={styles.brand}>
        Nutri
        <Text style={styles.brandSmarter}>Smarter</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  brand: {
    fontSize: 16,
    color: "#222",
  },
  brandSmarter: {
    color: "#FF6B00",
    fontWeight: "bold",
  },
});
