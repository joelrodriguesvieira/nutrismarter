import colors from "@/app/constants/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LogoNutriSmarter() {
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
    color: colors.grayStrong,
  },
  brandSmarter: {
    color: colors.orangePrimary,
    fontWeight: "bold",
  },
});
