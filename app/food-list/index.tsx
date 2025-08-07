import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./food-list.style";
import { Food } from "@/data/foods";

export default function FoodListScreen() {
  const [foodList, setFoodList] = useState<Food[]>([]);
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

    const fetchFoods = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const apiUrl = `${apiUrlBase}/foods`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(
            "Não foi possível buscar os alimentos. Verifique se a API está rodando."
          );
        }

        const data: Food[] = await response.json();
        setFoodList(data);
      } catch (err: any) {
        setError(err.message || "Ocorreu um erro inesperado.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFoods();
  }, []);

  const filteredList = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Carregando...</Text>
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
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar alimento"
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity onPress={() => setSearchTerm("")}>
          <Text style={styles.clearText}>✕</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
                style={styles.containerFood}
              >
                {item.imageUrl ? (
                  <Image source={{ uri: item.imageUrl }} style={styles.image} />
                ) : (
                  <View style={[styles.image, styles.imagePlaceholder]} />
                )}
          
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.category}>{item.type}</Text>
                </View>
          
                <View style={styles.caloriesContainer}>
                  <Text style={styles.caloriesNumber}>{item.kcal}</Text>
                  <Text style={styles.caloriesText}>Kcal</Text>
                  <Text style={styles.portionText}>em 100g</Text>
                </View>
              </TouchableOpacity>
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}