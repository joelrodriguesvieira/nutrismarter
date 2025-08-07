import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Food } from "@/data/foods";
import { styles } from "./view-new-diet.style";

export const ViewNewDiet = () => {
  const { meal, substitutes } = useLocalSearchParams<{
    meal: string;
    substitutes: string;
  }>();

  const substituteFoods: Food[] = substitutes ? JSON.parse(substitutes) : [];

  const totalKcal = substituteFoods.reduce(
    (sum, food) => sum + (food.kcal || 0),
    0
  );

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
          <Text style={styles.mealName}>
            {meal || "Nome da Refeição"}
          </Text>

          <Text style={styles.totalKcal}>
            Total: {totalKcal.toFixed(0)} kcal
          </Text>

          <Text style={styles.ingredientsTitle}>Ingredientes</Text>
          {substituteFoods.length > 0 ? (
            substituteFoods.map((food) => (
              <Text key={food.id} style={styles.ingredientItem}>
                - {food.name} ({food.kcal} kcal)
              </Text>
            ))
          ) : (
            <Text style={styles.ingredientItem}>
              Nenhum alimento encontrado.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewNewDiet;
