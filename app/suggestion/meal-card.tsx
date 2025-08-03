import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./suggestion.style";

interface MealCardProps {
  title: string;
  imageSource: ImageSourcePropType;
  onPress: () => void;
}

export default function MealCard({
  title,
  imageSource,
  onPress,
}: MealCardProps) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>{title}</Text>
      </View>
      <Image source={imageSource} style={styles.cardImage} />
    </TouchableOpacity>
  );
}
