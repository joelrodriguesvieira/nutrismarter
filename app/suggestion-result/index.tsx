import { Food } from "@/data/foods";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";
import FoodItem from "./food-item";
import { styles } from "./index-style";

export default function SuggestionResultScreen() {
  const router = useRouter();
  const { meal, types } = useLocalSearchParams();

  const [fetchedFoods, setFetchedFoods] = useState<Food[]>([]);
  const [selectedFoods, setSelectedFoods] = useState<Food[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isFinalizing, setIsFinalizing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrlBase = process.env.EXPO_PUBLIC_API_URL;
    if (!apiUrlBase) {
      setError("A URL da API não está configurada.");
      setIsLoading(false);
      return;
    }

    let foodTypes: string[] = [];
    if (Array.isArray(types)) {
      foodTypes = types;
    } else if (typeof types === "string") {
      foodTypes = types.split(",");
    }

    if (foodTypes.length === 0) {
      setIsLoading(false);
      return;
    }

    const fetchFoods = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const apiUrl = `${apiUrlBase}/foods?types=${foodTypes.join(",")}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(
            "Não foi possível buscar os alimentos. Verifique se a API está rodando."
          );
        }
        const data: Food[] = await response.json();
        setFetchedFoods(data);
      } catch (err: any) {
        setError(err.message || "Ocorreu um erro inesperado.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFoods();
  }, [types]);

  const foodSections = useMemo(() => {
    const searchFilteredFoods = fetchedFoods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let foodTypes: string[] = [];
    if (Array.isArray(types)) {
      foodTypes = types;
    } else if (typeof types === "string") {
      foodTypes = types.split(",");
    }

    return foodTypes
      .map((type) => ({
        title: type,
        data: searchFilteredFoods.filter((food) => food.type === type),
      }))
      .filter((section) => section.data.length > 0);
  }, [types, searchTerm, fetchedFoods]);

  const handleToggleFood = (food: Food) => {
    setSelectedFoods((prevSelected) =>
      prevSelected.find((item) => item.id === food.id)
        ? prevSelected.filter((item) => item.id !== food.id)
        : [...prevSelected, food]
    );
  };

  const handleFinalize = async () => {
    if (selectedFoods.length === 0) {
      return;
    }

    setIsFinalizing(true);
    setError(null);
    try {
      const apiUrlBase = process.env.EXPO_PUBLIC_API_URL;
      if (!apiUrlBase) {
        throw new Error("A URL da API não está configurada.");
      }

      const substitutePromises = selectedFoods.map(async (food) => {
        const url = `${apiUrlBase}/foods/${food.id}/substitutes`;
        const response = await fetch(url);
        if (!response.ok) {
          console.warn(`Não foi possível buscar substitutos para ${food.name} na URL: ${url}`);
          return null;
        }
        const substitutes: Food[] = await response.json();
        if (substitutes.length > 0) {
          const randomIndex = Math.floor(Math.random() * substitutes.length);
          return substitutes[randomIndex];
        }
        return null;
      });

      const results = await Promise.all(substitutePromises);
      const allSubstitutes = results.filter((sub): sub is Food => sub !== null);

      router.push({
        pathname: "/meal-details" as any,
        params: {
          meal: meal,
          originalFoods: JSON.stringify(selectedFoods),
          substitutes: JSON.stringify(allSubstitutes),
        },
      });
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro ao buscar substitutos.");
    } finally {
      setIsFinalizing(false);
    }
  };

  if (isLoading || isFinalizing) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.orangePrimary} />
        <Text>{isFinalizing ? "Buscando substitutos..." : "Buscando alimentos..."}</Text>
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
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar alimento"
          placeholderTextColor="#999"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        {searchTerm.length > 0 && (
          <TouchableOpacity onPress={() => setSearchTerm("")}>
            <Text style={styles.clearButton}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView>
        {foodSections.length > 0 ? (
          foodSections.map((section) => (
            <View key={section.title} style={styles.sectionContainer}>
              <Text style={styles.sectionHeader}>{section.title}</Text>

              <ScrollView
                style={styles.scrollableBox}
                nestedScrollEnabled={true}
              >
                {section.data.map((item) => (
                  <FoodItem
                    key={item.id}
                    item={item}
                    isSelected={selectedFoods.some(
                      (food) => food.id === item.id
                    )}
                    onToggle={handleToggleFood}
                  />
                ))}
              </ScrollView>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>
            Nenhum alimento encontrado para estes critérios.
          </Text>
        )}

        {selectedFoods.length > 0 && (
          <TouchableOpacity
            style={styles.finalizeButton}
            onPress={handleFinalize}
          >
            <Text style={styles.finalizeButtonText}>FINALIZAR</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}





