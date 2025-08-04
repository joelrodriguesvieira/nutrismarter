import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import MealCard from "./meal-card";
import { styles } from "./suggestion.style";

export default function ChooseMeal() {
  const router = useRouter();

  const handleSelectMeal = (mealTitle: string) => {
    router.push({
      pathname: "/food-types",
      params: { meal: mealTitle },
    });
  };

  const meals = [
    {
      id: "1",
      title: "Café da manhã",
      image: require("@/assets/images/meals/cafe.png"),
    },
    {
      id: "2",
      title: "Almoço",
      image: require("@/assets/images/meals/almoco.png"),
    },
    {
      id: "3",
      title: "Lanche",
      image: require("@/assets/images/meals/lanche.png"),
    },
    {
      id: "4",
      title: "Janta",
      image: require("@/assets/images/meals/janta.png"),
    },
    {
      id: "5",
      title: "Ceia",
      image: require("@/assets/images/meals/ceia.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Qual sua próxima refeição?</Text>
      </View>
      <ScrollView>
        <View style={[styles.container, { padding: 25 }]}>
          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              title={meal.title}
              imageSource={meal.image}
              onPress={() => handleSelectMeal(meal.title)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
