import { Food } from "@/data/foods";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./food-item-style";

interface FoodItemProps {
  item: Food;
  isSelected: boolean;
  onToggle: (item: Food) => void;
}

export default function FoodItem({
  item,
  isSelected,
  onToggle,
}: FoodItemProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.containerSelected]}
      onPress={() => onToggle(item)}
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
  );
}
