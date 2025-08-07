import { Food } from "@/data/foods"; // Usando o atalho @/ para consistência
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

  const handleFinalize = () => {
    router.push({
      pathname: "/final-summary",
      params: {
        meal: meal,
        selectedFoods: JSON.stringify(selectedFoods),
      },
    });
  };

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.orangePrimary} />
        <Text>Buscando alimentos...</Text>
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
