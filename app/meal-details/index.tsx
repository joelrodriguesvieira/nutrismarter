import { Food } from "@/data/foods";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";
import { styles } from "./meal-details.style";

const MealDetailsScreen = () => {
  const router = useRouter();
  const { meal, originalFoods, substitutes } = useLocalSearchParams<{
    meal: string;
    originalFoods: string;
    substitutes: string;
  }>();

  const originals: Food[] = originalFoods ? JSON.parse(originalFoods) : [];
  const substituteOptions: Food[] = substitutes ? JSON.parse(substitutes) : [];

  const totalKcal = originals.reduce((sum, food) => sum + (food.kcal || 0), 0);

  const [isSaving, setIsSaving] = React.useState(false);

  const handleGoBack = () => {
    router.back();
  };

  const handleAddMeal = async () => {
    setIsSaving(true);
    const apiUrlBase = process.env.EXPO_PUBLIC_API_URL;
    if (!apiUrlBase || !meal || substituteOptions.length === 0) {
      setIsSaving(false);
      return;
    }

    const foodMealIds = substituteOptions.map((food) => food.id);
    const finalMeal = {
      title: meal,
      foodMealIds,
    };

    try {
      const response = await fetch(`${apiUrlBase}/meals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalMeal),
      });

      if (!response.ok) {
        throw new Error('Não foi possível salvar a refeição.');
      }

      router.push('/main');

    } catch (error) {
      console.error('Erro ao salvar refeição:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{
            uri: "https://ogimg.infoglobo.com.br/in/21488096-28e-0b5/FT1086A/INFOCHPDPICT000068420247.jpg",
          }}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.mealName}>{meal || "Nome da Refeição"}</Text>
          <Text style={styles.totalKcal}>
            Total: {totalKcal.toFixed(0)} kcal
          </Text>

          <Text style={styles.ingredientsTitle}>Ingredientes Originais</Text>
          {originals.length > 0 ? (
            originals.map((food) => (
              <Text key={food.id} style={styles.ingredientItem}>
                - {food.name} ({food.kcal} kcal)
              </Text>
            ))
          ) : (
            <Text style={styles.ingredientItem}>Nenhum ingrediente original.</Text>
          )}

          <Text style={[styles.ingredientsTitle, { marginTop: 20 }]}>
            Opções de Substitutos
          </Text>
          {substituteOptions.length > 0 ? (
            substituteOptions.map((food) => (
              <Text key={food.id} style={styles.ingredientItem}>
                - {food.name} ({food.kcal} kcal)
              </Text>
            ))
          ) : (
            <Text style={styles.ingredientItem}>Nenhum substituto encontrado.</Text>
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.backButton]}
              onPress={handleGoBack}
            >
              <Text style={[styles.buttonText, styles.backButtonText]}>
                VOLTAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, isSaving && { backgroundColor: colors.gray }]}
              onPress={handleAddMeal}
              disabled={isSaving}
            >
              <Text style={styles.buttonText}>
                {isSaving ? 'SALVANDO...' : 'ADICIONAR COMO REFEIÇÃO'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealDetailsScreen;






