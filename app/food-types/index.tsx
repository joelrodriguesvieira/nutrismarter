import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./food-types-style";

const FOOD_TYPES_BY_MEAL = {
  "Café da manhã": ["Frutas", "Cereais", "Proteínas", "Laticínios"],
  Almoço: ["Proteínas", "Verduras", "Leguminosas", "Cereais", "Grãos"],
  Janta: ["Proteínas", "Verduras", "Leguminosas", "Cereais (opcional)"],
  Lanche: ["Frutas", "Cereais", "Proteínas", "Oleaginosas"],
  Ceia: ["Frutas", "Laticínios", "Chás"],
};

export default function FoodTypesScreen() {
  const router = useRouter();
  const { meal } = useLocalSearchParams();

  const mealKey = (
    typeof meal === "string" ? meal : "Almoço"
  ) as keyof typeof FOOD_TYPES_BY_MEAL;

  const availableTypes = FOOD_TYPES_BY_MEAL[mealKey] || [];

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleToggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes((currentTypes) =>
        currentTypes.filter((item) => item !== type)
      );
    } else {
      setSelectedTypes((currentTypes) => [...currentTypes, type]);
    }
  };

  const handleContinue = () => {
    // logica para redirecionamento para outra pagina com dados coletados
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>Seleção para: {mealKey}</Text>
        </View>
        <View style={[styles.container, { padding: 20 }]}>
          {availableTypes.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <TouchableOpacity
                key={type}
                style={[
                  styles.button,
                  { padding: 20 },
                  isSelected && styles.buttonSelected,
                ]}
                onPress={() => handleToggleType(type)}
              >
                <Text
                  style={[
                    styles.buttonText,
                    isSelected && styles.buttonTextSelected,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            );
          })}
          {selectedTypes.length > 0 && (
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
            >
              <Text style={styles.continueButtonText}>CONTINUAR</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
