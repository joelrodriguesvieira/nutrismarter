import { Food } from "@/data/foods";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";
import { styles } from "./diet-summary.style";

interface ApiMeal {
  id: string;
  title: string;
  foodMeals: {
    food: Food;
    quantity: number;
  }[];
}

const DietSummaryScreen = () => {
  const router = useRouter();
  const [meals, setMeals] = useState<ApiMeal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);
      const apiUrlBase = process.env.EXPO_PUBLIC_API_URL;
      if (!apiUrlBase) {
        setError("URL da API não configurada.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`${apiUrlBase}/meals`);
        if (!response.ok) {
          throw new Error("Não foi possível buscar as refeições.");
        }
        const data: ApiMeal[] = await response.json();
        setMeals(data);
      } catch (err: any) {
        setError(err.message || "Ocorreu um erro inesperado.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const handleMealPress = (meal: ApiMeal) => {
    const finalFoods = meal.foodMeals.map(item => item.food);

    router.push({
      pathname: "/meal-details" as any,
      params: {
        meal: meal.title,
        originalFoods: JSON.stringify([]),
        substitutes: JSON.stringify(finalFoods),
      },
    });
  };

  const calculateTotalKcal = (meal: ApiMeal) => {
    return meal.foodMeals.reduce((sum, item) => sum + (item.food.kcal || 0), 0);
  };

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.orangePrimary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Minha Dieta</Text>
      </View>
      <FlatList
        style={styles.listContainer}
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleMealPress(item)}
          >
            <View style={styles.textContainer}>
              <Text style={styles.mealTitle}>{item.title}</Text>
            </View>
            <View style={styles.kcalContainer}>
              <Text style={styles.kcalValue}>
                {calculateTotalKcal(item).toFixed(0)}
              </Text>
              <Text style={styles.kcalLabel}>kcal</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma refeição salva ainda.</Text>
        }
      />
    </SafeAreaView>
  );
};

export default DietSummaryScreen;



