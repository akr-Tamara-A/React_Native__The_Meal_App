import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {useRoute} from '@react-navigation/native';
import MealsList from '../components/MealsList';

const CategoryMealScreen = ({navigation}) => {
  const route = useRoute();
  const selectedCategory = route.params.item.id;
  const displayedMeals = MEALS.filter(meal => {
    return meal.categoryId.indexOf(selectedCategory) >= 0;
  });
  return (
    <View style={styles.screen}>
      <MealsList dataList={displayedMeals} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
