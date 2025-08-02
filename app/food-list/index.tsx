import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from './food-list.style';

type Food = {
  id: string;
  name: string;
  type: string;
  calories: number;
  imageUrl: string;
};

export default function FoodListScreen() {
  const [search, setSearch] = useState('');

  // Simulação de dados (serão substituídos por dados da API futuramente)
  const foodList: Food[] = [
    {
      id: '1',
      name: 'Alimento',
      type: 'Categoria',
      calories: 123,
      imageUrl: 'https://via.placeholder.com/60',
    },
    {
      id: '2',
      name: 'Outro Alimento',
      type: 'Outro Tipo',
      calories: 456,
      imageUrl: 'https://via.placeholder.com/60',
    },
  ];

  const filteredList = foodList.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar alimento"
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity onPress={() => setSearch('')}>
          <Text style={styles.clearText}>✕</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodType}>{item.type}</Text>
            </View>
            <View style={styles.caloriesContainer}>
              <Text style={styles.kcalSmall}>em 100g</Text>
              <Text style={styles.kcalBig}>{item.calories}</Text>
              <Text style={styles.kcalSmall}>Kcal</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

